import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 13px;
  width: 100%;
  border: 1px solid #D06BFF;
  min-height: 200px;
  margin: 20px 0px;
  padding: 20px;
`;

const ProfileList = () => {
  return <Container>
    <p>Your Events</p>
    <p>Your Recipe List</p>
    <p>Friends</p>
  </Container>;
};

export default ProfileList;
