import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
// import { CustomCursor } from "@/components/custom-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yurii Pion - Senior Full-Stack Developer",
  description: "Portfolio of Yurii Pion - Senior Full-Stack Developer specializing in AI, Healthcare Technology, and Enterprise Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider> */}
        {children}
      </body>
    </html>
  );
}
