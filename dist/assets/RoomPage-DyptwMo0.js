import {
  u as N,
  j as e,
  r as c,
  E as ce,
  f as re,
  e as de,
} from './react-CcLub2mw.js';
import { P as ue } from './partykit-CBdD4vSs.js';
import { h as me } from './sounds-DWuT-O2e.js';
import { C as K } from './Card-nP73ZipT.js';
const Q = {
    '🎉': 'tada.mp3',
    '👏': 'applause.mp3',
    '😢': 'sad-trombone.mp3',
    '💥': '10-mario-died.mp3',
    '🔔': 'boxing-bell.mp3',
    '👋👋👋': 'bye-bye-bye.mp3',
    '🦗': 'cricket.mp3',
    '🙋🏻‍♂️': 'hello-there.mp3',
    '😞': 'loser.mp3',
    '😱': 'nooo.mp3',
    '🤕': 'ooof.mp3',
    '✨': 'sparkles.mp3',
    '🧽🎻': 'spongebob-fail.mp3',
    '😵‍💫': 'wait-what.mp3',
    '😲': 'wow-incredible.mp3',
    '😮': 'wow.mp3',
    '🎊': 'yahoo.mp3',
    '🎶': 'yodel.mp3',
    '🎵': 'technologia.m4a',
  },
  _e = Object.keys(Q);
function C(n, l, o) {
  const s = Date.now().toString() + Math.random().toString(36).substr(2, 9);
  n((i) => [...i, { id: s, text: l, type: o }]);
}
const fe = '_formSection_l7vvr_1',
  pe = '_title_l7vvr_13',
  he = '_form_l7vvr_1',
  je = '_input_l7vvr_39',
  xe = '_button_l7vvr_64',
  E = { formSection: fe, title: pe, form: he, input: je, button: xe };
function ye({ room: n, nickname: l, setNickname: o, onSignIn: s }) {
  const { t: i } = N();
  return e.jsx('section', {
    className: E.formSection,
    children: e.jsxs(K, {
      children: [
        e.jsx('h1', {
          className: E.title,
          children: i('roomJoinTitle', { room: n }),
        }),
        e.jsxs('form', {
          onSubmit: (r) => {
            (r.preventDefault(), s());
          },
          className: E.form,
          children: [
            e.jsx('input', {
              id: 'nickname',
              type: 'text',
              placeholder: i('roomNicknamePlaceholder'),
              value: l,
              onChange: (r) => o(r.target.value),
              className: E.input,
              required: !0,
            }),
            e.jsx('button', {
              type: 'submit',
              className: E.button,
              children: i('roomJoinButton'),
            }),
          ],
        }),
      ],
    }),
  });
}
const Se = '_title_g3u40_1',
  be = '_welcomeText_g3u40_7',
  z = { title: Se, welcomeText: be };
function ge({ room: n, nickname: l }) {
  const { t: o } = N();
  return e.jsxs(K, {
    variant: 'overlay',
    centered: !0,
    children: [
      e.jsxs('h1', {
        className: z.title,
        children: [o('connectingTo'), ' ', n, '...'],
      }),
      e.jsxs('p', {
        className: z.welcomeText,
        children: [o('welcome'), ', ', l, '!'],
      }),
    ],
  });
}
const Ne = '_message_y6u0s_1',
  Be = '_custom_y6u0s_8',
  H = { message: Ne, custom: Be, default: '_default_y6u0s_14' };
function Ce({ text: n, type: l }) {
  const o = l === 'custom' ? H.custom : H.default;
  return e.jsx('article', { className: `${H.message} ${o}`, children: n });
}
const ve = '_header_1obod_1',
  we = '_title_1obod_9',
  ke = '_welcomeText_1obod_15',
  Ee = '_usersText_1obod_20',
  $ = { header: ve, title: we, welcomeText: ke, usersText: Ee };
