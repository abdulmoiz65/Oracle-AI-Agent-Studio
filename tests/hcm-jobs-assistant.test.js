/**
 * HCM Jobs Assistant Agent - Test Suite
 * Agent: HCM_PER_JOBS_ASSISTANT_JOBASISTANT65
 * Description: Tests for the Jobs Assistant that helps HR Specialists create new jobs in Oracle HCM.
 */

const agentConfig = require('../exports/hcm-jobs-assistant/HCM_PER_JOBS_ASSISTANT_JOBASISTANT65.json');

// ─── Helpers ──────────────────────────────────────────────────────────────────

const agent = agentConfig.agents[0];
const tools = agent.tools;

function getToolByCode(code) {
  return tools.find(t => t.ToolCode === code);
}

function getRestTool(toolCode, toolName) {
  const tool = getToolByCode(toolCode);
  if (!tool || !tool.RestTool) return null;
  return tool.RestTool.ObjectProperties.tools.find(t => t.name === toolName);
}

// ─── 1. Agent Configuration Tests ─────────────────────────────────────────────

describe('1. Agent Configuration', () => {
  test('workflow has correct code', () => {
    expect(agentConfig.WorkflowCode).toBe('HCM_PER_JOBS_ASSISTANT_JOBASISTANT65');
  });

  test('workflow family is HCM and product is GLOBAL_HUMAN_RESOURCES', () => {
    expect(agentConfig.Family).toBe('HCM');
    expect(agentConfig.Product).toBe('GLOBAL_HUMAN_RESOURCES');
  });

  test('architecture is single_agent', () => {
    expect(agentConfig.Architecture).toBe('single_agent');
  });

  test('maximum interactions is 10', () => {
    expect(agentConfig.MaximumInteractions).toBe(10);
  });

  test('agent type is WORKER', () => {
    expect(agent.AgentType).toBe('WORKER');
  });

  test('agent is not seeded (customizable)', () => {
    expect(agent.SeededFlag).toBe(false);
  });

  test('start question is "Create a Job"', () => {
    expect(agentConfig.StartQuestionOne).toBe('Create a Job');
  });

  test('agent has exactly 5 tools attached', () => {
    expect(tools.length).toBe(5);
  });
});

// ─── 2. Tool Availability Tests ────────────────────────────────────────────────

describe('2. Tool Availability', () => {
  test('view_job_link (deeplink) tool is present', () => {
    const tool = getToolByCode('ORA_HCM_PER_VIEW_JOB_LINK');
    expect(tool).toBeDefined();
    expect(tool.Type).toBe('DEEPLINK');
  });

  test('Jobs (create) tool is present', () => {
    const tool = getToolByCode('ORA_HCM_PER_JOBS');
    expect(tool).toBeDefined();
    expect(tool.Type).toBe('BUS_OBJECT');
  });

  test('Enterprise Configuration tool is present', () => {
    const tool = getToolByCode('ORA_HCM_PER_ENTERPRISE_CONFIGURATION');
    expect(tool).toBeDefined();
    expect(tool.Type).toBe('BUS_OBJECT');
  });

  test('Jobs List tool is present', () => {
    const tool = getToolByCode('ORA_HCM_PER_JOBS_LIST');
    expect(tool).toBeDefined();
    expect(tool.Type).toBe('BUS_OBJECT');
  });

  test('GetUserSession tool is present', () => {
    const tool = getToolByCode('ORA_USER_SESSION_TOOL');
    expect(tool).toBeDefined();
    expect(tool.Type).toBe('USER_SESSION');
  });
});

// ─── 3. create_job Tool Specification ─────────────────────────────────────────

