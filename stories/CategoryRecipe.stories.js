import React from 'react';
import CategoryRecipe from '../comps/CategoryRecipe';

export default {
  title: 'Cookoff/CategoryRecipe',
  component: CategoryRecipe,
};

export const BasicJapaneseRecipe= () => <CategoryRecipe text="Japanese"/>;
export const BasicChineseRecipe = () => <CategoryRecipe text="Japanese" img="./chinese.svg"/>;
