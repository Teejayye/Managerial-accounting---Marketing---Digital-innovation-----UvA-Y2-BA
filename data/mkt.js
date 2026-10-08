/* Marketing in a Global Business World: course data, summary and glossary */
PORTAL.addCourse({
  id: "mkt",
  title: "Marketing in a Global Business World",
  short: "Marketing",
  code: "Amsterdam Business School · M. Vock · 2026",
  color: "#b4235a",
  examDate: "",
  examNote: "Check Canvas for the 2026 date (the ‘Monday 21 October’ in your notes is from an older year)",
  tagline: "Customer value, STP, branding, the 4Ps, communications and responsible marketing.",
  facts: [
    ["Format", "Digital exam in ANS: <b>60 multiple-choice questions</b>, 4 options, closed book. Questions are randomized in blocks per chapter; you can move back and forth until you submit."],
    ["Grading", "Exam = 50% of the course grade, with <b>guessing correction</b> (the exam committee formula). Team papers and the presentation (10%) make up the rest."],
    ["Material", "The <b>entire book</b> (Armstrong, Kotler & Balasubramanian, <i>Marketing: An Introduction</i>, 16th global ed.), also parts not covered in lectures; lecture slides; the guest lectures (incl. B Lab on B Corps); and three mandatory readings: Stahel (2016), Stoeckl & Luedicke (2015), White, Habib & Hardisty (2019, first 10 pages only)."],
    ["Not examined", "The lab-grown meat case questions and answers. You should still know what lab-grown meat is."],
    ["Lecturer's tips", "Think of the answer before reading the options. If two look right, pick the <i>best</i> one. Trust your gut: many MC mistakes come from changing a correct answer. Only rely on course material."]
  ],
  plan: [
    "Read the <b>Summary</b>: chapters first, then the three readings (they are guaranteed questions).",
    "Practise per topic. The Canvas practice quizzes are built from past exams, just like the two <b>old exams</b> here.",
    "Sit both old exams under time pressure (2 min per question). Questions marked <i>older book</i> use Kotler & Keller terms. Learn the idea, but don't panic about the label.",
    "Last two days: glossary + ‘My mistakes’."
  ],
  warning: "<b>Heads-up about the old exams:</b> the 2012 and 2013 exams (and the 2019–20 practice set) were written for the older Kotler & Keller <i>Marketing Management</i> book. Most concepts carry over, but a few labels (VALS types, the brand dynamics pyramid, defense strategies, the seven website design elements) are not in your current book. These are tagged in the review. Your 2026 exam uses the new book, so use the old exams for practice, not as a literal preview.",
  sources: "Your chapter notes (ch. 1–9 and the 4P lectures) · Lecture notes weeks 1–4 and 7 (exam info) · Branding lecture · SHIFT lecture slides · B Lab slide · Practice questions 2019–20 · Exams 21 Dec 2012 and 16 Dec 2013. Stoeckl & Luedicke, White et al. and Stahel are summarized from the slides and the articles' main frameworks.",
  topics: [
    { id: "basics", title: "Ch. 1–2 · Marketing, customer value & strategic planning", short: "Ch 1–2 Basics & strategy", sub: "Needs/wants/demands · marketing concepts · CRM · BCG · Ansoff" },
    { id: "env", title: "Ch. 3–4 · Marketing environment & customer insights", short: "Ch 3–4 Environment & research", sub: "Micro/macro · MIS · research process · sampling" },
    { id: "buyer", title: "Ch. 5 · Consumer and business buyer behaviour", short: "Ch 5 Buyer behaviour", sub: "Black box · Maslow · perception · adoption · buying centre" },
    { id: "stp", title: "Ch. 6 · Segmentation, targeting, differentiation & positioning", short: "Ch 6 STP", sub: "Bases · targeting levels · USP · value propositions" },
    { id: "brand", title: "Ch. 7–8 · Products, services, brands & new products", short: "Ch 7–8 Product & brand", sub: "Levels · classifications · services · brand equity · NPD · PLC" },
    { id: "price", title: "Pricing", short: "Price", sub: "Value/cost/competition-based · objectives · strategies" },
    { id: "place", title: "Channels, retailing & wholesaling", short: "Place", sub: "Channel levels · VMS · coverage · push/pull · retailers" },
    { id: "promo", title: "Communications: IMC, advertising, PR, selling, promotion, digital", short: "Promotion", sub: "Promotion mix · budgets · media · sales process · social" },
    { id: "resp", title: "Responsible marketing & the mandatory readings", short: "Readings & ethics", sub: "Stoeckl & Luedicke · SHIFT · Stahel · B Lab" },
    { id: "old", title: "Older-book concepts that appear in the past exams", short: "Old-exam concepts", sub: "Kotler & Keller terms" }
  ]
});

