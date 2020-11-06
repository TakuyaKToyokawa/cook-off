import React from "react";
import styled from "styled-components";

const RecipeBuyListBigContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 20px 0px;
  border-bottom: 1px solid #ddd;
`;

const RecipeBuyListList = styled.div`
  width: 100%;
`;

const RecipeBuyListContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const RecipeBuyListContentPrice = styled.div`
  margin-right: 10px;
`;

const RecipeBuyListContentText = styled.div`
  margin-left: 10px;
`;

const IconShop = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
`;

const IconCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  
`;

const List = ({ textOne, textTwo, Icon, displayIcon }) => {
  return (
    <RecipeBuyListBigContainer>
      <RecipeBuyListList>
        <RecipeBuyListContent>
          <IconCont>
            {displayIcon == true ? <IconShop src={Icon} /> : undefined}
            <RecipeBuyListContentText>{textOne}</RecipeBuyListContentText>
          </IconCont>
          <RecipeBuyListContentPrice>{textTwo}</RecipeBuyListContentPrice>
        </RecipeBuyListContent>
      </RecipeBuyListList>
    </RecipeBuyListBigContainer>
  );
};

List.defaultProps = {
  text: "",
  textOne: "egg",
  textTwo: "$3.55",
  displayIcon: false,
  Icon: "./walmart.svg"
};
export default List;
