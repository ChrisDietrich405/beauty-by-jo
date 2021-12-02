import { SIGNIN, SIGNIN_SUCCESS, ERROR } from "../actions/auth";

const initialState = {
  token: null,
  user: {
    email: null,
    password: null,
  },
  errors: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      return { ...state, user: { ...initialState.user }, errors: {} };
    case SIGNIN_SUCCESS:
      return { ...state, user: { ...state.user, ...action.payload.user }, token: action.payload.token };
    case ERROR:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
}
