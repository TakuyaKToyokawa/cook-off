import React from "react";
import styled, { css } from "styled-components";


const ButtonDiv = styled.div`
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
background: #D680FF;
color:white;
width:101px;
height:101px;
`;

const Plussign = styled.div`
align-items:center
display:flex;
justify-content:center;
`;

const Firstdiv = styled.div`
width:30px;
background: #FFFFFF;
border-radius: 6px;
transform: rotate(90deg);
color:white;
padding:3px;
position:relative;
top:5px;
`;

const Seconddiv = styled.div`
width:30px;
background: #FFFFFF;
border-radius: 6px;
transform: rotate(180deg);
color:white;
padding:3px;
`;


const Plusbutton = () => {
  return <div>
    <ButtonDiv> 
        <Plussign>
            <Firstdiv></Firstdiv>
            <Seconddiv></Seconddiv>
        </Plussign>
    </ButtonDiv>
  </div>;
};

export default Plusbutton;
