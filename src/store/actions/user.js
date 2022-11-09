import UserResource from "../../resources/UserResource";

export const ADD = "USER_ADD";
export const CHANGE = "USER_CHANGE";
export const SAVE = "USER_SAVE";
export const SAVE_SUCCESS = "USER_SAVE_SUCCESS";
export const ERROR = "USER_ERROR";
export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";

export const add = () => (dispatch) => {
  dispatch({ type: ADD });
};

export const change = (payload) => (dispatch) => {
  dispatch({ type: CHANGE, payload });
};

export const save = (payload) => async (dispatch) => {
  dispatch({ type: SAVE, payload });
  try {
    const response = await UserResource.post(payload);
    if(response.data) {
      dispatch({ type: SAVE_SUCCESS, payload: response.data });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    if(error.response) {
      dispatch({ type: ERROR, payload: error.response.data });
      throw error.response
    }
    // return false;
  }
};

export const forgotPassword = (payload) => async (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD, payload });
  try {
    const response = await UserResource.forgotPassword(payload);
    dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: response?.data });
  } catch (error) {
    const message = error.response
      ? error.response.data
      : "Error while resetting password";
    dispatch({ type: ERROR, payload: message });
  }
};

export const resetPassword = (payload) => async (dispatch) => {
  dispatch({ type: RESET_PASSWORD, payload });
  try {
    const { hash, password, password_confirmation } = payload;
    const response = await UserResource.resetPassword(
      hash,
      password,
      password_confirmation
    );
    dispatch({ type: RESET_PASSWORD_SUCCESS, payload: response?.data });
  } catch (error) {
    const message = error.response
      ? error.response.data
      : "Error while resetting password";
    dispatch({ type: ERROR, payload: message });
  }
};
