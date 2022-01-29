import http from "./http";

const ENDPOINT = "/service";

export default class ServiceResource {
  static index(data) {
    return http.get(ENDPOINT, data);
  }
  static verifyAvailability(data) {
    return http.get(ENDPOINT + "/verifyAvailability", { params: data });
  }
}
