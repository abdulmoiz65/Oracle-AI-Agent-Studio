# Fusion Applications AI Assistant - Job Agent

## Overview

This agent helps HR users manage Jobs in Oracle Fusion Applications. It supports creating new jobs, searching for jobs, viewing job details, editing existing jobs, viewing job history, and comparing job versions.

---

## Agent Capabilities

### 1. **Create a New Job**
- **Input Required:**
  - JobName (mandatory)
  - JobCode (only if jobCodeGenMethod is NOT 'A' or 'AS')
- **Process:**
  - Retrieves configuration to determine if JobCode is required
  - Displays summary of values for approval
  - Creates job with user-approved values
  - Provides deeplink to view newly created job
- **Response:**
  - Status 201: Provides view_job_link deeplink
  - Status 204: Informs user creation is pending approval

### 2. **Search for Jobs**
- **Search Types:**
  - Keyword-based search (e.g., "Search Job Admin")
  - Filter-based search using attributes like:
    - Job Family
    - Job Function
    - Set Code/Name
    - Status (Active/Inactive)
    - Benchmark Job Flag
    - Legal Employer
    - Scheduling Group
- **Features:**
  - Returns up to 25 results
  - Displays results in table format
  - Prompts user to select a job for viewing or editing

### 3. **View Job Details**
- **Features:**
  - View current job details
  - View job details as of a specific date
  - View historical versions of a job
  - Compare modifications between versions
- **Process:**
  - User specifies JobId or searches for job
  - Optionally provides effective date
  - Returns detailed job information

### 4. **Edit/Update Job Details**
- **Editable Attributes:**
  - Job Name
  - Job Code (if permitted by configuration)
  - Effective Start Date
  - Active Status (Active/Inactive)
  - Full/Part Time
  - Regular/Temporary
  - Job Function
  - Job Family & Job SubFamily
  - Grade
- **Edit Process:**
  - Collects required details and effective date
  - Checks for pending transactions
  - Validates effective date against job history
  - Shows summary of changes
  - Requires explicit user approval
  - Submits changes and provides confirmation

### 5. **View Job History**
- **Features:**
  - Display all historical versions of a job
  - View oldest (first effective date) version
  - View specific version by selecting from history
  - View modifications between versions

### 6. **Compare Job Versions**
- **Comparison Types:**
  - Between current and previous version
  - Between specific date range
- **Output:**
  - Shows all modified attributes
  - Displays old and new values

### 7. **Manage User Session**
- **Features:**
  - Retrieve current logged-in user's display name

---

## Test Cases

### Test Case 1: Create a Job with Auto-Generated JobCode
**Scenario:** Create a job when JobCode is auto-generated
```
User Input: "Create a new job called 'Senior Software Engineer'"
Expected Flow:
1. System retrieves jobCodeGenMethod = 'A' (auto-generate)
2. Agent asks for JobName only
3. User provides: JobName = "Senior Software Engineer"
4. Agent displays summary for approval
5. User approves
6. Agent calls create_job_without_code
7. Returns success with view_job_link
Status: ✓ PASS
```

### Test Case 2: Create a Job with Manual JobCode
**Scenario:** Create a job requiring manual JobCode entry
```
User Input: "Create a new job"
Expected Flow:
1. System retrieves jobCodeGenMethod = 'M' (manual required)
2. Agent asks for JobName
3. User provides: JobName = "HR Manager"
4. Agent asks for JobCode
5. User provides: JobCode = "HR-MGR-001"
6. Agent displays summary for approval
7. User approves
8. Agent calls create_job with JobName and JobCode
9. Returns success with view_job_link
Status: ✓ PASS
```

### Test Case 3: Search Jobs by Keyword
**Scenario:** Search for jobs with specific keyword
```
User Input: "Search Job Admin"
Expected Flow:
1. Agent calls search_jobs with keyword="Admin", limit=25
2. Returns table with matching jobs
3. Agent prompts: "Select a Job to View or Edit"
4. User selects a job
Status: ✓ PASS
```

### Test Case 4: Search Jobs with Filters
**Scenario:** Search jobs by Job Function filter
```
User Input: "Find Jobs having Job Function as Admin"
Expected Flow:
1. Agent builds filterQuery with JobFunctionCode="Admin"
2. Agent calls search_all_jobs with filter
3. Returns filtered results in table
4. Agent prompts: "Select a Job to View or Edit"
Status: ✓ PASS
```

### Test Case 5: View Job Details as of Specific Date
**Scenario:** View historical job details
```
User Input: "Show me Job details as of January 15, 2024"
Expected Flow:
1. Agent searches for Job
2. User selects job
3. Agent converts date to YYYY-MM-DD format: "2024-01-15"
4. Agent calls find_by_job_id with effectiveDate="2024-01-15"
5. Returns job details as of that date
Status: ✓ PASS
```

