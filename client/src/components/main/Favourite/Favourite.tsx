import * as React from "react";
import "./Favourite.scss";
import ProductsContainer from "./FavouriteContainer/ProductsContainer";

const Favourite: React.FC = () => {
  return (
    <div className="lastAdded">
      <div className="lastAdded__header">
        <h2 className="lastAdded__header__title">Ulubione</h2>
      </div>
      <ProductsContainer />
    </div>
  );
};

export default Favourite;
