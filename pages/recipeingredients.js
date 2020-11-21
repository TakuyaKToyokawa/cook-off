import MenuBar from "../comps/MenuBar";
import PlusButton from "../comps/PlusButton";
import RecipePost from "../comps/RecipePost";
import NavigationHeader from "../comps/NavigationHeader";
import SettingsIcon from "../comps/SettingsIcon";
import IngredientorBuyingList from "../comps/IngredientorBuyingList";
import List from "../comps/IngredientorBuyingList/List.js";

function RecipeIngredients() {
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Recipe" link="/recipepage" />
          <SettingsIcon />
        </nav>
        <RecipePost />
        <IngredientorBuyingList title="Ingredients" height="300px">
          <List></List>
          <List></List>
          <List></List>
          <List></List>
          <List></List>
        </IngredientorBuyingList>
        <IngredientorBuyingList title="How to Cook">
          <List displayPrice={false}></List>
          <List displayPrice={false}></List>
          <List displayPrice={false}></List>
          <List displayPrice={false}></List>
          <List displayPrice={false}></List>
        </IngredientorBuyingList>
        <div className="plusButton">
          <PlusButton />
        </div>
      </div>
      <MenuBar />
    </main>
  );
}

export default RecipeIngredients;
