"use strict";
(() => {
  var e = {};
  (e.id = 409),
    (e.ids = [409]),
    (e.modules = {
      3480: (e, t, r) => {
        e.exports = r(5600);
      },
      4982: (e, t, r) => {
        r.r(t),
          r.d(t, { config: () => P, default: () => d, routeModule: () => l });
        var n = {};
        r.r(n), r.d(n, { default: () => c });
        var s = r(3480),
          o = r(8667),
          a = r(6435);
        let i = require("nodemailer");
        var u = r.n(i);
        async function c(e, t) {
          if ("POST" === e.method) {
            let { name: r, email: n, message: s } = e.body,
              o = u().createTransport({
                service: "gmail",
                auth: {
                  user: process.env.EMAIL_USER,
                  pass: process.env.EMAIL_PASS,
                },
              }),
              a = {
                from: n,
                to: process.env.EMAIL_TO,
                subject: `New message from ${r}`,
                text: s,
              };
            try {
              await o.sendMail(a), t.status(200).json({ success: !0 });
            } catch (e) {
              console.error("Error sending email:", e),
                t.status(500).json({ success: !1, error: e });
            }
          } else t.status(405).end();
        }
        let d = (0, a.M)(n, "default"),
          P = (0, a.M)(n, "config"),
          l = new s.PagesAPIRouteModule({
            definition: {
              kind: o.A.PAGES_API,
              page: "/api/contact",
              pathname: "/api/contact",
              bundlePath: "",
              filename: "",
            },
            userland: n,
          });
      },
      5600: (e) => {
        e.exports = require("next/dist/compiled/next-server/pages-api.runtime.prod.js");
      },
      6435: (e, t) => {
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
      8667: (e, t) => {
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
    });
  var t = require("../../webpack-api-runtime.js");
  t.C(e);
  var r = t((t.s = 4982));
  module.exports = r;
})();
