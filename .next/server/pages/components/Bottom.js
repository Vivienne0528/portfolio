(() => {
  var e = {};
  (e.id = 626),
    (e.ids = [220, 626, 636]),
    (e.modules = {
      361: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");
      },
      526: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { UseContext: () => i, default: () => a });
        var s = r(8732),
          n = r(2015);
        let i = (0, n.createContext)(null),
          a = ({ children: e }) => {
            let [t, r] = (0, n.useState)(!1),
              [a, l] = (0, n.useState)(!1),
              [o, c] = (0, n.useState)(""),
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
              (0, s.jsx)(i.Provider, {
                value: {
                  isScrolled: t,
                  setIsScrolled: r,
                  isMenuOpened: a,
                  setIsMenuOpened: l,
                  handleClickMenu: () => {
                    r(() => !0), l(() => !a), console.log(a);
                  },
                  checkboxRef: u,
                  activeSection: o,
                  scrollToSection: (e, t) => {
                    t.current?.scrollIntoView({ behavior: "smooth" }),
                      c(e),
                      l(!1),
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
      2326: (e) => {
        "use strict";
        e.exports = require("react-dom");
      },
      2783: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            config: () => x,
            default: () => c,
            getServerSideProps: () => m,
            getStaticPaths: () => d,
            getStaticProps: () => u,
            reportWebVitals: () => p,
            routeModule: () => S,
            unstable_getServerProps: () => v,
            unstable_getServerSideProps: () => b,
            unstable_getStaticParams: () => h,
            unstable_getStaticPaths: () => f,
            unstable_getStaticProps: () => g,
          });
        var s = r(3885),
          n = r(237),
          i = r(1413),
          a = r(1779),
          l = r(2081),
          o = r(2931);
        let c = (0, i.M)(o, "default"),
          u = (0, i.M)(o, "getStaticProps"),
          d = (0, i.M)(o, "getStaticPaths"),
          m = (0, i.M)(o, "getServerSideProps"),
          x = (0, i.M)(o, "config"),
          p = (0, i.M)(o, "reportWebVitals"),
          g = (0, i.M)(o, "unstable_getStaticProps"),
          f = (0, i.M)(o, "unstable_getStaticPaths"),
          h = (0, i.M)(o, "unstable_getStaticParams"),
          v = (0, i.M)(o, "unstable_getServerProps"),
          b = (0, i.M)(o, "unstable_getServerSideProps"),
          S = new s.PagesRouteModule({
            definition: {
              kind: n.A.PAGES,
              page: "/components/Bottom",
              pathname: "/components/Bottom",
              bundlePath: "",
              filename: "",
            },
            components: { App: l.default, Document: a.default },
            userland: o,
          });
      },
      2931: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => c });
        var s = r(8732),
          n = r(6761),
          i = r.n(n),
          a = r(2015),
          l = r(526),
          o = r(4554);
        let c = () => {
          let { scrollToSection: e } = (0, a.useContext)(l.UseContext),
            { heroRef: t } = (0, a.useContext)(o.useRefStore);
          return (0, s.jsxs)("section", {
            className: "flex flex-col items-center gap-2 pt-10 w-full",
            children: [
              (0, s.jsxs)("div", {
                onClick: () => e("hero", t),
                className:
                  "font-semibold text-2xl md:text-3xl leading-[2rem] md:leading-[2.25rem] cursor-pointer hover:scale-105 transition duration-200 ease-in-out",
                children: [
                  "Vivienne ",
                  (0, s.jsx)("span", {
                    className: "text-[#FF8000]",
                    children: ".",
                  }),
                ],
              }),
              (0, s.jsxs)("section", {
                className:
                  "flex gap-3 hover:scale-105 transition duration-200 ease-in-out",
                children: [
                  (0, s.jsx)(i(), {
                    src: "/mailIcon.jpg",
                    alt: "mail Icon",
                    width: 32,
                    height: 23,
                  }),
                  (0, s.jsx)("a", {
                    href: "mailto:vivienne0528.gu@gmail.com",
                    className:
                      "cursor-pointer text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] ",
                    children: "vivienne0528.gu@gmail.com",
                  }),
                ],
              }),
              (0, s.jsx)("div", { className: "h-px bg-[#FBD5A5] mt-5 w-full" }),
              (0, s.jsxs)("section", {
                className:
                  "flex items-center justify-between w-full mb-3 text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                children: [
                  (0, s.jsx)("a", {
                    href: "mailto:vivienne0528.gu@gmail.com",
                    className:
                      "cursor-pointer hidden sm:block hover:scale-105 transition duration-200 ease-in-out",
                    children: "vivienne0528.gu@gmail.com",
                  }),
                  (0, s.jsxs)("section", {
                    className:
                      "sm:flex-row flex flex-col gap-5 sm:gap-12 w-full sm:w-auto mt-3 sm: justify-center items-center sm:justify-between",
                    children: [
                      (0, s.jsx)("a", {
                        href: "https://github.com/Vivienne0528",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "cursor-pointer hover:scale-105 transition duration-200 ease-in-out",
                        children: "Github",
                      }),
                      (0, s.jsx)("a", {
                        href: "https://www.linkedin.com/in/vivienne-gu-b691992b0/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "cursor-pointer hover:scale-105 transition duration-200 ease-in-out",
                        children: "Linkedin",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
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
      8732: (e) => {
        "use strict";
        e.exports = require("react/jsx-runtime");
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [341, 425], () => r(2783));
  module.exports = s;
})();
