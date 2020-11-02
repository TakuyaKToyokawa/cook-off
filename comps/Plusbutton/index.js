import React from "react";
import styled, { css } from "styled-components";


const ButtonDiv = styled.div`
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
background: ${(props) =>
  props.color
    ? props.color
    : "#D680FF"};
color:white;
border: ${(props) =>
  props.border
    ? props.border
    : "#0px solid #D680FF"};
width:101px;
height:101px;
cursor: pointer;
`;

const Plussign = styled.div`
align-items:center
display:flex;
justify-content:center;
`;

const Firstdiv = styled.div`
width:30px;
background: ${(props) =>
  props.plusColor
    ? props.plusColor
    : "#FFFFFF"};
border-radius: 6px;
transform: rotate(90deg);
color:white;
padding:3px;
position:relative;
top:5px;
`;
S
const Seconddiv = styled.div`
width:30px;
background: ${(props) =>
  props.plusColor
    ? props.plusColor
    : "#FFFFFF"};
border-radius: 6px;
transform: rotate(180deg);
color:white;
padding:3px;
`;


const Plusbutton = ({color, border, plusColor}) => {
  return <div>
    <ButtonDiv color={color} border={border} > 
        <Plussign>
            <Firstdiv plusColor={plusColor}></Firstdiv>
            <Seconddiv plusColor={plusColor}></Seconddiv>
        </Plussign>
    </ButtonDiv>
  </div>;
};



export default Plusbutton;
