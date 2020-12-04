import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Searchbar from "../../comps/Searchbar";
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
  const [title, setTitle] = useState();

  const SearchRecipe = async (e) => {
    setTitle(e.target.value);
    console.log(title);
    var resp = await axios.post("https://cookoff.lazysphynx.xyz/recipe", {
      title: title,
    });
    setRecipe([...resp.data]);
  };

  const upRandomVote = () => {
    let num = Math.floor(Math.random() * 1000);
    return num;
  };

  const downRandomVote = () => {
    let num = Math.floor(Math.random() * 20);
    return num;
  };

  const LoadRecipe = async () => {
    var resp = await axios.get("https://cookoff.lazysphynx.xyz/recipes");
    setRecipe([...resp.data]);
  };

  useEffect(() => {
    LoadRecipe();
  }, []);

  console.log(recipe);
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Recipe" displayArrow={false} />
          <SettingsIcon />
        </nav>
        <motion.div
          animate={{
            opacity: [0, 1],
            x: [-100, 0],
          }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <div className="categories">
            <CategoryRecipe text="Italian" img="/icons/recipe/italian.svg"/>
            <CategoryRecipe text="Japanese" />
            <CategoryRecipe text="Chinese" img="/icons/recipe/chinese.svg"/>
          </div>
          <Searchbar onChange={SearchRecipe} />
          <div className="recipePost">
            <div className="subtitle flexRow">
              <h2 className="smallVMargin">Popular Recipes</h2>
              <p className="smallVMargin">Show All</p>
            </div>
            <ScrollBar height="40vh">
              {recipe.map((o, i) => {
                try{
                  return (
                    <motion.div
                      animate={{
                        opacity: [0, 1],
                        y: [100, 0],
                      }}
                      whileHover={{ scale: 0.98, transition: { duration: 0.3 } }}
                      transition={{ ease: "easeInOut", duration: 1 }}
                    >
                      <RecipePost
                        key={i}
                        title={o.title}
                        desc={o.description}
                        name={o.author.username}
                        link={"/recipe/" + o.id}
                        up={upRandomVote()}
                        down={downRandomVote()}
                      />
                    </motion.div>
                  );
                }catch(e){
                  console.log(e.message);
                }
              })}
            </ScrollBar>
          </div>
        </motion.div>
        <div className="plusButton">
          <PlusButton link="/recipe/createrecipe" />
        </div>
      </div>

      <MenuBar propActive={1} />
    </main>
  );
}

export default RecipePage;
