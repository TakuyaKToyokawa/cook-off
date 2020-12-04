import React from "react";
import styled from "styled-components";
import ScrollBar from "../ScrollBar";

const IngredientsListBigBox = styled.div`
  width: 100%;
`;

const RecipeBuyListHeader = styled.h3`
  display: flex;
`;

const IngredientorBuyingList = ({ title, children, height }) => {
  return (
    <IngredientsListBigBox>
      <RecipeBuyListHeader>{title}</RecipeBuyListHeader>
      <ScrollBar
        height={height}
        bgcolor="rgba(252, 232, 232, 0.5);"
        padding="10px"
        radius="10px"
      >
        {children}
      </ScrollBar>
    </IngredientsListBigBox>
  );
};

IngredientorBuyingList.defaultProps = {
  title: "Default Header",
  height: "200px;"
};

export default IngredientorBuyingList;
