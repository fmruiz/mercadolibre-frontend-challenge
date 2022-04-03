import React from "react";
import "./BreadCrumb.styles.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducer";

export const BreadCrumb: React.FC = () => {
  const { categories, items } = useSelector(
    (state: RootState) => state.products.productsData
  );

  return (
    <p className="breadcrumb">
      {`${
        categories && categories[0] !== undefined ? `${categories[0]} >` : ""
      } ${items ? items[0].title.split(" ").shift() : ""}`}
    </p>
  );
};
