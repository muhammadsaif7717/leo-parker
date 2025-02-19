import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextThemeProvider from "@/providers/NextThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Leo Parker",
  description: "Discover the innovative portfolio of Leo Parker – a visionary web developer and creative designer. Explore his curated projects, cutting-edge designs, and insights into modern digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
