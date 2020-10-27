import React from "react";
import styled, { css } from "styled-components";


const ButtonDiv = styled.h2`
width:288px;
background: linear-gradient(270deg, #C95CFC -27.53%, #F14B4A 81.06%);
border-radius: 45px;
color:white;
padding:20px;
display:flex;
justify-content:center;
`;


const Gradientroundedbutton = () => {
  return <div>
    <ButtonDiv> Next</ButtonDiv>
  </div>;
};

export default Gradientroundedbutton;
