# Product Requirements Document (PRD)
## Onboard.track — ERP Client Onboarding Dashboard

**Author:** Vyas Yalamudi  
**Version:** 1.0 (MVP)  
**Date:** October 2026  
**Status:** In Development  
**Build Stack:** Next.js + Supabase + Tailwind CSS + Vercel

---

## 1. Executive Summary

**Onboard.track** is a lightweight, web-based dashboard that gives ERP implementation teams (consultants, project managers, QA analysts) a single real-time view of every client's go-live readiness — tracking module-wise progress, pending sign-offs, training completion, and open blockers across all active implementations.

### The One-Line Pitch
> "The first time your ERP rollout team can answer 'Is this client ready to go live?' in under 10 seconds — without opening a spreadsheet."

### Why This Exists
Every ERP implementation I've worked on at Turtil runs on spreadsheets, WhatsApp threads, and weekly status calls. There's no live dashboard showing whether Module A is in UAT, Module B is blocked on client data migration, and Module C hasn't been trained yet — all for the same client, in one place. This tool closes that gap.

---

## 2. Problem Statement

### The Current Reality

ERP implementation is a complex, multi-month process involving multiple modules, multiple stakeholders, multiple approval gates, and multiple teams. The tools teams currently use to manage it are:

| Tool Being Used | Why It Fails |
|----------------|--------------|
| **Shared Google Sheets** | No real-time visibility; version conflicts; doesn't notify when items change |
| **Jira / Trello** | Overkill configuration for client-facing tracking; clients can't easily read it |
| **Email status updates** | Stale the moment they're sent; information buried in threads |
| **Weekly status meetings** | Only 1-hour snapshot per week; blockers sit for days undiscovered |
| **Project management tools (Monday, Asana)** | Not designed for ERP module-based tracking; missing sign-off workflows |

### The Consequences

1. **Invisible blockers** — A module is stuck because the client hasn't provided sample data, but the PM only finds out on the weekly call (5 days later).
2. **Sign-off chaos** — UAT sign-offs happen over email. Nobody knows which sign-offs are pending, which are rejected, and which modules are cleared for go-live.
3. **Training gaps missed** — A department head's team never got trained on Payroll module. Discovery happens at go-live. Delay ensues.
4. **No go/no-go confidence** — "Are we ready to go live?" is answered with gut feel, not data.
5. **Cross-client visibility zero** — A PM managing 3 simultaneous rollouts cannot see their portfolio health without opening 3 separate spreadsheets.

### The Insight
> ERP implementations fail not because of bad software — they fail because of bad **visibility**. The team doing the work knows the status. Nobody else does.

---

## 3. Target User

### Primary User: The ERP Implementation Team

**Who they are:** Internal consultants, project managers, and QA analysts at an ERP company (like Turtil) who manage client rollouts end-to-end.

**Team size:** Typically 3–8 people per implementation; 2–5 simultaneous implementations per PM.

**Current workflow pain:** Managing multiple clients in parallel using spreadsheets + email + status calls, with no unified dashboard.

---

## 4. User Personas

### Persona 1: The Implementation Project Manager ("Riya, 32")
| Attribute | Detail |
|-----------|--------|
| **Role** | Manages 3 simultaneous ERP rollouts for mid-size institutions |
| **Goal** | Know at a glance which client is on track, which is at risk, and what needs her attention today |
| **Pain** | Opens 3 spreadsheets and 2 email threads every morning just to build today's priority list |
| **JTBD** | *"When I start my workday, I want to see which clients have new blockers or pending actions so that I can prioritize my day without manually checking each one."* |
| **Success metric** | < 5 minutes to daily situation awareness across all clients |

### Persona 2: The QA Analyst / Functional Consultant ("Vyas, 25")
| Attribute | Detail |
|-----------|--------|
| **Role** | Validates ERP modules during UAT; manages sign-off tracking and re-testing |
| **Goal** | Know which modules are ready for sign-off, which are in re-test, and which are blocked on the client |
| **Pain** | Sign-offs happen over email; he has no live view of what's been signed, what's pending, what's rejected |
| **JTBD** | *"When I complete UAT on a module, I want to send a structured sign-off request and track its status so that nothing slips through the cracks before go-live."* |
| **Success metric** | Zero missed sign-offs at go-live; < 2 minutes to check module status for any client |

