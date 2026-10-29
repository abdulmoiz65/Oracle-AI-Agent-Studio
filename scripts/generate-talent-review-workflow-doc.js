const { h1, p, bullet, numbered, table, buildDocument, writeDocx } = require('./docHelpers');
const path = require('path');

const overview = table([
  ["Field", "Value"],
  ["Workflow name", "Talent Review Advisor AM"],
  ["Workflow code", "TALENT_REVIEW_ADVISOR_AM"],
  ["Description", "An agent team that assists managers in the talent review process, offering tools and insights to evaluate employee profile, talent ratings, and compensation information."],
  ["Family / Product", "HCM / TALENT_REVIEW"],
  ["Architecture", "group (1 Supervisor + 2 Worker agents)"],
  ["Model configuration", "OCI_GPT_5_MINI (CERT_PREMIUM)"],
  ["Maximum interactions", "10 per worker agent"],
  ["Access modifier", "public"],
  ["Human approval / wait flag", "False / False"],
], [30, 70]);

const nodesTable = table([
  ["Component", "Code", "Name", "Role in logic"],
  ["Workflow", "TALENT_REVIEW_ADVISOR_AM", "Talent Review Advisor AM", "Top-level advisor workflow. Owns metadata, access, architecture, and triggers."],
  ["Supervisor agent", "TALENT_REVIEW_ADVISOR_AM", "Talent Review Advisor AM", "Plans and delegates each query to exactly one worker agent based on topic (profile/ratings vs. compensation). Stays within Talent Review product topics only."],
  ["Worker agent 1", "TALENT_PROFILE_AGENT_AM", "Talent Review Profile Analyst AM", "Retrieves and compares employee profile data (skills, education, certifications, work experience) and talent ratings (Impact of Loss, Risk of Loss, Career Potential, Talent Scores, Performance Ratings)."],
  ["Worker agent 2", "WORKER_COMPENSATION_AGENT_AM", "Talent Review Compensation Analyst AM", "Retrieves salary, salary history, variable compensation (additional and recurring/one-time payments), stock grants, and total compensation summaries."],
  ["Deep link tool", "ORA_PROFILE_INFORMATION_DEEP_LINK_TOOL", "Profile Information Deep Link Tool", "Links the manager to the employee's Skills and Qualifications page; used only for profile requests, never for ratings."],
], [16, 24, 26, 34]);

const routingTable = table([
  ["Topic", "Routed Agent", "Examples"],
  ["Profile information or talent ratings", "Talent Review Profile Analyst AM", "Skills, education, certifications, work experience, Impact of Loss, Risk of Loss, Career Potential, Talent Scores, Performance Ratings."],
  ["Compensation, salary, stocks, bonus, incentives", "Talent Review Compensation Analyst AM", "Current salary, salary history, additional/recurring compensation, stock grants, total compensation."],
  ["Anything else", "None (no delegation)", "The Supervisor explains what kinds of tasks it can perform instead of attempting the request."],
], [30, 30, 40]);

const canDoBullets = [
  "Retrieve an employee's profile data (skills, functional competencies, work experience, education, licenses, certifications, languages) and display only the fields explicitly requested.",
  "Show a complete profile only when the user explicitly asks for the complete/talent profile information.",
  "Retrieve talent ratings (Impact of Loss, Risk of Loss, Career Potential, Talent Scores, Performance Ratings), filtered to currently active entries (ToDate = null).",
  "Provide a deep link to the Skills and Qualifications page when profile information is requested.",
  "Disambiguate between multiple workers with the same name before continuing.",
  "Search within a manager's direct reports or all reports based on the user's phrasing.",
  "Retrieve an employee's current salary and salary history (past and scheduled future changes).",
  "Retrieve variable compensation (additional compensation and recurring/one-time payments), selecting the correct combination of tools based on whether the requested period includes today, is entirely past, or spans both.",
  "Retrieve stock grant information.",
  "Provide a full compensation summary combining salary, variable compensation, and stock data without computing aggregated totals.",
  "Resolve relative date expressions (this year, last X months, past X days, etc.) into explicit date ranges using the session's current date.",
];

const cannotDoBullets = [
  "Cannot invoke both the Profile Analyst and the Compensation Analyst for the same query — the Supervisor delegates to only one agent at a time.",
  "Cannot volunteer profile sections, ratings, or compensation details beyond what the user explicitly requested.",
  "Cannot show talent ratings with a non-null ToDate (historical/expired ratings).",
  "Cannot invoke the Profile Information Deep Link Tool for talent ratings requests.",
  "Cannot compute or display aggregated compensation totals — each entry must be shown exactly as returned.",
  "Cannot provide, infer, confirm, collect, store, validate, transform, guess, or help obtain personal information about any identifiable person.",
  "Cannot fabricate or assume profile, ratings, or compensation data that was not returned by a tool call.",
  "Cannot respond to requests outside the Talent Review product scope (e.g., absence management, recruiting).",
];

