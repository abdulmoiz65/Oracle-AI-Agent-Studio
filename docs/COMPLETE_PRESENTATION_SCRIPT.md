# Complete Agent Presentation Script - Create Job & View Job Details

## **PRESENTER INTRODUCTION** (1 minute)

---

### **OPENING STATEMENT**

*[Take a moment, make eye contact with the audience]*

"Good morning, everyone. I'm excited to show you how our **Fusion Jobs AI Agent** transforms the way HR teams manage jobs in Oracle Fusion. 

What I'm about to demonstrate is a **conversational interface** — think of it like having an intelligent HR assistant who understands natural language and handles all the complexity behind the scenes.

We're going to walk through two real-world scenarios:
1. **Creating a new job** from scratch
2. **Viewing job details** with complete history

Let me start by creating a job. Watch how simple this is."

---

## **SCENARIO 1: CREATE A JOB**

### **[LIVE DEMO START]**

*[Open the agent interface, position screen so audience can see]*

---

### **STEP 1: User Initiates Job Creation**

**PRESENTER:** "Let's start fresh. I'm going to create a new job in the system."

**USER INPUT:**
```
Create a new job called Senior Product Manager
```

---

### **STEP 2: Agent Responds Intelligently**

**AGENT RESPONSE:**
```
[Thinking...checking enterprise configuration]

Great! I'm creating a new job. Let me verify how your system handles job codes...

I see that job codes are manually entered in your organization.

So I need two pieces of information:
1. Job Name: Senior Product Manager ✓
2. Job Code: What should the job code be?
```

**PRESENTER NOTES:**
*Pause here and explain to audience:*

"Notice what just happened. I provided only the job name. The agent was smart enough to:
- Check your enterprise configuration
- Determine that job codes need to be manually entered
- Ask ONLY for what's missing

If this was a different organization with auto-generated job codes, the agent would NOT ask for a job code. It would know to skip that step. This is intelligent design — no wasted prompts, no unnecessary steps."

---

### **STEP 3: User Provides Job Code**

**USER INPUT:**
```
SPM-2025-001
```

---

### **STEP 4: Agent Confirms Understanding**

**AGENT RESPONSE:**
```
Perfect! So let me confirm what I'm about to create:

┌─────────────────────────────────────────┐
│          JOB CREATION SUMMARY           │
├─────────────────────────────────────────┤
│ Job Name      : Senior Product Manager  │
│ Job Code      : SPM-2025-001            │
│ Effective Date: 2026-06-10 (Today)      │
└─────────────────────────────────────────┘

Is this correct? Should I proceed with creating this job?
```

**PRESENTER NOTES:**
*Point to the summary and explain:*

"This is a critical step. The agent displays a clear summary showing:
- ✓ What will be created
- ✓ The effective date (automatically set to today)
- ✓ Everything in a scannable format

The agent requires explicit approval before submitting. This prevents accidental job creation. It's an approval gate — a safety checkpoint."

---

### **STEP 5: User Approves Creation**

**USER INPUT:**
```
Yes, create the job
```

---

### **STEP 6: Agent Executes and Reports Success**

**AGENT RESPONSE:**
```
✅ JOB CREATED SUCCESSFULLY!

Your new job has been created with the following details:

┌─────────────────────────────────────────┐
│           JOB DETAILS                   │
├─────────────────────────────────────────┤
│ Job Name      : Senior Product Manager  │
│ Job Code      : SPM-2025-001            │
│ Job ID        : 300100023737471         │
│ Status        : Active                  │
│ Effective Date: 2026-06-10              │
└─────────────────────────────────────────┘

View this job: 👉 [Click here to view in Fusion]

Thank you! The job is now ready in the system.
```

**PRESENTER NOTES:**
*Point to the key elements:*

"Notice what the agent provided:
1. ✓ Clear success message
2. ✓ All the details of the created job
3. ✓ A **direct deeplink** to view it in Fusion (no menu navigation needed)
4. ✓ The JobId and system-assigned identifiers

What took 15-18 minutes manually now took less than 3 minutes. And there's zero chance of error because the system enforced validation at each step."

