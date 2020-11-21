import React from "react";
import styled from "styled-components";

const ButtonPhoneContainer = styled.div`
  display: flex;
  position: relative;
  min-height: 50px;
  max-width: 50px;
  background: linear-gradient(180deg, #d06bff 0%, rgba(255, 255, 255, 0) 100%),
    linear-gradient(0deg, #f04b4a, #f04b4a);
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: .3s ease-in-out;
  cursor: pointer;
  &:hover{
    transform: scale(0.90);
  }
`;
const ButtonPhoneImage = styled.img`
  max-height: 30px;
  border-radius: 30%;
`;

const ButtonMic = ({onClick}) => {
  return (
    <ButtonPhoneContainer onClick={onClick}>
      <ButtonPhoneImage src="/icon/events/micro.svg" />
    </ButtonPhoneContainer>
  );
};

ButtonMic.defaultProps = {
  onClick: () => {console.log("clicked")}
}

export default ButtonMic;
