import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IT Solutions | Premium Developer Portfolio",
  description:
    "Modern, professional and futuristic developer portfolio built with Next.js, TypeScript and Tailwind CSS.",
  keywords: ["Next.js portfolio", "developer portfolio", "React portfolio", "frontend engineer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`} suppressHydrationWarning>
      <body className="min-h-full bg-slate-950 text-slate-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
