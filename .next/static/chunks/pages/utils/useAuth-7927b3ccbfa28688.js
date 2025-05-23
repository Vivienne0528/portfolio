(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [385],
  {
    1329: (e, s, a) => {
      "use strict";
      a.r(s), a.d(s, { useAuth: () => n });
      var t = a(4232),
        r = a(1408);
      let n = () => {
        let [e, s] = (0, t.useState)(""),
          [a, n] = (0, t.useState)(""),
          [o, u] = (0, t.useState)(null),
          [i, l] = (0, t.useState)(!1),
          [c, d] = (0, t.useState)(""),
          [m, h] = (0, t.useState)(30),
          g = () => {
            h((e) =>
              e <= 1
                ? (l(!1), d(""), console.log(e), 0)
                : (d(
                    "⏳ Please wait ".concat(
                      e - 1,
                      " seconds before sending another message.",
                    ),
                  ),
                  e - 1),
            );
          };
        return {
          messageSubmit: async (e) => {
            let { name: a, email: t, message: r } = e;
            if ((h(30), i))
              return void d(
                "⏳ Please wait ".concat(
                  m,
                  " seconds before sending another message.",
                ),
              );
            n(""), s("");
            try {
              if (
                (
                  await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name: a, email: t, message: r }),
                  })
                ).ok
              ) {
                l(!0);
                let e = setTimeout(() => {
                  l(!1), d("");
                }, 3e4);
                s("✅ Message sent successfully!"),
                  clearTimeout(e),
                  n(""),
                  setInterval(g, 1e3);
              } else throw Error("Server responded with an error.");
            } catch (e) {
              console.log(e),
                n("❌ Failed to send message. Please try again later."),
                s("");
            }
          },
          schema: r
            .Ik()
            .shape({
              email: r
                .Yj()
                .email(
                  "Please enter a valid email address (e.g., user@example.com).",
                )
                .required("Please enter your email address."),
              name: r.Yj().required("Please enter your name."),
              message: r.Yj().required("Please enter your message."),
            })
            .required(),
          successMessage: e,
          errorMessage: a,
          captchaToken: o,
          setCaptchaToken: u,
          onChange: function (e) {
            u(e);
          },
          setSuccessMessage: s,
          isCoolDown: i,
          coolDownMessage: c,
        };
      };
    },
    3742: (e, s, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/utils/useAuth",
        function () {
          return a(1329);
        },
      ]);
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [408, 636, 593, 792], () => s(3742)), (_N_E = e.O());
  },
]);
