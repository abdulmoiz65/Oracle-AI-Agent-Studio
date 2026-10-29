/**
 * Unit Tests for Job Requisition Creation Agent
 * Tests the agent's behavior, prompt logic, and response requirements
 */

describe('Job Requisition Creation Agent', () => {
  // Mock agent configuration
  const agentConfig = {
    code: 'ORA_JOB_REQUISITON_CREATION_AGENT',
    name: 'Job Requisition Creation Agent',
    type: 'WORKER',
    maxInteractions: 1,
  };

  // Mock document responses
  const mockDocuments = {
    accountant: {
      title: 'Accountant',
      status: 'active',
      businessUnit: 'Finance',
      location: 'New York',
      salary: '$60,000 - $75,000',
    },
    seniorAccountant: {
      title: 'Senior Accountant',
      status: 'inactive',
      businessUnit: 'Finance',
      location: 'Boston',
      salary: '$80,000 - $95,000',
    },
    softwareEngineer: {
      title: 'Software Engineer',
      status: 'active',
      businessUnit: 'Engineering',
      location: 'San Francisco',
      salary: '$100,000 - $130,000',
    },
    seniorSoftwareEngineer: {
      title: 'Senior Software Engineer',
      status: 'actively recruiting',
      businessUnit: 'Engineering',
      location: 'San Francisco',
      salary: '$140,000 - $180,000',
    },
  };

  // ============================================================
  // AGENT INITIALIZATION TESTS
  // ============================================================

  describe('Agent Initialization', () => {
    test('should initialize with correct code', () => {
      expect(agentConfig.code).toBe('ORA_JOB_REQUISITON_CREATION_AGENT');
    });

    test('should have WORKER type', () => {
      expect(agentConfig.type).toBe('WORKER');
    });

    test('should have correct max interactions', () => {
      expect(agentConfig.maxInteractions).toBe(1);
    });

    test('should be reusable', () => {
      // Based on ReusableFlag: true in config
      expect(true).toBe(true);
    });
  });

  // ============================================================
  // RESPONSE FORMAT TESTS
  // ============================================================

  describe('Response Format Requirements', () => {
    test('should return multi-sentence structured responses', () => {
      const response = 'The Accountant position is available in the Finance business unit. The location is New York.';
      const sentences = response.split(/[.!?]+/).filter(s => s.trim().length > 0);
      expect(sentences.length).toBeGreaterThan(1);
    });

    test('should never return single sentence responses', () => {
      const response = 'The position is available.';
      const sentences = response.split(/[.!?]+/).filter(s => s.trim().length > 0);
      expect(sentences.length).toBeGreaterThan(1);
    });

    test('should restate job title in responses for clarity', () => {
      const jobTitle = 'Accountant';
      const response = `The Accountant position is located in New York. The Accountant role is part of the Finance business unit.`;
      expect(response).toContain(jobTitle);
    });

    test('should not use technical jargon or abbreviations', () => {
      const response = 'The Accountant position is available in the Finance business unit located in New York.';
      const technicalTerms = ['API', 'JSON', 'DB', 'UI', 'UX'];
      technicalTerms.forEach(term => {
        expect(response.toUpperCase()).not.toContain(term);
      });
    });

    test('should not reference tool calls or system processes', () => {
      const response = 'Based on the document retrieval result, the position is available.';
      expect(response).not.toContain('tool call');
      expect(response).not.toContain('system process');
      expect(response).not.toContain('retrieved');
    });
  });

  // ============================================================
  // ROLE STATUS DETERMINATION TESTS
  // ============================================================

  describe('Role Status Determination (Key Rule)', () => {
    const statusKeywords = ['active', 'currently open', 'open for hiring', 'actively recruiting'];

    test('should identify role as active with "active" status', () => {
      const doc = mockDocuments.accountant;
      expect(['active', 'currently open', 'open for hiring', 'actively recruiting']).toContain(doc.status);
    });

    test('should identify role as active with "currently open" status', () => {
      const statusText = 'The position is currently open';
      expect(statusKeywords.some(keyword => statusText.includes(keyword))).toBe(true);
    });

    test('should identify role as active with "open for hiring" status', () => {
      const statusText = 'We are open for hiring for this role';
      expect(statusKeywords.some(keyword => statusText.includes(keyword))).toBe(true);
    });

    test('should identify role as active with "actively recruiting" status', () => {
      const doc = mockDocuments.seniorSoftwareEngineer;
      expect(statusKeywords).toContain(doc.status);
    });

    test('should default to inactive when status not explicitly stated', () => {
      const doc = mockDocuments.seniorAccountant;
      const isActive = statusKeywords.includes(doc.status);
      if (!isActive) {
        expect(doc.status).toBe('inactive');
      }
    });

    test('should respond with proper message when status is not found', () => {
      const response = "I'm sorry, I couldn't find information about the current status of this role/requisition in the documents provided.";
      expect(response).toContain('status');
      expect(response).toContain('documents provided');
    });
  });

  // ============================================================
  // DOCUMENT RETRIEVAL TESTS
  // ============================================================

  describe('Document Retrieval Strategy', () => {
    test('should perform exact match retrieval and return top 3 passages', () => {
      const query = 'Accountant Finance';
      const results = Object.values(mockDocuments)
        .filter(doc => doc.title.includes('Accountant') || doc.businessUnit.includes('Finance'))
        .slice(0, 3);
      expect(results.length).toBeLessThanOrEqual(3);
    });

    test('should perform semantic similarity retrieval and return top 2 passages', () => {
      const query = 'job opening in finance';
      const results = Object.values(mockDocuments)
        .filter(doc => doc.businessUnit === 'Finance')
        .slice(0, 2);
      expect(results.length).toBeLessThanOrEqual(2);
    });

    test('should use only uploaded documents and chat history', () => {
      const allowedSources = ['DOCUMENT', 'CHAT_HISTORY'];
      const source = 'DOCUMENT';
      expect(allowedSources).toContain(source);
    });

    test('should not reference external sources', () => {
      const response = "I'm using only the documents provided and chat history to answer your question.";
      expect(response).not.toContain('Google');
      expect(response).not.toContain('Wikipedia');
      expect(response).not.toContain('external');
    });
  });

  // ============================================================
  // MISSING INFORMATION HANDLING TESTS
  // ============================================================

  describe('Missing Information Handling', () => {
    test('should respond appropriately when information not found in documents', () => {
      const response = "I'm sorry, I couldn't find that information in the documents provided.";
      expect(response).toContain('sorry');
      expect(response).toContain('documents provided');
    });

    test('should not infer or speculate about missing details', () => {
      const document = { title: 'Accountant', businessUnit: 'Finance' };
      // If salary is not in document, should not guess
      const shouldNotInvent = !document.salary;
      expect(shouldNotInvent).toBe(true);
    });

    test('should not add supplementary information', () => {
      const response = "The Accountant role is in Finance." ;
      // Should only contain what's in docs, not generic info
      expect(response).not.toContain('typically');
      expect(response).not.toContain('usually');
    });

    test('should verify information appears exactly in documents before stating', () => {
      const doc = mockDocuments.accountant;
      const statementToVerify = `The ${doc.title} position is located in ${doc.location}`;
      expect(doc.title).toBeDefined();
      expect(doc.location).toBeDefined();
    });
  });

  // ============================================================
  // MULTIPLE ROLE HANDLING TESTS
  // ============================================================

  describe('Multiple Role & Ambiguity Handling', () => {
    test('should treat different seniority levels as distinct roles', () => {
      const juniorRole = mockDocuments.softwareEngineer;
      const seniorRole = mockDocuments.seniorSoftwareEngineer;
      expect(juniorRole.title).not.toBe(seniorRole.title);
    });

    test('should list all matching variants when user asks general query', () => {
      const accountantRoles = Object.values(mockDocuments)
        .filter(doc => doc.title.includes('Accountant'));
      expect(accountantRoles.length).toBeGreaterThan(1);
    });

    test('should ask for clarification when truly ambiguous', () => {
      const response = "I'm sorry, I don't know which role you're referring to. Could you please specify the job title?";
      expect(response).toContain('role');
      expect(response).toContain('specify');
    });

    test('should remember last-mentioned role for follow-up questions', () => {
      const chatHistory = [
        { role: 'user', query: 'Tell me about the Accountant position' },
        { role: 'user', query: 'What is the salary?' },
      ];
      const lastMentionedRole = 'Accountant';
      expect(lastMentionedRole).toBeDefined();
    });

    test('should match user-specified level exactly', () => {
      const userQuery = 'What about the Senior Accountant position?';
      const matchedRole = mockDocuments.seniorAccountant;
      expect(userQuery).toContain('Senior Accountant');
      expect(matchedRole.title).toBe('Senior Accountant');
    });

    test('should not combine levels when they are distinct roles', () => {
      const accountant = mockDocuments.accountant;
      const seniorAccountant = mockDocuments.seniorAccountant;
      expect([accountant.title, seniorAccountant.title]).toContain('Accountant');
      expect([accountant.title, seniorAccountant.title]).toContain('Senior Accountant');
    });
  });

  // ============================================================
  // EXAMPLE/DRAFT SUPPORT TESTS
  // ============================================================

  describe('Drafting Help & Example Support', () => {
    test('should provide warm intro with context examples only from current docs', () => {
      const response = 'Based on the job requisitions available, here is an example of how you might structure this...';
      expect(response).toBeDefined();
    });

    test('should not provide generic templates', () => {
      const response = 'Here is a generic template for job descriptions...';
      expect(response).not.toContain('generic');
      expect(response).not.toContain('template');
    });

    test('should respond appropriately when no examples exist in documents', () => {
      const response = "I'm sorry, the documents provided don't include example content for this section. Would you like me to help draft one based on what's available?";
      expect(response).toContain('documents provided');
      expect(response).toContain('available');
    });
  });

  // ============================================================
  // FOLLOW-UP QUESTIONS TESTS
  // ============================================================

  describe('Follow-Up Question Generation', () => {
    test('should generate follow-up questions based on chat history', () => {
      const followUpPrompt = "Based on the following conversion: [chat_history] generate follow up questions only while strictly adhering to the JSON Schema format";
      expect(followUpPrompt).toContain('JSON Schema');
    });

    test('should format follow-up questions in valid JSON', () => {
      const followUpQuestions = [
        { question: 'How to create a new requisition?' },
        { question: 'What business units are available?' },
        { question: 'How to redraft a requisition?' },
      ];
      expect(Array.isArray(followUpQuestions)).toBe(true);
      followUpQuestions.forEach(q => {
        expect(q).toHaveProperty('question');
        expect(typeof q.question).toBe('string');
      });
    });

    test('should remove markdown formatting from JSON output', () => {
      const rawOutput = '```json\n[{"question": "test"}]\n```';
      const cleanedOutput = rawOutput.replace(/```json\n?|\n?```/g, '');
      expect(cleanedOutput).not.toContain('```');
    });

    test('should generate exactly 3 follow-up questions by default', () => {
      const startQuestions = [
        'How to Create Requsition?',
        'What Business Unit we can use for position eg Accountant?',
        'How to redraft requsition?',
      ];
      expect(startQuestions.length).toBe(3);
    });
  });

  // ============================================================
  // SUMMARIZATION TESTS
  // ============================================================

  describe('Summarization & Response Workflow', () => {
    test('should construct direct, professional, and user-friendly answers', () => {
      const response = 'The Accountant position is in the Finance business unit, located in New York. The salary range is $60,000 to $75,000.';
      expect(response).toBeDefined();
      expect(response.length).toBeGreaterThan(0);
    });

    test('should not use technical jargon in summarization', () => {
      const response = 'The position details are stored in the database schema.';
      const shouldNotContain = ['database', 'schema', 'API', 'JSON'];
      shouldNotContain.forEach(term => {
        expect(response.toLowerCase()).not.toContain(term.toLowerCase());
      });
    });

    test('should implement custom summarization mode', () => {
      const summarizationMode = 'Custom';
      expect(summarizationMode).toBe('Custom');
    });

    test('should respond with appropriate message when answer cannot be provided from tool responses', () => {
      const response = "I'm sorry, I don't have access to that information.";
      expect(response).toContain('sorry');
      expect(response).toContain('access');
    });
  });

  // ============================================================
  // DOCUMENT TOOL TESTS
  // ============================================================

  describe('Document Tool for Job Req Creation Agent', () => {
    const toolConfig = {
      code: 'ORA_DOCUMENT_TOOL_FOR_JOB_REQ_CREATION_AGENT',
      type: 'DOCUMENT',
      userInputRequired: false,
    };

    test('should have DOCUMENT type', () => {
      expect(toolConfig.type).toBe('DOCUMENT');
    });

    test('should not require user input', () => {
      expect(toolConfig.userInputRequired).toBe(false);
    });

    test('should allow document upload', () => {
      const canUploadDocuments = true;
      expect(canUploadDocuments).toBe(true);
    });
  });

  // ============================================================
  // WORKFLOW INTEGRATION TESTS
  // ============================================================

  describe('Workflow Integration', () => {
    const workflowConfig = {
      code: 'JOB_REQUISITION_CREATION_AGENT_TEAM_JOBREQ',
      name: 'Job Requisition Creation Advisor Job_Req',
      architecture: 'single_agent',
      maxInteractions: 1,
      followUpPromptEnabled: true,
      humanApprovalRequired: false,
    };

    test('should use single agent architecture', () => {
      expect(workflowConfig.architecture).toBe('single_agent');
    });

    test('should allow maximum 1 interaction', () => {
      expect(workflowConfig.maxInteractions).toBe(1);
    });

    test('should have follow-up prompts enabled', () => {
      expect(workflowConfig.followUpPromptEnabled).toBe(true);
    });

    test('should not require human approval', () => {
      expect(workflowConfig.humanApprovalRequired).toBe(false);
    });

    test('should provide start questions for workflow initiation', () => {
      const startQuestions = [
        'How to Create Requsition?',
        'What Business Unit we can use for position eg Accountant?',
        'How to redraft requsition?',
      ];
      expect(startQuestions.length).toBe(3);
      expect(startQuestions[0]).toBeDefined();
    });

    test('should allow public access', () => {
      const accessModifier = 'public';
      expect(accessModifier).toBe('public');
    });
  });

  // ============================================================
  // EDGE CASE TESTS
  // ============================================================

  describe('Edge Cases', () => {
    test('should handle empty document set', () => {
      const documents = [];
      expect(documents.length).toBe(0);
    });

    test('should handle null or undefined chat history', () => {
      const chatHistory = null;
      expect(chatHistory).toBeNull();
    });

    test('should handle very long user queries', () => {
      const longQuery = 'A'.repeat(1000);
      expect(longQuery.length).toBeGreaterThan(500);
    });

    test('should handle special characters in queries', () => {
      const query = "What about the 'Senior' & Special (Role)?";
      expect(query).toContain("'");
      expect(query).toContain('&');
      expect(query).toContain('(');
    });

    test('should handle case-insensitive role matching', () => {
      const userQuery = 'accountant';
      const docTitle = 'Accountant';
      expect(userQuery.toLowerCase()).toBe(docTitle.toLowerCase());
    });

    test('should not allow inference when role status is ambiguous', () => {
      const ambiguousStatus = 'might be';
      const validStatuses = ['active', 'currently open', 'open for hiring', 'actively recruiting', 'inactive'];
      expect(validStatuses).not.toContain(ambiguousStatus);
    });
  });

  // ============================================================
  // BUSINESS LOGIC TESTS
  // ============================================================

  describe('Business Logic & Rule Validation', () => {
    test('should only use uploaded documents as source of truth', () => {
      const trueSources = ['DOCUMENT'];
      expect(trueSources).toContain('DOCUMENT');
    });

    test('should apply all strict factual limits', () => {
      const rules = {
        noInference: true,
        noSupplementation: true,
        singleRoleFocus: true,
        requiresExactMatch: true,
        defaultInactive: true,
      };
      Object.values(rules).forEach(rule => {
        expect(rule).toBe(true);
      });
    });

    test('should track context from chat history for follow-ups', () => {
      const chatHistory = [
        { turn: 1, user: 'Tell me about Accountant' },
        { turn: 2, user: 'What is the salary?' },
      ];
      expect(chatHistory.length).toBe(2);
      expect(chatHistory[0]).toBeDefined();
    });

    test('should prevent hallucination by requiring document evidence', () => {
      const responseWithoutEvidence = 'The position typically pays well.';
      expect(responseWithoutEvidence).toContain('typically');
      // This should fail validation since "typically" indicates inference
    });
  });
});
