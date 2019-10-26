import { combineReducers } from "redux";
import authReducers from "./auth";
import postReducers from "./posts";

export default combineReducers({
  auth: authReducers,
  posts: postReducers
});
