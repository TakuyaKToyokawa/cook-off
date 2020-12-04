import React from 'react';
import CategoryRecipe from '../comps/CategoryRecipe';

export default {
  title: 'Recipe/Categories',
  component: CategoryRecipe,
};

export const BasicJapaneseRecipe= () => <CategoryRecipe text="Japanese"/>;
export const BasicChineseRecipe = () => <CategoryRecipe text="Chinese" img="/icons/recipe/chinese.svg"/>;
