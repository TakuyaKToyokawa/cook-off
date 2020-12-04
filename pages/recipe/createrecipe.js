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
      author: {
        confirmed: true,
        blocked: false,
        _id: "5fa443e8985bf6014114b7ca",
        username: "dmitrymatio",
        email: "dmitrymatio@gmail.com",
        provider: "local",
        createdAt: "2020-11-05T18:26:48.130Z",
        updatedAt: "2020-11-20T11:41:33.002Z",
        __v: 0,
        role: "5fa3a690d8f07a025c9e8cfa",
        id: "5fa443e8985bf6014114b7ca",
      },
    });
    console.log(resp);
  };

  useEffect(() => {}, []);

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
          placeholder="Type the name of the recipe!"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <InputForm
          type="file"
          label="Add Image"
          placeholder="Add a Short Description!"
        ></InputForm>
        <AddIng title="Ingredients"></AddIng>

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
