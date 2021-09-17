const movies = [
  {
    _id: "68f7d6s8g6fds8g6ds89gd9g79d87g9d",
    title: "Terminator",
    gener: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asd",
      name: "Action",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "68jfur68g6fds8g6ds89gd9g79d87g9d",
    title: "X-Men",
    gener: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asd",
      name: "Action",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "68f7d6s8g6fds8g6ds89gd9g79d5tfrd",
    title: "Captain America",
    gener: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asd",
      name: "Action",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "68f7d6s8g6fds8g6ds89gd0oi9887g9d",
    title: "End Game",
    gener: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asd",
      name: "Action",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "68f7d6s8g6f77777ds89gd9g79d87g9d",
    title: "Avengers",
    gener: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asd",
      name: "Action",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "68f7d6s8g6fafs55ds89gd9g79d87g9d",
    title: "Die Hard",
    gener: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asd",
      name: "Action",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}