### Persona 3: The Senior Manager / Delivery Head ("Anita, 42")
| Attribute | Detail |
|-----------|--------|
| **Role** | Oversees 8–10 simultaneous ERP implementations across the team |
| **Goal** | Portfolio-level view of all active rollouts: which are on track, which are at risk, which need escalation |
| **Pain** | Gets information only through weekly status emails — no live portfolio dashboard exists |
| **JTBD** | *"When a client's go-live is 2 weeks away, I want to see their readiness score so that I can decide if we need to escalate or bring in more resources."* |
| **Success metric** | Able to give an accurate go-live risk assessment for any client in < 60 seconds |

---

## 5. Jobs to Be Done

| JTBD Statement | Priority |
|----------------|----------|
| When I start my day, I want a single view of all client statuses, so I don't have to open 5 tools. | Must Have |
| When a module completes UAT, I want to trigger a sign-off workflow and track its progress. | Must Have |
| When a blocker is raised, I want the right person notified immediately (not at the next weekly call). | Must Have |
| When a client's go-live date is approaching, I want a readiness score that tells me if we're on track. | Must Have |
| When I'm managing 3 clients, I want a portfolio view that shows me which client needs my attention most. | Must Have |
| When training sessions are conducted, I want to log completion so we have a training coverage record. | Should Have |
| When a client is onboarded successfully, I want an automated project closeout summary. | Could Have |

---

## 6. Success Metrics

### North Star Metric
**Weekly Active Projects** — the number of active ERP implementations being tracked in Onboard.track per week. This measures whether the tool is genuinely replacing the spreadsheet, not just being demoed once.

### Supporting KPIs

| Metric | Target (3 months post-launch) | What It Measures |
|--------|-------------------------------|-----------------|
| **Daily Active Users** | ≥ 3 team members/project/day | Is the team using this daily, not just weekly? |
| **Sign-off cycle time** | ≤ 3 days (vs. current ~7–10 days via email) | Is the workflow faster than email? |
| **Blocker discovery time** | ≤ 24 hours (vs. current ~5 days) | Are blockers being surfaced faster? |
| **"Ready to go-live" accuracy** | ≥ 90% correlation between Readiness Score and actual go-live success | Is the score meaningful and predictive? |
| **Spreadsheet usage** | ≤ 20% of teams using a parallel spreadsheet after 4 weeks | Are we actually replacing the spreadsheet? |
| **NPS (team)** | ≥ 40 | Would the team recommend this to another ERP company? |

---

## 7. Feature Specification — MVP (v1.0)

> [!IMPORTANT]
> MVP scope is ruthlessly narrowed. Every feature below must answer: "Does this directly help the team answer 'Is this client ready to go live?'"

### Feature 1: Project Setup & Client Dashboard

**What it does:** Create a new client implementation project with key metadata. The project dashboard becomes the single source of truth for that client.

**Fields on project creation:**
- Client name + logo
- Implementation type (Full ERP / Module-specific)
- Modules in scope (multi-select: HRMS, Payroll, Finance, Transport, Library, Admissions, etc.)
- Go-live target date
- Project Manager (owner)
- Team members (multi-select from org roster)

**Dashboard view shows:**
- Overall Readiness Score (% — see Feature 4)
- Module status grid (color-coded: Not Started / In Progress / In UAT / Signed Off / Blocked)
- Days to go-live countdown
- Open blockers count
- Pending sign-offs count
- Last updated timestamp

---

### Feature 2: Module Progress Tracker

**What it does:** Each module in scope has its own progress card with stage-by-stage status tracking.

**Module stages (linear pipeline):**
```
Not Started → Configuration → Internal Testing → UAT Handoff → Client UAT → Sign-off Pending → Signed Off
```
(Plus: `Blocked` — can be set from any stage, with a required blocker description)

**Each module card shows:**
- Current stage with visual pipeline
- Owner (who is responsible for this module)
- Stage entry date (auto-logged when status changes)
- Time in current stage (e.g., "In UAT for 8 days" — flags overdue stages)
- Open issues count linked to this module
- Training status (Scheduled / Done / Not Required)
- Sign-off status

**Stage change rules:**
- Any team member can update module stage
- Moving to `Sign-off Pending` auto-triggers the sign-off workflow (Feature 3)
- Setting `Blocked` requires: blocker description + owner of resolution

---

