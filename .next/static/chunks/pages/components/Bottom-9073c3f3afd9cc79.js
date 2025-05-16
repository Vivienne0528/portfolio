(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [626],
  {
    790: (e, t, n) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components/Bottom",
        function () {
          return n(9218);
        },
      ]);
    },
    5103: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { UseContext: () => s, default: () => i });
      var r = n(7876),
        l = n(4232);
      let s = (0, l.createContext)(null),
        i = (e) => {
          let { children: t } = e,
            [n, i] = (0, l.useState)(!1),
            [o, a] = (0, l.useState)(!1),
            [c, u] = (0, l.useState)(""),
            m = (0, l.useRef)(null);
          return (
            (0, l.useEffect)(() => {
              let e = () => {
                i(window.scrollY > 10);
              };
              return (
                window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
              );
            }, []),
            (0, r.jsx)(s.Provider, {
              value: {
                isScrolled: n,
                setIsScrolled: i,
                isMenuOpened: o,
                setIsMenuOpened: a,
                handleClickMenu: () => {
                  i(() => !0), a(() => !o), console.log(o);
                },
                checkboxRef: m,
                activeSection: c,
                scrollToSection: (e, t) => {
                  var n;
                  null == (n = t.current) ||
                    n.scrollIntoView({ behavior: "smooth" }),
                    u(e),
                    a(!1),
                    console.log("scroll to ".concat(e));
                  let r = window.menuCheckboxRef;
                  (null == r ? void 0 : r.current) && (r.current.checked = !1);
                },
              },
              children: t,
            })
          );
        };
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
    9218: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => c });
      var r = n(7876),
        l = n(4587),
        s = n.n(l),
        i = n(4232),
        o = n(5103),
        a = n(5381);
      let c = () => {
        let { scrollToSection: e } = (0, i.useContext)(o.UseContext),
          { heroRef: t } = (0, i.useContext)(a.useRefStore);
        return (0, r.jsxs)("section", {
          className: "flex flex-col items-center gap-2 pt-10 w-full",
          children: [
            (0, r.jsxs)("div", {
              onClick: () => e("hero", t),
              className:
                "font-semibold text-2xl md:text-3xl leading-[2rem] md:leading-[2.25rem] cursor-pointer hover:scale-105 transition duration-200 ease-in-out",
              children: [
                "Vivienne ",
                (0, r.jsx)("span", {
                  className: "text-[#FF8000]",
                  children: ".",
                }),
              ],
            }),
            (0, r.jsxs)("section", {
              className:
                "flex gap-3 hover:scale-105 transition duration-200 ease-in-out",
              children: [
                (0, r.jsx)(s(), {
                  src: "/mailIcon.jpg",
                  alt: "mail Icon",
                  width: 32,
                  height: 23,
                }),
                (0, r.jsx)("a", {
                  href: "mailto:vivienne0528.gu@gmail.com",
                  className:
                    "cursor-pointer text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] ",
                  children: "vivienne0528.gu@gmail.com",
                }),
              ],
            }),
            (0, r.jsx)("div", { className: "h-px bg-[#FBD5A5] mt-5 w-full" }),
            (0, r.jsxs)("section", {
              className:
                "flex items-center justify-between w-full mb-3 text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
              children: [
                (0, r.jsx)("a", {
                  href: "mailto:vivienne0528.gu@gmail.com",
                  className:
                    "cursor-pointer hidden sm:block hover:scale-105 transition duration-200 ease-in-out",
                  children: "vivienne0528.gu@gmail.com",
                }),
                (0, r.jsxs)("section", {
                  className:
                    "sm:flex-row flex flex-col gap-5 sm:gap-12 w-full sm:w-auto mt-3 sm: justify-center items-center sm:justify-between",
                  children: [
                    (0, r.jsx)("a", {
                      href: "https://github.com/Vivienne0528",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "cursor-pointer hover:scale-105 transition duration-200 ease-in-out",
                      children: "Github",
                    }),
                    (0, r.jsx)("a", {
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
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [587, 636, 593, 792], () => t(790)), (_N_E = e.O());
  },
]);
