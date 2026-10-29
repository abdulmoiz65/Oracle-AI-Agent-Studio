# Oracle AI Agent Studio - Knowledge Base & Templates

A structured project to help build, configure, and deploy AI agents using Oracle AI Agent Studio within Oracle Fusion Cloud Applications.

## What is AI Agent Studio?

AI Agent Studio is a design-time environment in Oracle Fusion Cloud Applications that lets you create, configure, validate, and deploy AI agents. These agents automate business processes across ERP, HCM, SCM, Procurement, Financials, and CX.

## Project Structure

```
├── docs/
│   ├── oracle-guides/           # Converted Oracle PDF documentation
│   ├── quick-start.md           # Step-by-step getting started guide
│   ├── references.md            # Links, profile options, privileges
│   └── agent-json-schema.md     # JSON export file structure reference
├── exports/                     # Exported agent team JSON files (reusable)
│   ├── hcm-jobs-assistant/      # Jobs creation agent for HR
│   └── README.md                # How to export/import agents
├── templates/
│   ├── supervisor-agent/        # Template for supervisor-type agents
│   ├── workflow-agent/          # Template for workflow-type agents
│   └── redwood-page-agent/     # Template for Redwood page agents (HCM)
├── checklists/
│   ├── access-setup.md         # Security roles & privileges checklist
│   └── deployment.md           # Pre-deployment checklist
└── README.md
```

## Key Concepts

| Component | Description |
|-----------|-------------|
| **Agent Team** | A structured sequence of steps that agents follow to accomplish a task. This is what gets deployed. |
| **Agent** | Uses an LLM to reason, plan, and interact with users. Must be added to an Agent Team. |
| **Topics** | Defines areas of expertise and boundaries for agent conversations. |
| **Tools** | Utilities an agent uses (calculators, email, document retrieval, REST APIs, MCP). |
| **Instructions** | Natural language rules that define behavior, guidelines, and guardrails. |

## Agent Types

- **User-proxy agent** — Acts on behalf of a user to provide input to other agents
- **Supervisor agent** — Orchestrates multiple agents in an agentic flow
- **Specialist/utility agent** — Focused on a specific role or tool

## Getting Started

1. Review [docs/quick-start.md](docs/quick-start.md) for setup prerequisites
2. Check [checklists/access-setup.md](checklists/access-setup.md) for required roles
3. Pick a template from `templates/` matching your use case
4. Follow Oracle guides in `docs/oracle-guides/` for detailed steps
5. Import pre-built agents from `exports/` or build your own
6. Use [docs/agent-json-schema.md](docs/agent-json-schema.md) to understand exported JSONs

## Exported Agents (Ready to Import)

| Agent | Family | Description |
|-------|--------|-------------|
| [Jobs Assistant](exports/hcm-jobs-assistant/) | HCM | Creates new jobs for HR Specialists |

> Export more agents from AI Agent Studio and add them to `exports/` to build your reusable library.

## Oracle Documentation Sources

- [How do I use AI Agent Studio](docs/oracle-guides/how-do-i-use-ai-agent-studio/)
- [How do I set up AI Agents for Redwood pages](docs/oracle-guides/how-do-i-set-up-ai-agents-for-redwood-pages/)