### Test Case 6: Edit Job Name
**Scenario:** Update job name with effective date
```
User Input: "Change job name from 'Admin' to 'Administrator' effective 2025-09-01"
Expected Flow:
1. Agent identifies JobId by searching "Admin"
2. Agent retrieves effective date: 2025-09-01
3. Agent checks for pending transactions
4. Agent calls findHistory to validate effective date
5. Agent retrieves current job record
6. Agent displays summary (Old: "Admin", New: "Administrator")
7. User approves
8. Agent constructs editPayload
9. Agent calls edit_job
10. Returns success with view_job_link
Status: ✓ PASS
```

### Test Case 7: Change Job Grade
**Scenario:** Replace existing grade with new grade
```
User Input: "Change the grade for Admin job from Grade-1 to Grade-2 effective 2025-10-01"
Expected Flow:
1. Agent identifies JobId for "Admin" job
2. Agent retrieves effective date: 2025-10-01
3. Agent checks for pending transactions
4. Agent retrieves current job (with validGrades)
5. Shows current grade and asks user to confirm deletion
6. User confirms Grade-1 to be removed
7. Agent searches for Grade-2 using find_grades_by_word
8. User selects Grade-2 from results
9. Agent displays summary with old grade and new grade
10. User approves
11. Agent constructs editPayload with new grade and gradeDeletePayload
12. Agent calls edit_job
13. Returns success
Status: ✓ PASS
```

### Test Case 8: View Job History
**Scenario:** Display all historical versions of a job
```
User Input: "Show me the history of Admin job"
Expected Flow:
1. Agent searches for "Admin" job
2. Agent calls findHistory with JobId
3. Returns table of historical versions with EffectiveStartDates
4. User selects a version
5. Agent calls find_by_job_id with selected EffectiveStartDate
6. Displays job details for that version
Status: ✓ PASS
```

### Test Case 9: Compare Job Versions
**Scenario:** Show modifications between two versions
```
User Input: "Show me the modification done between current version and previous version of Admin job"
Expected Flow:
1. Agent searches for "Admin" job
2. Agent retrieves current job details
3. Agent calls findChanges with current EffectiveStartDate
4. Displays modifications in table format
Status: ✓ PASS
```

### Test Case 10: Compare Job Versions in Date Range
**Scenario:** Show all modifications in a date range
```
User Input: "Show me the modification done between 01-January 2024 to 01-January 2025 of Job Admin"
Expected Flow:
1. Agent parses dates: RangeStart="2024-01-01", RangeEnd="2025-01-01"
2. Agent searches for "Admin" job
3. Agent calls findHistory
4. Identifies EffectiveStartDates within range
5. For each date, calls findChanges
6. Aggregates and displays all modifications
Status: ✓ PASS
```

### Test Case 11: Delete Job Record
**Scenario:** Show job history for deletion
```
User Input: "Delete the Admin job"
Expected Flow:
1. Agent searches for "Admin" job
2. Agent calls findHistory
3. If multiple records exist:
   - Provides view_job_link with message about reviewing history
4. If single record exists:
   - Displays: "There are no records of the job <JobName> that can be deleted"
   - Provides view_job_link
5. User must manually delete via deeplink
Status: ✓ PASS
```

### Test Case 12: Invalid Input - JobCode with Auto-Generation
**Scenario:** User tries to provide JobCode when auto-generated
```
User Input: "Create job named 'Analyst' with code 'ANALYST-001'"
Expected Flow:
1. Agent retrieves jobCodeGenMethod = 'A' (auto-generate)
2. Agent rejects JobCode input
3. User provides only JobName
Status: ✓ PASS
```

### Test Case 13: Invalid Date for Job Edit
**Scenario:** User provides date before job creation date
```
User Input: "Change job name to 'New Admin' effective 2020-01-01" (when job created 2023-01-01)
Expected Flow:
1. Agent retrieves job history
2. Identifies first effective date: 2023-01-01
3. Validates user date is before first date
4. Rejects: "EffectiveStartDate is invalid... provide date not earlier than 2023-01-01"
5. Waits for valid date input
Status: ✓ PASS
```

### Test Case 14: Pending Transaction Block
**Scenario:** Job has pending changes
```
User Input: "Edit Admin job"
Expected Flow:
1. Agent identifies JobId
2. Agent calls get_conflicts_for_object_objectId
3. Response: pendingTxnsPresent = true
4. Agent informs: "A transaction is pending approval and editing is not allowed"
5. Terminates process
Status: ✓ PASS
```

### Test Case 15: Search with Unsupported Filter
**Scenario:** User requests filter attribute not in scope
```
User Input: "Find jobs with Grade = Grade-1"
Expected Flow:
1. Agent identifies unsupported filter attribute
2. Agent declines: "Searching by grades is not supported. Grade updates are allowed during job edits."
3. Suggests supported filters
Status: ✓ PASS
```

