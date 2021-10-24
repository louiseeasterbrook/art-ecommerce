import * as actionTypes from "../constants/productConstants";
import axios from "axios";

export const getProducts = () => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
    const { data } = await axios.get("/api/products");

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload: error.response,
    });
  }
};

export const getOneProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: actionTypes.GET_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_FAIL,
      payload: error.response,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCT_RESET });
};
