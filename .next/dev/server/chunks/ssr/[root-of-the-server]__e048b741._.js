module.exports = [
"[project]/pm-next-portfolio/app/favicon.ico.mjs { IMAGE => \"[project]/pm-next-portfolio/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/pm-next-portfolio/app/favicon.ico.mjs { IMAGE => \"[project]/pm-next-portfolio/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/pm-next-portfolio/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/pm-next-portfolio/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/pm-next-portfolio/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
}),
"[project]/pm-next-portfolio/components/ui/Button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonLink",
    ()=>ButtonLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/lib/utils.ts [app-rsc] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        ...props,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(baseClasses, variantClasses[variant], className)
    }, void 0, false, {
        fileName: "[project]/pm-next-portfolio/components/ui/Button.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/pm-next-portfolio/components/ui/Marquee.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Marquee",
    ()=>Marquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/lib/utils.ts [app-rsc] (ecmascript)");
;
;
const speedMap = {
    slow: 35,
    normal: 22,
    fast: 14
};
function Marquee({ items, separator = "·", className, textClassName, uppercase = true, direction = "left", speed = "normal" }) {
    const directionClass = direction === "left" ? "marquee-direction-left" : "marquee-direction-right";
    const duration = speedMap[speed] ?? speedMap.normal;
    const content = items.flatMap((item, index)=>{
        const nodes = [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center whitespace-nowrap text-sm font-semibold tracking-[0.3em]", uppercase && "uppercase", textClassName),
                children: item
            }, `${item}-${index}`, false, {
                fileName: "[project]/pm-next-portfolio/components/ui/Marquee.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ];
        if (index < items.length - 1) {
            nodes.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center whitespace-nowrap text-sm font-semibold tracking-[0.3em]", uppercase && "uppercase", textClassName),
                children: separator
            }, `separator-${item}-${index}`, false, {
                fileName: "[project]/pm-next-portfolio/components/ui/Marquee.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this));
        }
        return nodes;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        children: [
            0,
            1
        ].map((index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("marquee-track", directionClass),
                style: {
                    "--marquee-duration": `${duration}s`
                },
                "aria-hidden": index === 1,
                children: [
                    content,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center whitespace-nowrap text-sm font-semibold tracking-[0.3em]", uppercase && "uppercase", textClassName),
                        children: separator
                    }, void 0, false, {
                        fileName: "[project]/pm-next-portfolio/components/ui/Marquee.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/pm-next-portfolio/components/ui/Marquee.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/pm-next-portfolio/components/ui/Marquee.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[project]/pm-next-portfolio/lib/homeData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
const siteName = "Sølveig Studio";
const headerLogo = {
    default: "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63978bae11defc609cd91390_logo.svg",
    inverse: "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/6398342d613a27417e7bf02e_logo-inverse.svg"
};
const navigationLinks = [
    {
        label: "Work",
        href: "/work"
    },
    {
        label: "Contact",
        href: "/contact"
    }
];
const mobileNavigationLinks = [
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
        label: "Contact",
        href: "/contact"
    },
    {
        label: "Get in touch",
        href: "/contact",
        isButton: true
    }
];
const heroContent = {
    headlineImage: "https://cdn.prod.website-files.com/6397824bd2c756220d7e63e9/63978c5ed2c75667677f266a_home-hero.svg",
    subheading: "Brand Designer from Berlin",
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
        "Brand",
        "Services"
    ],
    person: {
        name: "Finn Sølveig",
        role: "Brand Designer",
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
    label: "Get FREE Template",
    href: "https://gola.io/solveig"
};
}),
"[project]/pm-next-portfolio/components/home/CallToAction.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CallToAction",
    ()=>CallToAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/components/ui/Button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$ui$2f$Marquee$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/components/ui/Marquee.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/lib/homeData.ts [app-rsc] (ecmascript)");
;
;
;
;
function CallToAction() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-y border-zinc-900/10 bg-zinc-50 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$ui$2f$Marquee$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Marquee"], {
                    items: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contactMarqueeItems"],
                    separator: "·",
                    className: "px-4 sm:px-6",
                    textClassName: "text-xs font-semibold uppercase tracking-[0.4em] text-zinc-600",
                    speed: "normal"
                }, void 0, false, {
                    fileName: "[project]/pm-next-portfolio/components/home/CallToAction.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pm-next-portfolio/components/home/CallToAction.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-4xl px-4 py-24 text-center sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex rounded-full border border-zinc-900/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-zinc-600",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["callToAction"].eyebrow
                        }, void 0, false, {
                            fileName: "[project]/pm-next-portfolio/components/home/CallToAction.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["callToAction"].title.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl font-black uppercase tracking-[0.4em] text-zinc-900 md:text-5xl",
                                    children: line
                                }, line, false, {
                                    fileName: "[project]/pm-next-portfolio/components/home/CallToAction.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/pm-next-portfolio/components/home/CallToAction.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ButtonLink"], {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["callToAction"].buttonHref,
                            variant: "secondary",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["callToAction"].buttonLabel
                        }, void 0, false, {
                            fileName: "[project]/pm-next-portfolio/components/home/CallToAction.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pm-next-portfolio/components/home/CallToAction.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pm-next-portfolio/components/home/CallToAction.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pm-next-portfolio/components/home/CallToAction.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/pm-next-portfolio/components/home/Clients.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clients",
    ()=>Clients
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/lib/homeData.ts [app-rsc] (ecmascript)");
;
;
;
function Clients() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-y border-zinc-900/10 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-10 flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "h-px w-12 bg-zinc-900/60"
                        }, void 0, false, {
                            fileName: "[project]/pm-next-portfolio/components/home/Clients.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500",
                            children: "My Clients"
                        }, void 0, false, {
                            fileName: "[project]/pm-next-portfolio/components/home/Clients.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pm-next-portfolio/components/home/Clients.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden",
                    children: [
                        0,
                        1
                    ].map((index)=>{
                        const style = {
                            "--marquee-duration": "30s"
                        };
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "marquee-track marquee-direction-left gap-12",
                            style: style,
                            "aria-hidden": index === 1,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clientLogos"].map((logo, logoIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: logo,
                                    alt: "Client logo",
                                    width: 160,
                                    height: 40,
                                    className: "h-12 w-auto object-contain"
                                }, `${logo}-${logoIndex}-${index}`, false, {
                                    fileName: "[project]/pm-next-portfolio/components/home/Clients.tsx",
                                    lineNumber: 28,
                                    columnNumber: 17
                                }, this))
                        }, index, false, {
                            fileName: "[project]/pm-next-portfolio/components/home/Clients.tsx",
                            lineNumber: 21,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/pm-next-portfolio/components/home/Clients.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pm-next-portfolio/components/home/Clients.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pm-next-portfolio/components/home/Clients.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/pm-next-portfolio/components/home/FloatingBanner.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingBanner",
    ()=>FloatingBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/lib/homeData.ts [app-rsc] (ecmascript)");
;
;
;
;
function FloatingBanner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["floatingBanner"].href,
        target: "_blank",
        rel: "noreferrer",
        className: "fixed bottom-6 right-6 z-40 hidden rounded-full shadow-lg transition hover:-translate-y-1 hover:shadow-xl sm:inline-flex",
        "aria-label": "Solveig template promotion",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            src: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["floatingBanner"].image,
            alt: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["floatingBanner"].alt,
            width: 120,
            height: 120,
            className: "h-24 w-24"
        }, void 0, false, {
            fileName: "[project]/pm-next-portfolio/components/home/FloatingBanner.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pm-next-portfolio/components/home/FloatingBanner.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/pm-next-portfolio/components/home/Hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$ui$2f$Marquee$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/components/ui/Marquee.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/lib/homeData.ts [app-rsc] (ecmascript)");
;
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-12 lg:flex-row lg:items-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-lg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["heroContent"].headlineImage,
                                        alt: "Solveig Studio headline",
                                        width: 540,
                                        height: 180,
                                        className: "h-auto w-full",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/pm-next-portfolio/components/home/Hero.tsx",
                                        lineNumber: 13,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/pm-next-portfolio/components/home/Hero.tsx",
                                    lineNumber: 12,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-semibold uppercase tracking-[0.55em] text-zinc-500",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["heroContent"].subheading
                                }, void 0, false, {
                                    fileName: "[project]/pm-next-portfolio/components/home/Hero.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pm-next-portfolio/components/home/Hero.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-hidden rounded-3xl border border-zinc-900/10 bg-zinc-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["heroContent"].heroImage,
                                alt: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["heroContent"].heroImageAlt,
                                width: 1280,
                                height: 960,
                                className: "h-full w-full object-cover",
                                priority: true
                            }, void 0, false, {
                                fileName: "[project]/pm-next-portfolio/components/home/Hero.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pm-next-portfolio/components/home/Hero.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pm-next-portfolio/components/home/Hero.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pm-next-portfolio/components/home/Hero.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-y border-zinc-900/10 bg-zinc-50 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$ui$2f$Marquee$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Marquee"], {
                    items: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["heroMarqueeItems"],
                    separator: "·",
                    className: "px-4 sm:px-6",
                    textClassName: "text-xs text-zinc-600",
                    speed: "slow"
                }, void 0, false, {
                    fileName: "[project]/pm-next-portfolio/components/home/Hero.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/pm-next-portfolio/components/home/Hero.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pm-next-portfolio/components/home/Hero.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/pm-next-portfolio/components/home/Projects.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Projects",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/lib/homeData.ts [app-rsc] (ecmascript)");
;
;
;
;
function Projects() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-12 md:grid-cols-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: project.href,
                                className: "group block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden rounded-3xl border border-zinc-900/10 bg-zinc-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: project.image,
                                            alt: project.title,
                                            width: 1280,
                                            height: 960,
                                            className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        }, void 0, false, {
                                            fileName: "[project]/pm-next-portfolio/components/home/Projects.tsx",
                                            lineNumber: 15,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-500 group-hover:bg-black/30 group-hover:opacity-100",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full border border-white/80 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white",
                                                children: "View"
                                            }, void 0, false, {
                                                fileName: "[project]/pm-next-portfolio/components/home/Projects.tsx",
                                                lineNumber: 23,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/pm-next-portfolio/components/home/Projects.tsx",
                                            lineNumber: 22,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/pm-next-portfolio/components/home/Projects.tsx",
                                    lineNumber: 14,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pm-next-portfolio/components/home/Projects.tsx",
                                lineNumber: 13,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold uppercase tracking-[0.4em] text-zinc-900",
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/pm-next-portfolio/components/home/Projects.tsx",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500",
                                        children: project.category
                                    }, void 0, false, {
                                        fileName: "[project]/pm-next-portfolio/components/home/Projects.tsx",
                                        lineNumber: 33,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pm-next-portfolio/components/home/Projects.tsx",
                                lineNumber: 29,
                                columnNumber: 15
                            }, this)
                        ]
                    }, project.title, true, {
                        fileName: "[project]/pm-next-portfolio/components/home/Projects.tsx",
                        lineNumber: 12,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pm-next-portfolio/components/home/Projects.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/pm-next-portfolio/components/home/Projects.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pm-next-portfolio/components/home/Projects.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/pm-next-portfolio/components/home/SelectedWorkMarquee.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SelectedWorkMarquee",
    ()=>SelectedWorkMarquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$ui$2f$Marquee$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/components/ui/Marquee.tsx [app-rsc] (ecmascript)");
;
;
const marqueeItems = [
    "Selected Work",
    "Selected Work",
    "Selected Work"
];
function SelectedWorkMarquee() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "border-y border-zinc-900/10 bg-white py-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$ui$2f$Marquee$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Marquee"], {
            items: marqueeItems,
            separator: "·",
            className: "px-4 sm:px-6",
            textClassName: "text-2xl font-black uppercase tracking-[0.5em] text-zinc-900 md:text-4xl",
            speed: "fast"
        }, void 0, false, {
            fileName: "[project]/pm-next-portfolio/components/home/SelectedWorkMarquee.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pm-next-portfolio/components/home/SelectedWorkMarquee.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/pm-next-portfolio/components/home/Services.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Services",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/lib/homeData.ts [app-rsc] (ecmascript)");
;
;
;
function Services() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-zinc-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 py-24 sm:px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesIntro"].badgeIcon,
                                alt: "",
                                width: 50,
                                height: 50,
                                className: "h-12 w-12"
                            }, void 0, false, {
                                fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
                                lineNumber: 11,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesIntro"].title.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-4xl font-black uppercase tracking-[0.35em] text-zinc-900 md:text-5xl",
                                        children: line
                                    }, line, false, {
                                        fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
                                        lineNumber: 20,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 rounded-3xl border border-zinc-900/10 bg-white p-5 shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesIntro"].person.avatar,
                                        alt: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesIntro"].person.name,
                                        width: 80,
                                        height: 80,
                                        className: "h-16 w-16 rounded-2xl object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base font-semibold uppercase tracking-[0.4em] text-zinc-900",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesIntro"].person.name
                                            }, void 0, false, {
                                                fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium uppercase tracking-[0.35em] text-zinc-500",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["servicesIntro"].person.role
                                            }, void 0, false, {
                                                fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 md:grid-cols-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["services"].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-full flex-col gap-6 rounded-3xl border border-zinc-900/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                src: service.icon,
                                                alt: "",
                                                width: 40,
                                                height: 40,
                                                className: "h-10 w-10"
                                            }, void 0, false, {
                                                fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold uppercase tracking-[0.35em] text-zinc-900",
                                                children: service.title
                                            }, void 0, false, {
                                                fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
                                                lineNumber: 61,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm leading-relaxed text-zinc-600",
                                        children: service.description
                                    }, void 0, false, {
                                        fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, service.title, true, {
                                fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pm-next-portfolio/components/home/Services.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/pm-next-portfolio/components/home/Stats.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stats",
    ()=>Stats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/lib/homeData.ts [app-rsc] (ecmascript)");
;
;
function Stats() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 py-20 sm:px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-12 sm:grid-cols-2 lg:grid-cols-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stats"].map((stat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block h-0.5 w-12 bg-zinc-900/60"
                            }, void 0, false, {
                                fileName: "[project]/pm-next-portfolio/components/home/Stats.tsx",
                                lineNumber: 10,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500",
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/pm-next-portfolio/components/home/Stats.tsx",
                                lineNumber: 11,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-4xl font-black uppercase tracking-[0.4em] text-zinc-900",
                                children: stat.value
                            }, void 0, false, {
                                fileName: "[project]/pm-next-portfolio/components/home/Stats.tsx",
                                lineNumber: 14,
                                columnNumber: 15
                            }, this)
                        ]
                    }, stat.label, true, {
                        fileName: "[project]/pm-next-portfolio/components/home/Stats.tsx",
                        lineNumber: 9,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/pm-next-portfolio/components/home/Stats.tsx",
                lineNumber: 7,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/pm-next-portfolio/components/home/Stats.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pm-next-portfolio/components/home/Stats.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/pm-next-portfolio/components/layout/Footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/components/ui/Button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/lib/homeData.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-zinc-950 text-zinc-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-12 md:grid-cols-[1fr,2fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                "aria-label": "Navigate home",
                                className: "inline-flex",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headerLogo"].inverse,
                                    alt: "Solveig logo inverse",
                                    width: 140,
                                    height: 28,
                                    className: "h-7 w-auto"
                                }, void 0, false, {
                                    fileName: "[project]/pm-next-portfolio/components/layout/Footer.tsx",
                                    lineNumber: 19,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/pm-next-portfolio/components/layout/Footer.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/pm-next-portfolio/components/layout/Footer.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-12 md:grid-cols-2",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["footerGroups"].map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xs font-semibold uppercase tracking-[0.4em] text-zinc-400",
                                            children: group.title
                                        }, void 0, false, {
                                            fileName: "[project]/pm-next-portfolio/components/layout/Footer.tsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            className: "space-y-3",
                                            children: group.links.map((link)=>{
                                                const isExternal = link.isExternal ?? false;
                                                const isButton = link.isButton ?? false;
                                                if (isButton) {
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                                        href: link.href,
                                                        variant: "secondary",
                                                        target: isExternal ? "_blank" : undefined,
                                                        rel: isExternal ? "noreferrer" : undefined,
                                                        children: link.label
                                                    }, link.label, false, {
                                                        fileName: "[project]/pm-next-portfolio/components/layout/Footer.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 25
                                                    }, this);
                                                }
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    target: isExternal ? "_blank" : undefined,
                                                    rel: isExternal ? "noreferrer" : undefined,
                                                    className: "flex items-center text-sm font-medium uppercase tracking-[0.3em] text-zinc-300 transition hover:text-white",
                                                    children: link.label
                                                }, link.label, false, {
                                                    fileName: "[project]/pm-next-portfolio/components/layout/Footer.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/pm-next-portfolio/components/layout/Footer.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, group.title, true, {
                                    fileName: "[project]/pm-next-portfolio/components/layout/Footer.tsx",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/pm-next-portfolio/components/layout/Footer.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pm-next-portfolio/components/layout/Footer.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["footerNote"].textPrefix,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["footerNote"].designerHref,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "font-semibold text-white hover:underline",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["footerNote"].designerLabel
                                }, void 0, false, {
                                    fileName: "[project]/pm-next-portfolio/components/layout/Footer.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                ". Powered by",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["footerNote"].platformHref,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "font-semibold text-white hover:underline",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["footerNote"].platformLabel
                                }, void 0, false, {
                                    fileName: "[project]/pm-next-portfolio/components/layout/Footer.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/pm-next-portfolio/components/layout/Footer.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ButtonLink"], {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["secondaryCta"].href,
                            variant: "ghost",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "text-xs font-semibold uppercase tracking-[0.4em] text-white hover:text-zinc-900",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$lib$2f$homeData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["secondaryCta"].label
                        }, void 0, false, {
                            fileName: "[project]/pm-next-portfolio/components/layout/Footer.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/pm-next-portfolio/components/layout/Footer.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pm-next-portfolio/components/layout/Footer.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pm-next-portfolio/components/layout/Footer.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/pm-next-portfolio/components/layout/Header.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/pm-next-portfolio/components/layout/Header.tsx <module evaluation>", "Header");
}),
"[project]/pm-next-portfolio/components/layout/Header.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/pm-next-portfolio/components/layout/Header.tsx", "Header");
}),
"[project]/pm-next-portfolio/components/layout/Header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/pm-next-portfolio/components/layout/Header.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/components/layout/Header.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/pm-next-portfolio/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/node_modules/.pnpm/next@16.0.7_@babel+core@7.2_3693f2253032b2a8664d8812647ccbdf/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$home$2f$CallToAction$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/components/home/CallToAction.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$home$2f$Clients$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/components/home/Clients.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$home$2f$FloatingBanner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/components/home/FloatingBanner.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$home$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/components/home/Hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$home$2f$Projects$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/components/home/Projects.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$home$2f$SelectedWorkMarquee$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/components/home/SelectedWorkMarquee.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$home$2f$Services$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/components/home/Services.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$home$2f$Stats$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/components/home/Stats.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/components/layout/Footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pm-next-portfolio/components/layout/Header.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen bg-white text-zinc-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/pm-next-portfolio/app/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$home$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Hero"], {}, void 0, false, {
                        fileName: "[project]/pm-next-portfolio/app/page.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$home$2f$Stats$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Stats"], {}, void 0, false, {
                        fileName: "[project]/pm-next-portfolio/app/page.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$home$2f$Clients$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Clients"], {}, void 0, false, {
                        fileName: "[project]/pm-next-portfolio/app/page.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$home$2f$Services$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Services"], {}, void 0, false, {
                        fileName: "[project]/pm-next-portfolio/app/page.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$home$2f$SelectedWorkMarquee$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectedWorkMarquee"], {}, void 0, false, {
                        fileName: "[project]/pm-next-portfolio/app/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$home$2f$Projects$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Projects"], {}, void 0, false, {
                        fileName: "[project]/pm-next-portfolio/app/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$home$2f$CallToAction$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CallToAction"], {}, void 0, false, {
                        fileName: "[project]/pm-next-portfolio/app/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pm-next-portfolio/app/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$layout$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/pm-next-portfolio/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_$40$babel$2b$core$40$7$2e$2_3693f2253032b2a8664d8812647ccbdf$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$pm$2d$next$2d$portfolio$2f$components$2f$home$2f$FloatingBanner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FloatingBanner"], {}, void 0, false, {
                fileName: "[project]/pm-next-portfolio/app/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pm-next-portfolio/app/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/pm-next-portfolio/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/pm-next-portfolio/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e048b741._.js.map