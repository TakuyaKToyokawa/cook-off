import React from "react";
import styled, { css } from "styled-components";

const SearchDiv = styled.input`
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(250, 237, 107, 0.1275) 0%,
    rgba(250, 183, 107, 0.85) 107.28%
  );
  border: 2px solid rgba(222, 182, 104, 0.85);
  box-sizing: border-box;
  border-radius: 45px;
  color: #5e5e5e;
  padding: 7px;
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
        <Icondiv src="./Search.png"/>
      </Container>
    </div>
  );
};

Searchbar.defaultProps = {
  placeholder: "Type in here...",
}

export default Searchbar;
