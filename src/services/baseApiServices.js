import axios from "axios";
import {MainContext} from "../ContextStore";
import AsyncStorage from "@react-native-community/async-storage";

const API_URL_BASE = "https://apidev.kanvas.dev/v1";

const AxiosInstance = axios.create({
  baseURL: API_URL_BASE,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

// const errorHandler = (error) => {
//   if (isHandlerEnabled(error.config)) {
//     // Handle errors
//   }
//   return Promise.reject({...error});
// };

// const successHandler = (response) => {
//   if (isHandlerEnabled(response.config)) {
//     // Handle responses
//   }
//   return response;
// };

const _getToken = () => AsyncStorage.getItem("@user:token");
const _setToken = (token) => AsyncStorage.setItem("@user:token", token);
const _clearToken = () => AsyncStorage.removeItem("@user:token");

AxiosInstance.interceptors.request.use(async (config) => {
  const token = await _getToken();
  // check if token has expired and re-login
  if ((token === null || token === undefined) && config.method !== "OPTIONS") {
    config.headers["authorization"] = "Bearer " + token;
    return config;
  }
});

AxiosInstance.interceptors.response.use(
  async (response) => {
    const oldToken = _getToken();
    const newToken = response.data;
    if (oldToken !== newToken) {
      _setToken(newToken);
    }
    return response;
  },
  (error) => Promise.reject({...error})
);
