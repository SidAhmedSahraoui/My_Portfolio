import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGOUT,
  AUTH_ERROR,
  CLEAR_ERRORS,
} from "../types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        token: null,
        error: action.payload || null,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
  }
};
