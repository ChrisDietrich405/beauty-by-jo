import { combineReducers } from "redux";
import service from "./service";
import user from "./user";
import auth from "./auth";

export default combineReducers({
  user,
  auth,
  service,
});
