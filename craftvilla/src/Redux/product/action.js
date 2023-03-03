import axios from "axios";
import {
  EDIT_PRODUCT_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionType";

const getProductsRequestAction = () => {
  return { type: GET_PRODUCTS_REQUEST };
};

const getProductsSuccessAction = (payload) => {
  return { type: GET_PRODUCTS_SUCCESS, payload };
};

const getProductsFailureAction = () => {
  return { type: GET_PRODUCTS_FAILURE };
};

// const editProductSuccess = () => {
//   return { type: EDIT_PRODUCT_SUCCESS };
// };

export const getProducts=()=>(dispatch) => {
    dispatch(getProductsRequestAction());

return  axios.get('https://craftvilla-mock-server.onrender.com/home_decor').then((res) => {
        dispatch(getProductsSuccessAction(res));
      })
      .catch((err)=>{
        dispatch(getProductsFailureAction());
      });
};


// export const editProduct = (id, ProductData) => (dispatch) => {
//   return axios.patch(`http://localhost:8080/products/${id}`, ProductData).then(() => {
//     dispatch(editProductSuccess());
//   });
// };