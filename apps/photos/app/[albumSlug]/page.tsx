import AlbumHeading from "@/components/AlbumHeading";
import Gallery from "@/components/Gallery";
import { getAlbumDisplayName } from "@/utils/getAlbumDisplayName";
import getAlbumNames from "@/utils/getAlbumNames";
import getCloudinaryImages from "@/utils/getCloudinaryImages";
import { getImageUrl } from "@/utils/getImageUrl";
import { getRandomElement } from "@/utils/getRandomElement";
import imagesToGalleryImages from "@/utils/imagesToGalleryImages";
import meta from "@/utils/meta";
import { Metadata, ResolvingMetadata } from "next";

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

export async function generateMetadata(
  { params }: PageProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const props = await getProps({ albumSlug: params.albumSlug });

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const randomImage = getRandomElement(props.images);
  const imageWidth = 500;
  const imageUrl = getImageUrl(randomImage.src, imageWidth);

  return {
    ...meta,
    title: getAlbumDisplayName(params.albumSlug),
    openGraph: {
      ...meta.openGraph,
      title: getAlbumDisplayName(params.albumSlug),
      images: [imageUrl, ...previousImages],
    },
  };
}

export const generateStaticParams = async () => {
  const albumNames = await getAlbumNames();
  const albumSlugs = albumNames.map((album) => ({ albumSlug: album }));
  return albumSlugs;
};