---

### **[END CREATE JOB SCENARIO]**

**PRESENTER:** "That's job creation. Now let me show you something powerful — viewing job details and history."

*[Pause for any quick questions]*

---

---

## **SCENARIO 2: VIEW JOB DETAILS**

### **[TRANSITION]**

**PRESENTER:** "Now that we have created this job, let me show you how we can instantly view its complete details and history. This is where the agent becomes even more useful."

---

### **STEP 1: User Requests Job Details**

**PRESENTER:** "I'm going to ask for the details of the job we just created."

**USER INPUT:**
```
Show me the details of the Senior Product Manager job
```

---

### **STEP 2: Agent Identifies the Job**

**AGENT RESPONSE:**
```
[Searching for the job...]

Perfect! I found the Senior Product Manager job (SPM-2025-001).

Retrieving the current details...
```

**PRESENTER NOTES:**
*Explain to the audience:*

"The agent identified the job by name. It's doing a smart search in the background. If there were multiple jobs with 'Product Manager' in the name, the agent would ask you to clarify which one you want. But since we just created it, it's unique."

---

### **STEP 3: Agent Displays Complete Job Details**

**AGENT RESPONSE:**
```
Here are the complete details for the Senior Product Manager Job:

┌──────────────────────────────────────────────────────────┐
│              SENIOR PRODUCT MANAGER - DETAILS            │
├──────────────────────────────────────────────────────────┤
│ JOB INFORMATION                                          │
├──────────────────────────────────────────────────────────┤
│ Job Name              : Senior Product Manager           │
│ Job Code              : SPM-2025-001                     │
│ Job ID                : 300100023737471                  │
│ Status                : Active                           │
│ Effective Start Date  : 2026-06-10                       │
│                                                          │
│ JOB CLASSIFICATION                                       │
├──────────────────────────────────────────────────────────┤
│ Employment Type       : Full Time                        │
│ Regular/Temporary     : Regular                          │
│ Job Function          : Management                       │
│ Job Family            : Product Management               │
│ Job SubFamily         : Management                       │
│                                                          │
│ JOB SET & LOCATION                                       │
├──────────────────────────────────────────────────────────┤
│ Set                   : Corporate                        │
│ Set Code              : CORP                             │
│                                                          │
│ GRADES ASSIGNED                                          │
├──────────────────────────────────────────────────────────┤
│ Grade 1               : Senior Manager (SM)              │
│ Grade 2               : Principal Manager (PM)           │
│                                                          │
│ ADDITIONAL INFORMATION                                   │
├──────────────────────────────────────────────────────────┤
│ Last Modified Date    : 2026-06-10                       │
│ Last Modified By      : System (Job Creation)            │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**PRESENTER NOTES:**
*Walk through the sections and explain:*

"The agent provides a comprehensive view:
- **Job Information**: Core identification data
- **Job Classification**: Employment type, function, family
- **Job Set & Location**: Organizational structure
- **Grades Assigned**: Compensation bands attached to this job
- **Audit Trail**: Who created it and when

This is all retrieved in real-time from Oracle Fusion. The format is clean and easy to scan — much better than navigating through multiple Fusion screens."

---

### **STEP 4: User Asks About Historical Versions**

**PRESENTER:** "Now let me ask the agent to show me the history of this job. Even though we just created it, let me demonstrate how the history feature works."

**USER INPUT:**
```
Show me the history of this job
```

---

### **STEP 5: Agent Displays Job History**

**AGENT RESPONSE:**
```
[Retrieving job history...]

Here's the complete history of the Senior Product Manager Job:

┌───────────────────────────────────────────────────────────┐
│              JOB HISTORY - ALL VERSIONS                   │
├───────────────────────────────────────────────────────────┤
│ Effective Date │ Status  │ Employment Type │ Created By  │
├───────────────────────────────────────────────────────────┤
│ 2026-06-10     │ Active  │ Full Time       │ System      │
│                │         │ (Current)       │             │
└───────────────────────────────────────────────────────────┘

This job currently has 1 version in the system.

