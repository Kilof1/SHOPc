import * as React from "react";
import Info from "../firstAddata";

import "./firstAdInfo.scss";

const FirstAdInfo: React.FC = () => {
  return (
    <div className="firstAd__Info">
      <h1 className="firstAd__Info__h1">{Info.h1}</h1>
      <p className="firstAd__Info__p">{Info.p}</p>
      <button className="firstAd__Info__btn">Dowiedz się więcej</button>
    </div>
  );
};

export default FirstAdInfo;
