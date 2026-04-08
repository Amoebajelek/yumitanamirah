module.exports = [
"[project]/Documents/project/yumitanamirah/src/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const navLinks = [
    {
        label: "About",
        href: "#about"
    },
    {
        label: "Skills",
        href: "#skills"
    },
    {
        label: "Experience",
        href: "#experience"
    },
    {
        label: "Portfolio",
        href: "#portfolio"
    },
    {
        label: "Achievements",
        href: "#achievements"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];
function Navbar() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].nav, {
                initial: {
                    y: -100,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.8,
                    ease: [
                        0.16,
                        1,
                        0.3,
                        1
                    ]
                },
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    padding: scrolled ? "12px 40px" : "20px 40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.4s ease",
                    background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
                    backdropFilter: scrolled ? "blur(20px)" : "none",
                    borderBottom: scrolled ? "1px solid rgba(201,168,76,0.1)" : "none"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        style: {
                            fontFamily: "Playfair Display, serif",
                            fontSize: "1.2rem",
                            color: "var(--gold)",
                            textDecoration: "none",
                            letterSpacing: "0.05em"
                        },
                        children: [
                            "YN",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "var(--text-muted)"
                                },
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/Documents/project/yumitanamirah/src/components/Navbar.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Navbar.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "32px",
                            alignItems: "center"
                        },
                        className: "hidden-mobile",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                style: {
                                    color: "var(--text-muted)",
                                    textDecoration: "none",
                                    fontSize: "0.85rem",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    transition: "color 0.2s",
                                    fontWeight: 400
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.color = "var(--gold)",
                                onMouseLeave: (e)=>e.currentTarget.style.color = "var(--text-muted)",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/Documents/project/yumitanamirah/src/components/Navbar.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Navbar.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMenuOpen(!menuOpen),
                        className: "show-mobile",
                        style: {
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "var(--gold)",
                            fontSize: "1.4rem",
                            padding: "4px"
                        },
                        children: menuOpen ? "✕" : "☰"
                    }, void 0, false, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Navbar.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/Navbar.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -20
                    },
                    style: {
                        position: "fixed",
                        top: "60px",
                        left: 0,
                        right: 0,
                        zIndex: 49,
                        background: "rgba(10,10,10,0.97)",
                        backdropFilter: "blur(20px)",
                        padding: "24px 40px",
                        borderBottom: "1px solid var(--border)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px"
                    },
                    children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link.href,
                            onClick: ()=>setMenuOpen(false),
                            style: {
                                color: "var(--text)",
                                textDecoration: "none",
                                fontSize: "1.1rem",
                                fontFamily: "Playfair Display, serif",
                                fontStyle: "italic"
                            },
                            children: link.label
                        }, link.href, false, {
                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Navbar.tsx",
                            lineNumber: 113,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Navbar.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/Navbar.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/Navbar.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Documents/project/yumitanamirah/src/components/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "120px 40px 80px",
            position: "relative",
            overflow: "hidden",
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "20%",
                    left: "10%",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: "20%",
                    right: "5%",
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(212,116,138,0.04) 0%, transparent 70%)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scaleX: 0
                },
                animate: {
                    scaleX: 1
                },
                transition: {
                    duration: 1.2,
                    delay: 0.2
                },
                style: {
                    width: "1px",
                    height: "80px",
                    background: "linear-gradient(180deg, transparent, var(--gold))",
                    marginBottom: "40px",
                    transformOrigin: "top"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.7,
                    delay: 0.4
                },
                style: {
                    fontSize: "0.75rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "24px",
                    fontWeight: 400
                },
                children: "Social Media Specialist & Content Creator"
            }, void 0, false, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.9,
                    delay: 0.6
                },
                style: {
                    fontFamily: "Playfair Display, serif",
                    fontSize: "clamp(3rem, 8vw, 7rem)",
                    fontWeight: 600,
                    lineHeight: 1.05,
                    marginBottom: "16px",
                    color: "var(--text)"
                },
                children: [
                    "Yumita",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        style: {
                            fontStyle: "italic",
                            color: "var(--gold)"
                        },
                        children: "Namirah"
                    }, void 0, false, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.7,
                    delay: 0.9
                },
                style: {
                    fontSize: "0.85rem",
                    letterSpacing: "0.15em",
                    color: "var(--text-muted)",
                    marginBottom: "48px",
                    textTransform: "uppercase"
                },
                children: "S.S — Jakarta, Indonesia"
            }, void 0, false, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.7,
                    delay: 1.1
                },
                style: {
                    display: "flex",
                    gap: "16px",
                    flexWrap: "wrap",
                    justifyContent: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#portfolio",
                        style: {
                            padding: "14px 36px",
                            border: "1px solid var(--gold)",
                            color: "var(--gold)",
                            textDecoration: "none",
                            fontSize: "0.8rem",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            transition: "all 0.3s ease",
                            background: "transparent",
                            display: "inline-block"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.background = "var(--gold)";
                            e.currentTarget.style.color = "var(--bg)";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "var(--gold)";
                        },
                        children: "View Portfolio"
                    }, void 0, false, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#contact",
                        style: {
                            padding: "14px 36px",
                            border: "1px solid rgba(240,237,232,0.15)",
                            color: "var(--text-muted)",
                            textDecoration: "none",
                            fontSize: "0.8rem",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            transition: "all 0.3s ease",
                            background: "transparent",
                            display: "inline-block"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.borderColor = "rgba(240,237,232,0.4)";
                            e.currentTarget.style.color = "var(--text)";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.borderColor = "rgba(240,237,232,0.15)";
                            e.currentTarget.style.color = "var(--text-muted)";
                        },
                        children: "Get In Touch"
                    }, void 0, false, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.7,
                    delay: 1.3
                },
                style: {
                    position: "absolute",
                    bottom: "40px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: "24px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.instagram.com/namirah.yumita",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            color: "var(--text-muted)",
                            textDecoration: "none",
                            fontSize: "0.75rem",
                            letterSpacing: "0.1em",
                            transition: "color 0.2s"
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.color = "var(--gold)",
                        onMouseLeave: (e)=>e.currentTarget.style.color = "var(--text-muted)",
                        children: "Instagram"
                    }, void 0, false, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--border)",
                            userSelect: "none"
                        },
                        children: "·"
                    }, void 0, false, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.tiktok.com/@namirah.yumita",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            color: "var(--text-muted)",
                            textDecoration: "none",
                            fontSize: "0.75rem",
                            letterSpacing: "0.1em",
                            transition: "color 0.2s"
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.color = "var(--gold)",
                        onMouseLeave: (e)=>e.currentTarget.style.color = "var(--text-muted)",
                        children: "TikTok"
                    }, void 0, false, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--border)",
                            userSelect: "none"
                        },
                        children: "·"
                    }, void 0, false, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://linkedin.com/in/andi-yumita-namirah-51444a243/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            color: "var(--text-muted)",
                            textDecoration: "none",
                            fontSize: "0.75rem",
                            letterSpacing: "0.1em",
                            transition: "color 0.2s"
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.color = "var(--gold)",
                        onMouseLeave: (e)=>e.currentTarget.style.color = "var(--text-muted)",
                        children: "LinkedIn"
                    }, void 0, false, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/project/yumitanamirah/src/components/Hero.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/project/yumitanamirah/src/components/About.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function About() {
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        triggerOnce: true,
        threshold: 0.2
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        ref: ref,
        style: {
            padding: "120px 40px",
            maxWidth: "1100px",
            margin: "0 auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "80px",
                    alignItems: "center"
                },
                className: "about-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -40
                        },
                        animate: inView ? {
                            opacity: 1,
                            x: 0
                        } : {},
                        transition: {
                            duration: 0.8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "0.7rem",
                                    letterSpacing: "0.3em",
                                    color: "var(--gold)",
                                    textTransform: "uppercase",
                                    marginBottom: "16px"
                                },
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "Playfair Display, serif",
                                    fontSize: "clamp(2rem, 4vw, 3rem)",
                                    fontWeight: 600,
                                    lineHeight: 1.2,
                                    marginBottom: "32px"
                                },
                                children: [
                                    "Crafting stories that",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        style: {
                                            fontStyle: "italic",
                                            color: "var(--rose)"
                                        },
                                        children: "resonate & convert"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "16px",
                                    marginBottom: "32px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "section-line"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "var(--text-muted)",
                                    lineHeight: 1.9,
                                    fontSize: "0.95rem",
                                    marginBottom: "20px"
                                },
                                children: "Saya adalah Yumita Namirah, Social Media Specialist dan Content Creator berbasis di Jakarta dengan passion mendalam di dunia digital storytelling. Dengan pengalaman sejak 2018, saya telah membangun karier yang menjembatani kreativitas dan strategi konten."
                            }, void 0, false, {
                                fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "var(--text-muted)",
                                    lineHeight: 1.9,
                                    fontSize: "0.95rem",
                                    marginBottom: "32px"
                                },
                                children: "Dari brand komersial hingga gerakan kepramukaan internasional — termasuk World Scout Jamboree di Korea Selatan — saya membawa perspektif unik dalam membangun brand voice yang autentik dan konten yang berdampak nyata."
                            }, void 0, false, {
                                fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "40px"
                                },
                                children: [
                                    {
                                        num: "7+",
                                        label: "Years Creating"
                                    },
                                    {
                                        num: "2K+",
                                        label: "Contents Made"
                                    },
                                    {
                                        num: "5+",
                                        label: "Brands Handled"
                                    }
                                ].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: "Playfair Display, serif",
                                                    fontSize: "2rem",
                                                    color: "var(--gold)",
                                                    fontWeight: 600
                                                },
                                                children: stat.num
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "0.75rem",
                                                    color: "var(--text-muted)",
                                                    letterSpacing: "0.1em",
                                                    textTransform: "uppercase",
                                                    marginTop: "4px"
                                                },
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, stat.label, true, {
                                        fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 40
                        },
                        animate: inView ? {
                            opacity: 1,
                            x: 0
                        } : {},
                        transition: {
                            duration: 0.8,
                            delay: 0.2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: "var(--bg-card)",
                                border: "1px solid var(--border)",
                                padding: "40px",
                                position: "relative"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        top: "-1px",
                                        right: "-1px",
                                        width: "40px",
                                        height: "40px",
                                        borderTop: "2px solid var(--gold)",
                                        borderRight: "2px solid var(--gold)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        bottom: "-1px",
                                        left: "-1px",
                                        width: "40px",
                                        height: "40px",
                                        borderBottom: "2px solid var(--gold)",
                                        borderLeft: "2px solid var(--gold)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: "0.65rem",
                                        letterSpacing: "0.3em",
                                        color: "var(--text-muted)",
                                        textTransform: "uppercase",
                                        marginBottom: "24px"
                                    },
                                    children: "Profile"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                [
                                    {
                                        label: "Full Name",
                                        value: "Yumita Namirah, S.S"
                                    },
                                    {
                                        label: "Position",
                                        value: "Social Media Specialist & Content Creator"
                                    },
                                    {
                                        label: "Location",
                                        value: "Koja, Jakarta Utara, DKI Jakarta"
                                    },
                                    {
                                        label: "Education",
                                        value: "S1 Sastra Inggris — Universitas Pertiwi Jakarta"
                                    },
                                    {
                                        label: "Email",
                                        value: "Andiyumitanamirah@gmail.com"
                                    },
                                    {
                                        label: "Phone",
                                        value: "081315198387 (WA Only)"
                                    }
                                ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: "14px 0",
                                            borderBottom: i < 5 ? "1px solid rgba(201,168,76,0.08)" : "none",
                                            display: "grid",
                                            gridTemplateColumns: "110px 1fr",
                                            gap: "16px",
                                            alignItems: "start"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "0.7rem",
                                                    color: "var(--text-muted)",
                                                    letterSpacing: "0.05em",
                                                    textTransform: "uppercase",
                                                    paddingTop: "2px"
                                                },
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "0.9rem",
                                                    color: "var(--text)",
                                                    lineHeight: 1.4
                                                },
                                                children: item.value
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @media (max-width: 767px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/project/yumitanamirah/src/components/About.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/project/yumitanamirah/src/data/portfolio.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "achievements",
    ()=>achievements,
    "experiences",
    ()=>experiences,
    "portfolioLinks2024",
    ()=>portfolioLinks2024,
    "portfolioLinks2025",
    ()=>portfolioLinks2025,
    "portfolioLinks2026",
    ()=>portfolioLinks2026,
    "skills",
    ()=>skills,
    "tiktokLinks2022",
    ()=>tiktokLinks2022,
    "tiktokLinks2023",
    ()=>tiktokLinks2023
]);
const portfolioLinks2026 = [
    "https://www.instagram.com/reel/DTKGdnBEgyq/",
    "https://www.instagram.com/reel/DTUAhpzEkiq/",
    "https://www.instagram.com/reel/DTnKnSoEmL0/",
    "https://www.instagram.com/reel/DTxRxgjEh4j/",
    "https://www.instagram.com/reel/DTz_vANklhF/",
    "https://www.instagram.com/reel/DUApW9JEoZT/",
    "https://www.instagram.com/reel/DUDKpS3En-M/",
    "https://www.instagram.com/reel/DUSIbhMEvUL/",
    "https://www.instagram.com/reel/DUVPUv7Etbm/",
    "https://www.instagram.com/reel/DUfUzb4EjnG/",
    "https://www.instagram.com/reel/DUnep2yko80/",
    "https://www.instagram.com/reel/DU5n7g2kjma/",
    "https://www.instagram.com/reel/DU-i3I3ko7b/",
    "https://www.instagram.com/reel/DVFrnuNknT9/",
    "https://www.instagram.com/reel/DVDDPdcEgYF/",
    "https://www.instagram.com/reel/DVlfckxie4Y/",
    "https://www.instagram.com/reel/DVtN2D2iRHL/",
    "https://www.instagram.com/reel/DV5xMYUiSd2/",
    "https://www.instagram.com/reel/DV8FQ93kn62/",
    "https://www.instagram.com/reel/DWA1ud-EtU3/",
    "https://www.instagram.com/reel/DWB_wLkEkbm/",
    "https://www.instagram.com/reel/DWffT43Eukh/",
    "https://www.instagram.com/reel/DWlphQHp-CC/",
    "https://www.instagram.com/reel/DWn2XbIEkIz/",
    "https://www.instagram.com/reel/DWqDiCDkseL/",
    "https://www.instagram.com/reel/DWx3cY4Eq68/",
    "https://www.instagram.com/reel/DW3SFmmEoqE/"
];
const portfolioLinks2025 = [
    "https://www.instagram.com/reel/DSjQSX2Esm0/",
    "https://www.instagram.com/reel/DSM--JDkgzB/",
    "https://www.instagram.com/reel/DSFE5MaEoxL/",
    "https://www.instagram.com/reel/DSCs2d5Ev5d/",
    "https://www.instagram.com/reel/DRwIw4KktRe/",
    "https://www.instagram.com/reel/DRtOOG1kg7I/",
    "https://www.instagram.com/reel/DRkHnDZkoEi/",
    "https://www.instagram.com/reel/DRRi9Iykg_H/",
    "https://www.instagram.com/reel/DQoVDbHEmtr/",
    "https://www.instagram.com/reel/DQdeSxnknrn/",
    "https://www.instagram.com/reel/DQZDw2Vknh2/",
    "https://www.instagram.com/reel/DQVxV9skyBH/",
    "https://www.instagram.com/reel/DQSdokLEp6G/",
    "https://www.instagram.com/reel/DQMWPc5ksZM/",
    "https://www.instagram.com/reel/DP1LMoekhgS/",
    "https://www.instagram.com/reel/DPyjI3Fkoro/",
    "https://www.instagram.com/reel/DPyWEfKEjQx/",
    "https://www.instagram.com/reel/DPvJSYDkuma/",
    "https://www.instagram.com/reel/DPnyYgfEocU/",
    "https://www.instagram.com/reel/DPapxybiBzC/",
    "https://www.instagram.com/reel/DO-QeUoEj_d/",
    "https://www.instagram.com/reel/DNniwpoyXpL/",
    "https://www.instagram.com/reel/DNc7cR0yR1l/",
    "https://www.instagram.com/reel/DNHuDHOypEX/",
    "https://www.instagram.com/reel/DNAn-MMymHb/",
    "https://www.instagram.com/reel/DMpG4sZyMIM/",
    "https://www.instagram.com/reel/DMkp4dEy6rd/",
    "https://www.instagram.com/reel/DMPe1pPTqs5/",
    "https://www.instagram.com/reel/DLztU09yffa/",
    "https://www.instagram.com/reel/DKMNEzcTj5-/",
    "https://www.instagram.com/reel/DJvKdxyydRN/",
    "https://www.instagram.com/reel/DJqcAeyS7LG/",
    "https://www.instagram.com/reel/DJovky-JJXL/",
    "https://www.instagram.com/reel/DJY3LHySo1r/",
    "https://www.instagram.com/reel/DJJwmn8yHrV/",
    "https://www.instagram.com/reel/DH_DEWbygLD/",
    "https://www.instagram.com/reel/DH2DDwTTJZj/",
    "https://www.instagram.com/reel/DHAZS5cyQA9/",
    "https://www.instagram.com/reel/DGw_kqVSUC6/",
    "https://www.instagram.com/reel/DGpx9uKSgj1/",
    "https://www.instagram.com/reel/DEHpSyMSGRe/"
];
const portfolioLinks2024 = [
    "https://www.instagram.com/reel/DDO6mtwSVcH/",
    "https://www.instagram.com/reel/DC_Af2Ay6YE/",
    "https://www.instagram.com/reel/DB2lsDGSGO2/",
    "https://www.instagram.com/reel/DBqpe4ISUTW/",
    "https://www.instagram.com/reel/C_7fB1RSIy4/",
    "https://www.instagram.com/reel/C_uNP7QSPXu/",
    "https://www.instagram.com/reel/C_cXkGBSQB2/",
    "https://www.instagram.com/reel/C-92KSnScQH/",
    "https://www.instagram.com/reel/C-mkSxxyVqQ/",
    "https://www.instagram.com/reel/C9hsDhCSBNa/",
    "https://www.instagram.com/reel/C9Ufh89SJ9P/",
    "https://www.instagram.com/reel/C8d9zfJS23m/",
    "https://www.instagram.com/reel/C8ZtQaRShwo/",
    "https://www.instagram.com/reel/C6kigSPyKgI/",
    "https://www.instagram.com/reel/C6dDeWYSM5L/"
];
const tiktokLinks2023 = [
    "https://vt.tiktok.com/ZSHmy8vj7/",
    "https://vt.tiktok.com/ZSHmyKRY3/",
    "https://vt.tiktok.com/ZSHmyt2JV/",
    "https://vt.tiktok.com/ZSHmygb51/",
    "https://vt.tiktok.com/ZSHmyc1Tk/",
    "https://vt.tiktok.com/ZSHmf8V2c/",
    "https://vt.tiktok.com/ZSHmfR59J/",
    "https://vt.tiktok.com/ZSHmyBVJ7/",
    "https://vt.tiktok.com/ZSHmy53uV/",
    "https://vt.tiktok.com/ZSHmyabAk/",
    "https://vt.tiktok.com/ZSHmyjm6M/",
    "https://vt.tiktok.com/ZSHmyP2YK/",
    "https://vt.tiktok.com/ZSHmyjgja/",
    "https://vt.tiktok.com/ZSHmyadep/"
];
const tiktokLinks2022 = [
    "https://vt.tiktok.com/ZSHmfgMLf/",
    "https://vt.tiktok.com/ZSHmfgjAL/",
    "https://vt.tiktok.com/ZSHmfgjRA/",
    "https://vt.tiktok.com/ZSHmfXJwN/",
    "https://vt.tiktok.com/ZSHmfw8gU/"
];
const skills = [
    {
        name: "Content Plan & Strategy",
        icon: "🗺️"
    },
    {
        name: "Story Telling",
        icon: "✍️"
    },
    {
        name: "Content Writing",
        icon: "📝"
    },
    {
        name: "Content Shooting",
        icon: "📸"
    },
    {
        name: "Content Editing",
        icon: "🎬"
    },
    {
        name: "Performance Analyze",
        icon: "📊"
    },
    {
        name: "Campaign Plan",
        icon: "🎯"
    },
    {
        name: "Team Collaboration",
        icon: "🤝"
    },
    {
        name: "Leadership",
        icon: "🌟"
    },
    {
        name: "Brand Voice",
        icon: "💎"
    }
];
const experiences = [
    {
        company: "DeHakims Official (PT Imaji Hakiki Semesta)",
        role: "Social Media Specialist & Content Creator",
        period: "Mei 2024 – Present",
        type: "full-time",
        current: true
    },
    {
        company: "@namirah.yumita — Instagram & TikTok",
        role: "Content Creator",
        period: "2018 – Present",
        type: "creator",
        current: true
    },
    {
        company: "Humas Dewan Kerja Nasional Pramuka",
        role: "Ka.Sie Social Media Content Creator",
        period: "2024 – Present",
        type: "organization",
        current: true
    },
    {
        company: "Indodana (Indodana Multi Finance)",
        role: "Freelance Talent Marketing",
        period: "Mei 2022 – Mei 2023",
        type: "freelance",
        current: false
    },
    {
        company: "Secret Story Trans7 (PT Duta Visual Nusantara Tivi Tujuh)",
        role: "Freelance Talent & Host",
        period: "2021",
        type: "freelance",
        current: false
    }
];
const achievements = [
    {
        year: "2025",
        title: "Scout Influencer Kwartir Daerah DKI Jakarta",
        role: "Narasumber — Scout Content Creator",
        date: "21 September 2025"
    },
    {
        year: "2025",
        title: "Pra Karantina Calon Duta Genre Jakarta Barat",
        role: "Narasumber — Personal Branding Social Media",
        date: "26 April 2025"
    },
    {
        year: "2025",
        title: "DKR Kebayoran Baru",
        role: "Narasumber — Personal Branding Social Media",
        date: "9 Februari 2025"
    },
    {
        year: "2025",
        title: "PERS Pramuka UIN SGD",
        role: "Narasumber — Produksi Konten",
        date: "6 Februari 2025"
    },
    {
        year: "2024",
        title: "Pertikawan Nasional II 2024 (DKN)",
        role: "Ka.Sie Social Media, Juri Giat Prestasi — Content Creator & Fotografi",
        date: "23-29 September 2024"
    },
    {
        year: "2024",
        title: "Kursus Pengelola Dewan Kerja (DKN)",
        role: "Social Media Content Creator",
        date: "30 Agustus – 4 September 2024"
    },
    {
        year: "2024",
        title: "Raimuna Cabang Kota Bogor 2024",
        role: "Jumpa Tokoh Scout Influencer & Content Creator",
        date: "2 September 2024"
    },
    {
        year: "2023",
        title: "Karantina Finalist Duta GenRe Jakarta Utara 2024",
        role: "Narasumber — Personal & Social Media Branding",
        date: "25 Juni 2024"
    },
    {
        year: "2023",
        title: "Karantina Finalist Duta GenRe Jakarta Utara 2023",
        role: "Narasumber — Personal Branding & Social Media",
        date: "23 Oktober 2023"
    },
    {
        year: "2023",
        title: "Festival Kepramukaan UIN Jakarta",
        role: "Narasumber — Your Media Social, Your Treasure",
        date: "30 September 2023"
    },
    {
        year: "2023",
        title: "Perkemahan Bakti Nasional Saka Bakti Husada 2023 (DKN)",
        role: "Ka.Sie Social Media Content Creator & Reporter",
        date: "18-23 September 2023"
    },
    {
        year: "2023",
        title: "World Scout Jamboree-25",
        role: "Social Media Team — South Korea",
        date: "1-12 Agustus 2023",
        highlight: true
    },
    {
        year: "2023",
        title: "Karang Pamitran Nasional 2023 (Kwarnas)",
        role: "Social Media Content Creator & Reporter",
        date: "3-8 Juli 2023"
    },
    {
        year: "2022",
        title: "Jambore Nasional XI 2022 (Kwarnas)",
        role: "Social Media Content Creator, Reporter & Scout Correspondent Mentor",
        date: "13-21 Agustus 2022",
        highlight: true
    }
];
}),
"[project]/Documents/project/yumitanamirah/src/components/Skills.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Skills
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/src/data/portfolio.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Skills() {
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        triggerOnce: true,
        threshold: 0.1
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        style: {
            padding: "120px 40px",
            background: "var(--bg-card)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1100px",
                margin: "0 auto"
            },
            ref: ref,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: inView ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: 0.7
                    },
                    style: {
                        textAlign: "center",
                        marginBottom: "64px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "0.7rem",
                                letterSpacing: "0.3em",
                                color: "var(--gold)",
                                textTransform: "uppercase",
                                marginBottom: "16px"
                            },
                            children: "Expertise"
                        }, void 0, false, {
                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Skills.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "Playfair Display, serif",
                                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                                fontWeight: 600
                            },
                            children: [
                                "Technical ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    style: {
                                        fontStyle: "italic",
                                        color: "var(--gold)"
                                    },
                                    children: "Skills"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Skills.tsx",
                                    lineNumber: 20,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Skills.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Skills.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                        gap: "16px"
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["skills"].map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: inView ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: 0.5,
                                delay: i * 0.07
                            },
                            style: {
                                background: "var(--bg)",
                                border: "1px solid var(--border)",
                                padding: "24px 20px",
                                display: "flex",
                                alignItems: "center",
                                gap: "14px",
                                cursor: "default",
                                transition: "border-color 0.3s, transform 0.3s"
                            },
                            whileHover: {
                                y: -4,
                                borderColor: "rgba(201,168,76,0.5)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "1.4rem"
                                    },
                                    children: skill.icon
                                }, void 0, false, {
                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Skills.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontSize: "0.85rem",
                                        color: "var(--text)",
                                        lineHeight: 1.3
                                    },
                                    children: skill.name
                                }, void 0, false, {
                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Skills.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, skill.name, true, {
                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Skills.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Skills.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/project/yumitanamirah/src/components/Skills.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/project/yumitanamirah/src/components/Skills.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/project/yumitanamirah/src/components/Experience.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/src/data/portfolio.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const typeColors = {
    "full-time": "#7A9E8E",
    "creator": "#C9A84C",
    "organization": "#D4748A",
    "freelance": "#888880"
};
const typeLabels = {
    "full-time": "Full-time",
    "creator": "Creator",
    "organization": "Organization",
    "freelance": "Freelance"
};
function Experience() {
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        triggerOnce: true,
        threshold: 0.1
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        style: {
            padding: "120px 40px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "900px",
                margin: "0 auto"
            },
            ref: ref,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: inView ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: 0.7
                    },
                    style: {
                        marginBottom: "64px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "0.7rem",
                                letterSpacing: "0.3em",
                                color: "var(--gold)",
                                textTransform: "uppercase",
                                marginBottom: "16px"
                            },
                            children: "Career"
                        }, void 0, false, {
                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Experience.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "Playfair Display, serif",
                                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                                fontWeight: 600
                            },
                            children: [
                                "Work ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    style: {
                                        fontStyle: "italic",
                                        color: "var(--gold)"
                                    },
                                    children: "Experience"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Experience.tsx",
                                    lineNumber: 34,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Experience.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Experience.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                left: "0",
                                top: "8px",
                                bottom: "8px",
                                width: "1px",
                                background: "linear-gradient(180deg, var(--gold), rgba(201,168,76,0.1))"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Experience.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["experiences"].map((exp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -30
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    x: 0
                                } : {},
                                transition: {
                                    duration: 0.6,
                                    delay: i * 0.1
                                },
                                style: {
                                    paddingLeft: "40px",
                                    paddingBottom: "48px",
                                    position: "relative"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            left: "-5px",
                                            top: "8px",
                                            width: "10px",
                                            height: "10px",
                                            borderRadius: "50%",
                                            background: exp.current ? "var(--gold)" : "var(--bg-card2)",
                                            border: `1px solid ${exp.current ? "var(--gold)" : "var(--text-muted)"}`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Experience.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: "var(--bg-card)",
                                            border: "1px solid var(--border)",
                                            padding: "28px 32px",
                                            transition: "border-color 0.3s"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                flexWrap: "wrap",
                                                justifyContent: "space-between",
                                                alignItems: "flex-start",
                                                gap: "12px",
                                                marginBottom: "12px"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: "0.65rem",
                                                                letterSpacing: "0.1em",
                                                                textTransform: "uppercase",
                                                                color: typeColors[exp.type],
                                                                background: `${typeColors[exp.type]}15`,
                                                                padding: "3px 10px",
                                                                border: `1px solid ${typeColors[exp.type]}30`,
                                                                display: "inline-block",
                                                                marginBottom: "10px"
                                                            },
                                                            children: [
                                                                typeLabels[exp.type],
                                                                exp.current && " · Active"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Experience.tsx",
                                                            lineNumber: 81,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            style: {
                                                                fontFamily: "Playfair Display, serif",
                                                                fontSize: "1.15rem",
                                                                fontWeight: 600,
                                                                marginBottom: "6px"
                                                            },
                                                            children: exp.company
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Experience.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: "0.9rem",
                                                                color: "var(--text-muted)"
                                                            },
                                                            children: exp.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Experience.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Experience.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "0.75rem",
                                                        color: "var(--text-muted)",
                                                        letterSpacing: "0.05em",
                                                        whiteSpace: "nowrap",
                                                        paddingTop: "2px"
                                                    },
                                                    children: exp.period
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Experience.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Experience.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Experience.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/Documents/project/yumitanamirah/src/components/Experience.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Experience.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/project/yumitanamirah/src/components/Experience.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/project/yumitanamirah/src/components/Experience.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/src/data/portfolio.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const tabs = [
    {
        id: "2026",
        label: "2026 IG",
        platform: "instagram"
    },
    {
        id: "2025",
        label: "2025 IG",
        platform: "instagram"
    },
    {
        id: "2024",
        label: "2024 IG",
        platform: "instagram"
    },
    {
        id: "tiktok2023",
        label: "2023 TikTok",
        platform: "tiktok"
    },
    {
        id: "tiktok2022",
        label: "2022 TikTok",
        platform: "tiktok"
    }
];
const dataMap = {
    "2026": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioLinks2026"],
    "2025": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioLinks2025"],
    "2024": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["portfolioLinks2024"],
    tiktok2023: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tiktokLinks2023"],
    tiktok2022: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tiktokLinks2022"]
};
function extractIGShortcode(url) {
    const match = url.match(/reel\/([A-Za-z0-9_-]+)/);
    return match ? match[1] : "";
}
function InstagramEmbed({ url }) {
    const shortcode = extractIGShortcode(url);
    if (!shortcode) return null;
    // Use Instagram's oEmbed thumbnail approach via their CDN
    const thumbnailUrl = `https://www.instagram.com/p/${shortcode}/media/?size=m`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        style: {
            display: "block",
            background: "var(--bg-card2)",
            border: "1px solid var(--border)",
            overflow: "hidden",
            textDecoration: "none",
            transition: "border-color 0.3s, transform 0.3s",
            aspectRatio: "9/16",
            position: "relative"
        },
        onMouseEnter: (e)=>{
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
            e.currentTarget.style.transform = "translateY(-4px)";
        },
        onMouseLeave: (e)=>{
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.transform = "translateY(0)";
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            src: `https://www.instagram.com/reel/${shortcode}/embed/`,
            style: {
                width: "100%",
                height: "100%",
                border: "none",
                position: "absolute",
                inset: 0
            },
            scrolling: "no",
            allowTransparency: true,
            loading: "lazy",
            title: `Instagram Reel ${shortcode}`
        }, void 0, false, {
            fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function TikTokEmbed({ url }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: url,
        target: "_blank",
        rel: "noopener noreferrer",
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bg-card2)",
            border: "1px solid var(--border)",
            overflow: "hidden",
            textDecoration: "none",
            transition: "border-color 0.3s, transform 0.3s",
            aspectRatio: "9/16",
            position: "relative",
            gap: "12px"
        },
        onMouseEnter: (e)=>{
            e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
            e.currentTarget.style.transform = "translateY(-4px)";
        },
        onMouseLeave: (e)=>{
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.transform = "translateY(0)";
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                width: "40",
                height: "40",
                fill: "var(--gold)",
                opacity: "0.7",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.86a8.18 8.18 0 004.77 1.52V6.95a4.84 4.84 0 01-1-.26z"
                }, void 0, false, {
                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.05em"
                },
                children: "Watch on TikTok"
            }, void 0, false, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: "16px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "0.65rem",
                    color: "var(--text-muted)",
                    background: "rgba(0,0,0,0.5)",
                    padding: "4px 10px",
                    whiteSpace: "nowrap",
                    maxWidth: "90%",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                },
                children: url.replace("https://", "")
            }, void 0, false, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
