import * as React from "react";
import styled from "styled-components";

const Top: React.FC = () => {
  const Wrapper = styled.ul`
    width: 100%;
    border: 1px solid #dddddd;
    padding: 7px;
    list-style: none;
  `;

  const Tag = styled.li`
    display: inline;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #30bcc5;
    }
  `;

  const Link = styled.a`
    font-family: "Rubik";
    text-decoration: none;
    padding: 0px 21px;
    border-right: 1px solid black;
  `;
  return (
    <Wrapper>
      <Tag>
        <Link>Strona główna</Link>
      </Tag>
      <Tag>
        <Link>Kategoria</Link>
      </Tag>
      <Tag>
        <Link>Nazwa produktu</Link>
      </Tag>
    </Wrapper>
  );
};

export default Top;
