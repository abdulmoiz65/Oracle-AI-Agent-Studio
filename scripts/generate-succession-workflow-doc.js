const { h1, h2, p, bullet, numbered, table, buildDocument, writeDocx } = require('./docHelpers');
const path = require('path');

const overview = table([
  ["Field", "Value"],
  ["Workflow name", "Succession Planning Advisor AM"],
  ["Workflow code", "SUCCESSION_PLANNING_ADVISOR_AM"],
  ["Description", "Assists managers with succession planning by identifying critical talent, suggesting potential successors, assessing readiness, supporting development of successors, providing timely alerts on workforce changes, creating succession plans, adding internal/external candidates, updating candidate ranking/readiness/interim flag/status, and reviewing plan revision history."],
  ["Family / Product", "HCM / SUCCESSION_MANAGEMENT"],
  ["Architecture", "group (1 Supervisor + 3 Worker agents)"],
  ["Maximum interactions", "10 per worker agent"],
  ["Access modifier", "public"],
  ["Human approval / wait flag", "False / False"],
  ["Follow-up prompt enabled", "False"],
], [30, 70]);

const nodesTable = table([
  ["Component", "Code", "Name", "Role in logic"],
  ["Workflow", "SUCCESSION_PLANNING_ADVISOR_AM", "Succession Planning Advisor AM", "Top-level advisor workflow. Owns metadata, access, architecture, and triggers."],
  ["Supervisor agent", "SUCCESSION_PLANNING_SUPERVISOR_AM", "Succession Planning Supervisor AM", "Routes every user query to exactly one Worker Agent based on keyword/intent matching, then summarizes the worker's response for the user."],
  ["Worker agent 1", "ORA_CRITICAL_TALENT_SUCCESSION_ANALYZER", "Critical Talent Succession Analyzer", "Identifies critical/at-risk employees and reports who does or does not have succession plan coverage, up to a management level."],
  ["Worker agent 2", "ORA_SUCCESSION_COVERAGE_ANALYZER", "Succession Coverage Analyzer", "Answers \"what happens if this employee leaves/retires/is promoted\" questions using an employee's existing succession plan(s) and successor readiness."],
  ["Worker agent 3", "ORA_SUCCESSION_MANAGER", "Succession Manager", "Handles employee- and plan-centric succession plan management: viewing plans/candidacy, creating plans, adding internal/external candidates, updating candidate ranking/readiness/status/interim flag, and viewing plan revision history."],
  ["Deep link tools", "Multiple", "Create Succession Plan / Review Succession Plan Details / Succession Orgchart", "Direct the manager to the relevant Oracle Fusion screen instead of performing the full transaction conversationally."],
], [16, 26, 26, 32]);

const routingTable = table([
  ["Priority", "Worker Agent", "Match Triggers"],
  ["1 (highest)", "Critical Talent Succession Analyzer", "Tokens/phrases such as \"critical\", \"critical talent\", \"high-risk\", \"high-impact\", \"key role(s)\", \"at risk\", \"my team\", \"my organization\", \"team with/without succession plans\"."],
  ["2", "Succession Coverage Analyzer", "Explicit replacement/backfill verbs (\"replace\", \"backfill\", \"backup for\") or exit/transition conditions (\"what happens if\", \"if <employee> leaves/retires/is promoted\", \"retire\", \"leave\", \"promote\")."],
  ["3", "Succession Manager", "Explicit reference to an individual employee's succession plan/readiness/candidacy, or plan-centric requests such as creating a plan, adding a candidate, updating ranking/readiness/status/interim flag, or plan revision history."],
], [18, 30, 52]);

