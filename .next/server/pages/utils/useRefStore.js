(() => {
  var e = {};
  (e.id = 669),
    (e.ids = [220, 636, 669]),
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
        r.r(t), r.d(t, { default: () => u });
        var s = r(8732),
          n = r(2341);
        function u() {
          return (0, s.jsxs)(n.Html, {
            lang: "en",
            children: [
              (0, s.jsx)(n.Head, {}),
              (0, s.jsxs)("body", {
                className: "antialiased",
                children: [
                  (0, s.jsx)(n.Main, {}),
                  (0, s.jsx)(n.NextScript, {}),
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
        r.r(t), r.d(t, { default: () => n });
        var s = r(8732);
        function n({ Component: e, pageProps: t }) {
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
      8732: (e) => {
        "use strict";
        e.exports = require("react/jsx-runtime");
      },
      8905: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            config: () => p,
            default: () => c,
            getServerSideProps: () => d,
            getStaticPaths: () => P,
            getStaticProps: () => l,
            reportWebVitals: () => f,
            routeModule: () => m,
            unstable_getServerProps: () => A,
            unstable_getServerSideProps: () => M,
            unstable_getStaticParams: () => b,
            unstable_getStaticPaths: () => g,
            unstable_getStaticProps: () => S,
          });
        var s = r(3885),
          n = r(237),
          u = r(1413),
          a = r(1779),
          i = r(2081),
          o = r(4554);
        let c = (0, u.M)(o, "default"),
          l = (0, u.M)(o, "getStaticProps"),
          P = (0, u.M)(o, "getStaticPaths"),
          d = (0, u.M)(o, "getServerSideProps"),
          p = (0, u.M)(o, "config"),
          f = (0, u.M)(o, "reportWebVitals"),
          S = (0, u.M)(o, "unstable_getStaticProps"),
          g = (0, u.M)(o, "unstable_getStaticPaths"),
          b = (0, u.M)(o, "unstable_getStaticParams"),
          A = (0, u.M)(o, "unstable_getServerProps"),
          M = (0, u.M)(o, "unstable_getServerSideProps"),
          m = new s.PagesRouteModule({
            definition: {
              kind: n.A.PAGES,
              page: "/utils/useRefStore",
              pathname: "/utils/useRefStore",
              bundlePath: "",
              filename: "",
            },
            components: { App: i.default, Document: a.default },
            userland: o,
          });
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [341], () => r(8905));
  module.exports = s;
})();
