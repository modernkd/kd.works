const d = (i) => typeof i == 'string',
  A = () => {
    let i, e;
    const t = new Promise((n, s) => {
      ((i = n), (e = s));
    });
    return ((t.resolve = i), (t.reject = e), t);
  },
  te = (i) => (i == null ? '' : '' + i),
  Le = (i, e, t) => {
    i.forEach((n) => {
      e[n] && (t[n] = e[n]);
    });
  },
  Oe = /###/g,
  ne = (i) => (i && i.indexOf('###') > -1 ? i.replace(Oe, '.') : i),
  se = (i) => !i || d(i),
  U = (i, e, t) => {
    const n = d(e) ? e.split('.') : e;
    let s = 0;
    for (; s < n.length - 1; ) {
      if (se(i)) return {};
      const r = ne(n[s]);
      (!i[r] && t && (i[r] = new t()),
        Object.prototype.hasOwnProperty.call(i, r) ? (i = i[r]) : (i = {}),
        ++s);
    }
    return se(i) ? {} : { obj: i, k: ne(n[s]) };
  },
  ie = (i, e, t) => {
    const { obj: n, k: s } = U(i, e, Object);
    if (n !== void 0 || e.length === 1) {
      n[s] = t;
      return;
    }
    let r = e[e.length - 1],
      a = e.slice(0, e.length - 1),
      o = U(i, a, Object);
    for (; o.obj === void 0 && a.length; )
      ((r = `${a[a.length - 1]}.${r}`),
        (a = a.slice(0, a.length - 1)),
        (o = U(i, a, Object)),
        o && o.obj && typeof o.obj[`${o.k}.${r}`] < 'u' && (o.obj = void 0));
    o.obj[`${o.k}.${r}`] = t;
  },
  ke = (i, e, t, n) => {
    const { obj: s, k: r } = U(i, e, Object);
    ((s[r] = s[r] || []), s[r].push(t));
  },
  B = (i, e) => {
    const { obj: t, k: n } = U(i, e);
    if (t) return t[n];
  },
  Ce = (i, e, t) => {
    const n = B(i, t);
    return n !== void 0 ? n : B(e, t);
  },
  me = (i, e, t) => {
    for (const n in e)
      n !== '__proto__' &&
        n !== 'constructor' &&
        (n in i
          ? d(i[n]) ||
            i[n] instanceof String ||
            d(e[n]) ||
            e[n] instanceof String
            ? t && (i[n] = e[n])
            : me(i[n], e[n], t)
          : (i[n] = e[n]));
    return i;
  },
  N = (i) => i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var Pe = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
};
const Ne = (i) => (d(i) ? i.replace(/[&<>"'\/]/g, (e) => Pe[e]) : i);
class Re {
  constructor(e) {
    ((this.capacity = e),
      (this.regExpMap = new Map()),
      (this.regExpQueue = []));
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0) return t;
    const n = new RegExp(e);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(e, n),
      this.regExpQueue.push(e),
      n
    );
  }
}
const $e = [' ', ',', '?', '!', ';'],
  Ie = new Re(20),
  Ee = (i, e, t) => {
    ((e = e || ''), (t = t || ''));
    const n = $e.filter((a) => e.indexOf(a) < 0 && t.indexOf(a) < 0);
    if (n.length === 0) return !0;
    const s = Ie.getRegExp(
      `(${n.map((a) => (a === '?' ? '\\?' : a)).join('|')})`
    );
    let r = !s.test(i);
    if (!r) {
      const a = i.indexOf(t);
      a > 0 && !s.test(i.substring(0, a)) && (r = !0);
    }
    return r;
  },
  q = function (i, e) {
    let t =
      arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
    if (!i) return;
    if (i[e]) return i[e];
    const n = e.split(t);
    let s = i;
    for (let r = 0; r < n.length; ) {
      if (!s || typeof s != 'object') return;
      let a,
        o = '';
      for (let l = r; l < n.length; ++l)
        if ((l !== r && (o += t), (o += n[l]), (a = s[o]), a !== void 0)) {
          if (
            ['string', 'number', 'boolean'].indexOf(typeof a) > -1 &&
            l < n.length - 1
          )
            continue;
          r += l - r + 1;
          break;
        }
      s = a;
    }
    return s;
  },
  J = (i) => i && i.replace('_', '-'),
  Fe = {
    type: 'logger',
    log(i) {
      this.output('log', i);
    },
    warn(i) {
      this.output('warn', i);
    },
    error(i) {
      this.output('error', i);
    },
    output(i, e) {
      console && console[i] && console[i].apply(console, e);
    },
  };
class Q {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.prefix = t.prefix || 'i18next:'),
      (this.logger = e || Fe),
      (this.options = t),
      (this.debug = t.debug));
  }
  log() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, 'log', '', !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, 'warn', '', !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, 'error', '');
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(e, t, n, s) {
    return s && !this.debug
      ? null
      : (d(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e));
  }
  create(e) {
    return new Q(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options,
    });
  }
  clone(e) {
    return (
      (e = e || this.options),
      (e.prefix = e.prefix || this.prefix),
      new Q(this.logger, e)
    );
  }
}
var C = new Q();
class Y {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return (
      e.split(' ').forEach((n) => {
        this.observers[n] || (this.observers[n] = new Map());
        const s = this.observers[n].get(t) || 0;
        this.observers[n].set(t, s + 1);
      }),
      this
    );
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1;
      s < t;
      s++
    )
      n[s - 1] = arguments[s];
    (this.observers[e] &&
      Array.from(this.observers[e].entries()).forEach((a) => {
        let [o, l] = a;
        for (let f = 0; f < l; f++) o(...n);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((a) => {
          let [o, l] = a;
          for (let f = 0; f < l; f++) o.apply(o, [e, ...n]);
        }));
  }
}
class re extends Y {
  constructor(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' };
    (super(),
      (this.data = e || {}),
      (this.options = t),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0));
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const r =
        s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator,
      a =
        s.ignoreJSONStructure !== void 0
          ? s.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let o;
    e.indexOf('.') > -1
      ? (o = e.split('.'))
      : ((o = [e, t]),
        n &&
          (Array.isArray(n)
            ? o.push(...n)
            : d(n) && r
              ? o.push(...n.split(r))
              : o.push(n)));
    const l = B(this.data, o);
    return (
      !l &&
        !t &&
        !n &&
        e.indexOf('.') > -1 &&
        ((e = o[0]), (t = o[1]), (n = o.slice(2).join('.'))),
      l || !a || !d(n)
        ? l
        : q(this.data && this.data[e] && this.data[e][t], n, r)
    );
  }
  addResource(e, t, n, s) {
    let r =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const a =
      r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let o = [e, t];
    (n && (o = o.concat(a ? n.split(a) : n)),
      e.indexOf('.') > -1 && ((o = e.split('.')), (s = t), (t = o[1])),
      this.addNamespaces(t),
      ie(this.data, o, s),
      r.silent || this.emit('added', e, t, n, s));
  }
  addResources(e, t, n) {
    let s =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const r in n)
      (d(n[r]) || Array.isArray(n[r])) &&
        this.addResource(e, t, r, n[r], { silent: !0 });
    s.silent || this.emit('added', e, t, n);
  }
  addResourceBundle(e, t, n, s, r) {
    let a =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      o = [e, t];
    (e.indexOf('.') > -1 && ((o = e.split('.')), (s = n), (n = t), (t = o[1])),
      this.addNamespaces(t));
    let l = B(this.data, o) || {};
    (a.skipCopy || (n = JSON.parse(JSON.stringify(n))),
      s ? me(l, n, r) : (l = { ...l, ...n }),
      ie(this.data, o, l),
      a.silent || this.emit('added', e, t, n));
  }
  removeResourceBundle(e, t) {
    (this.hasResourceBundle(e, t) && delete this.data[e][t],
      this.removeNamespaces(t),
      this.emit('removed', e, t));
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return (
      t || (t = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1'
        ? { ...this.getResource(e, t) }
        : this.getResource(e, t)
    );
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!((t && Object.keys(t)) || []).find(
      (s) => t[s] && Object.keys(t[s]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var be = {
  processors: {},
  addPostProcessor(i) {
    this.processors[i.name] = i;
  },
  handle(i, e, t, n, s) {
    return (
      i.forEach((r) => {
        this.processors[r] && (e = this.processors[r].process(e, t, n, s));
      }),
      e
    );
  },
};
const ae = {};
class W extends Y {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (super(),
      Le(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        e,
        this
      ),
      (this.options = t),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = C.create('translator')));
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (e == null) return !1;
    const n = this.resolve(e, t);
    return n && n.res !== void 0;
  }
  extractFromKey(e, t) {
    let n = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    n === void 0 && (n = ':');
    const s =
      t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let r = t.ns || this.options.defaultNS || [];
    const a = n && e.indexOf(n) > -1,
      o =
        !this.options.userDefinedKeySeparator &&
        !t.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !t.nsSeparator &&
        !Ee(e, n, s);
    if (a && !o) {
      const l = e.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0) return { key: e, namespaces: d(r) ? [r] : r };
      const f = e.split(n);
      ((n !== s || (n === s && this.options.ns.indexOf(f[0]) > -1)) &&
        (r = f.shift()),
        (e = f.join(s)));
    }
    return { key: e, namespaces: d(r) ? [r] : r };
  }
  translate(e, t, n) {
    if (
      (typeof t != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (t = this.options.overloadTranslationOptionHandler(arguments)),
      typeof t == 'object' && (t = { ...t }),
      t || (t = {}),
      e == null)
    )
      return '';
    Array.isArray(e) || (e = [String(e)]);
    const s =
        t.returnDetails !== void 0
          ? t.returnDetails
          : this.options.returnDetails,
      r =
        t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator,
      { key: a, namespaces: o } = this.extractFromKey(e[e.length - 1], t),
      l = o[o.length - 1],
      f = t.lng || this.language,
      c = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (f && f.toLowerCase() === 'cimode') {
      if (c) {
        const x = t.nsSeparator || this.options.nsSeparator;
        return s
          ? {
              res: `${l}${x}${a}`,
              usedKey: a,
              exactUsedKey: a,
              usedLng: f,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(t),
            }
          : `${l}${x}${a}`;
      }
      return s
        ? {
            res: a,
            usedKey: a,
            exactUsedKey: a,
            usedLng: f,
            usedNS: l,
            usedParams: this.getUsedParamsDetails(t),
          }
        : a;
    }
    const h = this.resolve(e, t);
    let u = h && h.res;
    const g = (h && h.usedKey) || a,
      p = (h && h.exactUsedKey) || a,
      b = Object.prototype.toString.apply(u),
      m = ['[object Number]', '[object Function]', '[object RegExp]'],
      w = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays,
      y = !this.i18nFormat || this.i18nFormat.handleAsObject,
      $ = !d(u) && typeof u != 'boolean' && typeof u != 'number';
    if (y && u && $ && m.indexOf(b) < 0 && !(d(w) && Array.isArray(u))) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!'
          );
        const x = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(g, u, { ...t, ns: o })
          : `key '${a} (${this.language})' returned an object instead of string.`;
        return s
          ? ((h.res = x), (h.usedParams = this.getUsedParamsDetails(t)), h)
          : x;
      }
      if (r) {
        const x = Array.isArray(u),
          L = x ? [] : {},
          k = x ? p : g;
        for (const S in u)
          if (Object.prototype.hasOwnProperty.call(u, S)) {
            const M = `${k}${r}${S}`;
            ((L[S] = this.translate(M, { ...t, joinArrays: !1, ns: o })),
              L[S] === M && (L[S] = u[S]));
          }
        u = L;
      }
    } else if (y && d(w) && Array.isArray(u))
      ((u = u.join(w)), u && (u = this.extendTranslation(u, e, t, n)));
    else {
      let x = !1,
        L = !1;
      const k = t.count !== void 0 && !d(t.count),
        S = W.hasDefaultValue(t),
        M = k ? this.pluralResolver.getSuffix(f, t.count, t) : '',
        ve =
          t.ordinal && k
            ? this.pluralResolver.getSuffix(f, t.count, { ordinal: !1 })
            : '',
        X =
          k &&
          !t.ordinal &&
          t.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        I =
          (X && t[`defaultValue${this.options.pluralSeparator}zero`]) ||
          t[`defaultValue${M}`] ||
          t[`defaultValue${ve}`] ||
          t.defaultValue;
      (!this.isValidLookup(u) && S && ((x = !0), (u = I)),
        this.isValidLookup(u) || ((L = !0), (u = a)));
      const we =
          (t.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          L
            ? void 0
            : u,
        E = S && I !== u && this.options.updateMissing;
      if (L || x || E) {
        if (
          (this.logger.log(E ? 'updateKey' : 'missingKey', f, l, a, E ? I : u),
          r)
        ) {
          const O = this.resolve(a, { ...t, keySeparator: !1 });
          O &&
            O.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            );
        }
        let F = [];
        const z = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          t.lng || this.language
        );
        if (this.options.saveMissingTo === 'fallback' && z && z[0])
          for (let O = 0; O < z.length; O++) F.push(z[O]);
        else
          this.options.saveMissingTo === 'all'
            ? (F = this.languageUtils.toResolveHierarchy(
                t.lng || this.language
              ))
            : F.push(t.lng || this.language);
        const _ = (O, P, D) => {
          const ee = S && D !== u ? D : we;
          (this.options.missingKeyHandler
            ? this.options.missingKeyHandler(O, l, P, ee, E, t)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(O, l, P, ee, E, t),
            this.emit('missingKey', O, l, P, u));
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && k
            ? F.forEach((O) => {
                const P = this.pluralResolver.getSuffixes(O, t);
                (X &&
                  t[`defaultValue${this.options.pluralSeparator}zero`] &&
                  P.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  P.push(`${this.options.pluralSeparator}zero`),
                  P.forEach((D) => {
                    _([O], a + D, t[`defaultValue${D}`] || I);
                  }));
              })
            : _(F, a, I));
      }
      ((u = this.extendTranslation(u, e, t, h, n)),
        L &&
          u === a &&
          this.options.appendNamespaceToMissingKey &&
          (u = `${l}:${a}`),
        (L || x) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (u = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${l}:${a}` : a,
                x ? u : void 0
              ))
            : (u = this.options.parseMissingKeyHandler(u))));
    }
    return s
      ? ((h.res = u), (h.usedParams = this.getUsedParamsDetails(t)), h)
      : u;
  }
  extendTranslation(e, t, n, s, r) {
    var a = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(
        e,
        { ...this.options.interpolation.defaultVariables, ...n },
        n.lng || this.language || s.usedLng,
        s.usedNS,
        s.usedKey,
        { resolved: s }
      );
    else if (!n.skipInterpolation) {
      n.interpolation &&
        this.interpolator.init({
          ...n,
          interpolation: { ...this.options.interpolation, ...n.interpolation },
        });
      const f =
        d(e) &&
        (n && n.interpolation && n.interpolation.skipOnVariables !== void 0
          ? n.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let c;
      if (f) {
        const u = e.match(this.interpolator.nestingRegexp);
        c = u && u.length;
      }
      let h = n.replace && !d(n.replace) ? n.replace : n;
      if (
        (this.options.interpolation.defaultVariables &&
          (h = { ...this.options.interpolation.defaultVariables, ...h }),
        (e = this.interpolator.interpolate(
          e,
          h,
          n.lng || this.language || s.usedLng,
          n
        )),
        f)
      ) {
        const u = e.match(this.interpolator.nestingRegexp),
          g = u && u.length;
        c < g && (n.nest = !1);
      }
      (!n.lng &&
        this.options.compatibilityAPI !== 'v1' &&
        s &&
        s.res &&
        (n.lng = this.language || s.usedLng),
        n.nest !== !1 &&
          (e = this.interpolator.nest(
            e,
            function () {
              for (
                var u = arguments.length, g = new Array(u), p = 0;
                p < u;
                p++
              )
                g[p] = arguments[p];
              return r && r[0] === g[0] && !n.context
                ? (a.logger.warn(
                    `It seems you are nesting recursively key: ${g[0]} in key: ${t[0]}`
                  ),
                  null)
                : a.translate(...g, t);
            },
            n
          )),
        n.interpolation && this.interpolator.reset());
    }
    const o = n.postProcess || this.options.postProcess,
      l = d(o) ? [o] : o;
    return (
      e != null &&
        l &&
        l.length &&
        n.applyPostProcessor !== !1 &&
        (e = be.handle(
          l,
          e,
          t,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...s,
                  usedParams: this.getUsedParamsDetails(n),
                },
                ...n,
              }
            : n,
          this
        )),
      e
    );
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n,
      s,
      r,
      a,
      o;
    return (
      d(e) && (e = [e]),
      e.forEach((l) => {
        if (this.isValidLookup(n)) return;
        const f = this.extractFromKey(l, t),
          c = f.key;
        s = c;
        let h = f.namespaces;
        this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
        const u = t.count !== void 0 && !d(t.count),
          g =
            u &&
            !t.ordinal &&
            t.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          p =
            t.context !== void 0 &&
            (d(t.context) || typeof t.context == 'number') &&
            t.context !== '',
          b = t.lngs
            ? t.lngs
            : this.languageUtils.toResolveHierarchy(
                t.lng || this.language,
                t.fallbackLng
              );
        h.forEach((m) => {
          this.isValidLookup(n) ||
            ((o = m),
            !ae[`${b[0]}-${m}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(o) &&
              ((ae[`${b[0]}-${m}`] = !0),
              this.logger.warn(
                `key "${s}" for languages "${b.join(', ')}" won't get resolved as namespace "${o}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            b.forEach((w) => {
              if (this.isValidLookup(n)) return;
              a = w;
              const y = [c];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(y, c, w, m, t);
              else {
                let x;
                u && (x = this.pluralResolver.getSuffix(w, t.count, t));
                const L = `${this.options.pluralSeparator}zero`,
                  k = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (u &&
                    (y.push(c + x),
                    t.ordinal &&
                      x.indexOf(k) === 0 &&
                      y.push(c + x.replace(k, this.options.pluralSeparator)),
                    g && y.push(c + L)),
                  p)
                ) {
                  const S = `${c}${this.options.contextSeparator}${t.context}`;
                  (y.push(S),
                    u &&
                      (y.push(S + x),
                      t.ordinal &&
                        x.indexOf(k) === 0 &&
                        y.push(S + x.replace(k, this.options.pluralSeparator)),
                      g && y.push(S + L)));
                }
              }
              let $;
              for (; ($ = y.pop()); )
                this.isValidLookup(n) ||
                  ((r = $), (n = this.getResource(w, m, $, t)));
            }));
        });
      }),
      { res: n, usedKey: s, exactUsedKey: r, usedLng: a, usedNS: o }
    );
  }
  isValidLookup(e) {
    return (
      e !== void 0 &&
      !(!this.options.returnNull && e === null) &&
      !(!this.options.returnEmptyString && e === '')
    );
  }
  getResource(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(e, t, n, s)
      : this.resourceStore.getResource(e, t, n, s);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      n = e.replace && !d(e.replace);
    let s = n ? e.replace : e;
    if (
      (n && typeof e.count < 'u' && (s.count = e.count),
      this.options.interpolation.defaultVariables &&
        (s = { ...this.options.interpolation.defaultVariables, ...s }),
      !n)
    ) {
      s = { ...s };
      for (const r of t) delete s[r];
    }
    return s;
  }
  static hasDefaultValue(e) {
    const t = 'defaultValue';
    for (const n in e)
      if (
        Object.prototype.hasOwnProperty.call(e, n) &&
        t === n.substring(0, t.length) &&
        e[n] !== void 0
      )
        return !0;
    return !1;
  }
}
const G = (i) => i.charAt(0).toUpperCase() + i.slice(1);
class oe {
  constructor(e) {
    ((this.options = e),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = C.create('languageUtils')));
  }
  getScriptPartFromCode(e) {
    if (((e = J(e)), !e || e.indexOf('-') < 0)) return null;
    const t = e.split('-');
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(t.join('-'));
  }
  getLanguagePartFromCode(e) {
    if (((e = J(e)), !e || e.indexOf('-') < 0)) return e;
    const t = e.split('-');
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (d(e) && e.indexOf('-') > -1) {
      if (typeof Intl < 'u' && typeof Intl.getCanonicalLocales < 'u')
        try {
          let s = Intl.getCanonicalLocales(e)[0];
          if ((s && this.options.lowerCaseLng && (s = s.toLowerCase()), s))
            return s;
        } catch {}
      const t = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let n = e.split('-');
      return (
        this.options.lowerCaseLng
          ? (n = n.map((s) => s.toLowerCase()))
          : n.length === 2
            ? ((n[0] = n[0].toLowerCase()),
              (n[1] = n[1].toUpperCase()),
              t.indexOf(n[1].toLowerCase()) > -1 &&
                (n[1] = G(n[1].toLowerCase())))
            : n.length === 3 &&
              ((n[0] = n[0].toLowerCase()),
              n[1].length === 2 && (n[1] = n[1].toUpperCase()),
              n[0] !== 'sgn' &&
                n[2].length === 2 &&
                (n[2] = n[2].toUpperCase()),
              t.indexOf(n[1].toLowerCase()) > -1 &&
                (n[1] = G(n[1].toLowerCase())),
              t.indexOf(n[2].toLowerCase()) > -1 &&
                (n[2] = G(n[2].toLowerCase()))),
        n.join('-')
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? e.toLowerCase()
      : e;
  }
  isSupportedCode(e) {
    return (
      (this.options.load === 'languageOnly' ||
        this.options.nonExplicitSupportedLngs) &&
        (e = this.getLanguagePartFromCode(e)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(e) > -1
    );
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return (
      e.forEach((n) => {
        if (t) return;
        const s = this.formatLanguageCode(n);
        (!this.options.supportedLngs || this.isSupportedCode(s)) && (t = s);
      }),
      !t &&
        this.options.supportedLngs &&
        e.forEach((n) => {
          if (t) return;
          const s = this.getLanguagePartFromCode(n);
          if (this.isSupportedCode(s)) return (t = s);
          t = this.options.supportedLngs.find((r) => {
            if (r === s) return r;
            if (
              !(r.indexOf('-') < 0 && s.indexOf('-') < 0) &&
              ((r.indexOf('-') > 0 &&
                s.indexOf('-') < 0 &&
                r.substring(0, r.indexOf('-')) === s) ||
                (r.indexOf(s) === 0 && s.length > 1))
            )
              return r;
          });
        }),
      t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
      t
    );
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (
      (typeof e == 'function' && (e = e(t)),
      d(e) && (e = [e]),
      Array.isArray(e))
    )
      return e;
    if (!t) return e.default || [];
    let n = e[t];
    return (
      n || (n = e[this.getScriptPartFromCode(t)]),
      n || (n = e[this.formatLanguageCode(t)]),
      n || (n = e[this.getLanguagePartFromCode(t)]),
      n || (n = e.default),
      n || []
    );
  }
  toResolveHierarchy(e, t) {
    const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
      s = [],
      r = (a) => {
        a &&
          (this.isSupportedCode(a)
            ? s.push(a)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${a}`
              ));
      };
    return (
      d(e) && (e.indexOf('-') > -1 || e.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' &&
            r(this.formatLanguageCode(e)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            r(this.getScriptPartFromCode(e)),
          this.options.load !== 'currentOnly' &&
            r(this.getLanguagePartFromCode(e)))
        : d(e) && r(this.formatLanguageCode(e)),
      n.forEach((a) => {
        s.indexOf(a) < 0 && r(this.formatLanguageCode(a));
      }),
      s
    );
  }
}
let De = [
    {
      lngs: [
        'ach',
        'ak',
        'am',
        'arn',
        'br',
        'fil',
        'gun',
        'ln',
        'mfe',
        'mg',
        'mi',
        'oc',
        'pt',
        'pt-BR',
        'tg',
        'tl',
        'ti',
        'tr',
        'uz',
        'wa',
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        'af',
        'an',
        'ast',
        'az',
        'bg',
        'bn',
        'ca',
        'da',
        'de',
        'dev',
        'el',
        'en',
        'eo',
        'es',
        'et',
        'eu',
        'fi',
        'fo',
        'fur',
        'fy',
        'gl',
        'gu',
        'ha',
        'hi',
        'hu',
        'hy',
        'ia',
        'it',
        'kk',
        'kn',
        'ku',
        'lb',
        'mai',
        'ml',
        'mn',
        'mr',
        'nah',
        'nap',
        'nb',
        'ne',
        'nl',
        'nn',
        'no',
        'nso',
        'pa',
        'pap',
        'pms',
        'ps',
        'pt-PT',
        'rm',
        'sco',
        'se',
        'si',
        'so',
        'son',
        'sq',
        'sv',
        'sw',
        'ta',
        'te',
        'tk',
        'ur',
        'yo',
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        'ay',
        'bo',
        'cgg',
        'fa',
        'ht',
        'id',
        'ja',
        'jbo',
        'ka',
        'km',
        'ko',
        'ky',
        'lo',
        'ms',
        'sah',
        'su',
        'th',
        'tt',
        'ug',
        'vi',
        'wo',
        'zh',
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
    { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
    { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ['fr'], nr: [1, 2], fc: 9 },
    { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ['is'], nr: [1, 2], fc: 12 },
    { lngs: ['jv'], nr: [0, 1], fc: 13 },
    { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
    { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
    { lngs: ['mk'], nr: [1, 2], fc: 17 },
    { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
    { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ['or'], nr: [2, 1], fc: 2 },
    { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
    { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
  ],
  Ae = {
    1: (i) => +(i > 1),
    2: (i) => +(i != 1),
    3: (i) => 0,
    4: (i) =>
      i % 10 == 1 && i % 100 != 11
        ? 0
        : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20)
          ? 1
          : 2,
    5: (i) =>
      i == 0
        ? 0
        : i == 1
          ? 1
          : i == 2
            ? 2
            : i % 100 >= 3 && i % 100 <= 10
              ? 3
              : i % 100 >= 11
                ? 4
                : 5,
    6: (i) => (i == 1 ? 0 : i >= 2 && i <= 4 ? 1 : 2),
    7: (i) =>
      i == 1
        ? 0
        : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20)
          ? 1
          : 2,
    8: (i) => (i == 1 ? 0 : i == 2 ? 1 : i != 8 && i != 11 ? 2 : 3),
    9: (i) => +(i >= 2),
    10: (i) => (i == 1 ? 0 : i == 2 ? 1 : i < 7 ? 2 : i < 11 ? 3 : 4),
    11: (i) =>
      i == 1 || i == 11 ? 0 : i == 2 || i == 12 ? 1 : i > 2 && i < 20 ? 2 : 3,
    12: (i) => +(i % 10 != 1 || i % 100 == 11),
    13: (i) => +(i !== 0),
    14: (i) => (i == 1 ? 0 : i == 2 ? 1 : i == 3 ? 2 : 3),
    15: (i) =>
      i % 10 == 1 && i % 100 != 11
        ? 0
        : i % 10 >= 2 && (i % 100 < 10 || i % 100 >= 20)
          ? 1
          : 2,
    16: (i) => (i % 10 == 1 && i % 100 != 11 ? 0 : i !== 0 ? 1 : 2),
    17: (i) => (i == 1 || (i % 10 == 1 && i % 100 != 11) ? 0 : 1),
    18: (i) => (i == 0 ? 0 : i == 1 ? 1 : 2),
    19: (i) =>
      i == 1
        ? 0
        : i == 0 || (i % 100 > 1 && i % 100 < 11)
          ? 1
          : i % 100 > 10 && i % 100 < 20
            ? 2
            : 3,
    20: (i) => (i == 1 ? 0 : i == 0 || (i % 100 > 0 && i % 100 < 20) ? 1 : 2),
    21: (i) =>
      i % 100 == 1
        ? 1
        : i % 100 == 2
          ? 2
          : i % 100 == 3 || i % 100 == 4
            ? 3
            : 0,
    22: (i) =>
      i == 1 ? 0 : i == 2 ? 1 : (i < 0 || i > 10) && i % 10 == 0 ? 2 : 3,
  };
const je = ['v1', 'v2', 'v3'],
  Te = ['v4'],
  le = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  Ue = () => {
    const i = {};
    return (
      De.forEach((e) => {
        e.lngs.forEach((t) => {
          i[t] = { numbers: e.nr, plurals: Ae[e.fc] };
        });
      }),
      i
    );
  };
class Ve {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.languageUtils = e),
      (this.options = t),
      (this.logger = C.create('pluralResolver')),
      (!this.options.compatibilityJSON ||
        Te.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = Ue()),
      (this.pluralRulesCache = {}));
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const n = J(e === 'dev' ? 'en' : e),
        s = t.ordinal ? 'ordinal' : 'cardinal',
        r = JSON.stringify({ cleanedCode: n, type: s });
      if (r in this.pluralRulesCache) return this.pluralRulesCache[r];
      let a;
      try {
        a = new Intl.PluralRules(n, { type: s });
      } catch {
        if (!e.match(/-|_/)) return;
        const l = this.languageUtils.getLanguagePartFromCode(e);
        a = this.getRule(l, t);
      }
      return ((this.pluralRulesCache[r] = a), a);
    }
    return (
      this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
    );
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = this.getRule(e, t);
    return this.shouldUseIntlApi()
      ? n && n.resolvedOptions().pluralCategories.length > 1
      : n && n.numbers.length > 1;
  }
  getPluralFormsOfKey(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, n).map((s) => `${t}${s}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = this.getRule(e, t);
    return n
      ? this.shouldUseIntlApi()
        ? n
            .resolvedOptions()
            .pluralCategories.sort((s, r) => le[s] - le[r])
            .map(
              (s) =>
                `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ''}${s}`
            )
        : n.numbers.map((s) => this.getSuffix(e, s, t))
      : [];
  }
  getSuffix(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = this.getRule(e, n);
    return s
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ''}${s.select(t)}`
        : this.getSuffixRetroCompatible(s, t)
      : (this.logger.warn(`no plural rule found for: ${e}`), '');
  }
  getSuffixRetroCompatible(e, t) {
    const n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
    let s = e.numbers[n];
    this.options.simplifyPluralSuffix &&
      e.numbers.length === 2 &&
      e.numbers[0] === 1 &&
      (s === 2 ? (s = 'plural') : s === 1 && (s = ''));
    const r = () =>
      this.options.prepend && s.toString()
        ? this.options.prepend + s.toString()
        : s.toString();
    return this.options.compatibilityJSON === 'v1'
      ? s === 1
        ? ''
        : typeof s == 'number'
          ? `_plural_${s.toString()}`
          : r()
      : this.options.compatibilityJSON === 'v2' ||
          (this.options.simplifyPluralSuffix &&
            e.numbers.length === 2 &&
            e.numbers[0] === 1)
        ? r()
        : this.options.prepend && n.toString()
          ? this.options.prepend + n.toString()
          : n.toString();
  }
  shouldUseIntlApi() {
    return !je.includes(this.options.compatibilityJSON);
  }
}
const ue = function (i, e, t) {
    let n =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      r = Ce(i, e, t);
    return (
      !r && s && d(t) && ((r = q(i, t, n)), r === void 0 && (r = q(e, t, n))),
      r
    );
  },
  Z = (i) => i.replace(/\$/g, '$$$$');
class Ke {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ((this.logger = C.create('interpolator')),
      (this.options = e),
      (this.format = (e.interpolation && e.interpolation.format) || ((t) => t)),
      this.init(e));
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = { escapeValue: !0 });
    const {
      escape: t,
      escapeValue: n,
      useRawValueToEscape: s,
      prefix: r,
      prefixEscaped: a,
      suffix: o,
      suffixEscaped: l,
      formatSeparator: f,
      unescapeSuffix: c,
      unescapePrefix: h,
      nestingPrefix: u,
      nestingPrefixEscaped: g,
      nestingSuffix: p,
      nestingSuffixEscaped: b,
      nestingOptionsSeparator: m,
      maxReplaces: w,
      alwaysFormat: y,
    } = e.interpolation;
    ((this.escape = t !== void 0 ? t : Ne),
      (this.escapeValue = n !== void 0 ? n : !0),
      (this.useRawValueToEscape = s !== void 0 ? s : !1),
      (this.prefix = r ? N(r) : a || '{{'),
      (this.suffix = o ? N(o) : l || '}}'),
      (this.formatSeparator = f || ','),
      (this.unescapePrefix = c ? '' : h || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : c || ''),
      (this.nestingPrefix = u ? N(u) : g || N('$t(')),
      (this.nestingSuffix = p ? N(p) : b || N(')')),
      (this.nestingOptionsSeparator = m || ','),
      (this.maxReplaces = w || 1e3),
      (this.alwaysFormat = y !== void 0 ? y : !1),
      this.resetRegExp());
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, n) =>
      t && t.source === n ? ((t.lastIndex = 0), t) : new RegExp(n, 'g');
    ((this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = e(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = e(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      )));
  }
  interpolate(e, t, n, s) {
    let r, a, o;
    const l =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      f = (g) => {
        if (g.indexOf(this.formatSeparator) < 0) {
          const w = ue(
            t,
            l,
            g,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          );
          return this.alwaysFormat
            ? this.format(w, void 0, n, { ...s, ...t, interpolationkey: g })
            : w;
        }
        const p = g.split(this.formatSeparator),
          b = p.shift().trim(),
          m = p.join(this.formatSeparator).trim();
        return this.format(
          ue(
            t,
            l,
            b,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          m,
          n,
          { ...s, ...t, interpolationkey: b }
        );
      };
    this.resetRegExp();
    const c =
        (s && s.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      h =
        s && s.interpolation && s.interpolation.skipOnVariables !== void 0
          ? s.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (g) => Z(g) },
        {
          regex: this.regexp,
          safeValue: (g) => (this.escapeValue ? Z(this.escape(g)) : Z(g)),
        },
      ].forEach((g) => {
        for (o = 0; (r = g.regex.exec(e)); ) {
          const p = r[1].trim();
          if (((a = f(p)), a === void 0))
            if (typeof c == 'function') {
              const m = c(e, r, s);
              a = d(m) ? m : '';
            } else if (s && Object.prototype.hasOwnProperty.call(s, p)) a = '';
            else if (h) {
              a = r[0];
              continue;
            } else
              (this.logger.warn(
                `missed to pass in variable ${p} for interpolating ${e}`
              ),
                (a = ''));
          else !d(a) && !this.useRawValueToEscape && (a = te(a));
          const b = g.safeValue(a);
          if (
            ((e = e.replace(r[0], b)),
            h
              ? ((g.regex.lastIndex += a.length),
                (g.regex.lastIndex -= r[0].length))
              : (g.regex.lastIndex = 0),
            o++,
            o >= this.maxReplaces)
          )
            break;
        }
      }),
      e
    );
  }
  nest(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      s,
      r,
      a;
    const o = (l, f) => {
      const c = this.nestingOptionsSeparator;
      if (l.indexOf(c) < 0) return l;
      const h = l.split(new RegExp(`${c}[ ]*{`));
      let u = `{${h[1]}`;
      ((l = h[0]), (u = this.interpolate(u, a)));
      const g = u.match(/'/g),
        p = u.match(/"/g);
      ((g && g.length % 2 === 0 && !p) || p.length % 2 !== 0) &&
        (u = u.replace(/'/g, '"'));
      try {
        ((a = JSON.parse(u)), f && (a = { ...f, ...a }));
      } catch (b) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${l}`,
            b
          ),
          `${l}${c}${u}`
        );
      }
      return (
        a.defaultValue &&
          a.defaultValue.indexOf(this.prefix) > -1 &&
          delete a.defaultValue,
        l
      );
    };
    for (; (s = this.nestingRegexp.exec(e)); ) {
      let l = [];
      ((a = { ...n }),
        (a = a.replace && !d(a.replace) ? a.replace : a),
        (a.applyPostProcessor = !1),
        delete a.defaultValue);
      let f = !1;
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const c = s[1].split(this.formatSeparator).map((h) => h.trim());
        ((s[1] = c.shift()), (l = c), (f = !0));
      }
      if (((r = t(o.call(this, s[1].trim(), a), a)), r && s[0] === e && !d(r)))
        return r;
      (d(r) || (r = te(r)),
        r ||
          (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`),
          (r = '')),
        f &&
          (r = l.reduce(
            (c, h) =>
              this.format(c, h, n.lng, { ...n, interpolationkey: s[1].trim() }),
            r.trim()
          )),
        (e = e.replace(s[0], r)),
        (this.regexp.lastIndex = 0));
    }
    return e;
  }
}
const Me = (i) => {
    let e = i.toLowerCase().trim();
    const t = {};
    if (i.indexOf('(') > -1) {
      const n = i.split('(');
      e = n[0].toLowerCase().trim();
      const s = n[1].substring(0, n[1].length - 1);
      e === 'currency' && s.indexOf(':') < 0
        ? t.currency || (t.currency = s.trim())
        : e === 'relativetime' && s.indexOf(':') < 0
          ? t.range || (t.range = s.trim())
          : s.split(';').forEach((a) => {
              if (a) {
                const [o, ...l] = a.split(':'),
                  f = l
                    .join(':')
                    .trim()
                    .replace(/^'+|'+$/g, ''),
                  c = o.trim();
                (t[c] || (t[c] = f),
                  f === 'false' && (t[c] = !1),
                  f === 'true' && (t[c] = !0),
                  isNaN(f) || (t[c] = parseInt(f, 10)));
              }
            });
    }
    return { formatName: e, formatOptions: t };
  },
  R = (i) => {
    const e = {};
    return (t, n, s) => {
      let r = s;
      s &&
        s.interpolationkey &&
        s.formatParams &&
        s.formatParams[s.interpolationkey] &&
        s[s.interpolationkey] &&
        (r = { ...r, [s.interpolationkey]: void 0 });
      const a = n + JSON.stringify(r);
      let o = e[a];
      return (o || ((o = i(J(n), s)), (e[a] = o)), o(t));
    };
  };
