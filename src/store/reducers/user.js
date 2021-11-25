import { ADD, CHANGE, SAVE_SUCCESS, ERROR } from "../actions/user";

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
    case CHANGE:
      return { ...state, user: { ...state.user, ...action.payload } };
    case SAVE_SUCCESS:
      return { ...state, user: { ...state.user, ...action.payload } };
    case ERROR:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
}
