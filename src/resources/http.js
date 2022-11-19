import axios from "axios";

import { store } from "../store";

const apiUrl = process.env.API_URL
  ? process.env.API_URL
  : "http://localhost:3003";

const http = axios.create({
  baseURL: apiUrl
});

http.interceptors.request.use(
  (config) => {
    const state = store.getState();
    if (state.auth.access_token && config && config.headers) {
      config.headers.authorization = `Bearer ${state.auth.access_token}`;
    }
    return config;
  }
);

export default http;
