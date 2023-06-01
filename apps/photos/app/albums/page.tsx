import Link from "next/link";
import AlbumTitle from "@/components/AlbumTitle";
import getAlbumNames from "@/utils/getAlbumNames";
import meta from "@/utils/meta";
import { getAlbumDisplayName } from "@/utils/getAlbumDisplayName";
import albumMetadata from "@/utils/albumMetadata";

export const metadata = {
  ...meta,
  title: `albums | ${meta.title}`,
};

const Albums = async () => {
  const { albums } = await getProps();

  return (
    <ul>
      {albums.map((album) => {
        const name = getAlbumDisplayName(album);
        const isFilm =
          albumMetadata.find((a) => a.name === album)?.isFilm ?? false;
        return (
          <li className="mb-4" key={album}>
            <Link href={`/${album}`}>
              <AlbumTitle name={name} isFilm={isFilm} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Albums;

const getProps = async () => {
  const albumNames = await getAlbumNames();

  return {
    albums: albumNames,
  };
};
