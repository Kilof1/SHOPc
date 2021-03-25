import * as React from "react";
import "./News.scss";

import phones from "./assets/telefony.jpg";
import NewsItem from "./NewsItem/NewsItem";

const newsdata = [
  {
    img: phones,
    title: "Najlepsze telefony 2021 - sprawdź rankingi",
  },
  {
    img: phones,
    title: "Najlepsze telefony 2021 - sprawdź rankingi",
  },
  {
    img: phones,
    title: "Najlepsze telefony 2021 - sprawdź rankingi",
  },
];

const News: React.FC = () => {
  return (
    <div className="news">
      <div className="news__header">
        SHOPc <span>Aktualności</span>
      </div>
      <div className="news__container">
        {newsdata.map((n, i) => (
          <NewsItem key={i} newdata={n} />
        ))}
      </div>
    </div>
  );
};

export default News;
