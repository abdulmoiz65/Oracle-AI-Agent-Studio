# Supervisor Agent Template

A supervisor agent orchestrates multiple specialist agents in a multi-agent flow.

## When to Use

- Multi-step business processes requiring different expertise
- Processes needing user approvals between steps
- Complex workflows spanning multiple domains

## Configuration

### Agent Team
- **Type**: Supervisor
- **Agents**: Add 2+ specialist agents

### Supervisor Agent
- **Role**: Orchestrator
- **Instructions**: Define routing logic, escalation rules, and fallback behavior

### Specialist Agents
Each specialist should have:
- Clear topic boundaries
- Specific tools assigned
- Focused instructions

## Example Use Cases

- Opportunity-to-quote processing
- Shift scheduling with approvals
- Expense report submission and approval
- Recruitment pipeline (screen → interview → offer)

## Setup Steps

1. Create specialist agents with their tools and topics
2. Create supervisor agent with orchestration instructions
3. Create Agent Team and add all agents
4. Define conversation flow and approval points
5. Test end-to-end flow
6. Publish
