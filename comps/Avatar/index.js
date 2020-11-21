import React from "react";
import styled, { css } from "styled-components";

const InfoContainer = styled.div`
  display: inline-flex;
  position: relative;
  justify-content: center;
`;

const Profile = styled.div`
  min-width: 100px;
  min-height: 100px;
  border-radius: 50%;
  z-index: 0;
  background-image: ${(props) =>
    props.profile ? props.profile : "url('./img/food/BackgroundImage.png')"};
  background-size: cover;
`;

const Status = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${(props) => (props.status ? props.status : "red")};
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  right: 0px;
`;

const Avatar = ({ profile, status }) => {
  return (
    <InfoContainer>
      <Profile profile={profile}>
        {" "}
        <Status status={status}></Status>
      </Profile>
    </InfoContainer>
  );
};

Avatar.defaultProps = {};

export default Avatar;
