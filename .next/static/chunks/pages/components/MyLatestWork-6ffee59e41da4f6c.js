(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [475],
  {
    5381: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { useRefStore: () => n });
      let n = (0, l(4232).createContext)({
        heroRef: { current: null },
        projectRef: { current: null },
        aboutRef: { current: null },
        contactRef: { current: null },
      });
    },
    7450: (e, t, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components/MyLatestWork",
        function () {
          return l(9875);
        },
      ]);
    },
    9875: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => a });
      var n = l(7876),
        r = l(4232),
        o = l(5381);
      let s = ["/figma.png", "/socially.png", "/pizza.png", "/portfolio.png"],
        a = () => {
          let { projectRef: e, contactRef: t } = (0, r.useContext)(
              o.useRefStore,
            ),
            [l, a] = (0, r.useState)(0);
          return (0, n.jsxs)("section", {
            ref: e,
            className: "flex flex-col items-center gap-5 pt-30",
            children: [
              (0, n.jsx)("div", {
                className:
                  "text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem]",
                children: "My portfolio",
              }),
              (0, n.jsx)("div", {
                className:
                  "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-4xl leading-[2.25rem] md:leading-[2.5rem] font-bold",
                children: "My latest work",
              }),
              (0, n.jsx)("p", {
                className:
                  "w-full max-w-200 text-center text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                children:
                  "Welcome to my full-stack web development portfolio! Explore a collection of projects showcasing my expertise in both front-end and back-end development, from intuitive user interfaces to robust server-side solutions.",
              }),
              (0, n.jsx)("section", {
                className: "carousel w-full",
                children: (0, n.jsxs)("div", {
                  className: "carousel-item relative w-full",
                  children: [
                    (0, n.jsx)("img", { src: s[l], className: "w-full" }),
                    (0, n.jsxs)("div", {
                      className:
                        "absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between",
                      children: [
                        (0, n.jsx)("button", {
                          onClick: () =>
                            a((e) => (e - 1 + s.length) % s.length),
                          className: "btn btn-circle",
                          children: "❮",
                        }),
                        (0, n.jsx)("button", {
                          onClick: () => a((e) => (e + 1) % s.length),
                          className: "btn btn-circle",
                          children: "❯",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("button", {
                onClick: () => {
                  var e;
                  null == (e = t.current) ||
                    e.scrollIntoView({ behavior: "smooth" }),
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
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [636, 593, 792], () => t(7450)), (_N_E = e.O());
  },
]);
