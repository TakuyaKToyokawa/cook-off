import React from "react";
import styled, { css } from "styled-components";

const Maindiv = styled.div`
  width: 100%;
`;

const Labeldiv = styled.h4`
  margin-bottom: 5px;
`;

const Inputdiv = styled.input`
  width: 100%;
  border: 1px solid #d06bff;
  box-sizing: border-box;
  border-radius: 13px;
  padding: 20px;
  color: gray;
  &:focus {
    outline: none;
  }
`;

const Linkdiv = styled.h4`
  color: #d06bff;
  width: 100%;
  text-align: right;
  margin-top: 5px;
`;

const InputForm = ({
  label,
  placeholder,
  link,
  displayLink,
  displayLabel,
  name,
  onChange,
  type,
}) => {
  return (
    <Maindiv>
      {displayLabel == true ? <Labeldiv>{label}</Labeldiv> : undefined }
      <Inputdiv
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        type={type}
      ></Inputdiv>
      {displayLink == true ? <Linkdiv>{link}</Linkdiv> : undefined}
    </Maindiv>
  );
};

InputForm.defaultProps = {
  label: "label",
  placeholder: "placeholder",
  link: "link",
  displayLink: false,
  displayLabel: true,
  name: "default",
  onChange: () => {},
  type: "text",
};

export default InputForm;
