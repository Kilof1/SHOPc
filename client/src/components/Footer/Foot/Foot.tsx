import * as React from "react";

import "./Foot.scss";

const Foot: React.FC = () => {
  return (
    <div className="foot">
      © 2021 Powered by <span className="foot__name">Cezary Wrzalik</span> All
      Rights Reserved
    </div>
  );
};

export default Foot;
