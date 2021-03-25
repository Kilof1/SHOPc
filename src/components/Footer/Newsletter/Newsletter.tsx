import * as React from "react";
import twitter from "./assets/twitter.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.png";
import youtube from "./assets/youtube.svg";
import linkedin from "./assets/linkedin.svg";

import "./Newsletter.scss";

const Newsletter: React.FC = () => {
  return (
    <div className="newsletter">
      <div className="newsletter__form-container">
        <h3 className="newsletter__form-container__name">Newsletter</h3>
        <div className="newsletter__form-container__input-container">
          <input
            className="newsletter__form-container__input-container__input"
            type="text"
            placeholder="Email addres"
          />
          <button className="newsletter__form-container__input-container__btn">
            Subskrybuj
          </button>
        </div>
      </div>
      <div className="newsletter__socials-container">
        <span className="newsletter__socials-container__name">Follow us:</span>
        <img
          src={twitter}
          alt=""
          className="newsletter__socials-container__social-img"
        />
        <img
          src={facebook}
          alt=""
          className="newsletter__socials-container__social-img"
        />
        <img
          src={instagram}
          alt=""
          className="newsletter__socials-container__social-img"
        />
        <img
          src={youtube}
          alt=""
          className="newsletter__socials-container__social-img"
        />
        <img
          src={linkedin}
          alt=""
          className="newsletter__socials-container__social-img"
        />
      </div>
    </div>
  );
};

export default Newsletter;
