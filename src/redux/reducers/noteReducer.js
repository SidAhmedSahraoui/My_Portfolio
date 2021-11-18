import { GET_NOTES, SEND_NOTE, CLEAR_NOTES, NOTE_ERROR } from "../types";

const initialState = {
  notes: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false,
        error: false,
      };
    case SEND_NOTE:
      return {
        ...state,
        error: flase,
      };
    case CLEAR_NOTES:
      return {
        ...state,
        notes: null,
      };
    case NOTE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
  }
};
