import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import i18n from "@/lib/i18n/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stay Way: Your Flexible Property Rental Solution",
  description:
    "Find and rent properties that fit your needs with Stay Way, offering flexible rental options for every lifestyle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialLanguage = i18n.language || "en";
  return (
    <html
      lang={initialLanguage}
      dir={initialLanguage === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Toaster />
            <Header />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
