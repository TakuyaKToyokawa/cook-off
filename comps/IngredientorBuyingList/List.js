import Link from "next/link";
import React from "react";
import styled from "styled-components";

const RecipeBuyListBigContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 20px 10px;
  border-bottom: 1px solid #ddd;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #EED9D9;
  }
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
  margin-right: 15px;
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

const Arrow = styled.img`
  object-fit: cover;
`;

const List = ({ textOne, textTwo, Icon, displayIcon, displayPrice, displayArrow, link }) => {
  return (
    <Link href={link}>
      <RecipeBuyListBigContainer>
        <RecipeBuyListList>
          <RecipeBuyListContent>
            <IconCont>
              {displayIcon == true ? <IconShop src={Icon} /> : undefined}
              <RecipeBuyListContentText>{textOne}</RecipeBuyListContentText>
            </IconCont>
            <IconCont>
              {displayPrice == true ? (
                <RecipeBuyListContentPrice>{textTwo}</RecipeBuyListContentPrice>
              ) : undefined}
              {displayArrow == true ? (
                <Arrow src="/icons/general/Arrow.svg" />
              ) : undefined}
            </IconCont>
          </RecipeBuyListContent>
        </RecipeBuyListList>
      </RecipeBuyListBigContainer>
    </Link>
  );
};

List.defaultProps = {
  text: "",
  textOne: "egg",
  textTwo: "$3.55",
  displayIcon: false,
  displayPrice: true,
  displayArrow: false,
  Icon: "/icons/recipe/walmart.svg",
  link: "/",
};

export default List;
