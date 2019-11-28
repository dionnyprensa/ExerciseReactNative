import axios from "axios";
import {MainContext} from "../ContextStore";
import {setToken, getToken, clearToken} from "./localStorage";

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
    const token = null; // await getToken();

    // if (
    //   (token !== null || token !== undefined) &&
    //   config.method !== "OPTIONS"
    // ) {
    //   config.headers["authorization"] = "Bearer " + token;
    //   return config;
    // }
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
    const oldToken = await getToken();
    const newToken = response.data;
    // if (oldToken !== newToken) {
    //   await setToken(newToken);
    // }
    return response;
  },
  (error) => {
    console.log("\nINTERCEPTOR - RESPONSE: " + error);
    console.log("\nINTERCEPTOR - RESPONSE: " + error.headers);
    console.log("\nINTERCEPTOR - RESPONSE");
    return Promise.reject({...error});
  }
);

export function post(url, data) {
  return AxiosInstance.post(API_URL_BASE + url, data);
}

export function get(url) {
  return AxiosInstance.get(API_URL_BASE + url);
}

// export default {axios: {}, url: API_URL_BASE};
