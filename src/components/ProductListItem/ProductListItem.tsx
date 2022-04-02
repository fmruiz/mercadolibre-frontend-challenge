import { FC } from "react";
import "./ProductListItem.styles.scss";

import Shipping from "../../assets/shipping.png";

interface Props {
  image: string
  title: string
  price: number
  free_shipping: boolean
  city: string
  index: number
}

export const ProductListItem: FC<Props> = ({
  image,
  title,
  price,
  free_shipping,
  city,
  index,
}) => (
  <li className={`product-list-item product-list-item--${index}`}>
    <div className="product-list-item__container">
      <div className="product-list-item__image-container">
        <img
          src={image}
          className="product-list-item__image"
          alt="product-list-image"
        />
      </div>
      <div className="product-list-item__description">
        <div className="product-list-item__container-price">
          <div className="product-list-item__shipping">
            <span className="product-list-item__price">$ {price}</span>
            {free_shipping ? <img src={Shipping} alt="product-item" /> : null}
          </div>
          <span className="product-list-item__location">{city}</span>
        </div>
        <p className="product-list-item__title">{title}</p>
      </div>
    </div>
  </li>
);
