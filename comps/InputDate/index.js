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
border-radius: 15px;
border: 1px solid;
border-image-source: linear-gradient(270deg, #C95CFC -27.53%, #F14B4A 81.06%);

`; 
const InputDateFormInput = styled.input`

display:flex;
position: absolute;


`; 
const InputDate = ({}) => {
  return <InputDateBox>
  <InputDateLabel>Label</InputDateLabel>
  <InputDateForm>
    <InputDateFormInput type="date" format="mm/dd/yyyy">
        
    </InputDateFormInput>
  </InputDateForm>

 </InputDateBox> 
}

export default InputDate;