Would you like to:
- View a specific version in detail?
- See what changed between versions?
- View the job as of a different date?
```

**PRESENTER NOTES:**
*Explain the history feature:*

"The history table shows every effective-dated version of this job. Right now there's only one version (today's creation). But imagine this job has been in the system for 2 years. Every time it was modified — name change, grade adjustment, status change — that would create a new version with a new effective date.

This is powerful for compliance. You can see the complete evolution of a job and exactly when changes occurred."

---

### **STEP 6: User Requests a Different Effective Date**

**PRESENTER:** "Let me demonstrate viewing job details as of a future date. Imagine we want to see what this job will look like on September 1, 2026."

**USER INPUT:**
```
Show me the details of this job as of September 1, 2026
```

---

### **STEP 7: Agent Retrieves Historical Snapshot**

**AGENT RESPONSE:**
```
[Retrieving job details for September 1, 2026...]

Here are the details for the Senior Product Manager Job as of 2026-09-01:

┌──────────────────────────────────────────────────────────┐
│        SENIOR PRODUCT MANAGER - AS OF 2026-09-01         │
├──────────────────────────────────────────────────────────┤
│ JOB INFORMATION                                          │
├──────────────────────────────────────────────────────────┤
│ Job Name              : Senior Product Manager           │
│ Job Code              : SPM-2025-001                     │
│ Status                : Active                           │
│ Effective Date        : 2026-06-10                       │
│ Viewed As Of Date     : 2026-09-01                       │
│                                                          │
│ JOB CLASSIFICATION                                       │
├──────────────────────────────────────────────────────────┤
│ Employment Type       : Full Time                        │
│ Regular/Temporary     : Regular                          │
│ Job Function          : Management                       │
│ Job Family            : Product Management               │
│                                                          │
│ GRADES ASSIGNED                                          │
├──────────────────────────────────────────────────────────┤
│ Grade 1               : Senior Manager (SM)              │
│ Grade 2               : Principal Manager (PM)           │
│                                                          │
│ Status                : Currently Active as of Sep 2026  │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**PRESENTER NOTES:**
*Highlight the capability:*

"This is a point-in-time snapshot. The agent retrieved the job as it will appear on September 1st. This is crucial for:
- **Workforce planning**: See future job structures
- **Hiring predictions**: Know what positions will exist when
- **Compliance audits**: Prove what the job looked like on a specific date
- **Historical analysis**: Review past configurations"

---

### **STEP 8: User Asks About Job Modifications**

**PRESENTER:** "Now let me show you another powerful feature. Let's see what would change if we had multiple versions. First, let me ask for a comparison view."

**USER INPUT:**
```
Show me what changed in this job compared to when it was first created
```

---

### **STEP 9: Agent Shows Change History**

**AGENT RESPONSE:**
```
[Analyzing job history...]

Good news! Since this job was just created today, there are no modifications yet.

Current Job State:
┌──────────────────────────────────────────────────────────┐
│ Job Name              : Senior Product Manager           │
│ Job Code              : SPM-2025-001                     │
│ Status                : Active                           │
│ Employment Type       : Full Time                        │
│ Job Function          : Management                       │
│ Grades                : Grade 1, Grade 2                 │
└──────────────────────────────────────────────────────────┘

If you would like to edit this job and see the changes, just ask me to:
- "Change the job to part-time"
- "Update job function to Executive"
- "Modify grades to Senior Manager only"

I'll show you exactly what changes and require your approval.
```

**PRESENTER NOTES:**
*Transition to the next scenario:*

"The change history is empty because we just created it. But imagine HR makes updates to this job over time. Let me show you what happens when you edit a job."

---

### **[END VIEW DETAILS SCENARIO]**

---

---

## **ADDITIONAL DEMONSTRATION - SEARCH JOBS**

### **[OPTIONAL - If you have time in your presentation]**

**PRESENTER:** "Before we wrap up, let me quickly show you the search capability. This is where the agent becomes incredibly powerful."

---

### **STEP 1: User Requests Job Search**

**USER INPUT:**
```
Find all active Product Management jobs
```

