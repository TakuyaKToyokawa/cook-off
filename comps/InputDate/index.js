import React from "react";
import styled from "styled-components";


const InputDateBox = styled.div`

display:flex;
position: absolute;
`; 
const InputDateLabel = styled.h3`

display:flex;
position: relative;
`; 

const InputDateForm = styled.form`

display:flex;
position: absolute;
height: 50px;
width: 270px;
padding-top:50px;


`; 
const InputDateFormInput = styled.input.attrs({
  type: "date",
})`
border-radius: 15px;
border: 1px solid red;


`; 
const InputDate = ({}) => {
  return <InputDateBox>
  <InputDateLabel>Label</InputDateLabel>
  <InputDateForm>
    <InputDateFormInput format="mm/dd/yyyy">
        
    </InputDateFormInput>
  </InputDateForm>

 </InputDateBox> 
}

export default InputDate;