import React from "react";
import styled, { css } from "styled-components";

const Maindiv = styled.div`
width: 100%;
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
margin-top: 5px;
`;

const Generalinputform = ({label, placeholder, link, displayLink }) => {
  return <div style={{width: "100%"}}>
      <Maindiv>
          <Labeldiv>{label}</Labeldiv>
          <Inputdiv placeholder={placeholder}></Inputdiv>
          {displayLink == true ? <Linkdiv>{link}</Linkdiv> : undefined }
      </Maindiv>
    
  </div>;
};

Generalinputform.defaultProps = {
  label: "label",
  placeholder: "placeholder",
  link: "link",
  displayLink: false,
}

export default Generalinputform;
