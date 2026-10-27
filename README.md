# HairuoLiu.github.io

Hairuo Liu（刘海若）个人主页 · 数据源 `github.com/HairuoLiu/HairuoLiu.github.io`

## 文件结构

```
index.html               首页（空壳，全部文案由 JS 渲染）
lexi/index.html          旧版 Vue 轮播页存档（/lexi），同样为多语言空壳
assets/style.css         样式（沿用 lizheng.ai 的版式、配色与信息组织）
assets/avatar.webp       Hero 人像主图（800×800 透明 WebP，38KB）
assets/avatar.png        Hero 人像兜底（512×512 透明 PNG，给不支持 WebP 的浏览器）
assets/data.js           与语言无关的数据：仓库 URL、顺序、状态、技术栈、milestone
assets/i18n.js           语言运行时：加载字典、渲染切换控件、localStorage、切换重渲染
assets/i18n/manifest.js  语言注册表（新增语言时加一行）
assets/i18n/en.js        英文文案（默认语言）
assets/i18n/zh.js        中文文案
.nojekyll                跳过 Jekyll 构建
```

## 国际化（i18n）

- **默认英文**。`localStorage` 键 `hairuo.lang` 记住用户选择，刷新或再次访问自动沿用；键不存在或值不在注册表内时回落英文。
- 页面里**没有硬编码文案**。两个 HTML 都是空壳，所有文字来自 `assets/i18n/<code>.js`。
- 与语言无关的东西（链接、状态、技术栈、排序、milestone 编号）放在 `assets/data.js`，字典里只放"给人读的"内容，避免两种语言的数据漂移。

### 新增一门语言（两步）

1. 复制 `assets/i18n/en.js` → `assets/i18n/<code>.js`，翻译其中的值（**键名保持一致**）。
2. 在 `assets/i18n/manifest.js` 里加一行：

```js
{ code: 'ja', label: '日本語', short: 'JA', htmlLang: 'ja', flagSvg: '<svg viewBox="0 0 20 15">…</svg>' },
```

不需要改任何 HTML、CSS 或 JS。切换控件、`<html lang>`、`<title>`、`meta description` 会自动跟上。

### 切换控件

右上角，当前语言国旗 + **Language** + 下拉箭头。按钮标签在两个语料里都是 `Language`（见各字典的 `langLabel`）：读者误触进中文页时，认得出这个控件才能切回英文。点击展开列表（国旗 + 语言全称，各语言用自己的名字），选中即全站重渲染。
支持点击外部关闭、Esc 关闭。移动端下导航隐藏但控件仍在（<420px 时隐藏右侧 GitHub 按钮给控件让位），菜单项高 42px，满足触摸目标尺寸。
首次进入时后台预加载其余语言字典，所以切换是瞬时的。

## 语言切换的动效与国旗（2026-10-21 追加）

**国旗改为 inline SVG。** 原先用 🇬🇧 / 🇨🇳 emoji，但那是区域指示符对（`GB` = U+1F1EC+U+1F1E7，`CN` = U+1F1E8+U+1F1F3）。**Windows 不提供国旗字形**，Chrome/Edge 会降级渲染成两个字母方框，所以 Windows 用户永远只看到 "GB"/"CN" 而看不到国旗。现在旗子写在 `assets/i18n/manifest.js` 的 `flagSvg` 字段里（20×15 viewBox，英旗用四层 stroke 叠加，中旗用一条五角星 path 复用五次），所有平台渲染一致。

**语言名一律用自称名**：`English` / `中文`，不随界面语言翻译。理由是误触逃生——英文读者误点进中文页，菜单若写「英文」他一个字都看不懂就回不去了；写 `English` 至少认得出拉丁字母。按钮在收起态两个语料都显示中立的 `Language`，`aria-label` 同理。

**切换动效**：`i18n.js` 的 `apply(code, animate)` 先给 `body` 加 `.lang-x`（内容区 `filter:blur(6px);opacity:.34`），190ms 后在虚焦状态下重渲染，再移除 class 回到清晰。header 不参与模糊，否则刚点的控件会在鼠标底下糊掉。

**品牌名互换**：首页左上角两个名字在 `.brand` 里用 `order` 交换位置（英文 `Hairuo Liu` 大字 + `刘海若` 小字；中文反之）。`order` 不可动画，所以用 FLIP：改语言前量一次 `getBoundingClientRect`，改完再量一次，用差值做 `element.animate` 反向位移归零，两个名字就真的"换位"而不是瞬移。作用域限定 `body[data-page="home"]`，`/lexi` 的 "LEXI · ARCHIVE" 副标不受影响。

尊重 `prefers-reduced-motion`：CSS 里过渡归零，JS 里直接跳过延时分支。

## Hero 人像（2026-10-22 上线）

版式照搬 lizheng.ai 首页的做法（用户点名要求模仿）：`.hero` 双列 **`align-items:end` 底部对齐**，人像 `.hero-art .portrait` 用 `position:absolute;bottom:0` **锚定在整个简介块的右下角**——不加相框、不加圆角，只用 `drop-shadow` 软投影，尺寸随视口 `clamp(250px,25vw,356px)`。两个质感层都来自参考站的原配方：

