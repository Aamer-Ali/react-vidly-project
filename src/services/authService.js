import http from "./httpService";

const apiEndpont = "http://localhost:3900/api/auth";

export function loginUser(username, password) {
  const body = {
    email: username,
    password: password,
  };
  return http.post(apiEndpont, body);
}
