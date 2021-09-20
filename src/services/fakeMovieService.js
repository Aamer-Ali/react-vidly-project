const movies = [
  {
    _id: "68f7d6s8g6fds8g6ds89gd9g79d87g9d",
    title: "Terminator",
    genre: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asa",
      name: "Action",
    },
    numberInStock: 16,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },
  {
    _id: "68jfur68g6fds8g6ds89gd9g79d87g9d",
    title: "X-Men",
    genre: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asa",
      name: "Action",
    },
    numberInStock: 12,
    dailyRentalRate: 4.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },
  {
    _id: "68f7d6s8g6fds8g6ds89gd9g79d5tfrd",
    title: "Captain America",
    genre: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asa",
      name: "Action",
    },
    numberInStock: 6,
    dailyRentalRate: 1.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },
  {
    _id: "68f7d6s8g6fds8g6ds89gd0oi9887g9d",
    title: "End Game",
    genre: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asa",
      name: "Action",
    },
    numberInStock: 20,
    dailyRentalRate: 2.0,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "68f7d6s8g6fafs55ds89gd9g2wsdewww",
    title: "Lier Lier",
    genre: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asb",
      name: "Comedy",
    },
    numberInStock: 3,
    dailyRentalRate: 10.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "68f7d6s8tegdt6r36rydhd9g79d87g9d",
    title: "Now You See Me",
    genre: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asc",
      name: "Thriller",
    },
    numberInStock: 3,
    dailyRentalRate: 7.0,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "68f7d6s8te142533ds89gd9g79d87g9d",
    title: "Jhon Wick",
    genre: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asc",
      name: "Thriller",
    },
    numberInStock: 7,
    dailyRentalRate: 3.0,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "68f7d6s8g67ydhf3ds89gd9g79d87g9d",
    title: "The Mask",
    genre: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asb",
      name: "Comedy",
    },
    numberInStock: 9,
    dailyRentalRate: 1.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },
  {
    _id: "68f7d6s8g6f77777ds89gd9g79d87g9d",
    title: "Avengers",
    genre: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asa",
      name: "Action",
    },
    numberInStock: 13,
    dailyRentalRate: 6.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "68f7d6s8tegdt68dnfuf9gd9g79d87g9d",
    title: "The Nun",
    genre: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asc",
      name: "Thriller",
    },
    numberInStock: 15,
    dailyRentalRate: 2.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },
  {
    _id: "68f7d6s8tegdt6rjduydghgd9g79d87g9d",
    title: "Conjuring",
    genre: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asc",
      name: "Thriller",
    },
    numberInStock: 10,
    dailyRentalRate: 10.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },
  {
    _id: "68f7d6s8tegdt67ygtfd4329g79d87g9d",
    title: "The Ring",
    genre: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asc",
      name: "Thriller",
    },
    numberInStock: 28,
    dailyRentalRate: 9.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },

  {
    _id: "68f7d6s8g6fafs55ds89gd9g79d87g9d",
    title: "Die Hard",
    genre: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asa",
      name: "Action",
    },
    numberInStock: 25,
    dailyRentalRate: 1.5,
    publishedDate: "2018-01-03T19:04:28.809Z",
    liked: false,
  },
  {
    _id: "68f7d6s8tegdt6r3ds89gd9g79d87g9d",
    title: "Dumb and Dumber",
    genre: {
      _id: "7s65fsafs7f8sa7f9sd7f9as7f9s8asb",
      name: "Comedy",
    },
    numberInStock: 19,
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
