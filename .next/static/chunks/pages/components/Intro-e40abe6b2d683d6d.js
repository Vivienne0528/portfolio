(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [279],
  {
    874: (e, t, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components/Intro",
        function () {
          return s(2265);
        },
      ]);
    },
    2265: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => i });
      var l = s(7876),
        n = s(4587),
        a = s.n(n),
        r = s(5381),
        c = s(4232);
      let i = () => {
        let { aboutRef: e } = (0, c.useContext)(r.useRefStore);
        return (0, l.jsxs)("section", {
          ref: e,
          className: "flex flex-col items-center gap-5 pt-25",
          children: [
            (0, l.jsx)("div", {
              className:
                "text-xl leading-[1.75rem] md:leading-[2rem] md:text-2xl",
              children: "Introduction",
            }),
            (0, l.jsx)("div", {
              className:
                "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl leading-[2.25rem] md:text-4xl md:leading-[2.5rem] mb-5 font-bold",
              children: "About me",
            }),
            (0, l.jsxs)("section", {
              className:
                "flex flex-col md:flex-row gap-5 lg:gap-10 items-center md:items-start justify-center",
              children: [
                (0, l.jsx)("img", {
                  src: "/businessCard.png",
                  alt: "business card",
                  className:
                    "w-full h-80 object-cover object-[0%_40%] md:w-[40%] md:h-auto lg:w-85 rounded-xl",
                }),
                (0, l.jsxs)("section", {
                  className: "flex flex-col",
                  children: [
                    (0, l.jsx)("p", {
                      className:
                        "font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                      children:
                        "I'm a curious builder who turns ideas into interactive web experiences. With a year of full-stack experience using Next.js, React, and more, I love crafting clean, scalable code that feels as smooth as it looks. Always learning, always coding — let's create something awesome.",
                    }),
                    (0, l.jsxs)("section", {
                      className:
                        "flex justify-between gap-4 lg:gap-10 py-4 text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                      children: [
                        (0, l.jsxs)("div", {
                          className:
                            "bg-[#FBD5A5] w-full h-50 flex flex-col items-start justify-between p-3 rounded-xl text-[#001E29]",
                          children: [
                            (0, l.jsx)(a(), {
                              src: "/darkIcon.jpg",
                              alt: "dark icon",
                              width: 30,
                              height: 30,
                            }),
                            (0, l.jsx)("section", {
                              className: " font-bold",
                              children: (0, l.jsx)("div", {
                                children:
                                  "HTML, CSS, JavaScript, React Js, Next Js ",
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "font-extralight",
                              children: "Languages",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            " bg-[#FBD5A5] w-full h-50 flex flex-col items-start justify-between p-3 rounded-xl text-[#001E29]",
                          children: [
                            (0, l.jsx)(a(), {
                              src: "/educationIcon.jpg",
                              alt: "education icon",
                              width: 30,
                              height: 30,
                            }),
                            (0, l.jsx)("section", {
                              className: "font-bold",
                              children: (0, l.jsx)("div", {
                                children:
                                  "Master's degree in IT from Uni of Melbourne ",
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "font-extralight",
                              children: "Education",
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "bg-[#FBD5A5] w-full h-50 flex flex-col items-start justify-between p-3 rounded-xl text-[#001E29]",
                          children: [
                            (0, l.jsx)(a(), {
                              src: "/projectsIcon.jpg",
                              alt: "projects Icon",
                              width: 30,
                              height: 30,
                            }),
                            (0, l.jsx)("section", {
                              className: "font-bold",
                              children: (0, l.jsx)("div", {
                                children: "Built more than 5 projects",
                              }),
                            }),
                            (0, l.jsx)("div", {
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
    5381: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { useRefStore: () => l });
      let l = (0, s(4232).createContext)({
        heroRef: { current: null },
        projectRef: { current: null },
        aboutRef: { current: null },
        contactRef: { current: null },
      });
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [587, 636, 593, 792], () => t(874)), (_N_E = e.O());
  },
]);
