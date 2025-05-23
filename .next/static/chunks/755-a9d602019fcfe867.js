"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [755],
  {
    1755: (e, t, r) => {
      r.d(t, { CS: () => ry, mX: () => t7 });
      var n,
        s,
        i,
        a,
        o,
        u = P(),
        l = (e) => x(e, u),
        f = P();
      l.write = (e) => x(e, f);
      var d = P();
      l.onStart = (e) => x(e, d);
      var h = P();
      l.onFrame = (e) => x(e, h);
      var c = P();
      l.onFinish = (e) => x(e, c);
      var p = [];
      l.setTimeout = (e, t) => {
        let r = l.now() + t,
          n = () => {
            let e = p.findIndex((e) => e.cancel == n);
            ~e && p.splice(e, 1), (b -= !!~e);
          },
          s = { time: r, handler: e, cancel: n };
        return p.splice(m(r), 0, s), (b += 1), _(), s;
      };
      var m = (e) => ~(~p.findIndex((t) => t.time > e) || ~p.length);
      (l.cancel = (e) => {
        d.delete(e), h.delete(e), c.delete(e), u.delete(e), f.delete(e);
      }),
        (l.sync = (e) => {
          (v = !0), l.batchedUpdates(e), (v = !1);
        }),
        (l.throttle = (e) => {
          let t;
          function r() {
            try {
              e(...t);
            } finally {
              t = null;
            }
          }
          function n(...e) {
            (t = e), l.onStart(r);
          }
          return (
            (n.handler = e),
            (n.cancel = () => {
              d.delete(r), (t = null);
            }),
            n
          );
        });
      var g =
        "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      (l.use = (e) => (g = e)),
        (l.now =
          "undefined" != typeof performance
            ? () => performance.now()
            : Date.now),
        (l.batchedUpdates = (e) => e()),
        (l.catch = console.error),
        (l.frameLoop = "always"),
        (l.advance = () => {
          "demand" !== l.frameLoop
            ? console.warn(
                "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand",
              )
            : k();
        });
      var y = -1,
        b = 0,
        v = !1;
      function x(e, t) {
        v ? (t.delete(e), e(0)) : (t.add(e), _());
      }
      function _() {
        y < 0 && ((y = 0), "demand" !== l.frameLoop && g(w));
      }
      function w() {
        ~y && (g(w), l.batchedUpdates(k));
      }
      function k() {
        let e = y,
          t = m((y = l.now()));
        if ((t && (S(p.splice(0, t), (e) => e.handler()), (b -= t)), !b))
          return void (y = -1);
        d.flush(),
          u.flush(e ? Math.min(64, y - e) : 16.667),
          h.flush(),
          f.flush(),
          c.flush();
      }
      function P() {
        let e = new Set(),
          t = e;
        return {
          add(r) {
            (b += +!(t != e || e.has(r))), e.add(r);
          },
          delete: (r) => ((b -= t == e && e.has(r) ? 1 : 0), e.delete(r)),
          flush(r) {
            t.size &&
              ((e = new Set()),
              (b -= t.size),
              S(t, (t) => t(r) && e.add(t)),
              (b += e.size),
              (t = e));
          },
        };
      }
      function S(e, t) {
        e.forEach((e) => {
          try {
            t(e);
          } catch (e) {
            l.catch(e);
          }
        });
      }
      var A = r(4232),
        C = Object.defineProperty,
        I = {};
      function V() {}
      ((e, t) => {
        for (var r in t) C(e, r, { get: t[r], enumerable: !0 });
      })(I, {
        assign: () => Q,
        colors: () => T,
        createStringInterpolator: () => n,
        skipAnimation: () => N,
        to: () => s,
        willAdvance: () => U,
      });
      var R = (e, t, r) =>
          Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0,
          }),
        E = {
          arr: Array.isArray,
          obj: (e) => !!e && "Object" === e.constructor.name,
          fun: (e) => "function" == typeof e,
          str: (e) => "string" == typeof e,
          num: (e) => "number" == typeof e,
          und: (e) => void 0 === e,
        };
      function O(e, t) {
        if (E.arr(e)) {
          if (!E.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
          return !0;
        }
        return e === t;
      }
      var j = (e, t) => e.forEach(t);
      function M(e, t, r) {
        if (E.arr(e)) {
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
          return;
        }
        for (let n in e) e.hasOwnProperty(n) && t.call(r, e[n], n);
      }
      var z = (e) => (E.und(e) ? [] : E.arr(e) ? e : [e]);
      function $(e, t) {
        if (e.size) {
          let r = Array.from(e);
          e.clear(), j(r, t);
        }
      }
      var q = (e, ...t) => $(e, (e) => e(...t)),
        F = () =>
          "undefined" == typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        T = null,
        N = !1,
        U = V,
        Q = (e) => {
          e.to && (s = e.to),
            e.now && (l.now = e.now),
            void 0 !== e.colors && (T = e.colors),
            null != e.skipAnimation && (N = e.skipAnimation),
            e.createStringInterpolator && (n = e.createStringInterpolator),
            e.requestAnimationFrame && l.use(e.requestAnimationFrame),
            e.batchedUpdates && (l.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (U = e.willAdvance),
            e.frameLoop && (l.frameLoop = e.frameLoop);
        },
        L = new Set(),
        D = [],
        W = [],
        G = 0,
        H = {
          get idle() {
            return !L.size && !D.length;
          },
          start(e) {
            G > e.priority ? (L.add(e), l.onStart(Z)) : (B(e), l(J));
          },
          advance: J,
          sort(e) {
            if (G) l.onFrame(() => H.sort(e));
            else {
              let t = D.indexOf(e);
              ~t && (D.splice(t, 1), X(e));
            }
          },
          clear() {
            (D = []), L.clear();
          },
        };
      function Z() {
        L.forEach(B), L.clear(), l(J);
      }
      function B(e) {
        D.includes(e) || X(e);
      }
      function X(e) {
        D.splice(
          (function (e, t) {
            let r = e.findIndex(t);
            return r < 0 ? e.length : r;
          })(D, (t) => t.priority > e.priority),
          0,
          e,
        );
      }
      function J(e) {
        let t = W;
        for (let r = 0; r < D.length; r++) {
          let n = D[r];
          (G = n.priority),
            !n.idle && (U(n), n.advance(e), n.idle || t.push(n));
        }
        return (G = 0), ((W = D).length = 0), (D = t).length > 0;
      }
      var Y = "[-+]?\\d*\\.?\\d+",
        K = Y + "%";
      function ee(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
      }
      var et = RegExp("rgb" + ee(Y, Y, Y)),
        er = RegExp("rgba" + ee(Y, Y, Y, Y)),
        en = RegExp("hsl" + ee(Y, K, K)),
        es = RegExp("hsla" + ee(Y, K, K, Y)),
        ei = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ea =
          /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        eo = /^#([0-9a-fA-F]{6})$/,
        eu = /^#([0-9a-fA-F]{8})$/;
      function el(e, t, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? e + (t - e) * 6 * r
          : r < 0.5
            ? t
            : r < 2 / 3
              ? e + (t - e) * (2 / 3 - r) * 6
              : e;
      }
      function ef(e, t, r) {
        let n = r < 0.5 ? r * (1 + t) : r + t - r * t,
          s = 2 * r - n,
          i = el(s, n, e + 1 / 3);
        return (
          (Math.round(255 * i) << 24) |
          (Math.round(255 * el(s, n, e)) << 16) |
          (Math.round(255 * el(s, n, e - 1 / 3)) << 8)
        );
      }
      function ed(e) {
        let t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
      }
      function eh(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
      }
      function ec(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
      }
      function ep(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
      }
      function em(e) {
        let t,
          r =
            "number" == typeof e
              ? e >>> 0 === e && e >= 0 && e <= 0xffffffff
                ? e
                : null
              : (t = eo.exec(e))
                ? parseInt(t[1] + "ff", 16) >>> 0
                : T && void 0 !== T[e]
                  ? T[e]
                  : (t = et.exec(e))
                    ? ((ed(t[1]) << 24) |
                        (ed(t[2]) << 16) |
                        (ed(t[3]) << 8) |
                        255) >>>
                      0
                    : (t = er.exec(e))
                      ? ((ed(t[1]) << 24) |
                          (ed(t[2]) << 16) |
                          (ed(t[3]) << 8) |
                          ec(t[4])) >>>
                        0
                      : (t = ei.exec(e))
                        ? parseInt(
                            t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff",
                            16,
                          ) >>> 0
                        : (t = eu.exec(e))
                          ? parseInt(t[1], 16) >>> 0
                          : (t = ea.exec(e))
                            ? parseInt(
                                t[1] +
                                  t[1] +
                                  t[2] +
                                  t[2] +
                                  t[3] +
                                  t[3] +
                                  t[4] +
                                  t[4],
                                16,
                              ) >>> 0
                            : (t = en.exec(e))
                              ? (255 | ef(eh(t[1]), ep(t[2]), ep(t[3]))) >>> 0
                              : (t = es.exec(e))
                                ? (ef(eh(t[1]), ep(t[2]), ep(t[3])) |
                                    ec(t[4])) >>>
                                  0
                                : null;
        if (null === r) return e;
        let n = (0xff000000 & (r = r || 0)) >>> 24,
          s = (0xff0000 & r) >>> 16,
          i = (65280 & r) >>> 8,
          a = (255 & r) / 255;
        return `rgba(${n}, ${s}, ${i}, ${a})`;
      }
      var eg = (e, t, r) => {
          if (E.fun(e)) return e;
          if (E.arr(e)) return eg({ range: e, output: t, extrapolate: r });
          if (E.str(e.output[0])) return n(e);
          let s = e.output,
            i = e.range || [0, 1],
            a = e.extrapolateLeft || e.extrapolate || "extend",
            o = e.extrapolateRight || e.extrapolate || "extend",
            u = e.easing || ((e) => e);
          return (t) => {
            let r = (function (e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1;
            })(t, i);
            return (function (e, t, r, n, s, i, a, o, u) {
              let l = u ? u(e) : e;
              if (l < t)
                if ("identity" === a) return l;
                else "clamp" === a && (l = t);
              if (l > r)
                if ("identity" === o) return l;
                else "clamp" === o && (l = r);
              return n === s
                ? n
                : t === r
                  ? e <= t
                    ? n
                    : s
                  : (t === -1 / 0
                      ? (l = -l)
                      : r === 1 / 0
                        ? (l -= t)
                        : (l = (l - t) / (r - t)),
                    (l = i(l)),
                    n === -1 / 0
                      ? (l = -l)
                      : s === 1 / 0
                        ? (l += n)
                        : (l = l * (s - n) + n),
                    l);
            })(t, i[r], i[r + 1], s[r], s[r + 1], u, a, o, e.map);
          };
        },
        ey = Symbol.for("FluidValue.get"),
        eb = Symbol.for("FluidValue.observers"),
        ev = (e) => !!(e && e[ey]),
        ex = (e) => (e && e[ey] ? e[ey]() : e),
        e_ = (e) => e[eb] || null;
      function ew(e, t) {
        let r = e[eb];
        r &&
          r.forEach((e) => {
            e.eventObserved ? e.eventObserved(t) : e(t);
          });
      }
      var ek = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            eP(this, e);
          }
        },
        eP = (e, t) => eC(e, ey, t);
      function eS(e, t) {
        if (e[ey]) {
          let r = e[eb];
          r || eC(e, eb, (r = new Set())),
            !r.has(t) &&
              (r.add(t), e.observerAdded && e.observerAdded(r.size, t));
        }
        return t;
      }
      function eA(e, t) {
        let r = e[eb];
        if (r && r.has(t)) {
          let n = r.size - 1;
          n ? r.delete(t) : (e[eb] = null),
            e.observerRemoved && e.observerRemoved(n, t);
        }
      }
      var eC = (e, t, r) =>
          Object.defineProperty(e, t, {
            value: r,
            writable: !0,
            configurable: !0,
          }),
        eI = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        eV =
          /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        eR = RegExp(`(${eI.source})(%|[a-z]+)`, "i"),
        eE = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        eO = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        ej = (e) => {
          let [t, r] = eM(e);
          if (!t || F()) return e;
          let n = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            let e = window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(r);
            if (e) return e;
          } else if (r && eO.test(r)) return ej(r);
          else if (r) return r;
          return e;
        },
        eM = (e) => {
          let t = eO.exec(e);
          if (!t) return [,];
          let [, r, n] = t;
          return [r, n];
        },
        ez = (e, t, r, n, s) =>
          `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${s})`,
        e$ = (e) => {
          i ||
            (i = T
              ? RegExp(`(${Object.keys(T).join("|")})(?!\\w)`, "g")
              : /^\b$/);
          let t = e.output.map((e) =>
              ex(e).replace(eO, ej).replace(eV, em).replace(i, em),
            ),
            r = t.map((e) => e.match(eI).map(Number)),
            n = r[0]
              .map((e, t) =>
                r.map((e) => {
                  if (!(t in e))
                    throw Error(
                      'The arity of each "output" value must be equal',
                    );
                  return e[t];
                }),
              )
              .map((t) => eg({ ...e, output: t }));
          return (e) => {
            let r =
                !eR.test(t[0]) && t.find((e) => eR.test(e))?.replace(eI, ""),
              s = 0;
            return t[0]
              .replace(eI, () => `${n[s++](e)}${r || ""}`)
              .replace(eE, ez);
          };
        },
        eq = "react-spring: ",
        eF = (e) => {
          let t = !1;
          if ("function" != typeof e)
            throw TypeError(`${eq}once requires a function parameter`);
          return (...r) => {
            t || (e(...r), (t = !0));
          };
        },
        eT = eF(console.warn),
        eN = eF(console.warn);
      function eU(e) {
        return (
          E.str(e) &&
          ("#" == e[0] ||
            /\d/.test(e) ||
            (!F() && eO.test(e)) ||
            e in (T || {}))
        );
      }
      var eQ = new WeakMap(),
        eL = (e) =>
          e.forEach(({ target: e, contentRect: t }) =>
            eQ.get(e)?.forEach((e) => e(t)),
          ),
        eD = new Set(),
        eW = () => {
          let e = () => {
            eD.forEach((e) =>
              e({ width: window.innerWidth, height: window.innerHeight }),
            );
          };
          return (
            window.addEventListener("resize", e),
            () => {
              window.removeEventListener("resize", e);
            }
          );
        },
        eG = (e) => (
          eD.add(e),
          o || (o = eW()),
          () => {
            eD.delete(e), !eD.size && o && (o(), (o = void 0));
          }
        ),
        eH = (e, t, r) => (t - e == 0 ? 1 : (r - e) / (t - e)),
        eZ = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        },
        eB = F() ? A.useEffect : A.useLayoutEffect,
        eX = () => {
          let e = (0, A.useRef)(!1);
          return (
            eB(
              () => (
                (e.current = !0),
                () => {
                  e.current = !1;
                }
              ),
              [],
            ),
            e
          );
        };
      function eJ() {
        let e = (0, A.useState)()[1],
          t = eX();
        return () => {
          t.current && e(Math.random());
        };
      }
      var eY = (e) => (0, A.useEffect)(e, eK),
        eK = [];
      function e0(e) {
        let t = (0, A.useRef)();
        return (
          (0, A.useEffect)(() => {
            t.current = e;
          }),
          t.current
        );
      }
      var e1 = Symbol.for("Animated:node"),
        e5 = (e) => !!e && e[e1] === e,
        e2 = (e) => e && e[e1],
        e8 = (e, t) => R(e, e1, t),
        e9 = (e) => e && e[e1] && e[e1].getPayload(),
        e3 = class {
          constructor() {
            e8(this, this);
          }
          getPayload() {
            return this.payload || [];
          }
        },
        e6 = class extends e3 {
          constructor(e) {
            super(),
              (this._value = e),
              (this.done = !0),
              (this.durationProgress = 0),
              E.num(this._value) && (this.lastPosition = this._value);
          }
          static create(e) {
            return new e6(e);
          }
          getPayload() {
            return [this];
          }
          getValue() {
            return this._value;
          }
          setValue(e, t) {
            return (
              E.num(e) &&
                ((this.lastPosition = e),
                t &&
                  ((e = Math.round(e / t) * t),
                  this.done && (this.lastPosition = e))),
              this._value !== e && ((this._value = e), !0)
            );
          }
          reset() {
            let { done: e } = this;
            (this.done = !1),
              E.num(this._value) &&
                ((this.elapsedTime = 0),
                (this.durationProgress = 0),
                (this.lastPosition = this._value),
                e && (this.lastVelocity = null),
                (this.v0 = null));
          }
        },
        e4 = class extends e6 {
          constructor(e) {
            super(0),
              (this._string = null),
              (this._toString = eg({ output: [e, e] }));
          }
          static create(e) {
            return new e4(e);
          }
          getValue() {
            let e = this._string;
            return null == e ? (this._string = this._toString(this._value)) : e;
          }
          setValue(e) {
            if (E.str(e)) {
              if (e == this._string) return !1;
              (this._string = e), (this._value = 1);
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null;
            }
            return !0;
          }
          reset(e) {
            e && (this._toString = eg({ output: [this.getValue(), e] })),
              (this._value = 0),
              super.reset();
          }
        },
        e7 = { dependencies: null },
        te = class extends e3 {
          constructor(e) {
            super(), (this.source = e), this.setValue(e);
          }
          getValue(e) {
            let t = {};
            return (
              M(this.source, (r, n) => {
                e5(r)
                  ? (t[n] = r.getValue(e))
                  : ev(r)
                    ? (t[n] = ex(r))
                    : e || (t[n] = r);
              }),
              t
            );
          }
          setValue(e) {
            (this.source = e), (this.payload = this._makePayload(e));
          }
          reset() {
            this.payload && j(this.payload, (e) => e.reset());
          }
          _makePayload(e) {
            if (e) {
              let t = new Set();
              return M(e, this._addToPayload, t), Array.from(t);
            }
          }
          _addToPayload(e) {
            e7.dependencies && ev(e) && e7.dependencies.add(e);
            let t = e9(e);
            t && j(t, (e) => this.add(e));
          }
        },
        tt = class extends te {
          constructor(e) {
            super(e);
          }
          static create(e) {
            return new tt(e);
          }
          getValue() {
            return this.source.map((e) => e.getValue());
          }
          setValue(e) {
            let t = this.getPayload();
            return e.length == t.length
              ? t.map((t, r) => t.setValue(e[r])).some(Boolean)
              : (super.setValue(e.map(tr)), !0);
          }
        };
      function tr(e) {
        return (eU(e) ? e4 : e6).create(e);
      }
      function tn(e) {
        let t = e2(e);
        return t ? t.constructor : E.arr(e) ? tt : eU(e) ? e4 : e6;
      }
      var ts = (e, t) => {
          let r = !E.fun(e) || (e.prototype && e.prototype.isReactComponent);
          return (0, A.forwardRef)((n, s) => {
            let i = (0, A.useRef)(null),
              a =
                r &&
                (0, A.useCallback)(
                  (e) => {
                    i.current = (function (e, t) {
                      return e && (E.fun(e) ? e(t) : (e.current = t)), t;
                    })(s, e);
                  },
                  [s],
                ),
              [o, u] = (function (e, t) {
                let r = new Set();
                return (
                  (e7.dependencies = r),
                  e.style &&
                    (e = { ...e, style: t.createAnimatedStyle(e.style) }),
                  (e = new te(e)),
                  (e7.dependencies = null),
                  [e, r]
                );
              })(n, t),
              f = eJ(),
              d = () => {
                let e = i.current;
                (!r || e) &&
                  !1 === (!!e && t.applyAnimatedValues(e, o.getValue(!0))) &&
                  f();
              },
              h = new ti(d, u),
              c = (0, A.useRef)();
            eB(
              () => (
                (c.current = h),
                j(u, (e) => eS(e, h)),
                () => {
                  c.current &&
                    (j(c.current.deps, (e) => eA(e, c.current)),
                    l.cancel(c.current.update));
                }
              ),
            ),
              (0, A.useEffect)(d, []),
              eY(() => () => {
                let e = c.current;
                j(e.deps, (t) => eA(t, e));
              });
            let p = t.getComponentProps(o.getValue());
            return A.createElement(e, { ...p, ref: a });
          });
        },
        ti = class {
          constructor(e, t) {
            (this.update = e), (this.deps = t);
          }
          eventObserved(e) {
            "change" == e.type && l.write(this.update);
          }
        },
        ta = Symbol.for("AnimatedComponent"),
        to = (e) =>
          E.str(e)
            ? e
            : e && E.str(e.displayName)
              ? e.displayName
              : (E.fun(e) && e.name) || null;
      function tu(e, ...t) {
        return E.fun(e) ? e(...t) : e;
      }
      var tl = (e, t) =>
          !0 === e || !!(t && e && (E.fun(e) ? e(t) : z(e).includes(t))),
        tf = (e, t) => (E.obj(e) ? t && e[t] : e),
        td = (e, t) =>
          !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        th = (e) => e,
        tc = (e, t = th) => {
          let r = tp;
          e.default && !0 !== e.default && (r = Object.keys((e = e.default)));
          let n = {};
          for (let s of r) {
            let r = t(e[s], s);
            E.und(r) || (n[s] = r);
          }
          return n;
        },
        tp = [
          "config",
          "onProps",
          "onStart",
          "onChange",
          "onPause",
          "onResume",
          "onRest",
        ],
        tm = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1,
        };
      function tg(e) {
        let t = (function (e) {
          let t = {},
            r = 0;
          if (
            (M(e, (e, n) => {
              !tm[n] && ((t[n] = e), r++);
            }),
            r)
          )
            return t;
        })(e);
        if (t) {
          let r = { to: t };
          return M(e, (e, n) => n in t || (r[n] = e)), r;
        }
        return { ...e };
      }
      function ty(e) {
        return (
          (e = ex(e)),
          E.arr(e)
            ? e.map(ty)
            : eU(e)
              ? I.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
              : e
        );
      }
      function tb(e) {
        return E.fun(e) || (E.arr(e) && E.obj(e[0]));
      }
      var tv = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: (e) => e,
          clamp: !1,
        },
        tx = class {
          constructor() {
            (this.velocity = 0), Object.assign(this, tv);
          }
        };
      function t_(e, t) {
        if (E.und(t.decay)) {
          let r = !E.und(t.tension) || !E.und(t.friction);
          (!r && E.und(t.frequency) && E.und(t.damping) && E.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            r && (e.frequency = void 0);
        } else e.duration = void 0;
      }
      var tw = [],
        tk = class {
          constructor() {
            (this.changed = !1),
              (this.values = tw),
              (this.toValues = null),
              (this.fromValues = tw),
              (this.config = new tx()),
              (this.immediate = !1);
          }
        };
      function tP(
        e,
        { key: t, props: r, defaultProps: n, state: s, actions: i },
      ) {
        return new Promise((a, o) => {
          let u,
            f,
            d = tl(r.cancel ?? n?.cancel, t);
          if (d) p();
          else {
            E.und(r.pause) || (s.paused = tl(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = s.paused || tl(e, t)),
              (u = tu(r.delay || 0, t)),
              e ? (s.resumeQueue.add(c), i.pause()) : (i.resume(), c());
          }
          function h() {
            s.resumeQueue.add(c),
              s.timeouts.delete(f),
              f.cancel(),
              (u = f.time - l.now());
          }
          function c() {
            u > 0 && !I.skipAnimation
              ? ((s.delayed = !0),
                (f = l.setTimeout(p, u)),
                s.pauseQueue.add(h),
                s.timeouts.add(f))
              : p();
          }
          function p() {
            s.delayed && (s.delayed = !1),
              s.pauseQueue.delete(h),
              s.timeouts.delete(f),
              e <= (s.cancelId || 0) && (d = !0);
            try {
              i.start({ ...r, callId: e, cancel: d }, a);
            } catch (e) {
              o(e);
            }
          }
        });
      }
      var tS = (e, t) =>
          1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
              ? tI(e.get())
              : t.every((e) => e.noop)
                ? tA(e.get())
                : tC(
                    e.get(),
                    t.every((e) => e.finished),
                  ),
        tA = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
        tC = (e, t, r = !1) => ({ value: e, finished: t, cancelled: r }),
        tI = (e) => ({ value: e, cancelled: !0, finished: !1 });
      function tV(e, t, r, n) {
        let { callId: s, parentId: i, onRest: a } = t,
          { asyncTo: o, promise: u } = r;
        return i || e !== o || t.reset
          ? (r.promise = (async () => {
              let f, d, h;
              (r.asyncId = s), (r.asyncTo = e);
              let c = tc(t, (e, t) => ("onRest" === t ? void 0 : e)),
                p = new Promise((e, t) => ((f = e), (d = t))),
                m = (e) => {
                  let t =
                    (s <= (r.cancelId || 0) && tI(n)) ||
                    (s !== r.asyncId && tC(n, !1));
                  if (t) throw ((e.result = t), d(e), e);
                },
                g = (e, t) => {
                  let i = new tE(),
                    a = new tO();
                  return (async () => {
                    if (I.skipAnimation)
                      throw (tR(r), (a.result = tC(n, !1)), d(a), a);
                    m(i);
                    let o = E.obj(e) ? { ...e } : { ...t, to: e };
                    (o.parentId = s),
                      M(c, (e, t) => {
                        E.und(o[t]) && (o[t] = e);
                      });
                    let u = await n.start(o);
                    return (
                      m(i),
                      r.paused &&
                        (await new Promise((e) => {
                          r.resumeQueue.add(e);
                        })),
                      u
                    );
                  })();
                };
              if (I.skipAnimation) return tR(r), tC(n, !1);
              try {
                let t;
                (t = E.arr(e)
                  ? (async (e) => {
                      for (let t of e) await g(t);
                    })(e)
                  : Promise.resolve(e(g, n.stop.bind(n)))),
                  await Promise.all([t.then(f), p]),
                  (h = tC(n.get(), !0, !1));
              } catch (e) {
                if (e instanceof tE) h = e.result;
                else if (e instanceof tO) h = e.result;
                else throw e;
              } finally {
                s == r.asyncId &&
                  ((r.asyncId = i),
                  (r.asyncTo = i ? o : void 0),
                  (r.promise = i ? u : void 0));
              }
              return (
                E.fun(a) &&
                  l.batchedUpdates(() => {
                    a(h, n, n.item);
                  }),
                h
              );
            })())
          : u;
      }
      function tR(e, t) {
        $(e.timeouts, (e) => e.cancel()),
          e.pauseQueue.clear(),
          e.resumeQueue.clear(),
          (e.asyncId = e.asyncTo = e.promise = void 0),
          t && (e.cancelId = t);
      }
      var tE = class extends Error {
          constructor() {
            super(
              "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.",
            );
          }
        },
        tO = class extends Error {
          constructor() {
            super("SkipAnimationSignal");
          }
        },
        tj = (e) => e instanceof tz,
        tM = 1,
        tz = class extends ek {
          constructor() {
            super(...arguments), (this.id = tM++), (this._priority = 0);
          }
          get priority() {
            return this._priority;
          }
          set priority(e) {
            this._priority != e &&
              ((this._priority = e), this._onPriorityChange(e));
          }
          get() {
            let e = e2(this);
            return e && e.getValue();
          }
          to(...e) {
            return I.to(this, e);
          }
          interpolate(...e) {
            return (
              eT(
                `${eq}The "interpolate" function is deprecated in v9 (use "to" instead)`,
              ),
              I.to(this, e)
            );
          }
          toJSON() {
            return this.get();
          }
          observerAdded(e) {
            1 == e && this._attach();
          }
          observerRemoved(e) {
            0 == e && this._detach();
          }
          _attach() {}
          _detach() {}
          _onChange(e, t = !1) {
            ew(this, { type: "change", parent: this, value: e, idle: t });
          }
          _onPriorityChange(e) {
            this.idle || H.sort(this),
              ew(this, { type: "priority", parent: this, priority: e });
          }
        },
        t$ = Symbol.for("SpringPhase"),
        tq = (e) => (1 & e[t$]) > 0,
        tF = (e) => (2 & e[t$]) > 0,
        tT = (e) => (4 & e[t$]) > 0,
        tN = (e, t) => (t ? (e[t$] |= 3) : (e[t$] &= -3)),
        tU = (e, t) => (t ? (e[t$] |= 4) : (e[t$] &= -5)),
        tQ = class extends tz {
          constructor(e, t) {
            if (
              (super(),
              (this.animation = new tk()),
              (this.defaultProps = {}),
              (this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set(),
                resumeQueue: new Set(),
                timeouts: new Set(),
              }),
              (this._pendingCalls = new Set()),
              (this._lastCallId = 0),
              (this._lastToId = 0),
              (this._memoizedDuration = 0),
              !E.und(e) || !E.und(t))
            ) {
              let r = E.obj(e) ? { ...e } : { ...t, from: e };
              E.und(r.default) && (r.default = !0), this.start(r);
            }
          }
          get idle() {
            return !(tF(this) || this._state.asyncTo) || tT(this);
          }
          get goal() {
            return ex(this.animation.to);
          }
          get velocity() {
            let e = e2(this);
            return e instanceof e6
              ? e.lastVelocity || 0
              : e.getPayload().map((e) => e.lastVelocity || 0);
          }
          get hasAnimated() {
            return tq(this);
          }
          get isAnimating() {
            return tF(this);
          }
          get isPaused() {
            return tT(this);
          }
          get isDelayed() {
            return this._state.delayed;
          }
          advance(e) {
            let t = !0,
              r = !1,
              n = this.animation,
              { toValues: s } = n,
              { config: i } = n,
              a = e9(n.to);
            !a && ev(n.to) && (s = z(ex(n.to))),
              n.values.forEach((o, u) => {
                if (o.done) return;
                let l = o.constructor == e4 ? 1 : a ? a[u].lastPosition : s[u],
                  f = n.immediate,
                  d = l;
                if (!f) {
                  let t;
                  if (((d = o.lastPosition), i.tension <= 0)) {
                    o.done = !0;
                    return;
                  }
                  let r = (o.elapsedTime += e),
                    s = n.fromValues[u],
                    a =
                      null != o.v0
                        ? o.v0
                        : (o.v0 = E.arr(i.velocity)
                            ? i.velocity[u]
                            : i.velocity),
                    h =
                      i.precision ||
                      (s == l ? 0.005 : Math.min(1, 0.001 * Math.abs(l - s)));
                  if (E.und(i.duration))
                    if (i.decay) {
                      let e = !0 === i.decay ? 0.998 : i.decay,
                        n = Math.exp(-(1 - e) * r);
                      (d = s + (a / (1 - e)) * (1 - n)),
                        (f = Math.abs(o.lastPosition - d) <= h),
                        (t = a * n);
                    } else {
                      t = null == o.lastVelocity ? a : o.lastVelocity;
                      let r = i.restVelocity || h / 10,
                        n = i.clamp ? 0 : i.bounce,
                        u = !E.und(n),
                        c = s == l ? o.v0 > 0 : s < l,
                        p = !1,
                        m = Math.ceil(e / 1);
                      for (
                        let e = 0;
                        e < m &&
                        !(!(Math.abs(t) > r) && (f = Math.abs(l - d) <= h));
                        ++e
                      ) {
                        u && (d == l || d > l == c) && ((t = -t * n), (d = l));
                        let e =
                          (-(1e-6 * i.tension) * (d - l) +
                            -(0.001 * i.friction) * t) /
                          i.mass;
                        (t += +e), (d += +t);
                      }
                    }
                  else {
                    let n = 1;
                    i.duration > 0 &&
                      (this._memoizedDuration !== i.duration &&
                        ((this._memoizedDuration = i.duration),
                        o.durationProgress > 0 &&
                          ((o.elapsedTime = i.duration * o.durationProgress),
                          (r = o.elapsedTime += e))),
                      (o.durationProgress = n =
                        (n = (i.progress || 0) + r / this._memoizedDuration) > 1
                          ? 1
                          : n < 0
                            ? 0
                            : n)),
                      (t =
                        ((d = s + i.easing(n) * (l - s)) - o.lastPosition) / e),
                      (f = 1 == n);
                  }
                  (o.lastVelocity = t),
                    Number.isNaN(d) &&
                      (console.warn("Got NaN while animating:", this),
                      (f = !0));
                }
                a && !a[u].done && (f = !1),
                  f ? (o.done = !0) : (t = !1),
                  o.setValue(d, i.round) && (r = !0);
              });
            let o = e2(this),
              u = o.getValue();
            if (t) {
              let e = ex(n.to);
              (u !== e || r) && !i.decay
                ? (o.setValue(e), this._onChange(e))
                : r && i.decay && this._onChange(u),
                this._stop();
            } else r && this._onChange(u);
          }
          set(e) {
            return (
              l.batchedUpdates(() => {
                this._stop(), this._focus(e), this._set(e);
              }),
              this
            );
          }
          pause() {
            this._update({ pause: !0 });
          }
          resume() {
            this._update({ pause: !1 });
          }
          finish() {
            if (tF(this)) {
              let { to: e, config: t } = this.animation;
              l.batchedUpdates(() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop();
              });
            }
            return this;
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this;
          }
          start(e, t) {
            let r;
            return (
              E.und(e)
                ? ((r = this.queue || []), (this.queue = []))
                : (r = [E.obj(e) ? e : { ...t, to: e }]),
              Promise.all(r.map((e) => this._update(e))).then((e) =>
                tS(this, e),
              )
            );
          }
          stop(e) {
            let { to: t } = this.animation;
            return (
              this._focus(this.get()),
              tR(this._state, e && this._lastCallId),
              l.batchedUpdates(() => this._stop(t, e)),
              this
            );
          }
          reset() {
            this._update({ reset: !0 });
          }
          eventObserved(e) {
            "change" == e.type
              ? this._start()
              : "priority" == e.type && (this.priority = e.priority + 1);
          }
          _prepareNode(e) {
            let t = this.key || "",
              { to: r, from: n } = e;
            (null == (r = E.obj(r) ? r[t] : r) || tb(r)) && (r = void 0),
              null == (n = E.obj(n) ? n[t] : n) && (n = void 0);
            let s = { to: r, from: n };
            return (
              !tq(this) &&
                (e.reverse && ([r, n] = [n, r]),
                (n = ex(n)),
                E.und(n) ? e2(this) || this._set(r) : this._set(n)),
              s
            );
          }
          _update({ ...e }, t) {
            let { key: r, defaultProps: n } = this;
            e.default &&
              Object.assign(
                n,
                tc(e, (e, t) => (/^on/.test(t) ? tf(e, r) : e)),
              ),
              tZ(this, e, "onProps"),
              tB(this, "onProps", e, this);
            let s = this._prepareNode(e);
            if (Object.isFrozen(this))
              throw Error(
                "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?",
              );
            let i = this._state;
            return tP(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  tT(this) ||
                    (tU(this, !0),
                    q(i.pauseQueue),
                    tB(
                      this,
                      "onPause",
                      tC(this, tL(this, this.animation.to)),
                      this,
                    ));
                },
                resume: () => {
                  tT(this) &&
                    (tU(this, !1),
                    tF(this) && this._resume(),
                    q(i.resumeQueue),
                    tB(
                      this,
                      "onResume",
                      tC(this, tL(this, this.animation.to)),
                      this,
                    ));
                },
                start: this._merge.bind(this, s),
              },
            }).then((r) => {
              if (e.loop && r.finished && !(t && r.noop)) {
                let t = tD(e);
                if (t) return this._update(t, !0);
              }
              return r;
            });
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(tI(this));
            let n = !E.und(e.to),
              s = !E.und(e.from);
            if (n || s)
              if (!(t.callId > this._lastToId)) return r(tI(this));
              else this._lastToId = t.callId;
            let { key: i, defaultProps: a, animation: o } = this,
              { to: u, from: f } = o,
              { to: d = u, from: h = f } = e;
            s && !n && (!t.default || E.und(d)) && (d = h),
              t.reverse && ([d, h] = [h, d]);
            let c = !O(h, f);
            c && (o.from = h), (h = ex(h));
            let p = !O(d, u);
            p && this._focus(d);
            let m = tb(t.to),
              { config: g } = o,
              { decay: y, velocity: b } = g;
            (n || s) && (g.velocity = 0),
              t.config &&
                !m &&
                (function (e, t, r) {
                  for (let n in (r &&
                    (t_((r = { ...r }), t), (t = { ...r, ...t })),
                  t_(e, t),
                  Object.assign(e, t),
                  tv))
                    null == e[n] && (e[n] = tv[n]);
                  let { frequency: n, damping: s } = e,
                    { mass: i } = e;
                  E.und(n) ||
                    (n < 0.01 && (n = 0.01),
                    s < 0 && (s = 0),
                    (e.tension = Math.pow((2 * Math.PI) / n, 2) * i),
                    (e.friction = (4 * Math.PI * s * i) / n));
                })(
                  g,
                  tu(t.config, i),
                  t.config !== a.config ? tu(a.config, i) : void 0,
                );
            let v = e2(this);
            if (!v || E.und(d)) return r(tC(this, !0));
            let x = E.und(t.reset)
                ? s && !t.default
                : !E.und(h) && tl(t.reset, i),
              _ = x ? h : this.get(),
              w = ty(d),
              k = E.num(w) || E.arr(w) || eU(w),
              P = !m && (!k || tl(a.immediate || t.immediate, i));
            if (p) {
              let e = tn(d);
              if (e !== v.constructor)
                if (P) v = this._set(w);
                else
                  throw Error(
                    `Cannot animate between ${v.constructor.name} and ${e.name}, as the "to" prop suggests`,
                  );
            }
            let S = v.constructor,
              A = ev(d),
              C = !1;
            if (!A) {
              let e = x || (!tq(this) && c);
              (p || e) && (A = !(C = O(ty(_), w))),
                ((O(o.immediate, P) || P) &&
                  O(g.decay, y) &&
                  O(g.velocity, b)) ||
                  (A = !0);
            }
            if (
              (C &&
                tF(this) &&
                (o.changed && !x ? (A = !0) : A || this._stop(u)),
              !m &&
                ((A || ev(u)) &&
                  ((o.values = v.getPayload()),
                  (o.toValues = ev(d) ? null : S == e4 ? [1] : z(w))),
                o.immediate != P && ((o.immediate = P), P || x || this._set(u)),
                A))
            ) {
              let { onRest: e } = o;
              j(tH, (e) => tZ(this, t, e));
              let n = tC(this, tL(this, u));
              q(this._pendingCalls, n),
                this._pendingCalls.add(r),
                o.changed &&
                  l.batchedUpdates(() => {
                    (o.changed = !x),
                      e?.(n, this),
                      x ? tu(a.onRest, n) : o.onStart?.(n, this);
                  });
            }
            x && this._set(_),
              m
                ? r(tV(t.to, t, this._state, this))
                : A
                  ? this._start()
                  : tF(this) && !p
                    ? this._pendingCalls.add(r)
                    : r(tA(_));
          }
          _focus(e) {
            let t = this.animation;
            e !== t.to &&
              (e_(this) && this._detach(),
              (t.to = e),
              e_(this) && this._attach());
          }
          _attach() {
            let e = 0,
              { to: t } = this.animation;
            ev(t) && (eS(t, this), tj(t) && (e = t.priority + 1)),
              (this.priority = e);
          }
          _detach() {
            let { to: e } = this.animation;
            ev(e) && eA(e, this);
          }
          _set(e, t = !0) {
            let r = ex(e);
            if (!E.und(r)) {
              let e = e2(this);
              if (!e || !O(r, e.getValue())) {
                let n = tn(r);
                e && e.constructor == n ? e.setValue(r) : e8(this, n.create(r)),
                  e &&
                    l.batchedUpdates(() => {
                      this._onChange(r, t);
                    });
              }
            }
            return e2(this);
          }
          _onStart() {
            let e = this.animation;
            e.changed ||
              ((e.changed = !0),
              tB(this, "onStart", tC(this, tL(this, e.to)), this));
          }
          _onChange(e, t) {
            t || (this._onStart(), tu(this.animation.onChange, e, this)),
              tu(this.defaultProps.onChange, e, this),
              super._onChange(e, t);
          }
          _start() {
            let e = this.animation;
            e2(this).reset(ex(e.to)),
              e.immediate ||
                (e.fromValues = e.values.map((e) => e.lastPosition)),
              !tF(this) && (tN(this, !0), tT(this) || this._resume());
          }
          _resume() {
            I.skipAnimation ? this.finish() : H.start(this);
          }
          _stop(e, t) {
            if (tF(this)) {
              tN(this, !1);
              let r = this.animation;
              j(r.values, (e) => {
                e.done = !0;
              }),
                r.toValues && (r.onChange = r.onPause = r.onResume = void 0),
                ew(this, { type: "idle", parent: this });
              let n = t ? tI(this.get()) : tC(this.get(), tL(this, e ?? r.to));
              q(this._pendingCalls, n),
                r.changed && ((r.changed = !1), tB(this, "onRest", n, this));
            }
          }
        };
      function tL(e, t) {
        let r = ty(t);
        return O(ty(e.get()), r);
      }
      function tD(e, t = e.loop, r = e.to) {
        let n = tu(t);
        if (n) {
          let s = !0 !== n && tg(n),
            i = (s || e).reverse,
            a = !s || s.reset;
          return tW({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || tb(r) ? r : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...s,
          });
        }
      }
      function tW(e) {
        let { to: t, from: r } = (e = tg(e)),
          n = new Set();
        return (
          E.obj(t) && tG(t, n),
          E.obj(r) && tG(r, n),
          (e.keys = n.size ? Array.from(n) : null),
          e
        );
      }
      function tG(e, t) {
        M(e, (e, r) => null != e && t.add(r));
      }
      var tH = ["onStart", "onRest", "onChange", "onPause", "onResume"];
      function tZ(e, t, r) {
        e.animation[r] = t[r] !== td(t, r) ? tf(t[r], e.key) : void 0;
      }
      function tB(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r);
      }
      var tX = ["onStart", "onChange", "onRest"],
        tJ = 1,
        tY = class {
          constructor(e, t) {
            (this.id = tJ++),
              (this.springs = {}),
              (this.queue = []),
              (this._lastAsyncId = 0),
              (this._active = new Set()),
              (this._changed = new Set()),
              (this._started = !1),
              (this._state = {
                paused: !1,
                pauseQueue: new Set(),
                resumeQueue: new Set(),
                timeouts: new Set(),
              }),
              (this._events = {
                onStart: new Map(),
                onChange: new Map(),
                onRest: new Map(),
              }),
              (this._onFrame = this._onFrame.bind(this)),
              t && (this._flush = t),
              e && this.start({ default: !0, ...e });
          }
          get idle() {
            return (
              !this._state.asyncTo &&
              Object.values(this.springs).every(
                (e) => e.idle && !e.isDelayed && !e.isPaused,
              )
            );
          }
          get item() {
            return this._item;
          }
          set item(e) {
            this._item = e;
          }
          get() {
            let e = {};
            return this.each((t, r) => (e[r] = t.get())), e;
          }
          set(e) {
            for (let t in e) {
              let r = e[t];
              E.und(r) || this.springs[t].set(r);
            }
          }
          update(e) {
            return e && this.queue.push(tW(e)), this;
          }
          start(e) {
            let { queue: t } = this;
            return (e ? (t = z(e).map(tW)) : (this.queue = []), this._flush)
              ? this._flush(this, t)
              : (t9(this, t), tK(this, t));
          }
          stop(e, t) {
            if ((!!e !== e && (t = e), t)) {
              let r = this.springs;
              j(z(t), (t) => r[t].stop(!!e));
            } else
              tR(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e));
            return this;
          }
          pause(e) {
            if (E.und(e)) this.start({ pause: !0 });
            else {
              let t = this.springs;
              j(z(e), (e) => t[e].pause());
            }
            return this;
          }
          resume(e) {
            if (E.und(e)) this.start({ pause: !1 });
            else {
              let t = this.springs;
              j(z(e), (e) => t[e].resume());
            }
            return this;
          }
          each(e) {
            M(this.springs, e);
          }
          _onFrame() {
            let { onStart: e, onChange: t, onRest: r } = this._events,
              n = this._active.size > 0,
              s = this._changed.size > 0;
            ((n && !this._started) || (s && !this._started)) &&
              ((this._started = !0),
              $(e, ([e, t]) => {
                (t.value = this.get()), e(t, this, this._item);
              }));
            let i = !n && this._started,
              a = s || (i && r.size) ? this.get() : null;
            s &&
              t.size &&
              $(t, ([e, t]) => {
                (t.value = a), e(t, this, this._item);
              }),
              i &&
                ((this._started = !1),
                $(r, ([e, t]) => {
                  (t.value = a), e(t, this, this._item);
                }));
          }
          eventObserved(e) {
            if ("change" == e.type)
              this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent);
            }
            l.onFrame(this._onFrame);
          }
        };
      function tK(e, t) {
        return Promise.all(t.map((t) => t0(e, t))).then((t) => tS(e, t));
      }
      async function t0(e, t, r) {
        let { keys: n, to: s, from: i, loop: a, onRest: o, onResolve: u } = t,
          f = E.obj(t.default) && t.default;
        a && (t.loop = !1),
          !1 === s && (t.to = null),
          !1 === i && (t.from = null);
        let d = E.arr(s) || E.fun(s) ? s : void 0;
        d
          ? ((t.to = void 0), (t.onRest = void 0), f && (f.onRest = void 0))
          : j(tX, (r) => {
              let n = t[r];
              if (E.fun(n)) {
                let s = e._events[r];
                (t[r] = ({ finished: e, cancelled: t }) => {
                  let r = s.get(n);
                  r
                    ? (e || (r.finished = !1), t && (r.cancelled = !0))
                    : s.set(n, {
                        value: null,
                        finished: e || !1,
                        cancelled: t || !1,
                      });
                }),
                  f && (f[r] = t[r]);
              }
            });
        let h = e._state;
        !h.paused === t.pause
          ? ((h.paused = t.pause), q(t.pause ? h.pauseQueue : h.resumeQueue))
          : h.paused && (t.pause = !0);
        let c = (n || Object.keys(e.springs)).map((r) => e.springs[r].start(t)),
          p = !0 === t.cancel || !0 === td(t, "cancel");
        (d || (p && h.asyncId)) &&
          c.push(
            tP(++e._lastAsyncId, {
              props: t,
              state: h,
              actions: {
                pause: V,
                resume: V,
                start(t, r) {
                  p
                    ? (tR(h, e._lastAsyncId), r(tI(e)))
                    : ((t.onRest = o), r(tV(d, t, h, e)));
                },
              },
            }),
          ),
          h.paused &&
            (await new Promise((e) => {
              h.resumeQueue.add(e);
            }));
        let m = tS(e, await Promise.all(c));
        if (a && m.finished && !(r && m.noop)) {
          let r = tD(t, a, s);
          if (r) return t9(e, [r]), t0(e, r, !0);
        }
        return u && l.batchedUpdates(() => u(m, e, e.item)), m;
      }
      function t1(e, t) {
        let r = { ...e.springs };
        return (
          t &&
            j(z(t), (e) => {
              E.und(e.keys) && (e = tW(e)),
                E.obj(e.to) || (e = { ...e, to: void 0 }),
                t8(r, e, (e) => t2(e));
            }),
          t5(e, r),
          r
        );
      }
      function t5(e, t) {
        M(t, (t, r) => {
          e.springs[r] || ((e.springs[r] = t), eS(t, e));
        });
      }
      function t2(e, t) {
        let r = new tQ();
        return (r.key = e), t && eS(r, t), r;
      }
      function t8(e, t, r) {
        t.keys &&
          j(t.keys, (n) => {
            (e[n] || (e[n] = r(n)))._prepareNode(t);
          });
      }
      function t9(e, t) {
        j(t, (t) => {
          t8(e.springs, t, (t) => t2(t, e));
        });
      }
      var t3 = ({ children: e, ...t }) => {
          let r = (0, A.useContext)(t6),
            n = t.pause || !!r.pause,
            s = t.immediate || !!r.immediate;
          t = (function (e, t) {
            let [r] = (0, A.useState)(() => ({ inputs: t, result: e() })),
              n = (0, A.useRef)(),
              s = n.current,
              i = s;
            return (
              i
                ? (t &&
                    i.inputs &&
                    (function (e, t) {
                      if (e.length !== t.length) return !1;
                      for (let r = 0; r < e.length; r++)
                        if (e[r] !== t[r]) return !1;
                      return !0;
                    })(t, i.inputs)) ||
                  (i = { inputs: t, result: e() })
                : (i = r),
              (0, A.useEffect)(() => {
                (n.current = i), s == r && (r.inputs = r.result = void 0);
              }, [i]),
              i.result
            );
          })(() => ({ pause: n, immediate: s }), [n, s]);
          let { Provider: i } = t6;
          return A.createElement(i, { value: t }, e);
        },
        t6 = (function (e, t) {
          return (
            Object.assign(e, A.createContext(t)),
            (e.Provider._context = e),
            (e.Consumer._context = e),
            e
          );
        })(t3, {});
      (t3.Provider = t6.Provider), (t3.Consumer = t6.Consumer);
      var t4 = () => {
        let e = [],
          t = function (t) {
            eN(
              `${eq}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`,
            );
            let n = [];
            return (
              j(e, (e, s) => {
                if (E.und(t)) n.push(e.start());
                else {
                  let i = r(t, e, s);
                  i && n.push(e.start(i));
                }
              }),
              n
            );
          };
        (t.current = e),
          (t.add = function (t) {
            e.includes(t) || e.push(t);
          }),
          (t.delete = function (t) {
            let r = e.indexOf(t);
            ~r && e.splice(r, 1);
          }),
          (t.pause = function () {
            return j(e, (e) => e.pause(...arguments)), this;
          }),
          (t.resume = function () {
            return j(e, (e) => e.resume(...arguments)), this;
          }),
          (t.set = function (t) {
            j(e, (e, r) => {
              let n = E.fun(t) ? t(r, e) : t;
              n && e.set(n);
            });
          }),
          (t.start = function (t) {
            let r = [];
            return (
              j(e, (e, n) => {
                if (E.und(t)) r.push(e.start());
                else {
                  let s = this._getProps(t, e, n);
                  s && r.push(e.start(s));
                }
              }),
              r
            );
          }),
          (t.stop = function () {
            return j(e, (e) => e.stop(...arguments)), this;
          }),
          (t.update = function (t) {
            return j(e, (e, r) => e.update(this._getProps(t, e, r))), this;
          });
        let r = function (e, t, r) {
          return E.fun(e) ? e(r, t) : e;
        };
        return (t._getProps = r), t;
      };
      function t7(e, t, r) {
        let n = E.fun(t) && t;
        n && !r && (r = []);
        let s = (0, A.useMemo)(
            () => (n || 3 == arguments.length ? t4() : void 0),
            [],
          ),
          i = (0, A.useRef)(0),
          a = eJ(),
          o = (0, A.useMemo)(
            () => ({
              ctrls: [],
              queue: [],
              flush(e, t) {
                let r = t1(e, t);
                return !(i.current > 0) ||
                  o.queue.length ||
                  Object.keys(r).some((t) => !e.springs[t])
                  ? new Promise((n) => {
                      t5(e, r),
                        o.queue.push(() => {
                          n(tK(e, t));
                        }),
                        a();
                    })
                  : tK(e, t);
              },
            }),
            [],
          ),
          u = (0, A.useRef)([...o.ctrls]),
          l = [],
          f = e0(e) || 0;
        function d(e, r) {
          for (let s = e; s < r; s++) {
            let e = u.current[s] || (u.current[s] = new tY(null, o.flush)),
              r = n ? n(s, e) : t[s];
            r &&
              (l[s] = (function (e) {
                let t = tW(e);
                return E.und(t.default) && (t.default = tc(t)), t;
              })(r));
          }
        }
        (0, A.useMemo)(() => {
          j(u.current.slice(e, f), (e) => {
            var t, r;
            (t = e), (r = s), t.ref?.delete(t), r?.delete(t), e.stop(!0);
          }),
            (u.current.length = e),
            d(f, e);
        }, [e]),
          (0, A.useMemo)(() => {
            d(0, Math.min(f, e));
          }, r);
        let h = u.current.map((e, t) => t1(e, l[t])),
          c = (0, A.useContext)(t3),
          p = e0(c),
          m =
            c !== p &&
            (function (e) {
              for (let t in e) return !0;
              return !1;
            })(c);
        eB(() => {
          i.current++, (o.ctrls = u.current);
          let { queue: e } = o;
          e.length && ((o.queue = []), j(e, (e) => e())),
            j(u.current, (e, t) => {
              var r, n;
              s?.add(e), m && e.start({ default: c });
              let i = l[t];
              i &&
                ((r = e),
                (n = i.ref) &&
                  r.ref !== n &&
                  (r.ref?.delete(r), n.add(r), (r.ref = n)),
                e.ref ? e.queue.push(i) : e.start(i));
            });
        }),
          eY(() => () => {
            j(o.ctrls, (e) => e.stop(!0));
          });
        let g = h.map((e) => ({ ...e }));
        return s ? [g, s] : g;
      }
      var re = class extends tz {
        constructor(e, t) {
          super(),
            (this.source = e),
            (this.idle = !0),
            (this._active = new Set()),
            (this.calc = eg(...t));
          let r = this._get();
          e8(this, tn(r).create(r));
        }
        advance(e) {
          let t = this._get();
          O(t, this.get()) ||
            (e2(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && rr(this._active) && rn(this);
        }
        _get() {
          let e = E.arr(this.source) ? this.source.map(ex) : z(ex(this.source));
          return this.calc(...e);
        }
        _start() {
          this.idle &&
            !rr(this._active) &&
            ((this.idle = !1),
            j(e9(this), (e) => {
              e.done = !1;
            }),
            I.skipAnimation
              ? (l.batchedUpdates(() => this.advance()), rn(this))
              : H.start(this));
        }
        _attach() {
          let e = 1;
          j(z(this.source), (t) => {
            ev(t) && eS(t, this),
              tj(t) &&
                (t.idle || this._active.add(t),
                (e = Math.max(e, t.priority + 1)));
          }),
            (this.priority = e),
            this._start();
        }
        _detach() {
          j(z(this.source), (e) => {
            ev(e) && eA(e, this);
          }),
            this._active.clear(),
            rn(this);
        }
        eventObserved(e) {
          "change" == e.type
            ? e.idle
              ? this.advance()
              : (this._active.add(e.parent), this._start())
            : "idle" == e.type
              ? this._active.delete(e.parent)
              : "priority" == e.type &&
                (this.priority = z(this.source).reduce(
                  (e, t) => Math.max(e, (tj(t) ? t.priority : 0) + 1),
                  0,
                ));
        }
      };
      function rt(e) {
        return !1 !== e.idle;
      }
      function rr(e) {
        return !e.size || Array.from(e).every(rt);
      }
      function rn(e) {
        e.idle ||
          ((e.idle = !0),
          j(e9(e), (e) => {
            e.done = !0;
          }),
          ew(e, { type: "idle", parent: e }));
      }
      I.assign({ createStringInterpolator: e$, to: (e, t) => new re(e, t) }),
        H.advance;
      var rs = r(8477),
        ri = /^--/,
        ra = {},
        ro = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        ru = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
        rl = ["Webkit", "Ms", "Moz", "O"];
      ro = Object.keys(ro).reduce(
        (e, t) => (rl.forEach((r) => (e[ru(r, t)] = e[t])), e),
        ro,
      );
      var rf = /^(matrix|translate|scale|rotate|skew)/,
        rd = /^(translate)/,
        rh = /^(rotate|skew)/,
        rc = (e, t) => (E.num(e) && 0 !== e ? e + t : e),
        rp = (e, t) =>
          E.arr(e)
            ? e.every((e) => rp(e, t))
            : E.num(e)
              ? e === t
              : parseFloat(e) === t,
        rm = class extends te {
          constructor({ x: e, y: t, z: r, ...n }) {
            let s = [],
              i = [];
            (e || t || r) &&
              (s.push([e || 0, t || 0, r || 0]),
              i.push((e) => [
                `translate3d(${e.map((e) => rc(e, "px")).join(",")})`,
                rp(e, 0),
              ])),
              M(n, (e, t) => {
                if ("transform" === t)
                  s.push([e || ""]), i.push((e) => [e, "" === e]);
                else if (rf.test(t)) {
                  if ((delete n[t], E.und(e))) return;
                  let r = rd.test(t) ? "px" : rh.test(t) ? "deg" : "";
                  s.push(z(e)),
                    i.push(
                      "rotate3d" === t
                        ? ([e, t, n, s]) => [
                            `rotate3d(${e},${t},${n},${rc(s, r)})`,
                            rp(s, 0),
                          ]
                        : (e) => [
                            `${t}(${e.map((e) => rc(e, r)).join(",")})`,
                            rp(e, +!!t.startsWith("scale")),
                          ],
                    );
                }
              }),
              s.length && (n.transform = new rg(s, i)),
              super(n);
          }
        },
        rg = class extends ek {
          constructor(e, t) {
            super(),
              (this.inputs = e),
              (this.transforms = t),
              (this._value = null);
          }
          get() {
            return this._value || (this._value = this._get());
          }
          _get() {
            let e = "",
              t = !0;
            return (
              j(this.inputs, (r, n) => {
                let s = ex(r[0]),
                  [i, a] = this.transforms[n](E.arr(s) ? s : r.map(ex));
                (e += " " + i), (t = t && a);
              }),
              t ? "none" : e
            );
          }
          observerAdded(e) {
            1 == e && j(this.inputs, (e) => j(e, (e) => ev(e) && eS(e, this)));
          }
          observerRemoved(e) {
            0 == e && j(this.inputs, (e) => j(e, (e) => ev(e) && eA(e, this)));
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), ew(this, e);
          }
        };
      I.assign({
        batchedUpdates: rs.unstable_batchedUpdates,
        createStringInterpolator: e$,
        colors: {
          transparent: 0,
          aliceblue: 0xf0f8ffff,
          antiquewhite: 0xfaebd7ff,
          aqua: 0xffffff,
          aquamarine: 0x7fffd4ff,
          azure: 0xf0ffffff,
          beige: 0xf5f5dcff,
          bisque: 0xffe4c4ff,
          black: 255,
          blanchedalmond: 0xffebcdff,
          blue: 65535,
          blueviolet: 0x8a2be2ff,
          brown: 0xa52a2aff,
          burlywood: 0xdeb887ff,
          burntsienna: 0xea7e5dff,
          cadetblue: 0x5f9ea0ff,
          chartreuse: 0x7fff00ff,
          chocolate: 0xd2691eff,
          coral: 0xff7f50ff,
          cornflowerblue: 0x6495edff,
          cornsilk: 0xfff8dcff,
          crimson: 0xdc143cff,
          cyan: 0xffffff,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 0xb8860bff,
          darkgray: 0xa9a9a9ff,
          darkgreen: 6553855,
          darkgrey: 0xa9a9a9ff,
          darkkhaki: 0xbdb76bff,
          darkmagenta: 0x8b008bff,
          darkolivegreen: 0x556b2fff,
          darkorange: 0xff8c00ff,
          darkorchid: 0x9932ccff,
          darkred: 0x8b0000ff,
          darksalmon: 0xe9967aff,
          darkseagreen: 0x8fbc8fff,
          darkslateblue: 0x483d8bff,
          darkslategray: 0x2f4f4fff,
          darkslategrey: 0x2f4f4fff,
          darkturquoise: 0xced1ff,
          darkviolet: 0x9400d3ff,
          deeppink: 0xff1493ff,
          deepskyblue: 0xbfffff,
          dimgray: 0x696969ff,
          dimgrey: 0x696969ff,
          dodgerblue: 0x1e90ffff,
          firebrick: 0xb22222ff,
          floralwhite: 0xfffaf0ff,
          forestgreen: 0x228b22ff,
          fuchsia: 0xff00ffff,
          gainsboro: 0xdcdcdcff,
          ghostwhite: 0xf8f8ffff,
          gold: 0xffd700ff,
          goldenrod: 0xdaa520ff,
          gray: 0x808080ff,
          green: 8388863,
          greenyellow: 0xadff2fff,
          grey: 0x808080ff,
          honeydew: 0xf0fff0ff,
          hotpink: 0xff69b4ff,
          indianred: 0xcd5c5cff,
          indigo: 0x4b0082ff,
          ivory: 0xfffff0ff,
          khaki: 0xf0e68cff,
          lavender: 0xe6e6faff,
          lavenderblush: 0xfff0f5ff,
          lawngreen: 0x7cfc00ff,
          lemonchiffon: 0xfffacdff,
          lightblue: 0xadd8e6ff,
          lightcoral: 0xf08080ff,
          lightcyan: 0xe0ffffff,
          lightgoldenrodyellow: 0xfafad2ff,
          lightgray: 0xd3d3d3ff,
          lightgreen: 0x90ee90ff,
          lightgrey: 0xd3d3d3ff,
          lightpink: 0xffb6c1ff,
          lightsalmon: 0xffa07aff,
          lightseagreen: 0x20b2aaff,
          lightskyblue: 0x87cefaff,
          lightslategray: 0x778899ff,
          lightslategrey: 0x778899ff,
          lightsteelblue: 0xb0c4deff,
          lightyellow: 0xffffe0ff,
          lime: 0xff00ff,
          limegreen: 0x32cd32ff,
          linen: 0xfaf0e6ff,
          magenta: 0xff00ffff,
          maroon: 0x800000ff,
          mediumaquamarine: 0x66cdaaff,
          mediumblue: 52735,
          mediumorchid: 0xba55d3ff,
          mediumpurple: 0x9370dbff,
          mediumseagreen: 0x3cb371ff,
          mediumslateblue: 0x7b68eeff,
          mediumspringgreen: 0xfa9aff,
          mediumturquoise: 0x48d1ccff,
          mediumvioletred: 0xc71585ff,
          midnightblue: 0x191970ff,
          mintcream: 0xf5fffaff,
          mistyrose: 0xffe4e1ff,
          moccasin: 0xffe4b5ff,
          navajowhite: 0xffdeadff,
          navy: 33023,
          oldlace: 0xfdf5e6ff,
          olive: 0x808000ff,
          olivedrab: 0x6b8e23ff,
          orange: 0xffa500ff,
          orangered: 0xff4500ff,
          orchid: 0xda70d6ff,
          palegoldenrod: 0xeee8aaff,
          palegreen: 0x98fb98ff,
          paleturquoise: 0xafeeeeff,
          palevioletred: 0xdb7093ff,
          papayawhip: 0xffefd5ff,
          peachpuff: 0xffdab9ff,
          peru: 0xcd853fff,
          pink: 0xffc0cbff,
          plum: 0xdda0ddff,
          powderblue: 0xb0e0e6ff,
          purple: 0x800080ff,
          rebeccapurple: 0x663399ff,
          red: 0xff0000ff,
          rosybrown: 0xbc8f8fff,
          royalblue: 0x4169e1ff,
          saddlebrown: 0x8b4513ff,
          salmon: 0xfa8072ff,
          sandybrown: 0xf4a460ff,
          seagreen: 0x2e8b57ff,
          seashell: 0xfff5eeff,
          sienna: 0xa0522dff,
          silver: 0xc0c0c0ff,
          skyblue: 0x87ceebff,
          slateblue: 0x6a5acdff,
          slategray: 0x708090ff,
          slategrey: 0x708090ff,
          snow: 0xfffafaff,
          springgreen: 0xff7fff,
          steelblue: 0x4682b4ff,
          tan: 0xd2b48cff,
          teal: 8421631,
          thistle: 0xd8bfd8ff,
          tomato: 0xff6347ff,
          turquoise: 0x40e0d0ff,
          violet: 0xee82eeff,
          wheat: 0xf5deb3ff,
          white: 0xffffffff,
          whitesmoke: 0xf5f5f5ff,
          yellow: 0xffff00ff,
          yellowgreen: 0x9acd32ff,
        },
      });
      var ry = ((
        e,
        {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = (e) => new te(e),
          getComponentProps: n = (e) => e,
        } = {},
      ) => {
        let s = {
            applyAnimatedValues: t,
            createAnimatedStyle: r,
            getComponentProps: n,
          },
          i = (e) => {
            let t = to(e) || "Anonymous";
            return (
              ((e = E.str(e)
                ? i[e] || (i[e] = ts(e, s))
                : e[ta] || (e[ta] = ts(e, s))).displayName = `Animated(${t})`),
              e
            );
          };
        return (
          M(e, (t, r) => {
            E.arr(e) && (r = to(t)), (i[r] = i(t));
          }),
          { animated: i }
        );
      })(
        [
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ],
        {
          applyAnimatedValues: function (e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            let r =
                "filter" === e.nodeName ||
                (e.parentNode && "filter" === e.parentNode.nodeName),
              {
                className: n,
                style: s,
                children: i,
                scrollTop: a,
                scrollLeft: o,
                viewBox: u,
                ...l
              } = t,
              f = Object.values(l),
              d = Object.keys(l).map((t) =>
                r || e.hasAttribute(t)
                  ? t
                  : ra[t] ||
                    (ra[t] = t.replace(
                      /([A-Z])/g,
                      (e) => "-" + e.toLowerCase(),
                    )),
              );
            for (let t in (void 0 !== i && (e.textContent = i), s))
              if (s.hasOwnProperty(t)) {
                var h;
                let r =
                  null == (h = s[t]) || "boolean" == typeof h || "" === h
                    ? ""
                    : "number" != typeof h ||
                        0 === h ||
                        ri.test(t) ||
                        (ro.hasOwnProperty(t) && ro[t])
                      ? ("" + h).trim()
                      : h + "px";
                ri.test(t) ? e.style.setProperty(t, r) : (e.style[t] = r);
              }
            d.forEach((t, r) => {
              e.setAttribute(t, f[r]);
            }),
              void 0 !== n && (e.className = n),
              void 0 !== a && (e.scrollTop = a),
              void 0 !== o && (e.scrollLeft = o),
              void 0 !== u && e.setAttribute("viewBox", u);
          },
          createAnimatedStyle: (e) => new rm(e),
          getComponentProps: ({ scrollTop: e, scrollLeft: t, ...r }) => r,
        },
      ).animated;
    },
  },
]);
