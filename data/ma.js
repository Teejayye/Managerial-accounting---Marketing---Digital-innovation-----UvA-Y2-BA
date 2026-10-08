/* Management Accounting 1 for Business: course data, summary and glossary */
PORTAL.addCourse({
  id: "ma",
  title: "Management Accounting 1 for Business",
  short: "Management Accounting",
  code: "Amsterdam Business School · dr B. Shi · 2026–27",
  color: "#3346a8",
  examDate: "",
  examNote: "Final exam in week 8",
  tagline: "Costing systems, CVP, relevant costs, budgets and variances, transfer pricing and performance measures.",
  facts: [
    ["Final exam", "Digital, <b>mostly calculations</b> plus some theory. Old finals: 3 cases, 80 points, 2 hours, grade = points ÷ 8."],
    ["Weight", "Final 70%, midterm 30% (the midterm has already been held)."],
    ["Content", "All material: about <b>⅓ pre-midterm</b> (ch. 1–7, 9, 11) and <b>⅔ post-midterm</b> (ch. 8, 10, 12, budgeting, 15, 17, 18–22)."],
    ["To pass", "Final ≥ 5.0 <b>and</b> weighted exam grade ≥ 5.5. The 0.5 SOWISO bonus only counts once you are at 5.5."],
    ["Allowed", "Closed book. Pen/pencil, scrap paper, Casio FX82MS (2nd edition, UvA logo)."]
  ],
  plan: [
    "Learn the <b>formula sheet</b> section first, then work through each chapter's worked example.",
    "Post-midterm topics are worth two thirds: CVP, relevant costs, variances (incl. mix and yield), transfer pricing and ROI/RI. Practise these until they are automatic.",
    "Sit the <b>two old finals</b> here; type your numbers in, then self-mark the open parts against the official grading instructions.",
    "Use the old midterms to refresh the pre-midterm third (process costing, allocation, absorption vs variable costing)."
  ],
  warning: "<b>About your files:</b> the 2021 BrightPeople case was partly hidden in your screenshots, so its setup is reconstructed from the official grading table (all numbers match). The answer to BigScreen (e) and the 2024 midterm answers aren't in your files; I worked them out and marked them. Week 4 (budgeting) notes were thin, so that section leans on the book.",
  sources: "MA1 Complete Exam Guide · Lecture notes weeks 1–3, 6, 7 (incl. ACG consultancy and Pharma/Plastic examples) · Summaries weeks 5–7 (ch. 8, 12, budgeting, 15, 17–22) · Example midterm with answers · Practice midterms 2020 and 2023 · Midterm 29 Feb 2024 (MA1 for Economics) · Finals 26 Mar 2021 and 26 Oct 2023 with grading instructions · 2016 musical CVP case.",
  topics: [
    { id: "basics", title: "Ch. 1, 2, 9 · Cost terms, cost behaviour & estimation", short: "Ch 1–2, 9 Cost basics", sub: "Direct/indirect · fixed/variable · high–low · learning curves" },
    { id: "job", title: "Ch. 3 · Job costing, normal costing & proration", short: "Ch 3 Job costing", sub: "Allocation rate · under/over-allocation · proration" },
    { id: "abc", title: "Ch. 11 · Activity-based costing", short: "Ch 11 ABC", sub: "Cost hierarchy · refined systems" },
    { id: "alloc", title: "Ch. 5–6 · Support-department, common & joint costs", short: "Ch 5–6 Allocation", sub: "Direct · step-down · reciprocal · NRV" },
    { id: "process", title: "Ch. 4 · Process costing", short: "Ch 4 Process costing", sub: "Equivalent units · WA · FIFO" },
    { id: "vcac", title: "Ch. 7 · Variable vs absorption costing", short: "Ch 7 VC vs AC", sub: "PVV · profit reconciliation · capacity concepts" },
    { id: "cvp", title: "Ch. 8 · Cost–volume–profit analysis", short: "Ch 8 CVP", sub: "Break-even · target profit · mix · leverage" },
    { id: "relevant", title: "Ch. 10 · Relevant costs and decisions", short: "Ch 10 Relevant costs", sub: "Special orders · make/buy · constraints" },
    { id: "pricing", title: "Ch. 12 & budgeting · Pricing, target costing, master budget", short: "Ch 12 Pricing & budgets", sub: "Target cost · cost-plus · customer profitability" },
    { id: "variance", title: "Ch. 15 & 17 · Flexible budgets and variances", short: "Ch 15/17 Variances", sub: "Price · efficiency · mix · yield · sales variances" },
    { id: "control", title: "Ch. 18–19 · Decentralization, transfer pricing, ROI/RI/EVA", short: "Ch 18–19 Control", sub: "Responsibility centres · min TP · DuPont" },
    { id: "ops", title: "Ch. 20–22 · Quality, TOC, JIT/EOQ, balanced scorecard", short: "Ch 20–22 Ops & BSC", sub: "Cost of quality · EOQ · backflush · BSC" }
  ]
});

