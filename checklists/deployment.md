# Deployment Checklist

## Before Publishing

- [ ] Agent Team created and configured
- [ ] All agents added to the Agent Team
- [ ] Topics defined with clear boundaries
- [ ] Instructions written (guardrails, persona, constraints)
- [ ] Tools assigned to agents
- [ ] Documents uploaded and status = "Ready to Publish"
- [ ] Run "Process Agent Documents" ESS job (for document tools)
- [ ] Document status changed to "Published"
- [ ] Agent tested using built-in testing tools
- [ ] Evaluation run completed with acceptable results

## For Redwood Page Agents (HCM)

- [ ] Guided Journey created and activated
- [ ] Agent bound to Guided Journey task (Task Type = Agent)
- [ ] Guided Journey code noted
- [ ] Application page extended via Visual Builder Studio
- [ ] Page property set with Guided Journey code
- [ ] Live view tested

## Post-Deployment

- [ ] Monitor agent performance in AI Agent Studio
- [ ] Review evaluation metrics
- [ ] Compare evaluation runs over time
- [ ] Check for hallucination issues and refine instructions
