import React from "react";
import styled from "styled-components";

const IngredientsListBigBox = styled.div``;

const IngredientsListSmallBox = styled.div`
  max-width: 330px;
  overflow: auto;
  height:100%;
  max-height: 280px;
  background: rgba(252, 232, 232, 0.5);
  border-radius: 9px;
  padding: 10px;
`;

const RecipeBuyListHeader = styled.h3`
  display: flex;
`;

const IngredientorBuyingList = ({ title, children }) => {
  return (
    <IngredientsListBigBox>
      <RecipeBuyListHeader>{title}</RecipeBuyListHeader>
      <IngredientsListSmallBox>
        {children}
      </IngredientsListSmallBox>
    </IngredientsListBigBox>
  );
};

IngredientorBuyingList.defaultProps = {
  title: "Default Header",
};
export default IngredientorBuyingList;
