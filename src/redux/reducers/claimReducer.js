import { GET_CLAIMS, SEND_CLAIM, CLEAR_CLAIMS, CLAIM_ERROR } from "../types";

const initialState = {
  claims: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CLAIMS:
      return {
        ...state,
        claims: action.payload,
        loading: false,
        error: false,
      };
    case SEND_CLAIM:
      return {
        ...state,
        error: flase,
      };
    case CLEAR_CLAIMS:
      return {
        ...state,
        claims: null,
      };
    case CLAIM_ERROR:
      return {
        ...state,
        error: action.payload,
      };
  }
};
