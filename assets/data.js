/* Language-neutral site data.
   Anything that is identical in every language lives here: URLs, ids,
   ordering, status codes, tech stacks. Everything a reader reads lives in
   assets/i18n/<code>.js. */
window.SITE_DATA = {

  /* Project groups, in display order. `id` is the translation key. */
  groups: [
    { id: 'a', projects: [
      { id: 'AICut',                     repo: 'AICut',                     status: 'wip',    sub: 'private', url: 'https://github.com/HairuoLiu/AICut',
        stack: 'Electron · React · TypeScript · FastAPI · Silero VAD · faster-whisper · OpenCV · FFmpeg' },
      { id: 'ai-film-director-skill',    repo: 'ai-film-director-skill',    status: 'done',   sub: 'star10',  url: 'https://github.com/HairuoLiu/ai-film-director-skill',
        stack: 'Skill (Markdown) · LLM prompting · Seedance 2.0' },
      { id: 'lossless-cut',              repo: 'lossless-cut',              status: 'wipbase', sub: 'fork',  url: 'https://github.com/HairuoLiu/lossless-cut',
        stack: 'Electron · React · TypeScript · FFmpeg' }
    ]},
    { id: 'b', projects: [
      { id: 'kvmem-strata-fusion',       repo: 'kvmem-strata-fusion',       status: 'wip',    sub: '',       url: 'https://github.com/HairuoLiu/kvmem-strata-fusion',
        stack: 'Python · C / CUDA · CMake · pytest' },
      { id: 'CoreBar',                   repo: 'CoreBar',                   status: 'done',   sub: 'star1',  url: 'https://github.com/HairuoLiu/CoreBar',
        stack: 'Swift (single file, zero dependencies)' }
    ]},
    { id: 'c', projects: [
      { id: 'sony-sooc-recipes',         repo: 'sony-sooc-recipes',         status: 'done',   sub: 'star32', url: 'https://github.com/HairuoLiu/sony-sooc-recipes',
        stack: 'Python · Windows installer · camera profile protocol' },
      { id: 'Fujifilm-HIF2JPG',          repo: 'Fujifilm-HIF2JPG',          status: 'done',   sub: '',       url: 'https://github.com/HairuoLiu/Fujifilm-HIF2JPG',
        stack: 'Python · PySide · libheif · libx265' },
      { id: 'leica-lfi-submission-helper', repo: 'leica-lfi-submission-helper', status: 'done', sub: '',     url: 'https://github.com/HairuoLiu/leica-lfi-submission-helper',
        stack: 'JavaScript · Chrome MV3 · Web Speech API' },
      { id: 'photo-contest-calendar',    repo: 'photo-contest-calendar',    status: 'done',   sub: 'star2',  url: 'https://github.com/HairuoLiu/photo-contest-calendar',
        stack: 'TypeScript · Vite · React · Tailwind · GitHub Actions' },
      { id: 'camera-rental',             repo: 'camera-rental',             status: 'parked', sub: '',       url: 'https://github.com/HairuoLiu/camera-rental',
        stack: 'JavaScript · Python (Notion sync) · static site' },
      { id: 'hairuo-portfolio',          repo: 'hairuo-portfolio',          status: 'done',   sub: '',       url: 'https://github.com/HairuoLiu/hairuo-portfolio',
        stack: 'TypeScript · Vite · React · Tailwind' },
      { id: 'ebay-camera-feed',          repo: 'ebay-camera-feed',          status: 'parked', sub: '',       url: 'https://github.com/HairuoLiu/ebay-camera-feed',
        stack: 'HTML · feed.xml · GitHub Actions' }
    ]},
    { id: 'd', projects: [
      { id: 'OptiThread',                repo: 'OptiThread',                status: 'done',   sub: 'star4',  url: 'https://github.com/HairuoLiu/OptiThread',
        stack: 'Python · XML (ThreadData) · Mac + Windows installers · Autodesk App Store' },
      { id: 'voronoi-fusion',            repo: 'voronoi-fusion',            status: 'done',   sub: '',       url: 'https://github.com/HairuoLiu/voronoi-fusion',
        stack: 'Python · Fusion 360 API · JavaScript (web prototype)' },
      { id: '3d-parametric-compiler',    repo: '3d-parametric-compiler',    status: 'parked', sub: '',       url: 'https://github.com/HairuoLiu/3d-parametric-compiler',
        stack: 'JavaScript (frontend / Node backend)' },
      { id: 'Gridfinity-AI',             repo: 'Gridfinity-AI',             status: 'parked', sub: '',       url: 'https://github.com/HairuoLiu/Gridfinity-AI',
        stack: 'JavaScript · Vercel Functions · static frontend' },
      { id: 'Lumina-Layers',             repo: 'Lumina-Layers',             status: 'fork',   sub: 'fork',   url: 'https://github.com/HairuoLiu/Lumina-Layers',
        stack: 'Slicing / colour mixing (upstream project)' }
    ]},
    { id: 'e', projects: [
      { id: 'ikear',                     repo: 'ikear',                     status: 'wip',    sub: '',       url: 'https://github.com/HairuoLiu/ikear',
        stack: 'React Native · Expo 51 · TypeScript · Supabase' },
      { id: 'pixel-farm-groceries',      repo: 'pixel-farm-groceries',      status: 'done',   sub: '',       url: 'https://github.com/HairuoLiu/pixel-farm-groceries',
        stack: 'JavaScript · hand-drawn SVG pixel engine · offline single-file build' },
      { id: 'waterloo-toolkit',          repo: 'waterloo-toolkit',          status: 'wip',    sub: '',       url: 'https://github.com/HairuoLiu/waterloo-toolkit',
        stack: 'JavaScript · static site · manifest-driven' },
      { id: 'resell-workbench',          repo: 'resell-workbench',          status: 'done',   sub: '',       url: 'https://github.com/HairuoLiu/resell-workbench',
        stack: 'Vanilla HTML/JS (zero dependencies, local-only data)' },
      { id: 'nfc-card',                  repo: 'nfc-card',                  status: 'done',   sub: 'star2',  url: 'https://github.com/HairuoLiu/nfc-card',
        stack: 'HTML · JavaScript · PWA manifest' },
      { id: 'sd-label-pro',              repo: 'sd-label-pro',              status: 'parked', sub: '',       url: 'https://github.com/HairuoLiu/sd-label-pro',
        stack: 'JavaScript · HTML/CSS · print styles' }
    ]},
    { id: 'f', projects: [
      { id: 'shanyin-director-master',   repo: 'shanyin-director-master',   status: 'fork',   sub: 'fork',   url: 'https://github.com/HairuoLiu/shanyin-director-master',
        stack: 'Skill / agent config (upstream: @shanyin)' },
      { id: 'shanyin-screenwriting-master', repo: 'shanyin-screenwriting-master', status: 'fork', sub: 'fork', url: 'https://github.com/HairuoLiu/shanyin-screenwriting-master',
        stack: 'Skill / agent config (upstream: @shanyin)' }
    ]},
    { id: 'g', projects: [
      { id: 'Coding',                    repo: 'Coding',                    status: 'parked', sub: 'star6',  url: 'https://github.com/HairuoLiu/Coding',
        stack: 'Java' },
      { id: '3902GameProject',           repo: '3902GameProject',           status: 'parked', sub: '',       url: 'https://github.com/HairuoLiu/3902GameProject',
        stack: 'C# · Unity' },
      { id: 'wordpress',                 repo: 'wordpress',                 status: 'parked', sub: '',       url: 'https://github.com/HairuoLiu/wordpress',
        stack: 'PHP' },
      { id: 'Bump2Share-CSE5236',        repo: 'Bump2Share-CSE5236',        status: 'parked', sub: 'fork',   url: 'https://github.com/HairuoLiu/Bump2Share-CSE5236',
        stack: 'Java · Android' },
      { id: 'QR-Wall-CSE4471',           repo: 'QR-Wall-CSE4471',           status: 'parked', sub: 'fork',   url: 'https://github.com/HairuoLiu/QR-Wall-CSE4471',
        stack: 'Java · Android' },
      { id: 'Leap-Motion-In-Unity3D',    repo: 'Leap-Motion-In-Unity3D',    status: 'fork',   sub: 'fork',   url: 'https://github.com/HairuoLiu/Leap-Motion-In-Unity3D',
        stack: 'C# · Unity' },
      { id: 'xr-unity',                  repo: 'xr-unity',                  status: 'fork',   sub: 'fork',   url: 'https://github.com/HairuoLiu/xr-unity',
        stack: 'C# · Unity' },
      { id: 'data-structures',           repo: 'data-structures',           status: 'fork',   sub: 'fork',   url: 'https://github.com/HairuoLiu/data-structures',
        stack: 'Java' },
      { id: 'styleguide',                repo: 'styleguide',                status: 'fork',   sub: 'fork',   url: 'https://github.com/HairuoLiu/styleguide',
        stack: 'HTML' },
      { id: 'git-tips',                  repo: 'git-tips',                  status: 'fork',   sub: 'fork',   url: 'https://github.com/HairuoLiu/git-tips',
        stack: 'Markdown' },
      { id: 'weui.js',                   repo: 'weui.js',                   status: 'fork',   sub: 'fork',   url: 'https://github.com/HairuoLiu/weui.js',
        stack: 'JavaScript' },
      { id: 'secbook',                   repo: 'secbook',                   status: 'fork',   sub: 'fork',   url: 'https://github.com/HairuoLiu/secbook',
        stack: 'Markdown' },
      { id: 'apps-script-samples',       repo: 'apps-script-samples',       status: 'fork',   sub: 'fork',   url: 'https://github.com/HairuoLiu/apps-script-samples',
        stack: 'JavaScript' },
      { id: 'sandbox-github-clone',      repo: 'sandbox-github-clone',      status: 'fork',   sub: 'fork',   url: 'https://github.com/HairuoLiu/sandbox-github-clone',
        stack: 'Jupyter Notebook · Python' },
      { id: 'HowToLiveBetter',           repo: 'HowToLiveBetter',           status: 'fork',   sub: 'fork',   url: 'https://github.com/HairuoLiu/HowToLiveBetter',
        stack: 'Markdown' },
      { id: 'HairuoLiu.github.io',       repo: 'HairuoLiu.github.io',       status: 'done',   sub: '',       url: 'https://github.com/HairuoLiu/HairuoLiu.github.io',
        stack: 'HTML · CSS' }
    ]}
  ],

  /* Repos promoted into the featured strip at the top of Projects. */
  featured: ['AICut', 'RouteCut', 'sony-sooc-recipes', 'ai-film-director-skill', 'OptiThread'],

  /* AICut milestone roadmap: ids and states only — names are translated. */
  milestones: [
    { id: 'M0',  state: 'done' },
    { id: 'M1',  state: 'done' },
    { id: 'M2',  state: 'done' },
    { id: 'M3',  state: 'todo' },
    { id: 'M4',  state: 'todo' },
    { id: 'M5',  state: 'todo' },
    { id: 'M6',  state: 'todo' },
    { id: 'M7',  state: 'todo' },
    { id: 'M8',  state: 'todo' },
    { id: 'M9',  state: 'wip'  },
    { id: 'M10', state: 'hold' }
  ],

  /* Lexi archive slides: images, links and link health are language-neutral. */
  lexislides: [
    { id: 'alexa',   img: 'Ama.png',             link: 'https://geterror.slack.com/messages/D89N6EQKW/',                                        dead: '403' },
    { id: 'bump',    img: 'Mob1.png',            link: 'https://github.com/HairuoLiu/Bump2Share-CSE5236',                                       dead: '' },
    { id: 'qrwall',  img: 'Mob2.png',            link: 'https://github.com/HairuoLiu/QR-Wall-CSE4471',                                          dead: '' },
    { id: 'break3d', img: 'Game1.png',           link: 'https://www.youtube.com/watch?v=tySr4HwdnWw',                                           dead: '' },
    { id: 'mario',   img: 'Game2.png',           link: 'https://www.youtube.com/watch?v=_JoaPT9fP90&list=PLf69N-z9hR2nqoSenIbIQ8Hv2SWp47FVE',   dead: '' },
    { id: 'pico',    img: 'Web1.png',            link: 'https://pico.org.ohio-state.edu/',                                                      dead: '404' },
    { id: 'camp',    img: 'Web2.png',            link: 'https://whispering-shelf-67211.herokuapp.com/',                                         dead: '404' },
    { id: 'netsec',  img: 'Network.png',         link: 'https://hairuoliu.gitbooks.io/network-security/content/',                               dead: '' },
    { id: 'host',    img: 'Host%20Hardening.png', link: 'https://hairuoliu.gitbooks.io/host-hardening-techniques/content/',                     dead: '' }
  ]
};
