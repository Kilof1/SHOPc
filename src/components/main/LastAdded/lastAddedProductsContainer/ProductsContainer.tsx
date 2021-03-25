import * as React from "react";
import Product from "../../Offer/OfferProductsContainer/Product/Product";

import "../../Offer/OfferProductsContainer/OfferProductsContainer.scss";

export interface ProductsContainerProps {
  active: {
    imgSrc: string;
    title: string;
    rating: number;
    price: number;
    currency: string;
  }[];
}

const ProductsContainer: React.FC<ProductsContainerProps> = ({
  active,
}: ProductsContainerProps) => {
  return (
    <div className="lastAddedProductsContainer">
      <div className="lastAddedProductsContainer__grid">
        {active.map((p, i) => (
          <Product item={p} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
