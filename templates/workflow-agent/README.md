# Workflow Agent Template

A workflow agent follows a defined sequence of steps to complete a business task.

## When to Use

- Linear, predictable processes
- Step-by-step task automation
- Processes with clear input → processing → output flow

## Configuration

### Agent Team
- **Type**: Workflow

### Agent
- **Instructions**: Define each step clearly
- **Tools**: Assign tools needed at each step
- **Topics**: Define scope constraints

## Example Use Cases

- Journal entry creation
- Purchase order submission
- Employee onboarding steps
- Leave request processing

## Setup Steps

1. Define the workflow steps
2. Create agent with step-by-step instructions
3. Assign tools for each step (REST APIs, document tools, etc.)
4. Create Agent Team (workflow type)
5. Test each step individually
6. Test end-to-end
7. Publish