### Feature 3: Sign-off Workflow

**What it does:** Replaces the email sign-off process with a structured, trackable workflow.

**Flow:**
1. QA analyst moves module to `Sign-off Pending`
2. System generates a **Sign-off Request** with:
   - Module name + client
   - UAT summary (free text field — what was tested, what passed)
   - Attached evidence (file upload: test reports, screenshots)
   - Requested approver (selected from client contacts list — note: client gets an email link, no login required)
3. Client receives email with a **one-click response link** (no login required):
   - ✅ Approved — module moves to `Signed Off`
   - ❌ Rejected — requires rejection reason; module moves back to `Client UAT` with comments
   - 🔄 Needs Clarification — opens a comment thread
4. Team sees status update in real-time on the dashboard

**Sign-off log:** Every sign-off action is timestamped and stored — creating an audit trail for go-live documentation.

> [!NOTE]
> Clients do not need a paid account or login. They interact only via an emailed link — keeping the product simple for the vendor's team and frictionless for clients.

---

### Feature 4: Client Readiness Score

**What it does:** Automatically calculates a composite "Go-Live Readiness Score" (0–100%) for each client based on weighted factors.

**Scoring formula:**

| Factor | Weight | How Calculated |
|--------|--------|---------------|
| **Module sign-offs** | 40% | (Signed off modules / Total modules in scope) × 40 |
| **Training completion** | 25% | (Training sessions completed / Total sessions planned) × 25 |
| **Open blockers** | 20% | 20 − (Open critical blockers × 5 + Open medium blockers × 2) — floor at 0 |
| **Data migration status** | 15% | Manual input (Not Started: 0, In Progress: 7, Complete: 15) |

**Score interpretation:**

| Score | Label | Color |
|-------|-------|-------|
| 85–100% | ✅ Go-Live Ready | Green |
| 65–84% | 🟡 On Track | Yellow |
| 40–64% | 🟠 At Risk | Orange |
| < 40% | 🔴 Not Ready | Red |

**Auto-alerts:**
- 14 days to go-live + score < 65% → alert to PM + Delivery Head
- 7 days to go-live + score < 85% → escalation alert to Delivery Head
- Any critical blocker open for > 48 hours → alert to PM

---

### Feature 5: Team Daily View (My Focus Today)

**What it does:** A personalized "start of day" view for each team member showing only what they need to act on today.

**Sections:**

**⚠️ Needs Your Action**
- Sign-off requests pending > 48 hours
- Modules assigned to you that are blocked (with blocker age)
- Training sessions you're responsible for (within 7 days)

**📋 Your Modules (Across All Clients)**
- Quick status of every module you own, across all active projects

**📅 This Week's Go-Lives**
- Clients with go-live dates in the next 7 days + their readiness score

**🔔 Recent Updates**
- Last 10 status changes across your projects (with who changed what)

---

## 8. Out of Scope (MVP v1.0)

| Feature | Rationale |
|---------|-----------|
| Client login / client-facing portal | Clients only interact via email links (sign-off workflow). Full client portal is v2. |
| Billing / subscription management | MVP is used free internally or at one pilot client. Monetization is v2. |
| Gantt chart / timeline view | Adds scope; Readiness Score + module pipeline covers the go-live signal needed |
| Integrations (Jira, Salesforce, etc.) | Manual data entry for MVP; integrations are v2 based on user feedback |
| Mobile app | Responsive web is sufficient for MVP |
| Custom module stages | Fixed 7-stage pipeline for MVP; customizable stages in v2 |
| Time tracking | Out of scope — purpose is status visibility, not time logging |

---

## 9. User Stories with Acceptance Criteria

### Story 1: Project Creation
**As a** Project Manager,  
**I want to** create a new client implementation project with modules in scope and a go-live date,  
**So that** my team has a structured project to track from day one.

**Acceptance Criteria:**
- [ ] PM can create a project in < 3 minutes
- [ ] All module types available for selection (pre-populated list, customizable)
- [ ] Go-live date generates a countdown visible on dashboard
- [ ] Team members can be added; each receives an email invite
- [ ] Project is visible in the portfolio view immediately on creation

### Story 2: Module Status Update
**As a** QA Analyst or Consultant,  
**I want to** update a module's stage with a single click,  
**So that** the dashboard reflects real-time progress without requiring a meeting or email.

