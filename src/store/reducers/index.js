import { combineReducers } from "redux";
import service from "./service";
import user from "./user";
import auth from "./auth";
import schedule from "./schedule";

export default combineReducers({
  user,
  auth,
  service,
  schedule,
});
