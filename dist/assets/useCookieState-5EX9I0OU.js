import { r as l, j as e, u as f, L as h } from './react-CcLub2mw.js';
const m = '_toggleButton_uen9r_1',
  j = '_animating_uen9r_28',
  k = '_toggleContainer_uen9r_33',
  y = '_toggleIcon_uen9r_42',
  v = '_expandIcon_uen9r_48',
  C = '_light_uen9r_54',
  N = '_dark_uen9r_60',
  c = {
    toggleButton: m,
    animating: j,
    toggleContainer: k,
    toggleIcon: y,
    expandIcon: v,
    light: C,
    dark: N,
  };
function w({ isDarkMode: n, onToggle: a }) {
  const [t, s] = l.useState(!1),
    [r, d] = l.useState(!1);
  l.useEffect(() => {
    s(!0);
  }, []);
  const i = () => {
    (d(!0), a(), setTimeout(() => d(!1), 500));
  };
  return t
    ? e.jsx('button', {
        className: `${c.toggleButton} ${r ? c.animating : ''}`,
        onClick: i,
        'aria-label': `Switch to ${n ? 'light' : 'dark'} mode`,
        title: 'Toggle theme',
        children: e.jsx('div', {
          className: `${c.toggleContainer} ${n ? c.dark : c.light}`,
          children: e.jsxs('svg', {
            width: '32',
            height: '32',
            viewBox: '0 0 32 32',
            className: `${c.toggleIcon} ${c.expandIcon}`,
            children: [
              e.jsx('defs', {
                children: e.jsx('clipPath', {
                  id: `moon-cutout-${n ? 'dark' : 'light'}`,
                  children: e.jsx('path', {
                    d: 'M0-11h25a1 1 0 0017 13v30H0Z',
                  }),
                }),
              }),
              e.jsxs('g', {
                clipPath: `url(#moon-cutout-${n ? 'dark' : 'light'})`,
                children: [
                  !n &&
                    e.jsx('circle', {
                      cx: '16',
                      cy: '16',
                      r: '8.4',
                      fill: '#ffd700',
                      className: c.celestialBody,
                    }),
                  n &&
                    e.jsxs('g', {
                      className: c.crescentMoon,
                      children: [
                        e.jsxs('defs', {
                          children: [
                            e.jsxs('radialGradient', {
                              id: 'moonGradient',
                              cx: '0.3',
                              cy: '0.3',
                              r: '0.8',
                              children: [
                                e.jsx('stop', {
                                  offset: '0%',
                                  stopColor: '#ffffff',
                                }),
                                e.jsx('stop', {
                                  offset: '70%',
                                  stopColor: '#f0f0f0',
                                }),
                                e.jsx('stop', {
                                  offset: '100%',
                                  stopColor: '#d0d0d0',
                                }),
                              ],
                            }),
                            e.jsx('filter', {
                              id: 'moonShadow',
                              children: e.jsx('feDropShadow', {
                                dx: '0',
                                dy: '1',
                                stdDeviation: '0.5',
                                floodColor: '#00000020',
                              }),
                            }),
                          ],
                        }),
                        e.jsx('path', {
                          d: 'M 24.4 16 A 8.4 8.4 0 0 1 16 24.4 A 8.4 8.4 0 0 1 7.6 16 A 8.4 8.4 0 0 1 16 7.6 A 6 6 0 0 0 24.4 16 Z',
                          fill: 'url(#moonGradient)',
                          filter: 'url(#moonShadow)',
                        }),
                        e.jsx('circle', {
                          cx: '12',
                          cy: '12',
                          r: '1.2',
                          fill: '#e0e0e0',
                          opacity: '0.8',
                        }),
                        e.jsx('circle', {
                          cx: '18',
                          cy: '14',
                          r: '0.8',
                          fill: '#e0e0e0',
                          opacity: '0.6',
                        }),
                        e.jsx('circle', {
                          cx: '14',
                          cy: '18',
                          r: '1',
                          fill: '#e0e0e0',
                          opacity: '0.7',
                        }),
                      ],
                    }),
                  !n &&
                    e.jsx(e.Fragment, {
                      children: e.jsxs('g', {
                        stroke: '#ff8c00',
                        strokeWidth: '1.5',
                        fill: 'none',
                        className: c.sunRays,
                        children: [
                          e.jsx('line', {
                            x1: '16',
                            y1: '4',
                            x2: '16',
                            y2: '8',
                          }),
                          e.jsx('line', {
                            x1: '16',
                            y1: '24',
                            x2: '16',
                            y2: '28',
                          }),
                          e.jsx('line', {
                            x1: '4',
                            y1: '16',
                            x2: '8',
                            y2: '16',
                          }),
                          e.jsx('line', {
                            x1: '24',
                            y1: '16',
                            x2: '28',
                            y2: '16',
                          }),
                          e.jsx('line', {
                            x1: '8.7',
                            y1: '8.7',
                            x2: '11.3',
                            y2: '11.3',
                          }),
                          e.jsx('line', {
                            x1: '20.7',
                            y1: '20.7',
                            x2: '23.3',
                            y2: '23.3',
                          }),
                          e.jsx('line', {
                            x1: '23.3',
                            y1: '8.7',
                            x2: '20.7',
                            y2: '11.3',
                          }),
                          e.jsx('line', {
                            x1: '11.3',
                            y1: '20.7',
                            x2: '8.7',
                            y2: '23.3',
                          }),
                        ],
                      }),
                    }),
                ],
              }),
            ],
          }),
        }),
      })
    : e.jsx('button', {
        className: c.toggleButton,
        onClick: i,
        children: e.jsx('svg', {
          width: '32',
          height: '32',
          viewBox: '0 0 32 32',
          className: c.toggleIcon,
          children: e.jsx('circle', {
            cx: '16',
            cy: '16',
            r: '8.4',
            fill: 'currentColor',
          }),
        }),
      });
}
const L = '_header_4m2dr_1',
  T = '_headerContent_4m2dr_21',
  b = '_siteTitle_4m2dr_30',
  $ = '_backLink_4m2dr_76',
  S = '_navigationContainer_4m2dr_90',
  I = '_darkModeToggleContainer_4m2dr_97',
  g = {
    header: L,
    headerContent: T,
    siteTitle: b,
    backLink: $,
    navigationContainer: S,
    darkModeToggleContainer: I,
  };