PORTAL.addSummary("ma", [
/* ===================== FORMULA SHEET ===================== */
{ id: "a-formulas", topic: "basics", title: "Master formula sheet (memorise this)", src: "Complete Exam Guide · lecture slides", tags: "formulas cheat sheet",
html: `<div class="formula">ALLOCATION RATE        = cost pool ÷ total quantity of the allocation base
Normal costing         : allocated = actual quantity × BUDGETED rate
Under(+)/over(−)       = actual overhead − allocated overhead
High–low               : b = (cost_high − cost_low) ÷ (X_high − X_low);  a = cost_high − b·X_high
Prime costs            = DM + direct labour;   Conversion costs = DL + manufacturing overhead
COGS                   = opening FG + cost of goods manufactured − closing FG

NRV                    = final sales value − separable costs
Constant GM%           = (total sales − total costs) ÷ total sales;  joint cost_i = sales_i(1 − GM%) − separable_i

Equivalent units       = physical units × % complete (per cost pool!)
WA cost/EU             = (opening WIP cost + current cost) ÷ EU of work done to date
FIFO cost/EU           = current cost ÷ EU of work done THIS period

Absorption unit cost   = variable cost/unit + fixed production cost ÷ normal production
PVV                    = (actual production − normal production) × fixed cost/unit   (+ = favourable)
AC profit − VC profit  = Δ inventory (units) × fixed cost/unit

CM/unit = p − v;   CM ratio = (p − v) ÷ p
Break-even q           = F ÷ (p − v);   break-even sales = F ÷ CM ratio
Target profit q        = (F + TP) ÷ (p − v);   pre-tax TP = after-tax TP ÷ (1 − t)
Sales mix              : weighted CM = Σ(mix% × CM_i);  q_BE = F ÷ weighted CM
Margin of safety       = budgeted revenue − break-even revenue
Scarce resource        : rank by CM per unit of the CONSTRAINT

Target cost            = target price − target operating profit per unit

Flexible-budget var.   = actual cost − flexible budget (budgeted cost for ACTUAL output)
Price variance         = (actual price − budgeted price) × actual quantity
Efficiency variance    = (actual qty − budgeted qty allowed for actual output) × budgeted price
Yield variance_i       = (actual total input − budgeted total input) × budgeted mix%_i × budgeted price_i
Mix variance_i         = (actual mix%_i − budgeted mix%_i) × actual total input × budgeted price_i
Sales-volume var.      = (actual units − budgeted units) × budgeted CM (or price for revenue)
Sales-quantity var.    = (actual total units − budgeted total units) × budgeted mix% × budgeted CM
Sales-mix var.         = (actual mix% − budgeted mix%) × actual total units × budgeted CM
Market-size var.       = (actual market − budgeted market) × budgeted share × budgeted avg CM
Market-share var.      = actual market × (actual share − budgeted share) × budgeted avg CM

Minimum transfer price = incremental (outlay) cost + opportunity cost of the supplying division
ROI                    = income ÷ investment = (income ÷ revenue) × (revenue ÷ investment)   (DuPont)
RI                     = income − required rate × investment
EVA                    = after-tax operating profit − WACC × (total assets − current liabilities)
ROS                    = operating profit ÷ revenue
EOQ                    = √(2DP ÷ C);   reorder point = sales per period × lead time</div>
<div class="trap">Sign convention used in this portal: <b>F</b> (favourable) = increases profit, <b>U</b> (unfavourable) = decreases profit. In numeric answers you can type the amount with or without a minus sign.</div>`},

/* ===================== CH 1, 2, 9 ===================== */
{ id: "a-ma", topic: "basics", title: "Management vs financial accounting; planning and control", src: "Ch. 1 · Exam Guide", tags: "management accounting financial accounting cost accounting planning control management by exception scorekeeping attention directing problem solving value chain key success factors",
html: `<div class="tablewrap"><table><tr><th></th><th>Financial accounting</th><th>Management accounting</th></tr>
<tr><td>Purpose</td><td>Communicate financial position</td><td>Help managers decide</td></tr>
<tr><td>Users</td><td>Outsiders (investors, banks, tax)</td><td>Insiders (managers)</td></tr>
<tr><td>Time</td><td>Past</td><td>Future</td></tr>
<tr><td>Rules</td><td>IFRS/GAAP</td><td>No legal requirements</td></tr>
<tr><td>Detail</td><td>Company as a whole, annual/quarterly</td><td>Products, departments, hourly to 20 years; financial and non-financial</td></tr></table></div>
<p><b>Planning</b> = choosing goals, predicting results, deciding how to reach goals (the budget). <b>Control</b> = implementing and evaluating, with feedback. <b>Management by exception</b> = focus on areas that deviate from budget. Three tasks of the accountant: <b>scorekeeping</b>, <b>attention directing</b>, <b>problem solving</b>.</p>
<p>Value chain: R&D → design → production → marketing → distribution → customer service. Key success factors: cost & efficiency, quality, time, innovation. Cost management has a broad focus (whole life cycle), not just cost cutting.</p>`},

{ id: "a-terms", topic: "basics", title: "Cost terms: direct/indirect, fixed/variable, inventoriable/period", src: "Ch. 2 · Exam Guide · Tutorial 2.15", tags: "cost object direct indirect cost tracing allocation variable fixed mixed cost driver relevant range inventoriable period costs prime conversion COGS unit cost trap",
html: `<p><b>Cost object</b> = anything for which a separate measurement of costs is desired (product, service, customer, department). <b>Direct costs</b> can be traced to it in an economically feasible way; <b>indirect costs</b> cannot and must be allocated.</p>
<div class="trap">Direct vs indirect depends on the <b>cost object</b>. The assembly director's salary is direct for the assembly department but indirect for one car. With a single product/service (e.g. one type of laser treatment, smoked salmon), <b>all costs are direct</b>.</div>
<div class="tablewrap"><table><tr><th></th><th>Total cost</th><th>Cost per unit</th></tr>
<tr><td>Variable</td><td>Changes in proportion to the driver</td><td>Constant</td></tr>
<tr><td>Fixed</td><td>Constant within the relevant range</td><td>Falls as volume rises</td></tr></table></div>
<p><b>Cost driver</b> = a variable (activity level or volume) that causally affects total costs over a given time span. <b>Relevant range</b> = band of activity where the cost relationship holds.</p>
<div class="key"><b>The unit-cost trap.</b> Laser clinic: fixed €1,600,000, variable €10. At 5,000 treatments unit cost = €330; at 4,000 it's €410. Never use a unit cost that includes fixed costs to predict total cost at a different volume.</div>
<p><b>Inventoriable (product) costs</b> are assets when incurred and become COGS when sold. <b>Period costs</b> are all costs other than COGS in the income statement, expensed when incurred. <b>Prime costs</b> = DM + DL; <b>conversion costs</b> = DL + manufacturing overhead. A <b>product cost</b> = sum of costs assigned to a product <i>for a specific purpose</i> (pricing/product mix, government contracts, external reporting): “different costs for different purposes”.</p>`},

{ id: "a-behave", topic: "basics", title: "Estimating cost behaviour: high–low, drivers, learning curves", src: "Ch. 9 · Exam Guide", tags: "cost function linear high-low regression industrial engineering conference method account analysis economic plausibility goodness of fit learning curve cumulative average incremental unit time step costs",
html: `<p>Linear cost function <b>y = a + bX</b> (a = fixed, b = variable per unit of driver). Whether a cost is fixed or variable depends on the cost object, the time span (long run: all variable) and the relevant range.</p>
<p>Four estimation approaches: <b>industrial engineering</b> (time-and-motion; accurate, slow), <b>conference method</b> (experts; quick, subjective), <b>account analysis</b> (classify accounts as fixed/variable), <b>quantitative analysis</b> (high–low, regression).</p>
<div class="key"><b>High–low</b>: use the highest and lowest values of the <b>driver</b> (not the cost). Example: 1,200 h/€38,000 and 900 h/€32,000 → b = 6,000/300 = €20/h; a = 38,000 − 24,000 = €14,000. Weakness: only two observations (maybe outliers).</div>
<p>Choosing a driver: <b>economic plausibility</b>, <b>goodness of fit</b>, <b>slope</b>. Correlation ≠ causation.</p>
<p><b>Learning curves</b> (80%, first unit 100 h): <i>cumulative average-time</i> model: average falls 20% each time output doubles (2 units: avg 80, total 160; 4 units: avg 64, total 256). <i>Incremental unit-time</i> model: the time of the <i>last</i> unit falls 20% (unit 2 = 80, total 180).</p>`},

/* ===================== CH 3 ===================== */
{ id: "a-job", topic: "job", title: "Job costing, normal costing, under/over-allocation and proration", src: "Ch. 3 · Exam Guide · Example midterm Q4–5, Q17–19", tags: "job costing process costing seven steps cost pool allocation base normal costing actual costing budgeted rate underallocated overallocated proration write-off COGS adjusted allocation rate",
html: `<p><b>Job costing</b>: distinct units/batches with different characteristics (repairs, audits, houses). <b>Process costing</b>: masses of identical units.</p>
<p>Seven steps: identify the job → direct costs → allocation bases → indirect cost pools → <b>rate per unit of base</b> → allocate → total job cost.</p>
<div class="key"><b>BZN example (two departments)</b>: Assembly rate = 600,000/200,000 = 3 per € of DL; Finishing = 400,000/800,000 = 0.5. Job #432 overhead = 8,000×3 + 12,000×0.5 = €30,000; total = 25,000 + 20,000 + 30,000 = €75,000.</div>
<p><b>Normal costing</b> uses actual direct costs but a <b>budgeted</b> overhead rate × actual quantity of the base. Benefits: timely, stable, usable for pricing. <b>Actual costing</b> uses the actual rate (only known at year end).</p>
<div class="formula">Budgeted rate = budgeted overhead ÷ budgeted base
Allocated     = actual base × budgeted rate
Actual > allocated → UNDER-allocated (add costs);  actual < allocated → OVER-allocated (remove costs)</div>
<p>Example: budget €2,400,000 / 80,000 MH = €30; actual 75,000 MH → allocated €2,250,000; actual overhead €2,500,000 → <b>€250,000 under-allocated</b>.</p>
<h3>Three ways to deal with the difference</h3>
<ol><li><b>Adjusted allocation-rate</b> approach: restate all jobs at the actual rate (most accurate, rarely used).</li>
<li><b>Proration</b> over WIP, FG and COGS: (a) on <b>total closing balances</b>, or (b) on the <b>overhead allocated</b> in each balance (more precise, uses machine hours). Never to raw materials.</li>
<li><b>Write-off to COGS</b> (simplest; only option for service firms).</li></ol>
<p>Example (€150,000 under): balances COGS 4,000,000 / FG 600,000 / WIP 400,000 (total 5m) → on balances COGS gets 80% = +120,000 → €4,120,000. On allocated overhead (hours 60,000/11,000/4,000 of 75,000) WIP gets 5.33% = +8,000 → €408,000.</p>`},

/* ===================== CH 11 ===================== */
{ id: "a-abc", topic: "abc", title: "Activity-based costing and the cost hierarchy", src: "Ch. 11 · Exam Guide · Final 2023 Park · Example midterm GreenTech", tags: "ABC activity-based costing peanut butter costing undercosting overcosting cross-subsidization cost hierarchy output unit batch product-sustaining facility-sustaining activity-based management",
html: `<p><b>Peanut-butter costing</b> spreads costs evenly with broad averages. Result: <b>undercosting</b> (looks profitable, actually loses money), <b>overcosting</b> (priced too high, loses share) and <b>cross-subsidization</b> (if one is miscosted, another is miscosted the other way).</p>
<p>Refine with: more direct-cost tracing, more homogeneous indirect cost pools, cause-and-effect allocation bases. <b>ABC</b> uses activities as fundamental cost objects; each activity pool gets its own driver.</p>
<div class="key"><b>ABC is useful when</b> (Final 2023 Park b): indirect costs are a large share of total costs, <b>and</b> products use resources very differently. ABC doesn't change total cost; it redistributes it.</div>
<div class="tablewrap"><table><tr><th>Level</th><th>Varies with</th><th>Examples</th></tr>
<tr><td>Output unit-level</td><td>each unit</td><td>machine energy, machine-hour costs</td></tr>
<tr><td>Batch-level</td><td>each batch / order</td><td>set-ups, purchase orders, materials handling</td></tr>
<tr><td>Product-sustaining</td><td>each product line</td><td>design, engineering changes</td></tr>
<tr><td>Facility-sustaining</td><td>the organization</td><td>rent, security, general administration</td></tr></table></div>
<h3>Worked example: Park Inc (Final 2023)</h3>
<p>Traditional (DLH): rate = €1.5m / 15,000 DLH = €100/h → P2 = 85 + 75 + 300 = <b>€460</b>; X4 = 80 + 100 + 400 = <b>€580</b>.</p>
<p>ABC: production €900,000 / 50,000 parts = €18 per part; logistics €600,000 / 500 orders = €1,200 per order. P2: 20 parts × 18 = 360 + (1,200/5) = 240 → indirect 600 → <b>€760</b>. X4: 180 + 120 = 300 → <b>€480</b>. P2 was undercosted: more parts and smaller orders.</p>
<p>Per-unit batch cost = rate per batch ÷ units per batch. <b>Activity-based management</b> uses ABC for pricing, product mix, cost reduction and design decisions.</p>`},

/* ===================== CH 5–6 ===================== */
{ id: "a-support", topic: "alloc", title: "Support-department allocation: direct, step-down, reciprocal", src: "Ch. 5 · Exam Guide · Example midterm Searpon · Midterm 2024 Eastern", tags: "support department operating department direct method step-down sequential reciprocal single-rate dual-rate cause and effect benefits received fairness ability to bear budgeted rates",
html: `<p>Why allocate: (1) economic decisions, (2) motivation, (3) justify costs/reimbursement, (4) external reporting. Criteria: <b>cause and effect</b> (preferred), <b>benefits received</b>, <b>fairness/equity</b>, <b>ability to bear</b>.</p>
<p><b>Single-rate</b>: one pool, one base. <b>Dual-rate</b>: separate variable pool (actual usage) and fixed pool (budgeted capacity). Budgeted rates let users plan and put the risk of inefficiency on the supplier.</p>
<div class="key"><b>Direct method</b>: ignore support-to-support services; denominators include <b>only operating departments</b>.<br><b>Step-down</b>: allocate the department that supports other support departments most first (to everyone after it); never allocate back. The second department allocates its own cost <i>plus</i> what it received.<br><b>Reciprocal</b>: solve simultaneous equations; most accurate.</div>
<p><b>Searpon</b> (HR €1.6m by employees; IT €1.0m by hours). Direct: Corporate gets 40/190 × 1.6m = <b>£336,842</b>. Step-down: HR serves IT 5% (10/200); IT serves HR 10% (80/800) → IT first. HR gets 100,000 → 1.7m; Consumer gets 150/190 × 1.7m = <b>£1,342,105</b>. Reciprocal: HR = 1.6m + 0.1·IT, IT = 1.0m + 0.05·HR → HR = 1,708,543, IT = 1,085,427; IT to Corporate 50% = £542,714.</p>
<h3>Common costs</h3>
<p><b>Stand-alone method</b>: share in proportion to stand-alone costs (Rome €750 + Athens €900; combined ticket €1,100 → Athens 900/1,650 × 1,100 = €600). <b>Incremental method</b>: primary user pays its stand-alone cost, the other pays the rest (Rome primary → Athens €350). The same logic applies to <b>bundled revenue</b> allocation (washer 450/750 × €1,000 = €600).</p>`},

{ id: "a-joint", topic: "alloc", title: "Joint costs: four methods and sell-or-process-further", src: "Ch. 6 · Exam Guide · Example midterm Yakima · Midterm 2024 Hamburg Soy", tags: "joint costs split-off separable costs joint products by-product scrap physical measure sales value at split-off NRV constant gross margin sell or process further",
html: `<p><b>Joint costs</b> = costs of one process yielding several products. <b>Split-off point</b> = where products become separately identifiable; <b>separable costs</b> come after it. Main/joint products vs <b>by-products</b> (low value) vs scrap.</p>
<div class="tablewrap"><table><tr><th>Method</th><th>Base</th></tr>
<tr><td><b>Sales value at split-off</b></td><td>Production × price at split-off (market-based; most used)</td></tr>
<tr><td><b>Physical measure</b></td><td>kg, litres (NOT market-based)</td></tr>
<tr><td><b>Net realizable value</b></td><td>Final sales value − separable costs</td></tr>
<tr><td><b>Constant gross-margin %</b></td><td>Every product gets the same GM%</td></tr></table></div>
<div class="key"><b>Yakima</b>: sales value at split-off is based on <b>production</b>, not sales: paper 30,000 × 0.04 = €1,200; casings 30,000 × 0.10 = €3,000. Joint €1,500 → paper 1,200/4,200 = €428.57; 1,000 sheets in inventory → €14.29; casings €1,071 / 30,000 = <b>€0.0357</b>.</div>
<div class="trap"><b>Joint costs are irrelevant for sell-or-process-further.</b> Compare incremental revenue with incremental separable cost only. Hamburg Soy: meal upgrade +€2.50 revenue vs +€2.00 cost → do it; oil +€0.50 vs +€1.00 → don't.</div>`},

/* ===================== CH 4 ===================== */
{ id: "a-process", topic: "process", title: "Process costing: equivalent units, weighted average and FIFO", src: "Ch. 4 · Exam Guide · Final 2023 SmokeFin · Example midterm Spyllis", tags: "process costing equivalent units weighted average FIFO opening closing work in process conversion costs transferred-in five steps",
html: `<p><b>Five steps</b>: (1) physical units, (2) equivalent units per cost pool, (3) cost per EU, (4) costs to account for, (5) assign to completed output and closing WIP. Materials and conversion get <b>separate</b> EUs.</p>
<div class="tablewrap"><table><tr><th></th><th>Weighted average</th><th>FIFO</th></tr>
<tr><td>EU</td><td>Completed + closing WIP × %</td><td>Opening WIP × (1 − % done) + started-and-completed + closing WIP × %</td></tr>
<tr><td>Cost per EU</td><td>(opening WIP cost + current cost) ÷ EU</td><td>Current cost ÷ EU of this period</td></tr>
<tr><td>Completed output</td><td>units × cost per EU</td><td>opening WIP cost + work this period × cost per EU</td></tr></table></div>
<h3>SmokeFin (Final 2023, FIFO)</h3>
<p>Opening WIP 20,000 kg (mat 100%, conv 30%: €58,000 + €11,400); started 110,000; completed 100,000; closing 30,000 (100%, 60%); current costs €352,000 + €235,200.</p>
<ul><li>Started and completed = 100,000 − 20,000 = 80,000.</li>
<li>EU materials = 0 + 80,000 + 30,000 = <b>110,000</b> → €3.20. EU conversion = 20,000×70% (14,000) + 80,000 + 30,000×60% (18,000) = <b>112,000</b> → €2.10.</li>
<li>Completed = 58,000 + 11,400 + 80,000×3.20 + (14,000 + 80,000)×2.10 = 69,400 + 256,000 + 197,400 = <b>€522,800</b>.</li>
<li>Closing WIP = 30,000×3.20 + 18,000×2.10 = 96,000 + 37,800 = <b>€133,800</b>. Check: 656,600 ✓.</li></ul>
<div class="trap">When input prices <b>rise</b>, FIFO values closing WIP <b>higher</b> than WA (FIFO uses only the newer, higher current-period prices). Total cost is the same under both; only the split differs.</div>`},

/* ===================== CH 7 ===================== */
{ id: "a-vcac", topic: "vcac", title: "Variable vs absorption costing, PVV and capacity concepts", src: "Ch. 7 · Exam Guide · Final 2021 BigScreen · Example midterm Tennindo", tags: "variable costing absorption costing production volume variance inventory change profit reconciliation theoretical practical normal master-budget capacity",
html: `<p><b>Variable costing</b>: fixed production costs are a <b>period cost</b>. <b>Absorption costing</b>: fixed production costs are <b>inventoriable</b> (absorbed into units at the normal-capacity rate). Absorption costing is required externally.</p>
<div class="formula">Fixed cost/unit = fixed production costs ÷ normal production
PVV = (actual production − normal production) × fixed cost/unit
     production > normal → favourable (subtract from costs)
AC profit − VC profit = (closing − opening inventory in units) × fixed cost/unit</div>
<div class="key"><b>BigScreen (Final 2021)</b>: F = €540,000/month, v = €1,500, p = €2,500, normal 1,000 → fixed/unit €540, AC unit cost €2,040. Break-even = 540,000/1,000 = <b>540 units</b>.<br>Dec: produce 1,400, sell 2,400. VC: 2,400×1,000 − 540,000 = <b>€1,860,000</b>. AC: revenue 6,000,000 − COGS 2,400×2,040 (4,896,000) + PVV 400×540 = 216,000 F → <b>€1,320,000</b>.<br>Jan: produce 900, sell 700. VC: 700×1,000 − 540,000 = <b>€160,000</b>. AC: 1,750,000 − 1,428,000 − PVV 54,000 U = <b>€268,000</b>.<br>Difference Dec: inventory −1,000 × 540 = −540,000 ✓; Jan: +200 × 540 = +108,000 ✓.</div>
<div class="tablewrap"><table><tr><th>Situation</th><th>Which shows higher profit?</th></tr>
<tr><td>Production = sales</td><td>Equal</td></tr>
<tr><td>Production &gt; sales (inventory up)</td><td>Absorption</td></tr>
<tr><td>Production &lt; sales (inventory down)</td><td>Variable</td></tr></table></div>
<p>Criticism: under absorption costing, managers can boost profit by <b>overproducing</b> (fixed costs are deferred into inventory). Counter: charge for inventory, longer evaluation periods, non-financial measures, limit inventory build-up.</p>
<p><b>Denominator levels</b>: <b>theoretical</b> and <b>practical</b> capacity focus on what a plant can <b>supply</b>; <b>normal capacity utilization</b> and <b>master-budget capacity utilization</b> focus on <b>demand</b>.</p>`},

/* ===================== CH 8 ===================== */
{ id: "a-cvp", topic: "cvp", title: "CVP: break-even, target profit, taxes, mix, leverage", src: "Ch. 8 · Exam Guide · week 5 summary · Midterm 2024 PriceBuy", tags: "CVP break-even contribution margin target profit income tax sales mix margin of safety operating leverage assumptions sensitivity",
html: `<p><b>Assumptions</b>: costs split into fixed and variable; linear revenues and costs within the relevant range; price, unit variable cost and total fixed costs known and constant (<i>not</i> unit fixed cost!); single product or constant mix; no inventory change; output is the only driver; time value of money ignored.</p>
<div class="key">SwapBike: F = €27m, p = €230, v = €30 → CM €200 → BEP = <b>135,000</b> customers. Target €5m pre-tax → 32m/200 = 160,000. €5m after 20% tax → pre-tax 6.25m → 33.25m/200 = 166,250.</div>
<p><b>Break-even in sales</b> = F ÷ CM ratio. (Sales 200,000, VC 150,000 → CM ratio 25%; F 30,000 → BE sales €120,000.)</p>
<p><b>Sales mix</b>: weighted CM = 0.75×200 + 0.25×230 = 207.50 → BEP = 27m/207.5 = 130,121 units, split 75/25. Never split the fixed costs.</p>
<p><b>Operating leverage</b>: high fixed costs → higher risk but more profit at high volume; low fixed costs → break even sooner. <b>Margin of safety</b> = budgeted − break-even revenue. Income taxes don't change the break-even point.</p>
<p>Musical (2016 exam): €10m sunk before the premiere; per show cost €36,000; revenue 1,200 × 90% × €75 = €81,000 → BEP = 10m/45,000 ≈ <b>223 shows</b>. 250 shows planned → ≈ 27 × 45,000 = €1.215m profit. Once running, keep performing as long as revenue per show > €36,000: the €10m is sunk.</p>`},

/* ===================== CH 10 ===================== */
{ id: "a-relevant", topic: "relevant", title: "Relevant costs: special orders, make/buy, constraints, replacement", src: "Ch. 10 · Exam Guide · Final 2023 Park d · Midterm 2024 YProd/Alvarez", tags: "relevant costs sunk costs opportunity costs special order make or buy outsourcing constraint contribution margin per unit of constraint equipment replacement book value qualitative factors",
html: `<p><b>Relevant costs/revenues</b> = expected <b>future</b> amounts that <b>differ</b> among alternatives. Past (sunk) costs never are: book values, depreciation, money already spent. <b>Opportunity cost</b> = contribution forgone by not using a limited resource in its next-best use.</p>
<div class="key"><b>Special order</b> (one-time): accept if incremental revenue &gt; incremental cost (+ opportunity cost if capacity is full). MRI example: free capacity → minimum €75/h (operator only); no free capacity → €75 + lost CM €275 = €350/h.</div>
<p><b>Scarce resource</b>: rank by <b>CM per unit of the constraint</b>. Park (Final 2023): P2 CM 550 − 160 = 390 / 3 h = <b>€130/h</b>; X4 400 / 4 = €100/h → produce P2 first. Alvarez: CM per MH A 18/2 = 9, B 15/1.5 = <b>10</b>, C 9/1 = 9 → B.</p>
<p><b>Equipment replacement</b> (YProd): book value €800,000 is sunk. Relevant over 4 years: savings 4 × 200,000 = 800,000 + disposal 50,000 − new machine 600,000 = <b>€250,000 benefit</b>.</p>
<p><b>Outsourcing under a constraint</b>: compare the contribution earned per freed constraint hour. Qualitative factors: supplier quality and reliability, loss of know-how, customer goodwill, one-off vs recurring.</p>`},

/* ===================== CH 12 & budgets ===================== */
{ id: "a-pricing", topic: "pricing", title: "Pricing, target costing, life-cycle costing, customer profitability", src: "Ch. 12 · week 5 summary", tags: "pricing customers competitors costs market-based cost-based target price target cost value engineering locked-in costs value-added non-value-added cost-plus markup life-cycle budgeting customer profitability price discounting customer cost hierarchy",
html: `<p>Three influences on price: <b>customers, competitors, costs</b>. Short-run pricing uses relevant (incremental) costs; long-run prices must cover <b>all</b> costs.</p>
<h3>Market-based: target costing</h3>
<div class="formula">Target cost per unit = target price − target operating profit per unit</div>
<p>Steps: (1) develop a product that satisfies needs, (2) choose a target price, (3) derive the target cost, (4) <b>value engineering</b> to reach it: evaluate all value-chain functions to cut costs while satisfying customers. Distinguish <b>value-added</b> (assembly, design), <b>non-value-added</b> (rework, expediting, obsolete stock) and grey-area costs (testing, materials movement). <b>Locked-in (designed-in) costs</b> are committed early (design) though incurred later.</p>
<h3>Cost-based: cost-plus</h3>
<p>Price = cost base + markup. Markup can be set to earn a target ROI: markup % = (target ROI × invested capital) ÷ cost base. Full-cost bases give full cost recovery, price stability and simplicity.</p>
<p><b>Life-cycle budgeting/costing</b>: all costs from R&D to customer support, important when development costs are large. <b>Customer profitability analysis</b>: customer revenues (watch price discounts) minus costs from a <b>customer cost hierarchy</b> (customer output-unit, batch, customer-sustaining, distribution-channel, corporate-sustaining).</p>`},

{ id: "a-budget", topic: "pricing", title: "Budgets and the master budget", src: "Budgeting chapter · week 5 summary", tags: "budget master budget operating budget financial budget cash budget rolling budget revenue budget production budget coordination communication motivation participation slack",
html: `<p>Budgets support strategy and plans: they (1) make plans concrete, (2) provide performance criteria, (3) improve <b>coordination and communication</b>, (4) influence motivation. Past results are a weak benchmark (they may contain inefficiencies; the future may differ).</p>
<p><b>Master budget</b> = all financial projections for a period (usually one year). <b>Operating budget</b>: revenue budget → production budget (= sales + target closing stock − opening stock) → DM, DL and overhead budgets → COGS → budgeted income statement. <b>Financial budget</b>: capital budget, cash budget, budgeted balance sheet and cash flow statement.</p>
<p><b>Rolling budget</b>: always covers a full future period by adding a month/quarter as one ends. Challenging but achievable targets motivate best; participation increases acceptance; top-management support is essential.</p>`},

/* ===================== CH 15, 17 ===================== */
{ id: "a-flex", topic: "variance", title: "Static vs flexible budgets; price and efficiency variances", src: "Ch. 15 · week 6 · Final 2023 SparkPedal", tags: "static budget flexible budget sales-volume variance flexible budget variance price variance efficiency variance favourable unfavourable standard costs benchmarking",
html: `<p>A <b>static budget</b> uses the planned output; a <b>flexible budget</b> recalculates budgeted amounts for the <b>actual output</b>.</p>
<div class="formula">Static-budget variance  = sales-volume variance + flexible-budget variance
Sales-volume variance   = flexible budget − static budget
Flexible-budget var.    = actual − flexible budget  = price variance + efficiency variance</div>
<div class="key"><b>SparkPedal (Final 2023)</b>: budget 5 kg lithium per battery at €50/kg. Actual: 3,700 batteries, 20,350 kg for €976,800 (= €48/kg).<br>Flexible budget = 3,700 × 5 × 50 = €925,000 → FBV = <b>€51,800 U</b>.<br>Price = 20,350 × (50 − 48) = <b>€40,700 F</b>.<br>Efficiency = (18,500 − 20,350) × 50 = <b>€92,500 U</b>.</div>
<p>Interpretation: price variances are usually the purchasing manager's responsibility; efficiency variances production's. But they interact (cheap, poor-quality materials cause waste). Investigate causes before blaming. Benchmarking compares to best practice, internally or externally.</p>`},

{ id: "a-mixyield", topic: "variance", title: "Mix and yield variances (multiple inputs)", src: "Ch. 17 · Lecture week 6 (ACG) · Final 2021 BrightPeople", tags: "mix variance yield variance substitutable inputs efficiency variance consultancy partners managers assistants principals associates",
html: `<p>When inputs are substitutable, the efficiency variance splits into <b>yield</b> (did we use more/less input in total?) and <b>mix</b> (did we use a different combination?). Both at <b>budgeted prices</b>.</p>
<div class="formula">Yield_i = (budgeted total input for actual output − actual total input) × budgeted mix%_i × budgeted price_i
Mix_i   = (budgeted mix%_i − actual mix%_i) × actual total input × budgeted price_i
(positive = favourable)</div>
<h3>ACG consultancy (lecture)</h3>
<p>Per engagement: partners 120 h @180, managers 360 h @110, assistants 720 h @50 (total 1,200 h, €97,200). Actual for 10 engagements: 600 h @190, 4,200 h @105, 6,800 h @60 (11,600 h, €963,000).</p>
<div class="tablewrap"><table><tr><th></th><th>Efficiency</th><th>Price</th><th>Yield</th><th>Mix</th></tr>
<tr><td>Partners</td><td>108,000 F</td><td>6,000 U</td><td>7,200 F</td><td>100,800 F</td></tr>
<tr><td>Managers</td><td>66,000 U</td><td>21,000 F</td><td>13,200 F</td><td>79,200 U</td></tr>
<tr><td>Assistants</td><td>20,000 F</td><td>68,000 U</td><td>12,000 F</td><td>8,000 F</td></tr>
<tr><td><b>Total</b></td><td><b>62,000 F</b></td><td><b>53,000 U</b></td><td><b>32,400 F</b></td><td><b>29,600 F</b></td></tr></table></div>
<p>Flexible-budget variance = 972,000 − 963,000 = €9,000 F = 62,000 F − 53,000 U. Yield + mix = efficiency.</p>
<h3>BrightPeople (Final 2021)</h3>
<p>Allowed: principals 600 h @180, associates 4,400 h @50 (5,000 h; mix 12%/88%). Actual: 500 h @220, 5,000 h @48 (5,500 h; 9%/91%). Efficiency 12,000 U (principals 18,000 F, associates 30,000 U); price 10,000 U; yield (5,000 − 5,500) → 32,800 U; mix 20,800 F (fewer expensive principals).</p>`},

{ id: "a-sales", topic: "variance", title: "Sales variances: volume, quantity, mix, market size and share", src: "Ch. 17 · Lecture week 6 (ACG revenues)", tags: "sales-volume variance sales-quantity variance sales-mix variance market-size variance market-share variance revenue variance price variance",
html: `<p>Levels: static-budget variance → flexible-budget variance (price) + <b>sales-volume variance</b> → <b>sales-quantity</b> + <b>sales-mix</b> → <b>market-size</b> + <b>market-share</b>. Use budgeted CM per unit for profit variances, or budgeted price for revenue variances (as in the lecture).</p>
<div class="key"><b>ACG revenues</b>: budget Strategy 30 jobs @120,000 (60%), Risk 20 @110,000 (40%). Actual Strategy 24 @140,000 (40%), Risk 36 @100,000 (60%); 60 jobs.<br>Price: Strategy 24 × 20,000 = 480,000 F; Risk 36 × −10,000 = 360,000 U.<br>Sales-volume: Strategy (24 − 30) × 120,000 = 720,000 U; Risk (36 − 20) × 110,000 = 1,760,000 F → 1,040,000 F.<br>Quantity (yield): (60 − 50) × 60% × 120,000 = 720,000 F; × 40% × 110,000 = 440,000 F → 1,160,000 F.<br>Mix: (40% − 60%) × 60 × 120,000 = 1,440,000 U; (60% − 40%) × 60 × 110,000 = 1,320,000 F → 120,000 U.</div>
<p><b>Market-size</b> variance isolates market growth (hard for a salesperson to influence); <b>market-share</b> variance shows whether the firm captured more of the market.</p>`},

/* ===================== CH 18–19 ===================== */
{ id: "a-decentral", topic: "control", title: "Management control, decentralization, responsibility centres", src: "Ch. 18 · Lecture week 6/7 · Finals 2021 & 2023", tags: "management control system goal congruence effort decentralization advantages disadvantages responsibility accounting cost centre revenue centre profit centre investment centre controllability",
html: `<p>A <b>management control system</b> gathers and uses information to coordinate planning and control decisions and guide behaviour (formal and informal parts). Good systems fit strategy and structure and promote <b>goal congruence</b> and <b>effort</b>.</p>
<div class="key"><b>Decentralization</b> = giving lower-level managers the freedom to make decisions, and holding them responsible.<br><b>Advantages</b>: better information (direct contact with customers and suppliers); quicker decisions; more motivation; management development; flexibility.<br><b>Disadvantages</b>: suboptimal decisions (units pursue their own interests); duplication of activities; competition and focus on own unit; higher information/coordination costs.</div>
<p><b>Responsibility centres</b>: <b>cost</b> centre (costs only), <b>revenue</b> centre (revenues only), <b>profit</b> centre (costs and revenues), <b>investment</b> centre (also investments). <b>Controllability</b>: hold managers accountable only for what they can influence.</p>`},

{ id: "a-transfer", topic: "control", title: "Transfer pricing: methods, minimum price, ranges", src: "Ch. 18 · Lecture (Pharma/Plastic, Advice Inc.) · Finals 2021 Stardust & 2023 SparkPedal", tags: "transfer price market-based cost-based full cost markup variable cost negotiated dual pricing minimum transfer price opportunity cost spare capacity goal congruence autonomy performance evaluation tax",
html: `<p>A <b>transfer price</b> is the internal price one unit charges another. It distributes profit over units (and affects taxes). Goals: <b>autonomy</b>, <b>goal congruence</b>, <b>good performance measurement</b>, <b>motivation</b>.</p>
<div class="tablewrap"><table><tr><th>Method</th><th>Pros</th><th>Cons</th></tr>
<tr><td><b>Market price</b></td><td>Achieves all goals with a well-functioning market</td><td>Often no real market; may block profitable special orders</td></tr>
<tr><td><b>Cost-based</b> (variable, full, full + markup)</td><td>Easy, feasible within the firm</td><td>No incentive for the supplier to control costs</td></tr>
<tr><td><b>Negotiated</b></td><td>Uses local knowledge, flexible</td><td>Time-consuming; depends on bargaining power</td></tr></table></div>
<div class="formula">Minimum TP = incremental (outlay) cost per unit + opportunity cost per unit (supplying division)
Spare capacity → opportunity cost 0 → min TP = variable cost
No spare capacity → opportunity cost = market price − variable cost → min TP = market price
Maximum TP (buyer) = what the buyer can pay and still gain = its revenue − its own variable cost</div>
<div class="key"><b>SparkPedal (2023)</b>: TP = 1.1 × (700 + 19.2m/48,000) = 1.1 × 1,100 = €1,210. Profits: Battery 48,000 × (1,210 − 700) − 19.2m = <b>€5,280,000</b>; Bike 48,000 × (2,100 − 1,210 − 300) − 12m = <b>€16,320,000</b>. Special order 2,000 bikes at €1,400 with spare capacity: firm variable cost 700 + 300 = 1,000 &lt; 1,400 → accept; TP range <b>€700–1,100</b>.<br><b>Stardust (2021)</b>: cabinet v = 70, market 140; Ziggy v = 210 excl. cabinet, order price 340. Spare capacity → accept, range <b>70–130</b>. No spare capacity → order CM 60 &lt; external CM 70 → <b>reject</b>, TP = market price 140. Only <b>negotiation</b> gets both cases right.</div>
<p>Lecture example Pharma/Plastic: order 100,000 bottles at €1.70; variable cost 1.20 + bottle 0.30 = 1.50 → good for the firm (+€20,000), but with a €0.80 market TP Pharma sees a loss and refuses. Without spare capacity: min price 1.50 + 0.50 lost CM = €2.00. <b>Dual pricing</b> uses different prices for the selling and buying division.</p>`},

{ id: "a-perf", topic: "control", title: "Performance measures: ROI (DuPont), RI, EVA, ROS", src: "Ch. 19 · week 7 summary · Final 2021 Bewlay", tags: "ROI DuPont residual income EVA WACC return on sales investment definitions total assets current cost historical cost gross book value net book value goal congruence",
html: `<div class="formula">ROI = income ÷ investment = ROS × asset turnover = (income ÷ revenue) × (revenue ÷ investment)
RI  = income − required rate × investment   (the ‘imputed cost’ of investment)
EVA = after-tax operating profit − WACC × (total assets − current liabilities)
ROS = operating profit ÷ revenue</div>
<div class="key"><b>Bewlay (Final 2021)</b>: profit €2.1m on €10m → ROI 21.0%, RI = 2.1m − 25% × 10m = −€400,000. Project: +€460,000 profit for +€2m assets → ROI 2.56/12 = <b>21.3%</b>, RI = 2.56m − 3m = <b>−€440,000</b>. Project ROI 23% &lt; 25% cost of capital. The manager (bonus on ROI) accepts, but the firm should <b>reject</b> (RI falls).</div>
<p>ROI can make managers of high-ROI divisions reject projects that beat the cost of capital; <b>RI promotes goal congruence</b> better. EVA is a specific RI using after-tax profit and WACC.</p>
<p>Design steps: choose the variable, define items (total assets available, total assets employed, working capital + long-term assets, equity), choose measures (historical vs current cost; gross vs net book value: net book value most common but ROI rises as assets age), set targets, choose timing of feedback.</p>`},

/* ===================== CH 20–22 ===================== */
{ id: "a-quality", topic: "ops", title: "Quality costs and theory of constraints", src: "Ch. 20 · week 7 summary", tags: "quality of design conformance quality costs of quality prevention appraisal internal failure external failure control chart Pareto diagram cause and effect fishbone theory of constraints throughput contribution bottleneck",
html: `<p><b>Quality of design</b> = how well characteristics match customer needs; <b>conformance quality</b> = performance matches design specifications.</p>
<div class="tablewrap"><table><tr><th>Cost of quality</th><th>Examples</th></tr>
<tr><td><b>Prevention</b></td><td>Design and process engineering, supplier evaluations, preventive maintenance, training</td></tr>
<tr><td><b>Appraisal</b></td><td>Inspection, product testing</td></tr>
<tr><td><b>Internal failure</b> (found before the customer)</td><td>Spoilage, rework, scrap, breakdowns</td></tr>
<tr><td><b>External failure</b> (found after)</td><td>Customer support, warranty repair, liability claims, lost sales</td></tr></table></div>
<p>Tools: <b>control charts</b> (observations outside ±σ limits are investigated), <b>Pareto diagrams</b> (frequency of defect types), <b>cause-and-effect (fishbone)</b> diagrams. Non-financial measures: defects, on-time delivery, process yield, complaints.</p>
<p><b>Theory of constraints</b>: maximize <b>throughput contribution</b> = revenue − direct materials, while reducing investment (inventory) and operating costs. Steps: recognize the bottleneck determines throughput → find it → keep it busy and subordinate everything else to it → increase its capacity.</p>`},

{ id: "a-jit", topic: "ops", title: "JIT, backflush costing and EOQ", src: "Ch. 21 · week 7 summary", tags: "just-in-time JIT manufacturing cells multi-skilled TQM set-up time lead time backflush costing EOQ ordering costs carrying costs stockout reorder point safety stock prediction error",
html: `<p><b>JIT</b>: materials arrive exactly when needed; demand pulls production. Features: manufacturing cells, multi-skilled workers, TQM (stop the line for defects), short set-up and lead times, carefully selected suppliers (JIT purchasing). Benefits: lower inventory and carrying costs, less obsolescence, less space, less waste, faster response.</p>
<p><b>Backflush costing</b> skips sequential tracking: costs are assigned at the end (output) because inventories are tiny. Control shifts to physical measures on the floor.</p>
<p>Inventory-related costs: purchasing, ordering, carrying (incl. opportunity cost of capital), stockout, quality.</p>
<div class="formula">EOQ = √(2 × D × P ÷ C)   D = demand per period, P = ordering cost per order, C = carrying cost per unit per period
TRC = (D ÷ Q) × P + (Q ÷ 2) × C
Reorder point = units sold per period × purchase-order lead time (+ safety stock)</div>
<p>EOQ assumptions: same quantity each order; certain demand, costs and lead time; purchase price independent of quantity; no stockouts. Lower ordering costs (e-procurement) push EOQ down, supporting JIT. <b>Cost of a prediction error</b> = TRC with the wrong order quantity − TRC with the correct one (both at actual costs).</p>`},

{ id: "a-bsc", topic: "ops", title: "Strategy and the balanced scorecard", src: "Ch. 22 · week 7 summary", tags: "strategic management accounting Porter five forces product differentiation cost leadership balanced scorecard financial customer internal business process learning and growth cause and effect pitfalls",
html: `<p>Strategies: <b>product differentiation</b> or <b>cost leadership</b> (Porter's five forces shape profit potential). <b>Strategic management accounting</b> focuses on external, non-financial and future-oriented information.</p>
<div class="key"><b>Balanced scorecard</b> translates strategy into measures in four perspectives: <b>financial</b> (operating profit, revenue growth, ROI, EVA), <b>customer</b> (market share, satisfaction, retention), <b>internal business process</b> (innovation, operations, after-sales service), <b>learning and growth</b> (employee capabilities, information systems, motivation and empowerment).</div>
<p>A good scorecard tells the strategy through <b>cause-and-effect</b> links, communicates it, emphasizes financial objectives (for-profit), limits the number of measures and highlights suboptimal trade-offs. Pitfalls: assuming precise causal links, seeking improvement on everything at once, using only objective measures, ignoring costs of initiatives, ignoring non-financial measures in evaluation.</p>`}
]);

