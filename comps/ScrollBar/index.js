import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`

  overflow: auto;

  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "none")};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  border-radius: ${(props) => (props.radius ? props.radius : "0px")};
  padding: ${(props) => (props.padding ? props.padding : "auto")};
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background-color: rgba(214, 128, 255, 0.3);
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #d680ff;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #d680ff;
  }
`;

const ScrollBar = ({ children, width, height, bgcolor, padding, radius }) => {
  return (
      <Container
        width={width}
        height={height}
        bgcolor={bgcolor}
        borderRadius={radius}
        padding={padding}
        radius={radius}
      >
        <div style={{paddingRight:"35px"}}>{children}</div>
      </Container>
  );
};

ScrollBar.defaultProps = {
  placeholder: "Type in here...",
};

export default ScrollBar;
