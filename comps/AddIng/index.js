import React from "react";
import styled from "styled-components";


const RecipeBuyListBigContainer = styled.div`

display:flex;
position: absolute;

`; 
const RecipeBuyListContainer = styled.div`

display:flex;
position: absolute;
min-height: 108px;
min-width: 350px;
left: 0.410400390625px;
top: 39.783447265625px;
border-radius: 9px;
background: rgba(252, 232, 232, 0.5);
border-radius: 9px;
transform: rotate(0.13deg);
padding-bottom:30px;
`; 

const RecipeBuyListHeader = styled.div`
display:flex;
position: absolute;
min-width:200px;

`; 
const RecipeBuyListList = styled.div`
display:row;
position: reltive;
`; 
const AddIngBox = styled.div`
display:flex;
position: reltive;
left: 5.55%;
right: 73.62%;
top: 36.09%;
bottom: 45.21%;
height: 27.999999939359036px;
width: 63.999999861392084px;
background: #FFFFFF;
border-radius: 9px;
margin:10px;
justify-content:center;
`; 


const AddIng = ({text}) => {
  return <RecipeBuyListBigContainer>
  
<RecipeBuyListHeader>Add Ingredients: </RecipeBuyListHeader>
<RecipeBuyListContainer>
<RecipeBuyListList>
<AddIngBox>{text}</AddIngBox>

  
</RecipeBuyListList> 
 </RecipeBuyListContainer>
 </RecipeBuyListBigContainer> 
}
AddIng.defaultProps = {
    text:""
}
export default AddIng;