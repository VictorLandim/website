import AlbumHeading from "@/components/AlbumHeading";
import Gallery from "@/components/Gallery";
import { getAlbumDisplayName } from "@/utils/getAlbumDisplayName";
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
  const albumDisplayName = getAlbumDisplayName(albumSlug);
  const { images } = await getProps({ albumSlug });

  return (
    <>
      {albumDisplayName && <AlbumHeading heading={albumDisplayName} />}
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
    title: `${getAlbumDisplayName(params.albumSlug)} | ${meta.title}`,
  };
};

export const generateStaticParams = async () => {
  const albumNames = await getAlbumNames();
  const albumSlugs = albumNames.map((album) => ({ albumSlug: album }));
  return albumSlugs;
};
