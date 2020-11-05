import React from "react";
import styled from "styled-components";
import Ingredients from '../Ingredients'


const IngredientsListBigBox = styled.div`

`; 

const IngredientsListSmallBox = styled.div`
max-width:330px;
min-height:280px;
background: rgba(252, 232, 232, 0.5);
border-radius:9px;
padding:10px;
`; 


const RecipeBuyListHeader = styled.h3`
display:flex;
position: relative;
`; 

const IngredientsList = ({text}) => {
  return <IngredientsListBigBox>

<RecipeBuyListHeader>{text}</RecipeBuyListHeader>
      <IngredientsListSmallBox>
      
<Ingredients textOne="Baking Powder" textTwo="4.00"/>
<Ingredients  textOne="Egg white" textTwo="4.00"/>
<Ingredients  textOne="Egg white" textTwo="4.00"/>
<Ingredients  textOne="Egg white" textTwo="4.00"/>
<Ingredients  textOne="Egg white" textTwo="4.00"/>
</IngredientsListSmallBox>
  </IngredientsListBigBox>
  
}
IngredientsList.defaultProps = {
    text:"",
    textOne:"egg",
    textTwo:"$3.55"
}
export default IngredientsList;