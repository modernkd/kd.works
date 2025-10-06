const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/Layout-QGKR_a9n.js',
      'assets/react-CcLub2mw.js',
      'assets/i18n-CgThpr1s.js',
      'assets/Layout-0eH-A9Ec.js',
      'assets/useCookieState-5EX9I0OU.js',
      'assets/useCookieState-BbWLrFYY.css',
      'assets/Home-x32jHZ0j.js',
      'assets/Home-CrB9NCip.css',
      'assets/Fridge-BQYE4e8Z.js',
      'assets/email-DfBlkqaH.js',
      'assets/Fridge-GpbsrZ8V.css',
      'assets/Home-7nYCRShB.js',
      'assets/Card-nP73ZipT.js',
      'assets/Card-CQ4-grxU.css',
      'assets/Home-DTPKtRy2.css',
      'assets/RoomPage-DyptwMo0.js',
      'assets/partykit-CBdD4vSs.js',
      'assets/sounds-DWuT-O2e.js',
      'assets/RoomPage-BAPAqiWB.css',
    ])
) => i.map((i) => d[i]);
import {
  r as i,
  j as e,
  R as k,
  a as r,
  i as C,
  b,
  d as j,
  B as v,
} from './react-CcLub2mw.js';
import { i as $, B as E } from './i18n-CgThpr1s.js';
(function () {
  const d = document.createElement('link').relList;
  if (d && d.supports && d.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) h(o);
  new MutationObserver((o) => {
    for (const n of o)
      if (n.type === 'childList')
        for (const t of n.addedNodes)
          t.tagName === 'LINK' && t.rel === 'modulepreload' && h(t);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(o) {
    const n = {};
    return (
      o.integrity && (n.integrity = o.integrity),
      o.referrerPolicy && (n.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (n.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (n.credentials = 'omit')
          : (n.credentials = 'same-origin'),
      n
    );
  }
  function h(o) {
    if (o.ep) return;
    o.ep = !0;
    const n = m(o);
    fetch(o.href, n);
  }
})();
const w = 'modulepreload',
  L = function (g) {
    return '/' + g;
  },
  f = {},
  c = function (d, m, h) {
    let o = Promise.resolve();
    if (m && m.length > 0) {
      document.getElementsByTagName('link');
      const t = document.querySelector('meta[property=csp-nonce]'),
        s =
          (t == null ? void 0 : t.nonce) ||
          (t == null ? void 0 : t.getAttribute('nonce'));
      o = Promise.allSettled(
        m.map((a) => {
          if (((a = L(a)), a in f)) return;
          f[a] = !0;
          const u = a.endsWith('.css'),
            y = u ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${a}"]${y}`)) return;
          const l = document.createElement('link');
          if (
            ((l.rel = u ? 'stylesheet' : w),
            u || (l.as = 'script'),
            (l.crossOrigin = ''),
            (l.href = a),
            s && l.setAttribute('nonce', s),
            document.head.appendChild(l),
            u)
          )
            return new Promise((S, T) => {
              (l.addEventListener('load', S),
                l.addEventListener('error', () =>
                  T(new Error(`Unable to preload CSS for ${a}`))
                ));
            });
        })
      );
    }
    function n(t) {
      const s = new Event('vite:preloadError', { cancelable: !0 });
      if (((s.payload = t), window.dispatchEvent(s), !s.defaultPrevented))
        throw t;
    }
    return o.then((t) => {
      for (const s of t || []) s.status === 'rejected' && n(s.reason);
      return d().catch(n);
    });
  },
  p = i.lazy(() =>
    c(() => import('./Layout-QGKR_a9n.js'), __vite__mapDeps([0, 1, 2]))
  ),
  P = i.lazy(() =>
    c(() => import('./Layout-0eH-A9Ec.js'), __vite__mapDeps([3, 1, 4, 5]))
  ),
  x = i.lazy(() =>
    c(() => import('./Home-x32jHZ0j.js'), __vite__mapDeps([6, 1, 4, 5, 7]))
  ),
  M = i.lazy(() =>
    c(
      () => import('./Fridge-BQYE4e8Z.js'),
      __vite__mapDeps([8, 1, 4, 5, 9, 10])
    )
  ),
  R = i.lazy(() =>
    c(() => import('./Home-7nYCRShB.js'), __vite__mapDeps([11, 1, 12, 13, 14]))
  ),
  A = i.lazy(() =>
    c(
      () => import('./RoomPage-DyptwMo0.js'),
      __vite__mapDeps([15, 1, 16, 17, 12, 13, 18])
    )
  );
function B() {
  return e.jsx(i.Suspense, {
    fallback: e.jsx('div', { children: 'Loading...' }),
    children: e.jsxs(k, {
      children: [
        e.jsx(r, {
          path: '/',
          element: e.jsx(p, {}),
          children: e.jsx(r, { index: !0, element: e.jsx(x, {}) }),
        }),
        e.jsx(r, {
          path: '/fridge',
          element: e.jsx(p, {}),
          children: e.jsx(r, { index: !0, element: e.jsx(M, {}) }),
        }),
        e.jsxs(r, {
          path: '/more-cowbell',
          element: e.jsx(P, {}),
          children: [
            e.jsx(r, { index: !0, element: e.jsx(R, {}) }),
            e.jsx(r, { path: 'room/:room', element: e.jsx(A, {}) }),
          ],
        }),
      ],
    }),
  });
}
const D = 'Add Custom Sound',
  F = 'Add Custom Sound',
  _ = 'Back to the fridge',
  I = 'Cancel',
  J = 'Choose Audio File',
  N = 'Choose file...',
  O = 'Close modal',
  V = 'Connecting to',
  U =
    'Email configuration missing. Please set up EmailJS environment variables.',
  H = 'Your Email',
  W = 'Failed to send note. Please try again.',
  z = 'Your Message',
  K = 'Your Name',
  G = 'Send Note',
  q = 'Sending...',
  Y = 'Note sent successfully!',
  Q = 'Leave a Note',
  X = 'Title',
  Z = 'Custom sound {{emoji}} was deleted',
  ee = 'Delete',
  oe = 'Edit Custom Sound',
  te = 'Edit',
  ne = 'Emoji Sounds',
  se = 'atlas',
  ae = 'dad',
  le = 'mom',
  re = 'oliver',
  ie = 'The Davis Family',
  ce = 'LIFE IS TOO SHORT TO BE SERIOUS',
  de = 'HI I AM KD',
  me =
    "I've been coding for years and absolutely love the challenge of turning ideas into working applications. I'm all about modern web technologies, clean code, and creating experiences that people actually enjoy using. Learning never stops in this field, and I embrace that with enthusiasm!",
  ue = 'My Developer Journey',
  ge = 'Psst... looking for something cool?',
  he =
    "A full-stack developer who loves building cool stuff and helping other developers level up. When I'm not coding, you'll find me tinkering with home automation, brewing the perfect cup of coffee, or spending time with my kids.",
  fe =
    "When I'm not staring at a screen, you'll find me geeking out over smart home gadgets, perfecting my coffee brewing skills, or spending quality time with my amazing family. I believe the best developers bring their whole selves to work, and I try to maintain that healthy work-life balance every day.",
  pe = 'Life Beyond Code',
  ye = "Hey, I'm kd",
  Se = 'Manage Custom Sounds',
  Te = 'Manage Custom Sounds',
  ke = 'Join Room',
  Ce = 'Enter a room name to start the party',
  be = 'Share the room link with friends!',
  je = 'Room name (e.g., party-room)',
  ve = 'More Cowbell',
  $e = 'No custom sounds yet.',
  Ee = 'No file chosen',
  we = 'Play sound for',
  Le = 'Join',
  Pe = 'Join Room: {{room}}',
  xe = 'Enter your nickname',
  Me = 'Enter your nickname',
  Re = 'More Cowbell: {{room}}',
  Ae = 'Users: {{users}}',
  Be = 'Welcome, {{nickname}}!',
  De = 'Select Emoji',
  Fe = 'Pick up more milk!',
  _e = 'Upload',
  Ie = '{{name}} added a custom sound: {{emoji}}',
  Je = '{{name}} joined the room',
  Ne = '{{name}} left the room',
  Oe = '{{name}} played {{emoji}}',
  Ve = '{{name}} updated custom sound: {{emoji}}',
  Ue = 'Welcome',
  He = {
    addCustomSound: D,
    addCustomSoundTitle: F,
    backToFridge: _,
    cancel: I,
    chooseAudioFile: J,
    chooseFile: N,
    closeModal: O,
    connectingTo: V,
    contactConfigErrorMessage: U,
    contactEmailPlaceholder: H,
    contactErrorMessage: W,
    contactMessagePlaceholder: z,
    contactNamePlaceholder: K,
    contactSendButton: G,
    contactSendingButton: q,
    contactSuccessMessage: Y,
    contactTitle: Q,
    contactTitlePlaceholder: X,
    customSoundDeleted: Z,
    deleteSound: ee,
    editCustomSound: oe,
    editSound: te,
    emojiSoundsTitle: ne,
    familyAtlas: se,
    familyDad: ae,
    familyMom: le,
    familyOliver: re,
    familyTitle: ie,
    fridgeMainText: ce,
    hiText: de,
    homeDeveloperJourneyText: me,
    homeDeveloperJourneyTitle: ue,
    homeFridgeLink: ge,
    homeIntro: he,
    homeLifeBeyondCodeText: fe,
    homeLifeBeyondCodeTitle: pe,
    homeTitle: ye,
    manageCustomSoundsButton: Se,
    manageCustomSoundsTitle: Te,
    moreCowbellButton: ke,
    moreCowbellDescription: Ce,
    moreCowbellHint: be,
    moreCowbellPlaceholder: je,
    moreCowbellTitle: ve,
    noCustomSounds: $e,
    noFileChosen: Ee,
    playSoundFor: we,
    roomJoinButton: Le,
    roomJoinTitle: Pe,
    roomNicknameLabel: xe,
    roomNicknamePlaceholder: Me,
    roomTitle: Re,
    roomUsers: Ae,
    roomWelcome: Be,
    selectEmoji: De,
    stickyNoteText: Fe,
    uploadSound: _e,
    userAddedCustomSound: Ie,
    userJoinedRoom: Je,
    userLeftRoom: Ne,
    userPlayedSound: Oe,
    userUpdatedCustomSound: Ve,
    welcome: Ue,
  },
  We = 'Lägg till anpassat ljud',
  ze = 'Lägg till anpassat ljud',
  Ke = 'Tillbaka till kylskåpet',
  Ge = 'Avbryt',
  qe = 'Välj ljudfil',
  Ye = 'Välj fil...',
  Qe = 'Stäng modal',
  Xe = 'Ansluter till',
  Ze = 'E-postkonfiguration saknas. Konfigurera EmailJS-miljövariabler.',
  eo = 'Din e-post',
  oo = 'Misslyckades att skicka lappen. Försök igen.',
  to = 'Ditt meddelande',
  no = 'Ditt namn',
  so = 'Skicka lapp',
  ao = 'Skickar...',
  lo = 'Lappen skickades framgångsrikt!',
  ro = 'Lämna en lapp',
  io = 'Titel',
  co = 'Anpassat ljud {{emoji}} togs bort',
  mo = 'Ta bort',
  uo = 'Redigera anpassat ljud',
  go = 'Redigera',
  ho = 'Emoji-ljud',
  fo = 'atlas',
  po = 'pappa',
  yo = 'mamma',
  So = 'oliver',
  To = 'Familjen Davis',
  ko = 'LIVET ÄR FÖR KORT FÖR ATT VARA ALLVARLIG',
  Co = 'HEJ JAG ÄR KD',
  bo =
    'Jag har kodat i flera år och älskar verkligen utmaningen att förvandla idéer till fungerande applikationer. Jag är helt för moderna webbteknologier, ren kod, och att skapa upplevelser som människor faktiskt gillar att använda. Inlärning slutar aldrig inom detta område, och jag omfamnar det med entusiasm!',
  jo = 'Min utvecklingsresa',
  vo = 'Psst... letar du efter något coolt?',
  $o =
    'En fullstack-utvecklare som älskar att bygga coola saker och hjälpa andra utvecklare att nå nästa nivå. När jag inte kodar hittar du mig pyssla med hemautomation, brygga den perfekta koppen kaffe, eller spendera tid med mina barn.',
  Eo =
    'När jag inte stirrar på en skärm hittar du mig nörda över smarta hem-gadgets, förbättra mina kaffebryggningsfärdigheter, eller spendera kvalitetstid med min fantastiska familj. Jag tror att de bästa utvecklarna tar med sig hela sig själva till jobbet, och jag försöker upprätthålla den hälsosamma work-life-balansen varje dag.',
  wo = 'Livet bortom koden',
  Lo = 'Hej, jag är kd',
  Po = 'Hantera anpassade ljud',
  xo = 'Hantera anpassade ljud',
  Mo = 'Gå med i rum',
  Ro = 'Ange ett rumsnamn för att starta festen',
  Ao = 'Dela rumslänken med vänner!',
  Bo = 'Rumsnamn (t.ex., party-room)',
  Do = 'Mer Cowbell',
  Fo = 'Inga anpassade ljud än.',
  _o = 'Ingen fil vald',
  Io = 'Spela ljud för',
  Jo = 'Gå med',
  No = 'Gå med i rum: {{room}}',
  Oo = 'Ange ditt smeknamn',
  Vo = 'Ange ditt smeknamn',
  Uo = 'Mer Cowbell: {{room}}',
  Ho = 'Användare: {{users}}',
  Wo = 'Välkommen, {{nickname}}!',
  zo = 'Välj emoji',
  Ko = 'Köp mer mjölk!',
  Go = 'Ladda upp',
  qo = '{{name}} lade till ett anpassat ljud: {{emoji}}',
  Yo = '{{name}} gick med i rummet',
  Qo = '{{name}} lämnade rummet',
  Xo = '{{name}} spelade {{emoji}}',
  Zo = '{{name}} uppdaterade anpassat ljud: {{emoji}}',
  et = 'Välkommen',
  ot = {
    addCustomSound: We,
    addCustomSoundTitle: ze,
    backToFridge: Ke,
    cancel: Ge,
    chooseAudioFile: qe,
    chooseFile: Ye,
    closeModal: Qe,
    connectingTo: Xe,
    contactConfigErrorMessage: Ze,
    contactEmailPlaceholder: eo,
    contactErrorMessage: oo,
    contactMessagePlaceholder: to,
    contactNamePlaceholder: no,
    contactSendButton: so,
    contactSendingButton: ao,
    contactSuccessMessage: lo,
    contactTitle: ro,
    contactTitlePlaceholder: io,
    customSoundDeleted: co,
    deleteSound: mo,
    editCustomSound: uo,
    editSound: go,
    emojiSoundsTitle: ho,
    familyAtlas: fo,
    familyDad: po,
    familyMom: yo,
    familyOliver: So,
    familyTitle: To,
    fridgeMainText: ko,
    hiText: Co,
    homeDeveloperJourneyText: bo,
    homeDeveloperJourneyTitle: jo,
    homeFridgeLink: vo,
    homeIntro: $o,
    homeLifeBeyondCodeText: Eo,
    homeLifeBeyondCodeTitle: wo,
    homeTitle: Lo,
    manageCustomSoundsButton: Po,
    manageCustomSoundsTitle: xo,
    moreCowbellButton: Mo,
    moreCowbellDescription: Ro,
    moreCowbellHint: Ao,
    moreCowbellPlaceholder: Bo,
    moreCowbellTitle: Do,
    noCustomSounds: Fo,
    noFileChosen: _o,
    playSoundFor: Io,
    roomJoinButton: Jo,
    roomJoinTitle: No,
    roomNicknameLabel: Oo,
    roomNicknamePlaceholder: Vo,
    roomTitle: Uo,
    roomUsers: Ho,
    roomWelcome: Wo,
    selectEmoji: zo,
    stickyNoteText: Ko,
    uploadSound: Go,
    userAddedCustomSound: qo,
    userJoinedRoom: Yo,
    userLeftRoom: Qo,
    userPlayedSound: Xo,
    userUpdatedCustomSound: Zo,
    welcome: et,
  },
  tt = { en: { translation: He }, sv: { translation: ot } };
$.use(E)
  .use(C)
  .init({
    resources: tt,
    fallbackLng: 'en',
    debug: !1,
    interpolation: { escapeValue: !1 },
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
  });
b.createRoot(document.getElementById('root')).render(
  e.jsx(j.StrictMode, { children: e.jsx(v, { children: e.jsx(B, {}) }) })
);
//# sourceMappingURL=index-s-SDRKs2.js.map
