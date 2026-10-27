/* 中文语言资源包。所有面向读者的文案都在这里。
   新增语言时复制本文件改文案即可，键名必须与 en.js 保持一致。 */
window.I18N = window.I18N || {};
window.I18N.zh = {

  meta: {
    title: 'Hairuo Liu — 后端 / 数据平台工程师',
    description: 'Hairuo Liu（刘海若）：6 年 Amazon Ads（SDE → SDE II），10M+ 节点、被 30+ 团队消费的知识图谱，覆盖 27 个市场的合规开票平台；Waterloo M.Eng. ECE (Co-op)。'
  },

  nav: { about: '简介', experience: '履历', skills: '能力', education: '教育', projects: '项目', aicut: 'AICut', ask: 'AI 问答', contact: '联系', github: 'GitHub' },
  /* "Language" 在中文语料里同样用英文：读者被带进错误的语言时，
     仍然认得这个控件。下拉菜单里才是各语言自己的名字。 */
  langLabel: 'Language',

  /* 首屏文案预算（与 en.js 对齐，不要超）：
     eyebrow <= 32 字 · title <= 26 字 · lede <= 30 字 · chip <= 32 字。
     其余事实全部下沉到履历 / 项目 / 联系。
     槽位语法：eyebrow = 我是谁 · h1 = 角色+资历 · lede = 唯一战绩 ·
     chip = 可得性。chip 取代原来的 5 格 stats 横条——那些数字在履历里
     都已出现，删掉不丢信息。可得性是全页转化率最高的事实，因此独立成件
     并直链 #contact；但不放进 eyebrow——紧挨着"在 Amazon 六年"读起来
     是降级求职叙事，而不是一条可得性事实。*/
  hero: {
    eyebrow: 'Waterloo M.Eng. ECE (Co-op)',
    title: '后端 / 数据平台工程师，在 Amazon Ads 做了六年。',
    /* 与 EN 的有意不对称（IA 已批准）：EN 走 ATS 精确匹配，加 "brand" 会把
       `10M+ node brand / knowledge graph` 断成歧义词；ZH 是人工阅读，
       精确描述更值钱，因此补上"品牌"。*/
    /* 归属：图谱是团队成果。原文「是我搭的」把共同完成的工作算成个人独占，
       招聘官追问「还有谁参与」时会与页面说法不一致。 */
    lede: '我是 10M+ 节点品牌知识图谱背后的团队成员，30+ 个团队在用。',
    /* 定稿措辞，勿再改：「Co-op 开放中」= 进行体（补上「开放」缺的时态，
       否则读成残句），同时不出现「机会」二字（那是 JD 语汇，不是人主页语汇），
       也不说「接受」（那是招生/录取的决策语感）。 */
    chip: 'Co-op 开放中 · 2027 冬季 · 4–8 个月',
    btnProjects: '看项目',
    btnEmail: '发邮件',
    portraitAlt: '刘海若的个人照'
  },

  /* hero 下方的简介段。三个节拍各自成段，窄屏下节奏不会被硬换行打断。
     用词偏平实：扫这段文字的招聘官，通常不是会去读 Experience 细节的人。 */
  about: [
    '在 Amazon Ads 待了六年，先后在两个组：先做核心平台，2021 年晋升 SDE II 后转到数据平台。',
    '我负责的是那张图谱背后的品牌数据平台与毫秒级查询。',
    '我自己也设计并出货 3D 打印的相机配件。现在在 Waterloo 读 M.Eng. ECE（Co-op），方向从数据平台转向应用型 AI。'
  ],

  sec: {
    experience: { kicker: 'Experience', title: '从核心平台到数据平台，一路离真实的规模越来越近', desc: '两段 Amazon Ads 经历 + 一段我自己跑通的硬件创业。' },
    skills:     { kicker: 'Skills',     title: '能力清单', desc: '按实际用过的深度列，不堆关键词。' },
    education:  { kicker: 'Education',  title: '教育', desc: '' },
    projects:   { kicker: 'Projects',   title: '项目清单', desc: '按主题与重要度归类而非 star 排序，每个项目都带我自己的判断。' },
    contact:    { kicker: 'Contact',    title: '联系', desc: '看 Co-op 机会（2027 冬季起，4–8 个月）；相机、3D 打印、AI 剪辑。' }
  },

  jobs: [
    { company: 'Amazon Ads — Data Platform', role: 'Software Development Engineer II（2021 年晋升）', period: 'Toronto, ON · 2021 – 2025', bullets: [
      '主导品牌数据核心平台：一个 <b>10M+ 节点的 AWS Neptune 知识图谱</b>，被 30+ 团队消费、支撑大部分品牌数据摄入链路。',
      '合并多条摄入路径并调优 Gremlin 查询，把品牌 ID 查询压到毫秒级。',
      '从零设计 Non-Endemics 数据平台（HLD 由我撰写），接入数千家非平台内广告主。',
      '底层建立在数百万品牌关系的回填之上，其标准化 schema 与数据契约成为跨团队治理标准。',
      '<b>跨团队落地能力</b>：我们的服务缺地理定位能力，就到 geo 团队的内部系统里建 API 再回来消费——不拥有对方代码库，但把依赖打通。',
      '发起并主导跨多个广告系统的数据归一项目：先用 SQL 分析判定哪些同名品牌可合并，再由我写的算法与服务端管线统一它们的层级，把品牌定义覆盖率提到 <b>95%+</b>。',
      '上线前在一级低延迟服务上做每周看板来降低风险。',
      '带过 8+ 位工程师上手（每个团队手把手带 2 人），写约 20 份团队 SOP；作为分布式 SOA 服务的跨团队设计评审者审过 <b>1,000+ 个 PR</b>，做过 10 场内部分享（CDK 与 AWS 架构）。'
    ]},
    { company: 'Amazon Ads — Core Platform', role: 'Software Development Engineer', period: 'New York, NY → Toronto, ON · 2019 – 2021', bullets: [
      '从零构建地理定位 API：<b>每秒数万请求</b>、低延迟高可用，含税籍判定所需的 PII 合规 IP 解析，配全球看板。',
      '交付政府电子发票平台：事件驱动系统（SQS / SNS / DynamoDB），替换掉遗留计费，计费数据从 RDS 迁到 DynamoDB，市场接入从数月缩短到 <b>一天</b>。',
      '平台先在印度上线，我一个人把它从 2 个市场推到 8+（AU / JP / BR / IN），随后写了把它带到 <b>27 个市场</b>的方案；端到端负责税务 API，每天承接数百万次合规关键请求。',
      '做了一键式 AWS CDK 开发工作流和服务端部署链路，把环境搭建从一天压到<b>几分钟</b>，并在 AU / JP / BR 扩张中复用。'
    ]},
    { company: 'Cam 3D Studio', role: 'Founder &amp; Lead Engineer', period: 'Toronto, ON · 2023 – 至今', bullets: [
      '一个人跑通硬件品牌全链路：Fusion 360 设计 → Bambu Lab 打样 → 工厂 CNC → 发货到 5+ 个国家，每一批都有质检关卡，<b>100% 五星评价</b>。',
      '直接对接客户做定制：为 <b>Fujifilm 瑞典</b>做了 10 台定制电影灯，每个单子从需求、打样到交付都我自己走完。',
      '另外手工组装了 <b>50+ 只「饼干镜头」</b>，把老款傻瓜机镜头重新装进 Sony E / Fuji X / Leica L / Canon RF / M4/3 卡口，交付给多伦多的摄影师。',
      'MakerWorld 上开源 30+ 个参数化模型，累计 <b>4,800+ 次下载</b>。'
    ]}
  ],

  skills: [
    { title: '语言与工具',     body: 'Java · Python · SQL · Gremlin · Scala · Kotlin · Smithy · TypeScript · Swift · Git · Linux · Claude Code · Cursor' },
    { title: 'AWS 与云',       body: 'Neptune · DynamoDB · Lambda · S3 · SQS/SNS · EventBridge · ECS · CloudFormation · CDK · CodePipeline · CloudWatch · KMS' },
    { title: '数据与 ML',      body: 'Glue · Redshift · EMR · SageMaker · Apache Kafka · MySQL · MongoDB' },
    { title: '架构与工程实践', body: '微服务与 SOA · 事件驱动 · 知识图谱 · 数据治理 · ETL 与数据管线 · CI/CD 与 IaC · 可观测性' },
    { title: '认证',           body: 'AWS Certified Solutions Architect – Associate' },
    { title: '设计与制造', body: 'Fusion 360（参数化建模 / add-in）· Bambu Lab · CNC 工艺 · 产品摄影与后期' }
  ],

  edu: [
    { school: 'University of Waterloo', degree: 'M.Eng., Electrical &amp; Computer Engineering（Co-op 方向）· Waterloo, ON', when: '2026 年 9 月入学 · 预计 2028' },
    { school: 'The Ohio State University', degree: 'B.S., Computer Science and Engineering · Columbus, OH', when: '2013 – 2017' }
  ],

  projects: {
    note: '<b>数据来源：</b>GitHub API——<code>github.com/HairuoLiu</code> 下的全部公开仓库，外加私有的 AICut。2018 年的作品集完整保留在 <a href="lexi/">/lexi</a>。',

    col: { name: '项目', one: '一句话', stack: '技术栈', status: '状态', link: '链接', note: '客观评价' },
    noteToggle: '客观评价',

    status: { done: '已完成', wip: '进行中', wipbase: '进行中（基座）', parked: '已停更', fork: '第三方 fork', dead: '已失效' },
    sub: { private: '私有仓库', fork: 'fork', star1: '★ 1', star2: '★ 2', star4: '★ 4', star6: '★ 6', star10: '★ 10', star32: '★ 32' },

    featured: {
      'AICut': { tag: '进行中 · 主线', desc: '在 LosslessCut 的无损剪辑内核上接一个 Python AI Sidecar，做口播视频的自动粗剪与气口删除——剪完仍然 100% 无损、不重编码。目前 11 个 milestone 完成 3 个。', href: '#aicuts', cta: '看定位、进度与技术方向 →' },
      'sony-sooc-recipes': { tag: '★ 32 · 最受欢迎', desc: '索尼直出色彩风格，一键 Windows 安装器写进机身——149 款可装（共收录 164 款），免费 Base 安装器带 6 个品牌包 / 91 款。社区里唯一一个有真实外部用户的代表作。', href: 'https://github.com/HairuoLiu/sony-sooc-recipes', cta: 'github.com/HairuoLiu/sony-sooc-recipes ↗' },
      'ai-film-director-skill': { tag: '★ 10 · 已发布', desc: '两阶段 AI 影视创作工作流：第一阶段出剧本，第二阶段出分镜与 Seedance 2.0 提示词，最终落到标准九列分镜表。已有外部使用者。', href: 'https://github.com/HairuoLiu/ai-film-director-skill', cta: 'github.com/HairuoLiu/ai-film-director-skill ↗' },
      'OptiThread': { tag: '★ 4 · 已上架 Autodesk App Store', desc: '给 Fusion 360 补上缺失的镜头/滤镜螺纹标准，直接挂进原生 Thread 下拉菜单：73 个尺寸 × 0.75 / 1.0 mm，外加真正的 26 TPI 徕卡 L39/LTM（Whitworth 55° 牙型），并预置 0.10 mm 打印让位——打出来的件第一次就拧得上去。原名 fusion-lens-threads。', href: 'https://github.com/HairuoLiu/OptiThread', cta: 'github.com/HairuoLiu/OptiThread ↗' },
      'RouteCut': { tag: 'Pipeline · 人在环路', desc: '和 AICut 是不同的项目，也刻意不是同一个赌注。面向追求极致效率的人：pipeline 只把最基础、最稳固、100% 确定的重复步骤交给 AI，把省下的时间买回来；你留在环路里做审阅和修剪。', href: '', cta: '' }
    },

    groups: {
      a: { name: 'A. AI 与影像创作（主线）', desc: '在做的、和已经跑通的。AICut 是唯一还在推进的大项目。' },
      b: { name: 'B. 系统 / 底层 / 性能', desc: '离主业最近的一类：分布式与性能的自我训练。' },
      c: { name: 'C. 相机与影像工具', desc: '从自己的摄影需求里长出来的一批工具，也是唯一有真实外部用户的一类。' },
      d: { name: 'D. 3D 设计与制造', desc: '副业与主业的交集：把建模、参数化和工程化串起来。' },
      e: { name: 'E. Web 与应用', desc: '完整走过「想法 → 规格 → Demo」的几件事。' },
      f: { name: 'F. 影视创作参考（第三方 fork）', desc: '明确标注：这两个是别人的作品，我 fork 下来作为 AICut 与导演 Skill 的参考，不算我的产出。' },
      g: { name: 'G. 早期 / 课程 / 参考仓库', desc: '2017–2019 年前后的课程作业、算法练习与 fork。保留是为了诚实，不建议面试时当作作品讲。' }
    },

    p: {
      'AICut': { one: '在 LosslessCut 上加 AI Sidecar，做口播粗剪与气口删除，全程无损',
        note: '解决：长口播里人工找气口与废片最耗时间。<em>亮点：M0–M2 已 push（409 + 288 + 567 测试全绿），「100% 无损」是硬约束而非卖点。</em> <i>不足：M3 起未动，约 27%，尚无端到端可用功能。</i>' },
      'ai-film-director-skill': { one: '两阶段 AI 影视创作 Skill：剧本 → 分镜 + Seedance 2.0 提示词',
        note: '解决：AI 视频生成缺一套可复用的导演工作流，提示词凭感觉写。<em>亮点：两阶段拆解干净，产出可直接落地的九列分镜表；★10 说明有真实外部使用者。</em> <i>不足：无代码、无自动化测试，价值高度绑定特定模型，模型换代就要重写。</i>' },
      'lossless-cut': { one: 'LosslessCut 上游镜像，作为 AICut 的基座',
        note: '解决：不想从零写一套无损剪辑内核。<em>亮点：选了一个被大规模验证过的 GPL 基座，省掉几年工程量。</em> <i>不足：README 仍是上游原文，也没记录同步策略，会积累合并成本。</i>' },

      'kvmem-strata-fusion': { one: 'KVMem × Strata 融合研究：四个可证伪的执行计划（IFR / LADDER / UBBA / CASA）横向对比',
        note: '解决：内存/存储分层融合的路线选择，通常靠直觉拍板。<em>亮点：先写四个互相竞争的执行计划再横向对比，这种可证伪的写法很少见。</em> <i>不足：benchmark 结论未出，没有公开性能数据，外人看不出它证明了什么。</i>' },
      'CoreBar': { one: 'macOS 菜单栏的 macmon 前端：CPU / GPU / 内存 / 温度趋势图 + 每个核的利用率',
        note: '解决：想在菜单栏 2 Hz 看整机状态，但 WidgetKit 被限制成分钟级刷新。<em>亮点：把「为什么不用 widget」想清楚了并写进 TALK.md；一个 Swift 文件、零依赖，安装即用。</em> <i>不足：只覆盖 Apple Silicon（依赖 macmon 的采样口径），无测试与发布渠道。</i>' },

      'sony-sooc-recipes': { one: '149 个索尼直出色彩风格、12 个品牌包，一键 Windows 安装器写进机身',
        note: '解决：机身直出风格难找，也难批量导入。<em>亮点：149 款 look 分 12 个品牌包，一键装机而非手动拷文件——这也是 ★32 的来源。</em> <i>不足：仅 Windows，机型与固件覆盖有限，且依赖厂商未公开的格式。</i>' },
      'Fujifilm-HIF2JPG': { one: '富士 HIF → JPG 的 Windows 11 风格无损转换工具，保留 ICC 与 EXIF',
        note: '解决：富士 HIF 流通性差，常见转换器会丢色彩配置导致偏色。<em>亮点：把「保留 ICC + EXIF」写成了验收标准，拖拽即用。</em> <i>不足：仅 Windows，打包体积受编码库拖累，无 CI 产物。</i>' },
      'leica-lfi-submission-helper': { one: 'Chrome MV3 插件：本地读 EXIF、自动填表、生成投稿文案，支持语音输入（中/英）',
        note: '解决：给 Leica LFI Gallery 投稿要重复手填大量 EXIF 与文案。<em>亮点：EXIF 在浏览器本地读取（不上传），隐私处理正确；发布说明与投稿指南齐全。</em> <i>不足：用户面极窄（只服务一个投稿站点），未上 Chrome Web Store，目标站点改版即失效。</i>' },
      'photo-contest-calendar': { one: '全球摄影赛事截稿日历，无后端、免登录、开源',
        note: '解决：摄影比赛截稿日期散落在各官网，靠人肉记。<em>亮点：零后端、零登录，数据靠 Actions 定时刷新，运维成本几乎为零；中英双语。</em> <i>不足：赛事数据需要人工维护，覆盖面与更新频率取决于我有没有时间；无提醒推送。</i>' },
      'camera-rental': { one: '相机租赁目录，中英双语静态站，数据从 Notion 同步',
        note: '解决：多伦多本地相机租赁价格与库存分散。<em>亮点：用 Notion 当 CMS、生成静态页，内容与展示分离，这个取舍是对的。</em> <i>不足：数据源停更、库存无法实时，实际上已不能当作工具用；也没有做价格对比之外的差异化。</i>' },
      'hairuo-portfolio': { one: '个人摄影作品集：3D 相机画廊',
        note: '解决：作品集需要一个比网格更有记忆点的呈现。<em>亮点：3D 画廊的形式感强。</em> <i>不足：图片存储吃掉了主要工程量，3D 在移动端偏重、首屏也慢。</i>' },
      'ebay-camera-feed': { one: 'eBay 相机商品 feed，静态页 + XML',
        note: '解决：想把二手相机库存同步成可订阅的 feed。<em>亮点：结构极简，部署零成本。</em> <i>不足：无描述、无 README，数据更新依赖手工，目前更像一个占位仓库。</i>' },

      'OptiThread': { one: 'Fusion 360 的镜头/滤镜螺纹规格，作为原生 Thread 下拉家族直接可用（原名 fusion-lens-threads）',
        note: '解决：Fusion 360 缺 24–127 mm 的 0.75 / 1.0 mm 光学螺纹表。<em>亮点：L39/LTM 用真正的 26 TPI（0.9769 mm）、Whitworth 55° 牙型，而非 M39×1.0 近似；预留 0.10 mm 打印让位。</em> <i>不足：只覆盖螺纹一类，安装器依赖默认目录。</i>' },
      'voronoi-fusion': { one: '离线 Voronator：把任意实体变成 Voronoi 穿孔外壳，Fusion 360 插件 + Web 原型',
        note: '解决：Voronoi 穿孔外壳当时只能靠付费或在线工具。<em>亮点：核心算法与插件分离，可独立测试，也能在 Web 上先验证参数。</em> <i>不足：原型级、未打包；复杂网格上性能与鲁棒性未验证，仅支持实体。</i>' },
      '3d-parametric-compiler': { one: '把参数化 3D 模型编译成可调参产物（前端 + 后端）',
        note: '解决：参数化模型分享出去后，对方改参数很麻烦。<em>亮点：前后端结构已搭好，方向有潜力。</em> <i>不足：README 之外几乎没有内容，没有可运行的 demo，无法判断完成度——目前是想法仓库。</i>' },
      'Gridfinity-AI': { one: '用 AI 生成 Gridfinity 收纳模块（含 Vercel Serverless API）',
        note: '解决：Gridfinity 模块组合多，手选耗时。<em>亮点：有 SPEC.md，说明先想清楚了规格再写代码；Serverless 部署路径正确。</em> <i>不足：无 README 描述、无可用 demo，「AI」部分没有看到模型或评估逻辑，实际完成度低。</i>' },
      'Lumina-Layers': { one: 'FDM 分层混色引擎实验：CMYK 模式的像素画多色打印',
        note: '性质：fork，非本人原创，作为学习/参考保留。<i>我没有在这个 fork 上产出可见的改动，列在这里只是表示技术兴趣，不能算作品。</i>' },

      'ikear': { one: '二手家具 C2C 市场：一套代码编译到 iOS / Android / Web，配 Supabase 后端',
        note: '解决：二手家具同城 C2C 交易缺少像样的移动端体验。<em>亮点：PRODUCT_SPEC 到 E2E_SIGN_OFF 四份文档齐全；架构离线优先。</em> <i>不足：后端私有，公开仓库跑不起来；2026-08 之后没有推进。</i>' },
      'pixel-farm-groceries': { one: '16-bit 农场游戏外壳里的采购工具：选菜 → 按货架分区生成采购清单',
        note: '解决：「今晚吃什么」是每天的三连决策——吃什么、买什么、怎么走。<em>亮点：自研 12×12 像素引擎出 125 枚图标，104 道菜聚合到 8 个货架分区；另有 1 MB 离线单文件版。</em> <i>不足：为 1024 挑战而做，范围刻意收窄；无账号与同步。</i>' },
      'waterloo-toolkit': { one: '滑铁卢大学学生工具箱：纯静态 GitHub Pages，子工具靠 manifest 自动挂首页',
        note: '解决：新生（尤其 MEng / Co-op）缺少一份能照着勾的检查清单。<em>亮点：manifest.json 驱动首页，加子工具不动首页；含 112 门课的课程导航。</em> <i>不足：内容正确性全靠我维护，没有校对机制；子工具质量参差。</i>' },
      'resell-workbench': { one: '一次编辑，同时发布到 Facebook / Kijiji / 小红书 / Karrot 四个二手平台',
        note: '解决：跨平台二手发布要重复填四遍。<em>亮点：零依赖、纯本地，隐私与部署成本都最优；automation 目录说明想过自动化这条路。</em> <i>不足：各平台前端结构一变就断，维护成本高；没有做成扩展或托管服务，分发弱。</i>' },
      'nfc-card': { one: '零代码电子名片 / NFC 落地页：改一个 config.js 或用可视化编辑器，扫码即用',
        note: '解决：非技术用户想有一个能写进 NFC 的名片页。<em>亮点：可视化编辑器直接生成 config.js，门槛降到最低。</em> <i>不足：功能面窄，模板化程度有限，无统计与多语言切换。</i>' },
      'sd-label-pro': { one: 'SD 卡标签生成器：模板 + 主题 + 批量导出',
        note: '解决：给存储卡/线材贴标签要反复排版。<em>亮点：有 ARCHITECTURE.md 与 PROMPT.md，说明动工前做过设计；themes / examples 分目录。</em> <i>不足：仓库描述为空，UI 与打印精度未验证，examples 之后无实质推进。</i>' },

      'shanyin-director-master': { one: '专业影视导演 Agent：剧本 → 定调 → 节奏 → 九列分镜表（xlsx）',
        note: '性质：fork。<i>我没有可见改动；它的价值在于给我自己的 ai-film-director-skill 提供了九列分镜表的行业参照，不作为我的作品计入。</i>' },
      'shanyin-screenwriting-master': { one: '全格式影视编剧技能：概念短片到 90 分钟长片与多集剧集',
        note: '性质：fork。<i>同上，参考资料用途，不计入我的产出。</i>' },

      'Coding': { one: '算法与数据结构练习集',
        note: '性质：刷题积累。<em>★6 说明有人顺手 star。</em> <i>无组织、无说明、2023 年后停更，只是练习痕迹。</i>' },
      '3902GameProject': { one: 'CSE 3902 课程游戏项目',
        note: '性质：课程作业。<i>无 README、无构建说明，难以复现；存档价值大于展示价值。</i>' },
      'wordpress': { one: '早期 WordPress 站点的主题/配置',
        note: '性质：早期建站残留。<i>无说明，安全上也未维护，仅作历史保留。</i>' },
      'Bump2Share-CSE5236': { one: '两台手机「碰一碰」拼成大屏一起看视频',
        note: '性质：课程项目（已迁移到 <a href="lexi/">/lexi 存档</a>）。<em>想法有趣，是当年移动端课程里少见的交互设计。</em> <i>代码停留在 2018 年，无法在现代 Android 上构建。</i>' },
      'QR-Wall-CSE4471': { one: '基于二维码的留言墙',
        note: '性质：课程项目（已迁移到 <a href="lexi/">/lexi 存档</a>）。<i>无 README，年代久远，仅作存档。</i>' },
      'Leap-Motion-In-Unity3D': { one: 'Leap Motion 手势控制在 Unity 中的集成实验',
        note: '性质：fork。<i>无本人改动，XR 方向的兴趣痕迹。</i>' },
      'xr-unity': { one: '8th Wall WebXR 的 Unity 工程与资源',
        note: '性质：fork。<i>无本人改动。</i>' },
      'data-structures': { one: '通用数据结构实现集合',
        note: '性质：fork。<i>无本人改动。</i>' },
      'styleguide': { one: 'Google 开源项目风格指南',
        note: '性质：fork。<i>无本人改动。</i>' },
      'git-tips': { one: 'Git 使用技巧合集',
        note: '性质：fork。<i>无本人改动。</i>' },
      'weui.js': { one: 'WeUI 的轻量 JS 库',
        note: '性质：fork。<i>无本人改动。</i>' },
      'secbook': { one: '信息安全从业者书单',
        note: '性质：fork。<i>无本人改动，安全方向的兴趣痕迹。</i>' },
      'apps-script-samples': { one: 'Google Apps Script 官方示例',
        note: '性质：fork。<i>无本人改动。</i>' },
      'sandbox-github-clone': { one: 'GitHub 数据抓取/分析沙盒',
        note: '性质：fork。<i>无本人改动。</i>' },
      'HowToLiveBetter': { one: '生活决策指南：医疗、法律、理财、出国等，每条写明成本/收益/证据等级',
        note: '性质：fork。<em>内容本身有价值（每条都标证据等级与出处）。</em> <i>非我原创，不计入产出。</i>' },
      'HairuoLiu.github.io': { one: '本站点；旧版 Vue 单页已迁到 /lexi',
        note: '性质：个人站点。<em>本页的数据来源仓库。</em> <i>旧 index.html 引用的 Vue 静态资源已失效，线上只剩标题文字——正是这次重写的原因。</i>' }
    }
  },

  aicut: {
    kicker: 'In progress',
    title: 'AICut — 无损的 AI 口播剪辑器',
    desc: '它不是「接个大模型」，而是给一个被验证过的无损剪辑内核加一层会听话的 AI。',
    posTitle: '项目定位',
    vsTitle: 'Route Cut ≠ AICut——两个项目，两种取舍',
    vsRoute: { name: 'Route Cut', body: '面向追求极致效率的人：pipeline 只把最基础、最稳固、100% 确定的重复步骤交给 AI，把省下的时间买回来；你留在环路里，专注审阅和修剪。' },
    vsAicut: { name: 'AICut', body: '完全由 AI 自动剪辑口播视频、无需人工参与的项目：AI 决定剪哪儿，FFmpeg 决定怎么剪，全程 100% 无损。' },
    pos: [
      'LosslessCut 已经证明了「无损剪辑」这条路走得通——几乎直接拷贝数据、不重编码、快到可以随手剪几个 GB 的素材。但它<b>不会听内容</b>：一段两小时的口播，你得自己听、自己找气口和废片。',
      'AICut 要补的就是这一层：在 Electron 主程序之外挂一个 <b>Python AI Sidecar</b>（Silero VAD + faster-whisper + OpenCV），让「<b>去掉所有气口</b>」「<b>去掉所有重复 take</b>」变成一次点击，同时<b>保持 100% 无损</b>——AI 只负责给出 cut 决策，搬运数据的仍然是 FFmpeg 的流拷贝。',
      '一句话：<b>让 AI 决定剪哪儿，让 FFmpeg 决定怎么剪。</b>'
    ],
    progLabel: '当前进度',
    progSuffix: 'milestone · 27%',
    progMeta: '最后推进：2026-07-15（M2 通信层完成并 push）· 基座 LosslessCut v3.69.0 (GPL) · 私有仓库',
    msTitle: 'Milestone 路线图',
    ms: {
      M0: '项目初始化 &amp; Fork 基座（45 骨架 + 409 测试）',
      M1: 'Python AI Sidecar 实现（27 文件 + 288 测试）',
      M2: 'Electron ↔ Sidecar 通信层（20 文件 + 567 测试）',
      M3: '口播剪辑核心：Silero VAD + faster-whisper',
      M4: '气口分类引擎 + 交互界面 + 重复 Take 检测',
      M5: '粗剪模式：黑场 / 模糊 / 重复 / 静止检测 + UI',
      M6: '多服务商 API Key 绑定与验证',
      M7: '音量分析标注 + Whisper 字幕生成',
      M8: '打包与分发（Python 嵌入 + 模型按需下载）',
      M9: '转录驱动编辑（文本 → segments 映射）',
      M10: 'MCP / Agent 接口'
    },
    msState: { done: '已完成', todo: '未开始', wip: '从 M4 起步', hold: '暂缓' },
    cardsTitle: { done: '已落地的能力', planned: '规划功能', tech: '技术方向', honest: '诚实的现状' },
    cards: {
      done: ['FastAPI Sidecar：6 个端点 + Pydantic 模型 + 生命周期管理',
             '15 个 IPC handler，主进程与渲染进程类型完整对齐',
             'API Key 绑定 / 验证 / 脱敏',
             '409 + 288 + 567 测试全部通过，0 源码缺陷'],
      planned: ['口播粗剪：自动删除气口、静音段、重复 take',
                '粗剪模式：黑场 / 模糊 / 静止片段检测',
                '转录驱动编辑：改文本即改时间线（对标 ChatCut）',
                '音量标注 + Whisper 生成 SRT 字幕'],
      /* 与 en.js 对齐：卡片正文改 milestone 列表行，一行一个事实。 */
      tech: '<ul class="ms">' +
            '<li><span class="m-name">Electron + React + TypeScript</span></li>' +
            '<li><span class="m-name">Python：FastAPI、VAD、Whisper、OpenCV</span></li>' +
            '<li><span class="m-name">本地 HTTP + IPC</span></li>' +
            '<li><span class="m-name">FFmpeg 流拷贝</span></li>' +
            '<li><span class="m-name"><b>任何 AI 功能都不能破坏无损</b></span></li>' +
            '</ul>',
      honest: '<ul class="ms">' +
              '<li><span class="m-name"><b>没有一个端到端可用的 AI 功能</b></span></li>' +
              '<li><span class="m-name">三个已完成的全是地基：骨架、Sidecar、通信层</span></li>' +
              '<li><span class="m-name">M3 / M4 未动；M8 打包分发待解</span></li>' +
              '<li><span class="m-name">私有仓库：404，需要访问请找我</span></li>' +
              '</ul>'
    },
    foot: '状态标注为<b>进行中</b>：3/11 milestone 完成，约 27%，最近一次推进在 2026-07-15。'
  },

  ask: {
    kicker: 'AI 问答',
    title: '把这一页当数据记录来查，不是当宣传册来读。',
    desc: '下面六个是 AI Agent（或只有九十秒的招聘官）最先会问的问题。',
    openHint: '展开',
    items: [
      { q: '你实际处理的规模有多大？',
        a: '<b>这些是生产数字，不是压测数据。</b> AWS Neptune 上 1000 万+ 节点的知识图谱，被 30+ 个团队消费。每秒数万请求的地理定位 API。覆盖 27 个市场的政府电子发票平台。' },
      { q: '你带过人，还是只写过代码？',
        a: '<b>两者都有，但是技术领导而非管理。</b>onboard 并带过 8+ 名工程师，写过约 20 份团队 SOP，review 过 1000+ 个 PR。有几个功能不改造其他团队的系统就上不了线——那部分工作意味着设计内部 API 并和对方的 owner 谈，而不是提个工单等着。' },
      { q: '为什么现在回去读书，而不是再接一个高级岗位？',
        a: '滑铁卢的 M.Eng. ECE（Co-op）是刻意转向更深的系统与应用 AI，而 Co-op 是把身份落到加拿大招聘体系里最干净的路径。这是换方向，不是退一步——这也是 AICut 以可运行代码存在、而不是以一段关于 AI 的说明存在的原因。' },
      { q: '他第一天能干什么，什么需要时间上手？',
        a: '第一天能上手：分布式后端、事件驱动服务、数据平台、AWS 架构、schema 与数据治理。需要时间：规模化前端设计系统，以及带团队（我做过 mentor，没做过 manager）。' },
      { q: '他在本职工作之外是真正的动手者吗？',
        a: 'Cam 3D Studio——一个人的硬件品牌，涵盖设计、3D 打印、包装、店铺与售后，发货到 <b>5+ 个国家</b>，100% 五星记录。约束是真的（毛利、不良率、退款），所以那些产品文案读起来像老板自己写的。' },
      { q: '我怎么核实这些？',
        a: '项目表每一行都有仓库链接，多数是公开的。推荐人可随时提供。而那些外部无法核实的部分——内部指标——正是被刻意写得最克制的部分。' }
    ],
    foot: '刻意保持静态：不需要 API key，不产生推理费用，被爬、被打印、或关掉 JavaScript 打开时都照样可用。'
  },

  archive: {
    title: 'Lexi — 旧版作品存档',
    desc: '2018 年的轮播页（Bump2Share、3D Breakout 等）已整体迁到 <code>/lexi</code>，失效链接已标注。',
    btn: '打开存档'
  },

  contact: [
    { label: 'Email',    value: 'liuhaijob@gmail.com',       href: 'mailto:liuhaijob@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/hairuo-liu', href: 'https://www.linkedin.com/in/hairuo-liu' },
    { label: 'GitHub',   value: 'github.com/HairuoLiu',       href: 'https://github.com/HairuoLiu' },
    { label: '所在地',   value: '加拿大安大略省多伦多',        href: '#contact' },
    { label: '回复时间', value: '通常一天内',                  href: '#contact' }
  ],

  footer: { left: '© 2026 Hairuo Liu · 本页数据源：github.com/HairuoLiu/HairuoLiu.github.io', lexi: 'Lexi 存档', github: 'GitHub' },

  lexi: {
    title: 'Lexi — 旧版作品存档（2018）',
    desc: '这是 <code>HairuoLiu.github.io/ProjectPage.html</code> 的完整迁移：当年那个 Vue 全屏轮播页，收录了 9 个 OSU 时期的作品。原页面的内容与链接<b>一个都没删</b>；其中 3 个外链经实测已经失效，我在下面如实标注了。',
    note: '链接实测结果（2026-10 校验）：<b>Slack 频道</b>（Amazon Alexa &amp; Lex）返回 403，<b>pico.org.ohio-state.edu</b> 已 404，<b>Camp Recky 的 Heroku 实例</b>已随 Heroku 免费档下线而 404；两个 GitBook（Network Security / Host Hardening）与两个 GitHub 仓库仍然可访问。',
    back: '回到首页', backLong: '回到新版首页', openOriginal: '打开原链接', deadPrefix: '已失效',
    brandTag: 'LEXI · 存档',
    deadNote: { '403': '403 · Slack 工作区已不可访问', '404': '404 · 站点已下线' },
    campNote: '404 · Heroku 免费档已停运',
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
