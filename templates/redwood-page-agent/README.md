# Redwood Page Agent Template (HCM)

An agent deployed via Guided Journeys on Oracle Fusion Redwood pages, providing conversational assistance based on uploaded documents.

## When to Use

- Embedding AI chat on transactional HCM pages
- Policy Q&A (benefits, leave, compensation)
- Document-based answers on any Guided Journey-enabled page

## Structure

```
Agent
├── Tool (Document Tool)
│   ├── Document 1 (e.g., Benefits Policy)
│   │   └── Attachments (PDF, DOCX, etc.)
│   ├── Document 2 (e.g., Leave Policy)
│   │   └── Attachments
│   └── Document N
└── Guided Journey
    └── Task (Type: Agent)
```

## Configuration Steps

1. **Configure Tool**: My Client Groups > Tools > Configure HCM Agents > Add
2. **Add Documents**: Upload policy documents to the tool
3. **Set Status**: Change each document to "Ready to Publish"
4. **Create Agent**: Agents tab > Add > bind tool to agent
5. **Run ESS**: "Process Agent Documents" scheduled process
6. **Verify**: Document status = "Published"
7. **Create Guided Journey**: My Client Groups > Guided Journey > Create
8. **Add Task**: Task Type = Agent, select your agent
9. **Activate**: Activate the Guided Journey
10. **Extend Page**: Edit page in Visual Builder Studio, set GJ code

## Example Agents

| Agent | Page | Purpose |
|-------|------|---------|
| Benefits Analyst | Me > Benefits | Benefits package Q&A |
| Leave Analyst | Me > Absence Balance | Leave policy guidance |
| Payslip Analyst | Me > My Payslips | Salary breakdown help |
| Onboarding Assistant | Me > Journeys | New hire guidance |
| Career Planning Guide | Me > Grow | Career development advice |

## Document Best Practices

- Use clear headings and structure in uploaded documents
- Keep documents focused on a single topic
- Use plain language for better AI comprehension
- Update documents when policies change and re-run ESS process