function Ie(n) {
  const l = new Map();
  return (
    n.forEach((o) => {
      l.set(o.name, (l.get(o.name) || 0) + 1);
    }),
    n.map((o) => {
      let s = o.name;
      const i = l.get(o.name);
      if (i && i > 1) {
        const d =
          n.filter((p) => p.name === o.name).findIndex((p) => p.id === o.id) +
          1;
        s = o.name + ` (${d})`;
      }
      return s.length > 25 ? s.substring(0, 25) + '...' : s;
    })
  );
}
function Me({ room: n, nickname: l, users: o }) {
  const { t: s } = N();
  return e.jsxs('header', {
    className: $.header,
    children: [
      e.jsx('h1', {
        className: $.title,
        children: s('roomTitle', { room: n }),
      }),
      e.jsx('p', {
        className: $.welcomeText,
        children: s('roomWelcome', { nickname: l }),
      }),
      e.jsx('p', {
        className: $.usersText,
        children: s('roomUsers', { users: Ie(o).join(', ') }),
      }),
    ],
  });
}
const Te = '_soundBoard_19dlf_1',
  $e = '_header_19dlf_8',
  De = '_title_19dlf_15',
  Ge = '_manageButton_19dlf_20',
  Re = '_emojiGrid_19dlf_39',
  Fe = '_emojiButton_19dlf_51',
  v = {
    soundBoard: Te,
    header: $e,
    title: De,
    manageButton: Ge,
    emojiGrid: Re,
    emojiButton: Fe,
  };
function Le({ emojis: n, customSounds: l, onEmojiClick: o, onManageClick: s }) {
  const i = [...n, ...Object.keys(l)],
    { t: r } = N();
  return e.jsxs('section', {
    className: v.soundBoard,
    children: [
      e.jsxs('div', {
        className: v.header,
        children: [
          e.jsx('h2', { className: v.title, children: r('emojiSoundsTitle') }),
          e.jsx('button', {
            onClick: s,
            className: v.manageButton,
            'aria-label': 'Manage custom sounds',
            children: r('manageCustomSoundsButton'),
          }),
        ],
      }),
      e.jsx('div', {
        className: v.emojiGrid,
        role: 'grid',
        children: i.map((d) =>
          e.jsx(
            'button',
            {
              onClick: () => o(d),
              className: v.emojiButton,
              'aria-label': `${r('playSoundFor')} ${d}`,
              role: 'gridcell',
              children: d,
            },
            d
          )
        ),
      }),
    ],
  });
}
const qe = '_overlay_1flg3_1',
  He = '_modal_1flg3_12',
  Je = '_modalContent_1flg3_23',
  Oe = '_modalHeader_1flg3_27',
  Ue = '_modalTitle_1flg3_34',
  Pe = '_closeButton_1flg3_39',
  Ae = '_modalBody_1flg3_52',
  We = '_modalFooter_1flg3_56',
  y = {
    overlay: qe,
    modal: He,
    modalContent: Je,
    modalHeader: Oe,
    modalTitle: Ue,
    closeButton: Pe,
    modalBody: Ae,
    modalFooter: We,
  };
function V({ isOpen: n, title: l, onClose: o, children: s, footer: i }) {
  return n
    ? e.jsx('div', {
        className: y.overlay,
        onClick: o,
        children: e.jsx('dialog', {
          open: n,
          className: y.modal,
          onClick: (r) => r.stopPropagation(),
          children: e.jsxs('div', {
            className: y.modalContent,
            children: [
              e.jsxs('header', {
                className: y.modalHeader,
                children: [
                  e.jsx('h3', { className: y.modalTitle, children: l }),
                  e.jsx('button', {
                    onClick: o,
                    className: y.closeButton,
                    'aria-label': 'Close modal',
                    children: '×',
                  }),
                ],
              }),
              e.jsx('div', { className: y.modalBody, children: s }),
              i && e.jsx('footer', { className: y.modalFooter, children: i }),
            ],
          }),
        }),
      })
    : null;
}
const ze = '_formGroup_i1q29_52',
  Ke = '_label_i1q29_56',
  Qe = '_emojiDisplay_i1q29_64',
  Ve = '_fileInput_i1q29_70',
  Xe = '_hiddenInput_i1q29_74',
  Ye = '_fileButton_i1q29_86',
  Ze = '_fileHint_i1q29_109',
  et = '_submitButton_i1q29_121',
  tt = '_cancelButton_i1q29_146',
  f = {
    formGroup: ze,
    label: Ke,
    emojiDisplay: Qe,
    fileInput: Ve,
    hiddenInput: Xe,
    fileButton: Ye,
    fileHint: Ze,
    submitButton: et,
    cancelButton: tt,
  };
