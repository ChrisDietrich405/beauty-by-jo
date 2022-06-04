import http from "./http";

const ENDPOINT = "/user";

export default class UserResource {
  static post(data) {
    return http.post(ENDPOINT, data);
  }

  static forgotPassword(email) {
    return http.post(`${ENDPOINT}/forgot-password`, { email });
  }

  static resetPassword(hash, password, password_confirmation) {
    return http.post(`${ENDPOINT}/reset-password`, {
      hash,
      password,
      password_confirmation,
    });
  }
}
