import * as React from "react";
import TopSlider from "./TopSlider/TopSlider";
import ImageNav from "./ImageNav/ImageNav";
import FirstAd from "./FirstAd/FirstAd";
import Offer from "./Offer/Offer";
import SecondAd from "./SecondAd/SecondAd";
import ContactShortcuts from "./ContactShortcuts/ContactShortcuts";
import ThirdAd from "./ThirdAd/ThirdAd";

const Main: React.FC = () => {
  return (
    <div className="main">
      <TopSlider />
      <ImageNav />
      <FirstAd />
      <Offer />
      <SecondAd />
      <ContactShortcuts />
      <ThirdAd />
    </div>
  );
};

export default Main;
