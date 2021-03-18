import * as React from "react";
import sAd from "./secondAd.jpg";

import "./SecondAd.scss";

const SecondAd: React.FC = () => {
  return (
    <div className="secondAd">
      <img className="secondAd__img" src={sAd} alt="" />
    </div>
  );
};

export default SecondAd;
