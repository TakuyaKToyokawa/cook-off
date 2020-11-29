import MenuBar from "../../comps/MenuBar";
import PlusButton from "../../comps/PlusButton";
import RecipePost from "../../comps/RecipePost";
import NavigationHeader from "../../comps/NavigationHeader";
import SettingsIcon from "../../comps/SettingsIcon";
import CategoryRecipe from "../../comps/CategoryRecipe";
import ScrollBar from "../../comps/ScrollBar";

function RecipePage() {
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Recipe" displayArrow={false} />
          <SettingsIcon />
        </nav>
        <div className="categories">
          <CategoryRecipe text="default" />
          <CategoryRecipe text="default" />
          <CategoryRecipe text="default" />
          <CategoryRecipe text="default" />
          <CategoryRecipe text="default" />
        </div>
        <div className="recipePost">
          <div className="flexRow">
            <h2 className="smallVMargin">Popular Recipes</h2>
            <p className="smallVMargin">Show All</p>
          </div>
          <ScrollBar height="45vh">
            <RecipePost
              title="Sushi tray for Thanksgiving!"
              link="/recipe/ingredients"
            />
            <RecipePost />
            <RecipePost />
            <RecipePost />
            <RecipePost />
          </ScrollBar>
        </div>
        <div className="plusButton">
          <PlusButton link="/recipe/createrecipe" />
        </div>
      </div>
      <MenuBar />
    </main>
  );
}

export default RecipePage;
