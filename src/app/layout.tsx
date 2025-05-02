import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { QueryProviders } from "@/context/query-provider";
import { Main } from "@/components/layout/main";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "Axel Lönnby Wesselgren | Portfolio",
    template: "%s | Axel Lönnby Wesselgren",
  },
  description: "Personal portfolio and projects by Axel Lönnby Wesselgren.",
  keywords: ["developer", "portfolio", "React", "Next.js", "frontend developer", "web development", "full-stack developer"],
  authors: [{ name: "Axel Lönnby Wesselgren" }],
  creator: "Axel Lönnby Wesselgren",
  publisher: "Axel Lönnby Wesselgren",
  metadataBase: new URL("https://axelwesselgren.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://axelwesselgren.dev",
    title: "Axel Lönnby Wesselgren | Portfolio",
    description: "Personal portfolio and projects by Axel Lönnby Wesselgren",
    siteName: "Axel Lönnby Wesselgren",
    images: [
      {
        url: "https://axelwesselgren.dev/images/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Axel Lönnby Wesselgren Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axel Lönnby Wesselgren | Portfolio",
    description: "Personal portfolio and projects by Axel Lönnby Wesselgren",
    images: [`https://axelwesselgren.dev/images/portfolio.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <QueryProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Main>{children}</Main>
            <Toaster />
            <Analytics mode="production" />
            <SpeedInsights />
          </ThemeProvider>
        </QueryProviders>
      </body>
    </html>
  );
}
