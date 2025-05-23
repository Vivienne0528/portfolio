(() => {
  var e = {};
  (e.id = 807),
    (e.ids = [220, 636, 807]),
    (e.modules = {
      361: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");
      },
      700: (e) => {
        "use strict";
        e.exports = import("@react-spring/web");
      },
      979: () => {},
      1324: (e, t, r) => {
        "use strict";
        r.a(e, async (e, a) => {
          try {
            r.r(t), r.d(t, { default: () => u });
            var s = r(8732),
              n = r(6761),
              l = r.n(n),
              i = r(2492),
              o = r(2015),
              c = r(4554),
              d = e([i]);
            i = (d.then ? (await d)() : d)[0];
            let u = () => {
              let { heroRef: e, contactRef: t } = (0, o.useContext)(
                c.useRefStore,
              );
              return (0, s.jsxs)("section", {
                ref: e,
                className: " flex flex-col",
                children: [
                  (0, s.jsx)(i.default, {
                    text: "Hi! I’m Vivienne Gu ヅ",
                    className:
                      "pt-40 pb-25 md:pt-60 md:pb-20 font-extralight text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                    delay: 150,
                    animationFrom: {
                      opacity: 0,
                      transform: "translate3d(0,50px,0)",
                    },
                    animationTo: {
                      opacity: 1,
                      transform: "translate3d(0,0,0)",
                    },
                    easing: "easeOutCubic",
                    threshold: 0.2,
                    rootMargin: "-50px",
                    onLetterAnimationComplete: () => {
                      console.log("All letters have animated!");
                    },
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "animate-fade-in-up flex flex-col pb-20 text-center justify-center items-center md:text-6xl text-[2.6rem] font-[serif] font-extrabold",
                    children: [
                      (0, s.jsx)("p", {
                        className:
                          "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent leading-[2.5rem] md:leading-[3.5rem]",
                        children: "full stack developer",
                      }),
                      (0, s.jsx)("p", {
                        className: "leading-[2.5rem] md:leading-[3rem]",
                        children: "with a strong sense of",
                      }),
                      (0, s.jsx)("p", {
                        className:
                          "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent leading-[2.5rem] md:leading-[3.5rem]",
                        children: "ui/ux design",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "text-sm md:text-xl items-center text-center",
                    children: (0, s.jsx)("p", {
                      className: "leading-[1.75rem] max-w-200",
                      children:
                        "Skilled in Frontend (React, Next.js, Tailwind CSS), Backend (Node.js, Express), Database (MySQL, MongoDB), DevOps (Git, Docker), and UI Design.",
                    }),
                  }),
                  (0, s.jsxs)("section", {
                    className:
                      "py-12 flex flex-col md:flex-row gap-2 md:gap-10 w-full justify-center",
                    children: [
                      (0, s.jsx)("button", {
                        onClick: () => {
                          t.current?.scrollIntoView({ behavior: "smooth" }),
                            console.log("scroll to project");
                        },
                        className:
                          " btn btn-l md:btn-xl bg-gradient-to-r from-amber-500 to-orange-500 text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-full md:w-50 hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out",
                        children: "Contact me →",
                      }),
                      (0, s.jsx)("a", {
                        href: "/docs/VG_Resume.pdf",
                        download: "Vivienne_Resume",
                        children: (0, s.jsxs)("button", {
                          className:
                            "btn btn-l md:btn-xl text-[#FF8000] bg-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-full md:w-50 font-normal hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out",
                          children: [
                            "My Resume",
                            (0, s.jsx)(l(), {
                              src: "/download.jpg",
                              alt: "Download Icon",
                              width: 20,
                              height: 20,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              });
            };
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      1779: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        var a = r(8732),
          s = r(2341);
        function n() {
          return (0, a.jsxs)(s.Html, {
            lang: "en",
            children: [
              (0, a.jsx)(s.Head, {}),
              (0, a.jsxs)("body", {
                className: "antialiased",
                children: [
                  (0, a.jsx)(s.Main, {}),
                  (0, a.jsx)(s.NextScript, {}),
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
        r.r(t), r.d(t, { default: () => s });
        var a = r(8732);
        function s({ Component: e, pageProps: t }) {
          return (0, a.jsx)(e, { ...t });
        }
        r(979);
      },
      2326: (e) => {
        "use strict";
        e.exports = require("react-dom");
      },
      2492: (e, t, r) => {
        "use strict";
        r.a(e, async (e, a) => {
          try {
            r.r(t), r.d(t, { default: () => o });
            var s = r(8732),
              n = r(700),
              l = r(2015),
              i = e([n]);
            n = (i.then ? (await i)() : i)[0];
            let o = ({
              text: e = "",
              className: t = "",
              delay: r = 100,
              animationFrom: a = {
                opacity: 0,
                transform: "translate3d(0,40px,0)",
              },
              animationTo: i = { opacity: 1, transform: "translate3d(0,0,0)" },
              easing: o = "easeOutCubic",
              threshold: c = 0.1,
              rootMargin: d = "-100px",
              textAlign: u = "center",
              onLetterAnimationComplete: m,
            }) => {
              let p = e.split(" ").map((e) => e.split("")),
                x = p.flat(),
                [g, f] = (0, l.useState)(!1),
                h = (0, l.useRef)(),
                b = (0, l.useRef)(0);
              (0, l.useEffect)(() => {
                let e = new IntersectionObserver(
                  ([t]) => {
                    t.isIntersecting && (f(!0), e.unobserve(h.current));
                  },
                  { threshold: c, rootMargin: d },
                );
                return e.observe(h.current), () => e.disconnect();
              }, [c, d]);
              let w = (0, n.useSprings)(
                x.length,
                x.map((e, t) => ({
                  from: a,
                  to: g
                    ? async (e) => {
                        await e(i),
                          (b.current += 1),
                          b.current === x.length && m && m();
                      }
                    : a,
                  delay: t * r,
                  config: { easing: o },
                })),
              );
              return (0, s.jsx)("p", {
                ref: h,
                className: `split-parent ${t}`,
                style: {
                  textAlign: u,
                  overflow: "hidden",
                  display: "inline",
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                },
                children: p.map((e, t) =>
                  (0, s.jsxs)(
                    "span",
                    {
                      style: { display: "inline-block", whiteSpace: "nowrap" },
                      children: [
                        e.map((e, r) => {
                          let a =
                            p.slice(0, t).reduce((e, t) => e + t.length, 0) + r;
                          return (0, s.jsx)(
                            n.animated.span,
                            {
                              style: {
                                ...w[a],
                                display: "inline-block",
                                willChange: "transform, opacity",
                              },
                              children: e,
                            },
                            a,
                          );
                        }),
                        (0, s.jsx)("span", {
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
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      3873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      4554: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { useRefStore: () => a });
        let a = (0, r(2015).createContext)({
          heroRef: { current: null },
          projectRef: { current: null },
          aboutRef: { current: null },
          contactRef: { current: null },
        });
      },
      7937: (e, t, r) => {
        "use strict";
        r.a(e, async (e, a) => {
          try {
            r.r(t),
              r.d(t, {
                config: () => g,
                default: () => u,
                getServerSideProps: () => x,
                getStaticPaths: () => p,
                getStaticProps: () => m,
                reportWebVitals: () => f,
                routeModule: () => v,
                unstable_getServerProps: () => j,
                unstable_getServerSideProps: () => S,
                unstable_getStaticParams: () => w,
                unstable_getStaticPaths: () => b,
                unstable_getStaticProps: () => h,
              });
            var s = r(3885),
              n = r(237),
              l = r(1413),
              i = r(1779),
              o = r(2081),
              c = r(1324),
              d = e([c]);
            c = (d.then ? (await d)() : d)[0];
            let u = (0, l.M)(c, "default"),
              m = (0, l.M)(c, "getStaticProps"),
              p = (0, l.M)(c, "getStaticPaths"),
              x = (0, l.M)(c, "getServerSideProps"),
              g = (0, l.M)(c, "config"),
              f = (0, l.M)(c, "reportWebVitals"),
              h = (0, l.M)(c, "unstable_getStaticProps"),
              b = (0, l.M)(c, "unstable_getStaticPaths"),
              w = (0, l.M)(c, "unstable_getStaticParams"),
              j = (0, l.M)(c, "unstable_getServerProps"),
              S = (0, l.M)(c, "unstable_getServerSideProps"),
              v = new s.PagesRouteModule({
                definition: {
                  kind: n.A.PAGES,
                  page: "/components/Hero",
                  pathname: "/components/Hero",
                  bundlePath: "",
                  filename: "",
                },
                components: { App: o.default, Document: i.default },
                userland: c,
              });
            a();
          } catch (e) {
            a(e);
          }
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
    a = t.X(0, [341, 425], () => r(7937));
  module.exports = a;
})();
