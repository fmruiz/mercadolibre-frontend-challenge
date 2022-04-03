import { FC } from "react";
import { useDispatch } from "react-redux";

import "./ProductListItem.styles.scss";
import { priceBuilder } from "../../common";

import Shipping from "../../assets/shipping.png";
import { getProductById } from "../../store/actions/productsActions";

interface Props {
  image: string;
  title: string;
  price: number;
  free_shipping: boolean;
  city: string;
  index: number;
  id: string;
}

export const ProductListItem: FC<Props> = ({
  image,
  title,
  price,
  free_shipping,
  city,
  index,
  id,
}) => {
  const dispatch = useDispatch();

  return (
    <li
      data-test-id="product-list-item"
      className={`product-list-item product-list-item--${index}`}
      onClick={() => dispatch(getProductById(id))}
    >
      <div className="product-list-item__container">
        <img
          src={image}
          className="product-list-item__image"
          alt="product-list-image"
        />
        <div className="product-list-item__description">
          <div className="product-list-item__container-price">
            <div className="product-list-item__shipping">
              <span className="product-list-item__price">
                $ {priceBuilder(price)}
              </span>
              {free_shipping ? <img src={Shipping} alt="product-item" /> : null}
            </div>
            <span className="product-list-item__location">{city}</span>
          </div>
          <p className="product-list-item__title">{title}</p>
        </div>
      </div>
    </li>
  );
};
