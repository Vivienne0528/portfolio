module.exports = {
  "[externals]/react-dom [external] (react-dom, cjs)": function (
    __turbopack_context__,
  ) {
    var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x("react-dom", () =>
        require("react-dom"),
      );

      module.exports = mod;
    }
  },
  "[project]/src/pages/utils/UseContextProvider.jsx [ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        UseContext: () => UseContext,
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ =
        __turbopack_context__.i(
          "[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)",
        );
      var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ =
        __turbopack_context__.i("[externals]/react [external] (react, cjs)");
      const UseContext = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
        "createContext"
      ])(null);
      const UseContextProvider = ({ children }) => {
        const [isScrolled, setIsScrolled] = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useState"
        ])(false);
        const [isMenuOpened, setIsMenuOpened] = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useState"
        ])(false);
        const [activeSection, setActiveSection] = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useState"
        ])("");
        const checkboxRef = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useRef"
        ])(null);
        (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useEffect"
        ])(() => {
          const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
          };
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
        }, []);
        const handleClickMenu = () => {
          setIsScrolled(() => true);
          setIsMenuOpened(() => !isMenuOpened);
          console.log(isMenuOpened);
        };
        const scrollToSection = (section, ref) => {
          ref.current?.scrollIntoView({
            behavior: "smooth",
          });
          setActiveSection(section); // 设置当前激活的按钮
          setIsMenuOpened(false);
          console.log(`scroll to ${section}`);
          const checkbox = window.menuCheckboxRef;
          if (checkbox?.current) {
            checkbox.current.checked = false;
          }
        };
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
          "jsxDEV"
        ])(
          UseContext.Provider,
          {
            value: {
              isScrolled,
              setIsScrolled,
              isMenuOpened,
              setIsMenuOpened,
              handleClickMenu,
              checkboxRef,
              activeSection,
              scrollToSection,
            },
            children: children,
          },
          void 0,
          false,
          {
            fileName: "[project]/src/pages/utils/UseContextProvider.jsx",
            lineNumber: 37,
            columnNumber: 5,
          },
          this,
        );
      };
      const __TURBOPACK__default__export__ = UseContextProvider;
    }
  },
  "[project]/src/hooks/useRefStore.jsx [ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        useRefStore: () => useRefStore,
      });
      var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ =
        __turbopack_context__.i("[externals]/react [external] (react, cjs)");
      // interface RefStore {
      //   heroRef: RefObject<HTMLDivElement>;
      //   projectRef: RefObject<HTMLDivElement>;
      //   aboutRef: RefObject<HTMLDivElement>;
      //   contactRef: RefObject<HTMLDivElement>;
      // }
      // 创建默认上下文值
      const defaultRefStore = {
        heroRef: {
          current: null,
        },
        projectRef: {
          current: null,
        },
        aboutRef: {
          current: null,
        },
        contactRef: {
          current: null,
        },
      };
      const useRefStore = /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
        "createContext"
      ])(defaultRefStore);
    }
  },
  "[project]/src/pages/components/Bottom.jsx [ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ =
        __turbopack_context__.i(
          "[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/next/image.js [ssr] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ =
        __turbopack_context__.i("[externals]/react [external] (react, cjs)");
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$utils$2f$UseContextProvider$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/src/pages/utils/UseContextProvider.jsx [ssr] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRefStore$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/src/hooks/useRefStore.jsx [ssr] (ecmascript)",
        );
      const Bottom = () => {
        const { scrollToSection } = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useContext"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$utils$2f$UseContextProvider$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
            "UseContext"
          ],
        );
        const { heroRef } = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useContext"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRefStore$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
            "useRefStore"
          ],
        );
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
          "jsxDEV"
        ])(
          "section",
          {
            className: "flex flex-col items-center gap-2 pt-10 w-full",
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  onClick: () => scrollToSection("hero", heroRef),
                  className:
                    "font-semibold text-2xl md:text-3xl leading-[2rem] md:leading-[2.25rem] cursor-pointer hover:scale-105 transition duration-200 ease-in-out",
                  children: [
                    "Vivienne ",
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      "span",
                      {
                        className: "text-[#FF8000]",
                        children: ".",
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/pages/components/Bottom.jsx",
                        lineNumber: 15,
                        columnNumber: 18,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: "[project]/src/pages/components/Bottom.jsx",
                  lineNumber: 11,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "section",
                {
                  className:
                    "flex gap-3 hover:scale-105 transition duration-200 ease-in-out",
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__[
                        "default"
                      ],
                      {
                        src: "/mailIcon.jpg",
                        alt: "mail Icon",
                        width: 32,
                        height: 23,
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/pages/components/Bottom.jsx",
                        lineNumber: 18,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      "a",
                      {
                        href: "mailto:vivienne0528.gu@gmail.com",
                        className:
                          "cursor-pointer text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] ",
                        children: "vivienne0528.gu@gmail.com",
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/pages/components/Bottom.jsx",
                        lineNumber: 19,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: "[project]/src/pages/components/Bottom.jsx",
                  lineNumber: 17,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className: "h-px bg-[#FBD5A5] mt-5 w-full",
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/pages/components/Bottom.jsx",
                  lineNumber: 26,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "section",
                {
                  className:
                    "flex items-center justify-between w-full mb-3 text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      "a",
                      {
                        href: "mailto:vivienne0528.gu@gmail.com",
                        className:
                          "cursor-pointer hidden sm:block hover:scale-105 transition duration-200 ease-in-out",
                        children: "vivienne0528.gu@gmail.com",
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/pages/components/Bottom.jsx",
                        lineNumber: 29,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      "section",
                      {
                        className:
                          "sm:flex-row flex flex-col gap-5 sm:gap-12 w-full sm:w-auto mt-3 sm: justify-center items-center sm:justify-between",
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            "a",
                            {
                              href: "https://github.com/Vivienne0528",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "cursor-pointer hover:scale-105 transition duration-200 ease-in-out",
                              children: "Github",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/pages/components/Bottom.jsx",
                              lineNumber: 36,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            "a",
                            {
                              href: "https://www.linkedin.com/in/vivienne-gu-b691992b0/",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "cursor-pointer hover:scale-105 transition duration-200 ease-in-out",
                              children: "Linkedin",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/pages/components/Bottom.jsx",
                              lineNumber: 44,
                              columnNumber: 11,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: "[project]/src/pages/components/Bottom.jsx",
                        lineNumber: 35,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: "[project]/src/pages/components/Bottom.jsx",
                  lineNumber: 28,
                  columnNumber: 7,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/pages/components/Bottom.jsx",
            lineNumber: 10,
            columnNumber: 5,
          },
          this,
        );
      };
      const __TURBOPACK__default__export__ = Bottom;
    }
  },
  "[externals]/yup [external] (yup, cjs)": function (__turbopack_context__) {
    var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
    {
      const mod = __turbopack_context__.x("yup", () => require("yup"));

      module.exports = mod;
    }
  },
  "[project]/src/hooks/useAuth.jsx [ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var { g: global, __dirname } = __turbopack_context__;
    {
      // src/utils/useAuth.tsx
      __turbopack_context__.s({
        useAuth: () => useAuth,
      });
      var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ =
        __turbopack_context__.i("[externals]/react [external] (react, cjs)");
      var __TURBOPACK__imported__module__$5b$externals$5d2f$yup__$5b$external$5d$__$28$yup$2c$__cjs$29$__ =
        __turbopack_context__.i("[externals]/yup [external] (yup, cjs)");
      const useAuth = () => {
        const [successMessage, setSuccessMessage] = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useState"
        ])("");
        const [errorMessage, setErrorMessage] = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useState"
        ])("");
        const [captchaToken, setCaptchaToken] = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useState"
        ])(null);
        const [isCoolDown, setIsCoolDown] = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useState"
        ])(false);
        const [coolDownMessage, setCoolDownMessage] = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useState"
        ])("");
        const [coolDownSeconds, setCoolDownSeconds] = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useState"
        ])(30);
        let myInterval;
        function onChange(value) {
          setCaptchaToken(value);
        }
        const showInterval = () => {
          setCoolDownSeconds((prev) => {
            if (prev <= 1) {
              setIsCoolDown(false);
              setCoolDownMessage("");
              console.log(prev);
              return 0;
              ("TURBOPACK unreachable");
            }
            setCoolDownMessage(
              `⏳ Please wait ${prev - 1} seconds before sending another message.`,
            );
            return prev - 1;
          });
        };
        const schema = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$yup__$5b$external$5d$__$28$yup$2c$__cjs$29$__[
          "object"
        ])()
          .shape({
            email: (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$yup__$5b$external$5d$__$28$yup$2c$__cjs$29$__[
              "string"
            ])()
              .email(
                "Please enter a valid email address (e.g., user@example.com).",
              )
              .required("Please enter your email address."),
            name: (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$yup__$5b$external$5d$__$28$yup$2c$__cjs$29$__[
              "string"
            ])().required("Please enter your name."),
            message: (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$yup__$5b$external$5d$__$28$yup$2c$__cjs$29$__[
              "string"
            ])().required("Please enter your message."),
          })
          .required();
        const messageSubmit = async ({ name, email, message }) => {
          setCoolDownSeconds(30);
          if (isCoolDown) {
            setCoolDownMessage(
              `⏳ Please wait ${coolDownSeconds} seconds before sending another message.`,
            );
            return;
          }
          setErrorMessage("");
          setSuccessMessage("");
          try {
            const res = await fetch("/api/contact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
                message,
              }),
            });
            if (res.ok) {
              setIsCoolDown(true);
              const myTimeout = setTimeout(() => {
                setIsCoolDown(false);
                setCoolDownMessage("");
              }, 30000);
              setSuccessMessage("✅ Message sent successfully!");
              clearTimeout(myTimeout);
              setErrorMessage("");
              myInterval = setInterval(showInterval, 1000);
            } else {
              throw new Error("Server responded with an error.");
            }
          } catch (error) {
            console.log(error);
            setErrorMessage(
              "❌ Failed to send message. Please try again later.",
            );
            setSuccessMessage("");
          }
        };
        return {
          messageSubmit,
          schema,
          successMessage,
          errorMessage,
          captchaToken,
          setCaptchaToken,
          onChange,
          setSuccessMessage,
          isCoolDown,
          coolDownMessage,
        };
      };
    }
  },
  "[externals]/@hookform/resolvers/yup [external] (@hookform/resolvers/yup, esm_import)":
    (__turbopack_context__) => {
      "use strict";

      var {
        g: global,
        __dirname,
        a: __turbopack_async_module__,
      } = __turbopack_context__;
      __turbopack_async_module__(
        async (
          __turbopack_handle_async_dependencies__,
          __turbopack_async_result__,
        ) => {
          try {
            const mod = await __turbopack_context__.y(
              "@hookform/resolvers/yup",
            );

            __turbopack_context__.n(mod);
            __turbopack_async_result__();
          } catch (e) {
            __turbopack_async_result__(e);
          }
        },
        true,
      );
    },
  "[externals]/react-hook-form [external] (react-hook-form, esm_import)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var {
      g: global,
      __dirname,
      a: __turbopack_async_module__,
    } = __turbopack_context__;
    __turbopack_async_module__(
      async (
        __turbopack_handle_async_dependencies__,
        __turbopack_async_result__,
      ) => {
        try {
          const mod = await __turbopack_context__.y("react-hook-form");

          __turbopack_context__.n(mod);
          __turbopack_async_result__();
        } catch (e) {
          __turbopack_async_result__(e);
        }
      },
      true,
    );
  },
  "[externals]/react-google-recaptcha [external] (react-google-recaptcha, cjs)":
    function (__turbopack_context__) {
      var {
        g: global,
        __dirname,
        m: module,
        e: exports,
      } = __turbopack_context__;
      {
        const mod = __turbopack_context__.x("react-google-recaptcha", () =>
          require("react-google-recaptcha"),
        );

        module.exports = mod;
      }
    },
  "[project]/src/pages/components/GetInTouch.jsx [ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var {
      g: global,
      __dirname,
      a: __turbopack_async_module__,
    } = __turbopack_context__;
    __turbopack_async_module__(
      async (
        __turbopack_handle_async_dependencies__,
        __turbopack_async_result__,
      ) => {
        try {
          __turbopack_context__.s({
            default: () => __TURBOPACK__default__export__,
          });
          var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ =
            __turbopack_context__.i(
              "[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)",
            );
          var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ =
            __turbopack_context__.i(
              "[externals]/react [external] (react, cjs)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRefStore$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/hooks/useRefStore.jsx [ssr] (ecmascript)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/hooks/useAuth.jsx [ssr] (ecmascript)",
            );
          var __TURBOPACK__imported__module__$5b$externals$5d2f40$hookform$2f$resolvers$2f$yup__$5b$external$5d$__$2840$hookform$2f$resolvers$2f$yup$2c$__esm_import$29$__ =
            __turbopack_context__.i(
              "[externals]/@hookform/resolvers/yup [external] (@hookform/resolvers/yup, esm_import)",
            );
          var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hook$2d$form__$5b$external$5d$__$28$react$2d$hook$2d$form$2c$__esm_import$29$__ =
            __turbopack_context__.i(
              "[externals]/react-hook-form [external] (react-hook-form, esm_import)",
            );
          var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$google$2d$recaptcha__$5b$external$5d$__$28$react$2d$google$2d$recaptcha$2c$__cjs$29$__ =
            __turbopack_context__.i(
              "[externals]/react-google-recaptcha [external] (react-google-recaptcha, cjs)",
            );
          var __turbopack_async_dependencies__ =
            __turbopack_handle_async_dependencies__([
              __TURBOPACK__imported__module__$5b$externals$5d2f40$hookform$2f$resolvers$2f$yup__$5b$external$5d$__$2840$hookform$2f$resolvers$2f$yup$2c$__esm_import$29$__,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hook$2d$form__$5b$external$5d$__$28$react$2d$hook$2d$form$2c$__esm_import$29$__,
            ]);
          [
            __TURBOPACK__imported__module__$5b$externals$5d2f40$hookform$2f$resolvers$2f$yup__$5b$external$5d$__$2840$hookform$2f$resolvers$2f$yup$2c$__esm_import$29$__,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hook$2d$form__$5b$external$5d$__$28$react$2d$hook$2d$form$2c$__esm_import$29$__,
          ] = __turbopack_async_dependencies__.then
            ? (await __turbopack_async_dependencies__)()
            : __turbopack_async_dependencies__;
          const GetInTouch = () => {
            const { contactRef } = (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
              "useContext"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRefStore$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
                "useRefStore"
              ],
            );
            const {
              schema,
              messageSubmit,
              successMessage,
              setSuccessMessage,
              errorMessage,
              onChange,
              captchaToken,
              isCoolDown,
              coolDownMessage,
              setCaptchaToken,
            } = (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
              "useAuth"
            ])();
            const {
              register,
              handleSubmit,
              formState: { errors },
            } = (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$hook$2d$form__$5b$external$5d$__$28$react$2d$hook$2d$form$2c$__esm_import$29$__[
              "useForm"
            ])({
              resolver: (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f40$hookform$2f$resolvers$2f$yup__$5b$external$5d$__$2840$hookform$2f$resolvers$2f$yup$2c$__esm_import$29$__[
                "yupResolver"
              ])(schema),
            });
            (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
              "useEffect"
            ])(() => {
              if (!captchaToken) {
                setSuccessMessage("");
              }
            });
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
              "jsxDEV"
            ])(
              "section",
              {
                ref: contactRef,
                className:
                  "bg-[#FBD5A5] text-[#001E29] flex flex-col items-center gap-4 mt-50 p-4  w-full rounded-xl",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className:
                        "text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem]",
                      children: "Connect with me",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/pages/components/GetInTouch.jsx",
                      lineNumber: 41,
                      columnNumber: 7,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className:
                        "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-4xl font-bold leading-[2.25rem] md:leading-[2.5rem]",
                      children: "Get in touch",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/pages/components/GetInTouch.jsx",
                      lineNumber: 44,
                      columnNumber: 7,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                    "jsxDEV"
                  ])(
                    "form",
                    {
                      onSubmit: handleSubmit(messageSubmit),
                      className:
                        "gap-5 flex flex-col items-center text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "p",
                          {
                            className: "text-center",
                            children:
                              "I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.",
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/pages/components/GetInTouch.jsx",
                            lineNumber: 52,
                            columnNumber: 9,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className: "flex gap-5 h-10 w-full",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                "jsxDEV"
                              ])(
                                "input",
                                {
                                  type: "text",
                                  placeholder: "Enter your name",
                                  ...register("name", {
                                    required: true,
                                  }),
                                  className:
                                    "input bg-white text-[#001E29] rounded-[5px] w-full",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/src/pages/components/GetInTouch.jsx",
                                  lineNumber: 58,
                                  columnNumber: 11,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                "jsxDEV"
                              ])(
                                "input",
                                {
                                  id: "email",
                                  type: "email",
                                  placeholder: "Enter your email",
                                  ...register("email", {
                                    required: true,
                                  }),
                                  className:
                                    "input bg-white text-[#001E29] rounded-[5px] w-full",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/src/pages/components/GetInTouch.jsx",
                                  lineNumber: 64,
                                  columnNumber: 11,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/src/pages/components/GetInTouch.jsx",
                            lineNumber: 57,
                            columnNumber: 9,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "textarea",
                          {
                            className:
                              "textarea bg-white text-[#001E29] rounded-[5px] w-full h-50",
                            placeholder: "Enter your message",
                            ...register("message", {
                              required: true,
                            }),
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/pages/components/GetInTouch.jsx",
                            lineNumber: 72,
                            columnNumber: 9,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className:
                              "text-red-600 font-extrabold text-[14px] flex flex-col justify-center items-center",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                "jsxDEV"
                              ])(
                                "p",
                                {
                                  children: errors.name?.message,
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/src/pages/components/GetInTouch.jsx",
                                  lineNumber: 78,
                                  columnNumber: 11,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                "jsxDEV"
                              ])(
                                "p",
                                {
                                  children: errors.email?.message,
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/src/pages/components/GetInTouch.jsx",
                                  lineNumber: 79,
                                  columnNumber: 11,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                "jsxDEV"
                              ])(
                                "p",
                                {
                                  children: errors.message?.message,
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/src/pages/components/GetInTouch.jsx",
                                  lineNumber: 80,
                                  columnNumber: 11,
                                },
                                this,
                              ),
                              successMessage &&
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                  "jsxDEV"
                                ])(
                                  "p",
                                  {
                                    className: "text-green-600",
                                    children: successMessage,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/src/pages/components/GetInTouch.jsx",
                                    lineNumber: 81,
                                    columnNumber: 30,
                                  },
                                  this,
                                ),
                              errorMessage &&
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                  "jsxDEV"
                                ])(
                                  "p",
                                  {
                                    children: errorMessage,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/src/pages/components/GetInTouch.jsx",
                                    lineNumber: 82,
                                    columnNumber: 28,
                                  },
                                  this,
                                ),
                              !captchaToken &&
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                  "jsxDEV"
                                ])(
                                  "p",
                                  {
                                    children:
                                      " Please complete the CAPTCHA verification.",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/src/pages/components/GetInTouch.jsx",
                                    lineNumber: 83,
                                    columnNumber: 29,
                                  },
                                  this,
                                ),
                              isCoolDown &&
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                  "jsxDEV"
                                ])(
                                  "p",
                                  {
                                    children: coolDownMessage,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/src/pages/components/GetInTouch.jsx",
                                    lineNumber: 84,
                                    columnNumber: 26,
                                  },
                                  this,
                                ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/src/pages/components/GetInTouch.jsx",
                            lineNumber: 77,
                            columnNumber: 9,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "button",
                          {
                            disabled: !captchaToken || isCoolDown,
                            id: "submit",
                            className:
                              "w-full btn btn-l md:btn-xl border-0 bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] md:w-50",
                            children: "Send to me →",
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/pages/components/GetInTouch.jsx",
                            lineNumber: 87,
                            columnNumber: 9,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$google$2d$recaptcha__$5b$external$5d$__$28$react$2d$google$2d$recaptcha$2c$__cjs$29$__[
                            "default"
                          ],
                          {
                            sitekey: "6LcFozcrAAAAAB9nUS1WeuilEhBld64y9gqmkHV7",
                            onChange: onChange,
                            onExpired: () => setCaptchaToken(null),
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/pages/components/GetInTouch.jsx",
                            lineNumber: 94,
                            columnNumber: 9,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/src/pages/components/GetInTouch.jsx",
                      lineNumber: 48,
                      columnNumber: 7,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/pages/components/GetInTouch.jsx",
                lineNumber: 37,
                columnNumber: 5,
              },
              this,
            );
          };
          const __TURBOPACK__default__export__ = GetInTouch;
          __turbopack_async_result__();
        } catch (e) {
          __turbopack_async_result__(e);
        }
      },
      false,
    );
  },
  "[externals]/@react-spring/web [external] (@react-spring/web, esm_import)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var {
      g: global,
      __dirname,
      a: __turbopack_async_module__,
    } = __turbopack_context__;
    __turbopack_async_module__(
      async (
        __turbopack_handle_async_dependencies__,
        __turbopack_async_result__,
      ) => {
        try {
          const mod = await __turbopack_context__.y("@react-spring/web");

          __turbopack_context__.n(mod);
          __turbopack_async_result__();
        } catch (e) {
          __turbopack_async_result__(e);
        }
      },
      true,
    );
  },
  "[project]/src/pages/utils/SplitText.jsx [ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var {
      g: global,
      __dirname,
      a: __turbopack_async_module__,
    } = __turbopack_context__;
    __turbopack_async_module__(
      async (
        __turbopack_handle_async_dependencies__,
        __turbopack_async_result__,
      ) => {
        try {
          __turbopack_context__.s({
            default: () => __TURBOPACK__default__export__,
          });
          var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ =
            __turbopack_context__.i(
              "[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)",
            );
          var __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$spring$2f$web__$5b$external$5d$__$2840$react$2d$spring$2f$web$2c$__esm_import$29$__ =
            __turbopack_context__.i(
              "[externals]/@react-spring/web [external] (@react-spring/web, esm_import)",
            );
          var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ =
            __turbopack_context__.i(
              "[externals]/react [external] (react, cjs)",
            );
          var __turbopack_async_dependencies__ =
            __turbopack_handle_async_dependencies__([
              __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$spring$2f$web__$5b$external$5d$__$2840$react$2d$spring$2f$web$2c$__esm_import$29$__,
            ]);
          [
            __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$spring$2f$web__$5b$external$5d$__$2840$react$2d$spring$2f$web$2c$__esm_import$29$__,
          ] = __turbopack_async_dependencies__.then
            ? (await __turbopack_async_dependencies__)()
            : __turbopack_async_dependencies__;
          const SplitText = ({
            text = "",
            className = "",
            delay = 100,
            animationFrom = {
              opacity: 0,
              transform: "translate3d(0,40px,0)",
            },
            animationTo = {
              opacity: 1,
              transform: "translate3d(0,0,0)",
            },
            easing = "easeOutCubic",
            threshold = 0.1,
            rootMargin = "-100px",
            textAlign = "center",
            onLetterAnimationComplete,
          }) => {
            const words = text.split(" ").map((word) => word.split(""));
            const letters = words.flat();
            const [inView, setInView] = (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
              "useState"
            ])(false);
            const ref = (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
              "useRef"
            ])();
            const animatedCount = (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
              "useRef"
            ])(0);
            (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
              "useEffect"
            ])(() => {
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current);
                  }
                },
                {
                  threshold,
                  rootMargin,
                },
              );
              observer.observe(ref.current);
              return () => observer.disconnect();
            }, [threshold, rootMargin]);
            const springs = (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$spring$2f$web__$5b$external$5d$__$2840$react$2d$spring$2f$web$2c$__esm_import$29$__[
              "useSprings"
            ])(
              letters.length,
              letters.map((_, i) => ({
                from: animationFrom,
                to: inView
                  ? async (next) => {
                      await next(animationTo);
                      animatedCount.current += 1;
                      if (
                        animatedCount.current === letters.length &&
                        onLetterAnimationComplete
                      ) {
                        onLetterAnimationComplete();
                      }
                    }
                  : animationFrom,
                delay: i * delay,
                config: {
                  easing,
                },
              })),
            );
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
              "jsxDEV"
            ])(
              "p",
              {
                ref: ref,
                className: `split-parent ${className}`,
                style: {
                  textAlign,
                  overflow: "hidden",
                  display: "inline",
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                },
                children: words.map((word, wordIndex) =>
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                    "jsxDEV"
                  ])(
                    "span",
                    {
                      style: {
                        display: "inline-block",
                        whiteSpace: "nowrap",
                      },
                      children: [
                        word.map((letter, letterIndex) => {
                          const index =
                            words
                              .slice(0, wordIndex)
                              .reduce((acc, w) => acc + w.length, 0) +
                            letterIndex;
                          return /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$externals$5d2f40$react$2d$spring$2f$web__$5b$external$5d$__$2840$react$2d$spring$2f$web$2c$__esm_import$29$__[
                              "animated"
                            ].span,
                            {
                              style: {
                                ...springs[index],
                                display: "inline-block",
                                willChange: "transform, opacity",
                              },
                              children: letter,
                            },
                            index,
                            false,
                            {
                              fileName:
                                "[project]/src/pages/utils/SplitText.jsx",
                              lineNumber: 83,
                              columnNumber: 15,
                            },
                            this,
                          );
                        }),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "span",
                          {
                            style: {
                              display: "inline-block",
                              width: "0.3em",
                            },
                            children: " ",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/pages/utils/SplitText.jsx",
                            lineNumber: 95,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    wordIndex,
                    true,
                    {
                      fileName: "[project]/src/pages/utils/SplitText.jsx",
                      lineNumber: 73,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/src/pages/utils/SplitText.jsx",
                lineNumber: 61,
                columnNumber: 5,
              },
              this,
            );
          };
          const __TURBOPACK__default__export__ = SplitText;
          __turbopack_async_result__();
        } catch (e) {
          __turbopack_async_result__(e);
        }
      },
      false,
    );
  },
  "[project]/src/pages/components/Hero.jsx [ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var {
      g: global,
      __dirname,
      a: __turbopack_async_module__,
    } = __turbopack_context__;
    __turbopack_async_module__(
      async (
        __turbopack_handle_async_dependencies__,
        __turbopack_async_result__,
      ) => {
        try {
          __turbopack_context__.s({
            default: () => __TURBOPACK__default__export__,
          });
          var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ =
            __turbopack_context__.i(
              "[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/node_modules/next/image.js [ssr] (ecmascript)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$utils$2f$SplitText$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/pages/utils/SplitText.jsx [ssr] (ecmascript)",
            );
          var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ =
            __turbopack_context__.i(
              "[externals]/react [external] (react, cjs)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRefStore$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/hooks/useRefStore.jsx [ssr] (ecmascript)",
            );
          var __turbopack_async_dependencies__ =
            __turbopack_handle_async_dependencies__([
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$utils$2f$SplitText$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
            ]);
          [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$utils$2f$SplitText$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
          ] = __turbopack_async_dependencies__.then
            ? (await __turbopack_async_dependencies__)()
            : __turbopack_async_dependencies__;
          const Hero = () => {
            const handleAnimationComplete = () => {
              console.log("All letters have animated!");
            };
            const { heroRef, contactRef } = (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
              "useContext"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRefStore$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
                "useRefStore"
              ],
            );
            const scrollToContact = () => {
              contactRef.current?.scrollIntoView({
                behavior: "smooth",
              });
              console.log("scroll to project");
            };
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
              "jsxDEV"
            ])(
              "section",
              {
                ref: heroRef,
                className: " flex flex-col",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$utils$2f$SplitText$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
                      "default"
                    ],
                    {
                      text: "Hi! I’m Vivienne Gu ヅ",
                      className:
                        "pt-40 pb-25 md:pt-60 md:pb-20 font-extralight text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                      delay: 150,
                      animationFrom: {
                        opacity: 0,
                        transform: "translate3d(0,50px,0)",
                      },
                      animationTo: {
                        opacity: 1,
                        transform: "translate3d(0,0,0)",
                      },
                      easing: "easeOutCubic",
                      threshold: 0.2,
                      rootMargin: "-50px",
                      onLetterAnimationComplete: handleAnimationComplete,
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/pages/components/Hero.jsx",
                      lineNumber: 18,
                      columnNumber: 7,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className:
                        "animate-fade-in-up flex flex-col pb-20 text-center justify-center items-center md:text-6xl text-[2.6rem] font-[serif] font-extrabold",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "p",
                          {
                            className:
                              "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent leading-[2.5rem] md:leading-[3.5rem]",
                            children: "full stack developer",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/pages/components/Hero.jsx",
                            lineNumber: 30,
                            columnNumber: 9,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "p",
                          {
                            className: "leading-[2.5rem] md:leading-[3rem]",
                            children: "with a strong sense of",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/pages/components/Hero.jsx",
                            lineNumber: 33,
                            columnNumber: 9,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "p",
                          {
                            className:
                              "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent leading-[2.5rem] md:leading-[3.5rem]",
                            children: "ui/ux design",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/pages/components/Hero.jsx",
                            lineNumber: 36,
                            columnNumber: 9,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/src/pages/components/Hero.jsx",
                      lineNumber: 29,
                      columnNumber: 7,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "text-sm md:text-xl items-center text-center",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                        "jsxDEV"
                      ])(
                        "p",
                        {
                          className: "leading-[1.75rem] max-w-200",
                          children:
                            "Skilled in Frontend (React, Next.js, Tailwind CSS), Backend (Node.js, Express), Database (MySQL, MongoDB), DevOps (Git, Docker), and UI Design.",
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/pages/components/Hero.jsx",
                          lineNumber: 41,
                          columnNumber: 9,
                        },
                        this,
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/pages/components/Hero.jsx",
                      lineNumber: 40,
                      columnNumber: 7,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                    "jsxDEV"
                  ])(
                    "section",
                    {
                      className:
                        "py-12 flex flex-col md:flex-row gap-2 md:gap-10 w-full justify-center",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "button",
                          {
                            onClick: scrollToContact,
                            className:
                              " btn btn-l md:btn-xl bg-gradient-to-r from-amber-500 to-orange-500 text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-full md:w-50 hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out",
                            children: "Contact me →",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/pages/components/Hero.jsx",
                            lineNumber: 49,
                            columnNumber: 9,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "a",
                          {
                            href: "/docs/VG_Resume.pdf",
                            download: "Vivienne_Resume",
                            children: /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                              "jsxDEV"
                            ])(
                              "button",
                              {
                                className:
                                  "btn btn-l md:btn-xl text-[#FF8000] bg-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-full md:w-50 font-normal hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out",
                                children: [
                                  "My Resume",
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                    "jsxDEV"
                                  ])(
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__[
                                      "default"
                                    ],
                                    {
                                      src: "/download.jpg",
                                      alt: "Download Icon",
                                      width: 20,
                                      height: 20,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/src/pages/components/Hero.jsx",
                                      lineNumber: 58,
                                      columnNumber: 13,
                                    },
                                    this,
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/src/pages/components/Hero.jsx",
                                lineNumber: 56,
                                columnNumber: 11,
                              },
                              this,
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/pages/components/Hero.jsx",
                            lineNumber: 55,
                            columnNumber: 9,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/src/pages/components/Hero.jsx",
                      lineNumber: 48,
                      columnNumber: 7,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/pages/components/Hero.jsx",
                lineNumber: 17,
                columnNumber: 5,
              },
              this,
            );
          };
          const __TURBOPACK__default__export__ = Hero;
          __turbopack_async_result__();
        } catch (e) {
          __turbopack_async_result__(e);
        }
      },
      false,
    );
  },
  "[project]/src/pages/components/Intro.tsx [ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ =
        __turbopack_context__.i(
          "[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/next/image.js [ssr] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRefStore$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/src/hooks/useRefStore.jsx [ssr] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ =
        __turbopack_context__.i("[externals]/react [external] (react, cjs)");
      const Intro = () => {
        const { aboutRef } = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useContext"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRefStore$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
            "useRefStore"
          ],
        );
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
          "jsxDEV"
        ])(
          "section",
          {
            ref: aboutRef,
            className: "flex flex-col items-center gap-5 pt-25",
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className:
                    "text-xl leading-[1.75rem] md:leading-[2rem] md:text-2xl",
                  children: "Introduction",
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/pages/components/Intro.tsx",
                  lineNumber: 8,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className:
                    "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl leading-[2.25rem] md:text-4xl md:leading-[2.5rem] mb-5 font-bold",
                  children: "About me",
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/pages/components/Intro.tsx",
                  lineNumber: 11,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "section",
                {
                  className:
                    "flex flex-col md:flex-row gap-5 lg:gap-10 items-center md:items-start justify-center",
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      "img",
                      {
                        src: "/businessCard.png",
                        alt: "business card",
                        className:
                          "w-full h-80 object-cover object-[0%_40%] md:w-[40%] md:h-auto lg:w-85 rounded-xl",
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/pages/components/Intro.tsx",
                        lineNumber: 15,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      "section",
                      {
                        className: "flex flex-col",
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            "p",
                            {
                              className:
                                "font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                              children:
                                "I'm a curious builder who turns ideas into interactive web experiences. With a year of full-stack experience using Next.js, React, and more, I love crafting clean, scalable code that feels as smooth as it looks. Always learning, always coding — let's create something awesome.",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/pages/components/Intro.tsx",
                              lineNumber: 22,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            "section",
                            {
                              className:
                                "flex justify-between gap-4 lg:gap-10 py-4 text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className:
                                      "bg-[#FBD5A5] w-full h-50 flex flex-col items-start justify-between p-3 rounded-xl text-[#001E29]",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__[
                                          "default"
                                        ],
                                        {
                                          src: "/darkIcon.jpg",
                                          alt: "dark icon",
                                          width: 30,
                                          height: 30,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/pages/components/Intro.tsx",
                                          lineNumber: 32,
                                          columnNumber: 15,
                                        },
                                        this,
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                        "jsxDEV"
                                      ])(
                                        "section",
                                        {
                                          className: " font-bold",
                                          children: /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              children:
                                                "HTML, CSS, JavaScript, React Js, Next Js ",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/src/pages/components/Intro.tsx",
                                              lineNumber: 39,
                                              columnNumber: 17,
                                            },
                                            this,
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/pages/components/Intro.tsx",
                                          lineNumber: 38,
                                          columnNumber: 15,
                                        },
                                        this,
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                        "jsxDEV"
                                      ])(
                                        "div",
                                        {
                                          className: "font-extralight",
                                          children: "Languages",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/pages/components/Intro.tsx",
                                          lineNumber: 41,
                                          columnNumber: 15,
                                        },
                                        this,
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      "[project]/src/pages/components/Intro.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className:
                                      " bg-[#FBD5A5] w-full h-50 flex flex-col items-start justify-between p-3 rounded-xl text-[#001E29]",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__[
                                          "default"
                                        ],
                                        {
                                          src: "/educationIcon.jpg",
                                          alt: "education icon",
                                          width: 30,
                                          height: 30,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/pages/components/Intro.tsx",
                                          lineNumber: 44,
                                          columnNumber: 15,
                                        },
                                        this,
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                        "jsxDEV"
                                      ])(
                                        "section",
                                        {
                                          className: "font-bold",
                                          children: /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              children:
                                                "Master's degree in IT from Uni of Melbourne ",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/src/pages/components/Intro.tsx",
                                              lineNumber: 51,
                                              columnNumber: 17,
                                            },
                                            this,
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/pages/components/Intro.tsx",
                                          lineNumber: 50,
                                          columnNumber: 15,
                                        },
                                        this,
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                        "jsxDEV"
                                      ])(
                                        "div",
                                        {
                                          className: "font-extralight",
                                          children: "Education",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/pages/components/Intro.tsx",
                                          lineNumber: 53,
                                          columnNumber: 15,
                                        },
                                        this,
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      "[project]/src/pages/components/Intro.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className:
                                      "bg-[#FBD5A5] w-full h-50 flex flex-col items-start justify-between p-3 rounded-xl text-[#001E29]",
                                    children: [
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                        "jsxDEV"
                                      ])(
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__[
                                          "default"
                                        ],
                                        {
                                          src: "/projectsIcon.jpg",
                                          alt: "projects Icon",
                                          width: 30,
                                          height: 30,
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/pages/components/Intro.tsx",
                                          lineNumber: 56,
                                          columnNumber: 15,
                                        },
                                        this,
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                        "jsxDEV"
                                      ])(
                                        "section",
                                        {
                                          className: "font-bold",
                                          children: /*#__PURE__*/ (0,
                                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                            "jsxDEV"
                                          ])(
                                            "div",
                                            {
                                              children:
                                                "Built more than 5 projects",
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "[project]/src/pages/components/Intro.tsx",
                                              lineNumber: 63,
                                              columnNumber: 17,
                                            },
                                            this,
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/pages/components/Intro.tsx",
                                          lineNumber: 62,
                                          columnNumber: 15,
                                        },
                                        this,
                                      ),
                                      /*#__PURE__*/ (0,
                                      __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                        "jsxDEV"
                                      ])(
                                        "div",
                                        {
                                          className: "font-extralight",
                                          children: "Projects",
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName:
                                            "[project]/src/pages/components/Intro.tsx",
                                          lineNumber: 65,
                                          columnNumber: 15,
                                        },
                                        this,
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      "[project]/src/pages/components/Intro.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13,
                                  },
                                  this,
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/src/pages/components/Intro.tsx",
                              lineNumber: 30,
                              columnNumber: 11,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: "[project]/src/pages/components/Intro.tsx",
                        lineNumber: 21,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: "[project]/src/pages/components/Intro.tsx",
                  lineNumber: 14,
                  columnNumber: 7,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/pages/components/Intro.tsx",
            lineNumber: 7,
            columnNumber: 5,
          },
          this,
        );
      };
      const __TURBOPACK__default__export__ = Intro;
    }
  },
  "[project]/src/pages/components/MyLatestWork.jsx [ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ =
        __turbopack_context__.i(
          "[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)",
        );
      var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ =
        __turbopack_context__.i("[externals]/react [external] (react, cjs)");
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRefStore$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/src/hooks/useRefStore.jsx [ssr] (ecmascript)",
        );
      const slides = [
        "/figma.png",
        "/socially.png",
        "/pizza.png",
        "/portfolio.png",
      ];
      const MyLatestWork = () => {
        const { projectRef, contactRef } = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useContext"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRefStore$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
            "useRefStore"
          ],
        );
        const scrollToContact = () => {
          contactRef.current?.scrollIntoView({
            behavior: "smooth",
          });
          console.log("scroll to project");
        };
        const [currentIndex, setCurrentIndex] = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useState"
        ])(0);
        const prevSlide = () =>
          setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
        const nextSlide = () =>
          setCurrentIndex((prev) => (prev + 1) % slides.length);
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
          "jsxDEV"
        ])(
          "section",
          {
            ref: projectRef,
            className: "flex flex-col items-center gap-5 pt-30",
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className:
                    "text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem]",
                  children: "My portfolio",
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/pages/components/MyLatestWork.jsx",
                  lineNumber: 23,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className:
                    "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-4xl leading-[2.25rem] md:leading-[2.5rem] font-bold",
                  children: "My latest work",
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/pages/components/MyLatestWork.jsx",
                  lineNumber: 26,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "p",
                {
                  className:
                    "w-full max-w-200 text-center text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                  children:
                    "Welcome to my full-stack web development portfolio! Explore a collection of projects showcasing my expertise in both front-end and back-end development, from intuitive user interfaces to robust server-side solutions.",
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/pages/components/MyLatestWork.jsx",
                  lineNumber: 30,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "section",
                {
                  className: "carousel w-full",
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "carousel-item relative w-full",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "img",
                          {
                            src: slides[currentIndex],
                            className: "w-full",
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/pages/components/MyLatestWork.jsx",
                            lineNumber: 39,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "div",
                          {
                            className:
                              "absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between",
                            children: [
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                "jsxDEV"
                              ])(
                                "button",
                                {
                                  onClick: prevSlide,
                                  className: "btn btn-circle",
                                  children: "❮",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/src/pages/components/MyLatestWork.jsx",
                                  lineNumber: 41,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                                "jsxDEV"
                              ])(
                                "button",
                                {
                                  onClick: nextSlide,
                                  className: "btn btn-circle",
                                  children: "❯",
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/src/pages/components/MyLatestWork.jsx",
                                  lineNumber: 44,
                                  columnNumber: 13,
                                },
                                this,
                              ),
                            ],
                          },
                          void 0,
                          true,
                          {
                            fileName:
                              "[project]/src/pages/components/MyLatestWork.jsx",
                            lineNumber: 40,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        "[project]/src/pages/components/MyLatestWork.jsx",
                      lineNumber: 38,
                      columnNumber: 9,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/pages/components/MyLatestWork.jsx",
                  lineNumber: 37,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "button",
                {
                  onClick: scrollToContact,
                  className:
                    " btn btn-l md:btn-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:scale-105 shadow-sm hover:shadow-xl transition duration-200 ease-in-out text-[#FFFFFF] text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] rounded-[50px] w-full md:w-50 mt-10",
                  children: "Contact me →",
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/pages/components/MyLatestWork.jsx",
                  lineNumber: 51,
                  columnNumber: 7,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/pages/components/MyLatestWork.jsx",
            lineNumber: 19,
            columnNumber: 5,
          },
          this,
        );
      };
      const __TURBOPACK__default__export__ = MyLatestWork;
    }
  },
  "[project]/src/pages/components/MyService.tsx [ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ =
        __turbopack_context__.i(
          "[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/node_modules/next/image.js [ssr] (ecmascript)",
        );
      const MyService = () => {
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
          "jsxDEV"
        ])(
          "section",
          {
            className: "flex flex-col items-center gap-5 pt-50 w-full",
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className:
                    "text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem]",
                  children: "What i do",
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/pages/components/MyService.tsx",
                  lineNumber: 5,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className:
                    "bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent text-3xl md:text-4xl font-bold",
                  children: "My Tools",
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/pages/components/MyService.tsx",
                  lineNumber: 8,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "div",
                {
                  className: "",
                  children: /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                    "jsxDEV"
                  ])(
                    "p",
                    {
                      className:
                        "w-full max-w-150 text-center text-sm md:text-xl",
                      children: "Explore the technologies and tools I use.",
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/pages/components/MyService.tsx",
                      lineNumber: 12,
                      columnNumber: 9,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName: "[project]/src/pages/components/MyService.tsx",
                  lineNumber: 11,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "section",
                {
                  className:
                    "py-4 gap-4  lg:gap-10 md:5 w-full grid grid-cols-2 md:grid-cols-4",
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        className:
                          "bg-[#FBD5A5] text-[#001E29] w-full h-62 flex flex-col items-start justify-between p-5 md:p-3 rounded-xl",
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__[
                              "default"
                            ],
                            {
                              src: "/earth.jpg",
                              alt: "earth Icon",
                              width: 40,
                              height: 40,
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/pages/components/MyService.tsx",
                              lineNumber: 18,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className:
                                "font-medium text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem] ",
                              children: "Web design",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/pages/components/MyService.tsx",
                              lineNumber: 19,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            "p",
                            {
                              className:
                                "font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                              children:
                                "Web development is the process of building, programming...",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/pages/components/MyService.tsx",
                              lineNumber: 22,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className:
                                "text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] hover:scale-105 transition duration-200 ease-in-out cursor-pointer",
                              children: ["Read more →", " "],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/src/pages/components/MyService.tsx",
                              lineNumber: 25,
                              columnNumber: 11,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName:
                          "[project]/src/pages/components/MyService.tsx",
                        lineNumber: 17,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        className:
                          "bg-[#FBD5A5] text-[#001E29] w-full h-62 flex flex-col items-start justify-between p-5 md:p-3 rounded-xl",
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__[
                              "default"
                            ],
                            {
                              src: "/earth.jpg",
                              alt: "earth Icon",
                              width: 40,
                              height: 40,
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/pages/components/MyService.tsx",
                              lineNumber: 30,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className:
                                "font-medium text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem] ",
                              children: "Web design",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/pages/components/MyService.tsx",
                              lineNumber: 31,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            "p",
                            {
                              className:
                                "font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] ",
                              children:
                                "Web development is the process of building, programming...",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/pages/components/MyService.tsx",
                              lineNumber: 34,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className:
                                "text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] hover:scale-105 transition duration-200 ease-in-out cursor-pointer",
                              children: ["Read more →", " "],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/src/pages/components/MyService.tsx",
                              lineNumber: 37,
                              columnNumber: 11,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName:
                          "[project]/src/pages/components/MyService.tsx",
                        lineNumber: 29,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        className:
                          "bg-[#FBD5A5] text-[#001E29] w-full h-62 flex flex-col items-start justify-between p-5 md:p-3 rounded-xl",
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__[
                              "default"
                            ],
                            {
                              src: "/earth.jpg",
                              alt: "earth Icon",
                              width: 40,
                              height: 40,
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/pages/components/MyService.tsx",
                              lineNumber: 42,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className:
                                "font-medium text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem] ",
                              children: "Web design",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/pages/components/MyService.tsx",
                              lineNumber: 43,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            "p",
                            {
                              className:
                                "font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                              children:
                                "Web development is the process of building, programming...",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/pages/components/MyService.tsx",
                              lineNumber: 46,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className:
                                "text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] hover:scale-105 transition duration-200 ease-in-out cursor-pointer",
                              children: ["Read more →", " "],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/src/pages/components/MyService.tsx",
                              lineNumber: 49,
                              columnNumber: 11,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName:
                          "[project]/src/pages/components/MyService.tsx",
                        lineNumber: 41,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      "div",
                      {
                        className:
                          "bg-[#FBD5A5] text-[#001E29] w-full h-62 flex flex-col items-start justify-between p-5 md:p-3 rounded-xl",
                        children: [
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__[
                              "default"
                            ],
                            {
                              src: "/earth.jpg",
                              alt: "earth Icon",
                              width: 40,
                              height: 40,
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/pages/components/MyService.tsx",
                              lineNumber: 54,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className:
                                "font-medium text-xl md:text-2xl leading-[1.75rem] md:leading-[2rem] ",
                              children: "Web design",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/pages/components/MyService.tsx",
                              lineNumber: 55,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            "p",
                            {
                              className:
                                "font-light text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem]",
                              children:
                                "Web development is the process of building, programming...",
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/src/pages/components/MyService.tsx",
                              lineNumber: 58,
                              columnNumber: 11,
                            },
                            this,
                          ),
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className:
                                "text-[16px] md:text-xl leading-[1.5rem] md:leading-[1.75rem] hover:scale-105 transition duration-200 ease-in-out cursor-pointer",
                              children: ["Read more →", " "],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/src/pages/components/MyService.tsx",
                              lineNumber: 61,
                              columnNumber: 11,
                            },
                            this,
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName:
                          "[project]/src/pages/components/MyService.tsx",
                        lineNumber: 53,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: "[project]/src/pages/components/MyService.tsx",
                  lineNumber: 16,
                  columnNumber: 7,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/pages/components/MyService.tsx",
            lineNumber: 4,
            columnNumber: 5,
          },
          this,
        );
      };
      const __TURBOPACK__default__export__ = MyService;
    }
  },
  "[project]/src/pages/components/Mode.jsx [ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ =
        __turbopack_context__.i(
          "[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)",
        );
      var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ =
        __turbopack_context__.i("[externals]/react [external] (react, cjs)");
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$utils$2f$UseContextProvider$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/src/pages/utils/UseContextProvider.jsx [ssr] (ecmascript)",
        );
      // src/pages/components/Mode.tsx
      const Mode = () => {
        const { handleClickMenu, checkboxRef } = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useContext"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$utils$2f$UseContextProvider$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
            "UseContext"
          ],
        );
        if (("TURBOPACK compile-time falsy", 0)) {
          ("TURBOPACK unreachable");
        }
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
          "jsxDEV"
        ])(
          "section",
          {
            className: "flex  gap-5 md:pr-2 pr-4",
            children: [
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "label",
                {
                  className:
                    "swap swap-rotate hover:scale-105 transition duration-200 ease-in-out",
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      "input",
                      {
                        type: "checkbox",
                        className: "theme-controller",
                        value: "abyss",
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/pages/components/Mode.jsx",
                        lineNumber: 16,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      "svg",
                      {
                        className: "swap-off h-10 w-10 fill-current",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "path",
                          {
                            d: "M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/pages/components/Mode.jsx",
                            lineNumber: 24,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/pages/components/Mode.jsx",
                        lineNumber: 19,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      "svg",
                      {
                        className: "swap-on h-10 w-10 fill-current",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "path",
                          {
                            d: "M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/pages/components/Mode.jsx",
                            lineNumber: 33,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/pages/components/Mode.jsx",
                        lineNumber: 28,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: "[project]/src/pages/components/Mode.jsx",
                  lineNumber: 14,
                  columnNumber: 7,
                },
                this,
              ),
              /*#__PURE__*/ (0,
              __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                "jsxDEV"
              ])(
                "label",
                {
                  className:
                    " lg:hidden btn btn-circle swap swap-rotate hover:scale-105 transition duration-200 ease-in-out",
                  children: [
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      "input",
                      {
                        type: "checkbox",
                        ref: checkboxRef,
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/pages/components/Mode.jsx",
                        lineNumber: 38,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      "svg",
                      {
                        onClick: handleClickMenu,
                        className: "swap-off fill-current ",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "32",
                        height: "32",
                        viewBox: "0 0 512 512",
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "path",
                          {
                            d: "M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/pages/components/Mode.jsx",
                            lineNumber: 49,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/pages/components/Mode.jsx",
                        lineNumber: 41,
                        columnNumber: 9,
                      },
                      this,
                    ),
                    /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                      "jsxDEV"
                    ])(
                      "svg",
                      {
                        onClick: handleClickMenu,
                        className: "swap-on fill-current",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "32",
                        height: "32",
                        viewBox: "0 0 512 512",
                        children: /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "polygon",
                          {
                            points:
                              "400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49",
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/pages/components/Mode.jsx",
                            lineNumber: 61,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/pages/components/Mode.jsx",
                        lineNumber: 53,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: "[project]/src/pages/components/Mode.jsx",
                  lineNumber: 36,
                  columnNumber: 7,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/pages/components/Mode.jsx",
            lineNumber: 13,
            columnNumber: 5,
          },
          this,
        );
      };
      const __TURBOPACK__default__export__ = Mode;
    }
  },
  "[project]/src/pages/components/NavBar.jsx [ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var { g: global, __dirname } = __turbopack_context__;
    {
      __turbopack_context__.s({
        default: () => __TURBOPACK__default__export__,
      });
      var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ =
        __turbopack_context__.i(
          "[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)",
        );
      var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ =
        __turbopack_context__.i("[externals]/react [external] (react, cjs)");
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$utils$2f$UseContextProvider$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/src/pages/utils/UseContextProvider.jsx [ssr] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$Mode$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/src/pages/components/Mode.jsx [ssr] (ecmascript)",
        );
      var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRefStore$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
        __turbopack_context__.i(
          "[project]/src/hooks/useRefStore.jsx [ssr] (ecmascript)",
        );
      const NavBar = () => {
        const { isScrolled, isMenuOpened, activeSection, scrollToSection } = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useContext"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$utils$2f$UseContextProvider$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
            "UseContext"
          ],
        );
        const { heroRef, projectRef, contactRef, aboutRef } = (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__[
          "useContext"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRefStore$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
            "useRefStore"
          ],
        );
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
          "jsxDEV"
        ])(
          "section",
          {
            className: `w-full fixed left-1/2 -translate-x-1/2 z-50 transition duration-300 ease-in-out
      ${isScrolled && !isMenuOpened ? "bg-black/20 backdrop-blur-md shadow-lg border border-white/20" : "bg-transparent border-transparent"}
      `,
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className:
                  "relative max-w-[1280px] min-w-[375px] flex justify-between items-start m-auto xl:px-20 lg:px-10 py-3",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      onClick: () => scrollToSection("hero", heroRef),
                      className:
                        "font-semibold text-3xl cursor-pointer hover:scale-105 transition duration-200 ease-in-out md:pl-2 pl-4",
                      children: [
                        "Vivienne ",
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "span",
                          {
                            className: "text-[#FF8000]",
                            children: ".",
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/pages/components/NavBar.jsx",
                            lineNumber: 26,
                            columnNumber: 20,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/src/pages/components/NavBar.jsx",
                      lineNumber: 22,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                    "jsxDEV"
                  ])(
                    "ul",
                    {
                      className: `p-2 flex w-full lg:w-[600px]
                ${isMenuOpened ? "absolute lg:static top-0 left-0 h-screen text-4xl flex-col justify-center items-start gap-5 bg-black/40  backdrop-blur-2xl shadow-lg border border-white/20  " : "hidden  flex-row border-1 rounded-full shadow-sm hover:shadow-xl justify-between w-[600px] text-xl lg:flex"}
      `,
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "li",
                          {
                            onClick: () => scrollToSection("hero", heroRef),
                            className: `cursor-pointer w-full rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out
          ${activeSection === "hero" ? "bg-[#FBD5A5] font-bold text-[#FF8000]" : ""}`,
                            children: "Home",
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/pages/components/NavBar.jsx",
                            lineNumber: 37,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "li",
                          {
                            onClick: () => scrollToSection("about", aboutRef),
                            className: `cursor-pointer w-full  rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out
          ${activeSection === "about" ? "bg-[#FBD5A5] font-bold text-[#FF8000] " : ""}`,
                            children: "About me",
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/pages/components/NavBar.jsx",
                            lineNumber: 48,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "li",
                          {
                            onClick: () =>
                              scrollToSection("project", projectRef),
                            className: `cursor-pointer w-full  rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out
          ${activeSection === "project" ? "bg-[#FBD5A5] font-bold text-[#FF8000]" : ""}`,
                            children: "My work",
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/pages/components/NavBar.jsx",
                            lineNumber: 59,
                            columnNumber: 11,
                          },
                          this,
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                          "jsxDEV"
                        ])(
                          "li",
                          {
                            onClick: () =>
                              scrollToSection("contact", contactRef),
                            className: `cursor-pointer w-full  rounded-full text-center hover:text-[#ff7300] hover:scale-105 hover:font-bold transition duration-300 ease-in-out
          ${activeSection === "contact" ? "bg-[#FBD5A5] font-bold text-[#FF8000]" : ""}`,
                            children: "Contact me",
                          },
                          void 0,
                          false,
                          {
                            fileName:
                              "[project]/src/pages/components/NavBar.jsx",
                            lineNumber: 70,
                            columnNumber: 11,
                          },
                          this,
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/src/pages/components/NavBar.jsx",
                      lineNumber: 28,
                      columnNumber: 9,
                    },
                    this,
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$Mode$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
                      "default"
                    ],
                    {},
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/pages/components/NavBar.jsx",
                      lineNumber: 82,
                      columnNumber: 9,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/pages/components/NavBar.jsx",
                lineNumber: 21,
                columnNumber: 7,
              },
              this,
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/src/pages/components/NavBar.jsx",
            lineNumber: 12,
            columnNumber: 5,
          },
          this,
        );
      };
      const __TURBOPACK__default__export__ = NavBar;
    }
  },
  "[project]/src/pages/index.tsx [ssr] (ecmascript)": (
    __turbopack_context__,
  ) => {
    "use strict";

    var {
      g: global,
      __dirname,
      a: __turbopack_async_module__,
    } = __turbopack_context__;
    __turbopack_async_module__(
      async (
        __turbopack_handle_async_dependencies__,
        __turbopack_async_result__,
      ) => {
        try {
          __turbopack_context__.s({
            default: () => Home,
          });
          var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ =
            __turbopack_context__.i(
              "[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$Bottom$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/pages/components/Bottom.jsx [ssr] (ecmascript)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$GetInTouch$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/pages/components/GetInTouch.jsx [ssr] (ecmascript)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$Hero$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/pages/components/Hero.jsx [ssr] (ecmascript)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$Intro$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/pages/components/Intro.tsx [ssr] (ecmascript)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$MyLatestWork$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/pages/components/MyLatestWork.jsx [ssr] (ecmascript)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$MyService$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/pages/components/MyService.tsx [ssr] (ecmascript)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$NavBar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/pages/components/NavBar.jsx [ssr] (ecmascript)",
            );
          var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$utils$2f$UseContextProvider$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ =
            __turbopack_context__.i(
              "[project]/src/pages/utils/UseContextProvider.jsx [ssr] (ecmascript)",
            );
          var __turbopack_async_dependencies__ =
            __turbopack_handle_async_dependencies__([
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$GetInTouch$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$Hero$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
            ]);
          [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$GetInTouch$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$Hero$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
          ] = __turbopack_async_dependencies__.then
            ? (await __turbopack_async_dependencies__)()
            : __turbopack_async_dependencies__;
          function Home() {
            return /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$utils$2f$UseContextProvider$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
                "default"
              ],
              {
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                  "jsxDEV"
                ])(
                  "section",
                  {
                    className:
                      "w-full h-screen font-[Poppins] px-4 xl:px-20 lg:px-10 flex flex-col items-center m-auto max-w-[1280px] min-w-[375px]",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$NavBar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/pages/index.tsx",
                          lineNumber: 14,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$Hero$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/pages/index.tsx",
                          lineNumber: 15,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$Intro$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/pages/index.tsx",
                          lineNumber: 16,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$MyService$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/pages/index.tsx",
                          lineNumber: 17,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$MyLatestWork$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/pages/index.tsx",
                          lineNumber: 18,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$GetInTouch$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/pages/index.tsx",
                          lineNumber: 19,
                          columnNumber: 9,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$Bottom$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/pages/index.tsx",
                          lineNumber: 20,
                          columnNumber: 9,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/src/pages/index.tsx",
                    lineNumber: 13,
                    columnNumber: 7,
                  },
                  this,
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/src/pages/index.tsx",
                lineNumber: 12,
                columnNumber: 5,
              },
              this,
            );
          }
          __turbopack_async_result__();
        } catch (e) {
          __turbopack_async_result__(e);
        }
      },
      false,
    );
  },
};

//# sourceMappingURL=%5Broot-of-the-server%5D__f17fe9c6._.js.map