---

### **STEP 2: Agent Performs Intelligent Search**

**AGENT RESPONSE:**
```
[Searching for jobs matching your criteria...]

Found 4 active jobs in Product Management:

┌────────────────────────────────────────────────────────┐
│ Job Name                 │ Code     │ Status │ Function │
├────────────────────────────────────────────────────────┤
│ Senior Product Manager   │ SPM-2025 │ Active │ Mgmt     │
│ Product Manager          │ PM-2025  │ Active │ Mgmt     │
│ Associate Product Mgr    │ APM-2025 │ Active │ Mgmt     │
│ Product Coordinator      │ PC-2025  │ Active │ Admin    │
└────────────────────────────────────────────────────────┘

Select a Job to View or Edit.
```

**PRESENTER NOTES:**
*Explain the search:*

"Notice how natural the query is. I said 'Find all active Product Management jobs' — no special syntax, no filters to learn. The agent:
- Understood I wanted active jobs
- Searched by job family (Product Management)
- Returned matching results in seconds
- Formatted them for quick scanning

This would normally require HR to navigate multiple screens and apply filters manually."

---

---

## **CLOSING SUMMARY & KEY TAKEAWAYS**

### **[PRESENTATION WRAP-UP]** (2 minutes)

**PRESENTER:** "Let me summarize what you've just seen."

---

### **Key Capabilities Demonstrated:**

1. **✅ Create Jobs**
   - Natural language input
   - Intelligent JobCode handling
   - Summary for approval
   - Instant deeplink to view
   - **Time saved: ~15 minutes per job**

2. **✅ View Job Details**
   - Complete job information in one view
   - Multiple sections (classification, set, grades)
   - Audit trail information
   - Real-time data from Fusion

3. **✅ View Job History**
   - All historical versions
   - Point-in-time snapshots
   - Change tracking
   - Compliance auditing

4. **✅ Search Jobs**
   - Natural language queries
   - No special syntax needed
   - Intelligent filtering
   - Instant results

---

### **Business Value:**

**Time Savings:**
- Job Creation: 15 min → 2 min (87% faster)
- Job Search: 10 min → 30 sec (95% faster)
- Job Details: 8 min → instant (100% faster)

**Quality Improvements:**
- Error Rate: 8-10% → <1% (90% reduction)
- Approval Gates: Prevents mistakes
- Audit Trails: Complete compliance record
- Data Accuracy: Real-time Fusion integration

**User Benefits:**
- No technical training required
- Natural language interface
- Fewer system screens to navigate
- Faster time-to-hire
- Better job data quality

---

### **Implementation:**

- **Timeline:** 4-5 weeks
- **Training:** 15 minutes for HR users
- **Integration:** Seamless with existing Fusion
- **Support:** Ongoing technical support
- **ROI:** Positive by Year 2

---

### **Call to Action:**

**PRESENTER:** 
"What we've demonstrated today is a transformation in how HR manages jobs. Instead of:
- Navigating multiple screens
- Manually entering dates
- Worrying about errors
- Searching through complex filters

Your HR team will simply have a conversation with an intelligent assistant.

**I have three questions for you:**

1. **Where do you see the biggest pain point in your current job management process?**
2. **How many job operations does your HR team do monthly?**
3. **Are you interested in a pilot program with a small group of HR users?**

Let's discuss how we can bring this to your organization."

---

---

## **HANDLING COMMON QUESTIONS**

### **Q1: "How does it handle edge cases?"**

**ANSWER:**
"Great question. The agent has built-in safeguards:
- It validates dates against job history
- It checks for pending transactions before allowing edits
- It requires explicit user approval before creating jobs
- It displays summaries so users can verify before submission
- It integrates with Fusion's security and audit trail

Essentially, it makes mistakes nearly impossible."

---

### **Q2: "What if someone deletes a job accidentally?"**

**ANSWER:**
"We don't allow direct deletion through the agent. But here's what you get:
- Complete version history (can see every change)
- Point-in-time snapshots (can verify any date)
- Full audit trail (know exactly who did what)
- For actual deletion, users go through Fusion's native UI with additional approvals

