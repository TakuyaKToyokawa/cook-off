import React from "react";
import styled, { css } from "styled-components";

const Maindiv = styled.h1`
width:100px;
color: #F04B4A;
display:flex;
flex-direction:row;
justify-content:spaced-between;
align-items:top;


`;

const Textdiv = styled.div`
display:flex;
flex-direction:column;
width:50px;
padding-left:15px;
`;


const Generalheading = () => {
  return <div>
    <Maindiv> 
        <img src="./redarrow.png"/> 
        <Textdiv> Text Text </Textdiv>
    </Maindiv>
  </div>;
};

export default Generalheading;
