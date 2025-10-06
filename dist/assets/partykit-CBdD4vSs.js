var P = Object.defineProperty;
var O = (o, s, e) =>
  s in o
    ? P(o, s, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (o[s] = e);
var n = (o, s, e) => O(o, typeof s != 'symbol' ? s + '' : s, e);
(!globalThis.EventTarget || !globalThis.Event) &&
  console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);
var C = class extends Event {
    constructor(s, e) {
      super('error', e);
      n(this, 'message');
      n(this, 'error');
      ((this.message = s.message), (this.error = s));
    }
  },
  N = class extends Event {
    constructor(s = 1e3, e = '', t) {
      super('close', t);
      n(this, 'code');
      n(this, 'reason');
      n(this, 'wasClean', !0);
      ((this.code = s), (this.reason = e));
    }
  },
  f = { Event, ErrorEvent: C, CloseEvent: N };
function W(o, s) {
  if (!o) throw new Error(s);
}
function I(o) {
  return new o.constructor(o.type, o);
}
function D(o) {
  return 'data' in o
    ? new MessageEvent(o.type, o)
    : 'code' in o || 'reason' in o
      ? new N(o.code || 1999, o.reason || 'unknown reason', o)
      : 'error' in o
        ? new C(o.error, o)
        : new Event(o.type, o);
}
var E,
  R =
    typeof process < 'u' &&
    typeof ((E = process.versions) == null ? void 0 : E.node) < 'u' &&
    typeof document > 'u',
  d = R ? D : I,
  c = {
    maxReconnectionDelay: 1e4,
    minReconnectionDelay: 1e3 + Math.random() * 4e3,
    minUptime: 5e3,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4e3,
    maxRetries: Number.POSITIVE_INFINITY,
    maxEnqueuedMessages: Number.POSITIVE_INFINITY,
  },
  x = !1,
  U = class u extends EventTarget {
    constructor(e, t, r = {}) {
      super();
      n(this, '_ws');
      n(this, '_retryCount', -1);
      n(this, '_uptimeTimeout');
      n(this, '_connectTimeout');
      n(this, '_shouldReconnect', !0);
      n(this, '_connectLock', !1);
      n(this, '_binaryType', 'blob');
      n(this, '_closeCalled', !1);
      n(this, '_messageQueue', []);
      n(this, '_debugLogger', console.log.bind(console));
      n(this, '_url');
      n(this, '_protocols');
      n(this, '_options');
      n(this, 'onclose', null);
      n(this, 'onerror', null);
      n(this, 'onmessage', null);
      n(this, 'onopen', null);
      n(this, '_handleOpen', (e) => {
        this._debug('open event');
        const { minUptime: t = c.minUptime } = this._options;
        (clearTimeout(this._connectTimeout),
          (this._uptimeTimeout = setTimeout(() => this._acceptOpen(), t)),
          W(this._ws, 'WebSocket is not defined'),
          (this._ws.binaryType = this._binaryType),
          this._messageQueue.forEach((r) => {
            var a;
            return (a = this._ws) == null ? void 0 : a.send(r);
          }),
          (this._messageQueue = []),
          this.onopen && this.onopen(e),
          this.dispatchEvent(d(e)));
      });
      n(this, '_handleMessage', (e) => {
        (this._debug('message event'),
          this.onmessage && this.onmessage(e),
          this.dispatchEvent(d(e)));
      });
      n(this, '_handleError', (e) => {
        (this._debug('error event', e.message),
          this._disconnect(
            void 0,
            e.message === 'TIMEOUT' ? 'timeout' : void 0
          ),
          this.onerror && this.onerror(e),
          this._debug('exec error listeners'),
          this.dispatchEvent(d(e)),
          this._connect());
      });
      n(this, '_handleClose', (e) => {
        (this._debug('close event'),
          this._clearTimeouts(),
          this._shouldReconnect && this._connect(),
          this.onclose && this.onclose(e),
          this.dispatchEvent(d(e)));
      });
      ((this._url = e),
        (this._protocols = t),
        (this._options = r),
        this._options.startClosed && (this._shouldReconnect = !1),
        this._options.debugLogger &&
          (this._debugLogger = this._options.debugLogger),
        this._connect());
    }
    static get CONNECTING() {
      return 0;
    }
    static get OPEN() {
      return 1;
    }
    static get CLOSING() {
      return 2;
    }
    static get CLOSED() {
      return 3;
    }
    get CONNECTING() {
      return u.CONNECTING;
    }
    get OPEN() {
      return u.OPEN;
    }
    get CLOSING() {
      return u.CLOSING;
    }
    get CLOSED() {
      return u.CLOSED;
    }
    get binaryType() {
      return this._ws ? this._ws.binaryType : this._binaryType;
    }
    set binaryType(e) {
      ((this._binaryType = e), this._ws && (this._ws.binaryType = e));
    }
    get retryCount() {
      return Math.max(this._retryCount, 0);
    }
    get bufferedAmount() {
      return (
        this._messageQueue.reduce(
          (t, r) => (
            typeof r == 'string'
              ? (t += r.length)
              : r instanceof Blob
                ? (t += r.size)
                : (t += r.byteLength),
            t
          ),
          0
        ) + (this._ws ? this._ws.bufferedAmount : 0)
      );
    }
    get extensions() {
      return this._ws ? this._ws.extensions : '';
    }
    get protocol() {
      return this._ws ? this._ws.protocol : '';
    }
    get readyState() {
      return this._ws
        ? this._ws.readyState
        : this._options.startClosed
          ? u.CLOSED
          : u.CONNECTING;
    }
    get url() {
      return this._ws ? this._ws.url : '';
    }
    get shouldReconnect() {
      return this._shouldReconnect;
    }
    close(e = 1e3, t) {
      if (
        ((this._closeCalled = !0),
        (this._shouldReconnect = !1),
        this._clearTimeouts(),
        !this._ws)
      ) {
        this._debug('close enqueued: no ws instance');
        return;
      }
      if (this._ws.readyState === this.CLOSED) {
        this._debug('close: already closed');
        return;
      }
      this._ws.close(e, t);
    }
    reconnect(e, t) {
      ((this._shouldReconnect = !0),
        (this._closeCalled = !1),
        (this._retryCount = -1),
        !this._ws || this._ws.readyState === this.CLOSED
          ? this._connect()
          : (this._disconnect(e, t), this._connect()));
    }
    send(e) {
      if (this._ws && this._ws.readyState === this.OPEN)
        (this._debug('send', e), this._ws.send(e));
      else {
        const { maxEnqueuedMessages: t = c.maxEnqueuedMessages } =
          this._options;
        this._messageQueue.length < t &&
          (this._debug('enqueue', e), this._messageQueue.push(e));
      }
    }
    _debug(...e) {
      this._options.debug && this._debugLogger('RWS>', ...e);
    }
    _getNextDelay() {
      const {
        reconnectionDelayGrowFactor: e = c.reconnectionDelayGrowFactor,
        minReconnectionDelay: t = c.minReconnectionDelay,
        maxReconnectionDelay: r = c.maxReconnectionDelay,
      } = this._options;
      let a = 0;
      return (
        this._retryCount > 0 &&
          ((a = t * e ** (this._retryCount - 1)), a > r && (a = r)),
        this._debug('next delay', a),
        a
      );
    }
    _wait() {
      return new Promise((e) => {
        setTimeout(e, this._getNextDelay());
      });
    }
    _getNextProtocols(e) {
      if (!e) return Promise.resolve(null);
      if (typeof e == 'string' || Array.isArray(e)) return Promise.resolve(e);
      if (typeof e == 'function') {
        const t = e();
        if (!t) return Promise.resolve(null);
        if (typeof t == 'string' || Array.isArray(t)) return Promise.resolve(t);
        if (t.then) return t;
      }
      throw Error('Invalid protocols');
    }
    _getNextUrl(e) {
      if (typeof e == 'string') return Promise.resolve(e);
      if (typeof e == 'function') {
        const t = e();
        if (typeof t == 'string') return Promise.resolve(t);
        if (t.then) return t;
      }
      throw Error('Invalid URL');
    }
    _connect() {
      if (this._connectLock || !this._shouldReconnect) return;
      this._connectLock = !0;
      const {
        maxRetries: e = c.maxRetries,
        connectionTimeout: t = c.connectionTimeout,
      } = this._options;
      if (this._retryCount >= e) {
        this._debug('max retries reached', this._retryCount, '>=', e);
        return;
      }
      (this._retryCount++,
        this._debug('connect', this._retryCount),
        this._removeListeners(),
        this._wait()
          .then(() =>
            Promise.all([
              this._getNextUrl(this._url),
              this._getNextProtocols(this._protocols || null),
            ])
          )
          .then(([r, a]) => {
            if (this._closeCalled) {
              this._connectLock = !1;
              return;
            }
            !this._options.WebSocket &&
              typeof WebSocket > 'u' &&
              !x &&
              (console.error(`‼️ No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`),
              (x = !0));
            const h = this._options.WebSocket || WebSocket;
            (this._debug('connect', { url: r, protocols: a }),
              (this._ws = a ? new h(r, a) : new h(r)),
              (this._ws.binaryType = this._binaryType),
              (this._connectLock = !1),
              this._addListeners(),
              (this._connectTimeout = setTimeout(
                () => this._handleTimeout(),
                t
              )));
          })
          .catch((r) => {
            ((this._connectLock = !1),
              this._handleError(new f.ErrorEvent(Error(r.message), this)));
          }));
    }
    _handleTimeout() {
      (this._debug('timeout event'),
        this._handleError(new f.ErrorEvent(Error('TIMEOUT'), this)));
    }
    _disconnect(e = 1e3, t) {
      if ((this._clearTimeouts(), !!this._ws)) {
        this._removeListeners();
        try {
          ((this._ws.readyState === this.OPEN ||
            this._ws.readyState === this.CONNECTING) &&
            this._ws.close(e, t),
            this._handleClose(new f.CloseEvent(e, t, this)));
        } catch {}
      }
    }
    _acceptOpen() {
      (this._debug('accept open'), (this._retryCount = 0));
    }
    _removeListeners() {
      this._ws &&
        (this._debug('removeListeners'),
        this._ws.removeEventListener('open', this._handleOpen),
        this._ws.removeEventListener('close', this._handleClose),
        this._ws.removeEventListener('message', this._handleMessage),
        this._ws.removeEventListener('error', this._handleError));
    }
    _addListeners() {
      this._ws &&
        (this._debug('addListeners'),
        this._ws.addEventListener('open', this._handleOpen),
        this._ws.addEventListener('close', this._handleClose),
        this._ws.addEventListener('message', this._handleMessage),
        this._ws.addEventListener('error', this._handleError));
    }
    _clearTimeouts() {
      (clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout));
    }
  };
