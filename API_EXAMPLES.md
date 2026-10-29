# Job Requisitions API Examples

## POST - Create Job Requisition

```bash
curl -X POST \
  https://fa-esll-dev43-saasfademo1.ds-fa.oraclepdemos.com/hcmRestApi/resources/11.13.18.05/recruitingJobRequisitions \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "RequisitionNumber": "REQ-2024-001",
    "JobTitle": "Software Engineer",
    "Description": "Senior Java Developer",
    "NumberOfPositions": 2,
    "HiringOrgCode": "ORG001",
    "JobFamily": "IT",
    "Status": "OPEN"
  }'
```

## GET - Fetch Job Requisition by ID

```bash
curl -X GET \
  https://fa-esll-dev43-saasfademo1.ds-fa.oraclepdemos.com/hcmRestApi/resources/11.13.18.05/recruitingJobRequisitions/{RequisitionId} \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## GET - Fetch All Job Requisitions

```bash
curl -X GET \
  https://fa-esll-dev43-saasfademo1.ds-fa.oraclepdemos.com/hcmRestApi/resources/11.13.18.05/recruitingJobRequisitions \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Usage in Node.js

```javascript
const api = require('./src/api/recruitingJobRequisitionsApi');

// Create
const newReq = await api.createJobRequisition({
  RequisitionNumber: "REQ-2024-001",
  JobTitle: "Software Engineer"
});

// Get one
const requisition = await api.getJobRequisition(requisitionId);

// Get all
const allReqs = await api.getAllJobRequisitions();
```
