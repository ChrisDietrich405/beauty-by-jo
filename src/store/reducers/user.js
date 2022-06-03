import {
  ADD,
  SAVE,
  SAVE_SUCCESS,
  ERROR,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
} from "../actions/user";

const initialState = {
  user: {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  },
  errors: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return { ...state, user: { ...initialState.user }, errors: {} };
    case SAVE:
      return { ...state, user: { ...state.user, ...action.payload } };
    case SAVE_SUCCESS:
      return { ...state, user: { ...state.user, ...action.payload } };
    case ERROR:
      return { ...state, errors: action.payload };
    case FORGOT_PASSWORD:
      return { ...state, user: { ...state.user, email: action.payload } };
    case FORGOT_PASSWORD_SUCCESS:
      return { ...state, user: { ...state.user, ...action.payload } };
    default:
      return state;
  }
}
