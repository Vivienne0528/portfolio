(() => {
  var e = {};
  (e.id = 279),
    (e.ids = [220, 279, 636]),
    (e.modules = {
      361: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");
      },
      979: () => {},
      1228: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => c });
        var r = s(8732),
          a = s(6761),
          l = s.n(a),
          i = s(4554),
          n = s(2015);
        let c = () => {
          let { aboutRef: e } = (0, n.useContext)(i.useRefStore);
          return (0, r.jsxs)("section", {
            ref: e,
            className: "flex flex-col items-center gap-5 pt-25",
            children: [
              (0, r.jsx)("div", {
                className:
                  "text-xl leading-[1.75rem] md:leading-[2rem] md:text-2xl",
                children: "Introduction",
              }),
              (0, r.jsx)("div", {
                className:
                  "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl leading-[2.25rem] md:text-4xl md:leading-[2.5rem] mb-5 font-bold",
                children: "About me",
              }),
              (0, r.jsxs)("section", {
                className:
                  "flex flex-col md:flex-row gap-5 lg:gap-10 items-center md:items-start justify-center",
                children: [
                  (0, r.jsx)("img", {
                    src: "/businessCard.png",
                    alt: "business card",
                    className:
                      "w-full h-80 object-cover object-[0%_40%] md:w-[40%] md:h-auto lg:w-85 rounded-xl",
                  }),
                  (0, r.jsxs)("section", {
                    className: "flex flex-col",
                    children: [
                      (0, r.jsx)("p", {
                        className:
                          "font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                        children:
                          "I'm a curious builder who turns ideas into interactive web experiences. With a year of full-stack experience using Next.js, React, and more, I love crafting clean, scalable code that feels as smooth as it looks. Always learning, always coding — let's create something awesome.",
                      }),
                      (0, r.jsxs)("section", {
                        className:
                          "flex justify-between gap-4 lg:gap-10 py-4 text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "bg-[#FBD5A5] w-full h-50 flex flex-col items-start justify-between p-3 rounded-xl text-[#001E29]",
                            children: [
                              (0, r.jsx)(l(), {
                                src: "/darkIcon.jpg",
                                alt: "dark icon",
                                width: 30,
                                height: 30,
                              }),
                              (0, r.jsx)("section", {
                                className: " font-bold",
                                children: (0, r.jsx)("div", {
                                  children:
                                    "HTML, CSS, JavaScript, React Js, Next Js ",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "font-extralight",
                                children: "Languages",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className:
                              " bg-[#FBD5A5] w-full h-50 flex flex-col items-start justify-between p-3 rounded-xl text-[#001E29]",
                            children: [
                              (0, r.jsx)(l(), {
                                src: "/educationIcon.jpg",
                                alt: "education icon",
                                width: 30,
                                height: 30,
                              }),
                              (0, r.jsx)("section", {
                                className: "font-bold",
                                children: (0, r.jsx)("div", {
                                  children:
                                    "Master's degree in IT from Uni of Melbourne ",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "font-extralight",
                                children: "Education",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className:
                              "bg-[#FBD5A5] w-full h-50 flex flex-col items-start justify-between p-3 rounded-xl text-[#001E29]",
                            children: [
                              (0, r.jsx)(l(), {
                                src: "/projectsIcon.jpg",
                                alt: "projects Icon",
                                width: 30,
                                height: 30,
                              }),
                              (0, r.jsx)("section", {
                                className: "font-bold",
                                children: (0, r.jsx)("div", {
                                  children: "Built more than 5 projects",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "font-extralight",
                                children: "Projects",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      },
      1779: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => l });
        var r = s(8732),
          a = s(2341);
        function l() {
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
      2326: (e) => {
        "use strict";
        e.exports = require("react-dom");
      },
      3873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      4554: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { useRefStore: () => r });
        let r = (0, s(2015).createContext)({
          heroRef: { current: null },
          projectRef: { current: null },
          aboutRef: { current: null },
          contactRef: { current: null },
        });
      },
      8111: (e, t, s) => {
        "use strict";
        s.r(t),
          s.d(t, {
            config: () => m,
            default: () => o,
            getServerSideProps: () => x,
            getStaticPaths: () => u,
            getStaticProps: () => d,
            reportWebVitals: () => g,
            routeModule: () => v,
            unstable_getServerProps: () => j,
            unstable_getServerSideProps: () => b,
            unstable_getStaticParams: () => h,
            unstable_getStaticPaths: () => p,
            unstable_getStaticProps: () => f,
          });
        var r = s(3885),
          a = s(237),
          l = s(1413),
          i = s(1779),
          n = s(2081),
          c = s(1228);
        let o = (0, l.M)(c, "default"),
          d = (0, l.M)(c, "getStaticProps"),
          u = (0, l.M)(c, "getStaticPaths"),
          x = (0, l.M)(c, "getServerSideProps"),
          m = (0, l.M)(c, "config"),
          g = (0, l.M)(c, "reportWebVitals"),
          f = (0, l.M)(c, "unstable_getStaticProps"),
          p = (0, l.M)(c, "unstable_getStaticPaths"),
          h = (0, l.M)(c, "unstable_getStaticParams"),
          j = (0, l.M)(c, "unstable_getServerProps"),
          b = (0, l.M)(c, "unstable_getServerSideProps"),
          v = new r.PagesRouteModule({
            definition: {
              kind: a.A.PAGES,
              page: "/components/Intro",
              pathname: "/components/Intro",
              bundlePath: "",
              filename: "",
            },
            components: { App: n.default, Document: i.default },
            userland: c,
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
    r = t.X(0, [341, 425], () => s(8111));
  module.exports = r;
})();
