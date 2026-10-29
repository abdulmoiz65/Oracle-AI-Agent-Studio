# How Do I Enable and Configure the Autonomous Sourcing Assistant?

> **Source:** [Oracle Fusion Cloud Procurement 26A What's New – AI Agent: Autonomous Sourcing Assistant](https://docs.oracle.com/en/cloud/saas/readiness/scm/26a/proc26a/26A-procurement-wn-f41767.htm)
> **Relevance:** Use this guide when enabling the seeded Procurement AI Agent Studio templates that automate the sourcing (negotiation) process end-to-end, from eligible requisition lines through award and purchase document creation.

---

## Overview

Use AI Agents to automate the sourcing process from creation to award for lower-dollar, high-volume negotiations — reducing buyer effort while maintaining policy compliance and competitive outcomes. These ready-to-use Agentic AI templates process eligible requisition lines into negotiations, select suppliers, award the best supplier response, and generate purchasing documents, freeing buyers to focus on strategic sourcing and supplier relationship management.

Two seeded AI Agent templates support end-to-end autonomous sourcing:

| Agent Template | What It Does |
|---|---|
| **Autonomous Sourcing Assistant** | Automatically creates negotiations by converting eligible requisition lines per your sourcing policy, submits them for approval, and publishes upon final approval. Also generates a synopsis and title, and invites relevant suppliers based on historical data. |
| **Supplier Negotiation Award Assistant** | Automates award decisions for eligible (closed) negotiations that received the minimum required supplier responses — applying sole-source or line-level awards for optimal pricing. Submits the award for approval when enabled, then finalizes the award and generates purchasing documents once approved. |

Both agents rely on a **sourcing policy document** that defines eligibility criteria: item categories, negotiation template names, bidding durations, minimum supplier bid counts, and maximum line amount per category. A sample policy document is provided and can be tailored to your business needs, then attached to the **Autonomous Sourcing Policy** tool in AI Agent Studio.

### End-to-End Flow

Requisition lines marked as **negotiation required** and meeting the item category/amount thresholds in the policy document are automatically grouped (by shared negotiation template, max line amount, minimum bid count, and open duration) and converted into a negotiation. Once created:

1. The negotiation is submitted for approval (if approvals are enabled).
2. Once approved, it's published and suppliers can respond.
3. When the negotiation closes, awards are applied automatically (sole-source or line-level) and submitted for approval.
4. Once the award is approved, purchase documents are generated.
5. Any errors during the process trigger an email notification to the negotiation owner.

---

## Steps to Enable and Configure

### Step 1 – Create and Publish the Agent Instances

1. In **AI Agent Studio**, create an instance of each seeded template using either:
   - **Copy Template** — automatically copies all underlying artifacts from the seeded agent team with a suffix you specify; you can still edit the agent team's settings, agents, and tools.
   - **Use Template** — walks you through step-by-step configuration of each artifact.
2. Do this for both **Autonomous Sourcing Assistant** and **Supplier Negotiation Award Assistant**.
3. **Publish** each instance.
4. Go to **Agent Teams** and note the **agent team code** and **version** for each — you'll need these later.

### Step 2 – Configure the Sourcing Policy Document

1. Sign in to [My Oracle Support](https://support.oracle.com/) and search for **Knowledge Base article KB858736** for detailed instructions on the policy document format.
2. Follow the article to build your autonomous sourcing policy document (item categories, templates, durations, minimum bids, max line amount).

> **Note:** For best results, don't change the section headings and column headers from the provided template. Use text-based PDF only — image-based/scanned PDFs may not process correctly.

### Step 3 – Attach the Policy Document to the Tool

1. In **AI Agent Studio**, open the **Tools Library** and search for the **Autonomous Sourcing Policy** tool (under the **Sourcing** product).
2. Add your policy document to the tool.
3. Set the document status to **Ready to Publish** once finalized.

### Step 4 – Set the Default Negotiation Owner

1. In **Setup and Maintenance**, go to **Manage Administrator Profile Values**.
2. Update:
   - **Profile Option Code:** `ORA_PON_AUTONOMOUS_NEG_OWNER`
   - **Profile Level:** Site
   - **Profile Value:** the default negotiation owner for autonomous sourcing
3. **Save and Close**.

### Step 5 – Create the Profile Option for the Sourcing Assistant's Agent Team Code

1. In **Setup and Maintenance**, go to **Manage Profile Options** and create:
   - **Profile Option Code:** `PON_AUTONOMOUS_SOURCING_AGENT`
   - **Profile Display Name:** Autonomous Sourcing Agent
   - **Application / Module:** Sourcing
   - **Start Date:** today's or desired date; **End Date:** leave empty
   - **Site Level:** Enabled and Updatable
2. **Save and Close**.
3. In **Manage Administrator Profile Values**, set the profile value for `PON_AUTONOMOUS_SOURCING_AGENT` to the agent team code noted in Step 1.

### Step 6 – Create the Profile Option for the Sourcing Assistant's Agent Team Version

Repeat Step 5's pattern with:
- **Profile Option Code:** `PON_AUTONOMOUS_SOURCING_AGENT_VERSION`
- **Profile Display Name:** Autonomous Sourcing Agent Version
- **Profile Value:** the agent team version noted in Step 1

### Step 7 – Create the Profile Option for the Award Assistant's Agent Team Code

Repeat Step 5's pattern with:
- **Profile Option Code:** `PON_AUTONOMOUS_AWARD_AGENT`
- **Profile Display Name:** Autonomous Award Agent
- **Profile Value:** the Supplier Negotiation Award Assistant's agent team code

### Step 8 – Create the Profile Option for the Award Assistant's Agent Team Version

Repeat Step 5's pattern with:
- **Profile Option Code:** `PON_AUTONOMOUS_AWARD_AGENT_VERSION`
- **Profile Display Name:** Autonomous Award Agent Version
- **Profile Value:** the Supplier Negotiation Award Assistant's agent team version

### Step 9 – Run the Scheduled Jobs (in this order)

1. **Process Agent Documents** — reads and parses the policy document. Run once after adding the document to the Autonomous Sourcing Policy tool and setting it to **Ready to Publish**.
2. **Process Requisition Lines with Autonomous Sourcing Assistant** — converts eligible requisition lines into negotiations automatically. Schedule at regular intervals (e.g., daily or weekly).
3. **Process Closed Negotiations with Autonomous Award Assistant** — awards eligible negotiations and creates purchase documents automatically. Schedule at regular intervals (e.g., daily or weekly).

---

## Tips and Considerations

- When a requisition includes lines with different suggested buyers, the **most frequent buyer** becomes the negotiation owner. If every line has a unique buyer, one of those buyers is chosen. If no suggested buyer exists on any line, the default buyer from `ORA_PON_AUTONOMOUS_NEG_OWNER` is used — configure this profile option with an appropriate user.
- Use a negotiation style with **Send invitation to all contacts** enabled when creating negotiation templates for autonomous sourcing.
- Enable the **Global template** checkbox on negotiation templates used for autonomous sourcing.
- Set the negotiation template's schedule to **Open immediately** so negotiations open automatically upon approval.
- Set the negotiation owner as the **first-level approver** in both negotiation and award approvals, ensuring a human reviews autonomously created negotiations and awards.
- After an autonomously awarded negotiation is approved, the subsequent ESS job run finalizes the award and generates the purchasing documents.

---

## Access Requirements

### To manage PRC AI agents in AI Agent Studio, users need a job role containing:
- `ORA_PO_PRC_AI_AGENT_MANAGEMENT_DUTY` — PRC Intelligent Agent Management Duty
- `ORA_PO_PRC_AI_AGENT_MANAGEMENT_DUTY_HCM` — PRC Intelligent Agent Management Duty
- `ORA_DR_FAI_GENERATIVE_AI_AGENT_PRC_ADMINISTRATOR_DUTY` — Fai Genai Agent PRC Administrator Duty

### To interact with agents on product pages, users need:
- `ORA_DR_FAI_GENERATIVE_AI_AGENT_RUNTIME_DUTY` — Fai Genai Agent Runtime Duty (find via Security Console, filtered by Roles and Permission Groups)

Also enable the relevant **permission groups** in the Security Console on those users' configured job roles that contain the runtime duty role. Users' job roles must also include privileges to access the pages where the agents are enabled.

### Integration user for scheduling the ESS jobs (via REST)

Create a dedicated integration user (Associated Person Type = None) with a configured job role that includes:
- `PON_AUTONOMOUS_SOURCING_PRIV` — Initiate Autonomous Sourcing Process
- `FND_MANAGE_SCHEDULED_PROCESSES_PRIV` — Schedule and Run ESS
- `POR_PROCESS_REQUISITION_LINE_PRIV` — Process Requisition Line
- `ORA_POR_USE_REST_SERVICE_VIEW` — Requisition Viewing Using REST Service (aggregate privilege)
- `ORA_PON_USE_REST_SERVICE_MANAGE_NEGOTIATION` — Supplier Negotiation Management Using REST Service (aggregate privilege)
- `ORA_PON_USE_REST_SERVICE_AWARD_NEGOTIATION` — Supplier Negotiation Award Using REST Service (aggregate privilege)
- `ORA_PO_USE_REST_SERVICE_MANAGE` — Purchase Order Management Using REST (aggregate privilege)
- `ORA_PO_PA_USE_REST_SERVICE_MANAGE` — Purchase Agreement Management Using REST (aggregate privilege)

> **Security Warning:** Do **not** assign the `ORA_PO_PROCUREMENT_REST_SERVICE_DUTY` role or its aggregate privileges directly to user-defined, duty, or abstract roles granted to end users — it grants unrestricted access to all data and can lead to unauthorized access. Instead, copy the Procurement REST Service Duty role, remove all privileges except those specifically required, and assign the resulting custom duty role to the integration user via their job role.

---

## Key Resources

- [How do I use AI Agent Studio?](https://docs.oracle.com/en/cloud/saas/fusion-ai/aiaas/)
- My Oracle Support Knowledge Base article **KB858736** — sourcing policy document configuration

---

## Setup Checklist Summary

| # | Step | Role Required |
|---|---|---|
| 1 | Create & publish Autonomous Sourcing Assistant and Supplier Negotiation Award Assistant from templates; note team code/version | AI Studio Admin |
| 2 | Build the autonomous sourcing policy document (per KB858736) | Procurement/Sourcing Admin |
| 3 | Attach policy document to the Autonomous Sourcing Policy tool; set to Ready to Publish | AI Studio Admin |
| 4 | Set `ORA_PON_AUTONOMOUS_NEG_OWNER` default negotiation owner | Setup and Maintenance Admin |
| 5 | Create/set `PON_AUTONOMOUS_SOURCING_AGENT` profile option | Setup and Maintenance Admin |
| 6 | Create/set `PON_AUTONOMOUS_SOURCING_AGENT_VERSION` profile option | Setup and Maintenance Admin |
| 7 | Create/set `PON_AUTONOMOUS_AWARD_AGENT` profile option | Setup and Maintenance Admin |
| 8 | Create/set `PON_AUTONOMOUS_AWARD_AGENT_VERSION` profile option | Setup and Maintenance Admin |
| 9 | Run **Process Agent Documents**, then schedule **Process Requisition Lines with Autonomous Sourcing Assistant** and **Process Closed Negotiations with Autonomous Award Assistant** | Setup and Maintenance Admin |
