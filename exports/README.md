# Exported Agent Teams

This folder contains exported Oracle AI Agent Studio agent team JSON files that can be imported into any Oracle Fusion Cloud instance.

## Agent Catalog

| Agent | Family | Description | Folder |
|-------|--------|-------------|--------|
| Jobs Assistant | HCM | Creates new jobs for HR Specialists | [hcm-jobs-assistant/](hcm-jobs-assistant/) |

## How Export/Import Works

### Exporting an Agent Team
1. Open AI Agent Studio → Agent Teams
2. Select the published agent team
3. Click Export → downloads as `.json` file
4. Place the JSON in a new folder under `exports/`

### Importing an Agent Team
1. Open AI Agent Studio on the target instance
2. Navigate to Agent Teams
3. Click Import → select the `.json` file
4. Review configuration (check LLM model, API versions)
5. Test → Publish

## JSON Structure Overview

```
{
  "Specification": { ... },        // Workflow spec, triggers, pipeline
  "WorkflowCode": "...",           // Unique identifier
  "Name": "...",                   // Display name
  "Description": "...",            // What the agent does
  "Family": "HCM|FIN|SCM|...",    // Product family
  "Product": "...",                // Specific product
  "Architecture": "single_agent|multi_agent",
  "MaximumInteractions": 10,       // Max conversation turns
  "agents": [{                     // Agent definitions
    "AgentCode": "...",
    "AgentType": "WORKER|SUPERVISOR",
    "Prompt": "...",               // System prompt (the brain)
    "Specification": {
      "summarizationPrompt": "..." // How to format responses
    },
    "tools": [{                    // Tools available to the agent
      "ToolCode": "...",
      "Type": "BUS_OBJECT|DEEPLINK|USER_SESSION|DOCUMENT|EXTERNAL_REST|MCP",
      "RestTool": { ... },         // REST API configuration
      "DeepLinkTool": { ... }      // Deeplink configuration
    }],
    "topics": []                   // Topic boundaries
  }],
  "agentMappings": [...]           // Agent routing
}
```

## Key Fields to Check When Importing

| Field | Why |
|-------|-----|
| `ModelConfigId` | LLM model reference — instance-specific |
| `ModuleId` | Module identifier — may differ between instances |
| REST API versions | Ensure your instance supports the version (e.g., `11.13.18.05`) |
| `SeededFlag` | `true` = Oracle-provided, `false` = custom |

## Adding New Exports

1. Create a folder: `exports/<family>-<agent-name>/`
2. Place the JSON file inside
3. Create a `README.md` documenting the agent (see existing examples)
4. Update the catalog table above
