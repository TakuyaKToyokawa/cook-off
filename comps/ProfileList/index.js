import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 13px;
  width: 100%;
  border: 1px solid #d06bff;
  min-height: 200px;
  margin: 20px 0px;
  padding: 20px;
`;
const ProfileList = () => {
  return (
    <Container>
      <Link href="/Events">
        <p>Your Events</p>
      </Link>
      <Link href="/myrecipes">
        <p>Your Recipe List</p>
      </Link>
      <Link href="/Friends">
        <p>Friends</p>
      </Link>
    </Container>
  );
};

export default ProfileList;
