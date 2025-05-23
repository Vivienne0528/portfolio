(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [330],
  {
    2950: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components/Mode",
        function () {
          return t(7682);
        },
      ]);
    },
    5103: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { UseContext: () => a, default: () => o });
      var l = t(7876),
        n = t(4232);
      let a = (0, n.createContext)(null),
        o = (e) => {
          let { children: s } = e,
            [t, o] = (0, n.useState)(!1),
            [r, c] = (0, n.useState)(!1),
            [i, w] = (0, n.useState)(""),
            u = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              let e = () => {
                o(window.scrollY > 10);
              };
              return (
                window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
              );
            }, []),
            (0, l.jsx)(a.Provider, {
              value: {
                isScrolled: t,
                setIsScrolled: o,
                isMenuOpened: r,
                setIsMenuOpened: c,
                handleClickMenu: () => {
                  o(() => !0), c(() => !r), console.log(r);
                },
                checkboxRef: u,
                activeSection: i,
                scrollToSection: (e, s) => {
                  var t;
                  null == (t = s.current) ||
                    t.scrollIntoView({ behavior: "smooth" }),
                    w(e),
                    c(!1),
                    console.log("scroll to ".concat(e));
                  let l = window.menuCheckboxRef;
                  (null == l ? void 0 : l.current) && (l.current.checked = !1);
                },
              },
              children: s,
            })
          );
        };
    },
    7682: (e, s, t) => {
      "use strict";
      t.r(s), t.d(s, { default: () => o });
      var l = t(7876),
        n = t(4232),
        a = t(5103);
      let o = () => {
        let { handleClickMenu: e, checkboxRef: s } = (0, n.useContext)(
          a.UseContext,
        );
        return (
          (window.menuCheckboxRef = s),
          (0, l.jsxs)("section", {
            className: "flex  gap-5 md:pr-2 pr-4",
            children: [
              (0, l.jsxs)("label", {
                className:
                  "swap swap-rotate hover:scale-105 transition duration-200 ease-in-out",
                children: [
                  (0, l.jsx)("input", {
                    type: "checkbox",
                    className: "theme-controller",
                    value: "abyss",
                  }),
                  (0, l.jsx)("svg", {
                    className: "swap-off h-10 w-10 fill-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                      d: "M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z",
                    }),
                  }),
                  (0, l.jsx)("svg", {
                    className: "swap-on h-10 w-10 fill-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                      d: "M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z",
                    }),
                  }),
                ],
              }),
              (0, l.jsxs)("label", {
                className:
                  " lg:hidden btn btn-circle swap swap-rotate hover:scale-105 transition duration-200 ease-in-out",
                children: [
                  (0, l.jsx)("input", { type: "checkbox", ref: s }),
                  (0, l.jsx)("svg", {
                    onClick: e,
                    className: "swap-off fill-current ",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 512 512",
                    children: (0, l.jsx)("path", {
                      d: "M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z",
                    }),
                  }),
                  (0, l.jsx)("svg", {
                    onClick: e,
                    className: "swap-on fill-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 512 512",
                    children: (0, l.jsx)("polygon", {
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
    var s = (s) => e((e.s = s));
    e.O(0, [636, 593, 792], () => s(2950)), (_N_E = e.O());
  },
]);
