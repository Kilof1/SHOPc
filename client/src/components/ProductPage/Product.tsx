/* eslint-disable react/prop-types */
import * as React from "react";
import Rating from "../main/Rating";

import styled, { ThemeProvider } from "styled-components";

import pcImg from "../main/ImageNav/subcomponents/assets/pc.png";
import { NONAME } from "node:dns";

const Product: React.FC = () => {
  const Wrapper = styled.div`
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    // background-color: red;
  `;

  const ImgWrapper = styled.div`
    background-color: blue;
    flex-basis: 600px;
    margin: auto;
  `;
  const ImgContainer = styled.div`
    background-color: #e9e9e9;
    height: 600px;
  `;

  const Img = styled.img`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 80%;
    max-height: 80%;
  `;

  const InfoWrapper = styled.div`
    // background-color: green;
    min-width: 400px;
    flex-grow: 1;
    margin-left: 40px;
    height: 500px;
  `;

  const ProductHeader = styled.div`
    border-bottom: 1px solid #c7c7c7;
    font-size: 32px;
  `;

  const ProductSpecShort = styled.div`
    display: flex;
    width: 350px;
    // padding: 20px 0;
  `;

  const SpecShortName = styled.ul`
    padding: ${(props) => props.theme.padding};
    flex-basis: 50%;
    // background-color: red;
    border-right: ${(props) => props.theme.border};
    list-style: none;
  `;

  const Item = styled.li`
    font-weight: regular;
    padding: 15px 0;
  `;

  const Button = styled.button`
    background-color: black;
    border: none;
    height: 30px;
    width: 140px;
    border-radius: 5px;
    color: white;
    transition: 0.4s;
    cursor: pointer;

    &:hover {
      background-color: #30bcc5;
      color: black;
    }
  `;

  const theme = {
    border: "1px solid #c7c7c7",
    padding: "20px 20px",
  };

  return (
    <Wrapper>
      <ImgWrapper>
        <ImgContainer>
          <Img src={pcImg} />
        </ImgContainer>
      </ImgWrapper>
      <InfoWrapper>
        <ProductHeader>
          Over-Ear USB Headset
          <Rating rating={3} />
        </ProductHeader>
        <ProductSpecShort>
          <SpecShortName theme={theme}>
            <Item>Cena:</Item>
            <Item>Marka: </Item>
            <Item>Kategoria: </Item>
            <Item>Dostępnosć: </Item>
            <Item>Ilość: </Item>
            <Button>Koszyk</Button>
          </SpecShortName>
          <SpecShortName theme={{ border: "none", padding: "20px 20px" }}>
            <Item>1200 PLN</Item>
            <Item>Master race </Item>
            <Item>Komputery</Item>
            <Item>
              ,0,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
            </Item>
            <Item>Ilość: </Item>
            <Button>Koszyk</Button>
          </SpecShortName>
        </ProductSpecShort>
      </InfoWrapper>
    </Wrapper>
  );
};

export default Product;
