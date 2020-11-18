import React, { useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

const Position = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: center;
  align-items: center;
  background-color: #f14b4a;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

const RecipeIcon = styled.img`
  transition: 0.3s ease-in-out;
  filter: ${(props) =>
    props.active
      ? "invert(.3) sepia(1) saturate(2) hue-rotate(10deg) drop-shadow(0 5px 0px #8B3B3A)"
      : "drop-shadow(0 5px 0px #8B3B3A)"};
`;

const EventsIcon = styled.img`
  transition: 0.3s ease-in-out;
  filter: ${(props) =>
    props.active
      ? "invert(.3) sepia(1) saturate(2) hue-rotate(10deg) drop-shadow(0 5px 0px #8B3B3A)"
      : "drop-shadow(0 5px 0px #8B3B3A)"};
`;

const ProfileIcon = styled.img`
  transition: 0.3s ease-in-out;
  filter: ${(props) =>
    props.active
      ? "invert(.3) sepia(1) saturate(2) hue-rotate(10deg) drop-shadow(0 5px 0px #8B3B3A)"
      : "drop-shadow(0 5px 0px #8B3B3A)"};
`;

const AnimatedLine = styled.div`
  background-color: #fff9f9;
  height: 3px;
  width: 40px;
  position: relative;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
  opacity: ${(props) => (props.active ? "1" : "0")};
`;

const Text = styled.p`
  color: white;
  margin: 13px 0px;
`;

const MenuBar = ({}) => {
  const [recipe, setRecipe] = useState(0);
  const [events, setEvents] = useState(0);
  const [profile, setProfile] = useState(0);
  return (
    <Position>
      <Container>
        <OptionContainer>
          <Link href="/recipepage">
            <IconContainer
              onClick={() => {
                setRecipe(1);
                setEvents(0);
                setProfile(0);
              }}
            >
              <RecipeIcon src="./recipe.svg" active={recipe}></RecipeIcon>
              <Text>Recipe</Text>
            </IconContainer>
          </Link>
          <Link href="/profile">
            <IconContainer
              onClick={() => {
                setRecipe(0);
                setEvents(0);
                setProfile(1);
              }}
            >
              <ProfileIcon src="./profile.svg" active={profile}></ProfileIcon>
              <Text>Profile</Text>
            </IconContainer>
          </Link>
          <Link href="/Events">
            <IconContainer
              onClick={() => {
                setRecipe(0);
                setEvents(1);
                setProfile(0);
              }}
            >
              <EventsIcon src="./events.svg" active={events}></EventsIcon>
              <Text>Events</Text>
            </IconContainer>
          </Link>
        </OptionContainer>
        <OptionContainer>
          <AnimatedLine active={recipe}></AnimatedLine>
          <AnimatedLine active={profile}></AnimatedLine>
          <AnimatedLine active={events}></AnimatedLine>
        </OptionContainer>
      </Container>
    </Position>
  );
};

export default MenuBar;