PORTAL.addSummary("mkt", [
/* ======================= CH 1–2 ======================= */
{ id: "m-what", topic: "basics", title: "What marketing is and the five-step marketing process", src: "Book ch. 1 · Lecture 1", tags: "definition needs wants demands market offerings marketing myopia exchange market",
html: `<p><b>Marketing</b> is the process by which companies engage customers, build strong customer relationships and create customer value in order to <b>capture value from customers in return</b>. It is not “telling and selling” but satisfying customer needs: “the aim of marketing is to make selling unnecessary” (Drucker).</p>
<div class="key"><b>The five steps.</b> (1) Understand the marketplace and customer needs → (2) design a customer value-driven strategy → (3) construct an integrated marketing programme (the 4Ps) → (4) engage customers and build profitable relationships → (5) capture value from customers (profits, customer equity). Steps 1–4 create value <i>for</i> customers; step 5 captures value <i>from</i> them.</div>
<h3>Needs, wants, demands</h3>
<ul><li><b>Needs</b>: states of felt deprivation (physical, social, individual). Marketers do <i>not</i> create needs.</li>
<li><b>Wants</b>: the form needs take, shaped by culture and personality (hungry → wants a Big Mac).</li>
<li><b>Demands</b>: wants backed by buying power.</li></ul>
<p><b>Market offerings</b> = some combination of products, services, information or experiences. <b>Marketing myopia</b> = focusing on your product instead of the benefit or need it serves (a drill vs. the quarter-inch hole). <b>Exchange</b> = obtaining a desired object by offering something in return. A <b>market</b> = the set of actual and potential buyers.</p>
<h3>Customer value and satisfaction</h3>
<p><b>Customer-perceived value</b> = the customer's evaluation of the difference between all the benefits and all the costs of an offer relative to competing offers. <b>Satisfaction</b> = how well perceived performance matches expectations (below → dissatisfied; equal → satisfied; above → delighted). Don't set expectations too low (no buyers) or too high (disappointment).</p>
<p>The lecture adds the value equation: <b>total customer benefit</b> (product, service, personnel, image) minus <b>total customer cost</b> (monetary, time, energy, psychological).</p>`},

{ id: "m-concepts", topic: "basics", title: "The five marketing management orientations", src: "Book ch. 1", tags: "production concept product concept selling concept marketing concept societal marketing shared value",
html: `<div class="tablewrap"><table><tr><th>Concept</th><th>Core idea</th><th>Watch out</th></tr>
<tr><td><b>Production</b></td><td>Consumers favour products that are <b>available and highly affordable</b> → improve production and distribution efficiency.</td><td>Can lead to marketing myopia.</td></tr>
<tr><td><b>Product</b></td><td>Consumers favour products with the most <b>quality, performance and features</b> → continuous product improvement.</td><td>“Better mousetrap” myopia.</td></tr>
<tr><td><b>Selling</b></td><td>Consumers won't buy enough unless the firm does <b>large-scale selling and promotion</b>. Used for unsought goods (insurance, blood donation).</td><td>Focus on transactions, not relationships; “make and sell”.</td></tr>
<tr><td><b>Marketing</b></td><td>Know target customers' needs and wants and deliver satisfaction <b>better than competitors</b>. Customer-centred “sense and respond”: find the right products for your customers, not the right customers for your products.</td><td>Outside-in perspective.</td></tr>
<tr><td><b>Societal marketing</b></td><td>Also consider consumers' <b>long-run interests and society's well-being</b>. Linked to sustainable marketing and <b>shared value</b> (societal needs define markets).</td><td>Balances company, consumers' wants and society.</td></tr></table></div>
<div class="trap">Exam favourite: “consumers prefer products that are widely available and inexpensive” = <b>production concept</b>, not product concept.</div>`},

{ id: "m-crm", topic: "basics", title: "Customer relationships, engagement and capturing value", src: "Book ch. 1", tags: "CRM customer engagement marketing consumer-generated marketing partner relationship management customer lifetime value share of customer customer equity strangers butterflies true friends barnacles",
html: `<p><b>Customer relationship management (CRM)</b> = building and maintaining profitable customer relationships by delivering superior value and satisfaction. Relationship levels range from basic (many low-margin customers) to full partnerships (few high-margin customers). Tools: frequency marketing and loyalty programmes.</p>
<p><b>Customer-engagement marketing</b> makes the brand a meaningful part of consumers' conversations and lives: marketing by <b>attraction</b> rather than intrusion. <b>Consumer-generated marketing</b> = brand exchanges created by consumers themselves (invited or not). <b>Partner relationship management</b> = working with other departments and outside partners (supply chain) to bring more value to customers.</p>
<h3>Capturing value</h3>
<ul><li><b>Customer lifetime value</b>: the value of the entire stream of purchases a customer makes over a lifetime of patronage.</li>
<li><b>Share of customer</b>: the portion of a customer's purchasing in your categories that you get (grow it by cross-selling and up-selling).</li>
<li><b>Customer equity</b>: total combined customer lifetime values of all customers. A better measure of future performance than sales or market share.</li></ul>
<div class="tablewrap"><table><tr><th></th><th>Short-term customers</th><th>Long-term customers</th></tr>
<tr><td><b>High profit potential</b></td><td><b>Butterflies</b>: good fit, short-term. Enjoy them while they're here, then stop investing.</td><td><b>True friends</b>: good fit, loyal. Keep investing to delight them; turn them into true believers.</td></tr>
<tr><td><b>Low profit potential</b></td><td><b>Strangers</b>: little fit. Don't invest; make money on every transaction.</td><td><b>Barnacles</b>: loyal but poor fit. Sell more, raise fees or cut service; “fire” them if they can't be made profitable.</td></tr></table></div>
<p>The changing landscape: digital, mobile and social media marketing; the changing economy (value for money); not-for-profit marketing; globalization; sustainable marketing.</p>`},

{ id: "m-strategy", topic: "basics", title: "Strategic planning: mission, portfolio (BCG), growth (Ansoff)", src: "Book ch. 2", tags: "strategic planning mission statement SBU BCG growth-share matrix stars cash cows question marks dogs product market expansion grid market penetration market development product development diversification downsizing",
html: `<p><b>Strategic planning</b> = developing and maintaining a strategic fit between the organization's goals and capabilities and its changing market opportunities. Steps: define the mission → set objectives and goals → design the business portfolio → plan marketing and other functional strategies.</p>
<p>A good <b>mission statement</b> is <b>market-oriented</b> (defined by customer needs, not products: “we help people…”), meaningful, specific yet motivating, and emphasizes strengths. It acts as an “invisible hand”.</p>
<h3>BCG growth-share matrix</h3>
<div class="tablewrap"><table><tr><th></th><th>High relative market share</th><th>Low relative market share</th></tr>
<tr><td><b>High market growth</b></td><td><b>Stars</b>: need heavy investment; become cash cows.</td><td><b>Question marks</b>: need lots of cash; build or phase out.</td></tr>
<tr><td><b>Low market growth</b></td><td><b>Cash cows</b>: generate cash to finance others.</td><td><b>Dogs</b>: maintain themselves; little promise.</td></tr></table></div>
<p>Four strategies per SBU: <b>build, hold, harvest, divest</b>. Problems: hard to define SBUs and measure share/growth, focuses on current businesses, costly. Many firms now use decentralized, customized planning.</p>
<h3>Product/market expansion grid (Ansoff)</h3>
<div class="tablewrap"><table><tr><th></th><th>Existing products</th><th>New products</th></tr>
<tr><td><b>Existing markets</b></td><td><b>Market penetration</b>: sell more current products to current customers without changing the product.</td><td><b>Product development</b>: new or modified products for current markets.</td></tr>
<tr><td><b>New markets</b></td><td><b>Market development</b>: new segments or geographies for current products.</td><td><b>Diversification</b>: businesses outside current products and markets.</td></tr></table></div>
<p>Firms must also <b>downsize</b> (grew too fast, entered areas without experience, environment changed).</p>`},

{ id: "m-plan", topic: "basics", title: "Value chain, marketing strategy and managing the marketing effort", src: "Book ch. 2", tags: "value chain value delivery network marketing mix 4Ps 4Cs SWOT marketing plan implementation organization control marketing ROI dashboards",
html: `<p>Marketing provides a guiding philosophy, inputs to strategic planners and strategies for business units. It partners through the <b>value chain</b> (internal departments; only as strong as its weakest link) and the <b>value delivery network</b> (suppliers, distributors, customers).</p>
<p><b>Marketing strategy</b> = segmentation, targeting, differentiation and positioning. The <b>marketing mix</b> = the 4Ps: product, price, place, promotion. Seen from the customer: the <b>4Cs</b> — customer solution, customer cost, convenience, communication.</p>
<h3>Managing the marketing effort: analysis, planning, implementation, organization, control</h3>
<ul><li><b>SWOT</b>: strengths/weaknesses are internal; opportunities/threats are external.</li>
<li><b>Marketing plan</b> contents: executive summary, current situation, SWOT, objectives, strategy, action programmes, budgets, controls.</li>
<li><b>Implementation</b> addresses who, where, when and how; strategy addresses what and why.</li>
<li><b>Organization</b>: functional (most common: specialists report to a marketing VP), geographic, product management, market/customer management, or combinations (matrix).</li>
<li><b>Control</b>: set goals → measure performance → evaluate causes → take <b>corrective action</b>. Operating control checks against the annual plan; strategic control checks whether basic strategies fit opportunities.</li></ul>
<div class="formula">Marketing ROI = (net return from marketing investment) ÷ (cost of the marketing investment)</div>
<p><b>Marketing dashboards</b> show sets of performance measures in one display. Customer-centred measures: acquisition, engagement, experience, retention, lifetime value, customer equity.</p>`},

/* ======================= CH 3–4 ======================= */
{ id: "m-env", topic: "env", title: "The marketing environment: micro and macro", src: "Book ch. 3", tags: "microenvironment macroenvironment suppliers intermediaries publics demographic economic natural technological political cultural core secondary values baby boomers generation X millennials generation Z",
html: `<p>The <b>microenvironment</b> = actors close to the company: the company itself, suppliers, <b>marketing intermediaries</b> (resellers, physical distribution firms, marketing services agencies, financial intermediaries), competitors, <b>publics</b> (financial, media, government, citizen-action, internal, general, local) and five customer markets (consumer, business, reseller, government, international).</p>
<p>The <b>macroenvironment</b> = larger societal forces: <b>demographic, economic, natural, technological, political-social, cultural</b>.</p>
<ul><li><b>Demographic</b>: generations: baby boomers (1946–64), Gen X (1965–76, sensible shoppers, experience over acquisition), Millennials/Gen Y (1977–2000, digital, frugal, seek authenticity), Gen Z (after 2000, digital natives). Changing families, migration, better-educated population, diversity.</li>
<li><b>Economic</b>: purchasing power, income distribution (tiered market), value marketing.</li>
<li><b>Natural</b>: shortages of raw materials, pollution, government intervention, environmental sustainability.</li>
<li><b>Technological</b>: new technologies create opportunities; old industries that fight them decline.</li>
<li><b>Political-social</b>: legislation protects companies from each other, consumers from unfair practices, and society's interests; ethics and cause-related marketing.</li>
<li><b>Cultural</b>: <b>core beliefs and values</b> are passed from parents to children and reinforced by institutions (schools, churches, governments): very persistent. <b>Secondary values</b> are more open to change. Shifts in people's views of themselves, others, organizations, society, nature and the universe.</li></ul>
<p>Responding: many firms react, but proactive firms try to change the environment.</p>`},

{ id: "m-info", topic: "env", title: "Marketing information: MIS, big data, intelligence", src: "Book ch. 4", tags: "customer insights MIS marketing information system internal databases competitive marketing intelligence big data CRM marketing analytics AI",
html: `<p><b>Customer insights</b> = fresh, evidence-based understandings of customers and markets that become the basis for creating value. An insight is more than a fact: it explains the need behind a pattern.</p>
<p><b>Big data</b> = huge, complex data sets. Problem: information overload. Value comes from turning data into insights.</p>
<p>A <b>marketing information system (MIS)</b> = people and procedures for <b>assessing information needs, developing needed information</b> and <b>helping decision makers use it</b>. It must balance what managers want with what is feasible and worth its cost.</p>
<div class="key">Three sources of information: <b>internal databases</b> (fast and cheap, but collected for other purposes and possibly outdated); <b>competitive marketing intelligence</b> (systematic monitoring of publicly available information about consumers, competitors and the environment, e.g. buying competitors' products, trade shows, social listening; must be ethical); and <b>marketing research</b>.</div>
<p>Analysis: <b>CRM</b> manages detailed information about individual customers and touchpoints to maximize loyalty. <b>Marketing analytics</b> extracts patterns from big data (descriptive, diagnostic, predictive). <b>AI</b> supports but does not replace judgment.</p>`},

{ id: "m-research", topic: "env", title: "Marketing research: process, data, methods and sampling", src: "Book ch. 4 · Lecture 2", tags: "marketing research exploratory descriptive causal secondary primary observation ethnographic survey experimental focus group laddering netnography neuromarketing sampling probability nonprobability convenience judgment quota stratified cluster questionnaire open-end closed-end",
html: `<p><b>Marketing research</b> = the systematic design, collection, analysis and reporting of data relevant to a specific marketing situation.</p>
<div class="key"><b>Process:</b> (1) define the problem and research objectives → (2) develop the research plan → (3) implement it (collect and analyse) → (4) interpret and report findings. Step 1 is often the hardest.</div>
<div class="tablewrap"><table><tr><th>Objective</th><th>Purpose</th></tr>
<tr><td><b>Exploratory</b></td><td>Gather preliminary information that helps define the problem and suggest hypotheses / ideas.</td></tr>
<tr><td><b>Descriptive</b></td><td>Describe things: market potential, demographics, attitudes.</td></tr>
<tr><td><b>Causal</b></td><td>Test cause-and-effect hypotheses (does a 10% price cut raise sales?).</td></tr></table></div>
<p><b>Secondary data</b> already exist (cheaper, faster; may be outdated, irrelevant, inaccurate). <b>Primary data</b> are collected for the specific purpose. Check secondary data for relevance, accuracy, currency and impartiality.</p>
<h3>Primary research approaches</h3>
<ul><li><b>Observational</b> (incl. <b>ethnographic</b>: observing people in their natural environment; uses anthropology tools). Good when people can't or won't explain behaviour, but doesn't reveal motives.</li>
<li><b>Survey</b>: most widely used; best for descriptive information. Risk: question wording bias.</li>
<li><b>Experimental</b>: best for causal information; control the other variables.</li></ul>
<p>Contact methods: mail, telephone, personal (individual and <b>focus groups</b>: 6–10 people with a trained moderator; rich exploratory insight but small samples, not generalizable, costly), online. The lecture also covers <b>laddering</b> (asking “why?” repeatedly to move from attributes to values), <b>netnography</b> (ethnography of online communities) and <b>neuromarketing</b> (brain/biometric measurement).</p>
<p>Questionnaires: <b>closed-end</b> questions (easy to tabulate) vs. <b>open-end</b> questions (answers in own words; reveal more about how people think).</p>
<h3>Sampling</h3>
<p>Decide the sampling unit (who), sample size (how many) and sampling procedure (how chosen).</p>
<div class="tablewrap"><table><tr><th>Probability</th><th>Nonprobability</th></tr>
<tr><td><b>Simple random</b>: everyone has a known, equal chance.<br><b>Stratified random</b>: split into mutually exclusive groups (e.g. age), random sample from each.<br><b>Cluster (area)</b>: split into groups (e.g. blocks), sample groups.</td>
<td><b>Convenience</b>: easiest to reach.<br><b>Judgment</b>: researcher picks those likely to give accurate information.<br><b>Quota</b>: fill a prescribed number in each category.</td></tr></table></div>
<p>International research: comparability, translation, missing secondary data. Ethics: privacy, informed consent, misuse of findings.</p>`},

/* ======================= CH 5 ======================= */
{ id: "m-consumer", topic: "buyer", title: "Consumer behaviour: the black box and influencing factors", src: "Book ch. 5 · Lecture 2", tags: "black box stimulus response cultural social personal psychological culture subculture social class reference groups opinion leaders influencer family roles status life cycle lifestyle personality self-concept motivation Maslow perception selective attention distortion retention subliminal learning beliefs attitudes",
html: `<p>The <b>stimulus–response model</b>: marketing and other stimuli enter the buyer's <b>black box</b> (characteristics + decision process) and produce responses (brand, purchase timing, amount, engagement).</p>
<div class="tablewrap"><table><tr><th>Factor</th><th>Contents</th></tr>
<tr><td><b>Cultural</b></td><td>Culture (most basic cause of wants), subculture (nationality, religion, race, region), social class.</td></tr>
<tr><td><b>Social</b></td><td><b>Reference groups</b>: membership groups, <b>aspirational</b> groups (want to belong), dissociative groups. <b>Opinion leaders</b> / influencers; word-of-mouth. Family. Roles and status.</td></tr>
<tr><td><b>Personal</b></td><td>Age and life-cycle stage (life events change buying), occupation, economic situation, <b>lifestyle</b> (activities, interests, opinions: AIO), personality and <b>self-concept</b> (we buy what fits who we are or want to be).</td></tr>
<tr><td><b>Psychological</b></td><td>Motivation, perception, learning, beliefs and attitudes.</td></tr></table></div>
<p><b>Motivation</b>: a motive is a need pressing enough to direct a person to seek satisfaction. <b>Maslow</b>: physiological → safety → social → esteem → self-actualization; lower needs first.</p>
<h3>Perception: three processes</h3>
<ul><li><b>Selective attention</b>: screening out most information we are exposed to.</li>
<li><b>Selective distortion</b>: interpreting information to support what we already believe.</li>
<li><b>Selective retention</b>: remembering information that supports our attitudes and beliefs.</li></ul>
<div class="trap"><b>Subliminal advertising</b>: the lecture and book: no good evidence that subliminal messages change behaviour.</div>
<p><b>Learning</b> = changes in behaviour from experience (drives, stimuli, cues, responses, reinforcement). <b>Attitudes</b> are hard to change: fit products into existing attitudes.</p>`},

{ id: "m-decision", topic: "buyer", title: "Buying decision behaviour, the decision process and adoption", src: "Book ch. 5", tags: "complex buying behaviour dissonance-reducing habitual variety-seeking need recognition information search evaluation purchase decision postpurchase cognitive dissonance adoption process diffusion innovators early adopters early majority late majority laggards relative advantage compatibility complexity divisibility communicability",
html: `<div class="tablewrap"><table><tr><th></th><th>High involvement</th><th>Low involvement</th></tr>
<tr><td><b>Significant differences between brands</b></td><td><b>Complex</b> buying behaviour</td><td><b>Variety-seeking</b> behaviour</td></tr>
<tr><td><b>Few differences</b></td><td><b>Dissonance-reducing</b> behaviour</td><td><b>Habitual</b> buying behaviour</td></tr></table></div>
<p><b>Buyer decision process</b>: need recognition → information search (personal, commercial, public, experiential sources) → evaluation of alternatives → purchase decision (attitudes of others, unexpected situational factors) → <b>postpurchase behaviour</b>. <b>Cognitive dissonance</b> = buyer discomfort caused by postpurchase conflict.</p>
<h3>New products: adoption</h3>
<p><b>Adoption process</b>: <b>awareness → interest → evaluation → trial → adoption</b>.</p>
<p>Adopter categories (Rogers): innovators (2.5%), early adopters (13.5%, opinion leaders), early majority (34%), late majority (34%, sceptical), laggards (16%).</p>
<p>Product characteristics that speed adoption: <b>relative advantage, compatibility, complexity</b> (less is faster), <b>divisibility</b> (can be tried on a limited basis), <b>communicability</b>.</p>`},

{ id: "m-b2b", topic: "buyer", title: "Business buyer behaviour", src: "Book ch. 5", tags: "business markets derived demand buying centre users influencers buyers deciders gatekeepers straight rebuy modified rebuy new task systems selling value analysis blanket contract",
html: `<p>Business markets differ: fewer but larger buyers, <b>derived demand</b> (comes from demand for consumer goods), inelastic and fluctuating demand, more professional purchasing, more people involved, closer relationships.</p>
<p><b>Buying situations</b>: <b>straight rebuy</b> (routine reorder), <b>modified rebuy</b> (change specifications, prices, terms or suppliers), <b>new task</b> (first-time purchase; most information needed). <b>Systems selling</b> (solutions selling) = buying a packaged solution from one seller.</p>
<p><b>Buying centre</b> roles: <b>users, influencers</b> (often technical people), <b>buyers</b> (formal authority to select suppliers and arrange terms), <b>deciders</b>, <b>gatekeepers</b> (control the flow of information).</p>
<p>Eight-stage business buying process: problem recognition → general need description → product specification (<b>value analysis</b>) → supplier search → proposal solicitation → supplier selection → order-routine specification (<b>blanket contracts</b>) → performance review.</p>`},

/* ======================= CH 6 ======================= */
{ id: "m-seg", topic: "stp", title: "Segmentation: bases and requirements", src: "Book ch. 6 · Lecture 2", tags: "segmentation geographic demographic psychographic behavioral occasion benefit user status usage rate loyalty status intermarket segmentation measurable accessible substantial differentiable actionable personas",
html: `<p>Four steps of a customer value-driven strategy: <b>segmentation → targeting</b> (select customers) and <b>differentiation → positioning</b> (decide on a value proposition).</p>
<div class="tablewrap"><table><tr><th>Base</th><th>Variables / examples</th></tr>
<tr><td><b>Geographic</b></td><td>Nations, regions, cities, neighbourhoods.</td></tr>
<tr><td><b>Demographic</b></td><td>Age & life-cycle stage, gender, income, occupation, education, religion, ethnicity, generation. Easiest to measure; watch out for stereotypes.</td></tr>
<tr><td><b>Psychographic</b></td><td>Lifestyle, personality, social class. Same demographics can mean very different lifestyles.</td></tr>
<tr><td><b>Behavioural</b></td><td><b>Occasions</b> (when they buy/use), <b>benefits sought</b>, <b>user status</b> (non-, ex-, potential, first-time, regular users), <b>usage rate</b> (light/medium/heavy), <b>loyalty status</b>.</td></tr></table></div>
<p>Business markets add operating characteristics, purchasing approaches, situational factors and personal characteristics. International markets: geographic location, economic, political-legal and cultural factors; <b>intermarket (cross-market) segmentation</b> = consumers with similar needs in different countries.</p>
<div class="key"><b>Requirements for useful segments:</b> <b>measurable, accessible, substantial, differentiable, actionable</b>. Differentiable: if men and women respond the same way to soft-drink marketing, they are not separate segments.</div>
<p>The lecture adds <b>personas</b>: detailed profiles of a fictional typical customer that make a segment concrete.</p>`},

{ id: "m-target", topic: "stp", title: "Targeting: evaluating segments and coverage strategies", src: "Book ch. 6 · Lecture 2", tags: "targeting segment size growth structural attractiveness Porter undifferentiated mass differentiated concentrated niche micromarketing local individual geofencing hyperlocal choosing targeting strategy socially responsible",
html: `<p>Evaluate segments on (1) <b>size and growth</b> (biggest isn't always best), (2) <b>structural attractiveness</b> (competitors, substitutes, buyer and supplier power: Porter's five forces) and (3) <b>company objectives and resources</b>.</p>
<div class="tablewrap"><table><tr><th>Strategy</th><th>What it means</th></tr>
<tr><td><b>Undifferentiated (mass)</b></td><td>Ignore segment differences; one offer for the whole market. Focus on what is common.</td></tr>
<tr><td><b>Differentiated (segmented)</b></td><td>Target several segments with separate offers. More sales and stronger position, but higher costs.</td></tr>
<tr><td><b>Concentrated (niche)</b></td><td>Go after a large share of one or a few segments/niches. Good with limited resources; higher risk.</td></tr>
<tr><td><b>Micromarketing</b></td><td><b>Local marketing</b> (cities, neighbourhoods, stores; geofencing / hyperlocal) and <b>individual marketing</b> (one-to-one, mass customization).</td></tr></table></div>
<p><b>Choosing</b>: limited resources → concentrated; uniform product → undifferentiated; new product → one version (undifferentiated or concentrated); mature stage → differentiated; uniform market → undifferentiated; if competitors segment, undifferentiated marketing can be suicidal.</p>
<p><b>Socially responsible targeting</b>: the issue is not who is targeted but <b>how and for what</b> (children, vulnerable groups, harmful products).</p>`},

{ id: "m-position", topic: "stp", title: "Differentiation and positioning", src: "Book ch. 6 · Lecture 3", tags: "product position perceptual positioning map competitive advantage product services channel people image differentiation USP important distinctive superior communicable preemptive affordable profitable value proposition more for more same for less positioning statement points of difference points of parity Volvo",
html: `<p><b>Product position</b> = how consumers define the product on important attributes, relative to competitors. <b>Perceptual positioning maps</b> show consumer perceptions on key dimensions.</p>
<p><b>Competitive advantage</b> = an advantage over competitors gained by offering greater value (lower prices or more benefits). Differentiation can be on <b>product, services, channel, people</b> (e.g. Singapore Airlines' flight attendants) or <b>image</b>.</p>
<p><b>How many differences?</b> Some say one: a <b>unique selling proposition (USP)</b>. Others say more than one when several firms claim the same attribute.</p>
<div class="key"><b>A difference is worth promoting if it is:</b> important, distinctive, superior, communicable, preemptive (hard to copy), affordable, profitable.</div>
<h3>Value propositions</h3>
<div class="tablewrap"><table><tr><th>Proposition</th><th>Example idea</th></tr>
<tr><td><b>More for more</b></td><td>Upscale product, higher price, prestige.</td></tr>
<tr><td><b>More for the same</b></td><td>Attack a more-for-more competitor at a lower price.</td></tr>
<tr><td><b>The same for less</b></td><td>Discounters, “good deals”.</td></tr>
<tr><td><b>Less for much less</b></td><td>No-frills (budget hotels/airlines).</td></tr>
<tr><td><b>More for less</b></td><td>The winning proposition, but hard to sustain.</td></tr></table></div>
<p>Losing propositions: more for the same/less for more/etc. that offer less value than competitors.</p>
<div class="formula">Positioning statement: To (target segment and need), our (brand) is (concept / frame of reference) that (point of difference).</div>
<p>Lecture extras (not in the book): <b>points-of-difference (PoD)</b> = associations unique to the brand, strongly held and positively evaluated; <b>points-of-parity (PoP)</b> = associations shared with competitors that you must match to be in the category. <b>Volvo</b>: core positioning = safety; value proposition = “the safest, most durable wagon in which your family can ride”. A positioning is hard to change: add to the core rather than replace it.</p>
<div class="trap">“We target safety-conscious upscale families” is a <i>target market</i>; “we sell the safest, most durable wagon” is the <i>value proposition</i>.</div>`},

/* ======================= CH 7–8 ======================= */
{ id: "m-product", topic: "brand", title: "Products: levels, classifications and decisions", src: "Book ch. 7 · Lecture 4", tags: "product service core customer value actual product augmented product customer value hierarchy core benefit basic expected potential convenience shopping specialty unsought industrial products materials parts capital items supplies services product quality TQM performance conformance packaging labeling product line length stretching filling product mix width length depth consistency",
html: `<p>A <b>product</b> = anything that can be offered to a market for attention, acquisition, use or consumption that might satisfy a want or need. A <b>service</b> is essentially intangible and doesn't result in ownership.</p>
<p><b>Three levels (book)</b>: <b>core customer value</b> (what is the buyer really buying?) → <b>actual product</b> (features, design, quality level, brand name, packaging) → <b>augmented product</b> (delivery, credit, support, warranty).</p>
<p><b>Customer-value hierarchy (lecture, five levels)</b>: core benefit (hotel: rest) → basic product (a bed) → expected product (clean room, TV, bathroom) → augmented product (spa, location: differentiation) → potential product (future augmentations).</p>
<h3>Consumer product classifications</h3>
<div class="tablewrap"><table><tr><th>Type</th><th>Buying behaviour</th><th>Examples</th></tr>
<tr><td><b>Convenience</b></td><td>Frequent, immediate, minimal comparison and effort; low price, widely available.</td><td>Detergent, candy, fast food</td></tr>
<tr><td><b>Shopping</b></td><td>Less frequent; compare on suitability, quality, price, style.</td><td>Furniture, clothing, appliances, hotels</td></tr>
<tr><td><b>Specialty</b></td><td>Unique characteristics or brand identification; special purchase effort; little comparison.</td><td>Specific car brands, designer clothes, medical specialists</td></tr>
<tr><td><b>Unsought</b></td><td>Consumer doesn't know about it or doesn't normally think of buying; needs much promotion and selling.</td><td>Life insurance, funeral services, smoke detectors, blood donations</td></tr></table></div>
<p>Industrial products: <b>materials and parts</b>, <b>capital items</b> (installations, accessory equipment), <b>supplies and services</b>. Also marketed: organizations, persons, places and ideas (<b>social marketing</b> = using marketing to encourage behaviour that improves individual and societal well-being).</p>
<h3>Individual product decisions</h3>
<p>Attributes: <b>quality</b> (level = performance quality; consistency = conformance quality; TQM), features, style and design. Branding, packaging, labelling and logos, product support services.</p>
<h3>Product line and mix</h3>
<p><b>Product line</b> = closely related products. <b>Line length</b> = number of items. <b>Line filling</b> = adding items within the present range (risk: cannibalization, confusion). <b>Line stretching</b> = beyond the current range: downward, upward or both ways.</p>
<p><b>Product mix (portfolio)</b> = all lines and items a seller offers, with four dimensions: <b>width</b> (number of lines), <b>length</b> (total items), <b>depth</b> (versions of each product), <b>consistency</b> (how closely related the lines are).</p>`},

{ id: "m-services", topic: "brand", title: "Services marketing", src: "Book ch. 7 · Lecture 4", tags: "intangibility inseparability variability perishability service profit chain internal marketing interactive marketing service differentiation service quality service recovery productivity search experience credence qualities differential pricing reservation systems part-time employees",
html: `<div class="key"><b>Four characteristics</b>: <b>intangibility</b> (can't be seen, tasted, felt before purchase → look for signals of quality), <b>inseparability</b> (produced and consumed at the same time; provider is part of it), <b>variability</b> (quality depends on who, when, where, how), <b>perishability</b> (can't be stored; a problem when demand fluctuates).</div>
<p><b>Evaluation continuum</b>: goods are high in <b>search qualities</b> (can be evaluated before purchase), services high in <b>experience qualities</b> (evaluated after purchase/consumption) and some in <b>credence qualities</b> (hard to evaluate even after consumption: surgery, car repair, legal advice).</p>
<p><b>Service-profit chain</b>: internal service quality → satisfied, productive employees → greater service value → satisfied, loyal customers → healthy profits and growth. Service marketing needs <b>internal marketing</b> (train and motivate employees) and <b>interactive marketing</b> (quality depends on buyer–seller interaction).</p>
<p>Managing: differentiation (offer, delivery, image), quality (customer retention is the best measure; good <b>service recovery</b> can create more loyalty than if nothing had gone wrong), productivity (don't take the service out of service).</p>
<h3>Matching supply and demand (lecture)</h3>
<p><b>Demand side</b>: differential pricing (cheaper matinees shift demand to off-peak), cultivating non-peak demand, complementary services, reservation systems. <b>Supply side</b>: part-time employees, peak-time efficiency routines, increased consumer participation, shared services, facilities for future expansion.</p>`},

{ id: "m-brand", topic: "brand", title: "Branding: brand equity, BAV and the brand pyramids", src: "Book ch. 7 · Lecture 3", tags: "brand equity brand value BrandAsset Valuator differentiation relevance esteem knowledge brand strength brand stature CBBE customer-based brand equity resonance pyramid salience performance imagery judgments feelings Interbrand brand value chain brand positioning attributes benefits beliefs values",
html: `<p>Brands exist in consumers' heads. <b>Brand equity</b> = the differential effect that knowing the brand name has on customer response to the product or its marketing (positive or negative). <b>Brand value</b> = the total financial value of a brand (e.g. the Interbrand ranking).</p>
<h3>BrandAsset Valuator (Young & Rubicam)</h3>
<p>Four dimensions: <b>differentiation</b> (what makes it stand out), <b>relevance</b> (does it meet my needs), <b>knowledge</b> (how much consumers know), <b>esteem</b> (how highly it's regarded).</p>
<div class="formula">Brand strength = differentiation + relevance   (future growth value, a leading indicator)
Brand stature  = esteem + knowledge          (a ‘report card’ on past performance)</div>
<h3>Customer-based brand equity (Keller's brand resonance pyramid)</h3>
<p>Bottom to top: <b>salience</b> (identity: who are you?) → <b>performance</b> and <b>imagery</b> (meaning) → <b>judgments</b> and <b>feelings</b> (response) → <b>resonance</b> (relationship: intense, active loyalty). The <b>brand value chain</b> links marketing programme investment → customer mindset → market performance → shareholder value.</p>
<h3>Brand strategy decisions</h3>
<p><b>Positioning</b> at three levels: attributes (weakest) → benefits → <b>beliefs and values</b> (strongest, emotional). The lecture also discusses brand roles for consumers (identify source, reduce risk and search costs, signal quality, symbolic meaning) and for firms (legal protection, loyalty, competitive advantage).</p>`},

{ id: "m-brand2", topic: "brand", title: "Brand names, sponsorship and brand development", src: "Book ch. 7 · Lecture 3", tags: "brand name selection national brand store brand private label licensing co-branding line extension brand extension multibrands new brands cannibalization dilution ALDI",
html: `<p><b>Good brand names</b>: suggest benefits and qualities, easy to pronounce/recognize/remember, distinctive, <b>extendable</b>, translate well, can be registered and legally protected. Names that become the category (Kleenex) risk losing legal protection.</p>
<h3>Brand sponsorship</h3>
<ul><li><b>National (manufacturer's) brand</b>.</li>
<li><b>Store (private) brand</b>: created and owned by a reseller. Lecture: private labels are about 44% of FMCG sales in some European markets; ALDI is around 90% private label. Retailers like them because margins are higher, R&D and advertising costs lower, and they differentiate the store. Manufacturers respond with innovation and pull marketing.</li>
<li><b>Licensing</b>: use names or symbols created by others for a fee (Disney characters).</li>
<li><b>Co-branding</b>: two established brands of different companies on one product. Broader appeal but complex contracts and shared risk.</li></ul>
<h3>Brand development</h3>
<div class="tablewrap"><table><tr><th></th><th>Existing product category</th><th>New product category</th></tr>
<tr><td><b>Existing brand name</b></td><td><b>Line extension</b>: new forms, colours, sizes, flavours (Diet Coke). Low-cost, low-risk; risk of overextension and confusion.</td><td><b>Brand extension</b>: existing name into a new category. Instant recognition; risk of diluting the main brand.</td></tr>
<tr><td><b>New brand name</b></td><td><b>Multibrands</b>: several brands in one category (more shelf space, different segments; each may get only a small share).</td><td><b>New brands</b>: when existing names are weak or inappropriate.</td></tr></table></div>
<p><b>Managing brands</b>: brands are built by customer experiences and touchpoints, not just advertising. Everyone in the company must “live the brand”; audit brands periodically.</p>`},

{ id: "m-npd", topic: "brand", title: "New product development and the product life cycle", src: "Book ch. 8 · Lecture week 2", tags: "new product development idea generation crowdsourcing screening R-W-W real win worth concept development testing marketing strategy business analysis product development test marketing commercialization customer-centered team-based systematic product life cycle introduction growth maturity decline style fashion fad modifying market product marketing mix harvest drop",
html: `<p>Firms get new products through <b>acquisition</b> or their own <b>new product development</b>. Most new products fail (the lecture cites about 95% for consumer goods).</p>
<div class="key"><b>Eight NPD steps</b>: (1) <b>idea generation</b> (internal, customers, competitors, distributors, suppliers, <b>crowdsourcing</b>) → (2) <b>idea screening</b> (first idea-<i>reducing</i> stage; <b>R-W-W</b>: Is it real? Can we win? Is it worth doing?) → (3) <b>concept development and testing</b> → (4) <b>marketing strategy development</b> (target market, value proposition, goals; price, distribution, budget; long-run plans) → (5) <b>business analysis</b> (sales, costs, profit projections) → (6) <b>product development</b> → (7) <b>test marketing</b> (or controlled / simulated test markets) → (8) <b>commercialization</b> (when and where to launch).</div>
<p>Product idea vs. <b>product concept</b> (a detailed version in meaningful consumer terms) vs. <b>product image</b> (how consumers perceive an actual or potential product). Manage NPD in a <b>customer-centred, team-based</b> (cross-functional, overlapping steps) and <b>systematic</b> way. Most new-product activity goes into <b>improving existing products</b>.</p>
<h3>Product life cycle</h3>
<div class="tablewrap"><table><tr><th>Stage</th><th>Sales & profits</th><th>Typical strategy</th></tr>
<tr><td>Product development</td><td>No sales; investment costs</td><td>—</td></tr>
<tr><td><b>Introduction</b></td><td>Slow growth; profits negative/low</td><td>Basic version; build awareness and distribution; pioneer's launch strategy must fit positioning</td></tr>
<tr><td><b>Growth</b></td><td>Rapid acceptance; profits rise</td><td>Improve product, new segments and channels; trade-off between market share and current profit</td></tr>
<tr><td><b>Maturity</b></td><td>Slowdown because most potential buyers have adopted; longest stage</td><td>Modify the <b>market</b> (new users/uses), the <b>product</b>, or the <b>marketing mix</b></td></tr>
<tr><td><b>Decline</b></td><td>Sales fall</td><td>Maintain, <b>harvest</b> (cut costs, hope sales hold) or <b>drop</b></td></tr></table></div>
<p><b>Style</b> = basic, distinctive mode of expression (can last generations). <b>Fashion</b> = currently accepted style. <b>Fad</b> = temporary period of unusually high sales driven by enthusiasm. Product <i>classes</i> have the longest life cycles; product <i>forms</i> follow the standard shape.</p>`},

/* ======================= PRICE ======================= */
{ id: "m-price", topic: "price", title: "Pricing: value-, cost- and competition-based", src: "Pricing chapter · Lecture 4", tags: "price customer value-based pricing good-value pricing value-added pricing EDLP high-low cost-based pricing fixed variable costs cost-plus markup break-even target return competition-based going-rate",
html: `<p><b>Price</b> = the amount charged, or the sum of the values customers exchange for the benefits of a product. It is the <b>only element of the mix that produces revenue</b>; all others are costs.</p>
<div class="key">Customer perceptions of value set the <b>price ceiling</b>; product costs set the <b>price floor</b>. Competitors' strategies and other internal and external factors determine where to set price between them.</div>
<h3>Customer value-based pricing</h3>
<p>Starts with customer needs and value perceptions, then sets a target price and designs the product to deliver that value at that price (the reverse of cost-based pricing).</p>
<ul><li><b>Good-value pricing</b>: the right combination of quality and service at a fair price; includes <b>everyday low pricing (EDLP)</b>: constant low price, few promotions (vs. <b>high-low pricing</b>: higher everyday prices with frequent promotions).</li>
<li><b>Value-added pricing</b>: add features and services to differentiate and support higher prices.</li></ul>
<h3>Cost-based pricing</h3>
<p>Costs: <b>fixed</b> (don't vary with output), <b>variable</b>, <b>total</b>. <b>Average cost</b> = cost per unit at a given level of production. <b>Cost-plus (markup) pricing</b>: add a standard markup. <b>Break-even / target return pricing</b>.</p>
<div class="formula">Break-even volume = fixed costs ÷ (price − unit variable cost)
Markup price = unit cost ÷ (1 − desired return on sales)</div>
<h3>Competition-based pricing</h3>
<p>Based on competitors' strategies, costs, prices and offers. <b>Going-rate pricing</b>: follow the leader. The aim is to price according to relative value, not just match.</p>
<h3>Lecture: setting the price in six steps</h3>
<p>(1) Select the <b>objective</b>: survival (cover variable and some fixed costs; short-term, for overcapacity, intense competition, changing wants), maximize current profit, maximize market share (penetration), maximize market skimming, product-quality leadership. (2) Determine demand (price sensitivity is lower for distinctive products, low awareness of substitutes, high price seen as justified…). (3) Estimate costs. (4) Analyse competitors. (5) Select a pricing method: markup, target-return, perceived-value, value (good-value), going-rate. (6) Select the final price (pricing policies, other Ps, channel margins: in the $100 Nike shoe example about $50 goes to the retailer).</p>
<p><b>Demand</b>: <b>inelastic</b> demand barely changes with a small price change; elastic demand changes a lot.</p>`},

{ id: "m-price2", topic: "price", title: "Pricing strategies: new products, product mix, adjustments", src: "Pricing chapter · Lecture 4", tags: "market skimming market penetration product line pricing optional captive by-product bundle discount allowance segmented psychological reference prices promotional geographical dynamic personalized price discrimination international price changes",
html: `<h3>New-product pricing</h3>
<p><b>Market-skimming</b>: high initial price to skim revenue layer by layer (needs quality and image to support it, costs of small volumes not too high, competitors can't enter easily). <b>Market-penetration</b>: low initial price to win a large share fast (needs price-sensitive market, falling costs with volume, keeps competitors out).</p>
<h3>Product mix pricing</h3>
<p><b>Product line pricing</b> (price steps), <b>optional-product</b> (accessories), <b>captive-product</b> (razor blades, printer ink), <b>by-product</b> (sell what would be waste), <b>product bundle</b>.</p>
<h3>Price adjustments</h3>
<ul><li><b>Discounts</b> (cash, quantity, functional/trade, seasonal) and <b>allowances</b> (trade-in allowances; promotional allowances = extra payment or price reduction to reward dealers for participating in advertising and sales-support programmes).</li>
<li><b>Segmented pricing</b>: different prices that don't reflect cost differences (customer, product-form, location, time). Lecture: <b>price discrimination</b> 1st degree (individual willingness to pay), 2nd (purchase volume), 3rd degree (classes of buyers).</li>
<li><b>Psychological pricing</b> (price signals quality; <b>reference prices</b>; €2.99). Lecture: anchoring with a high “market price” next to the store price; a middle option chosen because a very expensive option is shown.</li>
<li><b>Promotional pricing</b>, <b>geographical pricing</b>, <b>international pricing</b>.</li>
<li><b>Dynamic pricing</b>: adjusting prices continually to individual customers and situations (airlines, hotels). <b>Personalized pricing</b>: based on an individual shopper's behaviour (search history).</li></ul>
<p>Auctions: an <b>English auction</b> (ascending bids); a <b>Dutch auction</b> (descending: auctioneer starts high and lowers the price until someone bids); sealed-bid.</p>`},

/* ======================= PLACE ======================= */
{ id: "m-channels", topic: "place", title: "Marketing channels: levels, systems and design", src: "Channels chapter · Lecture 4", tags: "marketing channel intermediaries channel levels zero-level direct one-level indirect channel conflict horizontal vertical VMS corporate contractual franchise administered horizontal marketing system multichannel omnichannel disintermediation intensive selective exclusive distribution push pull",
html: `<p>A <b>marketing (distribution) channel</b> = a set of interdependent organizations that help make a product available. Intermediaries add value through contacts, experience, specialization and scale; they reduce the number of transactions.</p>
<div class="tablewrap"><table><tr><th>Level</th><th>Structure</th></tr>
<tr><td><b>Zero-level (direct marketing channel)</b></td><td>Manufacturer → consumer (own web shop, own stores, door-to-door). Full control, fast, prices stay consistent.</td></tr>
<tr><td><b>One-level</b></td><td>Manufacturer → retailer → consumer.</td></tr>
<tr><td><b>Two-level</b></td><td>Manufacturer → wholesaler → retailer → consumer.</td></tr></table></div>
<p><b>Channel conflict</b>: horizontal (same level) or vertical (different levels). A <b>conventional distribution channel</b> = independent firms each maximizing their own profit. A <b>vertical marketing system (VMS)</b> = producer, wholesaler(s) and retailer(s) acting as a <b>unified system</b>:</p>
<ul><li><b>Corporate VMS</b>: common ownership.</li><li><b>Contractual VMS</b>: contracts (wholesaler-sponsored voluntary chains, retailer cooperatives, <b>franchise organizations</b>: the franchisor licenses its brand and collects <b>royalties</b> from franchisees).</li><li><b>Administered VMS</b>: leadership through size and power of one member.</li></ul>
<p><b>Horizontal marketing system</b> = two or more companies at one level join forces. <b>Multichannel</b> distribution = several channels; <b>omnichannel</b> = all channels connected for a seamless experience. <b>Disintermediation</b> = cutting out intermediaries or new types displacing traditional ones.</p>
<h3>Number of intermediaries</h3>
<p><b>Intensive</b> (as many outlets as possible: convenience goods), <b>selective</b> (more than one but fewer than all), <b>exclusive</b> (very limited number of dealers with exclusive rights: luxury cars; enhances brand image, allows higher markups). Lecture: more retailers → more price competition between them, price wars, eroded brand equity.</p>
<h3>Push vs. pull</h3>
<p><b>Push</b>: promote to channel members (sales force, trade promotion), who push to consumers. Fits low brand loyalty, brand choice made in the store, impulse items, low involvement. <b>Pull</b>: spend on advertising and consumer promotion so consumers ask for the product. Fits high brand loyalty, high involvement, perceived brand differences, brand chosen before going to the store.</p>
<p>Logistics: warehousing, inventory (just-in-time), transportation, information; integrated logistics management.</p>`},

{ id: "m-retail", topic: "place", title: "Retailing and wholesaling", src: "Retailing & wholesaling chapter · Lecture 4", tags: "retailing wholesaling self-service limited-service full-service specialty department supermarket convenience superstore category killer discount off-price factory outlet warehouse club corporate chain voluntary chain retailer cooperative franchise merchant wholesalers brokers agents shopper marketing",
html: `<p><b>Retailing</b> = all activities in selling directly to final consumers for personal, nonbusiness use. <b>Wholesaling</b> = all activities in selling goods and services to those buying <b>for resale or business use</b>.</p>
<div class="tablewrap"><table><tr><th>Classification</th><th>Types</th></tr>
<tr><td><b>Amount of service</b></td><td><b>Self-service</b> (lowest cost), <b>limited-service</b>, <b>full-service</b> (high-end; highest operating costs).</td></tr>
<tr><td><b>Product line</b></td><td>Specialty store, department store, supermarket, convenience store, superstore, category killer, hypermarket, service retailer.</td></tr>
<tr><td><b>Relative prices</b></td><td>Discount stores; off-price retailers (independents, factory outlets, warehouse clubs).</td></tr>
<tr><td><b>Organization</b></td><td>Corporate chains, voluntary chains, retailer cooperatives, franchise organizations.</td></tr></table></div>
<p><b>Shopper marketing</b> uses promotion and merchandising to turn shoppers into buyers at the point of sale. Omni-channel retailing integrates stores and online.</p>
<h3>Wholesalers</h3>
<ul><li><b>Merchant wholesalers</b>: independently owned businesses that <b>take title</b> to the goods (full-service or limited-service). The largest group.</li>
<li><b>Brokers and agents</b>: do <b>not</b> take title; bring buyers and sellers together for a commission.</li>
<li>Manufacturers' and retailers' sales branches and offices.</li></ul>`},

/* ======================= PROMOTION ======================= */
{ id: "m-imc", topic: "promo", title: "Integrated marketing communications and the promotion mix", src: "Communications chapter", tags: "promotion mix advertising sales promotion personal selling public relations direct digital marketing IMC communication process sender encoding message media decoding receiver response feedback noise buyer-readiness awareness knowledge liking preference conviction purchase informational emotional moral appeals budget affordable percentage-of-sales competitive-parity objective-and-task push pull",
html: `<p>The <b>promotion mix</b>: <b>advertising</b> (paid, non-personal), <b>sales promotion</b> (short-term incentives), <b>personal selling</b>, <b>public relations</b> (building good relations with publics, publicity, handling unfavourable events) and <b>direct and digital marketing</b>.</p>
<p><b>Integrated marketing communications (IMC)</b>: carefully integrating all channels into a clear, consistent and compelling message. Driven by fragmented media and more targeted marketing. <b>Content marketing</b> uses paid, owned, earned and shared media.</p>
<h3>Communication process</h3>
<p>Sender → <b>encoding</b> → message → media → <b>decoding</b> → receiver → response → feedback, with <b>noise</b> (unplanned static or distortion; competing messages) throughout.</p>
<h3>Developing communications</h3>
<ol><li>Identify the target audience.</li>
<li>Determine objectives: move buyers through the <b>buyer-readiness stages</b>: <b>awareness → knowledge → liking → preference → conviction → purchase</b>.</li>
<li>Design the message (AIDA: attention, interest, desire, action). Appeals: <b>rational</b> (informational: product benefits), <b>emotional</b> (positive or negative), <b>moral</b>.</li>
<li>Choose media: personal (incl. word-of-mouth, <b>buzz marketing</b>, opinion leaders, influencers) or non-personal (major media, atmospheres, events).</li>
<li>Select the message source (credible, likeable).</li>
<li>Collect feedback.</li></ol>
<h3>Budget methods</h3>
<ul><li><b>Affordable</b>: what the company can afford; ignores promotion's effect on sales.</li>
<li><b>Percentage-of-sales</b>: simple, links spending to sales, and creates <b>stability</b> when competitors spend similar shares; but wrongly treats sales as the <i>cause</i> of promotion rather than the result.</li>
<li><b>Competitive-parity</b>: match competitors.</li>
<li><b>Objective-and-task</b>: most logical: define objectives, tasks and costs.</li></ul>
<p><b>Push vs. pull promotion</b>: B2B firms lean on push (personal selling, trade promotion); consumer firms more on pull (advertising). Advertising and PR matter most in the <b>awareness</b> stage; personal selling most in conviction and ordering.</p>`},

{ id: "m-adv", topic: "promo", title: "Advertising and public relations", src: "Advertising & PR chapter", tags: "advertising objectives informative persuasive comparative reminder advertising budget message strategy creative concept execution styles media reach frequency impact engagement media timing evaluating advertising communication effects sales effects public relations press relations publicity product placement",
html: `<p><b>Advertising objectives</b>: <b>inform</b> (new product category), <b>persuade</b> (competitive stage; <b>comparative</b> advertising), <b>remind</b> (mature products).</p>
<p>Decisions: objectives → budget (also depends on PLC stage, market share, competition, clutter, differentiation) → message (strategy, creative concept, execution style: slice of life, lifestyle, fantasy, mood, musical, personality symbol, technical expertise, scientific evidence, testimonial) → media → evaluation.</p>
<h3>Media</h3>
<ul><li><b>Reach</b>: percentage (or number) of people in the target market exposed to the campaign during a given period.</li>
<li><b>Frequency</b>: how many times the average person is exposed.</li>
<li><b>Impact</b>: qualitative value of exposure through a medium.</li>
<li><b>Engagement</b>.</li></ul>
<p><b>Television</b>: good mass-market coverage, low cost per exposure, combines sight, sound and motion; high absolute cost, clutter, fleeting exposure, less audience selectivity.</p>
<p><b>Evaluating</b>: communication effects (copy testing) and sales and profit effects. <b>Product placement</b>: brands paid to appear in films and shows.</p>
<h3>Public relations</h3>
<p>Functions: press relations, product publicity, public affairs, lobbying, investor relations, development. PR can be cheaper than advertising and more credible; tools include news, speeches, events, written and audio-visual materials, corporate identity, public service, social media.</p>`},

{ id: "m-selling", topic: "promo", title: "Personal selling and sales promotion", src: "Personal selling & sales promotion chapter", tags: "personal selling salesforce territorial product customer structure inside outside salesforce selling process prospecting preapproach approach presentation handling objections closing follow-up value selling sales promotion consumer promotions samples coupons cash refunds price packs premiums advertising specialties point-of-purchase contests sweepstakes trade promotions business promotions",
html: `<p>Salesforce structures: <b>territorial, product, customer (market)</b>, or complex. <b>Outside</b> (field) vs. <b>inside</b> salesforce. Team selling for large accounts. Salesforce management: recruiting, training, compensating, supervising, evaluating. <b>Social selling</b> uses online, mobile and social media.</p>
<div class="key"><b>Selling process:</b> prospecting and qualifying → preapproach → approach → presentation and demonstration → <b>handling objections</b> → closing → follow-up. Personal selling builds <b>relationships</b> (value selling rather than price selling).</div>
<h3>Sales promotion</h3>
<p>Short-term incentives. Growing because of pressure for short-term sales, competition, declining advertising efficiency and deal-oriented consumers; risk: <b>promotion clutter</b>. Promotions should build brand equity, not just cut prices.</p>
<ul><li><b>Consumer promotions</b>: <b>samples</b> (most effective but most expensive way to introduce a product), coupons, cash refunds (rebates), price packs, premiums, advertising specialties, <b>point-of-purchase</b> displays, contests/sweepstakes/games, event marketing, patronage rewards (loyalty).</li>
<li><b>Trade promotions</b>: to persuade resellers to carry the brand, give shelf space and promote it: discounts, <b>allowances</b>, free goods, push money.</li>
<li><b>Business promotions</b>: conventions and trade shows, sales contests.</li></ul>
<p>Product warranties and guarantees are promises the product will perform as specified or the seller will fix or refund.</p>`},

{ id: "m-digital", topic: "promo", title: "Direct, online, social media and mobile marketing", src: "Direct & digital marketing chapter · notes", tags: "direct marketing digital marketing websites search marketing SEO paid search display ads email online video viral blogs social media brand communities mobile marketing direct mail catalogs telemarketing DRTV kiosks privacy irritation unfairness deception fraud opt-out",
html: `<p><b>Direct and digital marketing</b> engages directly with carefully targeted consumers and communities to get immediate response and build lasting relationships. Benefits for buyers: convenience, information, interaction. For sellers: targeting, personalization, real-time adjustment, lower costs.</p>
<p>Forms: websites (marketing vs. brand community sites), <b>search marketing</b> (SEO and paid search), display ads, email (permission-based; <b>opt-in/opt-out</b>), online video, <b>viral marketing</b> (consumers pass content along; the firm can't control it), blogs and forums, <b>social media</b> (brand pages, communities, social listening, social customer service), <b>mobile marketing</b> (location-based offers need permission).</p>
<p>Traditional forms: direct mail, catalogues, telemarketing, <b>direct-response TV</b>, kiosks.</p>
<p>Measure what matters: views and clicks are not the same as satisfied customers. Many views can bring little value if they reach the wrong audience or create expectations the offer can't meet.</p>
<div class="key"><b>Public policy issues</b>: irritation (unwanted contact), unfairness and <b>deception</b> (misleading claims, hidden conditions, fake identities), <b>fraud</b>, <b>invasion of privacy</b> (data collection and combination; security), vulnerable groups such as children. Firms should be transparent, collect only what they can justify, and give easy opt-out.</div>`},

/* ======================= READINGS ======================= */
{ id: "m-stoeckl", topic: "resp", title: "Stoeckl & Luedicke (2015): marketing criticism in four domains", src: "Stoeckl & Luedicke (2015), Journal of Business Research · lecture slides", tags: "marketing criticism consumer deception intrusion community co-optation commercialization society seduction degeneration human natural resource exploitation planned obsolescence greenwashing doing well while doing good",
html: `<p>“Doing well while doing good? An integrative review of marketing criticism and response.” The authors review decades of criticism of marketing and group it into <b>four domains</b>, from the individual consumer up to the planet. Marketing can be a positive force that creates value for stakeholders, or produce more problems than it solves.</p>
<div class="tablewrap"><table><tr><th>Domain</th><th>Criticism (examples from the lecture)</th></tr>
<tr><td><b>1. Consumer deception and intrusion</b></td><td>Planned obsolescence (phones slowed down; fast fashion's “buy now or it's gone”), deceptive pricing (anchoring with a high “market price”, decoy middle options), deceptive promotion (unrealistic beauty ads), consumer intrusion (intrusive ads, data mining).</td></tr>
<tr><td><b>2. Community co-optation and commercialization</b></td><td>Eroding cultural appeals by commercializing subcultures and local communities; excessive promotional noise (unsolicited advertising in public space); global spread of chain stores and restaurants.</td></tr>
<tr><td><b>3. Society seduction and degeneration</b></td><td>Promoting superficial, material desires; the misleading notion that money and purchases bring happiness; wasteful materialistic lifestyles at the expense of meaningful alternatives; normalizing the credit-consumption-debt cycle (buy now, pay later); externalizing the social cost of overconsumption to the public.</td></tr>
<tr><td><b>4. Human and natural resource exploitation</b></td><td>Exploitative production (low wages, poor working conditions), environmental damage and resource depletion, with the social costs hidden from consumers.</td></tr></table></div>
<p>The paper also maps how firms respond (from denial to genuine reform) and whether responses actually address the criticism. Linked lecture material: five rules of thumb for honest sustainability claims (be clear what the benefit is; substantiate with up-to-date facts; fair comparisons; be honest and specific about the company's efforts; visual claims and labels must be useful, not confusing): the opposite is <b>greenwashing</b>.</p>
<div class="trap">A typical question: “Which of the following is NOT among the marketing criticisms the authors identify?” Learn the four domain names exactly.</div>`},

{ id: "m-shift", topic: "resp", title: "White, Habib & Hardisty (2019): the SHIFT framework", src: "White, Habib & Hardisty (2019), Journal of Marketing (first 10 pages) · lecture slides", tags: "SHIFT social influence habit formation individual self feelings cognition tangibility attitude-behaviour gap self-other trade-off collective action abstractness smart meter feedback prompts incentives penalties implementation intentions social norms",
html: `<p>Consumers say they care about sustainability but often don't act on it: the <b>attitude–behaviour gap</b>. Sustainable behaviour is hard because of three challenges: the <b>self–other trade-off</b> (costs to me, benefits to others), the <b>collective action problem</b> (my contribution seems pointless), and <b>abstractness</b> (impacts are distant, future and vague).</p>
<div class="tablewrap"><table><tr><th>SHIFT factor</th><th>Levers</th></tr>
<tr><td><b>S</b>ocial influence</td><td>Social norms (what others do), social identities, social desirability (people act greener when observed).</td></tr>
<tr><td><b>H</b>abit formation</td><td>Breaking bad habits: discontinuities (moving house), penalties (taxes, fees). Forming good habits: <b>implementation intentions</b>, <b>making it easy</b> (defaults), <b>prompts</b> (messages just before the behaviour), <b>incentives</b>, <b>feedback</b> (e.g. smart meters with real-time energy feedback → 4–12% household savings).</td></tr>
<tr><td><b>I</b>ndividual self</td><td>Self-concept, self-consistency, self-interest, self-efficacy, individual differences.</td></tr>
<tr><td><b>F</b>eelings and cognition</td><td>Positive and negative emotions (guilt, pride; avoid too much fear), information and learning, eco-labels, framing.</td></tr>
<tr><td><b>T</b>angibility</td><td>Make impacts concrete, local and near in time; match temporal focus; encourage valuing experiences over material goods.</td></tr></table></div>
<div class="key">Canvas example: an energy provider recommends smart meters that give <b>real-time feedback</b> on energy use → <b>Habit formation</b>.</div>`},

{ id: "m-stahel", topic: "resp", title: "Stahel (2016): the circular economy", src: "Stahel (2016), Nature 531, 435–438", tags: "circular economy linear economy reuse repair remanufacture recycle performance economy selling goods as services ownership loops tax labour resources",
html: `<p>A <b>linear economy</b> turns resources into products that are sold, used and thrown away (“make, use, dispose”). A <b>circular economy</b> keeps goods and materials in use as long as possible: “reuse what you can, recycle what cannot be reused, repair what is broken, remanufacture what cannot be repaired.”</p>
<ul><li>Two kinds of business model: those that <b>extend the service life</b> of goods (reuse, repair, remanufacture, upgrades) and those that <b>turn old goods into as-good-as-new resources</b> (recycling materials).</li>
<li>The <b>smaller the loop</b> (reuse and repair before recycling), the more profitable and resource-efficient.</li>
<li>The <b>performance economy</b>: selling goods as services (renting, leasing, sharing). If the producer keeps ownership, it has an incentive to make products durable and to recover them: waste becomes the producer's cost.</li>
<li>Circularity substitutes labour (often local, skilled jobs) for energy and materials. Stahel argues for <b>taxing non-renewable resources rather than labour</b> and for policy that rewards reuse.</li></ul>`},

{ id: "m-blab", topic: "resp", title: "B Lab and B Corps (guest lecture)", src: "Guest lecture slide on the B Impact Assessment", tags: "B Lab B Corp B Impact Assessment governance workers community customers environment",
html: `<p>A <b>B Corp</b> is a company certified by B Lab for meeting standards of verified social and environmental performance, transparency and accountability.</p>
<div class="key">The <b>B Impact Assessment (BIA)</b> is B Lab's free tool to assess and improve a company's social and environmental performance across <b>five impact areas</b>: <b>governance, workers, community, customers and environment</b>.</div>
<p>Note from the slide: standards are never the latest development; they are updated over time.</p>`},

/* ======================= OLD-BOOK ======================= */
{ id: "m-oldbook", topic: "old", title: "Kotler & Keller concepts that show up in the old exams", flag: "Older book", src: "Kotler & Keller, Marketing Management (used for the 2012–2020 exams)", tags: "holistic marketing relationship integrated internal performance marketing social responsibility marketing demand states negative demand latent nonexistent declining irregular overfull VALS makers strivers experiencers survivors changers brand dynamics pyramid presence relevance performance advantage bonding defense strategies position flank preemptive counteroffensive mobile contraction attack frontal flank encirclement bypass guerrilla market nicher share of voice credence",
html: `<p>Your old exams were written for <i>Marketing Management</i> (Kotler & Keller). These ideas aren't all in your new book, but the logic helps on similar questions.</p>
<h3>Holistic marketing (four components)</h3>
<p><b>Relationship marketing</b> (customers, employees, partners), <b>integrated marketing</b> (all activities combined to create value), <b>internal marketing</b> (hiring, training, motivating employees; making sure everyone in the organization, especially senior management, embraces marketing principles), <b>performance marketing</b> (financial and non-financial returns, incl. <b>social responsibility marketing</b>: ethical, environmental, legal and social context).</p>
<h3>Demand states</h3>
<p><b>Negative</b> (consumers dislike the product and may pay to avoid it), <b>nonexistent</b> (unaware or uninterested), <b>latent</b> (a strong need no product satisfies yet), <b>declining</b>, <b>irregular</b> (seasonal, daily), <b>full</b>, <b>overfull</b> (more buyers than can be satisfied), <b>unwholesome</b>.</p>
<h3>Brand dynamics pyramid (BrandZ)</h3>
<p><b>Presence → relevance → performance → advantage → bonding</b>. Bonding = rational and emotional attachment to the exclusion of most other brands.</p>
<h3>Competitive strategies</h3>
<p>Leader's <b>defenses</b>: position, <b>flank</b> (erect outposts to protect a weak front), <b>preemptive</b> (attack first), <b>counteroffensive</b>, mobile, contraction. Challenger's <b>attacks</b>: <b>frontal</b> (match the opponent's product, advertising, price and distribution), flank, encirclement, bypass, guerrilla. <b>Market nicher</b>: leader in a small market rather than follower in a large one. Expanding total demand: new customers (market-penetration, new-market segment, geographical expansion) or more usage (advertise new applications).</p>
<h3>Other terms</h3>
<ul><li><b>Share of voice</b>: company's advertising as a proportion of all advertising for that product.</li>
<li><b>VALS</b> types (e.g. <b>strivers</b>: trendy, fun-loving, resource-constrained; <b>makers</b>: practical, self-sufficient). UK-style social-attitude groups: <b>changers</b> live frugally and simply.</li>
<li>Market coverage patterns: <b>single-segment concentration</b>, selective specialization, product specialization, market specialization, full market coverage.</li>
<li>Hierarchy-of-effects: awareness → knowledge → liking → preference → conviction → purchase (same as buyer-readiness stages).</li>
<li>Seven website design elements (7Cs): context (layout and design), content, community, customization, communication, connection, commerce.</li></ul>`}
]);

