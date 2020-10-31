import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Input = styled.input.attrs({
  type: "range",
})`
  -webkit-appearance: none;
  margin: 0px;
  width: 100%;
  &::-webkit-slider-thumb {
    appearance: none;
    height: 10px;
    width: 10px;
    margin-top: -4px;
    border-radius: 50%;
    background: #222;
    cursor: pointer;
  }
  &::-webkit-slider-runnable-track {
    background: #222;
    height: 2px;
  }
  &::-moz-focus-outer {
    border: 0;
  }
`;

const SmallA = styled.p`
  margin: 0px;
  margin-right: 20px;
`;

const BigA = styled.p`
  font-size: 3rem;
  margin: 0px;
  padding-top: 0px;
  margin-left: 20px;
`;

const FontSlider = ({}) => {
  return (
    <Container>
      <SmallA>A</SmallA>
      <Input></Input>
      <BigA>A</BigA>
    </Container>
  );
};

export default FontSlider;
