import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

const Container = styled.div`
  padding: 15px 0px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #eee;
  }
`;

const Profile = styled.img`
  height: 100%;
  border-radius: 50%;
`;

const Time = styled.img`
  margin-right: 10px;
`;

const Arrow = styled.img`
  cursor: pointer;
`;

const InfoContainer = styled.div`
  display: flex;
  margin-left: 20px;
  width: 100%;
`;

const Button = styled.button`
  border: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  background: linear-gradient(
    90deg,
    rgba(255, 206, 33, 0.8) -18.69%,
    rgba(255, 85, 32, 0.8) 9.75%,
    rgba(236, 29, 29, 0.8) 49.93%,
    rgba(201, 92, 252, 0.8) 100%
  );
  border-radius: 15px;
  color: white;
  flex: 1;
  margin-right: 20%;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(0.99);
  }
`;

const Title = styled.h3`
  margin: 2px 0px;
  flex: 1;
`;

const TimeContainer = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  flex: 1;
  margin-bottom: 10px;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
`;

const FoodList = ({ title, time, img, link, recipeLink }) => {
  return (
    <Link href={link}>
      <Container>
        <Profile src={img} />
        <InfoContainer style={{ flexDirection: "column" }}>
          <Title>{title}</Title>
          <TimeContainer>
            <Time src="/icons/recipe/clock.svg"></Time>
            <p style={{ margin: "0px" }}>{time}</p>
          </TimeContainer>

          <ButtonContainer>
            <Link href={recipeLink}>
              <Button>View Recipe</Button>
            </Link>
            <Arrow src="/icons/general/Arrow.svg"></Arrow>
          </ButtonContainer>
        </InfoContainer>
      </Container>
    </Link>
  );
};

FoodList.defaultProps = {
  title: "Title",
  time: "40m",
  img: "/img/food/Image.jpg",
  link: "/index",
  recipeLink: "/recipe",
};

export default FoodList;
