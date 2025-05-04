(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([
  typeof document === "object" ? document.currentScript : undefined,
  {
    "[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)": (
      __turbopack_context__,
    ) => {
      "use strict";

      var { g: global, __dirname } = __turbopack_context__;
      {
        /// <reference path="../../../shared/runtime-types.d.ts" />
        /// <reference path="../../runtime/base/dev-globals.d.ts" />
        /// <reference path="../../runtime/base/dev-protocol.d.ts" />
        /// <reference path="../../runtime/base/dev-extensions.ts" />
        __turbopack_context__.s({
          connect: () => connect,
          setHooks: () => setHooks,
          subscribeToUpdate: () => subscribeToUpdate,
        });
        function connect({
          addMessageListener,
          sendMessage,
          onUpdateError = console.error,
        }) {
          addMessageListener((msg) => {
            switch (msg.type) {
              case "turbopack-connected":
                handleSocketConnected(sendMessage);
                break;
              default:
                try {
                  if (Array.isArray(msg.data)) {
                    for (let i = 0; i < msg.data.length; i++) {
                      handleSocketMessage(msg.data[i]);
                    }
                  } else {
                    handleSocketMessage(msg.data);
                  }
                  applyAggregatedUpdates();
                } catch (e) {
                  console.warn(
                    "[Fast Refresh] performing full reload\n\n" +
                      "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" +
                      "You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n" +
                      "Consider migrating the non-React component export to a separate file and importing it into both files.\n\n" +
                      "It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n" +
                      "Fast Refresh requires at least one parent function component in your React tree.",
                  );
                  onUpdateError(e);
                  location.reload();
                }
                break;
            }
          });
          const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
          if (queued != null && !Array.isArray(queued)) {
            throw new Error("A separate HMR handler was already registered");
          }
          globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
            push: ([chunkPath, callback]) => {
              subscribeToChunkUpdate(chunkPath, sendMessage, callback);
            },
          };
          if (Array.isArray(queued)) {
            for (const [chunkPath, callback] of queued) {
              subscribeToChunkUpdate(chunkPath, sendMessage, callback);
            }
          }
        }
        const updateCallbackSets = new Map();
        function sendJSON(sendMessage, message) {
          sendMessage(JSON.stringify(message));
        }
        function resourceKey(resource) {
          return JSON.stringify({
            path: resource.path,
            headers: resource.headers || null,
          });
        }
        function subscribeToUpdates(sendMessage, resource) {
          sendJSON(sendMessage, {
            type: "turbopack-subscribe",
            ...resource,
          });
          return () => {
            sendJSON(sendMessage, {
              type: "turbopack-unsubscribe",
              ...resource,
            });
          };
        }
        function handleSocketConnected(sendMessage) {
          for (const key of updateCallbackSets.keys()) {
            subscribeToUpdates(sendMessage, JSON.parse(key));
          }
        }
        // we aggregate all pending updates until the issues are resolved
        const chunkListsWithPendingUpdates = new Map();
        function aggregateUpdates(msg) {
          const key = resourceKey(msg.resource);
          let aggregated = chunkListsWithPendingUpdates.get(key);
          if (aggregated) {
            aggregated.instruction = mergeChunkListUpdates(
              aggregated.instruction,
              msg.instruction,
            );
          } else {
            chunkListsWithPendingUpdates.set(key, msg);
          }
        }
        function applyAggregatedUpdates() {
          if (chunkListsWithPendingUpdates.size === 0) return;
          hooks.beforeRefresh();
          for (const msg of chunkListsWithPendingUpdates.values()) {
            triggerUpdate(msg);
          }
          chunkListsWithPendingUpdates.clear();
          finalizeUpdate();
        }
        function mergeChunkListUpdates(updateA, updateB) {
          let chunks;
          if (updateA.chunks != null) {
            if (updateB.chunks == null) {
              chunks = updateA.chunks;
            } else {
              chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
            }
          } else if (updateB.chunks != null) {
            chunks = updateB.chunks;
          }
          let merged;
          if (updateA.merged != null) {
            if (updateB.merged == null) {
              merged = updateA.merged;
            } else {
              // Since `merged` is an array of updates, we need to merge them all into
              // one, consistent update.
              // Since there can only be `EcmascriptMergeUpdates` in the array, there is
              // no need to key on the `type` field.
              let update = updateA.merged[0];
              for (let i = 1; i < updateA.merged.length; i++) {
                update = mergeChunkListEcmascriptMergedUpdates(
                  update,
                  updateA.merged[i],
                );
              }
              for (let i = 0; i < updateB.merged.length; i++) {
                update = mergeChunkListEcmascriptMergedUpdates(
                  update,
                  updateB.merged[i],
                );
              }
              merged = [update];
            }
          } else if (updateB.merged != null) {
            merged = updateB.merged;
          }
          return {
            type: "ChunkListUpdate",
            chunks,
            merged,
          };
        }
        function mergeChunkListChunks(chunksA, chunksB) {
          const chunks = {};
          for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)) {
            const chunkUpdateB = chunksB[chunkPath];
            if (chunkUpdateB != null) {
              const mergedUpdate = mergeChunkUpdates(
                chunkUpdateA,
                chunkUpdateB,
              );
              if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
              }
            } else {
              chunks[chunkPath] = chunkUpdateA;
            }
          }
          for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)) {
            if (chunks[chunkPath] == null) {
              chunks[chunkPath] = chunkUpdateB;
            }
          }
          return chunks;
        }
        function mergeChunkUpdates(updateA, updateB) {
          if (
            (updateA.type === "added" && updateB.type === "deleted") ||
            (updateA.type === "deleted" && updateB.type === "added")
          ) {
            return undefined;
          }
          if (updateA.type === "partial") {
            invariant(updateA.instruction, "Partial updates are unsupported");
          }
          if (updateB.type === "partial") {
            invariant(updateB.instruction, "Partial updates are unsupported");
          }
          return undefined;
        }
        function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
          const entries = mergeEcmascriptChunkEntries(
            mergedA.entries,
            mergedB.entries,
          );
          const chunks = mergeEcmascriptChunksUpdates(
            mergedA.chunks,
            mergedB.chunks,
          );
          return {
            type: "EcmascriptMergedUpdate",
            entries,
            chunks,
          };
        }
        function mergeEcmascriptChunkEntries(entriesA, entriesB) {
          return {
            ...entriesA,
            ...entriesB,
          };
        }
        function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
          if (chunksA == null) {
            return chunksB;
          }
          if (chunksB == null) {
            return chunksA;
          }
          const chunks = {};
          for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)) {
            const chunkUpdateB = chunksB[chunkPath];
            if (chunkUpdateB != null) {
              const mergedUpdate = mergeEcmascriptChunkUpdates(
                chunkUpdateA,
                chunkUpdateB,
              );
              if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
              }
            } else {
              chunks[chunkPath] = chunkUpdateA;
            }
          }
          for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)) {
            if (chunks[chunkPath] == null) {
              chunks[chunkPath] = chunkUpdateB;
            }
          }
          if (Object.keys(chunks).length === 0) {
            return undefined;
          }
          return chunks;
        }
        function mergeEcmascriptChunkUpdates(updateA, updateB) {
          if (updateA.type === "added" && updateB.type === "deleted") {
            // These two completely cancel each other out.
            return undefined;
          }
          if (updateA.type === "deleted" && updateB.type === "added") {
            const added = [];
            const deleted = [];
            const deletedModules = new Set(updateA.modules ?? []);
            const addedModules = new Set(updateB.modules ?? []);
            for (const moduleId of addedModules) {
              if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
              }
            }
            for (const moduleId of deletedModules) {
              if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
              }
            }
            if (added.length === 0 && deleted.length === 0) {
              return undefined;
            }
            return {
              type: "partial",
              added,
              deleted,
            };
          }
          if (updateA.type === "partial" && updateB.type === "partial") {
            const added = new Set([
              ...(updateA.added ?? []),
              ...(updateB.added ?? []),
            ]);
            const deleted = new Set([
              ...(updateA.deleted ?? []),
              ...(updateB.deleted ?? []),
            ]);
            if (updateB.added != null) {
              for (const moduleId of updateB.added) {
                deleted.delete(moduleId);
              }
            }
            if (updateB.deleted != null) {
              for (const moduleId of updateB.deleted) {
                added.delete(moduleId);
              }
            }
            return {
              type: "partial",
              added: [...added],
              deleted: [...deleted],
            };
          }
          if (updateA.type === "added" && updateB.type === "partial") {
            const modules = new Set([
              ...(updateA.modules ?? []),
              ...(updateB.added ?? []),
            ]);
            for (const moduleId of updateB.deleted ?? []) {
              modules.delete(moduleId);
            }
            return {
              type: "added",
              modules: [...modules],
            };
          }
          if (updateA.type === "partial" && updateB.type === "deleted") {
            // We could eagerly return `updateB` here, but this would potentially be
            // incorrect if `updateA` has added modules.
            const modules = new Set(updateB.modules ?? []);
            if (updateA.added != null) {
              for (const moduleId of updateA.added) {
                modules.delete(moduleId);
              }
            }
            return {
              type: "deleted",
              modules: [...modules],
            };
          }
          // Any other update combination is invalid.
          return undefined;
        }
        function invariant(_, message) {
          throw new Error(`Invariant: ${message}`);
        }
        const CRITICAL = ["bug", "error", "fatal"];
        function compareByList(list, a, b) {
          const aI = list.indexOf(a) + 1 || list.length;
          const bI = list.indexOf(b) + 1 || list.length;
          return aI - bI;
        }
        const chunksWithIssues = new Map();
        function emitIssues() {
          const issues = [];
          const deduplicationSet = new Set();
          for (const [_, chunkIssues] of chunksWithIssues) {
            for (const chunkIssue of chunkIssues) {
              if (deduplicationSet.has(chunkIssue.formatted)) continue;
              issues.push(chunkIssue);
              deduplicationSet.add(chunkIssue.formatted);
            }
          }
          sortIssues(issues);
          hooks.issues(issues);
        }
        function handleIssues(msg) {
          const key = resourceKey(msg.resource);
          let hasCriticalIssues = false;
          for (const issue of msg.issues) {
            if (CRITICAL.includes(issue.severity)) {
              hasCriticalIssues = true;
            }
          }
          if (msg.issues.length > 0) {
            chunksWithIssues.set(key, msg.issues);
          } else if (chunksWithIssues.has(key)) {
            chunksWithIssues.delete(key);
          }
          emitIssues();
          return hasCriticalIssues;
        }
        const SEVERITY_ORDER = [
          "bug",
          "fatal",
          "error",
          "warning",
          "info",
          "log",
        ];
        const CATEGORY_ORDER = [
          "parse",
          "resolve",
          "code generation",
          "rendering",
          "typescript",
          "other",
        ];
        function sortIssues(issues) {
          issues.sort((a, b) => {
            const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
            if (first !== 0) return first;
            return compareByList(CATEGORY_ORDER, a.category, b.category);
          });
        }
        const hooks = {
          beforeRefresh: () => {},
          refresh: () => {},
          buildOk: () => {},
          issues: (_issues) => {},
        };
        function setHooks(newHooks) {
          Object.assign(hooks, newHooks);
        }
        function handleSocketMessage(msg) {
          sortIssues(msg.issues);
          handleIssues(msg);
          switch (msg.type) {
            case "issues":
              break;
            case "partial":
              // aggregate updates
              aggregateUpdates(msg);
              break;
            default:
              // run single update
              const runHooks = chunkListsWithPendingUpdates.size === 0;
              if (runHooks) hooks.beforeRefresh();
              triggerUpdate(msg);
              if (runHooks) finalizeUpdate();
              break;
          }
        }
        function finalizeUpdate() {
          hooks.refresh();
          hooks.buildOk();
          // This is used by the Next.js integration test suite to notify it when HMR
          // updates have been completed.
          // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
          if (globalThis.__NEXT_HMR_CB) {
            globalThis.__NEXT_HMR_CB();
            globalThis.__NEXT_HMR_CB = null;
          }
        }
        function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
          return subscribeToUpdate(
            {
              path: chunkListPath,
            },
            sendMessage,
            callback,
          );
        }
        function subscribeToUpdate(resource, sendMessage, callback) {
          const key = resourceKey(resource);
          let callbackSet;
          const existingCallbackSet = updateCallbackSets.get(key);
          if (!existingCallbackSet) {
            callbackSet = {
              callbacks: new Set([callback]),
              unsubscribe: subscribeToUpdates(sendMessage, resource),
            };
            updateCallbackSets.set(key, callbackSet);
          } else {
            existingCallbackSet.callbacks.add(callback);
            callbackSet = existingCallbackSet;
          }
          return () => {
            callbackSet.callbacks.delete(callback);
            if (callbackSet.callbacks.size === 0) {
              callbackSet.unsubscribe();
              updateCallbackSets.delete(key);
            }
          };
        }
        function triggerUpdate(msg) {
          const key = resourceKey(msg.resource);
          const callbackSet = updateCallbackSets.get(key);
          if (!callbackSet) {
            return;
          }
          for (const callback of callbackSet.callbacks) {
            callback(msg);
          }
          if (msg.type === "notFound") {
            // This indicates that the resource which we subscribed to either does not exist or
            // has been deleted. In either case, we should clear all update callbacks, so if a
            // new subscription is created for the same resource, it will send a new "subscribe"
            // message to the server.
            // No need to send an "unsubscribe" message to the server, it will have already
            // dropped the update stream before sending the "notFound" message.
            updateCallbackSets.delete(key);
          }
        }
      }
    },
    "[project]/src/pages/components/Hero.tsx [client] (ecmascript)": (
      __turbopack_context__,
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)",
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/image.js [client] (ecmascript)",
          );
        const Hero = () => {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
              "Fragment"
            ],
            {
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "section",
                  {
                    className: "p-10 font-extralight",
                    children: "Hi! I’m Vivienne Gu 👋🏻",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/components/Hero.tsx",
                    lineNumber: 5,
                    columnNumber: 13,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "p",
                  {
                    className: "text-[#FF8000] text-6xl font-[serif]",
                    children: "full stack developer",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/components/Hero.tsx",
                    lineNumber: 7,
                    columnNumber: 13,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "p",
                  {
                    className: "text-6xl font-[serif]",
                    children: "with a strong sense of",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/components/Hero.tsx",
                    lineNumber: 10,
                    columnNumber: 13,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "p",
                  {
                    className: "text-[#FF8000] text-6xl font-[serif]",
                    children: "ui/ux design",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/components/Hero.tsx",
                    lineNumber: 11,
                    columnNumber: 13,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "p",
                  {
                    className: "pt-10",
                    children:
                      "Skilled in Frontend (React, Next.js, Tailwind CSS), Backend (Node.js,Express),",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/components/Hero.tsx",
                    lineNumber: 12,
                    columnNumber: 13,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "p",
                  {
                    children:
                      "Database (MySQL, MongoDB), DevOps (Git, Docker), and UI Design.",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/components/Hero.tsx",
                    lineNumber: 16,
                    columnNumber: 13,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "section",
                  {
                    className: "p-10",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "button",
                        {
                          className:
                            "btn btn-xl bg-[#FF8000] text-[#FFFFFF] text-xl rounded-[50px] w-50 mr-10",
                          children: "Contact me →",
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/pages/components/Hero.tsx",
                          lineNumber: 19,
                          columnNumber: 17,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "button",
                        {
                          className:
                            "btn btn-xl text-[#FF8000] bg-[#FFFFFF] text-xl rounded-[50px] w-50 font-light",
                          children: [
                            "My Resume",
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
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
                                  "[project]/src/pages/components/Hero.tsx",
                                lineNumber: 24,
                                columnNumber: 21,
                              },
                              this,
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "[project]/src/pages/components/Hero.tsx",
                          lineNumber: 22,
                          columnNumber: 17,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/src/pages/components/Hero.tsx",
                    lineNumber: 18,
                    columnNumber: 13,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
          );
        };
        _c = Hero;
        const __TURBOPACK__default__export__ = Hero;
        var _c;
        __turbopack_context__.k.register(_c, "Hero");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$,
          );
        }
      }
    },
    "[project]/src/pages/components/Intro.tsx [client] (ecmascript)": (
      __turbopack_context__,
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)",
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/image.js [client] (ecmascript)",
          );
        const Intro = () => {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "section",
            {
              className: "flex flex-col items-center gap-5 pt-25",
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    children: "Introduction",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/components/Intro.tsx",
                    lineNumber: 5,
                    columnNumber: 13,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "text-[#FF8000] text-3xl font-[serif]",
                    children: "About me",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/components/Intro.tsx",
                    lineNumber: 6,
                    columnNumber: 13,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "section",
                  {
                    className: "flex gap-10 h-75 items-start",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {
                          src: "/businessCard.png",
                          alt: "business card",
                          width: 500,
                          height: 500,
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/pages/components/Intro.tsx",
                          lineNumber: 8,
                          columnNumber: 17,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "section",
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "p",
                              {
                                className: "font-extralight",
                                children:
                                  "I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/pages/components/Intro.tsx",
                                lineNumber: 10,
                                columnNumber: 21,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "section",
                              {
                                className: "flex gap-10 py-4",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "bg-[#808E94] w-45 h-45 flex flex-col items-start justify-between p-4 rounded-xl",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                            "default"
                                          ],
                                          {
                                            src: "/lightIcon.jpg",
                                            alt: "business card",
                                            width: 30,
                                            height: 30,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/pages/components/Intro.tsx",
                                            lineNumber: 13,
                                            columnNumber: 29,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "section",
                                          {
                                            className: "font-bold",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  children: "HTML, CSS, ",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/pages/components/Intro.tsx",
                                                  lineNumber: 15,
                                                  columnNumber: 33,
                                                },
                                                this,
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  children: "JavaScript,",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/pages/components/Intro.tsx",
                                                  lineNumber: 16,
                                                  columnNumber: 33,
                                                },
                                                this,
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  children: "React Js, Next Js",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/pages/components/Intro.tsx",
                                                  lineNumber: 17,
                                                  columnNumber: 33,
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
                                            lineNumber: 14,
                                            columnNumber: 29,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
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
                                            lineNumber: 19,
                                            columnNumber: 29,
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
                                      lineNumber: 12,
                                      columnNumber: 25,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "bg-[#808E94] w-45 h-45 flex flex-col items-start justify-between p-4 rounded-xl",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                            "default"
                                          ],
                                          {
                                            src: "/lightIcon.jpg",
                                            alt: "business card",
                                            width: 30,
                                            height: 30,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/pages/components/Intro.tsx",
                                            lineNumber: 22,
                                            columnNumber: 29,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "section",
                                          {
                                            className: "font-bold",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  children: "HTML, CSS, ",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/pages/components/Intro.tsx",
                                                  lineNumber: 24,
                                                  columnNumber: 33,
                                                },
                                                this,
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  children: "JavaScript,",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/pages/components/Intro.tsx",
                                                  lineNumber: 25,
                                                  columnNumber: 33,
                                                },
                                                this,
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  children: "React Js, Next Js",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/pages/components/Intro.tsx",
                                                  lineNumber: 26,
                                                  columnNumber: 33,
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
                                            lineNumber: 23,
                                            columnNumber: 29,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
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
                                            lineNumber: 28,
                                            columnNumber: 29,
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
                                      lineNumber: 21,
                                      columnNumber: 25,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className:
                                        "bg-[#808E94] w-45 h-45 flex flex-col items-start justify-between p-4 rounded-xl",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                            "default"
                                          ],
                                          {
                                            src: "/lightIcon.jpg",
                                            alt: "business card",
                                            width: 30,
                                            height: 30,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/pages/components/Intro.tsx",
                                            lineNumber: 31,
                                            columnNumber: 29,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "section",
                                          {
                                            className: "font-bold",
                                            children: [
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  children: "HTML, CSS, ",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/pages/components/Intro.tsx",
                                                  lineNumber: 33,
                                                  columnNumber: 33,
                                                },
                                                this,
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  children: "JavaScript,",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/pages/components/Intro.tsx",
                                                  lineNumber: 34,
                                                  columnNumber: 33,
                                                },
                                                this,
                                              ),
                                              /*#__PURE__*/ (0,
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                                "jsxDEV"
                                              ])(
                                                "div",
                                                {
                                                  children: "React Js, Next Js",
                                                },
                                                void 0,
                                                false,
                                                {
                                                  fileName:
                                                    "[project]/src/pages/components/Intro.tsx",
                                                  lineNumber: 35,
                                                  columnNumber: 33,
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
                                            lineNumber: 32,
                                            columnNumber: 29,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
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
                                            lineNumber: 37,
                                            columnNumber: 29,
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
                                      columnNumber: 25,
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
                                lineNumber: 11,
                                columnNumber: 21,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "section",
                              {
                                className: "flex flex-col gap-2",
                                children: [
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      children: "Tools i use",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/src/pages/components/Intro.tsx",
                                      lineNumber: 41,
                                      columnNumber: 25,
                                    },
                                    this,
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "section",
                                    {
                                      className: "flex gap-5",
                                      children: [
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "w-16 h-16 border-1 rounded-xl flex items-center justify-center",
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                                "default"
                                              ],
                                              {
                                                src: "/vsIcon.jpg",
                                                alt: "VS icon",
                                                width: 30,
                                                height: 30,
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/pages/components/Intro.tsx",
                                                lineNumber: 44,
                                                columnNumber: 33,
                                              },
                                              this,
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/pages/components/Intro.tsx",
                                            lineNumber: 43,
                                            columnNumber: 29,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "w-16 h-16 border-1 rounded-xl flex items-center justify-center",
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                                "default"
                                              ],
                                              {
                                                src: "/vsIcon.jpg",
                                                alt: "VS icon",
                                                width: 30,
                                                height: 30,
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/pages/components/Intro.tsx",
                                                lineNumber: 47,
                                                columnNumber: 33,
                                              },
                                              this,
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/pages/components/Intro.tsx",
                                            lineNumber: 46,
                                            columnNumber: 29,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "w-16 h-16 border-1 rounded-xl flex items-center justify-center",
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                                "default"
                                              ],
                                              {
                                                src: "/vsIcon.jpg",
                                                alt: "VS icon",
                                                width: 30,
                                                height: 30,
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/pages/components/Intro.tsx",
                                                lineNumber: 50,
                                                columnNumber: 33,
                                              },
                                              this,
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/pages/components/Intro.tsx",
                                            lineNumber: 49,
                                            columnNumber: 29,
                                          },
                                          this,
                                        ),
                                        /*#__PURE__*/ (0,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                          "jsxDEV"
                                        ])(
                                          "div",
                                          {
                                            className:
                                              "w-16 h-16 border-1 rounded-xl flex items-center justify-center",
                                            children: /*#__PURE__*/ (0,
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                              "jsxDEV"
                                            ])(
                                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                                                "default"
                                              ],
                                              {
                                                src: "/vsIcon.jpg",
                                                alt: "VS icon",
                                                width: 30,
                                                height: 30,
                                              },
                                              void 0,
                                              false,
                                              {
                                                fileName:
                                                  "[project]/src/pages/components/Intro.tsx",
                                                lineNumber: 53,
                                                columnNumber: 33,
                                              },
                                              this,
                                            ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "[project]/src/pages/components/Intro.tsx",
                                            lineNumber: 52,
                                            columnNumber: 29,
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
                                      lineNumber: 42,
                                      columnNumber: 25,
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
                                lineNumber: 40,
                                columnNumber: 21,
                              },
                              this,
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "[project]/src/pages/components/Intro.tsx",
                          lineNumber: 9,
                          columnNumber: 17,
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
                    columnNumber: 13,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: "[project]/src/pages/components/Intro.tsx",
              lineNumber: 4,
              columnNumber: 9,
            },
            this,
          );
        };
        _c = Intro;
        const __TURBOPACK__default__export__ = Intro;
        var _c;
        __turbopack_context__.k.register(_c, "Intro");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$,
          );
        }
      }
    },
    "[project]/src/pages/components/MyLatestWork.tsx [client] (ecmascript)": (
      __turbopack_context__,
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)",
          );
        const MyLatestWork = () => {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "section",
            {
              className: "flex flex-col items-center gap-5 pt-50",
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    children: "My portfolio",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/components/MyLatestWork.tsx",
                    lineNumber: 5,
                    columnNumber: 13,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "text-[#FF8000] text-3xl font-[serif]",
                    children: "My latest work",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/components/MyLatestWork.tsx",
                    lineNumber: 6,
                    columnNumber: 13,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "flex flex-col items-center",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "p",
                        {
                          children:
                            "Welcome to my web development portfolio! Explore a collection of projects showcasing",
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/src/pages/components/MyLatestWork.tsx",
                          lineNumber: 8,
                          columnNumber: 17,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "p",
                        {
                          children: "my expertise in front-end development.",
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/src/pages/components/MyLatestWork.tsx",
                          lineNumber: 9,
                          columnNumber: 17,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/src/pages/components/MyLatestWork.tsx",
                    lineNumber: 7,
                    columnNumber: 13,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "button",
                  {
                    className:
                      "cursor-pointer border-1 rounded-[50px] w-[160px] h-[48px] mt-50",
                    children: "Show more →",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/components/MyLatestWork.tsx",
                    lineNumber: 12,
                    columnNumber: 13,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: "[project]/src/pages/components/MyLatestWork.tsx",
              lineNumber: 4,
              columnNumber: 9,
            },
            this,
          );
        };
        _c = MyLatestWork;
        const __TURBOPACK__default__export__ = MyLatestWork;
        var _c;
        __turbopack_context__.k.register(_c, "MyLatestWork");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$,
          );
        }
      }
    },
    "[project]/src/pages/components/MyService.tsx [client] (ecmascript)": (
      __turbopack_context__,
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)",
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/next/image.js [client] (ecmascript)",
          );
        const MyService = () => {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "section",
            {
              className: "flex flex-col items-center gap-5 pt-50",
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    children: "What i offers",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/components/MyService.tsx",
                    lineNumber: 5,
                    columnNumber: 13,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "text-[#FF8000] text-3xl font-[serif]",
                    children: "My Service",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/components/MyService.tsx",
                    lineNumber: 6,
                    columnNumber: 13,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "flex flex-col items-center",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "p",
                        {
                          children:
                            "I am a frontend developer from California, USA with 10 years of experience ",
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/src/pages/components/MyService.tsx",
                          lineNumber: 8,
                          columnNumber: 17,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "p",
                        {
                          children:
                            "in multiple companies like Microsoft, Tesla and Apple.",
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/src/pages/components/MyService.tsx",
                          lineNumber: 9,
                          columnNumber: 17,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/src/pages/components/MyService.tsx",
                    lineNumber: 7,
                    columnNumber: 13,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "section",
                  {
                    className: "flex py-4 gap-10",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "bg-[#808E94] w-60 h-60 flex flex-col items-start justify-between p-4 rounded-xl",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
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
                                lineNumber: 13,
                                columnNumber: 21,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "font-medium text-2xl",
                                children: "Web design",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/pages/components/MyService.tsx",
                                lineNumber: 14,
                                columnNumber: 21,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "p",
                              {
                                children:
                                  "Web development is the process of building, programming...",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/pages/components/MyService.tsx",
                                lineNumber: 15,
                                columnNumber: 21,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                children: "Read more → ",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/pages/components/MyService.tsx",
                                lineNumber: 16,
                                columnNumber: 21,
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
                          lineNumber: 12,
                          columnNumber: 17,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "bg-[#808E94] w-60 h-60 flex flex-col items-start justify-between p-4 rounded-xl",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
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
                                lineNumber: 19,
                                columnNumber: 21,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "font-medium text-2xl",
                                children: "Web design",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/pages/components/MyService.tsx",
                                lineNumber: 20,
                                columnNumber: 21,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "p",
                              {
                                children:
                                  "Web development is the process of building, programming...",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/pages/components/MyService.tsx",
                                lineNumber: 21,
                                columnNumber: 21,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                children: "Read more → ",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/pages/components/MyService.tsx",
                                lineNumber: 22,
                                columnNumber: 21,
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
                          lineNumber: 18,
                          columnNumber: 17,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "bg-[#808E94] w-60 h-60 flex flex-col items-start justify-between p-4 rounded-xl",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
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
                                lineNumber: 25,
                                columnNumber: 21,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "font-medium text-2xl",
                                children: "Web design",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/pages/components/MyService.tsx",
                                lineNumber: 26,
                                columnNumber: 21,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "p",
                              {
                                children:
                                  "Web development is the process of building, programming...",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/pages/components/MyService.tsx",
                                lineNumber: 27,
                                columnNumber: 21,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                children: "Read more → ",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/pages/components/MyService.tsx",
                                lineNumber: 28,
                                columnNumber: 21,
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
                          lineNumber: 24,
                          columnNumber: 17,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className:
                            "bg-[#808E94] w-60 h-60 flex flex-col items-start justify-between p-4 rounded-xl",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
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
                                lineNumber: 31,
                                columnNumber: 21,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "font-medium text-2xl",
                                children: "Web design",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/pages/components/MyService.tsx",
                                lineNumber: 32,
                                columnNumber: 21,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "p",
                              {
                                children:
                                  "Web development is the process of building, programming...",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/pages/components/MyService.tsx",
                                lineNumber: 33,
                                columnNumber: 21,
                              },
                              this,
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                children: "Read more → ",
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/src/pages/components/MyService.tsx",
                                lineNumber: 34,
                                columnNumber: 21,
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
                          lineNumber: 30,
                          columnNumber: 17,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/src/pages/components/MyService.tsx",
                    lineNumber: 11,
                    columnNumber: 13,
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
              columnNumber: 9,
            },
            this,
          );
        };
        _c = MyService;
        const __TURBOPACK__default__export__ = MyService;
        var _c;
        __turbopack_context__.k.register(_c, "MyService");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$,
          );
        }
      }
    },
    "[project]/src/pages/components/Mode.tsx [client] (ecmascript)": (
      __turbopack_context__,
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        // src/pages/components/Mode.tsx
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)",
          );
        const Mode = () => {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "label",
            {
              className: "swap swap-rotate",
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
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
                    fileName: "[project]/src/pages/components/Mode.tsx",
                    lineNumber: 6,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "svg",
                  {
                    className: "swap-off h-10 w-10 fill-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "path",
                      {
                        d: "M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z",
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/pages/components/Mode.tsx",
                        lineNumber: 14,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/components/Mode.tsx",
                    lineNumber: 9,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "svg",
                  {
                    className: "swap-on h-10 w-10 fill-current",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0,
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                      "jsxDEV"
                    ])(
                      "path",
                      {
                        d: "M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z",
                      },
                      void 0,
                      false,
                      {
                        fileName: "[project]/src/pages/components/Mode.tsx",
                        lineNumber: 23,
                        columnNumber: 9,
                      },
                      this,
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/components/Mode.tsx",
                    lineNumber: 18,
                    columnNumber: 7,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: "[project]/src/pages/components/Mode.tsx",
              lineNumber: 4,
              columnNumber: 5,
            },
            this,
          );
        };
        _c = Mode;
        const __TURBOPACK__default__export__ = Mode;
        var _c;
        __turbopack_context__.k.register(_c, "Mode");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$,
          );
        }
      }
    },
    "[project]/src/pages/components/NavBar.tsx [client] (ecmascript)": (
      __turbopack_context__,
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => __TURBOPACK__default__export__,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)",
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$Mode$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/pages/components/Mode.tsx [client] (ecmascript)",
          );
        const NavBar = () => {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "section",
            {
              className: "w-full flex justify-between items-center pb-25",
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "div",
                  {
                    className: "font-semibold text-3xl",
                    children: [
                      "Vivienne ",
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
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
                          fileName: "[project]/src/pages/components/NavBar.tsx",
                          lineNumber: 7,
                          columnNumber: 26,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/src/pages/components/NavBar.tsx",
                    lineNumber: 6,
                    columnNumber: 13,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "ul",
                  {
                    className:
                      "text-xl flex justify-between p-2 border-1 rounded-full w-[600px]",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "li",
                        {
                          className: "ml-3 font-bold cursor-pointer",
                          children: "Home",
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/pages/components/NavBar.tsx",
                          lineNumber: 10,
                          columnNumber: 17,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "li",
                        {
                          className: "cursor-pointer",
                          children: "About me",
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/pages/components/NavBar.tsx",
                          lineNumber: 11,
                          columnNumber: 17,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "li",
                        {
                          className: "cursor-pointer",
                          children: "My work",
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/pages/components/NavBar.tsx",
                          lineNumber: 12,
                          columnNumber: 17,
                        },
                        this,
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "li",
                        {
                          className: "mr-3 cursor-pointer",
                          children: "Contact me",
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/pages/components/NavBar.tsx",
                          lineNumber: 13,
                          columnNumber: 17,
                        },
                        this,
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: "[project]/src/pages/components/NavBar.tsx",
                    lineNumber: 9,
                    columnNumber: 13,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$Mode$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__[
                    "default"
                  ],
                  {},
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/components/NavBar.tsx",
                    lineNumber: 15,
                    columnNumber: 13,
                  },
                  this,
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: "[project]/src/pages/components/NavBar.tsx",
              lineNumber: 5,
              columnNumber: 9,
            },
            this,
          );
        };
        _c = NavBar;
        const __TURBOPACK__default__export__ = NavBar;
        var _c;
        __turbopack_context__.k.register(_c, "NavBar");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$,
          );
        }
      }
    },
    "[project]/src/pages/index.tsx [client] (ecmascript)": (
      __turbopack_context__,
    ) => {
      "use strict";

      var {
        g: global,
        __dirname,
        k: __turbopack_refresh__,
        m: module,
      } = __turbopack_context__;
      {
        __turbopack_context__.s({
          default: () => Home,
        });
        var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)",
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$Hero$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/pages/components/Hero.tsx [client] (ecmascript)",
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$Intro$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/pages/components/Intro.tsx [client] (ecmascript)",
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$MyLatestWork$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/pages/components/MyLatestWork.tsx [client] (ecmascript)",
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$MyService$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/pages/components/MyService.tsx [client] (ecmascript)",
          );
        var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$NavBar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ =
          __turbopack_context__.i(
            "[project]/src/pages/components/NavBar.tsx [client] (ecmascript)",
          );
        function Home() {
          return /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "section",
            {
              className:
                "w-full h-screen font-[Poppins] px-20 py-5 flex flex-col items-center ",
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$NavBar$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__[
                    "default"
                  ],
                  {},
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/index.tsx",
                    lineNumber: 10,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$Hero$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__[
                    "default"
                  ],
                  {},
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/index.tsx",
                    lineNumber: 11,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$Intro$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__[
                    "default"
                  ],
                  {},
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/index.tsx",
                    lineNumber: 12,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$MyService$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__[
                    "default"
                  ],
                  {},
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/index.tsx",
                    lineNumber: 13,
                    columnNumber: 7,
                  },
                  this,
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$components$2f$MyLatestWork$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__[
                    "default"
                  ],
                  {},
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/pages/index.tsx",
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
              fileName: "[project]/src/pages/index.tsx",
              lineNumber: 9,
              columnNumber: 5,
            },
            this,
          );
        }
        _c = Home;
        var _c;
        __turbopack_context__.k.register(_c, "Home");
        if (
          typeof globalThis.$RefreshHelpers$ === "object" &&
          globalThis.$RefreshHelpers !== null
        ) {
          __turbopack_context__.k.registerExports(
            module,
            globalThis.$RefreshHelpers$,
          );
        }
      }
    },
    '[next]/entry/page-loader.ts { PAGE => "[project]/src/pages/index.tsx [client] (ecmascript)" } [client] (ecmascript)':
      function (__turbopack_context__) {
        var {
          g: global,
          __dirname,
          m: module,
          e: exports,
        } = __turbopack_context__;
        {
          const PAGE_PATH = "/";
          (window.__NEXT_P = window.__NEXT_P || []).push([
            PAGE_PATH,
            () => {
              return __turbopack_context__.r(
                "[project]/src/pages/index.tsx [client] (ecmascript)",
              );
            },
          ]);
          // @ts-expect-error module.hot exists
          if (module.hot) {
            // @ts-expect-error module.hot exists
            module.hot.dispose(function () {
              window.__NEXT_P.push([PAGE_PATH]);
            });
          }
        }
      },
    "[project]/src/pages/index (hmr-entry)": (__turbopack_context__) => {
      "use strict";

      var { g: global, __dirname, m: module } = __turbopack_context__;
      {
        __turbopack_context__.r(
          '[next]/entry/page-loader.ts { PAGE => "[project]/src/pages/index.tsx [client] (ecmascript)" } [client] (ecmascript)',
        );
      }
    },
  },
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0b460439._.js.map
