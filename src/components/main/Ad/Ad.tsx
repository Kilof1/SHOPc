import * as React from "react";

import "./Ad.scss";

interface AdProps {
  img: string;
}

const Ad: React.FC<AdProps> = ({ img }: AdProps) => {
  return (
    <div className="secondAd">
      <img className="secondAd__img" src={img} alt="" />
    </div>
  );
};

export default Ad;
