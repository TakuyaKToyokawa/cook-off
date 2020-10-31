import React from "react";
import styled from "styled-components";

const ButtonPhoneContainer = styled.div`
display:flex;
position:absolute;
height: 86px;
width: 86px;
background: linear-gradient(180deg, #D06BFF 0%, rgba(255, 255, 255, 0) 100%),
linear-gradient(0deg, #F04B4A, #F04B4A);
justify-content:center;
align-items:center;
border-radius: 50%;
`; 
const ButtonPhoneImage = styled.div`
background-image: url(/phone.svg);
display:flex;
position: absolute;
left: 16.28%;
right: 17.36%;
top: 38.37%;
bottom: 39.53%;
`; 

const ButtonPhone = ({}) => {
  return <ButtonPhoneContainer>
      <ButtonPhoneImage></ButtonPhoneImage>
 </ButtonPhoneContainer>

}

export default ButtonPhone;
