# Oracle AI Agent Studio - JSON Schema Reference

This document describes the structure of exported Agent Team JSON files.

## Top-Level Structure

| Field | Type | Description |
|-------|------|-------------|
| `Specification` | object | Workflow spec (pipeline, schema version, triggers) |
| `WorkflowCode` | string | Unique agent team identifier |
| `Name` | string | Display name |
| `Description` | string | What this agent team does |
| `Family` | string | Product family (HCM, FIN, SCM, PRC, CX, GRC) |
| `Product` | string | Specific product module |
| `HiddenFlag` | boolean | Whether agent is hidden from users |
| `Architecture` | string | `single_agent` or `multi_agent` |
| `MaximumInteractions` | number | Max conversation turns allowed |
| `StartQuestionOne/Two/Three` | string | Suggested starter questions |
| `FollowUpPromptEnabledFlag` | boolean | Whether to generate follow-up questions |
| `FollowUpPrompt` | string | Prompt template for generating follow-ups |
| `agents` | array | Agent definitions |
| `agentMappings` | array | How agents connect/route to each other |
| `partnerMetadata` | object | Partner info (name, description, image) |

## Specification Object

```json
{
  "dataPipeline": { "errorHandlers": [] },
  "jsonSchemaName": "Workflow.spec",
  "jsonSchemaVersion": "1",
  "inputs": [],
  "outputSpecification": " ",
  "agentsValueMappings": [],
  "humanApprovalFlag": false,
  "triggers": [],
  "chatExpTPFileUploadEnabledFlag": false
}
```

## Agent Object

| Field | Type | Description |
|-------|------|-------------|
| `AgentCode` | string | Unique agent identifier |
| `Name` | string | Agent display name |
| `Description` | string | What the agent does |
| `AgentType` | string | `WORKER`, `SUPERVISOR`, or `USER_PROXY` |
| `Prompt` | string | **System prompt** — the core logic and rules |
| `ModelConfigId` | string | Reference to LLM configuration |
| `ReusableFlag` | boolean | Whether agent can be reused in other teams |
| `Version` | number | Agent version |
| `Namespace` | string | `FAMILY.PRODUCT` format |
| `SeededFlag` | boolean | Oracle-provided vs custom |
| `tools` | array | Tools assigned to this agent |
| `topics` | array | Topic definitions (boundaries/constraints) |

### Agent Specification

| Field | Description |
|-------|-------------|
| `agentRole` | Role description |
| `customFlag` | Whether agent is custom-built |
| `sourceObjectCode` | Source template reference |
| `summarizationMode` | `Custom` or `Default` |
| `summarizationPrompt` | How to format final responses to user |

## Tool Object

| Field | Type | Description |
|-------|------|-------------|
| `ToolCode` | string | Unique tool identifier |
| `Type` | string | Tool type (see below) |
| `Name` | string | Display name |
| `Description` | string | What the tool does |
| `Family` | string | Product family |
| `Product` | string | Product module |
| `SeededFlag` | boolean | Oracle-provided vs custom |
| `HiddenFlag` | boolean | Hidden from UI |
| `UserInputRequiredFlag` | boolean | Whether tool needs user input |

### Tool Types

| Type | Description |
|------|-------------|
| `BUS_OBJECT` | REST API call to Fusion business objects |
| `DEEPLINK` | Generates navigation links to Fusion pages |
| `USER_SESSION` | Gets current user context |
| `DOCUMENT` | RAG document retrieval |
| `EXTERNAL_REST` | External REST API integration |
| `MCP` | Model Context Protocol tool |

### BUS_OBJECT Tool (RestTool)

```json
{
  "RestTool": {
    "ObjectCode": "ORA_HCM_PER_JOBS",
    "ObjectSource": "ADF_BC",
    "RestResourcePath": "/hcmRestApi/resources/11.13.18.05/jobsV2",
    "ObjectProperties": {
      "tools": [{
        "name": "create_job",
        "description": "Create a new job.",
        "operationType": "POST|GET|PATCH|DELETE",
        "resourcePath": "/hcmRestApi/resources/...",
        "bodyTemplate": "{ \"Field\": \"{param}\" }",
        "parameterDefinitions": [{
          "name": "jobName",
          "dataType": "string",
          "description": "...",
          "isToken": true
        }]
      }]
    }
  }
}
```

### DEEPLINK Tool

```json
{
  "DeepLinkTool": {
    "DeepLinkCode": "ORA_HCM_PER_VIEW_JOB_LINK",
    "Name": "view_job_link",
    "DestinationURL": "/fscmUI/redwood/jobs?effectiveDate={effectiveDate}&jobId={jobId}",
    "parameterDefinitions": [{
      "name": "effectiveDate",
      "dataType": "date"
    }]
  }
}
```

## Agent Mappings

Defines routing between agents in multi-agent flows:

```json
{
  "EdgeOrder": 0,
  "AgentCode": "source_agent_code",
  "AgentTargetCode": "target_agent_code"
}
```

For single-agent architectures, source and target are the same agent.

## Prompt Engineering Patterns

Based on the exported agent, Oracle's prompt structure follows:

1. **Role statement** — "You are a Fusion Applications AI Assistant that..."
2. **Instructions** — Numbered steps for the workflow
3. **Functions** — List of available tools and when to use them
4. **Scope** — What the agent CAN and CANNOT do
5. **Rules** — Detailed behavioral constraints

The `summarizationPrompt` handles response formatting with:
- Answer requirements (no hallucination)
- Display guidelines (natural language, no technical jargon)
- Formatting rules (deeplinks, attribute names, closing statements)
