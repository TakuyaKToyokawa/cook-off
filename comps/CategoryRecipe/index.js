import React from "react";
import styled from "styled-components";

const CategoryRecipeContainer = styled.div`

display:flex;
position: absolute;
background: #FCE8E8;
border-radius: 9px;
width: 94px;
height: 124px;
`; 
const CategoryRecipeImage = styled.div`
position:absolute;
height: 62px;
width: 56px;
left: 20.21%;
right: 20.21%;
top: 25%;
bottom: 25%;
background-image: url(/sushi.svg);
`; 
const CategoryRecipeText = styled.div`
position:absolute;
color: #7D7D7D;
padding-top:128px;
padding-left:10px;

`; 

const CategoryRecipe = ({text}) => {
  return <CategoryRecipeContainer>
      <CategoryRecipeImage></CategoryRecipeImage>
      <CategoryRecipeText>{text}</CategoryRecipeText>
 </CategoryRecipeContainer>
 
}
CategoryRecipe.defaultProps = {
    text:""
}
export default CategoryRecipe;
