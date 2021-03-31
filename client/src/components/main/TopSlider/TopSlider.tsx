import * as React from "react";
import SliderInfo from "./subcomponents/SliderInfo";
import SliderImage from "./subcomponents/SliderImage";
import ChangeButtons from "./subcomponents/ChangeButtons";
import SVGElements from "./subcomponents/SVGElementInstanceList";

import "./TopSlider.scss";

const TopSlider: React.FC = () => {
  const [slideIndex, setSlideIndex] = React.useState(0);
  const [opacity, setOpacity] = React.useState(true);

  React.useEffect(() => {
    const interval = setTimeout(() => {
      setOpacity(false);
      setTimeout(() => {
        if (slideIndex === 2) setSlideIndex(0);
        else {
          setSlideIndex(slideIndex + 1);
        }
      }, 500);
    }, 8000);
    return () => clearTimeout(interval);
  }, [slideIndex]);

  React.useEffect(() => {
    setTimeout(() => {
      setOpacity(true);
    }, 500);
  }, [opacity]);

  const handleClickNext = async () => {
    setOpacity(false);
    setTimeout(() => {
      if (slideIndex === 2) setSlideIndex(0);
      else {
        setSlideIndex(slideIndex + 1);
      }
    }, 500);
  };

  const handleClickPrevious = () => {
    setOpacity(false);
    setTimeout(() => {
      if (slideIndex === 0) setSlideIndex(2);
      else {
        setSlideIndex(slideIndex - 1);
      }
    }, 500);
  };

  return (
    <div className="slider-container">
      <SVGElements />
      <div
        style={{
          opacity: opacity ? "1" : "0",
          transition: "all .5s",
        }}
        className="slider-container__grid"
      >
        <SliderImage index={slideIndex} />
        <SliderInfo index={slideIndex} />
      </div>
      <ChangeButtons next={handleClickNext} previous={handleClickPrevious} />
    </div>
  );
};

export default TopSlider;
