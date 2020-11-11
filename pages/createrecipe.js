import MenuBar from "../comps/MenuBar";
import PlusButton from "../comps/PlusButton";
import InputForm from "../comps/InputForm";
import NavigationHeader from "../comps/NavigationHeader";
import SettingsIcon from "../comps/SettingsIcon";
import AddIng from "../comps/AddIng/index.js";
import NewIng from "../comps/AddIng/NewIng.js";
import PrimaryButton from "../comps/PrimaryButton";

function CreateRecipe() {
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Recipe" />
          <SettingsIcon />
        </nav>
        <InputForm label="Name" />
        <InputForm label="Short Description" />
        <AddIng title="Add Ingredients">
          <NewIng />
        </AddIng>
        <AddIng title="Add Images">
        </AddIng>
        <div className="plusButton">
          <PlusButton />
        </div>
        <div className="vMargin">
          <PrimaryButton text="Publish"></PrimaryButton>
        </div>
        <MenuBar />
      </div>
    </main>
  );
}

export default CreateRecipe;
