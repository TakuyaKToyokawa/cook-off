import React from "react";
import styled, { css } from "styled-components";

const ButtonDiv = styled.h2`
  width: 100%;
  background: ${(props) =>
    props.color
      ? props.color
      : `linear-gradient(
    90deg,
    rgba(255, 206, 33, 0.8) -18.69%,
    rgba(255, 85, 32, 0.8) 9.75%,
    rgba(236, 29, 29, 0.8) 49.93%,
    rgba(201, 92, 252, 0.8) 100%
  );`};
  border-radius: 15px;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Gradientbutton = ({ text, color }) => {
  return (
    <div style={{width: "100%"}}>
      <ButtonDiv color={color}> {text} </ButtonDiv>
    </div>
  );
};


Gradientbutton.defaultProps = {
  text: "text"
 }
 

export default Gradientbutton;
