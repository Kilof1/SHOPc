import * as React from "react";
import "./LastAdded.scss";
import pc from "../ImageNav/subcomponents/assets/pc.png";
import proc from "../ImageNav/subcomponents/assets/proc.jpg";
import LastAddedProductsContainer from "../Favourite/FavouriteContainer/ProductsContainer";

const recomended = [
  {
    imgSrc: pc,
    title: "Pc Razor",
    rating: 5,
    price: 12000,
    currency: "pln",
  },
  {
    imgSrc: pc,
    title: "Pc Razor",
    rating: 3,
    price: 12000,
    currency: "pln",
  },
  {
    imgSrc: pc,
    title: "Pc Razor",
    rating: 2,
    price: 12000,
    currency: "pln",
  },
  {
    imgSrc: pc,
    title: "Pc Razor",
    rating: 4,
    price: 12000,
    currency: "pln",
  },
  {
    imgSrc: pc,
    title: "Pc Razor",
    rating: 2,
    price: 12000,
    currency: "pln",
  },
  {
    imgSrc: pc,
    title: "Pc Razor",
    rating: 3,
    price: 12000,
    currency: "pln",
  },
  {
    imgSrc: pc,
    title: "Pc Razor",
    rating: 5,
    price: 12000,
    currency: "pln",
  },
  {
    imgSrc: proc,
    title: "Pc Razor",
    rating: 1,
    price: 12000,
    currency: "pln",
  },
  {
    imgSrc: pc,
    title: "Pc Razor",
    rating: 5,
    price: 12000,
    currency: "pln",
  },
  {
    imgSrc: proc,
    title: "Pc Razor",
    rating: 1,
    price: 12000,
    currency: "pln",
  },
];

const LastAdded: React.FC = () => {
  return (
    <div className="lastAdded">
      <div className="lastAdded__header">
        <h2 className="lastAdded__header__title">Ostatnio dodane</h2>
      </div>
      <LastAddedProductsContainer active={recomended} />
    </div>
  );
};

export default LastAdded;
