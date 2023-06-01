import { Metadata } from "next";
import AlbumHeading from "../components/AlbumHeading";
import Gallery from "../components/Gallery";
import getCloudinaryImages from "../utils/getCloudinaryImages";
import imagesToGalleryImages from "../utils/imagesToGalleryImages";
import meta from "../utils/meta";
import { getAlbumDisplayName } from "@/utils/getAlbumDisplayName";

export const metadata: Metadata = {
  ...meta,
};

const HomePage = async () => {
  const { images, latestAlbum } = await getProps();
  const albumDisplayName = getAlbumDisplayName(latestAlbum);
  return (
    <>
      {latestAlbum && <AlbumHeading heading={`Latest: ${albumDisplayName}`} />}
      <Gallery photos={images} />
    </>
  );
};

export default HomePage;

const getProps = async () => {
  // const foldersResult = await cloudinary.v2.api.sub_folders(
  //   process.env.CLOUDINARY_FOLDER
  // );

  const latestFolder = "patagonia";

  const images = await getCloudinaryImages(latestFolder);
  const galleryImages = imagesToGalleryImages(images);

  return {
    images: galleryImages,
    latestAlbum: latestFolder,
  };
};
