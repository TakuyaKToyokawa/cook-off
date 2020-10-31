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
`; 

const RecipeBuyListHeader = styled.h3`
display:flex;
position: absolute;
margin-bottom:10px;
`; 
const RecipeBuyListList = styled.div`
display:row;
position: reltive;


`; 
const RecipeBuyListContent = styled.div`
display:flex;
position: relative;
padding-top:13.84px;
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
padding-left:55.23px;
`; 

const RecipeBuyList = ({text}) => {
  return <RecipeBuyListBigContainer>
  
<RecipeBuyListHeader>{text}</RecipeBuyListHeader>
<RecipeBuyListContainer>
<RecipeBuyListList>
   
      <RecipeBuyListContent>
          <img src="./walmart.svg"></img>
         <RecipeBuyListContentText>Walmart</RecipeBuyListContentText>
         <RecipeBuyListContentPrice>$3.55</RecipeBuyListContentPrice>
      </RecipeBuyListContent>
      <RecipeBuyListContent>
      <img src="./superstore.svg"></img>
         <RecipeBuyListContentText>Superstore</RecipeBuyListContentText>
         <RecipeBuyListContentPrice>$4.00</RecipeBuyListContentPrice>
      </RecipeBuyListContent>
      <RecipeBuyListContent>
      <img src="./tnt.svg"></img>
         <RecipeBuyListContentText>TnT</RecipeBuyListContentText>
         <RecipeBuyListContentPrice>$3.55</RecipeBuyListContentPrice>
      </RecipeBuyListContent>
  
</RecipeBuyListList> 
 </RecipeBuyListContainer>
 </RecipeBuyListBigContainer> 
}
RecipeBuyList.defaultProps = {
    text:""
}
export default RecipeBuyList;