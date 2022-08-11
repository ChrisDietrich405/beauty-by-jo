import AuthResource from "../../resources/AuthResource";

export const SIGNIN = "AUTH_SIGNIN";
export const SIGNIN_SUCCESS = "AUTH_SIGNIN_SUCCESS";
export const SIGN_OUT = "AUTH_SIGN_OUT";
export const ERROR = "AUTH_ERROR";
export const GET_SUCCESS = "AUTH_GET_SUCCESS";
export const UNAUTHORIZED = "AUTH_UNAUTHORIZED";
export const SHOW_APPOINTMENT_MODAL = "SHOW_APPOINTMENT_MODAL";
export const SHOW_SERVICE_MODAL = "SHOW_SERVICE_MODAL";
export const SCHEDULE_SERVICE = "SCHEDULE_SERVICE";

export const get = () => async (dispatch) => {
  try {
    const response = await AuthResource.get();
    dispatch({ type: GET_SUCCESS, payload: response.data });
    console.log("hello with success")
    return true;
  } catch (error){
    console.log("hello with error")
    dispatch({ type: UNAUTHORIZED });
    // return false;
  }
};

export const signin = (payload) => async (dispatch) => {
  dispatch({ type: SIGNIN, payload });
  try {
    const response = await AuthResource.post(payload);
    dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
    if (response.data.success) {
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

export const signout = () => async (dispatch) => {
  dispatch({ type: SIGN_OUT });
};

export const display_appointment_modal = (payload) => (dispatch) => {
  dispatch({ type: SHOW_APPOINTMENT_MODAL, payload });
};

export const displayServiceModal = (payload) => ({
  type: SHOW_SERVICE_MODAL,
  payload,
});

export const scheduleService = (payload) => (dispatch) => {
  dispatch({ type: SCHEDULE_SERVICE, payload });
};
