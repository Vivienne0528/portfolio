(() => {
  var e = {};
  (e.id = 70),
    (e.ids = [70, 220, 636]),
    (e.modules = {
      361: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");
      },
      979: () => {},
      1779: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => l });
        var r = s(8732),
          i = s(2341);
        function l() {
          return (0, r.jsxs)(i.Html, {
            lang: "en",
            children: [
              (0, r.jsx)(i.Head, {}),
              (0, r.jsxs)("body", {
                className: "antialiased",
                children: [
                  (0, r.jsx)(i.Main, {}),
                  (0, r.jsx)(i.NextScript, {}),
                ],
              }),
            ],
          });
        }
      },
      1919: (e, t, s) => {
        "use strict";
        s.r(t),
          s.d(t, {
            config: () => g,
            default: () => m,
            getServerSideProps: () => c,
            getStaticPaths: () => o,
            getStaticProps: () => x,
            reportWebVitals: () => u,
            routeModule: () => v,
            unstable_getServerProps: () => j,
            unstable_getServerSideProps: () => b,
            unstable_getStaticParams: () => f,
            unstable_getStaticPaths: () => h,
            unstable_getStaticProps: () => p,
          });
        var r = s(3885),
          i = s(237),
          l = s(1413),
          a = s(1779),
          d = s(2081),
          n = s(5623);
        let m = (0, l.M)(n, "default"),
          x = (0, l.M)(n, "getStaticProps"),
          o = (0, l.M)(n, "getStaticPaths"),
          c = (0, l.M)(n, "getServerSideProps"),
          g = (0, l.M)(n, "config"),
          u = (0, l.M)(n, "reportWebVitals"),
          p = (0, l.M)(n, "unstable_getStaticProps"),
          h = (0, l.M)(n, "unstable_getStaticPaths"),
          f = (0, l.M)(n, "unstable_getStaticParams"),
          j = (0, l.M)(n, "unstable_getServerProps"),
          b = (0, l.M)(n, "unstable_getServerSideProps"),
          v = new r.PagesRouteModule({
            definition: {
              kind: i.A.PAGES,
              page: "/components/MyService",
              pathname: "/components/MyService",
              bundlePath: "",
              filename: "",
            },
            components: { App: d.default, Document: a.default },
            userland: n,
          });
      },
      2015: (e) => {
        "use strict";
        e.exports = require("react");
      },
      2081: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => i });
        var r = s(8732);
        function i({ Component: e, pageProps: t }) {
          return (0, r.jsx)(e, { ...t });
        }
        s(979);
      },
      2326: (e) => {
        "use strict";
        e.exports = require("react-dom");
      },
      3873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      5623: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => a });
        var r = s(8732),
          i = s(6761),
          l = s.n(i);
        let a = () =>
          (0, r.jsxs)("section", {
            className: "flex flex-col items-center gap-5 pt-50 w-full",
            children: [
              (0, r.jsx)("div", {
                className:
                  "text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem]",
                children: "What i do",
              }),
              (0, r.jsx)("div", {
                className:
                  "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-4xl font-bold",
                children: "My Tools",
              }),
              (0, r.jsx)("div", {
                className: "",
                children: (0, r.jsx)("p", {
                  className: "w-full max-w-150 text-center text-sm md:text-xl",
                  children: "Explore the technologies and tools I use.",
                }),
              }),
              (0, r.jsxs)("section", {
                className:
                  "py-4 gap-4  lg:gap-10 md:5 w-full grid grid-cols-2 md:grid-cols-4",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "bg-[#FBD5A5] text-[#001E29] w-full h-62 flex flex-col items-start justify-between p-5 md:p-3 rounded-xl",
                    children: [
                      (0, r.jsx)(l(), {
                        src: "/earth.jpg",
                        alt: "earth Icon",
                        width: 40,
                        height: 40,
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "font-medium text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem] ",
                        children: "Web design",
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                        children:
                          "Web development is the process of building, programming...",
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] hover:scale-105 transition duration-200 ease-in-out cursor-pointer",
                        children: ["Read more →", " "],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "bg-[#FBD5A5] text-[#001E29] w-full h-62 flex flex-col items-start justify-between p-5 md:p-3 rounded-xl",
                    children: [
                      (0, r.jsx)(l(), {
                        src: "/earth.jpg",
                        alt: "earth Icon",
                        width: 40,
                        height: 40,
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "font-medium text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem] ",
                        children: "Web design",
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] ",
                        children:
                          "Web development is the process of building, programming...",
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] hover:scale-105 transition duration-200 ease-in-out cursor-pointer",
                        children: ["Read more →", " "],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "bg-[#FBD5A5] text-[#001E29] w-full h-62 flex flex-col items-start justify-between p-5 md:p-3 rounded-xl",
                    children: [
                      (0, r.jsx)(l(), {
                        src: "/earth.jpg",
                        alt: "earth Icon",
                        width: 40,
                        height: 40,
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "font-medium text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem] ",
                        children: "Web design",
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                        children:
                          "Web development is the process of building, programming...",
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] hover:scale-105 transition duration-200 ease-in-out cursor-pointer",
                        children: ["Read more →", " "],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "bg-[#FBD5A5] text-[#001E29] w-full h-62 flex flex-col items-start justify-between p-5 md:p-3 rounded-xl",
                    children: [
                      (0, r.jsx)(l(), {
                        src: "/earth.jpg",
                        alt: "earth Icon",
                        width: 40,
                        height: 40,
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "font-medium text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem] ",
                        children: "Web design",
                      }),
                      (0, r.jsx)("p", {
                        className:
                          "font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                        children:
                          "Web development is the process of building, programming...",
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] hover:scale-105 transition duration-200 ease-in-out cursor-pointer",
                        children: ["Read more →", " "],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
      },
      8732: (e) => {
        "use strict";
        e.exports = require("react/jsx-runtime");
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var s = (e) => t((t.s = e)),
    r = t.X(0, [341, 425], () => s(1919));
  module.exports = r;
})();
