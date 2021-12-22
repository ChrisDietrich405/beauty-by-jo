export const ERROR = "SCHEDULE_ERROR";
export const INDEX_SUCCESS = "SCHEDULE_INDEX_SUCCESS";
export const ADD = "SCHEDULE_ADD";
export const CHANGE = "SCHEDULE_CHANGE";

export const add = () => (dispatch) => {
  dispatch({ type: ADD });
};

export const change = (payload) => (dispatch) => {
  dispatch({ type: CHANGE, payload });
};