const fallbackTable = table([
  ["Situation", "Trigger", "Required Behavior"],
  ["Ambiguous worker name", "search_for_workers returns multiple matches.", "Prompt the manager to select one worker before continuing."],
  ["Out-of-scope request", "Query is unrelated to profile/ratings or compensation.", "Do not delegate to either worker agent; explain the supported task types instead."],
  ["Personal information request", "User asks for identifiable personal information beyond profile/compensation scope.", "Decline to provide, infer, collect, or store the requested personal information."],
  ["Missing compensation data", "A compensation tool returns no data for the requested period.", "State that the information is unavailable rather than estimating an amount."],
  ["Combined profile + compensation ask", "A single query spans both topics.", "Delegate to only one agent per the Supervisor's single-agent-at-a-time rule."],
], [22, 38, 40]);

const validationChecklist = table([
  ["Validation Area", "What to Test"],
  ["Routing accuracy", "Confirm profile/ratings queries go only to the Profile Analyst and compensation queries go only to the Compensation Analyst, with exactly one agent invoked per turn."],
  ["Field-selective display", "Confirm only explicitly requested profile fields are shown, with no unrequested sections volunteered."],
  ["Ratings filter", "Confirm only ratings with ToDate = null are displayed."],
  ["Deep link scope", "Confirm the Profile Information Deep Link Tool appears only for profile requests, never for ratings."],
  ["Compensation tool selection", "Confirm the correct combination of current/prior/recurring compensation tools is used based on the requested date range."],
  ["Date resolution", "Confirm relative timeframes are resolved to explicit, correct start/end dates."],
  ["Disambiguation", "Confirm the agent requests clarification when multiple workers share a name."],
  ["No fabrication", "Confirm the agent states data is unavailable rather than inventing profile or compensation details."],
  ["Personal information restriction", "Confirm requests for identifiable personal information beyond scope are declined."],
  ["Out-of-scope handling", "Confirm unsupported requests receive an explanatory response rather than an attempted answer."],
]);

const appendixTable = table([
  ["Configuration Item", "Value"],
  ["Supervisor agent code", "TALENT_REVIEW_ADVISOR_AM"],
  ["Worker agent codes", "TALENT_PROFILE_AGENT_AM, WORKER_COMPENSATION_AGENT_AM"],
  ["Agent type", "SUPERVISOR / WORKER"],
  ["Namespace", "HCM.TALENT_REVIEW"],
  ["Summarization mode (workers)", "Disabled"],
  ["Maximum interactions", "10 (per worker agent)"],
], [40, 60]);

const sections = [
  h1("1. Overview"),
  p("This document explains the routing and business logic contained in the Talent Review Advisor AM export. The workflow uses a group architecture: a Supervisor agent classifies each manager query as either a profile/ratings request or a compensation request and delegates it to exactly one specialized Worker agent."),
  overview,

  h1("2. Workflow Diagram (Textual)"),
  p("Figure 1 illustrates the routing logic: the Supervisor receives the manager's question, classifies its topic, and forwards it to exactly one Worker agent."),
  numbered("Manager submits a question about an employee in chat."),
  numbered("Talent Review Advisor AM (Supervisor) determines whether the ask concerns profile/ratings or compensation."),
  numbered("If profile- or ratings-related, the Supervisor delegates to the Talent Review Profile Analyst AM."),
  numbered("If compensation-related, the Supervisor delegates to the Talent Review Compensation Analyst AM."),
  numbered("If neither applies, the Supervisor does not delegate and instead informs the manager of supported task types."),
  numbered("The selected Worker agent resolves the employee (with disambiguation if needed), calls its designated tools, and returns its findings."),
  numbered("The Supervisor presents the result to the manager and the conversation terminates."),

  h1("3. Routing Logic"),
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
  bullet("Group/multi-agent design. The Supervisor performs planning and delegation only; it does not itself answer profile, ratings, or compensation questions."),
  bullet("Single-agent-per-turn rule. The Supervisor's prompt explicitly requires that only one agent be invoked at a time, even when a query spans both topics."),
  bullet("Read-only workflow. Neither worker agent performs write/transactional operations; both only retrieve and present data."),
  bullet("Strict field selectivity. Both worker agents are instructed to show only explicitly requested fields and avoid follow-up questions, deriving the complete answer from available data instead."),
  bullet("Personal information restriction. The Supervisor's prompt explicitly forbids providing, inferring, confirming, collecting, storing, validating, transforming, guessing, or helping obtain personal information about any identifiable person."),

  h1("9. Recommended Validation Checklist"),
  validationChecklist,

  h1("Appendix A. Source Configuration Snapshot"),
  appendixTable,
];

const doc = buildDocument(
  "Talent Review Advisor AM — Workflow Agent Analysis",
  "Oracle AI Agent Studio export review · Source JSON: TALENT_REVIEW_ADVISOR_AM.json",
  sections
);

writeDocx(doc, path.join(__dirname, '..', 'Talent_Review_Advisor_AM_Workflow_Analysis.docx'));
