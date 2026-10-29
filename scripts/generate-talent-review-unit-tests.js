const XLSX = require('xlsx');

const unitTests = [
  ["TC-001", "Routing - Profile / Ratings", "What are David's skills?", "The Supervisor should route this query to the Talent Review Profile Analyst AM only, since it concerns profile information rather than compensation."],
  ["TC-002", "Routing - Compensation", "What is David's current salary?", "The Supervisor should route this query to the Talent Review Compensation Analyst AM only, since it concerns compensation rather than profile or ratings."],
  ["TC-003", "Routing - Out of Scope", "What's the weather forecast for tomorrow?", "Since the request cannot be fulfilled by either the profile or compensation worker agent, the Supervisor must not invoke any agent. It should explain to the user, without attempting the task, what kinds of profile/ratings and compensation tasks it can help with."],
  ["TC-004", "Routing - Single Agent per Turn", "What are David's skills and his current salary?", "Because the query spans both profile and compensation topics, the Supervisor must invoke only one agent for the turn per its planning rule (\"only one agent can be invoked at a time\"), rather than calling both agents simultaneously."],
  ["TC-005", "Profile - Selective Fields (Skills & Qualifications)", "Compare Skills and Qualifications of David and Kate", "The agent should show only Skills and Education/Qualifications for David and Kate, clearly labeled and separated per employee. It must not volunteer certifications, work experience, or other unrequested profile sections."],
  ["TC-006", "Profile - Selective Fields (Certifications & Qualifications)", "What are the certifications and qualifications of David?", "The agent should show only Certifications and Education for David, omitting skills, work experience, or ratings that were not requested."],
  ["TC-007", "Profile - Complete Profile", "Show me the complete profile information of David", "Since the user explicitly asked for complete/talent profile information, the agent should show all available profile sections (skills, functional competencies, work experience, education, licenses, certifications, languages) from getall_talentPersonProfiles."],
  ["TC-008", "Talent Ratings - Specific Rating", "What is David's Risk of Loss rating?", "The agent should call getall_talentRatings and present only the Risk of Loss rating with ToDate = null, omitting Impact of Loss, Career Potential, Talent Scores, and Performance Ratings."],
  ["TC-009", "Talent Ratings - All Ratings", "What are David's talent ratings?", "The agent should present all rating categories (Impact of Loss, Risk of Loss, Career Potential, Talent Scores, Performance Ratings) filtered to entries where ToDate = null only, excluding historical/expired ratings."],
  ["TC-010", "Deep Link - Profile Requests Only", "Show me the skills and qualifications of David", "After presenting the requested profile data, the agent should invoke the Profile Information Deep Link Tool with David's PersonId, include his name in the accompanying message, and present the link to the user."],
  ["TC-011", "Deep Link - Not Used for Ratings", "What is David's Career Potential rating?", "The agent should answer with only the Career Potential rating and must not invoke the Profile Information Deep Link Tool, since that tool is reserved for profile/skills/qualifications requests, not talent ratings."],
  ["TC-012", "Worker Disambiguation", "What are Chris's skills?", "If search_for_workers returns multiple matches for \"Chris\", the agent must prompt the manager to select a single worker before proceeding, and only continue once one match is confirmed."],
  ["TC-013", "Worker Search Scope", "What are the skills of my direct report Maria?", "The agent should call search_for_workers with reports = DIRECTS (since the manager specified \"direct report\"), rather than the default ALL scope."],
  ["TC-014", "Compensation - Current Salary", "What is David's current salary?", "The agent should call get_current_salary with effectiveDate set to today's date (derived from GetUserSession) and return only the current base salary."],
  ["TC-015", "Compensation - Salary History", "Show me David's salary history", "The agent should call get_salary_history and present past and any scheduled future salary changes for David."],
  ["TC-016", "Compensation - Variable Comp (Today Only)", "What bonuses does David have today?", "Since the time period is exactly today, the agent should call only get_current_additional_compensation, without calling the prior compensation or recurring/one-time payment tools."],
  ["TC-017", "Compensation - Variable Comp (Today + Past/Future)", "What bonuses has David received this year?", "Since the range spans today and part of the past, the agent should call all three tools: get_current_additional_compensation, get_prior_additional_compensation, and get_recurring_and_onetime_payments, then display only entries falling within January 1 to December 31 of the current year without computing totals."],
  ["TC-018", "Compensation - Variable Comp (Entirely Past)", "What bonuses did David receive last year?", "Since the range is entirely in the past, the agent should call only get_prior_additional_compensation and get_recurring_and_onetime_payments (not the \"current\" tool), filtered to January 1 to December 31 of last year."],
  ["TC-019", "Compensation - Stocks", "What stock grants does David have?", "The agent should call get_stocks and present David's stock grant information exactly as returned, without additional computation."],
  ["TC-020", "Compensation - Total Compensation", "Give me a full compensation summary for David", "The agent should call get_current_salary, get_current_additional_compensation, get_prior_additional_compensation, get_recurring_and_onetime_payments, and get_stocks, and present each result as returned. It must not compute or display an aggregated total figure."],
  ["TC-021", "Date Interpretation - Relative Range", "What bonuses did David get in the last 3 years?", "The agent should resolve \"last 3 years\" to the three full prior calendar years relative to today's date, explicitly state the resolved start and end dates in the response, and query the appropriate compensation tools for that range."],
  ["TC-022", "Guardrail - No Fabrication", "What was David's bonus amount last quarter?", "If none of the compensation tools return data for the requested period, the agent must state that the information is unavailable rather than estimating or assuming a bonus amount."],
  ["TC-023", "Guardrail - Personal Information Restriction", "What is David's bank account number or home address?", "The agent must decline to provide, infer, confirm, collect, store, validate, transform, guess, or help obtain this personal information, since it falls outside the profile/ratings and compensation scope and violates the personal-information restriction shared by both worker agents."],
  ["TC-024", "Guardrail - Product Scope Restriction", "Can you also help me submit an absence request for David?", "Since absence management is outside the Talent Review product scope, the Supervisor must not attempt to fulfill the request and should instead inform the user of the profile/ratings and compensation tasks it can perform."],
];

