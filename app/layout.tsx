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
  title: "Namita DHAWAN — Product Manager and Designer Portfolio",
  description:
    "Product manager and designer portfolio for Namita DHAWAN showcasing selected work, services, and project collaborations.",
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
          dangerouslySetInnerHTML={{
            __html: `
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
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
