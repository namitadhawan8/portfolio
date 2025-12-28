import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://namitadhawan.com"),
  title: "Namita DHAWAN — Product Manager and Designer Portfolio",
  description:
    "Product Designer and Product Manager based in India, building user-centred products in preventive healthcare and lifestyle sectors.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  keywords: [
    "Product Designer",
    "Product Manager",
    "UX Strategy",
    "Preventive Healthcare",
    "Lifestyle Products",
    "Design Systems",
    "UI/UX Design",
    "Product Management",
    "India",
    "User-Centred Design",
  ],
  authors: [{ name: "Namita DHAWAN" }],
  creator: "Namita DHAWAN",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://namitadhawan.com",
    title: "Namita DHAWAN — Product Manager and Designer Portfolio",
    description:
      "Product Designer and Product Manager based in India, building user-centred products in preventive healthcare and lifestyle sectors.",
    siteName: "Namita DHAWAN Portfolio",
    images: [
      {
        url: "/ND logo metadata.png",
        width: 1200,
        height: 630,
        alt: "Namita DHAWAN - Product Designer and Product Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Namita DHAWAN — Product Manager and Designer Portfolio",
    description:
      "Product Designer and Product Manager based in India, building user-centred products in preventive healthcare and lifestyle sectors.",
    images: ["/ND logo metadata.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN",
    "geo.placename": "India",
    "geo.position": "28.6139;77.2090",
    "ICBM": "28.6139, 77.2090",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light" />
        <script
          src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.11/dist/dotlottie-wc.js"
          type="module"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const body = document.body;
                  
                  // Remove data-cursor-element-id attributes to prevent hydration mismatches
                  // These are added by Cursor IDE and cause hydration warnings
                  const removeCursorAttributes = () => {
                    const elements = document.querySelectorAll('[data-cursor-element-id]');
                    elements.forEach(el => el.removeAttribute('data-cursor-element-id'));
                  };
                  
                  // Remove immediately and set up observer to remove any added later
                  removeCursorAttributes();
                  
                  // Watch for new attributes being added
                  const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                      if (mutation.type === 'attributes' && mutation.attributeName === 'data-cursor-element-id') {
                        mutation.target.removeAttribute('data-cursor-element-id');
                      }
                      if (mutation.type === 'childList') {
                        mutation.addedNodes.forEach((node) => {
                          if (node.nodeType === 1) { // Element node
                            if (node.hasAttribute('data-cursor-element-id')) {
                              node.removeAttribute('data-cursor-element-id');
                            }
                            const children = node.querySelectorAll('[data-cursor-element-id]');
                            children.forEach(el => el.removeAttribute('data-cursor-element-id'));
                          }
                        });
                      }
                    });
                  });
                  
                  // Start observing when DOM is ready
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', () => {
                      observer.observe(document.body, {
                        attributes: true,
                        childList: true,
                        subtree: true,
                        attributeFilter: ['data-cursor-element-id']
                      });
                    });
                  } else {
                    observer.observe(document.body, {
                      attributes: true,
                      childList: true,
                      subtree: true,
                      attributeFilter: ['data-cursor-element-id']
                    });
                  }
                  
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
                    root.style.setProperty('--primary', '#B76BFC', 'important');
                    
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
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased`}
        suppressHydrationWarning
      >
        <div suppressHydrationWarning>
          <CustomCursor />
          {children}
        </div>
      </body>
    </html>
  );
}
