(() => {
  var e = {};
  (e.id = 293),
    (e.ids = [220, 293, 636]),
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
      285: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            config: () => f,
            default: () => c,
            getServerSideProps: () => x,
            getStaticPaths: () => d,
            getStaticProps: () => u,
            reportWebVitals: () => p,
            routeModule: () => g,
            unstable_getServerProps: () => m,
            unstable_getServerSideProps: () => v,
            unstable_getStaticParams: () => w,
            unstable_getStaticPaths: () => b,
            unstable_getStaticProps: () => h,
          });
        var s = r(3885),
          n = r(237),
          o = r(1413),
          l = r(1779),
          a = r(2081),
          i = r(9118);
        let c = (0, o.M)(i, "default"),
          u = (0, o.M)(i, "getStaticProps"),
          d = (0, o.M)(i, "getStaticPaths"),
          x = (0, o.M)(i, "getServerSideProps"),
          f = (0, o.M)(i, "config"),
          p = (0, o.M)(i, "reportWebVitals"),
          h = (0, o.M)(i, "unstable_getStaticProps"),
          b = (0, o.M)(i, "unstable_getStaticPaths"),
          w = (0, o.M)(i, "unstable_getStaticParams"),
          m = (0, o.M)(i, "unstable_getServerProps"),
          v = (0, o.M)(i, "unstable_getServerSideProps"),
          g = new s.PagesRouteModule({
            definition: {
              kind: n.A.PAGES,
              page: "/components/NavBar",
              pathname: "/components/NavBar",
              bundlePath: "",
              filename: "",
            },
            components: { App: a.default, Document: l.default },
            userland: i,
          });
      },
      361: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");
      },
      526: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { UseContext: () => o, default: () => l });
        var s = r(8732),
          n = r(2015);
        let o = (0, n.createContext)(null),
          l = ({ children: e }) => {
            let [t, r] = (0, n.useState)(!1),
              [l, a] = (0, n.useState)(!1),
              [i, c] = (0, n.useState)(""),
              u = (0, n.useRef)(null);
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
              (0, s.jsx)(o.Provider, {
                value: {
                  isScrolled: t,
                  setIsScrolled: r,
                  isMenuOpened: l,
                  setIsMenuOpened: a,
                  handleClickMenu: () => {
                    r(() => !0), a(() => !l), console.log(l);
                  },
                  checkboxRef: u,
                  activeSection: i,
                  scrollToSection: (e, t) => {
                    t.current?.scrollIntoView({ behavior: "smooth" }),
                      c(e),
                      a(!1),
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
        r.r(t), r.d(t, { default: () => o });
        var s = r(8732),
          n = r(2341);
        function o() {
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
      4554: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { useRefStore: () => s });
        let s = (0, r(2015).createContext)({
          heroRef: { current: null },
          projectRef: { current: null },
          aboutRef: { current: null },
          contactRef: { current: null },
        });
      },
      5603: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => l });
        var s = r(8732),
          n = r(2015),
          o = r(526);
        let l = () => {
          let { handleClickMenu: e, checkboxRef: t } = (0, n.useContext)(
            o.UseContext,
          );
          return (0, s.jsxs)("section", {
            className: "flex  gap-5 md:pr-2 pr-4",
            children: [
              (0, s.jsxs)("label", {
                className:
                  "swap swap-rotate hover:scale-105 transition duration-200 ease-in-out",
                children: [
                  (0, s.jsx)("input", {
                    type: "checkbox",
                    className: "theme-controller",
                    value: "abyss",
                  }),
                  (0, s.jsx)("svg", {
                    className: "swap-off h-10 w-10 fill-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                      d: "M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z",
                    }),
                  }),
                  (0, s.jsx)("svg", {
                    className: "swap-on h-10 w-10 fill-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                      d: "M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z",
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("label", {
                className:
                  " lg:hidden btn btn-circle swap swap-rotate hover:scale-105 transition duration-200 ease-in-out",
                children: [
                  (0, s.jsx)("input", { type: "checkbox", ref: t }),
                  (0, s.jsx)("svg", {
                    onClick: e,
                    className: "swap-off fill-current ",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 512 512",
                    children: (0, s.jsx)("path", {
                      d: "M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z",
                    }),
                  }),
                  (0, s.jsx)("svg", {
                    onClick: e,
                    className: "swap-on fill-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 512 512",
                    children: (0, s.jsx)("polygon", {
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
      9118: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => i });
        var s = r(8732),
          n = r(2015),
          o = r(526),
          l = r(5603),
          a = r(4554);
        let i = () => {
          let {
              isScrolled: e,
              isMenuOpened: t,
              activeSection: r,
              scrollToSection: i,
            } = (0, n.useContext)(o.UseContext),
            {
              heroRef: c,
              projectRef: u,
              contactRef: d,
              aboutRef: x,
            } = (0, n.useContext)(a.useRefStore);
          return (0, s.jsx)("section", {
            className: `w-full fixed left-1/2 -translate-x-1/2 z-50 transition duration-300 ease-in-out
      ${e && !t ? "bg-black/20 backdrop-blur-md shadow-lg border border-white/20" : "bg-transparent border-transparent"}
      `,
            children: (0, s.jsxs)("div", {
              className:
                "relative max-w-[1280px] min-w-[375px] flex justify-between items-start m-auto xl:px-20 lg:px-10 py-3",
              children: [
                (0, s.jsxs)("div", {
                  onClick: () => i("hero", c),
                  className:
                    "font-semibold text-3xl cursor-pointer hover:scale-105 transition duration-200 ease-in-out md:pl-2 pl-4",
                  children: [
                    "Vivienne ",
                    (0, s.jsx)("span", {
                      className: "text-[#FF8000]",
                      children: ".",
                    }),
                  ],
                }),
                (0, s.jsxs)("ul", {
                  className: `p-2 flex w-full lg:w-[600px]
                ${t ? "absolute lg:static top-0 left-0 h-screen text-4xl flex-col justify-center items-start gap-5 bg-black/40  backdrop-blur-2xl shadow-lg border border-white/20  " : "hidden  flex-row border-1 rounded-full shadow-sm hover:shadow-xl justify-between w-[600px] text-xl lg:flex"}
      `,
                  children: [
                    (0, s.jsx)("li", {
                      onClick: () => i("hero", c),
                      className: `cursor-pointer w-full rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out
          ${"hero" === r ? "bg-[#FBD5A5] font-bold text-[#FF8000]" : ""}`,
                      children: "Home",
                    }),
                    (0, s.jsx)("li", {
                      onClick: () => i("about", x),
                      className: `cursor-pointer w-full  rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out
          ${"about" === r ? "bg-[#FBD5A5] font-bold text-[#FF8000] " : ""}`,
                      children: "About me",
                    }),
                    (0, s.jsx)("li", {
                      onClick: () => i("project", u),
                      className: `cursor-pointer w-full  rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out
          ${"project" === r ? "bg-[#FBD5A5] font-bold text-[#FF8000]" : ""}`,
                      children: "My work",
                    }),
                    (0, s.jsx)("li", {
                      onClick: () => i("contact", d),
                      className: `cursor-pointer w-full  rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out
          ${"contact" === r ? "bg-[#FBD5A5] font-bold text-[#FF8000]" : ""}`,
                      children: "Contact me",
                    }),
                  ],
                }),
                (0, s.jsx)(l.default, {}),
              ],
            }),
          });
        };
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [341], () => r(285));
  module.exports = s;
})();
