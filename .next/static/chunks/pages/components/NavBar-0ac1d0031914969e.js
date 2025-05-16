(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [293],
  {
    2637: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => c });
      var o = l(7876),
        n = l(4232),
        r = l(5103),
        s = l(7682),
        a = l(5381);
      let c = () => {
        let {
            isScrolled: e,
            isMenuOpened: t,
            activeSection: l,
            scrollToSection: c,
          } = (0, n.useContext)(r.UseContext),
          {
            heroRef: i,
            projectRef: u,
            contactRef: d,
            aboutRef: x,
          } = (0, n.useContext)(a.useRefStore);
        return (0, o.jsx)("section", {
          className:
            "w-full fixed left-1/2 -translate-x-1/2 z-50 transition duration-300 ease-in-out\n      ".concat(
              e && !t
                ? "bg-black/20 backdrop-blur-md shadow-lg border border-white/20"
                : "bg-transparent border-transparent",
              "\n      ",
            ),
          children: (0, o.jsxs)("div", {
            className:
              "relative max-w-[1280px] min-w-[375px] flex justify-between items-start m-auto xl:px-20 lg:px-10 py-3",
            children: [
              (0, o.jsxs)("div", {
                onClick: () => c("hero", i),
                className:
                  "font-semibold text-3xl cursor-pointer hover:scale-105 transition duration-200 ease-in-out md:pl-2 pl-4",
                children: [
                  "Vivienne ",
                  (0, o.jsx)("span", {
                    className: "text-[#FF8000]",
                    children: ".",
                  }),
                ],
              }),
              (0, o.jsxs)("ul", {
                className:
                  "p-2 flex w-full lg:w-[600px]\n                ".concat(
                    t
                      ? "absolute lg:static top-0 left-0 h-screen text-4xl flex-col justify-center items-start gap-5 bg-black/40  backdrop-blur-2xl shadow-lg border border-white/20  "
                      : "hidden  flex-row border-1 rounded-full shadow-sm hover:shadow-xl justify-between w-[600px] text-xl lg:flex",
                    "\n      ",
                  ),
                children: [
                  (0, o.jsx)("li", {
                    onClick: () => c("hero", i),
                    className:
                      "cursor-pointer w-full rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out\n          ".concat(
                        "hero" === l
                          ? "bg-[#FBD5A5] font-bold text-[#FF8000]"
                          : "",
                      ),
                    children: "Home",
                  }),
                  (0, o.jsx)("li", {
                    onClick: () => c("about", x),
                    className:
                      "cursor-pointer w-full  rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out\n          ".concat(
                        "about" === l
                          ? "bg-[#FBD5A5] font-bold text-[#FF8000] "
                          : "",
                      ),
                    children: "About me",
                  }),
                  (0, o.jsx)("li", {
                    onClick: () => c("project", u),
                    className:
                      "cursor-pointer w-full  rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out\n          ".concat(
                        "project" === l
                          ? "bg-[#FBD5A5] font-bold text-[#FF8000]"
                          : "",
                      ),
                    children: "My work",
                  }),
                  (0, o.jsx)("li", {
                    onClick: () => c("contact", d),
                    className:
                      "cursor-pointer w-full  rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out\n          ".concat(
                        "contact" === l
                          ? "bg-[#FBD5A5] font-bold text-[#FF8000]"
                          : "",
                      ),
                    children: "Contact me",
                  }),
                ],
              }),
              (0, o.jsx)(s.default, {}),
            ],
          }),
        });
      };
    },
    3090: (e, t, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components/NavBar",
        function () {
          return l(2637);
        },
      ]);
    },
    5103: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { UseContext: () => r, default: () => s });
      var o = l(7876),
        n = l(4232);
      let r = (0, n.createContext)(null),
        s = (e) => {
          let { children: t } = e,
            [l, s] = (0, n.useState)(!1),
            [a, c] = (0, n.useState)(!1),
            [i, u] = (0, n.useState)(""),
            d = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              let e = () => {
                s(window.scrollY > 10);
              };
              return (
                window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
              );
            }, []),
            (0, o.jsx)(r.Provider, {
              value: {
                isScrolled: l,
                setIsScrolled: s,
                isMenuOpened: a,
                setIsMenuOpened: c,
                handleClickMenu: () => {
                  s(() => !0), c(() => !a), console.log(a);
                },
                checkboxRef: d,
                activeSection: i,
                scrollToSection: (e, t) => {
                  var l;
                  null == (l = t.current) ||
                    l.scrollIntoView({ behavior: "smooth" }),
                    u(e),
                    c(!1),
                    console.log("scroll to ".concat(e));
                  let o = window.menuCheckboxRef;
                  (null == o ? void 0 : o.current) && (o.current.checked = !1);
                },
              },
              children: t,
            })
          );
        };
    },
    5381: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { useRefStore: () => o });
      let o = (0, l(4232).createContext)({
        heroRef: { current: null },
        projectRef: { current: null },
        aboutRef: { current: null },
        contactRef: { current: null },
      });
    },
    7682: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => s });
      var o = l(7876),
        n = l(4232),
        r = l(5103);
      let s = () => {
        let { handleClickMenu: e, checkboxRef: t } = (0, n.useContext)(
          r.UseContext,
        );
        return (
          (window.menuCheckboxRef = t),
          (0, o.jsxs)("section", {
            className: "flex  gap-5 md:pr-2 pr-4",
            children: [
              (0, o.jsxs)("label", {
                className:
                  "swap swap-rotate hover:scale-105 transition duration-200 ease-in-out",
                children: [
                  (0, o.jsx)("input", {
                    type: "checkbox",
                    className: "theme-controller",
                    value: "abyss",
                  }),
                  (0, o.jsx)("svg", {
                    className: "swap-off h-10 w-10 fill-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    children: (0, o.jsx)("path", {
                      d: "M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z",
                    }),
                  }),
                  (0, o.jsx)("svg", {
                    className: "swap-on h-10 w-10 fill-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    children: (0, o.jsx)("path", {
                      d: "M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z",
                    }),
                  }),
                ],
              }),
              (0, o.jsxs)("label", {
                className:
                  " lg:hidden btn btn-circle swap swap-rotate hover:scale-105 transition duration-200 ease-in-out",
                children: [
                  (0, o.jsx)("input", { type: "checkbox", ref: t }),
                  (0, o.jsx)("svg", {
                    onClick: e,
                    className: "swap-off fill-current ",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 512 512",
                    children: (0, o.jsx)("path", {
                      d: "M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z",
                    }),
                  }),
                  (0, o.jsx)("svg", {
                    onClick: e,
                    className: "swap-on fill-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 512 512",
                    children: (0, o.jsx)("polygon", {
                      points:
                        "400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49",
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [636, 593, 792], () => t(3090)), (_N_E = e.O());
  },
]);
