import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MenuBar from "../../comps/MenuBar";
import PlusButton from "../../comps/PlusButton";
import RecipePost from "../../comps/RecipePost";
import NavigationHeader from "../../comps/NavigationHeader";
import SettingsIcon from "../../comps/SettingsIcon";
import IngredientorBuyingList from "../../comps/IngredientorBuyingList";
import List from "../../comps/IngredientorBuyingList/List.js";
import axios from "axios";

function RecipeIngredients() {
  const router = useRouter();
  const { id } = router.query;

  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [time, setTime] = useState();
  const [desc, setDesc] = useState();

  const upRandomVote = () => {
    let num = Math.floor(Math.random() * 1000);
    return num;
  };

  const downRandomVote = () => {
    let num = Math.floor(Math.random() * 20);
    return num;
  };

  const LoadRecipe = async () => {
    var resp = await axios.get("https://cookoff.lazysphynx.xyz/recipes/" + id);
    console.log(resp.data.title);
    setName(resp.data.author.username);
    setTitle(resp.data.title);
    setDesc(resp.data.description);
    setTime("40m");
  };

  useEffect(() => {
    LoadRecipe();
  }, []);

  const fetchCookOff = (id) => {
    return (
      <>
        <RecipePost
          title={title}
          time={time}
          name={name}
          up={upRandomVote()}
          down={downRandomVote()}
        />
        <IngredientorBuyingList title="Description" height="auto">
          <p>{desc}</p>
        </IngredientorBuyingList>
        <IngredientorBuyingList title="Ingredients" height="300px">
          <List textOne="Egg" textTwo="$4.00" displayIcon={true} displayArrow={false}></List>
          <List></List>
          <List></List>
          <List></List>
          <List></List>
        </IngredientorBuyingList>
      </>
    );
  };

  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Recipe" link="/recipe" />
          <SettingsIcon />
        </nav>
        {fetchCookOff({ id }.id)}

      </div>
      <MenuBar />
    </main>
  );
}

export default RecipeIngredients;
