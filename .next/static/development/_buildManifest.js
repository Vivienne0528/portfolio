self.__BUILD_MANIFEST = {
  __rewrites: { afterFiles: [], beforeFiles: [], fallback: [] },
  "/": ["static/chunks/pages/index.js"],
  "/_app": ["static/chunks/pages/_app.js"],
  "/_error": ["static/chunks/pages/_error.js"],
  "/api/contact": ["static/chunks/pages/api/contact.js"],
  "/api/hello": ["static/chunks/pages/api/hello.js"],
  "/utils/SplitText": ["static/chunks/pages/utils/SplitText.js"],
  "/utils/UseContextProvider": [
    "static/chunks/pages/utils/UseContextProvider.js",
  ],
  sortedPages: [
    "/",
    "/_app",
    "/_error",
    "/api/contact",
    "/api/hello",
    "/utils/SplitText",
    "/utils/UseContextProvider",
  ],
};
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
