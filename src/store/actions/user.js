import UserResource from "../../resources/UserResource";

export const ADD = "USER_ADD";
export const CHANGE = "USER_CHANGE";
export const SAVE = "USER_SAVE";
export const SAVE_SUCCESS = "USER_SAVE_SUCCESS";
export const ERROR = "USER_ERROR";

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
    dispatch({ type: SAVE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};
