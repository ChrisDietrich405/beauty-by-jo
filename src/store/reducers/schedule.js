import emailjs from "@emailjs/browser";
import { DateTime } from "luxon";

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
  SEND_EMAIL,
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
      return {
        ...state,
        schedule: { ...state.schedule, specific_service: action.payload },
      };
    case SPECIFIC_SERVICE_ID:
      return {
        ...state,
        schedule: { ...state.schedule, specific_service_id: action.payload },
      };
    case BACK_SERVICE:
      return { ...state, schedule: { ...state.schedule, ...action.payload } };
    case SAVE_SUCCESS:
      return { ...state, schedule: { ...state.schedule, ...action.payload } };
    case CHANGE_SERVICE_MODAL_TYPE:
      return {
        ...state,
        schedule: { ...state.schedule, type: action.payload },
      };
    case ERROR:
      return { ...state, error: action.payload };
    case SEND_EMAIL:
      var templateParams = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        message: `Your ${action.payload.specificService.toLowerCase()} appointment is set for ${DateTime.fromISO(
          action.payload.selectedDate
        ).toLocaleString()} at ${action.payload.selectedTime}. 
        ${
          typeof action.payload.price == "undefined" || action.payload.price == null
            ? "Please finalize pricing with Jordan. Thank you."
            : `The total cost will be ${action.payload.price}. Thank you.`
        }`,
      };

      emailjs
        .send(
          "service_y7fq1o3",
          "template_89dj9rt",
          templateParams,
          "Y8tiOkzf-c7ZDYAZy"
        )
        .then(
          function (response) {},
          function (error) {}
        );

      return { ...state };
    default:
      return state;
  }
}
