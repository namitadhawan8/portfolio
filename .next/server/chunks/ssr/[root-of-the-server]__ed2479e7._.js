module.exports=[89578,a=>{a.v({className:"geist_a71539c9-module__T19VSG__className",variable:"geist_a71539c9-module__T19VSG__variable"})},35214,a=>{a.v({className:"geist_mono_8d43a2aa-module__8Li5zG__className",variable:"geist_mono_8d43a2aa-module__8Li5zG__variable"})},84702,a=>{"use strict";let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call CustomCursor() from the server but CustomCursor is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/ui/CustomCursor.tsx <module evaluation>","CustomCursor");a.s(["CustomCursor",0,b])},87180,a=>{"use strict";let b=(0,a.i(11857).registerClientReference)(function(){throw Error("Attempted to call CustomCursor() from the server but CustomCursor is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/components/ui/CustomCursor.tsx","CustomCursor");a.s(["CustomCursor",0,b])},50356,a=>{"use strict";a.i(84702);var b=a.i(87180);a.n(b)},33290,a=>{"use strict";var b=a.i(7997),c=a.i(89578);let d={className:c.default.className,style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"}};null!=c.default.variable&&(d.variable=c.default.variable);var e=a.i(35214);let f={className:e.default.className,style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"}};null!=e.default.variable&&(f.variable=e.default.variable);var g=a.i(50356);function h({children:a}){return(0,b.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,children:[(0,b.jsxs)("head",{children:[(0,b.jsx)("meta",{name:"color-scheme",content:"light"}),(0,b.jsx)("script",{dangerouslySetInnerHTML:{__html:`
              (function() {
                try {
                  const root = document.documentElement;
                  const body = document.body;
                  
                  // FORCE remove dark class immediately
                  root.classList.remove('dark');
                  
                  // Check saved theme
                  let savedTheme = localStorage.getItem('theme');
                  
                  // DEFAULT TO LIGHT - only use dark if explicitly saved as 'dark'
                  if (savedTheme !== 'dark') {
                    savedTheme = 'light';
                    root.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                    root.style.colorScheme = 'light';
                    root.style.setProperty('--background', '#ffffff', 'important');
                    root.style.setProperty('--foreground', '#111111', 'important');
                    root.style.setProperty('--primary', '#EE73DE', 'important');
                    
                    // Tailwind classes handle colors automatically
                  } else {
                    // Only apply dark if explicitly saved
                    root.classList.add('dark');
                    root.style.colorScheme = 'dark';
                    root.style.setProperty('--background', '#0a0a0a', 'important');
                    root.style.setProperty('--foreground', '#ededed', 'important');
                    root.style.setProperty('--primary', '#B76BFC', 'important');
                    
                    // Remove pink override style
                    const oldStyle = document.getElementById('force-pink-colors');
                    if (oldStyle) oldStyle.remove();
                  }
                  
                  root.setAttribute('data-theme', savedTheme);
                } catch (e) {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.setAttribute('data-theme', 'light');
                  document.documentElement.style.colorScheme = 'light';
                }
              })();
            `}})]}),(0,b.jsxs)("body",{className:`${d.variable} ${f.variable} bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased`,suppressHydrationWarning:!0,children:[(0,b.jsx)(g.CustomCursor,{}),a]})]})}a.s(["default",()=>h,"metadata",0,{title:"Namita DHAWAN — Product Manager and Designer Portfolio",description:"Product manager and designer portfolio for Namita DHAWAN showcasing selected work, services, and project collaborations."}],33290)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__ed2479e7._.js.map