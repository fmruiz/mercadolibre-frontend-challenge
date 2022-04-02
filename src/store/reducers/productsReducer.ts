import { ProductsAction } from "../types";

interface ProductsState {
  productsData: any;
  product: any;
}

const initialState: ProductsState = {
  productsData: undefined,
  product: undefined,
};

export const productsReducer = (
  state = initialState,
  action: ProductsAction
) => {
  if (action.type === "GET_ALL_PRODUCTS") {
    return {
      ...state,
      productsData: action.payload,
    };
  }

  if (action.type === "GET_PRODUCT_BY_ID") {
    return {
      ...state,
      product: action.payload,
    };
  }

  return state;
};
