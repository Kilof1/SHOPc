import * as React from "react";
import { useState, useEffect } from "react";

import nav from "./assets/nav.svg";
import phone from "./assets/phone.svg";
import email from "./assets/email.svg";
import visa from "./assets/symbols.svg";

import "./Navlinks.scss";

const Navlinks: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const currentElement = e.currentTarget;
    currentElement.children[0].classList.toggle("active");

    console.log(currentElement.children[0].classList);

    console.log(
      e.currentTarget.nextElementSibling?.classList.toggle("activeNav")
    );
  };

  return (
    <div className="navlinks">
      <div className="navlinks__contactUs">
        <h3 className="navlinks__contactUs__title" onClick={handleClick}>
          Kontakt
          <span className="navlinks__contactUs__title__mobile"></span>
        </h3>
        <ul className="navlinks__contactUs__list contact">
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              <img
                className="navlinks__contactUs__list__item__link__image"
                src={nav}
                alt=""
              />
              Grabiszyńska 39, Wrocław 55-080
            </a>
          </li>
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              <img
                className="navlinks__contactUs__list__item__link__image"
                src={phone}
                alt=""
              />
              501-059-231
            </a>
          </li>
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              <img
                className="navlinks__contactUs__list__item__link__image"
                src={email}
                alt=""
              />
              cwrzzaik@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div className="navlinks__contactUs">
        <h3 className="navlinks__contactUs__title" onClick={handleClick}>
          Produkty
          <span className="navlinks__contactUs__title__mobile"></span>
        </h3>
        <ul className="navlinks__contactUs__list ">
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              Oferta specjalna
            </a>
          </li>
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              Bestseller Product
            </a>
          </li>
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              Ostatnio dodane
            </a>
          </li>
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              Ulubione
            </a>
          </li>
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              Komputery
            </a>
          </li>
        </ul>
      </div>
      <div className="navlinks__contactUs">
        <h3 className="navlinks__contactUs__title" onClick={handleClick}>
          Usługi
          <span className="navlinks__contactUs__title__mobile"></span>
        </h3>
        <ul className="navlinks__contactUs__list ">
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              O nas
            </a>
          </li>
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              Skontaktuj się
            </a>
          </li>
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              Dostawa
            </a>
          </li>
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              Polityka prywatności
            </a>
          </li>
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              Zasady i warunki
            </a>
          </li>
        </ul>
      </div>
      <div className="navlinks__contactUs">
        <h3 className="navlinks__contactUs__title" onClick={handleClick}>
          Extra
          <span className="navlinks__contactUs__title__mobile"></span>
        </h3>
        <ul className="navlinks__contactUs__list ">
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              Szukaj
            </a>
          </li>
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              Wszystkie Kolekcje
            </a>
          </li>
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              Aktualności
            </a>
          </li>
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              Wszystkie produkty
            </a>
          </li>
          <li className="navlinks__contactUs__list__item">
            <a className="navlinks__contactUs__list__item__link" href="#">
              Zasady i warunki
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navlinks;
