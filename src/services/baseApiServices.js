import axios from "axios";
import {MainContext} from "../ContextStore";
import {loginService} from "./authServices";
import {
  saveToken,
  saveRefreshToken,
  getToken,
  clearToken,
  getRefreshToken,
  getUserData
} from "./localStorage";

const API_URL_BASE = "https://apidev.kanvas.dev/v1";

const AxiosInstance = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

AxiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    console.log("\nINTERCEPTOR - REQUEST: " + error);
    console.log("\nINTERCEPTOR - REQUEST: " + error.headers);
    console.log("\nINTERCEPTOR - REQUEST");

    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  async (response) => {
    const {token, refresh_token} = response.data;
    await saveToken(token);
    await saveRefreshToken(refresh_token);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await getRefreshToken();

      AxiosInstance.defaults.headers.common["Authorization"] =
        "Bearer " + refreshToken;
    }
    return AxiosInstance(originalRequest);
  }
);

export function post(url, data) {
  return AxiosInstance.post(API_URL_BASE + url, data);
}

export function get(url) {
  return AxiosInstance.get(API_URL_BASE + url);
}

// export default {axios: {}, url: API_URL_BASE};
