# Access Setup Checklist

## General Setup (All Products)

- [ ] Set `ORA_ASE_SAS_INTEGRATION_ENABLED` to Yes at site level
- [ ] Run "Import Resource Application Security Data" scheduled process
- [ ] Run "Import User and Role Application Security Data" scheduled process
- [ ] Create custom job role in Security Console
- [ ] Enable permission groups on the custom role
- [ ] Add product-specific duty roles to custom job role
- [ ] Add `ORA_FAI_MANAGE_ALL_AI_AGENTS` role (for all-product access)
- [ ] Assign custom job role to users

## External REST Tools (Optional)

- [ ] Add `ORA_FND_TRAP_PRIV` privilege to custom role

## Channels - Teams/Slack (Optional)

- [ ] Create duty role for permission groups
- [ ] Add channel permission groups (create/read/update/delete for ChannelManifest and ExternalChatCorrelation)
- [ ] Add `AllRowsAllFields` security view to each permission group
- [ ] Assign duty role to custom job role

## HCM-Specific (Redwood Pages)

- [ ] Grant `HRC_MANAGE_AI_AGENT_PRIV` to admin users
- [ ] Grant `HRC_ACCESS_AI_AGENT_CHAT_PRIV` to end users
- [ ] Set `ORA_HCM_VBCS_PWA_ENABLED` = Y
- [ ] Set `ORA_PER_GUIDED_JOURNEYS_SETUP_REDWOOD_ENABLED` = Y
- [ ] Set `ORA_PER_AGENT_TASK_TYPE_GUIDED_JOURNEYS_ENABLED` = Y

## AI Help Agent (Optional)

- [ ] Schedule daily: "Index AI Agent Studio Assistant Documents"
- [ ] Schedule daily: "Index AI Agent Studio Assistant Objects and Attributes"
