import {post} from "../services/baseApiServices";

export function loginService(loginData) {
  return post("/auth", loginData);
}

export function registerService(userData) {
  return post("/users", userData);
}
