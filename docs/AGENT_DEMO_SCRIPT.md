# Fusion Jobs Agent - Demo Script

## Demo Flow (5-10 minutes)

---

## **SCENE 1: Initial Greeting** (30 seconds)

**User:**
```
Hi, I'm new here. What can you help me with?
```

**Agent:**
```
Hello! 👋 I'm your Fusion Applications AI Assistant, here to help you manage Jobs 
in Oracle HCM. I can help you:

✓ Create new jobs
✓ Search for existing jobs
✓ View job details and history
✓ Edit job information
✓ Compare job versions

What would you like to do today?
```

---

## **SCENE 2: Create a New Job** (1.5 minutes)

**User:**
```
I want to create a new job.
```

**Agent:**
```
Great! I'll help you create a new job. What's the job name?
```

**User:**
```
Senior Product Manager
```

**Agent:**
```
[BACKEND: Calls find_enterprise_configuration_by_context_code with ContextCode="ORA_PER_WS_CONFIGURATION"]
[RESPONSE: jobCodeGenMethod = "M" (manual required)]

Got it! Since JobCode needs to be manually entered, could you please provide a JobCode?
```

**User:**
```
SPM-2025-001
```

**Agent:**
```
Perfect! Here's a summary before I create the job:

┌─────────────────────────────────────┐
│ Job Creation Summary                │
├─────────────────────────────────────┤
│ Job Name    : Senior Product Mgr    │
│ Job Code    : SPM-2025-001          │
└─────────────────────────────────────┘

Should I proceed with creating this job?
```

**User:**
```
Yes, go ahead.
```

**Agent:**
```
[BACKEND: Calls create_job with JobName="Senior Product Manager", JobCode="SPM-2025-001"]
[RESPONSE: Status 201, JobId=300100023737471, EffectiveStartDate=2026-06-10]

✅ Job created successfully!

You can view the job details here: 
👉 View Senior Product Manager Job

Thank you for creating the job!
```

---

## **SCENE 3: Search for Jobs** (1.5 minutes)

**User:**
```
Can you find jobs with HR function?
```

**Agent:**
```
[BACKEND: Builds filterQuery with JobFunctionCode="HR"]
[BACKEND: Calls search_all_jobs with filterQuery and limit=25]
[RESPONSE: Returns 8 matching jobs]

Found 8 jobs with HR Function:

┌────────────────────────────────────────────────────────┐
│ Job Name         │ Job Code    │ Status  │ Job Function │
├────────────────────────────────────────────────────────┤
│ HR Manager       │ HRM-001     │ Active  │ HR           │
│ HR Specialist    │ HRS-002     │ Active  │ HR           │
│ Recruiter        │ REC-003     │ Active  │ HR           │
│ HR Coordinator   │ HRC-004     │ Inactive│ HR           │
│ Payroll Officer  │ PAY-005     │ Active  │ HR           │
│ HR Director      │ HRD-006     │ Active  │ HR           │
│ Analyst HR       │ AHR-007     │ Active  │ HR           │
│ HR Analyst       │ HRA-008     │ Active  │ HR           │
└────────────────────────────────────────────────────────┘

Select a Job to View or Edit.
```

**User:**
```
Show me HR Manager details
```

**Agent:**
```
[BACKEND: Calls find_by_job_id with JobId (from HR Manager row), effectiveDate=2026-06-10]
[RESPONSE: Full job details]

Here are the details for the HR Manager Job:

┌─────────────────────────────────────────────────────────┐
│ HR Manager Job Details                                  │
├─────────────────────────────────────────────────────────┤
│ Job Name          : HR Manager                          │
│ Job Code          : HRM-001                             │
│ Status            : Active                              │
│ Job Family        : HR                                  │
│ Job Function      : HR                                  │
│ Full/Part Time    : Full Time                           │
│ Regular/Temp      : Regular                             │
│ Effective Date    : 2026-01-15                          │
│ Current Grades    : Grade 5, Grade 6                    │
└─────────────────────────────────────────────────────────┘
```

---

## **SCENE 4: Edit a Job** (2 minutes)

