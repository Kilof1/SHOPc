import * as React from "react";
import pc from "./pc1.png";
import bin from "./trash.svg";
import close from "./close.svg";
import useOnClickOutside from "../../../../helpers/useOutsideClick";

import "./Favourites.scss";

interface FavProps {
  func: () => void;
  actives: boolean;
}

const Favourites: React.FC<FavProps> = ({ func, actives }: FavProps) => {
  const ref = React.useRef(null);

  const handleClickOutside = () => {
    func();
  };

  const handleOnClick = () => {
    func();
  };
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className={actives ? "favourites" : "favourites actives"} ref={ref}>
      <div>
        <h3 className="favourites__title">
          Ulubione
          <span className="favourites__title__close">
            <img src={close} alt="" onClick={handleOnClick} />
          </span>
        </h3>

        <div className="favourites__item">
          <img className="favourites__item__img" id="img" src={pc} alt="" />
          <div className="favourites__item__name">Komputer pc master</div>
          <img src={bin} alt="" id="bin" />
        </div>
        <div className="favourites__item">
          <img className="favourites__item__img" id="img" src={pc} alt="" />
          <div className="favourites__item__name">Komputer pc master</div>
          <img src={bin} alt="" id="bin" />
        </div>
        <div className="favourites__item">
          <img className="favourites__item__img" id="img" src={pc} alt="" />
          <div className="favourites__item__name">Komputer pc master</div>
          <img src={bin} alt="" id="bin" />
        </div>
      </div>
    </div>
  );
};

export default Favourites;
