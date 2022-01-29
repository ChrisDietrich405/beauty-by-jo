import http from "./http";

const ENDPOINT = "/auth";

export default class AuthResource {
  static post(data) {
    return http.post(ENDPOINT, data);
  }
  static get() {
    return http.get(ENDPOINT);
  }
}
