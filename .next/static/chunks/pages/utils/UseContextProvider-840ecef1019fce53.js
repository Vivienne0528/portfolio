(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [455],
  {
    5103: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { UseContext: () => r, default: () => s });
      var n = l(7876),
        o = l(4232);
      let r = (0, o.createContext)(null),
        s = (e) => {
          let { children: t } = e,
            [l, s] = (0, o.useState)(!1),
            [u, c] = (0, o.useState)(!1),
            [i, d] = (0, o.useState)(""),
            a = (0, o.useRef)(null);
          return (
            (0, o.useEffect)(() => {
              let e = () => {
                s(window.scrollY > 10);
              };
              return (
                window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
              );
            }, []),
            (0, n.jsx)(r.Provider, {
              value: {
                isScrolled: l,
                setIsScrolled: s,
                isMenuOpened: u,
                setIsMenuOpened: c,
                handleClickMenu: () => {
                  s(() => !0), c(() => !u), console.log(u);
                },
                checkboxRef: a,
                activeSection: i,
                scrollToSection: (e, t) => {
                  var l;
                  null == (l = t.current) ||
                    l.scrollIntoView({ behavior: "smooth" }),
                    d(e),
                    c(!1),
                    console.log("scroll to ".concat(e));
                  let n = window.menuCheckboxRef;
                  (null == n ? void 0 : n.current) && (n.current.checked = !1);
                },
              },
              children: t,
            })
          );
        };
    },
    7940: (e, t, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/utils/UseContextProvider",
        function () {
          return l(5103);
        },
      ]);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [636, 593, 792], () => t(7940)), (_N_E = e.O());
  },
]);
