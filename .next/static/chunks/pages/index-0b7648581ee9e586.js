(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [332],
  {
    1329: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { useAuth: () => r });
      var s = l(4232),
        n = l(1408);
      let r = () => {
        let [e, t] = (0, s.useState)(""),
          [l, r] = (0, s.useState)(""),
          [a, i] = (0, s.useState)(null),
          [o, d] = (0, s.useState)(!1),
          [c, x] = (0, s.useState)(""),
          [m, u] = (0, s.useState)(30),
          h = () => {
            u((e) =>
              e <= 1
                ? (d(!1), x(""), console.log(e), 0)
                : (x(
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
            let { name: l, email: s, message: n } = e;
            if ((u(30), o))
              return void x(
                "⏳ Please wait ".concat(
                  m,
                  " seconds before sending another message.",
                ),
              );
            r(""), t("");
            try {
              if (
                (
                  await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name: l, email: s, message: n }),
                  })
                ).ok
              ) {
                d(!0);
                let e = setTimeout(() => {
                  d(!1), x("");
                }, 3e4);
                t("✅ Message sent successfully!"),
                  clearTimeout(e),
                  r(""),
                  setInterval(h, 1e3);
              } else throw Error("Server responded with an error.");
            } catch (e) {
              console.log(e),
                r("❌ Failed to send message. Please try again later."),
                t("");
            }
          },
          schema: n
            .Ik()
            .shape({
              email: n
                .Yj()
                .email(
                  "Please enter a valid email address (e.g., user@example.com).",
                )
                .required("Please enter your email address."),
              name: n.Yj().required("Please enter your name."),
              message: n.Yj().required("Please enter your message."),
            })
            .required(),
          successMessage: e,
          errorMessage: l,
          captchaToken: a,
          setCaptchaToken: i,
          onChange: function (e) {
            i(e);
          },
          setSuccessMessage: t,
          isCoolDown: o,
          coolDownMessage: c,
        };
      };
    },
    2265: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => o });
      var s = l(7876),
        n = l(4587),
        r = l.n(n),
        a = l(5381),
        i = l(4232);
      let o = () => {
        let { aboutRef: e } = (0, i.useContext)(a.useRefStore);
        return (0, s.jsxs)("section", {
          ref: e,
          className: "flex flex-col items-center gap-5 pt-25",
          children: [
            (0, s.jsx)("div", {
              className:
                "text-xl leading-[1.75rem] md:leading-[2rem] md:text-2xl",
              children: "Introduction",
            }),
            (0, s.jsx)("div", {
              className:
                "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl leading-[2.25rem] md:text-4xl md:leading-[2.5rem] mb-5 font-bold",
              children: "About me",
            }),
            (0, s.jsxs)("section", {
              className:
                "flex flex-col md:flex-row gap-5 lg:gap-10 items-center md:items-start justify-center",
              children: [
                (0, s.jsx)("img", {
                  src: "/businessCard.png",
                  alt: "business card",
                  className:
                    "w-full h-80 object-cover object-[0%_40%] md:w-[40%] md:h-auto lg:w-85 rounded-xl",
                }),
                (0, s.jsxs)("section", {
                  className: "flex flex-col",
                  children: [
                    (0, s.jsx)("p", {
                      className:
                        "font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                      children:
                        "I'm a curious builder who turns ideas into interactive web experiences. With a year of full-stack experience using Next.js, React, and more, I love crafting clean, scalable code that feels as smooth as it looks. Always learning, always coding — let's create something awesome.",
                    }),
                    (0, s.jsxs)("section", {
                      className:
                        "flex justify-between gap-4 lg:gap-10 py-4 text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "bg-[#FBD5A5] w-full h-50 flex flex-col items-start justify-between p-3 rounded-xl text-[#001E29]",
                          children: [
                            (0, s.jsx)(r(), {
                              src: "/darkIcon.jpg",
                              alt: "dark icon",
                              width: 30,
                              height: 30,
                            }),
                            (0, s.jsx)("section", {
                              className: " font-bold",
                              children: (0, s.jsx)("div", {
                                children:
                                  "HTML, CSS, JavaScript, React Js, Next Js ",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "font-extralight",
                              children: "Languages",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            " bg-[#FBD5A5] w-full h-50 flex flex-col items-start justify-between p-3 rounded-xl text-[#001E29]",
                          children: [
                            (0, s.jsx)(r(), {
                              src: "/educationIcon.jpg",
                              alt: "education icon",
                              width: 30,
                              height: 30,
                            }),
                            (0, s.jsx)("section", {
                              className: "font-bold",
                              children: (0, s.jsx)("div", {
                                children:
                                  "Master's degree in IT from Uni of Melbourne ",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "font-extralight",
                              children: "Education",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "bg-[#FBD5A5] w-full h-50 flex flex-col items-start justify-between p-3 rounded-xl text-[#001E29]",
                          children: [
                            (0, s.jsx)(r(), {
                              src: "/projectsIcon.jpg",
                              alt: "projects Icon",
                              width: 30,
                              height: 30,
                            }),
                            (0, s.jsx)("section", {
                              className: "font-bold",
                              children: (0, s.jsx)("div", {
                                children: "Built more than 5 projects",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "font-extralight",
                              children: "Projects",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    2637: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => o });
      var s = l(7876),
        n = l(4232),
        r = l(5103),
        a = l(7682),
        i = l(5381);
      let o = () => {
        let {
            isScrolled: e,
            isMenuOpened: t,
            activeSection: l,
            scrollToSection: o,
          } = (0, n.useContext)(r.UseContext),
          {
            heroRef: d,
            projectRef: c,
            contactRef: x,
            aboutRef: m,
          } = (0, n.useContext)(i.useRefStore);
        return (0, s.jsx)("section", {
          className:
            "w-full fixed left-1/2 -translate-x-1/2 z-50 transition duration-300 ease-in-out\n      ".concat(
              e && !t
                ? "bg-black/20 backdrop-blur-md shadow-lg border border-white/20"
                : "bg-transparent border-transparent",
              "\n      ",
            ),
          children: (0, s.jsxs)("div", {
            className:
              "relative max-w-[1280px] min-w-[375px] flex justify-between items-start m-auto xl:px-20 lg:px-10 py-3",
            children: [
              (0, s.jsxs)("div", {
                onClick: () => o("hero", d),
                className:
                  "font-semibold text-3xl cursor-pointer hover:scale-105 transition duration-200 ease-in-out md:pl-2 pl-4",
                children: [
                  "Vivienne ",
                  (0, s.jsx)("span", {
                    className: "text-[#FF8000]",
                    children: ".",
                  }),
                ],
              }),
              (0, s.jsxs)("ul", {
                className:
                  "p-2 flex w-full lg:w-[600px]\n                ".concat(
                    t
                      ? "absolute lg:static top-0 left-0 h-screen text-4xl flex-col justify-center items-start gap-5 bg-black/40  backdrop-blur-2xl shadow-lg border border-white/20  "
                      : "hidden  flex-row border-1 rounded-full shadow-sm hover:shadow-xl justify-between w-[600px] text-xl lg:flex",
                    "\n      ",
                  ),
                children: [
                  (0, s.jsx)("li", {
                    onClick: () => o("hero", d),
                    className:
                      "cursor-pointer w-full rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out\n          ".concat(
                        "hero" === l
                          ? "bg-[#FBD5A5] font-bold text-[#FF8000]"
                          : "",
                      ),
                    children: "Home",
                  }),
                  (0, s.jsx)("li", {
                    onClick: () => o("about", m),
                    className:
                      "cursor-pointer w-full  rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out\n          ".concat(
                        "about" === l
                          ? "bg-[#FBD5A5] font-bold text-[#FF8000] "
                          : "",
                      ),
                    children: "About me",
                  }),
                  (0, s.jsx)("li", {
                    onClick: () => o("project", c),
                    className:
                      "cursor-pointer w-full  rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out\n          ".concat(
                        "project" === l
                          ? "bg-[#FBD5A5] font-bold text-[#FF8000]"
                          : "",
                      ),
                    children: "My work",
                  }),
                  (0, s.jsx)("li", {
                    onClick: () => o("contact", x),
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
              (0, s.jsx)(a.default, {}),
            ],
          }),
        });
      };
    },
    5077: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => c });
      var s = l(7876),
        n = l(4232),
        r = l(5381),
        a = l(1329),
        i = l(1090),
        o = l(8992),
        d = l(8229);
      let c = () => {
        var e, t, l;
        let { contactRef: c } = (0, n.useContext)(r.useRefStore),
          {
            schema: x,
            messageSubmit: m,
            successMessage: u,
            setSuccessMessage: h,
            errorMessage: g,
            onChange: f,
            captchaToken: p,
            isCoolDown: j,
            coolDownMessage: b,
            setCaptchaToken: w,
          } = (0, a.useAuth)(),
          {
            register: v,
            handleSubmit: N,
            formState: { errors: y },
          } = (0, o.mN)({ resolver: (0, i.t)(x) });
        return (
          (0, n.useEffect)(() => {
            p || h("");
          }),
          (0, s.jsxs)("section", {
            ref: c,
            className:
              "bg-[#FBD5A5] text-[#001E29] flex flex-col items-center gap-4 mt-50 p-4  w-full rounded-xl",
            children: [
              (0, s.jsx)("div", {
                className:
                  "text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem]",
                children: "Connect with me",
              }),
              (0, s.jsx)("div", {
                className:
                  "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-4xl font-bold leading-[2.25rem] md:leading-[2.5rem]",
                children: "Get in touch",
              }),
              (0, s.jsxs)("form", {
                onSubmit: N(m),
                className:
                  "gap-5 flex flex-col items-center text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                children: [
                  (0, s.jsx)("p", {
                    className: "text-center",
                    children:
                      "I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.",
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex gap-5 h-10 w-full",
                    children: [
                      (0, s.jsx)("input", {
                        type: "text",
                        placeholder: "Enter your name",
                        ...v("name", { required: !0 }),
                        className:
                          "input bg-white text-[#001E29] rounded-[5px] w-full",
                      }),
                      (0, s.jsx)("input", {
                        id: "email",
                        type: "email",
                        placeholder: "Enter your email",
                        ...v("email", { required: !0 }),
                        className:
                          "input bg-white text-[#001E29] rounded-[5px] w-full",
                      }),
                    ],
                  }),
                  (0, s.jsx)("textarea", {
                    className:
                      "textarea bg-white text-[#001E29] rounded-[5px] w-full h-50",
                    placeholder: "Enter your message",
                    ...v("message", { required: !0 }),
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "text-red-600 font-extrabold text-[14px] flex flex-col justify-center items-center",
                    children: [
                      (0, s.jsx)("p", {
                        children: null == (e = y.name) ? void 0 : e.message,
                      }),
                      (0, s.jsx)("p", {
                        children: null == (t = y.email) ? void 0 : t.message,
                      }),
                      (0, s.jsx)("p", {
                        children: null == (l = y.message) ? void 0 : l.message,
                      }),
                      u &&
                        (0, s.jsx)("p", {
                          className: "text-green-600",
                          children: u,
                        }),
                      g && (0, s.jsx)("p", { children: g }),
                      !p &&
                        (0, s.jsx)("p", {
                          children:
                            " Please complete the CAPTCHA verification.",
                        }),
                      j && (0, s.jsx)("p", { children: b }),
                    ],
                  }),
                  (0, s.jsx)("button", {
                    disabled: !p || j,
                    id: "submit",
                    className:
                      "w-full btn btn-l md:btn-xl border-0 bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] md:w-50",
                    children: "Send to me →",
                  }),
                  (0, s.jsx)(d.A, {
                    sitekey: "6LcFozcrAAAAAB9nUS1WeuilEhBld64y9gqmkHV7",
                    onChange: f,
                    onExpired: () => w(null),
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    5103: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { UseContext: () => r, default: () => a });
      var s = l(7876),
        n = l(4232);
      let r = (0, n.createContext)(null),
        a = (e) => {
          let { children: t } = e,
            [l, a] = (0, n.useState)(!1),
            [i, o] = (0, n.useState)(!1),
            [d, c] = (0, n.useState)(""),
            x = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              let e = () => {
                a(window.scrollY > 10);
              };
              return (
                window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
              );
            }, []),
            (0, s.jsx)(r.Provider, {
              value: {
                isScrolled: l,
                setIsScrolled: a,
                isMenuOpened: i,
                setIsMenuOpened: o,
                handleClickMenu: () => {
                  a(() => !0), o(() => !i), console.log(i);
                },
                checkboxRef: x,
                activeSection: d,
                scrollToSection: (e, t) => {
                  var l;
                  null == (l = t.current) ||
                    l.scrollIntoView({ behavior: "smooth" }),
                    c(e),
                    o(!1),
                    console.log("scroll to ".concat(e));
                  let s = window.menuCheckboxRef;
                  (null == s ? void 0 : s.current) && (s.current.checked = !1);
                },
              },
              children: t,
            })
          );
        };
    },
    5381: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { useRefStore: () => s });
      let s = (0, l(4232).createContext)({
        heroRef: { current: null },
        projectRef: { current: null },
        aboutRef: { current: null },
        contactRef: { current: null },
      });
    },
    6031: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => d });
      var s = l(7876),
        n = l(4587),
        r = l.n(n),
        a = l(6071),
        i = l(4232),
        o = l(5381);
      let d = () => {
        let { heroRef: e, contactRef: t } = (0, i.useContext)(o.useRefStore);
        return (0, s.jsxs)("section", {
          ref: e,
          className: " flex flex-col",
          children: [
            (0, s.jsx)(a.default, {
              text: "Hi! I’m Vivienne Gu ヅ",
              className:
                "pt-40 pb-25 md:pt-60 md:pb-20 font-extralight text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
              delay: 150,
              animationFrom: { opacity: 0, transform: "translate3d(0,50px,0)" },
              animationTo: { opacity: 1, transform: "translate3d(0,0,0)" },
              easing: "easeOutCubic",
              threshold: 0.2,
              rootMargin: "-50px",
              onLetterAnimationComplete: () => {
                console.log("All letters have animated!");
              },
            }),
            (0, s.jsxs)("div", {
              className:
                "animate-fade-in-up flex flex-col pb-20 text-center justify-center items-center md:text-6xl text-[2.6rem] font-[serif] font-extrabold",
              children: [
                (0, s.jsx)("p", {
                  className:
                    "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent leading-[2.5rem] md:leading-[3.5rem]",
                  children: "full stack developer",
                }),
                (0, s.jsx)("p", {
                  className: "leading-[2.5rem] md:leading-[3rem]",
                  children: "with a strong sense of",
                }),
                (0, s.jsx)("p", {
                  className:
                    "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent leading-[2.5rem] md:leading-[3.5rem]",
                  children: "ui/ux design",
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "text-sm md:text-xl items-center text-center",
              children: (0, s.jsx)("p", {
                className: "leading-[1.75rem] max-w-200",
                children:
                  "Skilled in Frontend (React, Next.js, Tailwind CSS), Backend (Node.js, Express), Database (MySQL, MongoDB), DevOps (Git, Docker), and UI Design.",
              }),
            }),
            (0, s.jsxs)("section", {
              className:
                "py-12 flex flex-col md:flex-row gap-2 md:gap-10 w-full justify-center",
              children: [
                (0, s.jsx)("button", {
                  onClick: () => {
                    var e;
                    null == (e = t.current) ||
                      e.scrollIntoView({ behavior: "smooth" }),
                      console.log("scroll to project");
                  },
                  className:
                    " btn btn-l md:btn-xl bg-gradient-to-r from-amber-500 to-orange-500 text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-full md:w-50 hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out",
                  children: "Contact me →",
                }),
                (0, s.jsx)("a", {
                  href: "/docs/VG_Resume.pdf",
                  download: "Vivienne_Resume",
                  children: (0, s.jsxs)("button", {
                    className:
                      "btn btn-l md:btn-xl text-[#FF8000] bg-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-full md:w-50 font-normal hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out",
                    children: [
                      "My Resume",
                      (0, s.jsx)(r(), {
                        src: "/download.jpg",
                        alt: "Download Icon",
                        width: 20,
                        height: 20,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    6071: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => a });
      var s = l(7876),
        n = l(1755),
        r = l(4232);
      let a = (e) => {
        let {
            text: t = "",
            className: l = "",
            delay: a = 100,
            animationFrom: i = {
              opacity: 0,
              transform: "translate3d(0,40px,0)",
            },
            animationTo: o = { opacity: 1, transform: "translate3d(0,0,0)" },
            easing: d = "easeOutCubic",
            threshold: c = 0.1,
            rootMargin: x = "-100px",
            textAlign: m = "center",
            onLetterAnimationComplete: u,
          } = e,
          h = t.split(" ").map((e) => e.split("")),
          g = h.flat(),
          [f, p] = (0, r.useState)(!1),
          j = (0, r.useRef)(),
          b = (0, r.useRef)(0);
        (0, r.useEffect)(() => {
          let e = new IntersectionObserver(
            (t) => {
              let [l] = t;
              l.isIntersecting && (p(!0), e.unobserve(j.current));
            },
            { threshold: c, rootMargin: x },
          );
          return e.observe(j.current), () => e.disconnect();
        }, [c, x]);
        let w = (0, n.mX)(
          g.length,
          g.map((e, t) => ({
            from: i,
            to: f
              ? async (e) => {
                  await e(o),
                    (b.current += 1),
                    b.current === g.length && u && u();
                }
              : i,
            delay: t * a,
            config: { easing: d },
          })),
        );
        return (0, s.jsx)("p", {
          ref: j,
          className: "split-parent ".concat(l),
          style: {
            textAlign: m,
            overflow: "hidden",
            display: "inline",
            whiteSpace: "normal",
            wordWrap: "break-word",
          },
          children: h.map((e, t) =>
            (0, s.jsxs)(
              "span",
              {
                style: { display: "inline-block", whiteSpace: "nowrap" },
                children: [
                  e.map((e, l) => {
                    let r = h.slice(0, t).reduce((e, t) => e + t.length, 0) + l;
                    return (0, s.jsx)(
                      n.CS.span,
                      {
                        style: {
                          ...w[r],
                          display: "inline-block",
                          willChange: "transform, opacity",
                        },
                        children: e,
                      },
                      r,
                    );
                  }),
                  (0, s.jsx)("span", {
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
    6760: (e, t, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return l(9306);
        },
      ]);
    },
    7682: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => a });
      var s = l(7876),
        n = l(4232),
        r = l(5103);
      let a = () => {
        let { handleClickMenu: e, checkboxRef: t } = (0, n.useContext)(
          r.UseContext,
        );
        return (
          (window.menuCheckboxRef = t),
          (0, s.jsxs)("section", {
            className: "flex  gap-5 md:pr-2 pr-4",
            children: [
              (0, s.jsxs)("label", {
                className:
                  "swap swap-rotate hover:scale-105 transition duration-200 ease-in-out",
                children: [
                  (0, s.jsx)("input", {
                    type: "checkbox",
                    className: "theme-controller",
                    value: "abyss",
                  }),
                  (0, s.jsx)("svg", {
                    className: "swap-off h-10 w-10 fill-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                      d: "M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z",
                    }),
                  }),
                  (0, s.jsx)("svg", {
                    className: "swap-on h-10 w-10 fill-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                      d: "M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z",
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("label", {
                className:
                  " lg:hidden btn btn-circle swap swap-rotate hover:scale-105 transition duration-200 ease-in-out",
                children: [
                  (0, s.jsx)("input", { type: "checkbox", ref: t }),
                  (0, s.jsx)("svg", {
                    onClick: e,
                    className: "swap-off fill-current ",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 512 512",
                    children: (0, s.jsx)("path", {
                      d: "M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z",
                    }),
                  }),
                  (0, s.jsx)("svg", {
                    onClick: e,
                    className: "swap-on fill-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 512 512",
                    children: (0, s.jsx)("polygon", {
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
    9192: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => a });
      var s = l(7876),
        n = l(4587),
        r = l.n(n);
      let a = () =>
        (0, s.jsxs)("section", {
          className: "flex flex-col items-center gap-5 pt-50 w-full",
          children: [
            (0, s.jsx)("div", {
              className:
                "text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem]",
              children: "What i do",
            }),
            (0, s.jsx)("div", {
              className:
                "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-4xl font-bold",
              children: "My Tools",
            }),
            (0, s.jsx)("div", {
              className: "",
              children: (0, s.jsx)("p", {
                className: "w-full max-w-150 text-center text-sm md:text-xl",
                children: "Explore the technologies and tools I use.",
              }),
            }),
            (0, s.jsxs)("section", {
              className:
                "py-4 gap-4  lg:gap-10 md:5 w-full grid grid-cols-2 md:grid-cols-4",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "bg-[#FBD5A5] text-[#001E29] w-full h-62 flex flex-col items-start justify-between p-5 md:p-3 rounded-xl",
                  children: [
                    (0, s.jsx)(r(), {
                      src: "/earth.jpg",
                      alt: "earth Icon",
                      width: 40,
                      height: 40,
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "font-medium text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem] ",
                      children: "Web design",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                      children:
                        "Web development is the process of building, programming...",
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] hover:scale-105 transition duration-200 ease-in-out cursor-pointer",
                      children: ["Read more →", " "],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "bg-[#FBD5A5] text-[#001E29] w-full h-62 flex flex-col items-start justify-between p-5 md:p-3 rounded-xl",
                  children: [
                    (0, s.jsx)(r(), {
                      src: "/earth.jpg",
                      alt: "earth Icon",
                      width: 40,
                      height: 40,
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "font-medium text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem] ",
                      children: "Web design",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] ",
                      children:
                        "Web development is the process of building, programming...",
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] hover:scale-105 transition duration-200 ease-in-out cursor-pointer",
                      children: ["Read more →", " "],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "bg-[#FBD5A5] text-[#001E29] w-full h-62 flex flex-col items-start justify-between p-5 md:p-3 rounded-xl",
                  children: [
                    (0, s.jsx)(r(), {
                      src: "/earth.jpg",
                      alt: "earth Icon",
                      width: 40,
                      height: 40,
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "font-medium text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem] ",
                      children: "Web design",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                      children:
                        "Web development is the process of building, programming...",
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] hover:scale-105 transition duration-200 ease-in-out cursor-pointer",
                      children: ["Read more →", " "],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "bg-[#FBD5A5] text-[#001E29] w-full h-62 flex flex-col items-start justify-between p-5 md:p-3 rounded-xl",
                  children: [
                    (0, s.jsx)(r(), {
                      src: "/earth.jpg",
                      alt: "earth Icon",
                      width: 40,
                      height: 40,
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "font-medium text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem] ",
                      children: "Web design",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                      children:
                        "Web development is the process of building, programming...",
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] hover:scale-105 transition duration-200 ease-in-out cursor-pointer",
                      children: ["Read more →", " "],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
    },
    9218: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => d });
      var s = l(7876),
        n = l(4587),
        r = l.n(n),
        a = l(4232),
        i = l(5103),
        o = l(5381);
      let d = () => {
        let { scrollToSection: e } = (0, a.useContext)(i.UseContext),
          { heroRef: t } = (0, a.useContext)(o.useRefStore);
        return (0, s.jsxs)("section", {
          className: "flex flex-col items-center gap-2 pt-10 w-full",
          children: [
            (0, s.jsxs)("div", {
              onClick: () => e("hero", t),
              className:
                "font-semibold text-2xl md:text-3xl leading-[2rem] md:leading-[2.25rem] cursor-pointer hover:scale-105 transition duration-200 ease-in-out",
              children: [
                "Vivienne ",
                (0, s.jsx)("span", {
                  className: "text-[#FF8000]",
                  children: ".",
                }),
              ],
            }),
            (0, s.jsxs)("section", {
              className:
                "flex gap-3 hover:scale-105 transition duration-200 ease-in-out",
              children: [
                (0, s.jsx)(r(), {
                  src: "/mailIcon.jpg",
                  alt: "mail Icon",
                  width: 32,
                  height: 23,
                }),
                (0, s.jsx)("a", {
                  href: "mailto:vivienne0528.gu@gmail.com",
                  className:
                    "cursor-pointer text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] ",
                  children: "vivienne0528.gu@gmail.com",
                }),
              ],
            }),
            (0, s.jsx)("div", { className: "h-px bg-[#FBD5A5] mt-5 w-full" }),
            (0, s.jsxs)("section", {
              className:
                "flex items-center justify-between w-full mb-3 text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
              children: [
                (0, s.jsx)("a", {
                  href: "mailto:vivienne0528.gu@gmail.com",
                  className:
                    "cursor-pointer hidden sm:block hover:scale-105 transition duration-200 ease-in-out",
                  children: "vivienne0528.gu@gmail.com",
                }),
                (0, s.jsxs)("section", {
                  className:
                    "sm:flex-row flex flex-col gap-5 sm:gap-12 w-full sm:w-auto mt-3 sm: justify-center items-center sm:justify-between",
                  children: [
                    (0, s.jsx)("a", {
                      href: "https://github.com/Vivienne0528",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "cursor-pointer hover:scale-105 transition duration-200 ease-in-out",
                      children: "Github",
                    }),
                    (0, s.jsx)("a", {
                      href: "https://www.linkedin.com/in/vivienne-gu-b691992b0/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "cursor-pointer hover:scale-105 transition duration-200 ease-in-out",
                      children: "Linkedin",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    9306: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => m });
      var s = l(7876),
        n = l(9218),
        r = l(5077),
        a = l(6031),
        i = l(2265),
        o = l(9875),
        d = l(9192),
        c = l(2637),
        x = l(5103);
      function m() {
        return (0, s.jsx)(x.default, {
          children: (0, s.jsxs)("section", {
            className:
              "w-full h-screen font-[Poppins] px-4 xl:px-20 lg:px-10 flex flex-col items-center m-auto max-w-[1280px] min-w-[375px]",
            children: [
              (0, s.jsx)(c.default, {}),
              (0, s.jsx)(a.default, {}),
              (0, s.jsx)(i.default, {}),
              (0, s.jsx)(d.default, {}),
              (0, s.jsx)(o.default, {}),
              (0, s.jsx)(r.default, {}),
              (0, s.jsx)(n.default, {}),
            ],
          }),
        });
      }
    },
    9875: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => i });
      var s = l(7876),
        n = l(4232),
        r = l(5381);
      let a = ["/figma.png", "/socially.png", "/pizza.png", "/portfolio.png"],
        i = () => {
          let { projectRef: e, contactRef: t } = (0, n.useContext)(
              r.useRefStore,
            ),
            [l, i] = (0, n.useState)(0);
          return (0, s.jsxs)("section", {
            ref: e,
            className: "flex flex-col items-center gap-5 pt-30",
            children: [
              (0, s.jsx)("div", {
                className:
                  "text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem]",
                children: "My portfolio",
              }),
              (0, s.jsx)("div", {
                className:
                  "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-4xl leading-[2.25rem] md:leading-[2.5rem] font-bold",
                children: "My latest work",
              }),
              (0, s.jsx)("p", {
                className:
                  "w-full max-w-200 text-center text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                children:
                  "Welcome to my full-stack web development portfolio! Explore a collection of projects showcasing my expertise in both front-end and back-end development, from intuitive user interfaces to robust server-side solutions.",
              }),
              (0, s.jsx)("section", {
                className: "carousel w-full",
                children: (0, s.jsxs)("div", {
                  className: "carousel-item relative w-full",
                  children: [
                    (0, s.jsx)("img", { src: a[l], className: "w-full" }),
                    (0, s.jsxs)("div", {
                      className:
                        "absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between",
                      children: [
                        (0, s.jsx)("button", {
                          onClick: () =>
                            i((e) => (e - 1 + a.length) % a.length),
                          className: "btn btn-circle",
                          children: "❮",
                        }),
                        (0, s.jsx)("button", {
                          onClick: () => i((e) => (e + 1) % a.length),
                          className: "btn btn-circle",
                          children: "❯",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("button", {
                onClick: () => {
                  var e;
                  null == (e = t.current) ||
                    e.scrollIntoView({ behavior: "smooth" }),
                    console.log("scroll to project");
                },
                className:
                  " btn btn-l md:btn-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-full md:w-50 mt-10",
                children: "Contact me →",
              }),
            ],
          });
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [587, 755, 408, 214, 636, 593, 792], () => t(6760)), (_N_E = e.O());
  },
]);
