import React from 'react';
import styled from 'styled-components';

const Maindiv = styled.div`
width: 467px;
padding:15px;
background-color: #F04B4A;

`;

const Flexeddiv = styled.div`
display:flex;
flex-direction:row;
color:white;
justify-content:space-between;
align-items:center;
`;

const Textdiv = styled.text`

`;

const Title = styled.h2`
margin-bottom:5px;
`;
const Borderbox = styled.div`
border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 50px;
display:flex;
justify-content:center;
align-items:center;
padding:15px;
margin-right:25px;

`;

const ArrowandTitle = styled.div`
display:flex;
flex-direction:row;
width:130px;
padding-left:25px;
align-items:center;
justify-content:space-between;
`;

const Textmini = styled.text`

`;
const Headerforprivacy = () => {
    return <div>
        <Maindiv> 
            <Flexeddiv> 
                <ArrowandTitle>
                    <img src="./Arrow.png"/> 
                    <Textdiv> 
                        <Title> Lily Lee </Title> 
                        <Textmini> ChefLily</Textmini>
                        </Textdiv> 
                </ArrowandTitle> 
                
                <Borderbox> 999 people watching </Borderbox>
                </Flexeddiv>
        </Maindiv>
    </div>
}

export default Headerforprivacy;