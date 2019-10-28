import * as actionTypes from "../actions/actiontypes";
import { updatedObj } from "../updatedobj";

const INITIAL_STATE = {
  loading: false,
  token: null,
  error: null
};

const authstart = (state, action) => {
  return updatedObj(state, {
    error: null,
    loading: true
  });
};

const authsuccess = (state, action) => {
  return updatedObj(state, {
    token: action.payload,
    loading: false,
    error: false
  });
};

const authfail = (state, action) => {
  return updatedObj(state, {
    token: null,
    loading: false,
    error: action.payload
  });
};

const authlogout = (state, action) => {
  return updatedObj(state, {
    token: null
  });
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authstart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authsuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authfail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authlogout(state, action);
    default:
      return state;
  }
};
