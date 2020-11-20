import React from "react";
import styled, { css } from "styled-components";

const ButtonDiv = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.color ? props.color : "#D680FF")};
  color: white;
  border: ${(props) => (props.border ? props.border : "#0px solid #D680FF")};
  width: 101px;
  height: 101px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(0.99);
  }
`;

const Plussign = styled.div``;

const Firstdiv = styled.div`
  width: 30px;
  background: ${(props) => (props.plusColor ? props.plusColor : "#FFFFFF")};
  border-radius: 6px;
  transform: rotate(90deg);
  color: white;
  padding: 3px;
  position: relative;
  top: 5px;
`;

const Seconddiv = styled.div`
  width: 30px;
  background: ${(props) => (props.plusColor ? props.plusColor : "#FFFFFF")};
  border-radius: 6px;
  transform: rotate(180deg);
  color: white;
  padding: 3px;
`;

const PlusButton = ({ color, border, plusColor }) => {
  return (
    <div>
      <ButtonDiv color={color} border={border}>
        <Plussign>
          <Firstdiv plusColor={plusColor}></Firstdiv>
          <Seconddiv plusColor={plusColor}></Seconddiv>
        </Plussign>
      </ButtonDiv>
    </div>
  );
};

export default PlusButton;
