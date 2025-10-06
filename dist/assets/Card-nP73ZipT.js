import { j as a } from './react-CcLub2mw.js';
const n = '_card_1v44q_2',
  d = '_overlay_1v44q_18',
  l = '_form_1v44q_24',
  m = '_sm_1v44q_31',
  v = '_md_1v44q_36',
  f = '_lg_1v44q_41',
  q = '_centered_1v44q_47',
  e = {
    card: n,
    default: '_default_1v44q_14',
    overlay: d,
    form: l,
    sm: m,
    md: v,
    lg: f,
    centered: q,
  };
function u({
  children: s,
  className: t = '',
  variant: _ = 'default',
  size: o = 'md',
  centered: r = !1,
}) {
  const c = [e.card, e[_], e[o], r ? e.centered : '', t]
    .filter(Boolean)
    .join(' ');
  return a.jsx('div', { className: c, children: s });
}
export { u as C };
//# sourceMappingURL=Card-nP73ZipT.js.map
