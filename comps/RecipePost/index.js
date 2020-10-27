import React from "react";
import styled from "styled-components";

const RecipePostBox = styled.div`

display:flex;
position: absolute;

`; 
const RecipePostImg = styled.div`

display:flex;
position: relative;
height:
height: 104px;
width: 104px;
left: -12px;
top: 5px;
border-radius: 9px;


`; 

const RecipePostContent = styled.div`

display:row;
row
position: absolute;
left: 35.81%;
right: 8.71%;
top: 7%;
bottom: 3%;

`; 
const RecipePostHeader = styled.div`

display:flex;
position: absolute;
height: 26px;
width: 163px;
padding-left: 2px;
top: 7px;


`; 
const RecipePostDetails = styled.div`

display:flex;
position: relative;
padding-top:41px;

`; 
const RecipePostDetailsMin = styled.div`

display:flex;
position: relative;
padding-right:35px;
color: #7D7D7D;

`; 

const RecipePostUpDown = styled.div`

display:flex;
position: absolute;

`; 
const RecipePostUp = styled.div`

display:flex;
position: relative;
padding-right:60px;
padding-top:21px;

`; 
const RecipePostUpText = styled.div`

display:flex;
position: relative;
margin:5px;


`; 

const RecipePost = ({}) => {
    return <RecipePostBox>
    <RecipePostImg><img src="/mooncake.png"></img></RecipePostImg>

    <RecipePostContent>

        <RecipePostHeader>Mooncake quickly</RecipePostHeader>

        <RecipePostDetails>
            <RecipePostDetailsMin>30 mins</RecipePostDetailsMin>
            <RecipePostDetailsMin>by Jenny Tran</RecipePostDetailsMin>
        </RecipePostDetails>

        <RecipePostUpDown>
            <RecipePostUp>
                <img src="/upvote.svg"></img>
                <RecipePostUpText>225</RecipePostUpText>
                </RecipePostUp>
            <RecipePostUp>
                <img src="/downvote.svg"></img>
                <RecipePostUpText>15</RecipePostUpText>
                </RecipePostUp>
        </RecipePostUpDown>
    </RecipePostContent>
   </RecipePostBox> 
  }
 
  export default RecipePost;