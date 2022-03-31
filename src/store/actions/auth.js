import AuthResource from "../../resources/AuthResource";

export const SIGNIN = "AUTH_SIGNIN";
export const SIGNIN_SUCCESS = "AUTH_SIGNIN_SUCCESS";
export const ERROR = "AUTH_ERROR";
export const GET_SUCCESS = "AUTH_GET_SUCCESS";
export const UNAUTHORIZED = "AUTH_UNAUTHORIZED";
export const SHOW_APPOINTMENT_MODAL = "SHOW_APPOINTMENT_MODAL";

export const get = () => async (dispatch) => {
  try {
    const response = await AuthResource.get();
    dispatch({ type: GET_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UNAUTHORIZED });
  }
};

export const signin = (payload) => async (dispatch) => {
  dispatch({ type: SIGNIN, payload });
  try {
    const response = await AuthResource.post(payload);
    dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
    if (response.data.success) {
      // dispatch({ type: SHOW_APPOINTMENT_MODAL, payload: true });
    }
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};

export const display_appointment_modal = (payload) => (dispatch) => {
  dispatch({ type: SHOW_APPOINTMENT_MODAL, payload });
};