**Acceptance Criteria:**
- [ ] Status can be changed from any stage view in ≤ 2 clicks
- [ ] Stage change is timestamped and logged automatically
- [ ] Moving to `Blocked` requires a blocker description before saving
- [ ] Moving to `Sign-off Pending` triggers the sign-off workflow automatically
- [ ] All team members see the update within 5 seconds (real-time via Supabase subscriptions)

### Story 3: Sign-off Request
**As a** QA Analyst,  
**I want to** send a structured sign-off request to the client via email,  
**So that** sign-offs are tracked and don't get lost in email threads.

**Acceptance Criteria:**
- [ ] Request includes module name, UAT summary, and file attachments
- [ ] Client receives email with a one-click approve/reject/clarify link (no login required)
- [ ] Client response updates module status in real-time on dashboard
- [ ] Rejection requires a mandatory reason field from client
- [ ] All sign-off actions are logged with timestamp and user/client identity
- [ ] PM is notified if a sign-off request is unanswered for > 48 hours

### Story 4: Readiness Score
**As a** Delivery Head,  
**I want to** see a readiness score for each client that reflects real module + training + blocker status,  
**So that** I can confidently assess go-live risk without needing to manually review every module.

**Acceptance Criteria:**
- [ ] Score updates automatically when any contributing factor changes
- [ ] Score breakdown is visible (what contributes to each component)
- [ ] Color-coded label (Green / Yellow / Orange / Red) visible on portfolio view
- [ ] Alert sent when score falls below threshold with < 14 days to go-live
- [ ] Score is exportable as a one-page PDF for client reporting

### Story 5: Daily View
**As a** team member,  
**I want to** see everything that needs my attention today in one screen,  
**So that** I can start my day without manually reviewing every project.

**Acceptance Criteria:**
- [ ] Daily view is the default landing page after login
- [ ] Only shows items assigned to or owned by the logged-in user
- [ ] Stale blockers (> 48 hours) are highlighted in red
- [ ] Go-lives within 7 days are visible with readiness score
- [ ] View refreshes in real-time (no manual refresh needed)

---

## 10. Information Architecture

```
Onboard.track
├── 🏠 Daily View (default landing)
│   ├── Needs Your Action (sign-offs, blockers, training)
│   ├── Your Modules (all clients)
│   └── This Week's Go-Lives
│
├── 📊 Portfolio View
│   ├── All active clients (card grid)
│   ├── Readiness Score per client (color-coded)
│   ├── Days to go-live
│   └── Quick filters: At Risk | On Track | Ready
│
├── 📁 Client Project View
│   ├── Project Header (client name, go-live date, PM, score)
│   ├── Module Grid (status cards for all in-scope modules)
│   ├── Blockers Panel (open + resolved)
│   ├── Sign-off Log (all sign-off actions with timestamps)
│   └── Training Tracker (per department, per module)
│
├── 📦 Module Detail View
│   ├── Stage Pipeline (visual, clickable)
│   ├── Stage history log (auto-generated)
│   ├── Sign-off workflow (initiate / view status)
│   ├── Linked issues/blockers
│   └── Training records for this module
│
└── ⚙️ Settings
    ├── Organization profile
    ├── Team members
    ├── Module library (default + custom)
    ├── Notification preferences
    └── Client contacts
```

---

## 11. Tech Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Frontend** | Next.js 14 (App Router) | React-based, SSR/SSG support, excellent Vercel integration |
| **Styling** | Tailwind CSS + shadcn/ui | Rapid, consistent UI; professional component library |
| **Backend / Database** | Supabase (PostgreSQL) | Real-time subscriptions (live dashboard), auth, file storage, edge functions |
| **Auth** | Supabase Auth | Email + Google OAuth; JWT-based session management |
| **Real-time** | Supabase Realtime (WebSockets) | Module status changes appear live without page refresh |
| **File Storage** | Supabase Storage | Sign-off evidence uploads (PDFs, screenshots) |
| **Email** | Resend (or SendGrid) | Transactional emails for sign-off requests + alerts |
| **Hosting** | Vercel | Zero-config Next.js deployment; free tier sufficient for MVP |
| **Analytics** | Posthog (free tier) | Track feature usage, identify drop-off points |

---

## 12. Data Model (Simplified)

