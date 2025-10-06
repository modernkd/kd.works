import { r as l, j as e, O as d } from './react-CcLub2mw.js';
import { u as c, a as u, H as m, F as i } from './useCookieState-5EX9I0OU.js';
function x() {
  const [o, a] = c(),
    [t, s] = u('darkMode', !1);
  l.useEffect(() => {
    t
      ? document.documentElement.setAttribute('data-theme', 'dark')
      : document.documentElement.removeAttribute('data-theme');
  }, [t]);
  const r = () => {
    s(!t);
  };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(m, {
        showDarkModeToggle: !0,
        isDarkMode: t,
        onDarkModeToggle: r,
        locale: o,
        showBackLink: !1,
      }),
      e.jsx('main', { children: e.jsx(d, {}) }),
      e.jsx(i, { locale: o, onLocaleChange: (n) => a(n) }),
    ],
  });
}
export { x as default };
//# sourceMappingURL=Layout-0eH-A9Ec.js.map
