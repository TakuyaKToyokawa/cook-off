import React from "react";
import styled from "styled-components";


const RecipeBuyListBigContainer = styled.div`

display:flex;
position: absolute;

`; 
const RecipeBuyListContainer = styled.div`

display:flex;
position: absolute;
height: 179.21656760502603px;
width: 349.99999924198795px;
left: 0.410400390625px;
top: 39.783447265625px;
border-radius: 9px;
background: rgba(252, 232, 232, 0.5);
border-radius: 9px;
transform: rotate(0.13deg);
padding-bottom:30px;
`; 

const RecipeBuyListHeader = styled.h3`
display:flex;
position: absolute;

`; 
const RecipeBuyListList = styled.div`
display:row;
position: reltive;


`; 
const RecipeBuyListContent = styled.div`
display:flex;
position: relative;
padding-top:38.84px;
align-items:center;

`; 
const RecipeBuyListContentPrice = styled.div`
display:flex;
position: absolute;
padding-top:13.84px;
padding-left:250px;
`; 

const RecipeBuyListContentText = styled.div`
display:flex;
position: absolute;
padding-top:13.84px;
padding-left:20.23px;
`; 

const Ingredients = ({text}) => {
  return <RecipeBuyListBigContainer>
  
<RecipeBuyListHeader>{text}</RecipeBuyListHeader>
<RecipeBuyListContainer>
<RecipeBuyListList>

<RecipeBuyListContent>
          
         <RecipeBuyListContentText>baking powder</RecipeBuyListContentText>
         <RecipeBuyListContentPrice>20gr</RecipeBuyListContentPrice>
         
      </RecipeBuyListContent>
      <img src="./line.svg"></img>
      <RecipeBuyListContent>
     
         <RecipeBuyListContentText>egg york</RecipeBuyListContentText>
         <RecipeBuyListContentPrice>20gr</RecipeBuyListContentPrice>
         
      </RecipeBuyListContent>
      <img src="./line.svg"></img>
      <RecipeBuyListContent>
      
         <RecipeBuyListContentText>meat</RecipeBuyListContentText>
         <RecipeBuyListContentPrice>500gr</RecipeBuyListContentPrice>
         
      </RecipeBuyListContent>
      <img src="./line.svg"></img>
      
  
</RecipeBuyListList> 
 </RecipeBuyListContainer>
 </RecipeBuyListBigContainer> 
}
Ingredients.defaultProps = {
    text:""
}
export default Ingredients;