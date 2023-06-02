import Link from "next/link";
import AlbumTitle from "@/components/AlbumTitle";
import getAlbumNames from "@/utils/getAlbumNames";
import meta from "@/utils/meta";
import albumMetadata, {
  AlbumMetadataItem,
  FEATURED_ALBUM,
} from "@/utils/albumMetadata";
import getCloudinaryImages from "@/utils/getCloudinaryImages";
import imagesToGalleryImages from "@/utils/imagesToGalleryImages";
import { Metadata, ResolvingMetadata } from "next";
import { getImageUrl } from "@/utils/getImageUrl";

const Albums = async () => {
  const { albumsByYear } = await getProps();

  return (
    <>
      {Object.keys(albumsByYear).map((year) => (
        <ul key={year} className="mb-4 text-white">
          <h2 className="mb-3 text-lg tracking-wider">{year}</h2>
          {albumsByYear[year].map((album) => {
            const albumSlug = album.name;
            const name = album.altName;
            const isFilm = album.isFilm;
            return (
              <li className="mb-2" key={albumSlug}>
                <Link href={`/${albumSlug}`}>
                  <AlbumTitle name={name} isFilm={isFilm} />
                </Link>
              </li>
            );
          })}
        </ul>
      ))}
    </>
  );
};

export default Albums;

const getProps = async () => {
  const albumNames = await getAlbumNames();

  const albumsByYear: Record<string, AlbumMetadataItem[]> = albumNames
    .map((m) => albumMetadata.find((x) => x.name === m))
    .reduce((acc, curr) => {
      const key = curr.year;

      acc[key] = acc[key] || [];

      const albums = [...acc[key], curr].sort(
        (a, b) => Number(a.month) - Number(b.month)
      );
      acc[key] = albums;
      return acc;
    }, {});

  return {
    albumsByYear,
  };
};

const getFeaturedAlbumImages = async () => {
  const images = await getCloudinaryImages(FEATURED_ALBUM);
  const galleryImages = imagesToGalleryImages(images);

  return {
    images: galleryImages,
  };
};

export async function generateMetadata(
  {},
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  const { images } = await getFeaturedAlbumImages();

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const metadata = albumMetadata.find((album) => album.name === FEATURED_ALBUM);

  const featuredImageIndex = metadata?.featuredIndex ?? 0;
  const featuredImage = images[featuredImageIndex];
  const imageWidth = 500;
  const imageUrl = getImageUrl(featuredImage.src, imageWidth);

  return {
    ...meta,
    title: `albums | ${meta.title}`,
    openGraph: {
      ...meta.openGraph,
      images: [imageUrl, ...previousImages],
    },
  };
}
