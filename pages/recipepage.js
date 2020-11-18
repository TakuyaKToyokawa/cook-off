import MenuBar from "../comps/MenuBar";
import PlusButton from "../comps/PlusButton";
import RecipePost from "../comps/RecipePost";
import NavigationHeader from "../comps/NavigationHeader";
import SettingsIcon from "../comps/SettingsIcon";
import CategoryRecipe from "../comps/CategoryRecipe";
import Scrollbar from "../comps/ScrollBar";

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

          <RecipePost title="Sushi tray for Thanksgiving!" link="/recipeingredients" />
          <RecipePost />
          <RecipePost />
          <RecipePost />
          <RecipePost />
        </div>
        <div className="plusButton">
          <PlusButton />
        </div>
        <MenuBar />
      </div>
    </main>
  );
}

export default RecipePage;
