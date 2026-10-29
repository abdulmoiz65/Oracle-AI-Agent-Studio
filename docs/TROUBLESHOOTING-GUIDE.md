# Troubleshooting Guide: Oracle HCM REST API Errors

## Error: LOV Primary Location Binding Validation Failure

### Error Message
```
Applying List binding LOV_PrimaryLocationId with given set of values leads to no matching row 
for a row of type: RequisitionPublicVO, key oracle.jbo.Key[300000295462771]
```

### What This Means
Oracle HCM's JBO (Java Business Objects) framework enforces **organization-level location mappings**. This error occurs when:
- The `PrimaryLocationId` you're using exists in the system
- BUT it is **not assigned to the `OrganizationId`** you specified in your POST request

### Root Cause
Locations in Oracle HCM are context-filtered by Organization. The same location ID may be valid for Organization A but not for Organization B.

### How to Diagnose

**Step 1: Verify Location Exists**
```bash
GET /hcmRestApi/resources/11.13.18.05/recruitingJobRequisitions
```
Check GET response to see if your `PrimaryLocationId` appears in any existing requisitions.

**Step 2: Verify Organization-Location Pairing**
Cross-reference your intended `OrganizationId` with successful requisitions using the same `PrimaryLocationId`. Look for records where both match your target values.

**Example from Real Data:**
```
❌ FAILS: PrimaryLocationId: 100000310218802 + OrganizationId: 300000047013705
✅ WORKS: PrimaryLocationId: 100000310218794 + OrganizationId: 300000047013705 (Requisition 757)
```

### Solution: Three Approaches

#### **Approach 1: Use Valid Location for Your Organization (RECOMMENDED)**
Find a location that IS mapped to your organization.

**Before (FAILS):**
```json
{
  "PrimaryLocationId": 100000310218802,
  "OrganizationId": 300000047013705
}
```

**After (WORKS):**
```json
{
  "PrimaryLocationId": 100000310218794,
  "OrganizationId": 300000047013705
}
```

**How to Find Valid Locations:**
1. GET existing requisitions with your target `OrganizationId`
2. Note the `PrimaryLocationId` values used in those requisitions
3. Use one of those values in your new requisition

#### **Approach 2: Change Organization to Match Your Location**
If you must use a specific location, switch to an organization where it's mapped.

**Before (FAILS):**
```json
{
  "PrimaryLocationId": 100000310218802,
  "OrganizationId": 300000047013705
}
```

**After (WORKS):**
```json
{
  "PrimaryLocationId": 100000310218802,
  "OrganizationId": 300000047013715
}
```

**How to Find Valid Organizations:**
1. Search GET response for your target `PrimaryLocationId`
2. Note the `OrganizationId` values paired with it
3. Use one of those organizations

#### **Approach 3: Request Location Assignment (Admin)**
Contact your Oracle HCM administrator to assign your desired location to your target organization.

### Prevention Checklist

- [ ] Before POSTing, GET all requisitions and check for location-organization pairs matching your target
- [ ] When changing location, verify new organization supports it
- [ ] When changing organization, verify new org has at least one valid location
- [ ] Document valid location-organization mappings for your implementation
- [ ] Consider maintaining a reference list of valid location IDs per organization

### API Endpoints Reference

**Get All Requisitions (to verify location-org mappings):**
```
GET /hcmRestApi/resources/11.13.18.05/recruitingJobRequisitions
Authorization: Bearer {ORACLE_HCM_TOKEN}
```

**Create New Requisition (use corrected payload):**
```
POST /hcmRestApi/resources/11.13.18.05/recruitingJobRequisitions
Authorization: Bearer {ORACLE_HCM_TOKEN}
Content-Type: application/json
```

### Common Field Reference

| Field | Type | Notes |
|---|---|---|
| PrimaryLocationId | Number | Must be valid for specified OrganizationId |
| OrganizationId | Number | Defines location mapping context |
| RequisitionNumber | String | Unique identifier in your organization |
| HiringManagerId | Number | Manager Oracle user ID |
| StateId | Number | Requisition workflow state (27 = Draft) |
| PhaseId | Number | Recruitment phase |

### Example Working Payloads

**Payload for OrganizationId 300000047013705:**
```json
{
  "RequisitionNumber": "989",
  "Title": "Software Engineer",
  "RecruitingType": "ORA_PROFESSIONAL",
  "HiringManagerId": 300000049043637,
  "RecruiterId": 300000049306574,
  "StateId": 27,
  "PrimaryLocationId": 100000310218794,
  "PhaseId": 5,
  "UnlimitedOpenings": "Y",
  "BusinessJustification": "ORA_NEW_POSITION",
  "DisplayInOrgChart": "Y",
  "OrganizationId": 300000047013705,
  "ProfileId": 300000162994956,
  "JobFunction": "MANAG",
  "BudgetCurrency": "USD",
  "EmployeeReferralBonus": 2000,
  "MinimumSalary": 10000,
  "MaximumSalary": 175000,
  "PipelineRequisition": "N"
}
```

**Payload for OrganizationId 300000047013715:**
```json
{
  "RequisitionNumber": "990",
  "Title": "Software Engineer",
  "RecruitingType": "ORA_PROFESSIONAL",
  "HiringManagerId": 300000049043637,
  "RecruiterId": 300000049306574,
  "StateId": 27,
  "PrimaryLocationId": 100000310218802,
  "PhaseId": 5,
  "UnlimitedOpenings": "Y",
  "BusinessJustification": "ORA_NEW_POSITION",
  "DisplayInOrgChart": "Y",
  "OrganizationId": 300000047013715,
  "ProfileId": 300000162994956,
  "JobFunction": "MANAG",
  "BudgetCurrency": "USD",
  "EmployeeReferralBonus": 2000,
  "MinimumSalary": 10000,
  "MaximumSalary": 175000,
  "PipelineRequisition": "N"
}
```

### Technical Details

- **Framework**: Oracle JBO (Java Business Objects)
- **Validation Type**: LOV (List of Values) binding validation
- **Filtering Context**: Organization-based location mapping
- **Error Class**: RequisitionPublicVO view object
- **Why Silent Failure**: Oracle returns generic "no matching row" rather than explicit "location not available for org" message

### Related Issues
- Organization filtering on Locations LOV
- Requisition state transitions (StateId validation)
- Profile permissions (ProfileId must be accessible to user)

---
*Last Updated: 2026-06-09*