- **纸纹 grain**：`.hero.grain:after` 内嵌 feTurbulence SVG data URI，`opacity:.07; mix-blend-mode:overlay`（需 `.hero` 设 `isolation:isolate`）
- **主体背后的柔光**：`.hero:before` 一层 `radial-gradient` 绿调光晕
- 入场动画 `lz-rise` / `lz-rise-portrait`（人像上浮 18px），`prefers-reduced-motion` 时关闭

移动端（≤900px）单列，人像跟在文字**之后**（刻意不用 `order:-1` 置顶——置顶会把 h1 挤出首屏）。

### 首屏文案预算（2026-10 定稿，三位设计顾问收敛后的结果）

首屏只允许 **4 个对象**：eyebrow（灰，身份）· h1（角色+资历）· lede（唯一战绩）· **chip**（可得性，全页唯一彩色重音，直链 `#contact`）+ 2 个 CTA + 人像。

| 槽位 | EN | ZH | 上限 |
|---|---|---|---|
| eyebrow | 27 | 27 | 48 字符 |
| title | 62 | 31 | 60 字符 |
| lede | 55 | 29 | 140 字符 |
| chip | 40 | 27 | 48 字符 |

英文从 **751 → 184 字符（−76%）**，中文从 **363 → 114 字（−69%）**。`hero.sub` 与 5 格 stats 横条**整体删除**——那些数字在履历里全部出现过，删掉不丢信息；原 stats 位置由一枚描边+状态圆点的 chip 对位替换。

两条硬规则，改文案时别踩：
1. **可得性永远不放进 eyebrow**。紧挨着 "Six years at Amazon Ads" 它会被读成降级求职叙事；而且 eyebrow 不可点击，等于把转化动作降级成说明文字。
2. **`hero.chip` 是必填键**。`i18n.js` 只在键存在时渲染 chip，漏写不会有任何报错，只会静默丢掉全页唯一的转化对象。

图片用 `<picture>`：WebP 主图 38KB + PNG 兜底。抠图管线与 1254px 原图在站点外的 `outputs/avatar/`（cutout.py 可重跑）。

## AI 友好层

- `robots.txt`：显式 allow `GPTBot` / `OAI-SearchBot` / `ClaudeBot` / `PerplexityBot` / `Google-Extended` / `Applebot-Extended` / `CCBot`，并指向 sitemap。
- `index.html` head 里的 JSON-LD `Person`：姓名（中英）、职位、所在地、`worksFor`、`alumniOf`、`sameAs`、`knowsAbout`、`seeks`。
- Open Graph / Twitter 卡片：`og:image` 指向 `assets/og.png`（1200×630，由 `_tools/make_og.py` 用 Pillow 生成，改了文案就重跑一次）。
- 「Ask AI」板块（`#ask`，位于 AICut 之后、Contact 之前）：6 条 `<details>` 折叠问答，内容是同一批事实的机器可读版本。**故意做成静态** —— 无 API key、无推理成本、关掉 JavaScript 也能读。

> 分享链接后记得去 [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) 刷一次缓存，LinkedIn 的 OG 缓存很顽固。

## 部署

仓库 Settings → Pages → Source 选 `Deploy from a branch` → Branch `master`（或 `main`）/ root，保存即可。
线上地址：https://hairuoliu.github.io/ ，存档页 https://hairuoliu.github.io/lexi/

> 语言字典按需动态加载。本地直接双击 `index.html`（`file://`）时，若浏览器拦截动态脚本则只会显示英文（英文是静态引入的兜底）。用 GitHub Pages 或任意 HTTP 服务打开即正常。

旧文件 `index.html` 被新首页覆盖；旧内容已迁至 `lexi/index.html`，未做删除。

## 数据来源与链接现状（2026-10 校验）

| 来源 | 结果 |
|---|---|
| `https://hairuoliu.github.io/` | 可访问，但 Vue 静态资源已失效，页面只剩标题文字 |
| `github.com/HairuoLiu/HairuoLiu.github.io` | ✅ 采用为数据源 |
| `https://liuhai.er.github.io/` | ❌ **404，已失效**（仓库仅剩 59 字节 README） |
| `github.com/HairuoLiu/AICut` | 私有仓库（未授权访问返回 404） |

存档页中已失效的外链：Slack 频道（403）、pico.org.ohio-state.edu（404）、Camp Recky 的 Heroku 实例（404）。

## Featured 卡片与 Route Cut

`assets/data.js` 的 `featured` 数组决定 Projects 区顶部精选条带的内容与顺序，每项必须在 `en.js` / `zh.js` 的 `projects.featured` 里有同名条目（键名 = 数组元素）。`href` 为空字符串时卡片不渲染 CTA 链接——用于尚无公开仓库的项目（如 Route Cut），不编造链接。

Route Cut 与 AICut 是两个不同的项目，读者经常混淆，所以在 AICut 板块（`.forest`）顶部加了 `.f-vs` 区分块：文案在字典的 `aicut.vsTitle` / `aicut.vsRoute` / `aicut.vsAicut`，Route Cut 一侧用沙色、AICut 一侧用薄荷色，视觉上跟随主线。

> **Route Cut 的仓库状态未核实**：40 个公开仓库里没有它；当前 GitHub 连接没有私有仓库读取权限（用 AICut 本身做对照实验证实——公开仓库可读、私有仓库 404），因此无法确认它是私有仓库还是尚未建仓。卡片因此不带链接与状态徽章，待用户确认后再补。
