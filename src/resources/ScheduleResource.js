import http from "./http";

const ENDPOINT = "/schedule";

export default class ScheduleResource {
  static post(data) {
    return http.post(ENDPOINT, data);
  }
  static get() {
    return http.get(ENDPOINT);
  }
}
