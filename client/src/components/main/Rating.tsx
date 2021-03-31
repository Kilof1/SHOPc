import * as React from "react";
import fullstar from "../../assets/main/star.svg";
import emptystar from "../../assets/main/emptystar.svg";

import styled from "styled-components";

export interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }: RatingProps) => {
  const Wrapper = styled.div``;

  const RatingList = styled.ul`
    list-style: none;
    display: inline-block;
  `;

  const RatingStar = styled.li`
    float: left;
    margin-left: 3px;
    height: 1em;
  `;

  const RatingStarImg = styled.img`
    height: 100%;
    max-height: 100%;
  `;

  return (
    <Wrapper>
      <RatingList>
        {[...Array(5)].map((x, i) => (
          <RatingStar key={i}>
            {<RatingStarImg src={i < rating ? fullstar : emptystar} alt="" />}
          </RatingStar>
        ))}
      </RatingList>
    </Wrapper>
  );
};

export default Rating;
