(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonLink",
    ()=>ButtonLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const baseClasses = "inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";
const variantClasses = {
    primary: "border-black bg-black text-white hover:bg-white hover:text-black hover:shadow-md",
    secondary: "border-zinc-900/20 bg-white text-zinc-900 hover:bg-zinc-900 hover:text-white",
    ghost: "border-transparent bg-transparent text-zinc-900 hover:bg-zinc-900/5"
};
function ButtonLink({ variant = "primary", className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, variantClasses[variant], className)
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = ButtonLink;
var _c;
__turbopack_context__.k.register(_c, "ButtonLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/homeData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "callToAction",
    ()=>callToAction,
    "clientLogos",
    ()=>clientLogos,
    "contactMarqueeItems",
    ()=>contactMarqueeItems,
    "floatingBanner",
    ()=>floatingBanner,
    "footerGroups",
    ()=>footerGroups,
    "footerNote",
    ()=>footerNote,
    "headerLogo",
    ()=>headerLogo,
    "heroContent",
    ()=>heroContent,
    "heroMarqueeItems",
    ()=>heroMarqueeItems,
    "mobileNavigationLinks",
    ()=>mobileNavigationLinks,
    "navigationLinks",
    ()=>navigationLinks,
    "projects",
    ()=>projects,
    "secondaryCta",
    ()=>secondaryCta,
    "services",
    ()=>services,
    "servicesIntro",
    ()=>servicesIntro,
    "siteName",
    ()=>siteName,
    "stats",
    ()=>stats
]);
const siteName = "Namita DHAWAN";
const headerLogo = {
    default: "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63978bae11defc609cd91390_logo.svg",
    inverse: "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/6398342d613a27417e7bf02e_logo-inverse.svg"
};
const navigationLinks = [
    {
        label: "HOME",
        href: "/"
    },
    {
        label: "DESIGN",
        href: "/design"
    },
    {
        label: "MANAGEMENT",
        href: "/management"
    },
    {
        label: "WRITING",
        href: "/writing-research"
    },
    {
        label: "EXPERIMENTS",
        href: "/prototypes-experiments"
    },
    {
        label: "ABOUT ME",
        href: "/about-me"
    }
];
const mobileNavigationLinks = [
    {
        label: "HOME",
        href: "/"
    },
    {
        label: "DESIGN",
        href: "/design"
    },
    {
        label: "MANAGEMENT",
        href: "/management"
    },
    {
        label: "WRITING",
        href: "/writing-research"
    },
    {
        label: "EXPERIMENTS",
        href: "/prototypes-experiments"
    },
    {
        label: "ABOUT ME",
        href: "/about-me"
    },
    {
        label: "DOWNLOAD RESUME",
        href: "/resume",
        isButton: true
    }
];
const heroContent = {
    headline: "NAMITA DHAWAN",
    subheading: "PRODUCT MANAGER AND DESIGNER",
    heroImage: "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63986c1a9e600d2d0b0ce5e9_home-hero.webp",
    heroImageAlt: "Hero project preview"
};
const heroMarqueeItems = [
    "Branding",
    "Logo Design",
    "Social Media"
];
const stats = [
    {
        label: "Clients",
        value: "200+"
    },
    {
        label: "Projects",
        value: "300+"
    },
    {
        label: "Follower",
        value: "90K"
    },
    {
        label: "Happy Clients",
        value: "100%"
    }
];
const clientLogos = [
    "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/639844b3d9d4a198a6f6157e_logo-01.svg",
    "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/639844bc874d1a3c1a6d929d_logo-02.svg",
    "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/639844bc3e8200e6f915ff73_logo-03.svg",
    "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/639844bc3e8200100815ff72_logo-04.svg",
    "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/639844bc64d52c25a6d37750_logo-05.svg"
];
const services = [
    {
        title: "Brand Design",
        description: "Holistic brand systems that communicate who you are across every touchpoint.",
        icon: "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/6397917e82ecdaad70fa0470_icon-star.svg"
    },
    {
        title: "Logo Design",
        description: "Distinctive mark design rooted in strategy, crafted for immediate recognition.",
        icon: "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/6397917e82ecdaad70fa0470_icon-star.svg"
    },
    {
        title: "Social Media",
        description: "Campaign art direction and content kits that keep your channels on-brand.",
        icon: "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/6397917e82ecdaad70fa0470_icon-star.svg"
    }
];
const servicesIntro = {
    badgeIcon: "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/6397917e82ecdaad70fa0470_icon-star.svg",
    title: [
        "SKILLS"
    ],
    person: {
        name: "Namita DHAWAN",
        role: "Product manager and designer",
        avatar: "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63985d3b24911adc7e5e1db4_fynn-thumbnail.webp"
    }
};
const projects = [
    {
        title: "Vision Branding",
        category: "Logo Design",
        image: "https://cdn.prod.website-files.com/63983873166762516081f05b/63989aa3e742b829271b28a0_project-02.webp",
        href: "/projects/vision-branding"
    },
    {
        title: "Brand Studio",
        category: "Branding",
        image: "https://cdn.prod.website-files.com/63983873166762516081f05b/639839d5f858cffb5130a384_project-04.webp",
        href: "/projects/brand-studio"
    }
];
const callToAction = {
    eyebrow: "Let's create",
    title: [
        "Let's create",
        "Your new Brand"
    ],
    buttonLabel: "Get in touch",
    buttonHref: "/contact"
};
const contactMarqueeItems = [
    "Let's work together"
];
const footerGroups = [
    {
        title: "Pages",
        links: [
            {
                label: "Home",
                href: "/"
            },
            {
                label: "Work",
                href: "/work"
            },
            {
                label: "Work Single",
                href: "https://solveig-template.webflow.io/projects/vision-branding",
                isExternal: true
            },
            {
                label: "More Templates",
                href: "https://templates.gola.io/",
                isExternal: true
            }
        ]
    },
    {
        title: "Utility Pages",
        links: [
            {
                label: "404 Error Page",
                href: "https://solveig-template.webflow.io/404",
                isExternal: true
            },
            {
                label: "Password Protected",
                href: "https://solveig-template.webflow.io/401",
                isExternal: true
            },
            {
                label: "Styleguide",
                href: "/template-info/styleguide"
            },
            {
                label: "Licensing",
                href: "/template-info/licensing"
            }
        ]
    }
];
const footerNote = {
    textPrefix: "© Made by",
    designerLabel: "Pawel Gola",
    designerHref: "https://templates.gola.io/",
    platformLabel: "Webflow",
    platformHref: "https://webflow.com"
};
const floatingBanner = {
    image: "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63983e706215ce49c90f0607_banner-circle.svg",
    href: "https://gola.io/solveig",
    alt: "Solveig Template promo"
};
const secondaryCta = {
    label: "DOWNLOAD RESUME",
    href: "/resume"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$homeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/homeData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Header() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const toggleMenu = ()=>setIsOpen((prev)=>!prev);
    const closeMenu = ()=>setIsOpen(false);
    const renderNavLink = (item)=>{
        const isExternal = item.isExternal ?? false;
        const isActive = pathname === item.href || item.href === "/" && pathname === "/";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: item.href,
            target: isExternal ? "_blank" : undefined,
            rel: isExternal ? "noreferrer" : undefined,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative text-sm font-medium uppercase tracking-[0.3em] text-zinc-800 transition hover:text-black", isActive && "text-black font-semibold"),
            onClick: closeMenu,
            children: item.label
        }, item.label, false, {
            fileName: "[project]/components/layout/Header.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-40 border-b border-zinc-900/10 bg-white/80 backdrop-blur",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/logo-placeholder.svg",
                            alt: "Namita Dhawan logo",
                            width: 120,
                            height: 24,
                            priority: true,
                            className: "h-6 w-auto"
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-10 md:flex",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$homeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigationLinks"].map((item)=>renderNavLink(item))
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-3 md:flex",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$homeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondaryCta"].href,
                            variant: "secondary",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$homeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secondaryCta"].label
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-900/10 md:hidden",
                        onClick: toggleMenu,
                        "aria-expanded": isOpen,
                        "aria-label": "Toggle navigation menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative flex h-4 w-6 flex-col justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-0.5 w-full bg-zinc-900 transition-transform", isOpen && "translate-y-[7px] rotate-45")
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-0.5 w-full bg-zinc-900 transition-opacity", isOpen && "opacity-0")
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-0.5 w-full bg-zinc-900 transition-transform", isOpen && "-translate-y-[7px] -rotate-45")
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("md:hidden", isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-zinc-900/10 bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto max-w-6xl px-4 py-6 sm:px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$homeData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mobileNavigationLinks"].map((item)=>{
                                const isExternal = item.isExternal ?? false;
                                const isActive = pathname === item.href || item.href === "/" && pathname === "/";
                                if (item.isButton) {
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                        href: item.href,
                                        variant: "secondary",
                                        target: isExternal ? "_blank" : undefined,
                                        rel: isExternal ? "noreferrer" : undefined,
                                        onClick: closeMenu,
                                        children: item.label
                                    }, item.label, false, {
                                        fileName: "[project]/components/layout/Header.tsx",
                                        lineNumber: 116,
                                        columnNumber: 21
                                    }, this);
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    target: isExternal ? "_blank" : undefined,
                                    rel: isExternal ? "noreferrer" : undefined,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base font-semibold uppercase tracking-[0.35em] text-zinc-900", isActive && "text-black font-bold"),
                                    onClick: closeMenu,
                                    children: item.label
                                }, item.label, false, {
                                    fileName: "[project]/components/layout/Header.tsx",
                                    lineNumber: 130,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Header.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Header.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/Header.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Header.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Header.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(Header, "LvAKcOhSuBLzTufKlhNwaSeG0Po=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_03939ea9._.js.map