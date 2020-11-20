import React from "react";
import styled, { css } from "styled-components";

const Maindiv = styled.h5`
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  transition: .1s ease-in-out;
  cursor:pointer;
  &:hover{
    background-color: #EEE;
  }
`;

const Text1div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  min-width:77vw;
`;

const Icon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 20px;
`;

const IconTextCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const MenuList = ({ displayIcon, icon, text, onClick }) => {
  return (
    <div>
      <Maindiv onClick={onClick}>
        <Text1div>
          <IconTextCont>
            {displayIcon == true ? <Icon src={icon} /> : undefined}
            <p>{text}</p>
          </IconTextCont>
          <img src="./arrow.svg" />{" "}
        </Text1div>
      </Maindiv>
    </div>
  );
};

MenuList.defaultProps = {
  icon: "./appearance.svg",
  displayIcon: true,
  text: "Text",
};

export default MenuList;
