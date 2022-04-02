import { FC } from "react";
import { BreadCrumb } from "../../common";
import { ProductDetails } from "../ProductDetails";
import "./ProductDetailsMain.styles.scss";

export const ProductDetailsMain: FC = () => {
  return (
    <div className="product-details-main">
      <BreadCrumb />
      <ProductDetails />
    </div>
  );
};