const canDoBullets = [
  "Identify critical or at-risk employees in a manager's team or organization, up to a specified management level, based on maximum Impact of Loss, Risk of Loss, or Job Risk ratings.",
  "Report which employees have and do not have succession plan coverage.",
  "Explain succession coverage impact for a specific employee (who could replace them, and whether any successor is \"Ready Now\").",
  "Retrieve an employee's own succession plans (as incumbent) and the plans where they are listed as a candidate/successor.",
  "Look up succession plan details by plan name, or by job/position name when no exact plan name match exists.",
  "Create a new succession plan (Incumbent, Job, or Position type) after explicit manager approval, and automatically populate incumbents for the new plan.",
  "Add an internal candidate (existing worker) or an external candidate (existing or newly created) to a succession plan.",
  "Update a candidate's ranking, readiness level, status, and interim successor flag on a plan.",
  "Show a succession plan's revision history (plan, candidate, and owner history) for a specified or default date range.",
];

const cannotDoBullets = [
  "Cannot create, modify, or update a succession plan without the manager's explicit approval of a presented summary.",
  "Cannot merge multiple worker agents' responses into a single answer — the Supervisor invokes exactly one Worker Agent per query.",
  "Cannot infer or fabricate ratings, plans, successors, or history that were not returned by a tool call.",
  "Cannot reuse a stale employee lookup across queries about different people — a fresh search_for_workers call is required whenever a new person is named.",
  "Cannot provide, infer, confirm, collect, store, validate, transform, guess, or help obtain personal information about any identifiable person.",
  "Cannot answer or act on requests outside the succession-management product scope.",
  "Cannot skip the populateIncumbentsForPlan call after creating a plan.",
];

const fallbackTable = table([
  ["Situation", "Trigger", "Required Behavior"],
  ["No succession plan exists", "Employee lookup succeeds but get_successionPlans_for_person returns no plan.", "State that no succession coverage exists and present the Create Succession Plan deep link."],
  ["No \"Ready Now\" successor", "A plan exists but no successor has readiness \"Ready Now\".", "List the existing successors and readiness levels, and flag the plan as \"needs attention\"."],
  ["Ambiguous employee name", "search_for_workers returns multiple matches.", "Ask the manager to identify the specific employee before proceeding."],
  ["Plan creation not yet approved", "User requests plan creation but has not explicitly approved the summary.", "Present the plan summary and wait for explicit approval; do not call any create_talentSuccessionPlans_* tool."],
  ["Personal information request", "User asks for identifiable personal information beyond succession scope.", "Decline to provide, infer, collect, or store the requested personal information."],
  ["Out-of-scope request", "Query is unrelated to succession management.", "Do not attempt the task; state the kinds of succession-planning tasks that can be performed."],
], [22, 38, 40]);

const validationChecklist = table([
  ["Validation Area", "What to Test"],
  ["Routing accuracy", "Confirm the Supervisor selects exactly one Worker Agent per query, applying the documented priority order when multiple categories match."],
  ["Critical talent classification", "Confirm employees are flagged critical only when Impact of Loss, Risk of Loss, or Job Risk is at its maximum rating."],
  ["Coverage guardrails", "Confirm the Coverage Analyzer flags missing plans and missing \"Ready Now\" successors rather than assuming coverage."],
  ["Approval gate", "Confirm no succession plan is created without explicit manager approval of the presented summary."],
  ["Post-create step", "Confirm populateIncumbentsForPlan is always called immediately after a plan is created."],
  ["Candidate management", "Confirm internal and external candidates (existing and newly created) are added correctly, and ranking/readiness/status/interim updates apply only to the intended candidate."],
  ["Plan history formatting", "Confirm plan/candidate/owner history is paginated correctly and summarized with total changes and current successor coverage."],
  ["Disambiguation", "Confirm the agent asks for clarification when multiple employees share a name instead of guessing."],
  ["No fabrication", "Confirm the agent states information is unavailable rather than inventing ratings, plans, or history."],
  ["Personal information restriction", "Confirm requests for identifiable personal information beyond succession scope are declined."],
]);