/*!
 * Reconnecting WebSocket
 * by Pedro Ladaria <pedro.ladaria@gmail.com>
 * https://github.com/pladaria/reconnecting-websocket
 * License MIT
 */ var M = (o) => o[1] !== null && o[1] !== void 0;
function $() {
  if (typeof crypto < 'u' && crypto.randomUUID) return crypto.randomUUID();
  let o = new Date().getTime(),
    s =
      (typeof performance < 'u' &&
        performance.now &&
        performance.now() * 1e3) ||
      0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
    let t = Math.random() * 16;
    return (
      o > 0
        ? ((t = (o + t) % 16 | 0), (o = Math.floor(o / 16)))
        : ((t = (s + t) % 16 | 0), (s = Math.floor(s / 16))),
      (e === 'x' ? t : (t & 3) | 8).toString(16)
    );
  });
}
function L(o, s, e = {}) {
  const {
    host: t,
    path: r,
    protocol: a,
    room: h,
    party: _,
    basePath: p,
    prefix: m,
    query: l,
  } = o;
  let i = t.replace(/^(http|https|ws|wss):\/\//, '');
  if ((i.endsWith('/') && (i = i.slice(0, -1)), r != null && r.startsWith('/')))
    throw new Error('path must not start with a slash');
  const g = _ ?? 'main',
    y = r ? `/${r}` : '',
    w =
      a ||
      (i.startsWith('localhost:') ||
      i.startsWith('127.0.0.1:') ||
      i.startsWith('192.168.') ||
      i.startsWith('10.') ||
      (i.startsWith('172.') &&
        i.split('.')[1] >= '16' &&
        i.split('.')[1] <= '31') ||
      i.startsWith('[::ffff:7f00:1]:')
        ? s
        : `${s}s`),
    b = `${w}://${i}/${p || `${m || 'parties'}/${g}/${h}`}${y}`,
    v = (k = {}) =>
      `${b}?${new URLSearchParams([...Object.entries(e), ...Object.entries(k).filter(M)])}`,
    S = typeof l == 'function' ? async () => v(await l()) : v(l);
  return {
    host: i,
    path: y,
    room: h,
    name: g,
    protocol: w,
    partyUrl: b,
    urlProvider: S,
  };
}
var G = class extends U {
  constructor(s) {
    var e, t;
    const r = T(s);
    super(r.urlProvider, r.protocols, r.socketOptions);
    n(this, '_pk');
    n(this, '_pkurl');
    n(this, 'name');
    n(this, 'room');
    n(this, 'host');
    n(this, 'path');
    ((this.partySocketOptions = s),
      this.setWSProperties(r),
      s.disableNameValidation ||
        ((e = s.party) != null &&
          e.includes('/') &&
          console.warn(
            `PartySocket: party name "${s.party}" contains forward slash which may cause routing issues. Consider using a name without forward slashes or set disableNameValidation: true to bypass this warning.`
          ),
        (t = s.room) != null &&
          t.includes('/') &&
          console.warn(
            `PartySocket: room name "${s.room}" contains forward slash which may cause routing issues. Consider using a name without forward slashes or set disableNameValidation: true to bypass this warning.`
          )));
  }
  updateProperties(s) {
    const e = T({
      ...this.partySocketOptions,
      ...s,
      host: s.host ?? this.host,
      room: s.room ?? this.room,
      path: s.path ?? this.path,
    });
    ((this._url = e.urlProvider),
      (this._protocols = e.protocols),
      (this._options = e.socketOptions),
      this.setWSProperties(e));
  }
  setWSProperties(s) {
    const { _pk: e, _pkurl: t, name: r, room: a, host: h, path: _ } = s;
    ((this._pk = e),
      (this._pkurl = t),
      (this.name = r),
      (this.room = a),
      (this.host = h),
      (this.path = _));
  }
  reconnect(s, e) {
    if (!this.room || !this.host)
      throw new Error(
        'The room and host must be set before connecting, use `updateProperties` method to set them or pass them to the constructor.'
      );
    super.reconnect(s, e);
  }
  get id() {
    return this._pk;
  }
  get roomUrl() {
    return this._pkurl;
  }
  static async fetch(s, e) {
    const t = L(s, 'http'),
      r =
        typeof t.urlProvider == 'string'
          ? t.urlProvider
          : await t.urlProvider();
    return (s.fetch ?? fetch)(r, e);
  }
};
function T(o) {
  const {
      id: s,
      host: e,
      path: t,
      party: r,
      room: a,
      protocol: h,
      query: _,
      protocols: p,
      ...m
    } = o,
    l = s || $(),
    i = L(o, 'ws', { _pk: l });
  return {
    _pk: l,
    _pkurl: i.partyUrl,
    name: i.name,
    room: i.room,
    host: i.host,
    path: i.path,
    protocols: p,
    socketOptions: m,
    urlProvider: i.urlProvider,
  };
}
export { G as P };
//# sourceMappingURL=partykit-CBdD4vSs.js.map
