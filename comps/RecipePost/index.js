import React from "react";
import styled from "styled-components";

const RecipePostBox = styled.div`
  display: flex;
  position: relative;
`;

const RecipePostImg = styled.img`
  display: flex;
  position: relative;
  object-fit: cover;
  max-width: 200px;
  margin-right: 10px;
  border-radius: 9px;
  flex:1;
`;

const RecipePostContent = styled.div`
  display: row;
  position: relative;
  margin-left: 5px;
  flex: 5;
`;

const RecipePostHeader = styled.h3`
  display: flex;
  position: relative;
  min-height: 10px;
  margin: 5px 0px;
`;

const RecipePostDetails = styled.div`
  display: flex;
  padding-top: 20px;
  align-items:center;
`;

const RecipePostDetailsMin = styled.div`
  display: flex;
  padding-right: 35px;
  color: #7d7d7d;
`;

const RecipePostUpDown = styled.div`
  display: flex;
`;

const RecipePostUp = styled.div`
  display: flex;
  position: relative;
  padding-right: 60px;
  padding-top: 21px;
`;

const RecipePostUpText = styled.div`
  display: flex;
  position: relative;
  margin: 5px;
`;

const Icon = styled.img`
  transition: 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(0.9);
  }
`;
const RecipePost = ({ title, time, name, img }) => {
  return (
    <RecipePostBox>
      <RecipePostImg src={img} />
      <RecipePostContent>
        <RecipePostHeader>{title}</RecipePostHeader>
        <RecipePostDetails>
          <RecipePostDetailsMin>{time}</RecipePostDetailsMin>
          <RecipePostDetailsMin>{name}</RecipePostDetailsMin>
        </RecipePostDetails>
        <RecipePostUpDown>
          <RecipePostUp>
            <Icon src="/upvote.svg" />
            {/* get Data from database */}
            <RecipePostUpText>225</RecipePostUpText>
          </RecipePostUp>
          <RecipePostUp>
            <Icon src="/downvote.svg" />
            {/* get Data from database */}
            <RecipePostUpText>15</RecipePostUpText>
          </RecipePostUp>
        </RecipePostUpDown>
      </RecipePostContent>
    </RecipePostBox>
  );
};

RecipePost.defaultProps = {
  title: "Mooncake quickly",
  time: "40m",
  img: "./mooncake.png",
  name: "by Jenny Tran",
};

export default RecipePost;