function ot({
  isOpen: n,
  isEditing: l,
  selectedEmoji: o,
  selectedFile: s,
  onClose: i,
  onEmojiSelect: r,
  onFileChange: d,
  onSubmit: p,
}) {
  const b = c.useRef(null),
    { t: a } = N(),
    g = () => {
      var m;
      (m = b.current) == null || m.click();
    },
    w = e.jsxs(e.Fragment, {
      children: [
        e.jsx('button', {
          onClick: p,
          disabled: !o || !s,
          className: f.submitButton,
          'aria-label': 'Upload sound',
          children: a('uploadSound'),
        }),
        e.jsx('button', {
          onClick: i,
          className: f.cancelButton,
          'aria-label': a('cancel'),
          children: a('cancel'),
        }),
      ],
    });
  return e.jsxs(V, {
    isOpen: n,
    title: a(l ? 'editCustomSound' : 'addCustomSoundTitle'),
    onClose: i,
    footer: w,
    children: [
      e.jsxs('div', {
        className: f.formGroup,
        children: [
          e.jsx('label', { className: f.label, children: a('selectEmoji') }),
          e.jsx(ce, { onEmojiClick: r, width: '100%', height: 350 }),
          o && e.jsx('p', { className: f.emojiDisplay, children: o }),
        ],
      }),
      e.jsxs('div', {
        className: f.formGroup,
        children: [
          e.jsx('label', {
            className: f.label,
            children: a('chooseAudioFile'),
          }),
          e.jsxs('div', {
            className: f.fileInput,
            children: [
              e.jsx('input', {
                type: 'file',
                ref: b,
                accept: 'audio/*',
                onChange: (m) => {
                  var B;
                  return d(
                    ((B = m.target.files) == null ? void 0 : B[0]) || null
                  );
                },
                className: f.hiddenInput,
              }),
              e.jsx('button', {
                type: 'button',
                onClick: g,
                className: f.fileButton,
                'aria-label': a('chooseAudioFile'),
                children: s ? s.name : a('chooseFile'),
              }),
            ],
          }),
          !s &&
            e.jsx('p', { className: f.fileHint, children: a('noFileChosen') }),
        ],
      }),
    ],
  });
}
const nt = '_emptyState_g3fcy_52',
  st = '_soundList_g3fcy_58',
  lt = '_soundItem_g3fcy_65',
  at = '_emoji_g3fcy_74',
  it = '_buttonGroup_g3fcy_79',
  ct = '_editButton_g3fcy_84',
  rt = '_deleteButton_g3fcy_104',
  dt = '_addButton_g3fcy_128',
  S = {
    emptyState: nt,
    soundList: st,
    soundItem: lt,
    emoji: at,
    buttonGroup: it,
    editButton: ct,
    deleteButton: rt,
    addButton: dt,
  };