**User:**
```
Update the HR Manager job to part-time effective September 1, 2026.
```

**Agent:**
```
I'll help you update the HR Manager job. Let me make the changes:

[BACKEND: Identifies JobId for HR Manager]
[BACKEND: Calls get_conflicts_for_object_objectId]
[RESPONSE: pendingTxnsPresent = false ✓]

[BACKEND: Calls findHistory to validate date]
[RESPONSE: firstEffectiveStartDate = 2026-01-15]
✓ Date 2026-09-01 is valid

[BACKEND: Calls find_by_job_id with effectiveDate=2026-09-01]
[RESPONSE: Current job record at that date]

[BACKEND: Job function lookup confirms Part Time = "PART_TIME"]

Summary of Proposed Changes for 'HR Manager' Job:

┌────────────────────────────────────────────────┐
│ Field           │ Old Value   │ New Value      │
├────────────────────────────────────────────────┤
│ Full/Part Time  │ Full Time   │ Part Time      │
│ Effective Date  │ 2026-01-15  │ 2026-09-01     │
└────────────────────────────────────────────────┘

Do you want to submit these changes?
```

**User:**
```
Yes, submit.
```

**Agent:**
```
[BACKEND: Constructs editPayload and gradeDeletePayload]
[BACKEND: Calls edit_job with updates]
[RESPONSE: Status 200, JobId present in response]

✅ Job updated successfully!

You can view the updated job details here:
👉 View Updated HR Manager Job
```

---

## **SCENE 5: View Job History** (1 minute)

**User:**
```
Show me the history of the HR Manager job.
```

**Agent:**
```
[BACKEND: Calls findHistory with JobId for HR Manager]
[RESPONSE: Historical records]

History of 'HR Manager' Job:

┌──────────────────────────────────────────────┐
│ Effective Date   │ Status  │ Full/Part Time   │
├──────────────────────────────────────────────┤
│ 2026-01-15       │ Active  │ Full Time        │
│ 2026-05-01       │ Active  │ Full Time        │
│ 2026-09-01       │ Active  │ Part Time        │
└──────────────────────────────────────────────┘

Select a version to view, or I can show you the modifications between versions.
```

**User:**
```
Show me what changed between the first and current version.
```

**Agent:**
```
[BACKEND: Calls findChanges for 2026-09-01 version]
[RESPONSE: Modified attributes]

Modifications to 'HR Manager' Job (2026-09-01):

┌────────────────────────────────────────────┐
│ Attribute       │ Previous Value  │ Change │
├────────────────────────────────────────────┤
│ Full/Part Time  │ Full Time       │ ➜      │
│                 │ Part Time       │        │
│ Effective Date  │ 2026-01-15      │ ➜      │
│                 │ 2026-09-01      │        │
└────────────────────────────────────────────┘
```

---

## **SCENE 6: Search & Filter** (45 seconds)

**User:**
```
Find all active jobs in the Finance department.
```

**Agent:**
```
[BACKEND: Builds filterQuery with Status="Active", JobFamilyName="Finance"]
[BACKEND: Calls search_all_jobs]
[RESPONSE: 12 matching jobs]

Found 12 active jobs in Finance:

┌──────────────────────────────────────────────────┐
│ Job Name              │ Job Code  │ Job Family   │
├──────────────────────────────────────────────────┤
│ Finance Manager       │ FM-001    │ Finance      │
│ Financial Analyst     │ FA-002    │ Finance      │
│ Accountant            │ AC-003    │ Finance      │
│ ...                   │ ...       │ ...          │
└──────────────────────────────────────────────────┘

Select a Job to View or Edit.
```

---

## **SCENE 7: Error Handling** (30 seconds)

**User:**
```
Create a job called Analyst with code ANALYST-001 and start date as 2027-01-01.
```

**Agent:**
```
I appreciate your input! However, I need to clarify:

The only permissible input attributes are JobName and JobCode; no other job 
attributes, including Effective Start Date, are allowed as input.

Let me create the job with:
  • Job Name: Analyst
  • Job Code: ANALYST-001

The effective start date will be set to today automatically. Is that okay?
```

