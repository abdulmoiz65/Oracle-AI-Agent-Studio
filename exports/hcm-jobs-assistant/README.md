# HCM Jobs Assistant

## Overview

| Field | Value |
|-------|-------|
| **Name** | Jobs Assistant JOB_ASISTANT_65 |
| **Code** | `HCM_PER_JOBS_ASSISTANT_JOBASISTANT65` |
| **Family** | HCM |
| **Product** | GLOBAL_HUMAN_RESOURCES |
| **Architecture** | Single Agent |
| **Max Interactions** | 10 |

## What It Does

Assists HR Specialists in creating new jobs in Oracle Fusion HCM. The agent:

1. Checks enterprise configuration for auto-code generation method
2. Collects **JobName** from user
3. Collects **JobCode** (only if not auto-generated)
4. Shows summary and asks for explicit confirmation
5. Creates the job via REST API
6. Provides a deeplink to view the newly created job

## Tools Used

| Tool | Type | API Endpoint |
|------|------|-------------|
| View Job Link | DEEPLINK | `/fscmUI/redwood/jobs?effectiveDate={}&jobId={}` |
| Jobs | BUS_OBJECT | `POST /hcmRestApi/resources/11.13.18.05/jobsV2` |
| Enterprise Configuration | BUS_OBJECT | `GET /hcmRestApi/resources/11.13.18.05/enterpriseConfigurations` |
| Jobs List | BUS_OBJECT | `GET /hcmRestApi/resources/11.13.18.05/jobsLov` |
| GetUserSession | USER_SESSION | Built-in |

## Agent Logic Flow

```
Start
  │
  ├─► Check enterprise config (jobCodeGenMethod)
  │
  ├─► If method = "A" or "AS" → only ask for JobName
  │   Else → ask for JobName AND JobCode
  │
  ├─► Show summary → get user confirmation
  │
  ├─► Call create_job or create_job_without_code
  │
  ├─► If 201 → show job details + deeplink
  │   If 204 → "Job submitted for approval"
  │
  └─► End gracefully
```

## Key Rules (from System Prompt)

- Only accepts JobName and JobCode as inputs (no other fields)
- Cannot generate JobCode itself
- Does NOT accept EffectiveStartDate from user
- Must use most recent values from chat history
- Cannot open deeplinks — only provides them
- Declines out-of-scope questions politely
- Supports creating multiple jobs in sequence (clears context between)

## Import Instructions

1. Open AI Agent Studio in your Fusion instance
2. Navigate to Agent Teams
3. Click Import/Upload
4. Select `HCM_PER_JOBS_ASSISTANT_JOBASISTANT65.json`
5. Review and publish

## Customization Notes

When importing to a different instance, these fields may need updating:
- `ModelConfigId` — points to the LLM configuration (instance-specific)
- `ModuleId` — module identifier
- Verify REST API version (`11.13.18.05`) matches your instance
