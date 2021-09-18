export const genres = [
  { _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asa", name: "Action" },
  { _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asb", name: "Comedy" },
  { _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asc", name: "Thriller" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
