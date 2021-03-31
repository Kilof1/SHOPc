import * as React from "react";

import "./Product.scss";
import Rating from "../../../Rating";

export interface ProductProps {
  item: {
    imgSrc: string;
    title: string;
    rating: number;
    price: number;
    currency: string;
  };
}

const Product: React.FC<ProductProps> = ({ item }: ProductProps) => {
  return (
    <div className="product" id="productFlex">
      <div className="product__popover">
        <div className="product__popover__container">
          <div className="product__popover__container__option">Zobacz</div>
          <div className="product__popover__container__option">
            Dodaj do ulubionych
          </div>
          <div className="product__popover__container__option">
            Dodaj do koszyka
          </div>
        </div>
      </div>
      <div className="product__imgContainer">
        <img className="product__imgContainer__img" src={item.imgSrc} alt="" />
      </div>
      <div className="product__descriptionContainer">
        <h3 className="product__descriptionContainer__title">{item.title}</h3>
        <Rating rating={item.rating} />
        <div className="product__descriptionContainer__price">
          {item.price} {item.currency}
        </div>
      </div>
    </div>
  );
};

export default Product;
