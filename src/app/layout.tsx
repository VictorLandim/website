import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Fragment_Mono } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Victor Landim | Software Engineer",
  description:
    "Passionate Software Engineer currently crafting web experiences at BeachBody.com.",
};

const inter = Inter({ subsets: ["latin"] });

const fragmentMono = Fragment_Mono({ subsets: ["latin"], weight: ["400"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html
    lang="en"
    className={`bg-black antialiased text-white/80 ${fragmentMono.className}`}
  >
    <body className="h-screen flex flex-col bg-gradient-to-b from-black via-neutral-900 to-black">
      <main className="mx-auto w-full flex-1 max-w-[900px] p-3 sm:p-6">
        {children}
      </main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
