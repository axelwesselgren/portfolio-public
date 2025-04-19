import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { QueryProviders } from "@/context/query-provider";
import { Main } from "@/components/layout/main";
import { Toaster } from "@/components/ui/toaster";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Axel Lönnby Wesselgren",
  description: "Personal portfolio of Axel Lönnby Wesselgren",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.className} antialiased`}>
        <QueryProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Main>{children}</Main>
            <Toaster />
          </ThemeProvider>
        </QueryProviders>
      </body>
    </html>
  );
}
