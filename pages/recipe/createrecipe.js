import { useState, useEffect } from "react";
import axios from "axios";
import MenuBar from "../../comps/MenuBar";
import PlusButton from "../../comps/PlusButton";
import InputForm from "../../comps/InputForm";
import NavigationHeader from "../../comps/NavigationHeader";
import SettingsIcon from "../../comps/SettingsIcon";
import AddIng from "../../comps/AddIng/index.js";
import NewIng from "../../comps/AddIng/NewIng.js";
import PrimaryButton from "../../comps/PrimaryButton";

function CreateRecipe() {
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();

  const AddRecipe = async () => {
    var resp = await axios.post("https://cookoff.lazysphynx.xyz/recipes", {
      custom: true,
      title: title,
      description: desc,
      username: "CookOff!"
    });
    console.log(resp);
  };

  useEffect(() => {}, []);

  useEffect;
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Recipe" link="/recipe" />
          <SettingsIcon />
        </nav>
        <InputForm
          label="Name"
          onChange={(e) => {
            setTitle(e.target.value);
            console.log(title);
          }}
        />
        <InputForm
          label="Short Description"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <AddIng title="Add Images"></AddIng>
        <div className="vMargin">
          <PrimaryButton text="Publish" onClick={AddRecipe}></PrimaryButton>
        </div>
        <div className="plusButton">
          <PlusButton />
        </div>
      </div>
      <MenuBar />
    </main>
  );
}

export default CreateRecipe;
