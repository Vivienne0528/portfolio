(() => {
  var e = {};
  (e.id = 871),
    (e.ids = [220, 636, 871]),
    (e.modules = {
      237: (e, t) => {
        "use strict";
        Object.defineProperty(t, "A", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
        var r = (function (e) {
          return (
            (e.PAGES = "PAGES"),
            (e.PAGES_API = "PAGES_API"),
            (e.APP_PAGE = "APP_PAGE"),
            (e.APP_ROUTE = "APP_ROUTE"),
            (e.IMAGE = "IMAGE"),
            e
          );
        })({});
      },
      361: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");
      },
      700: (e) => {
        "use strict";
        e.exports = import("@react-spring/web");
      },
      979: () => {},
      1413: (e, t) => {
        "use strict";
        Object.defineProperty(t, "M", {
          enumerable: !0,
          get: function () {
            return function e(t, r) {
              return r in t
                ? t[r]
                : "then" in t && "function" == typeof t.then
                  ? t.then((t) => e(t, r))
                  : "function" == typeof t && "default" === r
                    ? t
                    : void 0;
            };
          },
        });
      },
      1779: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        var s = r(8732),
          a = r(2341);
        function n() {
          return (0, s.jsxs)(a.Html, {
            lang: "en",
            children: [
              (0, s.jsx)(a.Head, {}),
              (0, s.jsxs)("body", {
                className: "antialiased",
                children: [
                  (0, s.jsx)(a.Main, {}),
                  (0, s.jsx)(a.NextScript, {}),
                ],
              }),
            ],
          });
        }
      },
      2015: (e) => {
        "use strict";
        e.exports = require("react");
      },
      2081: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => a });
        var s = r(8732);
        function a({ Component: e, pageProps: t }) {
          return (0, s.jsx)(e, { ...t });
        }
        r(979);
      },
      2492: (e, t, r) => {
        "use strict";
        r.a(e, async (e, s) => {
          try {
            r.r(t), r.d(t, { default: () => u });
            var a = r(8732),
              n = r(700),
              i = r(2015),
              l = e([n]);
            n = (l.then ? (await l)() : l)[0];
            let u = ({
              text: e = "",
              className: t = "",
              delay: r = 100,
              animationFrom: s = {
                opacity: 0,
                transform: "translate3d(0,40px,0)",
              },
              animationTo: l = { opacity: 1, transform: "translate3d(0,0,0)" },
              easing: u = "easeOutCubic",
              threshold: c = 0.1,
              rootMargin: o = "-100px",
              textAlign: p = "center",
              onLetterAnimationComplete: d,
            }) => {
              let P = e.split(" ").map((e) => e.split("")),
                f = P.flat(),
                [g, S] = (0, i.useState)(!1),
                m = (0, i.useRef)(),
                b = (0, i.useRef)(0);
              (0, i.useEffect)(() => {
                let e = new IntersectionObserver(
                  ([t]) => {
                    t.isIntersecting && (S(!0), e.unobserve(m.current));
                  },
                  { threshold: c, rootMargin: o },
                );
                return e.observe(m.current), () => e.disconnect();
              }, [c, o]);
              let h = (0, n.useSprings)(
                f.length,
                f.map((e, t) => ({
                  from: s,
                  to: g
                    ? async (e) => {
                        await e(l),
                          (b.current += 1),
                          b.current === f.length && d && d();
                      }
                    : s,
                  delay: t * r,
                  config: { easing: u },
                })),
              );
              return (0, a.jsx)("p", {
                ref: m,
                className: `split-parent ${t}`,
                style: {
                  textAlign: p,
                  overflow: "hidden",
                  display: "inline",
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                },
                children: P.map((e, t) =>
                  (0, a.jsxs)(
                    "span",
                    {
                      style: { display: "inline-block", whiteSpace: "nowrap" },
                      children: [
                        e.map((e, r) => {
                          let s =
                            P.slice(0, t).reduce((e, t) => e + t.length, 0) + r;
                          return (0, a.jsx)(
                            n.animated.span,
                            {
                              style: {
                                ...h[s],
                                display: "inline-block",
                                willChange: "transform, opacity",
                              },
                              children: e,
                            },
                            s,
                          );
                        }),
                        (0, a.jsx)("span", {
                          style: { display: "inline-block", width: "0.3em" },
                          children: "\xa0",
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              });
            };
            s();
          } catch (e) {
            s(e);
          }
        });
      },
      3817: (e, t, r) => {
        "use strict";
        r.a(e, async (e, s) => {
          try {
            r.r(t),
              r.d(t, {
                config: () => g,
                default: () => p,
                getServerSideProps: () => f,
                getStaticPaths: () => P,
                getStaticProps: () => d,
                reportWebVitals: () => S,
                routeModule: () => v,
                unstable_getServerProps: () => x,
                unstable_getServerSideProps: () => y,
                unstable_getStaticParams: () => h,
                unstable_getStaticPaths: () => b,
                unstable_getStaticProps: () => m,
              });
            var a = r(3885),
              n = r(237),
              i = r(1413),
              l = r(1779),
              u = r(2081),
              c = r(2492),
              o = e([c]);
            c = (o.then ? (await o)() : o)[0];
            let p = (0, i.M)(c, "default"),
              d = (0, i.M)(c, "getStaticProps"),
              P = (0, i.M)(c, "getStaticPaths"),
              f = (0, i.M)(c, "getServerSideProps"),
              g = (0, i.M)(c, "config"),
              S = (0, i.M)(c, "reportWebVitals"),
              m = (0, i.M)(c, "unstable_getStaticProps"),
              b = (0, i.M)(c, "unstable_getStaticPaths"),
              h = (0, i.M)(c, "unstable_getStaticParams"),
              x = (0, i.M)(c, "unstable_getServerProps"),
              y = (0, i.M)(c, "unstable_getServerSideProps"),
              v = new a.PagesRouteModule({
                definition: {
                  kind: n.A.PAGES,
                  page: "/utils/SplitText",
                  pathname: "/utils/SplitText",
                  bundlePath: "",
                  filename: "",
                },
                components: { App: u.default, Document: l.default },
                userland: c,
              });
            s();
          } catch (e) {
            s(e);
          }
        });
      },
      3873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      8732: (e) => {
        "use strict";
        e.exports = require("react/jsx-runtime");
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [341], () => r(3817));
  module.exports = s;
})();
