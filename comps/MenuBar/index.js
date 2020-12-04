import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";

const Position = styled.div`
  display: block;
  position: fixed;
  bottom: 0px;
  width: 100%;
  z-index: 2;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 5px;
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
  -webkit-transition: all 0.3s ease-out 0.1s;
  -moz-transition: all 0.3s ease-out 0.1s;
  -o-transition: all 0.3s ease-out 0.1s;
  transition: all 0.3s ease-out 0.1s;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 5px 20px;
  cursor: pointer;
  &:after {
    position: absolute;
    content: "";
    bottom: 8px;
    height: 5px;
    width: 50px;
    border-radius: 10px;
    color: white;
    background-color: white;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }
`;

const RecipeCont = styled(IconContainer)`
  &:after {
    opacity: ${(props) => (props.active == 1 ? "1" : "0")};
  }
`;

const ProfileCont = styled(IconContainer)`
  &:after {
    opacity: ${(props) => (props.active == 2 ? "1" : "0")};
  }
`;

const EventsCont = styled(IconContainer)`
  &:after {
    opacity: ${(props) => (props.active == 3 ? "1" : "0")};
  }
`;

const RecipeIcon = styled.img`
  filter: ${(props) =>
    props.active == 1
      ? "invert(.3) sepia(1) saturate(2) hue-rotate(10deg) drop-shadow(0 5px 0px #8B3B3A)"
      : "drop-shadow(0 5px 0px #8B3B3A)"};
`;

const EventsIcon = styled.img`
  filter: ${(props) =>
    props.active == 3
      ? "invert(.3) sepia(1) saturate(2) hue-rotate(10deg) drop-shadow(0 5px 0px #8B3B3A)"
      : "drop-shadow(0 5px 0px #8B3B3A)"};
`;

const ProfileIcon = styled.img`
  filter: ${(props) =>
    props.active == 2
      ? "invert(.3) sepia(1) saturate(2) hue-rotate(10deg) drop-shadow(0 5px 0px #8B3B3A)"
      : "drop-shadow(0 5px 0px #8B3B3A)"};
`;

const Text = styled.p`
  color: white;
  margin: 13px 0px;
`;

const MenuBar = ({ propActive }) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    setActive(propActive);
  });
  return (
    <Position>
      <Container>
        <OptionContainer>
          <Link href="/recipe">
            <RecipeCont active={active}>
              <RecipeIcon
                src="/icons/general/recipe.svg"
                active={active}
              ></RecipeIcon>
              <Text>Recipe</Text>
            </RecipeCont>
          </Link>
          <Link href="/profile">
            <ProfileCont active={active}>
              <ProfileIcon
                src="/icons/general/profile.svg"
                active={active}
              ></ProfileIcon>
              <Text>Profile</Text>
            </ProfileCont>
          </Link>
          <Link href="/event">
            <EventsCont active={active}>
              <EventsIcon
                src="/icons/general/events.svg"
                active={active}
              ></EventsIcon>
              <Text>Events</Text>
            </EventsCont>
          </Link>
        </OptionContainer>
      </Container>
    </Position>
  );
};

export default MenuBar;
