import * as React from "react";
import OfferHeader from "./OfferHeader/OfferHeader";
import "./Offer.scss";
import OfferProductsContainer from "./OfferProductsContainer/OfferProductsContainer";
import pc from "../ImageNav/subcomponents/assets/pc.png";
import proc from "../ImageNav/subcomponents/assets/proc.jpg";

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
];

const nowe = [
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
    rating: 5,
    price: 12000,
    currency: "pln",
  },
  {
    imgSrc: proc,
    title: "Pc Razor",
    rating: 5,
    price: 12000,
    currency: "pln",
  },
  {
    imgSrc: proc,
    title: "Pc Razor",
    rating: 5,
    price: 12000,
    currency: "pln",
  },
  {
    imgSrc: proc,
    title: "Pc Razor",
    rating: 5,
    price: 12000,
    currency: "pln",
  },
  {
    imgSrc: proc,
    title: "Pc Razor",
    rating: 5,
    price: 12000,
    currency: "pln",
  },
  {
    imgSrc: proc,
    title: "Pc Razor",
    rating: 5,
    price: 12000,
    currency: "pln",
  },
  {
    imgSrc: proc,
    title: "Pc Razor",
    rating: 5,
    price: 12000,
    currency: "pln",
  },
];

const Offer: React.FC = () => {
  const [active, setActive] = React.useState(recomended);

  const whichActive = (e: React.MouseEvent<HTMLUListElement>) => {
    const currentElement = e.target as HTMLElement;
    if (
      !currentElement.classList.contains("active") &&
      currentElement.tagName === "LI"
    ) {
      const list = [...e.currentTarget.children];

      list.forEach((li) => {
        li.classList.remove("active");
      });

      currentElement.classList.add("active");
      const tables = [recomended, nowe, recomended];
      const index = +currentElement.id;
      setActive(tables[index]);
    }
  };

  return (
    <div className="offer">
      <OfferHeader whichActive={whichActive} />
      <OfferProductsContainer active={active} />
    </div>
  );
};

export default Offer;
