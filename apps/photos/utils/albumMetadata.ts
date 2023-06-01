type Item = {
  name: string;
  altName: string;
  month: string;
  year: string;
  isFilm: boolean;
};

const albumMetadata: Item[] = [
  {
    name: "floripa",
    altName: "Floripa",
    month: "01",
    year: "2023",
    isFilm: true,
  },
  {
    name: "santa-marta",
    altName: "Santa Marta",
    month: "03",
    year: "2023",
    isFilm: true,
  },
  {
    name: "buenos-aires",
    altName: "Buenos Aires 2022",
    month: "08",
    year: "2022",
    isFilm: false,
  },
  {
    name: "patagonia",
    altName: "Patagonia (film)",
    month: "04",
    year: "2023",
    isFilm: true,
  },
  {
    name: "mendoza-maragogi-chapada",
    altName: "Mendoza/Maragogi/Chapada",
    month: "05",
    year: "2023",
    isFilm: true,
  },
];

export default albumMetadata;
