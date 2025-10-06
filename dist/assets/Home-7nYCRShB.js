import { r as a, u as c, e as m, j as t } from './react-CcLub2mw.js';
import { C as u } from './Card-nP73ZipT.js';
const p = '_pageContainer_1flfw_1',
  f = '_title_1flfw_23',
  _ = '_description_1flfw_31',
  d = '_form_1flfw_37',
  h = '_input_1flfw_43',
  b = '_button_1flfw_68',
  w = '_hint_1flfw_92',
  e = {
    pageContainer: p,
    title: f,
    description: _,
    form: d,
    input: h,
    button: b,
    hint: w,
  };
function j() {
  const [n, r] = a.useState(''),
    { t: o } = c(),
    i = m(),
    l = (s) => {
      (s.preventDefault(),
        n.trim() && i(`/more-cowbell/room/${encodeURIComponent(n.trim())}`));
    };
  return t.jsx('div', {
    className: e.pageContainer,
    children: t.jsxs(u, {
      children: [
        t.jsx('h1', { className: e.title, children: o('moreCowbellTitle') }),
        t.jsx('p', {
          className: e.description,
          children: o('moreCowbellDescription'),
        }),
        t.jsxs('form', {
          onSubmit: l,
          className: e.form,
          children: [
            t.jsx('input', {
              type: 'text',
              placeholder: o('moreCowbellPlaceholder'),
              value: n,
              onChange: (s) => r(s.target.value),
              className: e.input,
              required: !0,
            }),
            t.jsx('button', {
              type: 'submit',
              className: e.button,
              children: o('moreCowbellButton'),
            }),
          ],
        }),
        t.jsx('p', { className: e.hint, children: o('moreCowbellHint') }),
      ],
    }),
  });
}
export { j as default };
//# sourceMappingURL=Home-7nYCRShB.js.map
