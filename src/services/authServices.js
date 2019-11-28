import {post} from "../services/baseApiServices";

export function login(loginData) {
  return post("/auth", loginData);
}

export function registerService(userData) {
  return post("/users", userData);
}
