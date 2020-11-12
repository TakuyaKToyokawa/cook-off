import React from "react";
import styled, { css } from "styled-components";

const SearchDiv = styled.input`
  width: 100%;
  background: linear-gradient(90deg, rgba(208, 107, 255, 0.85) 0%, rgba(255, 90, 90, 0.85) 107.28%);
  border-radius: 45px;
  border:black;
  opacity:85%;
  color: black;
  padding: 8px;
  padding-left: 20px;
  padding-right: 20px;
  outline:none;
`;

const Icondiv = styled.img`
  height: 25px;
  margin-right: 5px;
  position: absolute;
  right: 0px;
  bottom:5px;
  padding:3px;
  margin-right:10px;

`;

const Container = styled.div`
  position: relative;
  &:hover{
    transform: scale(0.99);
  }
`;

const Searchbar = ({placeholder}) => {
  return (
    <div>
      <Container>
        <SearchDiv placeholder={placeholder}/>
        <Icondiv src="./searchicon.png"/>
      </Container>
    </div>
  );
};

Searchbar.defaultProps = {
  placeholder : "Search...",
  
}

export default Searchbar;
