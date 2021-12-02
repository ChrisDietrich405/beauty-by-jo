import AuthResource from "../../resources/AuthResource";

export const SIGNIN = "AUTH_SIGNIN";
export const SIGNIN_SUCCESS = "AUTH_SIGNIN_SUCCESS";
export const ERROR = "AUTH_ERROR";

export const signin = (payload) => async (dispatch) => {
  dispatch({ type: SIGNIN, payload });
  try {
    const response = await AuthResource.post(payload);
    dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};
