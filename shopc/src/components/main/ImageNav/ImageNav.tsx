import * as React from "react";
import Category from "./subcomponents/Category";

import categories from "./subcomponents/categories";

import "./ImageNav.scss";

const ImageNav: React.FC = () => {
  return (
    <div className="imageNav">
      {categories.map((c, i) => (
        <Category key={i} category={c} />
      ))}
    </div>
  );
};

export default ImageNav;
