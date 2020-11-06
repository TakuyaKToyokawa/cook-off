import React from "react";
import styled from "styled-components";

const CategoryRecipeContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
`;

const Categorybox = styled.div`
  display: flex;
  position: relative;
  background: #fce8e8;
  border-radius: 9px;
  min-width: 94px;
  min-height: 124px;
  justify-content: center;
  align-items: center;
`;

const CategoryRecipeImage = styled.img`
  position: relative;
  min-height: 62px;
  max-width: 56px;
`;

const CategoryRecipeText = styled.div`
  margin-top: 10px;
  color: #7d7d7d;
  text-align: center;
`;

const CategoryRecipe = ({ text, img }) => {
  return (
    <CategoryRecipeContainer>
      <Categorybox>
        <CategoryRecipeImage src={img} />
      </Categorybox>
      <CategoryRecipeText>{text}</CategoryRecipeText>
    </CategoryRecipeContainer>
  );
};

CategoryRecipe.defaultProps = {
  text: "",
  img: "./sushi.svg",
};
export default CategoryRecipe;
