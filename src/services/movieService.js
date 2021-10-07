import http from "./httpService";

const apiEndpont = "http://localhost:3900/api/movies";

export function getMovies() {
  return http.get(apiEndpont);
}

export function getMovie(movieId) {
  return http.get(apiEndpont + "/" + movieId);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(apiEndpont + "/" + movie._id, body);
  }

  return http.post(apiEndpont, movie);
}

export function deleteMovies(movieId) {
  return http.delete(apiEndpont + "/" + movieId);
}
