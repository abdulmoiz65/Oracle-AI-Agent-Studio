# Quick Start Guide - Oracle AI Agent Studio

## Prerequisites

1. **Oracle Fusion Cloud Applications** instance (25C or later recommended)
2. **Security Console** access to assign roles
3. **AI Agent Studio** feature enabled in your environment

## Step 1: Enable Security Console for Permission Groups

Set profile option: `ORA_ASE_SAS_INTEGRATION_ENABLED` = **Yes** at site level.

Path: Setup and Maintenance > Manage Administrator Profile Values

## Step 2: Run Required Scheduled Processes

Run these sequentially:
1. **Import Resource Application Security Data**
2. **Import User and Role Application Security Data**

Path: Navigator > Tools > Scheduled Processes

## Step 3: Assign Duty Roles

Assign product-specific duty roles to your custom job role:

| Product | Duty Role Code |
|---------|---------------|
| All Products | Manage All Intelligent Agents (`ORA_FAI_MANAGE_ALL_AI_AGENTS`) |
| HCM | `ORA_DR_FAI_GENERATIVE_AI_AGENT_HCM_ADMINISTRATOR_DUTY` |
| Financials | `ORA_DR_FAI_GENERATIVE_AI_AGENT_FIN_ADMINISTRATOR_DUTY` |
| SCM | `ORA_DR_FAI_GENERATIVE_AI_AGENT_SCM_ADMINISTRATOR_DUTY` |
| Procurement | `ORA_DR_FAI_GENERATIVE_AI_AGENT_PRC_ADMINISTRATOR_DUTY` |
| CX | `ORA_DR_FAI_GENERATIVE_AI_AGENT_CX_ADMINISTRATOR_DUTY` |
| GRC | `ORA_DR_FAI_GENERATIVE_AI_AGENT_GRC_ADMINISTRATOR_DUTY` |
| Projects | `ORA_DR_FAI_GENERATIVE_AI_AGENT_PRJ_ADMINISTRATOR_DUTY` |
| PSC | `ORA_DR_FAI_GENERATIVE_AI_AGENT_PSC_ADMINISTRATOR_DUTY` |

## Step 4: Enable AI Help Agent (Optional)

Run daily:
- **Index AI Agent Studio Assistant Documents**
- **Index AI Agent Studio Assistant Objects and Attributes**

## Step 5: Choose Your Agent Creation Method

1. **Preconfigured Templates** — Start from Oracle-provided templates
2. **Custom Supervisor Agent** — Orchestrate multiple agents
3. **Custom Workflow Agent** — Define step-by-step workflows

## Step 6: Create Your First Agent

1. Open AI Agent Studio from Navigator
2. Create an Agent Team
3. Add Agents with Topics, Tools, and Instructions
4. Test using built-in validation tools
5. Publish and deploy

## Next Steps

- For HCM Redwood page agents, see [oracle-guides/how-do-i-set-up-ai-agents-for-redwood-pages.md](oracle-guides/how-do-i-set-up-ai-agents-for-redwood-pages.md)
- For full AI Agent Studio guide, see [oracle-guides/how-do-i-use-ai-agent-studio.md](oracle-guides/how-do-i-use-ai-agent-studio.md)
