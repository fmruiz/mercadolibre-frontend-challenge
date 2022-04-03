import React from "react";
import { useSelector } from "react-redux";
import { ProductListItem } from "../ProductListItem";
import { RootState } from "../../store/reducer";
import { Link } from "react-router-dom";
import { BreadCrumb, NotResultsFound } from "../../common";
import "./ProductList.styles.scss";

interface ProductsTypes {
  id: string;
  picture: string;
  title: string;
  price: { amount: number };
  free_shipping: boolean;
  city: string;
}

export const ProductList: React.FC = () => {
  const { productsData } = useSelector((state: RootState) => state.products);

  // check if there are no search results
  if (productsData?.items?.length === 0) return <NotResultsFound />;

  return (
    <div className="product-list-main">
      <BreadCrumb />
      <ol data-test-id="product-list" className="product-list-main__list">
        {productsData?.items?.map(
          (
            { id, picture, title, price, free_shipping, city }: ProductsTypes,
            index: number
          ) => (
            <Link key={id} to={`/items/${id}`}>
              <ProductListItem
                key={id}
                id={id}
                index={index}
                image={picture}
                title={title}
                price={price.amount}
                free_shipping={free_shipping}
                city={city}
              />
            </Link>
          )
        )}
      </ol>
    </div>
  );
};
