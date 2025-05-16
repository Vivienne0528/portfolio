(() => {
  var e = {};
  (e.id = 385),
    (e.ids = [220, 385, 636]),
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
      4221: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            config: () => g,
            default: () => l,
            getServerSideProps: () => P,
            getStaticPaths: () => d,
            getStaticProps: () => c,
            reportWebVitals: () => p,
            routeModule: () => A,
            unstable_getServerProps: () => h,
            unstable_getServerSideProps: () => b,
            unstable_getStaticParams: () => f,
            unstable_getStaticPaths: () => m,
            unstable_getStaticProps: () => S,
          });
        var s = r(3885),
          a = r(237),
          n = r(1413),
          i = r(1779),
          u = r(2081),
          o = r(6647);
        let l = (0, n.M)(o, "default"),
          c = (0, n.M)(o, "getStaticProps"),
          d = (0, n.M)(o, "getStaticPaths"),
          P = (0, n.M)(o, "getServerSideProps"),
          g = (0, n.M)(o, "config"),
          p = (0, n.M)(o, "reportWebVitals"),
          S = (0, n.M)(o, "unstable_getStaticProps"),
          m = (0, n.M)(o, "unstable_getStaticPaths"),
          f = (0, n.M)(o, "unstable_getStaticParams"),
          h = (0, n.M)(o, "unstable_getServerProps"),
          b = (0, n.M)(o, "unstable_getServerSideProps"),
          A = new s.PagesRouteModule({
            definition: {
              kind: a.A.PAGES,
              page: "/utils/useAuth",
              pathname: "/utils/useAuth",
              bundlePath: "",
              filename: "",
            },
            components: { App: u.default, Document: i.default },
            userland: o,
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
              [i, u] = (0, s.useState)(null),
              [o, l] = (0, s.useState)(!1),
              [c, d] = (0, s.useState)(""),
              [P, g] = (0, s.useState)(30),
              p = () => {
                g((e) =>
                  e <= 1
                    ? (l(!1), d(""), console.log(e), 0)
                    : (d(
                        `⏳ Please wait ${e - 1} seconds before sending another message.`,
                      ),
                      e - 1),
                );
              };
            return {
              messageSubmit: async ({ name: e, email: r, message: s }) => {
                if ((g(30), o))
                  return void d(
                    `⏳ Please wait ${P} seconds before sending another message.`,
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
                    l(!0);
                    let e = setTimeout(() => {
                      l(!1), d("");
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
              setCaptchaToken: u,
              onChange: function (e) {
                u(e);
              },
              setSuccessMessage: t,
              isCoolDown: o,
              coolDownMessage: c,
            };
          };
      },
      8732: (e) => {
        "use strict";
        e.exports = require("react/jsx-runtime");
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [341], () => r(4221));
  module.exports = s;
})();
