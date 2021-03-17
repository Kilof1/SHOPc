import * as React from "react";
import info from "./Info";

import "./SliderInfo.scss";

export interface SliderInfoProps {
  index: number;
}

const SliderInfo: React.FC<SliderInfoProps> = (props: SliderInfoProps) => {
  return (
    <div className="slider-container__grid__info">
      <h2 className="slider-container__grid__info__h2">
        {info[props.index].h2}
      </h2>
      <h1 className="slider-container__grid__info__h1">
        {info[props.index].h1}
      </h1>
      <p className="slider-container__grid__info__paragraph">
        {info[props.index].p}
      </p>
      <button className="slider-container__grid__info__button">
        Zobacz Więcej
      </button>
    </div>
  );
};

export default SliderInfo;
