import { FC } from "react";
import { useSelector } from "react-redux";
import { ProductListItem } from "../ProductListItem";
import { RootState } from "../../store/reducer";
import { Link } from "react-router-dom";

interface ProductsTypes {
  id: string;
  picture: string;
  title: string;
  price: { amount: number };
  free_shipping: boolean;
  city: string;
}

export const ProductList: FC = () => {
  const { productsData } = useSelector((state: RootState) => state.products);

  return (
    <ol className="product-list-main">
      {productsData?.items.map(
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
  );
};
