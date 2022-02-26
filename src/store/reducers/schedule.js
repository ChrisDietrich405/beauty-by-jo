import { ADD, CHANGE, ERROR, SAVE_SUCCESS } from "../actions/schedule";

const initialState = {
  schedule: {
    id: null,
    specific_service_id: null,
    date: null,
    status: null,
  },
  schedules: [],
  error: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return initialState;
    case CHANGE:
    case SAVE_SUCCESS:
      return { ...state, schedule: { ...state.schedule, ...action.payload } };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
