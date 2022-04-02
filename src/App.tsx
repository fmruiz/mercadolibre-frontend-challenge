import { FC } from "react";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducer";

import { ProductDetails, SearchBar, SearchResults } from "./components";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          <Route path="/items/:itemId" element={<ProductDetails />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
