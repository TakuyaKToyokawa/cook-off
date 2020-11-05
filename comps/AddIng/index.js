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



const AddIngBox = styled.div`
  display: flex;
  height: 27.999999939359036px;
  width: 63.999999861392084px;
  background: #ffffff;
  border-radius: 9px;
  margin: 10px;
  justify-content: center;
`;

const AddIng = () => {
  return (
    <RecipeBuyListBigContainer>
      <RecipeBuyListHeader><h2>Add Ingredients</h2></RecipeBuyListHeader>
      <RecipeBuyListContainer>
       
      </RecipeBuyListContainer>
      <div style={{display:"flex"}}>
        <Generalinputform label="tags" displayLink="true"/>
      </div>
    </RecipeBuyListBigContainer>
  );
};

export default AddIng;
