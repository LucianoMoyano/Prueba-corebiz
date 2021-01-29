import {GET_ALL_PRODUCTS, GET_PRODUCTS_BYID, ADDTOCARD } from "../constanst";
import axios from "axios";


const set_products = (productos) => {
  return {
    type: GET_ALL_PRODUCTS,
    payload: productos,
  };
};

const set_productsById = (data) => ({
  type: GET_PRODUCTS_BYID,
  payload: data,
});

 export const addToCart = (data) =>({
  type: ADDTOCARD,
  payload: data,
}); 

export const products = () => (dispatch, state) => {
  
  axios
    .get("https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products", { 
    })
    .then((products) => {
console.log(products.data, "luciano")
      dispatch(set_products(products.data));
    })
    .catch((err) => {
      dispatch(console.log(err));
    });
};

export const productsById = (id) => (dispatch, state) => {
 
  axios
    .get(`https://5d8cdb5a443e3400143b4bea.mockapi.io/corebizchile/products/${id}`, {
     
    })
    .then((product) => {
      dispatch(set_productsById(product.data));
    })

    .catch((err) => {
      dispatch(console.log(err));
    });
};

