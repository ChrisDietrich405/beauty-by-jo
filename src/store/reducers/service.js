
import { KIND_SERVICE } from "../actions/schedule";
import {
  INDEX_SUCCESS,
  ERROR,
  VERIFY_AVAILABILITY_SUCCESS,
} from "../actions/service";

const initialState = {
  services: [],
  availability: [],
  errors: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INDEX_SUCCESS:
      return {
        ...state,
        services: action.payload,
      };
    case KIND_SERVICE:
      return { ...state }
    case ERROR:
      return { ...state, errors: action.payload };
    case VERIFY_AVAILABILITY_SUCCESS:
      return { ...state, availability: action.payload };
    default:
      return state;
  }
}