describe('3. create_job Tool Specification', () => {
  const createJobTool = getRestTool('ORA_HCM_PER_JOBS', 'create_job');

  test('create_job tool exists', () => {
    expect(createJobTool).toBeDefined();
  });

  test('create_job uses POST operation', () => {
    expect(createJobTool.operationType).toBe('POST');
  });

  test('create_job resource path points to jobsV2', () => {
    expect(createJobTool.resourcePath).toContain('/hcmRestApi/resources/11.13.18.05/jobsV2');
  });

  test('create_job requires jobName as token parameter', () => {
    const jobNameParam = createJobTool.parameterDefinitions.find(p => p.name === 'jobName');
    expect(jobNameParam).toBeDefined();
    expect(jobNameParam.isToken).toBe(true);
  });

  test('create_job requires jobCode as token parameter', () => {
    const jobCodeParam = createJobTool.parameterDefinitions.find(p => p.name === 'jobCode');
    expect(jobCodeParam).toBeDefined();
    expect(jobCodeParam.isToken).toBe(true);
  });

  test('create_job body template includes JobName and JobCode', () => {
    expect(createJobTool.bodyTemplate).toContain('{jobName}');
    expect(createJobTool.bodyTemplate).toContain('{jobCode}');
  });

  test('create_job body template sets SetId to 0', () => {
    expect(createJobTool.bodyTemplate).toContain('"SetId": 0');
  });
});

// ─── 4. create_job_without_code Tool Specification ────────────────────────────

describe('4. create_job_without_code Tool Specification', () => {
  const createJobNoCodeTool = getRestTool('ORA_HCM_PER_JOBS', 'create_job_without_code');

  test('create_job_without_code tool exists', () => {
    expect(createJobNoCodeTool).toBeDefined();
  });

  test('create_job_without_code uses POST operation', () => {
    expect(createJobNoCodeTool.operationType).toBe('POST');
  });

  test('create_job_without_code only requires jobName (no jobCode)', () => {
    const params = createJobNoCodeTool.parameterDefinitions;
    const hasJobName = params.some(p => p.name === 'jobName' && p.isToken === true);
    const hasJobCode = params.some(p => p.name === 'jobCode');
    expect(hasJobName).toBe(true);
    expect(hasJobCode).toBe(false);
  });

  test('create_job_without_code body template does NOT include jobCode placeholder', () => {
    expect(createJobNoCodeTool.bodyTemplate).not.toContain('{jobCode}');
  });
});

// ─── 5. Enterprise Configuration Tool Specification ───────────────────────────

describe('5. Enterprise Configuration Tool Specification', () => {
  const entConfigTool = getRestTool(
    'ORA_HCM_PER_ENTERPRISE_CONFIGURATION',
    'find_enterprise_configuration_by_context_code'
  );

  test('find_enterprise_configuration_by_context_code tool exists', () => {
    expect(entConfigTool).toBeDefined();
  });

  test('uses GET operation', () => {
    expect(entConfigTool.operationType).toBe('GET');
  });

  test('ContextCode is a token parameter', () => {
    const param = entConfigTool.parameterDefinitions.find(p => p.name === 'ContextCode');
    expect(param).toBeDefined();
    expect(param.isToken).toBe(true);
  });

  test('resource path uses findByContextCode finder', () => {
    expect(entConfigTool.resourcePath).toContain('findByContextCode');
    expect(entConfigTool.resourcePath).toContain('ContextCode={ContextCode}');
  });
});

// ─── 6. view_job_link DeepLink Specification ──────────────────────────────────

describe('6. view_job_link DeepLink Specification', () => {
  const deepLinkTool = getToolByCode('ORA_HCM_PER_VIEW_JOB_LINK');
  const deepLink = deepLinkTool && deepLinkTool.DeepLinkTool;

  test('DeepLinkTool is defined', () => {
    expect(deepLink).toBeDefined();
  });

  test('destination URL contains effectiveDate and jobId parameters', () => {
    expect(deepLink.DestinationURL).toContain('{effectiveDate}');
    expect(deepLink.DestinationURL).toContain('{jobId}');
  });

  test('destination URL points to /fscmUI/redwood/jobs', () => {
    expect(deepLink.DestinationURL).toContain('/fscmUI/redwood/jobs');
  });

  test('effectiveDate parameter is of type date', () => {
    const param = deepLink.DeepLinkProperties.parameterDefinitions.find(
      p => p.name === 'effectiveDate'
    );
    expect(param).toBeDefined();
    expect(param.dataType).toBe('date');
  });

  test('jobId parameter is of type string', () => {
    const param = deepLink.DeepLinkProperties.parameterDefinitions.find(
      p => p.name === 'jobId'
    );
    expect(param).toBeDefined();
    expect(param.dataType).toBe('string');
  });
});

// ─── 7. Jobs List Tool Specification ──────────────────────────────────────────

