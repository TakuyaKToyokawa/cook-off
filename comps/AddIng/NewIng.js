import React from "react";
import styled from "styled-components";

const RecipeBuyListBigContainer = styled.div`
  display: flex;
  flex-direction:column;
`;

const AddIngBox = styled.div`
  display: flex;
  padding: 5px 10px;
  background: #ffffff;
  border-radius: 9px;
  margin: 10px;
  align-items:center;
  justify-content: center;
`;

const NewIng = ({ text }) => {
  return (
    <RecipeBuyListBigContainer>
        <AddIngBox>{text}</AddIngBox>
    </RecipeBuyListBigContainer>
  );
};

NewIng.defaultProps = {
  text: "eggs",
};

export default NewIng;
