import { Metadata } from "next";

const title = "Victor Landim | Software Engineer";
const description = "Passionate Software Engineer and photogapher.";

const meta: Metadata = {
  title,
  description,
  generator: "Next.js",
  applicationName: title,
  category: "homepage",
  keywords: [
    "Backend",
    "Beachbody",
    "CV",
    "Developer",
    "Engineer",
    "Explore",
    "Frontend",
    "Fullstack",
    "Gallery",
    "Inspiration",
    "JavaScript",
    "Landim",
    "Minimalist",
    "Nomad",
    "Photography",
    "Photos",
    "Portfolio",
    "Programmer",
    "React",
    "Resume",
    "Skills",
    "Technology",
    "Travel",
    "Typescript",
    "Victor",
    "Xteam",
  ],
  authors: [{ name: "Victor Landim", url: "https://victorlandim.com" }],
  colorScheme: "dark",
  creator: "Victor Landim",
  publisher: "Victor Landim",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  themeColor: "#000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    siteName: title,
    title: title,
    description,
    type: "article",
    authors: ["Victor Landim"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export { meta };
