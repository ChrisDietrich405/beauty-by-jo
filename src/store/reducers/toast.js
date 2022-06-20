import { SCROLL_TOP, SHOW_ERROR, SHOW_SUCCESS } from "../actions/toast";

const initialState = {
  message: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_SUCCESS:
      return { message: action.payload };
    case SHOW_ERROR:
      return { message: action.payload };
    case SCROLL_TOP:
      return state;
    default:
      return state;
  }
}