function Y({
  showDarkModeToggle: n = !1,
  isDarkMode: a = !1,
  onDarkModeToggle: t,
  linkTo: s = '/',
  linkText: r,
  showBackLink: d = !0,
}) {
  const { t: i } = f();
  return e.jsx('header', {
    className: g.header,
    children: e.jsxs('div', {
      className: g.headerContent,
      children: [
        e.jsxs('span', {
          className: g.navigationContainer,
          children: [
            e.jsx(h, {
              to: '/',
              className: g.siteTitle,
              children: e.jsx('h1', { children: 'kd davis' }),
            }),
            d &&
              e.jsxs(h, {
                to: s,
                className: g.backLink,
                children: ['← ', r || i('backToFridge')],
              }),
          ],
        }),
        n &&
          t &&
          e.jsx('div', {
            className: g.darkModeToggleContainer,
            children: e.jsx(w, { isDarkMode: a, onToggle: t }),
          }),
      ],
    }),
  });
}
const B = '_footer_1ryi6_1',
  E = '_footerContainer_1ryi6_7',
  O = '_footerTop_1ryi6_14',
  A = '_footerLinks_1ryi6_21',
  F = '_footerLink_1ryi6_21',
  M = '_languageDropdown_1ryi6_36',
  D = '_languageButton_1ryi6_40',
  G = '_globeIcon_1ryi6_69',
  H = '_languageText_1ryi6_75',
  R = '_caret_1ryi6_79',
  J = '_dropdownMenu_1ryi6_90',
  P = '_dropdownOption_1ryi6_104',
  Z = '_active_1ryi6_122',
  U = '_footerCopyright_1ryi6_135',
  o = {
    footer: B,
    footerContainer: E,
    footerTop: O,
    footerLinks: A,
    footerLink: F,
    languageDropdown: M,
    languageButton: D,
    globeIcon: G,
    languageText: H,
    caret: R,
    dropdownMenu: J,
    dropdownOption: P,
    active: Z,
    footerCopyright: U,
  };
