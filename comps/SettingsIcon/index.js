import React from "react";
import styled, { css } from "styled-components";

const Icon = styled.img`
  transition: .3s ease-in-out;
  cursor: pointer;
  width: 10%;
  height: 50%;
  &:hover{
    transform: scale(0.90);
  }
`;

const SettingsIcon = () => {
  return (
      <Icon src="./settingsIcon.svg"/>
  );
};


export default SettingsIcon;
