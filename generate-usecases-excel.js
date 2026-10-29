const XLSX = require('xlsx');

const useCases = [
  {
    "Use Case": "HCM Worker Concierge",
    "Status": "Done",
    "Department": "Human Resources / HCM",
    "Description": "A conversational AI agent that acts as a virtual HR assistant for employees. It answers HR policy queries, provides payslip info, benefits details, and guides employees through HR processes — all via natural language.",
    "Solution Approach": "Integrated with Oracle HCM REST APIs (worker, benefits, compensation endpoints). Uses a supervisor agent pattern to route queries to specialised sub-agents for payroll, benefits, and policies.",
    "Key Requirements to Analyse": "Employee self-service data access, HR policy documents, benefits enrolment rules, payslip/compensation data, authentication & role-based data security.",
    "Productivity Impact": "Reduces HR helpdesk ticket volume by 40–60%. Provides 24/7 availability without human intervention. Eliminates average 15-min wait times for routine HR queries.",
    "Business Value": "Significant reduction in HR operational costs, improved employee satisfaction and experience, frees HR business partners to focus on strategic work."
  },
  {
    "Use Case": "Job Assistant Agent",
    "Status": "Done",
    "Department": "Talent Acquisition / HR",
    "Description": "An AI agent that helps employees and candidates navigate job listings, understand role requirements, check eligibility for internal moves, and guide them through the application process within Oracle Fusion HCM.",
    "Solution Approach": "Leverages Oracle HCM Jobs and Requisitions REST APIs. Provides job search, filtering, and recommendation capabilities. Integrates with candidate profile data for personalised suggestions.",
    "Key Requirements to Analyse": "Job catalog data, open requisitions, candidate/worker skill profiles, internal mobility policies, job matching criteria.",
    "Productivity Impact": "Reduces time-to-find-suitable-roles by 70%. Enables self-service job exploration without recruiter involvement for initial discovery.",
    "Business Value": "Improves internal mobility rates, enhances candidate experience, reduces cost-per-hire by surfacing internal talent first."
  },
  {
    "Use Case": "Recruiting Module Advisor",
    "Status": "Done",
    "Department": "Talent Acquisition",
    "Description": "An AI agent that guides recruiters step-by-step through the full Oracle Fusion recruiting lifecycle — from requisition to offer — providing contextual guidance, status summaries, and next-action recommendations.",
    "Solution Approach": "Orchestrates multiple Oracle Recruiting Cloud REST API calls. Uses workflow automation to track pipeline stages and proactively surface bottlenecks or pending actions.",
    "Key Requirements to Analyse": "Recruiting pipeline data, interview scheduling rules, offer management configuration, compliance and EEO requirements, approval hierarchies.",
    "Productivity Impact": "Reduces manual recruiter administrative tasks by 50%. Shortens time-to-hire by proactively flagging stalled candidates and pending approvals.",
    "Business Value": "Lower cost-per-hire, faster hiring cycles, improved recruiter capacity to manage more requisitions simultaneously."
  },
  {
    "Use Case": "Absence Submission",
    "Status": "Done",
    "Department": "Human Resources / Payroll",
    "Description": "An AI agent enabling employees to submit, check balances, and manage absence requests through a natural language conversational interface, eliminating the need to navigate complex Fusion HCM screens.",
    "Solution Approach": "Integrates with Oracle Absence Management REST APIs for balance enquiries, absence submissions, and status tracking. Includes calendar awareness and policy rule enforcement at submission time.",
    "Key Requirements to Analyse": "Absence type configuration, accrual balance rules, approval workflow setup, holiday calendars, payroll impact of absences.",
    "Productivity Impact": "Reduces absence submission time from 3–5 minutes to under 30 seconds. Eliminates navigation of multiple Fusion screens.",
    "Business Value": "Improved employee experience, reduced payroll errors from incorrect absence types, better compliance with absence policies."
  },
  {
    "Use Case": "Talent Management",
    "Status": "Done",
    "Department": "HR / Learning & Development",
    "Description": "An AI agent supporting career development, goal setting, performance tracking, and learning recommendations. Helps employees and managers navigate Oracle Talent Management workflows conversationally.",
    "Solution Approach": "Integrates with Oracle Talent Management APIs (goals, performance, learning). Uses skills gap analysis to generate personalised learning and career path recommendations.",
    "Key Requirements to Analyse": "Performance goal frameworks, competency/skills library, learning catalogue integration, career path data, manager review schedules.",
    "Productivity Impact": "Reduces time spent on performance review preparation by 40%. Automates learning content discovery, cutting search time from hours to seconds.",
    "Business Value": "Improved talent retention through better career development visibility, data-driven workforce upskilling, stronger manager-employee engagement."
  },
  {
    "Use Case": "SCM – Sales Order Creation (Order Management)",
    "Status": "Done",
    "Department": "Supply Chain / Sales Operations",
    "Description": "An AI agent that allows sales representatives and order management teams to create and manage sales orders through conversational interactions, without manually navigating Oracle SCM Order Management screens.",
    "Solution Approach": "Utilises Oracle SCM Order Management REST APIs for order creation, pricing, and customer lookups. Validates inventory availability and pricing rules in real time before order submission.",
    "Key Requirements to Analyse": "Product catalogue, customer master data, pricing rules and discount structures, inventory levels, order fulfilment policies, tax configuration.",
    "Productivity Impact": "Reduces order entry time by up to 70%. Eliminates data entry errors. Enables order creation from any interface without Fusion UI access.",
    "Business Value": "Faster order-to-cash cycle, improved customer satisfaction, reduced order error rates and associated rework costs."
  },
  {
    "Use Case": "Finance – Invoice Creation",
    "Status": "Done",
    "Department": "Finance / Accounts Payable",
    "Description": "An AI agent that automates the creation and submission of supplier invoices in Oracle Fusion Financials through a conversational interface, handling validation, PO matching, and approval routing.",
    "Solution Approach": "Integrates with Oracle Financials AP Invoice REST APIs. Handles PO-matched and non-PO invoices, validates supplier data, applies tax rules, and routes for approval automatically.",
    "Key Requirements to Analyse": "Supplier master configuration, PO matching tolerance rules, tax setups, invoice approval workflows, business unit and ledger assignments.",
    "Productivity Impact": "Reduces invoice processing time by 60%. Eliminates manual keying errors. Processes high-volume invoice batches significantly faster.",
    "Business Value": "Faster payment cycles, early payment discount capture, reduced AP operational headcount requirement, improved supplier relationships."
  },
  {
    "Use Case": "Manager Bulk Approvals of Leave",
    "Status": "To Be Started",
    "Department": "HR Management / Line Management",
    "Description": "An AI agent that enables managers to review, approve, or reject multiple pending employee leave requests in a single conversational interaction, with intelligent conflict detection and team coverage analysis.",
    "Solution Approach": "Oracle HCM Absence Management APIs for pending approval queues. Applies business rules to flag conflicts (e.g. team coverage thresholds, blackout periods) and surfaces them before bulk action.",
    "Key Requirements to Analyse": "Pending approval queue data, team roster and coverage policies, leave blackout dates, delegation rules, audit trail requirements for bulk actions.",
    "Productivity Impact": "Reduces manager leave approval time from 30–60 minutes weekly to under 5 minutes. Eliminates manual login to Fusion to process individual requests.",
    "Business Value": "Improved manager productivity, faster employee request resolution, better team planning through proactive conflict detection."
  },
  {
    "Use Case": "SCM Procurement Agents",
    "Status": "To Be Started",
    "Department": "Procurement / Supply Chain",
    "Description": "An AI agent that automates end-to-end procurement tasks including purchase order creation, supplier queries, requisition approvals, and spend analysis through conversational interaction with Oracle Fusion Procurement.",
    "Solution Approach": "Oracle Procurement REST APIs (purchase orders, requisitions, suppliers). Multi-step agent workflow covering PR to PO lifecycle. Spend analytics via Oracle Procurement reporting APIs.",
    "Key Requirements to Analyse": "Supplier master data, procurement approval hierarchies, purchasing category rules, budget availability checks, preferred supplier lists, contract compliance.",
    "Productivity Impact": "Reduces procurement cycle time by 50%. Automates routine PO creation and frees procurement staff for strategic sourcing activities.",
    "Business Value": "Cost savings through reduced maverick spending, better contract compliance, improved spend visibility, lower procurement operational costs."
  },
  {
    "Use Case": "Job Requisition Creation Agent",
    "Status": "To Be Started",
    "Department": "HR / Talent Acquisition",
    "Description": "An AI agent that streamlines job requisition creation by gathering requirements conversationally, auto-populating intelligent defaults from position data, and routing for approvals — reducing manual effort for hiring managers.",
    "Solution Approach": "Oracle Recruiting Cloud and Position Management REST APIs. Conversational data gathering with auto-default logic from job profiles, grade structures, and headcount budgets. Approval workflow trigger on completion.",
    "Key Requirements to Analyse": "Position data and approved headcount, job profile library, grade and compensation structures, approval hierarchy for requisitions, budget validation rules.",
    "Productivity Impact": "Reduces requisition creation time by 80% (from 20–30 minutes to under 5 minutes). Eliminates back-and-forth between HR and hiring managers for data clarification.",
    "Business Value": "Faster time-to-fill positions, better workforce planning alignment, reduced HR administrative burden, improved data quality of requisitions."
  },
  {
    "Use Case": "Finance General Ledger Agents",
    "Status": "To Be Started",
    "Department": "Finance / Accounting",
    "Description": "An AI agent that assists finance teams with GL journal entry creation, period-close task management, account balance enquiries, and financial reporting queries — all via natural language against Oracle Fusion General Ledger.",
    "Solution Approach": "Oracle Financials GL REST APIs for journal entries, account balances, and period statuses. Workflow guidance for period-close checklists. Integration with Oracle Financial Reporting for on-demand balance queries.",
    "Key Requirements to Analyse": "Chart of accounts structure, journal entry approval rules, period-close checklist configuration, intercompany rules, financial reporting hierarchy, ledger and business unit setup.",
    "Productivity Impact": "Reduces period-close cycle time by 30–40%. Automates routine manual journal entries. Eliminates time spent navigating Fusion for balance enquiries.",
    "Business Value": "Improved financial accuracy and audit trail, faster financial close and reporting, reduced risk of period-end errors, finance staff redeployed to higher-value analysis."
  }
];

// Create workbook
const wb = XLSX.utils.book_new();

// Define columns
const headers = [
  "Use Case",
  "Status",
  "Department",
  "Description",
  "Solution Approach",
  "Key Requirements to Analyse",
  "Productivity Impact",
  "Business Value"
];

// Build worksheet data
const wsData = [headers, ...useCases.map(row => headers.map(h => row[h]))];
const ws = XLSX.utils.aoa_to_sheet(wsData);

// Column widths
ws['!cols'] = [
  { wch: 36 },  // Use Case
  { wch: 16 },  // Status
  { wch: 30 },  // Department
  { wch: 60 },  // Description
  { wch: 60 },  // Solution Approach
  { wch: 60 },  // Key Requirements
  { wch: 55 },  // Productivity Impact
  { wch: 55 },  // Business Value
];

// Row heights — header taller
ws['!rows'] = [{ hpt: 30 }];

XLSX.utils.book_append_sheet(wb, ws, "AI Agent Studio Use Cases");

const outputPath = 'AI_Agent_Studio_UseCases.xlsx';
XLSX.writeFile(wb, outputPath);
console.log(`Excel file created: ${outputPath}`);
