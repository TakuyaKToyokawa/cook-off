import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
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
`;

const LevelBar = ({ width }) => {
  return (
    <Container>
      <LevelMeter width={width}></LevelMeter>
    </Container>
  );
};

export default LevelBar;
