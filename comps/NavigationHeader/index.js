import React from "react";
import styled, { css } from "styled-components";

const Maindiv = styled.h1`
width:100px;
color: #F04B4A;
display: inline-flex;
flex-direction:row;
align-items:center;
`;

const Textdiv = styled.div`
display:flex;
flex-direction:column;
width:50px;
padding-left:15px;
`;

const Arrow = styled.img `
width: 30px;
height: 50px;
cursor:pointer;
`;


const NavigationHeader = ({text, displayArrow}) => {
  return <div>
    <Maindiv> 
        {displayArrow == true ? <Arrow src="./redarrow.png"/> : undefined}
        <Textdiv> Text </Textdiv>
    </Maindiv>
  </div>;
};

NavigationHeader.defaultProps = {
  text: "text",
  displayArrow: true

}

export default NavigationHeader;
