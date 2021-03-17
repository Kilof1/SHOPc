import * as React from "react";
import pol from "../../assets/Header/icons/poland.svg";
import gb from "../../assets/Header/icons//united-kingdom.svg";
import eu from "../../assets/Header/icons//european-union.svg";

import "./Currency.scss";

interface currencyTypes {
  cur: string;
  img: string;
}

const availableCurrencies = [
  {
    cur: "PLN",
    img: pol,
  },
  {
    cur: "USD",
    img: gb,
  },
  {
    cur: "EUR",
    img: eu,
  },
];

const Currency: React.FC = () => {
  const [menu, setMenu] = React.useState(false);
  const [currency, setCurrency] = React.useState<currencyTypes>(
    availableCurrencies[0]
  );

  const showMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setMenu(!menu);
    document.addEventListener("click", closeMenu);
  };

  const closeMenu = () => {
    setMenu(!menu);
    document.removeEventListener("click", closeMenu);
  };

  const changeCurrency = (name: string, img: string) => {
    setCurrency({ cur: name, img: img });
    setMenu(!menu);
  };

  return (
    <>
      <span className="currency" onClick={showMenu}>
        <img className="currency__image" src={currency.img} alt="Niestety" />{" "}
        <span className="currency__name">{currency.cur}</span>
      </span>

      {menu ? (
        <div className="menu">
          {availableCurrencies.map((c) => (
            <div
              key={c.cur}
              className="menu__option"
              onClick={() => changeCurrency(c.cur, c.img)}
            >
              <img className="menu__option__img" src={c.img} alt="" />
              <span className="menu__option__name">{c.cur}</span>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Currency;
