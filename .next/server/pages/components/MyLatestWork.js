(() => {
  var e = {};
  (e.id = 475),
    (e.ids = [220, 475, 636]),
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
      1744: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => o });
        var s = r(8732),
          n = r(2015),
          a = r(4554);
        let l = ["/figma.png", "/socially.png", "/pizza.png", "/portfolio.png"],
          o = () => {
            let { projectRef: e, contactRef: t } = (0, n.useContext)(
                a.useRefStore,
              ),
              [r, o] = (0, n.useState)(0);
            return (0, s.jsxs)("section", {
              ref: e,
              className: "flex flex-col items-center gap-5 pt-30",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem]",
                  children: "My portfolio",
                }),
                (0, s.jsx)("div", {
                  className:
                    "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-4xl leading-[2.25rem] md:leading-[2.5rem] font-bold",
                  children: "My latest work",
                }),
                (0, s.jsx)("p", {
                  className:
                    "w-full max-w-200 text-center text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                  children:
                    "Welcome to my full-stack web development portfolio! Explore a collection of projects showcasing my expertise in both front-end and back-end development, from intuitive user interfaces to robust server-side solutions.",
                }),
                (0, s.jsx)("section", {
                  className: "carousel w-full",
                  children: (0, s.jsxs)("div", {
                    className: "carousel-item relative w-full",
                    children: [
                      (0, s.jsx)("img", { src: l[r], className: "w-full" }),
                      (0, s.jsxs)("div", {
                        className:
                          "absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between",
                        children: [
                          (0, s.jsx)("button", {
                            onClick: () =>
                              o((e) => (e - 1 + l.length) % l.length),
                            className: "btn btn-circle",
                            children: "❮",
                          }),
                          (0, s.jsx)("button", {
                            onClick: () => o((e) => (e + 1) % l.length),
                            className: "btn btn-circle",
                            children: "❯",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)("button", {
                  onClick: () => {
                    t.current?.scrollIntoView({ behavior: "smooth" }),
                      console.log("scroll to project");
                  },
                  className:
                    " btn btn-l md:btn-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-full md:w-50 mt-10",
                  children: "Contact me →",
                }),
              ],
            });
          };
      },
      1779: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => a });
        var s = r(8732),
          n = r(2341);
        function a() {
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
      6385: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            config: () => p,
            default: () => c,
            getServerSideProps: () => m,
            getStaticPaths: () => d,
            getStaticProps: () => u,
            reportWebVitals: () => x,
            routeModule: () => S,
            unstable_getServerProps: () => P,
            unstable_getServerSideProps: () => h,
            unstable_getStaticParams: () => b,
            unstable_getStaticPaths: () => g,
            unstable_getStaticProps: () => f,
          });
        var s = r(3885),
          n = r(237),
          a = r(1413),
          l = r(1779),
          o = r(2081),
          i = r(1744);
        let c = (0, a.M)(i, "default"),
          u = (0, a.M)(i, "getStaticProps"),
          d = (0, a.M)(i, "getStaticPaths"),
          m = (0, a.M)(i, "getServerSideProps"),
          p = (0, a.M)(i, "config"),
          x = (0, a.M)(i, "reportWebVitals"),
          f = (0, a.M)(i, "unstable_getStaticProps"),
          g = (0, a.M)(i, "unstable_getStaticPaths"),
          b = (0, a.M)(i, "unstable_getStaticParams"),
          P = (0, a.M)(i, "unstable_getServerProps"),
          h = (0, a.M)(i, "unstable_getServerSideProps"),
          S = new s.PagesRouteModule({
            definition: {
              kind: n.A.PAGES,
              page: "/components/MyLatestWork",
              pathname: "/components/MyLatestWork",
              bundlePath: "",
              filename: "",
            },
            components: { App: o.default, Document: l.default },
            userland: i,
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
    s = t.X(0, [341], () => r(6385));
  module.exports = s;
})();
