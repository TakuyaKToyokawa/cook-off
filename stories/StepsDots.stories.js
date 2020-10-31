import React from 'react';
import StepsDots from '../comps/StepsDots';

export default {
  title: 'Events/StepsDots',
  component: StepsDots,
};

export const BaseStepDots = () => <StepsDots/>;

export const Step1 = () => <StepsDots step1={true}/>;

export const Step2 = () => <StepsDots step2={true}/>;

export const Step3 = () => <StepsDots step3={true}/>;