function ut({
  isOpen: n,
  customSounds: l,
  onClose: o,
  onAddClick: s,
  onEdit: i,
  onDelete: r,
}) {
  const { t: d } = N(),
    p = Object.entries(l).map(([a, g]) => ({ emoji: a, sound: g })),
    b = e.jsx('button', {
      onClick: s,
      className: S.addButton,
      'aria-label': 'Add new custom sound',
      children: d('addCustomSound'),
    });
  return e.jsx(V, {
    isOpen: n,
    title: d('manageCustomSoundsTitle'),
    onClose: o,
    footer: b,
    children:
      p.length === 0
        ? e.jsx('p', { className: S.emptyState, children: d('noCustomSounds') })
        : e.jsx('ul', {
            className: S.soundList,
            role: 'list',
            children: p.map(({ emoji: a }) =>
              e.jsxs(
                'li',
                {
                  className: S.soundItem,
                  role: 'listitem',
                  children: [
                    e.jsx('span', {
                      className: S.emoji,
                      'aria-label': `Emoji: ${a}`,
                      children: a,
                    }),
                    e.jsxs('div', {
                      className: S.buttonGroup,
                      children: [
                        e.jsx('button', {
                          onClick: () => i(a),
                          className: S.editButton,
                          'aria-label': `Edit sound for ${a}`,
                          children: d('editSound'),
                        }),
                        e.jsx('button', {
                          onClick: () => r(a),
                          className: S.deleteButton,
                          'aria-label': `Delete sound for ${a}`,
                          children: d('deleteSound'),
                        }),
                      ],
                    }),
                  ],
                },
                a
              )
            ),
          }),
  });
}
const mt = '_main_73ewy_1',
  _t = '_container_73ewy_16',
  ft = '_messages_73ewy_21',
  J = { main: mt, container: _t, messages: ft };
