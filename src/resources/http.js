import axios from "axios";

import { store } from "../store";

const http = axios.create({ baseURL: "http://localhost:3003" });

http.interceptors.request.use(
  function (config) {
    const state = store.getState();
    if (state.auth.access_token && config && config.headers) {
      config.headers.authorization = `Bearer ${state.auth.access_token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