const appendixTable = table([
  ["Configuration Item", "Value"],
  ["Supervisor agent code", "SUCCESSION_PLANNING_SUPERVISOR_AM"],
  ["Worker agent codes", "ORA_CRITICAL_TALENT_SUCCESSION_ANALYZER, ORA_SUCCESSION_COVERAGE_ANALYZER, ORA_SUCCESSION_MANAGER"],
  ["Agent type", "SUPERVISOR / WORKER"],
  ["Namespace", "HCM.SUCCESSION_MANAGEMENT"],
  ["Module ID", "B476880E6172C5F0E04044988AF05D99"],
  ["Seeded flag", "True (all agents)"],
  ["Reusable flag", "True (all worker agents)"],
  ["Maximum interactions", "10 (per worker agent)"],
], [40, 60]);

const sections = [
  h1("1. Overview"),
  p("This document explains the routing and business logic contained in the Succession Planning Advisor AM export. Unlike a single-agent advisor, this workflow uses a group architecture: a Supervisor agent classifies each user query and delegates it to exactly one of three specialized Worker agents, then summarizes the worker's response for the manager."),
  overview,

  h1("2. Workflow Diagram (Textual)"),
  p("Figure 1 illustrates the routing logic: the Supervisor receives the manager's question, classifies its intent, and forwards it to exactly one Worker agent, whose response is then summarized back to the user."),
  numbered("Manager submits a question in chat."),
  numbered("Succession Planning Supervisor AM normalizes and classifies the query."),
  numbered("Supervisor applies the routing algorithm (priority: Critical Talent > Coverage > Manager) and selects exactly one Worker agent."),
  numbered("Selected Worker agent performs Employee Lookup / Session Initialization as needed, then calls its designated tools."),
  numbered("Worker agent returns its findings (data, deep link, or fallback message) to the Supervisor."),
  numbered("Supervisor summarizes and presents the final answer to the manager, then the conversation terminates."),

  h1("3. Routing Logic"),
  p("The Supervisor's routing algorithm normalizes the input (lowercase, trim, remove punctuation) and matches tokens/phrases in priority order. Only one Worker agent is invoked per query."),
  routingTable,

  h1("4. Nodes, Components, and Tools"),
  nodesTable,

  h1("5. What the Workflow Can Do"),
  ...canDoBullets.map(bullet),

  h1("6. What the Workflow Cannot Do"),
  ...cannotDoBullets.map(bullet),

  h1("7. Required Fallback and Guardrail Behaviors"),
  fallbackTable,

  h1("8. Important Observations and Design Notes"),
  bullet("Group/multi-agent design. Unlike a single-agent advisor, routing decisions and summarization are handled by a dedicated Supervisor agent, keeping each Worker agent focused on a narrow responsibility."),
  bullet("Strict one-agent-per-turn rule. The Supervisor must output only the chosen worker agent's name for routing purposes — no reasoning or extra text — and must not invoke more than one Worker agent for a single query."),
  bullet("Approval-gated writes. Only the Succession Manager agent performs write operations (create plan, add candidate, update candidate), and all of them require explicit manager approval before execution."),
  bullet("Fresh lookups required. Every worker agent re-runs Employee Lookup whenever a new person's name appears in the query, rather than reusing previously stored identifiers."),
  bullet("Deep links over transactions. Full plan review and plan creation are surfaced via deep links to the Oracle Fusion succession planning UI rather than being fully completed in chat."),

  h1("9. Recommended Validation Checklist"),
  validationChecklist,

  h1("Appendix A. Source Configuration Snapshot"),
  appendixTable,
];

const doc = buildDocument(
  "Succession Planning Advisor AM — Workflow Agent Analysis",
  "Oracle AI Agent Studio export review · Source JSON: SUCCESSION_PLANNING_ADVISOR_AM.json",
  sections
);

writeDocx(doc, path.join(__dirname, '..', 'Succession_Planning_Advisor_AM_Workflow_Analysis.docx'));
