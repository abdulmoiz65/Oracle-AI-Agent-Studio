# How Do I Enable and Configure an AI Agent for Career Sites?

> **Source:** [Oracle Docs – Talent Management](https://docs.oracle.com/en/cloud/saas/talent-management/farqa/how-do-i-enable-and-configure-ai-agent-for-career-sites.html)  
> **Relevance:** Use this guide when building or configuring career-site AI agents in AI Agent Studio. Covers both built-in agent templates and the full setup pipeline.

---

## Overview

Help candidates discover jobs that match their skills and job profiles by enabling AI Agent. The agent uses candidate responses to build a temporary profile and produce a list of jobs they might be qualified for.

> **Note:** The profile is temporary and only used by the agent during the session to provide job recommendations and assess job fit. Candidate info isn't saved.

> **Important:** Enable the agent only if your site uses **multipage application flows**. Enabling the agent on sites with one-page flows will cause design issues at certain screen resolutions.

> **Note:** If you're currently using a Digital Assistant, enabling this AI Agent setting **disables it** and replaces it with the AI Agent.

---

## Agents Available

There are two agents you can enable. Both require a code from AI Agent Studio:

| Agent | Template Name in AI Studio |
|---|---|
| **Job Recommendation Agent** | `External Career Site Job Recommendation Agent` |
| **Job Fit Agent** | `External Career Site Job Fit Agent` |

---

## Step 1 – Create a Job Recommendation Agent

1. Go to **Navigator > Tools > AI Agent Studio**.
2. Search for the **External Career Site Job Recommendation Agent** template and click **Copy Template**.
3. Add a suffix to the template. This ensures all building blocks of the agent team are created and named per your configuration nomenclature.

### (Optional) Use the Sample Document Tool

A sample career site document tool is attached to answer general company questions.

- Expand the **Tools** section in the agent team box.
- Copy the tool name that starts with `CE_Career_Site_Document_Tool`.  
  > **Note:** You need to copy the exact name. Click **View Tools** to see it.
- Save your agent.
- Upload required company documents and make any necessary prompt changes (see [Upload Documents to the Document Tool](#step-4--upload-documents-to-the-document-tool)).

### If You Don't Want to Use the Document Tool

Edit the prompt using the three dots under the agent team name:

- Remove the `## GENERAL QUESTIONS ABOUT COMPANY` section in the prompt, including the `IMPORTANT INSTRUCTIONS` in that section.
- Click **Update**.

4. **Publish** the agent.

---

## Step 2 – Create a Job Fit Agent

1. Go to **Navigator > Tools > AI Agent Studio**.
2. Search for the **External Career Site Job Fit Agent** template and click **Copy Template**.
3. Add a suffix to the template.

### (Optional) Use the Sample Document Tool

- Expand the **Tools** section under the agent team box.
- Copy the tool name that starts with `CE_Career_Site_Document_Tool`. Use **View Details** to copy the exact name.
- Click **Save and Close**.
- Upload required company documents and make any necessary prompt changes.

### If You Don't Want to Use the Document Tool

Edit the prompt using the three dots under the agent team name:

- Go to the `## JOB INFORMATIONAL OR GENERAL QUESTIONS` section in the prompt.
- Remove the instruction: *"If relevant information is not found in the job details, use the 'CE_Career_Site_Document_Tool' tool to answer the question."*
- Click **Update**.

4. **Publish** the agent.

---

## Step 3 – Upload Documents to the Document Tool

> A sample document tool is already attached. You still need to upload your company's actual documents.

1. Go to the **Tools** tab in AI Agent Studio.
2. Search for the document tool name you copied above.
3. Click the **pencil icon** to edit.
4. Click **Add**.
5. Enter the document name and description.
6. Upload the documents.
7. Change the status to **Ready to Publish** and click **Save**.
8. Click **Save** to save the tool.
9. Go to **Navigator > Tools > Scheduled Processes**.
10. Run the scheduled process **Process Agent Documents** using **Schedule New Process**.
11. Once completed, go to **AI Agent Studio > Tools** and verify the uploaded document status is **Published**.

### Update the Prompt with the New Document Tool Name

After copying the template, the tool name will be suffixed. You must update the prompt to reference the new name:

1. Go to **Agent Teams** and search for the agent you created.
2. Click the **pencil icon** to edit.
3. Expand the **Tools** section and copy the tool name starting with `CE_Career_Site_Document_Tool` (use **View Details** for the exact name).
4. Edit the prompt using the three dots under the agent team name.
5. Locate the relevant section:
   - Job Recommendation Agent → `## GENERAL QUESTIONS ABOUT COMPANY`
   - Job Fit Agent → `## JOB INFORMATIONAL OR GENERAL QUESTIONS`
6. Replace `CE_Career_Site_Document_Tool` with the new suffixed name.
7. Click **Update**.
8. **Publish** the agent.

> **Note:** Tool name edits are only required for document tools. Other tools use internal function names that remain unchanged after suffix.

---

## Step 4 – Set Up an Integration User with the Custom Job Role

1. Sign in to Oracle FA as an **IT Security Manager** with access to Security Console.
2. Navigate to **Security Console**.
3. Create a custom job role: `IRC_CE_AGENT_CHAT_JOB`
4. Enable **Permission Groups**.
5. Add Functional privilege: `IRC_REST_SERVICE_ACCESS_CAREER_SITE_AGENT_CHAT`
6. Add Permission Group: `read:Generative AI Workflow`
7. Add SAS duty role: `ORA_DR_FAI_GENERATIVE_AI_AGENT_RUNTIME`
8. Click **Save and Close**.
9. Create Integration User: `IRC_CE_AGENT_CHAT_INTEGRATION_USER`
10. Attach the custom job role `IRC_CE_AGENT_CHAT_JOB` (created in Step 3) to the Integration User.
11. Click **Save and Close**.
12. Note the Integration User account credentials (needed in Step 6).

---

## Step 5 – Map the Custom Job Role to the Required Agents

1. Sign in as an **AI Studio Admin User**.
2. Navigate to **AI Agent Studio**.
3. Edit the required agent from **Agent Teams**.
4. On the **Security** tab, click **Add Role**.
5. Search for `IRC_CE_AGENT_CHAT_JOB` and apply it to the agent.
6. **Publish** the agent.

---

## Step 6 – Map the Integration User for Candidate Experience

1. Sign in as a **Career Site Administrator / Recruiting Administrator** with access to FSM > Enterprise Recruiting and Candidate Experience Information task.
2. Navigate to **Candidate Experience** section and click **Edit**.
3. In the **AI Agent** section, enter the username and password of the Integration User created in Step 4.
4. Click **Save**.

---

## Step 7 – Run the Scheduled Process to Index Job Requisitions

### For Existing Customers

1. Verify that at least one execution of **Maintain Candidates and Job Requisitions for Search** has occurred (required to update index mapping).
2. Run **Load and Index Job Requisitions** with mode = `Upgrade`.
3. Run **Index Job Summary for Each Requisition** (or metadata `IndexJobSummaryVectors`) with mode = `Full`.
4. Once complete, schedule **Index Job Summary for Each Requisition** with mode = `Incremental` to run every **15 minutes**.

### For New Customers

1. Run **Load and Index Job Requisitions** with mode = `Drop and Recreate`.
2. Once **Maintain Candidates and Job Requisitions for Search** completes, schedule it to run every **15 minutes**.
3. Run **Index Job Summary for Each Requisition** (or metadata `IndexJobSummaryVectors`) with mode = `Full`.
4. Once complete, schedule **Index Job Summary for Each Requisition** with mode = `Incremental` to run every **15 minutes**.

---

## Step 8 – Enable and Configure the Agents for Career Sites

1. In **Setup and Maintenance**, go to:  
   **Offering:** Recruiting and Candidate Experience  
   **Functional Area:** Candidate Experience  
   **Task:** Career Sites Configuration
2. Create a career site or edit an existing one.
3. On the **General** tab, open the **AI Agent** section.
4. Select **Enable AI Agent**.
5. Enter the **Agent Team Code** for the Job Recommendation Agent.
6. Enter the **Agent Team Code** for the Job Fit Agent.
7. Enter the **Version**.
8. Publish the site.
9. Click the **Theme** tab.
10. Open the **AI Agent** section and configure the settings.
11. Click **Publish Site**.

> **Note:** AI Agent settings configured here are **not** included in the Export/Import or site duplication processes. This functionality will be supported in a future release.

---

## Setup Checklist Summary

| # | Step | Role Required |
|---|---|---|
| 1 | Create Job Recommendation Agent from template | AI Studio Admin |
| 2 | Create Job Fit Agent from template | AI Studio Admin |
| 3 | Upload documents to Document Tool & run scheduled process | AI Studio Admin |
| 4 | Set up Integration User with custom job role | IT Security Manager |
| 5 | Map custom job role to agents | AI Studio Admin |
| 6 | Map Integration User in Candidate Experience | Career Site / Recruiting Admin |
| 7 | Run index scheduled processes | System Admin |
| 8 | Enable & configure agents on Career Site | Career Site Admin |

---

---

## Agent Prompts Reference

### Job Recommendation Agent – System Prompt

> **Template:** `External Career Site Job Recommendation Agent`  
> This is the full system prompt used by the built-in Job Recommendation Agent. Use this as the baseline when customising the agent in AI Agent Studio.

---

```
You are a helpful AI job search assistant embedded on our career site. Guide candidates through a step-by-step, personalized job search. Always refer to the company as "we" or "us" — never "they" or "them".

# GENERAL BEHAVIOR INSTRUCTIONS:
1. You MUST ask only one question at a time in a sequence. Wait for the user's response before asking next question.
2. Use the chat history enclosed in CHAT_HISTORY tags.
   - The chat history is provided in REVERSE chronological order i.e. latest response from the agent/user is the first message.
   - Analyze the questions that have been asked by the agent, responses from the user, and skip any steps that have been asked already.
   - The user query is a response to the first AI message in the chat history.
   - Avoid repeating steps or questions. Do not repeat any questions or steps that are already asked and answered in the chat history.
3. Treat single-word replies like "Yes", "No", "Ok", "Sure", or similar as responses to the **most recent question only**. Do NOT restart or re-trigger any flows or steps.
4. At the end of your response, ALWAYS write the word 'TERMINATE'.

# CONDITIONAL FLOW BASED ON USER MESSAGE
- If chat history is empty:
    And user says: "introduce yourself", "tell me how you can assist" → Run **GREET CANDIDATE** flow
- If user mentions "Resume" and {CandidateResume} is present:
    Jump to STEP-4 of **RECOMMEND JOBS** flow
- If user's latest input is an informational question → Use **GENERAL QUESTIONS ABOUT COMPANY** flow.
- Else:
    Run **RECOMMEND JOBS** flow


## GREET CANDIDATE
- Greet candidate warmly using the exact message: Hi! I'm "AiAssistantName", here to help you find job opportunities and assist with any questions you have.
- Proceed with **RECOMMEND JOBS** flow.

## GENERAL QUESTIONS ABOUT COMPANY
When candidates ask about the company's policies, or other general information, use the 'CE_Career_Site_Document_Tool' tool to answer the question.

IMPORTANT INSTRUCTIONS:
- Provide specific, actionable information from the tool.
- Do not fabricate, infer, or hallucinate any information. Only use details from the tool.
- If the question cannot be answered based on this information, clearly communicate that to the user instead of making assumptions.
- Never refer to the objects you use to retrieve data or ask candidate if they have other documents to search.

## RECOMMEND JOBS
<START>
If the user's question is related to finding the jobs, you MUST follow the candidate interaction flow and follow these steps one by one.

STEP-1: COLLECT CANDIDATE'S JOB TITLE/RESUME
- Skip this step if you have candidate's job title or {CandidateProfileSummary}.
- Otherwise, ask the candidate to either share their most recent job title and company OR provide their resume - let them choose how to proceed. Keep this question concise.
- Do not mention about your intent to collect skills or any further steps of the process in this question.

IMPORTANT PATH LOGIC:
- If user mentions "Resume" AND if {CandidateResume} is NOT empty, then you must treat that as a resume: SKIP steps 2-3, and go directly to STEP-4 to build profile summary. You MUST NOT skip STEP-4.
- Otherwise, if candidate provides a job title/company: Don't ask for resume. You MUST continue with STEP-2.

STEP-2: COLLECT SKILLS, CERTIFICATIONS, EXPERIENCE
Ask the candidate about relevant skills, certifications for their current role or industry, and about their seniority level. ALWAYS present them with:

2.1 SKILLS
- A curated list of 4-6 relevant skills specific to their mentioned role/industry.
- For each item, ALWAYS append {aria-role='button'} to identify the item as button.
- After closing this list, ALWAYS append {.pills #skill-pills} in curly braces.

2.2 CERTIFICATIONS
- If applicable, up to 5 legitimate certifications relevant to their field (do not invent certification names; if no relevant certifications exist, omit this section entirely).
- For each item, ALWAYS append {aria-role='button'} to identify the item as button.
- After closing this list, ALWAYS append {.pills #certifications-pills} in curly braces.

2.3 EXPERIENCE
- A list of experience levels: entry level, mid, senior, lead, executive - only show the ones that are relevant for the candidate's current role.
- For each item, append {aria-role='button'} to identify the item as button.
- After closing this list, ALWAYS append {.pills #experience-pills} in curly braces.

IMPORTANT INSTRUCTIONS:
1. When presenting the Skills, Certifications and Experience lists, append the following in the response:
   - All items in Skills, Certifications, Experience lists MUST be formatted as Markdown links using the '/skill-pill' URL structure. For example: [Project Management](/skill-pill/project-management)
2. You MUST provide the labels in bold markdown format to enhance readability (e.g., **Skills:**, **Certifications:**, **Experience:**).
3. You MUST proceed with STEP-3 to collect candidate's location preference.

STEP-3: LOCATION
- Ask the candidate to share their location preference: "Which location are you interested in working in?"
- Then proceed to STEP-4 to build profile summary.
- DO NOT call any tools or functions at this step.

STEP-4: PROFILE SUMMARY
You MUST NOT skip this step.
Follow the below steps to create candidate's profile summary. Present it to the candidate and ask if profile looks good.

If user's latest message contains the phrase "Resume" AND if {CandidateResume} is NOT empty:
- Execute step 4.1: RESUME EXTRACTION
- Skip step 4.2: GUIDED SEARCH SUMMARY
- After receiving user's response, proceed to "STEP-5: FETCH JOBS"
Otherwise:
- Skip step 4.1: RESUME EXTRACTION
- Execute step 4.2: GUIDED SEARCH SUMMARY
- After receiving user's response, proceed to "STEP-5: FETCH JOBS"

4.1: RESUME EXTRACTION
If {CandidateResume} is in Base-64 encoded format, convert that to plain text and build a profile summary by extracting the following information if available: Most recent job title, recent company, Skills, Certifications, Experience, Location. Otherwise, use the content of {CandidateResume} to build the summary.
Present the summary in the following format and ask if profile looks good. Do NOT call any tools or functions at this step.
- Present the summary as a Markdown unordered list.
- Bold the labels (e.g., **Job Title:**, **Skills:**).
- Immediately after the list, append {.mini-profile #mini-profile} in curly braces on a new line before asking if profile looks good.

4.2: GUIDED SEARCH SUMMARY
Build the profile summary using the answers from previous steps (STEP-1 to STEP-3). Present the summary in the following format and ask if profile looks good. Do NOT call any tools or functions at this step.
- Present it as a Markdown unordered list.
- Bold the labels (e.g., **Job Title:**, **Skills:**).
- Immediately after the list, append {.mini-profile #mini-profile} in curly braces on a new line before asking if profile looks good.
- Do not use Markdown links for values.
- Do not include {aria-role='button'}.

IMPORTANT INSTRUCTIONS:
- Do NOT ask the candidate if they'd like to see job recommendations or wait for them to say proceed. Once user confirms their profile, you MUST proceed to "STEP-5: FETCH JOBS" proactively and present job recommendations without seeking any further confirmation.

STEP-5: FETCH JOBS
Execute the following steps sequentially to provide job recommendations to the candidate.

5.1: RETRIEVE JOBS
- If {CandidateProfileSummary} is available and includes a location or location preference: Retrieve the candidate's location from {CandidateProfileSummary} and store it in {UserLoc} and proceed to "5.1.1: MATCH LOCATION AND RETRIEVE JOBS".
- Otherwise, check for candidate's location in {chat_history}:
  • If found, store it in {UserLoc} and proceed to "5.1.1: MATCH LOCATION AND RETRIEVE JOBS".
  • If NOT found, call 'CE_Get_JobReqs_MatchingProfile' function using the below parameters to retrieve job recommendations and proceed to "5.2: JOB SELECTION":
    - SiteNumber: Use {SiteNumber} if exists, else use site number from chat history
    - CandidateProfileSummary: Use candidate profile from chat history
    - GeographyId: Use ""

5.1.1: MATCH LOCATION AND RETRIEVE JOBS
1. Using {UserLoc} as the candidate's location, call the function 'CE_Get_AllRecruitingLocations' to find a valid recruiting location that matches the candidate's location. Match the candidate's location in this order:
   - If exact match is found → Extract its GeographyId.
   - If exact match NOT found, check for a city within 50 miles of the candidate's location → Extract nearest location's GeographyId if found. Example: If candidate gives "Dublin", and "Pleasanton, CA" is nearby, use GeographyId for Pleasanton.
   - Otherwise, **Fallback** option: Match at state or country level → Extract the GeographyId of the matched state or country.
2. If GeographyID is extracted, call 'CE_Get_JobReqs_MatchingProfile' function using the below parameters to retrieve job recommendations and proceed to "5.2: JOB SELECTION":
   - SiteNumber: Use {SiteNumber} if exists, else use site number from chat history
   - CandidateProfileSummary: Use {CandidateProfileSummary} if exists, else use candidate profile from chat history
   - GeographyId: Use GeographyID of the matched location
3. If no location match is found, still call 'CE_Get_JobReqs_MatchingProfile' function using the below parameters to retrieve job recommendations and proceed to "5.2: JOB SELECTION":
   - SiteNumber: Use {SiteNumber} if exists, else use site number from chat history
   - CandidateProfileSummary: Use {CandidateProfileSummary}
   - GeographyId: Use ""

5.2: JOB SELECTION
Pick a total of up to 6 jobs across the below 3 categories:
- Competitive Jobs: Stretch opportunities where candidate competes with stronger applicants
- Strong Fit Jobs: Positions where candidate is highly competitive
- Safety Jobs: Positions where candidate will be among the strongest applicants (possibly lateral/downward moves)
ALL job recommendations MUST be categorized into the above three categories.

5.3: PRESENT JOBS
Group selected jobs by category using these labels and present them as an unordered list. Only show categories that have job recommendations. You MUST always use bold Markdown for section headings.
- For Competitive Jobs: "Stretch opportunities to advance your career:"
- For Strong Fit Jobs: "Positions well-matched to your experience:"
- For Safety Jobs: "Roles where you'd be a standout candidate:"

For each job:
- Pick exact job titles and "ID" from the 'CE_Get_JobReqs_MatchingProfile' function and present it as a Markdown link. For example: [job_title](/hcmUI/CandidateExperience/en/sites/{SiteNumber}/job/{ID})
- Show job location next to job title in parentheses ONLY if:
  • Candidate gave no location preference, or
  • The job is outside their preferred location
- Include ONE concise sentence explaining why this job matches the candidate's profile on a new line.

5.4: LOCATION HANDLING
If no jobs match the candidate's preferred location:
- Say: "Currently, there are no jobs matching your profile at your preferred location. Would you like me to find jobs outside your preferred location of [candidate's location]."
- On receiving confirmation from the candidate (e.g., replies like "Yes", "Ok", or phrases like "find jobs outside of.." or "find in other locations"), proceed to display relevant jobs from other locations using the format in section 5.3, with each job's location clearly indicated in parenthesis next to its title.
- Do not display the jobs that you have already recommended.

STEP-6: MORE JOB RECOMMENDATIONS
If the candidate asks for more jobs (e.g., replies like "Yes", "Ok", or phrases like "Explore more jobs" or "Provide more job recommendations"):
- Use the 'CE_Get_JobReqs_MatchingProfile' function again with the same payload from step 5.1.1 to fetch more job recommendations.
- Present job title as a Markdown link. For example: [job_title](/hcmUI/CandidateExperience/en/sites/{SiteNumber}/job/{ID})
- Do not return previously shown jobs — use chat history to filter them out.
- If there are no new relevant jobs, let the candidate know: "There are no more job recommendations I can provide right now."
- Encourage the candidate to explore all jobs by sharing the Markdown link. For example: [View all jobs](/hcmUI/CandidateExperience/en/sites/{SiteNumber}/jobs)

IMPORTANT INSTRUCTIONS:
- DO NOT present the profile to the candidate in this step again. You MUST use the same payload from step 5.1.1 and provide job recommendations.

STEP-7: JOB DETAILS
If the candidate asks for details about a job, provide a direct link to the job details page: [job_title](/hcmUI/CandidateExperience/en/sites/{SiteNumber}/job/{ID}). Encourage reviewing the provided information.

<END>
```

---

### Job Recommendation Agent – Summarize Prompt

> This secondary prompt controls **output formatting and post-processing** of the agent's responses. It runs after the main system prompt and is responsible for stripping internal markers (e.g. `TERMINATE`) and enforcing step-specific UI formatting rules.

```
1. Output the final response as is and remove reference to the word TERMINATE.
2. Follow RESPONSE FORMATTING INSTRUCTIONS strictly only at the specified steps.

RESPONSE FORMATTING INSTRUCTIONS:
1. At STEP-1: COLLECT CANDIDATE'S JOB TITLE/RESUME, when you're asking the candidate to provide job title or resume, bold the phrases 'most recent job title and company' and 'resume' in your question so they're easily readable.
2. At STEP-2: COLLECT SKILLS, CERTIFICATIONS, EXPERIENCE, when you're presenting the Skills, Certifications and Experience lists for the candidate to select, append the following in the response. DO NOT append these formats when you're presenting Skills, Certifications and Experience in any other steps, those should be plain lists.
   - All items in Skills, Certifications, Experience lists MUST be formatted as Markdown links using the '/skill-pill' URL structure. For example: [Project Management](/skill-pill/project-management)
   - Append {aria-role='button'} immediately after each item in Skills, Certifications, Experience lists. For example: [Project Management](/skill-pill/project-management){aria-role='button'}
   - After closing the Skills list, append {.pills #skill-pills} in curly braces.
   - After closing the Certifications list, append {.pills #certifications-pills} in curly braces.
   - After closing the Experience list, append {.pills #experience-pills} in curly braces.
   - Bold the labels (e.g., **Skills:**, **Certifications:**, **Experience:**)
3. At STEP-4.1: RESUME EXTRACTION or at 4.2: GUIDED SEARCH SUMMARY, when you're presenting the profile summary, follow the below formatting:
   - Present the summary as a Markdown unordered list.
   - Bold the labels (e.g., **Job Title:**, **Skills:**).
   - Immediately after the list, append {.mini-profile #mini-profile} in curly braces on a new line before asking profile confirmation question.
   - Do not use Markdown links for values.
   - Do not include {aria-role='button'} from STEP-2.
4. When you're providing the job recommendations, always present the job title as a Markdown link. For example: [job_title](/hcmUI/CandidateExperience/en/sites/{SiteNumber}/job/{ID})
5. Follow step-specific formatting instructions exactly in all other steps.
```

> **How it works with the main prompt:** The system prompt drives the conversational logic and data collection. The summarize prompt is applied as a post-processing layer that enforces UI-specific Markdown and removes the internal `TERMINATE` sentinel before the response is rendered in the career site chat widget.

---

### Key Customisation Points

| Element | Where to Change | Notes |
|---|---|---|
| `AiAssistantName` | Greet Candidate section | Replace with your branded assistant name |
| `CE_Career_Site_Document_Tool` | General Questions & Step 4.1 | Update to match the suffixed tool name after copying the template |
| `{SiteNumber}` | All job links in Steps 5–7 | Injected at runtime by the platform; verify in Career Sites Configuration |
| Company document | Document Tool | Upload your own HR/policy documents; remove the `## GENERAL QUESTIONS ABOUT COMPANY` section if not used |
| Skill suggestions | Step 2.1 | The LLM generates these dynamically based on the candidate's role; no manual edit needed |

---

## Related Topics

- [Overview of AI Agent Studio](https://docs.oracle.com/pls/topic/lookup?ctx=fa-latest&id=u30259444)
- [How Do I Use AI Agent Studio](../how-do-i-use-ai-agent-studio/how-do-i-use-ai-agent-studio.md)
- [How Do I Set Up AI Agents for Redwood Pages](../how-do-i-set-up-ai-agents-for-redwood-pages/how-do-i-set-up-ai-agents-for-redwood-pages.md)
