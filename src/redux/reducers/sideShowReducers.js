import * as actionTypes from "../constants/slideShowConstants";

export const getSlideShowReducer = (state = { images: [] }, action) => {
  switch (action.type) {
    //PRODUCTS REQUEST
    case actionTypes.GET_IMAGES_REQUEST:
      return {
        loading: true,
        images: [],
      };
    //SUCCESS GET PRODUCTS
    case actionTypes.GET_IMAGES_SUCCESS:
      return {
        loading: false,
        images: action.payload,
      };
    //FAIL TO GET PRODUCTS
    case actionTypes.GET_IMAGES_FAIL:
      return {
        loading: false,
        images: action.payload,
      };

    default:
      return state;
  }
};