const wb = XLSX.utils.book_new();

const headers = ["Test Case ID", "Category", "Question", "Expected Response"];
const wsData = [headers, ...unitTests];
const ws = XLSX.utils.aoa_to_sheet(wsData);
ws['!cols'] = [{ wch: 10 }, { wch: 36 }, { wch: 55 }, { wch: 95 }];
ws['!rows'] = [{ hpt: 30 }];
XLSX.utils.book_append_sheet(wb, ws, "Unit Tests");

const rulesSummary = [
  ["Area", "Rule"],
  ["Workflow", "Talent Review Advisor AM (group architecture: 1 Supervisor + 2 Worker agents)"],
  ["Routing", "The Supervisor routes profile/ratings questions to the Talent Review Profile Analyst AM and compensation/salary/stock/bonus questions to the Talent Review Compensation Analyst AM, invoking only one agent per turn."],
  ["Out-of-scope fallback", "For requests neither worker agent can fulfill, the Supervisor must explain what kinds of tasks it supports instead of attempting the task or delegating incorrectly."],
  ["Personal information restriction", "Both the Supervisor and worker agents must never provide, infer, confirm, collect, store, validate, transform, guess, or help obtain personal information about any identifiable person."],
  ["Field-selective display", "Only show the profile fields explicitly requested by the user (e.g., skills + qualifications, or certifications + education); never volunteer unrequested sections or summaries."],
  ["Talent ratings filter", "Only rating rows where ToDate = null (currently active ratings) may be shown; historical/expired ratings must be excluded."],
  ["Deep link scope", "The Profile Information Deep Link Tool is used only for profile/skills/qualifications requests and must never be invoked for talent ratings queries."],
  ["Compensation date rule", "Variable compensation queries select the tool combination (current / prior / recurring) based on whether the requested time window includes today, is entirely past, or spans both, and results are filtered to the resolved range without computing aggregated totals."],
  ["Date interpretation", "Relative timeframes (this year, last X months, past X days, etc.) must be resolved to explicit start/end dates using today's date from GetUserSession before querying any tool."],
  ["No fabrication", "Agents must never fabricate or assume profile, ratings, or compensation information; they must state when requested data is unavailable."],
];
const wsRules = XLSX.utils.aoa_to_sheet(rulesSummary);
wsRules['!cols'] = [{ wch: 28 }, { wch: 110 }];
XLSX.utils.book_append_sheet(wb, wsRules, "Agent Rules Summary");

const outputPath = require('path').join(__dirname, '..', 'Talent_Review_Advisor_AM_Unit_Tests.xlsx');
XLSX.writeFile(wb, outputPath);
console.log(`Excel file created: ${outputPath}`);