describe('7. Jobs List Tool Specification', () => {
  const jobsListTool = getToolByCode('ORA_HCM_PER_JOBS_LIST');

  test('find_by_job_id operation exists', () => {
    const op = getRestTool('ORA_HCM_PER_JOBS_LIST', 'find_by_job_id');
    expect(op).toBeDefined();
    expect(op.operationType).toBe('GET');
  });

  test('find_jobs_by_word operation exists', () => {
    const op = getRestTool('ORA_HCM_PER_JOBS_LIST', 'find_jobs_by_word');
    expect(op).toBeDefined();
    expect(op.operationType).toBe('GET');
  });

  test('get_jobs_count operation exists', () => {
    const op = getRestTool('ORA_HCM_PER_JOBS_LIST', 'get_jobs_count');
    expect(op).toBeDefined();
  });

  test('get_jobs_count_by_set operation exists', () => {
    const op = getRestTool('ORA_HCM_PER_JOBS_LIST', 'get_jobs_count_by_set');
    expect(op).toBeDefined();
  });

  test('find_jobs_by_word has searchTerm as token parameter', () => {
    const op = getRestTool('ORA_HCM_PER_JOBS_LIST', 'find_jobs_by_word');
    const param = op.parameterDefinitions.find(p => p.name === 'searchTerm');
    expect(param).toBeDefined();
    expect(param.isToken).toBe(true);
  });

  test('find_by_job_id has jobId as token parameter', () => {
    const op = getRestTool('ORA_HCM_PER_JOBS_LIST', 'find_by_job_id');
    const param = op.parameterDefinitions.find(p => p.name === 'jobId');
    expect(param).toBeDefined();
    expect(param.isToken).toBe(true);
  });
});

// ─── 8. Agent Prompt Business Rules ───────────────────────────────────────────

