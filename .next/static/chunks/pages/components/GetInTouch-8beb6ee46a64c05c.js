(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [165],
  {
    1329: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { useAuth: () => l });
      var r = s(4232),
        a = s(1408);
      let l = () => {
        let [e, t] = (0, r.useState)(""),
          [s, l] = (0, r.useState)(""),
          [n, o] = (0, r.useState)(null),
          [i, d] = (0, r.useState)(!1),
          [u, c] = (0, r.useState)(""),
          [m, x] = (0, r.useState)(30),
          h = () => {
            x((e) =>
              e <= 1
                ? (d(!1), c(""), console.log(e), 0)
                : (c(
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
            let { name: s, email: r, message: a } = e;
            if ((x(30), i))
              return void c(
                "⏳ Please wait ".concat(
                  m,
                  " seconds before sending another message.",
                ),
              );
            l(""), t("");
            try {
              if (
                (
                  await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name: s, email: r, message: a }),
                  })
                ).ok
              ) {
                d(!0);
                let e = setTimeout(() => {
                  d(!1), c("");
                }, 3e4);
                t("✅ Message sent successfully!"),
                  clearTimeout(e),
                  l(""),
                  setInterval(h, 1e3);
              } else throw Error("Server responded with an error.");
            } catch (e) {
              console.log(e),
                l("❌ Failed to send message. Please try again later."),
                t("");
            }
          },
          schema: a
            .Ik()
            .shape({
              email: a
                .Yj()
                .email(
                  "Please enter a valid email address (e.g., user@example.com).",
                )
                .required("Please enter your email address."),
              name: a.Yj().required("Please enter your name."),
              message: a.Yj().required("Please enter your message."),
            })
            .required(),
          successMessage: e,
          errorMessage: s,
          captchaToken: n,
          setCaptchaToken: o,
          onChange: function (e) {
            o(e);
          },
          setSuccessMessage: t,
          isCoolDown: i,
          coolDownMessage: u,
        };
      };
    },
    2658: (e, t, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/components/GetInTouch",
        function () {
          return s(5077);
        },
      ]);
    },
    5077: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => u });
      var r = s(7876),
        a = s(4232),
        l = s(5381),
        n = s(1329),
        o = s(1090),
        i = s(8992),
        d = s(8229);
      let u = () => {
        var e, t, s;
        let { contactRef: u } = (0, a.useContext)(l.useRefStore),
          {
            schema: c,
            messageSubmit: m,
            successMessage: x,
            setSuccessMessage: h,
            errorMessage: f,
            onChange: g,
            captchaToken: p,
            isCoolDown: b,
            coolDownMessage: j,
            setCaptchaToken: w,
          } = (0, n.useAuth)(),
          {
            register: v,
            handleSubmit: y,
            formState: { errors: N },
          } = (0, i.mN)({ resolver: (0, o.t)(c) });
        return (
          (0, a.useEffect)(() => {
            p || h("");
          }),
          (0, r.jsxs)("section", {
            ref: u,
            className:
              "bg-[#FBD5A5] text-[#001E29] flex flex-col items-center gap-4 mt-50 p-4  w-full rounded-xl",
            children: [
              (0, r.jsx)("div", {
                className:
                  "text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem]",
                children: "Connect with me",
              }),
              (0, r.jsx)("div", {
                className:
                  "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-4xl font-bold leading-[2.25rem] md:leading-[2.5rem]",
                children: "Get in touch",
              }),
              (0, r.jsxs)("form", {
                onSubmit: y(m),
                className:
                  "gap-5 flex flex-col items-center text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                children: [
                  (0, r.jsx)("p", {
                    className: "text-center",
                    children:
                      "I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.",
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex gap-5 h-10 w-full",
                    children: [
                      (0, r.jsx)("input", {
                        type: "text",
                        placeholder: "Enter your name",
                        ...v("name", { required: !0 }),
                        className:
                          "input bg-white text-[#001E29] rounded-[5px] w-full",
                      }),
                      (0, r.jsx)("input", {
                        id: "email",
                        type: "email",
                        placeholder: "Enter your email",
                        ...v("email", { required: !0 }),
                        className:
                          "input bg-white text-[#001E29] rounded-[5px] w-full",
                      }),
                    ],
                  }),
                  (0, r.jsx)("textarea", {
                    className:
                      "textarea bg-white text-[#001E29] rounded-[5px] w-full h-50",
                    placeholder: "Enter your message",
                    ...v("message", { required: !0 }),
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "text-red-600 font-extrabold text-[14px] flex flex-col justify-center items-center",
                    children: [
                      (0, r.jsx)("p", {
                        children: null == (e = N.name) ? void 0 : e.message,
                      }),
                      (0, r.jsx)("p", {
                        children: null == (t = N.email) ? void 0 : t.message,
                      }),
                      (0, r.jsx)("p", {
                        children: null == (s = N.message) ? void 0 : s.message,
                      }),
                      x &&
                        (0, r.jsx)("p", {
                          className: "text-green-600",
                          children: x,
                        }),
                      f && (0, r.jsx)("p", { children: f }),
                      !p &&
                        (0, r.jsx)("p", {
                          children:
                            " Please complete the CAPTCHA verification.",
                        }),
                      b && (0, r.jsx)("p", { children: j }),
                    ],
                  }),
                  (0, r.jsx)("button", {
                    disabled: !p || b,
                    id: "submit",
                    className:
                      "w-full btn btn-l md:btn-xl border-0 bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] md:w-50",
                    children: "Send to me →",
                  }),
                  (0, r.jsx)(d.A, {
                    sitekey: "6LcFozcrAAAAAB9nUS1WeuilEhBld64y9gqmkHV7",
                    onChange: g,
                    onExpired: () => w(null),
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    5381: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { useRefStore: () => r });
      let r = (0, s(4232).createContext)({
        heroRef: { current: null },
        projectRef: { current: null },
        aboutRef: { current: null },
        contactRef: { current: null },
      });
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [408, 214, 636, 593, 792], () => t(2658)), (_N_E = e.O());
  },
]);
