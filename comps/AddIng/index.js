import React from "react";
import styled from "styled-components";

const RecipeBuyListBigContainer = styled.div`
  display: flex;
  width:100%; 
  min-width: 200px;
  flex-direction:column;
`;

const RecipeBuyListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  min-height: 150px;
  height: 100%;
  border-radius: 9px;
  background: rgba(252, 232, 232, 0.5);
  border-radius: 9px;
`;

const RecipeBuyListHeader = styled.div`
  display: inline-flex;
`;

const AddIng = ({title, children}) => {
  return (
    <RecipeBuyListBigContainer>
      <RecipeBuyListHeader><h3>{title}</h3></RecipeBuyListHeader>
      <RecipeBuyListContainer>
       {children}
      </RecipeBuyListContainer>
    </RecipeBuyListBigContainer>
  );
};

export default AddIng;
