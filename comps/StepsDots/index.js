import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  height: 15px;
  width: 15px;
  background-color: #d680ff;
  margin: 10px;
  border-radius: 50%;
  transition: 0.3s ease-in-out;
  -webkit-box-shadow: 2px 14px 43px -2px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 2px 14px 43px -2px rgba(0, 0, 0, 0.58);
  box-shadow: 2px 3px 3px -2px rgba(0,0,0,0.8);
`;

const Dot1 = styled(Dot)`
  opacity: ${(props) => (props.step1 ? "1" : "0.5")};
`;
const Dot2 = styled(Dot)`
  opacity: ${(props) => (props.step2 ? "1" : "0.5")};
`;

const Dot3 = styled(Dot)`
  opacity: ${(props) => (props.step3 ? "1" : "0.5")};
`;

const StepsDots = ({ step1, step2, step3 }) => {
  return (
    <Container>
      <Dot1 step1={step1} />
      <Dot2 step2={step2} />
      <Dot3 step3={step3} />
    </Container>
  );
};

export default StepsDots;
