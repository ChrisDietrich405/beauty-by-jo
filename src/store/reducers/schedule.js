import {
  ADD,
  BOOK_SERVICE,
  CHANGE,
  ERROR,
  KIND_SERVICE,
  SAVE_SUCCESS,
  SPECIFIC_SERVICE_ID,
  SPECIFIC_SERVICE,
} from "../actions/schedule";

const initialState = {
  schedule: {
    id: null,
    specific_service_id: null,
    serviceName: null,
    specific_service: null,
    isBooking: false,
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
    case BOOK_SERVICE:
    case KIND_SERVICE:
    case SPECIFIC_SERVICE:
    case SPECIFIC_SERVICE_ID:
      return { ...state, schedule: { ...state.schedule, ...action.payload } };
    case SAVE_SUCCESS:
      return { ...state, schedule: { ...state.schedule, ...action.payload } };
    case ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
