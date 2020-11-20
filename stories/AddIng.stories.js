import React from "react";
import AddIng from "../comps/AddIng";
import NewIng from "../comps/AddIng/NewIng.js";

export default {
  title: "Recipe/AddIng",
  component: AddIng,
};

export const NoIngredients = () => (
  <AddIng>

  </AddIng>
);

export const AddedIngredients = () => (
  <AddIng>
    <NewIng text="bread" />
    <NewIng text="egg" />
    <NewIng text="flour" />
    <NewIng text="bacon" />
  </AddIng>
);
