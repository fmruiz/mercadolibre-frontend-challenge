import { ProductsAction } from '../types';

interface ProductsState {
    productsData: any
}

const initialState: ProductsState = {
    productsData: undefined,
}

export const productsReducer = (state = initialState, action: ProductsAction) => {
    if (action.type === 'GET_ALL_PRODUCTS') {
        return {
            ...state,
            productsData: action.payload
        }
    }

    return state;
}