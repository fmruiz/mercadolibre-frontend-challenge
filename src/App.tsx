import { FC, lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchBar } from "./components";
import { Loading } from "./common";
import store from "./store";
import "./App.styles.scss";

// using React Lazy for dinamic components
const ProductDetails = lazy(() => import("./components/ProductDetails"));
const ProductList = lazy(() => import("./components/ProductList"));

const App: FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <SearchBar />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/items" element={<ProductList />} />
              <Route path="/items/:itemId" element={<ProductDetails />} />
            </Routes>
          </Suspense>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
