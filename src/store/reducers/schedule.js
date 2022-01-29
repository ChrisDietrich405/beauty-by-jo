import { ADD, CHANGE } from "../actions/schedule";

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
      return { ...state, schedule: { ...state.schedule, ...action.payload } };
    default:
      return state;
  }
}
