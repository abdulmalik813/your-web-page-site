import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { businessConfig } from "@/lib/business";

export const metadata: Metadata = {
  title: "Your Web Page | Web Design, Development & Cloud Hosting in PEI",
  description:
    "Your website should make business easier. Your Web Page helps businesses build, improve, host, and maintain their websites. Trade name of NightTech Service Inc., based in Charlottetown, PEI.",
  metadataBase: new URL(businessConfig.siteUrl),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Your Web Page | Web Design, Development & Cloud Hosting",
    description:
      "Your website should make business easier. Trade name of NightTech Service Inc., based in Charlottetown, PEI.",
    type: "website",
    url: businessConfig.siteUrl,
    siteName: businessConfig.brandName,
    images: [
      {
        url: "/brand/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Your Web Page - Web Design & Cloud Hosting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Web Page | Web Design, Development & Cloud Hosting",
    description:
      "Your website should make business easier. Trade name of NightTech Service Inc., based in Charlottetown, PEI.",
    images: ["/brand/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-flash inline theme initializer */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('ywp_theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark) || (saved === 'auto' && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        <ThemeProvider>
          <Header />
          <div className="flex-1 flex flex-col">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