This is a safety feature, not a limitation."

---

### **Q3: "Can we integrate it with our recruitment system?"**

**ANSWER:**
"Absolutely. The agent works through Oracle Fusion REST APIs. We can integrate with:
- Oracle Recruiting (direct integration)
- iRecruitment
- Third-party ATS systems (through API connectors)
- Custom HR systems

That's part of our roadmap, and we can discuss integration requirements during the pilot."

---

### **Q4: "What about data security?"**

**ANSWER:**
"Security is built in at every level:
- Uses Oracle Fusion authentication (your existing credentials)
- Inherits role-based access control (users can only do what they're permitted)
- Encrypted communication channels
- Complete audit trail of all actions
- SOC 2 Type II compliance
- Regular security audits

It's as secure as Fusion itself."

---

### **Q5: "How much does it cost?"**

**ANSWER:**
"We offer flexible licensing:
- Per-user model: $5,000/user/year
- Volume discount for 50+ users: $4,200/user/year
- Enterprise: Custom pricing for 500+ users

Includes unlimited job operations, all updates, and 24/7 support.

ROI is typically achieved by Year 2 when accounting for time and error reduction."

---

---

## **PRESENTER NOTES - KEY POINTS TO EMPHASIZE**

✅ **Natural Language:** The agent understands human communication, not commands or syntax.

✅ **Intelligent Automation:** It checks configuration, determines next steps, asks only what's needed.

✅ **Safety First:** Multiple approval gates, validation checks, audit trails built-in.

✅ **Time Savings:** 85-90% faster than manual processes.

✅ **Error Prevention:** Sub-1% error rate vs. 8-10% manually.

✅ **Zero Training:** HR users need only 15 minutes (they're using natural language, not learning a system).

✅ **Complete Integration:** Works seamlessly with Oracle Fusion, no workarounds.

✅ **Compliance Ready:** Full audit trail, point-in-time snapshots, change tracking.

---

## **DELIVERY TIPS**

### **Tone:**
- Professional but conversational
- Confident (you know the product)
- Consultative (listen to their needs)
- Evidence-based (use numbers from the demo)

### **Pacing:**
- Create Job: 3-4 minutes
- View Details: 3-4 minutes
- Search (optional): 2 minutes
- Q&A: 5-10 minutes
- Closing: 2 minutes
- **Total: 15-25 minutes**

### **Body Language:**
- Stand to the side of the screen (don't block it)
- Point to key elements as you explain
- Make eye contact with audience, not the screen
- Pause after key statements to let them sink in
- Use hand gestures to emphasize points

### **Demo Best Practices:**
- Have backup demo data ready
- Practice the exact same flow 3 times before presenting
- Know what will happen at each step
- Slow down when showing input/output (let audience read)
- Be comfortable with silence (let them absorb information)
- Have a backup video ready (in case live demo fails)

---

## **FOLLOW-UP ACTIONS**

After this presentation, send:

1. **ROI Calculator** - Customized for their job volumes
2. **Case Study** - From similar organization
3. **Pilot Proposal** - 5-10 user pilot scope
4. **Technical Specification** - How it integrates with Fusion
5. **Training Materials** - What HR users will receive
6. **Support SLA** - Response times and coverage
7. **Contract Template** - Ready for legal review

---

**END OF PRESENTATION SCRIPT**

---

## **QUICK REFERENCE - DIALOGUE LINES TO MEMORIZE**

| Situation | What to Say |
|-----------|------------|
| Opening | "I'm excited to show you how our Fusion Jobs AI Agent transforms how HR manages jobs." |
| Configuration check | "The agent is smart enough to check your configuration and only ask for what's truly needed." |
| Summary display | "Notice the approval gate — the agent requires explicit confirmation before creating the job." |
| Success moment | "What took 15-18 minutes manually now took less than 3 minutes, with zero errors." |
| History feature | "This is powerful for compliance — you can see the complete evolution of a job." |
| Close | "Your HR team will simply have a conversation with an intelligent assistant instead of navigating multiple screens." |

