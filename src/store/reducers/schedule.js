import {
  ADD,
  BOOK_SERVICE,
  CHANGE,
  ERROR,
  KIND_SERVICE,
  SAVE_SUCCESS,
  SPECIFIC_SERVICE_ID,
  SPECIFIC_SERVICE,
  BACK_SERVICE,
  CHANGE_SERVICE_MODAL_TYPE,
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
    type: "Schedule",
    back_service: false,
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
    case BOOK_SERVICE:
      return { ...state, schedule: { ...state.schedule, ...action.payload } };
    case KIND_SERVICE:
      return { ...state, schedule: { ...state.schedule, ...action.payload } };
    case SPECIFIC_SERVICE:
      return { ...state, schedule: { ...state.schedule, specific_service: action.payload } };
    case SPECIFIC_SERVICE_ID:
      return { ...state, schedule: { ...state.schedule, specific_service_id: action.payload } };
    case BACK_SERVICE:
      return { ...state, schedule: { ...state.schedule, ...action.payload } };
    case SAVE_SUCCESS:
      return { ...state, schedule: { ...state.schedule, ...action.payload } };
    case CHANGE_SERVICE_MODAL_TYPE:
      return { ...state, schedule: { ...state.schedule, type: action.payload } };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