PORTAL.addGlossary("mkt", [
{ t: "Marketing", d: "The process by which companies engage customers, build strong customer relationships and create customer value in order to capture value from customers in return." },
{ t: "Needs / wants / demands", d: "Needs: states of felt deprivation. Wants: the form needs take, shaped by culture and personality. Demands: wants backed by buying power." },
{ t: "Marketing myopia", d: "Paying more attention to the specific products a company offers than to the benefits and experiences they produce." },
{ t: "Production concept", d: "Consumers favour products that are available and highly affordable; focus on production and distribution efficiency." },
{ t: "Product concept (orientation)", d: "Consumers favour products with the most quality, performance and features; focus on continuous product improvement." },
{ t: "Selling concept", d: "Consumers won't buy enough without large-scale selling and promotion. Typical for unsought goods." },
{ t: "Marketing concept", d: "Organizational goals depend on knowing target markets' needs and delivering satisfaction better than competitors." },
{ t: "Societal marketing concept", d: "Marketing decisions should consider consumers' wants, company requirements, consumers' long-run interests and society's long-run interests." },
{ t: "Customer-perceived value", d: "The customer's evaluation of the difference between all benefits and all costs of an offer relative to competing offers." },
{ t: "Customer satisfaction", d: "The extent to which a product's perceived performance matches a buyer's expectations." },
{ t: "Customer lifetime value", d: "The value of the entire stream of purchases a customer makes over a lifetime of patronage." },
{ t: "Share of customer", d: "The portion of the customer's purchasing that a company gets in its product categories." },
{ t: "Customer equity", d: "The total combined customer lifetime values of all of the company's customers." },
{ t: "Customer-engagement marketing", d: "Making the brand a meaningful part of consumers' conversations and lives by fostering direct and continuous customer involvement." },
{ t: "Consumer-generated marketing", d: "Brand exchanges created by consumers themselves, invited or uninvited." },
{ t: "Strategic planning", d: "Developing and maintaining a strategic fit between the organization's goals and capabilities and its changing marketing opportunities." },
{ t: "Mission statement", d: "A statement of the organization's purpose. Should be market-oriented and defined in terms of customer needs." },
{ t: "SBU", d: "Strategic business unit: a division, product line or product that can be planned separately." },
{ t: "Growth-share matrix", d: "BCG portfolio tool: stars, cash cows, question marks and dogs, by market growth rate and relative market share." },
{ t: "Market penetration", d: "Growth by increasing sales of current products to current market segments without changing the product." },
{ t: "Market development", d: "Growth by identifying and developing new market segments for current products." },
{ t: "Product development", d: "Growth by offering modified or new products to current market segments." },
{ t: "Diversification", d: "Growth by starting up or acquiring businesses outside current products and markets." },
{ t: "Value chain", d: "The internal departments that carry out value-creating activities to design, produce, market, deliver and support products." },
{ t: "Value delivery network", d: "The company, suppliers, distributors and customers partnering to improve the performance of the entire system." },
{ t: "Marketing mix (4Ps)", d: "Product, price, place and promotion: the tactical tools a firm blends to produce the response it wants." },
{ t: "4Cs", d: "Customer solution, customer cost, convenience, communication: the 4Ps seen from the buyer's side." },
{ t: "SWOT analysis", d: "Evaluation of internal strengths and weaknesses and external opportunities and threats." },
{ t: "Marketing control", d: "Measuring and evaluating results and taking corrective action to make sure objectives are attained." },
{ t: "Marketing ROI", d: "Net return from a marketing investment divided by the costs of the marketing investment." },
{ t: "Marketing dashboard", d: "A display of sets of marketing performance measures used to monitor strategic marketing performance." },
{ t: "Microenvironment", d: "Actors close to the company: company, suppliers, intermediaries, customer markets, competitors, publics." },
{ t: "Macroenvironment", d: "Larger forces: demographic, economic, natural, technological, political-social, cultural." },
{ t: "Marketing intermediaries", d: "Firms that help promote, sell and distribute goods: resellers, physical distribution firms, marketing services agencies, financial intermediaries." },
{ t: "Core beliefs and values", d: "Passed from parents to children and reinforced by schools, churches, businesses and government; very persistent." },
{ t: "Customer insights", d: "Fresh, evidence-based understandings of customers and markets that become the basis for creating value." },
{ t: "Marketing information system (MIS)", d: "People and procedures for assessing information needs, developing needed information and helping decision makers use it." },
{ t: "Competitive marketing intelligence", d: "Systematic monitoring, collection and analysis of publicly available information about consumers, competitors and the marketplace." },
{ t: "Exploratory research", d: "Research to gather preliminary information that helps define problems and suggest hypotheses or new ideas." },
{ t: "Descriptive research", d: "Research to describe things such as market potential, demographics or attitudes." },
{ t: "Causal research", d: "Research to test hypotheses about cause-and-effect relationships." },
{ t: "Secondary data", d: "Information that already exists, collected for another purpose." },
{ t: "Primary data", d: "Information collected for the specific purpose at hand." },
{ t: "Ethnographic research", d: "Observing and interacting with consumers in their natural environments, using tools from anthropology." },
{ t: "Focus group", d: "Inviting 6–10 people to talk with a trained moderator about a product, service or organization." },
{ t: "Open-end questions", d: "Questions that let respondents answer in their own words; they reveal more about how people think." },
{ t: "Probability sample", d: "Every member of the population has a known chance of selection (simple random, stratified, cluster)." },
{ t: "Nonprobability sample", d: "Convenience, judgment or quota samples; sampling error can't be measured." },
{ t: "Netnography", d: "Ethnography of online communities." },
{ t: "Laddering", d: "Interview technique asking ‘why?’ repeatedly to link product attributes to benefits and personal values." },
{ t: "Reference groups", d: "Groups that serve as direct or indirect points of comparison in forming attitudes or behaviour; includes aspirational groups." },
{ t: "Opinion leader", d: "A person within a reference group who exerts social influence because of special skills, knowledge or personality." },
{ t: "Lifestyle", d: "A person's pattern of living as expressed in activities, interests and opinions (AIO)." },
{ t: "Motive (drive)", d: "A need that is sufficiently pressing to direct the person to seek satisfaction." },
{ t: "Selective attention", d: "The tendency to screen out most of the information to which we are exposed." },
{ t: "Selective distortion", d: "The tendency to interpret information in a way that supports what we already believe." },
{ t: "Selective retention", d: "The tendency to remember information that supports our attitudes and beliefs." },
{ t: "Cognitive dissonance", d: "Buyer discomfort caused by postpurchase conflict." },
{ t: "Adoption process", d: "Awareness, interest, evaluation, trial, adoption." },
{ t: "Derived demand", d: "Business demand that ultimately comes from demand for consumer goods." },
{ t: "Buying centre", d: "All individuals in a business purchase decision: users, influencers, buyers, deciders, gatekeepers." },
{ t: "Straight rebuy / modified rebuy / new task", d: "Routine reorder / change in specifications, prices, terms or suppliers / first-time purchase." },
{ t: "Market segmentation", d: "Dividing a market into distinct groups with different needs, characteristics or behaviours." },
{ t: "Market targeting", d: "Evaluating each segment's attractiveness and selecting one or more segments to serve." },
{ t: "Behavioural segmentation", d: "Dividing a market by knowledge, attitudes, uses or responses: occasions, benefits, user status, usage rate, loyalty." },
{ t: "Intermarket segmentation", d: "Forming segments of consumers with similar needs and behaviours across countries." },
{ t: "Undifferentiated marketing", d: "Ignoring segment differences and targeting the whole market with one offer." },
{ t: "Differentiated marketing", d: "Targeting several segments with separate offers." },
{ t: "Concentrated (niche) marketing", d: "Going after a large share of one or a few segments or niches." },
{ t: "Micromarketing", d: "Tailoring products and programmes to individuals and local segments (local and individual marketing)." },
{ t: "Positioning", d: "Arranging for an offer to occupy a clear, distinctive and desirable place relative to competitors in target consumers' minds." },
{ t: "Competitive advantage", d: "An advantage over competitors gained by offering greater value, through lower prices or more benefits." },
{ t: "USP", d: "Unique selling proposition: aggressively promoting one benefit." },
{ t: "Value proposition", d: "The full positioning of a brand: the full mix of benefits on which it is differentiated and positioned." },
{ t: "Points-of-difference / points-of-parity", d: "Unique, positively evaluated associations / associations shared with competitors that must be matched (lecture, not in the book)." },
{ t: "Convenience product", d: "Bought frequently, immediately, with minimal comparison and effort." },
{ t: "Shopping product", d: "Less frequently purchased; compared on suitability, quality, price and style." },
{ t: "Specialty product", d: "Unique characteristics or brand identification for which buyers make a special purchase effort." },
{ t: "Unsought product", d: "One the consumer doesn't know about or doesn't normally think of buying (insurance, smoke detectors)." },
{ t: "Social marketing", d: "Using commercial marketing concepts and tools to encourage behaviours that create individual and societal well-being." },
{ t: "Product line", d: "A group of closely related products." },
{ t: "Product mix", d: "All product lines and items a seller offers; width, length, depth and consistency." },
{ t: "Line filling / line stretching", d: "Adding items within the present range / lengthening the line beyond its range (down, up, both)." },
{ t: "Service intangibility", d: "Services cannot be seen, tasted, felt, heard or smelled before purchase." },
{ t: "Service inseparability", d: "Services are produced and consumed at the same time and can't be separated from their providers." },
{ t: "Service variability", d: "Service quality depends on who provides it and when, where and how." },
{ t: "Service perishability", d: "Services cannot be stored for later sale or use." },
{ t: "Search / experience / credence qualities", d: "Can be evaluated before purchase / only after consumption / hard to evaluate even after consumption." },
{ t: "Service-profit chain", d: "Links service profits to employee and customer satisfaction." },
{ t: "Brand equity", d: "The differential effect knowing the brand name has on customer response to the product or its marketing." },
{ t: "Brand value", d: "The total financial value of a brand." },
{ t: "BrandAsset Valuator", d: "Measures differentiation, relevance, knowledge and esteem. Strength = differentiation + relevance; stature = esteem + knowledge." },
{ t: "Brand resonance pyramid (CBBE)", d: "Salience → performance & imagery → judgments & feelings → resonance." },
{ t: "Store (private) brand", d: "A brand created and owned by a reseller." },
{ t: "Co-branding", d: "Using the established brand names of two different companies on the same product." },
{ t: "Line extension", d: "Extending an existing brand name to new forms, colours, sizes, ingredients or flavours in the same category." },
{ t: "Brand extension", d: "Extending an existing brand name to a new product category." },
{ t: "Multibrands", d: "Several brands in the same product category." },
{ t: "Idea screening", d: "Screening new-product ideas to spot good ones and drop poor ones; the first idea-reducing stage." },
{ t: "Product concept (new products)", d: "A detailed version of the new-product idea stated in meaningful consumer terms." },
{ t: "Test marketing", d: "Testing the product and its marketing programme in realistic market settings." },
{ t: "Commercialization", d: "Introducing a new product into the market." },
{ t: "Product life cycle", d: "The course of a product's sales and profits: development, introduction, growth, maturity, decline." },
{ t: "Style / fashion / fad", d: "Basic distinctive mode of expression / currently accepted style / temporary period of unusually high sales." },
{ t: "Price", d: "The amount charged for a product, or the sum of values customers exchange for its benefits." },
{ t: "Customer value-based pricing", d: "Setting price based on buyers' perceptions of value rather than on the seller's cost." },
{ t: "Good-value pricing", d: "The right combination of quality and good service at a fair price." },
{ t: "Everyday low pricing (EDLP)", d: "Charging a constant, everyday low price with few or no temporary discounts." },
{ t: "High-low pricing", d: "Higher everyday prices with frequent promotions." },
{ t: "Value-added pricing", d: "Attaching value-added features and services to differentiate offers and support higher prices." },
{ t: "Cost-plus (markup) pricing", d: "Adding a standard markup to the cost of the product." },
{ t: "Break-even pricing", d: "Setting price to break even on costs or make a target return." },
{ t: "Going-rate pricing", d: "Basing price largely on competitors' prices." },
{ t: "Average cost", d: "Cost per unit at a given level of production." },
{ t: "Market-skimming pricing", d: "Setting a high price for a new product to skim maximum revenues layer by layer." },
{ t: "Market-penetration pricing", d: "Setting a low price for a new product to attract many buyers and a large market share." },
{ t: "Captive-product pricing", d: "Pricing products that must be used with a main product (razor blades, ink)." },
{ t: "Segmented pricing", d: "Selling at two or more prices that don't reflect differences in costs." },
{ t: "Dynamic pricing", d: "Adjusting prices continually to meet the characteristics and needs of individual customers and situations." },
{ t: "Dutch auction", d: "One seller, many buyers: the auctioneer starts high and lowers the price until a bidder accepts." },
{ t: "Allowance", d: "Promotional money paid to retailers for featuring the product, or trade-in credit." },
{ t: "Marketing channel", d: "A set of interdependent organizations that help make a product available for use or consumption." },
{ t: "Direct marketing channel", d: "A channel with no intermediary levels (zero-level)." },
{ t: "Vertical marketing system (VMS)", d: "Producers, wholesalers and retailers acting as a unified system (corporate, contractual, administered)." },
{ t: "Franchise organization", d: "Contractual VMS: a franchisor licenses its system and collects royalties from franchisees." },
{ t: "Horizontal marketing system", d: "Two or more companies at one channel level join together." },
{ t: "Omnichannel", d: "All channels connected so customers can move seamlessly between them." },
{ t: "Disintermediation", d: "Cutting out channel intermediaries, or new forms displacing traditional ones." },
{ t: "Intensive / selective / exclusive distribution", d: "As many outlets as possible / more than one but not all / very limited number of dealers with exclusive rights." },
{ t: "Push strategy", d: "Using the salesforce and trade promotion to push the product through channels." },
{ t: "Pull strategy", d: "Spending on consumer advertising and promotion so consumers demand the product." },
{ t: "Retailing", d: "All activities in selling goods or services directly to final consumers for personal, nonbusiness use." },
{ t: "Wholesaling", d: "All activities in selling goods and services to those buying for resale or business use." },
{ t: "Merchant wholesaler", d: "Independently owned wholesale business that takes title to the merchandise." },
{ t: "Broker / agent", d: "Wholesalers who do not take title; they bring buyers and sellers together for a commission." },
{ t: "Promotion mix", d: "Advertising, sales promotion, personal selling, public relations and direct/digital marketing." },
{ t: "Integrated marketing communications (IMC)", d: "Integrating all communication channels to deliver a clear, consistent and compelling message." },
{ t: "Noise", d: "Unplanned static or distortion (e.g. competing messages) during the communication process." },
{ t: "Buyer-readiness stages", d: "Awareness, knowledge, liking, preference, conviction, purchase." },
{ t: "Buzz marketing", d: "Cultivating opinion leaders and getting them to spread information about a product in their communities." },
{ t: "Percentage-of-sales method", d: "Setting the promotion budget at a percentage of current or forecast sales." },
{ t: "Objective-and-task method", d: "Budget based on specific objectives, the tasks needed and their costs." },
{ t: "Reach / frequency / impact", d: "Share of target exposed / times the average person is exposed / qualitative value of exposure through a medium." },
{ t: "Product placement", d: "Paying to have products appear in films and TV shows." },
{ t: "Public relations", d: "Building good relations with publics through favourable publicity, a good corporate image and handling unfavourable events." },
{ t: "Selling process", d: "Prospecting and qualifying, preapproach, approach, presentation, handling objections, closing, follow-up." },
{ t: "Sales promotion", d: "Short-term incentives to encourage purchase or sale of a product." },
{ t: "Samples", d: "Offers of a trial amount; the most effective but most expensive way to introduce a new product." },
{ t: "Trade promotions", d: "Promotions aimed at resellers: discounts, allowances, free goods, push money." },
{ t: "Viral marketing", d: "Digital content so infectious that consumers seek it out or pass it along." },
{ t: "Attitude–behaviour gap", d: "Consumers report positive attitudes to sustainability but don't act on them." },
{ t: "SHIFT", d: "Social influence, Habit formation, Individual self, Feelings and cognition, Tangibility (White et al. 2019)." },
{ t: "Four domains of marketing criticism", d: "Consumer deception & intrusion; community co-optation & commercialization; society seduction & degeneration; human & natural resource exploitation (Stoeckl & Luedicke 2015)." },
{ t: "Circular economy", d: "An economy that keeps goods and materials in use through reuse, repair, remanufacturing and recycling (Stahel 2016)." },
{ t: "Performance economy", d: "Selling goods as services; the producer keeps ownership and so has an incentive to make durable goods." },
{ t: "B Impact Assessment", d: "B Lab's tool covering five impact areas: governance, workers, community, customers, environment." },
{ t: "Greenwashing", d: "Misleading claims about the environmental benefits of a product or company." },
{ t: "Share of voice", d: "A company's advertising of a product as a proportion of all advertising of that product (older book)." },
{ t: "Negative demand", d: "Consumers dislike the product and may even pay to avoid it (older book)." },
{ t: "Holistic marketing", d: "Relationship, integrated, internal and performance marketing (older book)." },
{ t: "Internal marketing", d: "Hiring, training and motivating employees so everyone embraces marketing principles; also key in services." }
]);
