import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  text-align: center;
`;

const NameCont = styled(Container)`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;

const LevelContainer = styled.div`
  border: 1px solid #c95cfc;
  border-radius: 63.5px;
  width: 100%;
  height: 20px;
`;

const LevelMeter = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 206, 33, 0.8) -18.69%,
    rgba(255, 85, 32, 0.8) 9.75%,
    rgba(236, 29, 29, 0.8) 49.93%,
    rgba(201, 92, 252, 0.8) 100%
  );
  width: ${(props) => (props.width ? props.width : "0%")};
  height: 100%;
  border-radius: 63.5px;
  transition: width 0.2s ease-in-out;
`;

const Name = styled.h2`
  text-align: center;
  color: #f14b4a;
  margin-right: 10px;
`;

const TagLine = styled.p`
  margin: 0px 0px 15px 0px;
`;
const Icon = styled.img`
  width: 25px;
  height: 25px;
`;

const LevelBar = ({ width, name, tagline, level, edit }) => {
  return (
    <Container>
      <NameCont>
        <Name>{name}</Name>
        <Icon src="/icons/profile/Edit.svg" onClick={edit} />
      </NameCont>
      <TagLine>{tagline}</TagLine>
      <TagLine>
        Lvl. <span style={{ color: "#f14b4a" }}>{level}</span>
      </TagLine>
      <LevelContainer>
        <LevelMeter width={width}></LevelMeter>
      </LevelContainer>
    </Container>
  );
};

LevelBar.defaultProps = {
  name: "Default Name",
  tagline: "Master Chef",
  level: "9",
  onClick: ()=> {console.log("clicked")},
};

export default LevelBar;
