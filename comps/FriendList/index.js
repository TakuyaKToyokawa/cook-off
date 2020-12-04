import React from "react";
import styled, { css } from "styled-components";
import Avatar from "../Avatar";

const Maindiv = styled.h5`
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;

const Text1div = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 12px;
`;

const IconTextCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const TextCont = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.h3 `
margin: 5px 0px;
`

const Message = styled.p `
 color: #5E5E5E;
`
const MenuList = ({ name, message, status, profile }) => {
  return (
    <div>
      <Maindiv>
        <Text1div>
          <IconTextCont>
            <Avatar status={status} profile={profile}/>
            <TextCont>
              <Name>{name}</Name>
              <Message>{message}</Message>
            </TextCont>
          </IconTextCont>
          <img src="/icons/general/arrow.svg" />{" "}
        </Text1div>
      </Maindiv>
    </div>
  );
};

MenuList.defaultProps = {
  name: "Default Name",
  message: "message",
  status: "red"
};

export default MenuList;
