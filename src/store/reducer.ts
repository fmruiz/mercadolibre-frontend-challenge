import { combineReducers } from 'redux';
import { productsReducer } from './reducers';

const rootReducer = combineReducers({
    products: productsReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;