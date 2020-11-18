import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

const Icon = styled.img`
  transition: 0.3s ease-in-out;
  cursor: pointer;
  width: 10%;
  height: 50%;
  &:hover {
    transform: scale(0.9);
  }
`;

const SettingsIcon = () => {
  return (
    <Link href="/setting">
      <Icon src="./settingsIcon.svg" />
    </Link>
  );
};

export default SettingsIcon;
