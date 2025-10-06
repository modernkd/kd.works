var jy =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function Yo(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, 'default')
    ? f.default
    : f;
}
var Qo = { exports: {} },
  Ui = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bg = Symbol.for('react.transitional.element'),
  wg = Symbol.for('react.fragment');
function Uo(f, e, a) {
  var t = null;
  if (
    (a !== void 0 && (t = '' + a),
    e.key !== void 0 && (t = '' + e.key),
    'key' in e)
  ) {
    a = {};
    for (var n in e) n !== 'key' && (a[n] = e[n]);
  } else a = e;
  return (
    (e = a.ref),
    { $$typeof: bg, type: f, key: t, ref: e !== void 0 ? e : null, props: a }
  );
}
Ui.Fragment = wg;
Ui.jsx = Uo;
Ui.jsxs = Uo;
Qo.exports = Ui;
var Cy = Qo.exports,
  Bo = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var s1 = Symbol.for('react.transitional.element'),
  yg = Symbol.for('react.portal'),
  hg = Symbol.for('react.fragment'),
  vg = Symbol.for('react.strict_mode'),
  jg = Symbol.for('react.profiler'),
  Cg = Symbol.for('react.consumer'),
  pg = Symbol.for('react.context'),
  Sg = Symbol.for('react.forward_ref'),
  Ng = Symbol.for('react.suspense'),
  Tg = Symbol.for('react.memo'),
  Go = Symbol.for('react.lazy'),
  Yr = Symbol.iterator;
function Dg(f) {
  return f === null || typeof f != 'object'
    ? null
    : ((f = (Yr && f[Yr]) || f['@@iterator']),
      typeof f == 'function' ? f : null);
}
var Jo = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zo = Object.assign,
  Ho = {};
function At(f, e, a) {
  ((this.props = f),
    (this.context = e),
    (this.refs = Ho),
    (this.updater = a || Jo));
}
At.prototype.isReactComponent = {};
At.prototype.setState = function (f, e) {
  if (typeof f != 'object' && typeof f != 'function' && f != null)
    throw Error(
      'takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, f, e, 'setState');
};
At.prototype.forceUpdate = function (f) {
  this.updater.enqueueForceUpdate(this, f, 'forceUpdate');
};
function _o() {}
_o.prototype = At.prototype;
function g1(f, e, a) {
  ((this.props = f),
    (this.context = e),
    (this.refs = Ho),
    (this.updater = a || Jo));
}
var M1 = (g1.prototype = new _o());
M1.constructor = g1;
Zo(M1, At.prototype);
M1.isPureReactComponent = !0;
var Qr = Array.isArray,
  W = { H: null, A: null, T: null, S: null, V: null },
  Po = Object.prototype.hasOwnProperty;
function L1(f, e, a, t, n, u) {
  return (
    (a = u.ref),
    { $$typeof: s1, type: f, key: e, ref: a !== void 0 ? a : null, props: u }
  );
}
function Eg(f, e) {
  return L1(f.type, e, void 0, void 0, void 0, f.props);
}
function m1(f) {
  return typeof f == 'object' && f !== null && f.$$typeof === s1;
}
function Ig(f) {
  var e = { '=': '=0', ':': '=2' };
  return (
    '$' +
    f.replace(/[=:]/g, function (a) {
      return e[a];
    })
  );
}
var Ur = /\/+/g;
function yl(f, e) {
  return typeof f == 'object' && f !== null && f.key != null
    ? Ig('' + f.key)
    : e.toString(36);
}
function Br() {}
function zg(f) {
  switch (f.status) {
    case 'fulfilled':
      return f.value;
    case 'rejected':
      throw f.reason;
    default:
      switch (
        (typeof f.status == 'string'
          ? f.then(Br, Br)
          : ((f.status = 'pending'),
            f.then(
              function (e) {
                f.status === 'pending' &&
                  ((f.status = 'fulfilled'), (f.value = e));
              },
              function (e) {
                f.status === 'pending' &&
                  ((f.status = 'rejected'), (f.reason = e));
              }
            )),
        f.status)
      ) {
        case 'fulfilled':
          return f.value;
        case 'rejected':
          throw f.reason;
      }
  }
  throw f;
}
function Pa(f, e, a, t, n) {
  var u = typeof f;
  (u === 'undefined' || u === 'boolean') && (f = null);
  var i = !1;
  if (f === null) i = !0;
  else
    switch (u) {
      case 'bigint':
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (f.$$typeof) {
          case s1:
          case yg:
            i = !0;
            break;
          case Go:
            return ((i = f._init), Pa(i(f._payload), e, a, t, n));
        }
    }
  if (i)
    return (
      (n = n(f)),
      (i = t === '' ? '.' + yl(f, 0) : t),
      Qr(n)
        ? ((a = ''),
          i != null && (a = i.replace(Ur, '$&/') + '/'),
          Pa(n, e, a, '', function (c) {
            return c;
          }))
        : n != null &&
          (m1(n) &&
            (n = Eg(
              n,
              a +
                (n.key == null || (f && f.key === n.key)
                  ? ''
                  : ('' + n.key).replace(Ur, '$&/') + '/') +
                i
            )),
          e.push(n)),
      1
    );
  i = 0;
  var l = t === '' ? '.' : t + ':';
  if (Qr(f))
    for (var r = 0; r < f.length; r++)
      ((t = f[r]), (u = l + yl(t, r)), (i += Pa(t, e, a, u, n)));
  else if (((r = Dg(f)), typeof r == 'function'))
    for (f = r.call(f), r = 0; !(t = f.next()).done; )
      ((t = t.value), (u = l + yl(t, r++)), (i += Pa(t, e, a, u, n)));
  else if (u === 'object') {
    if (typeof f.then == 'function') return Pa(zg(f), e, a, t, n);
    throw (
      (e = String(f)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (e === '[object Object]'
            ? 'object with keys {' + Object.keys(f).join(', ') + '}'
            : e) +
          '). If you meant to render a collection of children, use an array instead.'
      )
    );
  }
  return i;
}
function hu(f, e, a) {
  if (f == null) return f;
  var t = [],
    n = 0;
  return (
    Pa(f, t, '', '', function (u) {
      return e.call(a, u, n++);
    }),
    t
  );
}
function Ag(f) {
  if (f._status === -1) {
    var e = f._result;
    ((e = e()),
      e.then(
        function (a) {
          (f._status === 0 || f._status === -1) &&
            ((f._status = 1), (f._result = a));
        },
        function (a) {
          (f._status === 0 || f._status === -1) &&
            ((f._status = 2), (f._result = a));
        }
      ),
      f._status === -1 && ((f._status = 0), (f._result = e)));
  }
  if (f._status === 1) return f._result.default;
  throw f._result;
}
var Gr =
  typeof reportError == 'function'
    ? reportError
    : function (f) {
        if (
          typeof window == 'object' &&
          typeof window.ErrorEvent == 'function'
        ) {
          var e = new window.ErrorEvent('error', {
            bubbles: !0,
            cancelable: !0,
            message:
              typeof f == 'object' && f !== null && typeof f.message == 'string'
                ? String(f.message)
                : String(f),
            error: f,
          });
          if (!window.dispatchEvent(e)) return;
        } else if (
          typeof process == 'object' &&
          typeof process.emit == 'function'
        ) {
          process.emit('uncaughtException', f);
          return;
        }
        console.error(f);
      };
function kg() {}
I.Children = {
  map: hu,
  forEach: function (f, e, a) {
    hu(
      f,
      function () {
        e.apply(this, arguments);
      },
      a
    );
  },
  count: function (f) {
    var e = 0;
    return (
      hu(f, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (f) {
    return (
      hu(f, function (e) {
        return e;
      }) || []
    );
  },
  only: function (f) {
    if (!m1(f))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return f;
  },
};
I.Component = At;
I.Fragment = hg;
I.Profiler = jg;
I.PureComponent = g1;
I.StrictMode = vg;
I.Suspense = Ng;
I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W;
I.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function (f) {
    return W.H.useMemoCache(f);
  },
};
I.cache = function (f) {
  return function () {
    return f.apply(null, arguments);
  };
};
I.cloneElement = function (f, e, a) {
  if (f == null)
    throw Error(
      'The argument must be a React element, but you passed ' + f + '.'
    );
  var t = Zo({}, f.props),
    n = f.key,
    u = void 0;
  if (e != null)
    for (i in (e.ref !== void 0 && (u = void 0),
    e.key !== void 0 && (n = '' + e.key),
    e))
      !Po.call(e, i) ||
        i === 'key' ||
        i === '__self' ||
        i === '__source' ||
        (i === 'ref' && e.ref === void 0) ||
        (t[i] = e[i]);
  var i = arguments.length - 2;
  if (i === 1) t.children = a;
  else if (1 < i) {
    for (var l = Array(i), r = 0; r < i; r++) l[r] = arguments[r + 2];
    t.children = l;
  }
  return L1(f.type, n, void 0, void 0, u, t);
};
I.createContext = function (f) {
  return (
    (f = {
      $$typeof: pg,
      _currentValue: f,
      _currentValue2: f,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (f.Provider = f),
    (f.Consumer = { $$typeof: Cg, _context: f }),
    f
  );
};
I.createElement = function (f, e, a) {
  var t,
    n = {},
    u = null;
  if (e != null)
    for (t in (e.key !== void 0 && (u = '' + e.key), e))
      Po.call(e, t) &&
        t !== 'key' &&
        t !== '__self' &&
        t !== '__source' &&
        (n[t] = e[t]);
  var i = arguments.length - 2;
  if (i === 1) n.children = a;
  else if (1 < i) {
    for (var l = Array(i), r = 0; r < i; r++) l[r] = arguments[r + 2];
    n.children = l;
  }
  if (f && f.defaultProps)
    for (t in ((i = f.defaultProps), i)) n[t] === void 0 && (n[t] = i[t]);
  return L1(f, u, void 0, void 0, null, n);
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (f) {
  return { $$typeof: Sg, render: f };
};
I.isValidElement = m1;
I.lazy = function (f) {
  return { $$typeof: Go, _payload: { _status: -1, _result: f }, _init: Ag };
};
I.memo = function (f, e) {
  return { $$typeof: Tg, type: f, compare: e === void 0 ? null : e };
};
I.startTransition = function (f) {
  var e = W.T,
    a = {};
  W.T = a;
  try {
    var t = f(),
      n = W.S;
    (n !== null && n(a, t),
      typeof t == 'object' &&
        t !== null &&
        typeof t.then == 'function' &&
        t.then(kg, Gr));
  } catch (u) {
    Gr(u);
  } finally {
    W.T = e;
  }
};
I.unstable_useCacheRefresh = function () {
  return W.H.useCacheRefresh();
};
I.use = function (f) {
  return W.H.use(f);
};
I.useActionState = function (f, e, a) {
  return W.H.useActionState(f, e, a);
};
I.useCallback = function (f, e) {
  return W.H.useCallback(f, e);
};
I.useContext = function (f) {
  return W.H.useContext(f);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (f, e) {
  return W.H.useDeferredValue(f, e);
};
I.useEffect = function (f, e, a) {
  var t = W.H;
  if (typeof a == 'function')
    throw Error(
      'useEffect CRUD overload is not enabled in this build of React.'
    );
  return t.useEffect(f, e);
};
I.useId = function () {
  return W.H.useId();
};
I.useImperativeHandle = function (f, e, a) {
  return W.H.useImperativeHandle(f, e, a);
};
I.useInsertionEffect = function (f, e) {
  return W.H.useInsertionEffect(f, e);
};
I.useLayoutEffect = function (f, e) {
  return W.H.useLayoutEffect(f, e);
};
I.useMemo = function (f, e) {
  return W.H.useMemo(f, e);
};
I.useOptimistic = function (f, e) {
  return W.H.useOptimistic(f, e);
};
I.useReducer = function (f, e, a) {
  return W.H.useReducer(f, e, a);
};
I.useRef = function (f) {
  return W.H.useRef(f);
};
I.useState = function (f) {
  return W.H.useState(f);
};
I.useSyncExternalStore = function (f, e, a) {
  return W.H.useSyncExternalStore(f, e, a);
};
I.useTransition = function () {
  return W.H.useTransition();
};
I.version = '19.1.0';
Bo.exports = I;
var o = Bo.exports;
const ln = Yo(o);
var Vo = { exports: {} },
  Bi = {},
  Xo = { exports: {} },
  Ko = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (f) {
  function e(N, R) {
    var A = N.length;
    N.push(R);
    f: for (; 0 < A; ) {
      var lf = (A - 1) >>> 1,
        mf = N[lf];
      if (0 < n(mf, R)) ((N[lf] = R), (N[A] = mf), (A = lf));
      else break f;
    }
  }
  function a(N) {
    return N.length === 0 ? null : N[0];
  }
  function t(N) {
    if (N.length === 0) return null;
    var R = N[0],
      A = N.pop();
    if (A !== R) {
      N[0] = A;
      f: for (var lf = 0, mf = N.length, bu = mf >>> 1; lf < bu; ) {
        var wu = 2 * (lf + 1) - 1,
          wl = N[wu],
          wa = wu + 1,
          yu = N[wa];
        if (0 > n(wl, A))
          wa < mf && 0 > n(yu, wl)
            ? ((N[lf] = yu), (N[wa] = A), (lf = wa))
            : ((N[lf] = wl), (N[wu] = A), (lf = wu));
        else if (wa < mf && 0 > n(yu, A))
          ((N[lf] = yu), (N[wa] = A), (lf = wa));
        else break f;
      }
    }
    return R;
  }
  function n(N, R) {
    var A = N.sortIndex - R.sortIndex;
    return A !== 0 ? A : N.id - R.id;
  }
  if (
    ((f.unstable_now = void 0),
    typeof performance == 'object' && typeof performance.now == 'function')
  ) {
    var u = performance;
    f.unstable_now = function () {
      return u.now();
    };
  } else {
    var i = Date,
      l = i.now();
    f.unstable_now = function () {
      return i.now() - l;
    };
  }
  var r = [],
    c = [],
    d = 1,
    M = null,
    s = 3,
    b = !1,
    y = !1,
    h = !1,
    v = !1,
    L = typeof setTimeout == 'function' ? setTimeout : null,
    g = typeof clearTimeout == 'function' ? clearTimeout : null,
    m = typeof setImmediate < 'u' ? setImmediate : null;
  function w(N) {
    for (var R = a(c); R !== null; ) {
      if (R.callback === null) t(c);
      else if (R.startTime <= N)
        (t(c), (R.sortIndex = R.expirationTime), e(r, R));
      else break;
      R = a(c);
    }
  }
  function C(N) {
    if (((h = !1), w(N), !y))
      if (a(r) !== null) ((y = !0), S || ((S = !0), Ge()));
      else {
        var R = a(c);
        R !== null && bl(C, R.startTime - N);
      }
  }
  var S = !1,
    p = -1,
    T = 5,
    B = -1;
  function E() {
    return v ? !0 : !(f.unstable_now() - B < T);
  }
  function Tf() {
    if (((v = !1), S)) {
      var N = f.unstable_now();
      B = N;
      var R = !0;
      try {
        f: {
          ((y = !1), h && ((h = !1), g(p), (p = -1)), (b = !0));
          var A = s;
          try {
            e: {
              for (
                w(N), M = a(r);
                M !== null && !(M.expirationTime > N && E());

              ) {
                var lf = M.callback;
                if (typeof lf == 'function') {
                  ((M.callback = null), (s = M.priorityLevel));
                  var mf = lf(M.expirationTime <= N);
                  if (((N = f.unstable_now()), typeof mf == 'function')) {
                    ((M.callback = mf), w(N), (R = !0));
                    break e;
                  }
                  (M === a(r) && t(r), w(N));
                } else t(r);
                M = a(r);
              }
              if (M !== null) R = !0;
              else {
                var bu = a(c);
                (bu !== null && bl(C, bu.startTime - N), (R = !1));
              }
            }
            break f;
          } finally {
            ((M = null), (s = A), (b = !1));
          }
          R = void 0;
        }
      } finally {
        R ? Ge() : (S = !1);
      }
    }
  }
  var Ge;
  if (typeof m == 'function')
    Ge = function () {
      m(Tf);
    };
  else if (typeof MessageChannel < 'u') {
    var Or = new MessageChannel(),
      mg = Or.port2;
    ((Or.port1.onmessage = Tf),
      (Ge = function () {
        mg.postMessage(null);
      }));
  } else
    Ge = function () {
      L(Tf, 0);
    };
  function bl(N, R) {
    p = L(function () {
      N(f.unstable_now());
    }, R);
  }
  ((f.unstable_IdlePriority = 5),
    (f.unstable_ImmediatePriority = 1),
    (f.unstable_LowPriority = 4),
    (f.unstable_NormalPriority = 3),
    (f.unstable_Profiling = null),
    (f.unstable_UserBlockingPriority = 2),
    (f.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (f.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (T = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (f.unstable_getCurrentPriorityLevel = function () {
      return s;
    }),
    (f.unstable_next = function (N) {
      switch (s) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = s;
      }
      var A = s;
      s = R;
      try {
        return N();
      } finally {
        s = A;
      }
    }),
    (f.unstable_requestPaint = function () {
      v = !0;
    }),
    (f.unstable_runWithPriority = function (N, R) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var A = s;
      s = N;
      try {
        return R();
      } finally {
        s = A;
      }
    }),
    (f.unstable_scheduleCallback = function (N, R, A) {
      var lf = f.unstable_now();
      switch (
        (typeof A == 'object' && A !== null
          ? ((A = A.delay), (A = typeof A == 'number' && 0 < A ? lf + A : lf))
          : (A = lf),
        N)
      ) {
        case 1:
          var mf = -1;
          break;
        case 2:
          mf = 250;
          break;
        case 5:
          mf = 1073741823;
          break;
        case 4:
          mf = 1e4;
          break;
        default:
          mf = 5e3;
      }
      return (
        (mf = A + mf),
        (N = {
          id: d++,
          callback: R,
          priorityLevel: N,
          startTime: A,
          expirationTime: mf,
          sortIndex: -1,
        }),
        A > lf
          ? ((N.sortIndex = A),
            e(c, N),
            a(r) === null &&
              N === a(c) &&
              (h ? (g(p), (p = -1)) : (h = !0), bl(C, A - lf)))
          : ((N.sortIndex = mf),
            e(r, N),
            y || b || ((y = !0), S || ((S = !0), Ge()))),
        N
      );
    }),
    (f.unstable_shouldYield = E),
    (f.unstable_wrapCallback = function (N) {
      var R = s;
      return function () {
        var A = s;
        s = R;
        try {
          return N.apply(this, arguments);
        } finally {
          s = A;
        }
      };
    }));
})(Ko);
Xo.exports = Ko;
var xg = Xo.exports,
  qo = { exports: {} },
  zf = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rg = o;
function Wo(f) {
  var e = 'https://react.dev/errors/' + f;
  if (1 < arguments.length) {
    e += '?args[]=' + encodeURIComponent(arguments[1]);
    for (var a = 2; a < arguments.length; a++)
      e += '&args[]=' + encodeURIComponent(arguments[a]);
  }
  return (
    'Minified React error #' +
    f +
    '; visit ' +
    e +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
function Je() {}
var Ef = {
    d: {
      f: Je,
      r: function () {
        throw Error(Wo(522));
      },
      D: Je,
      C: Je,
      L: Je,
      m: Je,
      X: Je,
      S: Je,
      M: Je,
    },
    p: 0,
    findDOMNode: null,
  },
  Og = Symbol.for('react.portal');
function Yg(f, e, a) {
  var t = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Og,
    key: t == null ? null : '' + t,
    children: f,
    containerInfo: e,
    implementation: a,
  };
}
var rn = Rg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function Gi(f, e) {
  if (f === 'font') return '';
  if (typeof e == 'string') return e === 'use-credentials' ? e : '';
}
zf.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Ef;
zf.createPortal = function (f, e) {
  var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
    throw Error(Wo(299));
  return Yg(f, e, null, a);
};
zf.flushSync = function (f) {
  var e = rn.T,
    a = Ef.p;
  try {
    if (((rn.T = null), (Ef.p = 2), f)) return f();
  } finally {
    ((rn.T = e), (Ef.p = a), Ef.d.f());
  }
};
zf.preconnect = function (f, e) {
  typeof f == 'string' &&
    (e
      ? ((e = e.crossOrigin),
        (e =
          typeof e == 'string' ? (e === 'use-credentials' ? e : '') : void 0))
      : (e = null),
    Ef.d.C(f, e));
};
zf.prefetchDNS = function (f) {
  typeof f == 'string' && Ef.d.D(f);
};
zf.preinit = function (f, e) {
  if (typeof f == 'string' && e && typeof e.as == 'string') {
    var a = e.as,
      t = Gi(a, e.crossOrigin),
      n = typeof e.integrity == 'string' ? e.integrity : void 0,
      u = typeof e.fetchPriority == 'string' ? e.fetchPriority : void 0;
    a === 'style'
      ? Ef.d.S(f, typeof e.precedence == 'string' ? e.precedence : void 0, {
          crossOrigin: t,
          integrity: n,
          fetchPriority: u,
        })
      : a === 'script' &&
        Ef.d.X(f, {
          crossOrigin: t,
          integrity: n,
          fetchPriority: u,
          nonce: typeof e.nonce == 'string' ? e.nonce : void 0,
        });
  }
};
zf.preinitModule = function (f, e) {
  if (typeof f == 'string')
    if (typeof e == 'object' && e !== null) {
      if (e.as == null || e.as === 'script') {
        var a = Gi(e.as, e.crossOrigin);
        Ef.d.M(f, {
          crossOrigin: a,
          integrity: typeof e.integrity == 'string' ? e.integrity : void 0,
          nonce: typeof e.nonce == 'string' ? e.nonce : void 0,
        });
      }
    } else e == null && Ef.d.M(f);
};
zf.preload = function (f, e) {
  if (
    typeof f == 'string' &&
    typeof e == 'object' &&
    e !== null &&
    typeof e.as == 'string'
  ) {
    var a = e.as,
      t = Gi(a, e.crossOrigin);
    Ef.d.L(f, a, {
      crossOrigin: t,
      integrity: typeof e.integrity == 'string' ? e.integrity : void 0,
      nonce: typeof e.nonce == 'string' ? e.nonce : void 0,
      type: typeof e.type == 'string' ? e.type : void 0,
      fetchPriority:
        typeof e.fetchPriority == 'string' ? e.fetchPriority : void 0,
      referrerPolicy:
        typeof e.referrerPolicy == 'string' ? e.referrerPolicy : void 0,
      imageSrcSet: typeof e.imageSrcSet == 'string' ? e.imageSrcSet : void 0,
      imageSizes: typeof e.imageSizes == 'string' ? e.imageSizes : void 0,
      media: typeof e.media == 'string' ? e.media : void 0,
    });
  }
};
zf.preloadModule = function (f, e) {
  if (typeof f == 'string')
    if (e) {
      var a = Gi(e.as, e.crossOrigin);
      Ef.d.m(f, {
        as: typeof e.as == 'string' && e.as !== 'script' ? e.as : void 0,
        crossOrigin: a,
        integrity: typeof e.integrity == 'string' ? e.integrity : void 0,
      });
    } else Ef.d.m(f);
};
zf.requestFormReset = function (f) {
  Ef.d.r(f);
};
zf.unstable_batchedUpdates = function (f, e) {
  return f(e);
};
zf.useFormState = function (f, e, a) {
  return rn.H.useFormState(f, e, a);
};
zf.useFormStatus = function () {
  return rn.H.useHostTransitionStatus();
};
zf.version = '19.1.0';
function Fo() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fo);
    } catch (f) {
      console.error(f);
    }
}
(Fo(), (qo.exports = zf));
var Qg = qo.exports;
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lf = xg,
  $o = o,
  Ug = Qg;
function j(f) {
  var e = 'https://react.dev/errors/' + f;
  if (1 < arguments.length) {
    e += '?args[]=' + encodeURIComponent(arguments[1]);
    for (var a = 2; a < arguments.length; a++)
      e += '&args[]=' + encodeURIComponent(arguments[a]);
  }
  return (
    'Minified React error #' +
    f +
    '; visit ' +
    e +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
function fd(f) {
  return !(!f || (f.nodeType !== 1 && f.nodeType !== 9 && f.nodeType !== 11));
}
function Vn(f) {
  var e = f,
    a = f;
  if (f.alternate) for (; e.return; ) e = e.return;
  else {
    f = e;
    do ((e = f), e.flags & 4098 && (a = e.return), (f = e.return));
    while (f);
  }
  return e.tag === 3 ? a : null;
}
function ed(f) {
  if (f.tag === 13) {
    var e = f.memoizedState;
    if (
      (e === null && ((f = f.alternate), f !== null && (e = f.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function Jr(f) {
  if (Vn(f) !== f) throw Error(j(188));
}
function Bg(f) {
  var e = f.alternate;
  if (!e) {
    if (((e = Vn(f)), e === null)) throw Error(j(188));
    return e !== f ? null : f;
  }
  for (var a = f, t = e; ; ) {
    var n = a.return;
    if (n === null) break;
    var u = n.alternate;
    if (u === null) {
      if (((t = n.return), t !== null)) {
        a = t;
        continue;
      }
      break;
    }
    if (n.child === u.child) {
      for (u = n.child; u; ) {
        if (u === a) return (Jr(n), f);
        if (u === t) return (Jr(n), e);
        u = u.sibling;
      }
      throw Error(j(188));
    }
    if (a.return !== t.return) ((a = n), (t = u));
    else {
      for (var i = !1, l = n.child; l; ) {
        if (l === a) {
          ((i = !0), (a = n), (t = u));
          break;
        }
        if (l === t) {
          ((i = !0), (t = n), (a = u));
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = u.child; l; ) {
          if (l === a) {
            ((i = !0), (a = u), (t = n));
            break;
          }
          if (l === t) {
            ((i = !0), (t = u), (a = n));
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(j(189));
      }
    }
    if (a.alternate !== t) throw Error(j(190));
  }
  if (a.tag !== 3) throw Error(j(188));
  return a.stateNode.current === a ? f : e;
}
function ad(f) {
  var e = f.tag;
  if (e === 5 || e === 26 || e === 27 || e === 6) return f;
  for (f = f.child; f !== null; ) {
    if (((e = ad(f)), e !== null)) return e;
    f = f.sibling;
  }
  return null;
}
var K = Object.assign,
  Gg = Symbol.for('react.element'),
  vu = Symbol.for('react.transitional.element'),
  en = Symbol.for('react.portal'),
  qa = Symbol.for('react.fragment'),
  td = Symbol.for('react.strict_mode'),
  l0 = Symbol.for('react.profiler'),
  Jg = Symbol.for('react.provider'),
  nd = Symbol.for('react.consumer'),
  Te = Symbol.for('react.context'),
  b1 = Symbol.for('react.forward_ref'),
  r0 = Symbol.for('react.suspense'),
  c0 = Symbol.for('react.suspense_list'),
  w1 = Symbol.for('react.memo'),
  _e = Symbol.for('react.lazy'),
  o0 = Symbol.for('react.activity'),
  Zg = Symbol.for('react.memo_cache_sentinel'),
  Zr = Symbol.iterator;
function Ht(f) {
  return f === null || typeof f != 'object'
    ? null
    : ((f = (Zr && f[Zr]) || f['@@iterator']),
      typeof f == 'function' ? f : null);
}
var Hg = Symbol.for('react.client.reference');
function d0(f) {
  if (f == null) return null;
  if (typeof f == 'function')
    return f.$$typeof === Hg ? null : f.displayName || f.name || null;
  if (typeof f == 'string') return f;
  switch (f) {
    case qa:
      return 'Fragment';
    case l0:
      return 'Profiler';
    case td:
      return 'StrictMode';
    case r0:
      return 'Suspense';
    case c0:
      return 'SuspenseList';
    case o0:
      return 'Activity';
  }
  if (typeof f == 'object')
    switch (f.$$typeof) {
      case en:
        return 'Portal';
      case Te:
        return (f.displayName || 'Context') + '.Provider';
      case nd:
        return (f._context.displayName || 'Context') + '.Consumer';
      case b1:
        var e = f.render;
        return (
          (f = f.displayName),
          f ||
            ((f = e.displayName || e.name || ''),
            (f = f !== '' ? 'ForwardRef(' + f + ')' : 'ForwardRef')),
          f
        );
      case w1:
        return (
          (e = f.displayName || null),
          e !== null ? e : d0(f.type) || 'Memo'
        );
      case _e:
        ((e = f._payload), (f = f._init));
        try {
          return d0(f(e));
        } catch {}
    }
  return null;
}
var an = Array.isArray,
  D = $o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  J = Ug.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  Ca = { pending: !1, data: null, method: null, action: null },
  s0 = [],
  Wa = -1;
function he(f) {
  return { current: f };
}
function hf(f) {
  0 > Wa || ((f.current = s0[Wa]), (s0[Wa] = null), Wa--);
}
function F(f, e) {
  (Wa++, (s0[Wa] = f.current), (f.current = e));
}
var me = he(null),
  Sn = he(null),
  ea = he(null),
  ti = he(null);
function ni(f, e) {
  switch ((F(ea, e), F(Sn, f), F(me, null), e.nodeType)) {
    case 9:
    case 11:
      f = (f = e.documentElement) && (f = f.namespaceURI) ? Xc(f) : 0;
      break;
    default:
      if (((f = e.tagName), (e = e.namespaceURI)))
        ((e = Xc(e)), (f = v2(e, f)));
      else
        switch (f) {
          case 'svg':
            f = 1;
            break;
          case 'math':
            f = 2;
            break;
          default:
            f = 0;
        }
  }
  (hf(me), F(me, f));
}
function wt() {
  (hf(me), hf(Sn), hf(ea));
}
function g0(f) {
  f.memoizedState !== null && F(ti, f);
  var e = me.current,
    a = v2(e, f.type);
  e !== a && (F(Sn, f), F(me, a));
}
function ui(f) {
  (Sn.current === f && (hf(me), hf(Sn)),
    ti.current === f && (hf(ti), (Rn._currentValue = Ca)));
}
var M0 = Object.prototype.hasOwnProperty,
  y1 = Lf.unstable_scheduleCallback,
  hl = Lf.unstable_cancelCallback,
  _g = Lf.unstable_shouldYield,
  Pg = Lf.unstable_requestPaint,
  be = Lf.unstable_now,
  Vg = Lf.unstable_getCurrentPriorityLevel,
  ud = Lf.unstable_ImmediatePriority,
  id = Lf.unstable_UserBlockingPriority,
  ii = Lf.unstable_NormalPriority,
  Xg = Lf.unstable_LowPriority,
  ld = Lf.unstable_IdlePriority,
  Kg = Lf.log,
  qg = Lf.unstable_setDisableYieldValue,
  Xn = null,
  Jf = null;
function We(f) {
  if (
    (typeof Kg == 'function' && qg(f),
    Jf && typeof Jf.setStrictMode == 'function')
  )
    try {
      Jf.setStrictMode(Xn, f);
    } catch {}
}
var Zf = Math.clz32 ? Math.clz32 : $g,
  Wg = Math.log,
  Fg = Math.LN2;
function $g(f) {
  return ((f >>>= 0), f === 0 ? 32 : (31 - ((Wg(f) / Fg) | 0)) | 0);
}
var ju = 256,
  Cu = 4194304;
function ha(f) {
  var e = f & 42;
  if (e !== 0) return e;
  switch (f & -f) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
      return 64;
    case 128:
      return 128;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return f & 4194048;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return f & 62914560;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return f;
  }
}
function Ji(f, e, a) {
  var t = f.pendingLanes;
  if (t === 0) return 0;
  var n = 0,
    u = f.suspendedLanes,
    i = f.pingedLanes;
  f = f.warmLanes;
  var l = t & 134217727;
  return (
    l !== 0
      ? ((t = l & ~u),
        t !== 0
          ? (n = ha(t))
          : ((i &= l),
            i !== 0
              ? (n = ha(i))
              : a || ((a = l & ~f), a !== 0 && (n = ha(a)))))
      : ((l = t & ~u),
        l !== 0
          ? (n = ha(l))
          : i !== 0
            ? (n = ha(i))
            : a || ((a = t & ~f), a !== 0 && (n = ha(a)))),
    n === 0
      ? 0
      : e !== 0 &&
          e !== n &&
          !(e & u) &&
          ((u = n & -n),
          (a = e & -e),
          u >= a || (u === 32 && (a & 4194048) !== 0))
        ? e
        : n
  );
}
function Kn(f, e) {
  return (f.pendingLanes & ~(f.suspendedLanes & ~f.pingedLanes) & e) === 0;
}
function f3(f, e) {
  switch (f) {
    case 1:
    case 2:
    case 4:
    case 8:
    case 64:
      return e + 250;
    case 16:
    case 32:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function rd() {
  var f = ju;
  return ((ju <<= 1), !(ju & 4194048) && (ju = 256), f);
}
function cd() {
  var f = Cu;
  return ((Cu <<= 1), !(Cu & 62914560) && (Cu = 4194304), f);
}
function vl(f) {
  for (var e = [], a = 0; 31 > a; a++) e.push(f);
  return e;
}
function qn(f, e) {
  ((f.pendingLanes |= e),
    e !== 268435456 &&
      ((f.suspendedLanes = 0), (f.pingedLanes = 0), (f.warmLanes = 0)));
}
function e3(f, e, a, t, n, u) {
  var i = f.pendingLanes;
  ((f.pendingLanes = a),
    (f.suspendedLanes = 0),
    (f.pingedLanes = 0),
    (f.warmLanes = 0),
    (f.expiredLanes &= a),
    (f.entangledLanes &= a),
    (f.errorRecoveryDisabledLanes &= a),
    (f.shellSuspendCounter = 0));
  var l = f.entanglements,
    r = f.expirationTimes,
    c = f.hiddenUpdates;
  for (a = i & ~a; 0 < a; ) {
    var d = 31 - Zf(a),
      M = 1 << d;
    ((l[d] = 0), (r[d] = -1));
    var s = c[d];
    if (s !== null)
      for (c[d] = null, d = 0; d < s.length; d++) {
        var b = s[d];
        b !== null && (b.lane &= -536870913);
      }
    a &= ~M;
  }
  (t !== 0 && od(f, t, 0),
    u !== 0 && n === 0 && f.tag !== 0 && (f.suspendedLanes |= u & ~(i & ~e)));
}
function od(f, e, a) {
  ((f.pendingLanes |= e), (f.suspendedLanes &= ~e));
  var t = 31 - Zf(e);
  ((f.entangledLanes |= e),
    (f.entanglements[t] = f.entanglements[t] | 1073741824 | (a & 4194090)));
}
function dd(f, e) {
  var a = (f.entangledLanes |= e);
  for (f = f.entanglements; a; ) {
    var t = 31 - Zf(a),
      n = 1 << t;
    ((n & e) | (f[t] & e) && (f[t] |= e), (a &= ~n));
  }
}
function h1(f) {
  switch (f) {
    case 2:
      f = 1;
      break;
    case 8:
      f = 4;
      break;
    case 32:
      f = 16;
      break;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      f = 128;
      break;
    case 268435456:
      f = 134217728;
      break;
    default:
      f = 0;
  }
  return f;
}
function v1(f) {
  return (
    (f &= -f),
    2 < f ? (8 < f ? (f & 134217727 ? 32 : 268435456) : 8) : 2
  );
}
function sd() {
  var f = J.p;
  return f !== 0 ? f : ((f = window.event), f === void 0 ? 32 : z2(f.type));
}
function a3(f, e) {
  var a = J.p;
  try {
    return ((J.p = f), e());
  } finally {
    J.p = a;
  }
}
var ga = Math.random().toString(36).slice(2),
  pf = '__reactFiber$' + ga,
  Rf = '__reactProps$' + ga,
  kt = '__reactContainer$' + ga,
  L0 = '__reactEvents$' + ga,
  t3 = '__reactListeners$' + ga,
  n3 = '__reactHandles$' + ga,
  Hr = '__reactResources$' + ga,
  Wn = '__reactMarker$' + ga;
function j1(f) {
  (delete f[pf], delete f[Rf], delete f[L0], delete f[t3], delete f[n3]);
}
function Fa(f) {
  var e = f[pf];
  if (e) return e;
  for (var a = f.parentNode; a; ) {
    if ((e = a[kt] || a[pf])) {
      if (
        ((a = e.alternate),
        e.child !== null || (a !== null && a.child !== null))
      )
        for (f = Wc(f); f !== null; ) {
          if ((a = f[pf])) return a;
          f = Wc(f);
        }
      return e;
    }
    ((f = a), (a = f.parentNode));
  }
  return null;
}
function xt(f) {
  if ((f = f[pf] || f[kt])) {
    var e = f.tag;
    if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3)
      return f;
  }
  return null;
}
function tn(f) {
  var e = f.tag;
  if (e === 5 || e === 26 || e === 27 || e === 6) return f.stateNode;
  throw Error(j(33));
}
function rt(f) {
  var e = f[Hr];
  return (
    e ||
      (e = f[Hr] = { hoistableStyles: new Map(), hoistableScripts: new Map() }),
    e
  );
}
function wf(f) {
  f[Wn] = !0;
}
var gd = new Set(),
  Md = {};
function xa(f, e) {
  (yt(f, e), yt(f + 'Capture', e));
}
function yt(f, e) {
  for (Md[f] = e, f = 0; f < e.length; f++) gd.add(e[f]);
}
var u3 = RegExp(
    '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
  ),
  _r = {},
  Pr = {};
function i3(f) {
  return M0.call(Pr, f)
    ? !0
    : M0.call(_r, f)
      ? !1
      : u3.test(f)
        ? (Pr[f] = !0)
        : ((_r[f] = !0), !1);
}
function Uu(f, e, a) {
  if (i3(e))
    if (a === null) f.removeAttribute(e);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
          f.removeAttribute(e);
          return;
        case 'boolean':
          var t = e.toLowerCase().slice(0, 5);
          if (t !== 'data-' && t !== 'aria-') {
            f.removeAttribute(e);
            return;
          }
      }
      f.setAttribute(e, '' + a);
    }
}
function pu(f, e, a) {
  if (a === null) f.removeAttribute(e);
  else {
    switch (typeof a) {
      case 'undefined':
      case 'function':
      case 'symbol':
      case 'boolean':
        f.removeAttribute(e);
        return;
    }
    f.setAttribute(e, '' + a);
  }
}
function Ce(f, e, a, t) {
  if (t === null) f.removeAttribute(a);
  else {
    switch (typeof t) {
      case 'undefined':
      case 'function':
      case 'symbol':
      case 'boolean':
        f.removeAttribute(a);
        return;
    }
    f.setAttributeNS(e, a, '' + t);
  }
}
var jl, Vr;
function Va(f) {
  if (jl === void 0)
    try {
      throw Error();
    } catch (a) {
      var e = a.stack.trim().match(/\n( *(at )?)/);
      ((jl = (e && e[1]) || ''),
        (Vr =
          -1 <
          a.stack.indexOf(`
    at`)
            ? ' (<anonymous>)'
            : -1 < a.stack.indexOf('@')
              ? '@unknown:0:0'
              : ''));
    }
  return (
    `
` +
    jl +
    f +
    Vr
  );
}
var Cl = !1;
function pl(f, e) {
  if (!f || Cl) return '';
  Cl = !0;
  var a = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var t = {
      DetermineComponentFrameRoot: function () {
        try {
          if (e) {
            var M = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(M.prototype, 'props', {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect == 'object' && Reflect.construct)
            ) {
              try {
                Reflect.construct(M, []);
              } catch (b) {
                var s = b;
              }
              Reflect.construct(f, [], M);
            } else {
              try {
                M.call();
              } catch (b) {
                s = b;
              }
              f.call(M.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (b) {
              s = b;
            }
            (M = f()) &&
              typeof M.catch == 'function' &&
              M.catch(function () {});
          }
        } catch (b) {
          if (b && s && typeof b.stack == 'string') return [b.stack, s.stack];
        }
        return [null, null];
      },
    };
    t.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
    var n = Object.getOwnPropertyDescriptor(
      t.DetermineComponentFrameRoot,
      'name'
    );
    n &&
      n.configurable &&
      Object.defineProperty(t.DetermineComponentFrameRoot, 'name', {
        value: 'DetermineComponentFrameRoot',
      });
    var u = t.DetermineComponentFrameRoot(),
      i = u[0],
      l = u[1];
    if (i && l) {
      var r = i.split(`
`),
        c = l.split(`
`);
      for (
        n = t = 0;
        t < r.length && !r[t].includes('DetermineComponentFrameRoot');

      )
        t++;
      for (; n < c.length && !c[n].includes('DetermineComponentFrameRoot'); )
        n++;
      if (t === r.length || n === c.length)
        for (
          t = r.length - 1, n = c.length - 1;
          1 <= t && 0 <= n && r[t] !== c[n];

        )
          n--;
      for (; 1 <= t && 0 <= n; t--, n--)
        if (r[t] !== c[n]) {
          if (t !== 1 || n !== 1)
            do
              if ((t--, n--, 0 > n || r[t] !== c[n])) {
                var d =
                  `
` + r[t].replace(' at new ', ' at ');
                return (
                  f.displayName &&
                    d.includes('<anonymous>') &&
                    (d = d.replace('<anonymous>', f.displayName)),
                  d
                );
              }
            while (1 <= t && 0 <= n);
          break;
        }
    }
  } finally {
    ((Cl = !1), (Error.prepareStackTrace = a));
  }
  return (a = f ? f.displayName || f.name : '') ? Va(a) : '';
}
function l3(f) {
  switch (f.tag) {
    case 26:
    case 27:
    case 5:
      return Va(f.type);
    case 16:
      return Va('Lazy');
    case 13:
      return Va('Suspense');
    case 19:
      return Va('SuspenseList');
    case 0:
    case 15:
      return pl(f.type, !1);
    case 11:
      return pl(f.type.render, !1);
    case 1:
      return pl(f.type, !0);
    case 31:
      return Va('Activity');
    default:
      return '';
  }
}
function Xr(f) {
  try {
    var e = '';
    do ((e += l3(f)), (f = f.return));
    while (f);
    return e;
  } catch (a) {
    return (
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack
    );
  }
}
function qf(f) {
  switch (typeof f) {
    case 'bigint':
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return f;
    case 'object':
      return f;
    default:
      return '';
  }
}
function Ld(f) {
  var e = f.type;
  return (
    (f = f.nodeName) &&
    f.toLowerCase() === 'input' &&
    (e === 'checkbox' || e === 'radio')
  );
}
function r3(f) {
  var e = Ld(f) ? 'checked' : 'value',
    a = Object.getOwnPropertyDescriptor(f.constructor.prototype, e),
    t = '' + f[e];
  if (
    !f.hasOwnProperty(e) &&
    typeof a < 'u' &&
    typeof a.get == 'function' &&
    typeof a.set == 'function'
  ) {
    var n = a.get,
      u = a.set;
    return (
      Object.defineProperty(f, e, {
        configurable: !0,
        get: function () {
          return n.call(this);
        },
        set: function (i) {
          ((t = '' + i), u.call(this, i));
        },
      }),
      Object.defineProperty(f, e, { enumerable: a.enumerable }),
      {
        getValue: function () {
          return t;
        },
        setValue: function (i) {
          t = '' + i;
        },
        stopTracking: function () {
          ((f._valueTracker = null), delete f[e]);
        },
      }
    );
  }
}
function li(f) {
  f._valueTracker || (f._valueTracker = r3(f));
}
function md(f) {
  if (!f) return !1;
  var e = f._valueTracker;
  if (!e) return !0;
  var a = e.getValue(),
    t = '';
  return (
    f && (t = Ld(f) ? (f.checked ? 'true' : 'false') : f.value),
    (f = t),
    f !== a ? (e.setValue(f), !0) : !1
  );
}
function ri(f) {
  if (((f = f || (typeof document < 'u' ? document : void 0)), typeof f > 'u'))
    return null;
  try {
    return f.activeElement || f.body;
  } catch {
    return f.body;
  }
}
var c3 = /[\n"\\]/g;
function $f(f) {
  return f.replace(c3, function (e) {
    return '\\' + e.charCodeAt(0).toString(16) + ' ';
  });
}
function m0(f, e, a, t, n, u, i, l) {
  ((f.name = ''),
    i != null &&
    typeof i != 'function' &&
    typeof i != 'symbol' &&
    typeof i != 'boolean'
      ? (f.type = i)
      : f.removeAttribute('type'),
    e != null
      ? i === 'number'
        ? ((e === 0 && f.value === '') || f.value != e) &&
          (f.value = '' + qf(e))
        : f.value !== '' + qf(e) && (f.value = '' + qf(e))
      : (i !== 'submit' && i !== 'reset') || f.removeAttribute('value'),
    e != null
      ? b0(f, i, qf(e))
      : a != null
        ? b0(f, i, qf(a))
        : t != null && f.removeAttribute('value'),
    n == null && u != null && (f.defaultChecked = !!u),
    n != null &&
      (f.checked = n && typeof n != 'function' && typeof n != 'symbol'),
    l != null &&
    typeof l != 'function' &&
    typeof l != 'symbol' &&
    typeof l != 'boolean'
      ? (f.name = '' + qf(l))
      : f.removeAttribute('name'));
}
function bd(f, e, a, t, n, u, i, l) {
  if (
    (u != null &&
      typeof u != 'function' &&
      typeof u != 'symbol' &&
      typeof u != 'boolean' &&
      (f.type = u),
    e != null || a != null)
  ) {
    if (!((u !== 'submit' && u !== 'reset') || e != null)) return;
    ((a = a != null ? '' + qf(a) : ''),
      (e = e != null ? '' + qf(e) : a),
      l || e === f.value || (f.value = e),
      (f.defaultValue = e));
  }
  ((t = t ?? n),
    (t = typeof t != 'function' && typeof t != 'symbol' && !!t),
    (f.checked = l ? f.checked : !!t),
    (f.defaultChecked = !!t),
    i != null &&
      typeof i != 'function' &&
      typeof i != 'symbol' &&
      typeof i != 'boolean' &&
      (f.name = i));
}
function b0(f, e, a) {
  (e === 'number' && ri(f.ownerDocument) === f) ||
    f.defaultValue === '' + a ||
    (f.defaultValue = '' + a);
}
function ct(f, e, a, t) {
  if (((f = f.options), e)) {
    e = {};
    for (var n = 0; n < a.length; n++) e['$' + a[n]] = !0;
    for (a = 0; a < f.length; a++)
      ((n = e.hasOwnProperty('$' + f[a].value)),
        f[a].selected !== n && (f[a].selected = n),
        n && t && (f[a].defaultSelected = !0));
  } else {
    for (a = '' + qf(a), e = null, n = 0; n < f.length; n++) {
      if (f[n].value === a) {
        ((f[n].selected = !0), t && (f[n].defaultSelected = !0));
        return;
      }
      e !== null || f[n].disabled || (e = f[n]);
    }
    e !== null && (e.selected = !0);
  }
}
function wd(f, e, a) {
  if (
    e != null &&
    ((e = '' + qf(e)), e !== f.value && (f.value = e), a == null)
  ) {
    f.defaultValue !== e && (f.defaultValue = e);
    return;
  }
  f.defaultValue = a != null ? '' + qf(a) : '';
}
function yd(f, e, a, t) {
  if (e == null) {
    if (t != null) {
      if (a != null) throw Error(j(92));
      if (an(t)) {
        if (1 < t.length) throw Error(j(93));
        t = t[0];
      }
      a = t;
    }
    (a == null && (a = ''), (e = a));
  }
  ((a = qf(e)),
    (f.defaultValue = a),
    (t = f.textContent),
    t === a && t !== '' && t !== null && (f.value = t));
}
function ht(f, e) {
  if (e) {
    var a = f.firstChild;
    if (a && a === f.lastChild && a.nodeType === 3) {
      a.nodeValue = e;
      return;
    }
  }
  f.textContent = e;
}
var o3 = new Set(
  'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
    ' '
  )
);
function Kr(f, e, a) {
  var t = e.indexOf('--') === 0;
  a == null || typeof a == 'boolean' || a === ''
    ? t
      ? f.setProperty(e, '')
      : e === 'float'
        ? (f.cssFloat = '')
        : (f[e] = '')
    : t
      ? f.setProperty(e, a)
      : typeof a != 'number' || a === 0 || o3.has(e)
        ? e === 'float'
          ? (f.cssFloat = a)
          : (f[e] = ('' + a).trim())
        : (f[e] = a + 'px');
}
function hd(f, e, a) {
  if (e != null && typeof e != 'object') throw Error(j(62));
  if (((f = f.style), a != null)) {
    for (var t in a)
      !a.hasOwnProperty(t) ||
        (e != null && e.hasOwnProperty(t)) ||
        (t.indexOf('--') === 0
          ? f.setProperty(t, '')
          : t === 'float'
            ? (f.cssFloat = '')
            : (f[t] = ''));
    for (var n in e)
      ((t = e[n]), e.hasOwnProperty(n) && a[n] !== t && Kr(f, n, t));
  } else for (var u in e) e.hasOwnProperty(u) && Kr(f, u, e[u]);
}
function C1(f) {
  if (f.indexOf('-') === -1) return !1;
  switch (f) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var d3 = new Map([
    ['acceptCharset', 'accept-charset'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
    ['crossOrigin', 'crossorigin'],
    ['accentHeight', 'accent-height'],
    ['alignmentBaseline', 'alignment-baseline'],
    ['arabicForm', 'arabic-form'],
    ['baselineShift', 'baseline-shift'],
    ['capHeight', 'cap-height'],
    ['clipPath', 'clip-path'],
    ['clipRule', 'clip-rule'],
    ['colorInterpolation', 'color-interpolation'],
    ['colorInterpolationFilters', 'color-interpolation-filters'],
    ['colorProfile', 'color-profile'],
    ['colorRendering', 'color-rendering'],
    ['dominantBaseline', 'dominant-baseline'],
    ['enableBackground', 'enable-background'],
    ['fillOpacity', 'fill-opacity'],
    ['fillRule', 'fill-rule'],
    ['floodColor', 'flood-color'],
    ['floodOpacity', 'flood-opacity'],
    ['fontFamily', 'font-family'],
    ['fontSize', 'font-size'],
    ['fontSizeAdjust', 'font-size-adjust'],
    ['fontStretch', 'font-stretch'],
    ['fontStyle', 'font-style'],
    ['fontVariant', 'font-variant'],
    ['fontWeight', 'font-weight'],
    ['glyphName', 'glyph-name'],
    ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
    ['glyphOrientationVertical', 'glyph-orientation-vertical'],
    ['horizAdvX', 'horiz-adv-x'],
    ['horizOriginX', 'horiz-origin-x'],
    ['imageRendering', 'image-rendering'],
    ['letterSpacing', 'letter-spacing'],
    ['lightingColor', 'lighting-color'],
    ['markerEnd', 'marker-end'],
    ['markerMid', 'marker-mid'],
    ['markerStart', 'marker-start'],
    ['overlinePosition', 'overline-position'],
    ['overlineThickness', 'overline-thickness'],
    ['paintOrder', 'paint-order'],
    ['panose-1', 'panose-1'],
    ['pointerEvents', 'pointer-events'],
    ['renderingIntent', 'rendering-intent'],
    ['shapeRendering', 'shape-rendering'],
    ['stopColor', 'stop-color'],
    ['stopOpacity', 'stop-opacity'],
    ['strikethroughPosition', 'strikethrough-position'],
    ['strikethroughThickness', 'strikethrough-thickness'],
    ['strokeDasharray', 'stroke-dasharray'],
    ['strokeDashoffset', 'stroke-dashoffset'],
    ['strokeLinecap', 'stroke-linecap'],
    ['strokeLinejoin', 'stroke-linejoin'],
    ['strokeMiterlimit', 'stroke-miterlimit'],
    ['strokeOpacity', 'stroke-opacity'],
    ['strokeWidth', 'stroke-width'],
    ['textAnchor', 'text-anchor'],
    ['textDecoration', 'text-decoration'],
    ['textRendering', 'text-rendering'],
    ['transformOrigin', 'transform-origin'],
    ['underlinePosition', 'underline-position'],
    ['underlineThickness', 'underline-thickness'],
    ['unicodeBidi', 'unicode-bidi'],
    ['unicodeRange', 'unicode-range'],
    ['unitsPerEm', 'units-per-em'],
    ['vAlphabetic', 'v-alphabetic'],
    ['vHanging', 'v-hanging'],
    ['vIdeographic', 'v-ideographic'],
    ['vMathematical', 'v-mathematical'],
    ['vectorEffect', 'vector-effect'],
    ['vertAdvY', 'vert-adv-y'],
    ['vertOriginX', 'vert-origin-x'],
    ['vertOriginY', 'vert-origin-y'],
    ['wordSpacing', 'word-spacing'],
    ['writingMode', 'writing-mode'],
    ['xmlnsXlink', 'xmlns:xlink'],
    ['xHeight', 'x-height'],
  ]),
  s3 =
    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function Bu(f) {
  return s3.test('' + f)
    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
    : f;
}
var w0 = null;
function p1(f) {
  return (
    (f = f.target || f.srcElement || window),
    f.correspondingUseElement && (f = f.correspondingUseElement),
    f.nodeType === 3 ? f.parentNode : f
  );
}
var $a = null,
  ot = null;
function qr(f) {
  var e = xt(f);
  if (e && (f = e.stateNode)) {
    var a = f[Rf] || null;
    f: switch (((f = e.stateNode), e.type)) {
      case 'input':
        if (
          (m0(
            f,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ),
          (e = a.name),
          a.type === 'radio' && e != null)
        ) {
          for (a = f; a.parentNode; ) a = a.parentNode;
          for (
            a = a.querySelectorAll(
              'input[name="' + $f('' + e) + '"][type="radio"]'
            ),
              e = 0;
            e < a.length;
            e++
          ) {
            var t = a[e];
            if (t !== f && t.form === f.form) {
              var n = t[Rf] || null;
              if (!n) throw Error(j(90));
              m0(
                t,
                n.value,
                n.defaultValue,
                n.defaultValue,
                n.checked,
                n.defaultChecked,
                n.type,
                n.name
              );
            }
          }
          for (e = 0; e < a.length; e++)
            ((t = a[e]), t.form === f.form && md(t));
        }
        break f;
      case 'textarea':
        wd(f, a.value, a.defaultValue);
        break f;
      case 'select':
        ((e = a.value), e != null && ct(f, !!a.multiple, e, !1));
    }
  }
}
var Sl = !1;
function vd(f, e, a) {
  if (Sl) return f(e, a);
  Sl = !0;
  try {
    var t = f(e);
    return t;
  } finally {
    if (
      ((Sl = !1),
      ($a !== null || ot !== null) &&
        (Fi(), $a && ((e = $a), (f = ot), (ot = $a = null), qr(e), f)))
    )
      for (e = 0; e < f.length; e++) qr(f[e]);
  }
}
function Nn(f, e) {
  var a = f.stateNode;
  if (a === null) return null;
  var t = a[Rf] || null;
  if (t === null) return null;
  a = t[e];
  f: switch (e) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ((t = !t.disabled) ||
        ((f = f.type),
        (t = !(
          f === 'button' ||
          f === 'input' ||
          f === 'select' ||
          f === 'textarea'
        ))),
        (f = !t));
      break f;
    default:
      f = !1;
  }
  if (f) return null;
  if (a && typeof a != 'function') throw Error(j(231, e, typeof a));
  return a;
}
var Re = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  y0 = !1;
if (Re)
  try {
    var _t = {};
    (Object.defineProperty(_t, 'passive', {
      get: function () {
        y0 = !0;
      },
    }),
      window.addEventListener('test', _t, _t),
      window.removeEventListener('test', _t, _t));
  } catch {
    y0 = !1;
  }
var Fe = null,
  S1 = null,
  Gu = null;
function jd() {
  if (Gu) return Gu;
  var f,
    e = S1,
    a = e.length,
    t,
    n = 'value' in Fe ? Fe.value : Fe.textContent,
    u = n.length;
  for (f = 0; f < a && e[f] === n[f]; f++);
  var i = a - f;
  for (t = 1; t <= i && e[a - t] === n[u - t]; t++);
  return (Gu = n.slice(f, 1 < t ? 1 - t : void 0));
}
function Ju(f) {
  var e = f.keyCode;
  return (
    'charCode' in f
      ? ((f = f.charCode), f === 0 && e === 13 && (f = 13))
      : (f = e),
    f === 10 && (f = 13),
    32 <= f || f === 13 ? f : 0
  );
}
function Su() {
  return !0;
}
function Wr() {
  return !1;
}
function Of(f) {
  function e(a, t, n, u, i) {
    ((this._reactName = a),
      (this._targetInst = n),
      (this.type = t),
      (this.nativeEvent = u),
      (this.target = i),
      (this.currentTarget = null));
    for (var l in f)
      f.hasOwnProperty(l) && ((a = f[l]), (this[l] = a ? a(u) : u[l]));
    return (
      (this.isDefaultPrevented = (
        u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
      )
        ? Su
        : Wr),
      (this.isPropagationStopped = Wr),
      this
    );
  }
  return (
    K(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a &&
          (a.preventDefault
            ? a.preventDefault()
            : typeof a.returnValue != 'unknown' && (a.returnValue = !1),
          (this.isDefaultPrevented = Su));
      },
      stopPropagation: function () {
        var a = this.nativeEvent;
        a &&
          (a.stopPropagation
            ? a.stopPropagation()
            : typeof a.cancelBubble != 'unknown' && (a.cancelBubble = !0),
          (this.isPropagationStopped = Su));
      },
      persist: function () {},
      isPersistent: Su,
    }),
    e
  );
}
var Ra = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (f) {
      return f.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zi = Of(Ra),
  Fn = K({}, Ra, { view: 0, detail: 0 }),
  g3 = Of(Fn),
  Nl,
  Tl,
  Pt,
  Hi = K({}, Fn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: N1,
    button: 0,
    buttons: 0,
    relatedTarget: function (f) {
      return f.relatedTarget === void 0
        ? f.fromElement === f.srcElement
          ? f.toElement
          : f.fromElement
        : f.relatedTarget;
    },
    movementX: function (f) {
      return 'movementX' in f
        ? f.movementX
        : (f !== Pt &&
            (Pt && f.type === 'mousemove'
              ? ((Nl = f.screenX - Pt.screenX), (Tl = f.screenY - Pt.screenY))
              : (Tl = Nl = 0),
            (Pt = f)),
          Nl);
    },
    movementY: function (f) {
      return 'movementY' in f ? f.movementY : Tl;
    },
  }),
  Fr = Of(Hi),
  M3 = K({}, Hi, { dataTransfer: 0 }),
  L3 = Of(M3),
  m3 = K({}, Fn, { relatedTarget: 0 }),
  Dl = Of(m3),
  b3 = K({}, Ra, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  w3 = Of(b3),
  y3 = K({}, Ra, {
    clipboardData: function (f) {
      return 'clipboardData' in f ? f.clipboardData : window.clipboardData;
    },
  }),
  h3 = Of(y3),
  v3 = K({}, Ra, { data: 0 }),
  $r = Of(v3),
  j3 = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  C3 = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  p3 = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function S3(f) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(f) : (f = p3[f]) ? !!e[f] : !1;
}
function N1() {
  return S3;
}
var N3 = K({}, Fn, {
    key: function (f) {
      if (f.key) {
        var e = j3[f.key] || f.key;
        if (e !== 'Unidentified') return e;
      }
      return f.type === 'keypress'
        ? ((f = Ju(f)), f === 13 ? 'Enter' : String.fromCharCode(f))
        : f.type === 'keydown' || f.type === 'keyup'
          ? C3[f.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: N1,
    charCode: function (f) {
      return f.type === 'keypress' ? Ju(f) : 0;
    },
    keyCode: function (f) {
      return f.type === 'keydown' || f.type === 'keyup' ? f.keyCode : 0;
    },
    which: function (f) {
      return f.type === 'keypress'
        ? Ju(f)
        : f.type === 'keydown' || f.type === 'keyup'
          ? f.keyCode
          : 0;
    },
  }),
  T3 = Of(N3),
  D3 = K({}, Hi, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  fc = Of(D3),
  E3 = K({}, Fn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: N1,
  }),
  I3 = Of(E3),
  z3 = K({}, Ra, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  A3 = Of(z3),
  k3 = K({}, Hi, {
    deltaX: function (f) {
      return 'deltaX' in f ? f.deltaX : 'wheelDeltaX' in f ? -f.wheelDeltaX : 0;
    },
    deltaY: function (f) {
      return 'deltaY' in f
        ? f.deltaY
        : 'wheelDeltaY' in f
          ? -f.wheelDeltaY
          : 'wheelDelta' in f
            ? -f.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  x3 = Of(k3),
  R3 = K({}, Ra, { newState: 0, oldState: 0 }),
  O3 = Of(R3),
  Y3 = [9, 13, 27, 32],
  T1 = Re && 'CompositionEvent' in window,
  cn = null;
Re && 'documentMode' in document && (cn = document.documentMode);
var Q3 = Re && 'TextEvent' in window && !cn,
  Cd = Re && (!T1 || (cn && 8 < cn && 11 >= cn)),
  ec = ' ',
  ac = !1;
function pd(f, e) {
  switch (f) {
    case 'keyup':
      return Y3.indexOf(e.keyCode) !== -1;
    case 'keydown':
      return e.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Sd(f) {
  return ((f = f.detail), typeof f == 'object' && 'data' in f ? f.data : null);
}
var ft = !1;
function U3(f, e) {
  switch (f) {
    case 'compositionend':
      return Sd(e);
    case 'keypress':
      return e.which !== 32 ? null : ((ac = !0), ec);
    case 'textInput':
      return ((f = e.data), f === ec && ac ? null : f);
    default:
      return null;
  }
}
function B3(f, e) {
  if (ft)
    return f === 'compositionend' || (!T1 && pd(f, e))
      ? ((f = jd()), (Gu = S1 = Fe = null), (ft = !1), f)
      : null;
  switch (f) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case 'compositionend':
      return Cd && e.locale !== 'ko' ? null : e.data;
    default:
      return null;
  }
}
var G3 = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function tc(f) {
  var e = f && f.nodeName && f.nodeName.toLowerCase();
  return e === 'input' ? !!G3[f.type] : e === 'textarea';
}
function Nd(f, e, a, t) {
  ($a ? (ot ? ot.push(t) : (ot = [t])) : ($a = t),
    (e = Ni(e, 'onChange')),
    0 < e.length &&
      ((a = new Zi('onChange', 'change', null, a, t)),
      f.push({ event: a, listeners: e })));
}
var on = null,
  Tn = null;
function J3(f) {
  w2(f, 0);
}
function _i(f) {
  var e = tn(f);
  if (md(e)) return f;
}
function nc(f, e) {
  if (f === 'change') return e;
}
var Td = !1;
if (Re) {
  var El;
  if (Re) {
    var Il = 'oninput' in document;
    if (!Il) {
      var uc = document.createElement('div');
      (uc.setAttribute('oninput', 'return;'),
        (Il = typeof uc.oninput == 'function'));
    }
    El = Il;
  } else El = !1;
  Td = El && (!document.documentMode || 9 < document.documentMode);
}
function ic() {
  on && (on.detachEvent('onpropertychange', Dd), (Tn = on = null));
}
function Dd(f) {
  if (f.propertyName === 'value' && _i(Tn)) {
    var e = [];
    (Nd(e, Tn, f, p1(f)), vd(J3, e));
  }
}
function Z3(f, e, a) {
  f === 'focusin'
    ? (ic(), (on = e), (Tn = a), on.attachEvent('onpropertychange', Dd))
    : f === 'focusout' && ic();
}
function H3(f) {
  if (f === 'selectionchange' || f === 'keyup' || f === 'keydown')
    return _i(Tn);
}
function _3(f, e) {
  if (f === 'click') return _i(e);
}
function P3(f, e) {
  if (f === 'input' || f === 'change') return _i(e);
}
function V3(f, e) {
  return (f === e && (f !== 0 || 1 / f === 1 / e)) || (f !== f && e !== e);
}
var Pf = typeof Object.is == 'function' ? Object.is : V3;
function Dn(f, e) {
  if (Pf(f, e)) return !0;
  if (typeof f != 'object' || f === null || typeof e != 'object' || e === null)
    return !1;
  var a = Object.keys(f),
    t = Object.keys(e);
  if (a.length !== t.length) return !1;
  for (t = 0; t < a.length; t++) {
    var n = a[t];
    if (!M0.call(e, n) || !Pf(f[n], e[n])) return !1;
  }
  return !0;
}
function lc(f) {
  for (; f && f.firstChild; ) f = f.firstChild;
  return f;
}
function rc(f, e) {
  var a = lc(f);
  f = 0;
  for (var t; a; ) {
    if (a.nodeType === 3) {
      if (((t = f + a.textContent.length), f <= e && t >= e))
        return { node: a, offset: e - f };
      f = t;
    }
    f: {
      for (; a; ) {
        if (a.nextSibling) {
          a = a.nextSibling;
          break f;
        }
        a = a.parentNode;
      }
      a = void 0;
    }
    a = lc(a);
  }
}
function Ed(f, e) {
  return f && e
    ? f === e
      ? !0
      : f && f.nodeType === 3
        ? !1
        : e && e.nodeType === 3
          ? Ed(f, e.parentNode)
          : 'contains' in f
            ? f.contains(e)
            : f.compareDocumentPosition
              ? !!(f.compareDocumentPosition(e) & 16)
              : !1
    : !1;
}
function Id(f) {
  f =
    f != null && f.ownerDocument != null && f.ownerDocument.defaultView != null
      ? f.ownerDocument.defaultView
      : window;
  for (var e = ri(f.document); e instanceof f.HTMLIFrameElement; ) {
    try {
      var a = typeof e.contentWindow.location.href == 'string';
    } catch {
      a = !1;
    }
    if (a) f = e.contentWindow;
    else break;
    e = ri(f.document);
  }
  return e;
}
function D1(f) {
  var e = f && f.nodeName && f.nodeName.toLowerCase();
  return (
    e &&
    ((e === 'input' &&
      (f.type === 'text' ||
        f.type === 'search' ||
        f.type === 'tel' ||
        f.type === 'url' ||
        f.type === 'password')) ||
      e === 'textarea' ||
      f.contentEditable === 'true')
  );
}
var X3 = Re && 'documentMode' in document && 11 >= document.documentMode,
  et = null,
  h0 = null,
  dn = null,
  v0 = !1;
function cc(f, e, a) {
  var t = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
  v0 ||
    et == null ||
    et !== ri(t) ||
    ((t = et),
    'selectionStart' in t && D1(t)
      ? (t = { start: t.selectionStart, end: t.selectionEnd })
      : ((t = (
          (t.ownerDocument && t.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (t = {
          anchorNode: t.anchorNode,
          anchorOffset: t.anchorOffset,
          focusNode: t.focusNode,
          focusOffset: t.focusOffset,
        })),
    (dn && Dn(dn, t)) ||
      ((dn = t),
      (t = Ni(h0, 'onSelect')),
      0 < t.length &&
        ((e = new Zi('onSelect', 'select', null, e, a)),
        f.push({ event: e, listeners: t }),
        (e.target = et))));
}
function ya(f, e) {
  var a = {};
  return (
    (a[f.toLowerCase()] = e.toLowerCase()),
    (a['Webkit' + f] = 'webkit' + e),
    (a['Moz' + f] = 'moz' + e),
    a
  );
}
var at = {
    animationend: ya('Animation', 'AnimationEnd'),
    animationiteration: ya('Animation', 'AnimationIteration'),
    animationstart: ya('Animation', 'AnimationStart'),
    transitionrun: ya('Transition', 'TransitionRun'),
    transitionstart: ya('Transition', 'TransitionStart'),
    transitioncancel: ya('Transition', 'TransitionCancel'),
    transitionend: ya('Transition', 'TransitionEnd'),
  },
  zl = {},
  zd = {};
Re &&
  ((zd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete at.animationend.animation,
    delete at.animationiteration.animation,
    delete at.animationstart.animation),
  'TransitionEvent' in window || delete at.transitionend.transition);
function Oa(f) {
  if (zl[f]) return zl[f];
  if (!at[f]) return f;
  var e = at[f],
    a;
  for (a in e) if (e.hasOwnProperty(a) && a in zd) return (zl[f] = e[a]);
  return f;
}
var Ad = Oa('animationend'),
  kd = Oa('animationiteration'),
  xd = Oa('animationstart'),
  K3 = Oa('transitionrun'),
  q3 = Oa('transitionstart'),
  W3 = Oa('transitioncancel'),
  Rd = Oa('transitionend'),
  Od = new Map(),
  j0 =
    'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
j0.push('scrollEnd');
function de(f, e) {
  (Od.set(f, e), xa(e, [f]));
}
var oc = new WeakMap();
function fe(f, e) {
  if (typeof f == 'object' && f !== null) {
    var a = oc.get(f);
    return a !== void 0
      ? a
      : ((e = { value: f, source: e, stack: Xr(e) }), oc.set(f, e), e);
  }
  return { value: f, source: e, stack: Xr(e) };
}
var Kf = [],
  tt = 0,
  E1 = 0;
function Pi() {
  for (var f = tt, e = (E1 = tt = 0); e < f; ) {
    var a = Kf[e];
    Kf[e++] = null;
    var t = Kf[e];
    Kf[e++] = null;
    var n = Kf[e];
    Kf[e++] = null;
    var u = Kf[e];
    if (((Kf[e++] = null), t !== null && n !== null)) {
      var i = t.pending;
      (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
        (t.pending = n));
    }
    u !== 0 && Yd(a, n, u);
  }
}
function Vi(f, e, a, t) {
  ((Kf[tt++] = f),
    (Kf[tt++] = e),
    (Kf[tt++] = a),
    (Kf[tt++] = t),
    (E1 |= t),
    (f.lanes |= t),
    (f = f.alternate),
    f !== null && (f.lanes |= t));
}
function I1(f, e, a, t) {
  return (Vi(f, e, a, t), ci(f));
}
function Rt(f, e) {
  return (Vi(f, null, null, e), ci(f));
}
function Yd(f, e, a) {
  f.lanes |= a;
  var t = f.alternate;
  t !== null && (t.lanes |= a);
  for (var n = !1, u = f.return; u !== null; )
    ((u.childLanes |= a),
      (t = u.alternate),
      t !== null && (t.childLanes |= a),
      u.tag === 22 &&
        ((f = u.stateNode), f === null || f._visibility & 1 || (n = !0)),
      (f = u),
      (u = u.return));
  return f.tag === 3
    ? ((u = f.stateNode),
      n &&
        e !== null &&
        ((n = 31 - Zf(a)),
        (f = u.hiddenUpdates),
        (t = f[n]),
        t === null ? (f[n] = [e]) : t.push(e),
        (e.lane = a | 536870912)),
      u)
    : null;
}
function ci(f) {
  if (50 < vn) throw ((vn = 0), (Z0 = null), Error(j(185)));
  for (var e = f.return; e !== null; ) ((f = e), (e = f.return));
  return f.tag === 3 ? f.stateNode : null;
}
var nt = {};
function F3(f, e, a, t) {
  ((this.tag = f),
    (this.key = a),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.refCleanup = this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = t),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Bf(f, e, a, t) {
  return new F3(f, e, a, t);
}
function z1(f) {
  return ((f = f.prototype), !(!f || !f.isReactComponent));
}
function Ae(f, e) {
  var a = f.alternate;
  return (
    a === null
      ? ((a = Bf(f.tag, e, f.key, f.mode)),
        (a.elementType = f.elementType),
        (a.type = f.type),
        (a.stateNode = f.stateNode),
        (a.alternate = f),
        (f.alternate = a))
      : ((a.pendingProps = e),
        (a.type = f.type),
        (a.flags = 0),
        (a.subtreeFlags = 0),
        (a.deletions = null)),
    (a.flags = f.flags & 65011712),
    (a.childLanes = f.childLanes),
    (a.lanes = f.lanes),
    (a.child = f.child),
    (a.memoizedProps = f.memoizedProps),
    (a.memoizedState = f.memoizedState),
    (a.updateQueue = f.updateQueue),
    (e = f.dependencies),
    (a.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (a.sibling = f.sibling),
    (a.index = f.index),
    (a.ref = f.ref),
    (a.refCleanup = f.refCleanup),
    a
  );
}
function Qd(f, e) {
  f.flags &= 65011714;
  var a = f.alternate;
  return (
    a === null
      ? ((f.childLanes = 0),
        (f.lanes = e),
        (f.child = null),
        (f.subtreeFlags = 0),
        (f.memoizedProps = null),
        (f.memoizedState = null),
        (f.updateQueue = null),
        (f.dependencies = null),
        (f.stateNode = null))
      : ((f.childLanes = a.childLanes),
        (f.lanes = a.lanes),
        (f.child = a.child),
        (f.subtreeFlags = 0),
        (f.deletions = null),
        (f.memoizedProps = a.memoizedProps),
        (f.memoizedState = a.memoizedState),
        (f.updateQueue = a.updateQueue),
        (f.type = a.type),
        (e = a.dependencies),
        (f.dependencies =
          e === null
            ? null
            : { lanes: e.lanes, firstContext: e.firstContext })),
    f
  );
}
function Zu(f, e, a, t, n, u) {
  var i = 0;
  if (((t = f), typeof f == 'function')) z1(f) && (i = 1);
  else if (typeof f == 'string')
    i = f6(f, a, me.current)
      ? 26
      : f === 'html' || f === 'head' || f === 'body'
        ? 27
        : 5;
  else
    f: switch (f) {
      case o0:
        return ((f = Bf(31, a, e, n)), (f.elementType = o0), (f.lanes = u), f);
      case qa:
        return pa(a.children, n, u, e);
      case td:
        ((i = 8), (n |= 24));
        break;
      case l0:
        return (
          (f = Bf(12, a, e, n | 2)),
          (f.elementType = l0),
          (f.lanes = u),
          f
        );
      case r0:
        return ((f = Bf(13, a, e, n)), (f.elementType = r0), (f.lanes = u), f);
      case c0:
        return ((f = Bf(19, a, e, n)), (f.elementType = c0), (f.lanes = u), f);
      default:
        if (typeof f == 'object' && f !== null)
          switch (f.$$typeof) {
            case Jg:
            case Te:
              i = 10;
              break f;
            case nd:
              i = 9;
              break f;
            case b1:
              i = 11;
              break f;
            case w1:
              i = 14;
              break f;
            case _e:
              ((i = 16), (t = null));
              break f;
          }
        ((i = 29),
          (a = Error(j(130, f === null ? 'null' : typeof f, ''))),
          (t = null));
    }
  return (
    (e = Bf(i, a, e, n)),
    (e.elementType = f),
    (e.type = t),
    (e.lanes = u),
    e
  );
}
function pa(f, e, a, t) {
  return ((f = Bf(7, f, t, e)), (f.lanes = a), f);
}
function Al(f, e, a) {
  return ((f = Bf(6, f, null, e)), (f.lanes = a), f);
}
function kl(f, e, a) {
  return (
    (e = Bf(4, f.children !== null ? f.children : [], f.key, e)),
    (e.lanes = a),
    (e.stateNode = {
      containerInfo: f.containerInfo,
      pendingChildren: null,
      implementation: f.implementation,
    }),
    e
  );
}
var ut = [],
  it = 0,
  oi = null,
  di = 0,
  Wf = [],
  Ff = 0,
  Sa = null,
  De = 1,
  Ee = '';
function va(f, e) {
  ((ut[it++] = di), (ut[it++] = oi), (oi = f), (di = e));
}
function Ud(f, e, a) {
  ((Wf[Ff++] = De), (Wf[Ff++] = Ee), (Wf[Ff++] = Sa), (Sa = f));
  var t = De;
  f = Ee;
  var n = 32 - Zf(t) - 1;
  ((t &= ~(1 << n)), (a += 1));
  var u = 32 - Zf(e) + n;
  if (30 < u) {
    var i = n - (n % 5);
    ((u = (t & ((1 << i) - 1)).toString(32)),
      (t >>= i),
      (n -= i),
      (De = (1 << (32 - Zf(e) + n)) | (a << n) | t),
      (Ee = u + f));
  } else ((De = (1 << u) | (a << n) | t), (Ee = f));
}
function A1(f) {
  f.return !== null && (va(f, 1), Ud(f, 1, 0));
}
function k1(f) {
  for (; f === oi; )
    ((oi = ut[--it]), (ut[it] = null), (di = ut[--it]), (ut[it] = null));
  for (; f === Sa; )
    ((Sa = Wf[--Ff]),
      (Wf[Ff] = null),
      (Ee = Wf[--Ff]),
      (Wf[Ff] = null),
      (De = Wf[--Ff]),
      (Wf[Ff] = null));
}
var Df = null,
  tf = null,
  G = !1,
  Na = null,
  Me = !1,
  C0 = Error(j(519));
function Ia(f) {
  var e = Error(j(418, ''));
  throw (En(fe(e, f)), C0);
}
function dc(f) {
  var e = f.stateNode,
    a = f.type,
    t = f.memoizedProps;
  switch (((e[pf] = f), (e[Rf] = t), a)) {
    case 'dialog':
      (O('cancel', e), O('close', e));
      break;
    case 'iframe':
    case 'object':
    case 'embed':
      O('load', e);
      break;
    case 'video':
    case 'audio':
      for (a = 0; a < An.length; a++) O(An[a], e);
      break;
    case 'source':
      O('error', e);
      break;
    case 'img':
    case 'image':
    case 'link':
      (O('error', e), O('load', e));
      break;
    case 'details':
      O('toggle', e);
      break;
    case 'input':
      (O('invalid', e),
        bd(
          e,
          t.value,
          t.defaultValue,
          t.checked,
          t.defaultChecked,
          t.type,
          t.name,
          !0
        ),
        li(e));
      break;
    case 'select':
      O('invalid', e);
      break;
    case 'textarea':
      (O('invalid', e), yd(e, t.value, t.defaultValue, t.children), li(e));
  }
  ((a = t.children),
    (typeof a != 'string' && typeof a != 'number' && typeof a != 'bigint') ||
    e.textContent === '' + a ||
    t.suppressHydrationWarning === !0 ||
    h2(e.textContent, a)
      ? (t.popover != null && (O('beforetoggle', e), O('toggle', e)),
        t.onScroll != null && O('scroll', e),
        t.onScrollEnd != null && O('scrollend', e),
        t.onClick != null && (e.onclick = el),
        (e = !0))
      : (e = !1),
    e || Ia(f));
}
function sc(f) {
  for (Df = f.return; Df; )
    switch (Df.tag) {
      case 5:
      case 13:
        Me = !1;
        return;
      case 27:
      case 3:
        Me = !0;
        return;
      default:
        Df = Df.return;
    }
}
function Vt(f) {
  if (f !== Df) return !1;
  if (!G) return (sc(f), (G = !0), !1);
  var e = f.tag,
    a;
  if (
    ((a = e !== 3 && e !== 27) &&
      ((a = e === 5) &&
        ((a = f.type),
        (a = !(a !== 'form' && a !== 'button') || K0(f.type, f.memoizedProps))),
      (a = !a)),
    a && tf && Ia(f),
    sc(f),
    e === 13)
  ) {
    if (((f = f.memoizedState), (f = f !== null ? f.dehydrated : null), !f))
      throw Error(j(317));
    f: {
      for (f = f.nextSibling, e = 0; f; ) {
        if (f.nodeType === 8)
          if (((a = f.data), a === '/$')) {
            if (e === 0) {
              tf = ce(f.nextSibling);
              break f;
            }
            e--;
          } else (a !== '$' && a !== '$!' && a !== '$?') || e++;
        f = f.nextSibling;
      }
      tf = null;
    }
  } else
    e === 27
      ? ((e = tf), Ma(f.type) ? ((f = F0), (F0 = null), (tf = f)) : (tf = e))
      : (tf = Df ? ce(f.stateNode.nextSibling) : null);
  return !0;
}
function $n() {
  ((tf = Df = null), (G = !1));
}
function gc() {
  var f = Na;
  return (
    f !== null && (xf === null ? (xf = f) : xf.push.apply(xf, f), (Na = null)),
    f
  );
}
function En(f) {
  Na === null ? (Na = [f]) : Na.push(f);
}
var p0 = he(null),
  Ya = null,
  Ie = null;
function Ve(f, e, a) {
  (F(p0, e._currentValue), (e._currentValue = a));
}
function ke(f) {
  ((f._currentValue = p0.current), hf(p0));
}
function S0(f, e, a) {
  for (; f !== null; ) {
    var t = f.alternate;
    if (
      ((f.childLanes & e) !== e
        ? ((f.childLanes |= e), t !== null && (t.childLanes |= e))
        : t !== null && (t.childLanes & e) !== e && (t.childLanes |= e),
      f === a)
    )
      break;
    f = f.return;
  }
}
function N0(f, e, a, t) {
  var n = f.child;
  for (n !== null && (n.return = f); n !== null; ) {
    var u = n.dependencies;
    if (u !== null) {
      var i = n.child;
      u = u.firstContext;
      f: for (; u !== null; ) {
        var l = u;
        u = n;
        for (var r = 0; r < e.length; r++)
          if (l.context === e[r]) {
            ((u.lanes |= a),
              (l = u.alternate),
              l !== null && (l.lanes |= a),
              S0(u.return, a, f),
              t || (i = null));
            break f;
          }
        u = l.next;
      }
    } else if (n.tag === 18) {
      if (((i = n.return), i === null)) throw Error(j(341));
      ((i.lanes |= a),
        (u = i.alternate),
        u !== null && (u.lanes |= a),
        S0(i, a, f),
        (i = null));
    } else i = n.child;
    if (i !== null) i.return = n;
    else
      for (i = n; i !== null; ) {
        if (i === f) {
          i = null;
          break;
        }
        if (((n = i.sibling), n !== null)) {
          ((n.return = i.return), (i = n));
          break;
        }
        i = i.return;
      }
    n = i;
  }
}
function fu(f, e, a, t) {
  f = null;
  for (var n = e, u = !1; n !== null; ) {
    if (!u) {
      if (n.flags & 524288) u = !0;
      else if (n.flags & 262144) break;
    }
    if (n.tag === 10) {
      var i = n.alternate;
      if (i === null) throw Error(j(387));
      if (((i = i.memoizedProps), i !== null)) {
        var l = n.type;
        Pf(n.pendingProps.value, i.value) ||
          (f !== null ? f.push(l) : (f = [l]));
      }
    } else if (n === ti.current) {
      if (((i = n.alternate), i === null)) throw Error(j(387));
      i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
        (f !== null ? f.push(Rn) : (f = [Rn]));
    }
    n = n.return;
  }
  (f !== null && N0(e, f, a, t), (e.flags |= 262144));
}
function si(f) {
  for (f = f.firstContext; f !== null; ) {
    if (!Pf(f.context._currentValue, f.memoizedValue)) return !0;
    f = f.next;
  }
  return !1;
}
function za(f) {
  ((Ya = f),
    (Ie = null),
    (f = f.dependencies),
    f !== null && (f.firstContext = null));
}
function Sf(f) {
  return Bd(Ya, f);
}
function Nu(f, e) {
  return (Ya === null && za(f), Bd(f, e));
}
function Bd(f, e) {
  var a = e._currentValue;
  if (((e = { context: e, memoizedValue: a, next: null }), Ie === null)) {
    if (f === null) throw Error(j(308));
    ((Ie = e),
      (f.dependencies = { lanes: 0, firstContext: e }),
      (f.flags |= 524288));
  } else Ie = Ie.next = e;
  return a;
}
var $3 =
    typeof AbortController < 'u'
      ? AbortController
      : function () {
          var f = [],
            e = (this.signal = {
              aborted: !1,
              addEventListener: function (a, t) {
                f.push(t);
              },
            });
          this.abort = function () {
            ((e.aborted = !0),
              f.forEach(function (a) {
                return a();
              }));
          };
        },
  fM = Lf.unstable_scheduleCallback,
  eM = Lf.unstable_NormalPriority,
  gf = {
    $$typeof: Te,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0,
  };
function x1() {
  return { controller: new $3(), data: new Map(), refCount: 0 };
}
function eu(f) {
  (f.refCount--,
    f.refCount === 0 &&
      fM(eM, function () {
        f.controller.abort();
      }));
}
var sn = null,
  T0 = 0,
  vt = 0,
  dt = null;
function aM(f, e) {
  if (sn === null) {
    var a = (sn = []);
    ((T0 = 0),
      (vt = tr()),
      (dt = {
        status: 'pending',
        value: void 0,
        then: function (t) {
          a.push(t);
        },
      }));
  }
  return (T0++, e.then(Mc, Mc), e);
}
function Mc() {
  if (--T0 === 0 && sn !== null) {
    dt !== null && (dt.status = 'fulfilled');
    var f = sn;
    ((sn = null), (vt = 0), (dt = null));
    for (var e = 0; e < f.length; e++) (0, f[e])();
  }
}
function tM(f, e) {
  var a = [],
    t = {
      status: 'pending',
      value: null,
      reason: null,
      then: function (n) {
        a.push(n);
      },
    };
  return (
    f.then(
      function () {
        ((t.status = 'fulfilled'), (t.value = e));
        for (var n = 0; n < a.length; n++) (0, a[n])(e);
      },
      function (n) {
        for (t.status = 'rejected', t.reason = n, n = 0; n < a.length; n++)
          (0, a[n])(void 0);
      }
    ),
    t
  );
}
var Lc = D.S;
D.S = function (f, e) {
  (typeof e == 'object' &&
    e !== null &&
    typeof e.then == 'function' &&
    aM(f, e),
    Lc !== null && Lc(f, e));
};
var Ta = he(null);
function R1() {
  var f = Ta.current;
  return f !== null ? f : X.pooledCache;
}
function Hu(f, e) {
  e === null ? F(Ta, Ta.current) : F(Ta, e.pool);
}
function Gd() {
  var f = R1();
  return f === null ? null : { parent: gf._currentValue, pool: f };
}
var au = Error(j(460)),
  Jd = Error(j(474)),
  Xi = Error(j(542)),
  D0 = { then: function () {} };
function mc(f) {
  return ((f = f.status), f === 'fulfilled' || f === 'rejected');
}
function Tu() {}
function Zd(f, e, a) {
  switch (
    ((a = f[a]),
    a === void 0 ? f.push(e) : a !== e && (e.then(Tu, Tu), (e = a)),
    e.status)
  ) {
    case 'fulfilled':
      return e.value;
    case 'rejected':
      throw ((f = e.reason), wc(f), f);
    default:
      if (typeof e.status == 'string') e.then(Tu, Tu);
      else {
        if (((f = X), f !== null && 100 < f.shellSuspendCounter))
          throw Error(j(482));
        ((f = e),
          (f.status = 'pending'),
          f.then(
            function (t) {
              if (e.status === 'pending') {
                var n = e;
                ((n.status = 'fulfilled'), (n.value = t));
              }
            },
            function (t) {
              if (e.status === 'pending') {
                var n = e;
                ((n.status = 'rejected'), (n.reason = t));
              }
            }
          ));
      }
      switch (e.status) {
        case 'fulfilled':
          return e.value;
        case 'rejected':
          throw ((f = e.reason), wc(f), f);
      }
      throw ((gn = e), au);
  }
}
var gn = null;
function bc() {
  if (gn === null) throw Error(j(459));
  var f = gn;
  return ((gn = null), f);
}
function wc(f) {
  if (f === au || f === Xi) throw Error(j(483));
}
var Pe = !1;
function O1(f) {
  f.updateQueue = {
    baseState: f.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null,
  };
}
function E0(f, e) {
  ((f = f.updateQueue),
    e.updateQueue === f &&
      (e.updateQueue = {
        baseState: f.baseState,
        firstBaseUpdate: f.firstBaseUpdate,
        lastBaseUpdate: f.lastBaseUpdate,
        shared: f.shared,
        callbacks: null,
      }));
}
function aa(f) {
  return { lane: f, tag: 0, payload: null, callback: null, next: null };
}
function ta(f, e, a) {
  var t = f.updateQueue;
  if (t === null) return null;
  if (((t = t.shared), H & 2)) {
    var n = t.pending;
    return (
      n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e),
      (e = ci(f)),
      Yd(f, null, a),
      e
    );
  }
  return (Vi(f, t, e, a), ci(f));
}
function Mn(f, e, a) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (a & 4194048) !== 0))
  ) {
    var t = e.lanes;
    ((t &= f.pendingLanes), (a |= t), (e.lanes = a), dd(f, a));
  }
}
function xl(f, e) {
  var a = f.updateQueue,
    t = f.alternate;
  if (t !== null && ((t = t.updateQueue), a === t)) {
    var n = null,
      u = null;
    if (((a = a.firstBaseUpdate), a !== null)) {
      do {
        var i = {
          lane: a.lane,
          tag: a.tag,
          payload: a.payload,
          callback: null,
          next: null,
        };
        (u === null ? (n = u = i) : (u = u.next = i), (a = a.next));
      } while (a !== null);
      u === null ? (n = u = e) : (u = u.next = e);
    } else n = u = e;
    ((a = {
      baseState: t.baseState,
      firstBaseUpdate: n,
      lastBaseUpdate: u,
      shared: t.shared,
      callbacks: t.callbacks,
    }),
      (f.updateQueue = a));
    return;
  }
  ((f = a.lastBaseUpdate),
    f === null ? (a.firstBaseUpdate = e) : (f.next = e),
    (a.lastBaseUpdate = e));
}
var I0 = !1;
function Ln() {
  if (I0) {
    var f = dt;
    if (f !== null) throw f;
  }
}
function mn(f, e, a, t) {
  I0 = !1;
  var n = f.updateQueue;
  Pe = !1;
  var u = n.firstBaseUpdate,
    i = n.lastBaseUpdate,
    l = n.shared.pending;
  if (l !== null) {
    n.shared.pending = null;
    var r = l,
      c = r.next;
    ((r.next = null), i === null ? (u = c) : (i.next = c), (i = r));
    var d = f.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== i &&
        (l === null ? (d.firstBaseUpdate = c) : (l.next = c),
        (d.lastBaseUpdate = r)));
  }
  if (u !== null) {
    var M = n.baseState;
    ((i = 0), (d = c = r = null), (l = u));
    do {
      var s = l.lane & -536870913,
        b = s !== l.lane;
      if (b ? (U & s) === s : (t & s) === s) {
        (s !== 0 && s === vt && (I0 = !0),
          d !== null &&
            (d = d.next =
              {
                lane: 0,
                tag: l.tag,
                payload: l.payload,
                callback: null,
                next: null,
              }));
        f: {
          var y = f,
            h = l;
          s = e;
          var v = a;
          switch (h.tag) {
            case 1:
              if (((y = h.payload), typeof y == 'function')) {
                M = y.call(v, M, s);
                break f;
              }
              M = y;
              break f;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = h.payload),
                (s = typeof y == 'function' ? y.call(v, M, s) : y),
                s == null)
              )
                break f;
              M = K({}, M, s);
              break f;
            case 2:
              Pe = !0;
          }
        }
        ((s = l.callback),
          s !== null &&
            ((f.flags |= 64),
            b && (f.flags |= 8192),
            (b = n.callbacks),
            b === null ? (n.callbacks = [s]) : b.push(s)));
      } else
        ((b = {
          lane: s,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((c = d = b), (r = M)) : (d = d.next = b),
          (i |= s));
      if (((l = l.next), l === null)) {
        if (((l = n.shared.pending), l === null)) break;
        ((b = l),
          (l = b.next),
          (b.next = null),
          (n.lastBaseUpdate = b),
          (n.shared.pending = null));
      }
    } while (!0);
    (d === null && (r = M),
      (n.baseState = r),
      (n.firstBaseUpdate = c),
      (n.lastBaseUpdate = d),
      u === null && (n.shared.lanes = 0),
      (da |= i),
      (f.lanes = i),
      (f.memoizedState = M));
  }
}
function Hd(f, e) {
  if (typeof f != 'function') throw Error(j(191, f));
  f.call(e);
}
function _d(f, e) {
  var a = f.callbacks;
  if (a !== null)
    for (f.callbacks = null, f = 0; f < a.length; f++) Hd(a[f], e);
}
var jt = he(null),
  gi = he(0);
function yc(f, e) {
  ((f = Qe), F(gi, f), F(jt, e), (Qe = f | e.baseLanes));
}
function z0() {
  (F(gi, Qe), F(jt, jt.current));
}
function Y1() {
  ((Qe = gi.current), hf(jt), hf(gi));
}
var ca = 0,
  z = null,
  P = null,
  of = null,
  Mi = !1,
  st = !1,
  Aa = !1,
  Li = 0,
  In = 0,
  gt = null,
  nM = 0;
function rf() {
  throw Error(j(321));
}
function Q1(f, e) {
  if (e === null) return !1;
  for (var a = 0; a < e.length && a < f.length; a++)
    if (!Pf(f[a], e[a])) return !1;
  return !0;
}
function U1(f, e, a, t, n, u) {
  return (
    (ca = u),
    (z = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (D.H = f === null || f.memoizedState === null ? js : Cs),
    (Aa = !1),
    (u = a(t, n)),
    (Aa = !1),
    st && (u = Vd(e, a, t, n)),
    Pd(f),
    u
  );
}
function Pd(f) {
  D.H = mi;
  var e = P !== null && P.next !== null;
  if (((ca = 0), (of = P = z = null), (Mi = !1), (In = 0), (gt = null), e))
    throw Error(j(300));
  f === null || yf || ((f = f.dependencies), f !== null && si(f) && (yf = !0));
}
function Vd(f, e, a, t) {
  z = f;
  var n = 0;
  do {
    if ((st && (gt = null), (In = 0), (st = !1), 25 <= n)) throw Error(j(301));
    if (((n += 1), (of = P = null), f.updateQueue != null)) {
      var u = f.updateQueue;
      ((u.lastEffect = null),
        (u.events = null),
        (u.stores = null),
        u.memoCache != null && (u.memoCache.index = 0));
    }
    ((D.H = dM), (u = e(a, t)));
  } while (st);
  return u;
}
function uM() {
  var f = D.H,
    e = f.useState()[0];
  return (
    (e = typeof e.then == 'function' ? tu(e) : e),
    (f = f.useState()[0]),
    (P !== null ? P.memoizedState : null) !== f && (z.flags |= 1024),
    e
  );
}
function B1() {
  var f = Li !== 0;
  return ((Li = 0), f);
}
function G1(f, e, a) {
  ((e.updateQueue = f.updateQueue), (e.flags &= -2053), (f.lanes &= ~a));
}
function J1(f) {
  if (Mi) {
    for (f = f.memoizedState; f !== null; ) {
      var e = f.queue;
      (e !== null && (e.pending = null), (f = f.next));
    }
    Mi = !1;
  }
  ((ca = 0), (of = P = z = null), (st = !1), (In = Li = 0), (gt = null));
}
function Af() {
  var f = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (of === null ? (z.memoizedState = of = f) : (of = of.next = f), of);
}
function sf() {
  if (P === null) {
    var f = z.alternate;
    f = f !== null ? f.memoizedState : null;
  } else f = P.next;
  var e = of === null ? z.memoizedState : of.next;
  if (e !== null) ((of = e), (P = f));
  else {
    if (f === null) throw z.alternate === null ? Error(j(467)) : Error(j(310));
    ((P = f),
      (f = {
        memoizedState: P.memoizedState,
        baseState: P.baseState,
        baseQueue: P.baseQueue,
        queue: P.queue,
        next: null,
      }),
      of === null ? (z.memoizedState = of = f) : (of = of.next = f));
  }
  return of;
}
function Z1() {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
}
function tu(f) {
  var e = In;
  return (
    (In += 1),
    gt === null && (gt = []),
    (f = Zd(gt, f, e)),
    (e = z),
    (of === null ? e.memoizedState : of.next) === null &&
      ((e = e.alternate),
      (D.H = e === null || e.memoizedState === null ? js : Cs)),
    f
  );
}
function Ki(f) {
  if (f !== null && typeof f == 'object') {
    if (typeof f.then == 'function') return tu(f);
    if (f.$$typeof === Te) return Sf(f);
  }
  throw Error(j(438, String(f)));
}
function H1(f) {
  var e = null,
    a = z.updateQueue;
  if ((a !== null && (e = a.memoCache), e == null)) {
    var t = z.alternate;
    t !== null &&
      ((t = t.updateQueue),
      t !== null &&
        ((t = t.memoCache),
        t != null &&
          (e = {
            data: t.data.map(function (n) {
              return n.slice();
            }),
            index: 0,
          })));
  }
  if (
    (e == null && (e = { data: [], index: 0 }),
    a === null && ((a = Z1()), (z.updateQueue = a)),
    (a.memoCache = e),
    (a = e.data[e.index]),
    a === void 0)
  )
    for (a = e.data[e.index] = Array(f), t = 0; t < f; t++) a[t] = Zg;
  return (e.index++, a);
}
function Oe(f, e) {
  return typeof e == 'function' ? e(f) : e;
}
function _u(f) {
  var e = sf();
  return _1(e, P, f);
}
function _1(f, e, a) {
  var t = f.queue;
  if (t === null) throw Error(j(311));
  t.lastRenderedReducer = a;
  var n = f.baseQueue,
    u = t.pending;
  if (u !== null) {
    if (n !== null) {
      var i = n.next;
      ((n.next = u.next), (u.next = i));
    }
    ((e.baseQueue = n = u), (t.pending = null));
  }
  if (((u = f.baseState), n === null)) f.memoizedState = u;
  else {
    e = n.next;
    var l = (i = null),
      r = null,
      c = e,
      d = !1;
    do {
      var M = c.lane & -536870913;
      if (M !== c.lane ? (U & M) === M : (ca & M) === M) {
        var s = c.revertLane;
        if (s === 0)
          (r !== null &&
            (r = r.next =
              {
                lane: 0,
                revertLane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              }),
            M === vt && (d = !0));
        else if ((ca & s) === s) {
          ((c = c.next), s === vt && (d = !0));
          continue;
        } else
          ((M = {
            lane: 0,
            revertLane: c.revertLane,
            action: c.action,
            hasEagerState: c.hasEagerState,
            eagerState: c.eagerState,
            next: null,
          }),
            r === null ? ((l = r = M), (i = u)) : (r = r.next = M),
            (z.lanes |= s),
            (da |= s));
        ((M = c.action),
          Aa && a(u, M),
          (u = c.hasEagerState ? c.eagerState : a(u, M)));
      } else
        ((s = {
          lane: M,
          revertLane: c.revertLane,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        }),
          r === null ? ((l = r = s), (i = u)) : (r = r.next = s),
          (z.lanes |= M),
          (da |= M));
      c = c.next;
    } while (c !== null && c !== e);
    if (
      (r === null ? (i = u) : (r.next = l),
      !Pf(u, f.memoizedState) && ((yf = !0), d && ((a = dt), a !== null)))
    )
      throw a;
    ((f.memoizedState = u),
      (f.baseState = i),
      (f.baseQueue = r),
      (t.lastRenderedState = u));
  }
  return (n === null && (t.lanes = 0), [f.memoizedState, t.dispatch]);
}
function Rl(f) {
  var e = sf(),
    a = e.queue;
  if (a === null) throw Error(j(311));
  a.lastRenderedReducer = f;
  var t = a.dispatch,
    n = a.pending,
    u = e.memoizedState;
  if (n !== null) {
    a.pending = null;
    var i = (n = n.next);
    do ((u = f(u, i.action)), (i = i.next));
    while (i !== n);
    (Pf(u, e.memoizedState) || (yf = !0),
      (e.memoizedState = u),
      e.baseQueue === null && (e.baseState = u),
      (a.lastRenderedState = u));
  }
  return [u, t];
}
function Xd(f, e, a) {
  var t = z,
    n = sf(),
    u = G;
  if (u) {
    if (a === void 0) throw Error(j(407));
    a = a();
  } else a = e();
  var i = !Pf((P || n).memoizedState, a);
  (i && ((n.memoizedState = a), (yf = !0)), (n = n.queue));
  var l = Wd.bind(null, t, n, f);
  if (
    (nu(2048, 8, l, [f]),
    n.getSnapshot !== e || i || (of !== null && of.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Ct(9, qi(), qd.bind(null, t, n, a, e), null),
      X === null)
    )
      throw Error(j(349));
    u || ca & 124 || Kd(t, e, a);
  }
  return a;
}
function Kd(f, e, a) {
  ((f.flags |= 16384),
    (f = { getSnapshot: e, value: a }),
    (e = z.updateQueue),
    e === null
      ? ((e = Z1()), (z.updateQueue = e), (e.stores = [f]))
      : ((a = e.stores), a === null ? (e.stores = [f]) : a.push(f)));
}
function qd(f, e, a, t) {
  ((e.value = a), (e.getSnapshot = t), Fd(e) && $d(f));
}
function Wd(f, e, a) {
  return a(function () {
    Fd(e) && $d(f);
  });
}
function Fd(f) {
  var e = f.getSnapshot;
  f = f.value;
  try {
    var a = e();
    return !Pf(f, a);
  } catch {
    return !0;
  }
}
function $d(f) {
  var e = Rt(f, 2);
  e !== null && _f(e, f, 2);
}
function A0(f) {
  var e = Af();
  if (typeof f == 'function') {
    var a = f;
    if (((f = a()), Aa)) {
      We(!0);
      try {
        a();
      } finally {
        We(!1);
      }
    }
  }
  return (
    (e.memoizedState = e.baseState = f),
    (e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Oe,
      lastRenderedState: f,
    }),
    e
  );
}
function fs(f, e, a, t) {
  return ((f.baseState = a), _1(f, P, typeof t == 'function' ? t : Oe));
}
function iM(f, e, a, t, n) {
  if (Wi(f)) throw Error(j(485));
  if (((f = e.action), f !== null)) {
    var u = {
      payload: n,
      action: f,
      next: null,
      isTransition: !0,
      status: 'pending',
      value: null,
      reason: null,
      listeners: [],
      then: function (i) {
        u.listeners.push(i);
      },
    };
    (D.T !== null ? a(!0) : (u.isTransition = !1),
      t(u),
      (a = e.pending),
      a === null
        ? ((u.next = e.pending = u), es(e, u))
        : ((u.next = a.next), (e.pending = a.next = u)));
  }
}
function es(f, e) {
  var a = e.action,
    t = e.payload,
    n = f.state;
  if (e.isTransition) {
    var u = D.T,
      i = {};
    D.T = i;
    try {
      var l = a(n, t),
        r = D.S;
      (r !== null && r(i, l), hc(f, e, l));
    } catch (c) {
      k0(f, e, c);
    } finally {
      D.T = u;
    }
  } else
    try {
      ((u = a(n, t)), hc(f, e, u));
    } catch (c) {
      k0(f, e, c);
    }
}
function hc(f, e, a) {
  a !== null && typeof a == 'object' && typeof a.then == 'function'
    ? a.then(
        function (t) {
          vc(f, e, t);
        },
        function (t) {
          return k0(f, e, t);
        }
      )
    : vc(f, e, a);
}
function vc(f, e, a) {
  ((e.status = 'fulfilled'),
    (e.value = a),
    as(e),
    (f.state = a),
    (e = f.pending),
    e !== null &&
      ((a = e.next),
      a === e ? (f.pending = null) : ((a = a.next), (e.next = a), es(f, a))));
}
function k0(f, e, a) {
  var t = f.pending;
  if (((f.pending = null), t !== null)) {
    t = t.next;
    do ((e.status = 'rejected'), (e.reason = a), as(e), (e = e.next));
    while (e !== t);
  }
  f.action = null;
}
function as(f) {
  f = f.listeners;
  for (var e = 0; e < f.length; e++) (0, f[e])();
}
function ts(f, e) {
  return e;
}
function jc(f, e) {
  if (G) {
    var a = X.formState;
    if (a !== null) {
      f: {
        var t = z;
        if (G) {
          if (tf) {
            e: {
              for (var n = tf, u = Me; n.nodeType !== 8; ) {
                if (!u) {
                  n = null;
                  break e;
                }
                if (((n = ce(n.nextSibling)), n === null)) {
                  n = null;
                  break e;
                }
              }
              ((u = n.data), (n = u === 'F!' || u === 'F' ? n : null));
            }
            if (n) {
              ((tf = ce(n.nextSibling)), (t = n.data === 'F!'));
              break f;
            }
          }
          Ia(t);
        }
        t = !1;
      }
      t && (e = a[0]);
    }
  }
  return (
    (a = Af()),
    (a.memoizedState = a.baseState = e),
    (t = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ts,
      lastRenderedState: e,
    }),
    (a.queue = t),
    (a = ys.bind(null, z, t)),
    (t.dispatch = a),
    (t = A0(!1)),
    (u = K1.bind(null, z, !1, t.queue)),
    (t = Af()),
    (n = { state: e, dispatch: null, action: f, pending: null }),
    (t.queue = n),
    (a = iM.bind(null, z, n, u, a)),
    (n.dispatch = a),
    (t.memoizedState = f),
    [e, a, !1]
  );
}
function Cc(f) {
  var e = sf();
  return ns(e, P, f);
}
function ns(f, e, a) {
  if (
    ((e = _1(f, e, ts)[0]),
    (f = _u(Oe)[0]),
    typeof e == 'object' && e !== null && typeof e.then == 'function')
  )
    try {
      var t = tu(e);
    } catch (i) {
      throw i === au ? Xi : i;
    }
  else t = e;
  e = sf();
  var n = e.queue,
    u = n.dispatch;
  return (
    a !== e.memoizedState &&
      ((z.flags |= 2048), Ct(9, qi(), lM.bind(null, n, a), null)),
    [t, u, f]
  );
}
function lM(f, e) {
  f.action = e;
}
function pc(f) {
  var e = sf(),
    a = P;
  if (a !== null) return ns(e, a, f);
  (sf(), (e = e.memoizedState), (a = sf()));
  var t = a.queue.dispatch;
  return ((a.memoizedState = f), [e, t, !1]);
}
function Ct(f, e, a, t) {
  return (
    (f = { tag: f, create: a, deps: t, inst: e, next: null }),
    (e = z.updateQueue),
    e === null && ((e = Z1()), (z.updateQueue = e)),
    (a = e.lastEffect),
    a === null
      ? (e.lastEffect = f.next = f)
      : ((t = a.next), (a.next = f), (f.next = t), (e.lastEffect = f)),
    f
  );
}
function qi() {
  return { destroy: void 0, resource: void 0 };
}
function us() {
  return sf().memoizedState;
}
function Pu(f, e, a, t) {
  var n = Af();
  ((t = t === void 0 ? null : t),
    (z.flags |= f),
    (n.memoizedState = Ct(1 | e, qi(), a, t)));
}
function nu(f, e, a, t) {
  var n = sf();
  t = t === void 0 ? null : t;
  var u = n.memoizedState.inst;
  P !== null && t !== null && Q1(t, P.memoizedState.deps)
    ? (n.memoizedState = Ct(e, u, a, t))
    : ((z.flags |= f), (n.memoizedState = Ct(1 | e, u, a, t)));
}
function Sc(f, e) {
  Pu(8390656, 8, f, e);
}
function is(f, e) {
  nu(2048, 8, f, e);
}
function ls(f, e) {
  return nu(4, 2, f, e);
}
function rs(f, e) {
  return nu(4, 4, f, e);
}
function cs(f, e) {
  if (typeof e == 'function') {
    f = f();
    var a = e(f);
    return function () {
      typeof a == 'function' ? a() : e(null);
    };
  }
  if (e != null)
    return (
      (f = f()),
      (e.current = f),
      function () {
        e.current = null;
      }
    );
}
function os(f, e, a) {
  ((a = a != null ? a.concat([f]) : null), nu(4, 4, cs.bind(null, e, f), a));
}
function P1() {}
function ds(f, e) {
  var a = sf();
  e = e === void 0 ? null : e;
  var t = a.memoizedState;
  return e !== null && Q1(e, t[1]) ? t[0] : ((a.memoizedState = [f, e]), f);
}
function ss(f, e) {
  var a = sf();
  e = e === void 0 ? null : e;
  var t = a.memoizedState;
  if (e !== null && Q1(e, t[1])) return t[0];
  if (((t = f()), Aa)) {
    We(!0);
    try {
      f();
    } finally {
      We(!1);
    }
  }
  return ((a.memoizedState = [t, e]), t);
}
function V1(f, e, a) {
  return a === void 0 || ca & 1073741824
    ? (f.memoizedState = e)
    : ((f.memoizedState = a), (f = a2()), (z.lanes |= f), (da |= f), a);
}
function gs(f, e, a, t) {
  return Pf(a, e)
    ? a
    : jt.current !== null
      ? ((f = V1(f, a, t)), Pf(f, e) || (yf = !0), f)
      : ca & 42
        ? ((f = a2()), (z.lanes |= f), (da |= f), e)
        : ((yf = !0), (f.memoizedState = a));
}
function Ms(f, e, a, t, n) {
  var u = J.p;
  J.p = u !== 0 && 8 > u ? u : 8;
  var i = D.T,
    l = {};
  ((D.T = l), K1(f, !1, e, a));
  try {
    var r = n(),
      c = D.S;
    if (
      (c !== null && c(l, r),
      r !== null && typeof r == 'object' && typeof r.then == 'function')
    ) {
      var d = tM(r, t);
      bn(f, e, d, Hf(f));
    } else bn(f, e, t, Hf(f));
  } catch (M) {
    bn(f, e, { then: function () {}, status: 'rejected', reason: M }, Hf());
  } finally {
    ((J.p = u), (D.T = i));
  }
}
function rM() {}
function x0(f, e, a, t) {
  if (f.tag !== 5) throw Error(j(476));
  var n = Ls(f).queue;
  Ms(
    f,
    n,
    e,
    Ca,
    a === null
      ? rM
      : function () {
          return (ms(f), a(t));
        }
  );
}
function Ls(f) {
  var e = f.memoizedState;
  if (e !== null) return e;
  e = {
    memoizedState: Ca,
    baseState: Ca,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Oe,
      lastRenderedState: Ca,
    },
    next: null,
  };
  var a = {};
  return (
    (e.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Oe,
        lastRenderedState: a,
      },
      next: null,
    }),
    (f.memoizedState = e),
    (f = f.alternate),
    f !== null && (f.memoizedState = e),
    e
  );
}
function ms(f) {
  var e = Ls(f).next.queue;
  bn(f, e, {}, Hf());
}
function X1() {
  return Sf(Rn);
}
function bs() {
  return sf().memoizedState;
}
function ws() {
  return sf().memoizedState;
}
function cM(f) {
  for (var e = f.return; e !== null; ) {
    switch (e.tag) {
      case 24:
      case 3:
        var a = Hf();
        f = aa(a);
        var t = ta(e, f, a);
        (t !== null && (_f(t, e, a), Mn(t, e, a)),
          (e = { cache: x1() }),
          (f.payload = e));
        return;
    }
    e = e.return;
  }
}
function oM(f, e, a) {
  var t = Hf();
  ((a = {
    lane: t,
    revertLane: 0,
    action: a,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  }),
    Wi(f)
      ? hs(e, a)
      : ((a = I1(f, e, a, t)), a !== null && (_f(a, f, t), vs(a, e, t))));
}
function ys(f, e, a) {
  var t = Hf();
  bn(f, e, a, t);
}
function bn(f, e, a, t) {
  var n = {
    lane: t,
    revertLane: 0,
    action: a,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  };
  if (Wi(f)) hs(e, n);
  else {
    var u = f.alternate;
    if (
      f.lanes === 0 &&
      (u === null || u.lanes === 0) &&
      ((u = e.lastRenderedReducer), u !== null)
    )
      try {
        var i = e.lastRenderedState,
          l = u(i, a);
        if (((n.hasEagerState = !0), (n.eagerState = l), Pf(l, i)))
          return (Vi(f, e, n, 0), X === null && Pi(), !1);
      } catch {
      } finally {
      }
    if (((a = I1(f, e, n, t)), a !== null))
      return (_f(a, f, t), vs(a, e, t), !0);
  }
  return !1;
}
function K1(f, e, a, t) {
  if (
    ((t = {
      lane: 2,
      revertLane: tr(),
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Wi(f))
  ) {
    if (e) throw Error(j(479));
  } else ((e = I1(f, a, t, 2)), e !== null && _f(e, f, 2));
}
function Wi(f) {
  var e = f.alternate;
  return f === z || (e !== null && e === z);
}
function hs(f, e) {
  st = Mi = !0;
  var a = f.pending;
  (a === null ? (e.next = e) : ((e.next = a.next), (a.next = e)),
    (f.pending = e));
}
function vs(f, e, a) {
  if (a & 4194048) {
    var t = e.lanes;
    ((t &= f.pendingLanes), (a |= t), (e.lanes = a), dd(f, a));
  }
}
var mi = {
    readContext: Sf,
    use: Ki,
    useCallback: rf,
    useContext: rf,
    useEffect: rf,
    useImperativeHandle: rf,
    useLayoutEffect: rf,
    useInsertionEffect: rf,
    useMemo: rf,
    useReducer: rf,
    useRef: rf,
    useState: rf,
    useDebugValue: rf,
    useDeferredValue: rf,
    useTransition: rf,
    useSyncExternalStore: rf,
    useId: rf,
    useHostTransitionStatus: rf,
    useFormState: rf,
    useActionState: rf,
    useOptimistic: rf,
    useMemoCache: rf,
    useCacheRefresh: rf,
  },
  js = {
    readContext: Sf,
    use: Ki,
    useCallback: function (f, e) {
      return ((Af().memoizedState = [f, e === void 0 ? null : e]), f);
    },
    useContext: Sf,
    useEffect: Sc,
    useImperativeHandle: function (f, e, a) {
      ((a = a != null ? a.concat([f]) : null),
        Pu(4194308, 4, cs.bind(null, e, f), a));
    },
    useLayoutEffect: function (f, e) {
      return Pu(4194308, 4, f, e);
    },
    useInsertionEffect: function (f, e) {
      Pu(4, 2, f, e);
    },
    useMemo: function (f, e) {
      var a = Af();
      e = e === void 0 ? null : e;
      var t = f();
      if (Aa) {
        We(!0);
        try {
          f();
        } finally {
          We(!1);
        }
      }
      return ((a.memoizedState = [t, e]), t);
    },
    useReducer: function (f, e, a) {
      var t = Af();
      if (a !== void 0) {
        var n = a(e);
        if (Aa) {
          We(!0);
          try {
            a(e);
          } finally {
            We(!1);
          }
        }
      } else n = e;
      return (
        (t.memoizedState = t.baseState = n),
        (f = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: f,
          lastRenderedState: n,
        }),
        (t.queue = f),
        (f = f.dispatch = oM.bind(null, z, f)),
        [t.memoizedState, f]
      );
    },
    useRef: function (f) {
      var e = Af();
      return ((f = { current: f }), (e.memoizedState = f));
    },
    useState: function (f) {
      f = A0(f);
      var e = f.queue,
        a = ys.bind(null, z, e);
      return ((e.dispatch = a), [f.memoizedState, a]);
    },
    useDebugValue: P1,
    useDeferredValue: function (f, e) {
      var a = Af();
      return V1(a, f, e);
    },
    useTransition: function () {
      var f = A0(!1);
      return (
        (f = Ms.bind(null, z, f.queue, !0, !1)),
        (Af().memoizedState = f),
        [!1, f]
      );
    },
    useSyncExternalStore: function (f, e, a) {
      var t = z,
        n = Af();
      if (G) {
        if (a === void 0) throw Error(j(407));
        a = a();
      } else {
        if (((a = e()), X === null)) throw Error(j(349));
        U & 124 || Kd(t, e, a);
      }
      n.memoizedState = a;
      var u = { value: a, getSnapshot: e };
      return (
        (n.queue = u),
        Sc(Wd.bind(null, t, u, f), [f]),
        (t.flags |= 2048),
        Ct(9, qi(), qd.bind(null, t, u, a, e), null),
        a
      );
    },
    useId: function () {
      var f = Af(),
        e = X.identifierPrefix;
      if (G) {
        var a = Ee,
          t = De;
        ((a = (t & ~(1 << (32 - Zf(t) - 1))).toString(32) + a),
          (e = '«' + e + 'R' + a),
          (a = Li++),
          0 < a && (e += 'H' + a.toString(32)),
          (e += '»'));
      } else ((a = nM++), (e = '«' + e + 'r' + a.toString(32) + '»'));
      return (f.memoizedState = e);
    },
    useHostTransitionStatus: X1,
    useFormState: jc,
    useActionState: jc,
    useOptimistic: function (f) {
      var e = Af();
      e.memoizedState = e.baseState = f;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (e.queue = a),
        (e = K1.bind(null, z, !0, a)),
        (a.dispatch = e),
        [f, e]
      );
    },
    useMemoCache: H1,
    useCacheRefresh: function () {
      return (Af().memoizedState = cM.bind(null, z));
    },
  },
  Cs = {
    readContext: Sf,
    use: Ki,
    useCallback: ds,
    useContext: Sf,
    useEffect: is,
    useImperativeHandle: os,
    useInsertionEffect: ls,
    useLayoutEffect: rs,
    useMemo: ss,
    useReducer: _u,
    useRef: us,
    useState: function () {
      return _u(Oe);
    },
    useDebugValue: P1,
    useDeferredValue: function (f, e) {
      var a = sf();
      return gs(a, P.memoizedState, f, e);
    },
    useTransition: function () {
      var f = _u(Oe)[0],
        e = sf().memoizedState;
      return [typeof f == 'boolean' ? f : tu(f), e];
    },
    useSyncExternalStore: Xd,
    useId: bs,
    useHostTransitionStatus: X1,
    useFormState: Cc,
    useActionState: Cc,
    useOptimistic: function (f, e) {
      var a = sf();
      return fs(a, P, f, e);
    },
    useMemoCache: H1,
    useCacheRefresh: ws,
  },
  dM = {
    readContext: Sf,
    use: Ki,
    useCallback: ds,
    useContext: Sf,
    useEffect: is,
    useImperativeHandle: os,
    useInsertionEffect: ls,
    useLayoutEffect: rs,
    useMemo: ss,
    useReducer: Rl,
    useRef: us,
    useState: function () {
      return Rl(Oe);
    },
    useDebugValue: P1,
    useDeferredValue: function (f, e) {
      var a = sf();
      return P === null ? V1(a, f, e) : gs(a, P.memoizedState, f, e);
    },
    useTransition: function () {
      var f = Rl(Oe)[0],
        e = sf().memoizedState;
      return [typeof f == 'boolean' ? f : tu(f), e];
    },
    useSyncExternalStore: Xd,
    useId: bs,
    useHostTransitionStatus: X1,
    useFormState: pc,
    useActionState: pc,
    useOptimistic: function (f, e) {
      var a = sf();
      return P !== null
        ? fs(a, P, f, e)
        : ((a.baseState = f), [f, a.queue.dispatch]);
    },
    useMemoCache: H1,
    useCacheRefresh: ws,
  },
  Mt = null,
  zn = 0;
function Du(f) {
  var e = zn;
  return ((zn += 1), Mt === null && (Mt = []), Zd(Mt, f, e));
}
function Xt(f, e) {
  ((e = e.props.ref), (f.ref = e !== void 0 ? e : null));
}
function Eu(f, e) {
  throw e.$$typeof === Gg
    ? Error(j(525))
    : ((f = Object.prototype.toString.call(e)),
      Error(
        j(
          31,
          f === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : f
        )
      ));
}
function Nc(f) {
  var e = f._init;
  return e(f._payload);
}
function ps(f) {
  function e(L, g) {
    if (f) {
      var m = L.deletions;
      m === null ? ((L.deletions = [g]), (L.flags |= 16)) : m.push(g);
    }
  }
  function a(L, g) {
    if (!f) return null;
    for (; g !== null; ) (e(L, g), (g = g.sibling));
    return null;
  }
  function t(L) {
    for (var g = new Map(); L !== null; )
      (L.key !== null ? g.set(L.key, L) : g.set(L.index, L), (L = L.sibling));
    return g;
  }
  function n(L, g) {
    return ((L = Ae(L, g)), (L.index = 0), (L.sibling = null), L);
  }
  function u(L, g, m) {
    return (
      (L.index = m),
      f
        ? ((m = L.alternate),
          m !== null
            ? ((m = m.index), m < g ? ((L.flags |= 67108866), g) : m)
            : ((L.flags |= 67108866), g))
        : ((L.flags |= 1048576), g)
    );
  }
  function i(L) {
    return (f && L.alternate === null && (L.flags |= 67108866), L);
  }
  function l(L, g, m, w) {
    return g === null || g.tag !== 6
      ? ((g = Al(m, L.mode, w)), (g.return = L), g)
      : ((g = n(g, m)), (g.return = L), g);
  }
  function r(L, g, m, w) {
    var C = m.type;
    return C === qa
      ? d(L, g, m.props.children, w, m.key)
      : g !== null &&
          (g.elementType === C ||
            (typeof C == 'object' &&
              C !== null &&
              C.$$typeof === _e &&
              Nc(C) === g.type))
        ? ((g = n(g, m.props)), Xt(g, m), (g.return = L), g)
        : ((g = Zu(m.type, m.key, m.props, null, L.mode, w)),
          Xt(g, m),
          (g.return = L),
          g);
  }
  function c(L, g, m, w) {
    return g === null ||
      g.tag !== 4 ||
      g.stateNode.containerInfo !== m.containerInfo ||
      g.stateNode.implementation !== m.implementation
      ? ((g = kl(m, L.mode, w)), (g.return = L), g)
      : ((g = n(g, m.children || [])), (g.return = L), g);
  }
  function d(L, g, m, w, C) {
    return g === null || g.tag !== 7
      ? ((g = pa(m, L.mode, w, C)), (g.return = L), g)
      : ((g = n(g, m)), (g.return = L), g);
  }
  function M(L, g, m) {
    if (
      (typeof g == 'string' && g !== '') ||
      typeof g == 'number' ||
      typeof g == 'bigint'
    )
      return ((g = Al('' + g, L.mode, m)), (g.return = L), g);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case vu:
          return (
            (m = Zu(g.type, g.key, g.props, null, L.mode, m)),
            Xt(m, g),
            (m.return = L),
            m
          );
        case en:
          return ((g = kl(g, L.mode, m)), (g.return = L), g);
        case _e:
          var w = g._init;
          return ((g = w(g._payload)), M(L, g, m));
      }
      if (an(g) || Ht(g))
        return ((g = pa(g, L.mode, m, null)), (g.return = L), g);
      if (typeof g.then == 'function') return M(L, Du(g), m);
      if (g.$$typeof === Te) return M(L, Nu(L, g), m);
      Eu(L, g);
    }
    return null;
  }
  function s(L, g, m, w) {
    var C = g !== null ? g.key : null;
    if (
      (typeof m == 'string' && m !== '') ||
      typeof m == 'number' ||
      typeof m == 'bigint'
    )
      return C !== null ? null : l(L, g, '' + m, w);
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case vu:
          return m.key === C ? r(L, g, m, w) : null;
        case en:
          return m.key === C ? c(L, g, m, w) : null;
        case _e:
          return ((C = m._init), (m = C(m._payload)), s(L, g, m, w));
      }
      if (an(m) || Ht(m)) return C !== null ? null : d(L, g, m, w, null);
      if (typeof m.then == 'function') return s(L, g, Du(m), w);
      if (m.$$typeof === Te) return s(L, g, Nu(L, m), w);
      Eu(L, m);
    }
    return null;
  }
  function b(L, g, m, w, C) {
    if (
      (typeof w == 'string' && w !== '') ||
      typeof w == 'number' ||
      typeof w == 'bigint'
    )
      return ((L = L.get(m) || null), l(g, L, '' + w, C));
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case vu:
          return (
            (L = L.get(w.key === null ? m : w.key) || null),
            r(g, L, w, C)
          );
        case en:
          return (
            (L = L.get(w.key === null ? m : w.key) || null),
            c(g, L, w, C)
          );
        case _e:
          var S = w._init;
          return ((w = S(w._payload)), b(L, g, m, w, C));
      }
      if (an(w) || Ht(w)) return ((L = L.get(m) || null), d(g, L, w, C, null));
      if (typeof w.then == 'function') return b(L, g, m, Du(w), C);
      if (w.$$typeof === Te) return b(L, g, m, Nu(g, w), C);
      Eu(g, w);
    }
    return null;
  }
  function y(L, g, m, w) {
    for (
      var C = null, S = null, p = g, T = (g = 0), B = null;
      p !== null && T < m.length;
      T++
    ) {
      p.index > T ? ((B = p), (p = null)) : (B = p.sibling);
      var E = s(L, p, m[T], w);
      if (E === null) {
        p === null && (p = B);
        break;
      }
      (f && p && E.alternate === null && e(L, p),
        (g = u(E, g, T)),
        S === null ? (C = E) : (S.sibling = E),
        (S = E),
        (p = B));
    }
    if (T === m.length) return (a(L, p), G && va(L, T), C);
    if (p === null) {
      for (; T < m.length; T++)
        ((p = M(L, m[T], w)),
          p !== null &&
            ((g = u(p, g, T)),
            S === null ? (C = p) : (S.sibling = p),
            (S = p)));
      return (G && va(L, T), C);
    }
    for (p = t(p); T < m.length; T++)
      ((B = b(p, L, T, m[T], w)),
        B !== null &&
          (f && B.alternate !== null && p.delete(B.key === null ? T : B.key),
          (g = u(B, g, T)),
          S === null ? (C = B) : (S.sibling = B),
          (S = B)));
    return (
      f &&
        p.forEach(function (Tf) {
          return e(L, Tf);
        }),
      G && va(L, T),
      C
    );
  }
  function h(L, g, m, w) {
    if (m == null) throw Error(j(151));
    for (
      var C = null, S = null, p = g, T = (g = 0), B = null, E = m.next();
      p !== null && !E.done;
      T++, E = m.next()
    ) {
      p.index > T ? ((B = p), (p = null)) : (B = p.sibling);
      var Tf = s(L, p, E.value, w);
      if (Tf === null) {
        p === null && (p = B);
        break;
      }
      (f && p && Tf.alternate === null && e(L, p),
        (g = u(Tf, g, T)),
        S === null ? (C = Tf) : (S.sibling = Tf),
        (S = Tf),
        (p = B));
    }
    if (E.done) return (a(L, p), G && va(L, T), C);
    if (p === null) {
      for (; !E.done; T++, E = m.next())
        ((E = M(L, E.value, w)),
          E !== null &&
            ((g = u(E, g, T)),
            S === null ? (C = E) : (S.sibling = E),
            (S = E)));
      return (G && va(L, T), C);
    }
    for (p = t(p); !E.done; T++, E = m.next())
      ((E = b(p, L, T, E.value, w)),
        E !== null &&
          (f && E.alternate !== null && p.delete(E.key === null ? T : E.key),
          (g = u(E, g, T)),
          S === null ? (C = E) : (S.sibling = E),
          (S = E)));
    return (
      f &&
        p.forEach(function (Ge) {
          return e(L, Ge);
        }),
      G && va(L, T),
      C
    );
  }
  function v(L, g, m, w) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === qa &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case vu:
          f: {
            for (var C = m.key; g !== null; ) {
              if (g.key === C) {
                if (((C = m.type), C === qa)) {
                  if (g.tag === 7) {
                    (a(L, g.sibling),
                      (w = n(g, m.props.children)),
                      (w.return = L),
                      (L = w));
                    break f;
                  }
                } else if (
                  g.elementType === C ||
                  (typeof C == 'object' &&
                    C !== null &&
                    C.$$typeof === _e &&
                    Nc(C) === g.type)
                ) {
                  (a(L, g.sibling),
                    (w = n(g, m.props)),
                    Xt(w, m),
                    (w.return = L),
                    (L = w));
                  break f;
                }
                a(L, g);
                break;
              } else e(L, g);
              g = g.sibling;
            }
            m.type === qa
              ? ((w = pa(m.props.children, L.mode, w, m.key)),
                (w.return = L),
                (L = w))
              : ((w = Zu(m.type, m.key, m.props, null, L.mode, w)),
                Xt(w, m),
                (w.return = L),
                (L = w));
          }
          return i(L);
        case en:
          f: {
            for (C = m.key; g !== null; ) {
              if (g.key === C)
                if (
                  g.tag === 4 &&
                  g.stateNode.containerInfo === m.containerInfo &&
                  g.stateNode.implementation === m.implementation
                ) {
                  (a(L, g.sibling),
                    (w = n(g, m.children || [])),
                    (w.return = L),
                    (L = w));
                  break f;
                } else {
                  a(L, g);
                  break;
                }
              else e(L, g);
              g = g.sibling;
            }
            ((w = kl(m, L.mode, w)), (w.return = L), (L = w));
          }
          return i(L);
        case _e:
          return ((C = m._init), (m = C(m._payload)), v(L, g, m, w));
      }
      if (an(m)) return y(L, g, m, w);
      if (Ht(m)) {
        if (((C = Ht(m)), typeof C != 'function')) throw Error(j(150));
        return ((m = C.call(m)), h(L, g, m, w));
      }
      if (typeof m.then == 'function') return v(L, g, Du(m), w);
      if (m.$$typeof === Te) return v(L, g, Nu(L, m), w);
      Eu(L, m);
    }
    return (typeof m == 'string' && m !== '') ||
      typeof m == 'number' ||
      typeof m == 'bigint'
      ? ((m = '' + m),
        g !== null && g.tag === 6
          ? (a(L, g.sibling), (w = n(g, m)), (w.return = L), (L = w))
          : (a(L, g), (w = Al(m, L.mode, w)), (w.return = L), (L = w)),
        i(L))
      : a(L, g);
  }
  return function (L, g, m, w) {
    try {
      zn = 0;
      var C = v(L, g, m, w);
      return ((Mt = null), C);
    } catch (p) {
      if (p === au || p === Xi) throw p;
      var S = Bf(29, p, null, L.mode);
      return ((S.lanes = w), (S.return = L), S);
    } finally {
    }
  };
}
var pt = ps(!0),
  Ss = ps(!1),
  te = he(null),
  we = null;
function Xe(f) {
  var e = f.alternate;
  (F(Mf, Mf.current & 1),
    F(te, f),
    we === null &&
      (e === null || jt.current !== null || e.memoizedState !== null) &&
      (we = f));
}
function Ns(f) {
  if (f.tag === 22) {
    if ((F(Mf, Mf.current), F(te, f), we === null)) {
      var e = f.alternate;
      e !== null && e.memoizedState !== null && (we = f);
    }
  } else Ke();
}
function Ke() {
  (F(Mf, Mf.current), F(te, te.current));
}
function ze(f) {
  (hf(te), we === f && (we = null), hf(Mf));
}
var Mf = he(0);
function bi(f) {
  for (var e = f; e !== null; ) {
    if (e.tag === 13) {
      var a = e.memoizedState;
      if (
        a !== null &&
        ((a = a.dehydrated), a === null || a.data === '$?' || W0(a))
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      ((e.child.return = e), (e = e.child));
      continue;
    }
    if (e === f) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === f) return null;
      e = e.return;
    }
    ((e.sibling.return = e.return), (e = e.sibling));
  }
  return null;
}
function Ol(f, e, a, t) {
  ((e = f.memoizedState),
    (a = a(t, e)),
    (a = a == null ? e : K({}, e, a)),
    (f.memoizedState = a),
    f.lanes === 0 && (f.updateQueue.baseState = a));
}
var R0 = {
  enqueueSetState: function (f, e, a) {
    f = f._reactInternals;
    var t = Hf(),
      n = aa(t);
    ((n.payload = e),
      a != null && (n.callback = a),
      (e = ta(f, n, t)),
      e !== null && (_f(e, f, t), Mn(e, f, t)));
  },
  enqueueReplaceState: function (f, e, a) {
    f = f._reactInternals;
    var t = Hf(),
      n = aa(t);
    ((n.tag = 1),
      (n.payload = e),
      a != null && (n.callback = a),
      (e = ta(f, n, t)),
      e !== null && (_f(e, f, t), Mn(e, f, t)));
  },
  enqueueForceUpdate: function (f, e) {
    f = f._reactInternals;
    var a = Hf(),
      t = aa(a);
    ((t.tag = 2),
      e != null && (t.callback = e),
      (e = ta(f, t, a)),
      e !== null && (_f(e, f, a), Mn(e, f, a)));
  },
};
function Tc(f, e, a, t, n, u, i) {
  return (
    (f = f.stateNode),
    typeof f.shouldComponentUpdate == 'function'
      ? f.shouldComponentUpdate(t, u, i)
      : e.prototype && e.prototype.isPureReactComponent
        ? !Dn(a, t) || !Dn(n, u)
        : !0
  );
}
function Dc(f, e, a, t) {
  ((f = e.state),
    typeof e.componentWillReceiveProps == 'function' &&
      e.componentWillReceiveProps(a, t),
    typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
      e.UNSAFE_componentWillReceiveProps(a, t),
    e.state !== f && R0.enqueueReplaceState(e, e.state, null));
}
function ka(f, e) {
  var a = e;
  if ('ref' in e) {
    a = {};
    for (var t in e) t !== 'ref' && (a[t] = e[t]);
  }
  if ((f = f.defaultProps)) {
    a === e && (a = K({}, a));
    for (var n in f) a[n] === void 0 && (a[n] = f[n]);
  }
  return a;
}
var wi =
  typeof reportError == 'function'
    ? reportError
    : function (f) {
        if (
          typeof window == 'object' &&
          typeof window.ErrorEvent == 'function'
        ) {
          var e = new window.ErrorEvent('error', {
            bubbles: !0,
            cancelable: !0,
            message:
              typeof f == 'object' && f !== null && typeof f.message == 'string'
                ? String(f.message)
                : String(f),
            error: f,
          });
          if (!window.dispatchEvent(e)) return;
        } else if (
          typeof process == 'object' &&
          typeof process.emit == 'function'
        ) {
          process.emit('uncaughtException', f);
          return;
        }
        console.error(f);
      };
function Ts(f) {
  wi(f);
}
function Ds(f) {
  console.error(f);
}
function Es(f) {
  wi(f);
}
function yi(f, e) {
  try {
    var a = f.onUncaughtError;
    a(e.value, { componentStack: e.stack });
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
function Ec(f, e, a) {
  try {
    var t = f.onCaughtError;
    t(a.value, {
      componentStack: a.stack,
      errorBoundary: e.tag === 1 ? e.stateNode : null,
    });
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
function O0(f, e, a) {
  return (
    (a = aa(a)),
    (a.tag = 3),
    (a.payload = { element: null }),
    (a.callback = function () {
      yi(f, e);
    }),
    a
  );
}
function Is(f) {
  return ((f = aa(f)), (f.tag = 3), f);
}
function zs(f, e, a, t) {
  var n = a.type.getDerivedStateFromError;
  if (typeof n == 'function') {
    var u = t.value;
    ((f.payload = function () {
      return n(u);
    }),
      (f.callback = function () {
        Ec(e, a, t);
      }));
  }
  var i = a.stateNode;
  i !== null &&
    typeof i.componentDidCatch == 'function' &&
    (f.callback = function () {
      (Ec(e, a, t),
        typeof n != 'function' &&
          (na === null ? (na = new Set([this])) : na.add(this)));
      var l = t.stack;
      this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' });
    });
}
function sM(f, e, a, t, n) {
  if (
    ((a.flags |= 32768),
    t !== null && typeof t == 'object' && typeof t.then == 'function')
  ) {
    if (
      ((e = a.alternate),
      e !== null && fu(e, a, n, !0),
      (a = te.current),
      a !== null)
    ) {
      switch (a.tag) {
        case 13:
          return (
            we === null ? H0() : a.alternate === null && nf === 0 && (nf = 3),
            (a.flags &= -257),
            (a.flags |= 65536),
            (a.lanes = n),
            t === D0
              ? (a.flags |= 16384)
              : ((e = a.updateQueue),
                e === null ? (a.updateQueue = new Set([t])) : e.add(t),
                Vl(f, t, n)),
            !1
          );
        case 22:
          return (
            (a.flags |= 65536),
            t === D0
              ? (a.flags |= 16384)
              : ((e = a.updateQueue),
                e === null
                  ? ((e = {
                      transitions: null,
                      markerInstances: null,
                      retryQueue: new Set([t]),
                    }),
                    (a.updateQueue = e))
                  : ((a = e.retryQueue),
                    a === null ? (e.retryQueue = new Set([t])) : a.add(t)),
                Vl(f, t, n)),
            !1
          );
      }
      throw Error(j(435, a.tag));
    }
    return (Vl(f, t, n), H0(), !1);
  }
  if (G)
    return (
      (e = te.current),
      e !== null
        ? (!(e.flags & 65536) && (e.flags |= 256),
          (e.flags |= 65536),
          (e.lanes = n),
          t !== C0 && ((f = Error(j(422), { cause: t })), En(fe(f, a))))
        : (t !== C0 && ((e = Error(j(423), { cause: t })), En(fe(e, a))),
          (f = f.current.alternate),
          (f.flags |= 65536),
          (n &= -n),
          (f.lanes |= n),
          (t = fe(t, a)),
          (n = O0(f.stateNode, t, n)),
          xl(f, n),
          nf !== 4 && (nf = 2)),
      !1
    );
  var u = Error(j(520), { cause: t });
  if (
    ((u = fe(u, a)),
    hn === null ? (hn = [u]) : hn.push(u),
    nf !== 4 && (nf = 2),
    e === null)
  )
    return !0;
  ((t = fe(t, a)), (a = e));
  do {
    switch (a.tag) {
      case 3:
        return (
          (a.flags |= 65536),
          (f = n & -n),
          (a.lanes |= f),
          (f = O0(a.stateNode, t, f)),
          xl(a, f),
          !1
        );
      case 1:
        if (
          ((e = a.type),
          (u = a.stateNode),
          (a.flags & 128) === 0 &&
            (typeof e.getDerivedStateFromError == 'function' ||
              (u !== null &&
                typeof u.componentDidCatch == 'function' &&
                (na === null || !na.has(u)))))
        )
          return (
            (a.flags |= 65536),
            (n &= -n),
            (a.lanes |= n),
            (n = Is(n)),
            zs(n, f, a, t),
            xl(a, n),
            !1
          );
    }
    a = a.return;
  } while (a !== null);
  return !1;
}
var As = Error(j(461)),
  yf = !1;
function vf(f, e, a, t) {
  e.child = f === null ? Ss(e, null, a, t) : pt(e, f.child, a, t);
}
function Ic(f, e, a, t, n) {
  a = a.render;
  var u = e.ref;
  if ('ref' in t) {
    var i = {};
    for (var l in t) l !== 'ref' && (i[l] = t[l]);
  } else i = t;
  return (
    za(e),
    (t = U1(f, e, a, i, u, n)),
    (l = B1()),
    f !== null && !yf
      ? (G1(f, e, n), Ye(f, e, n))
      : (G && l && A1(e), (e.flags |= 1), vf(f, e, t, n), e.child)
  );
}
function zc(f, e, a, t, n) {
  if (f === null) {
    var u = a.type;
    return typeof u == 'function' &&
      !z1(u) &&
      u.defaultProps === void 0 &&
      a.compare === null
      ? ((e.tag = 15), (e.type = u), ks(f, e, u, t, n))
      : ((f = Zu(a.type, null, t, e, e.mode, n)),
        (f.ref = e.ref),
        (f.return = e),
        (e.child = f));
  }
  if (((u = f.child), !q1(f, n))) {
    var i = u.memoizedProps;
    if (
      ((a = a.compare), (a = a !== null ? a : Dn), a(i, t) && f.ref === e.ref)
    )
      return Ye(f, e, n);
  }
  return (
    (e.flags |= 1),
    (f = Ae(u, t)),
    (f.ref = e.ref),
    (f.return = e),
    (e.child = f)
  );
}
function ks(f, e, a, t, n) {
  if (f !== null) {
    var u = f.memoizedProps;
    if (Dn(u, t) && f.ref === e.ref)
      if (((yf = !1), (e.pendingProps = t = u), q1(f, n)))
        f.flags & 131072 && (yf = !0);
      else return ((e.lanes = f.lanes), Ye(f, e, n));
  }
  return Y0(f, e, a, t, n);
}
function xs(f, e, a) {
  var t = e.pendingProps,
    n = t.children,
    u = f !== null ? f.memoizedState : null;
  if (t.mode === 'hidden') {
    if (e.flags & 128) {
      if (((t = u !== null ? u.baseLanes | a : a), f !== null)) {
        for (n = e.child = f.child, u = 0; n !== null; )
          ((u = u | n.lanes | n.childLanes), (n = n.sibling));
        e.childLanes = u & ~t;
      } else ((e.childLanes = 0), (e.child = null));
      return Ac(f, e, t, a);
    }
    if (a & 536870912)
      ((e.memoizedState = { baseLanes: 0, cachePool: null }),
        f !== null && Hu(e, u !== null ? u.cachePool : null),
        u !== null ? yc(e, u) : z0(),
        Ns(e));
    else
      return (
        (e.lanes = e.childLanes = 536870912),
        Ac(f, e, u !== null ? u.baseLanes | a : a, a)
      );
  } else
    u !== null
      ? (Hu(e, u.cachePool), yc(e, u), Ke(), (e.memoizedState = null))
      : (f !== null && Hu(e, null), z0(), Ke());
  return (vf(f, e, n, a), e.child);
}
function Ac(f, e, a, t) {
  var n = R1();
  return (
    (n = n === null ? null : { parent: gf._currentValue, pool: n }),
    (e.memoizedState = { baseLanes: a, cachePool: n }),
    f !== null && Hu(e, null),
    z0(),
    Ns(e),
    f !== null && fu(f, e, t, !0),
    null
  );
}
function Vu(f, e) {
  var a = e.ref;
  if (a === null) f !== null && f.ref !== null && (e.flags |= 4194816);
  else {
    if (typeof a != 'function' && typeof a != 'object') throw Error(j(284));
    (f === null || f.ref !== a) && (e.flags |= 4194816);
  }
}
function Y0(f, e, a, t, n) {
  return (
    za(e),
    (a = U1(f, e, a, t, void 0, n)),
    (t = B1()),
    f !== null && !yf
      ? (G1(f, e, n), Ye(f, e, n))
      : (G && t && A1(e), (e.flags |= 1), vf(f, e, a, n), e.child)
  );
}
function kc(f, e, a, t, n, u) {
  return (
    za(e),
    (e.updateQueue = null),
    (a = Vd(e, t, a, n)),
    Pd(f),
    (t = B1()),
    f !== null && !yf
      ? (G1(f, e, u), Ye(f, e, u))
      : (G && t && A1(e), (e.flags |= 1), vf(f, e, a, u), e.child)
  );
}
function xc(f, e, a, t, n) {
  if ((za(e), e.stateNode === null)) {
    var u = nt,
      i = a.contextType;
    (typeof i == 'object' && i !== null && (u = Sf(i)),
      (u = new a(t, u)),
      (e.memoizedState =
        u.state !== null && u.state !== void 0 ? u.state : null),
      (u.updater = R0),
      (e.stateNode = u),
      (u._reactInternals = e),
      (u = e.stateNode),
      (u.props = t),
      (u.state = e.memoizedState),
      (u.refs = {}),
      O1(e),
      (i = a.contextType),
      (u.context = typeof i == 'object' && i !== null ? Sf(i) : nt),
      (u.state = e.memoizedState),
      (i = a.getDerivedStateFromProps),
      typeof i == 'function' && (Ol(e, a, i, t), (u.state = e.memoizedState)),
      typeof a.getDerivedStateFromProps == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function' ||
        (typeof u.UNSAFE_componentWillMount != 'function' &&
          typeof u.componentWillMount != 'function') ||
        ((i = u.state),
        typeof u.componentWillMount == 'function' && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == 'function' &&
          u.UNSAFE_componentWillMount(),
        i !== u.state && R0.enqueueReplaceState(u, u.state, null),
        mn(e, t, u, n),
        Ln(),
        (u.state = e.memoizedState)),
      typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
      (t = !0));
  } else if (f === null) {
    u = e.stateNode;
    var l = e.memoizedProps,
      r = ka(a, l);
    u.props = r;
    var c = u.context,
      d = a.contextType;
    ((i = nt), typeof d == 'object' && d !== null && (i = Sf(d)));
    var M = a.getDerivedStateFromProps;
    ((d =
      typeof M == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
      (l = e.pendingProps !== l),
      d ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((l || c !== i) && Dc(e, u, t, i)),
      (Pe = !1));
    var s = e.memoizedState;
    ((u.state = s),
      mn(e, t, u, n),
      Ln(),
      (c = e.memoizedState),
      l || s !== c || Pe
        ? (typeof M == 'function' && (Ol(e, a, M, t), (c = e.memoizedState)),
          (r = Pe || Tc(e, a, r, t, s, c, i))
            ? (d ||
                (typeof u.UNSAFE_componentWillMount != 'function' &&
                  typeof u.componentWillMount != 'function') ||
                (typeof u.componentWillMount == 'function' &&
                  u.componentWillMount(),
                typeof u.UNSAFE_componentWillMount == 'function' &&
                  u.UNSAFE_componentWillMount()),
              typeof u.componentDidMount == 'function' && (e.flags |= 4194308))
            : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
              (e.memoizedProps = t),
              (e.memoizedState = c)),
          (u.props = t),
          (u.state = c),
          (u.context = i),
          (t = r))
        : (typeof u.componentDidMount == 'function' && (e.flags |= 4194308),
          (t = !1)));
  } else {
    ((u = e.stateNode),
      E0(f, e),
      (i = e.memoizedProps),
      (d = ka(a, i)),
      (u.props = d),
      (M = e.pendingProps),
      (s = u.context),
      (c = a.contextType),
      (r = nt),
      typeof c == 'object' && c !== null && (r = Sf(c)),
      (l = a.getDerivedStateFromProps),
      (c =
        typeof l == 'function' ||
        typeof u.getSnapshotBeforeUpdate == 'function') ||
        (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof u.componentWillReceiveProps != 'function') ||
        ((i !== M || s !== r) && Dc(e, u, t, r)),
      (Pe = !1),
      (s = e.memoizedState),
      (u.state = s),
      mn(e, t, u, n),
      Ln());
    var b = e.memoizedState;
    i !== M ||
    s !== b ||
    Pe ||
    (f !== null && f.dependencies !== null && si(f.dependencies))
      ? (typeof l == 'function' && (Ol(e, a, l, t), (b = e.memoizedState)),
        (d =
          Pe ||
          Tc(e, a, d, t, s, b, r) ||
          (f !== null && f.dependencies !== null && si(f.dependencies)))
          ? (c ||
              (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                typeof u.componentWillUpdate != 'function') ||
              (typeof u.componentWillUpdate == 'function' &&
                u.componentWillUpdate(t, b, r),
              typeof u.UNSAFE_componentWillUpdate == 'function' &&
                u.UNSAFE_componentWillUpdate(t, b, r)),
            typeof u.componentDidUpdate == 'function' && (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
          : (typeof u.componentDidUpdate != 'function' ||
              (i === f.memoizedProps && s === f.memoizedState) ||
              (e.flags |= 4),
            typeof u.getSnapshotBeforeUpdate != 'function' ||
              (i === f.memoizedProps && s === f.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = t),
            (e.memoizedState = b)),
        (u.props = t),
        (u.state = b),
        (u.context = r),
        (t = d))
      : (typeof u.componentDidUpdate != 'function' ||
          (i === f.memoizedProps && s === f.memoizedState) ||
          (e.flags |= 4),
        typeof u.getSnapshotBeforeUpdate != 'function' ||
          (i === f.memoizedProps && s === f.memoizedState) ||
          (e.flags |= 1024),
        (t = !1));
  }
  return (
    (u = t),
    Vu(f, e),
    (t = (e.flags & 128) !== 0),
    u || t
      ? ((u = e.stateNode),
        (a =
          t && typeof a.getDerivedStateFromError != 'function'
            ? null
            : u.render()),
        (e.flags |= 1),
        f !== null && t
          ? ((e.child = pt(e, f.child, null, n)), (e.child = pt(e, null, a, n)))
          : vf(f, e, a, n),
        (e.memoizedState = u.state),
        (f = e.child))
      : (f = Ye(f, e, n)),
    f
  );
}
function Rc(f, e, a, t) {
  return ($n(), (e.flags |= 256), vf(f, e, a, t), e.child);
}
var Yl = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
  hydrationErrors: null,
};
function Ql(f) {
  return { baseLanes: f, cachePool: Gd() };
}
function Ul(f, e, a) {
  return ((f = f !== null ? f.childLanes & ~a : 0), e && (f |= ee), f);
}
function Rs(f, e, a) {
  var t = e.pendingProps,
    n = !1,
    u = (e.flags & 128) !== 0,
    i;
  if (
    ((i = u) ||
      (i =
        f !== null && f.memoizedState === null ? !1 : (Mf.current & 2) !== 0),
    i && ((n = !0), (e.flags &= -129)),
    (i = (e.flags & 32) !== 0),
    (e.flags &= -33),
    f === null)
  ) {
    if (G) {
      if ((n ? Xe(e) : Ke(), G)) {
        var l = tf,
          r;
        if ((r = l)) {
          f: {
            for (r = l, l = Me; r.nodeType !== 8; ) {
              if (!l) {
                l = null;
                break f;
              }
              if (((r = ce(r.nextSibling)), r === null)) {
                l = null;
                break f;
              }
            }
            l = r;
          }
          l !== null
            ? ((e.memoizedState = {
                dehydrated: l,
                treeContext: Sa !== null ? { id: De, overflow: Ee } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (r = Bf(18, null, null, 0)),
              (r.stateNode = l),
              (r.return = e),
              (e.child = r),
              (Df = e),
              (tf = null),
              (r = !0))
            : (r = !1);
        }
        r || Ia(e);
      }
      if (
        ((l = e.memoizedState), l !== null && ((l = l.dehydrated), l !== null))
      )
        return (W0(l) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      ze(e);
    }
    return (
      (l = t.children),
      (t = t.fallback),
      n
        ? (Ke(),
          (n = e.mode),
          (l = hi({ mode: 'hidden', children: l }, n)),
          (t = pa(t, n, a, null)),
          (l.return = e),
          (t.return = e),
          (l.sibling = t),
          (e.child = l),
          (n = e.child),
          (n.memoizedState = Ql(a)),
          (n.childLanes = Ul(f, i, a)),
          (e.memoizedState = Yl),
          t)
        : (Xe(e), Q0(e, l))
    );
  }
  if (((r = f.memoizedState), r !== null && ((l = r.dehydrated), l !== null))) {
    if (u)
      e.flags & 256
        ? (Xe(e), (e.flags &= -257), (e = Bl(f, e, a)))
        : e.memoizedState !== null
          ? (Ke(), (e.child = f.child), (e.flags |= 128), (e = null))
          : (Ke(),
            (n = t.fallback),
            (l = e.mode),
            (t = hi({ mode: 'visible', children: t.children }, l)),
            (n = pa(n, l, a, null)),
            (n.flags |= 2),
            (t.return = e),
            (n.return = e),
            (t.sibling = n),
            (e.child = t),
            pt(e, f.child, null, a),
            (t = e.child),
            (t.memoizedState = Ql(a)),
            (t.childLanes = Ul(f, i, a)),
            (e.memoizedState = Yl),
            (e = n));
    else if ((Xe(e), W0(l))) {
      if (((i = l.nextSibling && l.nextSibling.dataset), i)) var c = i.dgst;
      ((i = c),
        (t = Error(j(419))),
        (t.stack = ''),
        (t.digest = i),
        En({ value: t, source: null, stack: null }),
        (e = Bl(f, e, a)));
    } else if (
      (yf || fu(f, e, a, !1), (i = (a & f.childLanes) !== 0), yf || i)
    ) {
      if (
        ((i = X),
        i !== null &&
          ((t = a & -a),
          (t = t & 42 ? 1 : h1(t)),
          (t = t & (i.suspendedLanes | a) ? 0 : t),
          t !== 0 && t !== r.retryLane))
      )
        throw ((r.retryLane = t), Rt(f, t), _f(i, f, t), As);
      (l.data === '$?' || H0(), (e = Bl(f, e, a)));
    } else
      l.data === '$?'
        ? ((e.flags |= 192), (e.child = f.child), (e = null))
        : ((f = r.treeContext),
          (tf = ce(l.nextSibling)),
          (Df = e),
          (G = !0),
          (Na = null),
          (Me = !1),
          f !== null &&
            ((Wf[Ff++] = De),
            (Wf[Ff++] = Ee),
            (Wf[Ff++] = Sa),
            (De = f.id),
            (Ee = f.overflow),
            (Sa = e)),
          (e = Q0(e, t.children)),
          (e.flags |= 4096));
    return e;
  }
  return n
    ? (Ke(),
      (n = t.fallback),
      (l = e.mode),
      (r = f.child),
      (c = r.sibling),
      (t = Ae(r, { mode: 'hidden', children: t.children })),
      (t.subtreeFlags = r.subtreeFlags & 65011712),
      c !== null ? (n = Ae(c, n)) : ((n = pa(n, l, a, null)), (n.flags |= 2)),
      (n.return = e),
      (t.return = e),
      (t.sibling = n),
      (e.child = t),
      (t = n),
      (n = e.child),
      (l = f.child.memoizedState),
      l === null
        ? (l = Ql(a))
        : ((r = l.cachePool),
          r !== null
            ? ((c = gf._currentValue),
              (r = r.parent !== c ? { parent: c, pool: c } : r))
            : (r = Gd()),
          (l = { baseLanes: l.baseLanes | a, cachePool: r })),
      (n.memoizedState = l),
      (n.childLanes = Ul(f, i, a)),
      (e.memoizedState = Yl),
      t)
    : (Xe(e),
      (a = f.child),
      (f = a.sibling),
      (a = Ae(a, { mode: 'visible', children: t.children })),
      (a.return = e),
      (a.sibling = null),
      f !== null &&
        ((i = e.deletions),
        i === null ? ((e.deletions = [f]), (e.flags |= 16)) : i.push(f)),
      (e.child = a),
      (e.memoizedState = null),
      a);
}
function Q0(f, e) {
  return (
    (e = hi({ mode: 'visible', children: e }, f.mode)),
    (e.return = f),
    (f.child = e)
  );
}
function hi(f, e) {
  return (
    (f = Bf(22, f, null, e)),
    (f.lanes = 0),
    (f.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
    }),
    f
  );
}
function Bl(f, e, a) {
  return (
    pt(e, f.child, null, a),
    (f = Q0(e, e.pendingProps.children)),
    (f.flags |= 2),
    (e.memoizedState = null),
    f
  );
}
function Oc(f, e, a) {
  f.lanes |= e;
  var t = f.alternate;
  (t !== null && (t.lanes |= e), S0(f.return, e, a));
}
function Gl(f, e, a, t, n) {
  var u = f.memoizedState;
  u === null
    ? (f.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: t,
        tail: a,
        tailMode: n,
      })
    : ((u.isBackwards = e),
      (u.rendering = null),
      (u.renderingStartTime = 0),
      (u.last = t),
      (u.tail = a),
      (u.tailMode = n));
}
function Os(f, e, a) {
  var t = e.pendingProps,
    n = t.revealOrder,
    u = t.tail;
  if ((vf(f, e, t.children, a), (t = Mf.current), t & 2))
    ((t = (t & 1) | 2), (e.flags |= 128));
  else {
    if (f !== null && f.flags & 128)
      f: for (f = e.child; f !== null; ) {
        if (f.tag === 13) f.memoizedState !== null && Oc(f, a, e);
        else if (f.tag === 19) Oc(f, a, e);
        else if (f.child !== null) {
          ((f.child.return = f), (f = f.child));
          continue;
        }
        if (f === e) break f;
        for (; f.sibling === null; ) {
          if (f.return === null || f.return === e) break f;
          f = f.return;
        }
        ((f.sibling.return = f.return), (f = f.sibling));
      }
    t &= 1;
  }
  switch ((F(Mf, t), n)) {
    case 'forwards':
      for (a = e.child, n = null; a !== null; )
        ((f = a.alternate),
          f !== null && bi(f) === null && (n = a),
          (a = a.sibling));
      ((a = n),
        a === null
          ? ((n = e.child), (e.child = null))
          : ((n = a.sibling), (a.sibling = null)),
        Gl(e, !1, n, a, u));
      break;
    case 'backwards':
      for (a = null, n = e.child, e.child = null; n !== null; ) {
        if (((f = n.alternate), f !== null && bi(f) === null)) {
          e.child = n;
          break;
        }
        ((f = n.sibling), (n.sibling = a), (a = n), (n = f));
      }
      Gl(e, !0, a, null, u);
      break;
    case 'together':
      Gl(e, !1, null, null, void 0);
      break;
    default:
      e.memoizedState = null;
  }
  return e.child;
}
function Ye(f, e, a) {
  if (
    (f !== null && (e.dependencies = f.dependencies),
    (da |= e.lanes),
    !(a & e.childLanes))
  )
    if (f !== null) {
      if ((fu(f, e, a, !1), (a & e.childLanes) === 0)) return null;
    } else return null;
  if (f !== null && e.child !== f.child) throw Error(j(153));
  if (e.child !== null) {
    for (
      f = e.child, a = Ae(f, f.pendingProps), e.child = a, a.return = e;
      f.sibling !== null;

    )
      ((f = f.sibling),
        (a = a.sibling = Ae(f, f.pendingProps)),
        (a.return = e));
    a.sibling = null;
  }
  return e.child;
}
function q1(f, e) {
  return f.lanes & e ? !0 : ((f = f.dependencies), !!(f !== null && si(f)));
}
function gM(f, e, a) {
  switch (e.tag) {
    case 3:
      (ni(e, e.stateNode.containerInfo),
        Ve(e, gf, f.memoizedState.cache),
        $n());
      break;
    case 27:
    case 5:
      g0(e);
      break;
    case 4:
      ni(e, e.stateNode.containerInfo);
      break;
    case 10:
      Ve(e, e.type, e.memoizedProps.value);
      break;
    case 13:
      var t = e.memoizedState;
      if (t !== null)
        return t.dehydrated !== null
          ? (Xe(e), (e.flags |= 128), null)
          : a & e.child.childLanes
            ? Rs(f, e, a)
            : (Xe(e), (f = Ye(f, e, a)), f !== null ? f.sibling : null);
      Xe(e);
      break;
    case 19:
      var n = (f.flags & 128) !== 0;
      if (
        ((t = (a & e.childLanes) !== 0),
        t || (fu(f, e, a, !1), (t = (a & e.childLanes) !== 0)),
        n)
      ) {
        if (t) return Os(f, e, a);
        e.flags |= 128;
      }
      if (
        ((n = e.memoizedState),
        n !== null &&
          ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
        F(Mf, Mf.current),
        t)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((e.lanes = 0), xs(f, e, a));
    case 24:
      Ve(e, gf, f.memoizedState.cache);
  }
  return Ye(f, e, a);
}
function Ys(f, e, a) {
  if (f !== null)
    if (f.memoizedProps !== e.pendingProps) yf = !0;
    else {
      if (!q1(f, a) && !(e.flags & 128)) return ((yf = !1), gM(f, e, a));
      yf = !!(f.flags & 131072);
    }
  else ((yf = !1), G && e.flags & 1048576 && Ud(e, di, e.index));
  switch (((e.lanes = 0), e.tag)) {
    case 16:
      f: {
        f = e.pendingProps;
        var t = e.elementType,
          n = t._init;
        if (((t = n(t._payload)), (e.type = t), typeof t == 'function'))
          z1(t)
            ? ((f = ka(t, f)), (e.tag = 1), (e = xc(null, e, t, f, a)))
            : ((e.tag = 0), (e = Y0(null, e, t, f, a)));
        else {
          if (t != null) {
            if (((n = t.$$typeof), n === b1)) {
              ((e.tag = 11), (e = Ic(null, e, t, f, a)));
              break f;
            } else if (n === w1) {
              ((e.tag = 14), (e = zc(null, e, t, f, a)));
              break f;
            }
          }
          throw ((e = d0(t) || t), Error(j(306, e, '')));
        }
      }
      return e;
    case 0:
      return Y0(f, e, e.type, e.pendingProps, a);
    case 1:
      return ((t = e.type), (n = ka(t, e.pendingProps)), xc(f, e, t, n, a));
    case 3:
      f: {
        if ((ni(e, e.stateNode.containerInfo), f === null)) throw Error(j(387));
        t = e.pendingProps;
        var u = e.memoizedState;
        ((n = u.element), E0(f, e), mn(e, t, null, a));
        var i = e.memoizedState;
        if (
          ((t = i.cache),
          Ve(e, gf, t),
          t !== u.cache && N0(e, [gf], a, !0),
          Ln(),
          (t = i.element),
          u.isDehydrated)
        )
          if (
            ((u = { element: t, isDehydrated: !1, cache: i.cache }),
            (e.updateQueue.baseState = u),
            (e.memoizedState = u),
            e.flags & 256)
          ) {
            e = Rc(f, e, t, a);
            break f;
          } else if (t !== n) {
            ((n = fe(Error(j(424)), e)), En(n), (e = Rc(f, e, t, a)));
            break f;
          } else {
            switch (((f = e.stateNode.containerInfo), f.nodeType)) {
              case 9:
                f = f.body;
                break;
              default:
                f = f.nodeName === 'HTML' ? f.ownerDocument.body : f;
            }
            for (
              tf = ce(f.firstChild),
                Df = e,
                G = !0,
                Na = null,
                Me = !0,
                a = Ss(e, null, t, a),
                e.child = a;
              a;

            )
              ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          }
        else {
          if (($n(), t === n)) {
            e = Ye(f, e, a);
            break f;
          }
          vf(f, e, t, a);
        }
        e = e.child;
      }
      return e;
    case 26:
      return (
        Vu(f, e),
        f === null
          ? (a = $c(e.type, null, e.pendingProps, null))
            ? (e.memoizedState = a)
            : G ||
              ((a = e.type),
              (f = e.pendingProps),
              (t = Ti(ea.current).createElement(a)),
              (t[pf] = e),
              (t[Rf] = f),
              Cf(t, a, f),
              wf(t),
              (e.stateNode = t))
          : (e.memoizedState = $c(
              e.type,
              f.memoizedProps,
              e.pendingProps,
              f.memoizedState
            )),
        null
      );
    case 27:
      return (
        g0(e),
        f === null &&
          G &&
          ((t = e.stateNode = C2(e.type, e.pendingProps, ea.current)),
          (Df = e),
          (Me = !0),
          (n = tf),
          Ma(e.type) ? ((F0 = n), (tf = ce(t.firstChild))) : (tf = n)),
        vf(f, e, e.pendingProps.children, a),
        Vu(f, e),
        f === null && (e.flags |= 4194304),
        e.child
      );
    case 5:
      return (
        f === null &&
          G &&
          ((n = t = tf) &&
            ((t = GM(t, e.type, e.pendingProps, Me)),
            t !== null
              ? ((e.stateNode = t),
                (Df = e),
                (tf = ce(t.firstChild)),
                (Me = !1),
                (n = !0))
              : (n = !1)),
          n || Ia(e)),
        g0(e),
        (n = e.type),
        (u = e.pendingProps),
        (i = f !== null ? f.memoizedProps : null),
        (t = u.children),
        K0(n, u) ? (t = null) : i !== null && K0(n, i) && (e.flags |= 32),
        e.memoizedState !== null &&
          ((n = U1(f, e, uM, null, null, a)), (Rn._currentValue = n)),
        Vu(f, e),
        vf(f, e, t, a),
        e.child
      );
    case 6:
      return (
        f === null &&
          G &&
          ((f = a = tf) &&
            ((a = JM(a, e.pendingProps, Me)),
            a !== null
              ? ((e.stateNode = a), (Df = e), (tf = null), (f = !0))
              : (f = !1)),
          f || Ia(e)),
        null
      );
    case 13:
      return Rs(f, e, a);
    case 4:
      return (
        ni(e, e.stateNode.containerInfo),
        (t = e.pendingProps),
        f === null ? (e.child = pt(e, null, t, a)) : vf(f, e, t, a),
        e.child
      );
    case 11:
      return Ic(f, e, e.type, e.pendingProps, a);
    case 7:
      return (vf(f, e, e.pendingProps, a), e.child);
    case 8:
      return (vf(f, e, e.pendingProps.children, a), e.child);
    case 12:
      return (vf(f, e, e.pendingProps.children, a), e.child);
    case 10:
      return (
        (t = e.pendingProps),
        Ve(e, e.type, t.value),
        vf(f, e, t.children, a),
        e.child
      );
    case 9:
      return (
        (n = e.type._context),
        (t = e.pendingProps.children),
        za(e),
        (n = Sf(n)),
        (t = t(n)),
        (e.flags |= 1),
        vf(f, e, t, a),
        e.child
      );
    case 14:
      return zc(f, e, e.type, e.pendingProps, a);
    case 15:
      return ks(f, e, e.type, e.pendingProps, a);
    case 19:
      return Os(f, e, a);
    case 31:
      return (
        (t = e.pendingProps),
        (a = e.mode),
        (t = { mode: t.mode, children: t.children }),
        f === null
          ? ((a = hi(t, a)),
            (a.ref = e.ref),
            (e.child = a),
            (a.return = e),
            (e = a))
          : ((a = Ae(f.child, t)),
            (a.ref = e.ref),
            (e.child = a),
            (a.return = e),
            (e = a)),
        e
      );
    case 22:
      return xs(f, e, a);
    case 24:
      return (
        za(e),
        (t = Sf(gf)),
        f === null
          ? ((n = R1()),
            n === null &&
              ((n = X),
              (u = x1()),
              (n.pooledCache = u),
              u.refCount++,
              u !== null && (n.pooledCacheLanes |= a),
              (n = u)),
            (e.memoizedState = { parent: t, cache: n }),
            O1(e),
            Ve(e, gf, n))
          : (f.lanes & a && (E0(f, e), mn(e, null, null, a), Ln()),
            (n = f.memoizedState),
            (u = e.memoizedState),
            n.parent !== t
              ? ((n = { parent: t, cache: t }),
                (e.memoizedState = n),
                e.lanes === 0 &&
                  (e.memoizedState = e.updateQueue.baseState = n),
                Ve(e, gf, t))
              : ((t = u.cache),
                Ve(e, gf, t),
                t !== n.cache && N0(e, [gf], a, !0))),
        vf(f, e, e.pendingProps.children, a),
        e.child
      );
    case 29:
      throw e.pendingProps;
  }
  throw Error(j(156, e.tag));
}
function pe(f) {
  f.flags |= 4;
}
function Yc(f, e) {
  if (e.type !== 'stylesheet' || e.state.loading & 4) f.flags &= -16777217;
  else if (((f.flags |= 16777216), !N2(e))) {
    if (
      ((e = te.current),
      e !== null &&
        ((U & 4194048) === U
          ? we !== null
          : ((U & 62914560) !== U && !(U & 536870912)) || e !== we))
    )
      throw ((gn = D0), Jd);
    f.flags |= 8192;
  }
}
function Iu(f, e) {
  (e !== null && (f.flags |= 4),
    f.flags & 16384 &&
      ((e = f.tag !== 22 ? cd() : 536870912), (f.lanes |= e), (St |= e)));
}
function Kt(f, e) {
  if (!G)
    switch (f.tailMode) {
      case 'hidden':
        e = f.tail;
        for (var a = null; e !== null; )
          (e.alternate !== null && (a = e), (e = e.sibling));
        a === null ? (f.tail = null) : (a.sibling = null);
        break;
      case 'collapsed':
        a = f.tail;
        for (var t = null; a !== null; )
          (a.alternate !== null && (t = a), (a = a.sibling));
        t === null
          ? e || f.tail === null
            ? (f.tail = null)
            : (f.tail.sibling = null)
          : (t.sibling = null);
    }
}
function ff(f) {
  var e = f.alternate !== null && f.alternate.child === f.child,
    a = 0,
    t = 0;
  if (e)
    for (var n = f.child; n !== null; )
      ((a |= n.lanes | n.childLanes),
        (t |= n.subtreeFlags & 65011712),
        (t |= n.flags & 65011712),
        (n.return = f),
        (n = n.sibling));
  else
    for (n = f.child; n !== null; )
      ((a |= n.lanes | n.childLanes),
        (t |= n.subtreeFlags),
        (t |= n.flags),
        (n.return = f),
        (n = n.sibling));
  return ((f.subtreeFlags |= t), (f.childLanes = a), e);
}
function MM(f, e, a) {
  var t = e.pendingProps;
  switch ((k1(e), e.tag)) {
    case 31:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (ff(e), null);
    case 1:
      return (ff(e), null);
    case 3:
      return (
        (a = e.stateNode),
        (t = null),
        f !== null && (t = f.memoizedState.cache),
        e.memoizedState.cache !== t && (e.flags |= 2048),
        ke(gf),
        wt(),
        a.pendingContext &&
          ((a.context = a.pendingContext), (a.pendingContext = null)),
        (f === null || f.child === null) &&
          (Vt(e)
            ? pe(e)
            : f === null ||
              (f.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), gc())),
        ff(e),
        null
      );
    case 26:
      return (
        (a = e.memoizedState),
        f === null
          ? (pe(e),
            a !== null ? (ff(e), Yc(e, a)) : (ff(e), (e.flags &= -16777217)))
          : a
            ? a !== f.memoizedState
              ? (pe(e), ff(e), Yc(e, a))
              : (ff(e), (e.flags &= -16777217))
            : (f.memoizedProps !== t && pe(e), ff(e), (e.flags &= -16777217)),
        null
      );
    case 27:
      (ui(e), (a = ea.current));
      var n = e.type;
      if (f !== null && e.stateNode != null) f.memoizedProps !== t && pe(e);
      else {
        if (!t) {
          if (e.stateNode === null) throw Error(j(166));
          return (ff(e), null);
        }
        ((f = me.current),
          Vt(e) ? dc(e) : ((f = C2(n, t, a)), (e.stateNode = f), pe(e)));
      }
      return (ff(e), null);
    case 5:
      if ((ui(e), (a = e.type), f !== null && e.stateNode != null))
        f.memoizedProps !== t && pe(e);
      else {
        if (!t) {
          if (e.stateNode === null) throw Error(j(166));
          return (ff(e), null);
        }
        if (((f = me.current), Vt(e))) dc(e);
        else {
          switch (((n = Ti(ea.current)), f)) {
            case 1:
              f = n.createElementNS('http://www.w3.org/2000/svg', a);
              break;
            case 2:
              f = n.createElementNS('http://www.w3.org/1998/Math/MathML', a);
              break;
            default:
              switch (a) {
                case 'svg':
                  f = n.createElementNS('http://www.w3.org/2000/svg', a);
                  break;
                case 'math':
                  f = n.createElementNS(
                    'http://www.w3.org/1998/Math/MathML',
                    a
                  );
                  break;
                case 'script':
                  ((f = n.createElement('div')),
                    (f.innerHTML = '<script><\/script>'),
                    (f = f.removeChild(f.firstChild)));
                  break;
                case 'select':
                  ((f =
                    typeof t.is == 'string'
                      ? n.createElement('select', { is: t.is })
                      : n.createElement('select')),
                    t.multiple
                      ? (f.multiple = !0)
                      : t.size && (f.size = t.size));
                  break;
                default:
                  f =
                    typeof t.is == 'string'
                      ? n.createElement(a, { is: t.is })
                      : n.createElement(a);
              }
          }
          ((f[pf] = e), (f[Rf] = t));
          f: for (n = e.child; n !== null; ) {
            if (n.tag === 5 || n.tag === 6) f.appendChild(n.stateNode);
            else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
              ((n.child.return = n), (n = n.child));
              continue;
            }
            if (n === e) break f;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break f;
              n = n.return;
            }
            ((n.sibling.return = n.return), (n = n.sibling));
          }
          e.stateNode = f;
          f: switch ((Cf(f, a, t), a)) {
            case 'button':
            case 'input':
            case 'select':
            case 'textarea':
              f = !!t.autoFocus;
              break f;
            case 'img':
              f = !0;
              break f;
            default:
              f = !1;
          }
          f && pe(e);
        }
      }
      return (ff(e), (e.flags &= -16777217), null);
    case 6:
      if (f && e.stateNode != null) f.memoizedProps !== t && pe(e);
      else {
        if (typeof t != 'string' && e.stateNode === null) throw Error(j(166));
        if (((f = ea.current), Vt(e))) {
          if (
            ((f = e.stateNode),
            (a = e.memoizedProps),
            (t = null),
            (n = Df),
            n !== null)
          )
            switch (n.tag) {
              case 27:
              case 5:
                t = n.memoizedProps;
            }
          ((f[pf] = e),
            (f = !!(
              f.nodeValue === a ||
              (t !== null && t.suppressHydrationWarning === !0) ||
              h2(f.nodeValue, a)
            )),
            f || Ia(e));
        } else ((f = Ti(f).createTextNode(t)), (f[pf] = e), (e.stateNode = f));
      }
      return (ff(e), null);
    case 13:
      if (
        ((t = e.memoizedState),
        f === null ||
          (f.memoizedState !== null && f.memoizedState.dehydrated !== null))
      ) {
        if (((n = Vt(e)), t !== null && t.dehydrated !== null)) {
          if (f === null) {
            if (!n) throw Error(j(318));
            if (
              ((n = e.memoizedState),
              (n = n !== null ? n.dehydrated : null),
              !n)
            )
              throw Error(j(317));
            n[pf] = e;
          } else
            ($n(),
              !(e.flags & 128) && (e.memoizedState = null),
              (e.flags |= 4));
          (ff(e), (n = !1));
        } else
          ((n = gc()),
            f !== null &&
              f.memoizedState !== null &&
              (f.memoizedState.hydrationErrors = n),
            (n = !0));
        if (!n) return e.flags & 256 ? (ze(e), e) : (ze(e), null);
      }
      if ((ze(e), e.flags & 128)) return ((e.lanes = a), e);
      if (((a = t !== null), (f = f !== null && f.memoizedState !== null), a)) {
        ((t = e.child),
          (n = null),
          t.alternate !== null &&
            t.alternate.memoizedState !== null &&
            t.alternate.memoizedState.cachePool !== null &&
            (n = t.alternate.memoizedState.cachePool.pool));
        var u = null;
        (t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (u = t.memoizedState.cachePool.pool),
          u !== n && (t.flags |= 2048));
      }
      return (
        a !== f && a && (e.child.flags |= 8192),
        Iu(e, e.updateQueue),
        ff(e),
        null
      );
    case 4:
      return (wt(), f === null && nr(e.stateNode.containerInfo), ff(e), null);
    case 10:
      return (ke(e.type), ff(e), null);
    case 19:
      if ((hf(Mf), (n = e.memoizedState), n === null)) return (ff(e), null);
      if (((t = (e.flags & 128) !== 0), (u = n.rendering), u === null))
        if (t) Kt(n, !1);
        else {
          if (nf !== 0 || (f !== null && f.flags & 128))
            for (f = e.child; f !== null; ) {
              if (((u = bi(f)), u !== null)) {
                for (
                  e.flags |= 128,
                    Kt(n, !1),
                    f = u.updateQueue,
                    e.updateQueue = f,
                    Iu(e, f),
                    e.subtreeFlags = 0,
                    f = a,
                    a = e.child;
                  a !== null;

                )
                  (Qd(a, f), (a = a.sibling));
                return (F(Mf, (Mf.current & 1) | 2), e.child);
              }
              f = f.sibling;
            }
          n.tail !== null &&
            be() > ji &&
            ((e.flags |= 128), (t = !0), Kt(n, !1), (e.lanes = 4194304));
        }
      else {
        if (!t)
          if (((f = bi(u)), f !== null)) {
            if (
              ((e.flags |= 128),
              (t = !0),
              (f = f.updateQueue),
              (e.updateQueue = f),
              Iu(e, f),
              Kt(n, !0),
              n.tail === null && n.tailMode === 'hidden' && !u.alternate && !G)
            )
              return (ff(e), null);
          } else
            2 * be() - n.renderingStartTime > ji &&
              a !== 536870912 &&
              ((e.flags |= 128), (t = !0), Kt(n, !1), (e.lanes = 4194304));
        n.isBackwards
          ? ((u.sibling = e.child), (e.child = u))
          : ((f = n.last),
            f !== null ? (f.sibling = u) : (e.child = u),
            (n.last = u));
      }
      return n.tail !== null
        ? ((e = n.tail),
          (n.rendering = e),
          (n.tail = e.sibling),
          (n.renderingStartTime = be()),
          (e.sibling = null),
          (f = Mf.current),
          F(Mf, t ? (f & 1) | 2 : f & 1),
          e)
        : (ff(e), null);
    case 22:
    case 23:
      return (
        ze(e),
        Y1(),
        (t = e.memoizedState !== null),
        f !== null
          ? (f.memoizedState !== null) !== t && (e.flags |= 8192)
          : t && (e.flags |= 8192),
        t
          ? a & 536870912 &&
            !(e.flags & 128) &&
            (ff(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : ff(e),
        (a = e.updateQueue),
        a !== null && Iu(e, a.retryQueue),
        (a = null),
        f !== null &&
          f.memoizedState !== null &&
          f.memoizedState.cachePool !== null &&
          (a = f.memoizedState.cachePool.pool),
        (t = null),
        e.memoizedState !== null &&
          e.memoizedState.cachePool !== null &&
          (t = e.memoizedState.cachePool.pool),
        t !== a && (e.flags |= 2048),
        f !== null && hf(Ta),
        null
      );
    case 24:
      return (
        (a = null),
        f !== null && (a = f.memoizedState.cache),
        e.memoizedState.cache !== a && (e.flags |= 2048),
        ke(gf),
        ff(e),
        null
      );
    case 25:
      return null;
    case 30:
      return null;
  }
  throw Error(j(156, e.tag));
}
function LM(f, e) {
  switch ((k1(e), e.tag)) {
    case 1:
      return (
        (f = e.flags),
        f & 65536 ? ((e.flags = (f & -65537) | 128), e) : null
      );
    case 3:
      return (
        ke(gf),
        wt(),
        (f = e.flags),
        f & 65536 && !(f & 128) ? ((e.flags = (f & -65537) | 128), e) : null
      );
    case 26:
    case 27:
    case 5:
      return (ui(e), null);
    case 13:
      if ((ze(e), (f = e.memoizedState), f !== null && f.dehydrated !== null)) {
        if (e.alternate === null) throw Error(j(340));
        $n();
      }
      return (
        (f = e.flags),
        f & 65536 ? ((e.flags = (f & -65537) | 128), e) : null
      );
    case 19:
      return (hf(Mf), null);
    case 4:
      return (wt(), null);
    case 10:
      return (ke(e.type), null);
    case 22:
    case 23:
      return (
        ze(e),
        Y1(),
        f !== null && hf(Ta),
        (f = e.flags),
        f & 65536 ? ((e.flags = (f & -65537) | 128), e) : null
      );
    case 24:
      return (ke(gf), null);
    case 25:
      return null;
    default:
      return null;
  }
}
function Qs(f, e) {
  switch ((k1(e), e.tag)) {
    case 3:
      (ke(gf), wt());
      break;
    case 26:
    case 27:
    case 5:
      ui(e);
      break;
    case 4:
      wt();
      break;
    case 13:
      ze(e);
      break;
    case 19:
      hf(Mf);
      break;
    case 10:
      ke(e.type);
      break;
    case 22:
    case 23:
      (ze(e), Y1(), f !== null && hf(Ta));
      break;
    case 24:
      ke(gf);
  }
}
function uu(f, e) {
  try {
    var a = e.updateQueue,
      t = a !== null ? a.lastEffect : null;
    if (t !== null) {
      var n = t.next;
      a = n;
      do {
        if ((a.tag & f) === f) {
          t = void 0;
          var u = a.create,
            i = a.inst;
          ((t = u()), (i.destroy = t));
        }
        a = a.next;
      } while (a !== n);
    }
  } catch (l) {
    V(e, e.return, l);
  }
}
function oa(f, e, a) {
  try {
    var t = e.updateQueue,
      n = t !== null ? t.lastEffect : null;
    if (n !== null) {
      var u = n.next;
      t = u;
      do {
        if ((t.tag & f) === f) {
          var i = t.inst,
            l = i.destroy;
          if (l !== void 0) {
            ((i.destroy = void 0), (n = e));
            var r = a,
              c = l;
            try {
              c();
            } catch (d) {
              V(n, r, d);
            }
          }
        }
        t = t.next;
      } while (t !== u);
    }
  } catch (d) {
    V(e, e.return, d);
  }
}
function Us(f) {
  var e = f.updateQueue;
  if (e !== null) {
    var a = f.stateNode;
    try {
      _d(e, a);
    } catch (t) {
      V(f, f.return, t);
    }
  }
}
function Bs(f, e, a) {
  ((a.props = ka(f.type, f.memoizedProps)), (a.state = f.memoizedState));
  try {
    a.componentWillUnmount();
  } catch (t) {
    V(f, e, t);
  }
}
function wn(f, e) {
  try {
    var a = f.ref;
    if (a !== null) {
      switch (f.tag) {
        case 26:
        case 27:
        case 5:
          var t = f.stateNode;
          break;
        case 30:
          t = f.stateNode;
          break;
        default:
          t = f.stateNode;
      }
      typeof a == 'function' ? (f.refCleanup = a(t)) : (a.current = t);
    }
  } catch (n) {
    V(f, e, n);
  }
}
function Le(f, e) {
  var a = f.ref,
    t = f.refCleanup;
  if (a !== null)
    if (typeof t == 'function')
      try {
        t();
      } catch (n) {
        V(f, e, n);
      } finally {
        ((f.refCleanup = null),
          (f = f.alternate),
          f != null && (f.refCleanup = null));
      }
    else if (typeof a == 'function')
      try {
        a(null);
      } catch (n) {
        V(f, e, n);
      }
    else a.current = null;
}
function Gs(f) {
  var e = f.type,
    a = f.memoizedProps,
    t = f.stateNode;
  try {
    f: switch (e) {
      case 'button':
      case 'input':
      case 'select':
      case 'textarea':
        a.autoFocus && t.focus();
        break f;
      case 'img':
        a.src ? (t.src = a.src) : a.srcSet && (t.srcset = a.srcSet);
    }
  } catch (n) {
    V(f, f.return, n);
  }
}
function Jl(f, e, a) {
  try {
    var t = f.stateNode;
    (OM(t, f.type, a, e), (t[Rf] = e));
  } catch (n) {
    V(f, f.return, n);
  }
}
function Js(f) {
  return (
    f.tag === 5 ||
    f.tag === 3 ||
    f.tag === 26 ||
    (f.tag === 27 && Ma(f.type)) ||
    f.tag === 4
  );
}
function Zl(f) {
  f: for (;;) {
    for (; f.sibling === null; ) {
      if (f.return === null || Js(f.return)) return null;
      f = f.return;
    }
    for (
      f.sibling.return = f.return, f = f.sibling;
      f.tag !== 5 && f.tag !== 6 && f.tag !== 18;

    ) {
      if (
        (f.tag === 27 && Ma(f.type)) ||
        f.flags & 2 ||
        f.child === null ||
        f.tag === 4
      )
        continue f;
      ((f.child.return = f), (f = f.child));
    }
    if (!(f.flags & 2)) return f.stateNode;
  }
}
function U0(f, e, a) {
  var t = f.tag;
  if (t === 5 || t === 6)
    ((f = f.stateNode),
      e
        ? (a.nodeType === 9
            ? a.body
            : a.nodeName === 'HTML'
              ? a.ownerDocument.body
              : a
          ).insertBefore(f, e)
        : ((e =
            a.nodeType === 9
              ? a.body
              : a.nodeName === 'HTML'
                ? a.ownerDocument.body
                : a),
          e.appendChild(f),
          (a = a._reactRootContainer),
          a != null || e.onclick !== null || (e.onclick = el)));
  else if (
    t !== 4 &&
    (t === 27 && Ma(f.type) && ((a = f.stateNode), (e = null)),
    (f = f.child),
    f !== null)
  )
    for (U0(f, e, a), f = f.sibling; f !== null; )
      (U0(f, e, a), (f = f.sibling));
}
function vi(f, e, a) {
  var t = f.tag;
  if (t === 5 || t === 6)
    ((f = f.stateNode), e ? a.insertBefore(f, e) : a.appendChild(f));
  else if (
    t !== 4 &&
    (t === 27 && Ma(f.type) && (a = f.stateNode), (f = f.child), f !== null)
  )
    for (vi(f, e, a), f = f.sibling; f !== null; )
      (vi(f, e, a), (f = f.sibling));
}
function Zs(f) {
  var e = f.stateNode,
    a = f.memoizedProps;
  try {
    for (var t = f.type, n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    (Cf(e, t, a), (e[pf] = f), (e[Rf] = a));
  } catch (u) {
    V(f, f.return, u);
  }
}
var Ne = !1,
  cf = !1,
  Hl = !1,
  Qc = typeof WeakSet == 'function' ? WeakSet : Set,
  bf = null;
function mM(f, e) {
  if (((f = f.containerInfo), (V0 = zi), (f = Id(f)), D1(f))) {
    if ('selectionStart' in f)
      var a = { start: f.selectionStart, end: f.selectionEnd };
    else
      f: {
        a = ((a = f.ownerDocument) && a.defaultView) || window;
        var t = a.getSelection && a.getSelection();
        if (t && t.rangeCount !== 0) {
          a = t.anchorNode;
          var n = t.anchorOffset,
            u = t.focusNode;
          t = t.focusOffset;
          try {
            (a.nodeType, u.nodeType);
          } catch {
            a = null;
            break f;
          }
          var i = 0,
            l = -1,
            r = -1,
            c = 0,
            d = 0,
            M = f,
            s = null;
          e: for (;;) {
            for (
              var b;
              M !== a || (n !== 0 && M.nodeType !== 3) || (l = i + n),
                M !== u || (t !== 0 && M.nodeType !== 3) || (r = i + t),
                M.nodeType === 3 && (i += M.nodeValue.length),
                (b = M.firstChild) !== null;

            )
              ((s = M), (M = b));
            for (;;) {
              if (M === f) break e;
              if (
                (s === a && ++c === n && (l = i),
                s === u && ++d === t && (r = i),
                (b = M.nextSibling) !== null)
              )
                break;
              ((M = s), (s = M.parentNode));
            }
            M = b;
          }
          a = l === -1 || r === -1 ? null : { start: l, end: r };
        } else a = null;
      }
    a = a || { start: 0, end: 0 };
  } else a = null;
  for (
    X0 = { focusedElem: f, selectionRange: a }, zi = !1, bf = e;
    bf !== null;

  )
    if (((e = bf), (f = e.child), (e.subtreeFlags & 1024) !== 0 && f !== null))
      ((f.return = e), (bf = f));
    else
      for (; bf !== null; ) {
        switch (((e = bf), (u = e.alternate), (f = e.flags), e.tag)) {
          case 0:
            break;
          case 11:
          case 15:
            break;
          case 1:
            if (f & 1024 && u !== null) {
              ((f = void 0),
                (a = e),
                (n = u.memoizedProps),
                (u = u.memoizedState),
                (t = a.stateNode));
              try {
                var y = ka(a.type, n, a.elementType === a.type);
                ((f = t.getSnapshotBeforeUpdate(y, u)),
                  (t.__reactInternalSnapshotBeforeUpdate = f));
              } catch (h) {
                V(a, a.return, h);
              }
            }
            break;
          case 3:
            if (f & 1024) {
              if (((f = e.stateNode.containerInfo), (a = f.nodeType), a === 9))
                q0(f);
              else if (a === 1)
                switch (f.nodeName) {
                  case 'HEAD':
                  case 'HTML':
                  case 'BODY':
                    q0(f);
                    break;
                  default:
                    f.textContent = '';
                }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if (f & 1024) throw Error(j(163));
        }
        if (((f = e.sibling), f !== null)) {
          ((f.return = e.return), (bf = f));
          break;
        }
        bf = e.return;
      }
}
function Hs(f, e, a) {
  var t = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 15:
      (Ze(f, a), t & 4 && uu(5, a));
      break;
    case 1:
      if ((Ze(f, a), t & 4))
        if (((f = a.stateNode), e === null))
          try {
            f.componentDidMount();
          } catch (i) {
            V(a, a.return, i);
          }
        else {
          var n = ka(a.type, e.memoizedProps);
          e = e.memoizedState;
          try {
            f.componentDidUpdate(n, e, f.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            V(a, a.return, i);
          }
        }
      (t & 64 && Us(a), t & 512 && wn(a, a.return));
      break;
    case 3:
      if ((Ze(f, a), t & 64 && ((f = a.updateQueue), f !== null))) {
        if (((e = null), a.child !== null))
          switch (a.child.tag) {
            case 27:
            case 5:
              e = a.child.stateNode;
              break;
            case 1:
              e = a.child.stateNode;
          }
        try {
          _d(f, e);
        } catch (i) {
          V(a, a.return, i);
        }
      }
      break;
    case 27:
      e === null && t & 4 && Zs(a);
    case 26:
    case 5:
      (Ze(f, a), e === null && t & 4 && Gs(a), t & 512 && wn(a, a.return));
      break;
    case 12:
      Ze(f, a);
      break;
    case 13:
      (Ze(f, a),
        t & 4 && Vs(f, a),
        t & 64 &&
          ((f = a.memoizedState),
          f !== null &&
            ((f = f.dehydrated),
            f !== null && ((a = SM.bind(null, a)), ZM(f, a)))));
      break;
    case 22:
      if (((t = a.memoizedState !== null || Ne), !t)) {
        ((e = (e !== null && e.memoizedState !== null) || cf), (n = Ne));
        var u = cf;
        ((Ne = t),
          (cf = e) && !u ? He(f, a, (a.subtreeFlags & 8772) !== 0) : Ze(f, a),
          (Ne = n),
          (cf = u));
      }
      break;
    case 30:
      break;
    default:
      Ze(f, a);
  }
}
function _s(f) {
  var e = f.alternate;
  (e !== null && ((f.alternate = null), _s(e)),
    (f.child = null),
    (f.deletions = null),
    (f.sibling = null),
    f.tag === 5 && ((e = f.stateNode), e !== null && j1(e)),
    (f.stateNode = null),
    (f.return = null),
    (f.dependencies = null),
    (f.memoizedProps = null),
    (f.memoizedState = null),
    (f.pendingProps = null),
    (f.stateNode = null),
    (f.updateQueue = null));
}
var q = null,
  kf = !1;
function Se(f, e, a) {
  for (a = a.child; a !== null; ) (Ps(f, e, a), (a = a.sibling));
}
function Ps(f, e, a) {
  if (Jf && typeof Jf.onCommitFiberUnmount == 'function')
    try {
      Jf.onCommitFiberUnmount(Xn, a);
    } catch {}
  switch (a.tag) {
    case 26:
      (cf || Le(a, e),
        Se(f, e, a),
        a.memoizedState
          ? a.memoizedState.count--
          : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
      break;
    case 27:
      cf || Le(a, e);
      var t = q,
        n = kf;
      (Ma(a.type) && ((q = a.stateNode), (kf = !1)),
        Se(f, e, a),
        jn(a.stateNode),
        (q = t),
        (kf = n));
      break;
    case 5:
      cf || Le(a, e);
    case 6:
      if (
        ((t = q),
        (n = kf),
        (q = null),
        Se(f, e, a),
        (q = t),
        (kf = n),
        q !== null)
      )
        if (kf)
          try {
            (q.nodeType === 9
              ? q.body
              : q.nodeName === 'HTML'
                ? q.ownerDocument.body
                : q
            ).removeChild(a.stateNode);
          } catch (u) {
            V(a, e, u);
          }
        else
          try {
            q.removeChild(a.stateNode);
          } catch (u) {
            V(a, e, u);
          }
      break;
    case 18:
      q !== null &&
        (kf
          ? ((f = q),
            qc(
              f.nodeType === 9
                ? f.body
                : f.nodeName === 'HTML'
                  ? f.ownerDocument.body
                  : f,
              a.stateNode
            ),
            Qn(f))
          : qc(q, a.stateNode));
      break;
    case 4:
      ((t = q),
        (n = kf),
        (q = a.stateNode.containerInfo),
        (kf = !0),
        Se(f, e, a),
        (q = t),
        (kf = n));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      (cf || oa(2, a, e), cf || oa(4, a, e), Se(f, e, a));
      break;
    case 1:
      (cf ||
        (Le(a, e),
        (t = a.stateNode),
        typeof t.componentWillUnmount == 'function' && Bs(a, e, t)),
        Se(f, e, a));
      break;
    case 21:
      Se(f, e, a);
      break;
    case 22:
      ((cf = (t = cf) || a.memoizedState !== null), Se(f, e, a), (cf = t));
      break;
    default:
      Se(f, e, a);
  }
}
function Vs(f, e) {
  if (
    e.memoizedState === null &&
    ((f = e.alternate),
    f !== null &&
      ((f = f.memoizedState), f !== null && ((f = f.dehydrated), f !== null)))
  )
    try {
      Qn(f);
    } catch (a) {
      V(e, e.return, a);
    }
}
function bM(f) {
  switch (f.tag) {
    case 13:
    case 19:
      var e = f.stateNode;
      return (e === null && (e = f.stateNode = new Qc()), e);
    case 22:
      return (
        (f = f.stateNode),
        (e = f._retryCache),
        e === null && (e = f._retryCache = new Qc()),
        e
      );
    default:
      throw Error(j(435, f.tag));
  }
}
function _l(f, e) {
  var a = bM(f);
  e.forEach(function (t) {
    var n = NM.bind(null, f, t);
    a.has(t) || (a.add(t), t.then(n, n));
  });
}
function Yf(f, e) {
  var a = e.deletions;
  if (a !== null)
    for (var t = 0; t < a.length; t++) {
      var n = a[t],
        u = f,
        i = e,
        l = i;
      f: for (; l !== null; ) {
        switch (l.tag) {
          case 27:
            if (Ma(l.type)) {
              ((q = l.stateNode), (kf = !1));
              break f;
            }
            break;
          case 5:
            ((q = l.stateNode), (kf = !1));
            break f;
          case 3:
          case 4:
            ((q = l.stateNode.containerInfo), (kf = !0));
            break f;
        }
        l = l.return;
      }
      if (q === null) throw Error(j(160));
      (Ps(u, i, n),
        (q = null),
        (kf = !1),
        (u = n.alternate),
        u !== null && (u.return = null),
        (n.return = null));
    }
  if (e.subtreeFlags & 13878)
    for (e = e.child; e !== null; ) (Xs(e, f), (e = e.sibling));
}
var le = null;
function Xs(f, e) {
  var a = f.alternate,
    t = f.flags;
  switch (f.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      (Yf(e, f),
        Qf(f),
        t & 4 && (oa(3, f, f.return), uu(3, f), oa(5, f, f.return)));
      break;
    case 1:
      (Yf(e, f),
        Qf(f),
        t & 512 && (cf || a === null || Le(a, a.return)),
        t & 64 &&
          Ne &&
          ((f = f.updateQueue),
          f !== null &&
            ((t = f.callbacks),
            t !== null &&
              ((a = f.shared.hiddenCallbacks),
              (f.shared.hiddenCallbacks = a === null ? t : a.concat(t))))));
      break;
    case 26:
      var n = le;
      if (
        (Yf(e, f),
        Qf(f),
        t & 512 && (cf || a === null || Le(a, a.return)),
        t & 4)
      ) {
        var u = a !== null ? a.memoizedState : null;
        if (((t = f.memoizedState), a === null))
          if (t === null)
            if (f.stateNode === null) {
              f: {
                ((t = f.type),
                  (a = f.memoizedProps),
                  (n = n.ownerDocument || n));
                e: switch (t) {
                  case 'title':
                    ((u = n.getElementsByTagName('title')[0]),
                      (!u ||
                        u[Wn] ||
                        u[pf] ||
                        u.namespaceURI === 'http://www.w3.org/2000/svg' ||
                        u.hasAttribute('itemprop')) &&
                        ((u = n.createElement(t)),
                        n.head.insertBefore(
                          u,
                          n.querySelector('head > title')
                        )),
                      Cf(u, t, a),
                      (u[pf] = f),
                      wf(u),
                      (t = u));
                    break f;
                  case 'link':
                    var i = eo('link', 'href', n).get(t + (a.href || ''));
                    if (i) {
                      for (var l = 0; l < i.length; l++)
                        if (
                          ((u = i[l]),
                          u.getAttribute('href') ===
                            (a.href == null || a.href === '' ? null : a.href) &&
                            u.getAttribute('rel') ===
                              (a.rel == null ? null : a.rel) &&
                            u.getAttribute('title') ===
                              (a.title == null ? null : a.title) &&
                            u.getAttribute('crossorigin') ===
                              (a.crossOrigin == null ? null : a.crossOrigin))
                        ) {
                          i.splice(l, 1);
                          break e;
                        }
                    }
                    ((u = n.createElement(t)),
                      Cf(u, t, a),
                      n.head.appendChild(u));
                    break;
                  case 'meta':
                    if (
                      (i = eo('meta', 'content', n).get(t + (a.content || '')))
                    ) {
                      for (l = 0; l < i.length; l++)
                        if (
                          ((u = i[l]),
                          u.getAttribute('content') ===
                            (a.content == null ? null : '' + a.content) &&
                            u.getAttribute('name') ===
                              (a.name == null ? null : a.name) &&
                            u.getAttribute('property') ===
                              (a.property == null ? null : a.property) &&
                            u.getAttribute('http-equiv') ===
                              (a.httpEquiv == null ? null : a.httpEquiv) &&
                            u.getAttribute('charset') ===
                              (a.charSet == null ? null : a.charSet))
                        ) {
                          i.splice(l, 1);
                          break e;
                        }
                    }
                    ((u = n.createElement(t)),
                      Cf(u, t, a),
                      n.head.appendChild(u));
                    break;
                  default:
                    throw Error(j(468, t));
                }
                ((u[pf] = f), wf(u), (t = u));
              }
              f.stateNode = t;
            } else ao(n, f.type, f.stateNode);
          else f.stateNode = fo(n, t, f.memoizedProps);
        else
          u !== t
            ? (u === null
                ? a.stateNode !== null &&
                  ((a = a.stateNode), a.parentNode.removeChild(a))
                : u.count--,
              t === null
                ? ao(n, f.type, f.stateNode)
                : fo(n, t, f.memoizedProps))
            : t === null &&
              f.stateNode !== null &&
              Jl(f, f.memoizedProps, a.memoizedProps);
      }
      break;
    case 27:
      (Yf(e, f),
        Qf(f),
        t & 512 && (cf || a === null || Le(a, a.return)),
        a !== null && t & 4 && Jl(f, f.memoizedProps, a.memoizedProps));
      break;
    case 5:
      if (
        (Yf(e, f),
        Qf(f),
        t & 512 && (cf || a === null || Le(a, a.return)),
        f.flags & 32)
      ) {
        n = f.stateNode;
        try {
          ht(n, '');
        } catch (b) {
          V(f, f.return, b);
        }
      }
      (t & 4 &&
        f.stateNode != null &&
        ((n = f.memoizedProps), Jl(f, n, a !== null ? a.memoizedProps : n)),
        t & 1024 && (Hl = !0));
      break;
    case 6:
      if ((Yf(e, f), Qf(f), t & 4)) {
        if (f.stateNode === null) throw Error(j(162));
        ((t = f.memoizedProps), (a = f.stateNode));
        try {
          a.nodeValue = t;
        } catch (b) {
          V(f, f.return, b);
        }
      }
      break;
    case 3:
      if (
        ((qu = null),
        (n = le),
        (le = Di(e.containerInfo)),
        Yf(e, f),
        (le = n),
        Qf(f),
        t & 4 && a !== null && a.memoizedState.isDehydrated)
      )
        try {
          Qn(e.containerInfo);
        } catch (b) {
          V(f, f.return, b);
        }
      Hl && ((Hl = !1), Ks(f));
      break;
    case 4:
      ((t = le),
        (le = Di(f.stateNode.containerInfo)),
        Yf(e, f),
        Qf(f),
        (le = t));
      break;
    case 12:
      (Yf(e, f), Qf(f));
      break;
    case 13:
      (Yf(e, f),
        Qf(f),
        f.child.flags & 8192 &&
          (f.memoizedState !== null) !=
            (a !== null && a.memoizedState !== null) &&
          (er = be()),
        t & 4 &&
          ((t = f.updateQueue),
          t !== null && ((f.updateQueue = null), _l(f, t))));
      break;
    case 22:
      n = f.memoizedState !== null;
      var r = a !== null && a.memoizedState !== null,
        c = Ne,
        d = cf;
      if (
        ((Ne = c || n),
        (cf = d || r),
        Yf(e, f),
        (cf = d),
        (Ne = c),
        Qf(f),
        t & 8192)
      )
        f: for (
          e = f.stateNode,
            e._visibility = n ? e._visibility & -2 : e._visibility | 1,
            n && (a === null || r || Ne || cf || ja(f)),
            a = null,
            e = f;
          ;

        ) {
          if (e.tag === 5 || e.tag === 26) {
            if (a === null) {
              r = a = e;
              try {
                if (((u = r.stateNode), n))
                  ((i = u.style),
                    typeof i.setProperty == 'function'
                      ? i.setProperty('display', 'none', 'important')
                      : (i.display = 'none'));
                else {
                  l = r.stateNode;
                  var M = r.memoizedProps.style,
                    s =
                      M != null && M.hasOwnProperty('display')
                        ? M.display
                        : null;
                  l.style.display =
                    s == null || typeof s == 'boolean' ? '' : ('' + s).trim();
                }
              } catch (b) {
                V(r, r.return, b);
              }
            }
          } else if (e.tag === 6) {
            if (a === null) {
              r = e;
              try {
                r.stateNode.nodeValue = n ? '' : r.memoizedProps;
              } catch (b) {
                V(r, r.return, b);
              }
            }
          } else if (
            ((e.tag !== 22 && e.tag !== 23) ||
              e.memoizedState === null ||
              e === f) &&
            e.child !== null
          ) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === f) break f;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === f) break f;
            (a === e && (a = null), (e = e.return));
          }
          (a === e && (a = null),
            (e.sibling.return = e.return),
            (e = e.sibling));
        }
      t & 4 &&
        ((t = f.updateQueue),
        t !== null &&
          ((a = t.retryQueue),
          a !== null && ((t.retryQueue = null), _l(f, a))));
      break;
    case 19:
      (Yf(e, f),
        Qf(f),
        t & 4 &&
          ((t = f.updateQueue),
          t !== null && ((f.updateQueue = null), _l(f, t))));
      break;
    case 30:
      break;
    case 21:
      break;
    default:
      (Yf(e, f), Qf(f));
  }
}
function Qf(f) {
  var e = f.flags;
  if (e & 2) {
    try {
      for (var a, t = f.return; t !== null; ) {
        if (Js(t)) {
          a = t;
          break;
        }
        t = t.return;
      }
      if (a == null) throw Error(j(160));
      switch (a.tag) {
        case 27:
          var n = a.stateNode,
            u = Zl(f);
          vi(f, u, n);
          break;
        case 5:
          var i = a.stateNode;
          a.flags & 32 && (ht(i, ''), (a.flags &= -33));
          var l = Zl(f);
          vi(f, l, i);
          break;
        case 3:
        case 4:
          var r = a.stateNode.containerInfo,
            c = Zl(f);
          U0(f, c, r);
          break;
        default:
          throw Error(j(161));
      }
    } catch (d) {
      V(f, f.return, d);
    }
    f.flags &= -3;
  }
  e & 4096 && (f.flags &= -4097);
}
function Ks(f) {
  if (f.subtreeFlags & 1024)
    for (f = f.child; f !== null; ) {
      var e = f;
      (Ks(e),
        e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
        (f = f.sibling));
    }
}
function Ze(f, e) {
  if (e.subtreeFlags & 8772)
    for (e = e.child; e !== null; ) (Hs(f, e.alternate, e), (e = e.sibling));
}
function ja(f) {
  for (f = f.child; f !== null; ) {
    var e = f;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (oa(4, e, e.return), ja(e));
        break;
      case 1:
        Le(e, e.return);
        var a = e.stateNode;
        (typeof a.componentWillUnmount == 'function' && Bs(e, e.return, a),
          ja(e));
        break;
      case 27:
        jn(e.stateNode);
      case 26:
      case 5:
        (Le(e, e.return), ja(e));
        break;
      case 22:
        e.memoizedState === null && ja(e);
        break;
      case 30:
        ja(e);
        break;
      default:
        ja(e);
    }
    f = f.sibling;
  }
}
function He(f, e, a) {
  for (a = a && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
    var t = e.alternate,
      n = f,
      u = e,
      i = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        (He(n, u, a), uu(4, u));
        break;
      case 1:
        if (
          (He(n, u, a),
          (t = u),
          (n = t.stateNode),
          typeof n.componentDidMount == 'function')
        )
          try {
            n.componentDidMount();
          } catch (c) {
            V(t, t.return, c);
          }
        if (((t = u), (n = t.updateQueue), n !== null)) {
          var l = t.stateNode;
          try {
            var r = n.shared.hiddenCallbacks;
            if (r !== null)
              for (n.shared.hiddenCallbacks = null, n = 0; n < r.length; n++)
                Hd(r[n], l);
          } catch (c) {
            V(t, t.return, c);
          }
        }
        (a && i & 64 && Us(u), wn(u, u.return));
        break;
      case 27:
        Zs(u);
      case 26:
      case 5:
        (He(n, u, a), a && t === null && i & 4 && Gs(u), wn(u, u.return));
        break;
      case 12:
        He(n, u, a);
        break;
      case 13:
        (He(n, u, a), a && i & 4 && Vs(n, u));
        break;
      case 22:
        (u.memoizedState === null && He(n, u, a), wn(u, u.return));
        break;
      case 30:
        break;
      default:
        He(n, u, a);
    }
    e = e.sibling;
  }
}
function W1(f, e) {
  var a = null;
  (f !== null &&
    f.memoizedState !== null &&
    f.memoizedState.cachePool !== null &&
    (a = f.memoizedState.cachePool.pool),
    (f = null),
    e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (f = e.memoizedState.cachePool.pool),
    f !== a && (f != null && f.refCount++, a != null && eu(a)));
}
function F1(f, e) {
  ((f = null),
    e.alternate !== null && (f = e.alternate.memoizedState.cache),
    (e = e.memoizedState.cache),
    e !== f && (e.refCount++, f != null && eu(f)));
}
function ge(f, e, a, t) {
  if (e.subtreeFlags & 10256)
    for (e = e.child; e !== null; ) (qs(f, e, a, t), (e = e.sibling));
}
function qs(f, e, a, t) {
  var n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 15:
      (ge(f, e, a, t), n & 2048 && uu(9, e));
      break;
    case 1:
      ge(f, e, a, t);
      break;
    case 3:
      (ge(f, e, a, t),
        n & 2048 &&
          ((f = null),
          e.alternate !== null && (f = e.alternate.memoizedState.cache),
          (e = e.memoizedState.cache),
          e !== f && (e.refCount++, f != null && eu(f))));
      break;
    case 12:
      if (n & 2048) {
        (ge(f, e, a, t), (f = e.stateNode));
        try {
          var u = e.memoizedProps,
            i = u.id,
            l = u.onPostCommit;
          typeof l == 'function' &&
            l(
              i,
              e.alternate === null ? 'mount' : 'update',
              f.passiveEffectDuration,
              -0
            );
        } catch (r) {
          V(e, e.return, r);
        }
      } else ge(f, e, a, t);
      break;
    case 13:
      ge(f, e, a, t);
      break;
    case 23:
      break;
    case 22:
      ((u = e.stateNode),
        (i = e.alternate),
        e.memoizedState !== null
          ? u._visibility & 2
            ? ge(f, e, a, t)
            : yn(f, e)
          : u._visibility & 2
            ? ge(f, e, a, t)
            : ((u._visibility |= 2),
              Xa(f, e, a, t, (e.subtreeFlags & 10256) !== 0)),
        n & 2048 && W1(i, e));
      break;
    case 24:
      (ge(f, e, a, t), n & 2048 && F1(e.alternate, e));
      break;
    default:
      ge(f, e, a, t);
  }
}
function Xa(f, e, a, t, n) {
  for (n = n && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
    var u = f,
      i = e,
      l = a,
      r = t,
      c = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        (Xa(u, i, l, r, n), uu(8, i));
        break;
      case 23:
        break;
      case 22:
        var d = i.stateNode;
        (i.memoizedState !== null
          ? d._visibility & 2
            ? Xa(u, i, l, r, n)
            : yn(u, i)
          : ((d._visibility |= 2), Xa(u, i, l, r, n)),
          n && c & 2048 && W1(i.alternate, i));
        break;
      case 24:
        (Xa(u, i, l, r, n), n && c & 2048 && F1(i.alternate, i));
        break;
      default:
        Xa(u, i, l, r, n);
    }
    e = e.sibling;
  }
}
function yn(f, e) {
  if (e.subtreeFlags & 10256)
    for (e = e.child; e !== null; ) {
      var a = f,
        t = e,
        n = t.flags;
      switch (t.tag) {
        case 22:
          (yn(a, t), n & 2048 && W1(t.alternate, t));
          break;
        case 24:
          (yn(a, t), n & 2048 && F1(t.alternate, t));
          break;
        default:
          yn(a, t);
      }
      e = e.sibling;
    }
}
var nn = 8192;
function Ha(f) {
  if (f.subtreeFlags & nn)
    for (f = f.child; f !== null; ) (Ws(f), (f = f.sibling));
}
function Ws(f) {
  switch (f.tag) {
    case 26:
      (Ha(f),
        f.flags & nn &&
          f.memoizedState !== null &&
          a6(le, f.memoizedState, f.memoizedProps));
      break;
    case 5:
      Ha(f);
      break;
    case 3:
    case 4:
      var e = le;
      ((le = Di(f.stateNode.containerInfo)), Ha(f), (le = e));
      break;
    case 22:
      f.memoizedState === null &&
        ((e = f.alternate),
        e !== null && e.memoizedState !== null
          ? ((e = nn), (nn = 16777216), Ha(f), (nn = e))
          : Ha(f));
      break;
    default:
      Ha(f);
  }
}
function Fs(f) {
  var e = f.alternate;
  if (e !== null && ((f = e.child), f !== null)) {
    e.child = null;
    do ((e = f.sibling), (f.sibling = null), (f = e));
    while (f !== null);
  }
}
function qt(f) {
  var e = f.deletions;
  if (f.flags & 16) {
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var t = e[a];
        ((bf = t), f2(t, f));
      }
    Fs(f);
  }
  if (f.subtreeFlags & 10256)
    for (f = f.child; f !== null; ) ($s(f), (f = f.sibling));
}
function $s(f) {
  switch (f.tag) {
    case 0:
    case 11:
    case 15:
      (qt(f), f.flags & 2048 && oa(9, f, f.return));
      break;
    case 3:
      qt(f);
      break;
    case 12:
      qt(f);
      break;
    case 22:
      var e = f.stateNode;
      f.memoizedState !== null &&
      e._visibility & 2 &&
      (f.return === null || f.return.tag !== 13)
        ? ((e._visibility &= -3), Xu(f))
        : qt(f);
      break;
    default:
      qt(f);
  }
}
function Xu(f) {
  var e = f.deletions;
  if (f.flags & 16) {
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var t = e[a];
        ((bf = t), f2(t, f));
      }
    Fs(f);
  }
  for (f = f.child; f !== null; ) {
    switch (((e = f), e.tag)) {
      case 0:
      case 11:
      case 15:
        (oa(8, e, e.return), Xu(e));
        break;
      case 22:
        ((a = e.stateNode),
          a._visibility & 2 && ((a._visibility &= -3), Xu(e)));
        break;
      default:
        Xu(e);
    }
    f = f.sibling;
  }
}
function f2(f, e) {
  for (; bf !== null; ) {
    var a = bf;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        oa(8, a, e);
        break;
      case 23:
      case 22:
        if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
          var t = a.memoizedState.cachePool.pool;
          t != null && t.refCount++;
        }
        break;
      case 24:
        eu(a.memoizedState.cache);
    }
    if (((t = a.child), t !== null)) ((t.return = a), (bf = t));
    else
      f: for (a = f; bf !== null; ) {
        t = bf;
        var n = t.sibling,
          u = t.return;
        if ((_s(t), t === a)) {
          bf = null;
          break f;
        }
        if (n !== null) {
          ((n.return = u), (bf = n));
          break f;
        }
        bf = u;
      }
  }
}
var wM = {
    getCacheForType: function (f) {
      var e = Sf(gf),
        a = e.data.get(f);
      return (a === void 0 && ((a = f()), e.data.set(f, a)), a);
    },
  },
  yM = typeof WeakMap == 'function' ? WeakMap : Map,
  H = 0,
  X = null,
  Y = null,
  U = 0,
  Z = 0,
  Uf = null,
  $e = !1,
  Ot = !1,
  $1 = !1,
  Qe = 0,
  nf = 0,
  da = 0,
  Da = 0,
  fr = 0,
  ee = 0,
  St = 0,
  hn = null,
  xf = null,
  B0 = !1,
  er = 0,
  ji = 1 / 0,
  Ci = null,
  na = null,
  jf = 0,
  ua = null,
  Nt = null,
  Lt = 0,
  G0 = 0,
  J0 = null,
  e2 = null,
  vn = 0,
  Z0 = null;
function Hf() {
  if (H & 2 && U !== 0) return U & -U;
  if (D.T !== null) {
    var f = vt;
    return f !== 0 ? f : tr();
  }
  return sd();
}
function a2() {
  ee === 0 && (ee = !(U & 536870912) || G ? rd() : 536870912);
  var f = te.current;
  return (f !== null && (f.flags |= 32), ee);
}
function _f(f, e, a) {
  (((f === X && (Z === 2 || Z === 9)) || f.cancelPendingCommit !== null) &&
    (Tt(f, 0), fa(f, U, ee, !1)),
    qn(f, a),
    (!(H & 2) || f !== X) &&
      (f === X && (!(H & 2) && (Da |= a), nf === 4 && fa(f, U, ee, !1)),
      ve(f)));
}
function t2(f, e, a) {
  if (H & 6) throw Error(j(327));
  var t = (!a && (e & 124) === 0 && (e & f.expiredLanes) === 0) || Kn(f, e),
    n = t ? jM(f, e) : Pl(f, e, !0),
    u = t;
  do {
    if (n === 0) {
      Ot && !t && fa(f, e, 0, !1);
      break;
    } else {
      if (((a = f.current.alternate), u && !hM(a))) {
        ((n = Pl(f, e, !1)), (u = !1));
        continue;
      }
      if (n === 2) {
        if (((u = e), f.errorRecoveryDisabledLanes & u)) var i = 0;
        else
          ((i = f.pendingLanes & -536870913),
            (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
        if (i !== 0) {
          e = i;
          f: {
            var l = f;
            n = hn;
            var r = l.current.memoizedState.isDehydrated;
            if ((r && (Tt(l, i).flags |= 256), (i = Pl(l, i, !1)), i !== 2)) {
              if ($1 && !r) {
                ((l.errorRecoveryDisabledLanes |= u), (Da |= u), (n = 4));
                break f;
              }
              ((u = xf),
                (xf = n),
                u !== null && (xf === null ? (xf = u) : xf.push.apply(xf, u)));
            }
            n = i;
          }
          if (((u = !1), n !== 2)) continue;
        }
      }
      if (n === 1) {
        (Tt(f, 0), fa(f, e, 0, !0));
        break;
      }
      f: {
        switch (((t = f), (u = n), u)) {
          case 0:
          case 1:
            throw Error(j(345));
          case 4:
            if ((e & 4194048) !== e) break;
          case 6:
            fa(t, e, ee, !$e);
            break f;
          case 2:
            xf = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(j(329));
        }
        if ((e & 62914560) === e && ((n = er + 300 - be()), 10 < n)) {
          if ((fa(t, e, ee, !$e), Ji(t, 0, !0) !== 0)) break f;
          t.timeoutHandle = j2(
            Uc.bind(null, t, a, xf, Ci, B0, e, ee, Da, St, $e, u, 2, -0, 0),
            n
          );
          break f;
        }
        Uc(t, a, xf, Ci, B0, e, ee, Da, St, $e, u, 0, -0, 0);
      }
    }
    break;
  } while (!0);
  ve(f);
}
function Uc(f, e, a, t, n, u, i, l, r, c, d, M, s, b) {
  if (
    ((f.timeoutHandle = -1),
    (M = e.subtreeFlags),
    (M & 8192 || (M & 16785408) === 16785408) &&
      ((xn = { stylesheets: null, count: 0, unsuspend: e6 }),
      Ws(e),
      (M = t6()),
      M !== null))
  ) {
    ((f.cancelPendingCommit = M(
      Gc.bind(null, f, e, u, a, t, n, i, l, r, d, 1, s, b)
    )),
      fa(f, u, i, !c));
    return;
  }
  Gc(f, e, u, a, t, n, i, l, r);
}
function hM(f) {
  for (var e = f; ; ) {
    var a = e.tag;
    if (
      (a === 0 || a === 11 || a === 15) &&
      e.flags & 16384 &&
      ((a = e.updateQueue), a !== null && ((a = a.stores), a !== null))
    )
      for (var t = 0; t < a.length; t++) {
        var n = a[t],
          u = n.getSnapshot;
        n = n.value;
        try {
          if (!Pf(u(), n)) return !1;
        } catch {
          return !1;
        }
      }
    if (((a = e.child), e.subtreeFlags & 16384 && a !== null))
      ((a.return = e), (e = a));
    else {
      if (e === f) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === f) return !0;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
  }
  return !0;
}
function fa(f, e, a, t) {
  ((e &= ~fr),
    (e &= ~Da),
    (f.suspendedLanes |= e),
    (f.pingedLanes &= ~e),
    t && (f.warmLanes |= e),
    (t = f.expirationTimes));
  for (var n = e; 0 < n; ) {
    var u = 31 - Zf(n),
      i = 1 << u;
    ((t[u] = -1), (n &= ~i));
  }
  a !== 0 && od(f, a, e);
}
function Fi() {
  return H & 6 ? !0 : (iu(0), !1);
}
function ar() {
  if (Y !== null) {
    if (Z === 0) var f = Y.return;
    else ((f = Y), (Ie = Ya = null), J1(f), (Mt = null), (zn = 0), (f = Y));
    for (; f !== null; ) (Qs(f.alternate, f), (f = f.return));
    Y = null;
  }
}
function Tt(f, e) {
  var a = f.timeoutHandle;
  (a !== -1 && ((f.timeoutHandle = -1), QM(a)),
    (a = f.cancelPendingCommit),
    a !== null && ((f.cancelPendingCommit = null), a()),
    ar(),
    (X = f),
    (Y = a = Ae(f.current, null)),
    (U = e),
    (Z = 0),
    (Uf = null),
    ($e = !1),
    (Ot = Kn(f, e)),
    ($1 = !1),
    (St = ee = fr = Da = da = nf = 0),
    (xf = hn = null),
    (B0 = !1),
    e & 8 && (e |= e & 32));
  var t = f.entangledLanes;
  if (t !== 0)
    for (f = f.entanglements, t &= e; 0 < t; ) {
      var n = 31 - Zf(t),
        u = 1 << n;
      ((e |= f[n]), (t &= ~u));
    }
  return ((Qe = e), Pi(), a);
}
function n2(f, e) {
  ((z = null),
    (D.H = mi),
    e === au || e === Xi
      ? ((e = bc()), (Z = 3))
      : e === Jd
        ? ((e = bc()), (Z = 4))
        : (Z =
            e === As
              ? 8
              : e !== null &&
                  typeof e == 'object' &&
                  typeof e.then == 'function'
                ? 6
                : 1),
    (Uf = e),
    Y === null && ((nf = 1), yi(f, fe(e, f.current))));
}
function u2() {
  var f = D.H;
  return ((D.H = mi), f === null ? mi : f);
}
function i2() {
  var f = D.A;
  return ((D.A = wM), f);
}
function H0() {
  ((nf = 4),
    $e || ((U & 4194048) !== U && te.current !== null) || (Ot = !0),
    (!(da & 134217727) && !(Da & 134217727)) || X === null || fa(X, U, ee, !1));
}
function Pl(f, e, a) {
  var t = H;
  H |= 2;
  var n = u2(),
    u = i2();
  ((X !== f || U !== e) && ((Ci = null), Tt(f, e)), (e = !1));
  var i = nf;
  f: do
    try {
      if (Z !== 0 && Y !== null) {
        var l = Y,
          r = Uf;
        switch (Z) {
          case 8:
            (ar(), (i = 6));
            break f;
          case 3:
          case 2:
          case 9:
          case 6:
            te.current === null && (e = !0);
            var c = Z;
            if (((Z = 0), (Uf = null), lt(f, l, r, c), a && Ot)) {
              i = 0;
              break f;
            }
            break;
          default:
            ((c = Z), (Z = 0), (Uf = null), lt(f, l, r, c));
        }
      }
      (vM(), (i = nf));
      break;
    } catch (d) {
      n2(f, d);
    }
  while (!0);
  return (
    e && f.shellSuspendCounter++,
    (Ie = Ya = null),
    (H = t),
    (D.H = n),
    (D.A = u),
    Y === null && ((X = null), (U = 0), Pi()),
    i
  );
}
function vM() {
  for (; Y !== null; ) l2(Y);
}
function jM(f, e) {
  var a = H;
  H |= 2;
  var t = u2(),
    n = i2();
  X !== f || U !== e
    ? ((Ci = null), (ji = be() + 500), Tt(f, e))
    : (Ot = Kn(f, e));
  f: do
    try {
      if (Z !== 0 && Y !== null) {
        e = Y;
        var u = Uf;
        e: switch (Z) {
          case 1:
            ((Z = 0), (Uf = null), lt(f, e, u, 1));
            break;
          case 2:
          case 9:
            if (mc(u)) {
              ((Z = 0), (Uf = null), Bc(e));
              break;
            }
            ((e = function () {
              ((Z !== 2 && Z !== 9) || X !== f || (Z = 7), ve(f));
            }),
              u.then(e, e));
            break f;
          case 3:
            Z = 7;
            break f;
          case 4:
            Z = 5;
            break f;
          case 7:
            mc(u)
              ? ((Z = 0), (Uf = null), Bc(e))
              : ((Z = 0), (Uf = null), lt(f, e, u, 7));
            break;
          case 5:
            var i = null;
            switch (Y.tag) {
              case 26:
                i = Y.memoizedState;
              case 5:
              case 27:
                var l = Y;
                if (!i || N2(i)) {
                  ((Z = 0), (Uf = null));
                  var r = l.sibling;
                  if (r !== null) Y = r;
                  else {
                    var c = l.return;
                    c !== null ? ((Y = c), $i(c)) : (Y = null);
                  }
                  break e;
                }
            }
            ((Z = 0), (Uf = null), lt(f, e, u, 5));
            break;
          case 6:
            ((Z = 0), (Uf = null), lt(f, e, u, 6));
            break;
          case 8:
            (ar(), (nf = 6));
            break f;
          default:
            throw Error(j(462));
        }
      }
      CM();
      break;
    } catch (d) {
      n2(f, d);
    }
  while (!0);
  return (
    (Ie = Ya = null),
    (D.H = t),
    (D.A = n),
    (H = a),
    Y !== null ? 0 : ((X = null), (U = 0), Pi(), nf)
  );
}
function CM() {
  for (; Y !== null && !_g(); ) l2(Y);
}
function l2(f) {
  var e = Ys(f.alternate, f, Qe);
  ((f.memoizedProps = f.pendingProps), e === null ? $i(f) : (Y = e));
}
function Bc(f) {
  var e = f,
    a = e.alternate;
  switch (e.tag) {
    case 15:
    case 0:
      e = kc(a, e, e.pendingProps, e.type, void 0, U);
      break;
    case 11:
      e = kc(a, e, e.pendingProps, e.type.render, e.ref, U);
      break;
    case 5:
      J1(e);
    default:
      (Qs(a, e), (e = Y = Qd(e, Qe)), (e = Ys(a, e, Qe)));
  }
  ((f.memoizedProps = f.pendingProps), e === null ? $i(f) : (Y = e));
}
function lt(f, e, a, t) {
  ((Ie = Ya = null), J1(e), (Mt = null), (zn = 0));
  var n = e.return;
  try {
    if (sM(f, n, e, a, U)) {
      ((nf = 1), yi(f, fe(a, f.current)), (Y = null));
      return;
    }
  } catch (u) {
    if (n !== null) throw ((Y = n), u);
    ((nf = 1), yi(f, fe(a, f.current)), (Y = null));
    return;
  }
  e.flags & 32768
    ? (G || t === 1
        ? (f = !0)
        : Ot || U & 536870912
          ? (f = !1)
          : (($e = f = !0),
            (t === 2 || t === 9 || t === 3 || t === 6) &&
              ((t = te.current),
              t !== null && t.tag === 13 && (t.flags |= 16384))),
      r2(e, f))
    : $i(e);
}
function $i(f) {
  var e = f;
  do {
    if (e.flags & 32768) {
      r2(e, $e);
      return;
    }
    f = e.return;
    var a = MM(e.alternate, e, Qe);
    if (a !== null) {
      Y = a;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      Y = e;
      return;
    }
    Y = e = f;
  } while (e !== null);
  nf === 0 && (nf = 5);
}
function r2(f, e) {
  do {
    var a = LM(f.alternate, f);
    if (a !== null) {
      ((a.flags &= 32767), (Y = a));
      return;
    }
    if (
      ((a = f.return),
      a !== null &&
        ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
      !e && ((f = f.sibling), f !== null))
    ) {
      Y = f;
      return;
    }
    Y = f = a;
  } while (f !== null);
  ((nf = 6), (Y = null));
}
function Gc(f, e, a, t, n, u, i, l, r) {
  f.cancelPendingCommit = null;
  do fl();
  while (jf !== 0);
  if (H & 6) throw Error(j(327));
  if (e !== null) {
    if (e === f.current) throw Error(j(177));
    if (
      ((u = e.lanes | e.childLanes),
      (u |= E1),
      e3(f, a, u, i, l, r),
      f === X && ((Y = X = null), (U = 0)),
      (Nt = e),
      (ua = f),
      (Lt = a),
      (G0 = u),
      (J0 = n),
      (e2 = t),
      e.subtreeFlags & 10256 || e.flags & 10256
        ? ((f.callbackNode = null),
          (f.callbackPriority = 0),
          TM(ii, function () {
            return (g2(), null);
          }))
        : ((f.callbackNode = null), (f.callbackPriority = 0)),
      (t = (e.flags & 13878) !== 0),
      e.subtreeFlags & 13878 || t)
    ) {
      ((t = D.T), (D.T = null), (n = J.p), (J.p = 2), (i = H), (H |= 4));
      try {
        mM(f, e, a);
      } finally {
        ((H = i), (J.p = n), (D.T = t));
      }
    }
    ((jf = 1), c2(), o2(), d2());
  }
}
function c2() {
  if (jf === 1) {
    jf = 0;
    var f = ua,
      e = Nt,
      a = (e.flags & 13878) !== 0;
    if (e.subtreeFlags & 13878 || a) {
      ((a = D.T), (D.T = null));
      var t = J.p;
      J.p = 2;
      var n = H;
      H |= 4;
      try {
        Xs(e, f);
        var u = X0,
          i = Id(f.containerInfo),
          l = u.focusedElem,
          r = u.selectionRange;
        if (
          i !== l &&
          l &&
          l.ownerDocument &&
          Ed(l.ownerDocument.documentElement, l)
        ) {
          if (r !== null && D1(l)) {
            var c = r.start,
              d = r.end;
            if ((d === void 0 && (d = c), 'selectionStart' in l))
              ((l.selectionStart = c),
                (l.selectionEnd = Math.min(d, l.value.length)));
            else {
              var M = l.ownerDocument || document,
                s = (M && M.defaultView) || window;
              if (s.getSelection) {
                var b = s.getSelection(),
                  y = l.textContent.length,
                  h = Math.min(r.start, y),
                  v = r.end === void 0 ? h : Math.min(r.end, y);
                !b.extend && h > v && ((i = v), (v = h), (h = i));
                var L = rc(l, h),
                  g = rc(l, v);
                if (
                  L &&
                  g &&
                  (b.rangeCount !== 1 ||
                    b.anchorNode !== L.node ||
                    b.anchorOffset !== L.offset ||
                    b.focusNode !== g.node ||
                    b.focusOffset !== g.offset)
                ) {
                  var m = M.createRange();
                  (m.setStart(L.node, L.offset),
                    b.removeAllRanges(),
                    h > v
                      ? (b.addRange(m), b.extend(g.node, g.offset))
                      : (m.setEnd(g.node, g.offset), b.addRange(m)));
                }
              }
            }
          }
          for (M = [], b = l; (b = b.parentNode); )
            b.nodeType === 1 &&
              M.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
          for (
            typeof l.focus == 'function' && l.focus(), l = 0;
            l < M.length;
            l++
          ) {
            var w = M[l];
            ((w.element.scrollLeft = w.left), (w.element.scrollTop = w.top));
          }
        }
        ((zi = !!V0), (X0 = V0 = null));
      } finally {
        ((H = n), (J.p = t), (D.T = a));
      }
    }
    ((f.current = e), (jf = 2));
  }
}
function o2() {
  if (jf === 2) {
    jf = 0;
    var f = ua,
      e = Nt,
      a = (e.flags & 8772) !== 0;
    if (e.subtreeFlags & 8772 || a) {
      ((a = D.T), (D.T = null));
      var t = J.p;
      J.p = 2;
      var n = H;
      H |= 4;
      try {
        Hs(f, e.alternate, e);
      } finally {
        ((H = n), (J.p = t), (D.T = a));
      }
    }
    jf = 3;
  }
}
function d2() {
  if (jf === 4 || jf === 3) {
    ((jf = 0), Pg());
    var f = ua,
      e = Nt,
      a = Lt,
      t = e2;
    e.subtreeFlags & 10256 || e.flags & 10256
      ? (jf = 5)
      : ((jf = 0), (Nt = ua = null), s2(f, f.pendingLanes));
    var n = f.pendingLanes;
    if (
      (n === 0 && (na = null),
      v1(a),
      (e = e.stateNode),
      Jf && typeof Jf.onCommitFiberRoot == 'function')
    )
      try {
        Jf.onCommitFiberRoot(Xn, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
    if (t !== null) {
      ((e = D.T), (n = J.p), (J.p = 2), (D.T = null));
      try {
        for (var u = f.onRecoverableError, i = 0; i < t.length; i++) {
          var l = t[i];
          u(l.value, { componentStack: l.stack });
        }
      } finally {
        ((D.T = e), (J.p = n));
      }
    }
    (Lt & 3 && fl(),
      ve(f),
      (n = f.pendingLanes),
      a & 4194090 && n & 42
        ? f === Z0
          ? vn++
          : ((vn = 0), (Z0 = f))
        : (vn = 0),
      iu(0));
  }
}
function s2(f, e) {
  (f.pooledCacheLanes &= e) === 0 &&
    ((e = f.pooledCache), e != null && ((f.pooledCache = null), eu(e)));
}
function fl(f) {
  return (c2(), o2(), d2(), g2());
}
function g2() {
  if (jf !== 5) return !1;
  var f = ua,
    e = G0;
  G0 = 0;
  var a = v1(Lt),
    t = D.T,
    n = J.p;
  try {
    ((J.p = 32 > a ? 32 : a), (D.T = null), (a = J0), (J0 = null));
    var u = ua,
      i = Lt;
    if (((jf = 0), (Nt = ua = null), (Lt = 0), H & 6)) throw Error(j(331));
    var l = H;
    if (
      ((H |= 4),
      $s(u.current),
      qs(u, u.current, i, a),
      (H = l),
      iu(0, !1),
      Jf && typeof Jf.onPostCommitFiberRoot == 'function')
    )
      try {
        Jf.onPostCommitFiberRoot(Xn, u);
      } catch {}
    return !0;
  } finally {
    ((J.p = n), (D.T = t), s2(f, e));
  }
}
function Jc(f, e, a) {
  ((e = fe(a, e)),
    (e = O0(f.stateNode, e, 2)),
    (f = ta(f, e, 2)),
    f !== null && (qn(f, 2), ve(f)));
}
function V(f, e, a) {
  if (f.tag === 3) Jc(f, f, a);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Jc(e, f, a);
        break;
      } else if (e.tag === 1) {
        var t = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == 'function' ||
          (typeof t.componentDidCatch == 'function' &&
            (na === null || !na.has(t)))
        ) {
          ((f = fe(a, f)),
            (a = Is(2)),
            (t = ta(e, a, 2)),
            t !== null && (zs(a, t, e, f), qn(t, 2), ve(t)));
          break;
        }
      }
      e = e.return;
    }
}
function Vl(f, e, a) {
  var t = f.pingCache;
  if (t === null) {
    t = f.pingCache = new yM();
    var n = new Set();
    t.set(e, n);
  } else ((n = t.get(e)), n === void 0 && ((n = new Set()), t.set(e, n)));
  n.has(a) || (($1 = !0), n.add(a), (f = pM.bind(null, f, e, a)), e.then(f, f));
}
function pM(f, e, a) {
  var t = f.pingCache;
  (t !== null && t.delete(e),
    (f.pingedLanes |= f.suspendedLanes & a),
    (f.warmLanes &= ~a),
    X === f &&
      (U & a) === a &&
      (nf === 4 || (nf === 3 && (U & 62914560) === U && 300 > be() - er)
        ? !(H & 2) && Tt(f, 0)
        : (fr |= a),
      St === U && (St = 0)),
    ve(f));
}
function M2(f, e) {
  (e === 0 && (e = cd()), (f = Rt(f, e)), f !== null && (qn(f, e), ve(f)));
}
function SM(f) {
  var e = f.memoizedState,
    a = 0;
  (e !== null && (a = e.retryLane), M2(f, a));
}
function NM(f, e) {
  var a = 0;
  switch (f.tag) {
    case 13:
      var t = f.stateNode,
        n = f.memoizedState;
      n !== null && (a = n.retryLane);
      break;
    case 19:
      t = f.stateNode;
      break;
    case 22:
      t = f.stateNode._retryCache;
      break;
    default:
      throw Error(j(314));
  }
  (t !== null && t.delete(e), M2(f, a));
}
function TM(f, e) {
  return y1(f, e);
}
var pi = null,
  Ka = null,
  _0 = !1,
  Si = !1,
  Xl = !1,
  Ea = 0;
function ve(f) {
  (f !== Ka &&
    f.next === null &&
    (Ka === null ? (pi = Ka = f) : (Ka = Ka.next = f)),
    (Si = !0),
    _0 || ((_0 = !0), EM()));
}
function iu(f, e) {
  if (!Xl && Si) {
    Xl = !0;
    do
      for (var a = !1, t = pi; t !== null; ) {
        if (f !== 0) {
          var n = t.pendingLanes;
          if (n === 0) var u = 0;
          else {
            var i = t.suspendedLanes,
              l = t.pingedLanes;
            ((u = (1 << (31 - Zf(42 | f) + 1)) - 1),
              (u &= n & ~(i & ~l)),
              (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
          }
          u !== 0 && ((a = !0), Zc(t, u));
        } else
          ((u = U),
            (u = Ji(
              t,
              t === X ? u : 0,
              t.cancelPendingCommit !== null || t.timeoutHandle !== -1
            )),
            !(u & 3) || Kn(t, u) || ((a = !0), Zc(t, u)));
        t = t.next;
      }
    while (a);
    Xl = !1;
  }
}
function DM() {
  L2();
}
function L2() {
  Si = _0 = !1;
  var f = 0;
  Ea !== 0 && (YM() && (f = Ea), (Ea = 0));
  for (var e = be(), a = null, t = pi; t !== null; ) {
    var n = t.next,
      u = m2(t, e);
    (u === 0
      ? ((t.next = null),
        a === null ? (pi = n) : (a.next = n),
        n === null && (Ka = a))
      : ((a = t), (f !== 0 || u & 3) && (Si = !0)),
      (t = n));
  }
  iu(f);
}
function m2(f, e) {
  for (
    var a = f.suspendedLanes,
      t = f.pingedLanes,
      n = f.expirationTimes,
      u = f.pendingLanes & -62914561;
    0 < u;

  ) {
    var i = 31 - Zf(u),
      l = 1 << i,
      r = n[i];
    (r === -1
      ? (!(l & a) || l & t) && (n[i] = f3(l, e))
      : r <= e && (f.expiredLanes |= l),
      (u &= ~l));
  }
  if (
    ((e = X),
    (a = U),
    (a = Ji(
      f,
      f === e ? a : 0,
      f.cancelPendingCommit !== null || f.timeoutHandle !== -1
    )),
    (t = f.callbackNode),
    a === 0 ||
      (f === e && (Z === 2 || Z === 9)) ||
      f.cancelPendingCommit !== null)
  )
    return (
      t !== null && t !== null && hl(t),
      (f.callbackNode = null),
      (f.callbackPriority = 0)
    );
  if (!(a & 3) || Kn(f, a)) {
    if (((e = a & -a), e === f.callbackPriority)) return e;
    switch ((t !== null && hl(t), v1(a))) {
      case 2:
      case 8:
        a = id;
        break;
      case 32:
        a = ii;
        break;
      case 268435456:
        a = ld;
        break;
      default:
        a = ii;
    }
    return (
      (t = b2.bind(null, f)),
      (a = y1(a, t)),
      (f.callbackPriority = e),
      (f.callbackNode = a),
      e
    );
  }
  return (
    t !== null && t !== null && hl(t),
    (f.callbackPriority = 2),
    (f.callbackNode = null),
    2
  );
}
function b2(f, e) {
  if (jf !== 0 && jf !== 5)
    return ((f.callbackNode = null), (f.callbackPriority = 0), null);
  var a = f.callbackNode;
  if (fl() && f.callbackNode !== a) return null;
  var t = U;
  return (
    (t = Ji(
      f,
      f === X ? t : 0,
      f.cancelPendingCommit !== null || f.timeoutHandle !== -1
    )),
    t === 0
      ? null
      : (t2(f, t, e),
        m2(f, be()),
        f.callbackNode != null && f.callbackNode === a
          ? b2.bind(null, f)
          : null)
  );
}
function Zc(f, e) {
  if (fl()) return null;
  t2(f, e, !0);
}
function EM() {
  UM(function () {
    H & 6 ? y1(ud, DM) : L2();
  });
}
function tr() {
  return (Ea === 0 && (Ea = rd()), Ea);
}
function Hc(f) {
  return f == null || typeof f == 'symbol' || typeof f == 'boolean'
    ? null
    : typeof f == 'function'
      ? f
      : Bu('' + f);
}
function _c(f, e) {
  var a = e.ownerDocument.createElement('input');
  return (
    (a.name = e.name),
    (a.value = e.value),
    f.id && a.setAttribute('form', f.id),
    e.parentNode.insertBefore(a, e),
    (f = new FormData(f)),
    a.parentNode.removeChild(a),
    f
  );
}
function IM(f, e, a, t, n) {
  if (e === 'submit' && a && a.stateNode === n) {
    var u = Hc((n[Rf] || null).action),
      i = t.submitter;
    i &&
      ((e = (e = i[Rf] || null)
        ? Hc(e.formAction)
        : i.getAttribute('formAction')),
      e !== null && ((u = e), (i = null)));
    var l = new Zi('action', 'action', null, t, n);
    f.push({
      event: l,
      listeners: [
        {
          instance: null,
          listener: function () {
            if (t.defaultPrevented) {
              if (Ea !== 0) {
                var r = i ? _c(n, i) : new FormData(n);
                x0(
                  a,
                  { pending: !0, data: r, method: n.method, action: u },
                  null,
                  r
                );
              }
            } else
              typeof u == 'function' &&
                (l.preventDefault(),
                (r = i ? _c(n, i) : new FormData(n)),
                x0(
                  a,
                  { pending: !0, data: r, method: n.method, action: u },
                  u,
                  r
                ));
          },
          currentTarget: n,
        },
      ],
    });
  }
}
for (var Kl = 0; Kl < j0.length; Kl++) {
  var ql = j0[Kl],
    zM = ql.toLowerCase(),
    AM = ql[0].toUpperCase() + ql.slice(1);
  de(zM, 'on' + AM);
}
de(Ad, 'onAnimationEnd');
de(kd, 'onAnimationIteration');
de(xd, 'onAnimationStart');
de('dblclick', 'onDoubleClick');
de('focusin', 'onFocus');
de('focusout', 'onBlur');
de(K3, 'onTransitionRun');
de(q3, 'onTransitionStart');
de(W3, 'onTransitionCancel');
de(Rd, 'onTransitionEnd');
yt('onMouseEnter', ['mouseout', 'mouseover']);
yt('onMouseLeave', ['mouseout', 'mouseover']);
yt('onPointerEnter', ['pointerout', 'pointerover']);
yt('onPointerLeave', ['pointerout', 'pointerover']);
xa(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
xa(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
xa('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
xa(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
xa(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
xa(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var An =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  kM = new Set(
    'beforetoggle cancel close invalid load scroll scrollend toggle'
      .split(' ')
      .concat(An)
  );
function w2(f, e) {
  e = (e & 4) !== 0;
  for (var a = 0; a < f.length; a++) {
    var t = f[a],
      n = t.event;
    t = t.listeners;
    f: {
      var u = void 0;
      if (e)
        for (var i = t.length - 1; 0 <= i; i--) {
          var l = t[i],
            r = l.instance,
            c = l.currentTarget;
          if (((l = l.listener), r !== u && n.isPropagationStopped())) break f;
          ((u = l), (n.currentTarget = c));
          try {
            u(n);
          } catch (d) {
            wi(d);
          }
          ((n.currentTarget = null), (u = r));
        }
      else
        for (i = 0; i < t.length; i++) {
          if (
            ((l = t[i]),
            (r = l.instance),
            (c = l.currentTarget),
            (l = l.listener),
            r !== u && n.isPropagationStopped())
          )
            break f;
          ((u = l), (n.currentTarget = c));
          try {
            u(n);
          } catch (d) {
            wi(d);
          }
          ((n.currentTarget = null), (u = r));
        }
    }
  }
}
function O(f, e) {
  var a = e[L0];
  a === void 0 && (a = e[L0] = new Set());
  var t = f + '__bubble';
  a.has(t) || (y2(e, f, 2, !1), a.add(t));
}
function Wl(f, e, a) {
  var t = 0;
  (e && (t |= 4), y2(a, f, t, e));
}
var zu = '_reactListening' + Math.random().toString(36).slice(2);
function nr(f) {
  if (!f[zu]) {
    ((f[zu] = !0),
      gd.forEach(function (a) {
        a !== 'selectionchange' && (kM.has(a) || Wl(a, !1, f), Wl(a, !0, f));
      }));
    var e = f.nodeType === 9 ? f : f.ownerDocument;
    e === null || e[zu] || ((e[zu] = !0), Wl('selectionchange', !1, e));
  }
}
function y2(f, e, a, t) {
  switch (z2(e)) {
    case 2:
      var n = i6;
      break;
    case 8:
      n = l6;
      break;
    default:
      n = rr;
  }
  ((a = n.bind(null, e, a, f)),
    (n = void 0),
    !y0 ||
      (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') ||
      (n = !0),
    t
      ? n !== void 0
        ? f.addEventListener(e, a, { capture: !0, passive: n })
        : f.addEventListener(e, a, !0)
      : n !== void 0
        ? f.addEventListener(e, a, { passive: n })
        : f.addEventListener(e, a, !1));
}
function Fl(f, e, a, t, n) {
  var u = t;
  if (!(e & 1) && !(e & 2) && t !== null)
    f: for (;;) {
      if (t === null) return;
      var i = t.tag;
      if (i === 3 || i === 4) {
        var l = t.stateNode.containerInfo;
        if (l === n) break;
        if (i === 4)
          for (i = t.return; i !== null; ) {
            var r = i.tag;
            if ((r === 3 || r === 4) && i.stateNode.containerInfo === n) return;
            i = i.return;
          }
        for (; l !== null; ) {
          if (((i = Fa(l)), i === null)) return;
          if (((r = i.tag), r === 5 || r === 6 || r === 26 || r === 27)) {
            t = u = i;
            continue f;
          }
          l = l.parentNode;
        }
      }
      t = t.return;
    }
  vd(function () {
    var c = u,
      d = p1(a),
      M = [];
    f: {
      var s = Od.get(f);
      if (s !== void 0) {
        var b = Zi,
          y = f;
        switch (f) {
          case 'keypress':
            if (Ju(a) === 0) break f;
          case 'keydown':
          case 'keyup':
            b = T3;
            break;
          case 'focusin':
            ((y = 'focus'), (b = Dl));
            break;
          case 'focusout':
            ((y = 'blur'), (b = Dl));
            break;
          case 'beforeblur':
          case 'afterblur':
            b = Dl;
            break;
          case 'click':
            if (a.button === 2) break f;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            b = Fr;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            b = L3;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            b = I3;
            break;
          case Ad:
          case kd:
          case xd:
            b = w3;
            break;
          case Rd:
            b = A3;
            break;
          case 'scroll':
          case 'scrollend':
            b = g3;
            break;
          case 'wheel':
            b = x3;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            b = h3;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            b = fc;
            break;
          case 'toggle':
          case 'beforetoggle':
            b = O3;
        }
        var h = (e & 4) !== 0,
          v = !h && (f === 'scroll' || f === 'scrollend'),
          L = h ? (s !== null ? s + 'Capture' : null) : s;
        h = [];
        for (var g = c, m; g !== null; ) {
          var w = g;
          if (
            ((m = w.stateNode),
            (w = w.tag),
            (w !== 5 && w !== 26 && w !== 27) ||
              m === null ||
              L === null ||
              ((w = Nn(g, L)), w != null && h.push(kn(g, w, m))),
            v)
          )
            break;
          g = g.return;
        }
        0 < h.length &&
          ((s = new b(s, y, null, a, d)), M.push({ event: s, listeners: h }));
      }
    }
    if (!(e & 7)) {
      f: {
        if (
          ((s = f === 'mouseover' || f === 'pointerover'),
          (b = f === 'mouseout' || f === 'pointerout'),
          s &&
            a !== w0 &&
            (y = a.relatedTarget || a.fromElement) &&
            (Fa(y) || y[kt]))
        )
          break f;
        if (
          (b || s) &&
          ((s =
            d.window === d
              ? d
              : (s = d.ownerDocument)
                ? s.defaultView || s.parentWindow
                : window),
          b
            ? ((y = a.relatedTarget || a.toElement),
              (b = c),
              (y = y ? Fa(y) : null),
              y !== null &&
                ((v = Vn(y)),
                (h = y.tag),
                y !== v || (h !== 5 && h !== 27 && h !== 6)) &&
                (y = null))
            : ((b = null), (y = c)),
          b !== y)
        ) {
          if (
            ((h = Fr),
            (w = 'onMouseLeave'),
            (L = 'onMouseEnter'),
            (g = 'mouse'),
            (f === 'pointerout' || f === 'pointerover') &&
              ((h = fc),
              (w = 'onPointerLeave'),
              (L = 'onPointerEnter'),
              (g = 'pointer')),
            (v = b == null ? s : tn(b)),
            (m = y == null ? s : tn(y)),
            (s = new h(w, g + 'leave', b, a, d)),
            (s.target = v),
            (s.relatedTarget = m),
            (w = null),
            Fa(d) === c &&
              ((h = new h(L, g + 'enter', y, a, d)),
              (h.target = m),
              (h.relatedTarget = v),
              (w = h)),
            (v = w),
            b && y)
          )
            e: {
              for (h = b, L = y, g = 0, m = h; m; m = _a(m)) g++;
              for (m = 0, w = L; w; w = _a(w)) m++;
              for (; 0 < g - m; ) ((h = _a(h)), g--);
              for (; 0 < m - g; ) ((L = _a(L)), m--);
              for (; g--; ) {
                if (h === L || (L !== null && h === L.alternate)) break e;
                ((h = _a(h)), (L = _a(L)));
              }
              h = null;
            }
          else h = null;
          (b !== null && Pc(M, s, b, h, !1),
            y !== null && v !== null && Pc(M, v, y, h, !0));
        }
      }
      f: {
        if (
          ((s = c ? tn(c) : window),
          (b = s.nodeName && s.nodeName.toLowerCase()),
          b === 'select' || (b === 'input' && s.type === 'file'))
        )
          var C = nc;
        else if (tc(s))
          if (Td) C = P3;
          else {
            C = H3;
            var S = Z3;
          }
        else
          ((b = s.nodeName),
            !b ||
            b.toLowerCase() !== 'input' ||
            (s.type !== 'checkbox' && s.type !== 'radio')
              ? c && C1(c.elementType) && (C = nc)
              : (C = _3));
        if (C && (C = C(f, c))) {
          Nd(M, C, a, d);
          break f;
        }
        (S && S(f, s, c),
          f === 'focusout' &&
            c &&
            s.type === 'number' &&
            c.memoizedProps.value != null &&
            b0(s, 'number', s.value));
      }
      switch (((S = c ? tn(c) : window), f)) {
        case 'focusin':
          (tc(S) || S.contentEditable === 'true') &&
            ((et = S), (h0 = c), (dn = null));
          break;
        case 'focusout':
          dn = h0 = et = null;
          break;
        case 'mousedown':
          v0 = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ((v0 = !1), cc(M, a, d));
          break;
        case 'selectionchange':
          if (X3) break;
        case 'keydown':
        case 'keyup':
          cc(M, a, d);
      }
      var p;
      if (T1)
        f: {
          switch (f) {
            case 'compositionstart':
              var T = 'onCompositionStart';
              break f;
            case 'compositionend':
              T = 'onCompositionEnd';
              break f;
            case 'compositionupdate':
              T = 'onCompositionUpdate';
              break f;
          }
          T = void 0;
        }
      else
        ft
          ? pd(f, a) && (T = 'onCompositionEnd')
          : f === 'keydown' && a.keyCode === 229 && (T = 'onCompositionStart');
      (T &&
        (Cd &&
          a.locale !== 'ko' &&
          (ft || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && ft && (p = jd())
            : ((Fe = d),
              (S1 = 'value' in Fe ? Fe.value : Fe.textContent),
              (ft = !0))),
        (S = Ni(c, T)),
        0 < S.length &&
          ((T = new $r(T, f, null, a, d)),
          M.push({ event: T, listeners: S }),
          p ? (T.data = p) : ((p = Sd(a)), p !== null && (T.data = p)))),
        (p = Q3 ? U3(f, a) : B3(f, a)) &&
          ((T = Ni(c, 'onBeforeInput')),
          0 < T.length &&
            ((S = new $r('onBeforeInput', 'beforeinput', null, a, d)),
            M.push({ event: S, listeners: T }),
            (S.data = p))),
        IM(M, f, c, a, d));
    }
    w2(M, e);
  });
}
function kn(f, e, a) {
  return { instance: f, listener: e, currentTarget: a };
}
function Ni(f, e) {
  for (var a = e + 'Capture', t = []; f !== null; ) {
    var n = f,
      u = n.stateNode;
    if (
      ((n = n.tag),
      (n !== 5 && n !== 26 && n !== 27) ||
        u === null ||
        ((n = Nn(f, a)),
        n != null && t.unshift(kn(f, n, u)),
        (n = Nn(f, e)),
        n != null && t.push(kn(f, n, u))),
      f.tag === 3)
    )
      return t;
    f = f.return;
  }
  return [];
}
function _a(f) {
  if (f === null) return null;
  do f = f.return;
  while (f && f.tag !== 5 && f.tag !== 27);
  return f || null;
}
function Pc(f, e, a, t, n) {
  for (var u = e._reactName, i = []; a !== null && a !== t; ) {
    var l = a,
      r = l.alternate,
      c = l.stateNode;
    if (((l = l.tag), r !== null && r === t)) break;
    ((l !== 5 && l !== 26 && l !== 27) ||
      c === null ||
      ((r = c),
      n
        ? ((c = Nn(a, u)), c != null && i.unshift(kn(a, c, r)))
        : n || ((c = Nn(a, u)), c != null && i.push(kn(a, c, r)))),
      (a = a.return));
  }
  i.length !== 0 && f.push({ event: e, listeners: i });
}
var xM = /\r\n?/g,
  RM = /\u0000|\uFFFD/g;
function Vc(f) {
  return (typeof f == 'string' ? f : '' + f)
    .replace(
      xM,
      `
`
    )
    .replace(RM, '');
}
function h2(f, e) {
  return ((e = Vc(e)), Vc(f) === e);
}
function el() {}
function _(f, e, a, t, n, u) {
  switch (a) {
    case 'children':
      typeof t == 'string'
        ? e === 'body' || (e === 'textarea' && t === '') || ht(f, t)
        : (typeof t == 'number' || typeof t == 'bigint') &&
          e !== 'body' &&
          ht(f, '' + t);
      break;
    case 'className':
      pu(f, 'class', t);
      break;
    case 'tabIndex':
      pu(f, 'tabindex', t);
      break;
    case 'dir':
    case 'role':
    case 'viewBox':
    case 'width':
    case 'height':
      pu(f, a, t);
      break;
    case 'style':
      hd(f, t, u);
      break;
    case 'data':
      if (e !== 'object') {
        pu(f, 'data', t);
        break;
      }
    case 'src':
    case 'href':
      if (t === '' && (e !== 'a' || a !== 'href')) {
        f.removeAttribute(a);
        break;
      }
      if (
        t == null ||
        typeof t == 'function' ||
        typeof t == 'symbol' ||
        typeof t == 'boolean'
      ) {
        f.removeAttribute(a);
        break;
      }
      ((t = Bu('' + t)), f.setAttribute(a, t));
      break;
    case 'action':
    case 'formAction':
      if (typeof t == 'function') {
        f.setAttribute(
          a,
          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
        );
        break;
      } else
        typeof u == 'function' &&
          (a === 'formAction'
            ? (e !== 'input' && _(f, e, 'name', n.name, n, null),
              _(f, e, 'formEncType', n.formEncType, n, null),
              _(f, e, 'formMethod', n.formMethod, n, null),
              _(f, e, 'formTarget', n.formTarget, n, null))
            : (_(f, e, 'encType', n.encType, n, null),
              _(f, e, 'method', n.method, n, null),
              _(f, e, 'target', n.target, n, null)));
      if (t == null || typeof t == 'symbol' || typeof t == 'boolean') {
        f.removeAttribute(a);
        break;
      }
      ((t = Bu('' + t)), f.setAttribute(a, t));
      break;
    case 'onClick':
      t != null && (f.onclick = el);
      break;
    case 'onScroll':
      t != null && O('scroll', f);
      break;
    case 'onScrollEnd':
      t != null && O('scrollend', f);
      break;
    case 'dangerouslySetInnerHTML':
      if (t != null) {
        if (typeof t != 'object' || !('__html' in t)) throw Error(j(61));
        if (((a = t.__html), a != null)) {
          if (n.children != null) throw Error(j(60));
          f.innerHTML = a;
        }
      }
      break;
    case 'multiple':
      f.multiple = t && typeof t != 'function' && typeof t != 'symbol';
      break;
    case 'muted':
      f.muted = t && typeof t != 'function' && typeof t != 'symbol';
      break;
    case 'suppressContentEditableWarning':
    case 'suppressHydrationWarning':
    case 'defaultValue':
    case 'defaultChecked':
    case 'innerHTML':
    case 'ref':
      break;
    case 'autoFocus':
      break;
    case 'xlinkHref':
      if (
        t == null ||
        typeof t == 'function' ||
        typeof t == 'boolean' ||
        typeof t == 'symbol'
      ) {
        f.removeAttribute('xlink:href');
        break;
      }
      ((a = Bu('' + t)),
        f.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', a));
      break;
    case 'contentEditable':
    case 'spellCheck':
    case 'draggable':
    case 'value':
    case 'autoReverse':
    case 'externalResourcesRequired':
    case 'focusable':
    case 'preserveAlpha':
      t != null && typeof t != 'function' && typeof t != 'symbol'
        ? f.setAttribute(a, '' + t)
        : f.removeAttribute(a);
      break;
    case 'inert':
    case 'allowFullScreen':
    case 'async':
    case 'autoPlay':
    case 'controls':
    case 'default':
    case 'defer':
    case 'disabled':
    case 'disablePictureInPicture':
    case 'disableRemotePlayback':
    case 'formNoValidate':
    case 'hidden':
    case 'loop':
    case 'noModule':
    case 'noValidate':
    case 'open':
    case 'playsInline':
    case 'readOnly':
    case 'required':
    case 'reversed':
    case 'scoped':
    case 'seamless':
    case 'itemScope':
      t && typeof t != 'function' && typeof t != 'symbol'
        ? f.setAttribute(a, '')
        : f.removeAttribute(a);
      break;
    case 'capture':
    case 'download':
      t === !0
        ? f.setAttribute(a, '')
        : t !== !1 &&
            t != null &&
            typeof t != 'function' &&
            typeof t != 'symbol'
          ? f.setAttribute(a, t)
          : f.removeAttribute(a);
      break;
    case 'cols':
    case 'rows':
    case 'size':
    case 'span':
      t != null &&
      typeof t != 'function' &&
      typeof t != 'symbol' &&
      !isNaN(t) &&
      1 <= t
        ? f.setAttribute(a, t)
        : f.removeAttribute(a);
      break;
    case 'rowSpan':
    case 'start':
      t == null || typeof t == 'function' || typeof t == 'symbol' || isNaN(t)
        ? f.removeAttribute(a)
        : f.setAttribute(a, t);
      break;
    case 'popover':
      (O('beforetoggle', f), O('toggle', f), Uu(f, 'popover', t));
      break;
    case 'xlinkActuate':
      Ce(f, 'http://www.w3.org/1999/xlink', 'xlink:actuate', t);
      break;
    case 'xlinkArcrole':
      Ce(f, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', t);
      break;
    case 'xlinkRole':
      Ce(f, 'http://www.w3.org/1999/xlink', 'xlink:role', t);
      break;
    case 'xlinkShow':
      Ce(f, 'http://www.w3.org/1999/xlink', 'xlink:show', t);
      break;
    case 'xlinkTitle':
      Ce(f, 'http://www.w3.org/1999/xlink', 'xlink:title', t);
      break;
    case 'xlinkType':
      Ce(f, 'http://www.w3.org/1999/xlink', 'xlink:type', t);
      break;
    case 'xmlBase':
      Ce(f, 'http://www.w3.org/XML/1998/namespace', 'xml:base', t);
      break;
    case 'xmlLang':
      Ce(f, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', t);
      break;
    case 'xmlSpace':
      Ce(f, 'http://www.w3.org/XML/1998/namespace', 'xml:space', t);
      break;
    case 'is':
      Uu(f, 'is', t);
      break;
    case 'innerText':
    case 'textContent':
      break;
    default:
      (!(2 < a.length) ||
        (a[0] !== 'o' && a[0] !== 'O') ||
        (a[1] !== 'n' && a[1] !== 'N')) &&
        ((a = d3.get(a) || a), Uu(f, a, t));
  }
}
function P0(f, e, a, t, n, u) {
  switch (a) {
    case 'style':
      hd(f, t, u);
      break;
    case 'dangerouslySetInnerHTML':
      if (t != null) {
        if (typeof t != 'object' || !('__html' in t)) throw Error(j(61));
        if (((a = t.__html), a != null)) {
          if (n.children != null) throw Error(j(60));
          f.innerHTML = a;
        }
      }
      break;
    case 'children':
      typeof t == 'string'
        ? ht(f, t)
        : (typeof t == 'number' || typeof t == 'bigint') && ht(f, '' + t);
      break;
    case 'onScroll':
      t != null && O('scroll', f);
      break;
    case 'onScrollEnd':
      t != null && O('scrollend', f);
      break;
    case 'onClick':
      t != null && (f.onclick = el);
      break;
    case 'suppressContentEditableWarning':
    case 'suppressHydrationWarning':
    case 'innerHTML':
    case 'ref':
      break;
    case 'innerText':
    case 'textContent':
      break;
    default:
      if (!Md.hasOwnProperty(a))
        f: {
          if (
            a[0] === 'o' &&
            a[1] === 'n' &&
            ((n = a.endsWith('Capture')),
            (e = a.slice(2, n ? a.length - 7 : void 0)),
            (u = f[Rf] || null),
            (u = u != null ? u[a] : null),
            typeof u == 'function' && f.removeEventListener(e, u, n),
            typeof t == 'function')
          ) {
            (typeof u != 'function' &&
              u !== null &&
              (a in f
                ? (f[a] = null)
                : f.hasAttribute(a) && f.removeAttribute(a)),
              f.addEventListener(e, t, n));
            break f;
          }
          a in f ? (f[a] = t) : t === !0 ? f.setAttribute(a, '') : Uu(f, a, t);
        }
  }
}
function Cf(f, e, a) {
  switch (e) {
    case 'div':
    case 'span':
    case 'svg':
    case 'path':
    case 'a':
    case 'g':
    case 'p':
    case 'li':
      break;
    case 'img':
      (O('error', f), O('load', f));
      var t = !1,
        n = !1,
        u;
      for (u in a)
        if (a.hasOwnProperty(u)) {
          var i = a[u];
          if (i != null)
            switch (u) {
              case 'src':
                t = !0;
                break;
              case 'srcSet':
                n = !0;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(j(137, e));
              default:
                _(f, e, u, i, a, null);
            }
        }
      (n && _(f, e, 'srcSet', a.srcSet, a, null),
        t && _(f, e, 'src', a.src, a, null));
      return;
    case 'input':
      O('invalid', f);
      var l = (u = i = n = null),
        r = null,
        c = null;
      for (t in a)
        if (a.hasOwnProperty(t)) {
          var d = a[t];
          if (d != null)
            switch (t) {
              case 'name':
                n = d;
                break;
              case 'type':
                i = d;
                break;
              case 'checked':
                r = d;
                break;
              case 'defaultChecked':
                c = d;
                break;
              case 'value':
                u = d;
                break;
              case 'defaultValue':
                l = d;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (d != null) throw Error(j(137, e));
                break;
              default:
                _(f, e, t, d, a, null);
            }
        }
      (bd(f, u, l, r, c, i, n, !1), li(f));
      return;
    case 'select':
      (O('invalid', f), (t = i = u = null));
      for (n in a)
        if (a.hasOwnProperty(n) && ((l = a[n]), l != null))
          switch (n) {
            case 'value':
              u = l;
              break;
            case 'defaultValue':
              i = l;
              break;
            case 'multiple':
              t = l;
            default:
              _(f, e, n, l, a, null);
          }
      ((e = u),
        (a = i),
        (f.multiple = !!t),
        e != null ? ct(f, !!t, e, !1) : a != null && ct(f, !!t, a, !0));
      return;
    case 'textarea':
      (O('invalid', f), (u = n = t = null));
      for (i in a)
        if (a.hasOwnProperty(i) && ((l = a[i]), l != null))
          switch (i) {
            case 'value':
              t = l;
              break;
            case 'defaultValue':
              n = l;
              break;
            case 'children':
              u = l;
              break;
            case 'dangerouslySetInnerHTML':
              if (l != null) throw Error(j(91));
              break;
            default:
              _(f, e, i, l, a, null);
          }
      (yd(f, t, n, u), li(f));
      return;
    case 'option':
      for (r in a)
        if (a.hasOwnProperty(r) && ((t = a[r]), t != null))
          switch (r) {
            case 'selected':
              f.selected = t && typeof t != 'function' && typeof t != 'symbol';
              break;
            default:
              _(f, e, r, t, a, null);
          }
      return;
    case 'dialog':
      (O('beforetoggle', f), O('toggle', f), O('cancel', f), O('close', f));
      break;
    case 'iframe':
    case 'object':
      O('load', f);
      break;
    case 'video':
    case 'audio':
      for (t = 0; t < An.length; t++) O(An[t], f);
      break;
    case 'image':
      (O('error', f), O('load', f));
      break;
    case 'details':
      O('toggle', f);
      break;
    case 'embed':
    case 'source':
    case 'link':
      (O('error', f), O('load', f));
    case 'area':
    case 'base':
    case 'br':
    case 'col':
    case 'hr':
    case 'keygen':
    case 'meta':
    case 'param':
    case 'track':
    case 'wbr':
    case 'menuitem':
      for (c in a)
        if (a.hasOwnProperty(c) && ((t = a[c]), t != null))
          switch (c) {
            case 'children':
            case 'dangerouslySetInnerHTML':
              throw Error(j(137, e));
            default:
              _(f, e, c, t, a, null);
          }
      return;
    default:
      if (C1(e)) {
        for (d in a)
          a.hasOwnProperty(d) &&
            ((t = a[d]), t !== void 0 && P0(f, e, d, t, a, void 0));
        return;
      }
  }
  for (l in a)
    a.hasOwnProperty(l) && ((t = a[l]), t != null && _(f, e, l, t, a, null));
}
function OM(f, e, a, t) {
  switch (e) {
    case 'div':
    case 'span':
    case 'svg':
    case 'path':
    case 'a':
    case 'g':
    case 'p':
    case 'li':
      break;
    case 'input':
      var n = null,
        u = null,
        i = null,
        l = null,
        r = null,
        c = null,
        d = null;
      for (b in a) {
        var M = a[b];
        if (a.hasOwnProperty(b) && M != null)
          switch (b) {
            case 'checked':
              break;
            case 'value':
              break;
            case 'defaultValue':
              r = M;
            default:
              t.hasOwnProperty(b) || _(f, e, b, null, t, M);
          }
      }
      for (var s in t) {
        var b = t[s];
        if (((M = a[s]), t.hasOwnProperty(s) && (b != null || M != null)))
          switch (s) {
            case 'type':
              u = b;
              break;
            case 'name':
              n = b;
              break;
            case 'checked':
              c = b;
              break;
            case 'defaultChecked':
              d = b;
              break;
            case 'value':
              i = b;
              break;
            case 'defaultValue':
              l = b;
              break;
            case 'children':
            case 'dangerouslySetInnerHTML':
              if (b != null) throw Error(j(137, e));
              break;
            default:
              b !== M && _(f, e, s, b, t, M);
          }
      }
      m0(f, i, l, r, c, d, u, n);
      return;
    case 'select':
      b = i = l = s = null;
      for (u in a)
        if (((r = a[u]), a.hasOwnProperty(u) && r != null))
          switch (u) {
            case 'value':
              break;
            case 'multiple':
              b = r;
            default:
              t.hasOwnProperty(u) || _(f, e, u, null, t, r);
          }
      for (n in t)
        if (
          ((u = t[n]),
          (r = a[n]),
          t.hasOwnProperty(n) && (u != null || r != null))
        )
          switch (n) {
            case 'value':
              s = u;
              break;
            case 'defaultValue':
              l = u;
              break;
            case 'multiple':
              i = u;
            default:
              u !== r && _(f, e, n, u, t, r);
          }
      ((e = l),
        (a = i),
        (t = b),
        s != null
          ? ct(f, !!a, s, !1)
          : !!t != !!a &&
            (e != null ? ct(f, !!a, e, !0) : ct(f, !!a, a ? [] : '', !1)));
      return;
    case 'textarea':
      b = s = null;
      for (l in a)
        if (
          ((n = a[l]), a.hasOwnProperty(l) && n != null && !t.hasOwnProperty(l))
        )
          switch (l) {
            case 'value':
              break;
            case 'children':
              break;
            default:
              _(f, e, l, null, t, n);
          }
      for (i in t)
        if (
          ((n = t[i]),
          (u = a[i]),
          t.hasOwnProperty(i) && (n != null || u != null))
        )
          switch (i) {
            case 'value':
              s = n;
              break;
            case 'defaultValue':
              b = n;
              break;
            case 'children':
              break;
            case 'dangerouslySetInnerHTML':
              if (n != null) throw Error(j(91));
              break;
            default:
              n !== u && _(f, e, i, n, t, u);
          }
      wd(f, s, b);
      return;
    case 'option':
      for (var y in a)
        if (
          ((s = a[y]), a.hasOwnProperty(y) && s != null && !t.hasOwnProperty(y))
        )
          switch (y) {
            case 'selected':
              f.selected = !1;
              break;
            default:
              _(f, e, y, null, t, s);
          }
      for (r in t)
        if (
          ((s = t[r]),
          (b = a[r]),
          t.hasOwnProperty(r) && s !== b && (s != null || b != null))
        )
          switch (r) {
            case 'selected':
              f.selected = s && typeof s != 'function' && typeof s != 'symbol';
              break;
            default:
              _(f, e, r, s, t, b);
          }
      return;
    case 'img':
    case 'link':
    case 'area':
    case 'base':
    case 'br':
    case 'col':
    case 'embed':
    case 'hr':
    case 'keygen':
    case 'meta':
    case 'param':
    case 'source':
    case 'track':
    case 'wbr':
    case 'menuitem':
      for (var h in a)
        ((s = a[h]),
          a.hasOwnProperty(h) &&
            s != null &&
            !t.hasOwnProperty(h) &&
            _(f, e, h, null, t, s));
      for (c in t)
        if (
          ((s = t[c]),
          (b = a[c]),
          t.hasOwnProperty(c) && s !== b && (s != null || b != null))
        )
          switch (c) {
            case 'children':
            case 'dangerouslySetInnerHTML':
              if (s != null) throw Error(j(137, e));
              break;
            default:
              _(f, e, c, s, t, b);
          }
      return;
    default:
      if (C1(e)) {
        for (var v in a)
          ((s = a[v]),
            a.hasOwnProperty(v) &&
              s !== void 0 &&
              !t.hasOwnProperty(v) &&
              P0(f, e, v, void 0, t, s));
        for (d in t)
          ((s = t[d]),
            (b = a[d]),
            !t.hasOwnProperty(d) ||
              s === b ||
              (s === void 0 && b === void 0) ||
              P0(f, e, d, s, t, b));
        return;
      }
  }
  for (var L in a)
    ((s = a[L]),
      a.hasOwnProperty(L) &&
        s != null &&
        !t.hasOwnProperty(L) &&
        _(f, e, L, null, t, s));
  for (M in t)
    ((s = t[M]),
      (b = a[M]),
      !t.hasOwnProperty(M) ||
        s === b ||
        (s == null && b == null) ||
        _(f, e, M, s, t, b));
}
var V0 = null,
  X0 = null;
function Ti(f) {
  return f.nodeType === 9 ? f : f.ownerDocument;
}
function Xc(f) {
  switch (f) {
    case 'http://www.w3.org/2000/svg':
      return 1;
    case 'http://www.w3.org/1998/Math/MathML':
      return 2;
    default:
      return 0;
  }
}
function v2(f, e) {
  if (f === 0)
    switch (e) {
      case 'svg':
        return 1;
      case 'math':
        return 2;
      default:
        return 0;
    }
  return f === 1 && e === 'foreignObject' ? 0 : f;
}
function K0(f, e) {
  return (
    f === 'textarea' ||
    f === 'noscript' ||
    typeof e.children == 'string' ||
    typeof e.children == 'number' ||
    typeof e.children == 'bigint' ||
    (typeof e.dangerouslySetInnerHTML == 'object' &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var $l = null;
function YM() {
  var f = window.event;
  return f && f.type === 'popstate'
    ? f === $l
      ? !1
      : (($l = f), !0)
    : (($l = null), !1);
}
var j2 = typeof setTimeout == 'function' ? setTimeout : void 0,
  QM = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Kc = typeof Promise == 'function' ? Promise : void 0,
  UM =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Kc < 'u'
        ? function (f) {
            return Kc.resolve(null).then(f).catch(BM);
          }
        : j2;
function BM(f) {
  setTimeout(function () {
    throw f;
  });
}
function Ma(f) {
  return f === 'head';
}
function qc(f, e) {
  var a = e,
    t = 0,
    n = 0;
  do {
    var u = a.nextSibling;
    if ((f.removeChild(a), u && u.nodeType === 8))
      if (((a = u.data), a === '/$')) {
        if (0 < t && 8 > t) {
          a = t;
          var i = f.ownerDocument;
          if ((a & 1 && jn(i.documentElement), a & 2 && jn(i.body), a & 4))
            for (a = i.head, jn(a), i = a.firstChild; i; ) {
              var l = i.nextSibling,
                r = i.nodeName;
              (i[Wn] ||
                r === 'SCRIPT' ||
                r === 'STYLE' ||
                (r === 'LINK' && i.rel.toLowerCase() === 'stylesheet') ||
                a.removeChild(i),
                (i = l));
            }
        }
        if (n === 0) {
          (f.removeChild(u), Qn(e));
          return;
        }
        n--;
      } else
        a === '$' || a === '$?' || a === '$!'
          ? n++
          : (t = a.charCodeAt(0) - 48);
    else t = 0;
    a = u;
  } while (a);
  Qn(e);
}
function q0(f) {
  var e = f.firstChild;
  for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
    var a = e;
    switch (((e = e.nextSibling), a.nodeName)) {
      case 'HTML':
      case 'HEAD':
      case 'BODY':
        (q0(a), j1(a));
        continue;
      case 'SCRIPT':
      case 'STYLE':
        continue;
      case 'LINK':
        if (a.rel.toLowerCase() === 'stylesheet') continue;
    }
    f.removeChild(a);
  }
}
function GM(f, e, a, t) {
  for (; f.nodeType === 1; ) {
    var n = a;
    if (f.nodeName.toLowerCase() !== e.toLowerCase()) {
      if (!t && (f.nodeName !== 'INPUT' || f.type !== 'hidden')) break;
    } else if (t) {
      if (!f[Wn])
        switch (e) {
          case 'meta':
            if (!f.hasAttribute('itemprop')) break;
            return f;
          case 'link':
            if (
              ((u = f.getAttribute('rel')),
              u === 'stylesheet' && f.hasAttribute('data-precedence'))
            )
              break;
            if (
              u !== n.rel ||
              f.getAttribute('href') !==
                (n.href == null || n.href === '' ? null : n.href) ||
              f.getAttribute('crossorigin') !==
                (n.crossOrigin == null ? null : n.crossOrigin) ||
              f.getAttribute('title') !== (n.title == null ? null : n.title)
            )
              break;
            return f;
          case 'style':
            if (f.hasAttribute('data-precedence')) break;
            return f;
          case 'script':
            if (
              ((u = f.getAttribute('src')),
              (u !== (n.src == null ? null : n.src) ||
                f.getAttribute('type') !== (n.type == null ? null : n.type) ||
                f.getAttribute('crossorigin') !==
                  (n.crossOrigin == null ? null : n.crossOrigin)) &&
                u &&
                f.hasAttribute('async') &&
                !f.hasAttribute('itemprop'))
            )
              break;
            return f;
          default:
            return f;
        }
    } else if (e === 'input' && f.type === 'hidden') {
      var u = n.name == null ? null : '' + n.name;
      if (n.type === 'hidden' && f.getAttribute('name') === u) return f;
    } else return f;
    if (((f = ce(f.nextSibling)), f === null)) break;
  }
  return null;
}
function JM(f, e, a) {
  if (e === '') return null;
  for (; f.nodeType !== 3; )
    if (
      ((f.nodeType !== 1 || f.nodeName !== 'INPUT' || f.type !== 'hidden') &&
        !a) ||
      ((f = ce(f.nextSibling)), f === null)
    )
      return null;
  return f;
}
function W0(f) {
  return (
    f.data === '$!' ||
    (f.data === '$?' && f.ownerDocument.readyState === 'complete')
  );
}
function ZM(f, e) {
  var a = f.ownerDocument;
  if (f.data !== '$?' || a.readyState === 'complete') e();
  else {
    var t = function () {
      (e(), a.removeEventListener('DOMContentLoaded', t));
    };
    (a.addEventListener('DOMContentLoaded', t), (f._reactRetry = t));
  }
}
function ce(f) {
  for (; f != null; f = f.nextSibling) {
    var e = f.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (
        ((e = f.data),
        e === '$' || e === '$!' || e === '$?' || e === 'F!' || e === 'F')
      )
        break;
      if (e === '/$') return null;
    }
  }
  return f;
}
var F0 = null;
function Wc(f) {
  f = f.previousSibling;
  for (var e = 0; f; ) {
    if (f.nodeType === 8) {
      var a = f.data;
      if (a === '$' || a === '$!' || a === '$?') {
        if (e === 0) return f;
        e--;
      } else a === '/$' && e++;
    }
    f = f.previousSibling;
  }
  return null;
}
function C2(f, e, a) {
  switch (((e = Ti(a)), f)) {
    case 'html':
      if (((f = e.documentElement), !f)) throw Error(j(452));
      return f;
    case 'head':
      if (((f = e.head), !f)) throw Error(j(453));
      return f;
    case 'body':
      if (((f = e.body), !f)) throw Error(j(454));
      return f;
    default:
      throw Error(j(451));
  }
}
function jn(f) {
  for (var e = f.attributes; e.length; ) f.removeAttributeNode(e[0]);
  j1(f);
}
var ne = new Map(),
  Fc = new Set();
function Di(f) {
  return typeof f.getRootNode == 'function'
    ? f.getRootNode()
    : f.nodeType === 9
      ? f
      : f.ownerDocument;
}
var Be = J.d;
J.d = { f: HM, r: _M, D: PM, C: VM, L: XM, m: KM, X: WM, S: qM, M: FM };
function HM() {
  var f = Be.f(),
    e = Fi();
  return f || e;
}
function _M(f) {
  var e = xt(f);
  e !== null && e.tag === 5 && e.type === 'form' ? ms(e) : Be.r(f);
}
var Yt = typeof document > 'u' ? null : document;
function p2(f, e, a) {
  var t = Yt;
  if (t && typeof e == 'string' && e) {
    var n = $f(e);
    ((n = 'link[rel="' + f + '"][href="' + n + '"]'),
      typeof a == 'string' && (n += '[crossorigin="' + a + '"]'),
      Fc.has(n) ||
        (Fc.add(n),
        (f = { rel: f, crossOrigin: a, href: e }),
        t.querySelector(n) === null &&
          ((e = t.createElement('link')),
          Cf(e, 'link', f),
          wf(e),
          t.head.appendChild(e))));
  }
}
function PM(f) {
  (Be.D(f), p2('dns-prefetch', f, null));
}
function VM(f, e) {
  (Be.C(f, e), p2('preconnect', f, e));
}
function XM(f, e, a) {
  Be.L(f, e, a);
  var t = Yt;
  if (t && f && e) {
    var n = 'link[rel="preload"][as="' + $f(e) + '"]';
    e === 'image' && a && a.imageSrcSet
      ? ((n += '[imagesrcset="' + $f(a.imageSrcSet) + '"]'),
        typeof a.imageSizes == 'string' &&
          (n += '[imagesizes="' + $f(a.imageSizes) + '"]'))
      : (n += '[href="' + $f(f) + '"]');
    var u = n;
    switch (e) {
      case 'style':
        u = Dt(f);
        break;
      case 'script':
        u = Qt(f);
    }
    ne.has(u) ||
      ((f = K(
        {
          rel: 'preload',
          href: e === 'image' && a && a.imageSrcSet ? void 0 : f,
          as: e,
        },
        a
      )),
      ne.set(u, f),
      t.querySelector(n) !== null ||
        (e === 'style' && t.querySelector(lu(u))) ||
        (e === 'script' && t.querySelector(ru(u))) ||
        ((e = t.createElement('link')),
        Cf(e, 'link', f),
        wf(e),
        t.head.appendChild(e)));
  }
}
function KM(f, e) {
  Be.m(f, e);
  var a = Yt;
  if (a && f) {
    var t = e && typeof e.as == 'string' ? e.as : 'script',
      n = 'link[rel="modulepreload"][as="' + $f(t) + '"][href="' + $f(f) + '"]',
      u = n;
    switch (t) {
      case 'audioworklet':
      case 'paintworklet':
      case 'serviceworker':
      case 'sharedworker':
      case 'worker':
      case 'script':
        u = Qt(f);
    }
    if (
      !ne.has(u) &&
      ((f = K({ rel: 'modulepreload', href: f }, e)),
      ne.set(u, f),
      a.querySelector(n) === null)
    ) {
      switch (t) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          if (a.querySelector(ru(u))) return;
      }
      ((t = a.createElement('link')),
        Cf(t, 'link', f),
        wf(t),
        a.head.appendChild(t));
    }
  }
}
function qM(f, e, a) {
  Be.S(f, e, a);
  var t = Yt;
  if (t && f) {
    var n = rt(t).hoistableStyles,
      u = Dt(f);
    e = e || 'default';
    var i = n.get(u);
    if (!i) {
      var l = { loading: 0, preload: null };
      if ((i = t.querySelector(lu(u)))) l.loading = 5;
      else {
        ((f = K({ rel: 'stylesheet', href: f, 'data-precedence': e }, a)),
          (a = ne.get(u)) && ur(f, a));
        var r = (i = t.createElement('link'));
        (wf(r),
          Cf(r, 'link', f),
          (r._p = new Promise(function (c, d) {
            ((r.onload = c), (r.onerror = d));
          })),
          r.addEventListener('load', function () {
            l.loading |= 1;
          }),
          r.addEventListener('error', function () {
            l.loading |= 2;
          }),
          (l.loading |= 4),
          Ku(i, e, t));
      }
      ((i = { type: 'stylesheet', instance: i, count: 1, state: l }),
        n.set(u, i));
    }
  }
}
function WM(f, e) {
  Be.X(f, e);
  var a = Yt;
  if (a && f) {
    var t = rt(a).hoistableScripts,
      n = Qt(f),
      u = t.get(n);
    u ||
      ((u = a.querySelector(ru(n))),
      u ||
        ((f = K({ src: f, async: !0 }, e)),
        (e = ne.get(n)) && ir(f, e),
        (u = a.createElement('script')),
        wf(u),
        Cf(u, 'link', f),
        a.head.appendChild(u)),
      (u = { type: 'script', instance: u, count: 1, state: null }),
      t.set(n, u));
  }
}
function FM(f, e) {
  Be.M(f, e);
  var a = Yt;
  if (a && f) {
    var t = rt(a).hoistableScripts,
      n = Qt(f),
      u = t.get(n);
    u ||
      ((u = a.querySelector(ru(n))),
      u ||
        ((f = K({ src: f, async: !0, type: 'module' }, e)),
        (e = ne.get(n)) && ir(f, e),
        (u = a.createElement('script')),
        wf(u),
        Cf(u, 'link', f),
        a.head.appendChild(u)),
      (u = { type: 'script', instance: u, count: 1, state: null }),
      t.set(n, u));
  }
}
function $c(f, e, a, t) {
  var n = (n = ea.current) ? Di(n) : null;
  if (!n) throw Error(j(446));
  switch (f) {
    case 'meta':
    case 'title':
      return null;
    case 'style':
      return typeof a.precedence == 'string' && typeof a.href == 'string'
        ? ((e = Dt(a.href)),
          (a = rt(n).hoistableStyles),
          (t = a.get(e)),
          t ||
            ((t = { type: 'style', instance: null, count: 0, state: null }),
            a.set(e, t)),
          t)
        : { type: 'void', instance: null, count: 0, state: null };
    case 'link':
      if (
        a.rel === 'stylesheet' &&
        typeof a.href == 'string' &&
        typeof a.precedence == 'string'
      ) {
        f = Dt(a.href);
        var u = rt(n).hoistableStyles,
          i = u.get(f);
        if (
          (i ||
            ((n = n.ownerDocument || n),
            (i = {
              type: 'stylesheet',
              instance: null,
              count: 0,
              state: { loading: 0, preload: null },
            }),
            u.set(f, i),
            (u = n.querySelector(lu(f))) &&
              !u._p &&
              ((i.instance = u), (i.state.loading = 5)),
            ne.has(f) ||
              ((a = {
                rel: 'preload',
                as: 'style',
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy,
              }),
              ne.set(f, a),
              u || $M(n, f, a, i.state))),
          e && t === null)
        )
          throw Error(j(528, ''));
        return i;
      }
      if (e && t !== null) throw Error(j(529, ''));
      return null;
    case 'script':
      return (
        (e = a.async),
        (a = a.src),
        typeof a == 'string' &&
        e &&
        typeof e != 'function' &&
        typeof e != 'symbol'
          ? ((e = Qt(a)),
            (a = rt(n).hoistableScripts),
            (t = a.get(e)),
            t ||
              ((t = { type: 'script', instance: null, count: 0, state: null }),
              a.set(e, t)),
            t)
          : { type: 'void', instance: null, count: 0, state: null }
      );
    default:
      throw Error(j(444, f));
  }
}
function Dt(f) {
  return 'href="' + $f(f) + '"';
}
function lu(f) {
  return 'link[rel="stylesheet"][' + f + ']';
}
function S2(f) {
  return K({}, f, { 'data-precedence': f.precedence, precedence: null });
}
function $M(f, e, a, t) {
  f.querySelector('link[rel="preload"][as="style"][' + e + ']')
    ? (t.loading = 1)
    : ((e = f.createElement('link')),
      (t.preload = e),
      e.addEventListener('load', function () {
        return (t.loading |= 1);
      }),
      e.addEventListener('error', function () {
        return (t.loading |= 2);
      }),
      Cf(e, 'link', a),
      wf(e),
      f.head.appendChild(e));
}
function Qt(f) {
  return '[src="' + $f(f) + '"]';
}
function ru(f) {
  return 'script[async]' + f;
}
function fo(f, e, a) {
  if ((e.count++, e.instance === null))
    switch (e.type) {
      case 'style':
        var t = f.querySelector('style[data-href~="' + $f(a.href) + '"]');
        if (t) return ((e.instance = t), wf(t), t);
        var n = K({}, a, {
          'data-href': a.href,
          'data-precedence': a.precedence,
          href: null,
          precedence: null,
        });
        return (
          (t = (f.ownerDocument || f).createElement('style')),
          wf(t),
          Cf(t, 'style', n),
          Ku(t, a.precedence, f),
          (e.instance = t)
        );
      case 'stylesheet':
        n = Dt(a.href);
        var u = f.querySelector(lu(n));
        if (u) return ((e.state.loading |= 4), (e.instance = u), wf(u), u);
        ((t = S2(a)),
          (n = ne.get(n)) && ur(t, n),
          (u = (f.ownerDocument || f).createElement('link')),
          wf(u));
        var i = u;
        return (
          (i._p = new Promise(function (l, r) {
            ((i.onload = l), (i.onerror = r));
          })),
          Cf(u, 'link', t),
          (e.state.loading |= 4),
          Ku(u, a.precedence, f),
          (e.instance = u)
        );
      case 'script':
        return (
          (u = Qt(a.src)),
          (n = f.querySelector(ru(u)))
            ? ((e.instance = n), wf(n), n)
            : ((t = a),
              (n = ne.get(u)) && ((t = K({}, a)), ir(t, n)),
              (f = f.ownerDocument || f),
              (n = f.createElement('script')),
              wf(n),
              Cf(n, 'link', t),
              f.head.appendChild(n),
              (e.instance = n))
        );
      case 'void':
        return null;
      default:
        throw Error(j(443, e.type));
    }
  else
    e.type === 'stylesheet' &&
      !(e.state.loading & 4) &&
      ((t = e.instance), (e.state.loading |= 4), Ku(t, a.precedence, f));
  return e.instance;
}
function Ku(f, e, a) {
  for (
    var t = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ),
      n = t.length ? t[t.length - 1] : null,
      u = n,
      i = 0;
    i < t.length;
    i++
  ) {
    var l = t[i];
    if (l.dataset.precedence === e) u = l;
    else if (u !== n) break;
  }
  u
    ? u.parentNode.insertBefore(f, u.nextSibling)
    : ((e = a.nodeType === 9 ? a.head : a), e.insertBefore(f, e.firstChild));
}
function ur(f, e) {
  (f.crossOrigin == null && (f.crossOrigin = e.crossOrigin),
    f.referrerPolicy == null && (f.referrerPolicy = e.referrerPolicy),
    f.title == null && (f.title = e.title));
}
function ir(f, e) {
  (f.crossOrigin == null && (f.crossOrigin = e.crossOrigin),
    f.referrerPolicy == null && (f.referrerPolicy = e.referrerPolicy),
    f.integrity == null && (f.integrity = e.integrity));
}
var qu = null;
function eo(f, e, a) {
  if (qu === null) {
    var t = new Map(),
      n = (qu = new Map());
    n.set(a, t);
  } else ((n = qu), (t = n.get(a)), t || ((t = new Map()), n.set(a, t)));
  if (t.has(f)) return t;
  for (
    t.set(f, null), a = a.getElementsByTagName(f), n = 0;
    n < a.length;
    n++
  ) {
    var u = a[n];
    if (
      !(
        u[Wn] ||
        u[pf] ||
        (f === 'link' && u.getAttribute('rel') === 'stylesheet')
      ) &&
      u.namespaceURI !== 'http://www.w3.org/2000/svg'
    ) {
      var i = u.getAttribute(e) || '';
      i = f + i;
      var l = t.get(i);
      l ? l.push(u) : t.set(i, [u]);
    }
  }
  return t;
}
function ao(f, e, a) {
  ((f = f.ownerDocument || f),
    f.head.insertBefore(
      a,
      e === 'title' ? f.querySelector('head > title') : null
    ));
}
function f6(f, e, a) {
  if (a === 1 || e.itemProp != null) return !1;
  switch (f) {
    case 'meta':
    case 'title':
      return !0;
    case 'style':
      if (
        typeof e.precedence != 'string' ||
        typeof e.href != 'string' ||
        e.href === ''
      )
        break;
      return !0;
    case 'link':
      if (
        typeof e.rel != 'string' ||
        typeof e.href != 'string' ||
        e.href === '' ||
        e.onLoad ||
        e.onError
      )
        break;
      switch (e.rel) {
        case 'stylesheet':
          return (
            (f = e.disabled),
            typeof e.precedence == 'string' && f == null
          );
        default:
          return !0;
      }
    case 'script':
      if (
        e.async &&
        typeof e.async != 'function' &&
        typeof e.async != 'symbol' &&
        !e.onLoad &&
        !e.onError &&
        e.src &&
        typeof e.src == 'string'
      )
        return !0;
  }
  return !1;
}
function N2(f) {
  return !(f.type === 'stylesheet' && !(f.state.loading & 3));
}
var xn = null;
function e6() {}
function a6(f, e, a) {
  if (xn === null) throw Error(j(475));
  var t = xn;
  if (
    e.type === 'stylesheet' &&
    (typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
    !(e.state.loading & 4)
  ) {
    if (e.instance === null) {
      var n = Dt(a.href),
        u = f.querySelector(lu(n));
      if (u) {
        ((f = u._p),
          f !== null &&
            typeof f == 'object' &&
            typeof f.then == 'function' &&
            (t.count++, (t = Ei.bind(t)), f.then(t, t)),
          (e.state.loading |= 4),
          (e.instance = u),
          wf(u));
        return;
      }
      ((u = f.ownerDocument || f),
        (a = S2(a)),
        (n = ne.get(n)) && ur(a, n),
        (u = u.createElement('link')),
        wf(u));
      var i = u;
      ((i._p = new Promise(function (l, r) {
        ((i.onload = l), (i.onerror = r));
      })),
        Cf(u, 'link', a),
        (e.instance = u));
    }
    (t.stylesheets === null && (t.stylesheets = new Map()),
      t.stylesheets.set(e, f),
      (f = e.state.preload) &&
        !(e.state.loading & 3) &&
        (t.count++,
        (e = Ei.bind(t)),
        f.addEventListener('load', e),
        f.addEventListener('error', e)));
  }
}
function t6() {
  if (xn === null) throw Error(j(475));
  var f = xn;
  return (
    f.stylesheets && f.count === 0 && $0(f, f.stylesheets),
    0 < f.count
      ? function (e) {
          var a = setTimeout(function () {
            if ((f.stylesheets && $0(f, f.stylesheets), f.unsuspend)) {
              var t = f.unsuspend;
              ((f.unsuspend = null), t());
            }
          }, 6e4);
          return (
            (f.unsuspend = e),
            function () {
              ((f.unsuspend = null), clearTimeout(a));
            }
          );
        }
      : null
  );
}
function Ei() {
  if ((this.count--, this.count === 0)) {
    if (this.stylesheets) $0(this, this.stylesheets);
    else if (this.unsuspend) {
      var f = this.unsuspend;
      ((this.unsuspend = null), f());
    }
  }
}
var Ii = null;
function $0(f, e) {
  ((f.stylesheets = null),
    f.unsuspend !== null &&
      (f.count++, (Ii = new Map()), e.forEach(n6, f), (Ii = null), Ei.call(f)));
}
function n6(f, e) {
  if (!(e.state.loading & 4)) {
    var a = Ii.get(f);
    if (a) var t = a.get(null);
    else {
      ((a = new Map()), Ii.set(f, a));
      for (
        var n = f.querySelectorAll(
            'link[data-precedence],style[data-precedence]'
          ),
          u = 0;
        u < n.length;
        u++
      ) {
        var i = n[u];
        (i.nodeName === 'LINK' || i.getAttribute('media') !== 'not all') &&
          (a.set(i.dataset.precedence, i), (t = i));
      }
      t && a.set(null, t);
    }
    ((n = e.instance),
      (i = n.getAttribute('data-precedence')),
      (u = a.get(i) || t),
      u === t && a.set(null, n),
      a.set(i, n),
      this.count++,
      (t = Ei.bind(this)),
      n.addEventListener('load', t),
      n.addEventListener('error', t),
      u
        ? u.parentNode.insertBefore(n, u.nextSibling)
        : ((f = f.nodeType === 9 ? f.head : f),
          f.insertBefore(n, f.firstChild)),
      (e.state.loading |= 4));
  }
}
var Rn = {
  $$typeof: Te,
  Provider: null,
  Consumer: null,
  _currentValue: Ca,
  _currentValue2: Ca,
  _threadCount: 0,
};
function u6(f, e, a, t, n, u, i, l) {
  ((this.tag = 1),
    (this.containerInfo = f),
    (this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode =
      this.next =
      this.pendingContext =
      this.context =
      this.cancelPendingCommit =
        null),
    (this.callbackPriority = 0),
    (this.expirationTimes = vl(-1)),
    (this.entangledLanes =
      this.shellSuspendCounter =
      this.errorRecoveryDisabledLanes =
      this.expiredLanes =
      this.warmLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = vl(0)),
    (this.hiddenUpdates = vl(null)),
    (this.identifierPrefix = t),
    (this.onUncaughtError = n),
    (this.onCaughtError = u),
    (this.onRecoverableError = i),
    (this.pooledCache = null),
    (this.pooledCacheLanes = 0),
    (this.formState = l),
    (this.incompleteTransitions = new Map()));
}
function T2(f, e, a, t, n, u, i, l, r, c, d, M) {
  return (
    (f = new u6(f, e, a, i, l, r, c, M)),
    (e = 1),
    u === !0 && (e |= 24),
    (u = Bf(3, null, null, e)),
    (f.current = u),
    (u.stateNode = f),
    (e = x1()),
    e.refCount++,
    (f.pooledCache = e),
    e.refCount++,
    (u.memoizedState = { element: t, isDehydrated: a, cache: e }),
    O1(u),
    f
  );
}
function D2(f) {
  return f ? ((f = nt), f) : nt;
}
function E2(f, e, a, t, n, u) {
  ((n = D2(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = aa(e)),
    (t.payload = { element: a }),
    (u = u === void 0 ? null : u),
    u !== null && (t.callback = u),
    (a = ta(f, t, e)),
    a !== null && (_f(a, f, e), Mn(a, f, e)));
}
function to(f, e) {
  if (((f = f.memoizedState), f !== null && f.dehydrated !== null)) {
    var a = f.retryLane;
    f.retryLane = a !== 0 && a < e ? a : e;
  }
}
function lr(f, e) {
  (to(f, e), (f = f.alternate) && to(f, e));
}
function I2(f) {
  if (f.tag === 13) {
    var e = Rt(f, 67108864);
    (e !== null && _f(e, f, 67108864), lr(f, 67108864));
  }
}
var zi = !0;
function i6(f, e, a, t) {
  var n = D.T;
  D.T = null;
  var u = J.p;
  try {
    ((J.p = 2), rr(f, e, a, t));
  } finally {
    ((J.p = u), (D.T = n));
  }
}
function l6(f, e, a, t) {
  var n = D.T;
  D.T = null;
  var u = J.p;
  try {
    ((J.p = 8), rr(f, e, a, t));
  } finally {
    ((J.p = u), (D.T = n));
  }
}
function rr(f, e, a, t) {
  if (zi) {
    var n = f1(t);
    if (n === null) (Fl(f, e, t, Ai, a), no(f, t));
    else if (c6(n, f, e, a, t)) t.stopPropagation();
    else if ((no(f, t), e & 4 && -1 < r6.indexOf(f))) {
      for (; n !== null; ) {
        var u = xt(n);
        if (u !== null)
          switch (u.tag) {
            case 3:
              if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                var i = ha(u.pendingLanes);
                if (i !== 0) {
                  var l = u;
                  for (l.pendingLanes |= 2, l.entangledLanes |= 2; i; ) {
                    var r = 1 << (31 - Zf(i));
                    ((l.entanglements[1] |= r), (i &= ~r));
                  }
                  (ve(u), !(H & 6) && ((ji = be() + 500), iu(0)));
                }
              }
              break;
            case 13:
              ((l = Rt(u, 2)), l !== null && _f(l, u, 2), Fi(), lr(u, 2));
          }
        if (((u = f1(t)), u === null && Fl(f, e, t, Ai, a), u === n)) break;
        n = u;
      }
      n !== null && t.stopPropagation();
    } else Fl(f, e, t, null, a);
  }
}
function f1(f) {
  return ((f = p1(f)), cr(f));
}
var Ai = null;
function cr(f) {
  if (((Ai = null), (f = Fa(f)), f !== null)) {
    var e = Vn(f);
    if (e === null) f = null;
    else {
      var a = e.tag;
      if (a === 13) {
        if (((f = ed(e)), f !== null)) return f;
        f = null;
      } else if (a === 3) {
        if (e.stateNode.current.memoizedState.isDehydrated)
          return e.tag === 3 ? e.stateNode.containerInfo : null;
        f = null;
      } else e !== f && (f = null);
    }
  }
  return ((Ai = f), null);
}
function z2(f) {
  switch (f) {
    case 'beforetoggle':
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'toggle':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 2;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 8;
    case 'message':
      switch (Vg()) {
        case ud:
          return 2;
        case id:
          return 8;
        case ii:
        case Xg:
          return 32;
        case ld:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var e1 = !1,
  ia = null,
  la = null,
  ra = null,
  On = new Map(),
  Yn = new Map(),
  qe = [],
  r6 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
      ' '
    );
function no(f, e) {
  switch (f) {
    case 'focusin':
    case 'focusout':
      ia = null;
      break;
    case 'dragenter':
    case 'dragleave':
      la = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ra = null;
      break;
    case 'pointerover':
    case 'pointerout':
      On.delete(e.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Yn.delete(e.pointerId);
  }
}
function Wt(f, e, a, t, n, u) {
  return f === null || f.nativeEvent !== u
    ? ((f = {
        blockedOn: e,
        domEventName: a,
        eventSystemFlags: t,
        nativeEvent: u,
        targetContainers: [n],
      }),
      e !== null && ((e = xt(e)), e !== null && I2(e)),
      f)
    : ((f.eventSystemFlags |= t),
      (e = f.targetContainers),
      n !== null && e.indexOf(n) === -1 && e.push(n),
      f);
}
function c6(f, e, a, t, n) {
  switch (e) {
    case 'focusin':
      return ((ia = Wt(ia, f, e, a, t, n)), !0);
    case 'dragenter':
      return ((la = Wt(la, f, e, a, t, n)), !0);
    case 'mouseover':
      return ((ra = Wt(ra, f, e, a, t, n)), !0);
    case 'pointerover':
      var u = n.pointerId;
      return (On.set(u, Wt(On.get(u) || null, f, e, a, t, n)), !0);
    case 'gotpointercapture':
      return (
        (u = n.pointerId),
        Yn.set(u, Wt(Yn.get(u) || null, f, e, a, t, n)),
        !0
      );
  }
  return !1;
}
function A2(f) {
  var e = Fa(f.target);
  if (e !== null) {
    var a = Vn(e);
    if (a !== null) {
      if (((e = a.tag), e === 13)) {
        if (((e = ed(a)), e !== null)) {
          ((f.blockedOn = e),
            a3(f.priority, function () {
              if (a.tag === 13) {
                var t = Hf();
                t = h1(t);
                var n = Rt(a, t);
                (n !== null && _f(n, a, t), lr(a, t));
              }
            }));
          return;
        }
      } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
        f.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
        return;
      }
    }
  }
  f.blockedOn = null;
}
function Wu(f) {
  if (f.blockedOn !== null) return !1;
  for (var e = f.targetContainers; 0 < e.length; ) {
    var a = f1(f.nativeEvent);
    if (a === null) {
      a = f.nativeEvent;
      var t = new a.constructor(a.type, a);
      ((w0 = t), a.target.dispatchEvent(t), (w0 = null));
    } else return ((e = xt(a)), e !== null && I2(e), (f.blockedOn = a), !1);
    e.shift();
  }
  return !0;
}
function uo(f, e, a) {
  Wu(f) && a.delete(e);
}
function o6() {
  ((e1 = !1),
    ia !== null && Wu(ia) && (ia = null),
    la !== null && Wu(la) && (la = null),
    ra !== null && Wu(ra) && (ra = null),
    On.forEach(uo),
    Yn.forEach(uo));
}
function Au(f, e) {
  f.blockedOn === e &&
    ((f.blockedOn = null),
    e1 ||
      ((e1 = !0),
      Lf.unstable_scheduleCallback(Lf.unstable_NormalPriority, o6)));
}
var ku = null;
function io(f) {
  ku !== f &&
    ((ku = f),
    Lf.unstable_scheduleCallback(Lf.unstable_NormalPriority, function () {
      ku === f && (ku = null);
      for (var e = 0; e < f.length; e += 3) {
        var a = f[e],
          t = f[e + 1],
          n = f[e + 2];
        if (typeof t != 'function') {
          if (cr(t || a) === null) continue;
          break;
        }
        var u = xt(a);
        u !== null &&
          (f.splice(e, 3),
          (e -= 3),
          x0(u, { pending: !0, data: n, method: a.method, action: t }, t, n));
      }
    }));
}
function Qn(f) {
  function e(r) {
    return Au(r, f);
  }
  (ia !== null && Au(ia, f),
    la !== null && Au(la, f),
    ra !== null && Au(ra, f),
    On.forEach(e),
    Yn.forEach(e));
  for (var a = 0; a < qe.length; a++) {
    var t = qe[a];
    t.blockedOn === f && (t.blockedOn = null);
  }
  for (; 0 < qe.length && ((a = qe[0]), a.blockedOn === null); )
    (A2(a), a.blockedOn === null && qe.shift());
  if (((a = (f.ownerDocument || f).$$reactFormReplay), a != null))
    for (t = 0; t < a.length; t += 3) {
      var n = a[t],
        u = a[t + 1],
        i = n[Rf] || null;
      if (typeof u == 'function') i || io(a);
      else if (i) {
        var l = null;
        if (u && u.hasAttribute('formAction')) {
          if (((n = u), (i = u[Rf] || null))) l = i.formAction;
          else if (cr(n) !== null) continue;
        } else l = i.action;
        (typeof l == 'function' ? (a[t + 1] = l) : (a.splice(t, 3), (t -= 3)),
          io(a));
      }
    }
}
function or(f) {
  this._internalRoot = f;
}
al.prototype.render = or.prototype.render = function (f) {
  var e = this._internalRoot;
  if (e === null) throw Error(j(409));
  var a = e.current,
    t = Hf();
  E2(a, t, f, e, null, null);
};
al.prototype.unmount = or.prototype.unmount = function () {
  var f = this._internalRoot;
  if (f !== null) {
    this._internalRoot = null;
    var e = f.containerInfo;
    (E2(f.current, 2, null, f, null, null), Fi(), (e[kt] = null));
  }
};
function al(f) {
  this._internalRoot = f;
}
al.prototype.unstable_scheduleHydration = function (f) {
  if (f) {
    var e = sd();
    f = { blockedOn: null, target: f, priority: e };
    for (var a = 0; a < qe.length && e !== 0 && e < qe[a].priority; a++);
    (qe.splice(a, 0, f), a === 0 && A2(f));
  }
};
var lo = $o.version;
if (lo !== '19.1.0') throw Error(j(527, lo, '19.1.0'));
J.findDOMNode = function (f) {
  var e = f._reactInternals;
  if (e === void 0)
    throw typeof f.render == 'function'
      ? Error(j(188))
      : ((f = Object.keys(f).join(',')), Error(j(268, f)));
  return (
    (f = Bg(e)),
    (f = f !== null ? ad(f) : null),
    (f = f === null ? null : f.stateNode),
    f
  );
};
var d6 = {
  bundleType: 0,
  version: '19.1.0',
  rendererPackageName: 'react-dom',
  currentDispatcherRef: D,
  reconcilerVersion: '19.1.0',
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var xu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xu.isDisabled && xu.supportsFiber)
    try {
      ((Xn = xu.inject(d6)), (Jf = xu));
    } catch {}
}
Bi.createRoot = function (f, e) {
  if (!fd(f)) throw Error(j(299));
  var a = !1,
    t = '',
    n = Ts,
    u = Ds,
    i = Es,
    l = null;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (a = !0),
      e.identifierPrefix !== void 0 && (t = e.identifierPrefix),
      e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
      e.onCaughtError !== void 0 && (u = e.onCaughtError),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError),
      e.unstable_transitionCallbacks !== void 0 &&
        (l = e.unstable_transitionCallbacks)),
    (e = T2(f, 1, !1, null, null, a, t, n, u, i, l, null)),
    (f[kt] = e.current),
    nr(f),
    new or(e)
  );
};
Bi.hydrateRoot = function (f, e, a) {
  if (!fd(f)) throw Error(j(299));
  var t = !1,
    n = '',
    u = Ts,
    i = Ds,
    l = Es,
    r = null,
    c = null;
  return (
    a != null &&
      (a.unstable_strictMode === !0 && (t = !0),
      a.identifierPrefix !== void 0 && (n = a.identifierPrefix),
      a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
      a.onCaughtError !== void 0 && (i = a.onCaughtError),
      a.onRecoverableError !== void 0 && (l = a.onRecoverableError),
      a.unstable_transitionCallbacks !== void 0 &&
        (r = a.unstable_transitionCallbacks),
      a.formState !== void 0 && (c = a.formState)),
    (e = T2(f, 1, !0, e, a ?? null, t, n, u, i, l, r, c)),
    (e.context = D2(null)),
    (a = e.current),
    (t = Hf()),
    (t = h1(t)),
    (n = aa(t)),
    (n.callback = null),
    ta(a, n, t),
    (a = t),
    (e.current.lanes = a),
    qn(e, a),
    ve(e),
    (f[kt] = e.current),
    nr(f),
    new al(e)
  );
};
Bi.version = '19.1.0';
function k2() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(k2);
    } catch (f) {
      console.error(f);
    }
}
(k2(), (Vo.exports = Bi));
var s6 = Vo.exports;
const py = Yo(s6);
/**
 * react-router v7.9.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var ro = 'popstate';
function g6(f = {}) {
  function e(t, n) {
    let { pathname: u, search: i, hash: l } = t.location;
    return a1(
      '',
      { pathname: u, search: i, hash: l },
      (n.state && n.state.usr) || null,
      (n.state && n.state.key) || 'default'
    );
  }
  function a(t, n) {
    return typeof n == 'string' ? n : Un(n);
  }
  return L6(e, a, null, f);
}
function ef(f, e) {
  if (f === !1 || f === null || typeof f > 'u') throw new Error(e);
}
function ye(f, e) {
  if (!f) {
    typeof console < 'u' && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function M6() {
  return Math.random().toString(36).substring(2, 10);
}
function co(f, e) {
  return { usr: f.state, key: f.key, idx: e };
}
function a1(f, e, a = null, t) {
  return {
    pathname: typeof f == 'string' ? f : f.pathname,
    search: '',
    hash: '',
    ...(typeof e == 'string' ? Ut(e) : e),
    state: a,
    key: (e && e.key) || t || M6(),
  };
}
function Un({ pathname: f = '/', search: e = '', hash: a = '' }) {
  return (
    e && e !== '?' && (f += e.charAt(0) === '?' ? e : '?' + e),
    a && a !== '#' && (f += a.charAt(0) === '#' ? a : '#' + a),
    f
  );
}
function Ut(f) {
  let e = {};
  if (f) {
    let a = f.indexOf('#');
    a >= 0 && ((e.hash = f.substring(a)), (f = f.substring(0, a)));
    let t = f.indexOf('?');
    (t >= 0 && ((e.search = f.substring(t)), (f = f.substring(0, t))),
      f && (e.pathname = f));
  }
  return e;
}
function L6(f, e, a, t = {}) {
  let { window: n = document.defaultView, v5Compat: u = !1 } = t,
    i = n.history,
    l = 'POP',
    r = null,
    c = d();
  c == null && ((c = 0), i.replaceState({ ...i.state, idx: c }, ''));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function M() {
    l = 'POP';
    let v = d(),
      L = v == null ? null : v - c;
    ((c = v), r && r({ action: l, location: h.location, delta: L }));
  }
  function s(v, L) {
    l = 'PUSH';
    let g = a1(h.location, v, L);
    c = d() + 1;
    let m = co(g, c),
      w = h.createHref(g);
    try {
      i.pushState(m, '', w);
    } catch (C) {
      if (C instanceof DOMException && C.name === 'DataCloneError') throw C;
      n.location.assign(w);
    }
    u && r && r({ action: l, location: h.location, delta: 1 });
  }
  function b(v, L) {
    l = 'REPLACE';
    let g = a1(h.location, v, L);
    c = d();
    let m = co(g, c),
      w = h.createHref(g);
    (i.replaceState(m, '', w),
      u && r && r({ action: l, location: h.location, delta: 0 }));
  }
  function y(v) {
    return m6(v);
  }
  let h = {
    get action() {
      return l;
    },
    get location() {
      return f(n, i);
    },
    listen(v) {
      if (r) throw new Error('A history only accepts one active listener');
      return (
        n.addEventListener(ro, M),
        (r = v),
        () => {
          (n.removeEventListener(ro, M), (r = null));
        }
      );
    },
    createHref(v) {
      return e(n, v);
    },
    createURL: y,
    encodeLocation(v) {
      let L = y(v);
      return { pathname: L.pathname, search: L.search, hash: L.hash };
    },
    push: s,
    replace: b,
    go(v) {
      return i.go(v);
    },
  };
  return h;
}
function m6(f, e = !1) {
  let a = 'http://localhost';
  (typeof window < 'u' &&
    (a =
      window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href),
    ef(a, 'No window.location.(origin|href) available to create URL'));
  let t = typeof f == 'string' ? f : Un(f);
  return (
    (t = t.replace(/ $/, '%20')),
    !e && t.startsWith('//') && (t = a + t),
    new URL(t, a)
  );
}
function x2(f, e, a = '/') {
  return b6(f, e, a, !1);
}
function b6(f, e, a, t) {
  let n = typeof e == 'string' ? Ut(e) : e,
    u = Ue(n.pathname || '/', a);
  if (u == null) return null;
  let i = R2(f);
  w6(i);
  let l = null;
  for (let r = 0; l == null && r < i.length; ++r) {
    let c = E6(u);
    l = T6(i[r], c, t);
  }
  return l;
}
function R2(f, e = [], a = [], t = '', n = !1) {
  let u = (i, l, r = n, c) => {
    let d = {
      relativePath: c === void 0 ? i.path || '' : c,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    if (d.relativePath.startsWith('/')) {
      if (!d.relativePath.startsWith(t) && r) return;
      (ef(
        d.relativePath.startsWith(t),
        `Absolute route path "${d.relativePath}" nested under path "${t}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (d.relativePath = d.relativePath.slice(t.length)));
    }
    let M = xe([t, d.relativePath]),
      s = a.concat(d);
    (i.children &&
      i.children.length > 0 &&
      (ef(
        i.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${M}".`
      ),
      R2(i.children, e, s, M, r)),
      !(i.path == null && !i.index) &&
        e.push({ path: M, score: S6(M, i.index), routesMeta: s }));
  };
  return (
    f.forEach((i, l) => {
      var r;
      if (i.path === '' || !((r = i.path) != null && r.includes('?'))) u(i, l);
      else for (let c of O2(i.path)) u(i, l, !0, c);
    }),
    e
  );
}
function O2(f) {
  let e = f.split('/');
  if (e.length === 0) return [];
  let [a, ...t] = e,
    n = a.endsWith('?'),
    u = a.replace(/\?$/, '');
  if (t.length === 0) return n ? [u, ''] : [u];
  let i = O2(t.join('/')),
    l = [];
  return (
    l.push(...i.map((r) => (r === '' ? u : [u, r].join('/')))),
    n && l.push(...i),
    l.map((r) => (f.startsWith('/') && r === '' ? '/' : r))
  );
}
function w6(f) {
  f.sort((e, a) =>
    e.score !== a.score
      ? a.score - e.score
      : N6(
          e.routesMeta.map((t) => t.childrenIndex),
          a.routesMeta.map((t) => t.childrenIndex)
        )
  );
}
var y6 = /^:[\w-]+$/,
  h6 = 3,
  v6 = 2,
  j6 = 1,
  C6 = 10,
  p6 = -2,
  oo = (f) => f === '*';
function S6(f, e) {
  let a = f.split('/'),
    t = a.length;
  return (
    a.some(oo) && (t += p6),
    e && (t += v6),
    a
      .filter((n) => !oo(n))
      .reduce((n, u) => n + (y6.test(u) ? h6 : u === '' ? j6 : C6), t)
  );
}
function N6(f, e) {
  return f.length === e.length && f.slice(0, -1).every((t, n) => t === e[n])
    ? f[f.length - 1] - e[e.length - 1]
    : 0;
}
function T6(f, e, a = !1) {
  let { routesMeta: t } = f,
    n = {},
    u = '/',
    i = [];
  for (let l = 0; l < t.length; ++l) {
    let r = t[l],
      c = l === t.length - 1,
      d = u === '/' ? e : e.slice(u.length) || '/',
      M = ki(
        { path: r.relativePath, caseSensitive: r.caseSensitive, end: c },
        d
      ),
      s = r.route;
    if (
      (!M &&
        c &&
        a &&
        !t[t.length - 1].route.index &&
        (M = ki(
          { path: r.relativePath, caseSensitive: r.caseSensitive, end: !1 },
          d
        )),
      !M)
    )
      return null;
    (Object.assign(n, M.params),
      i.push({
        params: n,
        pathname: xe([u, M.pathname]),
        pathnameBase: k6(xe([u, M.pathnameBase])),
        route: s,
      }),
      M.pathnameBase !== '/' && (u = xe([u, M.pathnameBase])));
  }
  return i;
}
function ki(f, e) {
  typeof f == 'string' && (f = { path: f, caseSensitive: !1, end: !0 });
  let [a, t] = D6(f.path, f.caseSensitive, f.end),
    n = e.match(a);
  if (!n) return null;
  let u = n[0],
    i = u.replace(/(.)\/+$/, '$1'),
    l = n.slice(1);
  return {
    params: t.reduce((c, { paramName: d, isOptional: M }, s) => {
      if (d === '*') {
        let y = l[s] || '';
        i = u.slice(0, u.length - y.length).replace(/(.)\/+$/, '$1');
      }
      const b = l[s];
      return (
        M && !b ? (c[d] = void 0) : (c[d] = (b || '').replace(/%2F/g, '/')),
        c
      );
    }, {}),
    pathname: u,
    pathnameBase: i,
    pattern: f,
  };
}
function D6(f, e = !1, a = !0) {
  ye(
    f === '*' || !f.endsWith('*') || f.endsWith('/*'),
    `Route path "${f}" will be treated as if it were "${f.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${f.replace(/\*$/, '/*')}".`
  );
  let t = [],
    n =
      '^' +
      f
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, l, r) => (
            t.push({ paramName: l, isOptional: r != null }),
            r ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    f.endsWith('*')
      ? (t.push({ paramName: '*' }),
        (n += f === '*' || f === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : a
        ? (n += '\\/*$')
        : f !== '' && f !== '/' && (n += '(?:(?=\\/|$))'),
    [new RegExp(n, e ? void 0 : 'i'), t]
  );
}
function E6(f) {
  try {
    return f
      .split('/')
      .map((e) => decodeURIComponent(e).replace(/\//g, '%2F'))
      .join('/');
  } catch (e) {
    return (
      ye(
        !1,
        `The URL path "${f}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`
      ),
      f
    );
  }
}
function Ue(f, e) {
  if (e === '/') return f;
  if (!f.toLowerCase().startsWith(e.toLowerCase())) return null;
  let a = e.endsWith('/') ? e.length - 1 : e.length,
    t = f.charAt(a);
  return t && t !== '/' ? null : f.slice(a) || '/';
}
function I6(f, e = '/') {
  let {
    pathname: a,
    search: t = '',
    hash: n = '',
  } = typeof f == 'string' ? Ut(f) : f;
  return {
    pathname: a ? (a.startsWith('/') ? a : z6(a, e)) : e,
    search: x6(t),
    hash: R6(n),
  };
}
function z6(f, e) {
  let a = e.replace(/\/+$/, '').split('/');
  return (
    f.split('/').forEach((n) => {
      n === '..' ? a.length > 1 && a.pop() : n !== '.' && a.push(n);
    }),
    a.length > 1 ? a.join('/') : '/'
  );
}
function f0(f, e, a, t) {
  return `Cannot include a '${f}' character in a manually specified \`to.${e}\` field [${JSON.stringify(t)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function A6(f) {
  return f.filter(
    (e, a) => a === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function Y2(f) {
  let e = A6(f);
  return e.map((a, t) => (t === e.length - 1 ? a.pathname : a.pathnameBase));
}
function Q2(f, e, a, t = !1) {
  let n;
  typeof f == 'string'
    ? (n = Ut(f))
    : ((n = { ...f }),
      ef(
        !n.pathname || !n.pathname.includes('?'),
        f0('?', 'pathname', 'search', n)
      ),
      ef(
        !n.pathname || !n.pathname.includes('#'),
        f0('#', 'pathname', 'hash', n)
      ),
      ef(!n.search || !n.search.includes('#'), f0('#', 'search', 'hash', n)));
  let u = f === '' || n.pathname === '',
    i = u ? '/' : n.pathname,
    l;
  if (i == null) l = a;
  else {
    let M = e.length - 1;
    if (!t && i.startsWith('..')) {
      let s = i.split('/');
      for (; s[0] === '..'; ) (s.shift(), (M -= 1));
      n.pathname = s.join('/');
    }
    l = M >= 0 ? e[M] : '/';
  }
  let r = I6(n, l),
    c = i && i !== '/' && i.endsWith('/'),
    d = (u || i === '.') && a.endsWith('/');
  return (!r.pathname.endsWith('/') && (c || d) && (r.pathname += '/'), r);
}
var xe = (f) => f.join('/').replace(/\/\/+/g, '/'),
  k6 = (f) => f.replace(/\/+$/, '').replace(/^\/*/, '/'),
  x6 = (f) => (!f || f === '?' ? '' : f.startsWith('?') ? f : '?' + f),
  R6 = (f) => (!f || f === '#' ? '' : f.startsWith('#') ? f : '#' + f);
function O6(f) {
  return (
    f != null &&
    typeof f.status == 'number' &&
    typeof f.statusText == 'string' &&
    typeof f.internal == 'boolean' &&
    'data' in f
  );
}
var U2 = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(U2);
var Y6 = ['GET', ...U2];
new Set(Y6);
var Bt = o.createContext(null);
Bt.displayName = 'DataRouter';
var tl = o.createContext(null);
tl.displayName = 'DataRouterState';
o.createContext(!1);
var B2 = o.createContext({ isTransitioning: !1 });
B2.displayName = 'ViewTransition';
var Q6 = o.createContext(new Map());
Q6.displayName = 'Fetchers';
var U6 = o.createContext(null);
U6.displayName = 'Await';
var je = o.createContext(null);
je.displayName = 'Navigation';
var cu = o.createContext(null);
cu.displayName = 'Location';
var se = o.createContext({ outlet: null, matches: [], isDataRoute: !1 });
se.displayName = 'Route';
var dr = o.createContext(null);
dr.displayName = 'RouteError';
function B6(f, { relative: e } = {}) {
  ef(
    ou(),
    'useHref() may be used only in the context of a <Router> component.'
  );
  let { basename: a, navigator: t } = o.useContext(je),
    { hash: n, pathname: u, search: i } = du(f, { relative: e }),
    l = u;
  return (
    a !== '/' && (l = u === '/' ? a : xe([a, u])),
    t.createHref({ pathname: l, search: i, hash: n })
  );
}
function ou() {
  return o.useContext(cu) != null;
}
function Qa() {
  return (
    ef(
      ou(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    o.useContext(cu).location
  );
}
var G2 =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function J2(f) {
  o.useContext(je).static || o.useLayoutEffect(f);
}
function G6() {
  let { isDataRoute: f } = o.useContext(se);
  return f ? aL() : J6();
}
function J6() {
  ef(
    ou(),
    'useNavigate() may be used only in the context of a <Router> component.'
  );
  let f = o.useContext(Bt),
    { basename: e, navigator: a } = o.useContext(je),
    { matches: t } = o.useContext(se),
    { pathname: n } = Qa(),
    u = JSON.stringify(Y2(t)),
    i = o.useRef(!1);
  return (
    J2(() => {
      i.current = !0;
    }),
    o.useCallback(
      (r, c = {}) => {
        if ((ye(i.current, G2), !i.current)) return;
        if (typeof r == 'number') {
          a.go(r);
          return;
        }
        let d = Q2(r, JSON.parse(u), n, c.relative === 'path');
        (f == null &&
          e !== '/' &&
          (d.pathname = d.pathname === '/' ? e : xe([e, d.pathname])),
          (c.replace ? a.replace : a.push)(d, c.state, c));
      },
      [e, a, u, n, f]
    )
  );
}
var Z6 = o.createContext(null);
function H6(f) {
  let e = o.useContext(se).outlet;
  return o.useMemo(
    () => e && o.createElement(Z6.Provider, { value: f }, e),
    [e, f]
  );
}
function Sy() {
  let { matches: f } = o.useContext(se),
    e = f[f.length - 1];
  return e ? e.params : {};
}
function du(f, { relative: e } = {}) {
  let { matches: a } = o.useContext(se),
    { pathname: t } = Qa(),
    n = JSON.stringify(Y2(a));
  return o.useMemo(() => Q2(f, JSON.parse(n), t, e === 'path'), [f, n, t, e]);
}
function _6(f, e) {
  return Z2(f, e);
}
function Z2(f, e, a, t, n) {
  var g;
  ef(
    ou(),
    'useRoutes() may be used only in the context of a <Router> component.'
  );
  let { navigator: u } = o.useContext(je),
    { matches: i } = o.useContext(se),
    l = i[i.length - 1],
    r = l ? l.params : {},
    c = l ? l.pathname : '/',
    d = l ? l.pathnameBase : '/',
    M = l && l.route;
  {
    let m = (M && M.path) || '';
    H2(
      c,
      !M || m.endsWith('*') || m.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m === '/' ? '*' : `${m}/*`}">.`
    );
  }
  let s = Qa(),
    b;
  if (e) {
    let m = typeof e == 'string' ? Ut(e) : e;
    (ef(
      d === '/' || ((g = m.pathname) == null ? void 0 : g.startsWith(d)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${m.pathname}" was given in the \`location\` prop.`
    ),
      (b = m));
  } else b = s;
  let y = b.pathname || '/',
    h = y;
  if (d !== '/') {
    let m = d.replace(/^\//, '').split('/');
    h = '/' + y.replace(/^\//, '').split('/').slice(m.length).join('/');
  }
  let v = x2(f, { pathname: h });
  (ye(
    M || v != null,
    `No routes matched location "${b.pathname}${b.search}${b.hash}" `
  ),
    ye(
      v == null ||
        v[v.length - 1].route.element !== void 0 ||
        v[v.length - 1].route.Component !== void 0 ||
        v[v.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let L = q6(
    v &&
      v.map((m) =>
        Object.assign({}, m, {
          params: Object.assign({}, r, m.params),
          pathname: xe([
            d,
            u.encodeLocation
              ? u.encodeLocation(
                  m.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23')
                ).pathname
              : m.pathname,
          ]),
          pathnameBase:
            m.pathnameBase === '/'
              ? d
              : xe([
                  d,
                  u.encodeLocation
                    ? u.encodeLocation(
                        m.pathnameBase
                          .replace(/\?/g, '%3F')
                          .replace(/#/g, '%23')
                      ).pathname
                    : m.pathnameBase,
                ]),
        })
      ),
    i,
    a,
    t,
    n
  );
  return e && L
    ? o.createElement(
        cu.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...b,
            },
            navigationType: 'POP',
          },
        },
        L
      )
    : L;
}
function P6() {
  let f = eL(),
    e = O6(f)
      ? `${f.status} ${f.statusText}`
      : f instanceof Error
        ? f.message
        : JSON.stringify(f),
    a = f instanceof Error ? f.stack : null,
    t = 'rgba(200,200,200, 0.5)',
    n = { padding: '0.5rem', backgroundColor: t },
    u = { padding: '2px 4px', backgroundColor: t },
    i = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', f),
    (i = o.createElement(
      o.Fragment,
      null,
      o.createElement('p', null, '💿 Hey developer 👋'),
      o.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        o.createElement('code', { style: u }, 'ErrorBoundary'),
        ' or',
        ' ',
        o.createElement('code', { style: u }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    o.createElement(
      o.Fragment,
      null,
      o.createElement('h2', null, 'Unexpected Application Error!'),
      o.createElement('h3', { style: { fontStyle: 'italic' } }, e),
      a ? o.createElement('pre', { style: n }, a) : null,
      i
    )
  );
}
var V6 = o.createElement(P6, null),
  X6 = class extends o.Component {
    constructor(f) {
      (super(f),
        (this.state = {
          location: f.location,
          revalidation: f.revalidation,
          error: f.error,
        }));
    }
    static getDerivedStateFromError(f) {
      return { error: f };
    }
    static getDerivedStateFromProps(f, e) {
      return e.location !== f.location ||
        (e.revalidation !== 'idle' && f.revalidation === 'idle')
        ? { error: f.error, location: f.location, revalidation: f.revalidation }
        : {
            error: f.error !== void 0 ? f.error : e.error,
            location: e.location,
            revalidation: f.revalidation || e.revalidation,
          };
    }
    componentDidCatch(f, e) {
      this.props.unstable_onError
        ? this.props.unstable_onError(f, e)
        : console.error(
            'React Router caught the following error during render',
            f
          );
    }
    render() {
      return this.state.error !== void 0
        ? o.createElement(
            se.Provider,
            { value: this.props.routeContext },
            o.createElement(dr.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function K6({ routeContext: f, match: e, children: a }) {
  let t = o.useContext(Bt);
  return (
    t &&
      t.static &&
      t.staticContext &&
      (e.route.errorElement || e.route.ErrorBoundary) &&
      (t.staticContext._deepestRenderedBoundaryId = e.route.id),
    o.createElement(se.Provider, { value: f }, a)
  );
}
function q6(f, e = [], a = null, t = null, n = null) {
  if (f == null) {
    if (!a) return null;
    if (a.errors) f = a.matches;
    else if (e.length === 0 && !a.initialized && a.matches.length > 0)
      f = a.matches;
    else return null;
  }
  let u = f,
    i = a == null ? void 0 : a.errors;
  if (i != null) {
    let c = u.findIndex(
      (d) => d.route.id && (i == null ? void 0 : i[d.route.id]) !== void 0
    );
    (ef(
      c >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(i).join(',')}`
    ),
      (u = u.slice(0, Math.min(u.length, c + 1))));
  }
  let l = !1,
    r = -1;
  if (a)
    for (let c = 0; c < u.length; c++) {
      let d = u[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (r = c),
        d.route.id)
      ) {
        let { loaderData: M, errors: s } = a,
          b =
            d.route.loader &&
            !M.hasOwnProperty(d.route.id) &&
            (!s || s[d.route.id] === void 0);
        if (d.route.lazy || b) {
          ((l = !0), r >= 0 ? (u = u.slice(0, r + 1)) : (u = [u[0]]));
          break;
        }
      }
    }
  return u.reduceRight((c, d, M) => {
    let s,
      b = !1,
      y = null,
      h = null;
    a &&
      ((s = i && d.route.id ? i[d.route.id] : void 0),
      (y = d.route.errorElement || V6),
      l &&
        (r < 0 && M === 0
          ? (H2(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (b = !0),
            (h = null))
          : r === M &&
            ((b = !0), (h = d.route.hydrateFallbackElement || null))));
    let v = e.concat(u.slice(0, M + 1)),
      L = () => {
        let g;
        return (
          s
            ? (g = y)
            : b
              ? (g = h)
              : d.route.Component
                ? (g = o.createElement(d.route.Component, null))
                : d.route.element
                  ? (g = d.route.element)
                  : (g = c),
          o.createElement(K6, {
            match: d,
            routeContext: { outlet: c, matches: v, isDataRoute: a != null },
            children: g,
          })
        );
      };
    return a && (d.route.ErrorBoundary || d.route.errorElement || M === 0)
      ? o.createElement(X6, {
          location: a.location,
          revalidation: a.revalidation,
          component: y,
          error: s,
          children: L(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 },
          unstable_onError: t,
        })
      : L();
  }, null);
}
function sr(f) {
  return `${f} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function W6(f) {
  let e = o.useContext(Bt);
  return (ef(e, sr(f)), e);
}
function F6(f) {
  let e = o.useContext(tl);
  return (ef(e, sr(f)), e);
}
function $6(f) {
  let e = o.useContext(se);
  return (ef(e, sr(f)), e);
}
function gr(f) {
  let e = $6(f),
    a = e.matches[e.matches.length - 1];
  return (
    ef(
      a.route.id,
      `${f} can only be used on routes that contain a unique "id"`
    ),
    a.route.id
  );
}
function fL() {
  return gr('useRouteId');
}
function eL() {
  var t;
  let f = o.useContext(dr),
    e = F6('useRouteError'),
    a = gr('useRouteError');
  return f !== void 0 ? f : (t = e.errors) == null ? void 0 : t[a];
}
function aL() {
  let { router: f } = W6('useNavigate'),
    e = gr('useNavigate'),
    a = o.useRef(!1);
  return (
    J2(() => {
      a.current = !0;
    }),
    o.useCallback(
      async (n, u = {}) => {
        (ye(a.current, G2),
          a.current &&
            (typeof n == 'number'
              ? f.navigate(n)
              : await f.navigate(n, { fromRouteId: e, ...u })));
      },
      [f, e]
    )
  );
}
var so = {};
function H2(f, e, a) {
  !e && !so[f] && ((so[f] = !0), ye(!1, a));
}
o.memo(tL);
function tL({ routes: f, future: e, state: a, unstable_onError: t }) {
  return Z2(f, void 0, a, t, e);
}
function Ny(f) {
  return H6(f.context);
}
function nL(f) {
  ef(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function uL({
  basename: f = '/',
  children: e = null,
  location: a,
  navigationType: t = 'POP',
  navigator: n,
  static: u = !1,
}) {
  ef(
    !ou(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let i = f.replace(/^\/*/, '/'),
    l = o.useMemo(
      () => ({ basename: i, navigator: n, static: u, future: {} }),
      [i, n, u]
    );
  typeof a == 'string' && (a = Ut(a));
  let {
      pathname: r = '/',
      search: c = '',
      hash: d = '',
      state: M = null,
      key: s = 'default',
    } = a,
    b = o.useMemo(() => {
      let y = Ue(r, i);
      return y == null
        ? null
        : {
            location: { pathname: y, search: c, hash: d, state: M, key: s },
            navigationType: t,
          };
    }, [i, r, c, d, M, s, t]);
  return (
    ye(
      b != null,
      `<Router basename="${i}"> is not able to match the URL "${r}${c}${d}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    b == null
      ? null
      : o.createElement(
          je.Provider,
          { value: l },
          o.createElement(cu.Provider, { children: e, value: b })
        )
  );
}
function Ty({ children: f, location: e }) {
  return _6(t1(f), e);
}
function t1(f, e = []) {
  let a = [];
  return (
    o.Children.forEach(f, (t, n) => {
      if (!o.isValidElement(t)) return;
      let u = [...e, n];
      if (t.type === o.Fragment) {
        a.push.apply(a, t1(t.props.children, u));
        return;
      }
      (ef(
        t.type === nL,
        `[${typeof t.type == 'string' ? t.type : t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        ef(
          !t.props.index || !t.props.children,
          'An index route cannot have child routes.'
        ));
      let i = {
        id: t.props.id || u.join('-'),
        caseSensitive: t.props.caseSensitive,
        element: t.props.element,
        Component: t.props.Component,
        index: t.props.index,
        path: t.props.path,
        middleware: t.props.middleware,
        loader: t.props.loader,
        action: t.props.action,
        hydrateFallbackElement: t.props.hydrateFallbackElement,
        HydrateFallback: t.props.HydrateFallback,
        errorElement: t.props.errorElement,
        ErrorBoundary: t.props.ErrorBoundary,
        hasErrorBoundary:
          t.props.hasErrorBoundary === !0 ||
          t.props.ErrorBoundary != null ||
          t.props.errorElement != null,
        shouldRevalidate: t.props.shouldRevalidate,
        handle: t.props.handle,
        lazy: t.props.lazy,
      };
      (t.props.children && (i.children = t1(t.props.children, u)), a.push(i));
    }),
    a
  );
}
var Fu = 'get',
  $u = 'application/x-www-form-urlencoded';
function nl(f) {
  return f != null && typeof f.tagName == 'string';
}
function iL(f) {
  return nl(f) && f.tagName.toLowerCase() === 'button';
}
function lL(f) {
  return nl(f) && f.tagName.toLowerCase() === 'form';
}
function rL(f) {
  return nl(f) && f.tagName.toLowerCase() === 'input';
}
function cL(f) {
  return !!(f.metaKey || f.altKey || f.ctrlKey || f.shiftKey);
}
function oL(f, e) {
  return f.button === 0 && (!e || e === '_self') && !cL(f);
}
var Ru = null;
function dL() {
  if (Ru === null)
    try {
      (new FormData(document.createElement('form'), 0), (Ru = !1));
    } catch {
      Ru = !0;
    }
  return Ru;
}
var sL = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function e0(f) {
  return f != null && !sL.has(f)
    ? (ye(
        !1,
        `"${f}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$u}"`
      ),
      null)
    : f;
}
function gL(f, e) {
  let a, t, n, u, i;
  if (lL(f)) {
    let l = f.getAttribute('action');
    ((t = l ? Ue(l, e) : null),
      (a = f.getAttribute('method') || Fu),
      (n = e0(f.getAttribute('enctype')) || $u),
      (u = new FormData(f)));
  } else if (iL(f) || (rL(f) && (f.type === 'submit' || f.type === 'image'))) {
    let l = f.form;
    if (l == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let r = f.getAttribute('formaction') || l.getAttribute('action');
    if (
      ((t = r ? Ue(r, e) : null),
      (a = f.getAttribute('formmethod') || l.getAttribute('method') || Fu),
      (n =
        e0(f.getAttribute('formenctype')) ||
        e0(l.getAttribute('enctype')) ||
        $u),
      (u = new FormData(l, f)),
      !dL())
    ) {
      let { name: c, type: d, value: M } = f;
      if (d === 'image') {
        let s = c ? `${c}.` : '';
        (u.append(`${s}x`, '0'), u.append(`${s}y`, '0'));
      } else c && u.append(c, M);
    }
  } else {
    if (nl(f))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((a = Fu), (t = null), (n = $u), (i = f));
  }
  return (
    u && n === 'text/plain' && ((i = u), (u = void 0)),
    { action: t, method: a.toLowerCase(), encType: n, formData: u, body: i }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function Mr(f, e) {
  if (f === !1 || f === null || typeof f > 'u') throw new Error(e);
}
function ML(f, e, a) {
  let t =
    typeof f == 'string'
      ? new URL(
          f,
          typeof window > 'u' ? 'server://singlefetch/' : window.location.origin
        )
      : f;
  return (
    t.pathname === '/'
      ? (t.pathname = `_root.${a}`)
      : e && Ue(t.pathname, e) === '/'
        ? (t.pathname = `${e.replace(/\/$/, '')}/_root.${a}`)
        : (t.pathname = `${t.pathname.replace(/\/$/, '')}.${a}`),
    t
  );
}
async function LL(f, e) {
  if (f.id in e) return e[f.id];
  try {
    let a = await import(f.module);
    return ((e[f.id] = a), a);
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${f.module}\`, reloading page...`
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function mL(f) {
  return f == null
    ? !1
    : f.href == null
      ? f.rel === 'preload' &&
        typeof f.imageSrcSet == 'string' &&
        typeof f.imageSizes == 'string'
      : typeof f.rel == 'string' && typeof f.href == 'string';
}
async function bL(f, e, a) {
  let t = await Promise.all(
    f.map(async (n) => {
      let u = e.routes[n.route.id];
      if (u) {
        let i = await LL(u, a);
        return i.links ? i.links() : [];
      }
      return [];
    })
  );
  return vL(
    t
      .flat(1)
      .filter(mL)
      .filter((n) => n.rel === 'stylesheet' || n.rel === 'preload')
      .map((n) =>
        n.rel === 'stylesheet'
          ? { ...n, rel: 'prefetch', as: 'style' }
          : { ...n, rel: 'prefetch' }
      )
  );
}
function go(f, e, a, t, n, u) {
  let i = (r, c) => (a[c] ? r.route.id !== a[c].route.id : !0),
    l = (r, c) => {
      var d;
      return (
        a[c].pathname !== r.pathname ||
        (((d = a[c].route.path) == null ? void 0 : d.endsWith('*')) &&
          a[c].params['*'] !== r.params['*'])
      );
    };
  return u === 'assets'
    ? e.filter((r, c) => i(r, c) || l(r, c))
    : u === 'data'
      ? e.filter((r, c) => {
          var M;
          let d = t.routes[r.route.id];
          if (!d || !d.hasLoader) return !1;
          if (i(r, c) || l(r, c)) return !0;
          if (r.route.shouldRevalidate) {
            let s = r.route.shouldRevalidate({
              currentUrl: new URL(
                n.pathname + n.search + n.hash,
                window.origin
              ),
              currentParams: ((M = a[0]) == null ? void 0 : M.params) || {},
              nextUrl: new URL(f, window.origin),
              nextParams: r.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof s == 'boolean') return s;
          }
          return !0;
        })
      : [];
}
function wL(f, e, { includeHydrateFallback: a } = {}) {
  return yL(
    f
      .map((t) => {
        let n = e.routes[t.route.id];
        if (!n) return [];
        let u = [n.module];
        return (
          n.clientActionModule && (u = u.concat(n.clientActionModule)),
          n.clientLoaderModule && (u = u.concat(n.clientLoaderModule)),
          a &&
            n.hydrateFallbackModule &&
            (u = u.concat(n.hydrateFallbackModule)),
          n.imports && (u = u.concat(n.imports)),
          u
        );
      })
      .flat(1)
  );
}
function yL(f) {
  return [...new Set(f)];
}
function hL(f) {
  let e = {},
    a = Object.keys(f).sort();
  for (let t of a) e[t] = f[t];
  return e;
}
function vL(f, e) {
  let a = new Set();
  return (
    new Set(e),
    f.reduce((t, n) => {
      let u = JSON.stringify(hL(n));
      return (a.has(u) || (a.add(u), t.push({ key: u, link: n })), t);
    }, [])
  );
}
function _2() {
  let f = o.useContext(Bt);
  return (
    Mr(
      f,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    f
  );
}
function jL() {
  let f = o.useContext(tl);
  return (
    Mr(
      f,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    f
  );
}
var Lr = o.createContext(void 0);
Lr.displayName = 'FrameworkContext';
function P2() {
  let f = o.useContext(Lr);
  return (
    Mr(f, 'You must render this element inside a <HydratedRouter> element'),
    f
  );
}
function CL(f, e) {
  let a = o.useContext(Lr),
    [t, n] = o.useState(!1),
    [u, i] = o.useState(!1),
    {
      onFocus: l,
      onBlur: r,
      onMouseEnter: c,
      onMouseLeave: d,
      onTouchStart: M,
    } = e,
    s = o.useRef(null);
  (o.useEffect(() => {
    if ((f === 'render' && i(!0), f === 'viewport')) {
      let h = (L) => {
          L.forEach((g) => {
            i(g.isIntersecting);
          });
        },
        v = new IntersectionObserver(h, { threshold: 0.5 });
      return (
        s.current && v.observe(s.current),
        () => {
          v.disconnect();
        }
      );
    }
  }, [f]),
    o.useEffect(() => {
      if (t) {
        let h = setTimeout(() => {
          i(!0);
        }, 100);
        return () => {
          clearTimeout(h);
        };
      }
    }, [t]));
  let b = () => {
      n(!0);
    },
    y = () => {
      (n(!1), i(!1));
    };
  return a
    ? f !== 'intent'
      ? [u, s, {}]
      : [
          u,
          s,
          {
            onFocus: Ft(l, b),
            onBlur: Ft(r, y),
            onMouseEnter: Ft(c, b),
            onMouseLeave: Ft(d, y),
            onTouchStart: Ft(M, b),
          },
        ]
    : [!1, s, {}];
}
function Ft(f, e) {
  return (a) => {
    (f && f(a), a.defaultPrevented || e(a));
  };
}
function pL({ page: f, ...e }) {
  let { router: a } = _2(),
    t = o.useMemo(() => x2(a.routes, f, a.basename), [a.routes, f, a.basename]);
  return t ? o.createElement(NL, { page: f, matches: t, ...e }) : null;
}
function SL(f) {
  let { manifest: e, routeModules: a } = P2(),
    [t, n] = o.useState([]);
  return (
    o.useEffect(() => {
      let u = !1;
      return (
        bL(f, e, a).then((i) => {
          u || n(i);
        }),
        () => {
          u = !0;
        }
      );
    }, [f, e, a]),
    t
  );
}
function NL({ page: f, matches: e, ...a }) {
  let t = Qa(),
    { manifest: n, routeModules: u } = P2(),
    { basename: i } = _2(),
    { loaderData: l, matches: r } = jL(),
    c = o.useMemo(() => go(f, e, r, n, t, 'data'), [f, e, r, n, t]),
    d = o.useMemo(() => go(f, e, r, n, t, 'assets'), [f, e, r, n, t]),
    M = o.useMemo(() => {
      if (f === t.pathname + t.search + t.hash) return [];
      let y = new Set(),
        h = !1;
      if (
        (e.forEach((L) => {
          var m;
          let g = n.routes[L.route.id];
          !g ||
            !g.hasLoader ||
            ((!c.some((w) => w.route.id === L.route.id) &&
              L.route.id in l &&
              (m = u[L.route.id]) != null &&
              m.shouldRevalidate) ||
            g.hasClientLoader
              ? (h = !0)
              : y.add(L.route.id));
        }),
        y.size === 0)
      )
        return [];
      let v = ML(f, i, 'data');
      return (
        h &&
          y.size > 0 &&
          v.searchParams.set(
            '_routes',
            e
              .filter((L) => y.has(L.route.id))
              .map((L) => L.route.id)
              .join(',')
          ),
        [v.pathname + v.search]
      );
    }, [i, l, t, n, c, e, f, u]),
    s = o.useMemo(() => wL(d, n), [d, n]),
    b = SL(d);
  return o.createElement(
    o.Fragment,
    null,
    M.map((y) =>
      o.createElement('link', {
        key: y,
        rel: 'prefetch',
        as: 'fetch',
        href: y,
        ...a,
      })
    ),
    s.map((y) =>
      o.createElement('link', { key: y, rel: 'modulepreload', href: y, ...a })
    ),
    b.map(({ key: y, link: h }) =>
      o.createElement('link', { key: y, nonce: a.nonce, ...h })
    )
  );
}
function TL(...f) {
  return (e) => {
    f.forEach((a) => {
      typeof a == 'function' ? a(e) : a != null && (a.current = e);
    });
  };
}
var V2 =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  V2 && (window.__reactRouterVersion = '7.9.3');
} catch {}
function Dy({ basename: f, children: e, window: a }) {
  let t = o.useRef();
  t.current == null && (t.current = g6({ window: a, v5Compat: !0 }));
  let n = t.current,
    [u, i] = o.useState({ action: n.action, location: n.location }),
    l = o.useCallback(
      (r) => {
        o.startTransition(() => i(r));
      },
      [i]
    );
  return (
    o.useLayoutEffect(() => n.listen(l), [n, l]),
    o.createElement(uL, {
      basename: f,
      children: e,
      location: u.location,
      navigationType: u.action,
      navigator: n,
    })
  );
}
var X2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  K2 = o.forwardRef(function (
    {
      onClick: e,
      discover: a = 'render',
      prefetch: t = 'none',
      relative: n,
      reloadDocument: u,
      replace: i,
      state: l,
      target: r,
      to: c,
      preventScrollReset: d,
      viewTransition: M,
      ...s
    },
    b
  ) {
    let { basename: y } = o.useContext(je),
      h = typeof c == 'string' && X2.test(c),
      v,
      L = !1;
    if (typeof c == 'string' && h && ((v = c), V2))
      try {
        let B = new URL(window.location.href),
          E = c.startsWith('//') ? new URL(B.protocol + c) : new URL(c),
          Tf = Ue(E.pathname, y);
        E.origin === B.origin && Tf != null
          ? (c = Tf + E.search + E.hash)
          : (L = !0);
      } catch {
        ye(
          !1,
          `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let g = B6(c, { relative: n }),
      [m, w, C] = CL(t, s),
      S = zL(c, {
        replace: i,
        state: l,
        target: r,
        preventScrollReset: d,
        relative: n,
        viewTransition: M,
      });
    function p(B) {
      (e && e(B), B.defaultPrevented || S(B));
    }
    let T = o.createElement('a', {
      ...s,
      ...C,
      href: v || g,
      onClick: L || u ? e : p,
      ref: TL(b, w),
      target: r,
      'data-discover': !h && a === 'render' ? 'true' : void 0,
    });
    return m && !h
      ? o.createElement(o.Fragment, null, T, o.createElement(pL, { page: g }))
      : T;
  });
K2.displayName = 'Link';
var DL = o.forwardRef(function (
  {
    'aria-current': e = 'page',
    caseSensitive: a = !1,
    className: t = '',
    end: n = !1,
    style: u,
    to: i,
    viewTransition: l,
    children: r,
    ...c
  },
  d
) {
  let M = du(i, { relative: c.relative }),
    s = Qa(),
    b = o.useContext(tl),
    { navigator: y, basename: h } = o.useContext(je),
    v = b != null && OL(M) && l === !0,
    L = y.encodeLocation ? y.encodeLocation(M).pathname : M.pathname,
    g = s.pathname,
    m =
      b && b.navigation && b.navigation.location
        ? b.navigation.location.pathname
        : null;
  (a ||
    ((g = g.toLowerCase()),
    (m = m ? m.toLowerCase() : null),
    (L = L.toLowerCase())),
    m && h && (m = Ue(m, h) || m));
  const w = L !== '/' && L.endsWith('/') ? L.length - 1 : L.length;
  let C = g === L || (!n && g.startsWith(L) && g.charAt(w) === '/'),
    S =
      m != null &&
      (m === L || (!n && m.startsWith(L) && m.charAt(L.length) === '/')),
    p = { isActive: C, isPending: S, isTransitioning: v },
    T = C ? e : void 0,
    B;
  typeof t == 'function'
    ? (B = t(p))
    : (B = [
        t,
        C ? 'active' : null,
        S ? 'pending' : null,
        v ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let E = typeof u == 'function' ? u(p) : u;
  return o.createElement(
    K2,
    {
      ...c,
      'aria-current': T,
      className: B,
      ref: d,
      style: E,
      to: i,
      viewTransition: l,
    },
    typeof r == 'function' ? r(p) : r
  );
});
DL.displayName = 'NavLink';
var EL = o.forwardRef(
  (
    {
      discover: f = 'render',
      fetcherKey: e,
      navigate: a,
      reloadDocument: t,
      replace: n,
      state: u,
      method: i = Fu,
      action: l,
      onSubmit: r,
      relative: c,
      preventScrollReset: d,
      viewTransition: M,
      ...s
    },
    b
  ) => {
    let y = xL(),
      h = RL(l, { relative: c }),
      v = i.toLowerCase() === 'get' ? 'get' : 'post',
      L = typeof l == 'string' && X2.test(l),
      g = (m) => {
        if ((r && r(m), m.defaultPrevented)) return;
        m.preventDefault();
        let w = m.nativeEvent.submitter,
          C = (w == null ? void 0 : w.getAttribute('formmethod')) || i;
        y(w || m.currentTarget, {
          fetcherKey: e,
          method: C,
          navigate: a,
          replace: n,
          state: u,
          relative: c,
          preventScrollReset: d,
          viewTransition: M,
        });
      };
    return o.createElement('form', {
      ref: b,
      method: v,
      action: h,
      onSubmit: t ? r : g,
      ...s,
      'data-discover': !L && f === 'render' ? 'true' : void 0,
    });
  }
);
EL.displayName = 'Form';
function IL(f) {
  return `${f} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function q2(f) {
  let e = o.useContext(Bt);
  return (ef(e, IL(f)), e);
}
function zL(
  f,
  {
    target: e,
    replace: a,
    state: t,
    preventScrollReset: n,
    relative: u,
    viewTransition: i,
  } = {}
) {
  let l = G6(),
    r = Qa(),
    c = du(f, { relative: u });
  return o.useCallback(
    (d) => {
      if (oL(d, e)) {
        d.preventDefault();
        let M = a !== void 0 ? a : Un(r) === Un(c);
        l(f, {
          replace: M,
          state: t,
          preventScrollReset: n,
          relative: u,
          viewTransition: i,
        });
      }
    },
    [r, l, c, a, t, e, f, n, u, i]
  );
}
var AL = 0,
  kL = () => `__${String(++AL)}__`;
function xL() {
  let { router: f } = q2('useSubmit'),
    { basename: e } = o.useContext(je),
    a = fL();
  return o.useCallback(
    async (t, n = {}) => {
      let { action: u, method: i, encType: l, formData: r, body: c } = gL(t, e);
      if (n.navigate === !1) {
        let d = n.fetcherKey || kL();
        await f.fetch(d, a, n.action || u, {
          preventScrollReset: n.preventScrollReset,
          formData: r,
          body: c,
          formMethod: n.method || i,
          formEncType: n.encType || l,
          flushSync: n.flushSync,
        });
      } else
        await f.navigate(n.action || u, {
          preventScrollReset: n.preventScrollReset,
          formData: r,
          body: c,
          formMethod: n.method || i,
          formEncType: n.encType || l,
          replace: n.replace,
          state: n.state,
          fromRouteId: a,
          flushSync: n.flushSync,
          viewTransition: n.viewTransition,
        });
    },
    [f, e, a]
  );
}
function RL(f, { relative: e } = {}) {
  let { basename: a } = o.useContext(je),
    t = o.useContext(se);
  ef(t, 'useFormAction must be used inside a RouteContext');
  let [n] = t.matches.slice(-1),
    u = { ...du(f || '.', { relative: e }) },
    i = Qa();
  if (f == null) {
    u.search = i.search;
    let l = new URLSearchParams(u.search),
      r = l.getAll('index');
    if (r.some((d) => d === '')) {
      (l.delete('index'),
        r.filter((M) => M).forEach((M) => l.append('index', M)));
      let d = l.toString();
      u.search = d ? `?${d}` : '';
    }
  }
  return (
    (!f || f === '.') &&
      n.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, '?index&') : '?index'),
    a !== '/' && (u.pathname = u.pathname === '/' ? a : xe([a, u.pathname])),
    Un(u)
  );
}
function OL(f, { relative: e } = {}) {
  let a = o.useContext(B2);
  ef(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: t } = q2('useViewTransitionState'),
    n = du(f, { relative: e });
  if (!a.isTransitioning) return !1;
  let u = Ue(a.currentLocation.pathname, t) || a.currentLocation.pathname,
    i = Ue(a.nextLocation.pathname, t) || a.nextLocation.pathname;
  return ki(n.pathname, i) != null || ki(n.pathname, u) != null;
}
function YL() {
  if (console && console.warn) {
    for (var f = arguments.length, e = new Array(f), a = 0; a < f; a++)
      e[a] = arguments[a];
    (typeof e[0] == 'string' && (e[0] = `react-i18next:: ${e[0]}`),
      console.warn(...e));
  }
}
const Mo = {};
function n1() {
  for (var f = arguments.length, e = new Array(f), a = 0; a < f; a++)
    e[a] = arguments[a];
  (typeof e[0] == 'string' && Mo[e[0]]) ||
    (typeof e[0] == 'string' && (Mo[e[0]] = new Date()), YL(...e));
}
const W2 = (f, e) => () => {
  if (f.isInitialized) e();
  else {
    const a = () => {
      (setTimeout(() => {
        f.off('initialized', a);
      }, 0),
        e());
    };
    f.on('initialized', a);
  }
};
function Lo(f, e, a) {
  f.loadNamespaces(e, W2(f, a));
}
function mo(f, e, a, t) {
  (typeof a == 'string' && (a = [a]),
    a.forEach((n) => {
      f.options.ns.indexOf(n) < 0 && f.options.ns.push(n);
    }),
    f.loadLanguages(e, W2(f, t)));
}
function QL(f, e) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const t = e.languages[0],
    n = e.options ? e.options.fallbackLng : !1,
    u = e.languages[e.languages.length - 1];
  if (t.toLowerCase() === 'cimode') return !0;
  const i = (l, r) => {
    const c = e.services.backendConnector.state[`${l}|${r}`];
    return c === -1 || c === 2;
  };
  return a.bindI18n &&
    a.bindI18n.indexOf('languageChanging') > -1 &&
    e.services.backendConnector.backend &&
    e.isLanguageChangingTo &&
    !i(e.isLanguageChangingTo, f)
    ? !1
    : !!(
        e.hasResourceBundle(t, f) ||
        !e.services.backendConnector.backend ||
        (e.options.resources && !e.options.partialBundledLanguages) ||
        (i(t, f) && (!n || i(u, f)))
      );
}
function UL(f, e) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !e.languages || !e.languages.length
    ? (n1('i18n.languages were undefined or empty', e.languages), !0)
    : e.options.ignoreJSONStructure !== void 0
      ? e.hasLoadedNamespace(f, {
          lng: a.lng,
          precheck: (n, u) => {
            if (
              a.bindI18n &&
              a.bindI18n.indexOf('languageChanging') > -1 &&
              n.services.backendConnector.backend &&
              n.isLanguageChangingTo &&
              !u(n.isLanguageChangingTo, f)
            )
              return !1;
          },
        })
      : QL(f, e, a);
}
const BL =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  GL = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  JL = (f) => GL[f],
  ZL = (f) => f.replace(BL, JL);
let u1 = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: ZL,
};
function HL() {
  let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  u1 = { ...u1, ...f };
}
function _L() {
  return u1;
}
let F2;
function PL(f) {
  F2 = f;
}
function VL() {
  return F2;
}
const Ey = {
    type: '3rdParty',
    init(f) {
      (HL(f.options.react), PL(f));
    },
  },
  XL = o.createContext();
class KL {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((a) => {
      this.usedNamespaces[a] || (this.usedNamespaces[a] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const qL = (f, e) => {
  const a = o.useRef();
  return (
    o.useEffect(() => {
      a.current = f;
    }, [f, e]),
    a.current
  );
};
function Iy(f) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { i18n: a } = e,
    { i18n: t, defaultNS: n } = o.useContext(XL) || {},
    u = a || t || VL();
  if ((u && !u.reportNamespaces && (u.reportNamespaces = new KL()), !u)) {
    n1(
      'You will need to pass in an i18next instance by using initReactI18next'
    );
    const m = (C, S) =>
        typeof S == 'string'
          ? S
          : S && typeof S == 'object' && typeof S.defaultValue == 'string'
            ? S.defaultValue
            : Array.isArray(C)
              ? C[C.length - 1]
              : C,
      w = [m, {}, !1];
    return ((w.t = m), (w.i18n = {}), (w.ready = !1), w);
  }
  u.options.react &&
    u.options.react.wait !== void 0 &&
    n1(
      'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
    );
  const i = { ..._L(), ...u.options.react, ...e },
    { useSuspense: l, keyPrefix: r } = i;
  let c = n || (u.options && u.options.defaultNS);
  ((c = typeof c == 'string' ? [c] : c || ['translation']),
    u.reportNamespaces.addUsedNamespaces &&
      u.reportNamespaces.addUsedNamespaces(c));
  const d =
    (u.isInitialized || u.initializedStoreOnce) && c.every((m) => UL(m, u, i));
  function M() {
    return u.getFixedT(e.lng || null, i.nsMode === 'fallback' ? c : c[0], r);
  }
  const [s, b] = o.useState(M);
  let y = c.join();
  e.lng && (y = `${e.lng}${y}`);
  const h = qL(y),
    v = o.useRef(!0);
  o.useEffect(() => {
    const { bindI18n: m, bindI18nStore: w } = i;
    ((v.current = !0),
      !d &&
        !l &&
        (e.lng
          ? mo(u, e.lng, c, () => {
              v.current && b(M);
            })
          : Lo(u, c, () => {
              v.current && b(M);
            })),
      d && h && h !== y && v.current && b(M));
    function C() {
      v.current && b(M);
    }
    return (
      m && u && u.on(m, C),
      w && u && u.store.on(w, C),
      () => {
        ((v.current = !1),
          m && u && m.split(' ').forEach((S) => u.off(S, C)),
          w && u && w.split(' ').forEach((S) => u.store.off(S, C)));
      }
    );
  }, [u, y]);
  const L = o.useRef(!0);
  o.useEffect(() => {
    (v.current && !L.current && b(M), (L.current = !1));
  }, [u, r]);
  const g = [s, u, d];
  if (((g.t = s), (g.i18n = u), (g.ready = d), d || (!d && !l))) return g;
  throw new Promise((m) => {
    e.lng ? mo(u, e.lng, c, () => m()) : Lo(u, c, () => m());
  });
}
function i1(f) {
  return [].concat(f);
}
function mr(f) {
  return f.startsWith(':');
}
function $2(f) {
  return (
    ul(f) &&
    (f === '*' || (f.length > 1 && ':>~.+*'.includes(f.slice(0, 1))) || t4(f))
  );
}
function f4(f, e) {
  return (ul(e) || typeof e == 'number') && !a4(f) && !mr(f) && !e4(f);
}
function e4(f) {
  return f.startsWith('@media');
}
function WL(f) {
  return f === '.';
}
function a4(f) {
  return f === '--';
}
function ul(f) {
  return f + '' === f;
}
function t4(f) {
  return ul(f) && (f.startsWith('&') || mr(f));
}
function xi(f, e = '') {
  return f.filter(Boolean).join(e);
}
function n4(f, e) {
  let a = 0;
  if (e.length === 0) return a.toString();
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    ((a = (a << 5) - a + n), (a = a & a));
  }
  return `${f ?? 'cl'}_${a.toString(36)}`;
}
function FL(f, e) {
  return f === 'content' ? `"${e}"` : e;
}
function $L(f) {
  return f.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function bo(f, e) {
  return `${f}:${e}`;
}
function fm(f) {
  return f ? `.${f}` : '';
}
function em(f, e) {
  return f
    ? `${f}
${e}`
    : e;
}
var u4 = class i4 {
  constructor(e, a, t, n) {
    ((this.sheet = e),
      (this.property = a),
      (this.value = t),
      (this.selector = n),
      (this.property = a),
      (this.value = t),
      (this.joined = bo(a, t)));
    const u = this.selector.preconditions.concat(this.selector.postconditions);
    ((this.hash = this.selector.hasConditions
      ? this.selector.scopeClassName
      : n4(this.sheet.name, this.joined)),
      (this.key = xi([this.joined, u, this.hash])));
  }
  toString() {
    let e = l1(this.selector.preconditions, { right: this.hash });
    return (
      (e = l1(this.selector.postconditions, { left: e })),
      `${e} {${i4.genRule(this.property, this.value)}}`
    );
  }
  static genRule(e, a) {
    const t = $L(e);
    return bo(t, FL(e, a)) + ';';
  }
};
function l1(f, { left: e = '', right: a = '' } = {}) {
  const t = f.reduce(
    (n, u) => (mr(u) ? n + u : t4(u) ? n + u.slice(1) : xi([n, u], ' ')),
    e
  );
  return xi([t, fm(a)], ' ');
}
var am = class fi {
    constructor(e, a = null, { preconditions: t, postconditions: n } = {}) {
      ((this.sheet = e),
        (this.preconditions = []),
        (this.scopeClassName = null),
        (this.scopeName = null),
        (this.postconditions = []),
        (this.preconditions = t ? i1(t) : []),
        (this.postconditions = n ? i1(n) : []),
        this.setScope(a));
    }
    setScope(e) {
      return e
        ? (this.scopeClassName ||
            ((this.scopeName = e),
            (this.scopeClassName = n4(this.sheet.name, e + this.sheet.count))),
          this)
        : this;
    }
    get hasConditions() {
      return this.preconditions.length > 0 || this.postconditions.length > 0;
    }
    addScope(e) {
      return new fi(this.sheet, e, {
        preconditions: this.preconditions,
        postconditions: this.postconditions,
      });
    }
    addPrecondition(e) {
      return new fi(this.sheet, this.scopeClassName, {
        postconditions: this.postconditions,
        preconditions: this.preconditions.concat(e),
      });
    }
    addPostcondition(e) {
      return new fi(this.sheet, this.scopeClassName, {
        preconditions: this.preconditions,
        postconditions: this.postconditions.concat(e),
      });
    }
    createRule(e, a) {
      return new u4(this.sheet, e, a, this);
    }
  },
  tm = class {
    constructor(f, e) {
      ((this.name = f),
        (this.rootNode = e),
        (this.storedStyles = {}),
        (this.storedClasses = {}),
        (this.style = ''),
        (this.count = 0),
        (this.id = `flairup-${f}`),
        (this.styleTag = this.createStyleTag()));
    }
    getStyle() {
      return this.style;
    }
    append(f) {
      this.style = em(this.style, f);
    }
    apply() {
      (this.count++, this.styleTag && (this.styleTag.innerHTML = this.style));
    }
    isApplied() {
      return !!this.styleTag;
    }
    createStyleTag() {
      if (typeof document > 'u' || this.isApplied() || this.rootNode === null)
        return this.styleTag;
      const f = document.createElement('style');
      return (
        (f.type = 'text/css'),
        (f.id = this.id),
        (this.rootNode ?? document.head).appendChild(f),
        f
      );
    }
    addRule(f) {
      const e = this.storedClasses[f.key];
      return ul(e)
        ? e
        : ((this.storedClasses[f.key] = f.hash),
          (this.storedStyles[f.hash] = [f.property, f.value]),
          this.append(f.toString()),
          f.hash);
    }
  };
function br(f, e) {
  for (const a in f) e(a.trim(), f[a]);
}
function Q(...f) {
  const e = f.reduce(
    (a, t) => (
      t instanceof Set
        ? a.push(...t)
        : typeof t == 'string'
          ? a.push(t)
          : Array.isArray(t)
            ? a.push(Q(...t))
            : typeof t == 'object' &&
              Object.entries(t).forEach(([n, u]) => {
                u && a.push(n);
              }),
      a
    ),
    []
  );
  return xi(e, ' ').trim();
}
function nm(f, e) {
  const a = new tm(f, e);
  return {
    create: t,
    getStyle: a.getStyle.bind(a),
    isApplied: a.isApplied.bind(a),
  };
  function t(n) {
    const u = {};
    return (
      l4(a, n, new am(a)).forEach(([l, r, c]) => {
        il(a, r, c).forEach((d) => {
          i(l, d);
        });
      }),
      a.apply(),
      u
    );
    function i(l, r) {
      ((u[l] = u[l] ?? new Set()), u[l].add(r));
    }
  }
}
function l4(f, e, a) {
  const t = [];
  return (
    br(e, (n, u) => {
      if ($2(n))
        return l4(f, u, a.addPrecondition(n)).forEach((i) => t.push(i));
      t.push([n, e[n], a.addScope(n)]);
    }),
    t
  );
}
function il(f, e, a) {
  const t = new Set();
  return (
    br(e, (n, u) => {
      let i = [];
      if ($2(n)) i = il(f, u, a.addPostcondition(n));
      else if (WL(n)) i = i1(u);
      else if (e4(n)) i = im(f, u, n, a);
      else if (a4(n)) i = um(f, u, a);
      else if (f4(n, u)) {
        const l = a.createRule(n, u);
        (f.addRule(l), t.add(l.hash));
      }
      return r4(i, t);
    }),
    t
  );
}
function r4(f, e) {
  return (f.forEach((a) => e.add(a)), e);
}
function um(f, e, a) {
  const t = new Set(),
    n = [];
  if (
    (br(e, (u, i) => {
      if (f4(u, i)) {
        n.push(u4.genRule(u, i));
        return;
      }
      const l = il(f, i ?? {}, a);
      r4(l, t);
    }),
    !a.scopeClassName)
  )
    return t;
  if (n.length) {
    const u = n.join(' ');
    f.append(`${l1(a.preconditions, { right: a.scopeClassName })} {${u}}`);
  }
  return (t.add(a.scopeClassName), t);
}
function im(f, e, a, t) {
  f.append(a + ' {');
  const n = il(f, e, t);
  return (f.append('}'), n);
}
function af() {
  return (
    (af = Object.assign
      ? Object.assign.bind()
      : function (f) {
          for (var e = 1; e < arguments.length; e++) {
            var a = arguments[e];
            for (var t in a)
              Object.prototype.hasOwnProperty.call(a, t) && (f[t] = a[t]);
          }
          return f;
        }),
    af.apply(this, arguments)
  );
}
function lm(f, e) {
  ((f.prototype = Object.create(e.prototype)),
    (f.prototype.constructor = f),
    r1(f, e));
}
function r1(f, e) {
  return (
    (r1 = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, n) {
          return ((t.__proto__ = n), t);
        }),
    r1(f, e)
  );
}
function c4(f, e) {
  if (f == null) return {};
  var a = {},
    t = Object.keys(f),
    n,
    u;
  for (u = 0; u < t.length; u++)
    ((n = t[u]), !(e.indexOf(n) >= 0) && (a[n] = f[n]));
  return a;
}
function rm(f, e) {
  if (f) {
    if (typeof f == 'string') return wo(f, e);
    var a = Object.prototype.toString.call(f).slice(8, -1);
    if (
      (a === 'Object' && f.constructor && (a = f.constructor.name),
      a === 'Map' || a === 'Set')
    )
      return Array.from(f);
    if (a === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return wo(f, e);
  }
}
function wo(f, e) {
  (e == null || e > f.length) && (e = f.length);
  for (var a = 0, t = new Array(e); a < e; a++) t[a] = f[a];
  return t;
}
function cm(f, e) {
  var a = (typeof Symbol < 'u' && f[Symbol.iterator]) || f['@@iterator'];
  if (a) return (a = a.call(f)).next.bind(a);
  if (Array.isArray(f) || (a = rm(f)) || e) {
    a && (f = a);
    var t = 0;
    return function () {
      return t >= f.length ? { done: !0 } : { done: !1, value: f[t++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var x;
(function (f) {
  ((f.hiddenOnSearch = 'epr-hidden-on-search'),
    (f.searchActive = 'epr-search-active'),
    (f.hidden = 'epr-hidden'),
    (f.visible = 'epr-visible'),
    (f.active = 'epr-active'),
    (f.emoji = 'epr-emoji'),
    (f.category = 'epr-emoji-category'),
    (f.label = 'epr-emoji-category-label'),
    (f.categoryContent = 'epr-emoji-category-content'),
    (f.emojiHasVariations = 'epr-emoji-has-variations'),
    (f.scrollBody = 'epr-body'),
    (f.emojiList = 'epr-emoji-list'),
    (f.external = '__EmojiPicker__'),
    (f.emojiPicker = 'EmojiPickerReact'),
    (f.open = 'epr-open'),
    (f.vertical = 'epr-vertical'),
    (f.horizontal = 'epr-horizontal'),
    (f.variationPicker = 'epr-emoji-variation-picker'),
    (f.darkTheme = 'epr-dark-theme'),
    (f.autoTheme = 'epr-auto-theme'));
})(x || (x = {}));
function Nf() {
  for (var f = arguments.length, e = new Array(f), a = 0; a < f; a++)
    e[a] = arguments[a];
  return e
    .map(function (t) {
      return '.' + t;
    })
    .join('');
}
var $ = nm('epr', null),
  ei = {
    display: 'none',
    opacity: '0',
    pointerEvents: 'none',
    visibility: 'hidden',
    overflow: 'hidden',
  },
  wr = $.create({ hidden: af({ '.': x.hidden }, ei) }),
  om = o.memo(function () {
    return o.createElement('style', {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: $.getStyle() },
    });
  }),
  Ua = $.create({
    '.epr-main': {
      ':has(input:not(:placeholder-shown))': {
        categoryBtn: {
          ':hover': {
            opacity: '1',
            backgroundPositionY: 'var(--epr-category-navigation-button-size)',
          },
        },
        hiddenOnSearch: af({ '.': x.hiddenOnSearch }, ei),
      },
      ':has(input:placeholder-shown)': { visibleOnSearchOnly: ei },
    },
    hiddenOnReactions: { transition: 'all 0.5s ease-in-out' },
    '.epr-reactions': {
      hiddenOnReactions: {
        height: '0px',
        width: '0px',
        opacity: '0',
        pointerEvents: 'none',
        overflow: 'hidden',
      },
    },
    '.EmojiPickerReact:not(.epr-search-active)': {
      categoryBtn: {
        ':hover': {
          opacity: '1',
          backgroundPositionY: 'var(--epr-category-navigation-button-size)',
        },
        '&.epr-active': {
          opacity: '1',
          backgroundPositionY: 'var(--epr-category-navigation-button-size)',
        },
      },
      visibleOnSearchOnly: af({ '.': 'epr-visible-on-search-only' }, ei),
    },
  });
function sa(f, e) {
  var a, t;
  return {
    '.epr-dark-theme': ((a = {}), (a[f] = e), a),
    '.epr-auto-theme':
      ((t = {}), (t[f] = { '@media (prefers-color-scheme: dark)': e }), t),
  };
}
function o4(f, e) {
  var a,
    t,
    n = (a = f.customEmojis) != null ? a : [],
    u = (t = e.customEmojis) != null ? t : [];
  return (
    f.open === e.open &&
    f.emojiVersion === e.emojiVersion &&
    f.reactionsDefaultOpen === e.reactionsDefaultOpen &&
    f.searchPlaceHolder === e.searchPlaceHolder &&
    f.searchPlaceholder === e.searchPlaceholder &&
    f.defaultSkinTone === e.defaultSkinTone &&
    f.skinTonesDisabled === e.skinTonesDisabled &&
    f.autoFocusSearch === e.autoFocusSearch &&
    f.emojiStyle === e.emojiStyle &&
    f.theme === e.theme &&
    f.suggestedEmojisMode === e.suggestedEmojisMode &&
    f.lazyLoadEmojis === e.lazyLoadEmojis &&
    f.className === e.className &&
    f.height === e.height &&
    f.width === e.width &&
    f.style === e.style &&
    f.searchDisabled === e.searchDisabled &&
    f.skinTonePickerLocation === e.skinTonePickerLocation &&
    n.length === u.length
  );
}
var dm = ['1f44d', '2764-fe0f', '1f603', '1f622', '1f64f', '1f44e', '1f621'],
  Bn;
(function (f) {
  ((f.RECENT = 'recent'), (f.FREQUENT = 'frequent'));
})(Bn || (Bn = {}));
var Gf;
(function (f) {
  ((f.NATIVE = 'native'),
    (f.APPLE = 'apple'),
    (f.TWITTER = 'twitter'),
    (f.GOOGLE = 'google'),
    (f.FACEBOOK = 'facebook'));
})(Gf || (Gf = {}));
var Gn;
(function (f) {
  ((f.DARK = 'dark'), (f.LIGHT = 'light'), (f.AUTO = 'auto'));
})(Gn || (Gn = {}));
var re;
(function (f) {
  ((f.NEUTRAL = 'neutral'),
    (f.LIGHT = '1f3fb'),
    (f.MEDIUM_LIGHT = '1f3fc'),
    (f.MEDIUM = '1f3fd'),
    (f.MEDIUM_DARK = '1f3fe'),
    (f.DARK = '1f3ff'));
})(re || (re = {}));
var k;
(function (f) {
  ((f.SUGGESTED = 'suggested'),
    (f.CUSTOM = 'custom'),
    (f.SMILEYS_PEOPLE = 'smileys_people'),
    (f.ANIMALS_NATURE = 'animals_nature'),
    (f.FOOD_DRINK = 'food_drink'),
    (f.TRAVEL_PLACES = 'travel_places'),
    (f.ACTIVITIES = 'activities'),
    (f.OBJECTS = 'objects'),
    (f.SYMBOLS = 'symbols'),
    (f.FLAGS = 'flags'));
})(k || (k = {}));
var Et;
(function (f) {
  ((f.SEARCH = 'SEARCH'), (f.PREVIEW = 'PREVIEW'));
})(Et || (Et = {}));
var Xf,
  sm = [
    k.SUGGESTED,
    k.CUSTOM,
    k.SMILEYS_PEOPLE,
    k.ANIMALS_NATURE,
    k.FOOD_DRINK,
    k.TRAVEL_PLACES,
    k.ACTIVITIES,
    k.OBJECTS,
    k.SYMBOLS,
    k.FLAGS,
  ],
  gm = { name: 'Recently Used', category: k.SUGGESTED },
  d4 =
    ((Xf = {}),
    (Xf[k.SUGGESTED] = { category: k.SUGGESTED, name: 'Frequently Used' }),
    (Xf[k.CUSTOM] = { category: k.CUSTOM, name: 'Custom Emojis' }),
    (Xf[k.SMILEYS_PEOPLE] = {
      category: k.SMILEYS_PEOPLE,
      name: 'Smileys & People',
    }),
    (Xf[k.ANIMALS_NATURE] = {
      category: k.ANIMALS_NATURE,
      name: 'Animals & Nature',
    }),
    (Xf[k.FOOD_DRINK] = { category: k.FOOD_DRINK, name: 'Food & Drink' }),
    (Xf[k.TRAVEL_PLACES] = {
      category: k.TRAVEL_PLACES,
      name: 'Travel & Places',
    }),
    (Xf[k.ACTIVITIES] = { category: k.ACTIVITIES, name: 'Activities' }),
    (Xf[k.OBJECTS] = { category: k.OBJECTS, name: 'Objects' }),
    (Xf[k.SYMBOLS] = { category: k.SYMBOLS, name: 'Symbols' }),
    (Xf[k.FLAGS] = { category: k.FLAGS, name: 'Flags' }),
    Xf);
function s4(f) {
  return sm.map(function (e) {
    return af({}, d4[e], f && f[e] && f[e]);
  });
}
function yr(f) {
  return f.category;
}
function g4(f) {
  return f.name;
}
function Mm(f, e) {
  var a;
  (f === void 0 && (f = []), e === void 0 && (e = {}));
  var t = {};
  e.suggestionMode === Bn.RECENT && (t[k.SUGGESTED] = gm);
  var n = s4(t);
  return (a = f) != null && a.length
    ? f.map(function (u) {
        return typeof u == 'string'
          ? yo(u, t[u])
          : af({}, yo(u.category, t[u.category]), u);
      })
    : n;
}
function yo(f, e) {
  return (e === void 0 && (e = {}), Object.assign(d4[f], e));
}
var Lm = 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/',
  mm =
    'https://cdn.jsdelivr.net/npm/emoji-datasource-facebook/img/facebook/64/',
  bm = 'https://cdn.jsdelivr.net/npm/emoji-datasource-twitter/img/twitter/64/',
  wm = 'https://cdn.jsdelivr.net/npm/emoji-datasource-google/img/google/64/';
function ym(f) {
  switch (f) {
    case Gf.TWITTER:
      return bm;
    case Gf.GOOGLE:
      return wm;
    case Gf.FACEBOOK:
      return mm;
    case Gf.APPLE:
    default:
      return Lm;
  }
}
var hm = [],
  vm = [
    { n: ['grinning', 'grinning face'], u: '1f600', a: '1.0' },
    { n: ['smiley', 'smiling face with open mouth'], u: '1f603', a: '0.6' },
    {
      n: ['smile', 'smiling face with open mouth and smiling eyes'],
      u: '1f604',
      a: '0.6',
    },
    { n: ['grin', 'grinning face with smiling eyes'], u: '1f601', a: '0.6' },
    {
      n: [
        'laughing',
        'satisfied',
        'smiling face with open mouth and tightly-closed eyes',
      ],
      u: '1f606',
      a: '0.6',
    },
    {
      n: ['sweat smile', 'smiling face with open mouth and cold sweat'],
      u: '1f605',
      a: '0.6',
    },
    { n: ['rolling on the floor laughing'], u: '1f923', a: '3.0' },
    { n: ['joy', 'face with tears of joy'], u: '1f602', a: '0.6' },
    { n: ['slightly smiling face'], u: '1f642', a: '1.0' },
    { n: ['upside-down face', 'upside down face'], u: '1f643', a: '1.0' },
    { n: ['melting face'], u: '1fae0', a: '14.0' },
    { n: ['wink', 'winking face'], u: '1f609', a: '0.6' },
    { n: ['blush', 'smiling face with smiling eyes'], u: '1f60a', a: '0.6' },
    { n: ['innocent', 'smiling face with halo'], u: '1f607', a: '1.0' },
    {
      n: [
        'smiling face with 3 hearts',
        'smiling face with smiling eyes and three hearts',
      ],
      u: '1f970',
      a: '11.0',
    },
    {
      n: ['heart eyes', 'smiling face with heart-shaped eyes'],
      u: '1f60d',
      a: '0.6',
    },
    {
      n: ['star-struck', 'grinning face with star eyes'],
      u: '1f929',
      a: '5.0',
    },
    { n: ['kissing heart', 'face throwing a kiss'], u: '1f618', a: '0.6' },
    { n: ['kissing', 'kissing face'], u: '1f617', a: '1.0' },
    { n: ['relaxed', 'white smiling face'], u: '263a-fe0f', a: '0.6' },
    {
      n: ['kissing closed eyes', 'kissing face with closed eyes'],
      u: '1f61a',
      a: '0.6',
    },
    {
      n: ['kissing smiling eyes', 'kissing face with smiling eyes'],
      u: '1f619',
      a: '1.0',
    },
    { n: ['smiling face with tear'], u: '1f972', a: '13.0' },
    { n: ['yum', 'face savouring delicious food'], u: '1f60b', a: '0.6' },
    {
      n: ['stuck out tongue', 'face with stuck-out tongue'],
      u: '1f61b',
      a: '1.0',
    },
    {
      n: [
        'stuck out tongue winking eye',
        'face with stuck-out tongue and winking eye',
      ],
      u: '1f61c',
      a: '0.6',
    },
    {
      n: ['zany face', 'grinning face with one large and one small eye'],
      u: '1f92a',
      a: '5.0',
    },
    {
      n: [
        'stuck out tongue closed eyes',
        'face with stuck-out tongue and tightly-closed eyes',
      ],
      u: '1f61d',
      a: '0.6',
    },
    { n: ['money-mouth face', 'money mouth face'], u: '1f911', a: '1.0' },
    { n: ['hugging face'], u: '1f917', a: '1.0' },
    {
      n: [
        'face with hand over mouth',
        'smiling face with smiling eyes and hand covering mouth',
      ],
      u: '1f92d',
      a: '5.0',
    },
    { n: ['face with open eyes and hand over mouth'], u: '1fae2', a: '14.0' },
    { n: ['face with peeking eye'], u: '1fae3', a: '14.0' },
    {
      n: ['shushing face', 'face with finger covering closed lips'],
      u: '1f92b',
      a: '5.0',
    },
    { n: ['thinking face'], u: '1f914', a: '1.0' },
    { n: ['saluting face'], u: '1fae1', a: '14.0' },
    { n: ['zipper-mouth face', 'zipper mouth face'], u: '1f910', a: '1.0' },
    {
      n: ['face with raised eyebrow', 'face with one eyebrow raised'],
      u: '1f928',
      a: '5.0',
    },
    { n: ['neutral face'], u: '1f610', a: '0.7' },
    { n: ['expressionless', 'expressionless face'], u: '1f611', a: '1.0' },
    { n: ['no mouth', 'face without mouth'], u: '1f636', a: '1.0' },
    { n: ['dotted line face'], u: '1fae5', a: '14.0' },
    { n: ['face in clouds'], u: '1f636-200d-1f32b-fe0f', a: '13.1' },
    { n: ['smirk', 'smirking face'], u: '1f60f', a: '0.6' },
    { n: ['unamused', 'unamused face'], u: '1f612', a: '0.6' },
    { n: ['face with rolling eyes'], u: '1f644', a: '1.0' },
    { n: ['grimacing', 'grimacing face'], u: '1f62c', a: '1.0' },
    { n: ['face exhaling'], u: '1f62e-200d-1f4a8', a: '13.1' },
    { n: ['lying face'], u: '1f925', a: '3.0' },
    { n: ['shaking face'], u: '1fae8', a: '15.0' },
    { n: ['head shaking horizontally'], u: '1f642-200d-2194-fe0f', a: '15.1' },
    { n: ['head shaking vertically'], u: '1f642-200d-2195-fe0f', a: '15.1' },
    { n: ['relieved', 'relieved face'], u: '1f60c', a: '0.6' },
    { n: ['pensive', 'pensive face'], u: '1f614', a: '0.6' },
    { n: ['sleepy', 'sleepy face'], u: '1f62a', a: '0.6' },
    { n: ['drooling face'], u: '1f924', a: '3.0' },
    { n: ['sleeping', 'sleeping face'], u: '1f634', a: '1.0' },
    { n: ['mask', 'face with medical mask'], u: '1f637', a: '0.6' },
    { n: ['face with thermometer'], u: '1f912', a: '1.0' },
    {
      n: ['face with head-bandage', 'face with head bandage'],
      u: '1f915',
      a: '1.0',
    },
    { n: ['nauseated face'], u: '1f922', a: '3.0' },
    {
      n: ['face vomiting', 'face with open mouth vomiting'],
      u: '1f92e',
      a: '5.0',
    },
    { n: ['sneezing face'], u: '1f927', a: '3.0' },
    { n: ['hot face', 'overheated face'], u: '1f975', a: '11.0' },
    { n: ['cold face', 'freezing face'], u: '1f976', a: '11.0' },
    {
      n: ['woozy face', 'face with uneven eyes and wavy mouth'],
      u: '1f974',
      a: '11.0',
    },
    { n: ['dizzy face'], u: '1f635', a: '0.6' },
    { n: ['face with spiral eyes'], u: '1f635-200d-1f4ab', a: '13.1' },
    {
      n: ['exploding head', 'shocked face with exploding head'],
      u: '1f92f',
      a: '5.0',
    },
    { n: ['face with cowboy hat'], u: '1f920', a: '3.0' },
    {
      n: ['partying face', 'face with party horn and party hat'],
      u: '1f973',
      a: '11.0',
    },
    { n: ['disguised face'], u: '1f978', a: '13.0' },
    { n: ['sunglasses', 'smiling face with sunglasses'], u: '1f60e', a: '1.0' },
    { n: ['nerd face'], u: '1f913', a: '1.0' },
    { n: ['face with monocle'], u: '1f9d0', a: '5.0' },
    { n: ['confused', 'confused face'], u: '1f615', a: '1.0' },
    { n: ['face with diagonal mouth'], u: '1fae4', a: '14.0' },
    { n: ['worried', 'worried face'], u: '1f61f', a: '1.0' },
    { n: ['slightly frowning face'], u: '1f641', a: '1.0' },
    { n: ['frowning face', 'white frowning face'], u: '2639-fe0f', a: '0.7' },
    { n: ['open mouth', 'face with open mouth'], u: '1f62e', a: '1.0' },
    { n: ['hushed', 'hushed face'], u: '1f62f', a: '1.0' },
    { n: ['astonished', 'astonished face'], u: '1f632', a: '0.6' },
    { n: ['flushed', 'flushed face'], u: '1f633', a: '0.6' },
    { n: ['pleading face', 'face with pleading eyes'], u: '1f97a', a: '11.0' },
    { n: ['face holding back tears'], u: '1f979', a: '14.0' },
    { n: ['frowning', 'frowning face with open mouth'], u: '1f626', a: '1.0' },
    { n: ['anguished', 'anguished face'], u: '1f627', a: '1.0' },
    { n: ['fearful', 'fearful face'], u: '1f628', a: '0.6' },
    {
      n: ['cold sweat', 'face with open mouth and cold sweat'],
      u: '1f630',
      a: '0.6',
    },
    {
      n: ['disappointed relieved', 'disappointed but relieved face'],
      u: '1f625',
      a: '0.6',
    },
    { n: ['cry', 'crying face'], u: '1f622', a: '0.6' },
    { n: ['sob', 'loudly crying face'], u: '1f62d', a: '0.6' },
    { n: ['scream', 'face screaming in fear'], u: '1f631', a: '0.6' },
    { n: ['confounded', 'confounded face'], u: '1f616', a: '0.6' },
    { n: ['persevere', 'persevering face'], u: '1f623', a: '0.6' },
    { n: ['disappointed', 'disappointed face'], u: '1f61e', a: '0.6' },
    { n: ['sweat', 'face with cold sweat'], u: '1f613', a: '0.6' },
    { n: ['weary', 'weary face'], u: '1f629', a: '0.6' },
    { n: ['tired face'], u: '1f62b', a: '0.6' },
    { n: ['yawning face'], u: '1f971', a: '12.0' },
    { n: ['triumph', 'face with look of triumph'], u: '1f624', a: '0.6' },
    { n: ['rage', 'pouting face'], u: '1f621', a: '0.6' },
    { n: ['angry', 'angry face'], u: '1f620', a: '0.6' },
    {
      n: [
        'face with symbols on mouth',
        'serious face with symbols covering mouth',
      ],
      u: '1f92c',
      a: '5.0',
    },
    { n: ['smiling imp', 'smiling face with horns'], u: '1f608', a: '1.0' },
    { n: ['imp'], u: '1f47f', a: '0.6' },
    { n: ['skull'], u: '1f480', a: '0.6' },
    { n: ['skull and crossbones'], u: '2620-fe0f', a: '1.0' },
    { n: ['poop', 'shit', 'hankey', 'pile of poo'], u: '1f4a9', a: '0.6' },
    { n: ['clown face'], u: '1f921', a: '3.0' },
    { n: ['japanese ogre'], u: '1f479', a: '0.6' },
    { n: ['japanese goblin'], u: '1f47a', a: '0.6' },
    { n: ['ghost'], u: '1f47b', a: '0.6' },
    { n: ['alien', 'extraterrestrial alien'], u: '1f47d', a: '0.6' },
    { n: ['alien monster', 'space invader'], u: '1f47e', a: '0.6' },
    { n: ['robot face'], u: '1f916', a: '1.0' },
    {
      n: ['smiley cat', 'smiling cat face with open mouth'],
      u: '1f63a',
      a: '0.6',
    },
    {
      n: ['smile cat', 'grinning cat face with smiling eyes'],
      u: '1f638',
      a: '0.6',
    },
    { n: ['joy cat', 'cat face with tears of joy'], u: '1f639', a: '0.6' },
    {
      n: ['heart eyes cat', 'smiling cat face with heart-shaped eyes'],
      u: '1f63b',
      a: '0.6',
    },
    { n: ['smirk cat', 'cat face with wry smile'], u: '1f63c', a: '0.6' },
    {
      n: ['kissing cat', 'kissing cat face with closed eyes'],
      u: '1f63d',
      a: '0.6',
    },
    { n: ['scream cat', 'weary cat face'], u: '1f640', a: '0.6' },
    { n: ['crying cat face'], u: '1f63f', a: '0.6' },
    { n: ['pouting cat', 'pouting cat face'], u: '1f63e', a: '0.6' },
    { n: ['see no evil', 'see-no-evil monkey'], u: '1f648', a: '0.6' },
    { n: ['hear no evil', 'hear-no-evil monkey'], u: '1f649', a: '0.6' },
    { n: ['speak no evil', 'speak-no-evil monkey'], u: '1f64a', a: '0.6' },
    { n: ['love letter'], u: '1f48c', a: '0.6' },
    { n: ['cupid', 'heart with arrow'], u: '1f498', a: '0.6' },
    { n: ['gift heart', 'heart with ribbon'], u: '1f49d', a: '0.6' },
    { n: ['sparkling heart'], u: '1f496', a: '0.6' },
    { n: ['heartpulse', 'growing heart'], u: '1f497', a: '0.6' },
    { n: ['heartbeat', 'beating heart'], u: '1f493', a: '0.6' },
    { n: ['revolving hearts'], u: '1f49e', a: '0.6' },
    { n: ['two hearts'], u: '1f495', a: '0.6' },
    { n: ['heart decoration'], u: '1f49f', a: '0.6' },
    {
      n: ['heart exclamation', 'heavy heart exclamation mark ornament'],
      u: '2763-fe0f',
      a: '1.0',
    },
    { n: ['broken heart'], u: '1f494', a: '0.6' },
    { n: ['heart on fire'], u: '2764-fe0f-200d-1f525', a: '13.1' },
    { n: ['mending heart'], u: '2764-fe0f-200d-1fa79', a: '13.1' },
    { n: ['heart', 'heavy black heart'], u: '2764-fe0f', a: '0.6' },
    { n: ['pink heart'], u: '1fa77', a: '15.0' },
    { n: ['orange heart'], u: '1f9e1', a: '5.0' },
    { n: ['yellow heart'], u: '1f49b', a: '0.6' },
    { n: ['green heart'], u: '1f49a', a: '0.6' },
    { n: ['blue heart'], u: '1f499', a: '0.6' },
    { n: ['light blue heart'], u: '1fa75', a: '15.0' },
    { n: ['purple heart'], u: '1f49c', a: '0.6' },
    { n: ['brown heart'], u: '1f90e', a: '12.0' },
    { n: ['black heart'], u: '1f5a4', a: '3.0' },
    { n: ['grey heart'], u: '1fa76', a: '15.0' },
    { n: ['white heart'], u: '1f90d', a: '12.0' },
    { n: ['kiss', 'kiss mark'], u: '1f48b', a: '0.6' },
    { n: ['100', 'hundred points symbol'], u: '1f4af', a: '0.6' },
    { n: ['anger', 'anger symbol'], u: '1f4a2', a: '0.6' },
    { n: ['boom', 'collision', 'collision symbol'], u: '1f4a5', a: '0.6' },
    { n: ['dizzy', 'dizzy symbol'], u: '1f4ab', a: '0.6' },
    { n: ['sweat drops', 'splashing sweat symbol'], u: '1f4a6', a: '0.6' },
    { n: ['dash', 'dash symbol'], u: '1f4a8', a: '0.6' },
    { n: ['hole'], u: '1f573-fe0f', a: '0.7' },
    { n: ['speech balloon'], u: '1f4ac', a: '0.6' },
    {
      n: ['eye in speech bubble', 'eye-in-speech-bubble'],
      u: '1f441-fe0f-200d-1f5e8-fe0f',
      a: '2.0',
    },
    { n: ['left speech bubble'], u: '1f5e8-fe0f', a: '2.0' },
    { n: ['right anger bubble'], u: '1f5ef-fe0f', a: '0.7' },
    { n: ['thought balloon'], u: '1f4ad', a: '1.0' },
    { n: ['zzz', 'sleeping symbol'], u: '1f4a4', a: '0.6' },
    {
      n: ['wave', 'waving hand sign'],
      u: '1f44b',
      v: [
        '1f44b-1f3fb',
        '1f44b-1f3fc',
        '1f44b-1f3fd',
        '1f44b-1f3fe',
        '1f44b-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['raised back of hand'],
      u: '1f91a',
      v: [
        '1f91a-1f3fb',
        '1f91a-1f3fc',
        '1f91a-1f3fd',
        '1f91a-1f3fe',
        '1f91a-1f3ff',
      ],
      a: '3.0',
    },
    {
      n: ['hand with fingers splayed', 'raised hand with fingers splayed'],
      u: '1f590-fe0f',
      v: [
        '1f590-1f3fb',
        '1f590-1f3fc',
        '1f590-1f3fd',
        '1f590-1f3fe',
        '1f590-1f3ff',
      ],
      a: '0.7',
    },
    {
      n: ['hand', 'raised hand'],
      u: '270b',
      v: ['270b-1f3fb', '270b-1f3fc', '270b-1f3fd', '270b-1f3fe', '270b-1f3ff'],
      a: '0.6',
    },
    {
      n: [
        'spock-hand',
        'raised hand with part between middle and ring fingers',
      ],
      u: '1f596',
      v: [
        '1f596-1f3fb',
        '1f596-1f3fc',
        '1f596-1f3fd',
        '1f596-1f3fe',
        '1f596-1f3ff',
      ],
      a: '1.0',
    },
    {
      n: ['rightwards hand'],
      u: '1faf1',
      v: [
        '1faf1-1f3fb',
        '1faf1-1f3fc',
        '1faf1-1f3fd',
        '1faf1-1f3fe',
        '1faf1-1f3ff',
      ],
      a: '14.0',
    },
    {
      n: ['leftwards hand'],
      u: '1faf2',
      v: [
        '1faf2-1f3fb',
        '1faf2-1f3fc',
        '1faf2-1f3fd',
        '1faf2-1f3fe',
        '1faf2-1f3ff',
      ],
      a: '14.0',
    },
    {
      n: ['palm down hand'],
      u: '1faf3',
      v: [
        '1faf3-1f3fb',
        '1faf3-1f3fc',
        '1faf3-1f3fd',
        '1faf3-1f3fe',
        '1faf3-1f3ff',
      ],
      a: '14.0',
    },
    {
      n: ['palm up hand'],
      u: '1faf4',
      v: [
        '1faf4-1f3fb',
        '1faf4-1f3fc',
        '1faf4-1f3fd',
        '1faf4-1f3fe',
        '1faf4-1f3ff',
      ],
      a: '14.0',
    },
    {
      n: ['leftwards pushing hand'],
      u: '1faf7',
      v: [
        '1faf7-1f3fb',
        '1faf7-1f3fc',
        '1faf7-1f3fd',
        '1faf7-1f3fe',
        '1faf7-1f3ff',
      ],
      a: '15.0',
    },
    {
      n: ['rightwards pushing hand'],
      u: '1faf8',
      v: [
        '1faf8-1f3fb',
        '1faf8-1f3fc',
        '1faf8-1f3fd',
        '1faf8-1f3fe',
        '1faf8-1f3ff',
      ],
      a: '15.0',
    },
    {
      n: ['ok hand', 'ok hand sign'],
      u: '1f44c',
      v: [
        '1f44c-1f3fb',
        '1f44c-1f3fc',
        '1f44c-1f3fd',
        '1f44c-1f3fe',
        '1f44c-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['pinched fingers'],
      u: '1f90c',
      v: [
        '1f90c-1f3fb',
        '1f90c-1f3fc',
        '1f90c-1f3fd',
        '1f90c-1f3fe',
        '1f90c-1f3ff',
      ],
      a: '13.0',
    },
    {
      n: ['pinching hand'],
      u: '1f90f',
      v: [
        '1f90f-1f3fb',
        '1f90f-1f3fc',
        '1f90f-1f3fd',
        '1f90f-1f3fe',
        '1f90f-1f3ff',
      ],
      a: '12.0',
    },
    {
      n: ['v', 'victory hand'],
      u: '270c-fe0f',
      v: ['270c-1f3fb', '270c-1f3fc', '270c-1f3fd', '270c-1f3fe', '270c-1f3ff'],
      a: '0.6',
    },
    {
      n: ['crossed fingers', 'hand with index and middle fingers crossed'],
      u: '1f91e',
      v: [
        '1f91e-1f3fb',
        '1f91e-1f3fc',
        '1f91e-1f3fd',
        '1f91e-1f3fe',
        '1f91e-1f3ff',
      ],
      a: '3.0',
    },
    {
      n: ['hand with index finger and thumb crossed'],
      u: '1faf0',
      v: [
        '1faf0-1f3fb',
        '1faf0-1f3fc',
        '1faf0-1f3fd',
        '1faf0-1f3fe',
        '1faf0-1f3ff',
      ],
      a: '14.0',
    },
    {
      n: ['i love you hand sign'],
      u: '1f91f',
      v: [
        '1f91f-1f3fb',
        '1f91f-1f3fc',
        '1f91f-1f3fd',
        '1f91f-1f3fe',
        '1f91f-1f3ff',
      ],
      a: '5.0',
    },
    {
      n: ['the horns', 'sign of the horns'],
      u: '1f918',
      v: [
        '1f918-1f3fb',
        '1f918-1f3fc',
        '1f918-1f3fd',
        '1f918-1f3fe',
        '1f918-1f3ff',
      ],
      a: '1.0',
    },
    {
      n: ['call me hand'],
      u: '1f919',
      v: [
        '1f919-1f3fb',
        '1f919-1f3fc',
        '1f919-1f3fd',
        '1f919-1f3fe',
        '1f919-1f3ff',
      ],
      a: '3.0',
    },
    {
      n: ['point left', 'white left pointing backhand index'],
      u: '1f448',
      v: [
        '1f448-1f3fb',
        '1f448-1f3fc',
        '1f448-1f3fd',
        '1f448-1f3fe',
        '1f448-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['point right', 'white right pointing backhand index'],
      u: '1f449',
      v: [
        '1f449-1f3fb',
        '1f449-1f3fc',
        '1f449-1f3fd',
        '1f449-1f3fe',
        '1f449-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['point up 2', 'white up pointing backhand index'],
      u: '1f446',
      v: [
        '1f446-1f3fb',
        '1f446-1f3fc',
        '1f446-1f3fd',
        '1f446-1f3fe',
        '1f446-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['middle finger', 'reversed hand with middle finger extended'],
      u: '1f595',
      v: [
        '1f595-1f3fb',
        '1f595-1f3fc',
        '1f595-1f3fd',
        '1f595-1f3fe',
        '1f595-1f3ff',
      ],
      a: '1.0',
    },
    {
      n: ['point down', 'white down pointing backhand index'],
      u: '1f447',
      v: [
        '1f447-1f3fb',
        '1f447-1f3fc',
        '1f447-1f3fd',
        '1f447-1f3fe',
        '1f447-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['point up', 'white up pointing index'],
      u: '261d-fe0f',
      v: ['261d-1f3fb', '261d-1f3fc', '261d-1f3fd', '261d-1f3fe', '261d-1f3ff'],
      a: '0.6',
    },
    {
      n: ['index pointing at the viewer'],
      u: '1faf5',
      v: [
        '1faf5-1f3fb',
        '1faf5-1f3fc',
        '1faf5-1f3fd',
        '1faf5-1f3fe',
        '1faf5-1f3ff',
      ],
      a: '14.0',
    },
    {
      n: ['+1', 'thumbsup', 'thumbs up sign'],
      u: '1f44d',
      v: [
        '1f44d-1f3fb',
        '1f44d-1f3fc',
        '1f44d-1f3fd',
        '1f44d-1f3fe',
        '1f44d-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['-1', 'thumbsdown', 'thumbs down sign'],
      u: '1f44e',
      v: [
        '1f44e-1f3fb',
        '1f44e-1f3fc',
        '1f44e-1f3fd',
        '1f44e-1f3fe',
        '1f44e-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['fist', 'raised fist'],
      u: '270a',
      v: ['270a-1f3fb', '270a-1f3fc', '270a-1f3fd', '270a-1f3fe', '270a-1f3ff'],
      a: '0.6',
    },
    {
      n: ['punch', 'facepunch', 'fisted hand sign'],
      u: '1f44a',
      v: [
        '1f44a-1f3fb',
        '1f44a-1f3fc',
        '1f44a-1f3fd',
        '1f44a-1f3fe',
        '1f44a-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['left-facing fist'],
      u: '1f91b',
      v: [
        '1f91b-1f3fb',
        '1f91b-1f3fc',
        '1f91b-1f3fd',
        '1f91b-1f3fe',
        '1f91b-1f3ff',
      ],
      a: '3.0',
    },
    {
      n: ['right-facing fist'],
      u: '1f91c',
      v: [
        '1f91c-1f3fb',
        '1f91c-1f3fc',
        '1f91c-1f3fd',
        '1f91c-1f3fe',
        '1f91c-1f3ff',
      ],
      a: '3.0',
    },
    {
      n: ['clap', 'clapping hands sign'],
      u: '1f44f',
      v: [
        '1f44f-1f3fb',
        '1f44f-1f3fc',
        '1f44f-1f3fd',
        '1f44f-1f3fe',
        '1f44f-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['raised hands', 'person raising both hands in celebration'],
      u: '1f64c',
      v: [
        '1f64c-1f3fb',
        '1f64c-1f3fc',
        '1f64c-1f3fd',
        '1f64c-1f3fe',
        '1f64c-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['heart hands'],
      u: '1faf6',
      v: [
        '1faf6-1f3fb',
        '1faf6-1f3fc',
        '1faf6-1f3fd',
        '1faf6-1f3fe',
        '1faf6-1f3ff',
      ],
      a: '14.0',
    },
    {
      n: ['open hands', 'open hands sign'],
      u: '1f450',
      v: [
        '1f450-1f3fb',
        '1f450-1f3fc',
        '1f450-1f3fd',
        '1f450-1f3fe',
        '1f450-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['palms up together'],
      u: '1f932',
      v: [
        '1f932-1f3fb',
        '1f932-1f3fc',
        '1f932-1f3fd',
        '1f932-1f3fe',
        '1f932-1f3ff',
      ],
      a: '5.0',
    },
    {
      n: ['handshake'],
      u: '1f91d',
      v: [
        '1f91d-1f3fb',
        '1f91d-1f3fc',
        '1f91d-1f3fd',
        '1f91d-1f3fe',
        '1f91d-1f3ff',
        '1faf1-1f3fb-200d-1faf2-1f3fc',
        '1faf1-1f3fb-200d-1faf2-1f3fd',
        '1faf1-1f3fb-200d-1faf2-1f3fe',
        '1faf1-1f3fb-200d-1faf2-1f3ff',
        '1faf1-1f3fc-200d-1faf2-1f3fb',
        '1faf1-1f3fc-200d-1faf2-1f3fd',
        '1faf1-1f3fc-200d-1faf2-1f3fe',
        '1faf1-1f3fc-200d-1faf2-1f3ff',
        '1faf1-1f3fd-200d-1faf2-1f3fb',
        '1faf1-1f3fd-200d-1faf2-1f3fc',
        '1faf1-1f3fd-200d-1faf2-1f3fe',
        '1faf1-1f3fd-200d-1faf2-1f3ff',
        '1faf1-1f3fe-200d-1faf2-1f3fb',
        '1faf1-1f3fe-200d-1faf2-1f3fc',
        '1faf1-1f3fe-200d-1faf2-1f3fd',
        '1faf1-1f3fe-200d-1faf2-1f3ff',
        '1faf1-1f3ff-200d-1faf2-1f3fb',
        '1faf1-1f3ff-200d-1faf2-1f3fc',
        '1faf1-1f3ff-200d-1faf2-1f3fd',
        '1faf1-1f3ff-200d-1faf2-1f3fe',
      ],
      a: '3.0',
    },
    {
      n: ['pray', 'person with folded hands'],
      u: '1f64f',
      v: [
        '1f64f-1f3fb',
        '1f64f-1f3fc',
        '1f64f-1f3fd',
        '1f64f-1f3fe',
        '1f64f-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['writing hand'],
      u: '270d-fe0f',
      v: ['270d-1f3fb', '270d-1f3fc', '270d-1f3fd', '270d-1f3fe', '270d-1f3ff'],
      a: '0.7',
    },
    {
      n: ['nail care', 'nail polish'],
      u: '1f485',
      v: [
        '1f485-1f3fb',
        '1f485-1f3fc',
        '1f485-1f3fd',
        '1f485-1f3fe',
        '1f485-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['selfie'],
      u: '1f933',
      v: [
        '1f933-1f3fb',
        '1f933-1f3fc',
        '1f933-1f3fd',
        '1f933-1f3fe',
        '1f933-1f3ff',
      ],
      a: '3.0',
    },
    {
      n: ['muscle', 'flexed biceps'],
      u: '1f4aa',
      v: [
        '1f4aa-1f3fb',
        '1f4aa-1f3fc',
        '1f4aa-1f3fd',
        '1f4aa-1f3fe',
        '1f4aa-1f3ff',
      ],
      a: '0.6',
    },
    { n: ['mechanical arm'], u: '1f9be', a: '12.0' },
    { n: ['mechanical leg'], u: '1f9bf', a: '12.0' },
    {
      n: ['leg'],
      u: '1f9b5',
      v: [
        '1f9b5-1f3fb',
        '1f9b5-1f3fc',
        '1f9b5-1f3fd',
        '1f9b5-1f3fe',
        '1f9b5-1f3ff',
      ],
      a: '11.0',
    },
    {
      n: ['foot'],
      u: '1f9b6',
      v: [
        '1f9b6-1f3fb',
        '1f9b6-1f3fc',
        '1f9b6-1f3fd',
        '1f9b6-1f3fe',
        '1f9b6-1f3ff',
      ],
      a: '11.0',
    },
    {
      n: ['ear'],
      u: '1f442',
      v: [
        '1f442-1f3fb',
        '1f442-1f3fc',
        '1f442-1f3fd',
        '1f442-1f3fe',
        '1f442-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['ear with hearing aid'],
      u: '1f9bb',
      v: [
        '1f9bb-1f3fb',
        '1f9bb-1f3fc',
        '1f9bb-1f3fd',
        '1f9bb-1f3fe',
        '1f9bb-1f3ff',
      ],
      a: '12.0',
    },
    {
      n: ['nose'],
      u: '1f443',
      v: [
        '1f443-1f3fb',
        '1f443-1f3fc',
        '1f443-1f3fd',
        '1f443-1f3fe',
        '1f443-1f3ff',
      ],
      a: '0.6',
    },
    { n: ['brain'], u: '1f9e0', a: '5.0' },
    { n: ['anatomical heart'], u: '1fac0', a: '13.0' },
    { n: ['lungs'], u: '1fac1', a: '13.0' },
    { n: ['tooth'], u: '1f9b7', a: '11.0' },
    { n: ['bone'], u: '1f9b4', a: '11.0' },
    { n: ['eyes'], u: '1f440', a: '0.6' },
    { n: ['eye'], u: '1f441-fe0f', a: '0.7' },
    { n: ['tongue'], u: '1f445', a: '0.6' },
    { n: ['lips', 'mouth'], u: '1f444', a: '0.6' },
    { n: ['biting lip'], u: '1fae6', a: '14.0' },
    {
      n: ['baby'],
      u: '1f476',
      v: [
        '1f476-1f3fb',
        '1f476-1f3fc',
        '1f476-1f3fd',
        '1f476-1f3fe',
        '1f476-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['child'],
      u: '1f9d2',
      v: [
        '1f9d2-1f3fb',
        '1f9d2-1f3fc',
        '1f9d2-1f3fd',
        '1f9d2-1f3fe',
        '1f9d2-1f3ff',
      ],
      a: '5.0',
    },
    {
      n: ['boy'],
      u: '1f466',
      v: [
        '1f466-1f3fb',
        '1f466-1f3fc',
        '1f466-1f3fd',
        '1f466-1f3fe',
        '1f466-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['girl'],
      u: '1f467',
      v: [
        '1f467-1f3fb',
        '1f467-1f3fc',
        '1f467-1f3fd',
        '1f467-1f3fe',
        '1f467-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['adult'],
      u: '1f9d1',
      v: [
        '1f9d1-1f3fb',
        '1f9d1-1f3fc',
        '1f9d1-1f3fd',
        '1f9d1-1f3fe',
        '1f9d1-1f3ff',
      ],
      a: '5.0',
    },
    {
      n: ['person with blond hair'],
      u: '1f471',
      v: [
        '1f471-1f3fb',
        '1f471-1f3fc',
        '1f471-1f3fd',
        '1f471-1f3fe',
        '1f471-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man'],
      u: '1f468',
      v: [
        '1f468-1f3fb',
        '1f468-1f3fc',
        '1f468-1f3fd',
        '1f468-1f3fe',
        '1f468-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['bearded person'],
      u: '1f9d4',
      v: [
        '1f9d4-1f3fb',
        '1f9d4-1f3fc',
        '1f9d4-1f3fd',
        '1f9d4-1f3fe',
        '1f9d4-1f3ff',
      ],
      a: '5.0',
    },
    {
      n: ['man: beard', 'man with beard'],
      u: '1f9d4-200d-2642-fe0f',
      v: [
        '1f9d4-1f3fb-200d-2642-fe0f',
        '1f9d4-1f3fc-200d-2642-fe0f',
        '1f9d4-1f3fd-200d-2642-fe0f',
        '1f9d4-1f3fe-200d-2642-fe0f',
        '1f9d4-1f3ff-200d-2642-fe0f',
      ],
      a: '13.1',
    },
    {
      n: ['woman: beard', 'woman with beard'],
      u: '1f9d4-200d-2640-fe0f',
      v: [
        '1f9d4-1f3fb-200d-2640-fe0f',
        '1f9d4-1f3fc-200d-2640-fe0f',
        '1f9d4-1f3fd-200d-2640-fe0f',
        '1f9d4-1f3fe-200d-2640-fe0f',
        '1f9d4-1f3ff-200d-2640-fe0f',
      ],
      a: '13.1',
    },
    {
      n: ['man: red hair', 'red haired man'],
      u: '1f468-200d-1f9b0',
      v: [
        '1f468-1f3fb-200d-1f9b0',
        '1f468-1f3fc-200d-1f9b0',
        '1f468-1f3fd-200d-1f9b0',
        '1f468-1f3fe-200d-1f9b0',
        '1f468-1f3ff-200d-1f9b0',
      ],
      a: '11.0',
    },
    {
      n: ['man: curly hair', 'curly haired man'],
      u: '1f468-200d-1f9b1',
      v: [
        '1f468-1f3fb-200d-1f9b1',
        '1f468-1f3fc-200d-1f9b1',
        '1f468-1f3fd-200d-1f9b1',
        '1f468-1f3fe-200d-1f9b1',
        '1f468-1f3ff-200d-1f9b1',
      ],
      a: '11.0',
    },
    {
      n: ['man: white hair', 'white haired man'],
      u: '1f468-200d-1f9b3',
      v: [
        '1f468-1f3fb-200d-1f9b3',
        '1f468-1f3fc-200d-1f9b3',
        '1f468-1f3fd-200d-1f9b3',
        '1f468-1f3fe-200d-1f9b3',
        '1f468-1f3ff-200d-1f9b3',
      ],
      a: '11.0',
    },
    {
      n: ['bald man', 'man: bald'],
      u: '1f468-200d-1f9b2',
      v: [
        '1f468-1f3fb-200d-1f9b2',
        '1f468-1f3fc-200d-1f9b2',
        '1f468-1f3fd-200d-1f9b2',
        '1f468-1f3fe-200d-1f9b2',
        '1f468-1f3ff-200d-1f9b2',
      ],
      a: '11.0',
    },
    {
      n: ['woman'],
      u: '1f469',
      v: [
        '1f469-1f3fb',
        '1f469-1f3fc',
        '1f469-1f3fd',
        '1f469-1f3fe',
        '1f469-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['woman: red hair', 'red haired woman'],
      u: '1f469-200d-1f9b0',
      v: [
        '1f469-1f3fb-200d-1f9b0',
        '1f469-1f3fc-200d-1f9b0',
        '1f469-1f3fd-200d-1f9b0',
        '1f469-1f3fe-200d-1f9b0',
        '1f469-1f3ff-200d-1f9b0',
      ],
      a: '11.0',
    },
    {
      n: ['person: red hair', 'red haired person'],
      u: '1f9d1-200d-1f9b0',
      v: [
        '1f9d1-1f3fb-200d-1f9b0',
        '1f9d1-1f3fc-200d-1f9b0',
        '1f9d1-1f3fd-200d-1f9b0',
        '1f9d1-1f3fe-200d-1f9b0',
        '1f9d1-1f3ff-200d-1f9b0',
      ],
      a: '12.1',
    },
    {
      n: ['woman: curly hair', 'curly haired woman'],
      u: '1f469-200d-1f9b1',
      v: [
        '1f469-1f3fb-200d-1f9b1',
        '1f469-1f3fc-200d-1f9b1',
        '1f469-1f3fd-200d-1f9b1',
        '1f469-1f3fe-200d-1f9b1',
        '1f469-1f3ff-200d-1f9b1',
      ],
      a: '11.0',
    },
    {
      n: ['person: curly hair', 'curly haired person'],
      u: '1f9d1-200d-1f9b1',
      v: [
        '1f9d1-1f3fb-200d-1f9b1',
        '1f9d1-1f3fc-200d-1f9b1',
        '1f9d1-1f3fd-200d-1f9b1',
        '1f9d1-1f3fe-200d-1f9b1',
        '1f9d1-1f3ff-200d-1f9b1',
      ],
      a: '12.1',
    },
    {
      n: ['woman: white hair', 'white haired woman'],
      u: '1f469-200d-1f9b3',
      v: [
        '1f469-1f3fb-200d-1f9b3',
        '1f469-1f3fc-200d-1f9b3',
        '1f469-1f3fd-200d-1f9b3',
        '1f469-1f3fe-200d-1f9b3',
        '1f469-1f3ff-200d-1f9b3',
      ],
      a: '11.0',
    },
    {
      n: ['person: white hair', 'white haired person'],
      u: '1f9d1-200d-1f9b3',
      v: [
        '1f9d1-1f3fb-200d-1f9b3',
        '1f9d1-1f3fc-200d-1f9b3',
        '1f9d1-1f3fd-200d-1f9b3',
        '1f9d1-1f3fe-200d-1f9b3',
        '1f9d1-1f3ff-200d-1f9b3',
      ],
      a: '12.1',
    },
    {
      n: ['bald woman', 'woman: bald'],
      u: '1f469-200d-1f9b2',
      v: [
        '1f469-1f3fb-200d-1f9b2',
        '1f469-1f3fc-200d-1f9b2',
        '1f469-1f3fd-200d-1f9b2',
        '1f469-1f3fe-200d-1f9b2',
        '1f469-1f3ff-200d-1f9b2',
      ],
      a: '11.0',
    },
    {
      n: ['bald person', 'person: bald'],
      u: '1f9d1-200d-1f9b2',
      v: [
        '1f9d1-1f3fb-200d-1f9b2',
        '1f9d1-1f3fc-200d-1f9b2',
        '1f9d1-1f3fd-200d-1f9b2',
        '1f9d1-1f3fe-200d-1f9b2',
        '1f9d1-1f3ff-200d-1f9b2',
      ],
      a: '12.1',
    },
    {
      n: ['woman: blond hair', 'blond-haired-woman'],
      u: '1f471-200d-2640-fe0f',
      v: [
        '1f471-1f3fb-200d-2640-fe0f',
        '1f471-1f3fc-200d-2640-fe0f',
        '1f471-1f3fd-200d-2640-fe0f',
        '1f471-1f3fe-200d-2640-fe0f',
        '1f471-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['man: blond hair', 'blond-haired-man'],
      u: '1f471-200d-2642-fe0f',
      v: [
        '1f471-1f3fb-200d-2642-fe0f',
        '1f471-1f3fc-200d-2642-fe0f',
        '1f471-1f3fd-200d-2642-fe0f',
        '1f471-1f3fe-200d-2642-fe0f',
        '1f471-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['older adult'],
      u: '1f9d3',
      v: [
        '1f9d3-1f3fb',
        '1f9d3-1f3fc',
        '1f9d3-1f3fd',
        '1f9d3-1f3fe',
        '1f9d3-1f3ff',
      ],
      a: '5.0',
    },
    {
      n: ['older man'],
      u: '1f474',
      v: [
        '1f474-1f3fb',
        '1f474-1f3fc',
        '1f474-1f3fd',
        '1f474-1f3fe',
        '1f474-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['older woman'],
      u: '1f475',
      v: [
        '1f475-1f3fb',
        '1f475-1f3fc',
        '1f475-1f3fd',
        '1f475-1f3fe',
        '1f475-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['person frowning'],
      u: '1f64d',
      v: [
        '1f64d-1f3fb',
        '1f64d-1f3fc',
        '1f64d-1f3fd',
        '1f64d-1f3fe',
        '1f64d-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man frowning', 'man-frowning'],
      u: '1f64d-200d-2642-fe0f',
      v: [
        '1f64d-1f3fb-200d-2642-fe0f',
        '1f64d-1f3fc-200d-2642-fe0f',
        '1f64d-1f3fd-200d-2642-fe0f',
        '1f64d-1f3fe-200d-2642-fe0f',
        '1f64d-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman frowning', 'woman-frowning'],
      u: '1f64d-200d-2640-fe0f',
      v: [
        '1f64d-1f3fb-200d-2640-fe0f',
        '1f64d-1f3fc-200d-2640-fe0f',
        '1f64d-1f3fd-200d-2640-fe0f',
        '1f64d-1f3fe-200d-2640-fe0f',
        '1f64d-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['person with pouting face'],
      u: '1f64e',
      v: [
        '1f64e-1f3fb',
        '1f64e-1f3fc',
        '1f64e-1f3fd',
        '1f64e-1f3fe',
        '1f64e-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man pouting', 'man-pouting'],
      u: '1f64e-200d-2642-fe0f',
      v: [
        '1f64e-1f3fb-200d-2642-fe0f',
        '1f64e-1f3fc-200d-2642-fe0f',
        '1f64e-1f3fd-200d-2642-fe0f',
        '1f64e-1f3fe-200d-2642-fe0f',
        '1f64e-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman pouting', 'woman-pouting'],
      u: '1f64e-200d-2640-fe0f',
      v: [
        '1f64e-1f3fb-200d-2640-fe0f',
        '1f64e-1f3fc-200d-2640-fe0f',
        '1f64e-1f3fd-200d-2640-fe0f',
        '1f64e-1f3fe-200d-2640-fe0f',
        '1f64e-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['no good', 'face with no good gesture'],
      u: '1f645',
      v: [
        '1f645-1f3fb',
        '1f645-1f3fc',
        '1f645-1f3fd',
        '1f645-1f3fe',
        '1f645-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man gesturing no', 'man-gesturing-no'],
      u: '1f645-200d-2642-fe0f',
      v: [
        '1f645-1f3fb-200d-2642-fe0f',
        '1f645-1f3fc-200d-2642-fe0f',
        '1f645-1f3fd-200d-2642-fe0f',
        '1f645-1f3fe-200d-2642-fe0f',
        '1f645-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman gesturing no', 'woman-gesturing-no'],
      u: '1f645-200d-2640-fe0f',
      v: [
        '1f645-1f3fb-200d-2640-fe0f',
        '1f645-1f3fc-200d-2640-fe0f',
        '1f645-1f3fd-200d-2640-fe0f',
        '1f645-1f3fe-200d-2640-fe0f',
        '1f645-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['ok woman', 'face with ok gesture'],
      u: '1f646',
      v: [
        '1f646-1f3fb',
        '1f646-1f3fc',
        '1f646-1f3fd',
        '1f646-1f3fe',
        '1f646-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man gesturing ok', 'man-gesturing-ok'],
      u: '1f646-200d-2642-fe0f',
      v: [
        '1f646-1f3fb-200d-2642-fe0f',
        '1f646-1f3fc-200d-2642-fe0f',
        '1f646-1f3fd-200d-2642-fe0f',
        '1f646-1f3fe-200d-2642-fe0f',
        '1f646-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman gesturing ok', 'woman-gesturing-ok'],
      u: '1f646-200d-2640-fe0f',
      v: [
        '1f646-1f3fb-200d-2640-fe0f',
        '1f646-1f3fc-200d-2640-fe0f',
        '1f646-1f3fd-200d-2640-fe0f',
        '1f646-1f3fe-200d-2640-fe0f',
        '1f646-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['information desk person'],
      u: '1f481',
      v: [
        '1f481-1f3fb',
        '1f481-1f3fc',
        '1f481-1f3fd',
        '1f481-1f3fe',
        '1f481-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man tipping hand', 'man-tipping-hand'],
      u: '1f481-200d-2642-fe0f',
      v: [
        '1f481-1f3fb-200d-2642-fe0f',
        '1f481-1f3fc-200d-2642-fe0f',
        '1f481-1f3fd-200d-2642-fe0f',
        '1f481-1f3fe-200d-2642-fe0f',
        '1f481-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman tipping hand', 'woman-tipping-hand'],
      u: '1f481-200d-2640-fe0f',
      v: [
        '1f481-1f3fb-200d-2640-fe0f',
        '1f481-1f3fc-200d-2640-fe0f',
        '1f481-1f3fd-200d-2640-fe0f',
        '1f481-1f3fe-200d-2640-fe0f',
        '1f481-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['raising hand', 'happy person raising one hand'],
      u: '1f64b',
      v: [
        '1f64b-1f3fb',
        '1f64b-1f3fc',
        '1f64b-1f3fd',
        '1f64b-1f3fe',
        '1f64b-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man raising hand', 'man-raising-hand'],
      u: '1f64b-200d-2642-fe0f',
      v: [
        '1f64b-1f3fb-200d-2642-fe0f',
        '1f64b-1f3fc-200d-2642-fe0f',
        '1f64b-1f3fd-200d-2642-fe0f',
        '1f64b-1f3fe-200d-2642-fe0f',
        '1f64b-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman raising hand', 'woman-raising-hand'],
      u: '1f64b-200d-2640-fe0f',
      v: [
        '1f64b-1f3fb-200d-2640-fe0f',
        '1f64b-1f3fc-200d-2640-fe0f',
        '1f64b-1f3fd-200d-2640-fe0f',
        '1f64b-1f3fe-200d-2640-fe0f',
        '1f64b-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['deaf person'],
      u: '1f9cf',
      v: [
        '1f9cf-1f3fb',
        '1f9cf-1f3fc',
        '1f9cf-1f3fd',
        '1f9cf-1f3fe',
        '1f9cf-1f3ff',
      ],
      a: '12.0',
    },
    {
      n: ['deaf man'],
      u: '1f9cf-200d-2642-fe0f',
      v: [
        '1f9cf-1f3fb-200d-2642-fe0f',
        '1f9cf-1f3fc-200d-2642-fe0f',
        '1f9cf-1f3fd-200d-2642-fe0f',
        '1f9cf-1f3fe-200d-2642-fe0f',
        '1f9cf-1f3ff-200d-2642-fe0f',
      ],
      a: '12.0',
    },
    {
      n: ['deaf woman'],
      u: '1f9cf-200d-2640-fe0f',
      v: [
        '1f9cf-1f3fb-200d-2640-fe0f',
        '1f9cf-1f3fc-200d-2640-fe0f',
        '1f9cf-1f3fd-200d-2640-fe0f',
        '1f9cf-1f3fe-200d-2640-fe0f',
        '1f9cf-1f3ff-200d-2640-fe0f',
      ],
      a: '12.0',
    },
    {
      n: ['bow', 'person bowing deeply'],
      u: '1f647',
      v: [
        '1f647-1f3fb',
        '1f647-1f3fc',
        '1f647-1f3fd',
        '1f647-1f3fe',
        '1f647-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man bowing', 'man-bowing'],
      u: '1f647-200d-2642-fe0f',
      v: [
        '1f647-1f3fb-200d-2642-fe0f',
        '1f647-1f3fc-200d-2642-fe0f',
        '1f647-1f3fd-200d-2642-fe0f',
        '1f647-1f3fe-200d-2642-fe0f',
        '1f647-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman bowing', 'woman-bowing'],
      u: '1f647-200d-2640-fe0f',
      v: [
        '1f647-1f3fb-200d-2640-fe0f',
        '1f647-1f3fc-200d-2640-fe0f',
        '1f647-1f3fd-200d-2640-fe0f',
        '1f647-1f3fe-200d-2640-fe0f',
        '1f647-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['face palm'],
      u: '1f926',
      v: [
        '1f926-1f3fb',
        '1f926-1f3fc',
        '1f926-1f3fd',
        '1f926-1f3fe',
        '1f926-1f3ff',
      ],
      a: '3.0',
    },
    {
      n: ['man facepalming', 'man-facepalming'],
      u: '1f926-200d-2642-fe0f',
      v: [
        '1f926-1f3fb-200d-2642-fe0f',
        '1f926-1f3fc-200d-2642-fe0f',
        '1f926-1f3fd-200d-2642-fe0f',
        '1f926-1f3fe-200d-2642-fe0f',
        '1f926-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman facepalming', 'woman-facepalming'],
      u: '1f926-200d-2640-fe0f',
      v: [
        '1f926-1f3fb-200d-2640-fe0f',
        '1f926-1f3fc-200d-2640-fe0f',
        '1f926-1f3fd-200d-2640-fe0f',
        '1f926-1f3fe-200d-2640-fe0f',
        '1f926-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['shrug'],
      u: '1f937',
      v: [
        '1f937-1f3fb',
        '1f937-1f3fc',
        '1f937-1f3fd',
        '1f937-1f3fe',
        '1f937-1f3ff',
      ],
      a: '3.0',
    },
    {
      n: ['man shrugging', 'man-shrugging'],
      u: '1f937-200d-2642-fe0f',
      v: [
        '1f937-1f3fb-200d-2642-fe0f',
        '1f937-1f3fc-200d-2642-fe0f',
        '1f937-1f3fd-200d-2642-fe0f',
        '1f937-1f3fe-200d-2642-fe0f',
        '1f937-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman shrugging', 'woman-shrugging'],
      u: '1f937-200d-2640-fe0f',
      v: [
        '1f937-1f3fb-200d-2640-fe0f',
        '1f937-1f3fc-200d-2640-fe0f',
        '1f937-1f3fd-200d-2640-fe0f',
        '1f937-1f3fe-200d-2640-fe0f',
        '1f937-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['health worker'],
      u: '1f9d1-200d-2695-fe0f',
      v: [
        '1f9d1-1f3fb-200d-2695-fe0f',
        '1f9d1-1f3fc-200d-2695-fe0f',
        '1f9d1-1f3fd-200d-2695-fe0f',
        '1f9d1-1f3fe-200d-2695-fe0f',
        '1f9d1-1f3ff-200d-2695-fe0f',
      ],
      a: '12.1',
    },
    {
      n: ['male-doctor', 'man health worker'],
      u: '1f468-200d-2695-fe0f',
      v: [
        '1f468-1f3fb-200d-2695-fe0f',
        '1f468-1f3fc-200d-2695-fe0f',
        '1f468-1f3fd-200d-2695-fe0f',
        '1f468-1f3fe-200d-2695-fe0f',
        '1f468-1f3ff-200d-2695-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['female-doctor', 'woman health worker'],
      u: '1f469-200d-2695-fe0f',
      v: [
        '1f469-1f3fb-200d-2695-fe0f',
        '1f469-1f3fc-200d-2695-fe0f',
        '1f469-1f3fd-200d-2695-fe0f',
        '1f469-1f3fe-200d-2695-fe0f',
        '1f469-1f3ff-200d-2695-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['student'],
      u: '1f9d1-200d-1f393',
      v: [
        '1f9d1-1f3fb-200d-1f393',
        '1f9d1-1f3fc-200d-1f393',
        '1f9d1-1f3fd-200d-1f393',
        '1f9d1-1f3fe-200d-1f393',
        '1f9d1-1f3ff-200d-1f393',
      ],
      a: '12.1',
    },
    {
      n: ['man student', 'male-student'],
      u: '1f468-200d-1f393',
      v: [
        '1f468-1f3fb-200d-1f393',
        '1f468-1f3fc-200d-1f393',
        '1f468-1f3fd-200d-1f393',
        '1f468-1f3fe-200d-1f393',
        '1f468-1f3ff-200d-1f393',
      ],
      a: '4.0',
    },
    {
      n: ['woman student', 'female-student'],
      u: '1f469-200d-1f393',
      v: [
        '1f469-1f3fb-200d-1f393',
        '1f469-1f3fc-200d-1f393',
        '1f469-1f3fd-200d-1f393',
        '1f469-1f3fe-200d-1f393',
        '1f469-1f3ff-200d-1f393',
      ],
      a: '4.0',
    },
    {
      n: ['teacher'],
      u: '1f9d1-200d-1f3eb',
      v: [
        '1f9d1-1f3fb-200d-1f3eb',
        '1f9d1-1f3fc-200d-1f3eb',
        '1f9d1-1f3fd-200d-1f3eb',
        '1f9d1-1f3fe-200d-1f3eb',
        '1f9d1-1f3ff-200d-1f3eb',
      ],
      a: '12.1',
    },
    {
      n: ['man teacher', 'male-teacher'],
      u: '1f468-200d-1f3eb',
      v: [
        '1f468-1f3fb-200d-1f3eb',
        '1f468-1f3fc-200d-1f3eb',
        '1f468-1f3fd-200d-1f3eb',
        '1f468-1f3fe-200d-1f3eb',
        '1f468-1f3ff-200d-1f3eb',
      ],
      a: '4.0',
    },
    {
      n: ['woman teacher', 'female-teacher'],
      u: '1f469-200d-1f3eb',
      v: [
        '1f469-1f3fb-200d-1f3eb',
        '1f469-1f3fc-200d-1f3eb',
        '1f469-1f3fd-200d-1f3eb',
        '1f469-1f3fe-200d-1f3eb',
        '1f469-1f3ff-200d-1f3eb',
      ],
      a: '4.0',
    },
    {
      n: ['judge'],
      u: '1f9d1-200d-2696-fe0f',
      v: [
        '1f9d1-1f3fb-200d-2696-fe0f',
        '1f9d1-1f3fc-200d-2696-fe0f',
        '1f9d1-1f3fd-200d-2696-fe0f',
        '1f9d1-1f3fe-200d-2696-fe0f',
        '1f9d1-1f3ff-200d-2696-fe0f',
      ],
      a: '12.1',
    },
    {
      n: ['man judge', 'male-judge'],
      u: '1f468-200d-2696-fe0f',
      v: [
        '1f468-1f3fb-200d-2696-fe0f',
        '1f468-1f3fc-200d-2696-fe0f',
        '1f468-1f3fd-200d-2696-fe0f',
        '1f468-1f3fe-200d-2696-fe0f',
        '1f468-1f3ff-200d-2696-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman judge', 'female-judge'],
      u: '1f469-200d-2696-fe0f',
      v: [
        '1f469-1f3fb-200d-2696-fe0f',
        '1f469-1f3fc-200d-2696-fe0f',
        '1f469-1f3fd-200d-2696-fe0f',
        '1f469-1f3fe-200d-2696-fe0f',
        '1f469-1f3ff-200d-2696-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['farmer'],
      u: '1f9d1-200d-1f33e',
      v: [
        '1f9d1-1f3fb-200d-1f33e',
        '1f9d1-1f3fc-200d-1f33e',
        '1f9d1-1f3fd-200d-1f33e',
        '1f9d1-1f3fe-200d-1f33e',
        '1f9d1-1f3ff-200d-1f33e',
      ],
      a: '12.1',
    },
    {
      n: ['man farmer', 'male-farmer'],
      u: '1f468-200d-1f33e',
      v: [
        '1f468-1f3fb-200d-1f33e',
        '1f468-1f3fc-200d-1f33e',
        '1f468-1f3fd-200d-1f33e',
        '1f468-1f3fe-200d-1f33e',
        '1f468-1f3ff-200d-1f33e',
      ],
      a: '4.0',
    },
    {
      n: ['woman farmer', 'female-farmer'],
      u: '1f469-200d-1f33e',
      v: [
        '1f469-1f3fb-200d-1f33e',
        '1f469-1f3fc-200d-1f33e',
        '1f469-1f3fd-200d-1f33e',
        '1f469-1f3fe-200d-1f33e',
        '1f469-1f3ff-200d-1f33e',
      ],
      a: '4.0',
    },
    {
      n: ['cook'],
      u: '1f9d1-200d-1f373',
      v: [
        '1f9d1-1f3fb-200d-1f373',
        '1f9d1-1f3fc-200d-1f373',
        '1f9d1-1f3fd-200d-1f373',
        '1f9d1-1f3fe-200d-1f373',
        '1f9d1-1f3ff-200d-1f373',
      ],
      a: '12.1',
    },
    {
      n: ['man cook', 'male-cook'],
      u: '1f468-200d-1f373',
      v: [
        '1f468-1f3fb-200d-1f373',
        '1f468-1f3fc-200d-1f373',
        '1f468-1f3fd-200d-1f373',
        '1f468-1f3fe-200d-1f373',
        '1f468-1f3ff-200d-1f373',
      ],
      a: '4.0',
    },
    {
      n: ['woman cook', 'female-cook'],
      u: '1f469-200d-1f373',
      v: [
        '1f469-1f3fb-200d-1f373',
        '1f469-1f3fc-200d-1f373',
        '1f469-1f3fd-200d-1f373',
        '1f469-1f3fe-200d-1f373',
        '1f469-1f3ff-200d-1f373',
      ],
      a: '4.0',
    },
    {
      n: ['mechanic'],
      u: '1f9d1-200d-1f527',
      v: [
        '1f9d1-1f3fb-200d-1f527',
        '1f9d1-1f3fc-200d-1f527',
        '1f9d1-1f3fd-200d-1f527',
        '1f9d1-1f3fe-200d-1f527',
        '1f9d1-1f3ff-200d-1f527',
      ],
      a: '12.1',
    },
    {
      n: ['man mechanic', 'male-mechanic'],
      u: '1f468-200d-1f527',
      v: [
        '1f468-1f3fb-200d-1f527',
        '1f468-1f3fc-200d-1f527',
        '1f468-1f3fd-200d-1f527',
        '1f468-1f3fe-200d-1f527',
        '1f468-1f3ff-200d-1f527',
      ],
      a: '4.0',
    },
    {
      n: ['woman mechanic', 'female-mechanic'],
      u: '1f469-200d-1f527',
      v: [
        '1f469-1f3fb-200d-1f527',
        '1f469-1f3fc-200d-1f527',
        '1f469-1f3fd-200d-1f527',
        '1f469-1f3fe-200d-1f527',
        '1f469-1f3ff-200d-1f527',
      ],
      a: '4.0',
    },
    {
      n: ['factory worker'],
      u: '1f9d1-200d-1f3ed',
      v: [
        '1f9d1-1f3fb-200d-1f3ed',
        '1f9d1-1f3fc-200d-1f3ed',
        '1f9d1-1f3fd-200d-1f3ed',
        '1f9d1-1f3fe-200d-1f3ed',
        '1f9d1-1f3ff-200d-1f3ed',
      ],
      a: '12.1',
    },
    {
      n: ['man factory worker', 'male-factory-worker'],
      u: '1f468-200d-1f3ed',
      v: [
        '1f468-1f3fb-200d-1f3ed',
        '1f468-1f3fc-200d-1f3ed',
        '1f468-1f3fd-200d-1f3ed',
        '1f468-1f3fe-200d-1f3ed',
        '1f468-1f3ff-200d-1f3ed',
      ],
      a: '4.0',
    },
    {
      n: ['woman factory worker', 'female-factory-worker'],
      u: '1f469-200d-1f3ed',
      v: [
        '1f469-1f3fb-200d-1f3ed',
        '1f469-1f3fc-200d-1f3ed',
        '1f469-1f3fd-200d-1f3ed',
        '1f469-1f3fe-200d-1f3ed',
        '1f469-1f3ff-200d-1f3ed',
      ],
      a: '4.0',
    },
    {
      n: ['office worker'],
      u: '1f9d1-200d-1f4bc',
      v: [
        '1f9d1-1f3fb-200d-1f4bc',
        '1f9d1-1f3fc-200d-1f4bc',
        '1f9d1-1f3fd-200d-1f4bc',
        '1f9d1-1f3fe-200d-1f4bc',
        '1f9d1-1f3ff-200d-1f4bc',
      ],
      a: '12.1',
    },
    {
      n: ['man office worker', 'male-office-worker'],
      u: '1f468-200d-1f4bc',
      v: [
        '1f468-1f3fb-200d-1f4bc',
        '1f468-1f3fc-200d-1f4bc',
        '1f468-1f3fd-200d-1f4bc',
        '1f468-1f3fe-200d-1f4bc',
        '1f468-1f3ff-200d-1f4bc',
      ],
      a: '4.0',
    },
    {
      n: ['woman office worker', 'female-office-worker'],
      u: '1f469-200d-1f4bc',
      v: [
        '1f469-1f3fb-200d-1f4bc',
        '1f469-1f3fc-200d-1f4bc',
        '1f469-1f3fd-200d-1f4bc',
        '1f469-1f3fe-200d-1f4bc',
        '1f469-1f3ff-200d-1f4bc',
      ],
      a: '4.0',
    },
    {
      n: ['scientist'],
      u: '1f9d1-200d-1f52c',
      v: [
        '1f9d1-1f3fb-200d-1f52c',
        '1f9d1-1f3fc-200d-1f52c',
        '1f9d1-1f3fd-200d-1f52c',
        '1f9d1-1f3fe-200d-1f52c',
        '1f9d1-1f3ff-200d-1f52c',
      ],
      a: '12.1',
    },
    {
      n: ['man scientist', 'male-scientist'],
      u: '1f468-200d-1f52c',
      v: [
        '1f468-1f3fb-200d-1f52c',
        '1f468-1f3fc-200d-1f52c',
        '1f468-1f3fd-200d-1f52c',
        '1f468-1f3fe-200d-1f52c',
        '1f468-1f3ff-200d-1f52c',
      ],
      a: '4.0',
    },
    {
      n: ['woman scientist', 'female-scientist'],
      u: '1f469-200d-1f52c',
      v: [
        '1f469-1f3fb-200d-1f52c',
        '1f469-1f3fc-200d-1f52c',
        '1f469-1f3fd-200d-1f52c',
        '1f469-1f3fe-200d-1f52c',
        '1f469-1f3ff-200d-1f52c',
      ],
      a: '4.0',
    },
    {
      n: ['technologist'],
      u: '1f9d1-200d-1f4bb',
      v: [
        '1f9d1-1f3fb-200d-1f4bb',
        '1f9d1-1f3fc-200d-1f4bb',
        '1f9d1-1f3fd-200d-1f4bb',
        '1f9d1-1f3fe-200d-1f4bb',
        '1f9d1-1f3ff-200d-1f4bb',
      ],
      a: '12.1',
    },
    {
      n: ['man technologist', 'male-technologist'],
      u: '1f468-200d-1f4bb',
      v: [
        '1f468-1f3fb-200d-1f4bb',
        '1f468-1f3fc-200d-1f4bb',
        '1f468-1f3fd-200d-1f4bb',
        '1f468-1f3fe-200d-1f4bb',
        '1f468-1f3ff-200d-1f4bb',
      ],
      a: '4.0',
    },
    {
      n: ['woman technologist', 'female-technologist'],
      u: '1f469-200d-1f4bb',
      v: [
        '1f469-1f3fb-200d-1f4bb',
        '1f469-1f3fc-200d-1f4bb',
        '1f469-1f3fd-200d-1f4bb',
        '1f469-1f3fe-200d-1f4bb',
        '1f469-1f3ff-200d-1f4bb',
      ],
      a: '4.0',
    },
    {
      n: ['singer'],
      u: '1f9d1-200d-1f3a4',
      v: [
        '1f9d1-1f3fb-200d-1f3a4',
        '1f9d1-1f3fc-200d-1f3a4',
        '1f9d1-1f3fd-200d-1f3a4',
        '1f9d1-1f3fe-200d-1f3a4',
        '1f9d1-1f3ff-200d-1f3a4',
      ],
      a: '12.1',
    },
    {
      n: ['man singer', 'male-singer'],
      u: '1f468-200d-1f3a4',
      v: [
        '1f468-1f3fb-200d-1f3a4',
        '1f468-1f3fc-200d-1f3a4',
        '1f468-1f3fd-200d-1f3a4',
        '1f468-1f3fe-200d-1f3a4',
        '1f468-1f3ff-200d-1f3a4',
      ],
      a: '4.0',
    },
    {
      n: ['woman singer', 'female-singer'],
      u: '1f469-200d-1f3a4',
      v: [
        '1f469-1f3fb-200d-1f3a4',
        '1f469-1f3fc-200d-1f3a4',
        '1f469-1f3fd-200d-1f3a4',
        '1f469-1f3fe-200d-1f3a4',
        '1f469-1f3ff-200d-1f3a4',
      ],
      a: '4.0',
    },
    {
      n: ['artist'],
      u: '1f9d1-200d-1f3a8',
      v: [
        '1f9d1-1f3fb-200d-1f3a8',
        '1f9d1-1f3fc-200d-1f3a8',
        '1f9d1-1f3fd-200d-1f3a8',
        '1f9d1-1f3fe-200d-1f3a8',
        '1f9d1-1f3ff-200d-1f3a8',
      ],
      a: '12.1',
    },
    {
      n: ['man artist', 'male-artist'],
      u: '1f468-200d-1f3a8',
      v: [
        '1f468-1f3fb-200d-1f3a8',
        '1f468-1f3fc-200d-1f3a8',
        '1f468-1f3fd-200d-1f3a8',
        '1f468-1f3fe-200d-1f3a8',
        '1f468-1f3ff-200d-1f3a8',
      ],
      a: '4.0',
    },
    {
      n: ['woman artist', 'female-artist'],
      u: '1f469-200d-1f3a8',
      v: [
        '1f469-1f3fb-200d-1f3a8',
        '1f469-1f3fc-200d-1f3a8',
        '1f469-1f3fd-200d-1f3a8',
        '1f469-1f3fe-200d-1f3a8',
        '1f469-1f3ff-200d-1f3a8',
      ],
      a: '4.0',
    },
    {
      n: ['pilot'],
      u: '1f9d1-200d-2708-fe0f',
      v: [
        '1f9d1-1f3fb-200d-2708-fe0f',
        '1f9d1-1f3fc-200d-2708-fe0f',
        '1f9d1-1f3fd-200d-2708-fe0f',
        '1f9d1-1f3fe-200d-2708-fe0f',
        '1f9d1-1f3ff-200d-2708-fe0f',
      ],
      a: '12.1',
    },
    {
      n: ['man pilot', 'male-pilot'],
      u: '1f468-200d-2708-fe0f',
      v: [
        '1f468-1f3fb-200d-2708-fe0f',
        '1f468-1f3fc-200d-2708-fe0f',
        '1f468-1f3fd-200d-2708-fe0f',
        '1f468-1f3fe-200d-2708-fe0f',
        '1f468-1f3ff-200d-2708-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman pilot', 'female-pilot'],
      u: '1f469-200d-2708-fe0f',
      v: [
        '1f469-1f3fb-200d-2708-fe0f',
        '1f469-1f3fc-200d-2708-fe0f',
        '1f469-1f3fd-200d-2708-fe0f',
        '1f469-1f3fe-200d-2708-fe0f',
        '1f469-1f3ff-200d-2708-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['astronaut'],
      u: '1f9d1-200d-1f680',
      v: [
        '1f9d1-1f3fb-200d-1f680',
        '1f9d1-1f3fc-200d-1f680',
        '1f9d1-1f3fd-200d-1f680',
        '1f9d1-1f3fe-200d-1f680',
        '1f9d1-1f3ff-200d-1f680',
      ],
      a: '12.1',
    },
    {
      n: ['man astronaut', 'male-astronaut'],
      u: '1f468-200d-1f680',
      v: [
        '1f468-1f3fb-200d-1f680',
        '1f468-1f3fc-200d-1f680',
        '1f468-1f3fd-200d-1f680',
        '1f468-1f3fe-200d-1f680',
        '1f468-1f3ff-200d-1f680',
      ],
      a: '4.0',
    },
    {
      n: ['woman astronaut', 'female-astronaut'],
      u: '1f469-200d-1f680',
      v: [
        '1f469-1f3fb-200d-1f680',
        '1f469-1f3fc-200d-1f680',
        '1f469-1f3fd-200d-1f680',
        '1f469-1f3fe-200d-1f680',
        '1f469-1f3ff-200d-1f680',
      ],
      a: '4.0',
    },
    {
      n: ['firefighter'],
      u: '1f9d1-200d-1f692',
      v: [
        '1f9d1-1f3fb-200d-1f692',
        '1f9d1-1f3fc-200d-1f692',
        '1f9d1-1f3fd-200d-1f692',
        '1f9d1-1f3fe-200d-1f692',
        '1f9d1-1f3ff-200d-1f692',
      ],
      a: '12.1',
    },
    {
      n: ['man firefighter', 'male-firefighter'],
      u: '1f468-200d-1f692',
      v: [
        '1f468-1f3fb-200d-1f692',
        '1f468-1f3fc-200d-1f692',
        '1f468-1f3fd-200d-1f692',
        '1f468-1f3fe-200d-1f692',
        '1f468-1f3ff-200d-1f692',
      ],
      a: '4.0',
    },
    {
      n: ['woman firefighter', 'female-firefighter'],
      u: '1f469-200d-1f692',
      v: [
        '1f469-1f3fb-200d-1f692',
        '1f469-1f3fc-200d-1f692',
        '1f469-1f3fd-200d-1f692',
        '1f469-1f3fe-200d-1f692',
        '1f469-1f3ff-200d-1f692',
      ],
      a: '4.0',
    },
    {
      n: ['cop', 'police officer'],
      u: '1f46e',
      v: [
        '1f46e-1f3fb',
        '1f46e-1f3fc',
        '1f46e-1f3fd',
        '1f46e-1f3fe',
        '1f46e-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man police officer', 'male-police-officer'],
      u: '1f46e-200d-2642-fe0f',
      v: [
        '1f46e-1f3fb-200d-2642-fe0f',
        '1f46e-1f3fc-200d-2642-fe0f',
        '1f46e-1f3fd-200d-2642-fe0f',
        '1f46e-1f3fe-200d-2642-fe0f',
        '1f46e-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman police officer', 'female-police-officer'],
      u: '1f46e-200d-2640-fe0f',
      v: [
        '1f46e-1f3fb-200d-2640-fe0f',
        '1f46e-1f3fc-200d-2640-fe0f',
        '1f46e-1f3fd-200d-2640-fe0f',
        '1f46e-1f3fe-200d-2640-fe0f',
        '1f46e-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['detective', 'sleuth or spy'],
      u: '1f575-fe0f',
      v: [
        '1f575-1f3fb',
        '1f575-1f3fc',
        '1f575-1f3fd',
        '1f575-1f3fe',
        '1f575-1f3ff',
      ],
      a: '0.7',
    },
    {
      n: ['man detective', 'male-detective'],
      u: '1f575-fe0f-200d-2642-fe0f',
      v: [
        '1f575-1f3fb-200d-2642-fe0f',
        '1f575-1f3fc-200d-2642-fe0f',
        '1f575-1f3fd-200d-2642-fe0f',
        '1f575-1f3fe-200d-2642-fe0f',
        '1f575-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman detective', 'female-detective'],
      u: '1f575-fe0f-200d-2640-fe0f',
      v: [
        '1f575-1f3fb-200d-2640-fe0f',
        '1f575-1f3fc-200d-2640-fe0f',
        '1f575-1f3fd-200d-2640-fe0f',
        '1f575-1f3fe-200d-2640-fe0f',
        '1f575-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['guardsman'],
      u: '1f482',
      v: [
        '1f482-1f3fb',
        '1f482-1f3fc',
        '1f482-1f3fd',
        '1f482-1f3fe',
        '1f482-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man guard', 'male-guard'],
      u: '1f482-200d-2642-fe0f',
      v: [
        '1f482-1f3fb-200d-2642-fe0f',
        '1f482-1f3fc-200d-2642-fe0f',
        '1f482-1f3fd-200d-2642-fe0f',
        '1f482-1f3fe-200d-2642-fe0f',
        '1f482-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman guard', 'female-guard'],
      u: '1f482-200d-2640-fe0f',
      v: [
        '1f482-1f3fb-200d-2640-fe0f',
        '1f482-1f3fc-200d-2640-fe0f',
        '1f482-1f3fd-200d-2640-fe0f',
        '1f482-1f3fe-200d-2640-fe0f',
        '1f482-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['ninja'],
      u: '1f977',
      v: [
        '1f977-1f3fb',
        '1f977-1f3fc',
        '1f977-1f3fd',
        '1f977-1f3fe',
        '1f977-1f3ff',
      ],
      a: '13.0',
    },
    {
      n: ['construction worker'],
      u: '1f477',
      v: [
        '1f477-1f3fb',
        '1f477-1f3fc',
        '1f477-1f3fd',
        '1f477-1f3fe',
        '1f477-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man construction worker', 'male-construction-worker'],
      u: '1f477-200d-2642-fe0f',
      v: [
        '1f477-1f3fb-200d-2642-fe0f',
        '1f477-1f3fc-200d-2642-fe0f',
        '1f477-1f3fd-200d-2642-fe0f',
        '1f477-1f3fe-200d-2642-fe0f',
        '1f477-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman construction worker', 'female-construction-worker'],
      u: '1f477-200d-2640-fe0f',
      v: [
        '1f477-1f3fb-200d-2640-fe0f',
        '1f477-1f3fc-200d-2640-fe0f',
        '1f477-1f3fd-200d-2640-fe0f',
        '1f477-1f3fe-200d-2640-fe0f',
        '1f477-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['person with crown'],
      u: '1fac5',
      v: [
        '1fac5-1f3fb',
        '1fac5-1f3fc',
        '1fac5-1f3fd',
        '1fac5-1f3fe',
        '1fac5-1f3ff',
      ],
      a: '14.0',
    },
    {
      n: ['prince'],
      u: '1f934',
      v: [
        '1f934-1f3fb',
        '1f934-1f3fc',
        '1f934-1f3fd',
        '1f934-1f3fe',
        '1f934-1f3ff',
      ],
      a: '3.0',
    },
    {
      n: ['princess'],
      u: '1f478',
      v: [
        '1f478-1f3fb',
        '1f478-1f3fc',
        '1f478-1f3fd',
        '1f478-1f3fe',
        '1f478-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man with turban'],
      u: '1f473',
      v: [
        '1f473-1f3fb',
        '1f473-1f3fc',
        '1f473-1f3fd',
        '1f473-1f3fe',
        '1f473-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man wearing turban', 'man-wearing-turban'],
      u: '1f473-200d-2642-fe0f',
      v: [
        '1f473-1f3fb-200d-2642-fe0f',
        '1f473-1f3fc-200d-2642-fe0f',
        '1f473-1f3fd-200d-2642-fe0f',
        '1f473-1f3fe-200d-2642-fe0f',
        '1f473-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman wearing turban', 'woman-wearing-turban'],
      u: '1f473-200d-2640-fe0f',
      v: [
        '1f473-1f3fb-200d-2640-fe0f',
        '1f473-1f3fc-200d-2640-fe0f',
        '1f473-1f3fd-200d-2640-fe0f',
        '1f473-1f3fe-200d-2640-fe0f',
        '1f473-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['man with gua pi mao'],
      u: '1f472',
      v: [
        '1f472-1f3fb',
        '1f472-1f3fc',
        '1f472-1f3fd',
        '1f472-1f3fe',
        '1f472-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['person with headscarf'],
      u: '1f9d5',
      v: [
        '1f9d5-1f3fb',
        '1f9d5-1f3fc',
        '1f9d5-1f3fd',
        '1f9d5-1f3fe',
        '1f9d5-1f3ff',
      ],
      a: '5.0',
    },
    {
      n: ['man in tuxedo', 'person in tuxedo'],
      u: '1f935',
      v: [
        '1f935-1f3fb',
        '1f935-1f3fc',
        '1f935-1f3fd',
        '1f935-1f3fe',
        '1f935-1f3ff',
      ],
      a: '3.0',
    },
    {
      n: ['man in tuxedo'],
      u: '1f935-200d-2642-fe0f',
      v: [
        '1f935-1f3fb-200d-2642-fe0f',
        '1f935-1f3fc-200d-2642-fe0f',
        '1f935-1f3fd-200d-2642-fe0f',
        '1f935-1f3fe-200d-2642-fe0f',
        '1f935-1f3ff-200d-2642-fe0f',
      ],
      a: '13.0',
    },
    {
      n: ['woman in tuxedo'],
      u: '1f935-200d-2640-fe0f',
      v: [
        '1f935-1f3fb-200d-2640-fe0f',
        '1f935-1f3fc-200d-2640-fe0f',
        '1f935-1f3fd-200d-2640-fe0f',
        '1f935-1f3fe-200d-2640-fe0f',
        '1f935-1f3ff-200d-2640-fe0f',
      ],
      a: '13.0',
    },
    {
      n: ['bride with veil'],
      u: '1f470',
      v: [
        '1f470-1f3fb',
        '1f470-1f3fc',
        '1f470-1f3fd',
        '1f470-1f3fe',
        '1f470-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man with veil'],
      u: '1f470-200d-2642-fe0f',
      v: [
        '1f470-1f3fb-200d-2642-fe0f',
        '1f470-1f3fc-200d-2642-fe0f',
        '1f470-1f3fd-200d-2642-fe0f',
        '1f470-1f3fe-200d-2642-fe0f',
        '1f470-1f3ff-200d-2642-fe0f',
      ],
      a: '13.0',
    },
    {
      n: ['woman with veil'],
      u: '1f470-200d-2640-fe0f',
      v: [
        '1f470-1f3fb-200d-2640-fe0f',
        '1f470-1f3fc-200d-2640-fe0f',
        '1f470-1f3fd-200d-2640-fe0f',
        '1f470-1f3fe-200d-2640-fe0f',
        '1f470-1f3ff-200d-2640-fe0f',
      ],
      a: '13.0',
    },
    {
      n: ['pregnant woman'],
      u: '1f930',
      v: [
        '1f930-1f3fb',
        '1f930-1f3fc',
        '1f930-1f3fd',
        '1f930-1f3fe',
        '1f930-1f3ff',
      ],
      a: '3.0',
    },
    {
      n: ['pregnant man'],
      u: '1fac3',
      v: [
        '1fac3-1f3fb',
        '1fac3-1f3fc',
        '1fac3-1f3fd',
        '1fac3-1f3fe',
        '1fac3-1f3ff',
      ],
      a: '14.0',
    },
    {
      n: ['pregnant person'],
      u: '1fac4',
      v: [
        '1fac4-1f3fb',
        '1fac4-1f3fc',
        '1fac4-1f3fd',
        '1fac4-1f3fe',
        '1fac4-1f3ff',
      ],
      a: '14.0',
    },
    {
      n: ['breast-feeding'],
      u: '1f931',
      v: [
        '1f931-1f3fb',
        '1f931-1f3fc',
        '1f931-1f3fd',
        '1f931-1f3fe',
        '1f931-1f3ff',
      ],
      a: '5.0',
    },
    {
      n: ['woman feeding baby'],
      u: '1f469-200d-1f37c',
      v: [
        '1f469-1f3fb-200d-1f37c',
        '1f469-1f3fc-200d-1f37c',
        '1f469-1f3fd-200d-1f37c',
        '1f469-1f3fe-200d-1f37c',
        '1f469-1f3ff-200d-1f37c',
      ],
      a: '13.0',
    },
    {
      n: ['man feeding baby'],
      u: '1f468-200d-1f37c',
      v: [
        '1f468-1f3fb-200d-1f37c',
        '1f468-1f3fc-200d-1f37c',
        '1f468-1f3fd-200d-1f37c',
        '1f468-1f3fe-200d-1f37c',
        '1f468-1f3ff-200d-1f37c',
      ],
      a: '13.0',
    },
    {
      n: ['person feeding baby'],
      u: '1f9d1-200d-1f37c',
      v: [
        '1f9d1-1f3fb-200d-1f37c',
        '1f9d1-1f3fc-200d-1f37c',
        '1f9d1-1f3fd-200d-1f37c',
        '1f9d1-1f3fe-200d-1f37c',
        '1f9d1-1f3ff-200d-1f37c',
      ],
      a: '13.0',
    },
    {
      n: ['angel', 'baby angel'],
      u: '1f47c',
      v: [
        '1f47c-1f3fb',
        '1f47c-1f3fc',
        '1f47c-1f3fd',
        '1f47c-1f3fe',
        '1f47c-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['santa', 'father christmas'],
      u: '1f385',
      v: [
        '1f385-1f3fb',
        '1f385-1f3fc',
        '1f385-1f3fd',
        '1f385-1f3fe',
        '1f385-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['mrs claus', 'mother christmas'],
      u: '1f936',
      v: [
        '1f936-1f3fb',
        '1f936-1f3fc',
        '1f936-1f3fd',
        '1f936-1f3fe',
        '1f936-1f3ff',
      ],
      a: '3.0',
    },
    {
      n: ['mx claus'],
      u: '1f9d1-200d-1f384',
      v: [
        '1f9d1-1f3fb-200d-1f384',
        '1f9d1-1f3fc-200d-1f384',
        '1f9d1-1f3fd-200d-1f384',
        '1f9d1-1f3fe-200d-1f384',
        '1f9d1-1f3ff-200d-1f384',
      ],
      a: '13.0',
    },
    {
      n: ['superhero'],
      u: '1f9b8',
      v: [
        '1f9b8-1f3fb',
        '1f9b8-1f3fc',
        '1f9b8-1f3fd',
        '1f9b8-1f3fe',
        '1f9b8-1f3ff',
      ],
      a: '11.0',
    },
    {
      n: ['man superhero', 'male superhero'],
      u: '1f9b8-200d-2642-fe0f',
      v: [
        '1f9b8-1f3fb-200d-2642-fe0f',
        '1f9b8-1f3fc-200d-2642-fe0f',
        '1f9b8-1f3fd-200d-2642-fe0f',
        '1f9b8-1f3fe-200d-2642-fe0f',
        '1f9b8-1f3ff-200d-2642-fe0f',
      ],
      a: '11.0',
    },
    {
      n: ['woman superhero', 'female superhero'],
      u: '1f9b8-200d-2640-fe0f',
      v: [
        '1f9b8-1f3fb-200d-2640-fe0f',
        '1f9b8-1f3fc-200d-2640-fe0f',
        '1f9b8-1f3fd-200d-2640-fe0f',
        '1f9b8-1f3fe-200d-2640-fe0f',
        '1f9b8-1f3ff-200d-2640-fe0f',
      ],
      a: '11.0',
    },
    {
      n: ['supervillain'],
      u: '1f9b9',
      v: [
        '1f9b9-1f3fb',
        '1f9b9-1f3fc',
        '1f9b9-1f3fd',
        '1f9b9-1f3fe',
        '1f9b9-1f3ff',
      ],
      a: '11.0',
    },
    {
      n: ['man supervillain', 'male supervillain'],
      u: '1f9b9-200d-2642-fe0f',
      v: [
        '1f9b9-1f3fb-200d-2642-fe0f',
        '1f9b9-1f3fc-200d-2642-fe0f',
        '1f9b9-1f3fd-200d-2642-fe0f',
        '1f9b9-1f3fe-200d-2642-fe0f',
        '1f9b9-1f3ff-200d-2642-fe0f',
      ],
      a: '11.0',
    },
    {
      n: ['woman supervillain', 'female supervillain'],
      u: '1f9b9-200d-2640-fe0f',
      v: [
        '1f9b9-1f3fb-200d-2640-fe0f',
        '1f9b9-1f3fc-200d-2640-fe0f',
        '1f9b9-1f3fd-200d-2640-fe0f',
        '1f9b9-1f3fe-200d-2640-fe0f',
        '1f9b9-1f3ff-200d-2640-fe0f',
      ],
      a: '11.0',
    },
    {
      n: ['mage'],
      u: '1f9d9',
      v: [
        '1f9d9-1f3fb',
        '1f9d9-1f3fc',
        '1f9d9-1f3fd',
        '1f9d9-1f3fe',
        '1f9d9-1f3ff',
      ],
      a: '5.0',
    },
    {
      n: ['man mage', 'male mage'],
      u: '1f9d9-200d-2642-fe0f',
      v: [
        '1f9d9-1f3fb-200d-2642-fe0f',
        '1f9d9-1f3fc-200d-2642-fe0f',
        '1f9d9-1f3fd-200d-2642-fe0f',
        '1f9d9-1f3fe-200d-2642-fe0f',
        '1f9d9-1f3ff-200d-2642-fe0f',
      ],
      a: '5.0',
    },
    {
      n: ['woman mage', 'female mage'],
      u: '1f9d9-200d-2640-fe0f',
      v: [
        '1f9d9-1f3fb-200d-2640-fe0f',
        '1f9d9-1f3fc-200d-2640-fe0f',
        '1f9d9-1f3fd-200d-2640-fe0f',
        '1f9d9-1f3fe-200d-2640-fe0f',
        '1f9d9-1f3ff-200d-2640-fe0f',
      ],
      a: '5.0',
    },
    {
      n: ['fairy'],
      u: '1f9da',
      v: [
        '1f9da-1f3fb',
        '1f9da-1f3fc',
        '1f9da-1f3fd',
        '1f9da-1f3fe',
        '1f9da-1f3ff',
      ],
      a: '5.0',
    },
    {
      n: ['man fairy', 'male fairy'],
      u: '1f9da-200d-2642-fe0f',
      v: [
        '1f9da-1f3fb-200d-2642-fe0f',
        '1f9da-1f3fc-200d-2642-fe0f',
        '1f9da-1f3fd-200d-2642-fe0f',
        '1f9da-1f3fe-200d-2642-fe0f',
        '1f9da-1f3ff-200d-2642-fe0f',
      ],
      a: '5.0',
    },
    {
      n: ['woman fairy', 'female fairy'],
      u: '1f9da-200d-2640-fe0f',
      v: [
        '1f9da-1f3fb-200d-2640-fe0f',
        '1f9da-1f3fc-200d-2640-fe0f',
        '1f9da-1f3fd-200d-2640-fe0f',
        '1f9da-1f3fe-200d-2640-fe0f',
        '1f9da-1f3ff-200d-2640-fe0f',
      ],
      a: '5.0',
    },
    {
      n: ['vampire'],
      u: '1f9db',
      v: [
        '1f9db-1f3fb',
        '1f9db-1f3fc',
        '1f9db-1f3fd',
        '1f9db-1f3fe',
        '1f9db-1f3ff',
      ],
      a: '5.0',
    },
    {
      n: ['man vampire', 'male vampire'],
      u: '1f9db-200d-2642-fe0f',
      v: [
        '1f9db-1f3fb-200d-2642-fe0f',
        '1f9db-1f3fc-200d-2642-fe0f',
        '1f9db-1f3fd-200d-2642-fe0f',
        '1f9db-1f3fe-200d-2642-fe0f',
        '1f9db-1f3ff-200d-2642-fe0f',
      ],
      a: '5.0',
    },
    {
      n: ['woman vampire', 'female vampire'],
      u: '1f9db-200d-2640-fe0f',
      v: [
        '1f9db-1f3fb-200d-2640-fe0f',
        '1f9db-1f3fc-200d-2640-fe0f',
        '1f9db-1f3fd-200d-2640-fe0f',
        '1f9db-1f3fe-200d-2640-fe0f',
        '1f9db-1f3ff-200d-2640-fe0f',
      ],
      a: '5.0',
    },
    {
      n: ['merperson'],
      u: '1f9dc',
      v: [
        '1f9dc-1f3fb',
        '1f9dc-1f3fc',
        '1f9dc-1f3fd',
        '1f9dc-1f3fe',
        '1f9dc-1f3ff',
      ],
      a: '5.0',
    },
    {
      n: ['merman'],
      u: '1f9dc-200d-2642-fe0f',
      v: [
        '1f9dc-1f3fb-200d-2642-fe0f',
        '1f9dc-1f3fc-200d-2642-fe0f',
        '1f9dc-1f3fd-200d-2642-fe0f',
        '1f9dc-1f3fe-200d-2642-fe0f',
        '1f9dc-1f3ff-200d-2642-fe0f',
      ],
      a: '5.0',
    },
    {
      n: ['mermaid'],
      u: '1f9dc-200d-2640-fe0f',
      v: [
        '1f9dc-1f3fb-200d-2640-fe0f',
        '1f9dc-1f3fc-200d-2640-fe0f',
        '1f9dc-1f3fd-200d-2640-fe0f',
        '1f9dc-1f3fe-200d-2640-fe0f',
        '1f9dc-1f3ff-200d-2640-fe0f',
      ],
      a: '5.0',
    },
    {
      n: ['elf'],
      u: '1f9dd',
      v: [
        '1f9dd-1f3fb',
        '1f9dd-1f3fc',
        '1f9dd-1f3fd',
        '1f9dd-1f3fe',
        '1f9dd-1f3ff',
      ],
      a: '5.0',
    },
    {
      n: ['man elf', 'male elf'],
      u: '1f9dd-200d-2642-fe0f',
      v: [
        '1f9dd-1f3fb-200d-2642-fe0f',
        '1f9dd-1f3fc-200d-2642-fe0f',
        '1f9dd-1f3fd-200d-2642-fe0f',
        '1f9dd-1f3fe-200d-2642-fe0f',
        '1f9dd-1f3ff-200d-2642-fe0f',
      ],
      a: '5.0',
    },
    {
      n: ['woman elf', 'female elf'],
      u: '1f9dd-200d-2640-fe0f',
      v: [
        '1f9dd-1f3fb-200d-2640-fe0f',
        '1f9dd-1f3fc-200d-2640-fe0f',
        '1f9dd-1f3fd-200d-2640-fe0f',
        '1f9dd-1f3fe-200d-2640-fe0f',
        '1f9dd-1f3ff-200d-2640-fe0f',
      ],
      a: '5.0',
    },
    { n: ['genie'], u: '1f9de', a: '5.0' },
    { n: ['man genie', 'male genie'], u: '1f9de-200d-2642-fe0f', a: '5.0' },
    { n: ['woman genie', 'female genie'], u: '1f9de-200d-2640-fe0f', a: '5.0' },
    { n: ['zombie'], u: '1f9df', a: '5.0' },
    { n: ['man zombie', 'male zombie'], u: '1f9df-200d-2642-fe0f', a: '5.0' },
    {
      n: ['woman zombie', 'female zombie'],
      u: '1f9df-200d-2640-fe0f',
      a: '5.0',
    },
    { n: ['troll'], u: '1f9cc', a: '14.0' },
    {
      n: ['massage', 'face massage'],
      u: '1f486',
      v: [
        '1f486-1f3fb',
        '1f486-1f3fc',
        '1f486-1f3fd',
        '1f486-1f3fe',
        '1f486-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man getting massage', 'man-getting-massage'],
      u: '1f486-200d-2642-fe0f',
      v: [
        '1f486-1f3fb-200d-2642-fe0f',
        '1f486-1f3fc-200d-2642-fe0f',
        '1f486-1f3fd-200d-2642-fe0f',
        '1f486-1f3fe-200d-2642-fe0f',
        '1f486-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman getting massage', 'woman-getting-massage'],
      u: '1f486-200d-2640-fe0f',
      v: [
        '1f486-1f3fb-200d-2640-fe0f',
        '1f486-1f3fc-200d-2640-fe0f',
        '1f486-1f3fd-200d-2640-fe0f',
        '1f486-1f3fe-200d-2640-fe0f',
        '1f486-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['haircut'],
      u: '1f487',
      v: [
        '1f487-1f3fb',
        '1f487-1f3fc',
        '1f487-1f3fd',
        '1f487-1f3fe',
        '1f487-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man getting haircut', 'man-getting-haircut'],
      u: '1f487-200d-2642-fe0f',
      v: [
        '1f487-1f3fb-200d-2642-fe0f',
        '1f487-1f3fc-200d-2642-fe0f',
        '1f487-1f3fd-200d-2642-fe0f',
        '1f487-1f3fe-200d-2642-fe0f',
        '1f487-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman getting haircut', 'woman-getting-haircut'],
      u: '1f487-200d-2640-fe0f',
      v: [
        '1f487-1f3fb-200d-2640-fe0f',
        '1f487-1f3fc-200d-2640-fe0f',
        '1f487-1f3fd-200d-2640-fe0f',
        '1f487-1f3fe-200d-2640-fe0f',
        '1f487-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['walking', 'pedestrian'],
      u: '1f6b6',
      v: [
        '1f6b6-1f3fb',
        '1f6b6-1f3fc',
        '1f6b6-1f3fd',
        '1f6b6-1f3fe',
        '1f6b6-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man walking', 'man-walking'],
      u: '1f6b6-200d-2642-fe0f',
      v: [
        '1f6b6-1f3fb-200d-2642-fe0f',
        '1f6b6-1f3fc-200d-2642-fe0f',
        '1f6b6-1f3fd-200d-2642-fe0f',
        '1f6b6-1f3fe-200d-2642-fe0f',
        '1f6b6-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman walking', 'woman-walking'],
      u: '1f6b6-200d-2640-fe0f',
      v: [
        '1f6b6-1f3fb-200d-2640-fe0f',
        '1f6b6-1f3fc-200d-2640-fe0f',
        '1f6b6-1f3fd-200d-2640-fe0f',
        '1f6b6-1f3fe-200d-2640-fe0f',
        '1f6b6-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['person walking facing right'],
      u: '1f6b6-200d-27a1-fe0f',
      v: [
        '1f6b6-1f3fb-200d-27a1-fe0f',
        '1f6b6-1f3fc-200d-27a1-fe0f',
        '1f6b6-1f3fd-200d-27a1-fe0f',
        '1f6b6-1f3fe-200d-27a1-fe0f',
        '1f6b6-1f3ff-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['woman walking facing right'],
      u: '1f6b6-200d-2640-fe0f-200d-27a1-fe0f',
      v: [
        '1f6b6-1f3fb-200d-2640-fe0f-200d-27a1-fe0f',
        '1f6b6-1f3fc-200d-2640-fe0f-200d-27a1-fe0f',
        '1f6b6-1f3fd-200d-2640-fe0f-200d-27a1-fe0f',
        '1f6b6-1f3fe-200d-2640-fe0f-200d-27a1-fe0f',
        '1f6b6-1f3ff-200d-2640-fe0f-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['man walking facing right'],
      u: '1f6b6-200d-2642-fe0f-200d-27a1-fe0f',
      v: [
        '1f6b6-1f3fb-200d-2642-fe0f-200d-27a1-fe0f',
        '1f6b6-1f3fc-200d-2642-fe0f-200d-27a1-fe0f',
        '1f6b6-1f3fd-200d-2642-fe0f-200d-27a1-fe0f',
        '1f6b6-1f3fe-200d-2642-fe0f-200d-27a1-fe0f',
        '1f6b6-1f3ff-200d-2642-fe0f-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['standing person'],
      u: '1f9cd',
      v: [
        '1f9cd-1f3fb',
        '1f9cd-1f3fc',
        '1f9cd-1f3fd',
        '1f9cd-1f3fe',
        '1f9cd-1f3ff',
      ],
      a: '12.0',
    },
    {
      n: ['man standing'],
      u: '1f9cd-200d-2642-fe0f',
      v: [
        '1f9cd-1f3fb-200d-2642-fe0f',
        '1f9cd-1f3fc-200d-2642-fe0f',
        '1f9cd-1f3fd-200d-2642-fe0f',
        '1f9cd-1f3fe-200d-2642-fe0f',
        '1f9cd-1f3ff-200d-2642-fe0f',
      ],
      a: '12.0',
    },
    {
      n: ['woman standing'],
      u: '1f9cd-200d-2640-fe0f',
      v: [
        '1f9cd-1f3fb-200d-2640-fe0f',
        '1f9cd-1f3fc-200d-2640-fe0f',
        '1f9cd-1f3fd-200d-2640-fe0f',
        '1f9cd-1f3fe-200d-2640-fe0f',
        '1f9cd-1f3ff-200d-2640-fe0f',
      ],
      a: '12.0',
    },
    {
      n: ['kneeling person'],
      u: '1f9ce',
      v: [
        '1f9ce-1f3fb',
        '1f9ce-1f3fc',
        '1f9ce-1f3fd',
        '1f9ce-1f3fe',
        '1f9ce-1f3ff',
      ],
      a: '12.0',
    },
    {
      n: ['man kneeling'],
      u: '1f9ce-200d-2642-fe0f',
      v: [
        '1f9ce-1f3fb-200d-2642-fe0f',
        '1f9ce-1f3fc-200d-2642-fe0f',
        '1f9ce-1f3fd-200d-2642-fe0f',
        '1f9ce-1f3fe-200d-2642-fe0f',
        '1f9ce-1f3ff-200d-2642-fe0f',
      ],
      a: '12.0',
    },
    {
      n: ['woman kneeling'],
      u: '1f9ce-200d-2640-fe0f',
      v: [
        '1f9ce-1f3fb-200d-2640-fe0f',
        '1f9ce-1f3fc-200d-2640-fe0f',
        '1f9ce-1f3fd-200d-2640-fe0f',
        '1f9ce-1f3fe-200d-2640-fe0f',
        '1f9ce-1f3ff-200d-2640-fe0f',
      ],
      a: '12.0',
    },
    {
      n: ['person kneeling facing right'],
      u: '1f9ce-200d-27a1-fe0f',
      v: [
        '1f9ce-1f3fb-200d-27a1-fe0f',
        '1f9ce-1f3fc-200d-27a1-fe0f',
        '1f9ce-1f3fd-200d-27a1-fe0f',
        '1f9ce-1f3fe-200d-27a1-fe0f',
        '1f9ce-1f3ff-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['woman kneeling facing right'],
      u: '1f9ce-200d-2640-fe0f-200d-27a1-fe0f',
      v: [
        '1f9ce-1f3fb-200d-2640-fe0f-200d-27a1-fe0f',
        '1f9ce-1f3fc-200d-2640-fe0f-200d-27a1-fe0f',
        '1f9ce-1f3fd-200d-2640-fe0f-200d-27a1-fe0f',
        '1f9ce-1f3fe-200d-2640-fe0f-200d-27a1-fe0f',
        '1f9ce-1f3ff-200d-2640-fe0f-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['man kneeling facing right'],
      u: '1f9ce-200d-2642-fe0f-200d-27a1-fe0f',
      v: [
        '1f9ce-1f3fb-200d-2642-fe0f-200d-27a1-fe0f',
        '1f9ce-1f3fc-200d-2642-fe0f-200d-27a1-fe0f',
        '1f9ce-1f3fd-200d-2642-fe0f-200d-27a1-fe0f',
        '1f9ce-1f3fe-200d-2642-fe0f-200d-27a1-fe0f',
        '1f9ce-1f3ff-200d-2642-fe0f-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['person with white cane', 'person with probing cane'],
      u: '1f9d1-200d-1f9af',
      v: [
        '1f9d1-1f3fb-200d-1f9af',
        '1f9d1-1f3fc-200d-1f9af',
        '1f9d1-1f3fd-200d-1f9af',
        '1f9d1-1f3fe-200d-1f9af',
        '1f9d1-1f3ff-200d-1f9af',
      ],
      a: '12.1',
    },
    {
      n: ['person with white cane facing right'],
      u: '1f9d1-200d-1f9af-200d-27a1-fe0f',
      v: [
        '1f9d1-1f3fb-200d-1f9af-200d-27a1-fe0f',
        '1f9d1-1f3fc-200d-1f9af-200d-27a1-fe0f',
        '1f9d1-1f3fd-200d-1f9af-200d-27a1-fe0f',
        '1f9d1-1f3fe-200d-1f9af-200d-27a1-fe0f',
        '1f9d1-1f3ff-200d-1f9af-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['man with white cane', 'man with probing cane'],
      u: '1f468-200d-1f9af',
      v: [
        '1f468-1f3fb-200d-1f9af',
        '1f468-1f3fc-200d-1f9af',
        '1f468-1f3fd-200d-1f9af',
        '1f468-1f3fe-200d-1f9af',
        '1f468-1f3ff-200d-1f9af',
      ],
      a: '12.0',
    },
    {
      n: ['man with white cane facing right'],
      u: '1f468-200d-1f9af-200d-27a1-fe0f',
      v: [
        '1f468-1f3fb-200d-1f9af-200d-27a1-fe0f',
        '1f468-1f3fc-200d-1f9af-200d-27a1-fe0f',
        '1f468-1f3fd-200d-1f9af-200d-27a1-fe0f',
        '1f468-1f3fe-200d-1f9af-200d-27a1-fe0f',
        '1f468-1f3ff-200d-1f9af-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['woman with white cane', 'woman with probing cane'],
      u: '1f469-200d-1f9af',
      v: [
        '1f469-1f3fb-200d-1f9af',
        '1f469-1f3fc-200d-1f9af',
        '1f469-1f3fd-200d-1f9af',
        '1f469-1f3fe-200d-1f9af',
        '1f469-1f3ff-200d-1f9af',
      ],
      a: '12.0',
    },
    {
      n: ['woman with white cane facing right'],
      u: '1f469-200d-1f9af-200d-27a1-fe0f',
      v: [
        '1f469-1f3fb-200d-1f9af-200d-27a1-fe0f',
        '1f469-1f3fc-200d-1f9af-200d-27a1-fe0f',
        '1f469-1f3fd-200d-1f9af-200d-27a1-fe0f',
        '1f469-1f3fe-200d-1f9af-200d-27a1-fe0f',
        '1f469-1f3ff-200d-1f9af-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['person in motorized wheelchair'],
      u: '1f9d1-200d-1f9bc',
      v: [
        '1f9d1-1f3fb-200d-1f9bc',
        '1f9d1-1f3fc-200d-1f9bc',
        '1f9d1-1f3fd-200d-1f9bc',
        '1f9d1-1f3fe-200d-1f9bc',
        '1f9d1-1f3ff-200d-1f9bc',
      ],
      a: '12.1',
    },
    {
      n: ['person in motorized wheelchair facing right'],
      u: '1f9d1-200d-1f9bc-200d-27a1-fe0f',
      v: [
        '1f9d1-1f3fb-200d-1f9bc-200d-27a1-fe0f',
        '1f9d1-1f3fc-200d-1f9bc-200d-27a1-fe0f',
        '1f9d1-1f3fd-200d-1f9bc-200d-27a1-fe0f',
        '1f9d1-1f3fe-200d-1f9bc-200d-27a1-fe0f',
        '1f9d1-1f3ff-200d-1f9bc-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['man in motorized wheelchair'],
      u: '1f468-200d-1f9bc',
      v: [
        '1f468-1f3fb-200d-1f9bc',
        '1f468-1f3fc-200d-1f9bc',
        '1f468-1f3fd-200d-1f9bc',
        '1f468-1f3fe-200d-1f9bc',
        '1f468-1f3ff-200d-1f9bc',
      ],
      a: '12.0',
    },
    {
      n: ['man in motorized wheelchair facing right'],
      u: '1f468-200d-1f9bc-200d-27a1-fe0f',
      v: [
        '1f468-1f3fb-200d-1f9bc-200d-27a1-fe0f',
        '1f468-1f3fc-200d-1f9bc-200d-27a1-fe0f',
        '1f468-1f3fd-200d-1f9bc-200d-27a1-fe0f',
        '1f468-1f3fe-200d-1f9bc-200d-27a1-fe0f',
        '1f468-1f3ff-200d-1f9bc-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['woman in motorized wheelchair'],
      u: '1f469-200d-1f9bc',
      v: [
        '1f469-1f3fb-200d-1f9bc',
        '1f469-1f3fc-200d-1f9bc',
        '1f469-1f3fd-200d-1f9bc',
        '1f469-1f3fe-200d-1f9bc',
        '1f469-1f3ff-200d-1f9bc',
      ],
      a: '12.0',
    },
    {
      n: ['woman in motorized wheelchair facing right'],
      u: '1f469-200d-1f9bc-200d-27a1-fe0f',
      v: [
        '1f469-1f3fb-200d-1f9bc-200d-27a1-fe0f',
        '1f469-1f3fc-200d-1f9bc-200d-27a1-fe0f',
        '1f469-1f3fd-200d-1f9bc-200d-27a1-fe0f',
        '1f469-1f3fe-200d-1f9bc-200d-27a1-fe0f',
        '1f469-1f3ff-200d-1f9bc-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['person in manual wheelchair'],
      u: '1f9d1-200d-1f9bd',
      v: [
        '1f9d1-1f3fb-200d-1f9bd',
        '1f9d1-1f3fc-200d-1f9bd',
        '1f9d1-1f3fd-200d-1f9bd',
        '1f9d1-1f3fe-200d-1f9bd',
        '1f9d1-1f3ff-200d-1f9bd',
      ],
      a: '12.1',
    },
    {
      n: ['person in manual wheelchair facing right'],
      u: '1f9d1-200d-1f9bd-200d-27a1-fe0f',
      v: [
        '1f9d1-1f3fb-200d-1f9bd-200d-27a1-fe0f',
        '1f9d1-1f3fc-200d-1f9bd-200d-27a1-fe0f',
        '1f9d1-1f3fd-200d-1f9bd-200d-27a1-fe0f',
        '1f9d1-1f3fe-200d-1f9bd-200d-27a1-fe0f',
        '1f9d1-1f3ff-200d-1f9bd-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['man in manual wheelchair'],
      u: '1f468-200d-1f9bd',
      v: [
        '1f468-1f3fb-200d-1f9bd',
        '1f468-1f3fc-200d-1f9bd',
        '1f468-1f3fd-200d-1f9bd',
        '1f468-1f3fe-200d-1f9bd',
        '1f468-1f3ff-200d-1f9bd',
      ],
      a: '12.0',
    },
    {
      n: ['man in manual wheelchair facing right'],
      u: '1f468-200d-1f9bd-200d-27a1-fe0f',
      v: [
        '1f468-1f3fb-200d-1f9bd-200d-27a1-fe0f',
        '1f468-1f3fc-200d-1f9bd-200d-27a1-fe0f',
        '1f468-1f3fd-200d-1f9bd-200d-27a1-fe0f',
        '1f468-1f3fe-200d-1f9bd-200d-27a1-fe0f',
        '1f468-1f3ff-200d-1f9bd-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['woman in manual wheelchair'],
      u: '1f469-200d-1f9bd',
      v: [
        '1f469-1f3fb-200d-1f9bd',
        '1f469-1f3fc-200d-1f9bd',
        '1f469-1f3fd-200d-1f9bd',
        '1f469-1f3fe-200d-1f9bd',
        '1f469-1f3ff-200d-1f9bd',
      ],
      a: '12.0',
    },
    {
      n: ['woman in manual wheelchair facing right'],
      u: '1f469-200d-1f9bd-200d-27a1-fe0f',
      v: [
        '1f469-1f3fb-200d-1f9bd-200d-27a1-fe0f',
        '1f469-1f3fc-200d-1f9bd-200d-27a1-fe0f',
        '1f469-1f3fd-200d-1f9bd-200d-27a1-fe0f',
        '1f469-1f3fe-200d-1f9bd-200d-27a1-fe0f',
        '1f469-1f3ff-200d-1f9bd-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['runner', 'running'],
      u: '1f3c3',
      v: [
        '1f3c3-1f3fb',
        '1f3c3-1f3fc',
        '1f3c3-1f3fd',
        '1f3c3-1f3fe',
        '1f3c3-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man running', 'man-running'],
      u: '1f3c3-200d-2642-fe0f',
      v: [
        '1f3c3-1f3fb-200d-2642-fe0f',
        '1f3c3-1f3fc-200d-2642-fe0f',
        '1f3c3-1f3fd-200d-2642-fe0f',
        '1f3c3-1f3fe-200d-2642-fe0f',
        '1f3c3-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman running', 'woman-running'],
      u: '1f3c3-200d-2640-fe0f',
      v: [
        '1f3c3-1f3fb-200d-2640-fe0f',
        '1f3c3-1f3fc-200d-2640-fe0f',
        '1f3c3-1f3fd-200d-2640-fe0f',
        '1f3c3-1f3fe-200d-2640-fe0f',
        '1f3c3-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['person running facing right'],
      u: '1f3c3-200d-27a1-fe0f',
      v: [
        '1f3c3-1f3fb-200d-27a1-fe0f',
        '1f3c3-1f3fc-200d-27a1-fe0f',
        '1f3c3-1f3fd-200d-27a1-fe0f',
        '1f3c3-1f3fe-200d-27a1-fe0f',
        '1f3c3-1f3ff-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['woman running facing right'],
      u: '1f3c3-200d-2640-fe0f-200d-27a1-fe0f',
      v: [
        '1f3c3-1f3fb-200d-2640-fe0f-200d-27a1-fe0f',
        '1f3c3-1f3fc-200d-2640-fe0f-200d-27a1-fe0f',
        '1f3c3-1f3fd-200d-2640-fe0f-200d-27a1-fe0f',
        '1f3c3-1f3fe-200d-2640-fe0f-200d-27a1-fe0f',
        '1f3c3-1f3ff-200d-2640-fe0f-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['man running facing right'],
      u: '1f3c3-200d-2642-fe0f-200d-27a1-fe0f',
      v: [
        '1f3c3-1f3fb-200d-2642-fe0f-200d-27a1-fe0f',
        '1f3c3-1f3fc-200d-2642-fe0f-200d-27a1-fe0f',
        '1f3c3-1f3fd-200d-2642-fe0f-200d-27a1-fe0f',
        '1f3c3-1f3fe-200d-2642-fe0f-200d-27a1-fe0f',
        '1f3c3-1f3ff-200d-2642-fe0f-200d-27a1-fe0f',
      ],
      a: '15.1',
    },
    {
      n: ['dancer'],
      u: '1f483',
      v: [
        '1f483-1f3fb',
        '1f483-1f3fc',
        '1f483-1f3fd',
        '1f483-1f3fe',
        '1f483-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man dancing'],
      u: '1f57a',
      v: [
        '1f57a-1f3fb',
        '1f57a-1f3fc',
        '1f57a-1f3fd',
        '1f57a-1f3fe',
        '1f57a-1f3ff',
      ],
      a: '3.0',
    },
    {
      n: ['person in suit levitating', 'man in business suit levitating'],
      u: '1f574-fe0f',
      v: [
        '1f574-1f3fb',
        '1f574-1f3fc',
        '1f574-1f3fd',
        '1f574-1f3fe',
        '1f574-1f3ff',
      ],
      a: '0.7',
    },
    { n: ['dancers', 'woman with bunny ears'], u: '1f46f', a: '0.6' },
    {
      n: [
        'men with bunny ears',
        'men-with-bunny-ears-partying',
        'man-with-bunny-ears-partying',
      ],
      u: '1f46f-200d-2642-fe0f',
      a: '4.0',
    },
    {
      n: [
        'women with bunny ears',
        'women-with-bunny-ears-partying',
        'woman-with-bunny-ears-partying',
      ],
      u: '1f46f-200d-2640-fe0f',
      a: '4.0',
    },
    {
      n: ['person in steamy room'],
      u: '1f9d6',
      v: [
        '1f9d6-1f3fb',
        '1f9d6-1f3fc',
        '1f9d6-1f3fd',
        '1f9d6-1f3fe',
        '1f9d6-1f3ff',
      ],
      a: '5.0',
    },
    {
      n: ['man in steamy room'],
      u: '1f9d6-200d-2642-fe0f',
      v: [
        '1f9d6-1f3fb-200d-2642-fe0f',
        '1f9d6-1f3fc-200d-2642-fe0f',
        '1f9d6-1f3fd-200d-2642-fe0f',
        '1f9d6-1f3fe-200d-2642-fe0f',
        '1f9d6-1f3ff-200d-2642-fe0f',
      ],
      a: '5.0',
    },
    {
      n: ['woman in steamy room'],
      u: '1f9d6-200d-2640-fe0f',
      v: [
        '1f9d6-1f3fb-200d-2640-fe0f',
        '1f9d6-1f3fc-200d-2640-fe0f',
        '1f9d6-1f3fd-200d-2640-fe0f',
        '1f9d6-1f3fe-200d-2640-fe0f',
        '1f9d6-1f3ff-200d-2640-fe0f',
      ],
      a: '5.0',
    },
    {
      n: ['person climbing'],
      u: '1f9d7',
      v: [
        '1f9d7-1f3fb',
        '1f9d7-1f3fc',
        '1f9d7-1f3fd',
        '1f9d7-1f3fe',
        '1f9d7-1f3ff',
      ],
      a: '5.0',
    },
    {
      n: ['man climbing'],
      u: '1f9d7-200d-2642-fe0f',
      v: [
        '1f9d7-1f3fb-200d-2642-fe0f',
        '1f9d7-1f3fc-200d-2642-fe0f',
        '1f9d7-1f3fd-200d-2642-fe0f',
        '1f9d7-1f3fe-200d-2642-fe0f',
        '1f9d7-1f3ff-200d-2642-fe0f',
      ],
      a: '5.0',
    },
    {
      n: ['woman climbing'],
      u: '1f9d7-200d-2640-fe0f',
      v: [
        '1f9d7-1f3fb-200d-2640-fe0f',
        '1f9d7-1f3fc-200d-2640-fe0f',
        '1f9d7-1f3fd-200d-2640-fe0f',
        '1f9d7-1f3fe-200d-2640-fe0f',
        '1f9d7-1f3ff-200d-2640-fe0f',
      ],
      a: '5.0',
    },
    { n: ['fencer'], u: '1f93a', a: '3.0' },
    {
      n: ['horse racing'],
      u: '1f3c7',
      v: [
        '1f3c7-1f3fb',
        '1f3c7-1f3fc',
        '1f3c7-1f3fd',
        '1f3c7-1f3fe',
        '1f3c7-1f3ff',
      ],
      a: '1.0',
    },
    { n: ['skier'], u: '26f7-fe0f', a: '0.7' },
    {
      n: ['snowboarder'],
      u: '1f3c2',
      v: [
        '1f3c2-1f3fb',
        '1f3c2-1f3fc',
        '1f3c2-1f3fd',
        '1f3c2-1f3fe',
        '1f3c2-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['golfer', 'person golfing'],
      u: '1f3cc-fe0f',
      v: [
        '1f3cc-1f3fb',
        '1f3cc-1f3fc',
        '1f3cc-1f3fd',
        '1f3cc-1f3fe',
        '1f3cc-1f3ff',
      ],
      a: '0.7',
    },
    {
      n: ['man golfing', 'man-golfing'],
      u: '1f3cc-fe0f-200d-2642-fe0f',
      v: [
        '1f3cc-1f3fb-200d-2642-fe0f',
        '1f3cc-1f3fc-200d-2642-fe0f',
        '1f3cc-1f3fd-200d-2642-fe0f',
        '1f3cc-1f3fe-200d-2642-fe0f',
        '1f3cc-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman golfing', 'woman-golfing'],
      u: '1f3cc-fe0f-200d-2640-fe0f',
      v: [
        '1f3cc-1f3fb-200d-2640-fe0f',
        '1f3cc-1f3fc-200d-2640-fe0f',
        '1f3cc-1f3fd-200d-2640-fe0f',
        '1f3cc-1f3fe-200d-2640-fe0f',
        '1f3cc-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['surfer'],
      u: '1f3c4',
      v: [
        '1f3c4-1f3fb',
        '1f3c4-1f3fc',
        '1f3c4-1f3fd',
        '1f3c4-1f3fe',
        '1f3c4-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man surfing', 'man-surfing'],
      u: '1f3c4-200d-2642-fe0f',
      v: [
        '1f3c4-1f3fb-200d-2642-fe0f',
        '1f3c4-1f3fc-200d-2642-fe0f',
        '1f3c4-1f3fd-200d-2642-fe0f',
        '1f3c4-1f3fe-200d-2642-fe0f',
        '1f3c4-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman surfing', 'woman-surfing'],
      u: '1f3c4-200d-2640-fe0f',
      v: [
        '1f3c4-1f3fb-200d-2640-fe0f',
        '1f3c4-1f3fc-200d-2640-fe0f',
        '1f3c4-1f3fd-200d-2640-fe0f',
        '1f3c4-1f3fe-200d-2640-fe0f',
        '1f3c4-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['rowboat'],
      u: '1f6a3',
      v: [
        '1f6a3-1f3fb',
        '1f6a3-1f3fc',
        '1f6a3-1f3fd',
        '1f6a3-1f3fe',
        '1f6a3-1f3ff',
      ],
      a: '1.0',
    },
    {
      n: ['man rowing boat', 'man-rowing-boat'],
      u: '1f6a3-200d-2642-fe0f',
      v: [
        '1f6a3-1f3fb-200d-2642-fe0f',
        '1f6a3-1f3fc-200d-2642-fe0f',
        '1f6a3-1f3fd-200d-2642-fe0f',
        '1f6a3-1f3fe-200d-2642-fe0f',
        '1f6a3-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman rowing boat', 'woman-rowing-boat'],
      u: '1f6a3-200d-2640-fe0f',
      v: [
        '1f6a3-1f3fb-200d-2640-fe0f',
        '1f6a3-1f3fc-200d-2640-fe0f',
        '1f6a3-1f3fd-200d-2640-fe0f',
        '1f6a3-1f3fe-200d-2640-fe0f',
        '1f6a3-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['swimmer'],
      u: '1f3ca',
      v: [
        '1f3ca-1f3fb',
        '1f3ca-1f3fc',
        '1f3ca-1f3fd',
        '1f3ca-1f3fe',
        '1f3ca-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['man swimming', 'man-swimming'],
      u: '1f3ca-200d-2642-fe0f',
      v: [
        '1f3ca-1f3fb-200d-2642-fe0f',
        '1f3ca-1f3fc-200d-2642-fe0f',
        '1f3ca-1f3fd-200d-2642-fe0f',
        '1f3ca-1f3fe-200d-2642-fe0f',
        '1f3ca-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman swimming', 'woman-swimming'],
      u: '1f3ca-200d-2640-fe0f',
      v: [
        '1f3ca-1f3fb-200d-2640-fe0f',
        '1f3ca-1f3fc-200d-2640-fe0f',
        '1f3ca-1f3fd-200d-2640-fe0f',
        '1f3ca-1f3fe-200d-2640-fe0f',
        '1f3ca-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['person with ball', 'person bouncing ball'],
      u: '26f9-fe0f',
      v: ['26f9-1f3fb', '26f9-1f3fc', '26f9-1f3fd', '26f9-1f3fe', '26f9-1f3ff'],
      a: '0.7',
    },
    {
      n: ['man bouncing ball', 'man-bouncing-ball'],
      u: '26f9-fe0f-200d-2642-fe0f',
      v: [
        '26f9-1f3fb-200d-2642-fe0f',
        '26f9-1f3fc-200d-2642-fe0f',
        '26f9-1f3fd-200d-2642-fe0f',
        '26f9-1f3fe-200d-2642-fe0f',
        '26f9-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman bouncing ball', 'woman-bouncing-ball'],
      u: '26f9-fe0f-200d-2640-fe0f',
      v: [
        '26f9-1f3fb-200d-2640-fe0f',
        '26f9-1f3fc-200d-2640-fe0f',
        '26f9-1f3fd-200d-2640-fe0f',
        '26f9-1f3fe-200d-2640-fe0f',
        '26f9-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['weight lifter', 'person lifting weights'],
      u: '1f3cb-fe0f',
      v: [
        '1f3cb-1f3fb',
        '1f3cb-1f3fc',
        '1f3cb-1f3fd',
        '1f3cb-1f3fe',
        '1f3cb-1f3ff',
      ],
      a: '0.7',
    },
    {
      n: ['man lifting weights', 'man-lifting-weights'],
      u: '1f3cb-fe0f-200d-2642-fe0f',
      v: [
        '1f3cb-1f3fb-200d-2642-fe0f',
        '1f3cb-1f3fc-200d-2642-fe0f',
        '1f3cb-1f3fd-200d-2642-fe0f',
        '1f3cb-1f3fe-200d-2642-fe0f',
        '1f3cb-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman lifting weights', 'woman-lifting-weights'],
      u: '1f3cb-fe0f-200d-2640-fe0f',
      v: [
        '1f3cb-1f3fb-200d-2640-fe0f',
        '1f3cb-1f3fc-200d-2640-fe0f',
        '1f3cb-1f3fd-200d-2640-fe0f',
        '1f3cb-1f3fe-200d-2640-fe0f',
        '1f3cb-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['bicyclist'],
      u: '1f6b4',
      v: [
        '1f6b4-1f3fb',
        '1f6b4-1f3fc',
        '1f6b4-1f3fd',
        '1f6b4-1f3fe',
        '1f6b4-1f3ff',
      ],
      a: '1.0',
    },
    {
      n: ['man biking', 'man-biking'],
      u: '1f6b4-200d-2642-fe0f',
      v: [
        '1f6b4-1f3fb-200d-2642-fe0f',
        '1f6b4-1f3fc-200d-2642-fe0f',
        '1f6b4-1f3fd-200d-2642-fe0f',
        '1f6b4-1f3fe-200d-2642-fe0f',
        '1f6b4-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman biking', 'woman-biking'],
      u: '1f6b4-200d-2640-fe0f',
      v: [
        '1f6b4-1f3fb-200d-2640-fe0f',
        '1f6b4-1f3fc-200d-2640-fe0f',
        '1f6b4-1f3fd-200d-2640-fe0f',
        '1f6b4-1f3fe-200d-2640-fe0f',
        '1f6b4-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['mountain bicyclist'],
      u: '1f6b5',
      v: [
        '1f6b5-1f3fb',
        '1f6b5-1f3fc',
        '1f6b5-1f3fd',
        '1f6b5-1f3fe',
        '1f6b5-1f3ff',
      ],
      a: '1.0',
    },
    {
      n: ['man mountain biking', 'man-mountain-biking'],
      u: '1f6b5-200d-2642-fe0f',
      v: [
        '1f6b5-1f3fb-200d-2642-fe0f',
        '1f6b5-1f3fc-200d-2642-fe0f',
        '1f6b5-1f3fd-200d-2642-fe0f',
        '1f6b5-1f3fe-200d-2642-fe0f',
        '1f6b5-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman mountain biking', 'woman-mountain-biking'],
      u: '1f6b5-200d-2640-fe0f',
      v: [
        '1f6b5-1f3fb-200d-2640-fe0f',
        '1f6b5-1f3fc-200d-2640-fe0f',
        '1f6b5-1f3fd-200d-2640-fe0f',
        '1f6b5-1f3fe-200d-2640-fe0f',
        '1f6b5-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['person doing cartwheel'],
      u: '1f938',
      v: [
        '1f938-1f3fb',
        '1f938-1f3fc',
        '1f938-1f3fd',
        '1f938-1f3fe',
        '1f938-1f3ff',
      ],
      a: '3.0',
    },
    {
      n: ['man cartwheeling', 'man-cartwheeling'],
      u: '1f938-200d-2642-fe0f',
      v: [
        '1f938-1f3fb-200d-2642-fe0f',
        '1f938-1f3fc-200d-2642-fe0f',
        '1f938-1f3fd-200d-2642-fe0f',
        '1f938-1f3fe-200d-2642-fe0f',
        '1f938-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman cartwheeling', 'woman-cartwheeling'],
      u: '1f938-200d-2640-fe0f',
      v: [
        '1f938-1f3fb-200d-2640-fe0f',
        '1f938-1f3fc-200d-2640-fe0f',
        '1f938-1f3fd-200d-2640-fe0f',
        '1f938-1f3fe-200d-2640-fe0f',
        '1f938-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    { n: ['wrestlers'], u: '1f93c', a: '3.0' },
    {
      n: ['men wrestling', 'man-wrestling'],
      u: '1f93c-200d-2642-fe0f',
      a: '4.0',
    },
    {
      n: ['women wrestling', 'woman-wrestling'],
      u: '1f93c-200d-2640-fe0f',
      a: '4.0',
    },
    {
      n: ['water polo'],
      u: '1f93d',
      v: [
        '1f93d-1f3fb',
        '1f93d-1f3fc',
        '1f93d-1f3fd',
        '1f93d-1f3fe',
        '1f93d-1f3ff',
      ],
      a: '3.0',
    },
    {
      n: ['man playing water polo', 'man-playing-water-polo'],
      u: '1f93d-200d-2642-fe0f',
      v: [
        '1f93d-1f3fb-200d-2642-fe0f',
        '1f93d-1f3fc-200d-2642-fe0f',
        '1f93d-1f3fd-200d-2642-fe0f',
        '1f93d-1f3fe-200d-2642-fe0f',
        '1f93d-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman playing water polo', 'woman-playing-water-polo'],
      u: '1f93d-200d-2640-fe0f',
      v: [
        '1f93d-1f3fb-200d-2640-fe0f',
        '1f93d-1f3fc-200d-2640-fe0f',
        '1f93d-1f3fd-200d-2640-fe0f',
        '1f93d-1f3fe-200d-2640-fe0f',
        '1f93d-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['handball'],
      u: '1f93e',
      v: [
        '1f93e-1f3fb',
        '1f93e-1f3fc',
        '1f93e-1f3fd',
        '1f93e-1f3fe',
        '1f93e-1f3ff',
      ],
      a: '3.0',
    },
    {
      n: ['man playing handball', 'man-playing-handball'],
      u: '1f93e-200d-2642-fe0f',
      v: [
        '1f93e-1f3fb-200d-2642-fe0f',
        '1f93e-1f3fc-200d-2642-fe0f',
        '1f93e-1f3fd-200d-2642-fe0f',
        '1f93e-1f3fe-200d-2642-fe0f',
        '1f93e-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman playing handball', 'woman-playing-handball'],
      u: '1f93e-200d-2640-fe0f',
      v: [
        '1f93e-1f3fb-200d-2640-fe0f',
        '1f93e-1f3fc-200d-2640-fe0f',
        '1f93e-1f3fd-200d-2640-fe0f',
        '1f93e-1f3fe-200d-2640-fe0f',
        '1f93e-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['juggling'],
      u: '1f939',
      v: [
        '1f939-1f3fb',
        '1f939-1f3fc',
        '1f939-1f3fd',
        '1f939-1f3fe',
        '1f939-1f3ff',
      ],
      a: '3.0',
    },
    {
      n: ['man juggling', 'man-juggling'],
      u: '1f939-200d-2642-fe0f',
      v: [
        '1f939-1f3fb-200d-2642-fe0f',
        '1f939-1f3fc-200d-2642-fe0f',
        '1f939-1f3fd-200d-2642-fe0f',
        '1f939-1f3fe-200d-2642-fe0f',
        '1f939-1f3ff-200d-2642-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['woman juggling', 'woman-juggling'],
      u: '1f939-200d-2640-fe0f',
      v: [
        '1f939-1f3fb-200d-2640-fe0f',
        '1f939-1f3fc-200d-2640-fe0f',
        '1f939-1f3fd-200d-2640-fe0f',
        '1f939-1f3fe-200d-2640-fe0f',
        '1f939-1f3ff-200d-2640-fe0f',
      ],
      a: '4.0',
    },
    {
      n: ['person in lotus position'],
      u: '1f9d8',
      v: [
        '1f9d8-1f3fb',
        '1f9d8-1f3fc',
        '1f9d8-1f3fd',
        '1f9d8-1f3fe',
        '1f9d8-1f3ff',
      ],
      a: '5.0',
    },
    {
      n: ['man in lotus position'],
      u: '1f9d8-200d-2642-fe0f',
      v: [
        '1f9d8-1f3fb-200d-2642-fe0f',
        '1f9d8-1f3fc-200d-2642-fe0f',
        '1f9d8-1f3fd-200d-2642-fe0f',
        '1f9d8-1f3fe-200d-2642-fe0f',
        '1f9d8-1f3ff-200d-2642-fe0f',
      ],
      a: '5.0',
    },
    {
      n: ['woman in lotus position'],
      u: '1f9d8-200d-2640-fe0f',
      v: [
        '1f9d8-1f3fb-200d-2640-fe0f',
        '1f9d8-1f3fc-200d-2640-fe0f',
        '1f9d8-1f3fd-200d-2640-fe0f',
        '1f9d8-1f3fe-200d-2640-fe0f',
        '1f9d8-1f3ff-200d-2640-fe0f',
      ],
      a: '5.0',
    },
    {
      n: ['bath'],
      u: '1f6c0',
      v: [
        '1f6c0-1f3fb',
        '1f6c0-1f3fc',
        '1f6c0-1f3fd',
        '1f6c0-1f3fe',
        '1f6c0-1f3ff',
      ],
      a: '0.6',
    },
    {
      n: ['sleeping accommodation'],
      u: '1f6cc',
      v: [
        '1f6cc-1f3fb',
        '1f6cc-1f3fc',
        '1f6cc-1f3fd',
        '1f6cc-1f3fe',
        '1f6cc-1f3ff',
      ],
      a: '1.0',
    },
    {
      n: ['people holding hands'],
      u: '1f9d1-200d-1f91d-200d-1f9d1',
      v: [
        '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb',
        '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc',
        '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd',
        '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe',
        '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff',
        '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb',
        '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc',
        '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd',
        '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe',
        '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff',
        '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb',
        '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc',
        '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd',
        '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe',
        '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff',
        '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb',
        '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc',
        '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd',
        '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe',
        '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff',
        '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb',
        '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc',
        '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd',
        '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe',
        '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff',
      ],
      a: '12.0',
    },
    {
      n: ['women holding hands', 'two women holding hands'],
      u: '1f46d',
      v: [
        '1f46d-1f3fb',
        '1f46d-1f3fc',
        '1f46d-1f3fd',
        '1f46d-1f3fe',
        '1f46d-1f3ff',
        '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc',
        '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd',
        '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe',
        '1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff',
        '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb',
        '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd',
        '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe',
        '1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff',
        '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb',
        '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc',
        '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe',
        '1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff',
        '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb',
        '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc',
        '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd',
        '1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff',
        '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb',
        '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc',
        '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd',
        '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe',
      ],
      a: '1.0',
    },
    {
      n: [
        'couple',
        'man and woman holding hands',
        'woman and man holding hands',
      ],
      u: '1f46b',
      v: [
        '1f46b-1f3fb',
        '1f46b-1f3fc',
        '1f46b-1f3fd',
        '1f46b-1f3fe',
        '1f46b-1f3ff',
        '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc',
        '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd',
        '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe',
        '1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff',
        '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb',
        '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd',
        '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe',
        '1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff',
        '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb',
        '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc',
        '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe',
        '1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff',
        '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb',
        '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc',
        '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd',
        '1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff',
        '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb',
        '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc',
        '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd',
        '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe',
      ],
      a: '0.6',
    },
    {
      n: ['men holding hands', 'two men holding hands'],
      u: '1f46c',
      v: [
        '1f46c-1f3fb',
        '1f46c-1f3fc',
        '1f46c-1f3fd',
        '1f46c-1f3fe',
        '1f46c-1f3ff',
        '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc',
        '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd',
        '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe',
        '1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff',
        '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb',
        '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd',
        '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe',
        '1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff',
        '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb',
        '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc',
        '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe',
        '1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff',
        '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb',
        '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc',
        '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd',
        '1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff',
        '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb',
        '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc',
        '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd',
        '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe',
      ],
      a: '1.0',
    },
    {
      n: ['kiss', 'couplekiss'],
      u: '1f48f',
      v: [
        '1f48f-1f3fb',
        '1f48f-1f3fc',
        '1f48f-1f3fd',
        '1f48f-1f3fe',
        '1f48f-1f3ff',
        '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc',
        '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd',
        '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe',
        '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff',
        '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb',
        '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd',
        '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe',
        '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff',
        '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb',
        '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc',
        '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe',
        '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff',
        '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb',
        '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc',
        '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd',
        '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff',
        '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb',
        '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc',
        '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd',
        '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe',
      ],
      a: '0.6',
    },
    {
      n: ['woman-kiss-man', 'kiss: woman, man'],
      u: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f468',
      v: [
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
      ],
      a: '2.0',
    },
    {
      n: ['man-kiss-man', 'kiss: man, man'],
      u: '1f468-200d-2764-fe0f-200d-1f48b-200d-1f468',
      v: [
        '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff',
      ],
      a: '2.0',
    },
    {
      n: ['woman-kiss-woman', 'kiss: woman, woman'],
      u: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f469',
      v: [
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff',
      ],
      a: '2.0',
    },
    {
      n: ['couple with heart'],
      u: '1f491',
      v: [
        '1f491-1f3fb',
        '1f491-1f3fc',
        '1f491-1f3fd',
        '1f491-1f3fe',
        '1f491-1f3ff',
        '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fc',
        '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fd',
        '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fe',
        '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3ff',
        '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fb',
        '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fd',
        '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fe',
        '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3ff',
        '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fb',
        '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fc',
        '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fe',
        '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3ff',
        '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fb',
        '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fc',
        '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fd',
        '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3ff',
        '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fb',
        '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fc',
        '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fd',
        '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fe',
      ],
      a: '0.6',
    },
    {
      n: ['woman-heart-man', 'couple with heart: woman, man'],
      u: '1f469-200d-2764-fe0f-200d-1f468',
      v: [
        '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff',
      ],
      a: '2.0',
    },
    {
      n: ['man-heart-man', 'couple with heart: man, man'],
      u: '1f468-200d-2764-fe0f-200d-1f468',
      v: [
        '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe',
        '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff',
      ],
      a: '2.0',
    },
    {
      n: ['woman-heart-woman', 'couple with heart: woman, woman'],
      u: '1f469-200d-2764-fe0f-200d-1f469',
      v: [
        '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fc',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fd',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fe',
        '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3ff',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fb',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fd',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fe',
        '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3ff',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fb',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fc',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fe',
        '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3ff',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fb',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fc',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fd',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe',
        '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3ff',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fb',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fc',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fd',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fe',
        '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff',
      ],
      a: '2.0',
    },
    {
      n: ['man-woman-boy', 'family: man, woman, boy'],
      u: '1f468-200d-1f469-200d-1f466',
      a: '2.0',
    },
    {
      n: ['man-woman-girl', 'family: man, woman, girl'],
      u: '1f468-200d-1f469-200d-1f467',
      a: '2.0',
    },
    {
      n: ['man-woman-girl-boy', 'family: man, woman, girl, boy'],
      u: '1f468-200d-1f469-200d-1f467-200d-1f466',
      a: '2.0',
    },
    {
      n: ['man-woman-boy-boy', 'family: man, woman, boy, boy'],
      u: '1f468-200d-1f469-200d-1f466-200d-1f466',
      a: '2.0',
    },
    {
      n: ['man-woman-girl-girl', 'family: man, woman, girl, girl'],
      u: '1f468-200d-1f469-200d-1f467-200d-1f467',
      a: '2.0',
    },
    {
      n: ['man-man-boy', 'family: man, man, boy'],
      u: '1f468-200d-1f468-200d-1f466',
      a: '2.0',
    },
    {
      n: ['man-man-girl', 'family: man, man, girl'],
      u: '1f468-200d-1f468-200d-1f467',
      a: '2.0',
    },
    {
      n: ['man-man-girl-boy', 'family: man, man, girl, boy'],
      u: '1f468-200d-1f468-200d-1f467-200d-1f466',
      a: '2.0',
    },
    {
      n: ['man-man-boy-boy', 'family: man, man, boy, boy'],
      u: '1f468-200d-1f468-200d-1f466-200d-1f466',
      a: '2.0',
    },
    {
      n: ['man-man-girl-girl', 'family: man, man, girl, girl'],
      u: '1f468-200d-1f468-200d-1f467-200d-1f467',
      a: '2.0',
    },
    {
      n: ['woman-woman-boy', 'family: woman, woman, boy'],
      u: '1f469-200d-1f469-200d-1f466',
      a: '2.0',
    },
    {
      n: ['woman-woman-girl', 'family: woman, woman, girl'],
      u: '1f469-200d-1f469-200d-1f467',
      a: '2.0',
    },
    {
      n: ['woman-woman-girl-boy', 'family: woman, woman, girl, boy'],
      u: '1f469-200d-1f469-200d-1f467-200d-1f466',
      a: '2.0',
    },
    {
      n: ['woman-woman-boy-boy', 'family: woman, woman, boy, boy'],
      u: '1f469-200d-1f469-200d-1f466-200d-1f466',
      a: '2.0',
    },
    {
      n: ['woman-woman-girl-girl', 'family: woman, woman, girl, girl'],
      u: '1f469-200d-1f469-200d-1f467-200d-1f467',
      a: '2.0',
    },
    { n: ['man-boy', 'family: man, boy'], u: '1f468-200d-1f466', a: '4.0' },
    {
      n: ['man-boy-boy', 'family: man, boy, boy'],
      u: '1f468-200d-1f466-200d-1f466',
      a: '4.0',
    },
    { n: ['man-girl', 'family: man, girl'], u: '1f468-200d-1f467', a: '4.0' },
    {
      n: ['man-girl-boy', 'family: man, girl, boy'],
      u: '1f468-200d-1f467-200d-1f466',
      a: '4.0',
    },
    {
      n: ['man-girl-girl', 'family: man, girl, girl'],
      u: '1f468-200d-1f467-200d-1f467',
      a: '4.0',
    },
    { n: ['woman-boy', 'family: woman, boy'], u: '1f469-200d-1f466', a: '4.0' },
    {
      n: ['woman-boy-boy', 'family: woman, boy, boy'],
      u: '1f469-200d-1f466-200d-1f466',
      a: '4.0',
    },
    {
      n: ['woman-girl', 'family: woman, girl'],
      u: '1f469-200d-1f467',
      a: '4.0',
    },
    {
      n: ['woman-girl-boy', 'family: woman, girl, boy'],
      u: '1f469-200d-1f467-200d-1f466',
      a: '4.0',
    },
    {
      n: ['woman-girl-girl', 'family: woman, girl, girl'],
      u: '1f469-200d-1f467-200d-1f467',
      a: '4.0',
    },
    {
      n: ['speaking head', 'speaking head in silhouette'],
      u: '1f5e3-fe0f',
      a: '0.7',
    },
    { n: ['bust in silhouette'], u: '1f464', a: '0.6' },
    { n: ['busts in silhouette'], u: '1f465', a: '1.0' },
    { n: ['people hugging'], u: '1fac2', a: '13.0' },
    { n: ['family'], u: '1f46a', a: '0.6' },
    {
      n: ['family adult adult child', 'family: adult, adult, child'],
      u: '1f9d1-200d-1f9d1-200d-1f9d2',
      a: '15.1',
    },
    {
      n: [
        'family adult adult child child',
        'family: adult, adult, child, child',
      ],
      u: '1f9d1-200d-1f9d1-200d-1f9d2-200d-1f9d2',
      a: '15.1',
    },
    {
      n: ['family adult child', 'family: adult, child'],
      u: '1f9d1-200d-1f9d2',
      a: '15.1',
    },
    {
      n: ['family adult child child', 'family: adult, child, child'],
      u: '1f9d1-200d-1f9d2-200d-1f9d2',
      a: '15.1',
    },
    { n: ['footprints'], u: '1f463', a: '0.6' },
  ],
  jm = [
    { n: ['monkey face'], u: '1f435', a: '0.6' },
    { n: ['monkey'], u: '1f412', a: '0.6' },
    { n: ['gorilla'], u: '1f98d', a: '3.0' },
    { n: ['orangutan'], u: '1f9a7', a: '12.0' },
    { n: ['dog', 'dog face'], u: '1f436', a: '0.6' },
    { n: ['dog', 'dog2'], u: '1f415', a: '0.7' },
    { n: ['guide dog'], u: '1f9ae', a: '12.0' },
    { n: ['service dog'], u: '1f415-200d-1f9ba', a: '12.0' },
    { n: ['poodle'], u: '1f429', a: '0.6' },
    { n: ['wolf', 'wolf face'], u: '1f43a', a: '0.6' },
    { n: ['fox face'], u: '1f98a', a: '3.0' },
    { n: ['raccoon'], u: '1f99d', a: '11.0' },
    { n: ['cat', 'cat face'], u: '1f431', a: '0.6' },
    { n: ['cat', 'cat2'], u: '1f408', a: '0.7' },
    { n: ['black cat'], u: '1f408-200d-2b1b', a: '13.0' },
    { n: ['lion face'], u: '1f981', a: '1.0' },
    { n: ['tiger', 'tiger face'], u: '1f42f', a: '0.6' },
    { n: ['tiger', 'tiger2'], u: '1f405', a: '1.0' },
    { n: ['leopard'], u: '1f406', a: '1.0' },
    { n: ['horse', 'horse face'], u: '1f434', a: '0.6' },
    { n: ['moose'], u: '1face', a: '15.0' },
    { n: ['donkey'], u: '1facf', a: '15.0' },
    { n: ['horse', 'racehorse'], u: '1f40e', a: '0.6' },
    { n: ['unicorn face'], u: '1f984', a: '1.0' },
    { n: ['zebra face'], u: '1f993', a: '5.0' },
    { n: ['deer'], u: '1f98c', a: '3.0' },
    { n: ['bison'], u: '1f9ac', a: '13.0' },
    { n: ['cow', 'cow face'], u: '1f42e', a: '0.6' },
    { n: ['ox'], u: '1f402', a: '1.0' },
    { n: ['water buffalo'], u: '1f403', a: '1.0' },
    { n: ['cow', 'cow2'], u: '1f404', a: '1.0' },
    { n: ['pig', 'pig face'], u: '1f437', a: '0.6' },
    { n: ['pig', 'pig2'], u: '1f416', a: '1.0' },
    { n: ['boar'], u: '1f417', a: '0.6' },
    { n: ['pig nose'], u: '1f43d', a: '0.6' },
    { n: ['ram'], u: '1f40f', a: '1.0' },
    { n: ['sheep'], u: '1f411', a: '0.6' },
    { n: ['goat'], u: '1f410', a: '1.0' },
    { n: ['dromedary camel'], u: '1f42a', a: '1.0' },
    { n: ['camel', 'bactrian camel'], u: '1f42b', a: '0.6' },
    { n: ['llama'], u: '1f999', a: '11.0' },
    { n: ['giraffe face'], u: '1f992', a: '5.0' },
    { n: ['elephant'], u: '1f418', a: '0.6' },
    { n: ['mammoth'], u: '1f9a3', a: '13.0' },
    { n: ['rhinoceros'], u: '1f98f', a: '3.0' },
    { n: ['hippopotamus'], u: '1f99b', a: '11.0' },
    { n: ['mouse', 'mouse face'], u: '1f42d', a: '0.6' },
    { n: ['mouse', 'mouse2'], u: '1f401', a: '1.0' },
    { n: ['rat'], u: '1f400', a: '1.0' },
    { n: ['hamster', 'hamster face'], u: '1f439', a: '0.6' },
    { n: ['rabbit', 'rabbit face'], u: '1f430', a: '0.6' },
    { n: ['rabbit', 'rabbit2'], u: '1f407', a: '1.0' },
    { n: ['chipmunk'], u: '1f43f-fe0f', a: '0.7' },
    { n: ['beaver'], u: '1f9ab', a: '13.0' },
    { n: ['hedgehog'], u: '1f994', a: '5.0' },
    { n: ['bat'], u: '1f987', a: '3.0' },
    { n: ['bear', 'bear face'], u: '1f43b', a: '0.6' },
    { n: ['polar bear'], u: '1f43b-200d-2744-fe0f', a: '13.0' },
    { n: ['koala'], u: '1f428', a: '0.6' },
    { n: ['panda face'], u: '1f43c', a: '0.6' },
    { n: ['sloth'], u: '1f9a5', a: '12.0' },
    { n: ['otter'], u: '1f9a6', a: '12.0' },
    { n: ['skunk'], u: '1f9a8', a: '12.0' },
    { n: ['kangaroo'], u: '1f998', a: '11.0' },
    { n: ['badger'], u: '1f9a1', a: '11.0' },
    { n: ['feet', 'paw prints'], u: '1f43e', a: '0.6' },
    { n: ['turkey'], u: '1f983', a: '1.0' },
    { n: ['chicken'], u: '1f414', a: '0.6' },
    { n: ['rooster'], u: '1f413', a: '1.0' },
    { n: ['hatching chick'], u: '1f423', a: '0.6' },
    { n: ['baby chick'], u: '1f424', a: '0.6' },
    { n: ['hatched chick', 'front-facing baby chick'], u: '1f425', a: '0.6' },
    { n: ['bird'], u: '1f426', a: '0.6' },
    { n: ['penguin'], u: '1f427', a: '0.6' },
    { n: ['dove', 'dove of peace'], u: '1f54a-fe0f', a: '0.7' },
    { n: ['eagle'], u: '1f985', a: '3.0' },
    { n: ['duck'], u: '1f986', a: '3.0' },
    { n: ['swan'], u: '1f9a2', a: '11.0' },
    { n: ['owl'], u: '1f989', a: '3.0' },
    { n: ['dodo'], u: '1f9a4', a: '13.0' },
    { n: ['feather'], u: '1fab6', a: '13.0' },
    { n: ['flamingo'], u: '1f9a9', a: '12.0' },
    { n: ['peacock'], u: '1f99a', a: '11.0' },
    { n: ['parrot'], u: '1f99c', a: '11.0' },
    { n: ['wing'], u: '1fabd', a: '15.0' },
    { n: ['black bird'], u: '1f426-200d-2b1b', a: '15.0' },
    { n: ['goose'], u: '1fabf', a: '15.0' },
    { n: ['phoenix'], u: '1f426-200d-1f525', a: '15.1' },
    { n: ['frog', 'frog face'], u: '1f438', a: '0.6' },
    { n: ['crocodile'], u: '1f40a', a: '1.0' },
    { n: ['turtle'], u: '1f422', a: '0.6' },
    { n: ['lizard'], u: '1f98e', a: '3.0' },
    { n: ['snake'], u: '1f40d', a: '0.6' },
    { n: ['dragon face'], u: '1f432', a: '0.6' },
    { n: ['dragon'], u: '1f409', a: '1.0' },
    { n: ['sauropod'], u: '1f995', a: '5.0' },
    { n: ['t-rex'], u: '1f996', a: '5.0' },
    { n: ['whale', 'spouting whale'], u: '1f433', a: '0.6' },
    { n: ['whale', 'whale2'], u: '1f40b', a: '1.0' },
    { n: ['dolphin', 'flipper'], u: '1f42c', a: '0.6' },
    { n: ['seal'], u: '1f9ad', a: '13.0' },
    { n: ['fish'], u: '1f41f', a: '0.6' },
    { n: ['tropical fish'], u: '1f420', a: '0.6' },
    { n: ['blowfish'], u: '1f421', a: '0.6' },
    { n: ['shark'], u: '1f988', a: '3.0' },
    { n: ['octopus'], u: '1f419', a: '0.6' },
    { n: ['shell', 'spiral shell'], u: '1f41a', a: '0.6' },
    { n: ['coral'], u: '1fab8', a: '14.0' },
    { n: ['jellyfish'], u: '1fabc', a: '15.0' },
    { n: ['snail'], u: '1f40c', a: '0.6' },
    { n: ['butterfly'], u: '1f98b', a: '3.0' },
    { n: ['bug'], u: '1f41b', a: '0.6' },
    { n: ['ant'], u: '1f41c', a: '0.6' },
    { n: ['bee', 'honeybee'], u: '1f41d', a: '0.6' },
    { n: ['beetle'], u: '1fab2', a: '13.0' },
    { n: ['ladybug', 'lady beetle'], u: '1f41e', a: '0.6' },
    { n: ['cricket'], u: '1f997', a: '5.0' },
    { n: ['cockroach'], u: '1fab3', a: '13.0' },
    { n: ['spider'], u: '1f577-fe0f', a: '0.7' },
    { n: ['spider web'], u: '1f578-fe0f', a: '0.7' },
    { n: ['scorpion'], u: '1f982', a: '1.0' },
    { n: ['mosquito'], u: '1f99f', a: '11.0' },
    { n: ['fly'], u: '1fab0', a: '13.0' },
    { n: ['worm'], u: '1fab1', a: '13.0' },
    { n: ['microbe'], u: '1f9a0', a: '11.0' },
    { n: ['bouquet'], u: '1f490', a: '0.6' },
    { n: ['cherry blossom'], u: '1f338', a: '0.6' },
    { n: ['white flower'], u: '1f4ae', a: '0.6' },
    { n: ['lotus'], u: '1fab7', a: '14.0' },
    { n: ['rosette'], u: '1f3f5-fe0f', a: '0.7' },
    { n: ['rose'], u: '1f339', a: '0.6' },
    { n: ['wilted flower'], u: '1f940', a: '3.0' },
    { n: ['hibiscus'], u: '1f33a', a: '0.6' },
    { n: ['sunflower'], u: '1f33b', a: '0.6' },
    { n: ['blossom'], u: '1f33c', a: '0.6' },
    { n: ['tulip'], u: '1f337', a: '0.6' },
    { n: ['hyacinth'], u: '1fabb', a: '15.0' },
    { n: ['seedling'], u: '1f331', a: '0.6' },
    { n: ['potted plant'], u: '1fab4', a: '13.0' },
    { n: ['evergreen tree'], u: '1f332', a: '1.0' },
    { n: ['deciduous tree'], u: '1f333', a: '1.0' },
    { n: ['palm tree'], u: '1f334', a: '0.6' },
    { n: ['cactus'], u: '1f335', a: '0.6' },
    { n: ['ear of rice'], u: '1f33e', a: '0.6' },
    { n: ['herb'], u: '1f33f', a: '0.6' },
    { n: ['shamrock'], u: '2618-fe0f', a: '1.0' },
    { n: ['four leaf clover'], u: '1f340', a: '0.6' },
    { n: ['maple leaf'], u: '1f341', a: '0.6' },
    { n: ['fallen leaf'], u: '1f342', a: '0.6' },
    { n: ['leaves', 'leaf fluttering in wind'], u: '1f343', a: '0.6' },
    { n: ['empty nest'], u: '1fab9', a: '14.0' },
    { n: ['nest with eggs'], u: '1faba', a: '14.0' },
    { n: ['mushroom'], u: '1f344', a: '0.6' },
  ],
  Cm = [
    { n: ['grapes'], u: '1f347', a: '0.6' },
    { n: ['melon'], u: '1f348', a: '0.6' },
    { n: ['watermelon'], u: '1f349', a: '0.6' },
    { n: ['tangerine'], u: '1f34a', a: '0.6' },
    { n: ['lemon'], u: '1f34b', a: '1.0' },
    { n: ['lime'], u: '1f34b-200d-1f7e9', a: '15.1' },
    { n: ['banana'], u: '1f34c', a: '0.6' },
    { n: ['pineapple'], u: '1f34d', a: '0.6' },
    { n: ['mango'], u: '1f96d', a: '11.0' },
    { n: ['apple', 'red apple'], u: '1f34e', a: '0.6' },
    { n: ['green apple'], u: '1f34f', a: '0.6' },
    { n: ['pear'], u: '1f350', a: '1.0' },
    { n: ['peach'], u: '1f351', a: '0.6' },
    { n: ['cherries'], u: '1f352', a: '0.6' },
    { n: ['strawberry'], u: '1f353', a: '0.6' },
    { n: ['blueberries'], u: '1fad0', a: '13.0' },
    { n: ['kiwifruit'], u: '1f95d', a: '3.0' },
    { n: ['tomato'], u: '1f345', a: '0.6' },
    { n: ['olive'], u: '1fad2', a: '13.0' },
    { n: ['coconut'], u: '1f965', a: '5.0' },
    { n: ['avocado'], u: '1f951', a: '3.0' },
    { n: ['eggplant', 'aubergine'], u: '1f346', a: '0.6' },
    { n: ['potato'], u: '1f954', a: '3.0' },
    { n: ['carrot'], u: '1f955', a: '3.0' },
    { n: ['corn', 'ear of maize'], u: '1f33d', a: '0.6' },
    { n: ['hot pepper'], u: '1f336-fe0f', a: '0.7' },
    { n: ['bell pepper'], u: '1fad1', a: '13.0' },
    { n: ['cucumber'], u: '1f952', a: '3.0' },
    { n: ['leafy green'], u: '1f96c', a: '11.0' },
    { n: ['broccoli'], u: '1f966', a: '5.0' },
    { n: ['garlic'], u: '1f9c4', a: '12.0' },
    { n: ['onion'], u: '1f9c5', a: '12.0' },
    { n: ['peanuts'], u: '1f95c', a: '3.0' },
    { n: ['beans'], u: '1fad8', a: '14.0' },
    { n: ['chestnut'], u: '1f330', a: '0.6' },
    { n: ['ginger root'], u: '1fada', a: '15.0' },
    { n: ['pea pod'], u: '1fadb', a: '15.0' },
    { n: ['brown mushroom'], u: '1f344-200d-1f7eb', a: '15.1' },
    { n: ['bread'], u: '1f35e', a: '0.6' },
    { n: ['croissant'], u: '1f950', a: '3.0' },
    { n: ['baguette bread'], u: '1f956', a: '3.0' },
    { n: ['flatbread'], u: '1fad3', a: '13.0' },
    { n: ['pretzel'], u: '1f968', a: '5.0' },
    { n: ['bagel'], u: '1f96f', a: '11.0' },
    { n: ['pancakes'], u: '1f95e', a: '3.0' },
    { n: ['waffle'], u: '1f9c7', a: '12.0' },
    { n: ['cheese wedge'], u: '1f9c0', a: '1.0' },
    { n: ['meat on bone'], u: '1f356', a: '0.6' },
    { n: ['poultry leg'], u: '1f357', a: '0.6' },
    { n: ['cut of meat'], u: '1f969', a: '5.0' },
    { n: ['bacon'], u: '1f953', a: '3.0' },
    { n: ['hamburger'], u: '1f354', a: '0.6' },
    { n: ['fries', 'french fries'], u: '1f35f', a: '0.6' },
    { n: ['pizza', 'slice of pizza'], u: '1f355', a: '0.6' },
    { n: ['hotdog', 'hot dog'], u: '1f32d', a: '1.0' },
    { n: ['sandwich'], u: '1f96a', a: '5.0' },
    { n: ['taco'], u: '1f32e', a: '1.0' },
    { n: ['burrito'], u: '1f32f', a: '1.0' },
    { n: ['tamale'], u: '1fad4', a: '13.0' },
    { n: ['stuffed flatbread'], u: '1f959', a: '3.0' },
    { n: ['falafel'], u: '1f9c6', a: '12.0' },
    { n: ['egg'], u: '1f95a', a: '3.0' },
    { n: ['cooking', 'fried egg'], u: '1f373', a: '0.6' },
    { n: ['shallow pan of food'], u: '1f958', a: '3.0' },
    { n: ['stew', 'pot of food'], u: '1f372', a: '0.6' },
    { n: ['fondue'], u: '1fad5', a: '13.0' },
    { n: ['bowl with spoon'], u: '1f963', a: '5.0' },
    { n: ['green salad'], u: '1f957', a: '3.0' },
    { n: ['popcorn'], u: '1f37f', a: '1.0' },
    { n: ['butter'], u: '1f9c8', a: '12.0' },
    { n: ['salt', 'salt shaker'], u: '1f9c2', a: '11.0' },
    { n: ['canned food'], u: '1f96b', a: '5.0' },
    { n: ['bento', 'bento box'], u: '1f371', a: '0.6' },
    { n: ['rice cracker'], u: '1f358', a: '0.6' },
    { n: ['rice ball'], u: '1f359', a: '0.6' },
    { n: ['rice', 'cooked rice'], u: '1f35a', a: '0.6' },
    { n: ['curry', 'curry and rice'], u: '1f35b', a: '0.6' },
    { n: ['ramen', 'steaming bowl'], u: '1f35c', a: '0.6' },
    { n: ['spaghetti'], u: '1f35d', a: '0.6' },
    { n: ['sweet potato', 'roasted sweet potato'], u: '1f360', a: '0.6' },
    { n: ['oden'], u: '1f362', a: '0.6' },
    { n: ['sushi'], u: '1f363', a: '0.6' },
    { n: ['fried shrimp'], u: '1f364', a: '0.6' },
    { n: ['fish cake', 'fish cake with swirl design'], u: '1f365', a: '0.6' },
    { n: ['moon cake'], u: '1f96e', a: '11.0' },
    { n: ['dango'], u: '1f361', a: '0.6' },
    { n: ['dumpling'], u: '1f95f', a: '5.0' },
    { n: ['fortune cookie'], u: '1f960', a: '5.0' },
    { n: ['takeout box'], u: '1f961', a: '5.0' },
    { n: ['crab'], u: '1f980', a: '1.0' },
    { n: ['lobster'], u: '1f99e', a: '11.0' },
    { n: ['shrimp'], u: '1f990', a: '3.0' },
    { n: ['squid'], u: '1f991', a: '3.0' },
    { n: ['oyster'], u: '1f9aa', a: '12.0' },
    { n: ['icecream', 'soft ice cream'], u: '1f366', a: '0.6' },
    { n: ['shaved ice'], u: '1f367', a: '0.6' },
    { n: ['ice cream'], u: '1f368', a: '0.6' },
    { n: ['doughnut'], u: '1f369', a: '0.6' },
    { n: ['cookie'], u: '1f36a', a: '0.6' },
    { n: ['birthday', 'birthday cake'], u: '1f382', a: '0.6' },
    { n: ['cake', 'shortcake'], u: '1f370', a: '0.6' },
    { n: ['cupcake'], u: '1f9c1', a: '11.0' },
    { n: ['pie'], u: '1f967', a: '5.0' },
    { n: ['chocolate bar'], u: '1f36b', a: '0.6' },
    { n: ['candy'], u: '1f36c', a: '0.6' },
    { n: ['lollipop'], u: '1f36d', a: '0.6' },
    { n: ['custard'], u: '1f36e', a: '0.6' },
    { n: ['honey pot'], u: '1f36f', a: '0.6' },
    { n: ['baby bottle'], u: '1f37c', a: '1.0' },
    { n: ['glass of milk'], u: '1f95b', a: '3.0' },
    { n: ['coffee', 'hot beverage'], u: '2615', a: '0.6' },
    { n: ['teapot'], u: '1fad6', a: '13.0' },
    { n: ['tea', 'teacup without handle'], u: '1f375', a: '0.6' },
    { n: ['sake', 'sake bottle and cup'], u: '1f376', a: '0.6' },
    { n: ['champagne', 'bottle with popping cork'], u: '1f37e', a: '1.0' },
    { n: ['wine glass'], u: '1f377', a: '0.6' },
    { n: ['cocktail', 'cocktail glass'], u: '1f378', a: '0.6' },
    { n: ['tropical drink'], u: '1f379', a: '0.6' },
    { n: ['beer', 'beer mug'], u: '1f37a', a: '0.6' },
    { n: ['beers', 'clinking beer mugs'], u: '1f37b', a: '0.6' },
    { n: ['clinking glasses'], u: '1f942', a: '3.0' },
    { n: ['tumbler glass'], u: '1f943', a: '3.0' },
    { n: ['pouring liquid'], u: '1fad7', a: '14.0' },
    { n: ['cup with straw'], u: '1f964', a: '5.0' },
    { n: ['bubble tea'], u: '1f9cb', a: '13.0' },
    { n: ['beverage box'], u: '1f9c3', a: '12.0' },
    { n: ['mate drink'], u: '1f9c9', a: '12.0' },
    { n: ['ice cube'], u: '1f9ca', a: '12.0' },
    { n: ['chopsticks'], u: '1f962', a: '5.0' },
    {
      n: ['knife fork plate', 'fork and knife with plate'],
      u: '1f37d-fe0f',
      a: '0.7',
    },
    { n: ['fork and knife'], u: '1f374', a: '0.6' },
    { n: ['spoon'], u: '1f944', a: '3.0' },
    { n: ['hocho', 'knife'], u: '1f52a', a: '0.6' },
    { n: ['jar'], u: '1fad9', a: '14.0' },
    { n: ['amphora'], u: '1f3fa', a: '1.0' },
  ],
  pm = [
    { n: ['earth africa', 'earth globe europe-africa'], u: '1f30d', a: '0.7' },
    { n: ['earth americas', 'earth globe americas'], u: '1f30e', a: '0.7' },
    { n: ['earth asia', 'earth globe asia-australia'], u: '1f30f', a: '0.6' },
    { n: ['globe with meridians'], u: '1f310', a: '1.0' },
    { n: ['world map'], u: '1f5fa-fe0f', a: '0.7' },
    { n: ['japan', 'silhouette of japan'], u: '1f5fe', a: '0.6' },
    { n: ['compass'], u: '1f9ed', a: '11.0' },
    {
      n: ['snow-capped mountain', 'snow capped mountain'],
      u: '1f3d4-fe0f',
      a: '0.7',
    },
    { n: ['mountain'], u: '26f0-fe0f', a: '0.7' },
    { n: ['volcano'], u: '1f30b', a: '0.6' },
    { n: ['mount fuji'], u: '1f5fb', a: '0.6' },
    { n: ['camping'], u: '1f3d5-fe0f', a: '0.7' },
    { n: ['beach with umbrella'], u: '1f3d6-fe0f', a: '0.7' },
    { n: ['desert'], u: '1f3dc-fe0f', a: '0.7' },
    { n: ['desert island'], u: '1f3dd-fe0f', a: '0.7' },
    { n: ['national park'], u: '1f3de-fe0f', a: '0.7' },
    { n: ['stadium'], u: '1f3df-fe0f', a: '0.7' },
    { n: ['classical building'], u: '1f3db-fe0f', a: '0.7' },
    { n: ['building construction'], u: '1f3d7-fe0f', a: '0.7' },
    { n: ['brick', 'bricks'], u: '1f9f1', a: '11.0' },
    { n: ['rock'], u: '1faa8', a: '13.0' },
    { n: ['wood'], u: '1fab5', a: '13.0' },
    { n: ['hut'], u: '1f6d6', a: '13.0' },
    { n: ['houses', 'house buildings'], u: '1f3d8-fe0f', a: '0.7' },
    {
      n: ['derelict house', 'derelict house building'],
      u: '1f3da-fe0f',
      a: '0.7',
    },
    { n: ['house', 'house building'], u: '1f3e0', a: '0.6' },
    { n: ['house with garden'], u: '1f3e1', a: '0.6' },
    { n: ['office', 'office building'], u: '1f3e2', a: '0.6' },
    { n: ['post office', 'japanese post office'], u: '1f3e3', a: '0.6' },
    { n: ['european post office'], u: '1f3e4', a: '1.0' },
    { n: ['hospital'], u: '1f3e5', a: '0.6' },
    { n: ['bank'], u: '1f3e6', a: '0.6' },
    { n: ['hotel'], u: '1f3e8', a: '0.6' },
    { n: ['love hotel'], u: '1f3e9', a: '0.6' },
    { n: ['convenience store'], u: '1f3ea', a: '0.6' },
    { n: ['school'], u: '1f3eb', a: '0.6' },
    { n: ['department store'], u: '1f3ec', a: '0.6' },
    { n: ['factory'], u: '1f3ed', a: '0.6' },
    { n: ['japanese castle'], u: '1f3ef', a: '0.6' },
    { n: ['european castle'], u: '1f3f0', a: '0.6' },
    { n: ['wedding'], u: '1f492', a: '0.6' },
    { n: ['tokyo tower'], u: '1f5fc', a: '0.6' },
    { n: ['statue of liberty'], u: '1f5fd', a: '0.6' },
    { n: ['church'], u: '26ea', a: '0.6' },
    { n: ['mosque'], u: '1f54c', a: '1.0' },
    { n: ['hindu temple'], u: '1f6d5', a: '12.0' },
    { n: ['synagogue'], u: '1f54d', a: '1.0' },
    { n: ['shinto shrine'], u: '26e9-fe0f', a: '0.7' },
    { n: ['kaaba'], u: '1f54b', a: '1.0' },
    { n: ['fountain'], u: '26f2', a: '0.6' },
    { n: ['tent'], u: '26fa', a: '0.6' },
    { n: ['foggy'], u: '1f301', a: '0.6' },
    { n: ['night with stars'], u: '1f303', a: '0.6' },
    { n: ['cityscape'], u: '1f3d9-fe0f', a: '0.7' },
    { n: ['sunrise over mountains'], u: '1f304', a: '0.6' },
    { n: ['sunrise'], u: '1f305', a: '0.6' },
    { n: ['city sunset', 'cityscape at dusk'], u: '1f306', a: '0.6' },
    { n: ['city sunrise', 'sunset over buildings'], u: '1f307', a: '0.6' },
    { n: ['bridge at night'], u: '1f309', a: '0.6' },
    { n: ['hotsprings', 'hot springs'], u: '2668-fe0f', a: '0.6' },
    { n: ['carousel horse'], u: '1f3a0', a: '0.6' },
    { n: ['playground slide'], u: '1f6dd', a: '14.0' },
    { n: ['ferris wheel'], u: '1f3a1', a: '0.6' },
    { n: ['roller coaster'], u: '1f3a2', a: '0.6' },
    { n: ['barber', 'barber pole'], u: '1f488', a: '0.6' },
    { n: ['circus tent'], u: '1f3aa', a: '0.6' },
    { n: ['steam locomotive'], u: '1f682', a: '1.0' },
    { n: ['railway car'], u: '1f683', a: '0.6' },
    { n: ['high-speed train', 'bullettrain side'], u: '1f684', a: '0.6' },
    {
      n: ['bullettrain front', 'high-speed train with bullet nose'],
      u: '1f685',
      a: '0.6',
    },
    { n: ['train', 'train2'], u: '1f686', a: '1.0' },
    { n: ['metro'], u: '1f687', a: '0.6' },
    { n: ['light rail'], u: '1f688', a: '1.0' },
    { n: ['station'], u: '1f689', a: '0.6' },
    { n: ['tram'], u: '1f68a', a: '1.0' },
    { n: ['monorail'], u: '1f69d', a: '1.0' },
    { n: ['mountain railway'], u: '1f69e', a: '1.0' },
    { n: ['train', 'tram car'], u: '1f68b', a: '1.0' },
    { n: ['bus'], u: '1f68c', a: '0.6' },
    { n: ['oncoming bus'], u: '1f68d', a: '0.7' },
    { n: ['trolleybus'], u: '1f68e', a: '1.0' },
    { n: ['minibus'], u: '1f690', a: '1.0' },
    { n: ['ambulance'], u: '1f691', a: '0.6' },
    { n: ['fire engine'], u: '1f692', a: '0.6' },
    { n: ['police car'], u: '1f693', a: '0.6' },
    { n: ['oncoming police car'], u: '1f694', a: '0.7' },
    { n: ['taxi'], u: '1f695', a: '0.6' },
    { n: ['oncoming taxi'], u: '1f696', a: '1.0' },
    { n: ['car', 'red car', 'automobile'], u: '1f697', a: '0.6' },
    { n: ['oncoming automobile'], u: '1f698', a: '0.7' },
    { n: ['blue car', 'recreational vehicle'], u: '1f699', a: '0.6' },
    { n: ['pickup truck'], u: '1f6fb', a: '13.0' },
    { n: ['truck', 'delivery truck'], u: '1f69a', a: '0.6' },
    { n: ['articulated lorry'], u: '1f69b', a: '1.0' },
    { n: ['tractor'], u: '1f69c', a: '1.0' },
    { n: ['racing car'], u: '1f3ce-fe0f', a: '0.7' },
    { n: ['motorcycle', 'racing motorcycle'], u: '1f3cd-fe0f', a: '0.7' },
    { n: ['motor scooter'], u: '1f6f5', a: '3.0' },
    { n: ['manual wheelchair'], u: '1f9bd', a: '12.0' },
    { n: ['motorized wheelchair'], u: '1f9bc', a: '12.0' },
    { n: ['auto rickshaw'], u: '1f6fa', a: '12.0' },
    { n: ['bike', 'bicycle'], u: '1f6b2', a: '0.6' },
    { n: ['scooter'], u: '1f6f4', a: '3.0' },
    { n: ['skateboard'], u: '1f6f9', a: '11.0' },
    { n: ['roller skate'], u: '1f6fc', a: '13.0' },
    { n: ['busstop', 'bus stop'], u: '1f68f', a: '0.6' },
    { n: ['motorway'], u: '1f6e3-fe0f', a: '0.7' },
    { n: ['railway track'], u: '1f6e4-fe0f', a: '0.7' },
    { n: ['oil drum'], u: '1f6e2-fe0f', a: '0.7' },
    { n: ['fuelpump', 'fuel pump'], u: '26fd', a: '0.6' },
    { n: ['wheel'], u: '1f6de', a: '14.0' },
    {
      n: ['rotating light', 'police cars revolving light'],
      u: '1f6a8',
      a: '0.6',
    },
    { n: ['traffic light', 'horizontal traffic light'], u: '1f6a5', a: '0.6' },
    { n: ['vertical traffic light'], u: '1f6a6', a: '1.0' },
    { n: ['octagonal sign'], u: '1f6d1', a: '3.0' },
    { n: ['construction', 'construction sign'], u: '1f6a7', a: '0.6' },
    { n: ['anchor'], u: '2693', a: '0.6' },
    { n: ['ring buoy'], u: '1f6df', a: '14.0' },
    { n: ['boat', 'sailboat'], u: '26f5', a: '0.6' },
    { n: ['canoe'], u: '1f6f6', a: '3.0' },
    { n: ['speedboat'], u: '1f6a4', a: '0.6' },
    { n: ['passenger ship'], u: '1f6f3-fe0f', a: '0.7' },
    { n: ['ferry'], u: '26f4-fe0f', a: '0.7' },
    { n: ['motor boat'], u: '1f6e5-fe0f', a: '0.7' },
    { n: ['ship'], u: '1f6a2', a: '0.6' },
    { n: ['airplane'], u: '2708-fe0f', a: '0.6' },
    { n: ['small airplane'], u: '1f6e9-fe0f', a: '0.7' },
    { n: ['airplane departure'], u: '1f6eb', a: '1.0' },
    { n: ['airplane arriving'], u: '1f6ec', a: '1.0' },
    { n: ['parachute'], u: '1fa82', a: '12.0' },
    { n: ['seat'], u: '1f4ba', a: '0.6' },
    { n: ['helicopter'], u: '1f681', a: '1.0' },
    { n: ['suspension railway'], u: '1f69f', a: '1.0' },
    { n: ['mountain cableway'], u: '1f6a0', a: '1.0' },
    { n: ['aerial tramway'], u: '1f6a1', a: '1.0' },
    { n: ['satellite'], u: '1f6f0-fe0f', a: '0.7' },
    { n: ['rocket'], u: '1f680', a: '0.6' },
    { n: ['flying saucer'], u: '1f6f8', a: '5.0' },
    { n: ['bellhop bell'], u: '1f6ce-fe0f', a: '0.7' },
    { n: ['luggage'], u: '1f9f3', a: '11.0' },
    { n: ['hourglass'], u: '231b', a: '0.6' },
    {
      n: ['hourglass flowing sand', 'hourglass with flowing sand'],
      u: '23f3',
      a: '0.6',
    },
    { n: ['watch'], u: '231a', a: '0.6' },
    { n: ['alarm clock'], u: '23f0', a: '0.6' },
    { n: ['stopwatch'], u: '23f1-fe0f', a: '1.0' },
    { n: ['timer clock'], u: '23f2-fe0f', a: '1.0' },
    { n: ['mantelpiece clock'], u: '1f570-fe0f', a: '0.7' },
    { n: ['clock12', 'clock face twelve oclock'], u: '1f55b', a: '0.6' },
    { n: ['clock1230', 'clock face twelve-thirty'], u: '1f567', a: '0.7' },
    { n: ['clock1', 'clock face one oclock'], u: '1f550', a: '0.6' },
    { n: ['clock130', 'clock face one-thirty'], u: '1f55c', a: '0.7' },
    { n: ['clock2', 'clock face two oclock'], u: '1f551', a: '0.6' },
    { n: ['clock230', 'clock face two-thirty'], u: '1f55d', a: '0.7' },
    { n: ['clock3', 'clock face three oclock'], u: '1f552', a: '0.6' },
    { n: ['clock330', 'clock face three-thirty'], u: '1f55e', a: '0.7' },
    { n: ['clock4', 'clock face four oclock'], u: '1f553', a: '0.6' },
    { n: ['clock430', 'clock face four-thirty'], u: '1f55f', a: '0.7' },
    { n: ['clock5', 'clock face five oclock'], u: '1f554', a: '0.6' },
    { n: ['clock530', 'clock face five-thirty'], u: '1f560', a: '0.7' },
    { n: ['clock6', 'clock face six oclock'], u: '1f555', a: '0.6' },
    { n: ['clock630', 'clock face six-thirty'], u: '1f561', a: '0.7' },
    { n: ['clock7', 'clock face seven oclock'], u: '1f556', a: '0.6' },
    { n: ['clock730', 'clock face seven-thirty'], u: '1f562', a: '0.7' },
    { n: ['clock8', 'clock face eight oclock'], u: '1f557', a: '0.6' },
    { n: ['clock830', 'clock face eight-thirty'], u: '1f563', a: '0.7' },
    { n: ['clock9', 'clock face nine oclock'], u: '1f558', a: '0.6' },
    { n: ['clock930', 'clock face nine-thirty'], u: '1f564', a: '0.7' },
    { n: ['clock10', 'clock face ten oclock'], u: '1f559', a: '0.6' },
    { n: ['clock1030', 'clock face ten-thirty'], u: '1f565', a: '0.7' },
    { n: ['clock11', 'clock face eleven oclock'], u: '1f55a', a: '0.6' },
    { n: ['clock1130', 'clock face eleven-thirty'], u: '1f566', a: '0.7' },
    { n: ['new moon', 'new moon symbol'], u: '1f311', a: '0.6' },
    {
      n: ['waxing crescent moon', 'waxing crescent moon symbol'],
      u: '1f312',
      a: '1.0',
    },
    {
      n: ['first quarter moon', 'first quarter moon symbol'],
      u: '1f313',
      a: '0.6',
    },
    {
      n: ['moon', 'waxing gibbous moon', 'waxing gibbous moon symbol'],
      u: '1f314',
      a: '0.6',
    },
    { n: ['full moon', 'full moon symbol'], u: '1f315', a: '0.6' },
    {
      n: ['waning gibbous moon', 'waning gibbous moon symbol'],
      u: '1f316',
      a: '1.0',
    },
    {
      n: ['last quarter moon', 'last quarter moon symbol'],
      u: '1f317',
      a: '1.0',
    },
    {
      n: ['waning crescent moon', 'waning crescent moon symbol'],
      u: '1f318',
      a: '1.0',
    },
    { n: ['crescent moon'], u: '1f319', a: '0.6' },
    { n: ['new moon with face'], u: '1f31a', a: '1.0' },
    { n: ['first quarter moon with face'], u: '1f31b', a: '0.6' },
    { n: ['last quarter moon with face'], u: '1f31c', a: '0.7' },
    { n: ['thermometer'], u: '1f321-fe0f', a: '0.7' },
    { n: ['sunny', 'black sun with rays'], u: '2600-fe0f', a: '0.6' },
    { n: ['full moon with face'], u: '1f31d', a: '1.0' },
    { n: ['sun with face'], u: '1f31e', a: '1.0' },
    { n: ['ringed planet'], u: '1fa90', a: '12.0' },
    { n: ['star', 'white medium star'], u: '2b50', a: '0.6' },
    { n: ['star2', 'glowing star'], u: '1f31f', a: '0.6' },
    { n: ['stars', 'shooting star'], u: '1f320', a: '0.6' },
    { n: ['milky way'], u: '1f30c', a: '0.6' },
    { n: ['cloud'], u: '2601-fe0f', a: '0.6' },
    { n: ['partly sunny', 'sun behind cloud'], u: '26c5', a: '0.6' },
    {
      n: ['thunder cloud and rain', 'cloud with lightning and rain'],
      u: '26c8-fe0f',
      a: '0.7',
    },
    {
      n: ['mostly sunny', 'sun small cloud', 'sun behind small cloud'],
      u: '1f324-fe0f',
      a: '0.7',
    },
    {
      n: ['barely sunny', 'sun behind cloud', 'sun behind large cloud'],
      u: '1f325-fe0f',
      a: '0.7',
    },
    {
      n: ['partly sunny rain', 'sun behind rain cloud'],
      u: '1f326-fe0f',
      a: '0.7',
    },
    { n: ['rain cloud', 'cloud with rain'], u: '1f327-fe0f', a: '0.7' },
    { n: ['snow cloud', 'cloud with snow'], u: '1f328-fe0f', a: '0.7' },
    {
      n: ['lightning', 'lightning cloud', 'cloud with lightning'],
      u: '1f329-fe0f',
      a: '0.7',
    },
    { n: ['tornado', 'tornado cloud'], u: '1f32a-fe0f', a: '0.7' },
    { n: ['fog'], u: '1f32b-fe0f', a: '0.7' },
    { n: ['wind face', 'wind blowing face'], u: '1f32c-fe0f', a: '0.7' },
    { n: ['cyclone'], u: '1f300', a: '0.6' },
    { n: ['rainbow'], u: '1f308', a: '0.6' },
    { n: ['closed umbrella'], u: '1f302', a: '0.6' },
    { n: ['umbrella'], u: '2602-fe0f', a: '0.7' },
    { n: ['umbrella with rain drops'], u: '2614', a: '0.6' },
    { n: ['umbrella on ground'], u: '26f1-fe0f', a: '0.7' },
    { n: ['zap', 'high voltage sign'], u: '26a1', a: '0.6' },
    { n: ['snowflake'], u: '2744-fe0f', a: '0.6' },
    { n: ['snowman'], u: '2603-fe0f', a: '0.7' },
    { n: ['snowman without snow'], u: '26c4', a: '0.6' },
    { n: ['comet'], u: '2604-fe0f', a: '1.0' },
    { n: ['fire'], u: '1f525', a: '0.6' },
    { n: ['droplet'], u: '1f4a7', a: '0.6' },
    { n: ['ocean', 'water wave'], u: '1f30a', a: '0.6' },
  ],
  Sm = [
    { n: ['jack-o-lantern', 'jack o lantern'], u: '1f383', a: '0.6' },
    { n: ['christmas tree'], u: '1f384', a: '0.6' },
    { n: ['fireworks'], u: '1f386', a: '0.6' },
    { n: ['sparkler', 'firework sparkler'], u: '1f387', a: '0.6' },
    { n: ['firecracker'], u: '1f9e8', a: '11.0' },
    { n: ['sparkles'], u: '2728', a: '0.6' },
    { n: ['balloon'], u: '1f388', a: '0.6' },
    { n: ['tada', 'party popper'], u: '1f389', a: '0.6' },
    { n: ['confetti ball'], u: '1f38a', a: '0.6' },
    { n: ['tanabata tree'], u: '1f38b', a: '0.6' },
    { n: ['bamboo', 'pine decoration'], u: '1f38d', a: '0.6' },
    { n: ['dolls', 'japanese dolls'], u: '1f38e', a: '0.6' },
    { n: ['flags', 'carp streamer'], u: '1f38f', a: '0.6' },
    { n: ['wind chime'], u: '1f390', a: '0.6' },
    { n: ['rice scene', 'moon viewing ceremony'], u: '1f391', a: '0.6' },
    { n: ['red envelope', 'red gift envelope'], u: '1f9e7', a: '11.0' },
    { n: ['ribbon'], u: '1f380', a: '0.6' },
    { n: ['gift', 'wrapped present'], u: '1f381', a: '0.6' },
    { n: ['reminder ribbon'], u: '1f397-fe0f', a: '0.7' },
    { n: ['admission tickets'], u: '1f39f-fe0f', a: '0.7' },
    { n: ['ticket'], u: '1f3ab', a: '0.6' },
    { n: ['medal', 'military medal'], u: '1f396-fe0f', a: '0.7' },
    { n: ['trophy'], u: '1f3c6', a: '0.6' },
    { n: ['sports medal'], u: '1f3c5', a: '1.0' },
    { n: ['first place medal'], u: '1f947', a: '3.0' },
    { n: ['second place medal'], u: '1f948', a: '3.0' },
    { n: ['third place medal'], u: '1f949', a: '3.0' },
    { n: ['soccer', 'soccer ball'], u: '26bd', a: '0.6' },
    { n: ['baseball'], u: '26be', a: '0.6' },
    { n: ['softball'], u: '1f94e', a: '11.0' },
    { n: ['basketball', 'basketball and hoop'], u: '1f3c0', a: '0.6' },
    { n: ['volleyball'], u: '1f3d0', a: '1.0' },
    { n: ['football', 'american football'], u: '1f3c8', a: '0.6' },
    { n: ['rugby football'], u: '1f3c9', a: '1.0' },
    { n: ['tennis', 'tennis racquet and ball'], u: '1f3be', a: '0.6' },
    { n: ['flying disc'], u: '1f94f', a: '11.0' },
    { n: ['bowling'], u: '1f3b3', a: '0.6' },
    { n: ['cricket bat and ball'], u: '1f3cf', a: '1.0' },
    { n: ['field hockey stick and ball'], u: '1f3d1', a: '1.0' },
    { n: ['ice hockey stick and puck'], u: '1f3d2', a: '1.0' },
    { n: ['lacrosse', 'lacrosse stick and ball'], u: '1f94d', a: '11.0' },
    { n: ['table tennis paddle and ball'], u: '1f3d3', a: '1.0' },
    { n: ['badminton racquet and shuttlecock'], u: '1f3f8', a: '1.0' },
    { n: ['boxing glove'], u: '1f94a', a: '3.0' },
    { n: ['martial arts uniform'], u: '1f94b', a: '3.0' },
    { n: ['goal net'], u: '1f945', a: '3.0' },
    { n: ['golf', 'flag in hole'], u: '26f3', a: '0.6' },
    { n: ['ice skate'], u: '26f8-fe0f', a: '0.7' },
    { n: ['fishing pole and fish'], u: '1f3a3', a: '0.6' },
    { n: ['diving mask'], u: '1f93f', a: '12.0' },
    { n: ['running shirt with sash'], u: '1f3bd', a: '0.6' },
    { n: ['ski', 'ski and ski boot'], u: '1f3bf', a: '0.6' },
    { n: ['sled'], u: '1f6f7', a: '5.0' },
    { n: ['curling stone'], u: '1f94c', a: '5.0' },
    { n: ['dart', 'direct hit'], u: '1f3af', a: '0.6' },
    { n: ['yo-yo'], u: '1fa80', a: '12.0' },
    { n: ['kite'], u: '1fa81', a: '12.0' },
    { n: ['gun', 'pistol'], u: '1f52b', a: '0.6' },
    { n: ['8ball', 'billiards'], u: '1f3b1', a: '0.6' },
    { n: ['crystal ball'], u: '1f52e', a: '0.6' },
    { n: ['magic wand'], u: '1fa84', a: '13.0' },
    { n: ['video game'], u: '1f3ae', a: '0.6' },
    { n: ['joystick'], u: '1f579-fe0f', a: '0.7' },
    { n: ['slot machine'], u: '1f3b0', a: '0.6' },
    { n: ['game die'], u: '1f3b2', a: '0.6' },
    { n: ['jigsaw', 'jigsaw puzzle piece'], u: '1f9e9', a: '11.0' },
    { n: ['teddy bear'], u: '1f9f8', a: '11.0' },
    { n: ['pinata'], u: '1fa85', a: '13.0' },
    { n: ['mirror ball'], u: '1faa9', a: '14.0' },
    { n: ['nesting dolls'], u: '1fa86', a: '13.0' },
    { n: ['spades', 'black spade suit'], u: '2660-fe0f', a: '0.6' },
    { n: ['hearts', 'black heart suit'], u: '2665-fe0f', a: '0.6' },
    { n: ['diamonds', 'black diamond suit'], u: '2666-fe0f', a: '0.6' },
    { n: ['clubs', 'black club suit'], u: '2663-fe0f', a: '0.6' },
    { n: ['chess pawn'], u: '265f-fe0f', a: '11.0' },
    { n: ['black joker', 'playing card black joker'], u: '1f0cf', a: '0.6' },
    { n: ['mahjong', 'mahjong tile red dragon'], u: '1f004', a: '0.6' },
    { n: ['flower playing cards'], u: '1f3b4', a: '0.6' },
    { n: ['performing arts'], u: '1f3ad', a: '0.6' },
    { n: ['framed picture', 'frame with picture'], u: '1f5bc-fe0f', a: '0.7' },
    { n: ['art', 'artist palette'], u: '1f3a8', a: '0.6' },
    { n: ['thread', 'spool of thread'], u: '1f9f5', a: '11.0' },
    { n: ['sewing needle'], u: '1faa1', a: '13.0' },
    { n: ['yarn', 'ball of yarn'], u: '1f9f6', a: '11.0' },
    { n: ['knot'], u: '1faa2', a: '13.0' },
  ],
  Nm = [
    { n: ['eyeglasses'], u: '1f453', a: '0.6' },
    { n: ['sunglasses', 'dark sunglasses'], u: '1f576-fe0f', a: '0.7' },
    { n: ['goggles'], u: '1f97d', a: '11.0' },
    { n: ['lab coat'], u: '1f97c', a: '11.0' },
    { n: ['safety vest'], u: '1f9ba', a: '12.0' },
    { n: ['necktie'], u: '1f454', a: '0.6' },
    { n: ['shirt', 'tshirt', 't-shirt'], u: '1f455', a: '0.6' },
    { n: ['jeans'], u: '1f456', a: '0.6' },
    { n: ['scarf'], u: '1f9e3', a: '5.0' },
    { n: ['gloves'], u: '1f9e4', a: '5.0' },
    { n: ['coat'], u: '1f9e5', a: '5.0' },
    { n: ['socks'], u: '1f9e6', a: '5.0' },
    { n: ['dress'], u: '1f457', a: '0.6' },
    { n: ['kimono'], u: '1f458', a: '0.6' },
    { n: ['sari'], u: '1f97b', a: '12.0' },
    { n: ['one-piece swimsuit'], u: '1fa71', a: '12.0' },
    { n: ['briefs'], u: '1fa72', a: '12.0' },
    { n: ['shorts'], u: '1fa73', a: '12.0' },
    { n: ['bikini'], u: '1f459', a: '0.6' },
    { n: ['womans clothes'], u: '1f45a', a: '0.6' },
    { n: ['folding hand fan'], u: '1faad', a: '15.0' },
    { n: ['purse'], u: '1f45b', a: '0.6' },
    { n: ['handbag'], u: '1f45c', a: '0.6' },
    { n: ['pouch'], u: '1f45d', a: '0.6' },
    { n: ['shopping bags'], u: '1f6cd-fe0f', a: '0.7' },
    { n: ['school satchel'], u: '1f392', a: '0.6' },
    { n: ['thong sandal'], u: '1fa74', a: '13.0' },
    { n: ['shoe', 'mans shoe'], u: '1f45e', a: '0.6' },
    { n: ['athletic shoe'], u: '1f45f', a: '0.6' },
    { n: ['hiking boot'], u: '1f97e', a: '11.0' },
    { n: ['flat shoe', 'womans flat shoe'], u: '1f97f', a: '11.0' },
    { n: ['high heel', 'high-heeled shoe'], u: '1f460', a: '0.6' },
    { n: ['sandal', 'womans sandal'], u: '1f461', a: '0.6' },
    { n: ['ballet shoes'], u: '1fa70', a: '12.0' },
    { n: ['boot', 'womans boots'], u: '1f462', a: '0.6' },
    { n: ['hair pick'], u: '1faae', a: '15.0' },
    { n: ['crown'], u: '1f451', a: '0.6' },
    { n: ['womans hat'], u: '1f452', a: '0.6' },
    { n: ['tophat', 'top hat'], u: '1f3a9', a: '0.6' },
    { n: ['mortar board', 'graduation cap'], u: '1f393', a: '0.6' },
    { n: ['billed cap'], u: '1f9e2', a: '5.0' },
    { n: ['military helmet'], u: '1fa96', a: '13.0' },
    {
      n: ['rescue worker’s helmet', 'helmet with white cross'],
      u: '26d1-fe0f',
      a: '0.7',
    },
    { n: ['prayer beads'], u: '1f4ff', a: '1.0' },
    { n: ['lipstick'], u: '1f484', a: '0.6' },
    { n: ['ring'], u: '1f48d', a: '0.6' },
    { n: ['gem', 'gem stone'], u: '1f48e', a: '0.6' },
    { n: ['mute', 'speaker with cancellation stroke'], u: '1f507', a: '1.0' },
    { n: ['speaker'], u: '1f508', a: '0.7' },
    { n: ['sound', 'speaker with one sound wave'], u: '1f509', a: '1.0' },
    {
      n: ['loud sound', 'speaker with three sound waves'],
      u: '1f50a',
      a: '0.6',
    },
    { n: ['loudspeaker', 'public address loudspeaker'], u: '1f4e2', a: '0.6' },
    { n: ['mega', 'cheering megaphone'], u: '1f4e3', a: '0.6' },
    { n: ['postal horn'], u: '1f4ef', a: '1.0' },
    { n: ['bell'], u: '1f514', a: '0.6' },
    { n: ['no bell', 'bell with cancellation stroke'], u: '1f515', a: '1.0' },
    { n: ['musical score'], u: '1f3bc', a: '0.6' },
    { n: ['musical note'], u: '1f3b5', a: '0.6' },
    { n: ['notes', 'multiple musical notes'], u: '1f3b6', a: '0.6' },
    { n: ['studio microphone'], u: '1f399-fe0f', a: '0.7' },
    { n: ['level slider'], u: '1f39a-fe0f', a: '0.7' },
    { n: ['control knobs'], u: '1f39b-fe0f', a: '0.7' },
    { n: ['microphone'], u: '1f3a4', a: '0.6' },
    { n: ['headphone', 'headphones'], u: '1f3a7', a: '0.6' },
    { n: ['radio'], u: '1f4fb', a: '0.6' },
    { n: ['saxophone'], u: '1f3b7', a: '0.6' },
    { n: ['accordion'], u: '1fa97', a: '13.0' },
    { n: ['guitar'], u: '1f3b8', a: '0.6' },
    { n: ['musical keyboard'], u: '1f3b9', a: '0.6' },
    { n: ['trumpet'], u: '1f3ba', a: '0.6' },
    { n: ['violin'], u: '1f3bb', a: '0.6' },
    { n: ['banjo'], u: '1fa95', a: '12.0' },
    { n: ['drum with drumsticks'], u: '1f941', a: '3.0' },
    { n: ['long drum'], u: '1fa98', a: '13.0' },
    { n: ['maracas'], u: '1fa87', a: '15.0' },
    { n: ['flute'], u: '1fa88', a: '15.0' },
    { n: ['iphone', 'mobile phone'], u: '1f4f1', a: '0.6' },
    {
      n: ['calling', 'mobile phone with rightwards arrow at left'],
      u: '1f4f2',
      a: '0.6',
    },
    { n: ['phone', 'telephone', 'black telephone'], u: '260e-fe0f', a: '0.6' },
    { n: ['telephone receiver'], u: '1f4de', a: '0.6' },
    { n: ['pager'], u: '1f4df', a: '0.6' },
    { n: ['fax', 'fax machine'], u: '1f4e0', a: '0.6' },
    { n: ['battery'], u: '1f50b', a: '0.6' },
    { n: ['low battery'], u: '1faab', a: '14.0' },
    { n: ['electric plug'], u: '1f50c', a: '0.6' },
    { n: ['computer', 'personal computer'], u: '1f4bb', a: '0.6' },
    { n: ['desktop computer'], u: '1f5a5-fe0f', a: '0.7' },
    { n: ['printer'], u: '1f5a8-fe0f', a: '0.7' },
    { n: ['keyboard'], u: '2328-fe0f', a: '1.0' },
    { n: ['computer mouse', 'three button mouse'], u: '1f5b1-fe0f', a: '0.7' },
    { n: ['trackball'], u: '1f5b2-fe0f', a: '0.7' },
    { n: ['minidisc'], u: '1f4bd', a: '0.6' },
    { n: ['floppy disk'], u: '1f4be', a: '0.6' },
    { n: ['cd', 'optical disc'], u: '1f4bf', a: '0.6' },
    { n: ['dvd'], u: '1f4c0', a: '0.6' },
    { n: ['abacus'], u: '1f9ee', a: '11.0' },
    { n: ['movie camera'], u: '1f3a5', a: '0.6' },
    { n: ['film frames'], u: '1f39e-fe0f', a: '0.7' },
    { n: ['film projector'], u: '1f4fd-fe0f', a: '0.7' },
    { n: ['clapper', 'clapper board'], u: '1f3ac', a: '0.6' },
    { n: ['tv', 'television'], u: '1f4fa', a: '0.6' },
    { n: ['camera'], u: '1f4f7', a: '0.6' },
    { n: ['camera with flash'], u: '1f4f8', a: '1.0' },
    { n: ['video camera'], u: '1f4f9', a: '0.6' },
    { n: ['vhs', 'videocassette'], u: '1f4fc', a: '0.6' },
    { n: ['mag', 'left-pointing magnifying glass'], u: '1f50d', a: '0.6' },
    {
      n: ['mag right', 'right-pointing magnifying glass'],
      u: '1f50e',
      a: '0.6',
    },
    { n: ['candle'], u: '1f56f-fe0f', a: '0.7' },
    { n: ['bulb', 'electric light bulb'], u: '1f4a1', a: '0.6' },
    { n: ['flashlight', 'electric torch'], u: '1f526', a: '0.6' },
    { n: ['lantern', 'izakaya lantern'], u: '1f3ee', a: '0.6' },
    { n: ['diya lamp'], u: '1fa94', a: '12.0' },
    { n: ['notebook with decorative cover'], u: '1f4d4', a: '0.6' },
    { n: ['closed book'], u: '1f4d5', a: '0.6' },
    { n: ['book', 'open book'], u: '1f4d6', a: '0.6' },
    { n: ['green book'], u: '1f4d7', a: '0.6' },
    { n: ['blue book'], u: '1f4d8', a: '0.6' },
    { n: ['orange book'], u: '1f4d9', a: '0.6' },
    { n: ['books'], u: '1f4da', a: '0.6' },
    { n: ['notebook'], u: '1f4d3', a: '0.6' },
    { n: ['ledger'], u: '1f4d2', a: '0.6' },
    { n: ['page with curl'], u: '1f4c3', a: '0.6' },
    { n: ['scroll'], u: '1f4dc', a: '0.6' },
    { n: ['page facing up'], u: '1f4c4', a: '0.6' },
    { n: ['newspaper'], u: '1f4f0', a: '0.6' },
    {
      n: ['rolled-up newspaper', 'rolled up newspaper'],
      u: '1f5de-fe0f',
      a: '0.7',
    },
    { n: ['bookmark tabs'], u: '1f4d1', a: '0.6' },
    { n: ['bookmark'], u: '1f516', a: '0.6' },
    { n: ['label'], u: '1f3f7-fe0f', a: '0.7' },
    { n: ['moneybag', 'money bag'], u: '1f4b0', a: '0.6' },
    { n: ['coin'], u: '1fa99', a: '13.0' },
    { n: ['yen', 'banknote with yen sign'], u: '1f4b4', a: '0.6' },
    { n: ['dollar', 'banknote with dollar sign'], u: '1f4b5', a: '0.6' },
    { n: ['euro', 'banknote with euro sign'], u: '1f4b6', a: '1.0' },
    { n: ['pound', 'banknote with pound sign'], u: '1f4b7', a: '1.0' },
    { n: ['money with wings'], u: '1f4b8', a: '0.6' },
    { n: ['credit card'], u: '1f4b3', a: '0.6' },
    { n: ['receipt'], u: '1f9fe', a: '11.0' },
    {
      n: ['chart', 'chart with upwards trend and yen sign'],
      u: '1f4b9',
      a: '0.6',
    },
    { n: ['email', 'envelope'], u: '2709-fe0f', a: '0.6' },
    { n: ['e-mail', 'e-mail symbol'], u: '1f4e7', a: '0.6' },
    { n: ['incoming envelope'], u: '1f4e8', a: '0.6' },
    {
      n: ['envelope with arrow', 'envelope with downwards arrow above'],
      u: '1f4e9',
      a: '0.6',
    },
    { n: ['outbox tray'], u: '1f4e4', a: '0.6' },
    { n: ['inbox tray'], u: '1f4e5', a: '0.6' },
    { n: ['package'], u: '1f4e6', a: '0.6' },
    { n: ['mailbox', 'closed mailbox with raised flag'], u: '1f4eb', a: '0.6' },
    {
      n: ['mailbox closed', 'closed mailbox with lowered flag'],
      u: '1f4ea',
      a: '0.6',
    },
    {
      n: ['mailbox with mail', 'open mailbox with raised flag'],
      u: '1f4ec',
      a: '0.7',
    },
    {
      n: ['mailbox with no mail', 'open mailbox with lowered flag'],
      u: '1f4ed',
      a: '0.7',
    },
    { n: ['postbox'], u: '1f4ee', a: '0.6' },
    { n: ['ballot box with ballot'], u: '1f5f3-fe0f', a: '0.7' },
    { n: ['pencil', 'pencil2'], u: '270f-fe0f', a: '0.6' },
    { n: ['black nib'], u: '2712-fe0f', a: '0.6' },
    {
      n: ['fountain pen', 'lower left fountain pen'],
      u: '1f58b-fe0f',
      a: '0.7',
    },
    { n: ['pen', 'lower left ballpoint pen'], u: '1f58a-fe0f', a: '0.7' },
    { n: ['paintbrush', 'lower left paintbrush'], u: '1f58c-fe0f', a: '0.7' },
    { n: ['crayon', 'lower left crayon'], u: '1f58d-fe0f', a: '0.7' },
    { n: ['memo', 'pencil'], u: '1f4dd', a: '0.6' },
    { n: ['briefcase'], u: '1f4bc', a: '0.6' },
    { n: ['file folder'], u: '1f4c1', a: '0.6' },
    { n: ['open file folder'], u: '1f4c2', a: '0.6' },
    { n: ['card index dividers'], u: '1f5c2-fe0f', a: '0.7' },
    { n: ['date', 'calendar'], u: '1f4c5', a: '0.6' },
    { n: ['calendar', 'tear-off calendar'], u: '1f4c6', a: '0.6' },
    { n: ['spiral notepad', 'spiral note pad'], u: '1f5d2-fe0f', a: '0.7' },
    {
      n: ['spiral calendar', 'spiral calendar pad'],
      u: '1f5d3-fe0f',
      a: '0.7',
    },
    { n: ['card index'], u: '1f4c7', a: '0.6' },
    { n: ['chart with upwards trend'], u: '1f4c8', a: '0.6' },
    { n: ['chart with downwards trend'], u: '1f4c9', a: '0.6' },
    { n: ['bar chart'], u: '1f4ca', a: '0.6' },
    { n: ['clipboard'], u: '1f4cb', a: '0.6' },
    { n: ['pushpin'], u: '1f4cc', a: '0.6' },
    { n: ['round pushpin'], u: '1f4cd', a: '0.6' },
    { n: ['paperclip'], u: '1f4ce', a: '0.6' },
    { n: ['linked paperclips'], u: '1f587-fe0f', a: '0.7' },
    { n: ['straight ruler'], u: '1f4cf', a: '0.6' },
    { n: ['triangular ruler'], u: '1f4d0', a: '0.6' },
    { n: ['scissors', 'black scissors'], u: '2702-fe0f', a: '0.6' },
    { n: ['card file box'], u: '1f5c3-fe0f', a: '0.7' },
    { n: ['file cabinet'], u: '1f5c4-fe0f', a: '0.7' },
    { n: ['wastebasket'], u: '1f5d1-fe0f', a: '0.7' },
    { n: ['lock'], u: '1f512', a: '0.6' },
    { n: ['unlock', 'open lock'], u: '1f513', a: '0.6' },
    { n: ['lock with ink pen'], u: '1f50f', a: '0.6' },
    { n: ['closed lock with key'], u: '1f510', a: '0.6' },
    { n: ['key'], u: '1f511', a: '0.6' },
    { n: ['old key'], u: '1f5dd-fe0f', a: '0.7' },
    { n: ['hammer'], u: '1f528', a: '0.6' },
    { n: ['axe'], u: '1fa93', a: '12.0' },
    { n: ['pick'], u: '26cf-fe0f', a: '0.7' },
    { n: ['hammer and pick'], u: '2692-fe0f', a: '1.0' },
    { n: ['hammer and wrench'], u: '1f6e0-fe0f', a: '0.7' },
    { n: ['dagger', 'dagger knife'], u: '1f5e1-fe0f', a: '0.7' },
    { n: ['crossed swords'], u: '2694-fe0f', a: '1.0' },
    { n: ['bomb'], u: '1f4a3', a: '0.6' },
    { n: ['boomerang'], u: '1fa83', a: '13.0' },
    { n: ['bow and arrow'], u: '1f3f9', a: '1.0' },
    { n: ['shield'], u: '1f6e1-fe0f', a: '0.7' },
    { n: ['carpentry saw'], u: '1fa9a', a: '13.0' },
    { n: ['wrench'], u: '1f527', a: '0.6' },
    { n: ['screwdriver'], u: '1fa9b', a: '13.0' },
    { n: ['nut and bolt'], u: '1f529', a: '0.6' },
    { n: ['gear'], u: '2699-fe0f', a: '1.0' },
    { n: ['clamp', 'compression'], u: '1f5dc-fe0f', a: '0.7' },
    { n: ['scales', 'balance scale'], u: '2696-fe0f', a: '1.0' },
    { n: ['probing cane'], u: '1f9af', a: '12.0' },
    { n: ['link', 'link symbol'], u: '1f517', a: '0.6' },
    { n: ['broken chain'], u: '26d3-fe0f-200d-1f4a5', a: '15.1' },
    { n: ['chains'], u: '26d3-fe0f', a: '0.7' },
    { n: ['hook'], u: '1fa9d', a: '13.0' },
    { n: ['toolbox'], u: '1f9f0', a: '11.0' },
    { n: ['magnet'], u: '1f9f2', a: '11.0' },
    { n: ['ladder'], u: '1fa9c', a: '13.0' },
    { n: ['alembic'], u: '2697-fe0f', a: '1.0' },
    { n: ['test tube'], u: '1f9ea', a: '11.0' },
    { n: ['petri dish'], u: '1f9eb', a: '11.0' },
    { n: ['dna', 'dna double helix'], u: '1f9ec', a: '11.0' },
    { n: ['microscope'], u: '1f52c', a: '1.0' },
    { n: ['telescope'], u: '1f52d', a: '1.0' },
    { n: ['satellite antenna'], u: '1f4e1', a: '0.6' },
    { n: ['syringe'], u: '1f489', a: '0.6' },
    { n: ['drop of blood'], u: '1fa78', a: '12.0' },
    { n: ['pill'], u: '1f48a', a: '0.6' },
    { n: ['adhesive bandage'], u: '1fa79', a: '12.0' },
    { n: ['crutch'], u: '1fa7c', a: '14.0' },
    { n: ['stethoscope'], u: '1fa7a', a: '12.0' },
    { n: ['x-ray'], u: '1fa7b', a: '14.0' },
    { n: ['door'], u: '1f6aa', a: '0.6' },
    { n: ['elevator'], u: '1f6d7', a: '13.0' },
    { n: ['mirror'], u: '1fa9e', a: '13.0' },
    { n: ['window'], u: '1fa9f', a: '13.0' },
    { n: ['bed'], u: '1f6cf-fe0f', a: '0.7' },
    { n: ['couch and lamp'], u: '1f6cb-fe0f', a: '0.7' },
    { n: ['chair'], u: '1fa91', a: '12.0' },
    { n: ['toilet'], u: '1f6bd', a: '0.6' },
    { n: ['plunger'], u: '1faa0', a: '13.0' },
    { n: ['shower'], u: '1f6bf', a: '1.0' },
    { n: ['bathtub'], u: '1f6c1', a: '1.0' },
    { n: ['mouse trap'], u: '1faa4', a: '13.0' },
    { n: ['razor'], u: '1fa92', a: '12.0' },
    { n: ['lotion bottle'], u: '1f9f4', a: '11.0' },
    { n: ['safety pin'], u: '1f9f7', a: '11.0' },
    { n: ['broom'], u: '1f9f9', a: '11.0' },
    { n: ['basket'], u: '1f9fa', a: '11.0' },
    { n: ['roll of paper'], u: '1f9fb', a: '11.0' },
    { n: ['bucket'], u: '1faa3', a: '13.0' },
    { n: ['soap', 'bar of soap'], u: '1f9fc', a: '11.0' },
    { n: ['bubbles'], u: '1fae7', a: '14.0' },
    { n: ['toothbrush'], u: '1faa5', a: '13.0' },
    { n: ['sponge'], u: '1f9fd', a: '11.0' },
    { n: ['fire extinguisher'], u: '1f9ef', a: '11.0' },
    { n: ['shopping trolley'], u: '1f6d2', a: '3.0' },
    { n: ['smoking', 'smoking symbol'], u: '1f6ac', a: '0.6' },
    { n: ['coffin'], u: '26b0-fe0f', a: '1.0' },
    { n: ['headstone'], u: '1faa6', a: '13.0' },
    { n: ['funeral urn'], u: '26b1-fe0f', a: '1.0' },
    { n: ['nazar amulet'], u: '1f9ff', a: '11.0' },
    { n: ['hamsa'], u: '1faac', a: '14.0' },
    { n: ['moyai'], u: '1f5ff', a: '0.6' },
    { n: ['placard'], u: '1faa7', a: '13.0' },
    { n: ['identification card'], u: '1faaa', a: '14.0' },
  ],
  Tm = [
    { n: ['atm', 'automated teller machine'], u: '1f3e7', a: '0.6' },
    {
      n: ['put litter in its place', 'put litter in its place symbol'],
      u: '1f6ae',
      a: '1.0',
    },
    { n: ['potable water', 'potable water symbol'], u: '1f6b0', a: '1.0' },
    { n: ['wheelchair', 'wheelchair symbol'], u: '267f', a: '0.6' },
    { n: ['mens', 'mens symbol'], u: '1f6b9', a: '0.6' },
    { n: ['womens', 'womens symbol'], u: '1f6ba', a: '0.6' },
    { n: ['restroom'], u: '1f6bb', a: '0.6' },
    { n: ['baby symbol'], u: '1f6bc', a: '0.6' },
    { n: ['wc', 'water closet'], u: '1f6be', a: '0.6' },
    { n: ['passport control'], u: '1f6c2', a: '1.0' },
    { n: ['customs'], u: '1f6c3', a: '1.0' },
    { n: ['baggage claim'], u: '1f6c4', a: '1.0' },
    { n: ['left luggage'], u: '1f6c5', a: '1.0' },
    { n: ['warning', 'warning sign'], u: '26a0-fe0f', a: '0.6' },
    { n: ['children crossing'], u: '1f6b8', a: '1.0' },
    { n: ['no entry'], u: '26d4', a: '0.6' },
    { n: ['no entry sign'], u: '1f6ab', a: '0.6' },
    { n: ['no bicycles'], u: '1f6b3', a: '1.0' },
    { n: ['no smoking', 'no smoking symbol'], u: '1f6ad', a: '0.6' },
    { n: ['do not litter', 'do not litter symbol'], u: '1f6af', a: '1.0' },
    {
      n: ['non-potable water', 'non-potable water symbol'],
      u: '1f6b1',
      a: '1.0',
    },
    { n: ['no pedestrians'], u: '1f6b7', a: '1.0' },
    { n: ['no mobile phones'], u: '1f4f5', a: '1.0' },
    { n: ['underage', 'no one under eighteen symbol'], u: '1f51e', a: '0.6' },
    { n: ['radioactive', 'radioactive sign'], u: '2622-fe0f', a: '1.0' },
    { n: ['biohazard', 'biohazard sign'], u: '2623-fe0f', a: '1.0' },
    { n: ['arrow up', 'upwards black arrow'], u: '2b06-fe0f', a: '0.6' },
    { n: ['north east arrow', 'arrow upper right'], u: '2197-fe0f', a: '0.6' },
    { n: ['arrow right', 'black rightwards arrow'], u: '27a1-fe0f', a: '0.6' },
    { n: ['south east arrow', 'arrow lower right'], u: '2198-fe0f', a: '0.6' },
    { n: ['arrow down', 'downwards black arrow'], u: '2b07-fe0f', a: '0.6' },
    { n: ['south west arrow', 'arrow lower left'], u: '2199-fe0f', a: '0.6' },
    { n: ['arrow left', 'leftwards black arrow'], u: '2b05-fe0f', a: '0.6' },
    { n: ['north west arrow', 'arrow upper left'], u: '2196-fe0f', a: '0.6' },
    { n: ['up down arrow', 'arrow up down'], u: '2195-fe0f', a: '0.6' },
    { n: ['left right arrow'], u: '2194-fe0f', a: '0.6' },
    { n: ['leftwards arrow with hook'], u: '21a9-fe0f', a: '0.6' },
    {
      n: ['arrow right hook', 'rightwards arrow with hook'],
      u: '21aa-fe0f',
      a: '0.6',
    },
    {
      n: ['arrow heading up', 'arrow pointing rightwards then curving upwards'],
      u: '2934-fe0f',
      a: '0.6',
    },
    {
      n: [
        'arrow heading down',
        'arrow pointing rightwards then curving downwards',
      ],
      u: '2935-fe0f',
      a: '0.6',
    },
    {
      n: [
        'arrows clockwise',
        'clockwise downwards and upwards open circle arrows',
      ],
      u: '1f503',
      a: '0.6',
    },
    {
      n: [
        'arrows counterclockwise',
        'anticlockwise downwards and upwards open circle arrows',
      ],
      u: '1f504',
      a: '1.0',
    },
    { n: ['back', 'back with leftwards arrow above'], u: '1f519', a: '0.6' },
    { n: ['end', 'end with leftwards arrow above'], u: '1f51a', a: '0.6' },
    {
      n: ['on', 'on with exclamation mark with left right arrow above'],
      u: '1f51b',
      a: '0.6',
    },
    { n: ['soon', 'soon with rightwards arrow above'], u: '1f51c', a: '0.6' },
    { n: ['top', 'top with upwards arrow above'], u: '1f51d', a: '0.6' },
    { n: ['place of worship'], u: '1f6d0', a: '1.0' },
    { n: ['atom symbol'], u: '269b-fe0f', a: '1.0' },
    { n: ['om', 'om symbol'], u: '1f549-fe0f', a: '0.7' },
    { n: ['star of david'], u: '2721-fe0f', a: '0.7' },
    { n: ['wheel of dharma'], u: '2638-fe0f', a: '0.7' },
    { n: ['yin yang'], u: '262f-fe0f', a: '0.7' },
    { n: ['latin cross'], u: '271d-fe0f', a: '0.7' },
    { n: ['orthodox cross'], u: '2626-fe0f', a: '1.0' },
    { n: ['star and crescent'], u: '262a-fe0f', a: '0.7' },
    { n: ['peace symbol'], u: '262e-fe0f', a: '1.0' },
    { n: ['menorah with nine branches'], u: '1f54e', a: '1.0' },
    {
      n: ['six pointed star', 'six pointed star with middle dot'],
      u: '1f52f',
      a: '0.6',
    },
    { n: ['khanda'], u: '1faaf', a: '15.0' },
    { n: ['aries'], u: '2648', a: '0.6' },
    { n: ['taurus'], u: '2649', a: '0.6' },
    { n: ['gemini'], u: '264a', a: '0.6' },
    { n: ['cancer'], u: '264b', a: '0.6' },
    { n: ['leo'], u: '264c', a: '0.6' },
    { n: ['virgo'], u: '264d', a: '0.6' },
    { n: ['libra'], u: '264e', a: '0.6' },
    { n: ['scorpius'], u: '264f', a: '0.6' },
    { n: ['sagittarius'], u: '2650', a: '0.6' },
    { n: ['capricorn'], u: '2651', a: '0.6' },
    { n: ['aquarius'], u: '2652', a: '0.6' },
    { n: ['pisces'], u: '2653', a: '0.6' },
    { n: ['ophiuchus'], u: '26ce', a: '0.6' },
    { n: ['twisted rightwards arrows'], u: '1f500', a: '1.0' },
    {
      n: ['repeat', 'clockwise rightwards and leftwards open circle arrows'],
      u: '1f501',
      a: '1.0',
    },
    {
      n: [
        'repeat one',
        'clockwise rightwards and leftwards open circle arrows with circled one overlay',
      ],
      u: '1f502',
      a: '1.0',
    },
    {
      n: ['arrow forward', 'black right-pointing triangle'],
      u: '25b6-fe0f',
      a: '0.6',
    },
    {
      n: ['fast forward', 'black right-pointing double triangle'],
      u: '23e9',
      a: '0.6',
    },
    {
      n: [
        'next track button',
        'black right pointing double triangle with vertical bar',
      ],
      u: '23ed-fe0f',
      a: '0.7',
    },
    {
      n: [
        'play or pause button',
        'black right pointing triangle with double vertical bar',
      ],
      u: '23ef-fe0f',
      a: '1.0',
    },
    {
      n: ['arrow backward', 'black left-pointing triangle'],
      u: '25c0-fe0f',
      a: '0.6',
    },
    {
      n: ['rewind', 'black left-pointing double triangle'],
      u: '23ea',
      a: '0.6',
    },
    {
      n: [
        'last track button',
        'black left pointing double triangle with vertical bar',
      ],
      u: '23ee-fe0f',
      a: '0.7',
    },
    {
      n: ['arrow up small', 'up-pointing small red triangle'],
      u: '1f53c',
      a: '0.6',
    },
    {
      n: ['arrow double up', 'black up-pointing double triangle'],
      u: '23eb',
      a: '0.6',
    },
    {
      n: ['arrow down small', 'down-pointing small red triangle'],
      u: '1f53d',
      a: '0.6',
    },
    {
      n: ['arrow double down', 'black down-pointing double triangle'],
      u: '23ec',
      a: '0.6',
    },
    { n: ['pause button', 'double vertical bar'], u: '23f8-fe0f', a: '0.7' },
    { n: ['stop button', 'black square for stop'], u: '23f9-fe0f', a: '0.7' },
    {
      n: ['record button', 'black circle for record'],
      u: '23fa-fe0f',
      a: '0.7',
    },
    { n: ['eject', 'eject button'], u: '23cf-fe0f', a: '1.0' },
    { n: ['cinema'], u: '1f3a6', a: '0.6' },
    { n: ['low brightness', 'low brightness symbol'], u: '1f505', a: '1.0' },
    { n: ['high brightness', 'high brightness symbol'], u: '1f506', a: '1.0' },
    { n: ['signal strength', 'antenna with bars'], u: '1f4f6', a: '0.6' },
    { n: ['wireless'], u: '1f6dc', a: '15.0' },
    { n: ['vibration mode'], u: '1f4f3', a: '0.6' },
    { n: ['mobile phone off'], u: '1f4f4', a: '0.6' },
    { n: ['female sign'], u: '2640-fe0f', a: '4.0' },
    { n: ['male sign'], u: '2642-fe0f', a: '4.0' },
    { n: ['transgender symbol'], u: '26a7-fe0f', a: '13.0' },
    { n: ['heavy multiplication x'], u: '2716-fe0f', a: '0.6' },
    { n: ['heavy plus sign'], u: '2795', a: '0.6' },
    { n: ['heavy minus sign'], u: '2796', a: '0.6' },
    { n: ['heavy division sign'], u: '2797', a: '0.6' },
    { n: ['heavy equals sign'], u: '1f7f0', a: '14.0' },
    { n: ['infinity'], u: '267e-fe0f', a: '11.0' },
    { n: ['bangbang', 'double exclamation mark'], u: '203c-fe0f', a: '0.6' },
    {
      n: ['interrobang', 'exclamation question mark'],
      u: '2049-fe0f',
      a: '0.6',
    },
    { n: ['question', 'black question mark ornament'], u: '2753', a: '0.6' },
    {
      n: ['grey question', 'white question mark ornament'],
      u: '2754',
      a: '0.6',
    },
    {
      n: ['grey exclamation', 'white exclamation mark ornament'],
      u: '2755',
      a: '0.6',
    },
    {
      n: [
        'exclamation',
        'heavy exclamation mark',
        'heavy exclamation mark symbol',
      ],
      u: '2757',
      a: '0.6',
    },
    { n: ['wavy dash'], u: '3030-fe0f', a: '0.6' },
    { n: ['currency exchange'], u: '1f4b1', a: '0.6' },
    { n: ['heavy dollar sign'], u: '1f4b2', a: '0.6' },
    { n: ['medical symbol', 'staff of aesculapius'], u: '2695-fe0f', a: '4.0' },
    {
      n: ['recycle', 'black universal recycling symbol'],
      u: '267b-fe0f',
      a: '0.6',
    },
    { n: ['fleur-de-lis', 'fleur de lis'], u: '269c-fe0f', a: '1.0' },
    { n: ['trident', 'trident emblem'], u: '1f531', a: '0.6' },
    { n: ['name badge'], u: '1f4db', a: '0.6' },
    { n: ['beginner', 'japanese symbol for beginner'], u: '1f530', a: '0.6' },
    { n: ['o', 'heavy large circle'], u: '2b55', a: '0.6' },
    { n: ['white check mark', 'white heavy check mark'], u: '2705', a: '0.6' },
    { n: ['ballot box with check'], u: '2611-fe0f', a: '0.6' },
    { n: ['heavy check mark'], u: '2714-fe0f', a: '0.6' },
    { n: ['x', 'cross mark'], u: '274c', a: '0.6' },
    { n: ['negative squared cross mark'], u: '274e', a: '0.6' },
    { n: ['curly loop'], u: '27b0', a: '0.6' },
    { n: ['loop', 'double curly loop'], u: '27bf', a: '1.0' },
    { n: ['part alternation mark'], u: '303d-fe0f', a: '0.6' },
    { n: ['eight spoked asterisk'], u: '2733-fe0f', a: '0.6' },
    { n: ['eight pointed black star'], u: '2734-fe0f', a: '0.6' },
    { n: ['sparkle'], u: '2747-fe0f', a: '0.6' },
    { n: ['copyright', 'copyright sign'], u: '00a9-fe0f', a: '0.6' },
    { n: ['registered', 'registered sign'], u: '00ae-fe0f', a: '0.6' },
    { n: ['tm', 'trade mark sign'], u: '2122-fe0f', a: '0.6' },
    { n: ['hash', 'hash key'], u: '0023-fe0f-20e3', a: '0.6' },
    { n: ['keycap: *', 'keycap star'], u: '002a-fe0f-20e3', a: '2.0' },
    { n: ['zero', 'keycap 0'], u: '0030-fe0f-20e3', a: '0.6' },
    { n: ['one', 'keycap 1'], u: '0031-fe0f-20e3', a: '0.6' },
    { n: ['two', 'keycap 2'], u: '0032-fe0f-20e3', a: '0.6' },
    { n: ['three', 'keycap 3'], u: '0033-fe0f-20e3', a: '0.6' },
    { n: ['four', 'keycap 4'], u: '0034-fe0f-20e3', a: '0.6' },
    { n: ['five', 'keycap 5'], u: '0035-fe0f-20e3', a: '0.6' },
    { n: ['six', 'keycap 6'], u: '0036-fe0f-20e3', a: '0.6' },
    { n: ['seven', 'keycap 7'], u: '0037-fe0f-20e3', a: '0.6' },
    { n: ['eight', 'keycap 8'], u: '0038-fe0f-20e3', a: '0.6' },
    { n: ['nine', 'keycap 9'], u: '0039-fe0f-20e3', a: '0.6' },
    { n: ['keycap ten'], u: '1f51f', a: '0.6' },
    {
      n: ['capital abcd', 'input symbol for latin capital letters'],
      u: '1f520',
      a: '0.6',
    },
    {
      n: ['abcd', 'input symbol for latin small letters'],
      u: '1f521',
      a: '0.6',
    },
    { n: ['1234', 'input symbol for numbers'], u: '1f522', a: '0.6' },
    { n: ['symbols', 'input symbol for symbols'], u: '1f523', a: '0.6' },
    { n: ['abc', 'input symbol for latin letters'], u: '1f524', a: '0.6' },
    {
      n: ['a', 'negative squared latin capital letter a'],
      u: '1f170-fe0f',
      a: '0.6',
    },
    { n: ['ab', 'negative squared ab'], u: '1f18e', a: '0.6' },
    {
      n: ['b', 'negative squared latin capital letter b'],
      u: '1f171-fe0f',
      a: '0.6',
    },
    { n: ['cl', 'squared cl'], u: '1f191', a: '0.6' },
    { n: ['cool', 'squared cool'], u: '1f192', a: '0.6' },
    { n: ['free', 'squared free'], u: '1f193', a: '0.6' },
    { n: ['information source'], u: '2139-fe0f', a: '0.6' },
    { n: ['id', 'squared id'], u: '1f194', a: '0.6' },
    { n: ['m', 'circled latin capital letter m'], u: '24c2-fe0f', a: '0.6' },
    { n: ['new', 'squared new'], u: '1f195', a: '0.6' },
    { n: ['ng', 'squared ng'], u: '1f196', a: '0.6' },
    {
      n: ['o2', 'negative squared latin capital letter o'],
      u: '1f17e-fe0f',
      a: '0.6',
    },
    { n: ['ok', 'squared ok'], u: '1f197', a: '0.6' },
    {
      n: ['parking', 'negative squared latin capital letter p'],
      u: '1f17f-fe0f',
      a: '0.6',
    },
    { n: ['sos', 'squared sos'], u: '1f198', a: '0.6' },
    { n: ['up', 'squared up with exclamation mark'], u: '1f199', a: '0.6' },
    { n: ['vs', 'squared vs'], u: '1f19a', a: '0.6' },
    { n: ['koko', 'squared katakana koko'], u: '1f201', a: '0.6' },
    { n: ['sa', 'squared katakana sa'], u: '1f202-fe0f', a: '0.6' },
    {
      n: ['u6708', 'squared cjk unified ideograph-6708'],
      u: '1f237-fe0f',
      a: '0.6',
    },
    {
      n: ['u6709', 'squared cjk unified ideograph-6709'],
      u: '1f236',
      a: '0.6',
    },
    {
      n: ['u6307', 'squared cjk unified ideograph-6307'],
      u: '1f22f',
      a: '0.6',
    },
    {
      n: ['ideograph advantage', 'circled ideograph advantage'],
      u: '1f250',
      a: '0.6',
    },
    {
      n: ['u5272', 'squared cjk unified ideograph-5272'],
      u: '1f239',
      a: '0.6',
    },
    {
      n: ['u7121', 'squared cjk unified ideograph-7121'],
      u: '1f21a',
      a: '0.6',
    },
    {
      n: ['u7981', 'squared cjk unified ideograph-7981'],
      u: '1f232',
      a: '0.6',
    },
    { n: ['accept', 'circled ideograph accept'], u: '1f251', a: '0.6' },
    {
      n: ['u7533', 'squared cjk unified ideograph-7533'],
      u: '1f238',
      a: '0.6',
    },
    {
      n: ['u5408', 'squared cjk unified ideograph-5408'],
      u: '1f234',
      a: '0.6',
    },
    {
      n: ['u7a7a', 'squared cjk unified ideograph-7a7a'],
      u: '1f233',
      a: '0.6',
    },
    {
      n: ['congratulations', 'circled ideograph congratulation'],
      u: '3297-fe0f',
      a: '0.6',
    },
    { n: ['secret', 'circled ideograph secret'], u: '3299-fe0f', a: '0.6' },
    {
      n: ['u55b6', 'squared cjk unified ideograph-55b6'],
      u: '1f23a',
      a: '0.6',
    },
    {
      n: ['u6e80', 'squared cjk unified ideograph-6e80'],
      u: '1f235',
      a: '0.6',
    },
    { n: ['red circle', 'large red circle'], u: '1f534', a: '0.6' },
    { n: ['large orange circle'], u: '1f7e0', a: '12.0' },
    { n: ['large yellow circle'], u: '1f7e1', a: '12.0' },
    { n: ['large green circle'], u: '1f7e2', a: '12.0' },
    { n: ['large blue circle'], u: '1f535', a: '0.6' },
    { n: ['large purple circle'], u: '1f7e3', a: '12.0' },
    { n: ['large brown circle'], u: '1f7e4', a: '12.0' },
    { n: ['black circle', 'medium black circle'], u: '26ab', a: '0.6' },
    { n: ['white circle', 'medium white circle'], u: '26aa', a: '0.6' },
    { n: ['large red square'], u: '1f7e5', a: '12.0' },
    { n: ['large orange square'], u: '1f7e7', a: '12.0' },
    { n: ['large yellow square'], u: '1f7e8', a: '12.0' },
    { n: ['large green square'], u: '1f7e9', a: '12.0' },
    { n: ['large blue square'], u: '1f7e6', a: '12.0' },
    { n: ['large purple square'], u: '1f7ea', a: '12.0' },
    { n: ['large brown square'], u: '1f7eb', a: '12.0' },
    { n: ['black large square'], u: '2b1b', a: '0.6' },
    { n: ['white large square'], u: '2b1c', a: '0.6' },
    { n: ['black medium square'], u: '25fc-fe0f', a: '0.6' },
    { n: ['white medium square'], u: '25fb-fe0f', a: '0.6' },
    { n: ['black medium small square'], u: '25fe', a: '0.6' },
    { n: ['white medium small square'], u: '25fd', a: '0.6' },
    { n: ['black small square'], u: '25aa-fe0f', a: '0.6' },
    { n: ['white small square'], u: '25ab-fe0f', a: '0.6' },
    { n: ['large orange diamond'], u: '1f536', a: '0.6' },
    { n: ['large blue diamond'], u: '1f537', a: '0.6' },
    { n: ['small orange diamond'], u: '1f538', a: '0.6' },
    { n: ['small blue diamond'], u: '1f539', a: '0.6' },
    {
      n: ['small red triangle', 'up-pointing red triangle'],
      u: '1f53a',
      a: '0.6',
    },
    {
      n: ['small red triangle down', 'down-pointing red triangle'],
      u: '1f53b',
      a: '0.6',
    },
    { n: ['diamond shape with a dot inside'], u: '1f4a0', a: '0.6' },
    { n: ['radio button'], u: '1f518', a: '0.6' },
    { n: ['white square button'], u: '1f533', a: '0.6' },
    { n: ['black square button'], u: '1f532', a: '0.6' },
  ],
  Dm = [
    { n: ['chequered flag', 'checkered flag'], u: '1f3c1', a: '0.6' },
    { n: ['triangular flag on post'], u: '1f6a9', a: '0.6' },
    { n: ['crossed flags'], u: '1f38c', a: '0.6' },
    { n: ['waving black flag'], u: '1f3f4', a: '1.0' },
    { n: ['white flag', 'waving white flag'], u: '1f3f3-fe0f', a: '0.7' },
    {
      n: ['rainbow flag', 'rainbow-flag'],
      u: '1f3f3-fe0f-200d-1f308',
      a: '4.0',
    },
    { n: ['transgender flag'], u: '1f3f3-fe0f-200d-26a7-fe0f', a: '13.0' },
    { n: ['pirate flag'], u: '1f3f4-200d-2620-fe0f', a: '11.0' },
    { n: ['flag-ac', 'ascension island flag'], u: '1f1e6-1f1e8', a: '2.0' },
    { n: ['flag-ad', 'andorra flag'], u: '1f1e6-1f1e9', a: '2.0' },
    { n: ['flag-ae', 'united arab emirates flag'], u: '1f1e6-1f1ea', a: '2.0' },
    { n: ['flag-af', 'afghanistan flag'], u: '1f1e6-1f1eb', a: '2.0' },
    { n: ['flag-ag', 'antigua & barbuda flag'], u: '1f1e6-1f1ec', a: '2.0' },
    { n: ['flag-ai', 'anguilla flag'], u: '1f1e6-1f1ee', a: '2.0' },
    { n: ['flag-al', 'albania flag'], u: '1f1e6-1f1f1', a: '2.0' },
    { n: ['flag-am', 'armenia flag'], u: '1f1e6-1f1f2', a: '2.0' },
    { n: ['flag-ao', 'angola flag'], u: '1f1e6-1f1f4', a: '2.0' },
    { n: ['flag-aq', 'antarctica flag'], u: '1f1e6-1f1f6', a: '2.0' },
    { n: ['flag-ar', 'argentina flag'], u: '1f1e6-1f1f7', a: '2.0' },
    { n: ['flag-as', 'american samoa flag'], u: '1f1e6-1f1f8', a: '2.0' },
    { n: ['flag-at', 'austria flag'], u: '1f1e6-1f1f9', a: '2.0' },
    { n: ['flag-au', 'australia flag'], u: '1f1e6-1f1fa', a: '2.0' },
    { n: ['flag-aw', 'aruba flag'], u: '1f1e6-1f1fc', a: '2.0' },
    { n: ['flag-ax', 'åland islands flag'], u: '1f1e6-1f1fd', a: '2.0' },
    { n: ['flag-az', 'azerbaijan flag'], u: '1f1e6-1f1ff', a: '2.0' },
    { n: ['flag-ba', 'bosnia & herzegovina flag'], u: '1f1e7-1f1e6', a: '2.0' },
    { n: ['flag-bb', 'barbados flag'], u: '1f1e7-1f1e7', a: '2.0' },
    { n: ['flag-bd', 'bangladesh flag'], u: '1f1e7-1f1e9', a: '2.0' },
    { n: ['flag-be', 'belgium flag'], u: '1f1e7-1f1ea', a: '2.0' },
    { n: ['flag-bf', 'burkina faso flag'], u: '1f1e7-1f1eb', a: '2.0' },
    { n: ['flag-bg', 'bulgaria flag'], u: '1f1e7-1f1ec', a: '2.0' },
    { n: ['flag-bh', 'bahrain flag'], u: '1f1e7-1f1ed', a: '2.0' },
    { n: ['flag-bi', 'burundi flag'], u: '1f1e7-1f1ee', a: '2.0' },
    { n: ['flag-bj', 'benin flag'], u: '1f1e7-1f1ef', a: '2.0' },
    { n: ['flag-bl', 'st. barthélemy flag'], u: '1f1e7-1f1f1', a: '2.0' },
    { n: ['flag-bm', 'bermuda flag'], u: '1f1e7-1f1f2', a: '2.0' },
    { n: ['flag-bn', 'brunei flag'], u: '1f1e7-1f1f3', a: '2.0' },
    { n: ['flag-bo', 'bolivia flag'], u: '1f1e7-1f1f4', a: '2.0' },
    {
      n: ['flag-bq', 'caribbean netherlands flag'],
      u: '1f1e7-1f1f6',
      a: '2.0',
    },
    { n: ['flag-br', 'brazil flag'], u: '1f1e7-1f1f7', a: '2.0' },
    { n: ['flag-bs', 'bahamas flag'], u: '1f1e7-1f1f8', a: '2.0' },
    { n: ['flag-bt', 'bhutan flag'], u: '1f1e7-1f1f9', a: '2.0' },
    { n: ['flag-bv', 'bouvet island flag'], u: '1f1e7-1f1fb', a: '2.0' },
    { n: ['flag-bw', 'botswana flag'], u: '1f1e7-1f1fc', a: '2.0' },
    { n: ['flag-by', 'belarus flag'], u: '1f1e7-1f1fe', a: '2.0' },
    { n: ['flag-bz', 'belize flag'], u: '1f1e7-1f1ff', a: '2.0' },
    { n: ['flag-ca', 'canada flag'], u: '1f1e8-1f1e6', a: '2.0' },
    {
      n: ['flag-cc', 'cocos (keeling) islands flag'],
      u: '1f1e8-1f1e8',
      a: '2.0',
    },
    { n: ['flag-cd', 'congo - kinshasa flag'], u: '1f1e8-1f1e9', a: '2.0' },
    {
      n: ['flag-cf', 'central african republic flag'],
      u: '1f1e8-1f1eb',
      a: '2.0',
    },
    { n: ['flag-cg', 'congo - brazzaville flag'], u: '1f1e8-1f1ec', a: '2.0' },
    { n: ['flag-ch', 'switzerland flag'], u: '1f1e8-1f1ed', a: '2.0' },
    { n: ['flag-ci', 'côte d’ivoire flag'], u: '1f1e8-1f1ee', a: '2.0' },
    { n: ['flag-ck', 'cook islands flag'], u: '1f1e8-1f1f0', a: '2.0' },
    { n: ['flag-cl', 'chile flag'], u: '1f1e8-1f1f1', a: '2.0' },
    { n: ['flag-cm', 'cameroon flag'], u: '1f1e8-1f1f2', a: '2.0' },
    { n: ['cn', 'flag-cn', 'china flag'], u: '1f1e8-1f1f3', a: '0.6' },
    { n: ['flag-co', 'colombia flag'], u: '1f1e8-1f1f4', a: '2.0' },
    { n: ['flag-cp', 'clipperton island flag'], u: '1f1e8-1f1f5', a: '2.0' },
    { n: ['flag-cr', 'costa rica flag'], u: '1f1e8-1f1f7', a: '2.0' },
    { n: ['flag-cu', 'cuba flag'], u: '1f1e8-1f1fa', a: '2.0' },
    { n: ['flag-cv', 'cape verde flag'], u: '1f1e8-1f1fb', a: '2.0' },
    { n: ['flag-cw', 'curaçao flag'], u: '1f1e8-1f1fc', a: '2.0' },
    { n: ['flag-cx', 'christmas island flag'], u: '1f1e8-1f1fd', a: '2.0' },
    { n: ['flag-cy', 'cyprus flag'], u: '1f1e8-1f1fe', a: '2.0' },
    { n: ['flag-cz', 'czechia flag'], u: '1f1e8-1f1ff', a: '2.0' },
    { n: ['de', 'flag-de', 'germany flag'], u: '1f1e9-1f1ea', a: '0.6' },
    { n: ['flag-dg', 'diego garcia flag'], u: '1f1e9-1f1ec', a: '2.0' },
    { n: ['flag-dj', 'djibouti flag'], u: '1f1e9-1f1ef', a: '2.0' },
    { n: ['flag-dk', 'denmark flag'], u: '1f1e9-1f1f0', a: '2.0' },
    { n: ['flag-dm', 'dominica flag'], u: '1f1e9-1f1f2', a: '2.0' },
    { n: ['flag-do', 'dominican republic flag'], u: '1f1e9-1f1f4', a: '2.0' },
    { n: ['flag-dz', 'algeria flag'], u: '1f1e9-1f1ff', a: '2.0' },
    { n: ['flag-ea', 'ceuta & melilla flag'], u: '1f1ea-1f1e6', a: '2.0' },
    { n: ['flag-ec', 'ecuador flag'], u: '1f1ea-1f1e8', a: '2.0' },
    { n: ['flag-ee', 'estonia flag'], u: '1f1ea-1f1ea', a: '2.0' },
    { n: ['flag-eg', 'egypt flag'], u: '1f1ea-1f1ec', a: '2.0' },
    { n: ['flag-eh', 'western sahara flag'], u: '1f1ea-1f1ed', a: '2.0' },
    { n: ['flag-er', 'eritrea flag'], u: '1f1ea-1f1f7', a: '2.0' },
    { n: ['es', 'flag-es', 'spain flag'], u: '1f1ea-1f1f8', a: '0.6' },
    { n: ['flag-et', 'ethiopia flag'], u: '1f1ea-1f1f9', a: '2.0' },
    { n: ['flag-eu', 'european union flag'], u: '1f1ea-1f1fa', a: '2.0' },
    { n: ['flag-fi', 'finland flag'], u: '1f1eb-1f1ee', a: '2.0' },
    { n: ['flag-fj', 'fiji flag'], u: '1f1eb-1f1ef', a: '2.0' },
    { n: ['flag-fk', 'falkland islands flag'], u: '1f1eb-1f1f0', a: '2.0' },
    { n: ['flag-fm', 'micronesia flag'], u: '1f1eb-1f1f2', a: '2.0' },
    { n: ['flag-fo', 'faroe islands flag'], u: '1f1eb-1f1f4', a: '2.0' },
    { n: ['fr', 'flag-fr', 'france flag'], u: '1f1eb-1f1f7', a: '0.6' },
    { n: ['flag-ga', 'gabon flag'], u: '1f1ec-1f1e6', a: '2.0' },
    {
      n: ['gb', 'uk', 'flag-gb', 'united kingdom flag'],
      u: '1f1ec-1f1e7',
      a: '0.6',
    },
    { n: ['flag-gd', 'grenada flag'], u: '1f1ec-1f1e9', a: '2.0' },
    { n: ['flag-ge', 'georgia flag'], u: '1f1ec-1f1ea', a: '2.0' },
    { n: ['flag-gf', 'french guiana flag'], u: '1f1ec-1f1eb', a: '2.0' },
    { n: ['flag-gg', 'guernsey flag'], u: '1f1ec-1f1ec', a: '2.0' },
    { n: ['flag-gh', 'ghana flag'], u: '1f1ec-1f1ed', a: '2.0' },
    { n: ['flag-gi', 'gibraltar flag'], u: '1f1ec-1f1ee', a: '2.0' },
    { n: ['flag-gl', 'greenland flag'], u: '1f1ec-1f1f1', a: '2.0' },
    { n: ['flag-gm', 'gambia flag'], u: '1f1ec-1f1f2', a: '2.0' },
    { n: ['flag-gn', 'guinea flag'], u: '1f1ec-1f1f3', a: '2.0' },
    { n: ['flag-gp', 'guadeloupe flag'], u: '1f1ec-1f1f5', a: '2.0' },
    { n: ['flag-gq', 'equatorial guinea flag'], u: '1f1ec-1f1f6', a: '2.0' },
    { n: ['flag-gr', 'greece flag'], u: '1f1ec-1f1f7', a: '2.0' },
    {
      n: ['flag-gs', 'south georgia & south sandwich islands flag'],
      u: '1f1ec-1f1f8',
      a: '2.0',
    },
    { n: ['flag-gt', 'guatemala flag'], u: '1f1ec-1f1f9', a: '2.0' },
    { n: ['flag-gu', 'guam flag'], u: '1f1ec-1f1fa', a: '2.0' },
    { n: ['flag-gw', 'guinea-bissau flag'], u: '1f1ec-1f1fc', a: '2.0' },
    { n: ['flag-gy', 'guyana flag'], u: '1f1ec-1f1fe', a: '2.0' },
    { n: ['flag-hk', 'hong kong sar china flag'], u: '1f1ed-1f1f0', a: '2.0' },
    {
      n: ['flag-hm', 'heard & mcdonald islands flag'],
      u: '1f1ed-1f1f2',
      a: '2.0',
    },
    { n: ['flag-hn', 'honduras flag'], u: '1f1ed-1f1f3', a: '2.0' },
    { n: ['flag-hr', 'croatia flag'], u: '1f1ed-1f1f7', a: '2.0' },
    { n: ['flag-ht', 'haiti flag'], u: '1f1ed-1f1f9', a: '2.0' },
    { n: ['flag-hu', 'hungary flag'], u: '1f1ed-1f1fa', a: '2.0' },
    { n: ['flag-ic', 'canary islands flag'], u: '1f1ee-1f1e8', a: '2.0' },
    { n: ['flag-id', 'indonesia flag'], u: '1f1ee-1f1e9', a: '2.0' },
    { n: ['flag-ie', 'ireland flag'], u: '1f1ee-1f1ea', a: '2.0' },
    { n: ['flag-il', 'israel flag'], u: '1f1ee-1f1f1', a: '2.0' },
    { n: ['flag-im', 'isle of man flag'], u: '1f1ee-1f1f2', a: '2.0' },
    { n: ['flag-in', 'india flag'], u: '1f1ee-1f1f3', a: '2.0' },
    {
      n: ['flag-io', 'british indian ocean territory flag'],
      u: '1f1ee-1f1f4',
      a: '2.0',
    },
    { n: ['flag-iq', 'iraq flag'], u: '1f1ee-1f1f6', a: '2.0' },
    { n: ['flag-ir', 'iran flag'], u: '1f1ee-1f1f7', a: '2.0' },
    { n: ['flag-is', 'iceland flag'], u: '1f1ee-1f1f8', a: '2.0' },
    { n: ['it', 'flag-it', 'italy flag'], u: '1f1ee-1f1f9', a: '0.6' },
    { n: ['flag-je', 'jersey flag'], u: '1f1ef-1f1ea', a: '2.0' },
    { n: ['flag-jm', 'jamaica flag'], u: '1f1ef-1f1f2', a: '2.0' },
    { n: ['flag-jo', 'jordan flag'], u: '1f1ef-1f1f4', a: '2.0' },
    { n: ['jp', 'flag-jp', 'japan flag'], u: '1f1ef-1f1f5', a: '0.6' },
    { n: ['flag-ke', 'kenya flag'], u: '1f1f0-1f1ea', a: '2.0' },
    { n: ['flag-kg', 'kyrgyzstan flag'], u: '1f1f0-1f1ec', a: '2.0' },
    { n: ['flag-kh', 'cambodia flag'], u: '1f1f0-1f1ed', a: '2.0' },
    { n: ['flag-ki', 'kiribati flag'], u: '1f1f0-1f1ee', a: '2.0' },
    { n: ['flag-km', 'comoros flag'], u: '1f1f0-1f1f2', a: '2.0' },
    { n: ['flag-kn', 'st. kitts & nevis flag'], u: '1f1f0-1f1f3', a: '2.0' },
    { n: ['flag-kp', 'north korea flag'], u: '1f1f0-1f1f5', a: '2.0' },
    { n: ['kr', 'flag-kr', 'south korea flag'], u: '1f1f0-1f1f7', a: '0.6' },
    { n: ['flag-kw', 'kuwait flag'], u: '1f1f0-1f1fc', a: '2.0' },
    { n: ['flag-ky', 'cayman islands flag'], u: '1f1f0-1f1fe', a: '2.0' },
    { n: ['flag-kz', 'kazakhstan flag'], u: '1f1f0-1f1ff', a: '2.0' },
    { n: ['flag-la', 'laos flag'], u: '1f1f1-1f1e6', a: '2.0' },
    { n: ['flag-lb', 'lebanon flag'], u: '1f1f1-1f1e7', a: '2.0' },
    { n: ['flag-lc', 'st. lucia flag'], u: '1f1f1-1f1e8', a: '2.0' },
    { n: ['flag-li', 'liechtenstein flag'], u: '1f1f1-1f1ee', a: '2.0' },
    { n: ['flag-lk', 'sri lanka flag'], u: '1f1f1-1f1f0', a: '2.0' },
    { n: ['flag-lr', 'liberia flag'], u: '1f1f1-1f1f7', a: '2.0' },
    { n: ['flag-ls', 'lesotho flag'], u: '1f1f1-1f1f8', a: '2.0' },
    { n: ['flag-lt', 'lithuania flag'], u: '1f1f1-1f1f9', a: '2.0' },
    { n: ['flag-lu', 'luxembourg flag'], u: '1f1f1-1f1fa', a: '2.0' },
    { n: ['flag-lv', 'latvia flag'], u: '1f1f1-1f1fb', a: '2.0' },
    { n: ['flag-ly', 'libya flag'], u: '1f1f1-1f1fe', a: '2.0' },
    { n: ['flag-ma', 'morocco flag'], u: '1f1f2-1f1e6', a: '2.0' },
    { n: ['flag-mc', 'monaco flag'], u: '1f1f2-1f1e8', a: '2.0' },
    { n: ['flag-md', 'moldova flag'], u: '1f1f2-1f1e9', a: '2.0' },
    { n: ['flag-me', 'montenegro flag'], u: '1f1f2-1f1ea', a: '2.0' },
    { n: ['flag-mf', 'st. martin flag'], u: '1f1f2-1f1eb', a: '2.0' },
    { n: ['flag-mg', 'madagascar flag'], u: '1f1f2-1f1ec', a: '2.0' },
    { n: ['flag-mh', 'marshall islands flag'], u: '1f1f2-1f1ed', a: '2.0' },
    { n: ['flag-mk', 'north macedonia flag'], u: '1f1f2-1f1f0', a: '2.0' },
    { n: ['flag-ml', 'mali flag'], u: '1f1f2-1f1f1', a: '2.0' },
    { n: ['flag-mm', 'myanmar (burma) flag'], u: '1f1f2-1f1f2', a: '2.0' },
    { n: ['flag-mn', 'mongolia flag'], u: '1f1f2-1f1f3', a: '2.0' },
    { n: ['flag-mo', 'macao sar china flag'], u: '1f1f2-1f1f4', a: '2.0' },
    {
      n: ['flag-mp', 'northern mariana islands flag'],
      u: '1f1f2-1f1f5',
      a: '2.0',
    },
    { n: ['flag-mq', 'martinique flag'], u: '1f1f2-1f1f6', a: '2.0' },
    { n: ['flag-mr', 'mauritania flag'], u: '1f1f2-1f1f7', a: '2.0' },
    { n: ['flag-ms', 'montserrat flag'], u: '1f1f2-1f1f8', a: '2.0' },
    { n: ['flag-mt', 'malta flag'], u: '1f1f2-1f1f9', a: '2.0' },
    { n: ['flag-mu', 'mauritius flag'], u: '1f1f2-1f1fa', a: '2.0' },
    { n: ['flag-mv', 'maldives flag'], u: '1f1f2-1f1fb', a: '2.0' },
    { n: ['flag-mw', 'malawi flag'], u: '1f1f2-1f1fc', a: '2.0' },
    { n: ['flag-mx', 'mexico flag'], u: '1f1f2-1f1fd', a: '2.0' },
    { n: ['flag-my', 'malaysia flag'], u: '1f1f2-1f1fe', a: '2.0' },
    { n: ['flag-mz', 'mozambique flag'], u: '1f1f2-1f1ff', a: '2.0' },
    { n: ['flag-na', 'namibia flag'], u: '1f1f3-1f1e6', a: '2.0' },
    { n: ['flag-nc', 'new caledonia flag'], u: '1f1f3-1f1e8', a: '2.0' },
    { n: ['flag-ne', 'niger flag'], u: '1f1f3-1f1ea', a: '2.0' },
    { n: ['flag-nf', 'norfolk island flag'], u: '1f1f3-1f1eb', a: '2.0' },
    { n: ['flag-ng', 'nigeria flag'], u: '1f1f3-1f1ec', a: '2.0' },
    { n: ['flag-ni', 'nicaragua flag'], u: '1f1f3-1f1ee', a: '2.0' },
    { n: ['flag-nl', 'netherlands flag'], u: '1f1f3-1f1f1', a: '2.0' },
    { n: ['flag-no', 'norway flag'], u: '1f1f3-1f1f4', a: '2.0' },
    { n: ['flag-np', 'nepal flag'], u: '1f1f3-1f1f5', a: '2.0' },
    { n: ['flag-nr', 'nauru flag'], u: '1f1f3-1f1f7', a: '2.0' },
    { n: ['flag-nu', 'niue flag'], u: '1f1f3-1f1fa', a: '2.0' },
    { n: ['flag-nz', 'new zealand flag'], u: '1f1f3-1f1ff', a: '2.0' },
    { n: ['flag-om', 'oman flag'], u: '1f1f4-1f1f2', a: '2.0' },
    { n: ['flag-pa', 'panama flag'], u: '1f1f5-1f1e6', a: '2.0' },
    { n: ['flag-pe', 'peru flag'], u: '1f1f5-1f1ea', a: '2.0' },
    { n: ['flag-pf', 'french polynesia flag'], u: '1f1f5-1f1eb', a: '2.0' },
    { n: ['flag-pg', 'papua new guinea flag'], u: '1f1f5-1f1ec', a: '2.0' },
    { n: ['flag-ph', 'philippines flag'], u: '1f1f5-1f1ed', a: '2.0' },
    { n: ['flag-pk', 'pakistan flag'], u: '1f1f5-1f1f0', a: '2.0' },
    { n: ['flag-pl', 'poland flag'], u: '1f1f5-1f1f1', a: '2.0' },
    {
      n: ['flag-pm', 'st. pierre & miquelon flag'],
      u: '1f1f5-1f1f2',
      a: '2.0',
    },
    { n: ['flag-pn', 'pitcairn islands flag'], u: '1f1f5-1f1f3', a: '2.0' },
    { n: ['flag-pr', 'puerto rico flag'], u: '1f1f5-1f1f7', a: '2.0' },
    {
      n: ['flag-ps', 'palestinian territories flag'],
      u: '1f1f5-1f1f8',
      a: '2.0',
    },
    { n: ['flag-pt', 'portugal flag'], u: '1f1f5-1f1f9', a: '2.0' },
    { n: ['flag-pw', 'palau flag'], u: '1f1f5-1f1fc', a: '2.0' },
    { n: ['flag-py', 'paraguay flag'], u: '1f1f5-1f1fe', a: '2.0' },
    { n: ['flag-qa', 'qatar flag'], u: '1f1f6-1f1e6', a: '2.0' },
    { n: ['flag-re', 'réunion flag'], u: '1f1f7-1f1ea', a: '2.0' },
    { n: ['flag-ro', 'romania flag'], u: '1f1f7-1f1f4', a: '2.0' },
    { n: ['flag-rs', 'serbia flag'], u: '1f1f7-1f1f8', a: '2.0' },
    { n: ['ru', 'flag-ru', 'russia flag'], u: '1f1f7-1f1fa', a: '0.6' },
    { n: ['flag-rw', 'rwanda flag'], u: '1f1f7-1f1fc', a: '2.0' },
    { n: ['flag-sa', 'saudi arabia flag'], u: '1f1f8-1f1e6', a: '2.0' },
    { n: ['flag-sb', 'solomon islands flag'], u: '1f1f8-1f1e7', a: '2.0' },
    { n: ['flag-sc', 'seychelles flag'], u: '1f1f8-1f1e8', a: '2.0' },
    { n: ['flag-sd', 'sudan flag'], u: '1f1f8-1f1e9', a: '2.0' },
    { n: ['flag-se', 'sweden flag'], u: '1f1f8-1f1ea', a: '2.0' },
    { n: ['flag-sg', 'singapore flag'], u: '1f1f8-1f1ec', a: '2.0' },
    { n: ['flag-sh', 'st. helena flag'], u: '1f1f8-1f1ed', a: '2.0' },
    { n: ['flag-si', 'slovenia flag'], u: '1f1f8-1f1ee', a: '2.0' },
    { n: ['flag-sj', 'svalbard & jan mayen flag'], u: '1f1f8-1f1ef', a: '2.0' },
    { n: ['flag-sk', 'slovakia flag'], u: '1f1f8-1f1f0', a: '2.0' },
    { n: ['flag-sl', 'sierra leone flag'], u: '1f1f8-1f1f1', a: '2.0' },
    { n: ['flag-sm', 'san marino flag'], u: '1f1f8-1f1f2', a: '2.0' },
    { n: ['flag-sn', 'senegal flag'], u: '1f1f8-1f1f3', a: '2.0' },
    { n: ['flag-so', 'somalia flag'], u: '1f1f8-1f1f4', a: '2.0' },
    { n: ['flag-sr', 'suriname flag'], u: '1f1f8-1f1f7', a: '2.0' },
    { n: ['flag-ss', 'south sudan flag'], u: '1f1f8-1f1f8', a: '2.0' },
    { n: ['flag-st', 'são tomé & príncipe flag'], u: '1f1f8-1f1f9', a: '2.0' },
    { n: ['flag-sv', 'el salvador flag'], u: '1f1f8-1f1fb', a: '2.0' },
    { n: ['flag-sx', 'sint maarten flag'], u: '1f1f8-1f1fd', a: '2.0' },
    { n: ['flag-sy', 'syria flag'], u: '1f1f8-1f1fe', a: '2.0' },
    { n: ['flag-sz', 'eswatini flag'], u: '1f1f8-1f1ff', a: '2.0' },
    { n: ['flag-ta', 'tristan da cunha flag'], u: '1f1f9-1f1e6', a: '2.0' },
    {
      n: ['flag-tc', 'turks & caicos islands flag'],
      u: '1f1f9-1f1e8',
      a: '2.0',
    },
    { n: ['flag-td', 'chad flag'], u: '1f1f9-1f1e9', a: '2.0' },
    {
      n: ['flag-tf', 'french southern territories flag'],
      u: '1f1f9-1f1eb',
      a: '2.0',
    },
    { n: ['flag-tg', 'togo flag'], u: '1f1f9-1f1ec', a: '2.0' },
    { n: ['flag-th', 'thailand flag'], u: '1f1f9-1f1ed', a: '2.0' },
    { n: ['flag-tj', 'tajikistan flag'], u: '1f1f9-1f1ef', a: '2.0' },
    { n: ['flag-tk', 'tokelau flag'], u: '1f1f9-1f1f0', a: '2.0' },
    { n: ['flag-tl', 'timor-leste flag'], u: '1f1f9-1f1f1', a: '2.0' },
    { n: ['flag-tm', 'turkmenistan flag'], u: '1f1f9-1f1f2', a: '2.0' },
    { n: ['flag-tn', 'tunisia flag'], u: '1f1f9-1f1f3', a: '2.0' },
    { n: ['flag-to', 'tonga flag'], u: '1f1f9-1f1f4', a: '2.0' },
    { n: ['flag-tr', 'türkiye flag'], u: '1f1f9-1f1f7', a: '2.0' },
    { n: ['flag-tt', 'trinidad & tobago flag'], u: '1f1f9-1f1f9', a: '2.0' },
    { n: ['flag-tv', 'tuvalu flag'], u: '1f1f9-1f1fb', a: '2.0' },
    { n: ['flag-tw', 'taiwan flag'], u: '1f1f9-1f1fc', a: '2.0' },
    { n: ['flag-tz', 'tanzania flag'], u: '1f1f9-1f1ff', a: '2.0' },
    { n: ['flag-ua', 'ukraine flag'], u: '1f1fa-1f1e6', a: '2.0' },
    { n: ['flag-ug', 'uganda flag'], u: '1f1fa-1f1ec', a: '2.0' },
    {
      n: ['flag-um', 'u.s. outlying islands flag'],
      u: '1f1fa-1f1f2',
      a: '2.0',
    },
    { n: ['flag-un', 'united nations flag'], u: '1f1fa-1f1f3', a: '4.0' },
    { n: ['us', 'flag-us', 'united states flag'], u: '1f1fa-1f1f8', a: '0.6' },
    { n: ['flag-uy', 'uruguay flag'], u: '1f1fa-1f1fe', a: '2.0' },
    { n: ['flag-uz', 'uzbekistan flag'], u: '1f1fa-1f1ff', a: '2.0' },
    { n: ['flag-va', 'vatican city flag'], u: '1f1fb-1f1e6', a: '2.0' },
    {
      n: ['flag-vc', 'st. vincent & grenadines flag'],
      u: '1f1fb-1f1e8',
      a: '2.0',
    },
    { n: ['flag-ve', 'venezuela flag'], u: '1f1fb-1f1ea', a: '2.0' },
    {
      n: ['flag-vg', 'british virgin islands flag'],
      u: '1f1fb-1f1ec',
      a: '2.0',
    },
    { n: ['flag-vi', 'u.s. virgin islands flag'], u: '1f1fb-1f1ee', a: '2.0' },
    { n: ['flag-vn', 'vietnam flag'], u: '1f1fb-1f1f3', a: '2.0' },
    { n: ['flag-vu', 'vanuatu flag'], u: '1f1fb-1f1fa', a: '2.0' },
    { n: ['flag-wf', 'wallis & futuna flag'], u: '1f1fc-1f1eb', a: '2.0' },
    { n: ['flag-ws', 'samoa flag'], u: '1f1fc-1f1f8', a: '2.0' },
    { n: ['flag-xk', 'kosovo flag'], u: '1f1fd-1f1f0', a: '2.0' },
    { n: ['flag-ye', 'yemen flag'], u: '1f1fe-1f1ea', a: '2.0' },
    { n: ['flag-yt', 'mayotte flag'], u: '1f1fe-1f1f9', a: '2.0' },
    { n: ['flag-za', 'south africa flag'], u: '1f1ff-1f1e6', a: '2.0' },
    { n: ['flag-zm', 'zambia flag'], u: '1f1ff-1f1f2', a: '2.0' },
    { n: ['flag-zw', 'zimbabwe flag'], u: '1f1ff-1f1fc', a: '2.0' },
    {
      n: ['england flag', 'flag-england'],
      u: '1f3f4-e0067-e0062-e0065-e006e-e0067-e007f',
      a: '5.0',
    },
    {
      n: ['scotland flag', 'flag-scotland'],
      u: '1f3f4-e0067-e0062-e0073-e0063-e0074-e007f',
      a: '5.0',
    },
    {
      n: ['wales flag', 'flag-wales'],
      u: '1f3f4-e0067-e0062-e0077-e006c-e0073-e007f',
      a: '5.0',
    },
  ],
  Jn = {
    custom: hm,
    smileys_people: vm,
    animals_nature: jm,
    food_drink: Cm,
    travel_places: pm,
    activities: Sm,
    objects: Nm,
    symbols: Tm,
    flags: Dm,
  },
  Ri = [
    re.NEUTRAL,
    re.LIGHT,
    re.MEDIUM_LIGHT,
    re.MEDIUM,
    re.MEDIUM_DARK,
    re.DARK,
  ],
  Em = Object.entries(re).reduce(function (f, e) {
    var a = e[0],
      t = e[1];
    return ((f[t] = a), f);
  }, {}),
  Im = Ri.reduce(function (f, e) {
    var a;
    return Object.assign(f, ((a = {}), (a[e] = e), a));
  }, {}),
  ae;
(function (f) {
  ((f.name = 'n'),
    (f.unified = 'u'),
    (f.variations = 'v'),
    (f.added_in = 'a'),
    (f.imgUrl = 'imgUrl'));
})(ae || (ae = {}));
var Cn = {};
setTimeout(function () {
  ll.reduce(function (f, e) {
    return (M4(e), f);
  }, Cn);
});
function M4(f) {
  var e = su(f)
    .flat()
    .join('')
    .toLowerCase()
    .replace(/[^a-zA-Z\d]/g, '')
    .split('');
  e.forEach(function (a) {
    var t;
    ((Cn[a] = (t = Cn[a]) != null ? t : {}), (Cn[a][If(f)] = f));
  });
}
function su(f) {
  var e;
  return (e = f[ae.name]) != null ? e : [];
}
function zm(f) {
  return parseFloat(f[ae.added_in]);
}
function c1(f) {
  return f ? su(f)[0] : '';
}
function hr(f) {
  var e = f.split('-'),
    a = e.splice(1, 1),
    t = a[0];
  return Im[t] ? e.join('-') : f;
}
function If(f, e) {
  var a,
    t = f[ae.unified];
  return !e || !Gt(f) ? t : (a = km(f, e)) != null ? a : t;
}
function Am(f) {
  var e;
  return (e = Jn == null ? void 0 : Jn[f]) != null ? e : [];
}
function L4(f, e) {
  return '' + ym(e) + f + '.png';
}
function gu(f) {
  var e;
  return (e = f[ae.variations]) != null ? e : [];
}
function Gt(f) {
  return gu(f).length > 0;
}
function km(f, e) {
  return e
    ? gu(f).find(function (a) {
        return a.includes(e);
      })
    : If(f);
}
function It(f) {
  if (f) {
    if (mt[f]) return mt[f];
    var e = hr(f);
    return mt[e];
  }
}
var ll = Object.values(Jn).flat();
function xm(f) {
  ((Jn[k.CUSTOM].length = 0),
    f.forEach(function (e) {
      var a = Rm(e);
      (Jn[k.CUSTOM].push(a),
        !mt[a[ae.unified]] && (ll.push(a), (mt[a[ae.unified]] = a), M4(a)));
    }));
}
function Rm(f) {
  var e;
  return (
    (e = {}),
    (e[ae.name] = f.names.map(function (a) {
      return a.toLowerCase();
    })),
    (e[ae.unified] = f.id.toLowerCase()),
    (e[ae.added_in] = '0'),
    (e[ae.imgUrl] = f.imgUrl),
    e
  );
}
var mt = {};
setTimeout(function () {
  ll.reduce(function (f, e) {
    return (
      (f[If(e)] = e),
      Gt(e) &&
        gu(e).forEach(function (a) {
          f[a] = e;
        }),
      f
    );
  }, mt);
});
function Om(f) {
  var e = f.split('-'),
    a = e[1];
  return Ri.includes(a) ? a : null;
}
var Ym = ['2640-fe0f', '2642-fe0f', '2695-fe0f'],
  Oi = 'Search',
  Qm = 'No results found',
  m4 = ' found. Use up and down arrow keys to navigate.',
  Um = '1 result' + m4,
  Bm = '%n results' + m4;
function ho(f) {
  var e, a;
  f === void 0 && (f = {});
  var t = b4(),
    n = Object.assign(t.previewConfig, (e = f.previewConfig) != null ? e : {}),
    u = Object.assign(t, f),
    i = Mm(f.categories, { suggestionMode: u.suggestedEmojisMode });
  (u.hiddenEmojis.forEach(function (r) {
    u.unicodeToHide.add(r);
  }),
    xm((a = u.customEmojis) != null ? a : []));
  var l = u.searchDisabled ? Et.PREVIEW : u.skinTonePickerLocation;
  return af({}, u, {
    categories: i,
    previewConfig: n,
    skinTonePickerLocation: l,
  });
}
function b4() {
  return {
    autoFocusSearch: !0,
    categories: s4(),
    className: '',
    customEmojis: [],
    defaultSkinTone: re.NEUTRAL,
    emojiStyle: Gf.APPLE,
    emojiVersion: null,
    getEmojiUrl: L4,
    height: 450,
    lazyLoadEmojis: !1,
    previewConfig: af({}, Gm),
    searchDisabled: !1,
    searchPlaceHolder: Oi,
    searchPlaceholder: Oi,
    skinTonePickerLocation: Et.SEARCH,
    skinTonesDisabled: !1,
    style: {},
    suggestedEmojisMode: Bn.FREQUENT,
    theme: Gn.LIGHT,
    unicodeToHide: new Set(Ym),
    width: 350,
    reactionsDefaultOpen: !1,
    reactions: dm,
    open: !0,
    allowExpandReactions: !0,
    hiddenEmojis: [],
  };
}
var Gm = {
    defaultEmoji: '1f60a',
    defaultCaption: "What's your mood?",
    showPreview: !0,
  },
  Jm = ['children'],
  w4 = o.createContext(b4());
function Zm(f) {
  var e = f.children,
    a = c4(f, Jm),
    t = Hm(a);
  return o.createElement(w4.Provider, { value: t }, e);
}
function Hm(f) {
  var e,
    a = o.useState(function () {
      return ho(f);
    }),
    t = a[0],
    n = a[1];
  return (
    o.useEffect(
      function () {
        o4(t, f) || n(ho(f));
      },
      [
        (e = f.customEmojis) == null ? void 0 : e.length,
        f.open,
        f.emojiVersion,
        f.reactionsDefaultOpen,
        f.searchPlaceHolder,
        f.searchPlaceholder,
        f.defaultSkinTone,
        f.skinTonesDisabled,
        f.autoFocusSearch,
        f.emojiStyle,
        f.theme,
        f.suggestedEmojisMode,
        f.lazyLoadEmojis,
        f.className,
        f.height,
        f.width,
        f.searchDisabled,
        f.skinTonePickerLocation,
        f.allowExpandReactions,
      ]
    ),
    t
  );
}
function uf() {
  return o.useContext(w4);
}
function vo(f, e) {
  e === void 0 && (e = 0);
  var a = o.useState(f),
    t = a[0],
    n = a[1],
    u = o.useRef(null);
  function i(l) {
    return new Promise(function (r) {
      var c;
      (u.current && clearTimeout(u.current),
        (u.current =
          (c = window) == null
            ? void 0
            : c.setTimeout(function () {
                (n(l), r(l));
              }, e)));
    });
  }
  return [t, i];
}
function _m() {
  var f = sb();
  return function (e) {
    return f.has(e);
  };
}
function y4() {
  var f = o.useRef({}),
    e = db();
  return o.useMemo(
    function () {
      var a = parseFloat('' + e);
      return !e || Number.isNaN(a)
        ? f.current
        : ll.reduce(function (t, n) {
            return (Pm(n, a) && (t[If(n)] = !0), t);
          }, f.current);
    },
    [e]
  );
}
function h4() {
  var f = y4(),
    e = _m();
  return function (t) {
    var n = hr(If(t));
    return !!(f[n] || e(n));
  };
}
function Pm(f, e) {
  return zm(f) > e;
}
function Vm(f) {
  o.useEffect(
    function () {
      f(!0);
    },
    [f]
  );
}
function Xm(f) {
  var e = f.children,
    a = y4(),
    t = $m(),
    n = ob(),
    u = o.useRef(Cn),
    i = o.useRef(!1),
    l = o.useRef(!1),
    r = o.useRef(a),
    c = vo(Date.now(), 200),
    d = vo('', 100),
    M = o.useState(!1),
    s = o.useState(t),
    b = o.useState(null),
    y = o.useState(new Set()),
    h = o.useState(null),
    v = o.useState(n),
    L = o.useState(!1),
    g = L[0],
    m = L[1];
  return (
    Vm(m),
    o.createElement(
      ue.Provider,
      {
        value: {
          activeCategoryState: b,
          activeSkinTone: s,
          disallowClickRef: i,
          disallowMouseRef: l,
          disallowedEmojisRef: r,
          emojiVariationPickerState: h,
          emojisThatFailedToLoadState: y,
          filterRef: u,
          isPastInitialLoad: g,
          searchTerm: d,
          skinToneFanOpenState: M,
          suggestedUpdateState: c,
          reactionsModeState: v,
        },
      },
      e
    )
  );
}
var ue = o.createContext({
  activeCategoryState: [null, function () {}],
  activeSkinTone: [re.NEUTRAL, function () {}],
  disallowClickRef: { current: !1 },
  disallowMouseRef: { current: !1 },
  disallowedEmojisRef: { current: {} },
  emojiVariationPickerState: [null, function () {}],
  emojisThatFailedToLoadState: [new Set(), function () {}],
  filterRef: { current: {} },
  isPastInitialLoad: !0,
  searchTerm: [
    '',
    function () {
      return new Promise(function () {});
    },
  ],
  skinToneFanOpenState: [!1, function () {}],
  suggestedUpdateState: [Date.now(), function () {}],
  reactionsModeState: [!1, function () {}],
});
function vr() {
  var f = o.useContext(ue),
    e = f.filterRef;
  return e;
}
function Km() {
  var f = o.useContext(ue),
    e = f.disallowClickRef;
  return e;
}
function jr() {
  var f = o.useContext(ue),
    e = f.disallowMouseRef;
  return e;
}
function Jt() {
  var f = o.useContext(ue),
    e = f.reactionsModeState;
  return e;
}
function rl() {
  var f = o.useContext(ue),
    e = f.searchTerm;
  return e;
}
function Cr() {
  var f = o.useContext(ue),
    e = f.activeSkinTone;
  return e;
}
function v4() {
  var f = o.useContext(ue),
    e = f.emojisThatFailedToLoadState;
  return e;
}
function qm() {
  var f = o.useContext(ue),
    e = f.isPastInitialLoad;
  return e;
}
function Zt() {
  var f = o.useContext(ue),
    e = f.emojiVariationPickerState;
  return e;
}
function Mu() {
  var f = o.useContext(ue),
    e = f.skinToneFanOpenState;
  return e;
}
function j4() {
  var f = o.useContext(ue),
    e = f.suggestedUpdateState,
    a = e[0],
    t = e[1];
  return [
    a,
    function () {
      t(Date.now());
    },
  ];
}
var C4 = ln.createContext({});
function p4() {
  var f = ln.useContext(C4);
  return f;
}
function Wm(f) {
  var e = ln.useRef({
    onEmojiClick: f.onEmojiClick || Ou,
    onReactionClick: f.onReactionClick || f.onEmojiClick,
    onSkinToneChange: f.onSkinToneChange || Ou,
  });
  return (
    ln.useEffect(
      function () {
        ((e.current.onEmojiClick = f.onEmojiClick || Ou),
          (e.current.onReactionClick = f.onReactionClick || f.onEmojiClick));
      },
      [f.onEmojiClick, f.onReactionClick]
    ),
    ln.useEffect(
      function () {
        e.current.onSkinToneChange = f.onSkinToneChange || Ou;
      },
      [f.onSkinToneChange]
    ),
    e
  );
}
function Ou() {}
var Zn;
(function (f) {
  ((f.REACTIONS = 'reactions'), (f.PICKER = 'picker'));
})(Zn || (Zn = {}));
function Fm() {
  var f,
    e = uf(),
    a = e.searchPlaceHolder,
    t = e.searchPlaceholder;
  return (f = [a, t].find(function (n) {
    return n !== Oi;
  })) != null
    ? f
    : Oi;
}
function $m() {
  var f = uf(),
    e = f.defaultSkinTone;
  return e;
}
function S4() {
  var f = uf(),
    e = f.allowExpandReactions;
  return e;
}
function N4() {
  var f = uf(),
    e = f.skinTonesDisabled;
  return e;
}
function Ba() {
  var f = uf(),
    e = f.emojiStyle;
  return e;
}
function fb() {
  var f = uf(),
    e = f.autoFocusSearch;
  return e;
}
function T4() {
  var f = uf(),
    e = f.categories;
  return e;
}
function eb() {
  var f = uf(),
    e = f.customEmojis;
  return e;
}
function ab() {
  var f = uf(),
    e = f.open;
  return e;
}
function tb(f) {
  var e = p4(),
    a = e.current,
    t = Jt(),
    n = t[1],
    u = a.onEmojiClick || function () {},
    i = a.onReactionClick;
  return f === Zn.REACTIONS && i
    ? function () {
        for (var l = arguments.length, r = new Array(l), c = 0; c < l; c++)
          r[c] = arguments[c];
        return i.apply(
          void 0,
          r.concat([
            {
              collapseToReactions: function () {
                n(function (M) {
                  return M;
                });
              },
            },
          ])
        );
      }
    : function () {
        for (var l = arguments.length, r = new Array(l), c = 0; c < l; c++)
          r[c] = arguments[c];
        u.apply(
          void 0,
          r.concat([
            {
              collapseToReactions: function () {
                n(!0);
              },
            },
          ])
        );
      };
}
function nb() {
  var f = p4(),
    e = f.current;
  return e.onSkinToneChange || function () {};
}
function D4() {
  var f = uf(),
    e = f.previewConfig;
  return e;
}
function ub() {
  var f = uf(),
    e = f.theme;
  return e;
}
function ib() {
  var f = uf(),
    e = f.suggestedEmojisMode;
  return e;
}
function lb() {
  var f = uf(),
    e = f.lazyLoadEmojis;
  return e;
}
function rb() {
  var f = uf(),
    e = f.className;
  return e;
}
function cb() {
  var f = uf(),
    e = f.height,
    a = f.width,
    t = f.style;
  return af({ height: jo(e), width: jo(a) }, t);
}
function ob() {
  var f = uf(),
    e = f.reactionsDefaultOpen;
  return e;
}
function db() {
  var f = uf(),
    e = f.emojiVersion;
  return e;
}
function E4() {
  var f = uf(),
    e = f.searchDisabled;
  return e;
}
function I4() {
  var f = uf(),
    e = f.skinTonePickerLocation;
  return e;
}
function sb() {
  var f = uf(),
    e = f.unicodeToHide;
  return e;
}
function gb() {
  var f = uf(),
    e = f.reactions;
  return e;
}
function Ga() {
  var f = uf(),
    e = f.getEmojiUrl;
  return e;
}
function jo(f) {
  return typeof f == 'number' ? f + 'px' : f;
}
function Mb(f) {
  var e = f > 0,
    a = f > 1;
  return e ? (a ? Bm.replace('%n', f.toString()) : Um) : Qm;
}
function cl() {
  var f = rl(),
    e = f[0];
  return !!e;
}
function Vf(f) {
  f &&
    requestAnimationFrame(function () {
      f.focus();
    });
}
function z4(f) {
  if (f) {
    var e = f.previousElementSibling;
    Vf(e);
  }
}
function A4(f) {
  if (f) {
    var e = f.nextElementSibling;
    Vf(e);
  }
}
function k4(f) {
  if (f) {
    var e = f.firstElementChild;
    Vf(e);
  }
}
function Hn() {
  return document.activeElement;
}
function Lb(f) {
  var e = f.children,
    a = o.useRef(null),
    t = o.useRef(null),
    n = o.useRef(null),
    u = o.useRef(null),
    i = o.useRef(null),
    l = o.useRef(null),
    r = o.useRef(null),
    c = o.useRef(null);
  return o.createElement(
    x4.Provider,
    {
      value: {
        AnchoredEmojiRef: t,
        BodyRef: n,
        CategoryNavigationRef: l,
        PickerMainRef: a,
        SearchInputRef: u,
        SkinTonePickerRef: i,
        VariationPickerRef: r,
        ReactionsRef: c,
      },
    },
    e
  );
}
var x4 = o.createContext({
  AnchoredEmojiRef: o.createRef(),
  BodyRef: o.createRef(),
  CategoryNavigationRef: o.createRef(),
  PickerMainRef: o.createRef(),
  SearchInputRef: o.createRef(),
  SkinTonePickerRef: o.createRef(),
  VariationPickerRef: o.createRef(),
  ReactionsRef: o.createRef(),
});
function La() {
  return o.useContext(x4);
}
function Lu() {
  return La().PickerMainRef;
}
function ol() {
  return La().AnchoredEmojiRef;
}
function R4() {
  var f = ol();
  return function (e) {
    (e === null && f.current !== null && Vf(f.current), (f.current = e));
  };
}
function ie() {
  return La().BodyRef;
}
function mb() {
  return La().ReactionsRef;
}
function ma() {
  return La().SearchInputRef;
}
function pr() {
  return La().SkinTonePickerRef;
}
function Sr() {
  return La().CategoryNavigationRef;
}
function bb() {
  return La().VariationPickerRef;
}
function O4(f, e) {
  e === void 0 && (e = 0);
  var a = W4(f);
  a &&
    requestAnimationFrame(function () {
      a.scrollTop = e;
    });
}
function wb(f, e) {
  var a = W4(f);
  a &&
    requestAnimationFrame(function () {
      a.scrollTop = a.scrollTop + e;
    });
}
function yb() {
  var f = ie();
  return o.useCallback(
    function (e) {
      requestAnimationFrame(function () {
        f.current && (f.current.scrollTop = e);
      });
    },
    [f]
  );
}
function dl(f) {
  if (!(!f || !dw(f)) && !f.closest(Nf(x.variationPicker))) {
    var e = $4(f),
      a = F4(f);
    wb(e, -(zr(ba(f)) - a));
  }
}
function sl(f) {
  var e = Rr(f);
  (Vf(e), dl(e));
}
function hb(f) {
  var e = Rr(f);
  (Vf(e), e == null || e.click());
}
function vb(f) {
  Vf(tg(f));
}
function jb(f) {
  if (f) {
    var e = ng(f);
    if (!e) return sl(Ml(f));
    (Vf(e), dl(e));
  }
}
function Cb(f) {
  if (f) {
    var e = xr(f);
    if (!e) return vb(gl(f));
    (Vf(e), dl(e));
  }
}
function pb(f, e) {
  if (f) {
    var a = Nb(f);
    if (!a) return e();
    (Vf(a), dl(a));
  }
}
function Sb(f) {
  if (f) {
    var e = Tb(f);
    return Vf(e);
  }
}
function Nb(f) {
  if (!f) return null;
  var e = ug(f),
    a = ba(e),
    t = V4(e, f),
    n = X4(e, f),
    u = P4(e, f);
  if (n === 0) {
    var i = gl(a);
    return i ? K4(zt(i), -1, u, t) : null;
  }
  return uw(zt(e), n, u, t);
}
function Tb(f) {
  if (!f) return null;
  var e = ug(f),
    a = ba(e),
    t = V4(e, f),
    n = X4(e, f),
    u = P4(e, f);
  if (!aw(e, f)) {
    var i = Ml(a);
    return i ? K4(zt(i), 0, u, t) : null;
  }
  var l = nw(zt(e), n, u, t);
  return l;
}
function Ja() {
  var f = Zt(),
    e = f[0],
    a = f[1],
    t = Mu(),
    n = t[0],
    u = t[1],
    i = o.useCallback(
      function () {
        (e && a(null), n && u(!1));
      },
      [e, n, a, u]
    );
  return i;
}
function Y4() {
  var f = Zt(),
    e = f[0],
    a = Mu(),
    t = a[0];
  return function () {
    return !!e || t;
  };
}
function Db() {
  var f = jr();
  return function () {
    f.current = !0;
  };
}
function Q4() {
  var f = jr();
  return function () {
    f.current = !1;
  };
}
function U4() {
  var f = jr();
  return function () {
    return f.current;
  };
}
function Eb() {
  var f = ie(),
    e = Q4(),
    a = U4();
  o.useEffect(
    function () {
      var t = f.current;
      t == null || t.addEventListener('mousemove', n, { passive: !0 });
      function n() {
        a() && e();
      }
      return function () {
        t == null || t.removeEventListener('mousemove', n);
      };
    },
    [f, e, a]
  );
}
function Ib() {
  if (typeof window > 'u' || typeof window.CSS > 'u') return !1;
  try {
    return CSS.supports('selector(:has(*))');
  } catch {
    return !1;
  }
}
var zb = Ib();
function Za() {
  var f = ma();
  return o.useCallback(
    function () {
      Vf(f.current);
    },
    [f]
  );
}
function Ab() {
  var f = pr();
  return o.useCallback(
    function () {
      f.current && k4(f.current);
    },
    [f]
  );
}
function B4() {
  var f = Sr();
  return o.useCallback(
    function () {
      f.current && k4(f.current);
    },
    [f]
  );
}
function kb() {
  var f = vr();
  return function e(a) {
    if (typeof a == 'function') return e(a(f.current));
    f.current = a;
  };
}
function G4() {
  var f = Nr(),
    e = ma(),
    a = Za();
  return function () {
    (e.current && (e.current.value = ''), f(''), a());
  };
}
function xb() {
  var f = ma(),
    e = Nr();
  return function (t) {
    f.current
      ? ((f.current.value = '' + f.current.value + t), e(o1(f.current.value)))
      : e(o1(t));
  };
}
function Rb() {
  var f = ma(),
    e = vr(),
    a = kb(),
    t = Nr(),
    n = rl(),
    u = n[0],
    i = Gb(e.current, u);
  return {
    onChange: l,
    searchTerm: u,
    SearchInputRef: f,
    statusSearchResults: i,
  };
  function l(r) {
    zb ||
      setTimeout(function () {
        var c = e.current,
          d = r.toLowerCase();
        if ((c != null && c[d]) || d.length <= 1) return t(d);
        var M = Bb(d, c);
        if (!M) return t(d);
        (a(function (s) {
          var b;
          return Object.assign(s, ((b = {}), (b[d] = Ob(M, d)), b));
        }),
          t(d));
      });
  }
}
function Nr() {
  var f = rl(),
    e = f[1],
    a = Lu();
  return function (n) {
    requestAnimationFrame(function () {
      e(n && (n == null ? void 0 : n.toLowerCase())).then(function () {
        O4(a.current, 0);
      });
    });
  };
}
function Ob(f, e) {
  var a = {};
  for (var t in f) {
    var n = f[t];
    Yb(n, e) && (a[t] = n);
  }
  return a;
}
function Yb(f, e) {
  return su(f).some(function (a) {
    return a.includes(e);
  });
}
function Qb() {
  var f = vr(),
    e = f.current,
    a = rl(),
    t = a[0];
  return function (n) {
    return Ub(n, e, t);
  };
}
function Ub(f, e, a) {
  var t;
  return !e || !a ? !1 : !((t = e[a]) != null && t[f]);
}
function Bb(f, e) {
  if (!e) return null;
  if (e[f]) return e[f];
  var a = Object.keys(e)
    .sort(function (t, n) {
      return n.length - t.length;
    })
    .find(function (t) {
      return f.includes(t);
    });
  return a ? e[a] : null;
}
function o1(f) {
  return !f || typeof f != 'string' ? '' : f.trim().toLowerCase();
}
function Gb(f, e) {
  var a;
  if (!(f != null && f[e])) return '';
  var t =
    ((a = Object.entries(f == null ? void 0 : f[e])) == null
      ? void 0
      : a.length) || 0;
  return Mb(t);
}
function J4() {
  var f = R4(),
    e = Zt(),
    a = e[1];
  return function (n) {
    var u = Ir(n),
      i = u[0];
    i && (f(n), a(i));
  };
}
function Tr() {
  var f = I4();
  return f === Et.SEARCH;
}
function Z4() {
  var f = I4();
  return f === Et.PREVIEW;
}
var df;
(function (f) {
  ((f.ArrowDown = 'ArrowDown'),
    (f.ArrowUp = 'ArrowUp'),
    (f.ArrowLeft = 'ArrowLeft'),
    (f.ArrowRight = 'ArrowRight'),
    (f.Escape = 'Escape'),
    (f.Enter = 'Enter'),
    (f.Space = ' '));
})(df || (df = {}));
function Jb() {
  (Zb(), Hb(), _b(), Pb(), Vb());
}
function Zb() {
  var f = Lu(),
    e = G4(),
    a = yb(),
    t = ma(),
    n = Za(),
    u = Y4(),
    i = Db(),
    l = Ja(),
    r = o.useMemo(
      function () {
        return function (d) {
          var M = d.key;
          switch ((i(), M)) {
            case df.Escape:
              if ((d.preventDefault(), u())) {
                l();
                return;
              }
              (e(), a(0), n());
              break;
          }
        };
      },
      [a, e, l, n, u, i]
    );
  o.useEffect(
    function () {
      var c = f.current;
      if (c)
        return (
          c.addEventListener('keydown', r),
          function () {
            c.removeEventListener('keydown', r);
          }
        );
    },
    [f, t, a, r]
  );
}
function Hb() {
  var f = Ab(),
    e = Lu(),
    a = ie(),
    t = ma(),
    n = Mu(),
    u = n[1],
    i = H4(),
    l = Tr(),
    r = o.useMemo(
      function () {
        return function (d) {
          var M = d.key;
          switch (M) {
            case df.ArrowRight:
              if (!l) return;
              (d.preventDefault(), u(!0), f());
              break;
            case df.ArrowDown:
              (d.preventDefault(), i());
              break;
            case df.Enter:
              (d.preventDefault(), hb(a.current));
              break;
          }
        };
      },
      [f, i, u, a, l]
    );
  o.useEffect(
    function () {
      var c = t.current;
      if (c)
        return (
          c.addEventListener('keydown', r),
          function () {
            c.removeEventListener('keydown', r);
          }
        );
    },
    [e, t, r]
  );
}
function _b() {
  var f = pr(),
    e = Za(),
    a = ma(),
    t = H4(),
    n = Mu(),
    u = n[0],
    i = n[1],
    l = Z4(),
    r = Tr(),
    c = Dr(),
    d = o.useMemo(
      function () {
        return function (s) {
          var b = s.key;
          if (r)
            switch (b) {
              case df.ArrowLeft:
                if ((s.preventDefault(), !u)) return e();
                Co(e);
                break;
              case df.ArrowRight:
                if ((s.preventDefault(), !u)) return e();
                po();
                break;
              case df.ArrowDown:
                (s.preventDefault(), u && i(!1), t());
                break;
              default:
                c(s);
                break;
            }
          if (l)
            switch (b) {
              case df.ArrowUp:
                if ((s.preventDefault(), !u)) return e();
                Co(e);
                break;
              case df.ArrowDown:
                if ((s.preventDefault(), !u)) return e();
                po();
                break;
              default:
                c(s);
                break;
            }
        };
      },
      [u, e, i, t, c, l, r]
    );
  o.useEffect(
    function () {
      var M = f.current;
      if (M)
        return (
          M.addEventListener('keydown', d),
          function () {
            M.removeEventListener('keydown', d);
          }
        );
    },
    [f, a, u, d]
  );
}
function Pb() {
  var f = Za(),
    e = Sr(),
    a = ie(),
    t = Dr(),
    n = o.useMemo(
      function () {
        return function (i) {
          var l = i.key;
          switch (l) {
            case df.ArrowUp:
              (i.preventDefault(), f());
              break;
            case df.ArrowRight:
              (i.preventDefault(), A4(Hn()));
              break;
            case df.ArrowLeft:
              (i.preventDefault(), z4(Hn()));
              break;
            case df.ArrowDown:
              (i.preventDefault(), sl(a.current));
              break;
            default:
              t(i);
              break;
          }
        };
      },
      [a, f, t]
    );
  o.useEffect(
    function () {
      var u = e.current;
      if (u)
        return (
          u.addEventListener('keydown', n),
          function () {
            u.removeEventListener('keydown', n);
          }
        );
    },
    [e, a, n]
  );
}
function Vb() {
  var f = ie(),
    e = Xb(),
    a = J4(),
    t = Y4(),
    n = Ja(),
    u = Dr(),
    i = o.useMemo(
      function () {
        return function (r) {
          var c = r.key,
            d = oe(Hn());
          switch (c) {
            case df.ArrowRight:
              (r.preventDefault(), jb(d));
              break;
            case df.ArrowLeft:
              (r.preventDefault(), Cb(d));
              break;
            case df.ArrowDown:
              if ((r.preventDefault(), t())) {
                n();
                break;
              }
              Sb(d);
              break;
            case df.ArrowUp:
              if ((r.preventDefault(), t())) {
                n();
                break;
              }
              pb(d, e);
              break;
            case df.Space:
              (r.preventDefault(), a(r.target));
              break;
            default:
              u(r);
              break;
          }
        };
      },
      [e, u, a, t, n]
    );
  o.useEffect(
    function () {
      var l = f.current;
      if (l)
        return (
          l.addEventListener('keydown', i),
          function () {
            l.removeEventListener('keydown', i);
          }
        );
    },
    [f, i]
  );
}
function H4() {
  var f = B4(),
    e = cl(),
    a = ie();
  return o.useCallback(
    function () {
      return e ? sl(a.current) : f();
    },
    [a, f, e]
  );
}
function Xb() {
  var f = Za(),
    e = B4(),
    a = cl();
  return o.useCallback(
    function () {
      return a ? f() : e();
    },
    [f, a, e]
  );
}
function Co(f) {
  var e = Hn();
  e && (lw(e) || f(), A4(e));
}
function po() {
  var f = Hn();
  f && z4(f);
}
function Dr() {
  var f = xb(),
    e = Za(),
    a = E4(),
    t = Ja();
  return function (u) {
    var i = u.key;
    Kb(u) ||
      a ||
      (i.match(/(^[a-zA-Z0-9]$){1}/) && (u.preventDefault(), t(), e(), f(i)));
  };
}
function Kb(f) {
  var e = f.metaKey,
    a = f.ctrlKey,
    t = f.altKey;
  return e || a || t;
}
function qb(f, e, a) {
  if (e && a !== Gf.NATIVE) {
    var t = If(e);
    So.has(t) ||
      (gu(e).forEach(function (n) {
        var u = f(n, a);
        Wb(u);
      }),
      So.add(t));
  }
}
var So = new Set();
function Wb(f) {
  var e = new Image();
  e.src = f;
}
function Fb() {
  var f = ie(),
    e = Ba(),
    a = Ga();
  o.useEffect(
    function () {
      if (e === Gf.NATIVE) return;
      var t = f.current;
      return (
        t == null || t.addEventListener('focusin', n),
        function () {
          t == null || t.removeEventListener('focusin', n);
        }
      );
      function n(u) {
        var i = oe(u.target);
        if (i) {
          var l = Ir(i),
            r = l[0];
          r && Gt(r) && qb(a, r, e);
        }
      }
    },
    [f, e, a]
  );
}
var $b = ['width', 'height'],
  _4 = 40;
function fw(f) {
  var e = f.children;
  return o.createElement(Xm, null, o.createElement(ew, null, e));
}
function ew(f) {
  var e,
    a = f.children,
    t = Jt(),
    n = t[0],
    u = ub(),
    i = cl(),
    l = Lu(),
    r = rb(),
    c = cb();
  (Jb(), Fb());
  var d = c || {},
    M = d.width,
    s = d.height,
    b = c4(d, $b);
  return o.createElement(
    'aside',
    {
      className: Q(
        $t.main,
        $t.baseVariables,
        u === Gn.DARK && $t.darkTheme,
        u === Gn.AUTO && $t.autoThemeDark,
        ((e = {}), (e[x.searchActive] = i), e),
        n && $t.reactionsMenu,
        r
      ),
      ref: l,
      style: af({}, b, !n && { height: s, width: M }),
    },
    a
  );
}
var No = {
    '--epr-emoji-variation-picker-bg-color':
      'var(--epr-dark-emoji-variation-picker-bg-color)',
    '--epr-hover-bg-color-reduced-opacity':
      'var(--epr-dark-hover-bg-color-reduced-opacity)',
    '--epr-highlight-color': 'var(--epr-dark-highlight-color)',
    '--epr-text-color': 'var(--epr-dark-text-color)',
    '--epr-hover-bg-color': 'var(--epr-dark-hover-bg-color)',
    '--epr-focus-bg-color': 'var(--epr-dark-focus-bg-color)',
    '--epr-search-input-bg-color': 'var(--epr-dark-search-input-bg-color)',
    '--epr-category-label-bg-color': 'var(--epr-dark-category-label-bg-color)',
    '--epr-picker-border-color': 'var(--epr-dark-picker-border-color)',
    '--epr-bg-color': 'var(--epr-dark-bg-color)',
    '--epr-reactions-bg-color': 'var(--epr-dark-reactions-bg-color)',
    '--epr-search-input-bg-color-active':
      'var(--epr-dark-search-input-bg-color-active)',
    '--epr-emoji-variation-indicator-color':
      'var(--epr-dark-emoji-variation-indicator-color)',
    '--epr-category-icon-active-color':
      'var(--epr-dark-category-icon-active-color)',
    '--epr-skin-tone-picker-menu-color':
      'var(--epr-dark-skin-tone-picker-menu-color)',
    '--epr-skin-tone-outer-border-color':
      'var(--epr-dark-skin-tone-outer-border-color)',
    '--epr-skin-tone-inner-border-color':
      'var(--epr-dark-skin-tone-inner-border-color)',
  },
  $t = $.create({
    main: {
      '.': ['epr-main', x.emojiPicker],
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: 'var(--epr-picker-border-radius)',
      borderColor: 'var(--epr-picker-border-color)',
      backgroundColor: 'var(--epr-bg-color)',
      overflow: 'hidden',
      transition: 'all 0.3s ease-in-out, background-color 0.1s ease-in-out',
      '*': { boxSizing: 'border-box', fontFamily: 'sans-serif' },
    },
    baseVariables: {
      '--': {
        '--epr-highlight-color': '#007aeb',
        '--epr-hover-bg-color': '#e5f0fa',
        '--epr-hover-bg-color-reduced-opacity': '#e5f0fa80',
        '--epr-focus-bg-color': '#e0f0ff',
        '--epr-text-color': '#858585',
        '--epr-search-input-bg-color': '#f6f6f6',
        '--epr-picker-border-color': '#e7e7e7',
        '--epr-bg-color': '#fff',
        '--epr-reactions-bg-color': '#ffffff90',
        '--epr-category-icon-active-color': '#6aa8de',
        '--epr-skin-tone-picker-menu-color': '#ffffff95',
        '--epr-skin-tone-outer-border-color': '#555555',
        '--epr-skin-tone-inner-border-color': 'var(--epr-bg-color)',
        '--epr-horizontal-padding': '10px',
        '--epr-picker-border-radius': '8px',
        '--epr-search-border-color': 'var(--epr-highlight-color)',
        '--epr-header-padding': '15px var(--epr-horizontal-padding)',
        '--epr-active-skin-tone-indicator-border-color':
          'var(--epr-highlight-color)',
        '--epr-active-skin-hover-color': 'var(--epr-hover-bg-color)',
        '--epr-search-input-bg-color-active':
          'var(--epr-search-input-bg-color)',
        '--epr-search-input-padding': '0 30px',
        '--epr-search-input-border-radius': '8px',
        '--epr-search-input-height': '40px',
        '--epr-search-input-text-color': 'var(--epr-text-color)',
        '--epr-search-input-placeholder-color': 'var(--epr-text-color)',
        '--epr-search-bar-inner-padding': 'var(--epr-horizontal-padding)',
        '--epr-category-navigation-button-size': '30px',
        '--epr-emoji-variation-picker-height': '45px',
        '--epr-emoji-variation-picker-bg-color': 'var(--epr-bg-color)',
        '--epr-preview-height': '70px',
        '--epr-preview-text-size': '14px',
        '--epr-preview-text-padding': '0 var(--epr-horizontal-padding)',
        '--epr-preview-border-color': 'var(--epr-picker-border-color)',
        '--epr-preview-text-color': 'var(--epr-text-color)',
        '--epr-category-padding': '0 var(--epr-horizontal-padding)',
        '--epr-category-label-bg-color': '#ffffffe6',
        '--epr-category-label-text-color': 'var(--epr-text-color)',
        '--epr-category-label-padding': '0 var(--epr-horizontal-padding)',
        '--epr-category-label-height': _4 + 'px',
        '--epr-emoji-size': '30px',
        '--epr-emoji-padding': '5px',
        '--epr-emoji-fullsize':
          'calc(var(--epr-emoji-size) + var(--epr-emoji-padding) * 2)',
        '--epr-emoji-hover-color': 'var(--epr-hover-bg-color)',
        '--epr-emoji-variation-indicator-color':
          'var(--epr-picker-border-color)',
        '--epr-emoji-variation-indicator-color-hover': 'var(--epr-text-color)',
        '--epr-header-overlay-z-index': '3',
        '--epr-emoji-variations-indictator-z-index': '1',
        '--epr-category-label-z-index': '2',
        '--epr-skin-variation-picker-z-index': '5',
        '--epr-preview-z-index': '6',
        '--epr-dark': '#000',
        '--epr-dark-emoji-variation-picker-bg-color': 'var(--epr-dark)',
        '--epr-dark-highlight-color': '#c0c0c0',
        '--epr-dark-text-color': 'var(--epr-highlight-color)',
        '--epr-dark-hover-bg-color': '#363636f6',
        '--epr-dark-hover-bg-color-reduced-opacity': '#36363680',
        '--epr-dark-focus-bg-color': '#474747',
        '--epr-dark-search-input-bg-color': '#333333',
        '--epr-dark-category-label-bg-color': '#222222e6',
        '--epr-dark-picker-border-color': '#151617',
        '--epr-dark-bg-color': '#222222',
        '--epr-dark-reactions-bg-color': '#22222290',
        '--epr-dark-search-input-bg-color-active': 'var(--epr-dark)',
        '--epr-dark-emoji-variation-indicator-color': '#444',
        '--epr-dark-category-icon-active-color': '#3271b7',
        '--epr-dark-skin-tone-picker-menu-color': '#22222295',
        '--epr-dark-skin-tone-outer-border-color':
          'var(--epr-dark-picker-border-color)',
        '--epr-dark-skin-tone-inner-border-color': '#00000000',
      },
    },
    autoThemeDark: {
      '.': x.autoTheme,
      '@media (prefers-color-scheme: dark)': { '--': No },
    },
    darkTheme: { '.': x.darkTheme, '--': No },
    reactionsMenu: {
      '.': 'epr-reactions',
      height: '50px',
      display: 'inline-flex',
      backgroundColor: 'var(--epr-reactions-bg-color)',
      backdropFilter: 'blur(8px)',
      '--': { '--epr-picker-border-radius': '50px' },
    },
  });
function P4(f, e) {
  if (!f || !e) return 0;
  var a = f.getBoundingClientRect().width,
    t = e.getBoundingClientRect().width;
  return Math.floor(a / t);
}
function V4(f, e) {
  if (!f || !e) return 0;
  var a = e.getBoundingClientRect().width,
    t = e.getBoundingClientRect().left,
    n = f.getBoundingClientRect().left;
  return Math.floor((t - n) / a);
}
function X4(f, e) {
  if (!f || !e) return 0;
  var a = e.getBoundingClientRect().height,
    t = e.getBoundingClientRect().top,
    n = f.getBoundingClientRect().top;
  return Math.round((t - n) / a);
}
function aw(f, e) {
  if (!f || !e) return !1;
  var a = e.getBoundingClientRect().height,
    t = e.getBoundingClientRect().top,
    n = f.getBoundingClientRect().top,
    u = f.getBoundingClientRect().height;
  return Math.round(t - n + a) < u;
}
function Er(f, e, a) {
  if (e === -1) {
    var t = Math.floor((f.length - 1) / a),
      n = t * a,
      u = f.length - 1;
    return f.slice(n, u + 1);
  }
  return f.slice(e * a, (e + 1) * a);
}
function tw(f, e, a) {
  var t = e + 1;
  return t * a > f.length ? [] : Er(f, t, a);
}
function K4(f, e, a, t) {
  var n = Er(f, e, a);
  return n[t] || n[n.length - 1] || null;
}
function nw(f, e, a, t) {
  var n = tw(f, e, a);
  return n[t] || n[n.length - 1] || null;
}
function uw(f, e, a, t) {
  var n = Er(f, e - 1, a);
  return n[t] || n[n.length - 1] || null;
}
function iw(f, e, a) {
  if (!f || !e.length) return null;
  var t = f.getBoundingClientRect().top,
    n = f.getBoundingClientRect().bottom,
    u = t + rw(f),
    i = e.find(function (l) {
      var r = l.getBoundingClientRect().top,
        c = l.getBoundingClientRect().bottom,
        d = l.clientHeight * a,
        M = r + d,
        s = c - d;
      return M < u ? !1 : (M >= t && M <= n) || (s >= t && s <= n);
    });
  return i || null;
}
function lw(f) {
  return !!f.nextElementSibling;
}
function rw(f) {
  for (
    var e = Array.from(f.querySelectorAll(Nf(x.label))), a = 0, t = e;
    a < t.length;
    a++
  ) {
    var n = t[a],
      u = n.getBoundingClientRect().height;
    if (u > 0) return u;
  }
  return _4;
}
var Yi = 'button' + Nf(x.emoji),
  cw = [Yi, Nf(x.visible), ':not(' + Nf(x.hidden) + ')'].join('');
function oe(f) {
  var e;
  return (e = f == null ? void 0 : f.closest(Yi)) != null ? e : null;
}
function Ir(f) {
  var e = fg(f),
    a = Ar(f);
  if (!e) return [];
  var t = It(a ?? e);
  return t ? [t, a] : [];
}
function ow(f) {
  var e;
  return !!(
    (f != null && f.matches(Yi)) ||
    (!(f == null || (e = f.parentElement) == null) && e.matches(Yi))
  );
}
function To(f) {
  var e;
  return (e = f == null ? void 0 : f.clientHeight) != null ? e : 0;
}
function q4(f) {
  if (!f) return 0;
  var e = oe(f),
    a = ba(e),
    t = zr(a);
  return Do(e) + Do(a) + t;
}
function zr(f) {
  var e, a;
  if (!f) return 0;
  var t = f.querySelector(Nf(x.categoryContent));
  return (
    ((e = f == null ? void 0 : f.clientHeight) != null ? e : 0) -
    ((a = t == null ? void 0 : t.clientHeight) != null ? a : 0)
  );
}
function dw(f) {
  return f ? F4(f) < zr(ba(f)) : !1;
}
function W4(f) {
  return f
    ? f.matches(Nf(x.scrollBody))
      ? f
      : f.querySelector(Nf(x.scrollBody))
    : null;
}
function F4(f) {
  var e, a;
  return f
    ? q4(f) - ((e = (a = $4(f)) == null ? void 0 : a.scrollTop) != null ? e : 0)
    : 0;
}
function $4(f) {
  var e;
  return f && (e = f.closest(Nf(x.scrollBody))) != null ? e : null;
}
function sw(f) {
  var e = oe(f),
    a = ba(e);
  return Eo(e) + Eo(a);
}
function Do(f) {
  var e;
  return (e = f == null ? void 0 : f.offsetTop) != null ? e : 0;
}
function Eo(f) {
  var e;
  return (e = f == null ? void 0 : f.offsetLeft) != null ? e : 0;
}
function Ar(f) {
  var e;
  return (e = gw(oe(f), 'unified')) != null ? e : null;
}
function fg(f) {
  var e = Ar(f);
  return e ? hr(e) : null;
}
function eg(f) {
  return f
    ? { unified: Ar(f), originalUnified: fg(f) }
    : { unified: null, originalUnified: null };
}
function gw(f, e) {
  var a;
  return (a = Mw(f)[e]) != null ? a : null;
}
function Mw(f) {
  var e;
  return (e = f == null ? void 0 : f.dataset) != null ? e : {};
}
function kr(f) {
  return f.classList.contains(x.visible);
}
function ag(f) {
  return f ? f.classList.contains(x.hidden) : !0;
}
function zt(f) {
  return f ? Array.from(f.querySelectorAll(cw)) : [];
}
function tg(f) {
  if (!f) return null;
  var e = zt(f),
    a = e.slice(-1),
    t = a[0];
  return t ? (kr(t) ? t : xr(t)) : null;
}
function ng(f) {
  var e = f.nextElementSibling;
  return e ? (kr(e) ? e : ng(e)) : Rr(Ml(f));
}
function xr(f) {
  var e = f.previousElementSibling;
  return e ? (kr(e) ? e : xr(e)) : tg(gl(f));
}
function Rr(f) {
  if (!f) return null;
  var e = zt(f);
  return iw(f, e, 0.1);
}
function gl(f) {
  var e = ba(f);
  if (!e) return null;
  var a = e.previousElementSibling;
  return a ? (ag(a) ? gl(a) : a) : null;
}
function Ml(f) {
  var e = ba(f);
  if (!e) return null;
  var a = e.nextElementSibling;
  return a ? (ag(a) ? Ml(a) : a) : null;
}
function ba(f) {
  return f ? f.closest(Nf(x.category)) : null;
}
function ug(f) {
  return f ? f.closest(Nf(x.categoryContent)) : null;
}
function ig(f) {
  return f
    .split('-')
    .map(function (e) {
      return String.fromCodePoint(parseInt(e, 16));
    })
    .join('');
}
var lg = 'epr_suggested';
function rg(f) {
  try {
    var e, a, t;
    if (!((e = window) != null && e.localStorage)) return [];
    var n = JSON.parse(
      (a = (t = window) == null ? void 0 : t.localStorage.getItem(lg)) != null
        ? a
        : '[]'
    );
    return f === Bn.FREQUENT
      ? n.sort(function (u, i) {
          return i.count - u.count;
        })
      : n;
  } catch {
    return [];
  }
}
function Lw(f, e) {
  var a = rg(),
    t = If(f, e),
    n = If(f),
    u = a.find(function (r) {
      var c = r.unified;
      return c === t;
    }),
    i;
  (u
    ? (i = [u].concat(
        a.filter(function (r) {
          return r !== u;
        })
      ))
    : ((u = { unified: t, original: n, count: 0 }), (i = [u].concat(a))),
    u.count++,
    (i.length = Math.min(i.length, 14)));
  try {
    var l;
    (l = window) == null || l.localStorage.setItem(lg, JSON.stringify(i));
  } catch {}
}
function mw(f) {
  return f.category === k.CUSTOM;
}
function cg(f) {
  return f.imgUrl !== void 0;
}
function og(f, e) {
  var a = o.useRef(),
    t = J4(),
    n = Km(),
    u = Zt(),
    i = u[1],
    l = Ja(),
    r = Cr(),
    c = r[0],
    d = tb(e),
    M = j4(),
    s = M[1],
    b = Ga(),
    y = Ba(),
    h = o.useCallback(
      function (m) {
        if (!n.current) {
          l();
          var w = Io(m),
            C = w[0],
            S = w[1];
          if (!(!C || !S)) {
            var p = Om(S) || c;
            (s(), Lw(C, p), d(bw(C, p, y, b), m));
          }
        }
      },
      [c, l, n, d, s, b, y]
    ),
    v = o.useCallback(
      function (m) {
        var w;
        a.current && clearTimeout(a.current);
        var C = Io(m),
          S = C[0];
        !S ||
          !Gt(S) ||
          (a.current =
            (w = window) == null
              ? void 0
              : w.setTimeout(function () {
                  ((n.current = !0),
                    (a.current = void 0),
                    l(),
                    t(m.target),
                    i(S));
                }, 500));
      },
      [n, l, t, i]
    ),
    L = o.useCallback(
      function () {
        a.current
          ? (clearTimeout(a.current), (a.current = void 0))
          : n.current &&
            requestAnimationFrame(function () {
              n.current = !1;
            });
      },
      [n]
    );
  o.useEffect(
    function () {
      if (f.current) {
        var g = f.current;
        return (
          g.addEventListener('click', h, { passive: !0 }),
          g.addEventListener('mousedown', v, { passive: !0 }),
          g.addEventListener('mouseup', L, { passive: !0 }),
          function () {
            (g == null || g.removeEventListener('click', h),
              g == null || g.removeEventListener('mousedown', v),
              g == null || g.removeEventListener('mouseup', L));
          }
        );
      }
    },
    [f, h, v, L]
  );
}
function Io(f) {
  var e = f == null ? void 0 : f.target;
  return ow(e) ? Ir(e) : [];
}
function bw(f, e, a, t) {
  var n = su(f);
  if (cg(f)) {
    var u = If(f);
    return {
      activeSkinTone: e,
      emoji: u,
      getImageUrl: function () {
        return f.imgUrl;
      },
      imageUrl: f.imgUrl,
      isCustom: !0,
      names: n,
      unified: u,
      unifiedWithoutSkinTone: u,
    };
  }
  var i = If(f, e);
  return {
    activeSkinTone: e,
    emoji: ig(i),
    getImageUrl: function (r) {
      return (r === void 0 && (r = a ?? Gf.APPLE), t(i, r));
    },
    imageUrl: t(i, a ?? Gf.APPLE),
    isCustom: !1,
    names: n,
    unified: i,
    unifiedWithoutSkinTone: If(f),
  };
}
function mu(f) {
  return o.createElement(
    'button',
    Object.assign({ type: 'button' }, f, {
      className: Q(ww.button, f.className),
    }),
    f.children
  );
}
var ww = $.create({
  button: {
    '.': 'epr-btn',
    cursor: 'pointer',
    border: '0',
    background: 'none',
    outline: 'none',
  },
});
function yw(f) {
  var e,
    a = f.emojiNames,
    t = f.unified,
    n = f.hidden,
    u = f.hiddenOnSearch,
    i = f.showVariations,
    l = i === void 0 ? !0 : i,
    r = f.hasVariations,
    c = f.children,
    d = f.className,
    M = f.noBackground,
    s = M === void 0 ? !1 : M;
  return o.createElement(
    mu,
    {
      className: Q(
        a0.emoji,
        n && wr.hidden,
        u && Ua.hiddenOnSearch,
        ((e = {}), (e[x.visible] = !n && !u), e),
        !!(r && l) && a0.hasVariations,
        s && a0.noBackground,
        d
      ),
      'data-unified': t,
      'aria-label': hw(a),
      'data-full-name': a,
    },
    c
  );
}
function hw(f) {
  var e;
  return f[0].match('flag-') && (e = f[1]) != null ? e : f[0];
}
var a0 = $.create({
    emoji: {
      '.': x.emoji,
      position: 'relative',
      width: 'var(--epr-emoji-fullsize)',
      height: 'var(--epr-emoji-fullsize)',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: 'var(--epr-emoji-fullsize)',
      maxHeight: 'var(--epr-emoji-fullsize)',
      borderRadius: '8px',
      overflow: 'hidden',
      transition: 'background-color 0.2s',
      ':hover': { backgroundColor: 'var(--epr-emoji-hover-color)' },
      ':focus': { backgroundColor: 'var(--epr-focus-bg-color)' },
    },
    noBackground: {
      background: 'none',
      ':hover': { backgroundColor: 'transparent', background: 'none' },
      ':focus': { backgroundColor: 'transparent', background: 'none' },
    },
    hasVariations: {
      '.': x.emojiHasVariations,
      ':after': {
        content: '',
        display: 'block',
        width: '0',
        height: '0',
        right: '0px',
        bottom: '1px',
        position: 'absolute',
        borderLeft: '4px solid transparent',
        borderRight: '4px solid transparent',
        transform: 'rotate(135deg)',
        borderBottom: '4px solid var(--epr-emoji-variation-indicator-color)',
        zIndex: 'var(--epr-emoji-variations-indictator-z-index)',
      },
      ':hover:after': {
        borderBottom:
          '4px solid var(--epr-emoji-variation-indicator-color-hover)',
      },
    },
  }),
  Qi = $.create({
    external: { '.': x.external, fontSize: '0' },
    common: { alignSelf: 'center', justifySelf: 'center', display: 'block' },
  });
function zo(f) {
  var e = f.emojiName,
    a = f.style,
    t = f.lazyLoad,
    n = t === void 0 ? !1 : t,
    u = f.imgUrl,
    i = f.onError,
    l = f.className;
  return o.createElement('img', {
    src: u,
    alt: e,
    className: Q(vw.emojiImag, Qi.external, Qi.common, l),
    loading: n ? 'lazy' : 'eager',
    onError: i,
    style: a,
  });
}
var vw = $.create({
  emojiImag: {
    '.': 'epr-emoji-img',
    maxWidth: 'var(--epr-emoji-fullsize)',
    maxHeight: 'var(--epr-emoji-fullsize)',
    minWidth: 'var(--epr-emoji-fullsize)',
    minHeight: 'var(--epr-emoji-fullsize)',
    padding: 'var(--epr-emoji-padding)',
  },
});
function jw(f) {
  var e = f.unified,
    a = f.style,
    t = f.className;
  return o.createElement(
    'span',
    {
      className: Q(Cw.nativeEmoji, Qi.common, Qi.external, t),
      'data-unified': e,
      style: a,
    },
    ig(e)
  );
}
var Cw = $.create({
  nativeEmoji: {
    '.': 'epr-emoji-native',
    fontFamily:
      '"Segoe UI Emoji", "Segoe UI Symbol", "Segoe UI", "Apple Color Emoji", "Twemoji Mozilla", "Noto Color Emoji", "EmojiOne Color", "Android Emoji"!important',
    position: 'relative',
    lineHeight: '100%',
    fontSize: 'var(--epr-emoji-size)',
    textAlign: 'center',
    alignSelf: 'center',
    justifySelf: 'center',
    letterSpacing: '0',
    padding: 'var(--epr-emoji-padding)',
  },
});
function d1(f) {
  var e = f.emoji,
    a = f.unified,
    t = f.emojiStyle,
    n = f.size,
    u = f.lazyLoad,
    i = f.getEmojiUrl,
    l = i === void 0 ? L4 : i,
    r = f.className,
    c = v4(),
    d = c[1],
    M = {};
  n && (M.width = M.height = M.fontSize = n + 'px');
  var s = e || It(a);
  if (!s) return null;
  if (cg(s))
    return o.createElement(zo, {
      style: M,
      emojiName: a,
      emojiStyle: Gf.NATIVE,
      lazyLoad: u,
      imgUrl: s.imgUrl,
      onError: b,
      className: r,
    });
  return o.createElement(
    o.Fragment,
    null,
    t === Gf.NATIVE
      ? o.createElement(jw, { unified: a, style: M, className: r })
      : o.createElement(zo, {
          style: M,
          emojiName: c1(s),
          emojiStyle: t,
          lazyLoad: u,
          imgUrl: l(a, t),
          onError: b,
          className: r,
        })
  );
  function b() {
    d(function (y) {
      return new Set(y).add(a);
    });
  }
}
function Ll(f) {
  var e = f.emoji,
    a = f.unified,
    t = f.hidden,
    n = f.hiddenOnSearch,
    u = f.emojiStyle,
    i = f.showVariations,
    l = i === void 0 ? !0 : i,
    r = f.size,
    c = f.lazyLoad,
    d = f.getEmojiUrl,
    M = f.className,
    s = f.noBackground,
    b = s === void 0 ? !1 : s,
    y = Gt(e);
  return o.createElement(
    yw,
    {
      hasVariations: y,
      showVariations: l,
      hidden: t,
      hiddenOnSearch: n,
      emojiNames: su(e),
      unified: a,
      noBackground: b,
    },
    o.createElement(d1, {
      unified: a,
      emoji: e,
      size: r,
      emojiStyle: u,
      lazyLoad: c,
      getEmojiUrl: d,
      className: M,
    })
  );
}
var pw =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAyMCA4MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNNS43LDEwLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40QzYsMTAuOSw2LjEsMTEsNi4zLDExaDMuNHYzLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40CgljMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjJjMC4zLDAsMC41LTAuMiwwLjUtMC41di0zLjRoMy40YzAuMywwLDAuNS0wLjIsMC41LTAuNXMtMC4yLTAuNS0wLjUtMC41aC0zLjRWNi43YzAtMC4zLTAuMi0wLjUtMC41LTAuNQoJQzkuOCw2LDkuNiw2LjIsOS42LDYuNXYzLjRINi4yQzUuOSw5LjksNS43LDEwLjEsNS43LDEwLjRMNS43LDEwLjR6Ii8+CjxwYXRoIGZpbGw9IiMzMzcxQjciIGQ9Ik01LjcsMzAuNGMwLDAuMSwwLjEsMC4zLDAuMiwwLjRTNi4xLDMxLDYuMywzMWgzLjR2My40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMiwwLjIsMC40LDAuMgoJYzAuMywwLDAuNS0wLjIsMC41LTAuNXYtMy40aDMuNGMwLjMsMCwwLjUtMC4yLDAuNS0wLjVzLTAuMi0wLjUtMC41LTAuNWgtMy40di0zLjRjMC0wLjMtMC4yLTAuNS0wLjUtMC41cy0wLjUsMC4yLTAuNSwwLjV2My40SDYuMgoJQzUuOSwyOS45LDUuNywzMC4xLDUuNywzMC40TDUuNywzMC40eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNNS43LDUwLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40QzYsNTAuOSw2LjEsNTEsNi4zLDUxaDMuNHYzLjRjMCwwLjEsMC4xLDAuMywwLjIsMC40CgljMC4xLDAuMSwwLjIsMC4yLDAuNCwwLjJjMC4zLDAsMC41LTAuMiwwLjUtMC41di0zLjRoMy40YzAuMywwLDAuNS0wLjIsMC41LTAuNXMtMC4yLTAuNS0wLjUtMC41aC0zLjR2LTMuNGMwLTAuMy0wLjItMC41LTAuNS0wLjUKCXMtMC41LDAuMi0wLjUsMC41djMuNEg2LjJDNS45LDQ5LjksNS43LDUwLjEsNS43LDUwLjRMNS43LDUwLjR6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik01LjcsNzAuNGMwLDAuMSwwLjEsMC4zLDAuMiwwLjRTNi4xLDcxLDYuMyw3MWgzLjR2My40YzAsMC4xLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMiwwLjIsMC40LDAuMgoJYzAuMywwLDAuNS0wLjIsMC41LTAuNXYtMy40aDMuNGMwLjMsMCwwLjUtMC4yLDAuNS0wLjVzLTAuMi0wLjUtMC41LTAuNWgtMy40di0zLjRjMC0wLjMtMC4yLTAuNS0wLjUtMC41cy0wLjUsMC4yLTAuNSwwLjV2My40SDYuNAoJQzUuOSw2OS45LDUuNyw3MC4xLDUuNyw3MC40TDUuNyw3MC40eiIvPgo8L3N2Zz4=';
function Sw() {
  var f = Jt(),
    e = f[1];
  return o.createElement(mu, {
    'aria-label': 'Show all Emojis',
    title: 'Show all Emojis',
    tabIndex: 0,
    className: Q(Nw.plusSign),
    onClick: function () {
      return e(!1);
    },
  });
}
var Nw = $.create(
  af(
    {
      plusSign: {
        fontSize: '20px',
        padding: '17px',
        color: 'var(--epr-text-color)',
        borderRadius: '50%',
        textAlign: 'center',
        lineHeight: '100%',
        width: '20px',
        height: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color 0.2s ease-in-out',
        ':after': {
          content: '',
          minWidth: '20px',
          minHeight: '20px',
          backgroundImage: 'url(' + pw + ')',
          backgroundColor: 'transparent',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '20px',
          backgroundPositionY: '0',
        },
        ':hover': {
          color: 'var(--epr-highlight-color)',
          backgroundColor: 'var(--epr-hover-bg-color-reduced-opacity)',
          ':after': { backgroundPositionY: '-20px' },
        },
        ':focus': {
          color: 'var(--epr-highlight-color)',
          backgroundColor: 'var(--epr-hover-bg-color-reduced-opacity)',
          ':after': { backgroundPositionY: '-40px' },
        },
      },
    },
    sa('plusSign', {
      ':after': { backgroundPositionY: '-40px' },
      ':hover:after': { backgroundPositionY: '-60px' },
    })
  )
);
function Tw() {
  var f = Jt(),
    e = f[0],
    a = mb(),
    t = gb();
  og(a, Zn.REACTIONS);
  var n = Ba(),
    u = S4(),
    i = Ga();
  return e
    ? o.createElement(
        'ul',
        { className: Q(Ao.list, !e && wr.hidden), ref: a },
        t.map(function (l) {
          return o.createElement(
            'li',
            { key: l },
            o.createElement(Ll, {
              emoji: It(l),
              emojiStyle: n,
              unified: l,
              showVariations: !1,
              className: Q(Ao.emojiButton),
              noBackground: !0,
              getEmojiUrl: i,
            })
          );
        }),
        u ? o.createElement('li', null, o.createElement(Sw, null)) : null
      )
    : null;
}
var Ao = $.create({
  list: {
    listStyle: 'none',
    margin: '0',
    padding: '0 5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  emojiButton: {
    ':hover': { transform: 'scale(1.2)' },
    ':focus': { transform: 'scale(1.2)' },
    ':active': { transform: 'scale(1.1)' },
    transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.5)',
  },
});
function Dw(f) {
  var e = Ja();
  o.useEffect(
    function () {
      var a = f.current;
      if (!a) return;
      a.addEventListener('scroll', t, { passive: !0 });
      function t() {
        e();
      }
      return function () {
        a == null || a.removeEventListener('scroll', t);
      };
    },
    [f, e]
  );
}
function Ew() {
  var f = v4(),
    e = f[0],
    a = Qb();
  return function (t) {
    var n = If(t),
      u = e.has(n),
      i = a(n);
    return { failedToLoad: u, filteredOut: i, hidden: u || i };
  };
}
function dg(f) {
  var e = f.categoryConfig,
    a = f.children,
    t = f.hidden,
    n = f.hiddenOnSearch,
    u = yr(e),
    i = g4(e);
  return o.createElement(
    'li',
    {
      className: Q(t0.category, t && wr.hidden, n && Ua.hiddenOnSearch),
      'data-name': u,
      'aria-label': i,
    },
    o.createElement('h2', { className: Q(t0.label) }, i),
    o.createElement('div', { className: Q(t0.categoryContent) }, a)
  );
}
var t0 = $.create({
    category: {
      '.': x.category,
      ':not(:has(.epr-visible))': { display: 'none' },
    },
    categoryContent: {
      '.': x.categoryContent,
      display: 'grid',
      gridGap: '0',
      gridTemplateColumns: 'repeat(auto-fill, var(--epr-emoji-fullsize))',
      justifyContent: 'space-between',
      margin: 'var(--epr-category-padding)',
      position: 'relative',
    },
    label: {
      '.': x.label,
      alignItems: 'center',
      backdropFilter: 'blur(3px)',
      backgroundColor: 'var(--epr-category-label-bg-color)',
      color: 'var(--epr-category-label-text-color)',
      display: 'flex',
      fontSize: '16px',
      fontWeight: 'bold',
      height: 'var(--epr-category-label-height)',
      margin: '0',
      padding: 'var(--epr-category-label-padding)',
      position: 'sticky',
      textTransform: 'capitalize',
      top: '0',
      width: '100%',
      zIndex: 'var(--epr-category-label-z-index)',
    },
  }),
  n0 = !1;
function Iw() {
  var f = o.useState(n0),
    e = f[0],
    a = f[1];
  return (
    o.useEffect(function () {
      (a(!0), (n0 = !0));
    }, []),
    e || n0
  );
}
function zw(f) {
  var e = f.categoryConfig,
    a = j4(),
    t = a[0],
    n = Iw(),
    u = ib(),
    i = Ga(),
    l = o.useMemo(
      function () {
        var d;
        return (d = rg(u)) != null ? d : [];
      },
      [t, u]
    ),
    r = Ba(),
    c = h4();
  return n
    ? o.createElement(
        dg,
        { categoryConfig: e, hiddenOnSearch: !0, hidden: l.length === 0 },
        l.map(function (d) {
          var M = It(d.original);
          return !M || c(M)
            ? null
            : o.createElement(Ll, {
                showVariations: !1,
                unified: d.unified,
                emojiStyle: r,
                emoji: M,
                key: d.unified,
                getEmojiUrl: i,
              });
        })
      )
    : null;
}
function Aw() {
  var f = T4(),
    e = o.useRef(0);
  return o.createElement(
    'ul',
    { className: Q(xw.emojiList) },
    f.map(function (a) {
      var t = yr(a);
      return t === k.SUGGESTED
        ? o.createElement(zw, { key: t, categoryConfig: a })
        : o.createElement(
            o.Suspense,
            { key: t },
            o.createElement(kw, {
              category: t,
              categoryConfig: a,
              renderdCategoriesCountRef: e,
            })
          );
    })
  );
}
function kw(f) {
  var e = f.category,
    a = f.categoryConfig,
    t = f.renderdCategoriesCountRef,
    n = Ew(),
    u = lb(),
    i = Ba(),
    l = qm(),
    r = Cr(),
    c = r[0],
    d = h4(),
    M = Ga(),
    s = !N4(),
    b = !l && t.current > 0 ? [] : Am(e);
  b.length > 0 && t.current++;
  var y = 0,
    h = b.map(function (v) {
      var L = If(v, c),
        g = n(v),
        m = g.failedToLoad,
        w = g.filteredOut,
        C = g.hidden,
        S = d(v);
      return (
        (C || S) && y++,
        S
          ? null
          : o.createElement(Ll, {
              showVariations: s,
              key: L,
              emoji: v,
              unified: L,
              hidden: m,
              hiddenOnSearch: w,
              emojiStyle: i,
              lazyLoad: u,
              getEmojiUrl: M,
            })
      );
    });
  return o.createElement(dg, { categoryConfig: a, hidden: y === h.length }, h);
}
var xw = $.create({
    emojiList: {
      '.': x.emojiList,
      listStyle: 'none',
      margin: '0',
      padding: '0',
    },
  }),
  Rw =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI1MHB4IgoJIGhlaWdodD0iMTVweCIgdmlld0JveD0iMCAwIDUwIDE1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MCAxNSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnIGlkPSJMYXllcl8xIj4KPC9nPgo8ZyBpZD0iTGF5ZXJfMiI+Cgk8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiNFOEU3RTciIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEuODYtMC40M2w5LjgzLDExLjUzYzAuNTksMC42OSwxLjU2LDAuNjksMi4xNCwwbDkuODMtMTEuNTMiLz4KCTxwYXRoIGZpbGw9IiMwMTAyMDIiIHN0cm9rZT0iIzE1MTYxNyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMjYuODYtMC40M2w5LjgzLDExLjUzYzAuNTksMC42OSwxLjU2LDAuNjksMi4xNCwwbDkuODMtMTEuNTMiLz4KPC9nPgo8L3N2Zz4=',
  bt;
(function (f) {
  ((f[(f.Up = 0)] = 'Up'), (f[(f.Down = 1)] = 'Down'));
})(bt || (bt = {}));
function Ow() {
  var f = ol(),
    e = bb(),
    a = Zt(),
    t = a[0],
    n = Ba(),
    u = Qw(e),
    i = u.getTop,
    l = u.getMenuDirection,
    r = R4(),
    c = Yw(e),
    d = Ga(),
    M = oe(f.current),
    s = !!(t && M && Gt(t) && M.classList.contains(x.emojiHasVariations));
  o.useEffect(
    function () {
      s && sl(e.current);
    },
    [e, s, f]
  );
  var b, y;
  return (
    !s && f.current ? r(null) : ((b = i()), (y = c())),
    o.createElement(
      'div',
      {
        ref: e,
        className: Q(
          Yu.variationPicker,
          l() === bt.Down && Yu.pointingUp,
          s && Yu.visible
        ),
        style: { top: b },
      },
      s && t
        ? [If(t)]
            .concat(gu(t))
            .slice(0, 6)
            .map(function (h) {
              return o.createElement(Ll, {
                key: h,
                emoji: t,
                unified: h,
                emojiStyle: n,
                showVariations: !1,
                getEmojiUrl: d,
              });
            })
        : null,
      o.createElement('div', { className: Q(Yu.pointer), style: y })
    )
  );
}
function Yw(f) {
  var e = ol();
  return function () {
    var t = {};
    if (!f.current) return t;
    if (e.current) {
      var n = oe(e.current),
        u = sw(n);
      if (!n) return t;
      t.left = u + (n == null ? void 0 : n.clientWidth) / 2;
    }
    return t;
  };
}
function Qw(f) {
  var e = ol(),
    a = ie(),
    t = bt.Up;
  return { getMenuDirection: n, getTop: u };
  function n() {
    return t;
  }
  function u() {
    t = bt.Up;
    var i = 0;
    if (!f.current) return 0;
    var l = To(f.current);
    if (e.current) {
      var r,
        c = a.current,
        d = oe(e.current),
        M = To(d);
      i = q4(d);
      var s = (r = c == null ? void 0 : c.scrollTop) != null ? r : 0;
      s > i - l && ((t = bt.Down), (i += M + l));
    }
    return i - l;
  }
}
var Yu = $.create(
  af(
    {
      variationPicker: {
        '.': x.variationPicker,
        position: 'absolute',
        right: '15px',
        left: '15px',
        padding: '5px',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
        borderRadius: '3px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        opacity: '0',
        visibility: 'hidden',
        pointerEvents: 'none',
        top: '-100%',
        border: '1px solid var(--epr-picker-border-color)',
        height: 'var(--epr-emoji-variation-picker-height)',
        zIndex: 'var(--epr-skin-variation-picker-z-index)',
        background: 'var(--epr-emoji-variation-picker-bg-color)',
        transform: 'scale(0.9)',
        transition: 'transform 0.1s ease-out, opacity 0.2s ease-out',
      },
      visible: {
        opacity: '1',
        visibility: 'visible',
        pointerEvents: 'all',
        transform: 'scale(1)',
      },
      pointingUp: {
        '.': 'pointing-up',
        transformOrigin: 'center 0%',
        transform: 'scale(0.9)',
      },
      '.pointing-up': {
        pointer: {
          top: '0',
          transform: 'rotate(180deg) translateY(100%) translateX(18px)',
        },
      },
      pointer: {
        '.': 'epr-emoji-pointer',
        content: '',
        position: 'absolute',
        width: '25px',
        height: '15px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        backgroundSize: '50px 15px',
        top: '100%',
        transform: 'translateX(-18px)',
        backgroundImage: 'url(' + Rw + ')',
      },
    },
    sa('pointer', { backgroundPosition: '-25px 0' })
  )
);
function Uw() {
  var f = ie();
  return (
    Dw(f),
    og(f, Zn.PICKER),
    Eb(),
    o.createElement(
      'div',
      { className: Q(Bw.body, Ua.hiddenOnReactions), ref: f },
      o.createElement(Ow, null),
      o.createElement(Aw, null)
    )
  );
}
var Bw = $.create({
  body: {
    '.': x.scrollBody,
    flex: '1',
    overflowY: 'scroll',
    overflowX: 'hidden',
    position: 'relative',
  },
});
function Gw(f, e) {
  if (!f || !e) return 0;
  var a = f.getBoundingClientRect(),
    t = e.getBoundingClientRect();
  return t.height - (a.y - t.y);
}
function Jw(f, e) {
  var a = ie(),
    t = U4(),
    n = Q4();
  o.useEffect(
    function () {
      if (!f) return;
      var u = a.current;
      (u == null || u.addEventListener('keydown', r, { passive: !0 }),
        u == null || u.addEventListener('mouseover', c, !0),
        u == null || u.addEventListener('focus', i, !0),
        u == null || u.addEventListener('mouseout', l, { passive: !0 }),
        u == null || u.addEventListener('blur', l, !0));
      function i(d) {
        var M = oe(d.target);
        if (!M) return l();
        var s = eg(M),
          b = s.unified,
          y = s.originalUnified;
        if (!b || !y) return l();
        e({ unified: b, originalUnified: y });
      }
      function l(d) {
        if (d) {
          var M = d.relatedTarget;
          if (!oe(M)) return e(null);
        }
        e(null);
      }
      function r(d) {
        d.key === 'Escape' && e(null);
      }
      function c(d) {
        if (!t()) {
          var M = oe(d.target);
          if (M) {
            var s = Gw(M, u),
              b = M.getBoundingClientRect().height;
            if (s < b) return Zw(M, e);
            Vf(M);
          }
        }
      }
      return function () {
        (u == null || u.removeEventListener('mouseover', c),
          u == null || u.removeEventListener('mouseout', l),
          u == null || u.removeEventListener('focus', i, !0),
          u == null || u.removeEventListener('blur', l, !0),
          u == null || u.removeEventListener('keydown', r));
      };
    },
    [a, f, e, t, n]
  );
}
function Zw(f, e) {
  var a,
    t = eg(f),
    n = t.unified,
    u = t.originalUnified;
  !n ||
    !u ||
    ((a = document.activeElement) == null || a.blur == null || a.blur(),
    e({ unified: n, originalUnified: u }));
}
var Qu, _n;
(function (f) {
  ((f.ROW = 'FlexRow'), (f.COLUMN = 'FlexColumn'));
})(_n || (_n = {}));
function sg(f) {
  var e = f.children,
    a = f.className,
    t = f.style,
    n = t === void 0 ? {} : t,
    u = f.direction,
    i = u === void 0 ? _n.ROW : u;
  return o.createElement(
    'div',
    { style: af({}, n), className: Q(ko.flex, a, ko[i]) },
    e
  );
}
var ko = $.create(
  ((Qu = { flex: { display: 'flex' } }),
  (Qu[_n.ROW] = { flexDirection: 'row' }),
  (Qu[_n.COLUMN] = { flexDirection: 'column' }),
  Qu)
);
function Hw(f) {
  var e = f.className,
    a = f.style,
    t = a === void 0 ? {} : a;
  return o.createElement('div', { style: af({ flex: 1 }, t), className: Q(e) });
}
function _w(f) {
  var e = f.children,
    a = f.className,
    t = f.style;
  return o.createElement(
    'div',
    { style: af({}, t, { position: 'absolute' }), className: a },
    e
  );
}
function ml(f) {
  var e = f.children,
    a = f.className,
    t = f.style;
  return o.createElement(
    'div',
    { style: af({}, t, { position: 'relative' }), className: a },
    e
  );
}
function Pw(f) {
  var e = f.isOpen,
    a = f.onClick,
    t = f.isActive,
    n = f.skinToneVariation,
    u = f.style;
  return o.createElement(mu, {
    style: u,
    onClick: a,
    className: Q('epr-tone-' + n, u0.tone, !e && u0.closedTone, t && u0.active),
    'aria-pressed': t,
    'aria-label': 'Skin tone ' + Em[n],
  });
}
var u0 = $.create({
    closedTone: { opacity: '0', zIndex: '0' },
    active: { '.': 'epr-active', zIndex: '1', opacity: '1' },
    tone: {
      '.': 'epr-tone',
      width: 'var(--epr-skin-tone-size)',
      display: 'block',
      cursor: 'pointer',
      borderRadius: '4px',
      height: 'var(--epr-skin-tone-size)',
      position: 'absolute',
      right: '0',
      transition: 'transform 0.3s ease-in-out, opacity 0.35s ease-in-out',
      zIndex: '0',
      border: '1px solid var(--epr-skin-tone-outer-border-color)',
      boxShadow: 'inset 0px 0px 0 1px var(--epr-skin-tone-inner-border-color)',
      ':hover': {
        boxShadow:
          '0 0 0 3px var(--epr-active-skin-hover-color), inset 0px 0px 0 1px var(--epr-skin-tone-inner-border-color)',
      },
      ':focus': { boxShadow: '0 0 0 3px var(--epr-focus-bg-color)' },
      '&.epr-tone-neutral': { backgroundColor: '#ffd225' },
      '&.epr-tone-1f3fb': { backgroundColor: '#ffdfbd' },
      '&.epr-tone-1f3fc': { backgroundColor: '#e9c197' },
      '&.epr-tone-1f3fd': { backgroundColor: '#c88e62' },
      '&.epr-tone-1f3fe': { backgroundColor: '#a86637' },
      '&.epr-tone-1f3ff': { backgroundColor: '#60463a' },
    },
  }),
  un = 28;
function Vw() {
  return o.createElement(
    ml,
    { style: { height: un } },
    o.createElement(
      _w,
      { style: { bottom: 0, right: 0 } },
      o.createElement(gg, { direction: Pn.VERTICAL })
    )
  );
}
function gg(f) {
  var e = f.direction,
    a = e === void 0 ? Pn.HORIZONTAL : e,
    t = pr(),
    n = N4(),
    u = Mu(),
    i = u[0],
    l = u[1],
    r = Cr(),
    c = r[0],
    d = r[1],
    M = nb(),
    s = Ja(),
    b = Za();
  if (n) return null;
  var y = un * Ri.length + 'px',
    h = i ? y : un + 'px',
    v = a === Pn.VERTICAL;
  return o.createElement(
    ml,
    {
      className: Q(
        fn.skinTones,
        v && fn.vertical,
        i && fn.open,
        v && i && fn.verticalShadow
      ),
      style: v ? { flexBasis: h, height: h } : { flexBasis: h },
    },
    o.createElement(
      'div',
      { className: Q(fn.select), ref: t },
      Ri.map(function (L, g) {
        var m = L === c;
        return o.createElement(Pw, {
          key: L,
          skinToneVariation: L,
          isOpen: i,
          style: {
            transform: Q(
              v
                ? 'translateY(-' + g * (i ? un : 0) + 'px)'
                : 'translateX(-' + g * (i ? un : 0) + 'px)',
              i && m && 'scale(1.3)'
            ),
          },
          isActive: m,
          onClick: function () {
            (i ? (d(L), M(L), b()) : l(!0), s());
          },
        });
      })
    )
  );
}
var Pn;
(function (f) {
  ((f.VERTICAL = 'epr-vertical'), (f.HORIZONTAL = 'epr-horizontal'));
})(Pn || (Pn = {}));
var fn = $.create({
  skinTones: {
    '.': 'epr-skin-tones',
    '--': { '--epr-skin-tone-size': '15px' },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    transition: 'all 0.3s ease-in-out',
    padding: '10px 0',
  },
  vertical: {
    padding: '9px',
    alignItems: 'flex-end',
    flexDirection: 'column',
    borderRadius: '6px',
    border: '1px solid var(--epr-bg-color)',
  },
  verticalShadow: { boxShadow: '0px 0 7px var(--epr-picker-border-color)' },
  open: {
    backdropFilter: 'blur(5px)',
    background: 'var(--epr-skin-tone-picker-menu-color)',
    '.epr-active': {
      border: '1px solid var(--epr-active-skin-tone-indicator-border-color)',
    },
  },
  select: {
    '.': 'epr-skin-tone-select',
    position: 'relative',
    width: 'var(--epr-skin-tone-size)',
    height: 'var(--epr-skin-tone-size)',
  },
});
function Xw() {
  var f = D4(),
    e = Z4(),
    a = Jt(),
    t = a[0];
  return f.showPreview
    ? o.createElement(
        sg,
        {
          className: Q(
            pn.preview,
            Ua.hiddenOnReactions,
            t && pn.hideOnReactions
          ),
        },
        o.createElement(Kw, null),
        o.createElement(Hw, null),
        e ? o.createElement(Vw, null) : null
      )
    : null;
}
function Kw() {
  var f,
    e = D4(),
    a = o.useState(null),
    t = a[0],
    n = a[1],
    u = Ba(),
    i = Zt(),
    l = i[0],
    r = Ga();
  Jw(e.showPreview, n);
  var c = It(
      (f = t == null ? void 0 : t.unified) != null
        ? f
        : t == null
          ? void 0
          : t.originalUnified
    ),
    d = c != null && t != null;
  return o.createElement(M, null);
  function M() {
    var s = l ?? It(e.defaultEmoji);
    if (!s) return null;
    var b = l ? c1(l) : e.defaultCaption;
    return o.createElement(
      o.Fragment,
      null,
      o.createElement(
        'div',
        null,
        d
          ? o.createElement(d1, {
              unified: t == null ? void 0 : t.unified,
              emoji: c,
              emojiStyle: u,
              size: 45,
              getEmojiUrl: r,
              className: Q(pn.emoji),
            })
          : s
            ? o.createElement(d1, {
                unified: If(s),
                emoji: s,
                emojiStyle: u,
                size: 45,
                getEmojiUrl: r,
                className: Q(pn.emoji),
              })
            : null
      ),
      o.createElement('div', { className: Q(pn.label) }, d ? c1(c) : b)
    );
  }
}
var pn = $.create({
  preview: {
    alignItems: 'center',
    borderTop: '1px solid var(--epr-preview-border-color)',
    height: 'var(--epr-preview-height)',
    padding: '0 var(--epr-horizontal-padding)',
    position: 'relative',
    zIndex: 'var(--epr-preview-z-index)',
  },
  label: {
    color: 'var(--epr-preview-text-color)',
    fontSize: 'var(--epr-preview-text-size)',
    padding: 'var(--epr-preview-text-padding)',
    textTransform: 'capitalize',
  },
  emoji: { padding: '0' },
  hideOnReactions: { opacity: '0', transition: 'opacity 0.5s ease-in-out' },
});
function qw(f) {
  var e;
  return (e = f == null ? void 0 : f.getAttribute('data-name')) != null
    ? e
    : null;
}
function Ww(f) {
  var e = ie();
  o.useEffect(
    function () {
      var a = new Map(),
        t = e.current,
        n = new IntersectionObserver(
          function (u) {
            if (t) {
              for (var i = cm(u), l; !(l = i()).done; ) {
                var r = l.value,
                  c = qw(r.target);
                a.set(c, r.intersectionRatio);
              }
              var d = Array.from(a),
                M = d[d.length - 1];
              if (M[1] == 1) return f(M[0]);
              for (var s = 0, b = d; s < b.length; s++) {
                var y = b[s],
                  h = y[0],
                  v = y[1];
                if (v) {
                  f(h);
                  break;
                }
              }
            }
          },
          { threshold: [0, 1] }
        );
      t == null ||
        t.querySelectorAll(Nf(x.category)).forEach(function (u) {
          n.observe(u);
        });
    },
    [e, f]
  );
}
function Fw() {
  var f = ie(),
    e = Lu();
  return function (t) {
    var n;
    if (f.current) {
      var u =
        (n = f.current) == null
          ? void 0
          : n.querySelector('[data-name="' + t + '"]');
      if (u) {
        var i = u.offsetTop || 0;
        O4(e.current, i);
      }
    }
  };
}
function $w() {
  var f = eb();
  return f ? f.length === 0 : !1;
}
var fy =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSI4MHB4IiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMDAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8ZyBpZD0iTGF5ZXJfMTEiPgoJPGc+CgkJPHBhdGggZmlsbD0iIzMzNzFCNyIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTIuOCwyOS41YzAuNiwwLDEuMS0wLjUsMS4xLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjEtMS4yYy0wLjYsMC0xLjIsMC41LTEuMiwxLjJDMTEuNiwyOSwxMi4yLDI5LjUsMTIuOCwyOS41eiBNMTIuOCwyOGMwLjIsMCwwLjQsMC4yLDAuNCwwLjQKCQkJYzAsMC4yLTAuMiwwLjQtMC40LDAuNGMtMC4yLDAtMC40LTAuMi0wLjQtMC40QzEyLjQsMjguMSwxMi42LDI4LDEyLjgsMjh6Ii8+CgkJPHBhdGggZmlsbD0iIzMzNzFCNyIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsMjNjLTMuOCwwLTcsMy4xLTcsN2MwLDMuOCwzLjEsNyw3LDcKCQkJczctMy4xLDctN0MxNywyNi4yLDEzLjgsMjMsMTAsMjN6IE0xMCwzNi4yYy0zLjQsMC02LjItMi44LTYuMi02LjJjMC0zLjQsMi44LTYuMiw2LjItNi4yczYuMiwyLjgsNi4yLDYuMgoJCQlDMTYuMiwzMy40LDEzLjQsMzYuMiwxMCwzNi4yeiIvPgoJCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE0LjYsMzEuMmMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjJINS43CgkJCWMtMC4xLDAtMC4yLDAuMS0wLjMsMC4yYy0wLjEsMC4xLTAuMSwwLjIsMCwwLjRjMC43LDIsMi41LDMuMyw0LjYsMy4zczMuOS0xLjMsNC42LTMuM0MxNC43LDMxLjUsMTQuNywzMS4zLDE0LjYsMzEuMnogTTEwLDM0LjEKCQkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMywzMy4yLDExLjYsMzQuMSwxMCwzNC4xeiIvPgoJCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiwyOS41YzAuNiwwLDEuMi0wLjUsMS4yLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjItMS4yYy0wLjYsMC0xLjEsMC41LTEuMSwxLjJDNi4xLDI5LDYuNiwyOS41LDcuMiwyOS41eiBNNy4yLDI4YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDNi44LDI4LjEsNywyOCw3LjIsMjh6Ii8+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNNjQuMSwzMy40bDIuMywwYzAuMiwwLDAuNCwwLjIsMC40LDAuNHYyLjFjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjMKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40di0yLjFDNjMuNywzMy42LDYzLjgsMzMuNCw2NC4xLDMzLjR6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTczLjUsMzMuNWgyLjRjMC4yLDAsMC40LDAuMiwwLjQsMC40djJjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjQKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40bDAtMkM3My4xLDMzLjYsNzMuMywzMy41LDczLjUsMzMuNXoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNNjMuNywyOC40aDEyLjZ2NUg2My43VjI4LjR6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTY1LjUsMjMuNmg4LjljMSwwLDEuOSwwLjgsMS45LDEuOXYzLjFINjMuN3YtMy4xQzYzLjcsMjQuNSw2NC41LDIzLjYsNjUuNSwyMy42eiIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjMzM3MUI3IiBjeD0iNjYuMiIgY3k9IjMwLjkiIHJ4PSIwLjkiIHJ5PSIxIi8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSI3My44IiBjeT0iMzAuOSIgcng9IjAuOSIgcnk9IjEiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNOTYuNCwzMGMwLDMuNi0yLjksNi41LTYuNCw2LjVzLTYuNC0yLjktNi40LTYuNXMyLjktNi41LDYuNC02LjVTOTYuNCwyNi40LDk2LjQsMzB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTk2LjMsMjguNmMwLDAsMCwwLjEsMCwwLjFjLTAuOSwwLjEtMi45LDAuMS00LjYtMS4xYy0xLjEtMC44LTItMS43LTIuNi0yLjUKCQkJCWMtMC4zLTAuNC0wLjYtMC44LTAuNy0xYy0wLjEtMC4xLTAuMS0wLjEtMC4xLTAuMmMwLjUtMC4xLDEuMi0wLjIsMi0wLjFjMS4yLDAsMi41LDAuMywzLjUsMS4xYzEsMC44LDEuNywxLjgsMi4xLDIuOAoJCQkJQzk2LjEsMjcuOSw5Ni4yLDI4LjMsOTYuMywyOC42eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik04NCwzMi4yYzAsMCwwLTAuMSwwLTAuMWMwLjktMC4yLDIuOS0wLjQsNC43LDAuNmMxLjEsMC43LDEuOSwxLjUsMi40LDIuMwoJCQkJYzAuNCwwLjUsMC42LDEsMC43LDEuM2MtMC40LDAuMS0xLDAuMi0xLjcsMC4zYy0xLDAtMi4xLTAuMS0zLjItMC44cy0xLjktMS42LTIuNC0yLjVDODQuMiwzMi44LDg0LjEsMzIuNSw4NCwzMi4yeiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTExNi4zLDI2LjhsLTEuNCwybC0wLjgtMC44bC0wLjYtMC42bDAsMC45bC0wLjEsOC4yaC02LjgKCQkJCWwtMC4xLTguMmwwLTAuOWwtMC42LDAuNmwtMC44LDAuOGwtMS40LTJsMi42LTIuOWMwLjEtMC4xLDAuMi0wLjEsMC4zLTAuMWgxLjNsMC40LDAuN2MwLjcsMS4zLDIuNiwxLjMsMy4zLTAuMWwwLjMtMC42aDEuMgoJCQkJYzAuMSwwLDAuMiwwLDAuMywwLjFsMC4zLTAuM2wtMC4zLDAuM0wxMTYuMywyNi44eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMTAuMSwyNy43aDJ2MC45YzAsMC40LTAuNCwwLjctMSwwLjdjLTAuNiwwLTEtMC4zLTEtMC43TDExMC4xLDI3LjdMMTEwLjEsMjcuN3oiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNMTI2LjgsMzQuM2MwLDEuMi0xLDIuMi0yLjIsMi4ycy0yLjItMS0yLjItMi4yczEtMi4yLDIuMi0yLjJTMTI2LjgsMzMuMSwxMjYuOCwzNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMzcuNiwzNC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJjLTEuMiwwLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMgoJCQkJQzEzNi42LDMyLjEsMTM3LjYsMzMuMSwxMzcuNiwzNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMjYuOCwyNC40djkuOSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMzcuNywyNC40djkuOSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIGQ9Ik0xMjYuOCwyMy41aDEwLjh2Mi43aC0xMC44QzEyNi44LDI2LjIsMTI2LjgsMjMuNSwxMjYuOCwyMy41eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSIjMzM3MUI3IiBkPSJNMTcwLjgsMjMuMUwxNzAuOCwyMy4xYy0wLjMsMC0wLjUsMC0wLjgsMGMtMi4xLDAtNCwxLTUuMywyLjVsLTAuMSwwbC0wLjEtMC4xbC0xLTEuMmwtMC4zLDMuNGwzLjQsMC4zCgkJCQlsLTEuMS0xLjNsLTAuMS0wLjFsMC4xLTAuMWMxLjEtMS41LDMtMi4zLDUtMi4xbDAsMGMzLjIsMC4zLDUuNSwzLjEsNS4yLDYuM2MtMC4zLDMtMy4xLDUuMy02LjEsNS4xYy0zLjEtMC4yLTUuNC0yLjktNS4zLTYKCQkJCWwtMS4zLTAuMWMtMC4yLDMuOCwyLjYsNy4xLDYuMyw3LjRjMy45LDAuMyw3LjMtMi42LDcuNi02LjVDMTc3LjIsMjYuOCwxNzQuNCwyMy41LDE3MC44LDIzLjF6Ii8+CgkJCTxwYXRoIGZpbGw9IiMzMzcxQjciIGQ9Ik0xNzAuMywyNy40YzAtMC4zLTAuMy0wLjYtMC42LTAuNnMtMC42LDAuMy0wLjYsMC42djMuMmMwLDAuMiwwLjEsMC4zLDAuMiwwLjRjMC4xLDAuMSwwLjMsMC4yLDAuNCwwLjIKCQkJCWgyLjRjMC40LDAsMC42LTAuMywwLjYtMC42YzAtMC40LTAuMy0wLjYtMC42LTAuNmgtMS42aC0wLjJ2LTAuMkwxNzAuMywyNy40TDE3MC4zLDI3LjR6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTE4Ni4yLDIzLjRoNy43YzEuNSwwLDIuNywxLjIsMi43LDIuN3Y3LjdjMCwxLjUtMS4yLDIuNy0yLjcsMi43aC03LjcKCQkJCWMtMS41LDAtMi43LTEuMi0yLjctMi43di03LjdDMTgzLjQsMjQuNiwxODQuNywyMy40LDE4Ni4yLDIzLjR6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSIxODYiIGN5PSIyOC45IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiMzMzcxQjciIGN4PSIxOTQiIGN5PSIyNi43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTg2LDMzLjNsMC40LTAuM2MwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMSwwLjQKCQkJCWMwLjUsMC4yLDEsMC4yLDEuNS0wLjFsMC44LTAuNWMwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMS44LDAuOCIvPgoJCTwvZz4KCTwvZz4KCTxwYXRoIGZpbGw9IiMzMzcxQjciIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLXdpZHRoPSIwLjI1IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNTYsMjQuM2MtMC4yLTAuMS0wLjQtMC4xLTAuNSwwCgkJYzAsMC0wLjIsMC4xLTAuOSwwLjJjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMC44LTAuMy0xLjctMC41LTIuNS0wLjVjLTAuMiwwLTAuNCwwLTAuNSwwYy0xLjMsMC0yLjUsMC4zLTMuNiwxCgkJYy0wLjIsMC4xLTAuMiwwLjItMC4yLDAuNHYxMS42YzAsMC4zLDAuMSwwLjUsMC4zLDAuNWMwLjYsMCwwLjUtMC40LDAuNS0wLjZ2LTUuN2MwLjctMC4zLDMuMi0xLjEsNS44LTAuMQoJCWMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjgsMCwxLjMtMC4zLDEuMy0wLjNjMC4yLTAuMSwwLjMtMC4yLDAuMy0wLjR2LTUuN0MxNTYuMiwyNC42LDE1Ni4xLDI0LjQsMTU2LDI0LjN6IE0xNTUuNiwzMC4yCgkJYy0wLjEsMC0wLjcsMC4xLTEsMC4xYy0wLjcsMC0yLjQtMC4xLTMuOC0wLjZjLTIuNS0xLTUtMC41LTYuMi0wLjF2LTQuOWMwLjktMC41LDIuMi0wLjcsMy4yLTAuN2MwLjEsMCwwLjMsMCwwLjQsMAoJCWMwLjcsMCwxLjUsMC4yLDIuMiwwLjRjMS42LDAuNiwzLjUsMC43LDQuMywwLjdjMC4yLDAsMC44LDAsMS0wLjFWMzAuMnoiLz4KCTxnPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgZD0iTTQ4LjEsMjMuNWgzLjdjMi41LDAsNC41LDIsNC41LDQuNWMwLDAuNS0wLjQsMC45LTAuOSwwLjlINDQuNWMtMC41LDAtMC45LTAuNC0wLjktMC45CgkJCUM0My42LDI1LjUsNDUuNiwyMy41LDQ4LjEsMjMuNXoiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsMjguOGMtMC4yLDAuMS0wLjUsMS4yLDAsMS41YzEuNCwxLDguNSwwLjgsMTEuMywwLjYKCQkJYzAuOC0wLjEsMS42LTAuNCwxLjctMS4yYzAtMC4zLTAuMS0wLjYtMC42LTAuOSIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMC42TDQzLjMsMzFjLTAuMiwwLjUsMC4yLDEsMC43LDAuOWMwLjMtMC4xLDAuNSwwLDAuNywwLjMKCQkJbDAuMSwwLjJjMC4zLDAuNSwxLDAuNiwxLjUsMC4ybDAsMGMwLjMtMC4yLDAuNy0wLjMsMS0wLjJsMC44LDAuM2MwLjQsMC4yLDAuOCwwLjEsMS4yLDBsMC41LTAuMmMwLjQtMC4yLDAuOS0wLjIsMS4zLDBsMC41LDAuMgoJCQljMC40LDAuMiwwLjgsMC4yLDEuMiwwbDAuMi0wLjFjMC4zLTAuMiwwLjgtMC4yLDEuMSwwLjFsMC4yLDAuMmMwLjMsMC4zLDAuOCwwLjIsMS0wLjJsMC4xLTAuMmMwLjEtMC4yLDAtMC4zLDAuMi0wLjMKCQkJYzAuNSwwLDEuMi0wLjMsMS4xLTAuN2wtMC40LTEuMSIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMi4yYy0wLjEsMC4yLTAuMywwLjgsMCwxLjFjMC4zLDAuNCwzLDEuMSw2LjQsMS4xCgkJCWMyLjIsMCw0LjYtMC4zLDYtMC42YzAuNS0wLjEsMC45LTAuNSwwLjgtMC45YzAtMC4yLTAuMi0wLjUtMC40LTAuNyIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwzMy4zYzAsMC41LDAuNiwyLjMsMS4zLDIuN2MxLjgsMC44LDUuNywwLjcsOC4xLDAuNQoJCQljMS4zLTAuMSwyLjUtMC43LDMuMi0xLjhjMC4zLTAuNSwwLjUtMSwwLjUtMS40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUxLjYiIGN5PSIyNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUzIiBjeT0iMjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjMzM3MUI3IiBjeD0iNTMiIGN5PSIyNy4yIiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjU0LjMiIGN5PSIyNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjUwLjkiIGN5PSIyNSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJPC9nPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBkPSJNMjQuMiwzMXYtNy42YzAuMSwwLjEsMC44LDAuOSwyLjgsMy4xYzIuNS0xLjYsNS42LTAuNyw2LjksMGwyLjQtMy4xdjcuMQoJCQljMCwxLjItMC4xLDIuNS0wLjksMy40Yy0xLDEuMi0yLjcsMi41LTUuMywyLjVjLTIuOSwwLTQuNS0xLjUtNS4zLTIuOUMyNC4yLDMyLjksMjQuMiwzMiwyNC4yLDMxeiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMjEuMiwzMGw1LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzM3MUI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDM0LjFsNS40LTEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCwzMGwtNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzNzFCNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCwzNC4xbC01LjQtMS4yIi8+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMzMzcxQjciIGQ9Ik0yOS41LDMyLjRMMjksMzEuN2MtMC4yLTAuMywwLTAuNiwwLjMtMC42aDEuNAoJCQljMC4zLDAsMC41LDAuNCwwLjMsMC42bC0wLjcsMWwwLDBjLTAuNywxLjItMi42LDEuMS0zLjEtMC4zbC0wLjEtMC4yYy0wLjEtMC4yLDAtMC40LDAuMi0wLjVzMC40LDAsMC41LDAuMmwwLjEsMC4yCgkJCUMyOC4zLDMyLjgsMjkuMSwzMi45LDI5LjUsMzIuNHoiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMzMzcxQjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTMyLjQsMzIuMWwtMC4xLDAuMmMtMC40LDEtMS44LDEuMS0yLjMsMC4yIi8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjI3LjYiIGN5PSIyOS43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJPGVsbGlwc2UgZmlsbD0iIzMzNzFCNyIgY3g9IjMyLjQiIGN5PSIyOS43IiByeD0iMC43IiByeT0iMC43Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xMi44LDQ5LjVjMC42LDAsMS4xLTAuNSwxLjEtMS4xCgkJCWMwLTAuNi0wLjUtMS4yLTEuMS0xLjJjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMkMxMS42LDQ5LDEyLjIsNDkuNSwxMi44LDQ5LjV6IE0xMi44LDQ4YzAuMiwwLDAuNCwwLjIsMC40LDAuNAoJCQljMCwwLjItMC4yLDAuNC0wLjQsMC40Yy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDMTIuNCw0OC4xLDEyLjYsNDgsMTIuOCw0OHoiLz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik0xNC42LDUxLjJjLTAuMS0wLjEtMC4yLTAuMi0wLjMtMC4ySDUuNwoJCQljLTAuMSwwLTAuMiwwLjEtMC4zLDAuMmMtMC4xLDAuMS0wLjEsMC4yLDAsMC40YzAuNywyLDIuNSwzLjMsNC42LDMuM3MzLjktMS4zLDQuNi0zLjNDMTQuNyw1MS41LDE0LjcsNTEuMywxNC42LDUxLjJ6IE0xMCw1NC4xCgkJCWMtMS42LDAtMy0wLjktMy43LTIuMmg3LjNDMTMsNTMuMiwxMS42LDU0LjEsMTAsNTQuMXoiLz4KCQk8cGF0aCBmaWxsPSIjQzBDMEJGIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS13aWR0aD0iMC4xIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGQ9Ik03LjIsNDkuNWMwLjYsMCwxLjItMC41LDEuMi0xLjEKCQkJYzAtMC42LTAuNS0xLjItMS4yLTEuMmMtMC42LDAtMS4xLDAuNS0xLjEsMS4yQzYuMSw0OSw2LjYsNDkuNSw3LjIsNDkuNXogTTcuMiw0OGMwLjIsMCwwLjQsMC4yLDAuNCwwLjRjMCwwLjItMC4yLDAuNC0wLjQsMC40CgkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40QzYuOCw0OC4xLDcsNDgsNy4yLDQ4eiIvPgoJCTxwYXRoIGZpbGw9IiNDMEMwQkYiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEwLDQzYy0zLjgsMC03LDMuMS03LDdjMCwzLjgsMy4xLDcsNyw3CgkJCXM3LTMuMSw3LTdDMTcsNDYuMiwxMy44LDQzLDEwLDQzeiBNMTAsNTYuMmMtMy40LDAtNi4yLTIuOC02LjItNi4yYzAtMy40LDIuOC02LjIsNi4yLTYuMnM2LjIsMi44LDYuMiw2LjIKCQkJQzE2LjIsNTMuNCwxMy40LDU2LjIsMTAsNTYuMnoiLz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik02NC4xLDUzLjRsMi4zLDBjMC4yLDAsMC40LDAuMiwwLjQsMC40djIuMWMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuMwoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjR2LTIuMUM2My43LDUzLjYsNjMuOCw1My40LDY0LjEsNTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNzMuNSw1My41aDIuNGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2MmMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuNAoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRsMC0yQzczLjEsNTMuNiw3My4zLDUzLjUsNzMuNSw1My41eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik02My43LDQ4LjRoMTIuNnY1SDYzLjdWNDguNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNjUuNSw0My42aDguOWMxLDAsMS45LDAuOCwxLjksMS45djMuMUg2My43di0zLjFDNjMuNyw0NC41LDY0LjUsNDMuNiw2NS41LDQzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiNDMEMwQkYiIGN4PSI2Ni4yIiBjeT0iNTAuOSIgcng9IjAuOSIgcnk9IjEiLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjczLjgiIGN5PSI1MC45IiByeD0iMC45IiByeT0iMSIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik05Ni40LDUwYzAsMy42LTIuOSw2LjUtNi40LDYuNXMtNi40LTIuOS02LjQtNi41czIuOS02LjUsNi40LTYuNVM5Ni40LDQ2LjQsOTYuNCw1MHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNOTYuMyw0OC42YzAsMCwwLDAuMSwwLDAuMWMtMC45LDAuMS0yLjksMC4xLTQuNi0xLjJjLTEuMS0wLjgtMi0xLjctMi42LTIuNQoJCQkJYy0wLjMtMC40LTAuNi0wLjgtMC43LTFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4yYzAuNS0wLjEsMS4yLTAuMiwyLTAuMmMxLjIsMCwyLjUsMC4zLDMuNSwxLjFjMSwwLjgsMS43LDEuOCwyLjEsMi44CgkJCQlDOTYuMSw0Ny45LDk2LjIsNDguMyw5Ni4zLDQ4LjZ6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTg0LDUyLjJjMCwwLDAtMC4xLDAtMC4xYzAuOS0wLjIsMi45LTAuNCw0LjcsMC42YzEuMSwwLjcsMS45LDEuNSwyLjQsMi4zCgkJCQljMC40LDAuNSwwLjYsMSwwLjcsMS4zYy0wLjQsMC4xLTEsMC4yLTEuNywwLjNjLTEsMC0yLjEtMC4xLTMuMi0wLjhzLTEuOS0xLjYtMi40LTIuNUM4NC4yLDUyLjgsODQuMSw1Mi41LDg0LDUyLjJ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNDYuOGwtMS40LDJsLTAuOC0wLjhsLTAuNi0wLjdsMCwwLjlsLTAuMSw4LjJoLTYuOAoJCQkJbC0wLjEtOC4ybDAtMC45bC0wLjYsMC43bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDQ2Ljh6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTExMC4xLDQ3LjdoMnYwLjljMCwwLjQtMC40LDAuNy0xLDAuN2MtMC42LDAtMS0wLjMtMS0wLjdMMTEwLjEsNDcuN0wxMTAuMSw0Ny43eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik0xMjYuOCw1NC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJzLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMlMxMjYuOCw1My4xLDEyNi44LDU0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEzNy42LDU0LjNjMCwxLjItMSwyLjItMi4yLDIuMmMtMS4yLDAtMi4yLTEtMi4yLTIuMnMxLTIuMiwyLjItMi4yCgkJCQlDMTM2LjYsNTIuMSwxMzcuNiw1My4xLDEzNy42LDU0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEyNi44LDQ0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEzNy43LDQ0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgZD0iTTEyNi44LDQzLjVoMTAuOHYyLjdoLTEwLjhDMTI2LjgsNDYuMiwxMjYuOCw0My41LDEyNi44LDQzLjV6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiNDMEMwQkYiIGQ9Ik0xNzAuOCw0My4xTDE3MC44LDQzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjUsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJbC0xLjMtMC4xYy0wLjIsMy44LDIuNiw3LjEsNi4zLDcuNGMzLjksMC4zLDcuMy0yLjYsNy42LTYuNUMxNzcuMiw0Ni44LDE3NC40LDQzLjUsMTcwLjgsNDMuMXoiLz4KCQkJPHBhdGggZmlsbD0iI0MwQzBCRiIgZD0iTTE3MC4zLDQ3LjRjMC0wLjMtMC4zLTAuNi0wLjYtMC42cy0wLjYsMC4zLTAuNiwwLjZ2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZjMC0wLjMtMC4zLTAuNi0wLjYtMC42aC0xLjZoLTAuMnYtMC4yTDE3MC4zLDQ3LjRMMTcwLjMsNDcuNHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNMTg2LjIsNDMuNGg3LjdjMS41LDAsMi43LDEuMiwyLjcsMi43djcuN2MwLDEuNS0xLjIsMi43LTIuNywyLjdoLTcuNwoJCQkJYy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTcuN0MxODMuNCw0NC43LDE4NC43LDQzLjQsMTg2LjIsNDMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjE4NiIgY3k9IjQ4LjkiIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPGVsbGlwc2UgZmlsbD0iI0MwQzBCRiIgY3g9IjE5NCIgY3k9IjQ2LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xODYsNTMuM2wwLjQtMC4zYzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLDAuNAoJCQkJYzAuNSwwLjIsMSwwLjIsMS41LTAuMWwwLjgtMC41YzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLjgsMC44Ii8+CgkJPC9nPgoJPC9nPgoJPHBhdGggZmlsbD0iI0MwQzBCRiIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE1Niw0NC4zYy0wLjItMC4xLTAuNC0wLjEtMC41LDAKCQljMCwwLTAuMiwwLjEtMC45LDAuMmMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCQljLTAuMiwwLjEtMC4yLDAuMi0wLjIsMC40djExLjZjMCwwLjMsMC4xLDAuNSwwLjMsMC41YzAuNiwwLDAuNS0wLjQsMC41LTAuNnYtNS43YzAuNy0wLjMsMy4yLTEuMSw1LjgtMC4xCgkJYzEuNiwwLjYsMy41LDAuNyw0LjMsMC43YzAuOCwwLDEuMy0wLjMsMS4zLTAuM2MwLjItMC4xLDAuMy0wLjIsMC4zLTAuNHYtNS43QzE1Ni4yLDQ0LjYsMTU2LjEsNDQuNCwxNTYsNDQuM3ogTTE1NS42LDUwLjIKCQljLTAuMSwwLTAuNywwLjEtMSwwLjFjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMi41LTEtNS0wLjUtNi4yLTAuMXYtNC45YzAuOS0wLjUsMi4yLTAuNywzLjItMC43YzAuMSwwLDAuMywwLDAuNCwwCgkJYzAuNywwLDEuNSwwLjIsMi4yLDAuNGMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVY1MC4yeiIvPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBkPSJNNDguMSw0My41aDMuN2MyLjUsMCw0LjUsMiw0LjUsNC41YzAsMC41LTAuNCwwLjktMC45LDAuOUg0NC41Yy0wLjUsMC0wLjktMC40LTAuOS0wLjkKCQkJQzQzLjYsNDUuNSw0NS42LDQzLjUsNDguMSw0My41eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw0OC44Yy0wLjIsMC4xLTAuNSwxLjIsMCwxLjVjMS40LDEsOC41LDAuOCwxMS4zLDAuNgoJCQljMC44LTAuMSwxLjYtMC40LDEuNy0xLjJjMC0wLjMtMC4xLTAuNi0wLjYtMC45Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUwLjZMNDMuMyw1MWMtMC4yLDAuNSwwLjIsMSwwLjcsMC45YzAuMy0wLjEsMC41LDAsMC43LDAuMwoJCQlsMC4xLDAuMmMwLjMsMC41LDEsMC42LDEuNSwwLjJsMCwwYzAuMy0wLjIsMC43LTAuMywxLTAuMmwwLjgsMC4zYzAuNCwwLjIsMC44LDAuMSwxLjIsMGwwLjUtMC4yYzAuNC0wLjIsMC45LTAuMiwxLjMsMGwwLjUsMC4yCgkJCWMwLjQsMC4yLDAuOCwwLjIsMS4yLDBsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjIsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yYzAuMS0wLjIsMC0wLjMsMC4yLTAuMwoJCQljMC41LDAsMS4yLTAuMywxLjEtMC43bC0wLjQtMS4xIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUyLjJjLTAuMSwwLjItMC4zLDAuOCwwLDEuMWMwLjMsMC40LDMsMS4xLDYuNCwxLjEKCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC41LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDUzLjNjMCwwLjUsMC42LDIuMywxLjMsMi43YzEuOCwwLjgsNS43LDAuNyw4LjEsMC41CgkJCWMxLjMtMC4xLDIuNS0wLjcsMy4yLTEuOGMwLjMtMC41LDAuNS0xLDAuNS0xLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTEuNiIgY3k9IjQ2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTMiIGN5PSI0NSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCTxlbGxpcHNlIGZpbGw9IiNDMEMwQkYiIGN4PSI1MyIgY3k9IjQ3LjIiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTQuMyIgY3k9IjQ2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iNTAuOSIgY3k9IjQ1IiByeD0iMC4zIiByeT0iMC40Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIGQ9Ik0yNC4yLDUxdi03LjZjMC4xLDAuMSwwLjgsMC45LDIuOCwzLjFjMi41LTEuNyw1LjYtMC43LDYuOSwwbDIuNC0zLjF2Ny4xCgkJCWMwLDEuMi0wLjEsMi41LTAuOSwzLjRjLTEsMS4yLTIuNywyLjUtNS4zLDIuNWMtMi45LDAtNC41LTEuNS01LjMtMi45QzI0LjIsNTIuOSwyNC4yLDUyLDI0LjIsNTF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDUwbDUuNCwxLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNDMEMwQkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIxLjIsNTQuMWw1LjQtMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDUwbC01LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjQzBDMEJGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDU0LjFsLTUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MwQzBCRiIgZD0iTTI5LjUsNTIuNEwyOSw1MS43Yy0wLjItMC4zLDAtMC42LDAuMy0wLjZoMS40CgkJCWMwLjMsMCwwLjUsMC40LDAuMywwLjZsLTAuNywxbDAsMGMtMC43LDEuMi0yLjYsMS4xLTMuMS0wLjNsLTAuMS0wLjJjLTAuMS0wLjIsMC0wLjQsMC4yLTAuNXMwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsNTIuOCwyOS4xLDUyLjksMjkuNSw1Mi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0MwQzBCRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCw1Mi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iMjcuNiIgY3k9IjQ5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQk8ZWxsaXBzZSBmaWxsPSIjQzBDMEJGIiBjeD0iMzIuNCIgY3k9IjQ5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCTwvZz4KCTxnPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE0LjYsNzEuMmMtMC4xLTAuMS0wLjItMC4yLTAuMy0wLjJINS43CgkJCWMtMC4xLDAtMC4yLDAuMS0wLjMsMC4yYy0wLjEsMC4xLTAuMSwwLjIsMCwwLjRjMC43LDIsMi41LDMuMyw0LjYsMy4zczMuOS0xLjMsNC42LTMuM0MxNC43LDcxLjUsMTQuNyw3MS4zLDE0LjYsNzEuMnogTTEwLDc0LjEKCQkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMyw3My4yLDExLjYsNzQuMSwxMCw3NC4xeiIvPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjgsNjkuNWMwLjYsMCwxLjEtMC41LDEuMS0xLjEKCQkJYzAtMC42LTAuNS0xLjItMS4xLTEuMmMtMC42LDAtMS4yLDAuNS0xLjIsMS4yQzExLjYsNjksMTIuMiw2OS41LDEyLjgsNjkuNXogTTEyLjgsNjhjMC4yLDAsMC40LDAuMiwwLjQsMC40CgkJCWMwLDAuMi0wLjIsMC40LTAuNCwwLjRjLTAuMiwwLTAuNC0wLjItMC40LTAuNEMxMi40LDY4LjEsMTIuNiw2OCwxMi44LDY4eiIvPgoJCTxwYXRoIGZpbGw9IiM2QUE5REQiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiw2OS41YzAuNiwwLDEuMi0wLjUsMS4yLTEuMQoJCQljMC0wLjYtMC41LTEuMi0xLjItMS4yYy0wLjYsMC0xLjEsMC41LTEuMSwxLjJDNi4xLDY5LDYuNiw2OS41LDcuMiw2OS41eiBNNy4yLDY4YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjRDNi44LDY4LjEsNyw2OCw3LjIsNjh6Ii8+CgkJPHBhdGggZmlsbD0iIzZBQTlERCIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsNjNjLTMuOCwwLTcsMy4xLTcsN2MwLDMuOCwzLjEsNyw3LDcKCQkJczctMy4xLDctN0MxNyw2Ni4yLDEzLjgsNjMsMTAsNjN6IE0xMCw3Ni4yYy0zLjQsMC02LjItMi44LTYuMi02LjJjMC0zLjQsMi44LTYuMiw2LjItNi4yczYuMiwyLjgsNi4yLDYuMgoJCQlDMTYuMiw3My40LDEzLjQsNzYuMiwxMCw3Ni4yeiIvPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTY0LjEsNzMuNGwyLjMsMGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMiwwLjQtMC40LDAuNGgtMi4zCgkJCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNHYtMi4xQzYzLjcsNzMuNiw2My44LDczLjQsNjQuMSw3My40eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik03My41LDczLjVoMi40YzAuMiwwLDAuNCwwLjIsMC40LDAuNHYyLjFjMCwwLjItMC4yLDAuNC0wLjQsMC40aC0yLjQKCQkJCWMtMC4yLDAtMC40LTAuMi0wLjQtMC40bDAtMi4xQzczLjEsNzMuNiw3My4zLDczLjUsNzMuNSw3My41eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik02My43LDY4LjRoMTIuNnY1SDYzLjdWNjguNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNNjUuNSw2My42aDguOWMxLDAsMS45LDAuOCwxLjksMS45djMuMUg2My43di0zLjFDNjMuNyw2NC41LDY0LjUsNjMuNiw2NS41LDYzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM2QUE5REQiIGN4PSI2Ni4yIiBjeT0iNzAuOSIgcng9IjAuOSIgcnk9IjAuOSIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNzMuOCIgY3k9IjcwLjkiIHJ4PSIwLjkiIHJ5PSIwLjkiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNOTYuNCw3MGMwLDMuNi0yLjksNi41LTYuNCw2LjVzLTYuNC0yLjktNi40LTYuNXMyLjktNi41LDYuNC02LjVTOTYuNCw2Ni40LDk2LjQsNzB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTk2LjMsNjguNmMwLDAsMCwwLjEsMCwwLjFjLTAuOSwwLjEtMi45LDAuMS00LjYtMS4yYy0xLjEtMC44LTItMS43LTIuNi0yLjUKCQkJCWMtMC4zLTAuNC0wLjYtMC44LTAuNy0xLjFjLTAuMS0wLjEtMC4xLTAuMi0wLjEtMC4yYzAuNS0wLjEsMS4yLTAuMiwyLTAuMmMxLjIsMCwyLjUsMC4zLDMuNSwxLjFjMSwwLjgsMS43LDEuOCwyLjEsMi44CgkJCQlDOTYuMSw2Ny45LDk2LjIsNjguMyw5Ni4zLDY4LjZ6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTg0LDcyLjJjMCwwLDAtMC4xLDAtMC4xYzAuOS0wLjIsMi45LTAuNCw0LjcsMC42YzEuMSwwLjcsMS45LDEuNSwyLjQsMi4zCgkJCQljMC40LDAuNSwwLjYsMSwwLjcsMS4zYy0wLjQsMC4xLTEsMC4yLTEuNywwLjNjLTEsMC0yLjEtMC4xLTMuMi0wLjhzLTEuOS0xLjYtMi40LTIuNUM4NC4yLDcyLjgsODQuMSw3Mi40LDg0LDcyLjJ6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNjYuOGwtMS40LDJsLTAuOC0wLjhsLTAuNi0wLjdsMCwwLjlsLTAuMSw4LjJoLTYuOAoJCQkJbC0wLjEtOC4ybDAtMC45bC0wLjYsMC43bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDY2Ljh6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTExMC4xLDY3LjdoMnYwLjljMCwwLjQtMC40LDAuNy0xLDAuN2MtMC42LDAtMS0wLjMtMS0wLjdMMTEwLjEsNjcuN0wxMTAuMSw2Ny43eiIvPgoJCTwvZz4KCTwvZz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik0xMjYuOCw3NC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJzLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMlMxMjYuOCw3My4xLDEyNi44LDc0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEzNy42LDc0LjNjMCwxLjItMSwyLjItMi4yLDIuMmMtMS4yLDAtMi4yLTEtMi4yLTIuMnMxLTIuMiwyLjItMi4yCgkJCQlDMTM2LjYsNzIuMSwxMzcuNiw3My4xLDEzNy42LDc0LjN6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEyNi44LDY0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEzNy43LDY0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgZD0iTTEyNi44LDYzLjVoMTAuOHYyLjdoLTEwLjhDMTI2LjgsNjYuMiwxMjYuOCw2My41LDEyNi44LDYzLjV6Ii8+CgkJPC9nPgoJPC9nPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik0xNzAuOCw2My4xTDE3MC44LDYzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjQsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJbC0xLjMtMC4xYy0wLjIsMy44LDIuNiw3LjEsNi4zLDcuNGMzLjksMC4zLDcuMy0yLjYsNy42LTYuNUMxNzcuMiw2Ni44LDE3NC40LDYzLjUsMTcwLjgsNjMuMXoiLz4KCQkJPHBhdGggZmlsbD0iIzZBQTlERCIgZD0iTTE3MC4zLDY3LjRjMC0wLjMtMC4zLTAuNi0wLjYtMC42cy0wLjYsMC4zLTAuNiwwLjZ2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZTMTcyLjQsNzAsMTcyLDcwaC0xLjZoLTAuMnYtMC4yTDE3MC4zLDY3LjRMMTcwLjMsNjcuNHoiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNMTg2LjIsNjMuNGg3LjdjMS41LDAsMi43LDEuMiwyLjcsMi43djcuN2MwLDEuNS0xLjIsMi43LTIuNywyLjdoLTcuNwoJCQkJYy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTcuN0MxODMuNCw2NC43LDE4NC43LDYzLjQsMTg2LjIsNjMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzZBQTlERCIgY3g9IjE4NiIgY3k9IjY4LjkiIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzZBQTlERCIgY3g9IjE5NCIgY3k9IjY2LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xODYsNzMuM2wwLjQtMC4zYzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLDAuNAoJCQkJYzAuNSwwLjIsMSwwLjIsMS41LTAuMWwwLjgtMC41YzAuNC0wLjMsMS0wLjMsMS41LTAuMWwxLjgsMC44Ii8+CgkJPC9nPgoJPC9nPgoJPHBhdGggZmlsbD0iIzZBQTlERCIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2Utd2lkdGg9IjAuMjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTE1Niw2NC4zYy0wLjItMC4xLTAuNC0wLjEtMC41LDAKCQljMCwwLTAuMiwwLjEtMC45LDAuMmMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCQljLTAuMiwwLjEtMC4yLDAuMi0wLjIsMC40djExLjZjMCwwLjMsMC4xLDAuNSwwLjMsMC41YzAuNiwwLDAuNS0wLjQsMC41LTAuNnYtNS43YzAuNy0wLjMsMy4yLTEuMSw1LjgtMC4xCgkJYzEuNiwwLjYsMy41LDAuNyw0LjMsMC43YzAuOCwwLDEuMy0wLjMsMS4zLTAuM2MwLjItMC4xLDAuMy0wLjIsMC4zLTAuNHYtNS43QzE1Ni4yLDY0LjYsMTU2LjEsNjQuNCwxNTYsNjQuM3ogTTE1NS42LDcwLjIKCQljLTAuMSwwLTAuNywwLjEtMSwwLjFjLTAuNywwLTIuNC0wLjEtMy44LTAuNmMtMi41LTEtNS0wLjUtNi4yLTAuMXYtNC45YzAuOS0wLjUsMi4yLTAuNywzLjItMC43YzAuMSwwLDAuMywwLDAuNCwwCgkJYzAuNywwLDEuNSwwLjIsMi4yLDAuNGMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVY3MC4yeiIvPgoJPGc+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBkPSJNNDguMSw2My41aDMuN2MyLjUsMCw0LjUsMiw0LjUsNC41YzAsMC41LTAuNCwwLjktMC45LDAuOUg0NC41Yy0wLjUsMC0wLjktMC40LTAuOS0wLjkKCQkJQzQzLjYsNjUuNSw0NS42LDYzLjUsNDguMSw2My41eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw2OC44Yy0wLjIsMC4xLTAuNSwxLjIsMCwxLjVjMS40LDAuOSw4LjUsMC44LDExLjMsMC42CgkJCWMwLjgtMC4xLDEuNi0wLjQsMS43LTEuMmMwLTAuMy0wLjEtMC42LTAuNi0wLjkiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsNzAuNkw0My4zLDcxYy0wLjIsMC41LDAuMiwxLDAuNywwLjljMC4zLTAuMSwwLjUsMC4xLDAuNywwLjMKCQkJbDAuMSwwLjJjMC4zLDAuNSwxLDAuNiwxLjUsMC4ybDAsMGMwLjMtMC4yLDAuNy0wLjMsMS0wLjJsMC44LDAuM2MwLjQsMC4yLDAuOCwwLjEsMS4yLDBsMC41LTAuMmMwLjQtMC4yLDAuOS0wLjIsMS4zLDBsMC41LDAuMgoJCQljMC40LDAuMiwwLjgsMC4yLDEuMi0wLjFsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjIsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yYzAuMS0wLjIsMC0wLjMsMC4yLTAuMwoJCQljMC41LDAsMS4yLTAuMywxLjEtMC43bC0wLjQtMS4xIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDcyLjJjLTAuMSwwLjItMC4zLDAuOCwwLDEuMWMwLjMsMC40LDMsMS4xLDYuNCwxLjEKCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC40LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDczLjNjMCwwLjUsMC42LDIuMywxLjMsMi43YzEuOCwwLjgsNS43LDAuNyw4LjEsMC41CgkJCWMxLjMtMC4xLDIuNS0wLjcsMy4yLTEuOGMwLjMtMC41LDAuNS0xLDAuNS0xLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTEuNiIgY3k9IjY2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTMiIGN5PSI2NSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCTxlbGxpcHNlIGZpbGw9IiM2QUE5REQiIGN4PSI1MyIgY3k9IjY3LjIiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTQuMyIgY3k9IjY2LjUiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iNTAuOSIgY3k9IjY1IiByeD0iMC4zIiByeT0iMC40Ii8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIGQ9Ik0yNC4yLDcxdi03LjZjMC4xLDAuMSwwLjgsMC45LDIuOCwzLjFjMi41LTEuNyw1LjYtMC43LDYuOSwwbDIuNC0zLjF2Ny4xCgkJCWMwLDEuMi0wLjEsMi41LTAuOSwzLjRjLTEsMS4yLTIuNywyLjUtNS4zLDIuNWMtMi45LDAtNC41LTEuNS01LjMtMi45QzI0LjIsNzIuOSwyNC4yLDcyLDI0LjIsNzF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkFBOUREIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDcwLjFsNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMjEuMiw3NC4xbDUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM2QUE5REQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTM4LjgsNzAuMWwtNS40LDEuMiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzguOCw3NC4xbC01LjQtMS4yIi8+CgkJPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiM2QUE5REQiIGQ9Ik0yOS41LDcyLjRMMjksNzEuN2MtMC4yLTAuMywwLTAuNiwwLjMtMC42aDEuNAoJCQljMC4zLDAsMC41LDAuNCwwLjMsMC42bC0wLjcsMWwwLDBjLTAuNywxLjItMi42LDEuMS0zLjEtMC4zbC0wLjEtMC4yYy0wLjEtMC4yLDAtMC40LDAuMi0wLjVjMC4yLTAuMSwwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsNzIuOCwyOS4xLDcyLjksMjkuNSw3Mi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZBQTlERCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCw3Mi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iMjcuNiIgY3k9IjY5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCQk8ZWxsaXBzZSBmaWxsPSIjNkFBOUREIiBjeD0iMzIuNCIgY3k9IjY5LjciIHJ4PSIwLjciIHJ5PSIwLjciLz4KCTwvZz4KPC9nPgo8Zz4KCTxwYXRoIGZpbGw9IiM4Njg2ODYiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTEyLjgsOS41YzAuNiwwLDEuMS0wLjUsMS4xLTEuMgoJCWMwLTAuNi0wLjUtMS4xLTEuMS0xLjFjLTAuNiwwLTEuMiwwLjUtMS4yLDEuMVMxMi4yLDkuNSwxMi44LDkuNXogTTEyLjgsNy45YzAuMiwwLDAuNCwwLjIsMC40LDAuNGMwLDAuMi0wLjIsMC40LTAuNCwwLjQKCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNEMxMi40LDguMSwxMi42LDcuOSwxMi44LDcuOXoiLz4KCTxwYXRoIGZpbGw9IiM4Njg2ODYiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLXdpZHRoPSIwLjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTcuMiw5LjVjMC42LDAsMS4yLTAuNSwxLjItMS4yCgkJYzAtMC42LTAuNS0xLjEtMS4yLTEuMWMtMC42LDAtMS4xLDAuNS0xLjEsMS4xUzYuNiw5LjUsNy4yLDkuNXogTTcuMiw3LjljMC4yLDAsMC40LDAuMiwwLjQsMC40YzAsMC4yLTAuMiwwLjQtMC40LDAuNAoJCUM3LDguNyw2LjgsOC41LDYuOCw4LjNDNi44LDguMSw3LDcuOSw3LjIsNy45eiIvPgoJPHBhdGggZmlsbD0iIzg2ODY4NiIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTQuNiwxMS4yYy0wLjEtMC4xLTAuMi0wLjItMC4zLTAuMkg1LjcKCQljLTAuMSwwLTAuMiwwLjEtMC4zLDAuMmMtMC4xLDAuMS0wLjEsMC4yLDAsMC40YzAuNywyLDIuNSwzLjMsNC42LDMuM3MzLjktMS4zLDQuNi0zLjNDMTQuNywxMS40LDE0LjcsMTEuMywxNC42LDExLjJ6IE0xMCwxNC4xCgkJYy0xLjYsMC0zLTAuOS0zLjctMi4yaDcuM0MxMywxMy4yLDExLjYsMTQuMSwxMCwxNC4xeiIvPgoJPHBhdGggZmlsbD0iIzg2ODY4NiIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2Utd2lkdGg9IjAuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTAsM2MtMy44LDAtNywzLjEtNyw3czMuMSw3LDcsN3M3LTMuMSw3LTcKCQlTMTMuOCwzLDEwLDN6IE0xMCwxNi4yYy0zLjQsMC02LjItMi44LTYuMi02LjJTNi42LDMuOCwxMCwzLjhzNi4yLDIuOCw2LjIsNi4yUzEzLjQsMTYuMiwxMCwxNi4yeiIvPgo8L2c+CjxnIGlkPSJDYXJfMDAwMDAwMTg5MzUzOTUwODU0MTM0MTM3NTAwMDAwMDA4MjUyNzM4Nzc4NDI3NzU3MTVfIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik02NC4xLDEzLjRsMi4zLDBjMC4yLDAsMC40LDAuMiwwLjQsMC40djIuMWMwLDAuMi0wLjIsMC40LTAuNCwwLjRoLTIuMwoJCQkJYy0wLjIsMC0wLjQtMC4yLTAuNC0wLjR2LTIuMUM2My43LDEzLjYsNjMuOCwxMy40LDY0LjEsMTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNNzMuNSwxMy40aDIuNGMwLjIsMCwwLjQsMC4yLDAuNCwwLjR2Mi4xYzAsMC4yLTAuMiwwLjQtMC40LDAuNGgtMi40CgkJCQljLTAuMiwwLTAuNC0wLjItMC40LTAuNGwwLTIuMUM3My4xLDEzLjYsNzMuMywxMy40LDczLjUsMTMuNHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNNjMuNyw4LjRoMTIuNnY1SDYzLjdWOC40eiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik02NS41LDMuNmg4LjljMSwwLDEuOSwwLjgsMS45LDEuOXYzLjFINjMuN1Y1LjVDNjMuNyw0LjQsNjQuNSwzLjYsNjUuNSwzLjZ6Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI2Ni4yIiBjeT0iMTAuOSIgcng9IjAuOSIgcnk9IjAuOSIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNzMuOCIgY3k9IjEwLjkiIHJ4PSIwLjkiIHJ5PSIwLjkiLz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGcgaWQ9IkFjdGl2aXRpZXMiPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTk2LjQsMTBjMCwzLjYtMi45LDYuNS02LjQsNi41cy02LjQtMi45LTYuNC02LjVzMi45LTYuNSw2LjQtNi41Uzk2LjQsNi40LDk2LjQsMTB6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTk2LjMsOC42YzAsMCwwLDAuMSwwLDAuMWMtMC45LDAuMS0yLjksMC4xLTQuNi0xLjJjLTEuMS0wLjgtMi0xLjctMi42LTIuNQoJCQkJYy0wLjMtMC40LTAuNi0wLjgtMC43LTEuMWMtMC4xLTAuMS0wLjEtMC4yLTAuMS0wLjJjMC41LTAuMSwxLjItMC4yLDItMC4yYzEuMiwwLDIuNSwwLjMsMy41LDEuMWMxLDAuOCwxLjcsMS44LDIuMSwyLjgKCQkJCUM5Ni4xLDcuOSw5Ni4yLDguMyw5Ni4zLDguNnoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNODQsMTIuMWMwLDAsMC0wLjEsMC0wLjFjMC45LTAuMiwyLjktMC40LDQuNywwLjZjMS4xLDAuNiwxLjksMS41LDIuNCwyLjMKCQkJCWMwLjQsMC41LDAuNiwxLDAuNywxLjNjLTAuNCwwLjEtMSwwLjItMS43LDAuM2MtMSwwLTIuMS0wLjEtMy4yLTAuOGMtMS4xLTAuNi0xLjktMS42LTIuNC0yLjVDODQuMiwxMi44LDg0LjEsMTIuNCw4NCwxMi4xeiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyBpZD0iT2JqZWN0c18wMDAwMDA2NDMxMjM3MTczOTEzMDMxNTI1MDAwMDAxMDIyNTg4OTAzMjIyODYzMjk3NV8iPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTE2LjMsNi44bC0xLjQsMkwxMTQuMSw4bC0wLjYtMC43bDAsMC45bC0wLjEsOC4yaC02LjhsLTAuMS04LjIKCQkJCWwwLTAuOUwxMDUuOSw4bC0wLjgsMC44bC0xLjQtMmwyLjYtMi45YzAuMS0wLjEsMC4yLTAuMSwwLjMtMC4xaDEuM2wwLjQsMC43YzAuNywxLjMsMi42LDEuMywzLjMtMC4xbDAuMy0wLjZoMS4yCgkJCQljMC4xLDAsMC4yLDAsMC4zLDAuMWwwLjMtMC4zbC0wLjMsMC4zTDExNi4zLDYuOHoiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTEwLjEsNy43aDJ2MC45YzAsMC40LTAuNCwwLjctMSwwLjdjLTAuNiwwLTEtMC4zLTEtMC43TDExMC4xLDcuN0wxMTAuMSw3Ljd6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJTeW1ib2xzXzAwMDAwMDk2NzQ2OTA3ODY5OTI5OTIxMTgwMDAwMDA2NDg0ODEyODMwMjgyNTgyNDE2XyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTI2LjgsMTQuM2MwLDEuMi0xLDIuMi0yLjIsMi4ycy0yLjItMS0yLjItMi4yczEtMi4yLDIuMi0yLjJTMTI2LjgsMTMuMSwxMjYuOCwxNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xMzcuNiwxNC4zYzAsMS4yLTEsMi4yLTIuMiwyLjJjLTEuMiwwLTIuMi0xLTIuMi0yLjJzMS0yLjIsMi4yLTIuMgoJCQkJQzEzNi42LDEyLjEsMTM3LjYsMTMuMSwxMzcuNiwxNC4zeiIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xMjYuOCw0LjR2OS45Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTEzNy43LDQuNHY5LjkiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBkPSJNMTI2LjgsMy41aDEwLjh2Mi43aC0xMC44QzEyNi44LDYuMiwxMjYuOCwzLjUsMTI2LjgsMy41eiIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8ZyBpZD0iUmVjZW50cyI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZmlsbD0iIzg2ODY4NiIgZD0iTTE3MC44LDMuMUwxNzAuOCwzLjFjLTAuMywwLTAuNSwwLTAuOCwwYy0yLjEsMC00LDEtNS4zLDIuNWwtMC4xLDBsLTAuMS0wLjFsLTEtMS4ybC0wLjMsMy40bDMuNCwwLjMKCQkJCWwtMS4xLTEuM2wtMC4xLTAuMWwwLjEtMC4xYzEuMS0xLjQsMy0yLjMsNS0yLjFsMCwwYzMuMiwwLjMsNS41LDMuMSw1LjIsNi4zYy0wLjMsMy0zLjEsNS4zLTYuMSw1LjFjLTMuMS0wLjItNS40LTIuOS01LjMtNgoJCQkJTDE2Myw5LjVjLTAuMiwzLjgsMi42LDcuMSw2LjMsNy40YzMuOSwwLjQsNy4zLTIuNiw3LjYtNi41QzE3Ny4yLDYuOCwxNzQuNCwzLjUsMTcwLjgsMy4xeiIvPgoJCQk8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNMTcwLjMsNy40YzAtMC4zLTAuMy0wLjYtMC42LTAuNlMxNjksNy4xLDE2OSw3LjR2My4yYzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjEsMC4xLDAuMywwLjIsMC40LDAuMgoJCQkJaDIuNGMwLjQsMCwwLjYtMC4zLDAuNi0wLjZzLTAuMy0wLjYtMC42LTAuNmgtMS42aC0wLjJWOS44TDE3MC4zLDcuNEwxNzAuMyw3LjR6Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJDdXN0b21fMDAwMDAxODEwODcyMjk0MzQzMDIzMzY3ODAwMDAwMDUxNTIyNzc5NDU5NDA2NzQ0ODhfIj4KCTxnPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik0xODYuMiwzLjRoNy43YzEuNSwwLDIuNywxLjIsMi43LDIuN3Y3LjdjMCwxLjUtMS4yLDIuNy0yLjcsMi43aC03LjcKCQkJCWMtMS41LDAtMi43LTEuMi0yLjctMi43VjYuMUMxODMuNCw0LjYsMTg0LjcsMy40LDE4Ni4yLDMuNHoiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzg2ODY4NiIgY3g9IjE4NiIgY3k9IjguOSIgcng9IjAuNyIgcnk9IjAuNyIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iMTk0IiBjeT0iNi43IiByeD0iMC43IiByeT0iMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMTg2LDEzLjNsMC40LTAuM2MwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMSwwLjQKCQkJCWMwLjUsMC4yLDEsMC4yLDEuNS0wLjFsMC44LTAuNWMwLjQtMC4zLDEtMC4zLDEuNS0wLjFsMS44LDAuOCIvPgoJCTwvZz4KCTwvZz4KPC9nPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS13aWR0aD0iMC4yNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNMTU2LDQuM2MtMC4yLTAuMS0wLjQtMC4xLTAuNSwwCgljMCwwLTAuMiwwLjEtMC45LDAuMWMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0wLjgtMC4zLTEuNy0wLjUtMi41LTAuNWMtMC4yLDAtMC40LDAtMC41LDBjLTEuMywwLTIuNSwwLjMtMy42LDEKCWMtMC4yLDAuMS0wLjIsMC4yLTAuMiwwLjR2MTEuNmMwLDAuMywwLjEsMC41LDAuMywwLjVjMC42LDAsMC41LTAuNCwwLjUtMC42di01LjdjMC43LTAuMywzLjItMS4xLDUuOC0wLjFjMS42LDAuNiwzLjUsMC43LDQuMywwLjcKCWMwLjgsMCwxLjMtMC4zLDEuMy0wLjNjMC4yLTAuMSwwLjMtMC4yLDAuMy0wLjRWNC43QzE1Ni4yLDQuNSwxNTYuMSw0LjQsMTU2LDQuM3ogTTE1NS42LDEwLjJjLTAuMSwwLTAuNywwLjEtMSwwLjEKCWMtMC43LDAtMi40LTAuMS0zLjgtMC42Yy0yLjUtMS01LTAuNS02LjItMC4xVjQuN2MwLjktMC41LDIuMi0wLjcsMy4yLTAuN2MwLjEsMCwwLjMsMCwwLjQsMGMwLjcsMCwxLjUsMC4yLDIuMiwwLjQKCWMxLjYsMC42LDMuNSwwLjcsNC4zLDAuN2MwLjIsMCwwLjgsMCwxLTAuMVYxMC4yeiIvPgo8ZyBpZD0iRm9vZCI+Cgk8ZyBpZD0iTGF5ZXJfMTIiPgoJCTxnPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIGQ9Ik00OC4xLDMuNWgzLjdjMi41LDAsNC41LDIsNC41LDQuNWMwLDAuNS0wLjQsMC45LTAuOSwwLjlINDQuNWMtMC41LDAtMC45LTAuNC0wLjktMC45CgkJCQlDNDMuNiw1LjUsNDUuNiwzLjUsNDguMSwzLjV6Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSw4LjdjLTAuMiwwLjEtMC41LDEuMiwwLDEuNWMxLjQsMC45LDguNSwwLjgsMTEuMywwLjYKCQkJCWMwLjgtMC4xLDEuNi0wLjQsMS43LTEuMmMwLTAuMy0wLjEtMC42LTAuNi0wLjkiLz4KCQkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik00My41LDEwLjZMNDMuMywxMWMtMC4yLDAuNSwwLjIsMSwwLjcsMC45CgkJCQljMC4zLTAuMSwwLjUsMC4xLDAuNywwLjNsMC4xLDAuMmMwLjMsMC41LDEsMC42LDEuNSwwLjJsMCwwYzAuMy0wLjIsMC43LTAuMywxLTAuMmwwLjgsMC4zYzAuNCwwLjEsMC44LDAuMSwxLjIsMGwwLjUtMC4yCgkJCQljMC40LTAuMiwwLjktMC4yLDEuMywwbDAuNSwwLjJjMC40LDAuMiwwLjgsMC4xLDEuMi0wLjFsMC4yLTAuMWMwLjMtMC4yLDAuOC0wLjEsMS4xLDAuMWwwLjIsMC4yYzAuMywwLjMsMC44LDAuMiwxLTAuMmwwLjEtMC4yCgkJCQljMC4xLTAuMiwwLTAuMywwLjItMC40YzAuNSwwLDEuMi0wLjMsMS4xLTAuN2wtMC40LTEuMSIvPgoJCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTQzLjUsMTIuMWMtMC4xLDAuMi0wLjMsMC44LDAsMS4xYzAuMywwLjQsMywxLjEsNi40LDEuMQoJCQkJYzIuMiwwLDQuNi0wLjMsNi0wLjZjMC41LTAuMSwwLjktMC40LDAuOC0wLjljMC0wLjItMC4yLTAuNS0wLjQtMC43Ii8+CgkJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNNDMuNSwxMy4zYzAsMC41LDAuNiwyLjQsMS4zLDIuNmMxLjgsMC44LDUuNywwLjcsOC4xLDAuNQoJCQkJYzEuMy0wLjEsMi41LTAuNywzLjItMS44YzAuMy0wLjUsMC41LTEsMC41LTEuNCIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNTEuNiIgY3k9IjYuNSIgcng9IjAuMyIgcnk9IjAuNCIvPgoJCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iNTMiIGN5PSI0LjkiIHJ4PSIwLjMiIHJ5PSIwLjQiLz4KCQkJPGVsbGlwc2UgZmlsbD0iIzg2ODY4NiIgY3g9IjUzIiBjeT0iNy4yIiByeD0iMC4zIiByeT0iMC40Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI1NC4zIiBjeT0iNi41IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSI1MC45IiBjeT0iNC45IiByeD0iMC4zIiByeT0iMC40Ii8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnIGlkPSJBbmltYWxzIj4KCTxnPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgZD0iTTI0LjIsMTFWMy41YzAuMSwwLjEsMC44LDAuOSwyLjgsMy4xYzIuNS0xLjcsNS42LTAuNyw2LjksMGwyLjQtMy4xdjcuMQoJCQljMCwxLjItMC4xLDIuNS0wLjksMy40Yy0xLDEuMi0yLjcsMi41LTUuMywyLjVjLTIuOSwwLTQuNS0xLjUtNS4zLTIuOUMyNC4yLDEyLjksMjQuMiwxMS45LDI0LjIsMTF6Ii8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0yMS4yLDEwbDUuNCwxLjIiLz4KCQk8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM4Njg2ODYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTIxLjIsMTQuMWw1LjQtMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDEwbC01LjQsMS4yIi8+CgkJPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODY4Njg2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0zOC44LDE0LjFsLTUuNC0xLjIiLz4KCQk8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzg2ODY4NiIgZD0iTTI5LjUsMTIuNEwyOSwxMS43Yy0wLjItMC4zLDAtMC42LDAuMy0wLjZoMS40CgkJCWMwLjMsMCwwLjUsMC40LDAuMywwLjZsLTAuNywxbDAsMGMtMC43LDEuMi0yLjYsMS4xLTMuMS0wLjNsLTAuMS0wLjJjLTAuMS0wLjIsMC0wLjQsMC4yLTAuNXMwLjQsMCwwLjUsMC4ybDAuMSwwLjIKCQkJQzI4LjMsMTIuNywyOS4xLDEyLjksMjkuNSwxMi40eiIvPgoJCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg2ODY4NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBkPSJNMzIuNCwxMi4xbC0wLjEsMC4yYy0wLjQsMS0xLjgsMS4xLTIuMywwLjIiLz4KCQk8ZWxsaXBzZSBmaWxsPSIjODY4Njg2IiBjeD0iMjcuNiIgY3k9IjkuNyIgcng9IjAuNyIgcnk9IjAuNyIvPgoJCTxlbGxpcHNlIGZpbGw9IiM4Njg2ODYiIGN4PSIzMi40IiBjeT0iOS43IiByeD0iMC43IiByeT0iMC43Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+';
function ey(f) {
  var e,
    a = f.isActiveCategory,
    t = f.category,
    n = f.allowNavigation,
    u = f.categoryConfig,
    i = f.onClick;
  return o.createElement(mu, {
    tabIndex: n ? 0 : -1,
    className: Q(
      ty.catBtn,
      Ua.categoryBtn,
      'epr-icn-' + t,
      ((e = {}), (e[x.active] = a), e)
    ),
    onClick: i,
    'aria-label': g4(u),
    'aria-selected': a,
    role: 'tab',
    'aria-controls': 'epr-category-nav-id',
  });
}
var xo = {
    backgroundPositionY: 'calc(var(--epr-category-navigation-button-size) * 3)',
  },
  ay = {
    backgroundPositionY: 'calc(var(--epr-category-navigation-button-size) * 2)',
  },
  Ro = {
    ':not(.epr-search-active)': {
      catBtn: { ':hover': xo, '&.epr-active': xo },
    },
  },
  ty = $.create(
    af(
      {
        catBtn: {
          '.': 'epr-cat-btn',
          display: 'inline-block',
          transition: 'opacity 0.2s ease-in-out',
          position: 'relative',
          height: 'var(--epr-category-navigation-button-size)',
          width: 'var(--epr-category-navigation-button-size)',
          backgroundSize:
            'calc(var(--epr-category-navigation-button-size) * 10)',
          outline: 'none',
          backgroundPosition: '0 0',
          backgroundImage: 'url(' + fy + ')',
          ':focus:before': {
            content: '',
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            border: '2px solid var(--epr-category-icon-active-color)',
            borderRadius: '50%',
          },
          '&.epr-icn-suggested': {
            backgroundPositionX:
              'calc(var(--epr-category-navigation-button-size) * -8)',
          },
          '&.epr-icn-custom': {
            backgroundPositionX:
              'calc(var(--epr-category-navigation-button-size) * -9)',
          },
          '&.epr-icn-activities': {
            backgroundPositionX:
              'calc(var(--epr-category-navigation-button-size) * -4)',
          },
          '&.epr-icn-animals_nature': {
            backgroundPositionX:
              'calc(var(--epr-category-navigation-button-size) * -1)',
          },
          '&.epr-icn-flags': {
            backgroundPositionX:
              'calc(var(--epr-category-navigation-button-size) * -7)',
          },
          '&.epr-icn-food_drink': {
            backgroundPositionX:
              'calc(var(--epr-category-navigation-button-size) * -2)',
          },
          '&.epr-icn-objects': {
            backgroundPositionX:
              'calc(var(--epr-category-navigation-button-size) * -5)',
          },
          '&.epr-icn-smileys_people': { backgroundPositionX: '0px' },
          '&.epr-icn-symbols': {
            backgroundPositionX:
              'calc(var(--epr-category-navigation-button-size) * -6)',
          },
          '&.epr-icn-travel_places': {
            backgroundPositionX:
              'calc(var(--epr-category-navigation-button-size) * -3)',
          },
        },
      },
      sa('catBtn', ay),
      { '.epr-dark-theme': af({}, Ro), '.epr-auto-theme': af({}, Ro) }
    )
  );
function ny() {
  var f = o.useState(null),
    e = f[0],
    a = f[1],
    t = Fw();
  Ww(a);
  var n = cl(),
    u = T4(),
    i = Sr(),
    l = $w();
  return o.createElement(
    'div',
    {
      className: Q(uy.nav),
      role: 'tablist',
      'aria-label': 'Category navigation',
      id: 'epr-category-nav-id',
      ref: i,
    },
    u.map(function (r) {
      var c = yr(r),
        d = c === e;
      if (mw(r) && l) return null;
      var M = !n && !d;
      return o.createElement(ey, {
        key: c,
        category: c,
        isActiveCategory: d,
        allowNavigation: M,
        categoryConfig: r,
        onClick: function () {
          (t(c),
            setTimeout(function () {
              a(c);
            }, 10));
        },
      });
    })
  );
}
var uy = $.create({
    nav: {
      '.': 'epr-category-nav',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 'var(--epr-header-padding)',
    },
    '.epr-search-active': {
      nav: { opacity: '0.3', cursor: 'default', pointerEvents: 'none' },
    },
    '.epr-main:has(input:not(:placeholder-shown))': {
      nav: { opacity: '0.3', cursor: 'default', pointerEvents: 'none' },
    },
  }),
  Mg =
    'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjgwcHgiIHZpZXdCb3g9IjAgMCAyMCA4MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgODAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsPSIjODY4Njg2IiBkPSJNNi45OCwxMy41OWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVzMC4yNy0wLjA1LDAuMzctMC4xNWwyLjQyLTIuNDJsMi40MywyLjQzCgljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1YzAuMTQsMCwwLjI3LTAuMDUsMC4zNy0wLjE1YzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1bC0yLjQzLTIuNDNMMTMuMzIsOAoJYzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1Yy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMGwtMi40MiwyLjQyTDcuNzQsNy4yN2MtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDAKCWMtMC4yMSwwLjIxLTAuMjEsMC41NCwwLDAuNzVsMi40MSwyLjQxbC0yLjQyLDIuNDJDNi43NywxMy4wNSw2Ljc3LDEzLjM5LDYuOTgsMTMuNTlMNi45OCwxMy41OXoiLz4KPHBhdGggZmlsbD0iIzg2ODY4NiIgZD0iTTEwLjE1LDE4LjQzYzQuNDEsMCw4LTMuNTksOC04YzAtNC40MS0zLjU5LTgtOC04Yy00LjQxLDAtOCwzLjU5LTgsOEMyLjE1LDE0Ljg0LDUuNzQsMTguNDMsMTAuMTUsMTguNDN6CgkgTTEwLjE1LDMuNDljMy44MywwLDYuOTQsMy4xMSw2Ljk0LDYuOTRjMCwzLjgzLTMuMTEsNi45NC02Ljk0LDYuOTRjLTMuODMsMC02Ljk0LTMuMTEtNi45NC02Ljk0QzMuMjEsNi42LDYuMzMsMy40OSwxMC4xNSwzLjQ5CglMMTAuMTUsMy40OXoiLz4KPHBhdGggZmlsbD0iIzMzNzFCNyIgZD0iTTYuOTgsMzMuNTljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1czAuMjctMC4wNSwwLjM3LTAuMTVsMi40Mi0yLjQybDIuNDMsMi40MwoJYzAuMSwwLjEsMC4yNCwwLjE1LDAuMzcsMC4xNWMwLjE0LDAsMC4yNy0wLjA1LDAuMzctMC4xNWMwLjIxLTAuMjEsMC4yMS0wLjU0LDAtMC43NWwtMi40My0yLjQzTDEzLjMyLDI4CgljMC4yMS0wLjIxLDAuMjEtMC41NCwwLTAuNzVjLTAuMjEtMC4yMS0wLjU0LTAuMjEtMC43NSwwbC0yLjQyLDIuNDJsLTIuNDEtMi40MWMtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDAKCWMtMC4yMSwwLjIxLTAuMjEsMC41NCwwLDAuNzVsMi40MSwyLjQxbC0yLjQyLDIuNDJDNi43NywzMy4wNSw2Ljc3LDMzLjM5LDYuOTgsMzMuNTlMNi45OCwzMy41OXoiLz4KPHBhdGggZmlsbD0iIzMzNzFCNyIgZD0iTTEwLjE1LDM4LjQzYzQuNDEsMCw4LTMuNTksOC04YzAtNC40MS0zLjU5LTgtOC04Yy00LjQxLDAtOCwzLjU5LTgsOEMyLjE1LDM0Ljg0LDUuNzQsMzguNDMsMTAuMTUsMzguNDN6CgkgTTEwLjE1LDIzLjQ5YzMuODMsMCw2Ljk0LDMuMTEsNi45NCw2Ljk0YzAsMy44My0zLjExLDYuOTQtNi45NCw2Ljk0Yy0zLjgzLDAtNi45NC0zLjExLTYuOTQtNi45NAoJQzMuMjEsMjYuNiw2LjMzLDIzLjQ5LDEwLjE1LDIzLjQ5TDEwLjE1LDIzLjQ5eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNNi45OCw1My41OWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVzMC4yNy0wLjA1LDAuMzctMC4xNWwyLjQyLTIuNDJsMi40MywyLjQzCgljMC4xLDAuMSwwLjI0LDAuMTUsMC4zNywwLjE1YzAuMTQsMCwwLjI3LTAuMDUsMC4zNy0wLjE1YzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1bC0yLjQzLTIuNDNMMTMuMzIsNDgKCWMwLjIxLTAuMjEsMC4yMS0wLjU0LDAtMC43NWMtMC4yMS0wLjIxLTAuNTQtMC4yMS0wLjc1LDBsLTIuNDIsMi40MmwtMi40MS0yLjQxYy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMAoJYy0wLjIxLDAuMjEtMC4yMSwwLjU0LDAsMC43NWwyLjQxLDIuNDFsLTIuNDIsMi40MkM2Ljc3LDUzLjA1LDYuNzcsNTMuMzksNi45OCw1My41OUw2Ljk4LDUzLjU5eiIvPgo8cGF0aCBmaWxsPSIjQzBDMEJGIiBkPSJNMTAuMTUsNTguNDNjNC40MSwwLDgtMy41OSw4LThjMC00LjQxLTMuNTktOC04LThjLTQuNDEsMC04LDMuNTktOCw4QzIuMTUsNTQuODQsNS43NCw1OC40MywxMC4xNSw1OC40M3oKCSBNMTAuMTUsNDMuNDljMy44MywwLDYuOTQsMy4xMSw2Ljk0LDYuOTRjMCwzLjgzLTMuMTEsNi45NC02Ljk0LDYuOTRjLTMuODMsMC02Ljk0LTMuMTEtNi45NC02Ljk0CglDMy4yMSw0Ni42LDYuMzMsNDMuNDksMTAuMTUsNDMuNDlMMTAuMTUsNDMuNDl6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik02Ljk4LDczLjU5YzAuMSwwLjEsMC4yNCwwLjE1LDAuMzcsMC4xNXMwLjI3LTAuMDUsMC4zNy0wLjE1bDIuNDItMi40MmwyLjQzLDIuNDMKCWMwLjEsMC4xLDAuMjQsMC4xNSwwLjM3LDAuMTVjMC4xNCwwLDAuMjctMC4wNSwwLjM3LTAuMTVjMC4yMS0wLjIxLDAuMjEtMC41NCwwLTAuNzVsLTIuNDMtMi40M0wxMy4zMiw2OAoJYzAuMjEtMC4yMSwwLjIxLTAuNTQsMC0wLjc1Yy0wLjIxLTAuMjEtMC41NC0wLjIxLTAuNzUsMGwtMi40MiwyLjQybC0yLjQxLTIuNDFjLTAuMjEtMC4yMS0wLjU0LTAuMjEtMC43NSwwCgljLTAuMjEsMC4yMS0wLjIxLDAuNTQsMCwwLjc1bDIuNDEsMi40MWwtMi40MiwyLjQyQzYuNzcsNzMuMDUsNi43Nyw3My4zOSw2Ljk4LDczLjU5TDYuOTgsNzMuNTl6Ii8+CjxwYXRoIGZpbGw9IiM2QUE5REQiIGQ9Ik0xMC4xNSw3OC40M2M0LjQxLDAsOC0zLjU5LDgtOGMwLTQuNDEtMy41OS04LTgtOGMtNC40MSwwLTgsMy41OS04LDhDMi4xNSw3NC44NCw1Ljc0LDc4LjQzLDEwLjE1LDc4LjQzegoJIE0xMC4xNSw2My40OWMzLjgzLDAsNi45NCwzLjExLDYuOTQsNi45NGMwLDMuODMtMy4xMSw2Ljk0LTYuOTQsNi45NGMtMy44MywwLTYuOTQtMy4xMS02Ljk0LTYuOTQKCUMzLjIxLDY2LjYsNi4zMyw2My40OSwxMC4xNSw2My40OUwxMC4xNSw2My40OXoiLz4KPC9zdmc+';
function iy() {
  var f = G4();
  return o.createElement(
    mu,
    {
      className: Q(Oo.btnClearSearch, Ua.visibleOnSearchOnly),
      onClick: f,
      'aria-label': 'Clear',
      title: 'Clear',
    },
    o.createElement('div', { className: Q(Oo.icnClearnSearch) })
  );
}
var ly = {
    ':hover': { '> .epr-icn-clear-search': { backgroundPositionY: '-60px' } },
  },
  Oo = $.create(
    af(
      {
        btnClearSearch: {
          '.': 'epr-btn-clear-search',
          position: 'absolute',
          right: 'var(--epr-search-bar-inner-padding)',
          height: '30px',
          width: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          top: '50%',
          transform: 'translateY(-50%)',
          padding: '0',
          borderRadius: '50%',
          ':hover': { background: 'var(--epr-hover-bg-color)' },
          ':focus': { background: 'var(--epr-hover-bg-color)' },
        },
        icnClearnSearch: {
          '.': 'epr-icn-clear-search',
          backgroundColor: 'transparent',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '20px',
          height: '20px',
          width: '20px',
          backgroundImage: 'url(' + Mg + ')',
          ':hover': { backgroundPositionY: '-20px' },
          ':focus': { backgroundPositionY: '-20px' },
        },
      },
      sa('icnClearnSearch', { backgroundPositionY: '-40px' }),
      sa('btnClearSearch', ly)
    )
  ),
  i0 = Nf(x.emojiPicker) + ' ' + Nf(x.emojiList),
  Lg = ['button', Nf(x.emoji)].join(''),
  ry = Nf(x.category);
function cy(f) {
  var e = f.value;
  if (!e) return null;
  var a = oy(e);
  return o.createElement(
    'style',
    null,
    `
    ` +
      i0 +
      ' ' +
      Lg +
      ` {
      display: none;
    }


    ` +
      i0 +
      ' ' +
      a +
      ` {
      display: flex;
    }

    ` +
      i0 +
      ' ' +
      ry +
      ':not(:has(' +
      a +
      `)) {
      display: none;
    }
  `
  );
}
function oy(f) {
  return [Lg, '[data-full-name*="', o1(f), '"]'].join('');
}
var dy =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjQwcHgiIHZpZXdCb3g9IjAgMCAyMCA0MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzg2ODY4NiIgZD0iTTEyLDguODFjMCwyLjA4LTEuNjgsMy43Ni0zLjc2LDMuNzZjLTIuMDgsMC0zLjc2LTEuNjgtMy43Ni0zLjc2CgljMC0yLjA4LDEuNjgtMy43NiwzLjc2LTMuNzZDMTAuMzIsNS4wNSwxMiw2LjczLDEyLDguODF6IE0xMS4yMywxMi43MmMtMC44MywwLjY0LTEuODcsMS4wMS0yLjk5LDEuMDFjLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTIKCWMwLTIuNzIsMi4yLTQuOTIsNC45Mi00LjkyYzIuNzIsMCw0LjkyLDIuMiw0LjkyLDQuOTJjMCwxLjEzLTAuMzgsMi4xNi0xLjAxLDIuOTlsMy45NCwzLjkzYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyCgljLTAuMjUsMC4yNS0wLjY2LDAuMjUtMC45MiwwTDExLjIzLDEyLjcyeiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI0MwQzBCRiIgZD0iTTEyLDI4LjgxYzAsMi4wOC0xLjY4LDMuNzYtMy43NiwzLjc2Yy0yLjA4LDAtMy43Ni0xLjY4LTMuNzYtMy43NgoJYzAtMi4wOCwxLjY4LTMuNzYsMy43Ni0zLjc2QzEwLjMyLDI1LjA1LDEyLDI2LjczLDEyLDI4LjgxeiBNMTEuMjMsMzIuNzJjLTAuODMsMC42NC0xLjg3LDEuMDEtMi45OSwxLjAxCgljLTIuNzIsMC00LjkyLTIuMi00LjkyLTQuOTJjMC0yLjcyLDIuMi00LjkyLDQuOTItNC45MmMyLjcyLDAsNC45MiwyLjIsNC45Miw0LjkyYzAsMS4xMy0wLjM4LDIuMTYtMS4wMSwyLjk5bDMuOTQsMy45MwoJYzAuMjUsMC4yNSwwLjI1LDAuNjYsMCwwLjkyYy0wLjI1LDAuMjUtMC42NiwwLjI1LTAuOTIsMEwxMS4yMywzMi43MnoiLz4KPC9zdmc+';
function sy() {
  return o.createElement('div', { className: Q(gy.icnSearch) });
}
var gy = $.create(
  af(
    {
      icnSearch: {
        '.': 'epr-icn-search',
        content: '',
        position: 'absolute',
        top: '50%',
        left: 'var(--epr-search-bar-inner-padding)',
        transform: 'translateY(-50%)',
        width: '20px',
        height: '20px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        backgroundSize: '20px',
        backgroundImage: 'url(' + dy + ')',
      },
    },
    sa('icnSearch', { backgroundPositionY: '-20px' })
  )
);
function My() {
  var f = E4(),
    e = Tr();
  return f
    ? null
    : o.createElement(
        sg,
        { className: Q(ai.overlay) },
        o.createElement(Ly, null),
        e ? o.createElement(gg, null) : null
      );
}
function Ly() {
  var f = o.useState(0),
    e = f[0],
    a = f[1],
    t = Ja(),
    n = ma(),
    u = Fm(),
    i = fb(),
    l = Rb(),
    r = l.statusSearchResults,
    c = l.searchTerm,
    d = l.onChange,
    M = n == null ? void 0 : n.current,
    s = M == null ? void 0 : M.value;
  return o.createElement(
    ml,
    { className: Q(ai.searchContainer) },
    o.createElement(cy, { value: s }),
    o.createElement('input', {
      autoFocus: i,
      'aria-label': 'Type to search for an emoji',
      onFocus: t,
      className: Q(ai.search),
      type: 'text',
      'aria-controls': 'epr-search-id',
      placeholder: u,
      onChange: function (y) {
        var h, v;
        (a(e + 1),
          d(
            (h = y == null || (v = y.target) == null ? void 0 : v.value) != null
              ? h
              : s
          ));
      },
      ref: n,
    }),
    c
      ? o.createElement(
          'div',
          {
            role: 'status',
            className: Q('epr-status-search-results', ai.visuallyHidden),
            'aria-live': 'polite',
            id: 'epr-search-id',
            'aria-atomic': 'true',
          },
          r
        )
      : null,
    o.createElement(sy, null),
    o.createElement(iy, null)
  );
}
var ai = $.create(
  af(
    {
      overlay: {
        padding: 'var(--epr-header-padding)',
        zIndex: 'var(--epr-header-overlay-z-index)',
      },
      searchContainer: {
        '.': 'epr-search-container',
        flex: '1',
        display: 'block',
        minWidth: '0',
      },
      visuallyHidden: {
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: '1px',
        overflow: 'hidden',
        position: 'absolute',
        whiteSpace: 'nowrap',
        width: '1px',
      },
      search: {
        outline: 'none',
        transition: 'all 0.2s ease-in-out',
        color: 'var(--epr-search-input-text-color)',
        borderRadius: 'var(--epr-search-input-border-radius)',
        padding: 'var(--epr-search-input-padding)',
        height: 'var(--epr-search-input-height)',
        backgroundColor: 'var(--epr-search-input-bg-color)',
        border: '1px solid var(--epr-search-input-bg-color)',
        width: '100%',
        ':focus': {
          backgroundColor: 'var(--epr-search-input-bg-color-active)',
          border: '1px solid var(--epr-search-border-color)',
        },
        '::placeholder': { color: 'var(--epr-search-input-placeholder-color)' },
      },
      btnClearSearch: {
        '.': 'epr-btn-clear-search',
        position: 'absolute',
        right: 'var(--epr-search-bar-inner-padding)',
        height: '30px',
        width: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '0',
        borderRadius: '50%',
        ':hover': { background: 'var(--epr-hover-bg-color)' },
        ':focus': { background: 'var(--epr-hover-bg-color)' },
      },
      icnClearnSearch: {
        '.': 'epr-icn-clear-search',
        backgroundColor: 'transparent',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20px',
        height: '20px',
        width: '20px',
        backgroundImage: 'url(' + Mg + ')',
        ':hover': { backgroundPositionY: '-20px' },
        ':focus': { backgroundPositionY: '-20px' },
      },
    },
    sa('icnClearnSearch', { backgroundPositionY: '-40px' }),
    sa('btnClearSearch', {
      ':hover > .epr-icn-clear-search': { backgroundPositionY: '-60px' },
    })
  )
);
function my() {
  return o.createElement(
    ml,
    { className: Q('epr-header', Ua.hiddenOnReactions) },
    o.createElement(My, null),
    o.createElement(ny, null)
  );
}
function by(f) {
  return o.createElement(
    Lb,
    null,
    o.createElement(om, null),
    o.createElement(Zm, Object.assign({}, f), o.createElement(wy, null))
  );
}
function wy() {
  var f = Jt(),
    e = f[0],
    a = S4(),
    t = o.useState(!e),
    n = t[0],
    u = t[1],
    i = ab();
  return (
    o.useEffect(
      function () {
        (e && !a) || n || u(!0);
      },
      [n, a, e]
    ),
    i
      ? o.createElement(
          fw,
          null,
          o.createElement(Tw, null),
          o.createElement(yy, { renderAll: n })
        )
      : null
  );
}
function yy(f) {
  var e = f.renderAll;
  return e
    ? o.createElement(
        o.Fragment,
        null,
        o.createElement(my, null),
        o.createElement(Uw, null),
        o.createElement(Xw, null)
      )
    : null;
}
var hy = o.memo(by, o4),
  vy = (function (f) {
    lm(e, f);
    function e(t) {
      var n;
      return ((n = f.call(this, t) || this), (n.state = { hasError: !1 }), n);
    }
    e.getDerivedStateFromError = function () {
      return { hasError: !0 };
    };
    var a = e.prototype;
    return (
      (a.componentDidCatch = function (n, u) {
        console.error('Emoji Picker React failed to render:', n, u);
      }),
      (a.render = function () {
        return this.state.hasError ? null : this.props.children;
      }),
      e
    );
  })(o.Component);
function zy(f) {
  var e = Wm({
    onEmojiClick: f.onEmojiClick,
    onReactionClick: f.onReactionClick,
    onSkinToneChange: f.onSkinToneChange,
  });
  return o.createElement(
    vy,
    null,
    o.createElement(
      C4.Provider,
      { value: e },
      o.createElement(hy, Object.assign({}, f))
    )
  );
}
export {
  Dy as B,
  zy as E,
  K2 as L,
  Ny as O,
  Ty as R,
  nL as a,
  py as b,
  jy as c,
  ln as d,
  G6 as e,
  Sy as f,
  Ey as i,
  Cy as j,
  o as r,
  Iy as u,
};
//# sourceMappingURL=react-CcLub2mw.js.map
