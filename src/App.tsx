import { FC } from "react";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducer";

import { SearchBar, SearchResults } from "./components";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductDetailsMain } from './components/ProductDetailsMain/ProductDetailsMain';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    ((window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose
  )
);

const App: FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <SearchBar />
        <Routes>
          <Route path="/items" element={<SearchResults />} />
          <Route path="/items/:itemId" element={<ProductDetailsMain />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
