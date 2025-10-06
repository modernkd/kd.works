import { j as t, u as S, r as p } from './react-CcLub2mw.js';
import {
  D as y,
  u as H,
  a as z,
  H as I,
  F as E,
} from './useCookieState-5EX9I0OU.js';
import { e as k } from './email-DfBlkqaH.js';
const L = '_magnetLetter_xskqm_1',
  P = '_space_xskqm_21',
  N = { magnetLetter: L, space: P };
function w({ letter: e, color: n }) {
  if (e === ' ') return t.jsx('span', { className: N.space, children: ' ' });
  const a = n.replace('#', '').replace(/^(.{2})(.{2})(.{2})$/, (r, d, g, i) => {
      const l = (f) =>
        Math.max(0, parseInt(f, 16) - 32)
          .toString(16)
          .padStart(2, '0');
      return `#${l(d)}${l(g)}${l(i)}`;
    }),
    o = n.replace('#', '').replace(/^(.{2})(.{2})(.{2})$/, (r, d, g, i) => {
      const l = (f) =>
        Math.min(255, parseInt(f, 16) + 51)
          .toString(16)
          .padStart(2, '0');
      return `#${l(d)}${l(g)}${l(i)}`;
    }),
    s = n.replace('#', '').replace(/^(.{2})(.{2})(.{2})$/, (r, d, g, i) => {
      const l = (f) =>
        Math.max(0, parseInt(f, 16) - 16)
          .toString(16)
          .padStart(2, '0');
      return `#${l(d)}${l(g)}${l(i)}`;
    }),
    c = n.replace('#', '').replace(/^(.{2})(.{2})(.{2})$/, (r, d, g, i) => {
      const l = (f) =>
        Math.max(0, parseInt(f, 16) - 64)
          .toString(16)
          .padStart(2, '0');
      return `#${l(d)}${l(g)}${l(i)}`;
    });
  return t.jsx('span', {
    className: N.magnetLetter,
    style: {
      '--magnet-letter-color': n,
      '--shadow-dark': a,
      '--shadow-light': o,
      '--shadow-darker': s,
      '--shadow-darkest': c,
    },
    children: e,
  });
}
const R = '_magnetHeading_15hzz_1',
  B = '_large_15hzz_15',
  D = '_medium_15hzz_19',
  G = '_word_15hzz_23',
  v = { magnetHeading: R, large: B, medium: D, word: G };
function b({ text: e, size: n = 'large', onLetterClick: a }) {
  const o = [
    '#F18829',
    '#00B9ED',
    '#ED5053',
    '#00AF4F',
    '#8E509F',
    '#F9DE00',
    '#F18829',
  ];
  return t.jsx('div', {
    className: `${v.magnetHeading} ${v[n]}`,
    children: e.split(' ').map((s, c) =>
      t.jsxs(
        'span',
        {
          className: v.word,
          children: [
            s.split('').map((r, d) =>
              t.jsx(
                w,
                {
                  letter: r,
                  color: o[d % o.length],
                  onClick: a ? () => a(r) : void 0,
                },
                d
              )
            ),
            t.jsx(w, { letter: ' ', color: 'transparent' }),
          ],
        },
        c
      )
    ),
  });
}
const q = '_mooseMagnet_wmdpu_21 _magnet_wmdpu_1',
  A = '_eagleMagnet_wmdpu_44 _magnet_wmdpu_1',
  x = { mooseMagnet: q, eagleMagnet: A };
function W({ onClick: e }) {
  return t.jsx('button', {
    onClick: e,
    className: x.mooseMagnet,
    children: '🫎',
  });
}
function O({ onClick: e }) {
  return t.jsx('button', {
    onClick: e,
    className: x.eagleMagnet,
    children: '🦅',
  });
}
const X = '_fridgeHandle_xnifb_1',
  Y = { fridgeHandle: X };
function M() {
  return t.jsx(t.Fragment, {
    children: t.jsx('div', { className: Y.fridgeHandle }),
  });
}
const K = '_freezerSection_lre9r_1',
  U = '_cowbellMagnet_lre9r_14',
  V = '_magnetTextContainer_lre9r_38',
  J = '_mooseMagnetContainer_lre9r_42',
  Q = '_eagleMagnetContainer_lre9r_49',
  Z = '_darkModeMagnetContainer_lre9r_56',
  ee = '_fridgeHandleContainer_lre9r_61',
  te = '_freezerHighlightRight_lre9r_66',
  h = {
    freezerSection: K,
    cowbellMagnet: U,
    magnetTextContainer: V,
    mooseMagnetContainer: J,
    eagleMagnetContainer: Q,
    darkModeMagnetContainer: Z,
    fridgeHandleContainer: ee,
    freezerHighlightRight: te,
  };
