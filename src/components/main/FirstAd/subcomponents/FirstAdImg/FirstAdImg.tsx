import * as React from "react";
import data from "../firstAddata";

import "./FirstAdImg.scss";

const FirstAdImg: React.FC = () => {
  return (
    <div className="firstAdImg">
      <img className="firstAdImg__img" src={data.imageSrc} alt="" />
    </div>
  );
};

export default FirstAdImg;
