/* English resource bundle. Default language.
   Every reader-visible string on the site lives here. */
window.I18N = window.I18N || {};
window.I18N.en = {

  meta: {
    title: 'Hairuo Liu — Backend & Data Platform Engineer',
    description: 'Hairuo Liu: 6 years at Amazon Ads (SDE → SDE II) — a 10M+ node knowledge graph used by 30+ teams, a compliance e-invoicing platform across 27 marketplaces. Waterloo M.Eng. ECE (Co-op).'
  },

  nav: { about: 'About', experience: 'Experience', skills: 'Skills', education: 'Education', projects: 'Projects', aicut: 'AICut', ask: 'Ask AI', contact: 'Contact', github: 'GitHub' },
  /* "Language" in BOTH bundles: a reader stuck in the wrong language must still
     recognise the control. The menu inside keeps each language's own name. */
  langLabel: 'Language',

  /* Hero copy budget (award-level editorial constraint — do not exceed):
     eyebrow <= 48 chars · title <= 60 chars · lede <= 140 chars · chip <= 48 chars.
     Everything else lives in Experience / Projects / Contact.
     Slot grammar: eyebrow = who I am · h1 = role + tenure · lede = one proof
     point · chip = availability. The chip replaces the old 5-tile stats band;
     those numbers all reappear in Experience, so nothing is lost.
     Availability is the highest-conversion fact on the page, so it owns its
     own object that links straight to #contact — and it stays OUT of the
     eyebrow, because sitting next to "six years at Amazon" it reads as a
     downgrade story rather than an availability fact. */
  hero: {
    eyebrow: 'Waterloo M.Eng. ECE (Co-op)',
    title: 'Backend &amp; data platform engineer. Six years at Amazon Ads.',
    /* Deliberate EN/ZH asymmetry, approved by IA. EN says "knowledge graph"
       with no qualifier because ATS keyword matching is literal — inserting
       "brand" invites a 10M+ node brand / knowledge graph token split. ZH is
       read by humans, where the precise description is worth more. */
    /* Attribution: the graph was a team build. "I built" claimed sole credit
       for shared work — a recruiter who asks "who else was on it?" then hears
       a different story than the page told. */
    lede: 'Part of the team behind the 10M+ node knowledge graph 30+ teams run on.',
    /* i18n.js renders the chip only when this key exists — a bundle that
       forgets it loses the page's only conversion object with no error.
       Every new-language bundle MUST define `chip`. */
    chip: 'Open to Co-op · Winter 2027 · 4–8 months',
    btnProjects: 'See projects',
    btnEmail: 'Email me',
    portraitAlt: 'Portrait of Hairuo Liu',
    backdrop: 'Liu'
  },

  /* Intro paragraph shown under the hero. Three beats kept as three blocks:
       hard <br> breaks would shatter the rhythm at 390px. Plain words over
       jargon — a recruiter skimming this is not the one who reads the
       Experience bullets. */
  about: [
    'Six years at Amazon Ads across two teams — Core Platform first, then Data Platform after my promotion to SDE II.',
    'My part was the brand-data platform — the ingestion pipeline and the millisecond lookups that fed it.',
    'I also design and ship my own 3D-printed camera hardware. I am now at Waterloo for an M.Eng. in ECE (Co-op), moving from data platforms toward applied AI.'
  ],

  /* Compact career-trajectory band under the hero — a glanceable proof strip
     that echoes the "name-behind-photo + timeline" polish of a strong portfolio. */
  timeline: [
    { org: 'Ohio State', role: 'B.S. Computer Science & Engineering', when: '2013 – 2017' },
    { org: 'Amazon',     role: 'Software Development Engineer',        when: '2019 – 2021' },
    { org: 'Amazon',     role: 'SDE II',                              when: '2021 – 2025' },
    { org: 'Waterloo',   role: 'M.Eng. ECE (Co-op)',                  when: '2026 –' }
  ],

  sec: {
    experience: { kicker: 'Experience', title: 'Core → data platform: each step closer to real scale', desc: 'Two tours at Amazon Ads plus a hardware business I ran myself.' },
    skills:     { kicker: 'Skills',     title: 'What I actually use', desc: 'Listed by depth of real use, not keyword stuffing.' },
    education:  { kicker: 'Education',  title: 'Education', desc: '' },
    projects:   { kicker: 'Projects',   title: 'Project inventory', desc: 'Grouped by theme and importance rather than stars, each with my own assessment.' },
    contact:    { kicker: 'Contact',    title: 'Contact', desc: 'Open to Co-op from Winter 2027 (4–8 months); cameras, 3D printing, AI editing.' }
  },

  jobs: [
    { company: 'Amazon Ads — Data Platform', role: 'Software Development Engineer II (promoted 2021)', period: 'Toronto, ON · 2021 – 2025', bullets: [
      'Architected Amazon Ads&rsquo; core brand-data platform — a <b>10M+ node AWS Neptune knowledge graph</b> now consumed by 30+ teams and powering most brand-data ingestion pipelines.',
      'Engineered the brand ID lookup to return results in milliseconds, by consolidating multiple ingestion paths and tuning Gremlin queries.',
      'Architected the Non-Endemics data platform from scratch (authored the HLD) and onboarded thousands of non-endemic advertisers.',
      'Built on a backfill of millions of brand relationships, its standardized schemas and data contracts became the cross-team governance standard.',
      '<b>Cross-team delivery end to end:</b> when our service needed geolocation, I went into the geo team&rsquo;s internal systems, stood up the API there, and consumed it back — unblocking the dependency without owning that codebase.',
      'Started and led a data-harmonization project across ad systems: SQL analysis flagged which duplicate-named brands could merge, and the algorithm and server-side pipeline I built unified their hierarchies — lifting brand-definition coverage to <b>95%+</b>.',
      'Launched a weekly dashboard on a tier-one low-latency service to de-risk that launch.',
      'Ramped up 8+ engineers across the two teams I ran, hand-ramping 2 in each, and wrote ~20 team SOPs; reviewed <b>1,000+ pull requests</b> as a cross-team design reviewer for distributed SOA services, and gave 10 internal tech talks on CDK and AWS architecture.'
    ]},
    { company: 'Amazon Ads — Core Platform', role: 'Software Development Engineer', period: 'New York, NY → Toronto, ON · 2019 – 2021', bullets: [
      'Built the geolocation API from scratch to serve <b>tens of thousands of requests per second</b> at low latency and high availability, including PII-compliant IP resolution for tax jurisdiction, backed by global dashboards.',
      'Delivered the government e-invoicing platform — an event-driven system (SQS / SNS / DynamoDB) that retired legacy billing, moved billing data from RDS to DynamoDB, and cut marketplace onboarding from months to <b>a day</b>.',
      'Shipped the platform first in India and grew it from 2 to 8+ marketplaces (AU / JP / BR / IN) myself, then wrote the program that took it to <b>27</b>; owned the tax API end to end — millions of compliance-critical requests per day.',
      'Built a one-click AWS CDK developer workflow and a server-side deployment path that stands up a nearly complete service — cutting both setups from a day to <b>minutes</b>; reused across the AU / JP / BR expansions.'
    ]},
    { company: 'Cam 3D Studio', role: 'Founder &amp; Lead Engineer', period: 'Toronto, ON · 2023 – present', bullets: [
      'Run a solo hardware brand end to end — Fusion 360 design through Bambu Lab prototyping and factory CNC to customers in 5+ countries, with a QC gate on every release and a <b>100% five-star rating</b>.',
      'Custom work scoped directly with customers: <b>10 custom film lights for Fujifilm Sweden</b>, each taken from requirement to prototype to delivered unit.',
      'Also <b>50+ hand-built pancake lenses</b> re-housing vintage point-and-shoot optics into Sony E, Fuji X, Leica L, Canon RF and M4/3 mounts for Toronto cinematographers.',
      'Open-sourced 30+ parametric models on MakerWorld, with <b>4,800+ downloads</b>.'
    ]}
  ],

  skills: [
    { title: 'Languages &amp; tooling', body: 'Java · Python · SQL · Gremlin · Scala · Kotlin · Smithy · TypeScript · Swift · Git · Linux · Claude Code · Cursor' },
    { title: 'AWS &amp; cloud',          body: 'Neptune · DynamoDB · Lambda · S3 · SQS/SNS · EventBridge · ECS · CloudFormation · CDK · CodePipeline · CloudWatch · KMS' },
    { title: 'Data &amp; ML',            body: 'Glue · Redshift · EMR · SageMaker · Apache Kafka · MySQL · MongoDB' },
    { title: 'Architecture &amp; craft', body: 'Microservices &amp; SOA · event-driven · knowledge graphs · data governance · ETL &amp; pipelines · CI/CD &amp; IaC · observability' },
    { title: 'Certification',           body: 'AWS Certified Solutions Architect – Associate' },
    { title: 'Design &amp; making', body: 'Fusion 360 (parametric modelling / add-ins) · Bambu Lab · CNC processes · product photography &amp; post' }
  ],

  edu: [
    { school: 'University of Waterloo', degree: 'M.Eng., Electrical &amp; Computer Engineering (Co-op option) · Waterloo, ON', when: 'Starts Sept 2026 · expected 2028' },
    { school: 'The Ohio State University', degree: 'B.S., Computer Science and Engineering · Columbus, OH', when: '2013 – 2017' }
  ],

  projects: {
    note: '<b>Data source:</b> the GitHub API — every public repository on <code>github.com/HairuoLiu</code>, plus the private AICut. The 2018 portfolio is preserved in full at <a href="lexi/">/lexi</a>.',

    col: { name: 'Project', one: 'One-liner', stack: 'Stack', status: 'Status', link: 'Link', note: 'Assessment' },
    noteToggle: 'Assessment',

    status: { done: 'Complete', wip: 'In progress', wipbase: 'In progress (base)', parked: 'Parked', fork: 'Third-party fork', dead: 'Dead' },
    sub: { private: 'private repo', fork: 'fork', star1: '★ 1', star2: '★ 2', star4: '★ 4', star6: '★ 6', star10: '★ 10', star32: '★ 32' },

    featured: {
      'AICut': { tag: 'In progress · main line', desc: 'A Python AI sidecar on top of LosslessCut&rsquo;s lossless cutting core, for rough-cutting talking-head footage and stripping breaths — still 100% lossless when it cuts. 3 of 11 milestones done.', href: '#aicuts', cta: 'Positioning, progress and tech →' },
      'sony-sooc-recipes': { tag: '★ 32 · most popular', desc: 'Sony straight-out-of-camera looks written onto the body with a one-click Windows installer — 149 install-ready looks (164 catalogued), the free Base installer ships 6 brand packs / 91 looks. The only project here with a real outside user base.', href: 'https://github.com/HairuoLiu/sony-sooc-recipes', cta: 'github.com/HairuoLiu/sony-sooc-recipes ↗' },
      'ai-film-director-skill': { tag: '★ 10 · published', desc: 'A two-phase AI filmmaking Skill: screenplay in phase one, storyboard plus Seedance 2.0 prompts in phase two, landing on a standard nine-column shot list. Has outside users.', href: 'https://github.com/HairuoLiu/ai-film-director-skill', cta: 'github.com/HairuoLiu/ai-film-director-skill ↗' },
      'OptiThread': { tag: '★ 4 · on the Autodesk App Store', desc: 'The missing lens &amp; filter thread standard for Fusion 360, dropped straight into the native Thread dropdown: 73 sizes × 0.75 / 1.0 mm, a true 26-TPI Leica L39/LTM with the Whitworth 55° profile, and a pre-calibrated 0.10 mm 3D-print clearance so printed parts actually screw together. Formerly fusion-lens-threads.', href: 'https://github.com/HairuoLiu/OptiThread', cta: 'github.com/HairuoLiu/OptiThread ↗' },
      'RouteCut': { tag: 'Pipeline · human in the loop', desc: 'A different project from AICut, and deliberately not the same bet. For people chasing raw efficiency: a pipeline hands AI only the most basic, most stable, 100% certain repetitive steps, and buys that time back. You stay in the loop for review and trimming.', href: '', cta: '' }
    },

    groups: {
      a: { name: 'A. AI and video creation (main line)', desc: 'What I am building now, and what already shipped. AICut is the only large project still moving.' },
      b: { name: 'B. Systems / low level / performance', desc: 'Closest to my day job: deliberate practice on distributed systems and performance.' },
      c: { name: 'C. Camera and imaging tools', desc: 'Grown out of my own photography needs, and the only group with real outside users.' },
      d: { name: 'D. 3D design and making', desc: 'Where the side business and the engineering job overlap: modelling, parametrics, and shipping physical parts.' },
      e: { name: 'E. Web and apps', desc: 'Things that went all the way from idea to spec to demo.' },
      f: { name: 'F. Filmmaking references (third-party forks)', desc: 'Flagged clearly: these are other people&rsquo;s work. I forked them as references for AICut and the director Skill — they are not my output.' },
      g: { name: 'G. Early / coursework / reference repos', desc: 'Coursework, algorithm drills and forks from roughly 2017–2019. Kept for honesty; I would not present these as work samples.' }
    },

    p: {
      'AICut': { one: 'An AI sidecar on LosslessCut for rough-cutting talking-head video and stripping breaths, losslessly',
        note: 'Solves: hunting breaths and dead takes by hand is what eats the time. <em>Highlight: 409 + 288 + 567 tests green on M0–M2; 100% lossless stays a hard constraint.</em> <i>Gap: nothing past M3 yet, about 27%, so no end-to-end feature exists.</i>' },
      'ai-film-director-skill': { one: 'A two-phase AI filmmaking Skill: screenplay → storyboard + Seedance 2.0 prompts',
        note: 'Solves: no reusable directing workflow exists, so prompts get written by feel. <em>Highlight: two clean phases ending in a nine-column shot list that can be shot; ★ 10.</em> <i>Gap: no code and no tests, and the value is tied to one model.</i>' },
      'lossless-cut': { one: 'A mirror of upstream LosslessCut, used as the AICut base',
        note: 'Solves: I did not want to write a lossless cutting core from zero. <em>Highlight: a battle-tested GPL base saves years of engineering.</em> <i>Gap: the README is still upstream text, and no sync policy is documented.</i>' },

      'kvmem-strata-fusion': { one: 'KVMem × Strata fusion research: four falsifiable execution plans (IFR / LADDER / UBBA / CASA) compared head to head',
        note: 'Solves: picking a memory/storage tiering strategy is usually intuition. <em>Highlight: four competing, deliberately falsifiable plans (IFR / LADDER / UBBA / CASA).</em> <i>Gap: no benchmark results yet, so what it proved stays unclear.</i>' },
      'CoreBar': { one: 'A macOS menu-bar front end for macmon: CPU / GPU / memory / temperature trends plus per-core utilisation',
        note: 'Solves: I want menu-bar stats at 2 Hz, which WidgetKit throttles to minutes. <em>Highlight: one Swift file, zero dependencies; the widget trade-off is written up.</em> <i>Gap: Apple Silicon only, no tests and no distribution channel.</i>' },

      'sony-sooc-recipes': { one: '149 Sony straight-out-of-camera looks across 12 brand packs, installed on-body with a one-click Windows installer',
        note: 'Solves: in-camera looks are hard to find and harder to load in bulk. <em>Highlight: 149 looks in 12 packs installed in one click, not copied by hand — hence ★ 32.</em> <i>Gap: Windows only, thin firmware coverage, and an undocumented vendor format.</i>' },
      'Fujifilm-HIF2JPG': { one: 'Fujifilm HIF → JPG converter with a Windows 11 look, preserving ICC profiles and EXIF',
        note: 'Solves: HIF is awkward to share, and most converters drop the colour profile. <em>Highlight: preserving ICC and EXIF is an explicit acceptance criterion.</em> <i>Gap: Windows only, installer bloated by codec libraries, no CI artifacts.</i>' },
      'leica-lfi-submission-helper': { one: 'A Chrome MV3 extension: local EXIF read, form auto-fill, generated submission copy, voice input (zh / en)',
        note: 'Solves: each Leica LFI submission means retyping the same EXIF and copy. <em>Highlight: EXIF is read locally in the browser and never uploaded.</em> <i>Gap: one site served, absent from the Chrome Web Store, and a redesign breaks it.</i>' },
      'photo-contest-calendar': { one: 'A global photography contest deadline calendar — no backend, no login, open source',
        note: 'Solves: contest deadlines are scattered across organisers&rsquo; sites. <em>Highlight: no backend or login; a scheduled Action refreshes it, at near-zero cost.</em> <i>Gap: hand-maintained data, so coverage follows my free time; no reminders.</i>' },
      'camera-rental': { one: 'A camera rental catalogue — bilingual static site, data synced from Notion',
        note: 'Solves: Toronto rental prices and availability were scattered. <em>Highlight: Notion as CMS behind a static build separated content from presentation.</em> <i>Gap: the data source stopped updating, so it no longer works as a tool.</i>' },
      'hairuo-portfolio': { one: 'Personal photography portfolio — a 3D camera gallery',
        note: 'Solves: a portfolio needs something more memorable than a grid. <em>Highlight: the 3D gallery has real presence and finish.</em> <i>Gap: storage ate the engineering budget, and 3D stays heavy on mobile first paint.</i>' },
      'ebay-camera-feed': { one: 'An eBay camera listing feed — static page plus XML',
        note: 'Solves: wanted second-hand camera stock as a subscribable feed. <em>Highlight: minimal structure, zero-cost deployment.</em> <i>Gap: no description, no README, updates are manual — right now it is closer to a placeholder repo than a tool.</i>' },

      'OptiThread': { one: 'Lens/filter thread specs for Fusion 360 as a native Thread dropdown family — formerly fusion-lens-threads',
        note: 'Solves: Fusion 360 lacks optics threads, so 24–127 mm was hand-modelled. <em>Highlight: 73 sizes in 0.75 / 1.0 mm; 26 TPI (0.9769 mm) 55° L39, not M39×1.0; 0.10 mm 3D-print clearance.</em> <i>Gap: one category only; installers assume default paths.</i>' },
      'voronoi-fusion': { one: 'Offline Voronator: turn any solid into a Voronoi-perforated shell — Fusion 360 add-in plus web prototype',
        note: 'Solves: Voronoi-perforated shells meant a paid tool or an online one. <em>Highlight: the algorithm is decoupled from the add-in, testable alone in a browser.</em> <i>Gap: prototype grade, never packaged, unverified on complex meshes, solids only.</i>' },
      '3d-parametric-compiler': { one: 'Compiles parametric 3D models into tunable artefacts (frontend + backend)',
        note: 'Solves: once shared, a parametric model is awkward for the recipient to retune. <em>Highlight: the frontend/backend split is in place.</em> <i>Gap: README only — no runnable demo, nothing to judge completeness by.</i>' },
      'Gridfinity-AI': { one: 'AI-generated Gridfinity storage modules (with a Vercel Serverless API)',
        note: 'Solves: picking Gridfinity module combinations by hand is slow. <em>Highlight: SPEC.md means the spec was settled before the code.</em> <i>Gap: no README, no demo, and the AI shows no model or evaluation logic.</i>' },
      'Lumina-Layers': { one: 'Experimental FDM engine for layered colour mixing — CMYK mode for pixel-art prints',
        note: 'Nature: a fork, not my own work; kept for study and reference. <i>I have produced no visible changes on this fork. It is listed to show a technical interest, not as a piece of work.</i>' },

      'ikear': { one: 'A second-hand furniture C2C marketplace: one codebase compiling to iOS / Android / Web, with a Supabase backend',
        note: 'Solves: local second-hand furniture C2C trade has no decent mobile experience. <em>Highlight: PRODUCT_SPEC through E2E_SIGN_OFF all shipped; offline-first build.</em> <i>Gap: the backend repo is private, so nothing runs; no movement since 2026-08.</i>' },
      'pixel-farm-groceries': { one: 'A grocery-list helper wearing a 16-bit farm-game shell: pick dishes, get a shelf-ordered shopping run',
        note: 'Solves: dinner is a daily three-part decision — dish, list, aisle order. <em>Highlight: 125 icons from a 12×12 pixel engine; 104 dishes across 8 aisles; 1 MB offline.</em> <i>Gap: scoped for the 1024 challenge — no accounts, no sync.</i>' },
      'waterloo-toolkit': { one: 'A University of Waterloo student toolkit: static GitHub Pages, sub-tools mounted from a manifest',
        note: 'Solves: incoming MEng / Co-op students had no usable checklist. <em>Highlight: a manifest drives the home page, plus a 112-course navigator.</em> <i>Gap: correctness rests on me alone, with no review; sub-tool quality is uneven.</i>' },
      'resell-workbench': { one: 'Post one listing to four resale platforms at once — Facebook, Kijiji, 小红书, Karrot',
        note: 'Solves: cross-platform resale means retyping the same form several times. <em>Highlight: zero dependencies and fully local, which keeps privacy and cost optimal.</em> <i>Gap: front-end changes break it, and it never shipped as an extension or service.</i>' },
      'nfc-card': { one: 'Zero-code digital card / NFC landing page: edit one config.js or use the visual editor, scan and go',
        note: 'Solves: non-technical users want a card page they can write to an NFC tag. <em>Highlight: the visual editor really does generate config.js.</em> <i>Gap: narrow feature set, limited templating, no analytics or language switching.</i>' },
      'sd-label-pro': { one: 'An SD-card labelling generator: templates + themes + batch export',
        note: 'Solves: labelling cards and cables means re-laying out the same thing. <em>Highlight: ARCHITECTURE.md and PROMPT.md mean it was designed before coding.</em> <i>Gap: empty repo description, unverified print accuracy, nothing after the examples.</i>' },

      'shanyin-director-master': { one: 'A professional film-director agent: script → tone → pacing → nine-column shot list (xlsx)',
        note: 'Nature: a fork. <i>I have no visible changes; its value to me was as an industry reference for the nine-column shot list in my own ai-film-director-skill. It does not count as my output.</i>' },
      'shanyin-screenwriting-master': { one: 'An all-format screenwriting skill: concept shorts through 90-minute features and multi-episode series',
        note: 'Nature: a fork. <i>Same as above — reference material, not my output.</i>' },

      'Coding': { one: 'Algorithms and data-structure drills',
        note: 'Nature: practice accumulation. <em>★ 6 means people starred it in passing.</em> <i>Unorganised, undocumented, untouched since 2023 — a trace of practice, nothing more.</i>' },
      '3902GameProject': { one: 'CSE 3902 course game project',
        note: 'Nature: coursework. <i>No README and no build instructions, so it cannot be reproduced; archival value only.</i>' },
      'wordpress': { one: 'Theme and config from an early WordPress site',
        note: 'Nature: leftover from early web work. <i>Undocumented and unmaintained security-wise; kept for history only.</i>' },
      'Bump2Share-CSE5236': { one: 'Two phones bumped together to make one big screen for watching video',
        note: 'Nature: coursework (moved to the <a href="lexi/">/lexi archive</a>). <em>The idea is fun — an interaction design you rarely saw in a mobile course at the time.</em> <i>Code frozen in 2018; it will not build on modern Android.</i>' },
      'QR-Wall-CSE4471': { one: 'A QR-code-based message wall',
        note: 'Nature: coursework (moved to the <a href="lexi/">/lexi archive</a>). <i>No README, long outdated; archive only.</i>' },
      'Leap-Motion-In-Unity3D': { one: 'Integrating Leap Motion hand tracking in Unity',
        note: 'Nature: a fork. <i>No changes of mine — a trace of interest in XR.</i>' },
      'xr-unity': { one: '8th Wall WebXR projects and resources for Unity',
        note: 'Nature: a fork. <i>No changes of mine.</i>' },
      'data-structures': { one: 'A collection of data-structure implementations',
        note: 'Nature: a fork. <i>No changes of mine.</i>' },
      'styleguide': { one: 'Style guides for Google-originated open-source projects',
        note: 'Nature: a fork. <i>No changes of mine.</i>' },
      'git-tips': { one: 'A collection of Git tips and tricks',
        note: 'Nature: a fork. <i>No changes of mine.</i>' },
      'weui.js': { one: 'A lightweight JavaScript library for WeUI',
        note: 'Nature: a fork. <i>No changes of mine.</i>' },
      'secbook': { one: 'A reading list for information-security practitioners',
        note: 'Nature: a fork. <i>No changes of mine — a trace of interest in security.</i>' },
      'apps-script-samples': { one: 'Official Google Apps Script samples',
        note: 'Nature: a fork. <i>No changes of mine.</i>' },
      'sandbox-github-clone': { one: 'A sandbox for scraping and analysing GitHub data',
        note: 'Nature: a fork. <i>No changes of mine.</i>' },
      'HowToLiveBetter': { one: 'A life-decision guide — medical, legal, money, emigration — with cost, benefit and evidence grade per entry',
        note: 'Nature: a fork. <em>The content is genuinely useful: every entry carries an evidence grade and a source.</em> <i>Not my work, so it does not count as output.</i>' },
      'HairuoLiu.github.io': { one: 'This site; the old Vue single-page version moved to /lexi',
        note: 'Nature: personal site. <em>The source repository for this page.</em> <i>The old index.html references Vue assets that no longer resolve, so the live page showed nothing but its title — which is exactly why this rewrite happened.</i>' }
    }
  },

  aicut: {
    kicker: 'In progress',
    title: 'AICut — lossless AI editing for talking-head video',
    desc: 'Not "attach a language model" — teaching a proven lossless cutting core to listen.',
    posTitle: 'Positioning',
    vsTitle: 'Route Cut ≠ AICut — two projects, two bets',
    vsRoute: { name: 'Route Cut', body: 'For people chasing raw efficiency: a pipeline hands AI only the most basic, most stable, 100% certain repetitive steps and buys that time back. You stay in the loop for review and trimming.' },
    vsAicut: { name: 'AICut', body: 'Fully automatic AI editing of talking-head video, no human in the loop: the AI decides where to cut, FFmpeg decides how, and the result stays 100% lossless.' },
    pos: [
      'LosslessCut already proved the lossless path works — near-direct data copies, no re-encode, fast enough to casually cut through several gigabytes of footage. But it <b>does not listen to the content</b>: with a two-hour talking-head recording you still have to sit through it and find the breaths and dead takes yourself.',
      'AICut adds that layer. A <b>Python AI sidecar</b> (Silero VAD + faster-whisper + OpenCV) runs alongside the Electron app, so that <b>"remove every breath"</b> or <b>"drop the duplicate takes"</b> becomes one click — while staying <b>100% lossless</b>. The AI only decides where to cut; FFmpeg still moves the bytes.',
      'In one line: <b>let the AI decide where to cut, and let FFmpeg decide how.</b>'
    ],
    progLabel: 'Current progress',
    progSuffix: 'milestones · 27%',
    progMeta: 'Last push: 2026-07-15 (M2 communication layer done and pushed) · base: LosslessCut v3.69.0 (GPL) · private repository',
    msTitle: 'Milestone roadmap',
    ms: {
      M0: 'Project setup &amp; fork base (45 files + 409 tests)',
      M1: 'Python AI sidecar implementation (27 files + 288 tests)',
      M2: 'Electron ↔ sidecar communication layer (20 files + 567 tests)',
      M3: 'Talking-head core: Silero VAD + faster-whisper',
      M4: 'Breath classification engine + UI + duplicate-take detection',
      M5: 'Rough-cut mode: black / blurry / duplicate / static detection + UI',
      M6: 'Multi-provider API key binding and validation',
      M7: 'Loudness annotation + Whisper subtitle generation',
      M8: 'Packaging and distribution (embedded Python + on-demand models)',
      M9: 'Transcript-driven editing (text → segments mapping)',
      M10: 'MCP / agent interface'
    },
    msState: { done: 'Done', todo: 'Not started', wip: 'Starts from M4', hold: 'On hold' },
    cardsTitle: { done: 'What already works', planned: 'Planned features', tech: 'Technical direction', honest: 'The honest state' },
    cards: {
      done: ['FastAPI sidecar: 6 endpoints + Pydantic models + lifecycle management',
             '15 IPC handlers, with main-process and renderer types fully aligned',
             'API key binding / validation / redaction',
             '409 + 288 + 567 tests, all green, zero source defects'],
      planned: ['Talking-head rough cut: strip breaths, silence and duplicate takes',
                'Rough-cut mode: black / blurry / static segment detection',
                'Transcript-driven editing: edit the text, move the timeline (ChatCut parity)',
                'Loudness annotation + Whisper-generated SRT subtitles'],
      /* Card bodies are injected as `'<p>' + body + '</p>'` by i18n.js:312-313.
         A <ul> inside <p> makes the HTML parser close the <p> first, so these
         two render as `<h4>…</h4><p></p><ul class="ms">…</ul>` — the empty <p>
         carries margin:0 and max-width only, so it is invisible. Kept as
         <ul class="ms"> because the report rule for >140 chars is "one fact per
         milestone list row", and i18n.js is out of scope for this pass. */
      tech: '<ul class="ms">' +
            '<li><span class="m-name">Electron + React + TypeScript</span></li>' +
            '<li><span class="m-name">Python: FastAPI, VAD, Whisper, OpenCV</span></li>' +
            '<li><span class="m-name">Local HTTP + IPC</span></li>' +
            '<li><span class="m-name">FFmpeg stream copy</span></li>' +
            '<li><span class="m-name"><b>No AI feature may break losslessness</b></span></li>' +
            '</ul>',
      honest: '<ul class="ms">' +
              '<li><span class="m-name"><b>No end-to-end usable AI feature</b></span></li>' +
              '<li><span class="m-name">Foundation: skeleton, sidecar, transport</span></li>' +
              '<li><span class="m-name">M3 / M4 untouched; M8 packaging open</span></li>' +
              '<li><span class="m-name">Private: 404. Ask for access.</span></li>' +
              '</ul>'
    },
    foot: 'Status marked <b>in progress</b>: 3 of 11 milestones done, about 27%, last pushed 2026-07-15.'
  },

  ask: {
    kicker: 'Ask AI',
    title: 'Query this page like a record, not a brochure.',
    desc: 'The six questions an AI agent — or a recruiter with ninety seconds — asks first.',
    openHint: 'expand',
    items: [
      { q: 'What scale did you actually operate at?',
        a: '<b>Production figures, not benchmarks.</b> A 10M+ node knowledge graph in AWS Neptune, consumed by 30+ teams. A geolocation API at tens of thousands of requests per second. A government e-invoicing platform across 27 marketplaces.' },
      { q: 'Have you led people, or only shipped code?',
        a: '<b>Both, but technical rather than managerial.</b> Onboarded and mentored 8+ engineers, wrote about 20 team SOPs and reviewed 1,000+ pull requests. Several features could not ship without changing systems owned by other teams — that meant designing internal APIs and negotiating with their owners, not filing a ticket.' },
      { q: 'Why return to school now instead of taking another senior role?',
        a: 'The Waterloo M.Eng. ECE (Co-op) is a deliberate move toward deeper systems and applied AI work, and the Co-op route is the cleanest path into Canadian hiring. A change of direction, not a step back — the same reason AICut exists as working code rather than a paragraph about AI.' },
      { q: 'What can he do on day one, and what needs ramp-up?',
        a: 'Day one: distributed backend, event-driven services, data platforms, AWS architecture, schema and data governance. Needs ramp-up: front-end design systems at scale, and managing a team rather than mentoring inside one.' },
      { q: 'Is he a real builder outside of paid work?',
        a: 'Cam 3D Studio — a one-person hardware brand covering design, 3D printing, packaging, storefront and customer support, shipping to <b>5+ countries</b> with a 100% five-star record. The constraints are real (margin, defects, refunds), which is why the product copy reads like an operator wrote it.' },
      { q: 'How do I verify any of this?',
        a: 'Every row of the project table carries a repository link and most are public. References available on request. The claims that cannot be verified from outside — internal metrics — are the ones kept deliberately narrow.' }
    ],
    foot: 'Static on purpose: no API key, no inference cost, and it still works when scraped, printed, or opened with JavaScript disabled.'
  },

  archive: {
    title: 'Lexi — the old portfolio, archived',
    desc: 'The 2018 carousel (Bump2Share, 3D Breakout, more) moved to <code>/lexi</code>, dead links marked.',
    btn: 'Open the archive'
  },

  contact: [
    { label: 'Email',    value: 'liuhaijob@gmail.com',        href: 'mailto:liuhaijob@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/hairuo-liu',  href: 'https://www.linkedin.com/in/hairuo-liu' },
    { label: 'GitHub',   value: 'github.com/HairuoLiu',        href: 'https://github.com/HairuoLiu' },
    { label: 'Location', value: 'Toronto, ON, Canada',         href: '#contact' },
    { label: 'Response time', value: 'usually within a day',   href: '#contact' }
  ],

  footer: { left: '© 2026 Hairuo Liu · data source: github.com/HairuoLiu/HairuoLiu.github.io', lexi: 'Lexi archive', github: 'GitHub' },

  lexi: {
    title: 'Lexi — the 2018 portfolio, archived',
    desc: 'This is a full migration of <code>HairuoLiu.github.io/ProjectPage.html</code>: the Vue full-screen carousel that collected nine projects from my Ohio State years. <b>Nothing was deleted</b> — content and original links are all intact; three of those links are dead and I have marked them honestly below.',
    note: 'Link check results (verified 2026-10): the <b>Slack channel</b> (Amazon Alexa &amp; Lex) returns 403, <b>pico.org.ohio-state.edu</b> is 404, and the <b>Camp Recky Heroku instance</b> is 404 after Heroku retired its free tier. Both GitBooks (Network Security / Host Hardening) and both GitHub repositories still resolve.',
    back: 'Back to home', backLong: 'Back to the new home page', openOriginal: 'Open original link', deadPrefix: 'Dead',
    brandTag: 'LEXI · ARCHIVE',
    deadNote: { '403': '403 · Slack workspace no longer reachable', '404': '404 · site is gone' },
    campNote: '404 · Heroku free tier retired',
    slides: {
      alexa:   { title: 'Amazon Alexa &amp; Lex', mark: 'Get Error Chatbot' },
      bump:    { title: 'Android Application 1', mark: 'Bump2Share' },
      qrwall:  { title: 'Android Application 2', mark: 'QR Wall' },
      break3d: { title: '3D Computer Game',      mark: '3D Breakout Clone' },
      mario:   { title: '2D Computer Game',      mark: 'Super Mario Game' },
      pico:    { title: 'Web Applications 1',    mark: '&quot;PICO&quot;' },
      camp:    { title: 'Web Applications 2',    mark: 'Camp Recky' },
      netsec:  { title: 'Security Project 1',    mark: 'Network Security' },
      host:    { title: 'Security Project 2',    mark: 'Host Hardening' }
    }
  }
};
