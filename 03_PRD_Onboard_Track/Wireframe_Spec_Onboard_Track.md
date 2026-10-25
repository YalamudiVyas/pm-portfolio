# 🎨 Wireframe Specification — Onboard.track
**Author:** Yalamudi Vyas  
**Version:** 1.0  
**Tool:** Figma (Lo-fi Wireframes)  
**Date:** October 2026

---

## 🚀 Step 1 — Figma Setup (Do This First)

1. Go to **[figma.com](https://figma.com)** → Sign up free with `yalamudi.mail@gmail.com`
2. Click **"New Design File"**
3. Rename it: `Onboard.track — Wireframes v1.0`
4. Set canvas background to `#F5F5F5` (light grey)

### Frame Sizes to Use
For each screen, create a **Frame** (press `F`) with size:
- **Width:** `1440px` (desktop)
- **Height:** `900px`

### Figma Tips for Beginners
| Action | Shortcut |
|--------|----------|
| Create Frame | `F` |
| Create Rectangle | `R` |
| Create Text | `T` |
| Group elements | `Ctrl + G` |
| Duplicate | `Ctrl + D` |
| Zoom fit | `Shift + 1` |
| Add Auto Layout | `Shift + A` |

---

## 📱 5 Screens to Wireframe

| # | Screen Name | Who Uses It | Priority |
|---|-------------|-------------|----------|
| 1 | **Daily View** (Home) | Everyone | ⭐ Design First |
| 2 | **Portfolio View** | PM, Delivery Head | ⭐⭐ |
| 3 | **Client Project View** | PM, QA Analyst | ⭐⭐⭐ |
| 4 | **Module Detail View** | QA Analyst | ⭐⭐⭐⭐ |
| 5 | **Sign-off Page** (Client-facing) | Client (no login) | ⭐⭐⭐⭐⭐ |

---

## 🖼️ SCREEN 1 — Daily View (Default Home)

> *"What needs my attention today?"* — personalized landing page after login.

### Layout Blueprint
```
┌─────────────────────────────────────────────────────────────────┐
│  SIDEBAR (240px wide)        │  MAIN CONTENT AREA               │
│                              │                                   │
│  [Logo] Onboard.track        │  Good Morning, Vyas 👋           │
│                              │  Sunday, 25 Oct 2026             │
│  ● Daily View   ← active     │                                   │
│  ○ Portfolio                 │  ┌─────────────────────────────┐  │
│  ○ Settings                  │  │ ⚠️  NEEDS YOUR ACTION  (3)  │  │
│                              │  ├─────────────────────────────┤  │
│  ─────────────               │  │ 🔴 Sign-off pending >48hrs  │  │
│                              │  │    HRMS Module — Client: ABC│  │
│  [Avatar]                    │  │    [Send Reminder]          │  │
│  Yalamudi Vyas               │  ├─────────────────────────────┤  │
│  QA Analyst                  │  │ 🟠 Blocker (Day 3)          │  │
│  [Logout]                    │  │    Payroll — Client: XYZ    │  │
│                              │  │    "Client data pending"    │  │
│                              │  │    [View Blocker]           │  │
│                              │  ├─────────────────────────────┤  │
│                              │  │ 🟡 Training due in 2 days   │  │
│                              │  │    Finance Module — ABC Corp │  │
│                              │  │    [View Details]           │  │
│                              │  └─────────────────────────────┘  │
│                              │                                   │
│                              │  ┌──────────────┐ ┌───────────┐  │
│                              │  │ 📋 MY MODULES│ │📅 GO-LIVES│  │
│                              │  │ (this week)  │ │ THIS WEEK │  │
│                              │  │              │ │           │  │
│                              │  │ HRMS  UAT ●  │ │ ABC Corp  │  │
│                              │  │ Finance ✅   │ │ 🟡 72%    │  │
│                              │  │ Payroll 🔴   │ │ 3 days    │  │
│                              │  │              │ │           │  │
│                              │  │ [View All]   │ │[View All] │  │
│                              │  └──────────────┘ └───────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Figma Instructions — Screen 1
1. **Sidebar:** Draw a `240 x 900px` rectangle, fill `#1E1E2E` (dark navy)
   - Add text: "Onboard.track" (white, bold, 18px)
   - Add 3 nav items as text: Daily View, Portfolio, Settings (white, 14px)
   - Add a circle avatar placeholder at bottom (40px circle)

2. **Header:** On the right side, add greeting text (28px bold) + date (14px grey)

3. **"Needs Your Action" card:**
   - Draw a `860 x 220px` rectangle, fill `white`, rounded corners `12px`
   - Add a red left border (`4px`, `#EF4444`)
   - Title: "⚠️ Needs Your Action" (16px bold)
   - Add 3 list items with colored dots (red, orange, yellow)
   - Each item has a small button placeholder on the right

4. **Two bottom cards (My Modules + Go-Lives):**
   - Two `420 x 180px` white cards side by side
   - Left card: list of module names with status dots
   - Right card: list of clients with readiness score badge and days countdown

---

## 🖼️ SCREEN 2 — Portfolio View

> *"All my clients at a glance — who needs attention?"*

### Layout Blueprint
```
┌─────────────────────────────────────────────────────────────────┐
│  SIDEBAR (same as Screen 1)  │  MAIN CONTENT AREA               │
│                              │                                   │
│  ● Daily View                │  📊 Portfolio Overview           │
│  ● Portfolio  ← active       │  4 Active Implementations        │
│  ○ Settings                  │                                   │
│                              │  [All] [🔴 At Risk] [🟡 On Track] [✅ Ready]
│                              │                                   │
│                              │  ┌──────────┐ ┌──────────┐       │
│                              │  │ ABC Corp │ │ XYZ Ltd  │       │
│                              │  │          │ │          │       │
│                              │  │  Score   │ │  Score   │       │
│                              │  │   72%    │ │   45%    │       │
│                              │  │  🟡      │ │  🟠      │       │
│                              │  │          │ │          │       │
│                              │  │ Go-live  │ │ Go-live  │       │
│                              │  │ in 3 days│ │ in 9 days│       │
│                              │  │          │ │          │       │
│                              │  │ PM: Riya │ │ PM: Vyas │       │
│                              │  │ 6 modules│ │ 4 modules│       │
│                              │  │ 2 blocked│ │ 1 blocked│       │
│                              │  │          │ │          │       │
│                              │  │[Open →]  │ │[Open →]  │       │
│                              │  └──────────┘ └──────────┘       │
│                              │                                   │
│                              │  ┌──────────┐ ┌──────────┐       │
│                              │  │ DEF Intl │ │+ New     │       │
│                              │  │   88%  ✅│ │ Client   │       │
│                              │  │ in 21days│ │          │       │
│                              │  │[Open →]  │ │[Create]  │       │
│                              │  └──────────┘ └──────────┘       │
└─────────────────────────────────────────────────────────────────┘
```

### Figma Instructions — Screen 2
1. **Page title:** "📊 Portfolio Overview" (28px bold) + subtitle count (16px grey)
2. **Filter tabs:** 4 pill-shaped buttons in a row — [All] [At Risk] [On Track] [Ready]
   - Active tab: filled `#1E1E2E` with white text; others: white with grey border
3. **Client cards (4 cards in a 2x2 grid):**
   - Each card: `380 x 240px`, white, `12px` rounded corners, subtle shadow
   - **Score:** Large number (48px bold) in center with color circle behind it
     - Green `#22C55E` for 85%+, Yellow `#EAB308` for 65–84%, Orange `#F97316` for 40–64%, Red `#EF4444` for below 40%
   - Go-live countdown (14px, grey)
   - PM name + module count + blocker count (12px)
   - "Open →" button at bottom (blue, full width)
4. **"+ New Client" card:** Dashed border, "+" icon in center, lighter appearance

---

## 🖼️ SCREEN 3 — Client Project View

> *"Full view of one client's implementation status."*

### Layout Blueprint
```
┌─────────────────────────────────────────────────────────────────┐
│  SIDEBAR        │  MAIN CONTENT AREA                            │
│                 │                                               │
│                 │  ← Back to Portfolio                          │
│                 │                                               │
│                 │  [ABC Corp Logo]  ABC Corporation             │
│                 │  PM: Riya  │  Go-live: 28 Oct  │  3 days left│
│                 │                                               │
│                 │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │
│                 │  │ Score  │ │Modules │ │Blockers│ │Sign-off│ │
│                 │  │  72%   │ │ 4/6    │ │   2    │ │  3     │ │
│                 │  │  🟡    │ │ done   │ │ open   │ │pending │ │
│                 │  └────────┘ └────────┘ └────────┘ └────────┘ │
│                 │                                               │
│                 │  MODULE PROGRESS                              │
│                 │  ┌──────────────────────────────────────────┐ │
│                 │  │ HRMS      [===========●---------] UAT    │ │
│                 │  │           Owner: Vyas    Day 8 in UAT    │ │
│                 │  ├──────────────────────────────────────────┤ │
│                 │  │ Payroll   [====●-----------------] 🔴    │ │
│                 │  │           BLOCKED: Client data missing   │ │
│                 │  ├──────────────────────────────────────────┤ │
│                 │  │ Finance   [==========================✅]  │ │
│                 │  │           Signed Off — 20 Oct 2026       │ │
│                 │  ├──────────────────────────────────────────┤ │
│                 │  │ Transport [●--------------------------]   │ │
│                 │  │           Not Started                    │ │
│                 │  └──────────────────────────────────────────┘ │
│                 │                                               │
│                 │  [Open Blockers Panel ▼]  [Sign-off Log ▼]   │
└─────────────────────────────────────────────────────────────────┘
```

### Figma Instructions — Screen 3
1. **Breadcrumb:** "← Back to Portfolio" (small, grey, clickable)
2. **Client header bar:** Client name (32px bold) + PM, go-live date, countdown chips
3. **4 stat cards in a row:**
   - Each: `190px` wide, white, rounded — icon on top, big number, label below
   - Score card has a color ring around the number
4. **Module list:**
   - Each row: `full width`, white, `8px` rounded, `1px` grey border
   - Left: Module name (bold) + owner name (grey, small)
   - Center: **Progress bar** — grey background, colored fill, dot at current stage
     - Stages: Not Started → Config → Internal Test → UAT → Client UAT → Sign-off Pending → ✅ Signed Off
   - Right: Status badge (colored pill)
   - Blocked row: red left border + blocker description text in orange

---

## 🖼️ SCREEN 4 — Module Detail View

> *"Deep dive into one module — pipeline, sign-off, blockers."*

### Layout Blueprint
```
┌─────────────────────────────────────────────────────────────────┐
│  SIDEBAR        │  MAIN CONTENT AREA                            │
│                 │                                               │
│                 │  ← Back to ABC Corp                          │
│                 │  HRMS Module                                  │
│                 │  Owner: Yalamudi Vyas  │  Day 8 in UAT        │
│                 │                                               │
│                 │  STAGE PIPELINE                               │
│                 │  ┌──────────────────────────────────────────┐ │
│                 │  │ [Not Started]─[Config]─[Int. Test]─[UAT] │ │
│                 │  │                               ↑ YOU ARE  │ │
│                 │  │           ─[Client UAT]─[Sign-off]─[✅]  │ │
│                 │  └──────────────────────────────────────────┘ │
│                 │                                               │
│                 │  [Move to Next Stage ▶]  [Mark as Blocked 🔴] │
│                 │                                               │
│                 │  ┌─────────────────────┐ ┌─────────────────┐ │
│                 │  │ 📋 STAGE HISTORY    │ │ 🔔 SIGN-OFF     │ │
│                 │  │                     │ │                 │ │
│                 │  │ UAT — Oct 17        │ │ Status: Pending │ │
│                 │  │ Int Test — Oct 12   │ │ Sent: Oct 18    │ │
│                 │  │ Config — Oct 5      │ │ To: client@abc  │ │
│                 │  │ Started — Oct 1     │ │                 │ │
│                 │  │                     │ │ [Send Reminder] │ │
│                 │  └─────────────────────┘ └─────────────────┘ │
│                 │                                               │
│                 │  📚 TRAINING                                  │
│                 │  HR Dept — Completed ✅ Oct 15               │
│                 │  Finance Dept — Scheduled 📅 Oct 28          │
│                 │  [+ Add Training Session]                     │
└─────────────────────────────────────────────────────────────────┘
```

### Figma Instructions — Screen 4
1. **Stage pipeline visual:**
   - Draw 7 circles connected by lines (like a stepper)
   - Active stage: filled `#1E1E2E` circle, white text
   - Completed stages: filled `#22C55E` (green), white checkmark
   - Upcoming stages: white circle, grey border, grey text
2. **Two action buttons below pipeline:**
   - "Move to Next Stage" — solid blue, rounded
   - "Mark as Blocked" — red outline, rounded
3. **Two side-by-side cards:**
   - Left: Stage History — timeline list (line + dot + text)
   - Right: Sign-off panel — status badge + sent date + reminder button
4. **Training section:** List rows with status badge (green/grey/blue)

---

## 🖼️ SCREEN 5 — Sign-off Page (Client-facing, No Login)

> *"The client clicks a link in their email and sees this page — no account needed."*

### Layout Blueprint
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    [Onboard.track logo]                         │
│                                                                 │
│         ┌─────────────────────────────────────────┐            │
│         │                                         │            │
│         │   UAT Sign-off Request                  │            │
│         │   ─────────────────────────             │            │
│         │   Client:  ABC Corporation              │            │
│         │   Module:  HRMS                         │            │
│         │   Sent by: Yalamudi Vyas                │            │
│         │   Date:    25 Oct 2026                  │            │
│         │                                         │            │
│         │   UAT Summary                           │            │
│         │   ───────────                           │            │
│         │   "All 47 test cases executed. 45       │            │
│         │   passed, 2 minor defects resolved.     │            │
│         │   Module is ready for go-live sign-off."│            │
│         │                                         │            │
│         │   📎 Test Report.pdf    📎 Evidence.zip │            │
│         │                                         │            │
│         │   ─────────────────────────             │            │
│         │   Your Response:                        │            │
│         │                                         │            │
│         │   [✅ Approve Sign-off]                 │            │
│         │                                         │            │
│         │   [❌ Reject — Add Reason]              │            │
│         │                                         │            │
│         │   [🔄 Needs Clarification]              │            │
│         │                                         │            │
│         │   Powered by Onboard.track              │            │
│         └─────────────────────────────────────────┘            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Figma Instructions — Screen 5
1. **Centered card layout:** `600 x auto px`, white, `16px` rounded, shadow
   - Background: light grey `#F5F5F5`
2. **Header:** Logo top center + "UAT Sign-off Request" title (24px bold)
3. **Info section:** Two-column key-value pairs (Client, Module, Sent by, Date)
4. **UAT Summary box:** Light grey `#F9FAFB` background, italic text inside
5. **Attachment pills:** Grey pill buttons with 📎 icon
6. **Three response buttons (stacked vertically, full width):**
   - Approve: solid green `#22C55E`, white text, "✅ Approve Sign-off"
   - Reject: solid red `#EF4444`, white text, "❌ Reject — Add Reason"
   - Clarify: solid blue `#3B82F6`, white text, "🔄 Needs Clarification"
7. **Footer:** "Powered by Onboard.track" (small, grey, centered)

---

## 🔗 User Flow Between Screens

```
Login
  │
  ▼
[Screen 1] Daily View ──────────────────────────────────────────────┐
  │                                                                  │
  │ Click client in "Go-Lives This Week"                            │
  ▼                                                                  │
[Screen 3] Client Project View ◄──── [Screen 2] Portfolio View      │
  │                        ▲              ▲                         │
  │ Click module row        │              │ Click "← Back"          │
  ▼                         │              │                         │
[Screen 4] Module Detail ───┘              │                         │
  │                                        │                         │
  │ Client receives email                  │                         │
  ▼                                        │                         │
[Screen 5] Sign-off Page ─── Response ────┘                         │
  (no login required)      updates dashboard                        │
```

---

## ✅ Figma Checklist

- [ ] Figma account created at figma.com
- [ ] New file created: `Onboard.track — Wireframes v1.0`
- [ ] Screen 1: Daily View ← **Start here**
- [ ] Screen 2: Portfolio View
- [ ] Screen 3: Client Project View
- [ ] Screen 4: Module Detail View
- [ ] Screen 5: Sign-off Page (client-facing)
- [ ] User flow arrows connecting all screens
- [ ] Share Figma link publicly for portfolio

---

## 💡 Pro Tips for Your PM Portfolio

1. **Name each frame clearly** in Figma (e.g., `01_Daily_View`, `02_Portfolio_View`) — looks professional
2. **Add annotations** — small sticky note boxes explaining *why* you designed something a certain way. This is what separates PM wireframes from dev wireframes.
3. **Use consistent spacing** — `16px` or `24px` gaps between elements throughout
4. **Share the Figma link** — Make it public (View access) and add the link to your GitHub README and resume

---

*Wireframe spec for Onboard.track v1.0 — Part of Yalamudi Vyas's PM Portfolio*