describe('8. Agent Prompt – Business Rules', () => {
  const prompt = agent.Prompt;

  test('prompt instructs agent to check enterprise configuration first', () => {
    expect(prompt).toMatch(/find_enterprise_configuration_by_context_code/);
    expect(prompt).toMatch(/ORA_PER_WS_CONFIGURATION/);
  });

  test('prompt uses create_job_without_code when jobCodeGenMethod is A or AS', () => {
    expect(prompt).toMatch(/jobCodeGenMethod.*['"]A['"]|['"]A['"].*jobCodeGenMethod/s);
    expect(prompt).toMatch(/create_job_without_code/);
  });

  test('prompt instructs to collect JobName from user', () => {
    expect(prompt).toMatch(/JobName/);
  });

  test('prompt instructs to collect JobCode from user (when required)', () => {
    expect(prompt).toMatch(/JobCode/);
  });

  test('prompt requires user approval before creating job', () => {
    expect(prompt).toMatch(/approval|agrees|explicit/i);
  });

  test('prompt prohibits accepting EffectiveStartDate input from user', () => {
    expect(prompt).toMatch(/EffectiveStartDate|Effective Start Date/i);
    expect(prompt).toMatch(/do not accept|not.*input.*date|no.*date.*input|permissible/i);
  });

  test('prompt instructs to provide view_job_link after creation', () => {
    expect(prompt).toMatch(/view_job_link/);
  });

  test('prompt handles responseStatus 201 (show deeplink) and 204 (submitted for approval)', () => {
    expect(prompt).toMatch(/201/);
    expect(prompt).toMatch(/204/);
  });

  test('prompt restricts agent to job creation scope only', () => {
    expect(prompt).toMatch(/Scope|scope/);
    expect(prompt).toMatch(/creating a new job/i);
  });

  test('prompt instructs to use most recent JobName/JobCode from chat history', () => {
    expect(prompt).toMatch(/chronologically recent|most recent/i);
  });

  test('prompt forbids generating own deeplink URL', () => {
    expect(prompt).toMatch(/DO NOT create your own deeplink/i);
  });

  test('prompt allows creating multiple jobs sequentially', () => {
    expect(prompt).toMatch(/multiple.*job|multiple jobs/i);
    expect(prompt).toMatch(/clear the chat history/i);
  });

  test('prompt allows GetUserSession for current user DisplayName only', () => {
    expect(prompt).toMatch(/GetUserSession/);
    expect(prompt).toMatch(/DisplayName/);
  });
});

// ─── 9. Summarization Prompt Rules ────────────────────────────────────────────

describe('9. Summarization Prompt Rules', () => {
  const sumPrompt = agent.Specification.summarizationPrompt;

  test('summarization prompt is defined', () => {
    expect(sumPrompt).toBeTruthy();
  });

  test('instructs not to mention tool calls or system processes', () => {
    expect(sumPrompt).toMatch(/do not mention tool calls|system processes/i);
  });

  test('on 201 response: show view_job_link with required fields', () => {
    expect(sumPrompt).toMatch(/201/);
    expect(sumPrompt).toMatch(/view_job_link/i);
    expect(sumPrompt).toMatch(/EffectiveStartDate/);
    expect(sumPrompt).toMatch(/JobId/);
    expect(sumPrompt).toMatch(/JobName/);
    expect(sumPrompt).toMatch(/JobCode/);
    expect(sumPrompt).toMatch(/SetName/);
  });

  test('on 204 response: notify submission, no deeplink', () => {
    expect(sumPrompt).toMatch(/204/);
    // Summarization prompt says "submitted for create successfully"
    expect(sumPrompt).toMatch(/submitted for create successfully|submitted for.*create/i);
    expect(sumPrompt).toMatch(/DO NOT talk about View Job/i);
  });

  test('instructs to convert CamelCase to readable labels', () => {
    expect(sumPrompt).toMatch(/CamelCase/i);
  });

  test('instructs not to append trailing period to URLs', () => {
    expect(sumPrompt).toMatch(/URL|deeplink/i);
    expect(sumPrompt).toMatch(/trailing|Period/i);
  });

  test('closing statement for general queries uses "Happy to help with any Job related actions"', () => {
    expect(sumPrompt).toMatch(/Happy to help with any Job related actions/i);
  });

  test('instructs not to show DisplayName of user as raw field', () => {
    expect(sumPrompt).toMatch(/DisplayName/);
  });
});

// ─── 10. Workflow / Agent Mapping ─────────────────────────────────────────────

describe('10. Workflow & Agent Mapping', () => {
  test('agentMappings contains one entry pointing to the jobs assistant agent', () => {
    expect(agentConfig.agentMappings).toHaveLength(1);
    expect(agentConfig.agentMappings[0].AgentCode).toBe(
      'HCM_PER_JOBS_ASSISTANT_AGENT_JOBASISTANT65'
    );
  });

  test('workflow StartAgentId is null (single agent, no routing needed)', () => {
    expect(agentConfig.StartAgentId).toBeNull();
  });

  test('workflow HiddenFlag is false (agent is visible)', () => {
    expect(agentConfig.HiddenFlag).toBe(false);
  });

  test('workflow AccessModifier is public', () => {
    expect(agentConfig.AccessModifier).toBe('public');
  });

  test('data pipeline has no nodes (stateless workflow)', () => {
    expect(agentConfig.Specification.dataPipeline.pipelineNodes).toHaveLength(0);
  });

  test('chatExpTPFileUploadEnabledFlag is false', () => {
    expect(agentConfig.Specification.chatExpTPFileUploadEnabledFlag).toBe(false);
  });
});

// ─── 11. Scenario-Based Test Cases (Prompt Logic) ─────────────────────────────

describe('11. Scenario-Based Test Cases (Input Validation)', () => {
  /**
   * These tests validate the agent's declared rules by inspecting the prompt/
   * summarization text. They simulate expected behaviour for common scenarios.
   */

  test('TC-01: Agent must ask for JobName before JobCode', () => {
    // Rule: step (a) get JobName, then step (b) get JobCode
    const stepA = prompt => prompt.match(/Get JobName as input/i);
    const stepB = prompt => prompt.match(/Get JobCode as input/i);
    expect(stepA(agent.Prompt)).toBeTruthy();
    expect(stepB(agent.Prompt)).toBeTruthy();
  });

  test('TC-02: Agent skips JobCode collection when jobCodeGenMethod is "A"', () => {
    expect(agent.Prompt).toMatch(/Skip this step if jobCodeGenMethod is.*"A"/i);
  });

  test('TC-03: Agent skips JobCode collection when jobCodeGenMethod is "AS"', () => {
    expect(agent.Prompt).toMatch(/Skip this step if jobCodeGenMethod is.*"AS"/i);
  });

  test('TC-04: Agent must confirm values with user before invoking create', () => {
    expect(agent.Prompt).toMatch(/provide summary.*get explicit approval|summary.*approval/is);
  });

  test('TC-05: After 201 response, view_job_link deeplink must be provided', () => {
    expect(agent.Prompt).toMatch(/responseStatus is 201.*view_job_link/is);
  });

  test('TC-06: After 204 response, agent informs user job is submitted for approval', () => {
    expect(agent.Prompt).toMatch(/responseStatus is 204.*submitted for approval/is);
  });

  test('TC-07: Agent declines input for EffectiveStartDate', () => {
    const expectedMessage =
      'The only permissible input attributes are JobName and JobCode';
    expect(agent.Prompt).toContain(expectedMessage);
  });

  test('TC-08: Agent declines input for any attribute other than JobName and JobCode', () => {
    expect(agent.Prompt).toMatch(/other.*JobName.*JobCode|no other.*attributes/i);
  });

  test('TC-09: Agent retrieves current user via GetUserSession and shows only DisplayName', () => {
    expect(agent.Prompt).toMatch(/GetUserSession/);
    expect(agent.Prompt).toMatch(/DisplayName/);
    expect(agent.Prompt).toMatch(/show only.*DisplayName|only.*DisplayName/i);
  });

  test('TC-10: Agent politely declines out-of-scope questions', () => {
    expect(agent.Prompt).toMatch(/Politely decline|out of scope|cannot be answered/i);
  });

  test('TC-11: Agent does not generate its own deeplink URL', () => {
    expect(agent.Prompt).toMatch(/DO NOT create your own deeplink url/i);
  });

  test('TC-12: Agent clears chat history before creating a second job', () => {
    expect(agent.Prompt).toMatch(/clear the chat history before proceeding with the next job/i);
  });

  test('TC-13: Agent uses most recent JobName from chat history (handles updates)', () => {
    expect(agent.Prompt).toMatch(/most chronologically recent.*JobName|most recent.*value/is);
  });

  test('TC-14: Agent general greeting mentions job-related actions capability', () => {
    expect(agent.Prompt).toMatch(/Job related actions/i);
  });

  test('TC-15: Agent does not open deeplinks itself — only provides them to user', () => {
    expect(agent.Prompt).toMatch(/cannot open.*deeplink|provide.*user will open/i);
  });

  test('TC-16: Agent terminates gracefully after providing view_job_link', () => {
    expect(agent.Prompt).toMatch(/thank you.*terminate|Terminate/i);
  });
});

// ─── 12. REST API Path Integrity ──────────────────────────────────────────────

describe('12. REST API Path Integrity', () => {
  test('all jobsV2 operations use the correct API version (11.13.18.05)', () => {
    const jobsTool = getToolByCode('ORA_HCM_PER_JOBS');
    jobsTool.RestTool.ObjectProperties.tools.forEach(op => {
      expect(op.resourcePath).toContain('11.13.18.05');
    });
  });

  test('all jobsLov operations use the correct API version (11.13.18.05)', () => {
    const jobsListTool = getToolByCode('ORA_HCM_PER_JOBS_LIST');
    jobsListTool.RestTool.ObjectProperties.tools.forEach(op => {
      expect(op.resourcePath).toContain('11.13.18.05');
    });
  });

  test('enterprise configuration path uses enterpriseConfigurations resource', () => {
    const tool = getRestTool(
      'ORA_HCM_PER_ENTERPRISE_CONFIGURATION',
      'find_enterprise_configuration_by_context_code'
    );
    expect(tool.resourcePath).toContain('enterpriseConfigurations');
  });

  test('find_jobs_by_word uses findByWord finder with limit 500', () => {
    const tool = getRestTool('ORA_HCM_PER_JOBS_LIST', 'find_jobs_by_word');
    expect(tool.resourcePath).toContain('findByWord');
    expect(tool.resourcePath).toContain('limit=500');
  });

  test('get_jobs_count uses totalResults=true', () => {
    const tool = getRestTool('ORA_HCM_PER_JOBS_LIST', 'get_jobs_count');
    expect(tool.resourcePath).toContain('totalResults=true');
  });
});
