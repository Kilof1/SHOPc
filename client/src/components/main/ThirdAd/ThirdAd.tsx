import * as React from "react";
import sAd from "./thirdAd.jpg";

import "./ThirdAd.scss";

const ThirdAd: React.FC = () => {
  return (
    <div className="thirdAd">
      <img className="thirdAd__img" src={sAd} alt="" />
    </div>
  );
};

export default ThirdAd;
