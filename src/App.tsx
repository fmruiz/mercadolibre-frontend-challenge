import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchBar, ProductList, ProductDetails } from "./components";
import store from "./store";
import "./App.styles.scss";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <SearchBar />
          <Routes>
            <Route path="/items" element={<ProductList />} />
            <Route path="/items/:itemId" element={<ProductDetails />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
