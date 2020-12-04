<<<<<<< HEAD
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
      </>
    );
  };

  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Recipe" link="/event/create-process/2b" />
          <SettingsIcon />
        </nav>
        {fetchCookOff({ id }.id)}
        <div className="plusButton">
          <PlusButton />
        </div>
      </div>
      <MenuBar />
    </main>
  );
}

export default RecipeIngredients;
=======
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
      </>
    );
  };

  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Recipe" link="/event/create-process/2b" />
          <SettingsIcon />
        </nav>
        {fetchCookOff({ id }.id)}
        <div className="plusButton">
          <PlusButton />
        </div>
      </div>
      <MenuBar />
    </main>
  );
}

export default RecipeIngredients;
>>>>>>> main
