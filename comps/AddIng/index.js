import React from "react";
import styled from "styled-components";
import NewIng from "./NewIng";
import Generalinputform from '../InputForm'
import Gradientbutton from '../PrimaryButton';

const RecipeBuyListBigContainer = styled.div`
  display: flex;
  flex-direction:column;
`;

const RecipeBuyListContainer = styled.div`
  display: flex;
  flex-wrap: wrap ;
  min-height: 108px;
  min-width: 350px;
  border-radius: 9px;
  background: rgba(252, 232, 232, 0.5);
  border-radius: 9px;
`;

const RecipeBuyListHeader = styled.div`
  display: inline-flex;
`;

const AddIng = ({children}) => {
  return (
    <RecipeBuyListBigContainer>
      <RecipeBuyListHeader><h2>Add Ingredients</h2></RecipeBuyListHeader>
      <RecipeBuyListContainer>
       {children}
      </RecipeBuyListContainer>
    </RecipeBuyListBigContainer>
  );
};

export default AddIng;
