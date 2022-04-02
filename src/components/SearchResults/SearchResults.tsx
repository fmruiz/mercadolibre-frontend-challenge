import { FC } from "react";
import { BreadCrumb } from "../../common";
import { ProductList } from "../ProductList";
import "./SearchResults.styles.scss";

export const SearchResults: FC = () => {
  return (
    <main className="main">
      <BreadCrumb />
      <ProductList />
    </main>
  );
};
