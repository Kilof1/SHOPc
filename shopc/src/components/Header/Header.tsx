import * as React from "react";
import Currency from "./Currency";
import Nav from "./nav/Nav";
import "./Header.scss";
import SearchBar from "./searchBar/SearchBar";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__top">
        <span className="header__top__hello">Witaj w naszym sklepie!</span>
        <Currency />
      </div>
      <SearchBar />
      <Nav />
    </header>
  );
};

export default Header;
