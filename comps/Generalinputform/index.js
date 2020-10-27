import React from "react";
import styled, { css } from "styled-components";

const Maindiv = styled.div`
width: 305px;
`;

const Labeldiv = styled.h4`
margin-bottom:5px;
`;

const Inputdiv = styled.input.attrs({
  type: "text",
})`
width:100%;
border: 1px solid #D06BFF;
box-sizing: border-box;
border-radius: 13px;
padding:20px;
color:gray;
&:focus{
  outline: none;
}
`;

const Linkdiv = styled.h4`
color: #D06BFF;
width:100%;
text-align:right;
`;

const Generalinputform = ({label, placeholder, link }) => {
  return <div>
      <Maindiv>
          <Labeldiv>{label}</Labeldiv>
          <Inputdiv placeholder={placeholder}></Inputdiv>
          <Linkdiv>{link}</Linkdiv>
      </Maindiv>
    
  </div>;
};

Generalinputform.defaultProps = {
  label: "label",
  placeholder: "placeholder",
  link: "link"
}

export default Generalinputform;
