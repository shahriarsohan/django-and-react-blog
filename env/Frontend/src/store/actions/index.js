import axios from "axios";
import * as actionTypes from "./actiontypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: token
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: error
  };
};

export const authLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expireDate");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

const checkTimeOut = expireDate => {
  return dispatch => {
    setTimeout(() => {
      dispatch(authLogout());
    }, expireDate * 1000);
  };
};

export const authLogin = (username, password) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/rest-auth/login/", {
        username: username,
        password: password
      })
      .then(res => {
        const token = res.data.key;
        const expireDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expireDate", expireDate);
        dispatch(authSuccess(token));
        dispatch(checkTimeOut(3600));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};

export const authSignUp = (username, email, password1, password2) => {
  return dispatch => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/rest-auth/login/", {
        username: username,
        email: email,
        password1: password1,
        password2: password2
      })
      .then(res => {
        const token = res.data.key;
        const expireDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("expireDate", expireDate);
        dispatch(authSuccess(token));
        dispatch(checkTimeOut(3600));
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };
};

export const checkAuthState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(authLogout());
    } else {
      const expireDate = new Date(localStorage.getItem("expireDate"));
      if (expireDate <= new Date()) {
        dispatch(authLogout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          checkTimeOut((expireDate.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
};
