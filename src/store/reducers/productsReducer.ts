import { ProductsDataType, ProductType } from "../../types";
import { ProductsAction } from "../types";

interface ProductsState {
  productsData: ProductsDataType;
  product: ProductType;
}

const initialState: ProductsState = {
  productsData: {
    author: {
      name: '',
      lastname: ''
    },
    categories: [],
    items: undefined,
  },
  product: {
    author: {
      name: '',
      lastname: '',
    },
    item: {
      id: '',
      title: '',
      price: {
        currency: '',
        amount: 0,
      },
      picture: '',
      condition: '',
      free_shiping: undefined,
      sold_quantity: 0,
      description: '',
    }
  },
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