function ne({ setLocale: e, onDarkModeToggle: n, isDarkMode: a }) {
  const { t: o } = S();
  return t.jsxs('div', {
    className: h.freezerSection,
    children: [
      t.jsx('a', {
        href: '/more-cowbell',
        className: h.cowbellMagnet,
        children: '🐮🛎️',
      }),
      t.jsx('div', {
        className: h.magnetTextContainer,
        children: t.jsx(b, { text: o('hiText'), size: 'large' }),
      }),
      t.jsx('div', {
        className: h.mooseMagnetContainer,
        children: t.jsx(W, { onClick: () => e('sv') }),
      }),
      t.jsx('div', {
        className: h.eagleMagnetContainer,
        children: t.jsx(O, { onClick: () => e('en') }),
      }),
      t.jsx('div', {
        className: h.darkModeMagnetContainer,
        children: t.jsx(y, { isDarkMode: a, onToggle: n }),
      }),
      t.jsx('div', {
        className: h.fridgeHandleContainer,
        children: t.jsx(M, {}),
      }),
      t.jsx('div', { className: h.freezerHighlightRight }),
    ],
  });
}
const ae = '_whiteboard_97kzg_1',
  oe = '_dark_97kzg_12',
  re = '_whiteboardTitle_97kzg_17',
  ie = '_whiteboardCanvas_97kzg_28',
  C = { whiteboard: ae, dark: oe, whiteboardTitle: re, whiteboardCanvas: ie },
  j = (e, n, a, o = 1, s, c = !1) => {
    if (c) {
      const i = e.createLinearGradient(n - 20, a - 50, n + 20, a + 50);
      (i.addColorStop(0, '#ff0000'),
        i.addColorStop(0.17, '#ff8000'),
        i.addColorStop(0.33, '#ffff00'),
        i.addColorStop(0.5, '#00ff00'),
        i.addColorStop(0.67, '#0080ff'),
        i.addColorStop(0.83, '#8000ff'),
        i.addColorStop(1, '#ff0080'),
        (e.strokeStyle = i));
    } else e.strokeStyle = '#000';
    ((e.lineWidth = 2 * o), (e.lineCap = 'round'));
    const r = 10 * o,
      d = 15 * o,
      g = 20 * o;
    if (
      (e.beginPath(),
      e.arc(n, a - 30 * o, r, 0, Math.PI * 2),
      e.stroke(),
      e.beginPath(),
      e.moveTo(n, a - 20 * o),
      e.lineTo(n, a + 20 * o),
      e.stroke(),
      e.beginPath(),
      e.moveTo(n - d, a - 10 * o),
      e.lineTo(n + d, a - 10 * o),
      e.stroke(),
      e.beginPath(),
      e.moveTo(n, a + 20 * o),
      e.lineTo(n - 10 * o, a + 20 * o + g),
      e.stroke(),
      e.beginPath(),
      e.moveTo(n, a + 20 * o),
      e.lineTo(n + 10 * o, a + 20 * o + g),
      e.stroke(),
      s)
    ) {
      if (c) {
        const i = e.createLinearGradient(n - 30, a + 35, n + 30, a + 45);
        (i.addColorStop(0, '#ff0000'),
          i.addColorStop(0.17, '#ff8000'),
          i.addColorStop(0.33, '#ffff00'),
          i.addColorStop(0.5, '#00ff00'),
          i.addColorStop(0.67, '#0080ff'),
          i.addColorStop(0.83, '#8000ff'),
          i.addColorStop(1, '#ff0080'),
          (e.fillStyle = i));
      } else e.fillStyle = '#666';
      ((e.font = '12px Arial'),
        (e.textAlign = 'center'),
        e.fillText(s, n, a + 50 * o + 15));
    }
  },
  se = (e, n, a, o = !1) => {
    if (o) {
      const s = e.createRadialGradient(n, a, 0, n, a, 20);
      (s.addColorStop(0, '#ffff00'),
        s.addColorStop(0.5, '#ff8000'),
        s.addColorStop(1, '#ff0000'),
        (e.fillStyle = s));
    } else e.fillStyle = '#FFD700';
    (e.beginPath(), e.arc(n, a, 20, 0, Math.PI * 2), e.fill());
    for (let s = 0; s < 8; s++) {
      const c = (s * Math.PI) / 4,
        r = n + Math.cos(c) * 20,
        d = a + Math.sin(c) * 20,
        g = n + Math.cos(c) * 30,
        i = a + Math.sin(c) * 30;
      if (o) {
        const l = e.createLinearGradient(r, d, g, i);
        (l.addColorStop(0, '#ffff00'),
          l.addColorStop(0.5, '#ff8000'),
          l.addColorStop(1, '#ff0000'),
          (e.strokeStyle = l));
      } else e.strokeStyle = '#FFA500';
      ((e.lineWidth = 2),
        e.beginPath(),
        e.moveTo(r, d),
        e.lineTo(g, i),
        e.stroke());
    }
  };
