# Create Job - Detailed Workflow

## **SCENARIO 1: JobCode is AUTO-GENERATED (jobCodeGenMethod = 'A' or 'AS')**

### Flow Diagram:
```
User Input:
"Create a new job called Senior Analyst"
        ↓
Agent: Calls find_enterprise_configuration_by_context_code
        ↓
Response: jobCodeGenMethod = 'A' (AUTO-GENERATE)
        ↓
Agent: "Got it! I'll create the job with JobName: 'Senior Analyst'"
        ↓
Display Summary:
┌──────────────────────────────┐
│ Job Creation Summary         │
├──────────────────────────────┤
│ Job Name    : Senior Analyst │
│ Job Code    : Auto-generated │
└──────────────────────────────┘
        ↓
Agent: "Should I proceed?"
        ↓
User: "Yes"
        ↓
Agent: Calls create_job_without_code
       (Only pass JobName)
        ↓
Response: Status 201
├─ JobId: 300100023737471
├─ JobCode: SA-2025-001 (auto-generated)
└─ EffectiveStartDate: 2026-06-10
        ↓
Agent: "✅ Job created successfully!"
"View the job: [deeplink]"
        ↓
END
```

### Dialogue Example:
```
USER: Create a job called Senior Analyst

AGENT: [Checking configuration...]
Let me create the job "Senior Analyst" with an auto-generated job code.

Summary:
┌──────────────────────────────┐
│ Job Creation Summary         │
├──────────────────────────────┤
│ Job Name    : Senior Analyst │
│ Job Code    : Auto-generated │
└──────────────────────────────┘

Proceed?

USER: Yes

AGENT: ✅ Job "Senior Analyst" created successfully!

Job Details:
- Job Name: Senior Analyst
- Job Code: SA-2025-001
- Effective Date: 2026-06-10

View Job: [link to deeplink]

Thank you!
```

---

## **SCENARIO 2: JobCode is MANUAL (jobCodeGenMethod != 'A' and != 'AS')**

### Flow Diagram:
```
User Input:
"Create a job called Product Manager"
        ↓
Agent: Calls find_enterprise_configuration_by_context_code
        ↓
Response: jobCodeGenMethod = 'M' (MANUAL REQUIRED)
        ↓
Agent: "I need a couple of pieces of information..."
"What's the job name?"
        ↓
User: "Product Manager"
        ↓
Agent: "Got it. Now, what's the job code?"
        ↓
User: "PM-2025-001"
        ↓
Display Summary:
┌──────────────────────────────┐
│ Job Creation Summary         │
├──────────────────────────────┤
│ Job Name    : Product Mgr    │
│ Job Code    : PM-2025-001    │
└──────────────────────────────┘
        ↓
Agent: "Should I proceed?"
        ↓
User: "Yes"
        ↓
Agent: Calls create_job
       (Pass JobName AND JobCode)
        ↓
Response: Status 201
├─ JobId: 300100023737472
├─ JobCode: PM-2025-001
└─ EffectiveStartDate: 2026-06-10
        ↓
Agent: "✅ Job created successfully!"
"View the job: [deeplink]"
        ↓
END
```

### Dialogue Example:
```
USER: Create a new job

AGENT: I'll help you create a new job.
What's the job name?

USER: Product Manager

AGENT: Got it. Since job codes are manually entered in your organization,
could you provide the job code?

USER: PM-2025-001

AGENT: Perfect! Here's the summary:

┌──────────────────────────────┐
│ Job Creation Summary         │
├──────────────────────────────┤
│ Job Name    : Product Mgr    │
│ Job Code    : PM-2025-001    │
└──────────────────────────────┘

Should I proceed with creating this job?

USER: Yes

AGENT: ✅ Job "Product Manager" created successfully!

Job Details:
- Job Name: Product Manager
- Job Code: PM-2025-001
- Effective Date: 2026-06-10

View Job: [link to deeplink]

Thank you!
```

---

## **SCENARIO 3: User Tries to Provide JobCode When Not Required**

### Flow Diagram:
```
User Input:
"Create a job called Analyst with code ANALYST-001"
        ↓
Agent: Calls find_enterprise_configuration_by_context_code
        ↓
Response: jobCodeGenMethod = 'A' (AUTO-GENERATE)
        ↓
Agent: "⚠️ I appreciate the job code, but your system has auto-generated 
job codes enabled. I'll create 'Analyst' without needing a code."
        ↓
Display Summary:
┌──────────────────────────────┐
│ Job Creation Summary         │
├──────────────────────────────┤
│ Job Name    : Analyst        │
│ Job Code    : Auto-generated │
└──────────────────────────────┘
        ↓
Agent: "Should I proceed?"
        ↓
User: "Yes"
        ↓
Agent: Calls create_job_without_code
        ↓
Response: Status 201
├─ JobId: 300100023737473
├─ JobCode: AN-2025-005 (auto-generated)
└─ EffectiveStartDate: 2026-06-10
        ↓
Agent: "✅ Job created successfully!"
        ↓
END
```

---

## **SCENARIO 4: User Tries to Provide Additional Attributes During Create**

