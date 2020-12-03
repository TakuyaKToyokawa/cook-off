import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MenuBar from "../../comps/MenuBar";
import PlusButton from "../../comps/PlusButton";
import RecipePost from "../../comps/RecipePost";
import NavigationHeader from "../../comps/NavigationHeader";
import SettingsIcon from "../../comps/SettingsIcon";
import CategoryRecipe from "../../comps/CategoryRecipe";
import ScrollBar from "../../comps/ScrollBar";
import axios from "axios";

function RecipePage() {
  const [recipe, setRecipe] = useState([]);

  const LoadRecipe = async () => {
    var resp = await axios.get("http://35.183.61.181:1337/recipes");
    setRecipe([...resp.data]);
  };

  useEffect(() => {
    LoadRecipe();
  });

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
          <div className="subtitle flexRow">
            <h2 className="smallVMargin">Popular Recipes</h2>
            <p className="smallVMargin">Show All</p>
          </div>
          <ScrollBar height="45vh">
            {recipe.map((o, i) => {
              return (
                <motion.div
                  animate={{
                    opacity: [0, 1],
                    y: [100, 0],
                  }}
                  whileHover={{ scale: 0.98 }}
                  transition={{ ease: "easeInOut", duration: 1 }}
                >
                  <RecipePost
                    key={i}
                    title={o.title}
                    desc={o.description}
                    name={o.author.username}
                    
                  />
                </motion.div>
              );
            })}
          </ScrollBar>
        </div>
        <div className="plusButton">
          <PlusButton link="/recipe/createrecipe" />
        </div>
      </div>

      <MenuBar propActive={1} />
    </main>
  );
}

export default RecipePage;
