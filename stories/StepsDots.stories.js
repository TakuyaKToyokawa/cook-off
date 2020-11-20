import React from 'react';
import StepsDots from '../comps/StepsDots';

export default {
  title: 'Events/StepsDots',
  component: StepsDots,
};

const Template = (args) => <StepsDots {...args}/>;

export const BaseStepDots = Template.bind({});
export const Step1 = Template.bind({});
export const Step2 = Template.bind({});
export const Step3 = Template.bind({});

Step1.args = {
  step1:true,
  step2:false,
  step3:false
}

Step2.args = {
  step1:false,
  step2:true,
  step3:false
}

Step3.args = {
  step1:false,
  step2:false,
  step3:true
}
