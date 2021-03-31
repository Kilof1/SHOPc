import * as React from "react";
import Product from "./Product/Product";

import "./OfferProductsContainer.scss";

export interface OfferProductsContainerProps {
  active: {
    imgSrc: string;
    title: string;
    rating: number;
    price: number;
    currency: string;
  }[];
}

const OfferProductsContainer: React.FC<OfferProductsContainerProps> = ({
  active,
}: OfferProductsContainerProps) => {
  return (
    <div className="offerProductsContainer">
      <div className="offerProductsContainer__grid">
        {active.map((p, i) => (
          <Product item={p} key={i} />
        ))}
      </div>
    </div>
  );
};

export default OfferProductsContainer;
