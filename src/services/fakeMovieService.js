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
    liked: true,
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
    liked: false,
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
    liked: false,
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
    liked: false,
  },

  {
    _id: "68f7d6s8g6fafs55ds89gd9g2wsdewww",
    title: "Lier Lier",
    gener: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asb",
      name: "Comedy",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "68f7d6s8tegdt6r36rydhd9g79d87g9d",
    title: "Now You See Me",
    gener: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asc",
      name: "Thriller",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "68f7d6s8te142533ds89gd9g79d87g9d",
    title: "Jhon Wick",
    gener: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asc",
      name: "Thriller",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "68f7d6s8g67ydhf3ds89gd9g79d87g9d",
    title: "The Mask",
    gener: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asb",
      name: "Comedy",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
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
    liked: false,
  },

  {
    _id: "68f7d6s8tegdt68dnfuf9gd9g79d87g9d",
    title: "The Nun",
    gener: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asc",
      name: "Thriller",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },
  {
    _id: "68f7d6s8tegdt6rjduydghgd9g79d87g9d",
    title: "Conjuring",
    gener: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asc",
      name: "Thriller",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },
  {
    _id: "68f7d6s8tegdt67ygtfd4329g79d87g9d",
    title: "The Ring",
    gener: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asc",
      name: "Thriller",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
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
    liked: false,
  },
  {
    _id: "68f7d6s8tegdt6r3ds89gd9g79d87g9d",
    title: "Dumb and Dumber",
    gener: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asb",
      name: "Comedy",
    },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}
