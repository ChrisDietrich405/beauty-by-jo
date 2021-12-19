import ServiceResource from "../../resources/ServiceResource";

export const INDEX_SUCCESS = "SERVICE_INDEX_SUCCESS";
export const ERROR = "SERVICE_ERROR";
export const VERIFY_AVAILABILITY_SUCCESS =
  "SERVICE_VERIFY_AVAILABILITY_SUCCESS";

export const index = (payload) => async (dispatch) => {
  try {
    const response = await ServiceResource.index(payload);
    dispatch({ type: INDEX_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ERROR, payload: error.response.data });
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
