import http from "./http";

const ENDPOINT = "/user";

export default class UserResource {
  static post(data) {
    return http.post(ENDPOINT, data);
  }
}
