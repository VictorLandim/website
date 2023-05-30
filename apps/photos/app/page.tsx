import { Metadata } from "next";
import AlbumHeading from "../components/AlbumHeading";
import Gallery from "../components/Gallery";
import cloudinary from "../utils/cloudinary";
import getCloudinaryImages from "../utils/getCloudinaryImages";
import imagesToGalleryImages from "../utils/imagesToGalleryImages";
import meta from "../utils/meta";

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
export const metadata: Metadata = {
  generator: 'Next.js',
  applicationName: 'victor.photos',
  keywords: ['Victor', 'Photos', 'React', 'JavaScript', "Gallery", "Ideas", "Inspiration", "Nomad", "Travels", "Film", "Fujifilm"],
  authors: [{ name: 'Victor Landim', url: 'https://victorlandim.com' }],
  colorScheme: 'dark',
  creator: 'Victor Landim',
  publisher: 'Victor Landim',
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
  description: meta.description,
  openGraph: {
    siteName: meta.title,
    title: meta.title,
    description: meta.description,
  },
};

const HomePage = async () => {
  const { images, latestAlbum } = await getProps();
  return (
    <>
      {latestAlbum && <AlbumHeading heading={`Latest: ${latestAlbum}`} />}
      <Gallery photos={images} />
    </>
  );
};

export default HomePage;

const getProps = async () => {
  const foldersResult = await cloudinary.v2.api.sub_folders(
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    process.env.CLOUDINARY_FOLDER
  );

  const folders = foldersResult?.folders ?? [];
  const lastIndex = folders.length - 1;

  const latestFolder = (folders[lastIndex]?.name ?? "") as string;

  const images = await getCloudinaryImages(latestFolder);

  const galleryImages = imagesToGalleryImages(images);

  return {
    images: galleryImages,
    latestAlbum: latestFolder,
  };
};
