import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

const Maindiv = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

const Icon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 20px;
`;
const Arrow = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 20px;
`;

const IconTextCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ArrowTextCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const MenuList = ({
  displayIcon,
  icon,
  arrow,
  displayArrow,
  text,
  onClick,
  link,
}) => {
  return (
    <Link href={link}>
      <Maindiv onClick={onClick}>
        <IconTextCont>
          {displayIcon == true ? <Icon src={icon} /> : undefined}
          <p>{text}</p>
        </IconTextCont>
        <ArrowTextCont>
          {displayArrow == true ? <Arrow src={arrow} /> : undefined}
        </ArrowTextCont>
      </Maindiv>
    </Link>
  );
};

MenuList.defaultProps = {
  icon: "/icons/setting/appearance.svg",
  displayIcon: true,
  text: "Text",
  arrow: "/icons/general/arrow.svg",
  displayArrow: true,
  link: "/welcome",
};

export default MenuList;
