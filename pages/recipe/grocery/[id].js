import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import MenuBar from "../../../comps/MenuBar";
import PlusButton from "../../../comps/PlusButton";
import RecipePost from "../../../comps/RecipePost";
import NavigationHeader from "../../../comps/NavigationHeader";
import SettingsIcon from "../../../comps/SettingsIcon";
import IngredientorBuyingList from "../../../comps/IngredientorBuyingList";
import List from "../../../comps/IngredientorBuyingList/List.js";
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
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Buy" link={"/recipe/" + id} />
          <SettingsIcon />
        </nav>
        <RecipePost
          title={title}
          time={time}
          name={name}
          up={upRandomVote()}
          down={downRandomVote()}
        />
        <IngredientorBuyingList title="Eggs" height="100%">
          <List displayIcon={true} ></List>
          <List displayIcon={true} Icon="/icons/recipe/superstore.svg"></List>
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
