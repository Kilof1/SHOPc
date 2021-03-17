import * as React from "react";

import SideBar from "../nav/SideBar";

import heartIcon from "../../../assets/Header/icons//heart.svg";
import userIcon from "../../../assets/Header/icons/user (1).svg";
import shoppingIcon from "../../../assets/Header/icons/shopping-cart.svg";
import menuIcon from "../../../assets/Header/icons/menu.svg";

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header__searchbar">
        <div className="header__searchbar__logo">
          <img onClick={handleClick} src={menuIcon} alt="Refresh page"></img>
          SHOP<span className="header__searchbar__logo__last">c</span>
        </div>
        <div className="header__searchbar__search">
          <input
            className="header__searchbar__search__input"
            type="text"
            placeholder="Szukaj..."
          />
          <button className="header__searchbar__search__btn">Szukaj</button>
        </div>
        <div className="header__searchbar__menu">
          <div className="header__searchbar__menu__favourite">
            <img src={heartIcon} alt="Refresh Page" className="siema" />
          </div>
          <div className="header__searchbar__menu__login">
            <img src={userIcon} alt="Refresh Page" />
            <span>Zaloguj</span>
          </div>
          <div className="header__searchbar__menu__shoping">
            <img src={shoppingIcon} alt="Refresh Page" />
            <span></span>
          </div>
        </div>
      </div>
      {isOpen ? <SideBar click={handleClick} /> : null}
    </>
  );
};

export default SearchBar;
