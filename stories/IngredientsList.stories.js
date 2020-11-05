import React from 'react';
import IngredientsList from '../comps/IngredientsList';

export default {
  title: 'Cookoff/IngredientsList',
  component: IngredientsList,
};

export const BasicIngredientsList = () => <IngredientsList text="Ingredients" textOne="Baking Powder" textTwo="4.00"/>;
