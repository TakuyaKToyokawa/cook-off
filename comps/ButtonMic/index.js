import React from "react";
import styled from "styled-components";

const ButtonPhoneContainer = styled.div`
display:flex;
position:relative;
min-height: 50px;
max-width: 50px;
background: linear-gradient(180deg, #D06BFF 0%, rgba(255, 255, 255, 0) 100%),
linear-gradient(0deg, #F04B4A, #F04B4A);
justify-content:center;
align-items:center;
border-radius: 50%;
`; 
const ButtonPhoneImage = styled.img`
 max-height: 30px;
  border-radius: 30%;

`; 

const ButtonMic = ({}) => {
  return <ButtonPhoneContainer>
      <ButtonPhoneImage src="./micro.svg"/>
 </ButtonPhoneContainer>

}

export default ButtonMic;
