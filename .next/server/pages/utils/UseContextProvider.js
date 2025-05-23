(() => {
  var e = {};
  (e.id = 455),
    (e.ids = [220, 455, 636]),
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
      526: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { UseContext: () => i, default: () => u });
        var s = r(8732),
          n = r(2015);
        let i = (0, n.createContext)(null),
          u = ({ children: e }) => {
            let [t, r] = (0, n.useState)(!1),
              [u, o] = (0, n.useState)(!1),
              [a, l] = (0, n.useState)(""),
              c = (0, n.useRef)(null);
            return (
              (0, n.useEffect)(() => {
                let e = () => {
                  r(window.scrollY > 10);
                };
                return (
                  window.addEventListener("scroll", e),
                  () => window.removeEventListener("scroll", e)
                );
              }, []),
              (0, s.jsx)(i.Provider, {
                value: {
                  isScrolled: t,
                  setIsScrolled: r,
                  isMenuOpened: u,
                  setIsMenuOpened: o,
                  handleClickMenu: () => {
                    r(() => !0), o(() => !u), console.log(u);
                  },
                  checkboxRef: c,
                  activeSection: a,
                  scrollToSection: (e, t) => {
                    t.current?.scrollIntoView({ behavior: "smooth" }),
                      l(e),
                      o(!1),
                      console.log(`scroll to ${e}`);
                    let r = window.menuCheckboxRef;
                    r?.current && (r.current.checked = !1);
                  },
                },
                children: e,
              })
            );
          };
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
        r.r(t), r.d(t, { default: () => i });
        var s = r(8732),
          n = r(2341);
        function i() {
          return (0, s.jsxs)(n.Html, {
            lang: "en",
            children: [
              (0, s.jsx)(n.Head, {}),
              (0, s.jsxs)("body", {
                className: "antialiased",
                children: [
                  (0, s.jsx)(n.Main, {}),
                  (0, s.jsx)(n.NextScript, {}),
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
        r.r(t), r.d(t, { default: () => n });
        var s = r(8732);
        function n({ Component: e, pageProps: t }) {
          return (0, s.jsx)(e, { ...t });
        }
        r(979);
      },
      3873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      8732: (e) => {
        "use strict";
        e.exports = require("react/jsx-runtime");
      },
      9333: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            config: () => p,
            default: () => l,
            getServerSideProps: () => P,
            getStaticPaths: () => d,
            getStaticProps: () => c,
            reportWebVitals: () => S,
            routeModule: () => m,
            unstable_getServerProps: () => b,
            unstable_getServerSideProps: () => x,
            unstable_getStaticParams: () => v,
            unstable_getStaticPaths: () => g,
            unstable_getStaticProps: () => f,
          });
        var s = r(3885),
          n = r(237),
          i = r(1413),
          u = r(1779),
          o = r(2081),
          a = r(526);
        let l = (0, i.M)(a, "default"),
          c = (0, i.M)(a, "getStaticProps"),
          d = (0, i.M)(a, "getStaticPaths"),
          P = (0, i.M)(a, "getServerSideProps"),
          p = (0, i.M)(a, "config"),
          S = (0, i.M)(a, "reportWebVitals"),
          f = (0, i.M)(a, "unstable_getStaticProps"),
          g = (0, i.M)(a, "unstable_getStaticPaths"),
          v = (0, i.M)(a, "unstable_getStaticParams"),
          b = (0, i.M)(a, "unstable_getServerProps"),
          x = (0, i.M)(a, "unstable_getServerSideProps"),
          m = new s.PagesRouteModule({
            definition: {
              kind: n.A.PAGES,
              page: "/utils/UseContextProvider",
              pathname: "/utils/UseContextProvider",
              bundlePath: "",
              filename: "",
            },
            components: { App: o.default, Document: u.default },
            userland: a,
          });
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [341], () => r(9333));
  module.exports = s;
})();
