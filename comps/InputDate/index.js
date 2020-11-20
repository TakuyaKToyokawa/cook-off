import React from "react";
import styled from "styled-components";


const InputDateBox = styled.div`

display: block;
position: relative;
`; 
const InputDateLabel = styled.h3`
margin-left:3px;

`; 

const InputDateForm = styled.form`

display:flex;
position: relative;
min-height: 50px;
min-width: 270px;
margin-top:20px;

`; 
const InputDateFormInput = styled.input.attrs({
  type: "date",
})`
border-radius: 15px;
border: 1px solid red;
padding: 5px 15px;
width:100%;
outline: none;
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