import http from "./httpService";
import jwtDecode from "jwt-decode";

const apiEndpont = "http://localhost:3900/api/auth";
const tokenKey = "token";

http.setJwt(getToken());

export async function loginUser(username, password) {
  const body = {
    email: username,
    password: password,
  };
  const { data: jwt } = await http.post(apiEndpont, body);
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getToken() {
  return localStorage.getItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export default {
  loginWithJwt,
  loginUser,
  logout,
  getCurrentUser,
  getToken,
};
