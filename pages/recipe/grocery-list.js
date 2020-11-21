import MenuBar from "../../comps/MenuBar";
import PlusButton from "../../comps/PlusButton";
import RecipePost from "../../comps/RecipePost";
import NavigationHeader from "../../comps/NavigationHeader";
import SettingsIcon from "../../comps/SettingsIcon";
import IngredientorBuyingList from "../../comps/IngredientorBuyingList";
import List from "../../comps/IngredientorBuyingList/List.js";

function RecipeIngredients() {
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Buy" />
          <SettingsIcon />
        </nav>
        <RecipePost />
        <IngredientorBuyingList title="Eggs" height="100%">
          <List displayIcon={true}></List>
          <List displayIcon={true}></List>
          <List displayIcon={true}></List>
          <List displayIcon={true}></List>
          <List displayIcon={true}></List>
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
