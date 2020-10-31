import React from "react";
import styled, { css } from "styled-components";


const SearchDiv = styled.h5`
width:303px;
background: linear-gradient(90deg, rgba(250, 237, 107, 0.1275) 0%, rgba(250, 183, 107, 0.85) 107.28%);
border: 2px solid rgba(222, 182, 104, 0.85);
box-sizing: border-box;
border-radius: 45px;
color: #5E5E5E;
padding:7px;
padding-left:20px;
padding-right:20px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
`;

const Icondiv = styled.div`
`;


const Searchbar = () => {
  return <div>
    <SearchDiv> Search <Icondiv> <img src="./Vector.png"/> </Icondiv></SearchDiv>
  </div>;
};

export default Searchbar;
