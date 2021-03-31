import React, { FunctionComponent } from "react";

import "./NavCategory.scss";

interface propTypes {
  name: string;
  categories: {
    title: string;
    values: string[];
  }[];
}

const NavCategory: FunctionComponent<propTypes> = (props: propTypes) => {
  return (
    <>
      <li className="nav__item" onClick={() => console.log(props.name)}>
        {props.name}
        <div className="dropdown">
          {props.categories.map((c, i) => (
            <div key={i} className={`dropdown-${i}`}>
              <h3 className="dropdown__title">{c.title}</h3>
              <ul className="dropdown__list">
                {c.values.map((v, i) => (
                  <li key={i}>{v}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </li>
    </>
  );
};

export default NavCategory;
