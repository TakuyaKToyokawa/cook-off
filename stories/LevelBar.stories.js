import React from 'react';
import LevelBar from '../comps/LevelBar';

export default {
  title: 'Profile/LevelBar',
  component: LevelBar,
};

export const UnfilledLevelBar = () => <LevelBar width="0%"/>;
export const HalfFilledLevelBar = () => <LevelBar width="50%"/>;
export const FilledLevelBar = () => <LevelBar width="100%"/>;