import { SIGNIN, SIGNIN_SUCCESS, GET_SUCCESS, ERROR } from "../actions/auth";

const initialState = {
  access_token: null,
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
      return {
        ...state,
        user: { ...state.user, ...action.payload.user },
        access_token: action.payload.access_token,
      };
    case ERROR:
      return { ...state, errors: action.payload };
    case GET_SUCCESS:
      return { ...state, user: { ...state.user, ...action.payload } };
    default:
      return state;
  }
}
