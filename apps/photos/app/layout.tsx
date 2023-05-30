import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileLayoutProvider from "@/contexts/MobileLayoutContext";
import { Fragment_Mono } from "next/font/google";

import "photoswipe/dist/photoswipe.css";
import "../styles/globals.css";
// include styles from the ui package
import "ui/styles.css";

const fragmentMono = Fragment_Mono({ subsets: ["latin"], weight: ["400"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`bg-black antialiased ${fragmentMono.className}`}
    >
      <body>
        <MobileLayoutProvider>
          <div className="flex min-h-screen flex-col bg-gradient-to-b from-black to-black/95">
            <Header />
            <main className="mx-auto w-full max-w-[1400px] flex-1 p-[12px] sm:p-6">
              {children}
            </main>
            <Footer />
          </div>
        </MobileLayoutProvider>
      </body>
    </html>
  );
};

export default RootLayout;