### Flow Diagram:
```
User Input:
"Create a job called HR Manager, part-time, effective 2026-09-01"
        ↓
Agent: ⚠️ REJECT
"The only permissible input attributes are JobName and JobCode; 
no other job attributes, including Effective Start Date, are allowed as input."
        ↓
Agent: "Let me create the job with JobName: 'HR Manager' only.
Job code will be auto-generated (or manual, depending on configuration)."
        ↓
User: "Okay"
        ↓
[Proceed with Scenario 1 or 2]
        ↓
END
```

---

## **SCENARIO 5: User Doesn't Provide JobName**

### Flow Diagram:
```
User Input:
"Create a job with code HR-2025-001"
        ↓
Agent: "I need at least the job name to create a job.
What would you like to call this job?"
        ↓
User: "HR Manager"
        ↓
[Check if JobCode is needed, then proceed]
        ↓
END
```

---

## **Complete Create Job Decision Tree**

```
START: User wants to create a job
  ↓
Step 1: Call find_enterprise_configuration_by_context_code
  ↓
Step 2: Check jobCodeGenMethod
  ↓
  ├─ If 'A' (Auto-generate)
  │   ├─ Ask: "What's the job name?"
  │   ├─ User provides: JobName
  │   ├─ Reject any JobCode input
  │   ├─ Display summary (JobName only)
  │   ├─ Get approval
  │   ├─ Call create_job_without_code(JobName)
  │   └─ Status 201? → Provide deeplink
  │
  ├─ If 'AS' (Auto-generate with suffix)
  │   └─ [Same as 'A' above]
  │
  └─ If other (Manual required)
      ├─ Ask: "What's the job name?"
      ├─ User provides: JobName
      ├─ Ask: "What's the job code?"
      ├─ User provides: JobCode
      ├─ Display summary (JobName + JobCode)
      ├─ Get approval
      ├─ Call create_job(JobName, JobCode)
      └─ Status 201? → Provide deeplink

Step 3: Handle Response
  ├─ Status 201
  │   └─ Say: "✅ Job created successfully"
  │   └─ Provide deeplink via view_job_link
  │
  ├─ Status 204
  │   └─ Say: "Creation submitted for approval"
  │   └─ Do NOT provide deeplink
  │
  └─ Other Status
      └─ Error handling

END
```

---

## **Key Rules for Create Job**

| Rule | Description |
|------|-------------|
| **Step 1** | Always call find_enterprise_configuration_by_context_code first |
| **Auto-Generate** | If jobCodeGenMethod is 'A' or 'AS', call create_job_without_code |
| **Manual Code** | If jobCodeGenMethod is not 'A' or 'AS', call create_job with both params |
| **JobName** | Always required |
| **JobCode** | Only required if jobCodeGenMethod is NOT 'A' or 'AS' |
| **Other Attributes** | NEVER accept EffectiveStartDate or other attributes during create |
| **Summary** | Always display summary and get explicit approval |
| **Deeplink** | Only provide if Status = 201; use view_job_link function |
| **Effective Date** | Always defaults to TODAY (do not ask user) |
| **No Rework** | Do not ask to change values after summary unless user rejects |

---

## **Input Validation Rules**

### ✅ ACCEPT:
- JobName: Any valid string
- JobCode (if required): Any valid string

### ❌ REJECT:
- Effective Start Date (any date input)
- Active Status
- Full/Part Time
- Regular/Temporary
- Job Function
- Job Family
- Grade
- Any other attributes

**Response:** "The only permissible input attributes are JobName and JobCode; no other job attributes, including Effective Start Date, are allowed as input"

---

## **Response Status Handling**

### Status 201 (Created)
```
✅ Job created successfully!

Job Details:
- Job Name: [name]
- Job Code: [code]
- Effective Date: [today]

View Job: [deeplink from view_job_link]

Thank you!
```

### Status 204 (Accepted, Pending Approval)
```
✅ Creation of the Job has been submitted for approval.

Your job '[JobName]' is pending approval. 
You'll receive a notification once it's approved.
```

### Status 400 (Bad Request)
```
❌ Error: [error message]
Please verify the inputs and try again.
```

### Status 409 (Conflict)
```
❌ A job with this code already exists.
Please use a different job code.
```

---

## **Presentation Notes**

When presenting the "Create Job" feature to clients:

✓ **Highlight:** "Agent checks configuration first to determine if JobCode is needed"
✓ **Highlight:** "Only asks for what's truly required"
✓ **Highlight:** "Prevents invalid attributes (like EffectiveStartDate) during create"
✓ **Highlight:** "Always shows summary and requires approval"
✓ **Highlight:** "Provides instant deeplink to view result"

**Time to Create:** 2-3 minutes (vs 15-18 minutes manually)

---

## **Common Scenarios Summary**

| Scenario | JobName | JobCode? | Calls |
|----------|---------|----------|-------|
| Auto-gen org | ✓ Required | ✗ Ignored | create_job_without_code |
| Manual org | ✓ Required | ✓ Required | create_job |
| User provides both, auto-gen org | ✓ Used | ✗ Rejected | create_job_without_code |
| User provides only code | ✗ Rejected | - | (ask for name) |
| User adds extra attributes | (Reject & retry) | - | (validation) |
| Job code already exists | (Rejected) | - | (error) |

