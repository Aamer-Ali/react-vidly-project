import http from "./httpService";

const apiEndpont = "http://localhost:3900/api/users";

export function registerUser(user) {
  const body = {
    email: user.username,
    password: user.password,
    name: user.name,
  };
  return http.post(apiEndpont, body);
}
