import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  padding: 20px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: inset 1000px 1000px 4px rgba(0, 0, 0, 0.4);
  background-image: ${(props) =>
    props.image ? props.image : "url('./BackgroundImage.png')"};
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: .3s ease-in-out;
  &:hover{
    transform: scale(0.99);
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: flex-start;
  flex: 1;
  width: 100%;
  margin-bottom: 20px;
`;

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
  max-width: 100px;
  max-height: 100px;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 100%;

  flex: 6;
  align-items: flex-end;
`;

const TextContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  flex: 3;
  color:white;
`;

const Badge = styled.div`
  border-radius: 30px;
  background-color: #2b2626;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 20px;
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 5px;
`;

const Profile = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 100px;
  min-height: 100px;
  border-radius: 50%;
  z-index: 0;
  background-image: ${(props) =>
    props.profile ? props.profile : "url('./BackgroundImage.png')"};
`;

const Status = styled.div`
  height: 20px;
  width: 20px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const BadgeText = styled.p`
  margin: 0px 5px;
`;

const ImageButton = ({profile, viewers, image, date, title, user }) => {
  return (
    <Container image={image}>
      <BadgeContainer>
        <Badge>
          <Icon src="./badgeprofile.svg" />
          <BadgeText>{viewers}</BadgeText>
        </Badge>
        <Badge>
          <Icon src="./calendar.svg" />
          <BadgeText>{date}</BadgeText>
        </Badge>
      </BadgeContainer>
      <InfoContainer>
        <ProfileContainer>
          <Profile profile={profile}>
            {" "}
            <Status></Status>
          </Profile>
        </ProfileContainer>
        <TextContainer>
          <h2>{title}</h2>
  <h3>{user}</h3>
        </TextContainer>
      </InfoContainer>
    </Container>
  );
};

ImageButton.defaultProps = {
  title: "title",
  user: "user",
  viewers: "viewers",
  date: "10/25/2020 2PM 'date'"
};

export default ImageButton;
