import React from "react";
import styled from "styled-components";

const CategoryRecipeContainer = styled.div`
justify-content:center;
display:row;
`; 
const Categorybox = styled.div`

display:flex;
position: relative;
background: #FCE8E8;
border-radius: 9px;
max-width: 94px;
min-height: 124px;
justify-content:center;
align-items:center;
`; 
const CategoryRecipeImage = styled.img`
position:relative;
min-height: 62px;
max-width: 56px;


`; 
const CategoryRecipeText = styled.div`
position:relative;
margin-top:10px;
color: #7D7D7D;


`; 

const CategoryRecipe = ({text,img}) => {
  return <CategoryRecipeContainer>
      <Categorybox><CategoryRecipeImage src={img}/></Categorybox>
      <CategoryRecipeText>{text}</CategoryRecipeText>
 </CategoryRecipeContainer>
 
}
CategoryRecipe.defaultProps = {
    text:"",
    img: "./sushi.svg"
};
export default CategoryRecipe;
