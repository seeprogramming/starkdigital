import { ADD_PRODUCT, SUBMIT_FORM, REMOVE_PRODUCT } from "./types";

export const getProductDetails = productId => dispatch => {

  dispatch({
    type: ADD_PRODUCT,
    payload: productId
  });
};

export const removeSelectedProduct = productId => dispatch => {
 
  dispatch({
    type: REMOVE_PRODUCT,
    payload: productId
  });
}

export const getFormDetails = (event) => dispatch => {

  dispatch({
    type: SUBMIT_FORM,
    payload: event
  })
}

