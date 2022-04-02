export enum ProductDataTypes {
    GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
}

interface actionGetAllProduct {
    type: ProductDataTypes.GET_ALL_PRODUCTS;
    payload: any;
}

export type ProductsAction = actionGetAllProduct