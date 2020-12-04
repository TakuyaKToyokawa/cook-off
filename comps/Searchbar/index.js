import React from "react";
import styled, { css } from "styled-components";

const SearchDiv = styled.input`
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(208, 107, 255, 0.85) 0%,
    rgba(255, 90, 90, 0.85) 107.28%
  );
  border-radius: 45px;
  border: black;
  opacity: 85%;
  color: black;
  padding: 8px;
  padding-left: 20px;
  padding-right: 20px;
  outline: none;
  &::placeholder{
    color: black;
    font-weight: 500;
  }
`;

const Icondiv = styled.img`
  height: 25px;
  margin-right: 5px;
  position: absolute;
  right: 0px;
  bottom: 4px;
  padding: 3px;
  margin-right: 10px;
`;

const Container = styled.div`
  width: 100%;
  position: relative;
  &:hover {
    transform: scale(0.99);
  }
`;

const Searchbar = ({ placeholder, onChange }) => {
  return (
    <Container>
      <SearchDiv placeholder={placeholder} onChange={onChange} />
      <Icondiv src="/icons/general/searchicon.png" />
    </Container>
  );
};

Searchbar.defaultProps = {
  placeholder: "Search...",
  onChange: () => {},
};

export default Searchbar;
