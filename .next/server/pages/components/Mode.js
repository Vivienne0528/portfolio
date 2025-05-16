(() => {
  var e = {};
  (e.id = 330),
    (e.ids = [220, 330, 636]),
    (e.modules = {
      237: (e, t) => {
        "use strict";
        Object.defineProperty(t, "A", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
        var s = (function (e) {
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
      526: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { UseContext: () => n, default: () => l });
        var r = s(8732),
          a = s(2015);
        let n = (0, a.createContext)(null),
          l = ({ children: e }) => {
            let [t, s] = (0, a.useState)(!1),
              [l, o] = (0, a.useState)(!1),
              [i, c] = (0, a.useState)(""),
              u = (0, a.useRef)(null);
            return (
              (0, a.useEffect)(() => {
                let e = () => {
                  s(window.scrollY > 10);
                };
                return (
                  window.addEventListener("scroll", e),
                  () => window.removeEventListener("scroll", e)
                );
              }, []),
              (0, r.jsx)(n.Provider, {
                value: {
                  isScrolled: t,
                  setIsScrolled: s,
                  isMenuOpened: l,
                  setIsMenuOpened: o,
                  handleClickMenu: () => {
                    s(() => !0), o(() => !l), console.log(l);
                  },
                  checkboxRef: u,
                  activeSection: i,
                  scrollToSection: (e, t) => {
                    t.current?.scrollIntoView({ behavior: "smooth" }),
                      c(e),
                      o(!1),
                      console.log(`scroll to ${e}`);
                    let s = window.menuCheckboxRef;
                    s?.current && (s.current.checked = !1);
                  },
                },
                children: e,
              })
            );
          };
      },
      551: (e, t, s) => {
        "use strict";
        s.r(t),
          s.d(t, {
            config: () => h,
            default: () => c,
            getServerSideProps: () => p,
            getStaticPaths: () => d,
            getStaticProps: () => u,
            reportWebVitals: () => x,
            routeModule: () => P,
            unstable_getServerProps: () => v,
            unstable_getServerSideProps: () => f,
            unstable_getStaticParams: () => m,
            unstable_getStaticPaths: () => w,
            unstable_getStaticProps: () => g,
          });
        var r = s(3885),
          a = s(237),
          n = s(1413),
          l = s(1779),
          o = s(2081),
          i = s(5603);
        let c = (0, n.M)(i, "default"),
          u = (0, n.M)(i, "getStaticProps"),
          d = (0, n.M)(i, "getStaticPaths"),
          p = (0, n.M)(i, "getServerSideProps"),
          h = (0, n.M)(i, "config"),
          x = (0, n.M)(i, "reportWebVitals"),
          g = (0, n.M)(i, "unstable_getStaticProps"),
          w = (0, n.M)(i, "unstable_getStaticPaths"),
          m = (0, n.M)(i, "unstable_getStaticParams"),
          v = (0, n.M)(i, "unstable_getServerProps"),
          f = (0, n.M)(i, "unstable_getServerSideProps"),
          P = new r.PagesRouteModule({
            definition: {
              kind: a.A.PAGES,
              page: "/components/Mode",
              pathname: "/components/Mode",
              bundlePath: "",
              filename: "",
            },
            components: { App: o.default, Document: l.default },
            userland: i,
          });
      },
      979: () => {},
      1413: (e, t) => {
        "use strict";
        Object.defineProperty(t, "M", {
          enumerable: !0,
          get: function () {
            return function e(t, s) {
              return s in t
                ? t[s]
                : "then" in t && "function" == typeof t.then
                  ? t.then((t) => e(t, s))
                  : "function" == typeof t && "default" === s
                    ? t
                    : void 0;
            };
          },
        });
      },
      1779: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => n });
        var r = s(8732),
          a = s(2341);
        function n() {
          return (0, r.jsxs)(a.Html, {
            lang: "en",
            children: [
              (0, r.jsx)(a.Head, {}),
              (0, r.jsxs)("body", {
                className: "antialiased",
                children: [
                  (0, r.jsx)(a.Main, {}),
                  (0, r.jsx)(a.NextScript, {}),
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
      2081: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => a });
        var r = s(8732);
        function a({ Component: e, pageProps: t }) {
          return (0, r.jsx)(e, { ...t });
        }
        s(979);
      },
      3873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      5603: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => l });
        var r = s(8732),
          a = s(2015),
          n = s(526);
        let l = () => {
          let { handleClickMenu: e, checkboxRef: t } = (0, a.useContext)(
            n.UseContext,
          );
          return (0, r.jsxs)("section", {
            className: "flex  gap-5 md:pr-2 pr-4",
            children: [
              (0, r.jsxs)("label", {
                className:
                  "swap swap-rotate hover:scale-105 transition duration-200 ease-in-out",
                children: [
                  (0, r.jsx)("input", {
                    type: "checkbox",
                    className: "theme-controller",
                    value: "abyss",
                  }),
                  (0, r.jsx)("svg", {
                    className: "swap-off h-10 w-10 fill-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                      d: "M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z",
                    }),
                  }),
                  (0, r.jsx)("svg", {
                    className: "swap-on h-10 w-10 fill-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                      d: "M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z",
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)("label", {
                className:
                  " lg:hidden btn btn-circle swap swap-rotate hover:scale-105 transition duration-200 ease-in-out",
                children: [
                  (0, r.jsx)("input", { type: "checkbox", ref: t }),
                  (0, r.jsx)("svg", {
                    onClick: e,
                    className: "swap-off fill-current ",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 512 512",
                    children: (0, r.jsx)("path", {
                      d: "M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z",
                    }),
                  }),
                  (0, r.jsx)("svg", {
                    onClick: e,
                    className: "swap-on fill-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 512 512",
                    children: (0, r.jsx)("polygon", {
                      points:
                        "400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49",
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      },
      8732: (e) => {
        "use strict";
        e.exports = require("react/jsx-runtime");
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var s = (e) => t((t.s = e)),
    r = t.X(0, [341], () => s(551));
  module.exports = r;
})();
