import AlbumHeading from "@/components/AlbumHeading";
import Gallery from "@/components/Gallery";
import getAlbumNames from "@/utils/getAlbumNames";
import getCloudinaryImages from "@/utils/getCloudinaryImages";
import imagesToGalleryImages from "@/utils/imagesToGalleryImages";
import meta from "@/utils/meta";
import { Metadata } from "next";

type PageProps = {
  params: {
    albumSlug: string;
  };
};

const AlbumDetailPage = async (props: PageProps) => {
  const { albumSlug } = props.params;
  const { images } = await getProps({ albumSlug });

  return (
    <>
      {albumSlug && <AlbumHeading heading={albumSlug as string} />}
      <Gallery photos={images} />
    </>
  );
};

export default AlbumDetailPage;

const getProps = async ({ albumSlug }) => {
  const images = await getCloudinaryImages(albumSlug);
  const galleryImages = imagesToGalleryImages(images);

  return {
    images: galleryImages,
  };
};

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  return {
    ...meta,
    title: `${params.albumSlug} | ${meta.title}`,
  };
};

export const generateStaticParams = async () => {
  const albumNames = await getAlbumNames();
  const albumSlugs = albumNames.map((album) => ({ albumSlug: album }));
  return albumSlugs;
};
