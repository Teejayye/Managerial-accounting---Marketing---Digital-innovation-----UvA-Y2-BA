/* Digital Innovation and Entrepreneurship: course data */
PORTAL.addCourse({
  id: "die",
  title: "Digital Innovation and Entrepreneurship",
  short: "Digital Innovation",
  code: "Amsterdam Business School · 6 EC · J. Sitruk",
  color: "#0f6b62",
  examDate: "",
  examNote: "Q&A + mock exam: Fri 16 Oct, 09:00–11:00, M1.01",
  tagline: "Platforms, network effects, launch and monetization, startup funding, AI and deep tech.",
  facts: [
    ["Format", "Individual, computer-based <b>multiple-choice</b> exam."],
    ["Weight", "50% of the course grade (the case presentation is the other 50%)."],
    ["To pass", "At least <b>5.5 on the exam</b> and a 5.5 course average. The resit is capped at a 6."],
    ["Content", "Lectures, cases, guest talks, assigned book chapters and mandatory articles. Optional readings are <b>not</b> examined."],
    ["Mock exam", "Given in the last tutorial (Q&A, 16 October). Add it here once you have it."]
  ],
  plan: [
    "Read the <b>Summary</b> topic by topic. Parker et al. chapters 2, 5 and 6 are the most exam-heavy.",
    "Do the <b>Practice</b> questions per topic, then switch to ‘My mistakes’ until it is empty.",
    "Sit the <b>mock exam</b> here under time pressure (about 1.5 min per question).",
    "Two days before: re-read the key terms list and redo your mistakes."
  ],
  warning: "<b>Missing from your files:</b> slides for Lectures 1, 5 and 6, the three Lecture 6 readings (lean startup for deep tech, quantum computing, blockchain), the HBS case texts, and guest-talk content. Sections built without your files are marked <i>‘Not from your files’</i>. Check these topics against your own notes.",
  sources: "Course manual 2026–27 · Lecture slides 2 (network effects), 3 (funding), 4 (launch & monetization) · Tutorial 1 · Guest talk Erik Boer (Amsterdam ecosystem) · Parker, Van Alstyne & Choudary (2016) ch. 1, 2, 3, 5, 6, 7 · Schilling (2017) ch. 1–2 · Sahut et al. (2021) · Boudreau & Lakhani (2009) · Leitão et al. (2022) · Zhu & Iansiti (2019) · Agrawal et al. (2017) · Cromwell et al. (2023) · Hurwitz & Kirsch (2018) ch. 1 · I amsterdam ‘Funding your startup’.",
  topics: [
    { id: "intro", title: "L1 · Digital entrepreneurship & open innovation", short: "L1 Digital & open innovation", sub: "Parker ch. 1 & 7 · Sahut et al. · Schilling ch. 1–2" },
    { id: "net", title: "L2 · Network effects & platform architecture", short: "L2 Network effects", sub: "Parker ch. 2 & 3 · Boudreau & Lakhani" },
    { id: "fund", title: "L3 · Entrepreneurial funding & ecosystems", short: "L3 Funding", sub: "Leitão et al. · I amsterdam · guest talk Erik Boer" },
    { id: "launch", title: "L4 · Platform launch & monetization", short: "L4 Launch & monetization", sub: "Parker ch. 5 & 6 · Zhu & Iansiti" },
    { id: "ai", title: "L5 · Data-driven innovation & AI", short: "L5 Data & AI", sub: "Agrawal et al. · Cromwell et al. · Hurwitz & Kirsch" },
    { id: "deep", title: "L6 · Deep tech, quantum & blockchain", short: "L6 Deep tech", sub: "Readings not uploaded" },
    { id: "cases", title: "Tutorials & cases", short: "Cases", sub: "Tutorial 1 exercise · case list" }
  ]
});

