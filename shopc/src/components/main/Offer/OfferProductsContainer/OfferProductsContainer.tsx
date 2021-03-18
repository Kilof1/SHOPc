import * as React from "react";
import pc from "../../ImageNav/subcomponents/assets/pc.png";
import proc from "../../ImageNav/subcomponents/assets/proc.jpg";
import Product from "./Product/Product";

import "./OfferProductsContainer.scss";

export interface OfferProductsContainerProps {
  active: [];
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
