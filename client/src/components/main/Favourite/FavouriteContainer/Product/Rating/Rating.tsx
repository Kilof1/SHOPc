import * as React from "react";
import fullstar from "./star.svg";
import emptystar from "./emptystar.svg";

import "./Rating.scss";

export interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }: RatingProps) => {
  return (
    <div className="rating">
      <ul className="rating__list">
        {[...Array(5)].map((x, i) => (
          <li className="rating__list__item" key={i}>
            {
              <img
                className="rating__list__item__image"
                src={i < rating ? fullstar : emptystar}
                alt=""
              />
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rating;
