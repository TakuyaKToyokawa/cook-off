import React from "react";
import styled, { css } from "styled-components";

const Maindiv = styled.div`
width: 305px;
`;

const Labeldiv = styled.h4`
margin-bottom:5px;
`;

const Inputdiv = styled.div`
border: 1px solid #D06BFF;
box-sizing: border-box;
border-radius: 13px;
padding:20px;
color:gray;
`;

const Linkdiv = styled.h4`
color: #D06BFF;
margin-top:10px;
padding-left:273px;
`;

const Generalinputform = () => {
  return <div>
      <Maindiv>
          <Labeldiv>Label</Labeldiv>
          <Inputdiv> Placeholder</Inputdiv>
          <Linkdiv> Link </Linkdiv>
      </Maindiv>
    
  </div>;
};

export default Generalinputform;
