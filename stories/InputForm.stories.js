import React from 'react';
import InputForm from '../comps/InputForm'; 

export default {
    title: 'Inputs/InputForm',
    component: InputForm
}; 

const Template = (args) => <InputForm {...args}/>;
export const BaseInputForm=  Template.bind({});

BaseInputForm.args = {
    label: "Default Label",
    placeholder: "Default Placeholder",
    link: "Default Link",
    displayLink:true,
}