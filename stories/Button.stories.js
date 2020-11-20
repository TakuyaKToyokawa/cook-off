import React from "react";
import PrimaryButton from "../comps/PrimaryButton";
import SecondaryButton from "../comps/SecondaryButton";
import PlusButton from "../comps/PlusButton";
import ButtonMic from '../comps/ButtonMic';
import ButtonPhone from '../comps/ButtonPhone';

export default {
  title: "Inputs/Buttons",
  component: PrimaryButton,
};

const Template = (args) => <PrimaryButton {...args} />;
const SecondTemplate = (args) => <SecondaryButton {...args}/>
const ThirdTemplate = (args) => <PlusButton {...args}/>

export const Primary = Template.bind({});
export const Secondary = SecondTemplate.bind({});
export const Plus = ThirdTemplate.bind({});
export const StreamingMic = () => <ButtonMic/>;
export const StreamingPhone = () => <ButtonPhone/>;

Primary.args = {
  text: "Primary",
  color: `linear-gradient(
    90deg,
    rgba(255, 206, 33, 0.8) -18.69%,
    rgba(255, 85, 32, 0.8) 9.75%,
    rgba(236, 29, 29, 0.8) 49.93%,
    rgba(201, 92, 252, 0.8) 100%
  );`
};

Secondary.args = {
  text: "Secondary",
  color: "red"
};

Plus.args = {
  color: "#D680FF",
  border: "none",
  plusColor: "white"
};