---

## Example Prompts & Queries

### Create Job Prompts
```
1. "Create a new job called 'Data Analyst'"
2. "I want to create a job named 'Senior Manager' with code 'SM-2025-001'"
3. "Create job: Financial Analyst"
4. "New job - Project Manager"
```

### Search Job Prompts
```
1. "Search Job Admin"
2. "Find Job Nurse"
3. "Look for jobs with Job Function as Manager"
4. "Find all active jobs in HR set"
5. "Search jobs with status Active and job family Finance"
6. "Show me jobs from Legal Employer = 'ACME Corp'"
7. "Find benchmark jobs"
8. "Search part-time jobs"
```

### View Job Details Prompts
```
1. "Show me the Admin job details"
2. "View job details as of January 15, 2025"
3. "Show job record as of 2024-12-31"
4. "What are the details for job code 'HR-001'?"
5. "Display the current version of Analyst job"
```

### Edit Job Prompts
```
1. "Change the Admin job name to 'Administrator' effective 2025-09-01"
2. "Update job to Full Time effective September 1, 2025"
3. "Change Active Status to Inactive for job 'Contractor' effective 2025-10-15"
4. "Replace Grade 1 with Grade 2 for Admin job effective 2025-09-01"
5. "Change job function from 'MANAG' to 'EXEC' effective 2025-09-01"
6. "Add Grade 3 to the Manager job effective 2025-09-01"
7. "Change Job Family from Admin to Finance effective 2025-09-01"
```

### History & Comparison Prompts
```
1. "Show me the history of Admin job"
2. "Display the first effective date version of Manager job"
3. "What's the oldest version of the Analyst job?"
4. "Show modifications between current and previous version of Admin"
5. "Show me the modifications done between 01-Jan-2024 to 01-Jan-2025 of Admin job"
6. "What changed in the Manager job between 2024-01-01 and 2024-12-31?"
```

### Delete Job Prompts
```
1. "Delete the Admin job"
2. "Remove the Contractor job"
3. "I want to delete the Temporary Admin job"
```

### Other Prompts
```
1. "What's my user name?"
2. "Show my details"
3. "Who am I logged in as?"
```

---

## Workflow Diagrams

### Create Job Workflow
```
START
  ↓
Get jobCodeGenMethod
  ↓
  ├─ If 'A' or 'AS': Ask JobName only
  └─ Else: Ask JobName and JobCode
  ↓
Collect inputs
  ↓
Display summary for approval
  ↓
User approves?
  ├─ No → Ask for new values (LOOP)
  └─ Yes
      ↓
      ├─ If 'A'/'AS': Call create_job_without_code
      └─ Else: Call create_job
      ↓
      ├─ Status 201: Provide view_job_link
      └─ Status 204: Inform pending approval
      ↓
END
```

### Edit Job Workflow
```
START
  ↓
Ask for details to edit and effective date
  ↓
Validate effective date (prompt if missing)
  ↓
Search/Identify JobId
  ↓
Check pending transactions
  ├─ Yes → TERMINATE
  └─ No
      ↓
      Call findHistory → Validate effective date
      ├─ Invalid → Ask for new date (LOOP)
      └─ Valid
          ↓
          Retrieve current job record
          ↓
          Extract & resolve attribute values
          ↓
          Display summary of changes
          ↓
          User approves?
          ├─ No → Ask for new values (LOOP)
          └─ Yes
              ↓
              Build editPayload & gradeDeletePayload
              ↓
              Call edit_job
              ↓
              ├─ JobId in response: Provide view_job_link
              └─ No JobId: Display success message
              ↓
              END
```

### Search Job Workflow
```
START
  ↓
User provides search criteria
  ↓
Has keyword?
  ├─ Yes: Build filterQuery with keyword
  │        Call search_jobs
  └─ No: Has filters?
         ├─ Yes: Build filterQuery
         │        Call search_all_jobs
         └─ No: INVALID INPUT
  ↓
Display results in table (max 25)
  ↓
Prompt: "Select a Job to View or Edit"
  ↓
User selects job
  ↓
END
```

---

## Key Business Rules

