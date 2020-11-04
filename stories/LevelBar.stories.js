import React from 'react';
import LevelBar from '../comps/LevelBar';

export default {
  title: 'Profile/LevelBar',
  component: LevelBar,
};

const Template = (args) => <LevelBar {...args} />;

export const UnfilledLevelBar = Template.bind({});
export const HalfFilledLevelBar = Template.bind({});
export const FilledLevelBar = Template.bind({});

UnfilledLevelBar.args = {
  width: "0%",
};

HalfFilledLevelBar.args = {
  width: "50%",
};

FilledLevelBar.args = {
  width: "100%",
};

