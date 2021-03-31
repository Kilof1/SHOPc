import * as React from "react";
import "./Category.scss";

interface CategoryProps {
  category: {
    img: string;
    title: string;
  };
}

const Category: React.FC<CategoryProps> = ({ category }: CategoryProps) => {
  return (
    <div className="category">
      <div className="category__container">
        <img className="category__image" src={category.img} alt="" />
      </div>
      <h3 className="category__title">{category.title}</h3>
    </div>
  );
};

export default Category;
