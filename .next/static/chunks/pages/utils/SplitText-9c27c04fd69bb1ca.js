(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [871],
  {
    6071: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => a });
      var r = n(7876),
        s = n(1755),
        l = n(4232);
      let a = (e) => {
        let {
            text: t = "",
            className: n = "",
            delay: a = 100,
            animationFrom: i = {
              opacity: 0,
              transform: "translate3d(0,40px,0)",
            },
            animationTo: c = { opacity: 1, transform: "translate3d(0,0,0)" },
            easing: p = "easeOutCubic",
            threshold: o = 0.1,
            rootMargin: u = "-100px",
            textAlign: d = "center",
            onLetterAnimationComplete: f,
          } = e,
          h = t.split(" ").map((e) => e.split("")),
          w = h.flat(),
          [y, m] = (0, l.useState)(!1),
          _ = (0, l.useRef)(),
          b = (0, l.useRef)(0);
        (0, l.useEffect)(() => {
          let e = new IntersectionObserver(
            (t) => {
              let [n] = t;
              n.isIntersecting && (m(!0), e.unobserve(_.current));
            },
            { threshold: o, rootMargin: u },
          );
          return e.observe(_.current), () => e.disconnect();
        }, [o, u]);
        let k = (0, s.mX)(
          w.length,
          w.map((e, t) => ({
            from: i,
            to: y
              ? async (e) => {
                  await e(c),
                    (b.current += 1),
                    b.current === w.length && f && f();
                }
              : i,
            delay: t * a,
            config: { easing: p },
          })),
        );
        return (0, r.jsx)("p", {
          ref: _,
          className: "split-parent ".concat(n),
          style: {
            textAlign: d,
            overflow: "hidden",
            display: "inline",
            whiteSpace: "normal",
            wordWrap: "break-word",
          },
          children: h.map((e, t) =>
            (0, r.jsxs)(
              "span",
              {
                style: { display: "inline-block", whiteSpace: "nowrap" },
                children: [
                  e.map((e, n) => {
                    let l = h.slice(0, t).reduce((e, t) => e + t.length, 0) + n;
                    return (0, r.jsx)(
                      s.CS.span,
                      {
                        style: {
                          ...k[l],
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
    8478: (e, t, n) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/utils/SplitText",
        function () {
          return n(6071);
        },
      ]);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [755, 636, 593, 792], () => t(8478)), (_N_E = e.O());
  },
]);
