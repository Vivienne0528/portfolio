(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [807],
  {
    1290: (e, t, n) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components/Hero",
        function () {
          return n(6031);
        },
      ]);
    },
    5381: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { useRefStore: () => r });
      let r = (0, n(4232).createContext)({
        heroRef: { current: null },
        projectRef: { current: null },
        aboutRef: { current: null },
        contactRef: { current: null },
      });
    },
    6031: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => d });
      var r = n(7876),
        a = n(4587),
        l = n.n(a),
        s = n(6071),
        o = n(4232),
        i = n(5381);
      let d = () => {
        let { heroRef: e, contactRef: t } = (0, o.useContext)(i.useRefStore);
        return (0, r.jsxs)("section", {
          ref: e,
          className: " flex flex-col",
          children: [
            (0, r.jsx)(s.default, {
              text: "Hi! I’m Vivienne Gu ヅ",
              className:
                "pt-40 pb-25 md:pt-60 md:pb-20 font-extralight text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
              delay: 150,
              animationFrom: { opacity: 0, transform: "translate3d(0,50px,0)" },
              animationTo: { opacity: 1, transform: "translate3d(0,0,0)" },
              easing: "easeOutCubic",
              threshold: 0.2,
              rootMargin: "-50px",
              onLetterAnimationComplete: () => {
                console.log("All letters have animated!");
              },
            }),
            (0, r.jsxs)("div", {
              className:
                "animate-fade-in-up flex flex-col pb-20 text-center justify-center items-center md:text-6xl text-[2.6rem] font-[serif] font-extrabold",
              children: [
                (0, r.jsx)("p", {
                  className:
                    "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent leading-[2.5rem] md:leading-[3.5rem]",
                  children: "full stack developer",
                }),
                (0, r.jsx)("p", {
                  className: "leading-[2.5rem] md:leading-[3rem]",
                  children: "with a strong sense of",
                }),
                (0, r.jsx)("p", {
                  className:
                    "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent leading-[2.5rem] md:leading-[3.5rem]",
                  children: "ui/ux design",
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: "text-sm md:text-xl items-center text-center",
              children: (0, r.jsx)("p", {
                className: "leading-[1.75rem] max-w-200",
                children:
                  "Skilled in Frontend (React, Next.js, Tailwind CSS), Backend (Node.js, Express), Database (MySQL, MongoDB), DevOps (Git, Docker), and UI Design.",
              }),
            }),
            (0, r.jsxs)("section", {
              className:
                "py-12 flex flex-col md:flex-row gap-2 md:gap-10 w-full justify-center",
              children: [
                (0, r.jsx)("button", {
                  onClick: () => {
                    var e;
                    null == (e = t.current) ||
                      e.scrollIntoView({ behavior: "smooth" }),
                      console.log("scroll to project");
                  },
                  className:
                    " btn btn-l md:btn-xl bg-gradient-to-r from-amber-500 to-orange-500 text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-full md:w-50 hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out",
                  children: "Contact me →",
                }),
                (0, r.jsx)("a", {
                  href: "/docs/VG_Resume.pdf",
                  download: "Vivienne_Resume",
                  children: (0, r.jsxs)("button", {
                    className:
                      "btn btn-l md:btn-xl text-[#FF8000] bg-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-full md:w-50 font-normal hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out",
                    children: [
                      "My Resume",
                      (0, r.jsx)(l(), {
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
    },
    6071: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => s });
      var r = n(7876),
        a = n(1755),
        l = n(4232);
      let s = (e) => {
        let {
            text: t = "",
            className: n = "",
            delay: s = 100,
            animationFrom: o = {
              opacity: 0,
              transform: "translate3d(0,40px,0)",
            },
            animationTo: i = { opacity: 1, transform: "translate3d(0,0,0)" },
            easing: d = "easeOutCubic",
            threshold: c = 0.1,
            rootMargin: m = "-100px",
            textAlign: x = "center",
            onLetterAnimationComplete: u,
          } = e,
          p = t.split(" ").map((e) => e.split("")),
          f = p.flat(),
          [h, g] = (0, l.useState)(!1),
          b = (0, l.useRef)(),
          w = (0, l.useRef)(0);
        (0, l.useEffect)(() => {
          let e = new IntersectionObserver(
            (t) => {
              let [n] = t;
              n.isIntersecting && (g(!0), e.unobserve(b.current));
            },
            { threshold: c, rootMargin: m },
          );
          return e.observe(b.current), () => e.disconnect();
        }, [c, m]);
        let j = (0, a.mX)(
          f.length,
          f.map((e, t) => ({
            from: o,
            to: h
              ? async (e) => {
                  await e(i),
                    (w.current += 1),
                    w.current === f.length && u && u();
                }
              : o,
            delay: t * s,
            config: { easing: d },
          })),
        );
        return (0, r.jsx)("p", {
          ref: b,
          className: "split-parent ".concat(n),
          style: {
            textAlign: x,
            overflow: "hidden",
            display: "inline",
            whiteSpace: "normal",
            wordWrap: "break-word",
          },
          children: p.map((e, t) =>
            (0, r.jsxs)(
              "span",
              {
                style: { display: "inline-block", whiteSpace: "nowrap" },
                children: [
                  e.map((e, n) => {
                    let l = p.slice(0, t).reduce((e, t) => e + t.length, 0) + n;
                    return (0, r.jsx)(
                      a.CS.span,
                      {
                        style: {
                          ...j[l],
                          display: "inline-block",
                          willChange: "transform, opacity",
                        },
                        children: e,
                      },
                      l,
                    );
                  }),
                  (0, r.jsx)("span", {
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
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [587, 755, 636, 593, 792], () => t(1290)), (_N_E = e.O());
  },
]);
