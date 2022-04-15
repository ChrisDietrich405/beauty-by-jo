import ScheduleResource from '../../resources/ScheduleResource';

export const ERROR = 'SCHEDULE_ERROR';
export const INDEX_SUCCESS = 'SCHEDULE_INDEX_SUCCESS';
export const ADD = 'SCHEDULE_ADD';
export const CHANGE = 'SCHEDULE_CHANGE';
export const SAVE_SUCCESS = 'SCHEDULE_SAVE_SUCCESS';
export const KIND_SERVICE = 'KIND_SERVICE';
export const BOOK_SERVICE = 'BOOK_SERVICE';

export const add = () => (dispatch) => {
  dispatch({ type: ADD });
};

export const change = (payload) => (dispatch) => {
  dispatch({ type: CHANGE, payload });
};

export const save = (payload) => (dispatch) => {
  ScheduleResource.post(payload)
    .then((response) => {
      dispatch({ type: SAVE_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: ERROR, payload: error.response.data });
    });
};
export const kindService = (payload) => (dispatch) => {
  dispatch({ type: KIND_SERVICE, payload });
};

export const bookService = (payload) => (dispatch) => {
  dispatch({ type: BOOK_SERVICE, payload });
};
