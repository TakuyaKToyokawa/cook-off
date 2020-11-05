import React from "react";
import styled from "styled-components";

const RecipePostBox = styled.div`

display:flex;
position: relative;

`; 
const RecipePostImg = styled.img`

display:flex;
position: relative;
min-height: 104px;
min-width: 104px;
margin-right:10px;
border-radius: 9px;


`; 

const RecipePostContent = styled.div`
display:row;
position: relative;


`; 
const RecipePostHeader = styled.div`

display:flex;
position: relative;
min-height:10px;



`; 
const RecipePostDetails = styled.div`

display:flex;
position: relative;
padding-top:20px;

`; 
const RecipePostDetailsMin = styled.div`

display:flex;
position: relative;
padding-right:35px;
color: #7D7D7D;

`; 

const RecipePostUpDown = styled.div`

display:flex;


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

const RecipePost = ({title, time,name, img}) => {
    return <RecipePostBox>
    <RecipePostImg src={img}/>

    <RecipePostContent>

        <RecipePostHeader>{title}</RecipePostHeader>

        <RecipePostDetails>
<RecipePostDetailsMin>{time}</RecipePostDetailsMin>
<RecipePostDetailsMin>{name}</RecipePostDetailsMin>
        </RecipePostDetails>

        <RecipePostUpDown>
            <RecipePostUp>
                <img src="/upvote.svg"></img>
                {/* get Data from database */}
                <RecipePostUpText>225</RecipePostUpText>
                </RecipePostUp>
            <RecipePostUp>
                <img src="/downvote.svg"></img>
                {/* get Data from database */}
                <RecipePostUpText>15</RecipePostUpText>
                </RecipePostUp>
        </RecipePostUpDown>
    </RecipePostContent>
   </RecipePostBox> 
  };
  RecipePost.defaultProps = {
    title: "Mooncake quickly",
    time: "40m",
    img: "./mooncake.png",
    name: "by Jenny Tran"
  };
 
  export default RecipePost;