PORTAL.addSummary("die", [
/* ============================ L1 ============================ */
{ id: "platform-def", topic: "intro", title: "What a platform is (Parker ch. 1)", src: "Parker et al. (2016), ch. 1 ‘Today’", tags: "pipeline platform inverted firm gatekeepers",
html: `
<p>A <strong>platform</strong> is a business based on <em>enabling value-creating interactions between external producers and consumers</em>. It provides an open, participative infrastructure and sets the governance conditions. Its overarching purpose: <strong>consummate matches among users and facilitate the exchange of goods, services or social currency</strong>, so that all participants create value.</p>
<p>A <strong>pipeline</strong> (linear value chain) is the traditional model: the firm designs, produces and sells; value flows in one direction from producer to consumer. Platforms replace this with a value <em>matrix</em> in which users can be producers, consumers, or both.</p>
<h3>Why platforms beat pipelines</h3>
<ol>
<li><strong>They scale more efficiently by eliminating gatekeepers.</strong> Kindle replaces editors with real-time reader feedback; Coursera and Upwork unbundle universities and consulting firms.</li>
<li><strong>They unlock new sources of value creation and supply.</strong> Airbnb owns no rooms and takes a 9–15% fee (avg. 11%). Supply becomes “not-even-mine inventory” (RelayRides, YouTube, Viki). Reputation systems and default insurance cut the <em>transaction costs</em> that used to prevent exchange with strangers.</li>
<li><strong>They use data-based tools to create community feedback loops.</strong> Wikipedia vs. Britannica: the community grows and polices content.</li>
<li><strong>They invert the firm.</strong> Focus shifts from internal to external: marketing goes from push to pull, IT from back office to social/big data, finance from shareholder value to stakeholder value, strategy from controlling internal resources to orchestrating external ones, and innovation from in-house R&D to crowdsourcing.</li>
</ol>
<div class="key">“Uber owns no vehicles. Facebook creates no content. Alibaba has no inventory. Airbnb owns no real estate.” (Tom Goodwin). The community provides the resources.</div>
<h3>Takeaways from chapter 1</h3>
<ul><li>Platforms create value using resources they don't own or control, so they grow faster.</li><li>They derive much of their value from the communities they serve.</li><li>They turn a firm's inward focus outward.</li></ul>`},

{ id: "digital-ent", topic: "intro", title: "The age of digital entrepreneurship (Sahut, Iandoli & Teulon 2021)", src: "Sahut et al. (2021), Small Business Economics", tags: "digital entrepreneurship DEE information processing framework research streams",
html: `
<p><strong>Definition.</strong> Digital entrepreneurship (DE) is <em>the process of entrepreneurial creation of digital value through the use of various socio-technical digital enablers to support effective acquisition, processing, distribution and consumption of digital information</em>. The authors see DE as <strong>augmented entrepreneurship</strong>, not a sub-category: “the reconciliation of traditional entrepreneurship with the new way of creating and doing business in the digital era”.</p>
<h3>The information-processing framework (micro level)</h3>
<p>Digital value is created through four phases of digital information: <strong>generation/acquisition → processing → distribution/sharing → consumption</strong>. In each phase entrepreneurs face <em>challenges</em> (inside a phase) and <em>frictions</em> (between phases), and can use <em>digital socio-technical enablers</em> (e.g. open source, crowdsourcing, crowdfunding, analytics, user communities, SEO). This micro view complements the <strong>macro/systemic</strong> view of Digital Entrepreneurial Ecosystems and digital platforms.</p>
<p>Example in the paper: even a small traditional restaurant must create <em>digital</em> value (review sites, social media, delivery apps); value creation that isn't accompanied by digital value creation is severely undermined.</p>
<h3>Four research streams</h3>
<ol><li><strong>Digital business models</strong> (e.g. freemium, subscription; moving from a controlled value chain to a network orientation).</li>
<li><strong>Digitalization of the entrepreneurial process</strong>: boundaries between phases blur; scaling through data-driven operation, instant release, swift transformation (Huang et al.).</li>
<li><strong>Digital platforms</strong>: network effects, open innovation, crowdfunding.</li>
<li><strong>Digital Entrepreneurial Ecosystems (DEE)</strong>: combining entrepreneurial ecosystems and digital ecosystems (Sussan & Acs 2017).</li></ol>
<p>The EU's five pillars of DE: digital knowledge base & ICT market; digital business environment; access to finance; digital skills & e-leadership; entrepreneurial culture. The paper also stresses the neglected <strong>digital divide</strong> between digitally savvy entrepreneurs and those struggling to go digital.</p>
<div class="key">Both the ecosystem and platform views challenge the <strong>individualistic bias</strong> in entrepreneurship research (the “heroic founder”) in favour of collective, networked value creation.</div>`},

{ id: "openness", topic: "intro", title: "Openness: what platform users and partners can do (Parker ch. 7)", src: "Parker et al. (2016), ch. 7 ‘Openness’", tags: "open closed proprietary licensing joint venture shared model developers curation",
html: `
<p>A platform is <strong>open</strong> to the extent that (1) no restrictions are placed on participation in its development, commercialization or use, or (2) any restrictions (technical standards, licensing fees) are <em>reasonable and non-discriminatory</em>, applied uniformly. Open vs. closed is a <strong>spectrum</strong>. Too closed: partners won't contribute (Myspace built every feature itself, buggy; Facebook opened to developers in May 2007 and overtook Myspace in April 2008). Too open: quality problems (Wikipedia's Meredith Kercher article). Myspace managed to be both: closed to developers, too open to inappropriate self-serve ads.</p>
<h3>Three kinds of openness decisions</h3>
<p><strong>1. Manager & sponsor participation.</strong> The <em>manager</em> touches users and organizes interactions; the <em>sponsor</em> holds legal control over the technology/IP.</p>
<div class="tablewrap"><table><tr><th></th><th>One sponsor</th><th>Many sponsors</th></tr>
<tr><td><b>One manager</b></td><td>Proprietary model (Apple Mac/iOS)</td><td>Joint venture model (Orbitz, CareerBuilder)</td></tr>
<tr><td><b>Many managers</b></td><td>Licensing model (Google Android with Samsung, LG…)</td><td>Shared model (Linux, RFID)</td></tr></table></div>
<p>Lessons: Sony's proprietary Betamax lost to JVC's licensed VHS (but JVC earned modest profits). Blu-ray won but streaming made it irrelevant: “if you fight a standards battle for proprietary control, win it, and win it fast”. Visa moved from proprietary (BankAmericard) → joint venture → proprietary again (2007). Android (AOSP) reached ~80% share but Google earned little from AOSP devices and re-closed key apps and Google Play.</p>
<p><strong>2. Developer participation.</strong> <em>Core developers</em> (employed by the platform) build core functions; <em>extension developers</em> (outside parties) add features, often through an <strong>API</strong>; <em>data aggregators</em> add data from multiple sources (e.g. Target's pregnancy prediction story). The Guardian opened its content with three API tiers: Keyless, Approved, Bespoke. Amazon has far more APIs and mashups than Walmart.</p>
<p><strong>What to open and what to own:</strong> own high-value features (Apple bought Siri's maker); buy or replace an app that could become a platform in its own right (Apple Maps vs. Google Maps); standardize functionality that many developers reinvent into an open API.</p>
<p><strong>3. User participation.</strong> Mostly <em>producer openness</em>. Managed through <strong>curation</strong>: screening (who gets in) and feedback (encourages good behaviour), using reputation. Curation can be done by human gatekeepers or, better, by users through software (Wikipedia, Facebook flags, Uber and Airbnb ratings).</p>
<p>Platforms usually <strong>open over time</strong>; a proprietary platform can only become more open, a shared one only more closed. Danger: an extension developer displacing the platform (SAP and ADP).</p>`},

{ id: "schilling", topic: "intro", title: "Sources of innovation (Schilling ch. 1–2)", src: "Schilling (2017) ch. 1 Introduction, ch. 2 Sources of Innovation", tags: "creativity inventor user innovation R&D science push demand pull absorptive capacity clusters spillovers knowledge brokers",
html: `
<h3>Chapter 1: why innovation matters</h3>
<p>Technological innovation is often the most important driver of competitive success: firms like 3M and J&J earn a third or more of sales from products under five years old. Drivers: globalization and information technology (CAD/CAM, flexible manufacturing), which shorten product life cycles. Society gains (GDP growth; the <strong>Solow residual</strong> is growth not explained by labour and capital, attributed to technological change) but can suffer <strong>negative externalities</strong> (pollution, resistant bacteria).</p>
<p><strong>Innovation funnel:</strong> about 3,000 raw ideas for one commercial success; only about 1 in 9 initiated projects succeeds; in pharma 1 of 5,000 compounds reaches the shelf. Successful innovation needs (a) understanding of innovation dynamics, (b) a well-crafted innovation strategy and (c) well-designed implementation processes.</p>
<h3>Chapter 2: where innovation comes from</h3>
<p><strong>Creativity</strong> = the ability to produce work that is both <em>novel</em> and <em>useful</em>. Individual creativity depends on intellectual abilities, knowledge, thinking style, personality, intrinsic motivation and environment. Knowledge is double-edged: a <em>moderate</em> level of knowledge of a field can produce more creative solutions than deep expertise (Iddan, a missile engineer, invented the PillCam).</p>
<p><strong>Inventors</strong> master the basics of a field but work in two or three fields, are curious about problems, question assumptions and see knowledge as unified (Dean Kamen). <strong>Users</strong> innovate for their own needs (snowboarding, Laser sailboat, Indermil tissue glue). <strong>Firms' R&D</strong>: basic research (knowledge for its own sake), applied research (a specific need), development (turning knowledge into products). Firms see in-house R&D as their most important source.</p>
<p><strong>Science push vs. demand pull:</strong> the 1950s–60s linear science-push model was replaced by demand pull in the mid-1960s; both are too simple. Successful innovators use multiple sources: in-house R&D, customers, suppliers, competitors, <strong>complementors</strong>, universities and government labs.</p>
<p><strong>External and internal sourcing are complements</strong>: in-house R&D builds <strong>absorptive capacity</strong>, the ability to recognize, assimilate and use outside knowledge. Universities (tech transfer offices after the 1980 <em>Bayh-Dole Act</em>), governments (science parks, incubators, SBIR/STTR grants) and nonprofits also innovate.</p>
<p>The most important source: <strong>collaborative networks</strong>. Geographic <strong>technology clusters</strong> arise because complex and <em>tacit</em> knowledge needs close interaction and builds trust (<em>agglomeration economies</em>; downsides: competition, spillover to rivals, congestion and housing costs). <strong>Technological spillovers</strong> are positive externalities of R&D. <strong>Knowledge brokers</strong> (Fulton's steamboat, Edison's lab) connect separate knowledge domains and recombine existing ideas.</p>`},

/* ============================ L2 ============================ */
{ id: "ne-basics", topic: "net", title: "Network effects and demand economies of scale", src: "Lecture 2 slides · Parker et al. ch. 2", tags: "network effects Metcalfe demand economies of scale supply convex growth acquisitions Instagram WhatsApp",
html: `
<p><strong>Network effects</strong> = the impact that the number of users of a platform has on the value created for each user. <em>Positive</em> network effects: a large, well-managed community produces significant value for each user. <em>Negative</em> network effects: growth of a poorly managed community reduces the value for each user.</p>
<p>The lecture opened with big acquisitions (Instagram $1bn 2012, Waze $1.3bn, Skype $8.5bn, WhatsApp $19bn, LinkedIn $26.2bn, Twitter $44bn). The answer to “why so much?” is network effects: Instagram was not worth $1bn for its 13 employees, nor WhatsApp $19bn for its 50.</p>
<h3>Supply vs. demand economies of scale</h3>
<p>20th-century giants grew on <strong>supply economies of scale</strong> (production efficiencies lower unit cost: Bessemer steel, BASF, GE, Ford). 21st-century giants grow on <strong>demand economies of scale</strong> (efficiencies in social networks, demand aggregation, app development make bigger networks more valuable to users). Term popularized by Shapiro & Varian.</p>
<h3>Metcalfe's law</h3>
<p>The value of a telephone network grows <em>non-linearly</em> with users: 2 phones = 1 connection, 4 = 6, 5 = 10, 12 = 66, 100 = 4,950 (n(n−1)/2). This is <strong>convex growth</strong>; in reverse it explains <strong>convex collapse</strong> (BlackBerry in the 2000s).</p>
<div class="key">Uber valuation debate (2014): Damodaran valued Uber at $5.9bn with classic finance tools; VC Bill Gurley argued he ignored network effects: the San Francisco taxi market had already tripled. David Sacks' napkin sketch shows the virtuous cycle: more drivers → less wait time → more riders → lower downtime → lower prices → more demand.</div>
<h3>Network effects vs. other growth tools</h3>
<ul><li><strong>Price effects</strong> (discounts, “free”) are evanescent; only 1–2% of freemium users convert. Dot-com failures (eToys, Webvan, FreePC) relied on price and brand effects.</li>
<li><strong>Brand effects</strong> are stickier but expensive and hard to sustain (19 Super Bowl advertisers in 2000; 8 no longer existed a decade later).</li>
<li><strong>Virality</strong> attracts people <em>off</em> the platform to join; network effects keep value growing <em>on</em> the platform.</li></ul>
<p>Only network effects create the virtuous cycle that leads to <strong>lock-in</strong>.</p>`},

{ id: "two-sided", topic: "net", title: "Two-sided network effects and the four kinds", src: "Lecture 2 · Parker et al. ch. 2", tags: "two sided cross-side same-side subsidies ladies night four kinds OkCupid Chatroulette curation data-driven network effects",
html: `
<p>Metcalfe describes users attracting users on the <em>same</em> side. Platforms have two markets and <strong>two-sided network effects</strong>: riders attract drivers and drivers attract riders (Uber), freelancers attract job listings and vice versa (Upwork), developers attract users (Android).</p>
<p>This creates the <strong>chicken-or-egg (catch-22) problem</strong> and often leads to <strong>subsidies</strong>: Uber's $30 coupons, PayPal's $10 sign-up bonus. Non-tech example: the nightclub's <strong>Ladies' Night</strong>, where discounted drinks for women draw men who pay full price. It can make sense to accept losses in market A, even permanently, if they are outweighed by profits in market B.</p>
<h3>The four kinds of network effects</h3>
<div class="tablewrap"><table><tr><th></th><th>Positive</th><th>Negative</th></tr>
<tr><td><b>Same-side</b> (consumers↔consumers, producers↔producers)</td><td>Bell telephone; Xbox MMOG gamers; Adobe PDF users</td><td>Too many competing suppliers on Covisint make matching hard; Chatroulette</td></tr>
<tr><td><b>Cross-side</b> (one side ↔ other side)</td><td>Visa: more merchants help cardholders and vice versa; Windows app developers and users; app stores</td><td>Too many DRM regimes for consumers; ad clutter; OkCupid bombardment; too many Uber drivers per rider</td></tr></table></div>
<p>Cross-side effects are often <strong>asymmetric</strong>: on OkCupid women attract men more than men attract women; on Uber a driver matters more than a rider; on Twitter and Quora a minority produces.</p>
<h3>Negative network effects and curation</h3>
<p>Growth can make it harder to find the best match. The cure: balance frictionless entry with <strong>curation</strong> (filtering and controlling access, activities and connections). OkCupid matched interests and then attractiveness levels. Chatroulette grew from 20 to 1.5m users in six months, then collapsed (the “Naked Hairy Men” problem) until it added filters. As data grows, curation improves: <strong>data-driven network effects</strong>.</p>
<div class="key">Network effects turn firms inside out: management of externalities becomes key, HR moves from employees to crowds, innovation from in-house R&D to open innovation. Deloitte: network orchestrators earn a market multiplier of 8.2 vs 4.8 for technology creators, 2.6 for service providers and 2.0 for asset builders.</div>`},

{ id: "scaling", topic: "net", title: "Scaling network effects: frictionless entry and side switching", src: "Lecture 2 · Parker et al. ch. 2", tags: "Yahoo Google Threadless frictionless entry side switching proportional growth",
html: `
<p>Network effects depend on network size, so effective platforms must be able to <strong>scale both sides</strong> quickly.</p>
<ul><li><strong>Yahoo vs. Google.</strong> Yahoo's human-edited hierarchical database didn't scale (submitted pages took weeks). Google's PageRank algorithm harnessed the work of web-page producers (links) to serve searchers: algorithms scale better than employees, and the crowd controls the action. Search share: 2000 Yahoo/MS ~50% vs Google ~0%; 2013 Google ~85%. The lecture adds that 2025 brings another paradigm shift (generative AI search).</li>
<li><strong>Threadless.</strong> A nearly <em>frictionless</em> model: weekly design contests, no hired artists, no marketing (designers bring votes), no forecasting (votes reveal demand), outsourced production with limited inventory. It began as a side project to show web-consulting skills.</li>
<li><strong>Proportional growth.</strong> Both sides must grow in proportion: one Uber driver serves about three riders per hour. If one side becomes too large, subsidizing the other side becomes good business.</li>
<li><strong>Side switching.</strong> Users move to the other side: riders become drivers, guests become hosts.</li></ul>
<div class="key">Network effects can be fostered by: <strong>a scalable business model, frictionless entry, and side switching</strong>.</div>
<p><strong>Frictionless entry</strong> = the ability of users to quickly and easily join a platform and begin participating in value creation.</p>`},

{ id: "architecture", topic: "net", title: "Platform architecture: core interaction, pull–facilitate–match (Parker ch. 3)", src: "Parker et al. (2016), ch. 3 ‘Architecture’", tags: "core interaction participants value unit filter pull facilitate match end-to-end principle modularity API anti-design feedback loop",
html: `
<p>In every exchange, producer and consumer exchange three things: <strong>information</strong> (always through the platform), <strong>goods or services</strong> (on or off the platform), and <strong>currency</strong> (money, or attention, reputation, influence). A platform's ability to monetize depends on which currency flows it can capture (eBay's ~10% cut vs. Facebook selling attention to advertisers).</p>
<h3>The core interaction: the “why” of design</h3>
<div class="formula">Participants + Value unit + Filter → Core interaction</div>
<ul><li><strong>Participants</strong>: producer and consumer; the same user can switch roles.</li>
<li><strong>Value unit</strong>: what producers create (a listing, a video, a tweet, a profile). It is the most crucial and hardest element to control, because platforms are “information factories” with no control over inventory (Fasal farmers in India needed a “feet on street” team to collect data).</li>
<li><strong>Filter</strong>: an algorithmic tool that delivers relevant value units to the right consumers (search query, news-feed algorithm).</li></ul>
<p>Design starts with <em>one</em> core interaction (LinkedIn: professionals connecting with professionals). Later, platforms layer new interactions by changing the value unit, adding a new user category (recruiters, advertisers), allowing new kinds of value units (UberPool) or curating a user group into a new category (LinkedIn “thought leaders”).</p>
<h3>Pull, facilitate, match: the “how”</h3>
<ul><li><strong>Pull</strong>: attract and keep users. Solve chicken-or-egg; use <em>feedback loops</em>: single-user (recommendations learn your preferences) and multi-user (Facebook news feed: producers' updates go to consumers whose likes go back to producers).</li>
<li><strong>Facilitate</strong>: tools and rules that make interaction easy (Instagram's three clicks), sometimes <em>raising</em> barriers to build trust (Sittercity screens babysitters).</li>
<li><strong>Match</strong>: use data to connect the right users (LinkedIn's profile progress bar is a data-acquisition strategy).</li></ul>
<p>A platform can survive while strong in one function: Craigslist wins on pull despite weak facilitate and match. YouTube is strong at pull and match; Vimeo differentiates on facilitate (hosting, HD tools).</p>
<h3>Architecture principles</h3>
<p><strong>End-to-end principle</strong>: application-specific features belong at the edges, not in the core (Windows Vista bloat failed; Apple's Mac OS X kept a separate “Classic” environment). Baldwin & Clark: a stable, low-variety core beneath a high-variety periphery. <strong>Modularity</strong> through well-defined interfaces and APIs lets outsiders innovate (PC components; Intel's PCI and USB). <strong>Anti-design</strong>: leave room for serendipity (the Twitter hashtag came from a user).</p>`},

{ id: "outside-innov", topic: "net", title: "Managing outside innovation: communities vs. markets (Boudreau & Lakhani 2009)", src: "Boudreau & Lakhani (2009), MIT Sloan Management Review", tags: "collaborative communities competitive markets intrinsic extrinsic motivation integrator product two-sided platform InnoCentive Linux TopCoder",
html: `
<p>Open innovation = relying on outsiders both as a source of ideas and as a way to commercialize them. The key choice: organize external innovators as a <strong>collaborative community</strong> or a <strong>competitive market</strong>? It depends on three issues.</p>
<div class="tablewrap"><table><tr><th>Issue</th><th>Collaborative community</th><th>Competitive market</th></tr>
<tr><td>1. Type of innovation</td><td>Problem needs <b>cumulative knowledge</b>, building on past advances (Linux, Semiconductor Research Corp., Firefox, Apache)</td><td>Problem best solved by <b>broad experimentation</b> across approaches (InnoCentive; video-game developers)</td></tr>
<tr><td>2. Motivation</td><td>Mostly <b>intrinsic</b>: fun, learning, identity, autonomy, intellectual challenge, reciprocity, being part of a cause</td><td>Mostly <b>extrinsic</b>: money, career signalling, reputation</td></tr>
<tr><td>Governance</td><td>Informal, social norms, sharing</td><td>Formal, arm's-length contracts, competition</td></tr>
<tr><td>Value capture by owner</td><td>Indirectly, through higher demand for the platform</td><td>Directly, through contracting and licensing</td></tr></table></div>
<p><strong>3. Business model: who sells to whom?</strong></p>
<ul><li><strong>Integrator platform</strong>: the platform sits between innovators and customers and sells to customers (Apple App Store, takes 30%) → <em>highest control</em>.</li>
<li><strong>Product platform</strong>: innovators build on a foundation technology and sell to customers themselves (Gore-Tex licensees, “Intel Inside”).</li>
<li><strong>Two-sided platform</strong>: innovators and customers transact directly while affiliating with the owner (Facebook widgets, eBay) → <em>highest autonomy</em> for outsiders.</li></ul>
<p>Communities have the clearest problems with high-control platforms (fear of expropriation); credible commitments (moving IP into the public domain, reputation for fairness) can help. Advanced options: <strong>mixed</strong> (Microsoft SharePoint: market for some segments, community for others) and <strong>nested</strong> (TopCoder: compete for prizes, then collaborate and teach each other). Strategies evolve: Apple turned the iPhone “jailbreaker” community into a controlled marketplace.</p>
<div class="key">InnoCentive: ~1/3 of 700+ problems solved, often by solvers from <em>unrelated</em> fields (an oil-and-water problem solved by a nanotechnologist). Android: a market for hardware, a community for the software.</div>`},

/* ============================ L3 ============================ */
{ id: "funding", topic: "fund", title: "Sources and stages of entrepreneurial funding", src: "Lecture 3 slides", tags: "bootstrapping friends family fools business angels venture capital seed dilution funding steps market crowdfunding",
html: `
<p><strong>Traditional sources of entrepreneurial finance</strong> split into <em>internal</em> (personal capital, family & friends, working capital/retained profits) and <em>external</em> (debt finance, public finance, and equity finance, which can be public or private).</p>
<h3>Key concepts</h3>
<ul><li><strong>Bootstrapping</strong>: savings, maxing out credit cards, winning pitch competitions.</li>
<li><strong>Friends, family (and fools)</strong>: money from “Mom and Pop”.</li>
<li><strong>Angel investment</strong>: one wealthy investor puts in their own money.</li>
<li><strong>Venture capital</strong>: professionals invest money from a pool of limited partners.</li>
<li><strong>Crowdfunding</strong>: crowds of investors contribute to your project.</li></ul>
<h3>The funding steps (by company stage)</h3>
<div class="tablewrap"><table><tr><th>Stage</th><th>Typical source</th><th class="n">Typical amount</th></tr>
<tr><td>R&D / birth</td><td>BP competitions, loans/subsidies, incubators</td><td class="n">€20–150k</td></tr>
<tr><td>Birth / survival</td><td>Business angels</td><td class="n">€50–500k</td></tr>
<tr><td>Survival / first successes</td><td>Seed capital</td><td class="n">€100k–3M</td></tr>
<tr><td>First successes / growth</td><td>Venture capital</td><td class="n">€2–10M</td></tr>
<tr><td>Growth / maturity</td><td>Capital development, the market</td><td class="n">€5M+</td></tr></table></div>
<h3>Business angels</h3>
<p>Managers and professionals investing €5k–200k per year; entrepreneurs who sold their company (€50k–500k); members of family offices. They bring more than money: <strong>skills, experience, social networks and time</strong> (what the entrepreneur lacks most). NL (2026): 15 BA networks, ~7,000 angels; in 2025 128 new early-stage companies funded, €48m invested; 75% decline in pre-seed and first rounds; 65% of capital in deeptech & ICT (AI, quantum, chips = 41%).</p>
<h3>Venture capitalists and dilution</h3>
<p>VCs are professional firms managing pooled capital from large organizations (pension funds, endowments). They step in <em>after</em> angels, after proof of concept, invest millions to scale, take equity and a <strong>board seat</strong>, and steer toward an <strong>exit</strong> (acquisition or IPO). Funding rounds dilute founders; the principle: <em>growth in value compensates for the loss in % share</em> and preserves the first investors' interests. NL 2025: 11,301 active tech companies, €2.64bn VC deployed; deals down 14.5% (bigger tickets, fewer, later-stage deals); 70% of VC in North and South Holland; deeptech is 12% of firms but attracts 41% of VC; AI 27% of VC; 75% of capital in Dutch AI startups is foreign. Dutch scale-up ratio (raising €10m+) is 21.6% vs. EU 24.1% and US 52.2%.</p>
<h3>The market</h3>
<p>Selling your product is the best way to fund your business, because it is a strong illustration of <strong>validation</strong>. Top reasons startups fail (CB Insights, 101 post-mortems): no market need (42%), ran out of cash (29%), not the right team (23%), outcompeted (19%), pricing/cost issues (18%), user-unfriendly product (17%), product without a business model (17%).</p>`},

{ id: "crowdfunding", topic: "fund", title: "Crowdfunding: four types", src: "Lecture 3 slides", tags: "crowdfunding donation reward lending P2P equity Kickstarter Indiegogo GoFundMe Crowdcube Mintos",
html: `
<p>Not a new process (the Statue of Liberty's pedestal was crowdfunded through Pulitzer's newspaper), but rejuvenated by Web 2.0 and growing. Definition (Lambert & Schwienbacher 2010): <em>“an open call, essentially through the Internet, for the provision of financial resources either in the form of donation or in exchange for some form of reward and/or voting rights in order to support initiatives for specific purposes.”</em> The logic: a little money × a lot of people.</p>
<p>The four types, ranked by <strong>simplicity in legal complexity and information asymmetry</strong>:</p>
<div class="tablewrap"><table><tr><th>Type</th><th>What funders get</th><th>Examples</th></tr>
<tr><td>Donation</td><td>Nothing but the feeling of supporting a project they believe in</td><td>GoFundMe, Indiegogo</td></tr>
<tr><td>Reward</td><td>A gift; evolved into <b>pre-sales / pre-ordering</b>, funders expect the product</td><td>Kickstarter, Indiegogo</td></tr>
<tr><td>Lending (P2P)</td><td>Interest on loans, like a bank. The <b>oldest</b> type</td><td>Unilend, Mintos</td></tr>
<tr><td>Equity</td><td>Shares; funders act as mini business angels or VCs</td><td>Crowdcube, Anaxago</td></tr></table></div>
<p>Market size (2026): P2P $222–327bn (largest), equity ~$15bn, donation $12–14bn, reward $8–10bn.</p>
<h3>Crowdfunding and the business plan</h3>
<p>Tailor the plan to the type: in <strong>reward</strong> crowdfunding, funders focus on the <em>product</em> (assurance they will get it); in <strong>P2P lending</strong>, funders focus on the ability to repay, so on the <em>team and finance</em> slides.</p>
<h3>Funding & support at the UvA</h3>
<p>Tulip Ventures (student association); Enactus Amsterdam (impact projects); Minor & Master Entrepreneurship; Amsterdam Academic Angel Fund (3A fund): early-stage convertible loan, €10k; Amsterdam Student Investment Fund (ASIF): more developed, €50–100k; UvA Ventures (Amsterdam Academic Ventures): €100k+.</p>`},

{ id: "incubators", topic: "fund", title: "Incubators vs. accelerators (Leitão et al. 2022)", src: "Lecture 3 · Leitão, Pereira & Gonçalves (2022)", tags: "incubator accelerator Y Combinator Techstars taxonomy human social organizational capital open innovation",
html: `
<p><strong>Business incubators (BI)</strong>: organizations that support new businesses for a period of time through <em>tangible</em> assets (space, administrative services) and <em>intangible</em> assets (knowledge, network access). They appeared in the late 1950s and drive job creation and regional development.</p>
<p><strong>Business accelerators (BA)</strong>: organizations that give nascent ventures a jumpstart with resources, <em>seed capital</em> and sometimes workspace; actively help build products, find customers and secure capital and employees. They are <strong>cohort-based, fixed-duration</strong> programmes with education and mentoring, ending in a final event (demo day). Five original features: (1) standardized seed-funding packages, (2) cohort entry and exit, (3) structured capacity-development programme, (4) mentoring, (5) physical co-location. First accelerator: <strong>Y Combinator (2005)</strong>; Techstars 2007 (Dropbox, Reddit and Airbnb went through accelerators).</p>
<div class="tablewrap"><table><tr><th></th><th>Incubator</th><th>Accelerator</th></tr>
<tr><td>Space</td><td>Provides space to grow</td><td>None, or limited desk/co-working space</td></tr>
<tr><td>Funding</td><td>No</td><td>Yes (seed funding for equity)</td></tr>
<tr><td>Duration</td><td>No fixed timeframe, can take years</td><td>Usually 3–6 months</td></tr>
<tr><td>Focus</td><td>Ongoing mentorship</td><td>Rapid growth; operational and organizational challenges</td></tr></table></div>
<p>Amsterdam examples: Makerspace UvA, The Nursery (Startup Village), DLab VU, Impact Hub Amsterdam, Rockstart, Antler.</p>
<h3>Leitão et al.: the systematic literature review</h3>
<p>1,614 publications from Web of Science (2005–2021). Five clusters: human capital; corporate social performance/CSR (social capital); absorptive capacity (organizational capital); business networks and alliances (social capital); incubators and university technology transfer (organizational capital). The main contribution is a <strong>taxonomy of BI and BA based on three pillars: human capital</strong> (staff and their expertise), <strong>social capital</strong> (networks, corporate social performance) and <strong>organizational capital</strong> (physical structure: labs, research facilities, conference rooms). BI and BA act as <strong>facilitators of open innovation</strong> by providing space, knowledge, networking, training and mentorship, and the <em>credibility</em> of association with a university. Specialized incubators help when resources and staff are specialized, but are vulnerable if their sector suffers.</p>`},

{ id: "ecosystem", topic: "fund", title: "The Amsterdam startup ecosystem (guest talk Erik Boer)", src: "Guest presentation Erik Boer · I amsterdam ‘Funding your startup’", tags: "Isenberg ecosystem domains Amsterdam unicorns Adyen Booking Mollie TicketSwap I amsterdam funding",
html: `
<p>Erik Boer (Amsterdam Center for Entrepreneurship, co-founder Startup Village) placed Amsterdam in its history: the 17th-century Golden Age, a second golden age around 1900 (founders like Gerard Philips, Albert Plesman, Gerard Heineken, Anton Jurgens), and a possible third one now.</p>
<p><strong>Isenberg (Babson College): six domains of an entrepreneurial ecosystem</strong>: (1) culture, (2) enabling policies and leadership, (3) availability of appropriate finance, (4) quality human capital, (5) venture-friendly markets for products, (6) institutional supports.</p>
<p><strong>Amsterdam key figures</strong>: about 1,700 tracked startups, about 25 unicorns, $1.6bn VC in 2025. Leading unicorns: Adyen, Booking, Mollie, MessageBird; notable scale-ups: Picnic, Cradle, DataSnipper, Framer.</p>
<div class="tablewrap"><table><tr><th>Strengths</th><th>Weaknesses</th></tr><tr><td>Top-5 European hub · international talent · strong in fintech, AI and sustainability · dense ecosystem</td><td>Scale-up gap · reliance on foreign capital · deeptech talent shortage · fragmentation</td></tr></table></div>
<p>The student route: <strong>Explore → Build → Fund → Grow</strong> without leaving the university ecosystem (UvA Founder Space, Startup Village, ASIF, Enactus, TULIP, The Nursery, XLERATE…). Opportunities sit at the intersection of a real problem and a new capability; treat the city as a test lab. Student-founded examples: <strong>TicketSwap</strong> (2012, safe second-hand tickets) and <strong>United Wardrobe</strong> (2013, second-hand fashion; acquired by Vinted in 2020).</p>
<h3>I amsterdam: “Funding your startup” (mandatory web page)</h3>
<ul><li><strong>Angel investors</strong> (informal or seed investors) usually invest €25k–100k.</li>
<li><strong>Venture capital</strong> can be millions; NL distinguishes seed capital funds, corporate venturing funds and regular VC funds.</li>
<li><strong>Grants and subsidies</strong> (RVO.nl; Startup Box tool to check eligibility); <strong>crowdfunding</strong> (lists at the KvK); <strong>bank loans</strong> (ABN AMRO, ING, Rabobank, with yearly quotas; Rabo Innovation Loan); <strong>invoice factoring</strong> (Finqle, Factris) pays out invoices within a day.</li>
<li>Platforms and funders: Amsterdam Startup Map (upload your pitch deck), Money Meets Ideas (Rabobank, ~20 events/yr, €100k–1m asks), Invest-NL, PIM, ROM InWest, Arches Capital, Leapfunder, Amsterdam Academic Angel Fund (3xA, for UvA/VU students and recent graduates).</li></ul>`},

/* ============================ L4 ============================ */
{ id: "launch", topic: "launch", title: "Launch: pull marketing and the eight chicken-or-egg strategies", src: "Lecture 4 · Parker et al. ch. 5", tags: "chicken egg follow the rabbit piggyback seeding marquee single-side producer evangelism big bang micromarket PayPal push pull",
html: `
<p>The chicken-or-egg problem is the toughest problem of a two-sided business: which side comes first, and how do you attract producers without consumers? <strong>PayPal</strong> solved it with frictionless sign-up (email + card), $10 sign-up and $10 referral bonuses, a focus on <em>active use</em> rather than sign-ups, and piggybacking on eBay (even using bots that bought on eBay and insisted on paying with PayPal). Users grew from 100,000 to 1m in three months; eBay bought PayPal for $1.4bn in 2002.</p>
<h3>Platform marketing: pull beats push</h3>
<p>Pipelines rely on <strong>push</strong> (awareness through owned or paid channels; being heard was enough). Platforms rely on <strong>pull</strong>: the offering is so valuable it draws people in (simplicity, referral programmes). Marketing is “baked into the platform”, and <em>commitment and active use</em>, not sign-ups, show adoption. Push still plays a role: Instagram featured as #1 app by Apple, Twitter's PR event, BMW's DriveNow. Incumbents' advantages (customers, resources) can breed complacency; startups can win.</p>
<p>Competitors may need different launches: YouTube focused on producers (contests, embeddable player, Myspace bands); Megaupload, a late mover, seeded consumer content (pirated, adult) and got sued; Vimeo went producer-first with better HD tools.</p>
<h3>Eight strategies</h3>
<div class="tablewrap"><table><tr><th>#</th><th>Strategy</th><th>Idea</th><th>Examples</th></tr>
<tr><td>1</td><td><b>Follow the rabbit</b></td><td>Start as a non-platform (pipeline) business, cultivate one side, then open the other</td><td>Amazon → Marketplace; Intel & NTT (wifi); Huffington Post</td></tr>
<tr><td>2</td><td><b>Piggyback</b></td><td>Connect with an existing user base from another platform</td><td>PayPal on eBay; YouTube on Myspace; Justdial on yellow pages; scraping Craigslist</td></tr>
<tr><td>3</td><td><b>Seeding</b></td><td>Create value units for one side yourself (platform as first producer), or borrow/simulate them</td><td>Google's Android $5m developer prizes; Adobe PDF tax forms; Reddit fake profiles; Quora editors; dating sites</td></tr>
<tr><td>4</td><td><b>Marquee</b></td><td>Incentivize a key user group whose presence makes or breaks the platform</td><td>Console makers courting Electronic Arts; Microsoft buying Bungie (Halo); Swiss Post giving iPads</td></tr>
<tr><td>5</td><td><b>Single-side</b></td><td>Build a product useful for one side, then add the second side</td><td>OpenTable reservation software; redBus; Delicious bookmarks</td></tr>
<tr><td>6</td><td><b>Producer evangelism</b></td><td>Attract producers who bring their own customers</td><td>Kickstarter, Indiegogo, Skillshare, Udemy, Clarity, Mercateo</td></tr>
<tr><td>7</td><td><b>Big-bang adoption</b></td><td>Push marketing creates simultaneous on-boarding</td><td>Twitter at SXSW 2007 (20k→60k tweets/day); Foursquare SXSW 2009; Tinder at a USC frat party; Getir/Flink/Gorillas/Zapp on Amsterdam trams</td></tr>
<tr><td>8</td><td><b>Micromarket</b></td><td>Start in a tiny market whose members already interact</td><td>Facebook at Harvard; Stack Overflow (programming topics)</td></tr></table></div>
<div class="trap">Seeding vs. follow-the-rabbit: with seeding, the business model is two-sided <em>from the start</em>; with follow-the-rabbit you begin as a pipeline and open up later.</div>
<p>Three underlying techniques: staging value creation, designing for one set of users, and simultaneous on-boarding.</p>
<h3>Viral growth</h3>
<p>A pull-based, user-to-user process. Four elements: <strong>sender</strong> (user shares their own creation), <strong>value unit</strong> (must be spreadable), <strong>external network</strong> (e.g. Facebook for Instagram; Craigslist for Airbnb; don't spam), <strong>recipient</strong> (the platform has limited control over value units, but can nudge with editing tools and add a call to action like Hotmail's “Get your free email”). Instagram reached 100m active users in under two years with no marketing manager. Dropbox gives free storage to sender and recipient (an inorganic incentive that doesn't drain cash). BeReal shows viral growth gone wrong: 920k users (Jan 2022) → 73.5m (Aug 2022) → ~18m (2024).</p>`},

{ id: "monetization", topic: "launch", title: "Monetization: capturing value without killing network effects", src: "Lecture 4 · Parker et al. ch. 6", tags: "monetization transaction fee access enhanced access enhanced curation leakage whom to charge Zvents Meetup free to fee",
html: `
<p>Charging participants destroys value: charging for <em>access</em> keeps people away, for <em>usage</em> reduces frequency, for <em>production</em> reduces value creation, for <em>consumption</em> reduces consumption. Free and subsidized approaches make monetization even harder. The “Ad World” story: don't charge for listings; charge on deal completion, or sell agencies a post-mortem service on lost bids.</p>
<h3>Where does the excess value lie? (four sources)</h3>
<ul><li>For consumers: <strong>access to value created</strong> on the platform (YouTube videos, Android apps).</li>
<li>For producers: <strong>access to a community or market</strong> (Airbnb hosts reach travellers).</li>
<li>For both: <strong>access to tools and services that facilitate interaction</strong> (Kickstarter, eBay + PayPal).</li>
<li>For both: <strong>access to curation</strong> that enhances interaction quality.</li></ul>
<p>Identify which category is the source of excess value. Free-pricing logic must keep control of the monetized value (Netscape gave away browsers but couldn't monetize servers).</p>
<h3>Network effects are not everything</h3>
<p><strong>Zvents</strong>: 14m visitors/month but organizers wouldn't pay, because users expected <em>completeness</em> of listings, so Zvents had no leverage. <strong>Meetup</strong>: charging organizers $19/month cut activity by 95%, but quality rose (half of meetups successful vs. 1–2% before): negative network effects can be useful when combined with curation. What matters is how many people <em>stay</em> on the platform; prevent leakage.</p>
<h3>Five monetization tools</h3>
<ol><li><strong>Transaction fees</strong> (percentage or fixed). Keep network growth intact, but risk <em>off-platforming</em>/leakage. Fiverr, Groupon and Airbnb withhold contact details until payment; Upwork and Clarity add tools (monitoring, invoicing, per-minute billing) to keep transactions on the platform.</li>
<li><strong>Charging for access</strong>: third-party producers pay to reach a community (Dribbble job board, LinkedIn recruiters). Works only if the new content <em>adds</em> value for users.</li>
<li><strong>Charging for enhanced access</strong>: when the platform can't own the transaction: enhanced access to consumers (MTurk), premium placement (Google AdWords, Yelp), lowering barriers or giving extra information (LinkedIn, dating sites). Keep paid and organic content distinguishable; don't reduce access users were used to (Facebook brand reach).</li>
<li><strong>Charging for enhanced curation</strong>: guaranteed quality justifies subscriptions (Sittercity, Skillshare's shift from per-course fees to subscriptions). Risk of negative network effects (asmallworld.net).</li>
<li><strong>Ban leakage activities</strong> (lecture addition): kick off sellers who undercut platform prices (Booking's mystery shopping). Needs monitoring and may be seen as anticompetitive.</li></ol>
<h3>Whom to charge?</h3>
<ul><li><strong>All users</strong>: usually kills network effects (exceptions: exclusive clubs like Carbon NYC).</li>
<li><strong>Subsidize one side, charge the other</strong>: Ladies' Night on dating apps.</li>
<li><strong>Charge most users, subsidize stars</strong>: stars signal quality (the marquee logic; malls give Target cheap leases; Xbox had to give EA special terms).</li>
<li><strong>Subsidize price-sensitive users, charge those willing to pay</strong>: Denver (glut: owners paid brokers) vs. Boston (scarcity: tenants paid).</li></ul>
<p>Alibaba couldn't track transactions, charged membership fees with commission-driven sales agents, and today earns through advertising.</p>
<h3>When to charge?</h3>
<p>Golden rule: <strong>“Users first, monetization later.”</strong> (Haier: “you never take first money.”) Myspace died partly from rushed monetization. When moving from free to fee: avoid charging for value that used to be free, avoid reducing access users are used to, create <em>new</em> value that justifies the charge, and design for monetization control from day one.</p>`},

{ id: "zhu", topic: "launch", title: "Why some platforms thrive and others don't (Zhu & Iansiti 2019)", src: "Zhu & Iansiti (2019), Harvard Business Review", tags: "network effects strength clustering disintermediation multi-homing network bridging Didi Uber Airbnb Homejoy Taobao ZBJ Alipay",
html: `
<p>Didi became the world's largest ride-hailing firm, yet Meituan (8% commission vs. Didi's 20%) and others attacked it. Scale is no guarantee: the low cost of adding users helps challengers too. A platform's sustainability depends on <strong>five properties of its network</strong>:</p>
<ol>
<li><strong>Strength of network effects.</strong> Facebook's are strong; video consoles' are weak (hit-driven, a few good games suffice, so Xbox could steal share from PlayStation 2). Strength changes over time: Windows weakened when apps moved to the web. Firms can design in more effects: Amazon reviews (same-side), Marketplace (cross-side), recommendations (<em>learning effects</em>, which work like same-side effects).</li>
<li><strong>Network clustering.</strong> The more a network is fragmented into isolated <em>local clusters</em>, the more vulnerable it is. Uber riders in Boston care about Boston drivers only, so local rivals (Juno, Via) can reach critical mass. Airbnb travellers care about hosts in <em>other</em> cities: essentially one global cluster, much harder to attack. Strengthen networks by building global clusters on local ones (Craigslist housing and jobs; FarmVille; celebrity accounts on WeChat).</li>
<li><strong>Risk of disintermediation.</strong> Members bypass the hub once they've found a match (Homejoy cleaners, shut 2015). Defences: terms of service, hiding contact details (Airbnb), adding value (insurance, escrow) — but better trust can <em>increase</em> disintermediation (freelance study). Alternatives: charge for lead generation (Thumbtack), don't charge transactions at all and earn from ads and storefront software (Taobao beat eBay's EachNet, which charged fees and blocked buyer–seller chat), or offer complementary services (ZBJ: trademark registration, $70m+/yr).</li>
<li><strong>Vulnerability to multi-homing</strong>: users or providers using several platforms at once (drivers and riders on both Uber and Lyft; restaurants on several delivery apps). Pervasive multi-homing on both sides makes profit very hard. Reduce it with exclusivity bonuses, consoles' exclusive games and high device prices, Amazon Prime and fulfilment fees. Caution: Groupon hid exact deal counts to stop LivingSocial poaching merchants; merchant multi-homing fell but <em>consumer</em> multi-homing rose. Reducing multi-homing on one side can increase it on the other.</li>
<li><strong>Network bridging.</strong> Connect multiple networks to build synergies: Alibaba linked Alipay with Taobao and Tmall, then Ant Financial's credit ratings and loans. Amazon moved into entertainment and electronics.</li></ol>
<div class="key">Verdict on Didi and Uber: many local clusters, rampant multi-homing, and weak bridging (food delivery, snack vending) → “network properties are trumping platform scale.”</div>`},

/* ============================ L5 ============================ */
{ id: "agrawal", topic: "ai", title: "AI makes prediction cheap; judgment becomes valuable (Agrawal, Gans & Goldfarb 2017)", src: "Agrawal et al. (2017), HBR", tags: "prediction judgment reward function engineering credit card fraud CoastRunners reinforcement learning",
html: `
<p>The AI boom is best understood as a <strong>drop in the cost of prediction</strong>. Prediction = using data you have to generate data you don't have (not just about the future: detecting a face in an image is prediction). As prediction gets cheaper, machines will do more of it.</p>
<p>But prediction is only one input into a decision; the other is <strong>judgment</strong>: <em>determining the reward (payoff) of a particular action in a particular environment</em>, i.e. weighing the costs and benefits of outcomes. Example: a credit-card network uses AI to predict fraud, but someone must decide how bad it is to decline a legitimate transaction vs. to allow a fraudulent one, and that may differ for high-net-worth clients. No AI can make that call.</p>
<p><strong>Machine prediction substitutes for human prediction but complements human judgment.</strong> Economic theory says AI will raise the value of good judgment, and cheaper prediction creates more decisions, so more demand for judgment.</p>
<h3>Reward function engineering</h3>
<p>Reinforcement learning maximizes a programmed reward (AlphaGo). But goals can be gamed: the CoastRunners boat-race AI scored points by circling instead of finishing. In most applications the goal given to the AI differs from the organization's true, hard-to-measure objective. <strong>Reward Function Engineering</strong> = determining the rewards to various actions given the AI's predictions. Sometimes rewards are hard-coded in advance (self-driving cars act instantly); sometimes there are too many possible predictions, so a human waits for the prediction and then judges the payoff.</p>
<div class="key">Not the same as putting a human in the loop to help train the AI. Humans already do reward function engineering for people (parents, mentors, managers); for machines it must now be made explicit.</div>`},

{ id: "cromwell", topic: "ai", title: "Where ChatGPT creates value: emergent thinking (Cromwell et al. 2023)", src: "Cromwell, Harvey, Haase & Gardner (2023), HBR", tags: "emergent thinking design thinking pathways value proposition Instacart Notion Khan Academy Khanmigo Tome analogy",
html: `
<p>ChatGPT reached 1m users in 4 days and 100m in 2 months. Emerging technology poses a different challenge than classic innovation: <strong>there is no clear problem to solve</strong>. That calls for <strong>emergent thinking</strong>: generating ideas for innovation <em>without fully understanding the problem</em>. Start by understanding a technology's core functions, then explore how they could solve problems in different domains. Other hallmarks: evaluating ideas without known success criteria, improvising, changing target outcomes. This runs against <strong>design thinking</strong>, which first identifies a clear user problem.</p>
<h3>Three pathways</h3>
<div class="tablewrap"><table><tr><th>Pathway</th><th>What it means</th><th>Example</th><th>How</th></tr>
<tr><td>1. Exploit a current value proposition</td><td>Use ChatGPT to strengthen what you already offer</td><td>Instacart plugin turns recipe ideas into an order; Notion AI on the spacebar</td><td>Use the tool openly, without aiming at a specific problem; let connections emerge</td></tr>
<tr><td>2. Expand the value proposition</td><td>Solve new, complementary customer problems</td><td>Khan Academy's <b>Khanmigo</b> tutor for students, plus help for teachers</td><td>Break the value proposition into <b>goals, context and target demographic</b>, then expand each; brainstorm the <em>problem</em>, not the solution</td></tr>
<tr><td>3. Explore a new value proposition</td><td>Something customers don't know they need yet (“people don't know what they want until you show it to them”, Jobs)</td><td>OpenAI releasing ChatGPT; <b>Tome</b> as an “AI storytelling partner”</td><td>Converge using a clear, coherent <b>analogy</b> that summarizes the core value proposition</td></tr></table></div>
<p>Pathway 3 has the greatest uncertainty and needs the most caution. Working with trusted collaborators helps teams navigate ambiguity.</p>`},

{ id: "ml", topic: "ai", title: "Understanding machine learning (Hurwitz & Kirsch ch. 1)", src: "Hurwitz & Kirsch (2018), Machine Learning for Dummies, IBM Ltd. Ed., ch. 1", tags: "machine learning big data four Vs supervised unsupervised reinforcement deep learning neural network overfitting descriptive predictive data mining NLP",
html: `
<p><strong>Machine learning</strong> is a form of AI that enables a system to <em>learn from data rather than through explicit programming</em>. Algorithms iteratively learn from data to improve, describe data and predict outcomes. A <strong>model</strong> is the output of training an algorithm on data. <em>Online</em> models keep adapting to new data; <em>offline</em> models don't change once deployed. Arthur Samuel (IBM) coined the term with a checkers program (1959).</p>
<p><strong>Six enablers</strong> of today's ML boom: more powerful processors; cheaper storage; distributed computing; more commercial data sets via cloud/APIs; open-source algorithms; more consumable visualization.</p>
<p><strong>Big data's four Vs:</strong> <em>Volume, Velocity, Variety, Veracity</em>. Big data improves accuracy but is not required (a few thousand data points can work). Data must be trusted and cleaned (words turned into numbers, missing data handled). <strong>Hybrid cloud</strong> = on-premises + public cloud services working together.</p>
<p><strong>Analytics:</strong> <em>descriptive</em> (understand current reality: which styles sell better this quarter) vs. <em>predictive</em> (anticipate change using patterns; needs constant new data).</p>
<p><strong>Statistics vs. data mining vs. ML:</strong> statistics is inferential; data mining explores large data sets to discover patterns for humans to use (goal: explain and understand); ML <em>automates</em> pattern identification to make predictions.</p>
<p><strong>Subsets of AI</strong> besides ML: <em>reasoning</em> (filling in blanks: the drumstick temperature example), <em>natural language processing</em>, and <em>planning</em>.</p>
<h3>Approaches to machine learning</h3>
<ul><li><strong>Supervised learning</strong>: labelled data. Continuous label = <em>regression</em> (weather forecasting); finite set = <em>classification</em>. Risk: <strong>overfitting</strong> (model tuned to training data, fails on new data), tested against unseen labelled data. Uses: fraud detection, recommendations, speech recognition, risk analysis.</li>
<li><strong>Unsupervised learning</strong>: unlabelled data; finds clusters and associations (social media data; spam detection; diabetes symptom patterns). Can be the first step before supervised learning.</li>
<li><strong>Reinforcement learning</strong>: a behavioural model; learns by trial and error from rewards (robot climbing stairs, self-driving cars, a dog trained with treats).</li>
<li><strong>Neural networks and deep learning</strong>: input layer, hidden layer(s), output layer. <em>Deep</em> learning = many hidden layers; good for unstructured data, images, speech, computer vision.</li></ul>`},

{ id: "ai-lecture", topic: "ai", title: "Lecture 5 themes: data, GenAI and the AI cases", flag: "Not from your files", src: "Course manual description of Lecture 5 (slides not uploaded)", tags: "data driven innovation GenAI OpenAI DeepSeek open source",
html: `
<p>The course manual says Lecture 5 covers how a data-driven approach fosters digital innovation, why the nature of data redefines entrepreneurship, and the role of AI and generative AI. The tutorial cases are <strong>OpenAI: Competitive Strategy and Governance</strong> and <strong>DeepSeek and Open-Source AI</strong> (your own team's case).</p>
<p>Concepts from the course that connect to these cases (use them to reason through exam questions about the cases):</p>
<ul><li><strong>Openness</strong> (Parker ch. 7): DeepSeek's open-weight releases vs. OpenAI's proprietary models; open models attract extension developers but make the IP hard to monetize.</li>
<li><strong>Monetization</strong> (Parker ch. 6): an open model gives value away; monetization must come from something the firm still controls (API access, hosted service, enterprise tools, curation).</li>
<li><strong>Prediction vs. judgment</strong> (Agrawal et al.) and <strong>emergent thinking</strong> (Cromwell et al.).</li>
<li><strong>Data-driven network effects</strong> (Parker ch. 2) and <strong>learning effects</strong> (Zhu & Iansiti): more users → more data → better models.</li>
<li><strong>Multi-homing</strong>: users and developers easily use several AI models at once, which pushes prices down.</li></ul>
<div class="note">Your Lecture 5 slides weren't uploaded, so check this section against them. Your DeepSeek case questions are: disruption of the proprietary AI landscape, why monetization is hard, which revenue model, external forces (regulation, geopolitics, chip access), and keeping open-source ideals under pressure.</div>`},

/* ============================ L6 ============================ */
{ id: "deeptech", topic: "deep", title: "Deep tech, quantum computing and blockchain", flag: "Not from your files", src: "Course manual; public summaries of the readings (the readings themselves were not uploaded)", tags: "deep tech lean startup quantum advantage blockchain disillusionment",
html: `
<p>Lecture 6 asks what <strong>deep tech</strong> ventures are, which technologies they involve, and what challenges and advantages they bring, using quantum and blockchain to discuss how deep tech can create new industries from emerging technologies. There is no tutorial that week; the Q&A replaces it.</p>
<h3>De Véricourt & Dahlander (2024): Do lean startup methods work for deep tech?</h3>
<ul><li>Lean startup (build–measure–learn, fast customer feedback) is designed to reduce <strong>market uncertainty</strong>. Deep tech mainly faces <strong>technological uncertainty</strong>, long R&D timelines, high upfront costs (equipment, specialists) and heavy regulation (health, energy), so rapid cheap iteration often isn't possible.</li>
<li>What helps instead: prove the concept early; set clear, evidence-based milestones for patient investors; partner with established firms, research institutes and governments; engage regulators early; <strong>“learning by thinking”</strong> (theory and thought experiments before costly experiments); use AI and simulation to cut experiment costs; a culture of honesty about setbacks.</li></ul>
<h3>Melko, Goldfarb & Roger (2023): The business case for quantum computing</h3>
<ul><li>Billions are invested by tech firms, investors and governments in quantum ecosystems. Much research focuses on <strong>quantum advantage</strong>: a quantum computer performing a calculation that a classical computer cannot do in practice.</li>
<li>Managers should look for problems where quantum's specific strengths matter (e.g. simulating molecules and materials, certain optimization and sampling problems) rather than expecting faster computing for everything.</li></ul>
<h3>Kelly (2019, FT): Blockchain: disillusionment descends on financial services</h3>
<ul><li>After the hype, many bank blockchain pilots stalled: few moved to production, integration with legacy systems and the need for industry-wide coordination proved hard, and simpler databases often did the job. An example of the hype cycle's “trough of disillusionment”.</li></ul>
<div class="note">These summaries are based on public descriptions, not on your readings or slides. Read the actual articles if they're on Canvas: they are exam material.</div>`},

/* ============================ cases ============================ */
{ id: "tutorial1", topic: "cases", title: "Tutorial 1: the group-formation experiment", src: "Tutorial 1 slides", tags: "tutorial platform governance wayfinding legitimacy search coordination costs",
html: `
<p>Step 1: “find your tutorial group in 30 seconds, no questions answered” → incomplete groups, stranded students. Step 2: the lecturer acted as <strong>the platform</strong> and added <strong>governance and wayfinding</strong> (Tutorial 1 = back, 2 = middle, 3 = front) → more complete groups, fewer stranded students.</p>
<p>Concepts:</p>
<ul><li><strong>Search and coordination costs fall</strong> with signage and rules → faster matching.</li>
<li>The platform added governance and structure. Students who tried to organize earlier lacked <strong>legitimacy</strong> → low adoption; platform authority increased trust and adoption.</li>
<li><strong>Direct (same-side) network effects</strong>: more students clustering correctly made it easier for late arrivals.</li>
<li><strong>Value capture</strong>: the platform “earns” the right to capture value (grades, attention, data) by first creating value (reduced frictions).</li>
<li>Self-organization without the platform = a <em>collaborative community equilibrium</em>: high trust and informal governance, but fragile and hard to scale without rules or algorithms.</li>
<li>Stranded students benefited most; similar trade-offs exist on Uber, Airbnb and the App Store.</li></ul>`},

{ id: "caselist", topic: "cases", title: "The tutorial cases and the concepts they test", src: "Course manual · Tutorial 1", flag: "Case texts not uploaded", tags: "Snap Facebook TikTok Duolingo crowdfunding AptDeco OpenAI DeepSeek",
html: `
<p>Cases are exam material. You presented only one, so use classmates' slides and these links to course concepts:</p>
<div class="tablewrap"><table><tr><th>Tutorial</th><th>Case</th><th>Concepts likely tested</th></tr>
<tr><td>2</td><td>Social Media War 2021: Snap vs. Facebook vs. TikTok</td><td>Same-side network effects, multi-homing, virality, copying features, algorithmic filters (TikTok)</td></tr>
<tr><td>3</td><td>Duolingo: On a “Streak”</td><td>Freemium, habit and engagement, monetization timing, pull marketing</td></tr>
<tr><td>3</td><td>Crowdfunding: A Tale of Two Campaigns</td><td>Reward vs. equity crowdfunding, signalling, information asymmetry, tailoring the business plan</td></tr>
<tr><td>4</td><td>Platform Startups: Launching Online Marketplaces</td><td>Chicken-or-egg strategies, seeding, micromarket, leakage</td></tr>
<tr><td>4</td><td>AptDeco: Circular Economy Furniture Marketplace</td><td>Disintermediation, trust tools (escrow, logistics), transaction fees, local clustering</td></tr>
<tr><td>5</td><td>OpenAI: Competitive Strategy and Governance</td><td>Openness decisions, governance, monetization, partnerships (bridging)</td></tr>
<tr><td>5</td><td>DeepSeek and Open-Source AI</td><td>Open vs. proprietary, monetizing open value, external forces, multi-homing</td></tr></table></div>`}
]);

