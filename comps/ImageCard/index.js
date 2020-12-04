import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 200px;
  max-height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: inset 400px 400px 4px rgba(0, 0, 0, 0.4);
  background-image: ${(props) => (props.image ? props.image : "url('/img/food/BackgroundImage.png')")};
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(0.99);
  }
`;

const ImageButton = ({ text, image, link, onClick}) => {
  return (
    <Link href={link} onClick={onClick}>
      <Container image={image}>
        <h2 style={{ color: "white" }}>{text}</h2>
      </Container>
    </Link>
  );
};

ImageButton.defaultProps = {
  text: "text",
  link: "/index",
  onClick: ()=>{}
};

export default ImageButton;
