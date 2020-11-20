import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 200px;
  max-height: 300px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: inset 400px 400px 4px rgba(0, 0, 0, 0.4);
  background-image: ${props => props.image ? props.image : "url('./BackgroundImage.png')"};
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: .3s ease-in-out;
  &:hover{
    transform: scale(0.99);
  }
`;

const ImageButton = ({ text, image }) => {
  return (
    <Container image={image}>
      <h2 style={{ color: "white" }}>{text}</h2>
    </Container>
  );
};

ImageButton.defaultProps = {
  text: "text",
};

export default ImageButton;