---

## **SCENE 8: Demo Closing** (30 seconds)

**User:**
```
That's helpful! Can you do anything else?
```

**Agent:**
```
I'm specialized in Job management. Here's what I can help with:

✓ Create new jobs (with auto or manual job codes)
✓ Search jobs by keyword or filters
✓ View job details at any date
✓ Edit job attributes (name, status, grade, family, etc.)
✓ View complete job history
✓ Compare modifications between versions
✓ Show your current user profile

I cannot delete jobs directly, but I can show you the history so you can delete 
specific versions through the application.

What else would you like to do?
```

---

## **Quick Demo Talking Points**

### **Highlight 1: Intelligence in Job Code Handling**
- Agent automatically determines if JobCode is auto-generated or requires manual input
- Simplifies user experience based on configuration

### **Highlight 2: Comprehensive Search**
- Supports both keyword search ("Find Admin") and filtered search ("Find jobs with Finance Family")
- Returns clean, scannable results

### **Highlight 3: Edit Workflow Safety**
- Validates effective dates against job history
- Checks for pending transactions
- Shows summary before submission
- Requires explicit approval

### **Highlight 4: Rich History & Auditing**
- Complete version history with effective dates
- See what changed between versions
- Track changes over date ranges

### **Highlight 5: User-Friendly**
- Natural language understanding
- Flexible date input (converts automatically)
- Clear confirmations and feedback
- No technical jargon

---

## **Demo Script - Text Chat Format (Copy-Paste Ready)**

```
USER: Hi, can you help me manage jobs?

AGENT: Hello! I'm your Fusion Jobs AI Assistant. I help with creating, searching, 
viewing, and editing jobs. What would you like to do?

USER: Create a new job called Database Administrator

AGENT: Great! What's the job code? [or] Let me check if job code is auto-generated...

USER: DBA-2025-001

AGENT: Perfect! Summary:
- Job Name: Database Administrator  
- Job Code: DBA-2025-001
Proceed?

USER: Yes

AGENT: ✅ Job created! View it here: [link]

USER: Find me all HR jobs

AGENT: Found 5 HR jobs:
1. HR Manager (HRM-001) - Active
2. HR Specialist (HRS-002) - Active  
3. Recruiter (REC-003) - Active
Select one to view details.

USER: Show HR Manager details

AGENT: Here are the details for HR Manager:
[displays full job information]

USER: Change it to part-time effective Sept 1, 2026

AGENT: Summary of changes:
- Full/Part Time: Full Time → Part Time
Approve?

USER: Yes

AGENT: ✅ Updated! View here: [link]

USER: Show history of HR Manager

AGENT: Version history:
1. 2026-01-15 - Full Time
2. 2026-09-01 - Part Time
[select version or compare]
```

---

## **Key Metrics to Highlight**

| Metric | Value |
|--------|-------|
| **Supported Job Operations** | 7 major workflows |
| **Editable Attributes** | 9 attributes |
| **Searchable Filters** | 10+ attributes |
| **Response Time** | Real-time with backend calls |
| **Error Handling** | Comprehensive validation |
| **User Approval Gates** | 2 mandatory checkpoints |
| **Date Format Support** | All common formats (auto-converted) |
| **History Tracking** | Complete version history |

---

## **Notes for Demo Moderator**

✓ **Pre-Demo Setup:**
  - Ensure backend services are running
  - Have sample job data available
  - Test deeplinks beforehand

✓ **Demo Flow:**
  - Start with create (shows JobCode handling)
  - Then search (shows intelligence)
  - Then edit (shows validation & safety)
  - Finally history (shows audit trail)

✓ **Common Questions:**
  - "Can I delete jobs?" → No, view history and delete manually
  - "Can I create jobs in the past?" → No, only current date
  - "Can I search by grade?" → No, but can add/change grades in edit

✓ **Time Allocation:**
  - Create: 1.5 min
  - Search: 1.5 min
  - Edit: 2 min
  - History: 1 min
  - Q&A: 2 min
  - **Total: ~8 minutes**
