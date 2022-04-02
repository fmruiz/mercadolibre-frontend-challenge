export enum ProductDataTypes {
  GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS",
  GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID",
}

interface actionGetAllProduct {
  type: ProductDataTypes.GET_ALL_PRODUCTS;
  payload: any;
}

interface actionGetProductById {
  type: ProductDataTypes.GET_ALL_PRODUCTS;
  payload: string;
}

export type ProductsAction = actionGetAllProduct | actionGetProductById;
