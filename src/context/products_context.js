import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

// fetch products complete
const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  feature_products: [],
};

// // useReducer hooks 1.0 App.js
// const initialState = {
//   isSidebarOpen: false,
// };

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  // useReducer hooks
  const [state, dispatch] = useReducer(reducer, initialState);

  // useReducer hooks 2.0
  const openSidebar = () => {
    // Dispatch for products_reducer under reducer folder
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    // Dispatch for products_reducer under reducer folder
    dispatch({ type: SIDEBAR_CLOSE });
  };

  // fetch products from constants.js
  const fetchProducts = async (url) => {
    // fetch products complete
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const res = await axios.get(url);
      const products = res.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
      console.log(res);
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
