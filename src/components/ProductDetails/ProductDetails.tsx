import { FC } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./ProductDetails.styles.scss";
import { RootState } from "../../store/reducer";
import { priceBuilder } from '../../common';

export const ProductDetails: FC = () => {
  const { itemId } = useParams();
  const { productsData } = useSelector((state: RootState) => state.products);
  const { product } = useSelector((state: RootState) => state.products);

  const productId = productsData?.items.find((e: any) => e.id === itemId);

  if (!productId) return null;
  
  return (
    <div className="product-details">
      <div className="product-details__price-container">
        <img src={product?.item.picture} className="product-details__image" alt="product-image" />
        <div className="product-details__text-container">
          <span className="product-details__sold">Nuevo - {product?.item.sold_quantity} vendidos</span>
          <h2 className="product-details__title">
            {product?.item.title}
          </h2>
          <span className="product-details__price">$ {product ? priceBuilder(product?.item.price.amount) : null}</span>
          <button className="product-details__button">Comprar</button>
        </div>
      </div>
      <div className="product-details__description-container">
        <p className="product-details__subtitle">Descripcion del producto</p>
        <span className="product-details__description">{product?.item.description}</span>
      </div>
    </div>
  );
};
