import { Metadata } from "next";

const title = "victor.photos";
const description = "collection of my favorite pictures";

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
const meta: Metadata = {
  title,
  description,
  generator: "Next.js",
  applicationName: title,
  keywords: [
    "Victor",
    "Photos",
    "React",
    "JavaScript",
    "Gallery",
    "Ideas",
    "Inspiration",
    "Nomad",
    "Travels",
    "Film",
    "Fujifilm",
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
  },
};

export default meta;