function le({ isDarkMode: e = !1 }) {
  const { t: n } = S(),
    a = p.useRef(null),
    o = n('familyDad'),
    s = n('familyMom');
  return (
    p.useEffect(() => {
      const c = a.current;
      if (!c) return;
      const r = c.getContext('2d');
      r &&
        (r.clearRect(0, 0, c.width, c.height),
        j(r, 60, 120, 1, o, e),
        j(r, 150, 120, 1, s, e),
        j(r, 250, 135, 0.7, 'Atlas', e),
        j(r, 340, 150, 0.4, 'Oliver', e),
        se(r, 420, 60, e));
    }, [e, o, s]),
    t.jsxs('div', {
      className: `${C.whiteboard} ${e ? C.dark : ''}`,
      children: [
        t.jsx('h4', {
          className: `${C.whiteboardTitle} ${e ? C.dark : ''}`,
          children: n('familyTitle'),
        }),
        t.jsx('canvas', {
          ref: a,
          width: 450,
          height: 250,
          className: `${C.whiteboardCanvas} ${e ? C.dark : ''}`,
        }),
      ],
    })
  );
}
const de = '_fridgeSection_1xivf_1',
  ce = '_fridgeContent_1xivf_13',
  ge = '_magnetTextContainer_1xivf_20',
  fe = '_whiteboardContainer_1xivf_24',
  me = '_fridgeHandleContainer_1xivf_28',
  he = '_stickyNoteContainer_1xivf_34',
  _e = '_hidden_1xivf_39',
  ue = '_fridgeHighlightRight_1xivf_43',
  _ = {
    fridgeSection: de,
    fridgeContent: ce,
    magnetTextContainer: ge,
    whiteboardContainer: fe,
    fridgeHandleContainer: me,
    stickyNoteContainer: he,
    hidden: _e,
    fridgeHighlightRight: ue,
  },
  Ce = '_stickyNote_16t0o_1',
  pe = { stickyNote: Ce };
function Se({ onClick: e }) {
  const { t: n } = S();
  return t.jsx('div', {
    onClick: e,
    className: pe.stickyNote,
    children: t.jsx('div', { children: n('stickyNoteText') }),
  });
}
function je({ isDarkMode: e, handleNoteTaking: n, isFormOpen: a }) {
  const { t: o } = S();
  return t.jsx('div', {
    className: _.fridgeSection,
    children: t.jsxs('div', {
      className: _.fridgeContent,
      children: [
        t.jsx('div', {
          className: _.fridgeHandleContainer,
          children: t.jsx(M, {}),
        }),
        t.jsx('div', {
          className: _.magnetTextContainer,
          children: t.jsx(b, { text: o('fridgeMainText'), size: 'medium' }),
        }),
        t.jsx('div', {
          className: `${_.stickyNoteContainer} ${a ? _.hidden : ''}`,
          children: t.jsx(Se, { onClick: n }),
        }),
        t.jsx('div', {
          className: _.whiteboardContainer,
          children: t.jsx(le, { isDarkMode: e }),
        }),
        t.jsx('div', { className: _.fridgeHighlightRight }),
      ],
    }),
  });
}
const ve = '_contactForm_1ft36_1',
  ke = '_contactTitle_1ft36_21',
  Ne = '_contactFormElement_1ft36_27',
  we = '_formInput_1ft36_33',
  be = '_formTextarea_1ft36_34',
  xe = '_submitButton_1ft36_44',
  u = {
    contactForm: ve,
    contactTitle: ke,
    contactFormElement: Ne,
    formInput: we,
    formTextarea: be,
    submitButton: xe,
  };
