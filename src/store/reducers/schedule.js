import {
  ADD,
  BOOK_SERVICE,
  CHANGE,
  ERROR,
  KIND_SERVICE,
  SAVE_SUCCESS,
} from '../actions/schedule';

const initialState = {
  schedule: {
    id: null,
    specific_service_id: null,
    serviceName: null,
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
      return { ...state, schedule: { ...state.schedule, ...action.payload } };
    case SAVE_SUCCESS:
      return { ...state, schedule: { ...state.schedule, ...action.payload } };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