| Rule | Description |
|------|-------------|
| **JobCode Generation** | Auto-generated if jobCodeGenMethod is 'A' or 'AS'; otherwise manual input required |
| **Editable Attributes** | Only 9 attributes can be edited; others are read-only |
| **Grade Management** | Grades can be added, replaced, or removed; searching by grade is not supported |
| **Date Formats** | User input dates converted to YYYY-MM-DD format internally |
| **Pending Transactions** | Jobs with pending changes cannot be edited |
| **Active Status Values** | Only "Active" (A) or "Inactive" (I) allowed |
| **RegularTemporary Values** | Only "Regular" (R) or "Temporary" (T) allowed |
| **FullPartTime Values** | Only "Full Time" (FULL_TIME) or "Part Time" (PART_TIME) allowed |
| **Job Deletion** | Cannot delete jobs; only view history and delete via deeplink |
| **Multiple Job Edits** | Support sequential edits; clear history between jobs |
| **Effective Date Validation** | Cannot be earlier than job's first effective date |

---

## Supported Filter Attributes

| Attribute | Object Property | Type |
|-----------|-----------------|------|
| Set | SetId, SetCode, SetName | term/terms |
| Job Family | JobFamilyId, JobFamilyName | term/terms |
| Status | Status, StatusCode | term/terms |
| Benchmark Job | BenchmarkJobFlagCode, BenchmarkJobFlag | Y/N or Yes/No |
| Job Function | JobFunctionCode, JobFunction | term/terms |
| Scheduling Group | SchedulingGroupCode, SchedulingGroup | term/terms |
| Legal Employer | LegalEmployerId, LegalEmployer | term/terms |
| Name | Name | term |
| Code | Code | term |
| Effective Date | EffectiveDate | value (auto-set to today) |

---

## Response Status Codes

| Status | Meaning | Action |
|--------|---------|--------|
| **201** | Resource Created | Provide view_job_link deeplink to user |
| **204** | No Content (Pending) | Inform user creation is pending approval |
| **200** | Success | Operation completed successfully |
| **400** | Bad Request | Invalid input provided |
| **404** | Not Found | Job/resource not found |
| **409** | Conflict | Pending transaction blocks operation |

---

## Tool Reference

| Tool | Purpose |
|------|---------|
| `find_enterprise_configuration_by_context_code` | Retrieve jobCodeGenMethod |
| `search_jobs` | Search with keyword and filters |
| `search_all_jobs` | Search with filters only (no keyword) |
| `find_by_job_id` | Retrieve job details for specific date |
| `create_job` | Create job with JobName and JobCode |
| `create_job_without_code` | Create job with JobName only |
| `edit_job` | Submit job edit changes |
| `get_conflicts_for_object_objectId` | Check for pending transactions |
| `findHistory` | Get historical versions of job |
| `findChanges` | Show modifications between versions |
| `find_job_families_by_word` | Search job families |
| `find_by_job_family_id` | Get job subfamilies |
| `find_by_lookup_type` | Get lookup values (Job Function, etc.) |
| `find_grades_by_word` | Search grades |
| `view_job_link` | Generate deeplink to view job |
| `GetUserSession` | Get current user display name |

---

## Usage Restrictions

### ✓ Supported
- Create, search, view, edit jobs
- View job history and versions
- Compare job modifications
- Add/replace/remove grades
- Filter search by supported attributes
- Generate deeplinks to job details

### ✗ Not Supported
- Delete jobs (only view history)
- Modify Position objects
- Update user information
- Search by grade attribute
- Edit read-only attributes (Set, etc.)
- Create jobs with future effective dates
- Bulk operations
- API-level data access

---

## Sample Output Formats

### Create Job Success
```
Thank you for creating the job "Senior Software Engineer"! 

You can view the job details at: [View Job Link]
```

### Edit Job Summary
```
Summary of Proposed Changes for 'Admin' Job:

| Field | Old Value | New Value |
|-------|-----------|-----------|
| Job Name | Admin | Administrator |
| Full/Part Time | Full Time | Part Time |
| Active Status | Active | Inactive |

Do you want to submit these changes?
```

### Search Results
```
Found 5 jobs matching 'Admin':

| Job Name | Job Code | Status | Job Function |
|----------|----------|--------|--------------|
| Administrator | ADM-001 | Active | Manager |
| Admin Manager | ADM-002 | Active | Manager |
| Admin Assistant | ADM-003 | Inactive | Admin |
| ...

Select a Job to View or Edit.
```

---

## Troubleshooting Guide

| Issue | Cause | Resolution |
|-------|-------|-----------|
| Cannot create job | JobCode required but not provided | Provide both JobName and JobCode |
| Cannot edit job | Pending transaction exists | Wait for transaction approval |
| Invalid effective date | Date before job creation | Use date after job's first effective date |
| No search results | Invalid filter attributes | Use only supported filter attributes |
| Cannot find job | Job doesn't exist | Verify job name/code or search with different criteria |
| Grade not found | Incorrect grade name/code | Search for available grades using exact terms |

---

## Contact & Support

For assistance with job-related operations in Oracle Fusion Applications, refer to:
- Oracle HCM REST API Endpoints documentation
- Workforce Structures configuration guides
- Job Agent system prompt specifications
