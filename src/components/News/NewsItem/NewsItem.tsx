import * as React from "react";

import "./NewsItem.scss";

export interface NewsItemProps {
  newdata: {
    img: string;
    title: string;
  };
}

const NewsItem: React.SFC<NewsItemProps> = ({ newdata }: NewsItemProps) => {
  return (
    <div className="newsItem">
      <div className="newsItem__img">
        <img className="newsItem__img__img" src={newdata.img} alt="" />
      </div>
      <div className="newsItem__title">{newdata.title}</div>
    </div>
  );
};

export default NewsItem;