PORTAL.addGlossary("die", [
{ t: "Platform", d: "A business that enables value-creating interactions between external producers and consumers, providing open infrastructure and setting governance conditions." },
{ t: "Pipeline", d: "A traditional business with a linear value chain: design → produce → sell, with producers at one end and consumers at the other." },
{ t: "Network effects", d: "The impact of the number of users of a platform on the value created for each user. Can be positive or negative." },
{ t: "Demand economies of scale", d: "Efficiencies on the demand side (social networks, demand aggregation, app development) that make bigger networks more valuable. The source of positive network effects." },
{ t: "Supply economies of scale", d: "Production efficiencies that lower unit cost as quantity rises. The basis of 20th-century industrial monopolies." },
{ t: "Metcalfe's law", d: "The value of a network grows non-linearly with users: n users give n(n−1)/2 connections (12 phones → 66; 100 → 4,950)." },
{ t: "Convex collapse", d: "Metcalfe in reverse: as users leave, network value drops faster, causing more users to leave (BlackBerry)." },
{ t: "Same-side network effect", d: "Effect of users on other users of the same side (consumers on consumers, producers on producers)." },
{ t: "Cross-side network effect", d: "Effect of users on one side on users of the other side (merchants and cardholders on Visa)." },
{ t: "Frictionless entry", d: "The ability of users to quickly and easily join a platform and start participating in value creation." },
{ t: "Side switching", d: "Users of one side joining the other side (riders become drivers, guests become hosts)." },
{ t: "Curation", d: "The process by which a platform filters, controls and limits users' access, activities and connections, to keep match quality high." },
{ t: "Data-driven network effects", d: "As a network grows, more data improves curation and matching." },
{ t: "Core interaction", d: "The single most important activity on a platform: participants + value unit + filter." },
{ t: "Value unit", d: "What producers create and exchange on the platform (a listing, video, profile). The hardest element for the platform to control." },
{ t: "Filter", d: "An algorithmic tool that delivers relevant value units to the right consumers (search, news feed)." },
{ t: "Pull, facilitate, match", d: "The three functions a platform must perform: attract users, make interaction easy, and connect the right users." },
{ t: "End-to-end principle", d: "Application-specific functions belong at the edges of a system, not in its core (keeps the core simple and stable)." },
{ t: "Modularity", d: "Organizing a system into independently designed modules connected through well-defined interfaces (APIs)." },
{ t: "API", d: "Application programming interface: standard routines and protocols that let outside developers connect to a platform." },
{ t: "Openness (platform)", d: "No restrictions on participation, or only reasonable, non-discriminatory ones applied uniformly." },
{ t: "Platform manager vs. sponsor", d: "The manager organizes interactions and touches users; the sponsor holds legal control over the technology and IP." },
{ t: "Proprietary / licensing / joint venture / shared model", d: "One manager & one sponsor (Apple) / many managers & one sponsor (Android) / one manager & many sponsors (Orbitz) / many & many (Linux)." },
{ t: "Core developers, extension developers, data aggregators", d: "Platform employees who build core functions / outside parties who add features / parties who add data from multiple sources." },
{ t: "Chicken-or-egg problem", d: "In a two-sided market, neither side joins until the other side is there." },
{ t: "Follow-the-rabbit", d: "Launch as a pipeline business, build one side, then open the platform (Amazon Marketplace)." },
{ t: "Piggyback strategy", d: "Tap into an existing user base of another platform (PayPal on eBay)." },
{ t: "Seeding strategy", d: "The platform creates or borrows value units itself to attract one side (Quora editors answering questions)." },
{ t: "Marquee strategy", d: "Give special incentives to a key user group that makes or breaks the platform (consoles courting Electronic Arts)." },
{ t: "Single-side strategy", d: "Offer a product valuable to one side alone, then add the second side (OpenTable software for restaurants)." },
{ t: "Producer evangelism", d: "Attract producers who bring their own customers (Kickstarter creators, Udemy teachers)." },
{ t: "Big-bang adoption", d: "Use a push event to trigger simultaneous on-boarding (Twitter at SXSW 2007)." },
{ t: "Micromarket strategy", d: "Start in a small, already-interacting community (Facebook at Harvard)." },
{ t: "Viral growth", d: "Pull-based user-to-user spread with four elements: sender, value unit, external network, recipient." },
{ t: "Push vs. pull marketing", d: "Push: pushing messages through owned or paid channels (pipelines). Pull: an offering so valuable it attracts users (platforms)." },
{ t: "Leakage / off-platforming", d: "Users completing transactions outside the platform to avoid its fees." },
{ t: "Disintermediation", d: "Network members bypassing the hub and connecting directly (Homejoy)." },
{ t: "Multi-homing", d: "Users or providers being active on several platforms at once (drivers on both Uber and Lyft)." },
{ t: "Network clustering", d: "Fragmentation of a network into local clusters; more clustering makes a platform easier to attack." },
{ t: "Network bridging", d: "Connecting multiple networks to create synergies (Alipay with Taobao and Tmall)." },
{ t: "Enhanced access / enhanced curation", d: "Monetization by selling better visibility or reach / by selling guaranteed quality (subscription)." },
{ t: "“Users first, monetization later”", d: "Golden rule on timing: build the network before charging; don't charge for value that used to be free." },
{ t: "Collaborative community vs. competitive market", d: "Two ways to organize outside innovators: cooperative and intrinsically motivated (cumulative problems) vs. competitive and extrinsically motivated (broad experimentation)." },
{ t: "Integrator / product / two-sided platform", d: "Boudreau & Lakhani's business models: the platform sells to customers (high control) / innovators sell on top of a foundation / innovators and customers transact directly (high autonomy)." },
{ t: "Open innovation", d: "Relying on outsiders both as a source of ideas and as a means to commercialize them." },
{ t: "Absorptive capacity", d: "A firm's ability to recognize, assimilate and use new outside knowledge, built up by doing its own R&D." },
{ t: "Creativity", d: "The ability to produce work that is both novel and useful." },
{ t: "Science push vs. demand pull", d: "Innovation driven by scientific discovery vs. by perceived customer demand." },
{ t: "Technology cluster", d: "Regional cluster of firms connected to a common technology (Silicon Valley); benefits are agglomeration economies." },
{ t: "Technological spillovers", d: "Positive externalities of R&D: knowledge spreading across firms or regions." },
{ t: "Knowledge broker", d: "A person or firm that transfers information from one domain to another where it can be usefully applied." },
{ t: "Digital entrepreneurship", d: "Entrepreneurial creation of digital value using socio-technical digital enablers to acquire, process, distribute and consume digital information (Sahut et al.)." },
{ t: "Digital entrepreneurial ecosystem (DEE)", d: "Combination of an entrepreneurial ecosystem and a digital ecosystem (Sussan & Acs)." },
{ t: "Bootstrapping", d: "Funding a startup with savings, credit cards and pitch-competition prizes." },
{ t: "Business angel", d: "Wealthy individual investing their own money early (roughly €5k–500k), bringing skills, experience, networks and time." },
{ t: "Venture capital", d: "Professional investors investing pooled money from limited partners in high-growth firms after proof of concept, taking equity and a board seat, aiming for an exit." },
{ t: "Dilution", d: "Founders' ownership share shrinks with each funding round; acceptable if the company's value grows more." },
{ t: "Crowdfunding", d: "Open call, mostly online, for funds as a donation or in exchange for a reward, interest (lending) or equity." },
{ t: "Incubator", d: "Supports new businesses over a period (no fixed term) with space, services, knowledge and networks; usually no funding." },
{ t: "Accelerator", d: "Cohort-based programme of fixed duration (3–6 months) with seed funding, mentoring and a demo day." },
{ t: "Isenberg's six domains", d: "Culture, policies & leadership, finance, human capital, markets, institutional supports." },
{ t: "Prediction (AI)", d: "Using data you have to generate data you don't have. AI makes it cheap." },
{ t: "Judgment (AI)", d: "Determining the reward/payoff of an action in a given environment. Complemented, not replaced, by AI." },
{ t: "Reward function engineering", d: "Determining the rewards to various actions given the AI's predictions." },
{ t: "Emergent thinking", d: "Generating innovation ideas without fully understanding the problem: start from the technology's core functions." },
{ t: "Supervised / unsupervised / reinforcement learning", d: "Learning from labelled data / finding patterns in unlabelled data / learning by trial and error from rewards." },
{ t: "Overfitting", d: "A model tuned so closely to training data that it fails on new data." },
{ t: "Four Vs of big data", d: "Volume, velocity, variety, veracity." },
{ t: "Deep learning", d: "Machine learning with neural networks that have many hidden layers." },
{ t: "Quantum advantage", d: "A quantum computer performing a calculation that a classical computer cannot practically perform." }
]);
