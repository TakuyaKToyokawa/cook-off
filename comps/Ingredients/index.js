import React from "react";
import styled from "styled-components";


const RecipeBuyListBigContainer = styled.div`

display:flex;
position: relative;
margin-top:20px;
`; 



const RecipeBuyListList = styled.div`

`; 
const RecipeBuyListContent = styled.div`
display:grid;
grid-template-columns: auto auto;



`; 
const RecipeBuyListContentPrice = styled.div`

padding-left:80%;

`; 

const RecipeBuyListContentText = styled.div`

padding-left: 10%;
`; 

const Ingredients = ({textOne,textTwo}) => {
  return <RecipeBuyListBigContainer>
  


<RecipeBuyListList>

<RecipeBuyListContent>
         <RecipeBuyListContentText>{textOne}</RecipeBuyListContentText>
         <RecipeBuyListContentPrice>{textTwo}</RecipeBuyListContentPrice>
      </RecipeBuyListContent>
      <img src="./line.svg"></img>
</RecipeBuyListList> 

 </RecipeBuyListBigContainer> 
}
Ingredients.defaultProps = {
    text:"",
    textOne:"egg",
    textTwo:"$3.55"
}
export default Ingredients;