function yt() {
  const { room: n } = re(),
    { t: l } = N(),
    o = de();
  c.useEffect(() => {
    n || o('/more-cowbell');
  }, [n, o]);
  const [s, i] = c.useState(''),
    [r, d] = c.useState(!1),
    [p, b] = c.useState(!1),
    [a, g] = c.useState([]),
    [w, m] = c.useState([]),
    [B, D] = c.useState({}),
    [I, M] = c.useState(''),
    [X, G] = c.useState(!1),
    [R, F] = c.useState(null),
    [Y, O] = c.useState(!1),
    [U, L] = c.useState(!1),
    T = c.useRef(null),
    h = c.useRef(null),
    P = c.useCallback((t) => {
      var u, j, x;
      if (t.type === 'usersList') g(t.users || []);
      else if (t.type === 'userJoined')
        (g((_) => [..._, t.user]),
          C(
            m,
            l('userJoinedRoom', {
              name: ((u = t.user) == null ? void 0 : u.name) || 'Someone',
            }),
            'join'
          ));
      else if (t.type === 'userLeft')
        (g((_) => _.filter((q) => q.id !== t.user.id)),
          C(
            m,
            l('userLeftRoom', {
              name: ((j = t.user) == null ? void 0 : j.name) || 'Someone',
            }),
            'leave'
          ));
      else if (t.type === 'soundPlayed')
        (Z(t.sound),
          C(
            m,
            l('userPlayedSound', {
              name: ((x = t.user) == null ? void 0 : x.name) || 'Someone',
              emoji: t.emoji,
            }),
            'sound'
          ));
      else if (t.type === 'customSoundAdded')
        (D((_) => ({ ..._, [t.emoji]: t.sound })),
          t.user &&
            C(
              m,
              l('userAddedCustomSound', { name: t.user.name, emoji: t.emoji }),
              'custom'
            ));
      else if (t.type === 'customSoundDeleted') {
        const _ = t.emoji;
        (D((q) => {
          const W = { ...q };
          return (delete W[_], W);
        }),
          C(m, l('customSoundDeleted', { emoji: _ }), 'custom'));
      } else
        t.type === 'customSoundUpdated' &&
          (D((_) => ({ ..._, [t.emoji]: t.sound })),
          t.user &&
            C(
              m,
              l('userUpdatedCustomSound', {
                name: t.user.name,
                emoji: t.emoji,
              }),
              'custom'
            ));
    }, []),
    Z = (t) => {
      const u = t.startsWith('data:') ? [t] : [`/sounds/${t}`];
      new me.Howl({ src: u, volume: 0.5 }).play();
    };
  (c.useEffect(() => {
    const t = localStorage.getItem('nickname');
    t && (i(t), d(!0));
  }, []),
    c.useEffect(() => {
      if (r && n && s.trim()) {
        h.current && h.current.close();
        const t =
            window.location.hostname === 'localhost' ||
            window.location.hostname === '127.0.0.1',
          u = new ue({
            host: t
              ? `${window.location.hostname}:54300`
              : 'more-cowbell.modernkd.partykit.dev',
            room: n,
          });
        (u.addEventListener('open', () => {
          (b(!0), u.send(JSON.stringify({ type: 'join', name: s })));
        }),
          u.addEventListener('message', (j) => {
            const x = JSON.parse(j.data);
            P(x);
          }),
          u.addEventListener('close', () => {
            b(!1);
          }),
          (h.current = u));
      }
    }, [r, n, s, P]),
    c.useEffect(() => {
      const t = w.map((u) =>
        setTimeout(() => {
          m((x) => x.filter((_) => _.id !== u.id));
        }, 4e3)
      );
      return () => t.forEach(clearTimeout);
    }, [w]));
  const ee = () => {
      s.trim() && (localStorage.setItem('nickname', s), d(!0));
    },
    te = (t) => {
      const u = Q[t] || B[t];
      h.current &&
        u &&
        h.current.send(JSON.stringify({ type: 'sound', emoji: t, sound: u }));
    },
    oe = (t) => {
      M(t.emoji);
    },
    ne = () => {
      if (I && R && h.current) {
        const t = new FileReader();
        ((t.onload = (u) => {
          var x;
          const j = (x = u.target) == null ? void 0 : x.result;
          (U
            ? h.current.send(
                JSON.stringify({ type: 'editCustomSound', emoji: I, sound: j })
              )
            : h.current.send(
                JSON.stringify({ type: 'addCustomSound', emoji: I, sound: j })
              ),
            A());
        }),
          t.readAsDataURL(R));
      }
    },
    se = () => {
      (k(), G(!0), M(''), F(null), L(!1), T.current && (T.current.value = ''));
    },
    A = () => {
      (k(), G(!1), M(''), F(null), L(!1), T.current && (T.current.value = ''));
    },
    le = () => {
      O(!0);
    },
    k = () => {
      O(!1);
    },
    ae = (t) => {
      (h.current &&
        h.current.send(JSON.stringify({ type: 'deleteCustomSound', emoji: t })),
        k());
    },
    ie = (t) => {
      (M(t), L(!0), G(!0), k());
    };
  return n
    ? r
      ? p
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsx('main', {
                className: J.main,
                children: e.jsxs('div', {
                  className: J.container,
                  children: [
                    e.jsx('div', {
                      className: J.messages,
                      children: w
                        .slice(-5)
                        .reverse()
                        .map((t) =>
                          e.jsx(Ce, { text: t.text, type: t.type }, t.id)
                        ),
                    }),
                    e.jsx(Me, { room: n || '', nickname: s, users: a }),
                    e.jsx(Le, {
                      emojis: _e,
                      customSounds: B,
                      onEmojiClick: te,
                      onManageClick: le,
                    }),
                  ],
                }),
              }),
              e.jsx(ot, {
                isOpen: X,
                isEditing: U,
                selectedEmoji: I,
                selectedFile: R,
                onClose: A,
                onEmojiSelect: oe,
                onFileChange: F,
                onSubmit: ne,
              }),
              e.jsx(ut, {
                isOpen: Y,
                customSounds: B,
                onClose: k,
                onAddClick: se,
                onEdit: ie,
                onDelete: ae,
              }),
            ],
          })
        : e.jsx(ge, { room: n, nickname: s })
      : e.jsx(ye, { room: n, nickname: s, setNickname: i, onSignIn: ee })
    : null;
}
export { yt as default };
//# sourceMappingURL=RoomPage-DyptwMo0.js.map