class ze {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ((this.logger = C.create('formatter')),
      (this.options = e),
      (this.formats = {
        number: R((t, n) => {
          const s = new Intl.NumberFormat(t, { ...n });
          return (r) => s.format(r);
        }),
        currency: R((t, n) => {
          const s = new Intl.NumberFormat(t, { ...n, style: 'currency' });
          return (r) => s.format(r);
        }),
        datetime: R((t, n) => {
          const s = new Intl.DateTimeFormat(t, { ...n });
          return (r) => s.format(r);
        }),
        relativetime: R((t, n) => {
          const s = new Intl.RelativeTimeFormat(t, { ...n });
          return (r) => s.format(r, n.range || 'day');
        }),
        list: R((t, n) => {
          const s = new Intl.ListFormat(t, { ...n });
          return (r) => s.format(r);
        }),
      }),
      this.init(e));
  }
  init(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    this.formatSeparator = t.interpolation.formatSeparator || ',';
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = R(t);
  }
  format(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const r = t.split(this.formatSeparator);
    if (
      r.length > 1 &&
      r[0].indexOf('(') > 1 &&
      r[0].indexOf(')') < 0 &&
      r.find((o) => o.indexOf(')') > -1)
    ) {
      const o = r.findIndex((l) => l.indexOf(')') > -1);
      r[0] = [r[0], ...r.splice(1, o)].join(this.formatSeparator);
    }
    return r.reduce((o, l) => {
      const { formatName: f, formatOptions: c } = Me(l);
      if (this.formats[f]) {
        let h = o;
        try {
          const u =
              (s && s.formatParams && s.formatParams[s.interpolationkey]) || {},
            g = u.locale || u.lng || s.locale || s.lng || n;
          h = this.formats[f](o, g, { ...c, ...s, ...u });
        } catch (u) {
          this.logger.warn(u);
        }
        return h;
      } else this.logger.warn(`there was no format function for ${f}`);
      return o;
    }, e);
  }
}
const He = (i, e) => {
  i.pending[e] !== void 0 && (delete i.pending[e], i.pendingCount--);
};
class Be extends Y {
  constructor(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    (super(),
      (this.backend = e),
      (this.store = t),
      (this.services = n),
      (this.languageUtils = n.languageUtils),
      (this.options = s),
      (this.logger = C.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = s.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5),
      (this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(n, s.backend, s));
  }
  queueLoad(e, t, n, s) {
    const r = {},
      a = {},
      o = {},
      l = {};
    return (
      e.forEach((f) => {
        let c = !0;
        (t.forEach((h) => {
          const u = `${f}|${h}`;
          !n.reload && this.store.hasResourceBundle(f, h)
            ? (this.state[u] = 2)
            : this.state[u] < 0 ||
              (this.state[u] === 1
                ? a[u] === void 0 && (a[u] = !0)
                : ((this.state[u] = 1),
                  (c = !1),
                  a[u] === void 0 && (a[u] = !0),
                  r[u] === void 0 && (r[u] = !0),
                  l[h] === void 0 && (l[h] = !0)));
        }),
          c || (o[f] = !0));
      }),
      (Object.keys(r).length || Object.keys(a).length) &&
        this.queue.push({
          pending: a,
          pendingCount: Object.keys(a).length,
          loaded: {},
          errors: [],
          callback: s,
        }),
      {
        toLoad: Object.keys(r),
        pending: Object.keys(a),
        toLoadLanguages: Object.keys(o),
        toLoadNamespaces: Object.keys(l),
      }
    );
  }
  loaded(e, t, n) {
    const s = e.split('|'),
      r = s[0],
      a = s[1];
    (t && this.emit('failedLoading', r, a, t),
      !t &&
        n &&
        this.store.addResourceBundle(r, a, n, void 0, void 0, { skipCopy: !0 }),
      (this.state[e] = t ? -1 : 2),
      t && n && (this.state[e] = 0));
    const o = {};
    (this.queue.forEach((l) => {
      (ke(l.loaded, [r], a),
        He(l, e),
        t && l.errors.push(t),
        l.pendingCount === 0 &&
          !l.done &&
          (Object.keys(l.loaded).forEach((f) => {
            o[f] || (o[f] = {});
            const c = l.loaded[f];
            c.length &&
              c.forEach((h) => {
                o[f][h] === void 0 && (o[f][h] = !0);
              });
          }),
          (l.done = !0),
          l.errors.length ? l.callback(l.errors) : l.callback()));
    }),
      this.emit('loaded', o),
      (this.queue = this.queue.filter((l) => !l.done)));
  }
  read(e, t, n) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      r =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      a = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: n,
        tried: s,
        wait: r,
        callback: a,
      });
      return;
    }
    this.readingCalls++;
    const o = (f, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const h = this.waitingReads.shift();
          this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback);
        }
        if (f && c && s < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, e, t, n, s + 1, r * 2, a);
          }, r);
          return;
        }
        a(f, c);
      },
      l = this.backend[n].bind(this.backend);
    if (l.length === 2) {
      try {
        const f = l(e, t);
        f && typeof f.then == 'function'
          ? f.then((c) => o(null, c)).catch(o)
          : o(null, f);
      } catch (f) {
        o(f);
      }
      return;
    }
    return l(e, t, o);
  }
  prepareLoading(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      s = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          'No backend was added via i18next.use. Will not load resources.'
        ),
        s && s()
      );
    (d(e) && (e = this.languageUtils.toResolveHierarchy(e)), d(t) && (t = [t]));
    const r = this.queueLoad(e, t, n, s);
    if (!r.toLoad.length) return (r.pending.length || s(), null);
    r.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(e, t, n) {
    this.prepareLoading(e, t, {}, n);
  }
  reload(e, t, n) {
    this.prepareLoading(e, t, { reload: !0 }, n);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const n = e.split('|'),
      s = n[0],
      r = n[1];
    this.read(s, r, 'read', void 0, void 0, (a, o) => {
      (a &&
        this.logger.warn(
          `${t}loading namespace ${r} for language ${s} failed`,
          a
        ),
        !a &&
          o &&
          this.logger.log(`${t}loaded namespace ${r} for language ${s}`, o),
        this.loaded(e, a, o));
    });
  }
  saveMissing(e, t, n, s, r) {
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      o =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(t)
    ) {
      this.logger.warn(
        `did not save key "${n}" as the namespace "${t}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
      );
      return;
    }
    if (!(n == null || n === '')) {
      if (this.backend && this.backend.create) {
        const l = { ...a, isUpdate: r },
          f = this.backend.create.bind(this.backend);
        if (f.length < 6)
          try {
            let c;
            (f.length === 5 ? (c = f(e, t, n, s, l)) : (c = f(e, t, n, s)),
              c && typeof c.then == 'function'
                ? c.then((h) => o(null, h)).catch(o)
                : o(null, c));
          } catch (c) {
            o(c);
          }
        else f(e, t, n, s, o, l);
      }
      !e || !e[0] || this.store.addResource(e[0], t, n, s);
    }
  }
}
const fe = () => ({
    debug: !1,
    initImmediate: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (i) => {
      let e = {};
      if (
        (typeof i[1] == 'object' && (e = i[1]),
        d(i[1]) && (e.defaultValue = i[1]),
        d(i[2]) && (e.tDescription = i[2]),
        typeof i[2] == 'object' || typeof i[3] == 'object')
      ) {
        const t = i[3] || i[2];
        Object.keys(t).forEach((n) => {
          e[n] = t[n];
        });
      }
      return e;
    },
    interpolation: {
      escapeValue: !0,
      format: (i) => i,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  ce = (i) => (
    d(i.ns) && (i.ns = [i.ns]),
    d(i.fallbackLng) && (i.fallbackLng = [i.fallbackLng]),
    d(i.fallbackNS) && (i.fallbackNS = [i.fallbackNS]),
    i.supportedLngs &&
      i.supportedLngs.indexOf('cimode') < 0 &&
      (i.supportedLngs = i.supportedLngs.concat(['cimode'])),
    i
  ),
  H = () => {},
  Je = (i) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach((t) => {
      typeof i[t] == 'function' && (i[t] = i[t].bind(i));
    });
  };
class V extends Y {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = ce(e)),
      (this.services = {}),
      (this.logger = C),
      (this.modules = { external: [] }),
      Je(this),
      t && !this.isInitialized && !e.isClone)
    ) {
      if (!this.options.initImmediate) return (this.init(e, t), this);
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    ((this.isInitializing = !0),
      typeof t == 'function' && ((n = t), (t = {})),
      !t.defaultNS &&
        t.defaultNS !== !1 &&
        t.ns &&
        (d(t.ns)
          ? (t.defaultNS = t.ns)
          : t.ns.indexOf('translation') < 0 && (t.defaultNS = t.ns[0])));
    const s = fe();
    ((this.options = { ...s, ...this.options, ...ce(t) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = {
          ...s.interpolation,
          ...this.options.interpolation,
        }),
      t.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = t.keySeparator),
      t.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = t.nsSeparator));
    const r = (c) => (c ? (typeof c == 'function' ? new c() : c) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? C.init(r(this.modules.logger), this.options)
        : C.init(null, this.options);
      let c;
      this.modules.formatter
        ? (c = this.modules.formatter)
        : typeof Intl < 'u' && (c = ze);
      const h = new oe(this.options);
      this.store = new re(this.options.resources, this.options);
      const u = this.services;
      ((u.logger = C),
        (u.resourceStore = this.store),
        (u.languageUtils = h),
        (u.pluralResolver = new Ve(h, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === s.interpolation.format) &&
          ((u.formatter = r(c)),
          u.formatter.init(u, this.options),
          (this.options.interpolation.format = u.formatter.format.bind(
            u.formatter
          ))),
        (u.interpolator = new Ke(this.options)),
        (u.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (u.backendConnector = new Be(
          r(this.modules.backend),
          u.resourceStore,
          u,
          this.options
        )),
        u.backendConnector.on('*', function (g) {
          for (
            var p = arguments.length, b = new Array(p > 1 ? p - 1 : 0), m = 1;
            m < p;
            m++
          )
            b[m - 1] = arguments[m];
          e.emit(g, ...b);
        }),
        this.modules.languageDetector &&
          ((u.languageDetector = r(this.modules.languageDetector)),
          u.languageDetector.init &&
            u.languageDetector.init(u, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((u.i18nFormat = r(this.modules.i18nFormat)),
          u.i18nFormat.init && u.i18nFormat.init(this)),
        (this.translator = new W(this.services, this.options)),
        this.translator.on('*', function (g) {
          for (
            var p = arguments.length, b = new Array(p > 1 ? p - 1 : 0), m = 1;
            m < p;
            m++
          )
            b[m - 1] = arguments[m];
          e.emit(g, ...b);
        }),
        this.modules.external.forEach((g) => {
          g.init && g.init(this);
        }));
    }
    if (
      ((this.format = this.options.interpolation.format),
      n || (n = H),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      c.length > 0 && c[0] !== 'dev' && (this.options.lng = c[0]);
    }
    (!this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        'init: no languageDetector is used and no lng is defined'
      ),
      [
        'getResource',
        'hasResourceBundle',
        'getResourceBundle',
        'getDataByLanguage',
      ].forEach((c) => {
        this[c] = function () {
          return e.store[c](...arguments);
        };
      }),
      [
        'addResource',
        'addResources',
        'addResourceBundle',
        'removeResourceBundle',
      ].forEach((c) => {
        this[c] = function () {
          return (e.store[c](...arguments), e);
        };
      }));
    const l = A(),
      f = () => {
        const c = (h, u) => {
          ((this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!'
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            l.resolve(u),
            n(h, u));
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== 'v1' &&
          !this.isInitialized
        )
          return c(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, c);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? f()
        : setTimeout(f, 0),
      l
    );
  }
  loadResources(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : H;
    const s = d(e) ? e : this.language;
    if (
      (typeof e == 'function' && (n = e),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        s &&
        s.toLowerCase() === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return n();
      const r = [],
        a = (o) => {
          if (!o || o === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(o).forEach((f) => {
            f !== 'cimode' && r.indexOf(f) < 0 && r.push(f);
          });
        };
      (s
        ? a(s)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((l) => a(l)),
        this.options.preload && this.options.preload.forEach((o) => a(o)),
        this.services.backendConnector.load(r, this.options.ns, (o) => {
          (!o &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            n(o));
        }));
    } else n(null);
  }
  reloadResources(e, t, n) {
    const s = A();
    return (
      typeof e == 'function' && ((n = e), (e = void 0)),
      typeof t == 'function' && ((n = t), (t = void 0)),
      e || (e = this.languages),
      t || (t = this.options.ns),
      n || (n = H),
      this.services.backendConnector.reload(e, t, (r) => {
        (s.resolve(), n(r));
      }),
      s
    );
  }
  use(e) {
    if (!e)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()'
      );
    if (!e.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()'
      );
    return (
      e.type === 'backend' && (this.modules.backend = e),
      (e.type === 'logger' || (e.log && e.warn && e.error)) &&
        (this.modules.logger = e),
      e.type === 'languageDetector' && (this.modules.languageDetector = e),
      e.type === 'i18nFormat' && (this.modules.i18nFormat = e),
      e.type === 'postProcessor' && be.addPostProcessor(e),
      e.type === 'formatter' && (this.modules.formatter = e),
      e.type === '3rdParty' && this.modules.external.push(e),
      this
    );
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(['cimode', 'dev'].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const n = this.languages[t];
        if (
          !(['cimode', 'dev'].indexOf(n) > -1) &&
          this.store.hasLanguageSomeTranslations(n)
        ) {
          this.resolvedLanguage = n;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var n = this;
    this.isLanguageChangingTo = e;
    const s = A();
    this.emit('languageChanging', e);
    const r = (l) => {
        ((this.language = l),
          (this.languages = this.services.languageUtils.toResolveHierarchy(l)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(l));
      },
      a = (l, f) => {
        (f
          ? (r(f),
            this.translator.changeLanguage(f),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', f),
            this.logger.log('languageChanged', f))
          : (this.isLanguageChangingTo = void 0),
          s.resolve(function () {
            return n.t(...arguments);
          }),
          t &&
            t(l, function () {
              return n.t(...arguments);
            }));
      },
      o = (l) => {
        !e && !l && this.services.languageDetector && (l = []);
        const f = d(l)
          ? l
          : this.services.languageUtils.getBestMatchFromCodes(l);
        (f &&
          (this.language || r(f),
          this.translator.language || this.translator.changeLanguage(f),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(f)),
          this.loadResources(f, (c) => {
            a(c, f);
          }));
      };
    return (
      !e &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? o(this.services.languageDetector.detect())
        : !e &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(o)
            : this.services.languageDetector.detect(o)
          : o(e),
      s
    );
  }
  getFixedT(e, t, n) {
    var s = this;
    const r = function (a, o) {
      let l;
      if (typeof o != 'object') {
        for (
          var f = arguments.length, c = new Array(f > 2 ? f - 2 : 0), h = 2;
          h < f;
          h++
        )
          c[h - 2] = arguments[h];
        l = s.options.overloadTranslationOptionHandler([a, o].concat(c));
      } else l = { ...o };
      ((l.lng = l.lng || r.lng),
        (l.lngs = l.lngs || r.lngs),
        (l.ns = l.ns || r.ns),
        l.keyPrefix !== '' && (l.keyPrefix = l.keyPrefix || n || r.keyPrefix));
      const u = s.options.keySeparator || '.';
      let g;
      return (
        l.keyPrefix && Array.isArray(a)
          ? (g = a.map((p) => `${l.keyPrefix}${u}${p}`))
          : (g = l.keyPrefix ? `${l.keyPrefix}${u}${a}` : a),
        s.t(g, l)
      );
    };
    return (
      d(e) ? (r.lng = e) : (r.lngs = e),
      (r.ns = t),
      (r.keyPrefix = n),
      r
    );
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18next was not initialized',
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages
        ),
        !1
      );
    const n = t.lng || this.resolvedLanguage || this.languages[0],
      s = this.options ? this.options.fallbackLng : !1,
      r = this.languages[this.languages.length - 1];
    if (n.toLowerCase() === 'cimode') return !0;
    const a = (o, l) => {
      const f = this.services.backendConnector.state[`${o}|${l}`];
      return f === -1 || f === 0 || f === 2;
    };
    if (t.precheck) {
      const o = t.precheck(this, a);
      if (o !== void 0) return o;
    }
    return !!(
      this.hasResourceBundle(n, e) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (a(n, e) && (!s || a(r, e)))
    );
  }
  loadNamespaces(e, t) {
    const n = A();
    return this.options.ns
      ? (d(e) && (e = [e]),
        e.forEach((s) => {
          this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
        }),
        this.loadResources((s) => {
          (n.resolve(), t && t(s));
        }),
        n)
      : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const n = A();
    d(e) && (e = [e]);
    const s = this.options.preload || [],
      r = e.filter(
        (a) =>
          s.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a)
      );
    return r.length
      ? ((this.options.preload = s.concat(r)),
        this.loadResources((a) => {
          (n.resolve(), t && t(a));
        }),
        n)
      : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (
      (e ||
        (e =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !e)
    )
      return 'rtl';
    const t = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      n = (this.services && this.services.languageUtils) || new oe(fe());
    return t.indexOf(n.getLanguagePartFromCode(e)) > -1 ||
      e.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : void 0;
    return new V(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : H;
    const n = e.forkResourceStore;
    n && delete e.forkResourceStore;
    const s = { ...this.options, ...e, isClone: !0 },
      r = new V(s);
    return (
      (e.debug !== void 0 || e.prefix !== void 0) &&
        (r.logger = r.logger.clone(e)),
      ['store', 'services', 'language'].forEach((o) => {
        r[o] = this[o];
      }),
      (r.services = { ...this.services }),
      (r.services.utils = { hasLoadedNamespace: r.hasLoadedNamespace.bind(r) }),
      n &&
        ((r.store = new re(this.store.data, s)),
        (r.services.resourceStore = r.store)),
      (r.translator = new W(r.services, s)),
      r.translator.on('*', function (o) {
        for (
          var l = arguments.length, f = new Array(l > 1 ? l - 1 : 0), c = 1;
          c < l;
          c++
        )
          f[c - 1] = arguments[c];
        r.emit(o, ...f);
      }),
      r.init(s, t),
      (r.translator.options = s),
      (r.translator.backendConnector.services.utils = {
        hasLoadedNamespace: r.hasLoadedNamespace.bind(r),
      }),
      r
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const v = V.createInstance();
v.createInstance = V.createInstance;
v.createInstance;
v.dir;
v.init;
v.loadResources;
v.reloadResources;
v.use;
v.changeLanguage;
v.getFixedT;
v.t;
v.exists;
v.setDefaultNamespace;
v.hasLoadedNamespace;
v.loadNamespaces;
v.loadLanguages;
function Qe(i, e) {
  if (!(i instanceof e))
    throw new TypeError('Cannot call a class as a function');
}
function K(i) {
  '@babel/helpers - typeof';
  return (
    (K =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    K(i)
  );
}
function We(i, e) {
  if (K(i) != 'object' || !i) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(i, e);
    if (K(n) != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(i);
}
function Ye(i) {
  var e = We(i, 'string');
  return K(e) == 'symbol' ? e : e + '';
}
function Ge(i, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    ((n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(i, Ye(n.key), n));
  }
}
function Ze(i, e, t) {
  return (
    e && Ge(i.prototype, e),
    Object.defineProperty(i, 'prototype', { writable: !1 }),
    i
  );
}
var xe = [],
  qe = xe.forEach,
  Xe = xe.slice;
function _e(i) {
  return (
    qe.call(Xe.call(arguments, 1), function (e) {
      if (e) for (var t in e) i[t] === void 0 && (i[t] = e[t]);
    }),
    i
  );
}
var he = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  et = function (e, t, n) {
    var s = n || {};
    s.path = s.path || '/';
    var r = encodeURIComponent(t),
      a = ''.concat(e, '=').concat(r);
    if (s.maxAge > 0) {
      var o = s.maxAge - 0;
      if (Number.isNaN(o)) throw new Error('maxAge should be a Number');
      a += '; Max-Age='.concat(Math.floor(o));
    }
    if (s.domain) {
      if (!he.test(s.domain)) throw new TypeError('option domain is invalid');
      a += '; Domain='.concat(s.domain);
    }
    if (s.path) {
      if (!he.test(s.path)) throw new TypeError('option path is invalid');
      a += '; Path='.concat(s.path);
    }
    if (s.expires) {
      if (typeof s.expires.toUTCString != 'function')
        throw new TypeError('option expires is invalid');
      a += '; Expires='.concat(s.expires.toUTCString());
    }
    if (
      (s.httpOnly && (a += '; HttpOnly'),
      s.secure && (a += '; Secure'),
      s.sameSite)
    ) {
      var l =
        typeof s.sameSite == 'string' ? s.sameSite.toLowerCase() : s.sameSite;
      switch (l) {
        case !0:
          a += '; SameSite=Strict';
          break;
        case 'lax':
          a += '; SameSite=Lax';
          break;
        case 'strict':
          a += '; SameSite=Strict';
          break;
        case 'none':
          a += '; SameSite=None';
          break;
        default:
          throw new TypeError('option sameSite is invalid');
      }
    }
    return a;
  },
  ge = {
    create: function (e, t, n, s) {
      var r =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: '/', sameSite: 'strict' };
      (n &&
        ((r.expires = new Date()),
        r.expires.setTime(r.expires.getTime() + n * 60 * 1e3)),
        s && (r.domain = s),
        (document.cookie = et(e, encodeURIComponent(t), r)));
    },
    read: function (e) {
      for (
        var t = ''.concat(e, '='), n = document.cookie.split(';'), s = 0;
        s < n.length;
        s++
      ) {
        for (var r = n[s]; r.charAt(0) === ' '; ) r = r.substring(1, r.length);
        if (r.indexOf(t) === 0) return r.substring(t.length, r.length);
      }
      return null;
    },
    remove: function (e) {
      this.create(e, '', -1);
    },
  },
  tt = {
    name: 'cookie',
    lookup: function (e) {
      var t;
      if (e.lookupCookie && typeof document < 'u') {
        var n = ge.read(e.lookupCookie);
        n && (t = n);
      }
      return t;
    },
    cacheUserLanguage: function (e, t) {
      t.lookupCookie &&
        typeof document < 'u' &&
        ge.create(
          t.lookupCookie,
          e,
          t.cookieMinutes,
          t.cookieDomain,
          t.cookieOptions
        );
    },
  },
  nt = {
    name: 'querystring',
    lookup: function (e) {
      var t;
      if (typeof window < 'u') {
        var n = window.location.search;
        !window.location.search &&
          window.location.hash &&
          window.location.hash.indexOf('?') > -1 &&
          (n = window.location.hash.substring(
            window.location.hash.indexOf('?')
          ));
        for (
          var s = n.substring(1), r = s.split('&'), a = 0;
          a < r.length;
          a++
        ) {
          var o = r[a].indexOf('=');
          if (o > 0) {
            var l = r[a].substring(0, o);
            l === e.lookupQuerystring && (t = r[a].substring(o + 1));
          }
        }
      }
      return t;
    },
  },
  j = null,
  de = function () {
    if (j !== null) return j;
    try {
      j = window !== 'undefined' && window.localStorage !== null;
      var e = 'i18next.translate.boo';
      (window.localStorage.setItem(e, 'foo'),
        window.localStorage.removeItem(e));
    } catch {
      j = !1;
    }
    return j;
  },
  st = {
    name: 'localStorage',
    lookup: function (e) {
      var t;
      if (e.lookupLocalStorage && de()) {
        var n = window.localStorage.getItem(e.lookupLocalStorage);
        n && (t = n);
      }
      return t;
    },
    cacheUserLanguage: function (e, t) {
      t.lookupLocalStorage &&
        de() &&
        window.localStorage.setItem(t.lookupLocalStorage, e);
    },
  },
  T = null,
  pe = function () {
    if (T !== null) return T;
    try {
      T = window !== 'undefined' && window.sessionStorage !== null;
      var e = 'i18next.translate.boo';
      (window.sessionStorage.setItem(e, 'foo'),
        window.sessionStorage.removeItem(e));
    } catch {
      T = !1;
    }
    return T;
  },
  it = {
    name: 'sessionStorage',
    lookup: function (e) {
      var t;
      if (e.lookupSessionStorage && pe()) {
        var n = window.sessionStorage.getItem(e.lookupSessionStorage);
        n && (t = n);
      }
      return t;
    },
    cacheUserLanguage: function (e, t) {
      t.lookupSessionStorage &&
        pe() &&
        window.sessionStorage.setItem(t.lookupSessionStorage, e);
    },
  },
  rt = {
    name: 'navigator',
    lookup: function (e) {
      var t = [];
      if (typeof navigator < 'u') {
        if (navigator.languages)
          for (var n = 0; n < navigator.languages.length; n++)
            t.push(navigator.languages[n]);
        (navigator.userLanguage && t.push(navigator.userLanguage),
          navigator.language && t.push(navigator.language));
      }
      return t.length > 0 ? t : void 0;
    },
  },
  at = {
    name: 'htmlTag',
    lookup: function (e) {
      var t,
        n =
          e.htmlTag ||
          (typeof document < 'u' ? document.documentElement : null);
      return (
        n &&
          typeof n.getAttribute == 'function' &&
          (t = n.getAttribute('lang')),
        t
      );
    },
  },
  ot = {
    name: 'path',
    lookup: function (e) {
      var t;
      if (typeof window < 'u') {
        var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        if (n instanceof Array)
          if (typeof e.lookupFromPathIndex == 'number') {
            if (typeof n[e.lookupFromPathIndex] != 'string') return;
            t = n[e.lookupFromPathIndex].replace('/', '');
          } else t = n[0].replace('/', '');
      }
      return t;
    },
  },
  lt = {
    name: 'subdomain',
    lookup: function (e) {
      var t =
          typeof e.lookupFromSubdomainIndex == 'number'
            ? e.lookupFromSubdomainIndex + 1
            : 1,
        n =
          typeof window < 'u' &&
          window.location &&
          window.location.hostname &&
          window.location.hostname.match(
            /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
          );
      if (n) return n[t];
    },
  },
  ye = !1;
try {
  (document.cookie, (ye = !0));
} catch {}
var Se = [
  'querystring',
  'cookie',
  'localStorage',
  'sessionStorage',
  'navigator',
  'htmlTag',
];
ye || Se.splice(1, 1);
function ut() {
  return {
    order: Se,
    lookupQuerystring: 'lng',
    lookupCookie: 'i18next',
    lookupLocalStorage: 'i18nextLng',
    lookupSessionStorage: 'i18nextLng',
    caches: ['localStorage'],
    excludeCacheFor: ['cimode'],
    convertDetectedLanguage: function (e) {
      return e;
    },
  };
}
var ft = (function () {
  function i(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (Qe(this, i),
      (this.type = 'languageDetector'),
      (this.detectors = {}),
      this.init(e, t));
  }
  return Ze(i, [
    {
      key: 'init',
      value: function (t) {
        var n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          s =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        ((this.services = t || { languageUtils: {} }),
          (this.options = _e(n, this.options || {}, ut())),
          typeof this.options.convertDetectedLanguage == 'string' &&
            this.options.convertDetectedLanguage.indexOf('15897') > -1 &&
            (this.options.convertDetectedLanguage = function (r) {
              return r.replace('-', '_');
            }),
          this.options.lookupFromUrlIndex &&
            (this.options.lookupFromPathIndex =
              this.options.lookupFromUrlIndex),
          (this.i18nOptions = s),
          this.addDetector(tt),
          this.addDetector(nt),
          this.addDetector(st),
          this.addDetector(it),
          this.addDetector(rt),
          this.addDetector(at),
          this.addDetector(ot),
          this.addDetector(lt));
      },
    },
    {
      key: 'addDetector',
      value: function (t) {
        return ((this.detectors[t.name] = t), this);
      },
    },
    {
      key: 'detect',
      value: function (t) {
        var n = this;
        t || (t = this.options.order);
        var s = [];
        return (
          t.forEach(function (r) {
            if (n.detectors[r]) {
              var a = n.detectors[r].lookup(n.options);
              (a && typeof a == 'string' && (a = [a]), a && (s = s.concat(a)));
            }
          }),
          (s = s.map(function (r) {
            return n.options.convertDetectedLanguage(r);
          })),
          this.services.languageUtils.getBestMatchFromCodes
            ? s
            : s.length > 0
              ? s[0]
              : null
        );
      },
    },
    {
      key: 'cacheUserLanguage',
      value: function (t, n) {
        var s = this;
        (n || (n = this.options.caches),
          n &&
            ((this.options.excludeCacheFor &&
              this.options.excludeCacheFor.indexOf(t) > -1) ||
              n.forEach(function (r) {
                s.detectors[r] &&
                  s.detectors[r].cacheUserLanguage(t, s.options);
              })));
      },
    },
  ]);
})();
ft.type = 'languageDetector';
export { ft as B, v as i };
//# sourceMappingURL=i18n-CgThpr1s.js.map
