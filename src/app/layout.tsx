import "./globals.css";
import type { Metadata } from "next";
import { Fragment_Mono } from "next/font/google";
import { meta } from "@/meta";

export const metadata = meta;

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html
    lang="en"
    className={`bg-black antialiased text-white/80 text-[18px] ${fragmentMono.className}`}
  >
    <body className="min-h-screen flex flex-col bg-gradient-to-b from-black to-neutral-800">
      <main className="lg:ml-64 mx-auto flex-1 max-w-2xl w-full px-6 lg:px-8">
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
