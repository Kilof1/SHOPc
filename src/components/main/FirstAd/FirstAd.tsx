import * as React from "react";
import SVGElements from "./subcomponents/SVGElements";
import "./FirstAd.scss";
import FirstAdInfo from "./subcomponents/firstAdInfo/FirstAdInfo";
import FirstAdImg from "./subcomponents/FirstAdImg/FirstAdImg";

const FirstAd: React.FC = () => {
  return (
    <div className="firstAd">
      <SVGElements />
      <div className="firstAd__grid">
        <FirstAdInfo />
        <FirstAdImg />
      </div>
    </div>
  );
};

export default FirstAd;
