import * as React from "react";
import TopSlider from "./TopSlider/TopSlider";
import ImageNav from "./ImageNav/ImageNav";
import FirstAd from "./FirstAd/FirstAd";
import Offer from "./Offer/Offer";
import Ad from "./Ad/Ad";
import ContactShortcuts from "./ContactShortcuts/ContactShortcuts";
import Favourite from "./Favourite/Favourite";

import sAd from "./assets/secondAd.jpg";
import tAd from "./assets/thirdAd.jpg";
import fAd from "./assets/fourthAd.jpg";

import "./Main.scss";
import LastAdded from "./LastAdded/LastAdded";
import News from "../News/News";

const Main: React.FC = () => {
  return (
    <div className="main">
      <TopSlider />
      <ImageNav />
      <FirstAd />
      <Offer />
      <Ad img={sAd} />
      <div className="main__inner">
        <ContactShortcuts />
        <Ad img={tAd} />
        <LastAdded />
        <Ad img={fAd} />
        <Favourite />
        <News />
      </div>
    </div>
  );
};

export default Main;
