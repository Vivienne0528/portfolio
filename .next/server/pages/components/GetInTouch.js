(() => {
  var e = {};
  (e.id = 165),
    (e.ids = [165, 220, 636]),
    (e.modules = {
      237: (e, t) => {
        "use strict";
        Object.defineProperty(t, "A", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
        var r = (function (e) {
          return (
            (e.PAGES = "PAGES"),
            (e.PAGES_API = "PAGES_API"),
            (e.APP_PAGE = "APP_PAGE"),
            (e.APP_ROUTE = "APP_ROUTE"),
            (e.IMAGE = "IMAGE"),
            e
          );
        })({});
      },
      361: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");
      },
      979: () => {},
      1413: (e, t) => {
        "use strict";
        Object.defineProperty(t, "M", {
          enumerable: !0,
          get: function () {
            return function e(t, r) {
              return r in t
                ? t[r]
                : "then" in t && "function" == typeof t.then
                  ? t.then((t) => e(t, r))
                  : "function" == typeof t && "default" === r
                    ? t
                    : void 0;
            };
          },
        });
      },
      1779: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => n });
        var s = r(8732),
          a = r(2341);
        function n() {
          return (0, s.jsxs)(a.Html, {
            lang: "en",
            children: [
              (0, s.jsx)(a.Head, {}),
              (0, s.jsxs)("body", {
                className: "antialiased",
                children: [
                  (0, s.jsx)(a.Main, {}),
                  (0, s.jsx)(a.NextScript, {}),
                ],
              }),
            ],
          });
        }
      },
      2015: (e) => {
        "use strict";
        e.exports = require("react");
      },
      2081: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => a });
        var s = r(8732);
        function a({ Component: e, pageProps: t }) {
          return (0, s.jsx)(e, { ...t });
        }
        r(979);
      },
      3873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      4554: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { useRefStore: () => s });
        let s = (0, r(2015).createContext)({
          heroRef: { current: null },
          projectRef: { current: null },
          aboutRef: { current: null },
          contactRef: { current: null },
        });
      },
      5190: (e) => {
        "use strict";
        e.exports = import("@hookform/resolvers/yup");
      },
      5742: (e, t, r) => {
        "use strict";
        r.a(e, async (e, s) => {
          try {
            r.r(t), r.d(t, { default: () => x });
            var a = r(8732),
              n = r(2015),
              i = r(4554),
              l = r(6647),
              o = r(5190),
              u = r(6884),
              c = r(9341),
              d = r.n(c),
              m = e([o, u]);
            [o, u] = m.then ? (await m)() : m;
            let x = () => {
              let { contactRef: e } = (0, n.useContext)(i.useRefStore),
                {
                  schema: t,
                  messageSubmit: r,
                  successMessage: s,
                  setSuccessMessage: c,
                  errorMessage: m,
                  onChange: x,
                  captchaToken: p,
                  isCoolDown: g,
                  coolDownMessage: h,
                  setCaptchaToken: f,
                } = (0, l.useAuth)(),
                {
                  register: P,
                  handleSubmit: b,
                  formState: { errors: S },
                } = (0, u.useForm)({ resolver: (0, o.yupResolver)(t) });
              return (
                (0, n.useEffect)(() => {
                  p || c("");
                }),
                (0, a.jsxs)("section", {
                  ref: e,
                  className:
                    "bg-[#FBD5A5] text-[#001E29] flex flex-col items-center gap-4 mt-50 p-4  w-full rounded-xl",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem]",
                      children: "Connect with me",
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-4xl font-bold leading-[2.25rem] md:leading-[2.5rem]",
                      children: "Get in touch",
                    }),
                    (0, a.jsxs)("form", {
                      onSubmit: b(r),
                      className:
                        "gap-5 flex flex-col items-center text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-center",
                          children:
                            "I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.",
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex gap-5 h-10 w-full",
                          children: [
                            (0, a.jsx)("input", {
                              type: "text",
                              placeholder: "Enter your name",
                              ...P("name", { required: !0 }),
                              className:
                                "input bg-white text-[#001E29] rounded-[5px] w-full",
                            }),
                            (0, a.jsx)("input", {
                              id: "email",
                              type: "email",
                              placeholder: "Enter your email",
                              ...P("email", { required: !0 }),
                              className:
                                "input bg-white text-[#001E29] rounded-[5px] w-full",
                            }),
                          ],
                        }),
                        (0, a.jsx)("textarea", {
                          className:
                            "textarea bg-white text-[#001E29] rounded-[5px] w-full h-50",
                          placeholder: "Enter your message",
                          ...P("message", { required: !0 }),
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "text-red-600 font-extrabold text-[14px] flex flex-col justify-center items-center",
                          children: [
                            (0, a.jsx)("p", { children: S.name?.message }),
                            (0, a.jsx)("p", { children: S.email?.message }),
                            (0, a.jsx)("p", { children: S.message?.message }),
                            s &&
                              (0, a.jsx)("p", {
                                className: "text-green-600",
                                children: s,
                              }),
                            m && (0, a.jsx)("p", { children: m }),
                            !p &&
                              (0, a.jsx)("p", {
                                children:
                                  " Please complete the CAPTCHA verification.",
                              }),
                            g && (0, a.jsx)("p", { children: h }),
                          ],
                        }),
                        (0, a.jsx)("button", {
                          disabled: !p || g,
                          id: "submit",
                          className:
                            "w-full btn btn-l md:btn-xl border-0 bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] md:w-50",
                          children: "Send to me →",
                        }),
                        (0, a.jsx)(d(), {
                          sitekey: "6LcFozcrAAAAAB9nUS1WeuilEhBld64y9gqmkHV7",
                          onChange: x,
                          onExpired: () => f(null),
                        }),
                      ],
                    }),
                  ],
                })
              );
            };
            s();
          } catch (e) {
            s(e);
          }
        });
      },
      6647: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { useAuth: () => n });
        var s = r(2015);
        let a = require("yup"),
          n = () => {
            let [e, t] = (0, s.useState)(""),
              [r, n] = (0, s.useState)(""),
              [i, l] = (0, s.useState)(null),
              [o, u] = (0, s.useState)(!1),
              [c, d] = (0, s.useState)(""),
              [m, x] = (0, s.useState)(30),
              p = () => {
                x((e) =>
                  e <= 1
                    ? (u(!1), d(""), console.log(e), 0)
                    : (d(
                        `⏳ Please wait ${e - 1} seconds before sending another message.`,
                      ),
                      e - 1),
                );
              };
            return {
              messageSubmit: async ({ name: e, email: r, message: s }) => {
                if ((x(30), o))
                  return void d(
                    `⏳ Please wait ${m} seconds before sending another message.`,
                  );
                n(""), t("");
                try {
                  if (
                    (
                      await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ name: e, email: r, message: s }),
                      })
                    ).ok
                  ) {
                    u(!0);
                    let e = setTimeout(() => {
                      u(!1), d("");
                    }, 3e4);
                    t("✅ Message sent successfully!"),
                      clearTimeout(e),
                      n(""),
                      setInterval(p, 1e3);
                  } else throw Error("Server responded with an error.");
                } catch (e) {
                  console.log(e),
                    n("❌ Failed to send message. Please try again later."),
                    t("");
                }
              },
              schema: a
                .object()
                .shape({
                  email: a
                    .string()
                    .email(
                      "Please enter a valid email address (e.g., user@example.com).",
                    )
                    .required("Please enter your email address."),
                  name: a.string().required("Please enter your name."),
                  message: a.string().required("Please enter your message."),
                })
                .required(),
              successMessage: e,
              errorMessage: r,
              captchaToken: i,
              setCaptchaToken: l,
              onChange: function (e) {
                l(e);
              },
              setSuccessMessage: t,
              isCoolDown: o,
              coolDownMessage: c,
            };
          };
      },
      6884: (e) => {
        "use strict";
        e.exports = import("react-hook-form");
      },
      8732: (e) => {
        "use strict";
        e.exports = require("react/jsx-runtime");
      },
      9141: (e, t, r) => {
        "use strict";
        r.a(e, async (e, s) => {
          try {
            r.r(t),
              r.d(t, {
                config: () => g,
                default: () => d,
                getServerSideProps: () => p,
                getStaticPaths: () => x,
                getStaticProps: () => m,
                reportWebVitals: () => h,
                routeModule: () => v,
                unstable_getServerProps: () => S,
                unstable_getServerSideProps: () => j,
                unstable_getStaticParams: () => b,
                unstable_getStaticPaths: () => P,
                unstable_getStaticProps: () => f,
              });
            var a = r(3885),
              n = r(237),
              i = r(1413),
              l = r(1779),
              o = r(2081),
              u = r(5742),
              c = e([u]);
            u = (c.then ? (await c)() : c)[0];
            let d = (0, i.M)(u, "default"),
              m = (0, i.M)(u, "getStaticProps"),
              x = (0, i.M)(u, "getStaticPaths"),
              p = (0, i.M)(u, "getServerSideProps"),
              g = (0, i.M)(u, "config"),
              h = (0, i.M)(u, "reportWebVitals"),
              f = (0, i.M)(u, "unstable_getStaticProps"),
              P = (0, i.M)(u, "unstable_getStaticPaths"),
              b = (0, i.M)(u, "unstable_getStaticParams"),
              S = (0, i.M)(u, "unstable_getServerProps"),
              j = (0, i.M)(u, "unstable_getServerSideProps"),
              v = new a.PagesRouteModule({
                definition: {
                  kind: n.A.PAGES,
                  page: "/components/GetInTouch",
                  pathname: "/components/GetInTouch",
                  bundlePath: "",
                  filename: "",
                },
                components: { App: o.default, Document: l.default },
                userland: u,
              });
            s();
          } catch (e) {
            s(e);
          }
        });
      },
      9341: (e) => {
        "use strict";
        e.exports = require("react-google-recaptcha");
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [341], () => r(9141));
  module.exports = s;
})();
