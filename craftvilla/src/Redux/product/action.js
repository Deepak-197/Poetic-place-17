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

export const getProducts = (sort, order="price",minPrice,maxPrice,page,limit) => async (dispatch) => {
  dispatch(getProductsRequestAction());
// console.log(sort,order);
  return await axios
    .get(
      `https://craftvilla-mock-server2.onrender.com/home_decor/?_sort=${order}&_order=${sort}&_page=${page}&_limit=${limit}&price_gte=${minPrice}&price_lte=${maxPrice}`
    )
    .then((res) => {
      dispatch(getProductsSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(getProductsFailureAction());
    });
};

// export const editProduct = (id, ProductData) => (dispatch) => {
//   return axios.patch(`http://localhost:8080/products/${id}`, ProductData).then(() => {
//     dispatch(editProductSuccess());
//   });
// };
