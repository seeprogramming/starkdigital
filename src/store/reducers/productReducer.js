import { FETCH_PRODUCTS, ADD_PRODUCT,  SUBMIT_FORM, REMOVE_PRODUCT} from "../actions/types";
import mobiles from "../../data/products";

const initialState = {
  products: mobiles,
  addedProducts: [],
  total: 0,
  formDetails: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: state.products,
      };

    case ADD_PRODUCT:
      let addedProduct = state.products.find(
        (item) => item.product_name === action.payload
      );
      state.addedProducts.push(addedProduct);
      
      return {
        ...state,
        total: state.total + addedProduct.product_price,
      };

    case REMOVE_PRODUCT:
        let productToRemove = state.addedProducts.find((item) => action.payload === item.product_name);

        let updatedProducts = state.addedProducts.filter(item => action.payload !== item.product_name);

        let updatedTotal = state.total - productToRemove.product_price;

      return{
        ...state,
        addedProducts : updatedProducts,
        total : updatedTotal
      }
   case SUBMIT_FORM:
     return{
       ...state,
       formDetails : action.payload
     }   

    default:
      return state;
  }
}
