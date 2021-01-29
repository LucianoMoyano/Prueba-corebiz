import { GET_ALL_PRODUCTS, GET_PRODUCTS_BYID, ADDTOCARD  } from "../constanst";

const initialState = {
  products: [],
   cart:[], 
  selected_product: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_PRODUCTS_BYID:
      return { ...state, selected_product: action.payload };
     case ADDTOCARD:
        return{...state, cart: [...state.cart,action.payload]} 
  }
};
