import * as actionTypes from "../constants/slideShowConstants";
import axios from "axios";

export const getSlideShow = () => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.GET_IMAGES_REQUEST });
    const { data } = await axios.get("/api/slideshow");

    dispatch({
      type: actionTypes.GET_IMAGES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_IMAGES_FAIL,
      payload: error.response,
    });
  }
};
