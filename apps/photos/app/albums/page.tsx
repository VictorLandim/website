import Link from "next/link";
import AlbumTitle from "@/components/AlbumTitle";
import getAlbumNames from "@/utils/getAlbumNames";
import meta from "@/utils/meta";

export const metadata = {
  ...meta,
  title: `albums | ${meta.title}`,
};

const Albums = async () => {
  const { albums } = await getProps();

  return (
    <ul>
      {albums.map((album) => (
        <li className="mb-4" key={album}>
          <Link href={`/${album}`}>
            <AlbumTitle name={album} isFilm />
          </Link>
        </li>
      ))}
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
