import React from "react";
import IngredientorBuyingList from "../comps/IngredientorBuyingList";
import List from "../comps/IngredientorBuyingList/List.js";

export default {
  title: "Recipe/List for Ingredient or Buying",
  component: IngredientorBuyingList,
};

export const NoIconIngredientsList = () => (
  <IngredientorBuyingList title="Used for Ingredients Lists" >
    <List />
    <List />
    <List />
    <List />
    <List />
    <List />
  </IngredientorBuyingList>
);


export const IconIngredientsList = () => (
  <IngredientorBuyingList title="Used for Buying Lists">
    <List displayIcon={true}/>
    <List displayIcon={true}/>
    <List displayIcon={true}/>
    <List displayIcon={true}/>
    <List displayIcon={true}/>
    <List displayIcon={true}/>
  </IngredientorBuyingList>
);



export const NoPriceList= () => (
  <IngredientorBuyingList title="Used for Cooking Steps">
    <List displayPrice={false}/>
    <List displayPrice={false}/>
    <List displayPrice={false}/>
    <List displayPrice={false}/>
    <List displayPrice={false}/>
    <List displayPrice={false}/>
  </IngredientorBuyingList>
);
