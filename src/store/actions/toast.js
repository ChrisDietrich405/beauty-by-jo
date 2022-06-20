export const SHOW_SUCCESS = "TOAST::SHOW_SUCCESS";
export const SHOW_ERROR = "TOAST::SHOW_ERROR";
export const SCROLL_TOP = "SCROLL_TOP";

export const successToast = (payload) => (dispatch) => {
  dispatch({ type: SHOW_SUCCESS, payload });
  dispatch({ type: SCROLL_TOP });
};

export const errorToast = (payload) => (dispatch) => {
  dispatch({ type: SHOW_ERROR, payload });
  dispatch({ type: SCROLL_TOP });
};
