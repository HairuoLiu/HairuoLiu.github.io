/* Language registry.
   To add a language: create assets/i18n/<code>.js (see en.js for the full
   key list) and add one line here. Nothing else needs to change.

   flagSvg: drawn inline instead of using the 🇬🇧 / 🇨🇳 emoji. Those emoji are
   regional-indicator pairs (GB / CN); Windows ships no flag glyphs, so they
   fall back to two letter boxes there. Inline SVG renders the same everywhere.

   label: the language's own name (endonym). It is never translated, so a
   reader who lands on the wrong language can still find the way back. */
window.I18N_MANIFEST = [
  { code: 'en', label: 'English', short: 'EN', htmlLang: 'en',
    flagSvg: '<svg viewBox="0 0 20 15" aria-hidden="true" focusable="false">' +
      '<rect width="20" height="15" rx="2" fill="#012169"/>' +
      '<path d="M0 0l20 15M20 0L0 15" fill="none" stroke="#fff" stroke-width="3.2"/>' +
      '<path d="M0 0l20 15M20 0L0 15" fill="none" stroke="#c8102e" stroke-width="1.6"/>' +
      '<path d="M10 0v15M0 7.5h20" fill="none" stroke="#fff" stroke-width="5"/>' +
      '<path d="M10 0v15M0 7.5h20" fill="none" stroke="#c8102e" stroke-width="3"/></svg>' },

  { code: 'zh', label: '中文', short: '中文', htmlLang: 'zh-CN',
    flagSvg: '<svg viewBox="0 0 20 15" aria-hidden="true" focusable="false">' +
      '<rect width="20" height="15" rx="2" fill="#ee1c25"/>' +
      '<g fill="#ffde00">' +
      '<path transform="translate(3.33 3.33) scale(2)" d="M0 -1 .2245 -.309 .9511 -.309 .3633 .118 .5878 .809 0 .382 -.5878 .809 -.3633 .118 -.9511 -.309 -.2245 -.309Z"/>' +
      '<path transform="translate(6.67 1.33) rotate(23) scale(.667)" d="M0 -1 .2245 -.309 .9511 -.309 .3633 .118 .5878 .809 0 .382 -.5878 .809 -.3633 .118 -.9511 -.309 -.2245 -.309Z"/>' +
      '<path transform="translate(8 2.67) rotate(46) scale(.667)" d="M0 -1 .2245 -.309 .9511 -.309 .3633 .118 .5878 .809 0 .382 -.5878 .809 -.3633 .118 -.9511 -.309 -.2245 -.309Z"/>' +
      '<path transform="translate(8 4.67) rotate(-2) scale(.667)" d="M0 -1 .2245 -.309 .9511 -.309 .3633 .118 .5878 .809 0 .382 -.5878 .809 -.3633 .118 -.9511 -.309 -.2245 -.309Z"/>' +
      '<path transform="translate(6.67 6) rotate(21) scale(.667)" d="M0 -1 .2245 -.309 .9511 -.309 .3633 .118 .5878 .809 0 .382 -.5878 .809 -.3633 .118 -.9511 -.309 -.2245 -.309Z"/>' +
      '</g></svg>' }
];
