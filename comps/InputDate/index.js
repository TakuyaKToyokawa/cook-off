import React from "react";
import styled from "styled-components";

const InputDateBox = styled.div`
  display: block;
  position: relative;
`;

const InputDateLabel = styled.h4`
  margin-left: 3px;
`;

const InputDateForm = styled.form`
  display: flex;
  position: relative;
  min-height: 50px;
  min-width: 270px;
  margin-top: 15px;
`;
const InputDateFormInput = styled.input.attrs({
  type: "date",
})`
  border-radius: 15px;
  border: 1px solid red;
  padding: 20px;
  width: 100%;
  outline: none;
`;

const InputDate = ({ label, onChange }) => {
  return (
    <InputDateBox>
      <InputDateLabel>{label}</InputDateLabel>
      <InputDateForm>
        <InputDateFormInput
          onChange={onChange}
          format="mm/dd/yyyy"
        ></InputDateFormInput>
      </InputDateForm>
    </InputDateBox>
  );
};

InputDate.defaultProps = {
  label: "label",
  onChange: () => {},
};
export default InputDate;
