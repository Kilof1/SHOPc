import * as React from "react";

import SideBar from "../nav/SideBar";
import Favourites from "./Favourites/Favourites";
import useOnClickOutside from "../../../helpers/useOutsideClick";

import heartIcon from "../../../assets/Header/icons//heart.svg";
import userIcon from "../../../assets/Header/icons/user (1).svg";
import shoppingIcon from "../../../assets/Header/icons/shopping-cart.svg";
import menuIcon from "../../../assets/Header/icons/menu.svg";
import { NONAME } from "node:dns";
import Login from "./Login/Login";

const SearchBar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [favPopup, setFavPopup] = React.useState(false);
  const [LoginOpen, setLoginOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleIconClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const currentElement = e.target as HTMLElement;

    if (
      currentElement.parentElement?.classList.contains(
        "header__searchbar__menu__favourite"
      )
    ) {
      console.log("Kliknąłeś we");
      setFavPopup(!favPopup);
    }
  };

  const handleClose = () => {
    if (favPopup) {
      setFavPopup(false);
      console.log("powinenem działaś");
    }
  };

  const showLoginWindow = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const currentElement = e.currentTarget as HTMLElement;
    console.log(currentElement);
    if (currentElement.classList.contains("header__searchbar__menu__login")) {
      console.log("Kliknąłeś we");
      setLoginOpen(true);
    }
  };

  const hideLoginWidnow = () => {
    console.log("Działam");
    setTimeout(() => {
      setLoginOpen(false);
    }, 800);
    console.log(LoginOpen);
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
          <div
            className="header__searchbar__menu__favourite"
            onClick={handleIconClick}
          >
            <img src={heartIcon} alt="Refresh Page" className="siema" />
            <div className="header__searchbar__menu__favourite__info">3</div>
            <Favourites func={handleClose} actives={favPopup} />
          </div>
          <div
            className="header__searchbar__menu__login"
            onClick={showLoginWindow}
          >
            <img src={userIcon} alt="Refresh Page" />
            <span>Zaloguj</span>
            <Login actives={LoginOpen} func={hideLoginWidnow} />
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
