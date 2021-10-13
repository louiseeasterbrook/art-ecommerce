import * as actionTypes from "../constants/slideShowConstants";

export const getSlideShowReducer = (state = { images: [] }, action) => {
  switch (action.type) {
    //PRODUCTS REQUEST
    case actionTypes.GET_IMAGES_REQUEST:
      return {
        loading1: true,
        images: [],
      };
    //SUCCESS GET PRODUCTS
    case actionTypes.GET_IMAGES_SUCCESS:
      return {
        loading1: false,
        images: action.payload,
      };
    //FAIL TO GET PRODUCTS
    case actionTypes.GET_IMAGES_FAIL:
      return {
        loading1: false,
        error1: action.payload,
      };

    default:
      return state;
  }
};
