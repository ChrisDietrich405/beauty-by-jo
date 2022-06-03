import http from "./http";

const ENDPOINT = "/user";

export default class UserResource {
  static post(data) {
    return http.post(ENDPOINT, data);
  }

  static forgotPassword(email) {
    return http.post(`${ENDPOINT}/forgot-password`, { email });
  }
}
