import * as React from "react";
import "./OfferHeader.scss";

export interface OfferHeaderProps {
  whichActive: (e: React.MouseEvent<HTMLUListElement>) => void;
}

const OfferHeader: React.FC<OfferHeaderProps> = (props: OfferHeaderProps) => {
  return (
    <div className="offerHeader">
      <h2 className="offerHeader__title">Oferta</h2>
      <ul className="offerHeader__list" onClick={props.whichActive}>
        <li className="offerHeader__list__item active" id="0">
          Polecamy
        </li>
        <li className="offerHeader__list__item" id="1">
          Nowości
        </li>
        <li className="offerHeader__list__item" id="2">
          Bestsellery
        </li>
      </ul>
    </div>
  );
};

export default OfferHeader;
