import * as React from "react";
// import pcIMG from "./pc1.png";
import "./SliderImage.scss";
import info from "./Info";

interface SliderImageProps {
  index: number;
}

const SliderImage: React.FC<SliderImageProps> = (props: SliderImageProps) => {
  return (
    <img
      className="slider-container__grid__image__img"
      src={info[props.index].imageSrc}
      alt="XDDDDD"
    />
  );
};

export default SliderImage;