PORTAL.addGlossary("ma", [
{ t: "Cost object", d: "Anything for which a separate measurement of costs is desired (product, service, customer, department)." },
{ t: "Direct cost", d: "Related to the cost object and traceable to it in an economically feasible way." },
{ t: "Indirect cost", d: "Related to the cost object but not traceable in an economically feasible way; allocated." },
{ t: "Cost driver", d: "A variable (activity or volume) that causally affects total costs over a given time span." },
{ t: "Relevant range", d: "Band of activity within which a specific cost relationship is valid." },
{ t: "Variable cost", d: "Changes in total in proportion to the driver; constant per unit." },
{ t: "Fixed cost", d: "Constant in total within the relevant range; per unit it falls as volume rises." },
{ t: "Inventoriable costs", d: "Product costs treated as assets when incurred; become COGS when sold." },
{ t: "Period costs", d: "All income-statement costs other than COGS; expensed when incurred." },
{ t: "Prime costs", d: "Direct materials + direct manufacturing labour." },
{ t: "Conversion costs", d: "All manufacturing costs other than direct materials (DL + overhead)." },
{ t: "Product cost", d: "Sum of the costs assigned to a product for a specific purpose." },
{ t: "High–low method", d: "Estimates a cost function from the highest and lowest values of the cost driver." },
{ t: "Learning curve", d: "Labour hours per unit fall as cumulative output increases (cumulative average-time vs incremental unit-time model)." },
{ t: "Job costing", d: "Costing system for distinct units or batches with different characteristics." },
{ t: "Process costing", d: "Costing system for masses of identical or similar units; average cost per unit." },
{ t: "Normal costing", d: "Actual direct costs plus indirect costs allocated with a budgeted rate × actual quantity of the base." },
{ t: "Under-allocated overhead", d: "Actual overhead exceeds allocated overhead (costs must be added)." },
{ t: "Over-allocated overhead", d: "Allocated overhead exceeds actual overhead (costs must be removed)." },
{ t: "Proration", d: "Spreading under/over-allocated overhead over WIP, finished goods and COGS." },
{ t: "Activity-based costing (ABC)", d: "Uses individual activities as fundamental cost objects and allocates their costs using activity drivers." },
{ t: "Cost hierarchy", d: "Output unit-level, batch-level, product-sustaining and facility-sustaining costs." },
{ t: "Product-cost cross-subsidization", d: "Miscosting one product causes miscosting of others in the opposite direction." },
{ t: "Direct method", d: "Allocates support costs only to operating departments, ignoring services between support departments." },
{ t: "Step-down method", d: "Allocates support departments in sequence, partially recognizing services between them." },
{ t: "Reciprocal method", d: "Fully recognizes mutual services between support departments via simultaneous equations." },
{ t: "Dual-rate method", d: "Separate pools and rates for variable and fixed costs." },
{ t: "Stand-alone method", d: "Allocates common costs in proportion to each user's stand-alone cost." },
{ t: "Incremental method", d: "Primary user bears its stand-alone cost; the incremental user bears the rest." },
{ t: "Joint costs", d: "Costs of a single process that yields multiple products simultaneously." },
{ t: "Split-off point", d: "Point in a joint process where products become separately identifiable." },
{ t: "Separable costs", d: "Costs incurred after the split-off point, assignable to one product." },
{ t: "Net realizable value (NRV)", d: "Final sales value minus separable costs." },
{ t: "Equivalent units", d: "Number of complete units that could have been made with the input used (physical units × % complete)." },
{ t: "Weighted-average method", d: "Process costing that averages opening WIP and current costs over work done to date." },
{ t: "FIFO method", d: "Process costing that assigns current costs only to current-period work; opening WIP is completed first." },
{ t: "Variable costing", d: "Fixed manufacturing costs are period costs, excluded from inventory." },
{ t: "Absorption costing", d: "All manufacturing costs, incl. fixed, are inventoriable." },
{ t: "Production volume variance (PVV)", d: "(Actual − normal production) × fixed cost per unit; favourable when production exceeds normal." },
{ t: "Theoretical / practical capacity", d: "Supply-side denominator levels: maximum vs realistic maximum output." },
{ t: "Normal / master-budget capacity utilization", d: "Demand-side denominator levels: average over several years vs planned for the period." },
{ t: "Contribution margin", d: "Revenue minus all variable costs (per unit: p − v)." },
{ t: "Break-even point", d: "Output where total revenue equals total cost; operating profit is zero." },
{ t: "Margin of safety", d: "Budgeted revenue minus break-even revenue." },
{ t: "Operating leverage", d: "Effect of the fixed-cost share in the cost structure on profit sensitivity to volume." },
{ t: "Relevant costs", d: "Expected future costs that differ among alternatives." },
{ t: "Sunk costs", d: "Past costs that cannot be changed by any decision; always irrelevant." },
{ t: "Opportunity cost", d: "Contribution forgone by not using a limited resource in its next-best alternative use." },
{ t: "Target price", d: "Estimated price customers are willing to pay." },
{ t: "Target cost", d: "Target price minus target operating profit per unit." },
{ t: "Value engineering", d: "Systematic evaluation of all value-chain functions to reduce costs while satisfying customer needs." },
{ t: "Locked-in costs", d: "Costs not yet incurred that will be incurred based on decisions already made (designed-in)." },
{ t: "Cost-plus pricing", d: "Price = cost base + markup." },
{ t: "Life-cycle costing", d: "Tracking all costs of a product from R&D to final customer support." },
{ t: "Customer profitability analysis", d: "Reporting and analysing revenues and costs per customer." },
{ t: "Master budget", d: "The set of operating and financial budgets for a period." },
{ t: "Rolling budget", d: "Budget always available for a fixed future period by adding a period as one ends." },
{ t: "Static budget", d: "Budget based on the planned output level." },
{ t: "Flexible budget", d: "Budget recalculated for the actual output level." },
{ t: "Sales-volume variance", d: "Flexible budget minus static budget." },
{ t: "Price variance", d: "(Actual price − budgeted price) × actual quantity of input." },
{ t: "Efficiency variance", d: "(Actual quantity − budgeted quantity allowed for actual output) × budgeted price." },
{ t: "Yield variance", d: "Part of the efficiency variance caused by using more/less total input, at budgeted mix and prices." },
{ t: "Mix variance", d: "Part of the efficiency variance caused by a different input mix, at budgeted prices." },
{ t: "Sales-mix variance", d: "Effect of a different product mix on sales volume results." },
{ t: "Sales-quantity variance", d: "Effect of a different total sales quantity at the budgeted mix." },
{ t: "Market-size / market-share variance", d: "Splits the sales-quantity variance into market growth and share effects." },
{ t: "Management control system", d: "Means of gathering and using information to coordinate planning and control decisions and guide behaviour." },
{ t: "Goal congruence", d: "Individuals working in their own interest take actions that further the organization's goals." },
{ t: "Decentralization", d: "Freedom for lower-level managers to make decisions, with responsibility for them." },
{ t: "Cost / revenue / profit / investment centre", d: "Responsibility centres accountable for costs / revenues / both / also investments." },
{ t: "Controllability", d: "The degree of influence a manager has over costs, revenues or items." },
{ t: "Transfer price", d: "Price one subunit charges another subunit of the same organization." },
{ t: "Minimum transfer price", d: "Incremental cost per unit up to transfer + opportunity cost per unit for the supplying division." },
{ t: "Dual pricing", d: "Using two different transfer prices for the selling and buying divisions." },
{ t: "Return on investment (ROI)", d: "Income ÷ investment; DuPont: ROS × asset turnover." },
{ t: "Residual income (RI)", d: "Income minus required rate of return × investment." },
{ t: "Economic value added (EVA)", d: "After-tax operating profit − WACC × (total assets − current liabilities)." },
{ t: "Return on sales (ROS)", d: "Operating profit ÷ revenue." },
{ t: "Prevention costs", d: "Costs incurred to prevent products that don't meet specifications." },
{ t: "Appraisal costs", d: "Costs incurred to detect units that don't meet specifications (inspection, testing)." },
{ t: "Internal / external failure costs", d: "Costs of nonconforming products detected before / after delivery to customers." },
{ t: "Throughput contribution", d: "Revenue minus direct materials costs (theory of constraints)." },
{ t: "Just-in-time (JIT)", d: "Materials and production arrive exactly when needed; demand pulls production." },
{ t: "Backflush costing", d: "Costing that omits sequential tracking and assigns costs at the end of the process." },
{ t: "Economic order quantity (EOQ)", d: "Order quantity minimizing ordering + carrying costs: √(2DP/C)." },
{ t: "Reorder point", d: "Units sold per period × purchase-order lead time." },
{ t: "Balanced scorecard", d: "Strategy translated into financial, customer, internal process and learning & growth measures." }
]);
