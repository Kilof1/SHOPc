import * as React from "react";
import Newsletter from "./Newsletter/Newsletter";

import "./Footer.scss";
import Navlinks from "./Navlinks/Navlinks";
import Foot from "./Foot/Foot";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__inner">
        <Newsletter />
        <Navlinks />
        <Foot />
      </div>
    </div>
  );
};

export default Footer;
