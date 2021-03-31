import * as React from "react";
import Top from "./Top";
import Product from "./Product";
import styled from "styled-components";

const ProductPage: React.FC = () => {
  const Wrapper = styled.div`
    width: 80%;
    margin: auto;
  `;
  return (
    <Wrapper>
      <Top />
      <Product />
    </Wrapper>
  );
};

export default ProductPage;