function q({ locale: n = 'en', onLocaleChange: a }) {
  return e.jsx(V, { locale: n, onLocaleChange: a || (() => {}) });
}
function V({ locale: n, onLocaleChange: a }) {
  const [t, s] = l.useState(!1),
    r = l.useRef(null),
    { i18n: d } = f();
  l.useEffect(() => {
    function u(p) {
      r.current && !r.current.contains(p.target) && s(!1);
    }
    return (
      document.addEventListener('mousedown', u),
      () => {
        document.removeEventListener('mousedown', u);
      }
    );
  }, []);
  const i = (u) => {
    (d.changeLanguage(u), a(u), s(!1));
  };
  return e.jsx('footer', {
    className: o.footer,
    children: e.jsxs('div', {
      className: o.footerContainer,
      children: [
        e.jsxs('div', {
          className: o.footerTop,
          children: [
            e.jsxs('div', {
              className: o.footerLinks,
              children: [
                e.jsx('a', {
                  href: 'https://github.com/modernkd',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: o.footerLink,
                  children: 'GitHub',
                }),
                e.jsx('a', {
                  href: 'https://linkedin.com/in/kd-davis',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: o.footerLink,
                  children: 'LinkedIn',
                }),
                e.jsx('a', {
                  href: 'https://kd.works',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: o.footerLink,
                  children: 'kd.works',
                }),
              ],
            }),
            e.jsxs('div', {
              className: o.languageDropdown,
              ref: r,
              children: [
                e.jsxs('button', {
                  className: o.languageButton,
                  onClick: () => s(!t),
                  'aria-label': `Switch language (currently ${n === 'en' ? 'English' : 'Svenska'})`,
                  'aria-expanded': t,
                  'aria-haspopup': 'true',
                  children: [
                    e.jsx('span', { className: o.globeIcon, children: '🌐' }),
                    e.jsx('span', {
                      className: o.languageText,
                      children: n === 'en' ? 'English' : 'Svenska',
                    }),
                    e.jsx('span', { className: o.caret, children: '▾' }),
                  ],
                }),
                t &&
                  e.jsxs('div', {
                    className: o.dropdownMenu,
                    children: [
                      e.jsx('button', {
                        className: `${o.dropdownOption} ${n === 'en' ? o.active : ''}`,
                        onClick: () => i('en'),
                        children: 'English',
                      }),
                      e.jsx('button', {
                        className: `${o.dropdownOption} ${n === 'sv' ? o.active : ''}`,
                        onClick: () => i('sv'),
                        children: 'Svenska',
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
        e.jsxs('p', {
          className: o.footerCopyright,
          children: ['© ', new Date().getFullYear(), ' kd davis'],
        }),
      ],
    }),
  });
}
function x(n) {
  var s;
  const t = `; ${document.cookie}`.split(`; ${n}=`);
  return (
    (t.length === 2 &&
      ((s = t.pop()) == null ? void 0 : s.split(';').shift())) ||
    null
  );
}
function _(n, a, t = 365, s = '/') {
  const r = new Date();
  (r.setTime(r.getTime() + t * 24 * 60 * 60 * 1e3),
    (document.cookie = `${n}=${a}; expires=${r.toUTCString()}; path=${s}`));
}
function z() {
  const [n, a] = l.useState(() => (x('locale') === 'sv' ? 'sv' : 'en')),
    { i18n: t } = f(),
    s = (r) => {
      a(r);
    };
  return (
    l.useEffect(() => {
      t.changeLanguage(n);
    }, [t, n]),
    l.useEffect(() => {
      _('locale', n, 365, '/');
    }, [n]),
    [n, s]
  );
}
function K(n, a, t = 365) {
  const [s, r] = l.useState(() => {
      const i = x(n);
      if (i)
        try {
          return JSON.parse(i);
        } catch {
          return a;
        }
      return a;
    }),
    d = l.useCallback(
      (i) => {
        (r(i), _(n, JSON.stringify(i), t, '/'));
      },
      [n, t]
    );
  return [s, d];
}
export { w as D, q as F, Y as H, K as a, z as u };
//# sourceMappingURL=useCookieState-5EX9I0OU.js.map