function Me({ isVisible: e, onClose: n }) {
  const [a, o] = p.useState({ name: '', email: '', message: '', title: '' }),
    [s, c] = p.useState(!1),
    { t: r } = S(),
    d = (l) => {
      o({ ...a, [l.target.name]: l.target.value });
    },
    g = async (l) => {
      if ((l.preventDefault(), c(!0), typeof window > 'u' || !k)) {
        (alert(r('contactConfigErrorMessage')), c(!1));
        return;
      }
      const f = 'service_1yn0t6q',
        T = 'template_eojldzb',
        $ = '7UcSSmhg8-zICz8Mi';
      try {
        (await k.send(
          f,
          T,
          {
            name: a.name,
            email: a.email,
            message: a.message,
            title: a.title || 'No Title',
          },
          $
        ),
          alert(r('contactSuccessMessage')));
      } catch (F) {
        (console.error('Email send error:', F),
          alert(r('contactErrorMessage')));
      }
      (o({ name: '', email: '', message: '', title: '' }), c(!1), n());
    };
  if (!e) return null;
  const i = (l) => {
    l.stopPropagation();
  };
  return t.jsxs('div', {
    className: u.contactForm,
    onClick: i,
    children: [
      t.jsx('h3', { className: u.contactTitle, children: r('contactTitle') }),
      t.jsxs('form', {
        onSubmit: g,
        className: u.contactFormElement,
        children: [
          t.jsx('input', {
            type: 'text',
            name: 'name',
            placeholder: r('contactNamePlaceholder'),
            value: a.name,
            onChange: d,
            required: !0,
            className: u.formInput,
          }),
          t.jsx('input', {
            name: 'title',
            placeholder: r('contactTitlePlaceholder'),
            value: a.title,
            onChange: d,
            required: !0,
            className: u.formInput,
          }),
          t.jsx('input', {
            type: 'email',
            name: 'email',
            placeholder: r('contactEmailPlaceholder'),
            value: a.email,
            onChange: d,
            required: !0,
            className: u.formInput,
          }),
          t.jsx('textarea', {
            name: 'message',
            placeholder: r('contactMessagePlaceholder'),
            value: a.message,
            onChange: d,
            required: !0,
            rows: 4,
            className: u.formTextarea,
          }),
          t.jsx('button', {
            type: 'submit',
            disabled: s,
            className: u.submitButton,
            children: r(s ? 'contactSendingButton' : 'contactSendButton'),
          }),
        ],
      }),
    ],
  });
}
const Te = '_backdrop_16ixi_1',
  $e = '_fridgeContainer_16ixi_11',
  Fe = '_fridgeBody_16ixi_30',
  ye = '_fridgeShadowLeft_16ixi_43',
  He = '_fridgeDoorContent_16ixi_52',
  ze = '_fridgeGlow_16ixi_58',
  m = {
    backdrop: Te,
    fridgeContainer: $e,
    fridgeBody: Fe,
    fridgeShadowLeft: ye,
    fridgeDoorContent: He,
    fridgeGlow: ze,
  };
function Pe() {
  const [e, n] = p.useState(!1),
    [a, o] = H(),
    [s, c] = z('darkMode', !1);
  p.useEffect(() => {
    s
      ? document.documentElement.setAttribute('data-theme', 'dark')
      : document.documentElement.removeAttribute('data-theme');
  }, [s]);
  const r = () => {
      n(!e);
    },
    d = () => {
      c(!s);
    },
    g = () => {
      e && n(!1);
    };
  return t.jsxs(t.Fragment, {
    children: [
      t.jsx(I, {
        showDarkModeToggle: !0,
        isDarkMode: s,
        showBackLink: !1,
        onDarkModeToggle: d,
        locale: a,
        linkTo: '/',
        linkText: 'Home',
      }),
      e && t.jsx('div', { className: m.backdrop, onClick: () => n(!1) }),
      t.jsx('div', {
        className: m.fridgeContainer,
        children: t.jsxs('div', {
          className: `${m.fridgeBody} ${e ? m.open : ''}`,
          onClick: g,
          children: [
            t.jsx('div', { className: m.fridgeShadowLeft }),
            t.jsx('div', { className: m.fridgeHighlightRight }),
            t.jsx('div', { className: m.fridgeTopShadow }),
            t.jsxs('div', {
              className: m.fridgeDoorContent,
              children: [
                t.jsx(ne, { setLocale: o, onDarkModeToggle: d, isDarkMode: s }),
                t.jsx(je, {
                  isDarkMode: s,
                  handleNoteTaking: r,
                  isFormOpen: e,
                }),
              ],
            }),
            t.jsx(Me, { isVisible: e, onClose: () => n(!1) }),
            t.jsx('div', { className: m.fridgeGlow }),
          ],
        }),
      }),
      t.jsx(E, { locale: a, onLocaleChange: o }),
    ],
  });
}
export { Pe as default };
//# sourceMappingURL=Fridge-BQYE4e8Z.js.map
