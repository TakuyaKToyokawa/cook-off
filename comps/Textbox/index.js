import React from "react";
import styled, { css } from "styled-components";


const Maindiv = styled.h5`
width:352px;
`;

const Text1div = styled.div`
display:flex;
justify-content:space-between;
flex-direction:row;
padding-bottom:15px;
padding-right:10px;
padding-left:10px;

`;
const Seperator = styled.div`
border: 1px solid #E2E2E2;
width: 347px;
`;

const Text2div = styled.div`
padding-top:40px;
padding-bottom:20px;
display:flex;
justify-content:space-between;
padding-right:10px;
padding-left:10px;

`;

const Seperator2 = styled.div`
border: 1px solid #E2E2E2;
width: 347px;

`;

const Wrapped = styled.div`
justify-content:space-between;
display:flex;
width:55px;
`;

const Textbox = () => {
  return <div>
      <Maindiv> 
          <Text1div> Text <img src="./grayarrow"/> </Text1div>
          <Seperator> </Seperator>
          <Text2div> <Wrapped><img src="./Icon.png"/> Text</Wrapped> <img src="./grayarrow"/> </Text2div>
          <Seperator2> </Seperator2>
      </Maindiv>
 
  </div>;
};

export default Textbox;
