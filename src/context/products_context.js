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

// useReducer hooks 1.0 App.js
const initialState = {
  isSidebarOpen: false,
};

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