```sql
-- Core tables

organizations         -- ERP vendor companies using the tool
  id, name, logo_url, created_at

users                 -- Team members
  id, org_id, name, email, role (PM | Consultant | QA | Manager), created_at

clients               -- Each ERP client being onboarded
  id, org_id, name, logo_url, go_live_date, pm_id, created_at

modules               -- Each module in a client's implementation scope
  id, client_id, module_type, stage, owner_id, 
  stage_updated_at, blocker_description, training_status, created_at

signoffs              -- Sign-off requests per module
  id, module_id, requested_by, client_contact_email,
  uat_summary, status (pending|approved|rejected|clarification),
  client_response, response_at, token (unique URL token for client), created_at

blockers              -- Open/resolved blockers
  id, module_id, description, severity (critical|medium|low),
  raised_by, resolved_by, resolved_at, created_at

training_sessions     -- Training completion records
  id, module_id, department, conducted_by, session_date, 
  attendee_count, status (scheduled|completed|cancelled), created_at
```

---

## 13. Build Plan (8 Weeks to MVP)

```
WEEK 1–2: Foundation
├── Set up Next.js + Supabase + Tailwind + Vercel pipeline
├── Implement auth (login, invite, org setup)
├── Build data model and RLS policies in Supabase
└── Build Project Creation flow + basic module grid

WEEK 3–4: Core Features
├── Module stage pipeline (click to advance, blocked state)
├── Real-time updates via Supabase Realtime
├── Blocker creation and management
└── Basic Portfolio View (all clients, days to go-live)

WEEK 5: Sign-off Workflow
├── Sign-off request creation with file upload
├── Email delivery via Resend (sign-off request + token link)
├── Client response page (no login — token-authenticated)
└── Real-time status update on approval/rejection

WEEK 6: Readiness Score + Alerts
├── Implement readiness score calculation engine
├── Color-coded score display on client and portfolio views
├── Alert system (< 14 days + score < 65%; blocker > 48 hrs)
└── Email notifications for alerts

WEEK 7: Daily View + Polish
├── Build personalized Daily View (my actions, my modules)
├── Training session tracker
├── Mobile-responsive layout audit
└── Empty states, loading states, error states

WEEK 8: Test + Launch
├── Internal dogfooding (use it on a real or simulated Turtil project)
├── Fix top-10 bugs from dogfood
├── Write user documentation (3-minute setup guide)
├── Launch on Product Hunt + LinkedIn post
└── Share with 5 ERP companies via LinkedIn DM for beta feedback
```

---

## 14. Launch Strategy

### Target Beta Users
- 2–3 ERP implementation companies via LinkedIn outreach (look for: "ERP Consultant", "Implementation PM" in bio)
- Turtil colleagues (internal use — if permitted)
- ERP-focused communities: r/ERP, Dynamics 365 community forums, LinkedIn ERP groups

### Launch Post (LinkedIn)
> *"I'm building something I wish existed at my day job. After years of managing ERP rollouts on spreadsheets and WhatsApp threads, I built Onboard.track — a real-time dashboard that tells your team: 'Is this client ready to go live?' Module-wise progress. Sign-off workflows. Readiness score. All in one place. Looking for 5 ERP teams to beta test it free. Drop a comment or DM me."*

### Product Hunt Launch
Category: Project Management / SaaS Tools

---

## 15. Post-Launch Metrics Dashboard

I will track the following in Posthog + Supabase for the first 90 days:

| Metric | Tool | Target |
|--------|------|--------|
| Total active projects | Supabase | 10+ within 60 days |
| DAU / MAU ratio | Posthog | > 0.4 (high stickiness) |
| Sign-off cycle time | Supabase (avg. timestamps) | ≤ 3 days |
| Feature adoption: Sign-off workflow | Posthog | > 70% of projects using it |
| Feature adoption: Readiness Score | Posthog | > 80% of PMs checking it weekly |
| Qualitative feedback | Typeform (in-app) | Collect after 2 weeks of usage |

---

> [!TIP]
> **The most important thing to ship first:** The Module Progress Tracker + Portfolio View. If a PM can see all their clients on one screen with color-coded module statuses, the product has already delivered more value than a spreadsheet. Everything else is additive.

---

*This PRD represents a real problem observed during ERP implementation work at Turtil and is being built as part of a product management portfolio to demonstrate end-to-end product ownership: from problem identification and persona research to feature scoping, data modeling, and launch planning.*
