# Job Requisition Creation Agent - Unit Tests

## Overview

This test suite provides comprehensive unit testing for the **Job Requisition Creation Agent** (`ORA_JOB_REQUISITON_CREATION_AGENT`). The tests validate the agent's behavior, response generation logic, and adherence to strict business rules defined in the agent's prompt.

## Test Structure

### 1. **Agent Initialization Tests**
- Validates agent configuration and properties
- Ensures correct agent type (WORKER), code, and interaction limits

### 2. **Response Format Requirements Tests**
- Ensures multi-sentence structured responses
- Validates no single-sentence responses
- Confirms job title restatement for clarity
- Checks for absence of technical jargon
- Prevents reference to tool calls or system processes

### 3. **Role Status Determination Tests** ⚠️ *Critical*
- Validates the key rule: default to "inactive" unless explicitly stated
- Recognizes active status keywords: "active", "currently open", "open for hiring", "actively recruiting"
- Tests proper error messaging when status is not found

### 4. **Document Retrieval Strategy Tests**
- Tests exact match retrieval (top 3 results)
- Tests semantic similarity retrieval (top 2 results)
- Ensures only uploaded documents and chat history are used
- Prevents external source references

### 5. **Missing Information Handling Tests**
- Validates appropriate responses when information is not in documents
- Prevents inference and speculation
- Ensures no supplementary information is added
- Requires exact verification before stating facts

### 6. **Multiple Role & Ambiguity Handling Tests** ⚠️ *Important*
- Treats different seniority levels as distinct roles (e.g., "Software Engineer" ≠ "Senior Software Engineer")
- Lists all matching variants for general queries
- Asks for clarification when truly ambiguous
- Remembers last-mentioned role for follow-ups
- Matches user-specified levels exactly

### 7. **Example/Draft Support Tests**
- Validates warm introductions with document context
- Prevents generic templates
- Tests appropriate messaging when examples don't exist

### 8. **Follow-Up Questions Tests**
- Validates JSON format for generated follow-up questions
- Ensures 3 follow-up questions are generated
- Tests markdown formatting removal

### 9. **Summarization Tests**
- Validates direct, professional, user-friendly answers
- Ensures custom summarization mode is used
- Tests appropriate messaging for inaccessible information

### 10. **Document Tool Tests**
- Validates document upload capability
- Confirms DOCUMENT type and user input requirements

### 11. **Workflow Integration Tests**
- Validates single-agent architecture
- Tests interaction limits and settings
- Confirms public access modifier

### 12. **Edge Case Tests**
- Handles empty document sets
- Tests null/undefined chat history
- Validates special character handling
- Tests case-insensitive role matching

### 13. **Business Logic Tests**
- Validates source of truth (uploaded documents only)
- Tests all strict factual limits
- Prevents hallucination by requiring document evidence

## Running the Tests

### Prerequisites
```bash
npm install --save-dev jest
```

### Run All Tests
```bash
npm test
```

### Run Specific Test Suite
```bash
npm test -- --testNamePattern="Response Format"
```

### Run with Coverage
```bash
npm test -- --coverage
```

### Run in Watch Mode
```bash
npm test -- --watch
```

### Run a Single Test File
```bash
npm test job-requisition-agent.test.js
```

## Key Test Scenarios

### Scenario 1: Role Status Validation
Tests that the agent correctly identifies role status based on explicit keywords, defaulting to "inactive" if not found.

```javascript
// Should respond with:
"I'm sorry, I couldn't find information about the current status of this 
role/requisition in the documents provided."
```

### Scenario 2: Multiple Role Handling
Tests that different seniority levels are treated as distinct roles.

```javascript
// "Accountant" and "Senior Accountant" are different roles
// Should list both separately in general queries
```

### Scenario 3: Missing Information
Tests that the agent never infers or speculates.

```javascript
// Should respond with:
"I'm sorry, I couldn't find that information in the documents provided."
```

### Scenario 4: Follow-Up Context
Tests that the agent remembers the last-mentioned role for follow-ups.

```javascript
User: "Tell me about the Accountant position"
User: "What is the salary?"
// Agent should assume "Accountant" from previous message
```

## Configuration

### Jest Configuration (`jest.config.js`)
- Test environment: Node.js
- Test timeout: 30 seconds
- Coverage threshold: 80% across all metrics
- Pattern matching for test files

## Test Coverage Report

Generate coverage report:
```bash
npm test -- --coverage
```

This will create an HTML coverage report in the `coverage/` directory.

## Common Test Issues & Troubleshooting

### Issue: Tests fail with "Cannot find module"
**Solution:** Ensure all dependencies are installed:
```bash
npm install
```

### Issue: Tests timeout
**Solution:** The timeout is set to 30 seconds. Increase if needed in `jest.config.js`:
```javascript
testTimeout: 60000  // 60 seconds
```

### Issue: Role matching not working
**Solution:** Check that role titles match exactly (case-insensitive). The test uses:
```javascript
userQuery.toLowerCase() === docTitle.toLowerCase()
```

## Adding New Tests

When adding new tests, follow these guidelines:

1. **Group related tests** in a `describe` block
2. **Use descriptive test names** that clearly state what is being tested
3. **Test one thing per test** - avoid combining multiple assertions when possible
4. **Use mock data** (see `mockDocuments` at the top)
5. **Document critical rules** with ⚠️ comments

Example:
```javascript
describe('New Feature', () => {
  test('should do something specific', () => {
    // Arrange
    const input = mockDocuments.accountant;
    
    // Act
    const result = processInput(input);
    
    // Assert
    expect(result).toBe(expectedValue);
  });
});
```

## Test Maintenance

- Update tests when agent prompt rules change
- Add tests for new response scenarios
- Review and update mock documents when new requisition types are added
- Keep the critical rules (Sections 3 and 6) up-to-date

## Related Files

- Agent Configuration: [`exports/hcm-job-requisition-agent/JOB_REQUISITION_CREATION_AGENT_TEAM_JOBREQ.json`](../exports/hcm-job-requisition-agent/JOB_REQUISITION_CREATION_AGENT_TEAM_JOBREQ.json)
- Agent Prompt: Defined in agent's "Prompt" field (critical for understanding test expectations)
- Start Questions: Define initial workflow prompts

## References

- [Jest Documentation](https://jestjs.io/)
- [Oracle Agent JSON Schema](../docs/agent-json-schema.md)
- Agent Specification: See [JOB_REQUISITION_CREATION_AGENT_TEAM_JOBREQ.json](../exports/hcm-job-requisition-agent/JOB_REQUISITION_CREATION_AGENT_TEAM_JOBREQ.json)

## Contributing

When updating tests:
1. Run all tests to ensure nothing breaks
2. Update this README if adding new test categories
3. Maintain >80% code coverage
4. Document any new mock data or scenarios
