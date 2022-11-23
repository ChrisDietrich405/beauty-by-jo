import ServiceResource from "../../resources/ServiceResource";

export const INDEX_SUCCESS = "INDEX_SUCCESS";
export const ERROR = "SERVICE_ERROR";
export const VERIFY_AVAILABILITY_SUCCESS = "SERVICE_VERIFY_AVAILABILITY_SUCCESS";

export const index = (payload) => async (dispatch) => {
  try {
    const response = await ServiceResource.index(payload);
    dispatch({ type: INDEX_SUCCESS, payload: response.data });
    dispatch({ type: ERROR, payload: null });
  } catch (error) {
    dispatch({ type: ERROR, payload: 'Error on connecting to server.' });
  }
};

export const verifyAvailability = (payload) => async (dispatch) => {
  try {
    const response = await ServiceResource.verifyAvailability(payload);
    dispatch({ type: VERIFY_AVAILABILITY_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
  }
};
