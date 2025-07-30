(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/theme-toggle.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeToggle": ()=>ThemeToggle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/theme-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ThemeToggle() {
    _s();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
        }
    }["ThemeToggle.useEffect"], []);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex items-center justify-center w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg animate-pulse",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-6 h-6 bg-gray-300 rounded"
            }, void 0, false, {
                fileName: "[project]/src/components/theme-toggle.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/theme-toggle.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: "relative flex items-center justify-center w-12 h-12 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group",
        "aria-label": "Toggle theme",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-6 h-6 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                        className: "absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-500 transform ".concat(theme === 'light' ? 'translate-y-0 rotate-0 opacity-100' : '-translate-y-8 rotate-180 opacity-0')
                    }, void 0, false, {
                        fileName: "[project]/src/components/theme-toggle.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                        className: "absolute inset-0 w-6 h-6 text-blue-600 transition-all duration-500 transform ".concat(theme === 'dark' ? 'translate-y-0 rotate-0 opacity-100' : 'translate-y-8 rotate-180 opacity-0')
                    }, void 0, false, {
                        fileName: "[project]/src/components/theme-toggle.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/theme-toggle.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-active:opacity-100 transition-opacity duration-200"
            }, void 0, false, {
                fileName: "[project]/src/components/theme-toggle.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/theme-toggle.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "iaaoD1LWaTNugaH6cPmI/NfxUYo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/cursor-inspired-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CursorInspiredCard": ()=>CursorInspiredCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CursorInspiredCard(param) {
    let { children, className = "" } = param;
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "group relative rounded-2xl transition-all duration-400 ease-out ".concat(className),
        onHoverStart: ()=>setIsHovered(true),
        onHoverEnd: ()=>setIsHovered(false),
        whileHover: {
            y: -4,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 rounded-2xl pointer-events-none p-[2px]",
                style: {
                    background: "linear-gradient(45deg, \n            #9333ea 0%, \n            #db2777 25%, \n            #3b82f6 50%, \n            #10b981 75%, \n            #9333ea 100%)"
                },
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: isHovered ? 1 : 0,
                    transition: {
                        duration: 0.4,
                        ease: "easeOut"
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full bg-white dark:bg-gray-800 rounded-[14px]"
                }, void 0, false, {
                    fileName: "[project]/src/components/cursor-inspired-card.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/cursor-inspired-card.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 m-[2px] rounded-[14px] bg-white dark:bg-gray-800 transition-all duration-400 ease-out overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 rounded-[14px] pointer-events-none",
                        style: {
                            background: "linear-gradient(135deg, \n              rgba(147, 51, 234, 0.03) 0%, \n              rgba(219, 39, 119, 0.02) 25%, \n              rgba(59, 130, 246, 0.03) 50%, \n              rgba(16, 185, 129, 0.02) 75%, \n              rgba(245, 158, 11, 0.01) 100%)"
                        },
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: isHovered ? 1 : 0,
                            transition: {
                                duration: 0.6,
                                ease: "easeOut"
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/cursor-inspired-card.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute top-0 left-0 right-0 h-[2px] rounded-t-[14px] pointer-events-none",
                        style: {
                            background: "linear-gradient(90deg, \n              rgba(147, 51, 234, 0.4) 0%, \n              rgba(219, 39, 119, 0.4) 25%, \n              rgba(59, 130, 246, 0.4) 50%, \n              rgba(16, 185, 129, 0.4) 75%, \n              rgba(245, 158, 11, 0.4) 100%)"
                        },
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: isHovered ? 1 : 0,
                            transition: {
                                duration: 0.4,
                                ease: "easeOut"
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/cursor-inspired-card.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute top-0 right-0 w-12 h-12 pointer-events-none rounded-tr-[14px]",
                        style: {
                            background: "radial-gradient(circle at top right, \n              rgba(147, 51, 234, 0.1) 0%, \n              rgba(219, 39, 119, 0.05) 40%, \n              transparent 70%)"
                        },
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: isHovered ? 1 : 0,
                            transition: {
                                duration: 0.5,
                                ease: "easeOut"
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/cursor-inspired-card.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-20 w-full h-full",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/components/cursor-inspired-card.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cursor-inspired-card.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 rounded-2xl pointer-events-none",
                animate: {
                    boxShadow: isHovered ? '0 20px 40px -12px rgba(147, 51, 234, 0.15), 0 8px 16px -8px rgba(219, 39, 119, 0.2), 0 0 0 1px rgba(255,255,255,0.05)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                },
                transition: {
                    duration: 0.4,
                    ease: "easeOut"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/cursor-inspired-card.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cursor-inspired-card.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
} // Helper function to get a consistent gradient for each card index (moved to server-side)
 // This is now handled in the server component to avoid SSR issues
_s(CursorInspiredCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = CursorInspiredCard;
var _c;
__turbopack_context__.k.register(_c, "CursorInspiredCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/data/learning-content.json (json)": ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"categories\":[{\"id\":\"programming-fundamentals\",\"name\":\"Programming Fundamentals\",\"description\":\"Core concepts and principles that form the foundation of software development\",\"icon\":\"💻\",\"color\":\"from-blue-500 to-cyan-500\",\"topics\":[{\"id\":\"programming-languages-paradigms\",\"name\":\"Programming Languages & Paradigms\",\"description\":\"Understanding different programming approaches and language types\",\"category\":\"Programming Fundamentals\",\"articles\":[{\"id\":\"compiled-languages\",\"name\":\"Compiled Languages\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Languages that translate source code into machine code before execution\",\"topics\":[\"Performance\",\"Deployment\",\"Enterprise Systems\"]},{\"id\":\"interpreted-languages\",\"name\":\"Interpreted Languages\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Languages executed line by line at runtime by an interpreter\",\"topics\":[\"Rapid Development\",\"Scripting\",\"Prototyping\"]},{\"id\":\"hybrid-languages\",\"name\":\"Hybrid Languages\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Languages that combine compilation and interpretation approaches\",\"topics\":[\"Virtual Machines\",\"Bytecode\",\"Platform Independence\"]},{\"id\":\"procedural\",\"name\":\"Procedural\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Programming paradigm that uses procedures and functions\",\"topics\":[\"Functions\",\"Modularity\",\"Sequential Logic\"]},{\"id\":\"object-oriented\",\"name\":\"Object-Oriented\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Programming paradigm based on objects and classes\",\"topics\":[\"Encapsulation\",\"Inheritance\",\"Polymorphism\",\"Abstraction\"]},{\"id\":\"functional\",\"name\":\"Functional\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Programming paradigm treating computation as function evaluation\",\"topics\":[\"Pure Functions\",\"Immutability\",\"Function Composition\"]},{\"id\":\"declarative\",\"name\":\"Declarative\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Programming paradigm that describes what you want, not how to achieve it\",\"topics\":[\"SQL\",\"React\",\"Configuration\"]}]},{\"id\":\"core-programming-constructs\",\"name\":\"Core Programming Constructs\",\"description\":\"Fundamental building blocks used in all programming languages\",\"category\":\"Programming Fundamentals\",\"articles\":[{\"id\":\"variables-data-types\",\"name\":\"Variables, data types, memory concepts\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Understanding how data is stored and manipulated in programs\",\"topics\":[\"Memory Management\",\"Type Systems\",\"Variable Scope\"]},{\"id\":\"control-flow\",\"name\":\"Control flow (conditionals, loops, branching)\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"How programs make decisions and repeat operations\",\"topics\":[\"If/Else\",\"Loops\",\"Switch Statements\"]},{\"id\":\"functions-methods-scope\",\"name\":\"Functions/methods and scope\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Organizing code into reusable blocks with proper scope management\",\"topics\":[\"Function Parameters\",\"Return Values\",\"Scope Chain\"]},{\"id\":\"error-handling\",\"name\":\"Error handling and exceptions\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Managing and recovering from runtime errors\",\"topics\":[\"Try/Catch\",\"Exception Types\",\"Error Propagation\"]}]},{\"id\":\"data-structures-algorithms\",\"name\":\"Data Structures & Algorithms\",\"description\":\"Efficient ways to organize data and solve computational problems\",\"category\":\"Programming Fundamentals\",\"articles\":[{\"id\":\"basic-structures\",\"name\":\"Basic structures: arrays, lists, stacks, queues\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Fundamental data organization patterns\",\"topics\":[\"Arrays\",\"Linked Lists\",\"LIFO/FIFO\"]},{\"id\":\"complex-structures\",\"name\":\"Complex structures: trees, graphs, hash tables\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Advanced data structures for complex relationships\",\"topics\":[\"Binary Trees\",\"Graph Traversal\",\"Hash Functions\"]},{\"id\":\"algorithm-design\",\"name\":\"Algorithm design approaches and complexity\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Strategies for designing efficient algorithms\",\"topics\":[\"Big O Notation\",\"Time/Space Complexity\",\"Optimization\"]},{\"id\":\"common-patterns\",\"name\":\"Common patterns: searching, sorting, recursion\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Frequently used algorithmic patterns\",\"topics\":[\"Binary Search\",\"Quick Sort\",\"Recursive Thinking\"]}]},{\"id\":\"code-organization-modularity\",\"name\":\"Code Organization & Modularity\",\"description\":\"Best practices for structuring and organizing code\",\"category\":\"Programming Fundamentals\",\"articles\":[{\"id\":\"functions-classes-modules\",\"name\":\"Functions, classes, and modules\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Building blocks for code organization\",\"topics\":[\"Module Systems\",\"Class Design\",\"Function Libraries\"]},{\"id\":\"separation-of-concerns\",\"name\":\"Separation of concerns and single responsibility\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Principles for clean, maintainable code\",\"topics\":[\"SRP\",\"Modularity\",\"Clean Code\"]},{\"id\":\"code-reusability\",\"name\":\"Code reusability and abstraction\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Creating flexible, reusable code components\",\"topics\":[\"DRY Principle\",\"Abstraction Layers\",\"Component Design\"]},{\"id\":\"documentation-naming\",\"name\":\"Documentation and naming conventions\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Making code readable and maintainable\",\"topics\":[\"Code Comments\",\"Naming Standards\",\"API Documentation\"]}]}]},{\"id\":\"software-architecture-design\",\"name\":\"Software Architecture & Design\",\"description\":\"High-level design patterns and architectural approaches for building robust systems\",\"icon\":\"🏗️\",\"color\":\"from-purple-500 to-pink-500\",\"topics\":[{\"id\":\"system-design-patterns-principles\",\"name\":\"System Design Patterns & Principles\",\"description\":\"Proven architectural patterns for building maintainable systems\",\"category\":\"Software Architecture & Design\",\"articles\":[{\"id\":\"solid-principles\",\"name\":\"SOLID principles\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Five design principles for writing maintainable object-oriented code\",\"topics\":[\"Single Responsibility\",\"Open/Closed\",\"Liskov Substitution\"]},{\"id\":\"design-patterns\",\"name\":\"Design patterns: Observer, Factory, Singleton, MVC\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Common solutions to recurring design problems\",\"topics\":[\"Creational\",\"Structural\",\"Behavioral\"]},{\"id\":\"domain-driven-design\",\"name\":\"Domain-driven design concepts\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Approach for developing software based on business domain\",\"topics\":[\"Bounded Context\",\"Entities\",\"Value Objects\"]},{\"id\":\"clean-architecture\",\"name\":\"Clean architecture principles\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Architecture that separates concerns and dependencies\",\"topics\":[\"Dependency Inversion\",\"Clean Boundaries\",\"Testing\"]}]},{\"id\":\"application-architecture-styles\",\"name\":\"Application Architecture Styles\",\"description\":\"Different architectural approaches for organizing applications\",\"category\":\"Software Architecture & Design\",\"articles\":[{\"id\":\"monolithic-architecture\",\"name\":\"Monolithic Architecture\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Single deployable unit containing all application functionality\",\"topics\":[\"Single Deployment\",\"Shared Database\",\"Internal Communication\"]},{\"id\":\"microservices-architecture\",\"name\":\"Microservices Architecture\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Distributed architecture with independently deployable services\",\"topics\":[\"Service Boundaries\",\"Independent Deployment\",\"Distributed Systems\"]},{\"id\":\"client-server-patterns\",\"name\":\"Client-Server Patterns\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Architectural patterns for client-server communication\",\"topics\":[\"Request-Response\",\"Thin/Thick Clients\",\"Load Distribution\"]}]},{\"id\":\"api-design-integration-patterns\",\"name\":\"API Design & Integration Patterns\",\"description\":\"Patterns for designing and integrating APIs\",\"category\":\"Software Architecture & Design\",\"articles\":[{\"id\":\"restful-apis\",\"name\":\"RESTful APIs\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Architectural style for designing web services\",\"topics\":[\"HTTP Methods\",\"Resource-Based\",\"Stateless\"]},{\"id\":\"graphql\",\"name\":\"GraphQL\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Query language and runtime for APIs\",\"topics\":[\"Single Endpoint\",\"Type System\",\"Query Optimization\"]},{\"id\":\"event-driven-architecture\",\"name\":\"Event-Driven Architecture\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Architecture based on event production and consumption\",\"topics\":[\"Event Sourcing\",\"Message Queues\",\"Asynchronous Processing\"]},{\"id\":\"rpc-vs-rest\",\"name\":\"RPC vs REST\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Comparison of Remote Procedure Call and REST architectures\",\"topics\":[\"Performance\",\"Coupling\",\"Protocol Design\"]}]},{\"id\":\"database-architecture-decisions\",\"name\":\"Database Architecture Decisions\",\"description\":\"Architectural decisions around data storage and management\",\"category\":\"Software Architecture & Design\",\"articles\":[{\"id\":\"sql-vs-nosql\",\"name\":\"SQL vs NoSQL trade-offs\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Choosing between relational and non-relational databases\",\"topics\":[\"ACID vs BASE\",\"Schema Design\",\"Scalability\"]},{\"id\":\"acid-vs-eventual-consistency\",\"name\":\"ACID properties vs eventual consistency\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Trade-offs between consistency and availability\",\"topics\":[\"CAP Theorem\",\"Consistency Models\",\"Distributed Systems\"]},{\"id\":\"read-replicas-write-scaling\",\"name\":\"Read replicas and write scaling\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Strategies for scaling database read and write operations\",\"topics\":[\"Master-Slave\",\"Load Distribution\",\"Replication Lag\"]},{\"id\":\"database-sharding-partitioning\",\"name\":\"Database sharding and partitioning\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Techniques for distributing data across multiple databases\",\"topics\":[\"Horizontal Partitioning\",\"Shard Keys\",\"Cross-Shard Queries\"]}]},{\"id\":\"scalability-patterns\",\"name\":\"Scalability Patterns\",\"description\":\"Patterns for building scalable systems\",\"category\":\"Software Architecture & Design\",\"articles\":[{\"id\":\"horizontal-vs-vertical-scaling\",\"name\":\"Horizontal vs vertical scaling\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Different approaches to scaling system capacity\",\"topics\":[\"Scale Out vs Up\",\"Cost Considerations\",\"Elastic Scaling\"]},{\"id\":\"load-balancing-strategies\",\"name\":\"Load balancing strategies\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Techniques for distributing load across multiple servers\",\"topics\":[\"Round Robin\",\"Weighted Distribution\",\"Health Checks\"]},{\"id\":\"caching-layers\",\"name\":\"Caching layers\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Using caches to improve system performance\",\"topics\":[\"Cache Strategies\",\"CDN\",\"In-Memory Caching\"]},{\"id\":\"database-connection-pooling\",\"name\":\"Database connection pooling\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Managing database connections efficiently\",\"topics\":[\"Connection Management\",\"Pool Sizing\",\"Connection Lifecycle\"]}]}]},{\"id\":\"development-process-methodologies\",\"name\":\"Development Process & Methodologies\",\"description\":\"Methodologies and processes for organizing software development work\",\"icon\":\"⚡\",\"color\":\"from-green-500 to-emerald-500\",\"topics\":[{\"id\":\"software-development-lifecycle-models\",\"name\":\"Software Development Lifecycle Models\",\"description\":\"Different approaches to organizing the software development process\",\"category\":\"Development Process & Methodologies\",\"articles\":[{\"id\":\"waterfall\",\"name\":\"Waterfall\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Sequential development approach with distinct phases\",\"topics\":[\"Sequential Phases\",\"Documentation\",\"Planning\"]},{\"id\":\"agile-scrum\",\"name\":\"Agile/Scrum\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Iterative development with short sprints and regular feedback\",\"topics\":[\"Sprints\",\"Stand-ups\",\"Retrospectives\"]},{\"id\":\"devops-philosophy\",\"name\":\"DevOps Philosophy\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Culture and practices that bridge development and operations\",\"topics\":[\"Collaboration\",\"Automation\",\"Continuous Delivery\"]},{\"id\":\"lean-startup\",\"name\":\"Lean Startup\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Methodology for developing products through validated learning\",\"topics\":[\"MVP\",\"Build-Measure-Learn\",\"Pivot\"]}]},{\"id\":\"team-collaboration-patterns\",\"name\":\"Team Collaboration Patterns\",\"description\":\"Practices for effective team collaboration in software development\",\"category\":\"Development Process & Methodologies\",\"articles\":[{\"id\":\"code-reviews\",\"name\":\"Code Reviews\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Systematic examination of code by team members\",\"topics\":[\"Review Process\",\"Quality Gates\",\"Knowledge Sharing\"]},{\"id\":\"pair-programming\",\"name\":\"Pair Programming\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Two developers working together on the same code\",\"topics\":[\"Driver-Navigator\",\"Knowledge Transfer\",\"Code Quality\"]},{\"id\":\"mob-programming\",\"name\":\"Mob Programming\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Whole team working together on the same thing\",\"topics\":[\"Collective Ownership\",\"Mob Roles\",\"Facilitation\"]},{\"id\":\"documentation-standards\",\"name\":\"Documentation Standards\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Standards and practices for maintaining project documentation\",\"topics\":[\"Living Documentation\",\"API Docs\",\"Decision Records\"]}]},{\"id\":\"project-planning-estimation\",\"name\":\"Project Planning & Estimation\",\"description\":\"Techniques for planning and estimating software development work\",\"category\":\"Development Process & Methodologies\",\"articles\":[{\"id\":\"sprint-planning\",\"name\":\"Sprint Planning\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Planning work for upcoming development iterations\",\"topics\":[\"Story Estimation\",\"Capacity Planning\",\"Sprint Goals\"]},{\"id\":\"technical-debt-management\",\"name\":\"Technical Debt Management\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Strategies for managing and reducing technical debt\",\"topics\":[\"Debt Assessment\",\"Refactoring\",\"Maintenance\"]},{\"id\":\"risk-assessment\",\"name\":\"Risk Assessment\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Identifying and mitigating project risks\",\"topics\":[\"Risk Identification\",\"Mitigation Strategies\",\"Contingency Planning\"]},{\"id\":\"capacity-planning\",\"name\":\"Capacity Planning\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Planning team capacity and resource allocation\",\"topics\":[\"Resource Allocation\",\"Team Velocity\",\"Workload Balancing\"]}]},{\"id\":\"release-management\",\"name\":\"Release Management\",\"description\":\"Processes for managing software releases and deployments\",\"category\":\"Development Process & Methodologies\",\"articles\":[{\"id\":\"version-control-strategies\",\"name\":\"Version Control Strategies\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Strategies for managing code versions and releases\",\"topics\":[\"Git Flow\",\"Feature Branches\",\"Release Branches\"]},{\"id\":\"feature-flags\",\"name\":\"Feature Flags\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Technique for deploying code with features toggled on/off\",\"topics\":[\"Toggle Management\",\"Gradual Rollouts\",\"A/B Testing\"]},{\"id\":\"rollback-procedures\",\"name\":\"Rollback Procedures\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Procedures for reverting deployments when issues occur\",\"topics\":[\"Rollback Strategies\",\"Blue-Green Deployment\",\"Canary Releases\"]},{\"id\":\"change-management\",\"name\":\"Change Management\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Processes for managing changes to production systems\",\"topics\":[\"Change Approval\",\"Release Notes\",\"Communication\"]}]}]},{\"id\":\"tools-development-environment\",\"name\":\"Tools & Development Environment\",\"description\":\"Essential tools and environments for modern software development\",\"icon\":\"🔧\",\"color\":\"from-orange-500 to-red-500\",\"topics\":[{\"id\":\"version-control-systems\",\"name\":\"Version Control Systems\",\"description\":\"Tools and practices for managing code versions and collaboration\",\"category\":\"Tools & Development Environment\",\"articles\":[{\"id\":\"git-workflows\",\"name\":\"Git Workflows\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Different approaches to organizing Git-based development\",\"topics\":[\"Git Flow\",\"GitHub Flow\",\"Feature Branches\"]},{\"id\":\"branching-strategies\",\"name\":\"Branching Strategies\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Strategies for organizing code branches\",\"topics\":[\"Master/Main\",\"Feature Branches\",\"Release Branches\"]},{\"id\":\"pull-request-process\",\"name\":\"Pull Request Process\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Process for reviewing and merging code changes\",\"topics\":[\"PR Templates\",\"Review Process\",\"Merge Strategies\"]},{\"id\":\"repository-organization\",\"name\":\"Repository Organization\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Best practices for organizing code repositories\",\"topics\":[\"Monorepo vs Multirepo\",\"Directory Structure\",\"Documentation\"]}]},{\"id\":\"ides-development-tools\",\"name\":\"IDEs & Development Tools\",\"description\":\"Development environments and productivity tools\",\"category\":\"Tools & Development Environment\",\"articles\":[{\"id\":\"integrated-development-environments\",\"name\":\"Integrated Development Environments\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Full-featured development environments with integrated tools\",\"topics\":[\"IntelliJ\",\"Eclipse\",\"Visual Studio\"]},{\"id\":\"code-editors-vs-ides\",\"name\":\"Code Editors vs IDEs\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Understanding the differences between editors and IDEs\",\"topics\":[\"VS Code\",\"Sublime Text\",\"Feature Comparison\"]},{\"id\":\"developer-productivity-tools\",\"name\":\"Developer Productivity Tools\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Tools that enhance developer productivity and workflow\",\"topics\":[\"Terminal\",\"Git GUI\",\"Task Runners\"]},{\"id\":\"extension-ecosystems\",\"name\":\"Extension Ecosystems\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Plugin and extension systems for development tools\",\"topics\":[\"VS Code Extensions\",\"Plugin Management\",\"Customization\"]}]},{\"id\":\"build-systems-package-management\",\"name\":\"Build Systems & Package Management\",\"description\":\"Tools for building applications and managing dependencies\",\"category\":\"Tools & Development Environment\",\"articles\":[{\"id\":\"build-automation\",\"name\":\"Build Automation\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Automating the process of building applications from source code\",\"topics\":[\"Make\",\"Gradle\",\"Maven\"]},{\"id\":\"package-managers\",\"name\":\"Package Managers\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Tools for managing external dependencies and libraries\",\"topics\":[\"npm\",\"pip\",\"Composer\"]},{\"id\":\"dependency-management\",\"name\":\"Dependency Management\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Strategies for managing project dependencies\",\"topics\":[\"Version Locking\",\"Dependency Updates\",\"Security\"]},{\"id\":\"artifact-management\",\"name\":\"Artifact Management\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Managing build artifacts and distributable packages\",\"topics\":[\"Package Registries\",\"Artifact Storage\",\"Distribution\"]}]},{\"id\":\"local-vs-cloud-development\",\"name\":\"Local vs Cloud Development\",\"description\":\"Development environment options and containerization\",\"category\":\"Tools & Development Environment\",\"articles\":[{\"id\":\"docker-containerization\",\"name\":\"Docker & Containerization\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Using containers for consistent development environments\",\"topics\":[\"Docker\",\"Images\",\"Container Orchestration\"]},{\"id\":\"development-containers\",\"name\":\"Development Containers\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Containerized development environments\",\"topics\":[\"Dev Containers\",\"Remote Development\",\"Environment Consistency\"]},{\"id\":\"cloud-ides\",\"name\":\"Cloud IDEs\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Browser-based development environments\",\"topics\":[\"GitHub Codespaces\",\"GitPod\",\"Cloud9\"]},{\"id\":\"local-development-setup\",\"name\":\"Local Development Setup\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Setting up and maintaining local development environments\",\"topics\":[\"Environment Variables\",\"Local Services\",\"Development Tools\"]}]}]},{\"id\":\"data-management-apis\",\"name\":\"Data Management & APIs\",\"description\":\"Data storage, modeling, and API design principles\",\"icon\":\"🗄️\",\"color\":\"from-indigo-500 to-purple-500\",\"topics\":[{\"id\":\"database-fundamentals\",\"name\":\"Database Fundamentals\",\"description\":\"Core concepts and types of database systems\",\"category\":\"Data Management & APIs\",\"articles\":[{\"id\":\"relational-databases\",\"name\":\"Relational Databases\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Traditional SQL databases with structured relationships\",\"topics\":[\"SQL\",\"ACID Properties\",\"Normalization\"]},{\"id\":\"document-databases\",\"name\":\"Document Databases\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"NoSQL databases that store data in document format\",\"topics\":[\"MongoDB\",\"JSON Documents\",\"Schema Flexibility\"]},{\"id\":\"graph-databases\",\"name\":\"Graph Databases\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Databases optimized for storing and querying relationships\",\"topics\":[\"Nodes\",\"Edges\",\"Graph Queries\"]},{\"id\":\"key-value-stores\",\"name\":\"Key-Value Stores\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Simple databases that store data as key-value pairs\",\"topics\":[\"Redis\",\"Caching\",\"Simple Operations\"]}]},{\"id\":\"data-modeling-concepts\",\"name\":\"Data Modeling Concepts\",\"description\":\"Principles and practices for designing data structures\",\"category\":\"Data Management & APIs\",\"articles\":[{\"id\":\"normalization\",\"name\":\"Normalization\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Process of organizing data to reduce redundancy\",\"topics\":[\"Normal Forms\",\"Data Redundancy\",\"Database Design\"]},{\"id\":\"indexing-strategies\",\"name\":\"Indexing Strategies\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Techniques for improving database query performance\",\"topics\":[\"B-Tree Indexes\",\"Composite Indexes\",\"Query Optimization\"]},{\"id\":\"query-optimization\",\"name\":\"Query Optimization\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Techniques for improving database query performance\",\"topics\":[\"Execution Plans\",\"Index Usage\",\"Query Rewriting\"]},{\"id\":\"schema-design\",\"name\":\"Schema Design\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Designing database schemas for performance and maintainability\",\"topics\":[\"Entity Relationships\",\"Data Types\",\"Constraints\"]}]},{\"id\":\"api-design-principles\",\"name\":\"API Design Principles\",\"description\":\"Best practices for designing robust APIs\",\"category\":\"Data Management & APIs\",\"articles\":[{\"id\":\"rest-best-practices\",\"name\":\"REST Best Practices\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Guidelines for designing RESTful APIs\",\"topics\":[\"Resource Naming\",\"HTTP Methods\",\"Status Codes\"]},{\"id\":\"api-versioning\",\"name\":\"API Versioning\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Strategies for managing API changes over time\",\"topics\":[\"Version Strategies\",\"Backward Compatibility\",\"Deprecation\"]},{\"id\":\"authentication-authorization\",\"name\":\"Authentication & Authorization\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Securing API access and controlling permissions\",\"topics\":[\"JWT\",\"OAuth\",\"API Keys\"]},{\"id\":\"rate-limiting\",\"name\":\"Rate Limiting\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Controlling API usage to prevent abuse\",\"topics\":[\"Throttling\",\"Quota Management\",\"Fair Usage\"]}]},{\"id\":\"data-integration-patterns\",\"name\":\"Data Integration Patterns\",\"description\":\"Patterns for integrating and processing data\",\"category\":\"Data Management & APIs\",\"articles\":[{\"id\":\"etl-vs-elt\",\"name\":\"ETL vs ELT\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Different approaches to data transformation and loading\",\"topics\":[\"Extract Transform Load\",\"Extract Load Transform\",\"Data Warehousing\"]},{\"id\":\"real-time-vs-batch-processing\",\"name\":\"Real-time vs Batch Processing\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Different approaches to processing data\",\"topics\":[\"Stream Processing\",\"Batch Jobs\",\"Latency Requirements\"]},{\"id\":\"data-pipelines\",\"name\":\"Data Pipelines\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Automated workflows for data processing\",\"topics\":[\"Pipeline Orchestration\",\"Data Flow\",\"Error Handling\"]},{\"id\":\"api-gateway-patterns\",\"name\":\"API Gateway Patterns\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Centralized entry point for API management\",\"topics\":[\"Request Routing\",\"Load Balancing\",\"Security\"]}]}]},{\"id\":\"testing-quality-assurance\",\"name\":\"Testing & Quality Assurance\",\"description\":\"Strategies and practices for ensuring software quality\",\"icon\":\"🧪\",\"color\":\"from-teal-500 to-cyan-500\",\"topics\":[{\"id\":\"testing-pyramid\",\"name\":\"Testing Pyramid\",\"description\":\"Hierarchical approach to structuring automated tests\",\"category\":\"Testing & Quality Assurance\",\"articles\":[{\"id\":\"unit-testing\",\"name\":\"Unit Testing\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Testing individual components in isolation\",\"topics\":[\"Test Isolation\",\"Mocking\",\"Test Coverage\"]},{\"id\":\"integration-testing\",\"name\":\"Integration Testing\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Testing interactions between components\",\"topics\":[\"Component Integration\",\"Database Testing\",\"API Testing\"]},{\"id\":\"end-to-end-testing\",\"name\":\"End-to-End Testing\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Testing complete user workflows\",\"topics\":[\"User Journeys\",\"Browser Automation\",\"System Testing\"]},{\"id\":\"contract-testing\",\"name\":\"Contract Testing\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Testing interactions between services\",\"topics\":[\"API Contracts\",\"Consumer-Driven\",\"Service Boundaries\"]}]},{\"id\":\"quality-metrics-standards\",\"name\":\"Quality Metrics & Standards\",\"description\":\"Measuring and maintaining code quality\",\"category\":\"Testing & Quality Assurance\",\"articles\":[{\"id\":\"code-coverage\",\"name\":\"Code Coverage\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Measuring how much code is tested\",\"topics\":[\"Line Coverage\",\"Branch Coverage\",\"Coverage Reports\"]},{\"id\":\"static-analysis\",\"name\":\"Static Analysis\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Analyzing code without executing it\",\"topics\":[\"Linting\",\"Code Smells\",\"Security Analysis\"]},{\"id\":\"performance-benchmarks\",\"name\":\"Performance Benchmarks\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Measuring and tracking application performance\",\"topics\":[\"Load Testing\",\"Performance Metrics\",\"Benchmarking\"]},{\"id\":\"code-quality-gates\",\"name\":\"Code Quality Gates\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Automated checks that enforce quality standards\",\"topics\":[\"Quality Thresholds\",\"Build Failures\",\"Quality Metrics\"]}]},{\"id\":\"debugging-methodologies\",\"name\":\"Debugging Methodologies\",\"description\":\"Systematic approaches to finding and fixing bugs\",\"category\":\"Testing & Quality Assurance\",\"articles\":[{\"id\":\"logging-strategies\",\"name\":\"Logging Strategies\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Effective approaches to application logging\",\"topics\":[\"Log Levels\",\"Structured Logging\",\"Log Aggregation\"]},{\"id\":\"debugging-tools\",\"name\":\"Debugging Tools\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Tools and techniques for debugging applications\",\"topics\":[\"Debuggers\",\"Profilers\",\"Memory Analysis\"]},{\"id\":\"error-tracking\",\"name\":\"Error Tracking\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Systems for monitoring and tracking application errors\",\"topics\":[\"Error Monitoring\",\"Alert Systems\",\"Error Grouping\"]},{\"id\":\"root-cause-analysis\",\"name\":\"Root Cause Analysis\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Systematic approach to finding the underlying cause of issues\",\"topics\":[\"5 Whys\",\"Fault Tree Analysis\",\"Problem Solving\"]}]},{\"id\":\"code-review-practices\",\"name\":\"Code Review Practices\",\"description\":\"Best practices for reviewing and improving code quality\",\"category\":\"Testing & Quality Assurance\",\"articles\":[{\"id\":\"review-criteria\",\"name\":\"Review Criteria\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Standards and criteria for evaluating code changes\",\"topics\":[\"Review Checklist\",\"Quality Standards\",\"Best Practices\"]},{\"id\":\"review-process\",\"name\":\"Review Process\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Structured process for conducting code reviews\",\"topics\":[\"Pull Requests\",\"Review Workflow\",\"Approval Process\"]},{\"id\":\"automated-checks\",\"name\":\"Automated Checks\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Automated tools that assist in code review\",\"topics\":[\"Lint Checks\",\"Security Scans\",\"Format Validation\"]},{\"id\":\"knowledge-sharing\",\"name\":\"Knowledge Sharing\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Using code reviews to share knowledge across teams\",\"topics\":[\"Learning Opportunities\",\"Best Practices\",\"Team Growth\"]}]}]},{\"id\":\"deployment-operations-devops\",\"name\":\"Deployment & Operations (DevOps)\",\"description\":\"Infrastructure, deployment, and operational practices for software systems\",\"icon\":\"🚀\",\"color\":\"from-rose-500 to-pink-500\",\"topics\":[{\"id\":\"infrastructure-concepts\",\"name\":\"Infrastructure Concepts\",\"description\":\"Fundamental infrastructure concepts for deploying applications\",\"category\":\"Deployment & Operations (DevOps)\",\"articles\":[{\"id\":\"servers-hosting\",\"name\":\"Servers & Hosting\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Different approaches to hosting applications\",\"topics\":[\"Physical Servers\",\"Virtual Machines\",\"Cloud Hosting\"]},{\"id\":\"containers\",\"name\":\"Containers\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Lightweight, portable application packaging\",\"topics\":[\"Docker\",\"Container Images\",\"Container Runtime\"]},{\"id\":\"kubernetes\",\"name\":\"Kubernetes\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Container orchestration platform\",\"topics\":[\"Pods\",\"Services\",\"Deployments\"]},{\"id\":\"infrastructure-as-code\",\"name\":\"Infrastructure as Code\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Managing infrastructure through code and automation\",\"topics\":[\"Terraform\",\"CloudFormation\",\"Version Control\"]}]},{\"id\":\"ci-cd-pipelines\",\"name\":\"CI/CD Pipelines\",\"description\":\"Automated processes for building, testing, and deploying software\",\"category\":\"Deployment & Operations (DevOps)\",\"articles\":[{\"id\":\"continuous-integration\",\"name\":\"Continuous Integration\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Practice of frequently integrating code changes\",\"topics\":[\"Build Automation\",\"Automated Testing\",\"Integration\"]},{\"id\":\"continuous-deployment\",\"name\":\"Continuous Deployment\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Automated deployment of code to production\",\"topics\":[\"Deployment Automation\",\"Release Pipeline\",\"Production Deployment\"]},{\"id\":\"pipeline-stages\",\"name\":\"Pipeline Stages\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Different stages in a CI/CD pipeline\",\"topics\":[\"Build\",\"Test\",\"Deploy\",\"Stages\"]},{\"id\":\"tool-ecosystem\",\"name\":\"Tool Ecosystem\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Tools and platforms for implementing CI/CD\",\"topics\":[\"Jenkins\",\"GitHub Actions\",\"GitLab CI\"]}]},{\"id\":\"monitoring-observability\",\"name\":\"Monitoring & Observability\",\"description\":\"Techniques for monitoring and understanding system behavior\",\"category\":\"Deployment & Operations (DevOps)\",\"articles\":[{\"id\":\"application-monitoring\",\"name\":\"Application Monitoring\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Monitoring application performance and behavior\",\"topics\":[\"APM\",\"Performance Metrics\",\"User Experience\"]},{\"id\":\"infrastructure-monitoring\",\"name\":\"Infrastructure Monitoring\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Monitoring servers, networks, and infrastructure\",\"topics\":[\"System Metrics\",\"Resource Usage\",\"Network Monitoring\"]},{\"id\":\"logging-systems\",\"name\":\"Logging Systems\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Centralized logging and log analysis\",\"topics\":[\"Log Aggregation\",\"Log Analysis\",\"Search\"]},{\"id\":\"distributed-tracing\",\"name\":\"Distributed Tracing\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Tracing requests across distributed systems\",\"topics\":[\"Request Tracing\",\"Microservices\",\"Performance Analysis\"]}]},{\"id\":\"incident-response-reliability\",\"name\":\"Incident Response & Reliability\",\"description\":\"Practices for maintaining system reliability and responding to incidents\",\"category\":\"Deployment & Operations (DevOps)\",\"articles\":[{\"id\":\"on-call-practices\",\"name\":\"On-Call Practices\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Practices for managing on-call responsibilities\",\"topics\":[\"Rotation Schedules\",\"Escalation\",\"Alert Management\"]},{\"id\":\"post-mortem-process\",\"name\":\"Post-Mortem Process\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Learning from incidents through structured analysis\",\"topics\":[\"Incident Analysis\",\"Root Cause\",\"Improvement Actions\"]},{\"id\":\"site-reliability-engineering\",\"name\":\"Site Reliability Engineering\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Engineering approach to reliability and operations\",\"topics\":[\"SLI/SLO\",\"Error Budgets\",\"Reliability Engineering\"]},{\"id\":\"disaster-recovery\",\"name\":\"Disaster Recovery\",\"learningStatus\":\"Not started\",\"priorityStatus\":\"Low\",\"description\":\"Planning and procedures for recovering from major incidents\",\"topics\":[\"Backup Strategies\",\"Recovery Plans\",\"Business Continuity\"]}]}]}]}"));}),
"[project]/src/lib/data.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "calculateCategoryProgress": ()=>calculateCategoryProgress,
    "calculateProgress": ()=>calculateProgress,
    "calculateTopicProgress": ()=>calculateTopicProgress,
    "getAllCategories": ()=>getAllCategories,
    "getArticleById": ()=>getArticleById,
    "getCategoryById": ()=>getCategoryById,
    "getCategoryByName": ()=>getCategoryByName,
    "getCompletionPercentage": ()=>getCompletionPercentage,
    "getPriorityColor": ()=>getPriorityColor,
    "getStatusColor": ()=>getStatusColor,
    "getStatusIcon": ()=>getStatusIcon,
    "getTopicById": ()=>getTopicById
});
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$learning$2d$content$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/learning-content.json (json)");
;
const data = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$learning$2d$content$2e$json__$28$json$29$__["default"];
function getAllCategories() {
    return data.categories;
}
function getCategoryById(id) {
    return data.categories.find((category)=>category.id === id) || null;
}
function getCategoryByName(name) {
    return data.categories.find((category)=>category.name === name) || null;
}
function getTopicById(topicId) {
    for (const category of data.categories){
        const topic = category.topics.find((topic)=>topic.id === topicId);
        if (topic) return topic;
    }
    return null;
}
function getArticleById(articleId) {
    for (const category of data.categories){
        for (const topic of category.topics){
            const article = topic.articles.find((article)=>article.id === articleId);
            if (article) return article;
        }
    }
    return null;
}
function calculateProgress(articles) {
    const total = articles.length;
    const completed = articles.filter((a)=>a.learningStatus === 'Completed').length;
    const inProgress = articles.filter((a)=>a.learningStatus === 'In progress').length;
    const reviewing = articles.filter((a)=>a.learningStatus === 'Reviewing').length;
    const notStarted = articles.filter((a)=>a.learningStatus === 'Not started').length;
    return {
        total,
        completed,
        inProgress,
        reviewing,
        notStarted
    };
}
function calculateCategoryProgress(category) {
    const allArticles = category.topics.flatMap((topic)=>topic.articles);
    return calculateProgress(allArticles);
}
function calculateTopicProgress(topic) {
    return calculateProgress(topic.articles);
}
function getCompletionPercentage(progress) {
    return progress.total > 0 ? Math.round(progress.completed / progress.total * 100) : 0;
}
function getStatusColor(status) {
    switch(status){
        case 'Completed':
            return 'bg-green-100 text-green-800 border-green-200';
        case 'In progress':
            return 'bg-blue-100 text-blue-800 border-blue-200';
        case 'Reviewing':
            return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        case 'Not started':
            return 'bg-gray-100 text-gray-800 border-gray-200';
        default:
            return 'bg-gray-100 text-gray-800 border-gray-200';
    }
}
function getStatusIcon(status) {
    switch(status){
        case 'Completed':
            return '✅';
        case 'In progress':
            return '📚';
        case 'Reviewing':
            return '⭐';
        case 'Not started':
            return '⭕';
        default:
            return '⭕';
    }
}
function getPriorityColor(priority) {
    switch(priority){
        case 'Critical':
            return 'bg-red-100 text-red-800 border-red-200';
        case 'High':
            return 'bg-orange-100 text-orange-800 border-orange-200';
        case 'Medium':
            return 'bg-yellow-100 text-yellow-800 border-yellow-200';
        case 'Low':
            return 'bg-blue-100 text-blue-800 border-blue-200';
        default:
            return 'bg-gray-100 text-gray-800 border-gray-200';
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/topic-card-client.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TopicCardClient": ()=>TopicCardClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cursor$2d$inspired$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cursor-inspired-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function TopicCardClient(param) {
    let { topic, index, topicProgress, topicCompletedPercentage, gradient } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cursor$2d$inspired$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorInspiredCard"], {
        className: "cursor-pointer",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/topic/".concat(topic.id),
            className: "block p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-200 flex-1 pr-4 transition-colors duration-300",
                            children: topic.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/topic-card-client.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-right flex-shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold text-gray-900 dark:text-white",
                                    children: [
                                        topicProgress.completed,
                                        "/",
                                        topicProgress.total
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/topic-card-client.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                    children: "Articles"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/topic-card-client.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/topic-card-client.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/topic-card-client.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 dark:text-gray-300 text-sm mb-4",
                    children: topic.description
                }, void 0, false, {
                    fileName: "[project]/src/components/topic-card-client.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "h-full bg-gradient-to-r ".concat(gradient, " transition-all duration-500 ease-out"),
                            initial: {
                                width: 0
                            },
                            animate: {
                                width: "".concat(topicCompletedPercentage, "%")
                            },
                            transition: {
                                duration: 1,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/topic-card-client.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/topic-card-client.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/topic-card-client.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: (()=>{
                        // Filter out "not started" articles
                        const meaningfulArticles = topic.articles.filter((article)=>article.learningStatus !== 'not started');
                        if (meaningfulArticles.length === 0) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-500 dark:text-gray-400 italic",
                                children: [
                                    topic.articles.length,
                                    " articles ready to learn"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/topic-card-client.tsx",
                                lineNumber: 69,
                                columnNumber: 17
                            }, this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                meaningfulArticles.slice(0, 3).map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusIcon"])(article.learningStatus)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/topic-card-client.tsx",
                                                lineNumber: 79,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-700 dark:text-gray-300 truncate",
                                                children: article.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/topic-card-client.tsx",
                                                lineNumber: 80,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, article.id, true, {
                                        fileName: "[project]/src/components/topic-card-client.tsx",
                                        lineNumber: 78,
                                        columnNumber: 19
                                    }, this)),
                                meaningfulArticles.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-gray-500 dark:text-gray-400",
                                    children: [
                                        "+",
                                        meaningfulArticles.length - 3,
                                        " more in progress"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/topic-card-client.tsx",
                                    lineNumber: 84,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true);
                    })()
                }, void 0, false, {
                    fileName: "[project]/src/components/topic-card-client.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400",
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: 0.95
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-full bg-gradient-to-r ".concat(gradient, " flex items-center justify-center shadow-lg"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4 text-white",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 5l7 7-7 7"
                            }, void 0, false, {
                                fileName: "[project]/src/components/topic-card-client.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/topic-card-client.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/topic-card-client.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/topic-card-client.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/topic-card-client.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/topic-card-client.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = TopicCardClient;
var _c;
__turbopack_context__.k.register(_c, "TopicCardClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_647cf640._.js.map