function Portfolio() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("2026");
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(12);
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        triggerOnce: true,
        threshold: 0.05
    });
    const currentPlatform = tabs.find((t)=>t.id === activeTab)?.platform ?? "instagram";
    const links = dataMap[activeTab];
    const visibleLinks = links.slice(0, visibleCount);
    const handleTabChange = (tab)=>{
        setActiveTab(tab);
        setVisibleCount(12);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "portfolio",
        style: {
            padding: "120px 40px",
            background: "var(--bg-card)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1200px",
                margin: "0 auto"
            },
            ref: ref,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: inView ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: 0.7
                    },
                    style: {
                        marginBottom: "48px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "0.7rem",
                                letterSpacing: "0.3em",
                                color: "var(--gold)",
                                textTransform: "uppercase",
                                marginBottom: "16px"
                            },
                            children: "Work"
                        }, void 0, false, {
                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "Playfair Display, serif",
                                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                                fontWeight: 600,
                                marginBottom: "8px"
                            },
                            children: [
                                "Content ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    style: {
                                        fontStyle: "italic",
                                        color: "var(--gold)"
                                    },
                                    children: "Portfolio"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                                    lineNumber: 165,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "var(--text-muted)",
                                fontSize: "0.9rem"
                            },
                            children: [
                                links.length,
                                " karya tersedia di tab ini"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: "8px",
                        marginBottom: "40px",
                        flexWrap: "wrap"
                    },
                    children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleTabChange(tab.id),
                            style: {
                                padding: "8px 20px",
                                background: activeTab === tab.id ? "var(--gold)" : "transparent",
                                border: `1px solid ${activeTab === tab.id ? "var(--gold)" : "var(--border)"}`,
                                color: activeTab === tab.id ? "var(--bg)" : "var(--text-muted)",
                                fontSize: "0.75rem",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                cursor: "pointer",
                                transition: "all 0.2s",
                                fontFamily: "DM Sans, sans-serif"
                            },
                            children: [
                                tab.label,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        marginLeft: "8px",
                                        fontSize: "0.65rem",
                                        opacity: 0.7,
                                        background: activeTab === tab.id ? "rgba(0,0,0,0.2)" : "rgba(201,168,76,0.1)",
                                        padding: "1px 5px"
                                    },
                                    children: dataMap[tab.id].length
                                }, void 0, false, {
                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, tab.id, true, {
                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                        gap: "16px"
                    },
                    children: visibleLinks.map((url, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: inView ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: 0.4,
                                delay: Math.min(i * 0.04, 0.5)
                            },
                            children: currentPlatform === "instagram" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InstagramEmbed, {
                                url: url
                            }, void 0, false, {
                                fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                                lineNumber: 219,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TikTokEmbed, {
                                url: url
                            }, void 0, false, {
                                fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                                lineNumber: 221,
                                columnNumber: 17
                            }, this)
                        }, url, false, {
                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                            lineNumber: 212,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this),
                visibleCount < links.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        marginTop: "48px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setVisibleCount((prev)=>prev + 12),
                        style: {
                            padding: "14px 48px",
                            background: "transparent",
                            border: "1px solid var(--border)",
                            color: "var(--text-muted)",
                            fontSize: "0.8rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            cursor: "pointer",
                            transition: "all 0.3s",
                            fontFamily: "DM Sans, sans-serif"
                        },
                        onMouseEnter: (e)=>{
                            e.currentTarget.style.borderColor = "var(--gold)";
                            e.currentTarget.style.color = "var(--gold)";
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.borderColor = "var(--border)";
                            e.currentTarget.style.color = "var(--text-muted)";
                        },
                        children: [
                            "Load More (",
                            links.length - visibleCount,
                            " remaining)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                        lineNumber: 230,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                    lineNumber: 229,
                    columnNumber: 11
                }, this),
                currentPlatform === "instagram" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        marginTop: "32px",
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        textAlign: "center",
                        borderTop: "1px solid var(--border)",
                        paddingTop: "24px"
                    },
                    children: "💡 Konten memuat langsung dari Instagram. Klik konten untuk melihat di Instagram."
                }, void 0, false, {
                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
                    lineNumber: 260,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/project/yumitanamirah/src/components/Portfolio.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Achievements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/src/data/portfolio.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const years = [
    "2025",
    "2024",
    "2023",
    "2022"
];
function Achievements() {
    const [activeYear, setActiveYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        triggerOnce: true,
        threshold: 0.05
    });
    const filtered = activeYear === "all" ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["achievements"] : __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["achievements"].filter((a)=>a.year === activeYear);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "achievements",
        style: {
            padding: "120px 40px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1000px",
                margin: "0 auto"
            },
            ref: ref,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: inView ? {
                        opacity: 1,
                        y: 0
                    } : {},
                    transition: {
                        duration: 0.7
                    },
                    style: {
                        marginBottom: "48px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: "0.7rem",
                                letterSpacing: "0.3em",
                                color: "var(--gold)",
                                textTransform: "uppercase",
                                marginBottom: "16px"
                            },
                            children: "Recognition"
                        }, void 0, false, {
                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "Playfair Display, serif",
                                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                                fontWeight: 600
                            },
                            children: [
                                "Achievements &",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
                                    lineNumber: 28,
                                    columnNumber: 27
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    style: {
                                        fontStyle: "italic",
                                        color: "var(--gold)"
                                    },
                                    children: "Certificates"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        gap: "8px",
                        marginBottom: "40px",
                        flexWrap: "wrap"
                    },
                    children: [
                        "all",
                        ...years
                    ].map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveYear(y),
                            style: {
                                padding: "7px 18px",
                                background: activeYear === y ? "var(--gold)" : "transparent",
                                border: `1px solid ${activeYear === y ? "var(--gold)" : "var(--border)"}`,
                                color: activeYear === y ? "var(--bg)" : "var(--text-muted)",
                                fontSize: "0.75rem",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                cursor: "pointer",
                                fontFamily: "DM Sans, sans-serif",
                                transition: "all 0.2s"
                            },
                            children: y === "all" ? "All Years" : y
                        }, y, false, {
                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gap: "12px"
                    },
                    children: filtered.map((ach, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 16
                            },
                            animate: inView ? {
                                opacity: 1,
                                y: 0
                            } : {},
                            transition: {
                                duration: 0.4,
                                delay: Math.min(i * 0.06, 0.6)
                            },
                            style: {
                                background: ach.highlight ? "rgba(201,168,76,0.04)" : "var(--bg-card)",
                                border: `1px solid ${ach.highlight ? "rgba(201,168,76,0.3)" : "var(--border)"}`,
                                padding: "24px 28px",
                                display: "grid",
                                gridTemplateColumns: "60px 1fr auto",
                                gap: "20px",
                                alignItems: "center",
                                transition: "border-color 0.3s"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontFamily: "Playfair Display, serif",
                                        fontSize: "1.5rem",
                                        color: ach.highlight ? "var(--gold)" : "var(--text-muted)",
                                        fontWeight: 600,
                                        fontStyle: "italic"
                                    },
                                    children: ach.year
                                }, void 0, false, {
                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px",
                                                flexWrap: "wrap",
                                                marginBottom: "6px"
                                            },
                                            children: [
                                                ach.highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "0.6rem",
                                                        letterSpacing: "0.15em",
                                                        color: "var(--gold)",
                                                        background: "rgba(201,168,76,0.1)",
                                                        border: "1px solid rgba(201,168,76,0.3)",
                                                        padding: "2px 8px",
                                                        textTransform: "uppercase"
                                                    },
                                                    children: "International"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontSize: "0.95rem",
                                                        fontWeight: 500,
                                                        color: "var(--text)"
                                                    },
                                                    children: ach.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: "0.82rem",
                                                color: "var(--text-muted)"
                                            },
                                            children: ach.role
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: "0.72rem",
                                        color: "var(--text-muted)",
                                        textAlign: "right",
                                        whiteSpace: "nowrap",
                                        opacity: 0.6
                                    },
                                    children: ach.date
                                }, void 0, false, {
                                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/project/yumitanamirah/src/components/Achievements.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/project/yumitanamirah/src/components/Contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/project/yumitanamirah/node_modules/react-intersection-observer/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
function Contact() {
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])({
        triggerOnce: true,
        threshold: 0.2
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                style: {
                    padding: "120px 40px",
                    background: "var(--bg-card)",
                    borderTop: "1px solid var(--border)",
                    textAlign: "center"
                },
                ref: ref,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "700px",
                        margin: "0 auto"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: inView ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            duration: 0.8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "1px",
                                    height: "60px",
                                    background: "linear-gradient(180deg, transparent, var(--gold))",
                                    margin: "0 auto 40px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "0.7rem",
                                    letterSpacing: "0.3em",
                                    color: "var(--gold)",
                                    textTransform: "uppercase",
                                    marginBottom: "16px"
                                },
                                children: "Get in Touch"
                            }, void 0, false, {
                                fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "Playfair Display, serif",
                                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                                    fontWeight: 600,
                                    lineHeight: 1.1,
                                    marginBottom: "24px"
                                },
                                children: [
                                    "Let's work",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        style: {
                                            fontStyle: "italic",
                                            color: "var(--gold)"
                                        },
                                        children: "together"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "var(--text-muted)",
                                    lineHeight: 1.8,
                                    fontSize: "0.95rem",
                                    marginBottom: "48px"
                                },
                                children: [
                                    "Tertarik berkolaborasi atau ingin mengundang saya sebagai narasumber?",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    "Mari terhubung melalui platform berikut."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "16px",
                                    justifyContent: "center",
                                    flexWrap: "wrap",
                                    marginBottom: "48px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:Andiyumitanamirah@gmail.com",
                                        style: {
                                            padding: "14px 32px",
                                            background: "var(--gold)",
                                            color: "var(--bg)",
                                            textDecoration: "none",
                                            fontSize: "0.8rem",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            fontWeight: 500,
                                            transition: "opacity 0.2s",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "8px"
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.opacity = "0.85",
                                        onMouseLeave: (e)=>e.currentTarget.style.opacity = "1",
                                        children: "✉ Email Me"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://wa.me/6281315198387",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        style: {
                                            padding: "14px 32px",
                                            background: "transparent",
                                            border: "1px solid rgba(201,168,76,0.3)",
                                            color: "var(--text)",
                                            textDecoration: "none",
                                            fontSize: "0.8rem",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            transition: "all 0.3s",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "8px"
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.borderColor = "var(--gold)";
                                            e.currentTarget.style.color = "var(--gold)";
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)";
                                            e.currentTarget.style.color = "var(--text)";
                                        },
                                        children: "💬 WhatsApp"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    gap: "32px",
                                    justifyContent: "center",
                                    flexWrap: "wrap"
                                },
                                children: [
                                    {
                                        label: "Instagram",
                                        url: "https://www.instagram.com/namirah.yumita"
                                    },
                                    {
                                        label: "TikTok",
                                        url: "https://www.tiktok.com/@namirah.yumita"
                                    },
                                    {
                                        label: "LinkedIn",
                                        url: "https://linkedin.com/in/andi-yumita-namirah-51444a243/"
                                    }
                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: s.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        style: {
                                            color: "var(--text-muted)",
                                            textDecoration: "none",
                                            fontSize: "0.8rem",
                                            letterSpacing: "0.08em",
                                            transition: "color 0.2s",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px"
                                        },
                                        onMouseEnter: (e)=>e.currentTarget.style.color = "var(--gold)",
                                        onMouseLeave: (e)=>e.currentTarget.style.color = "var(--text-muted)",
                                        children: [
                                            s.label,
                                            " ↗"
                                        ]
                                    }, s.label, true, {
                                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: {
                    padding: "32px 40px",
                    borderTop: "1px solid var(--border)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "12px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "Playfair Display, serif",
                            fontSize: "1rem",
                            color: "var(--gold)"
                        },
                        children: "Yumita Namirah"
                    }, void 0, false, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$project$2f$yumitanamirah$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "0.75rem",
                            color: "var(--text-muted)"
                        },
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " · Social Media Specialist & Content Creator · Jakarta, Indonesia"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/project/yumitanamirah/src/components/Contact.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=Documents_project_yumitanamirah_src_0gp2vfk._.js.map