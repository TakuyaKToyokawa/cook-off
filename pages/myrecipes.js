import MenuBar from "../comps/MenuBar";
import PlusButton from "../comps/PlusButton";
import SettingsIcon from "../comps/SettingsIcon";
import Searchbar from "../comps/Searchbar";
import NavigationHeader from "../comps/NavigationHeader";
import ImageCard from "../comps/ImageCard";

function MyRecipes() {
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="My Recipes" link="/profile"> </NavigationHeader>
          <SettingsIcon> </SettingsIcon>
        </nav>
        <div className="searchbarbox">
          <Searchbar></Searchbar>
        </div>
        <div className="ImagecardList">
          <ImageCard text="Favourites" image="url('./burger.jpg')"></ImageCard>
          <ImageCard text="Italian" image="url('./pasta.jpg')"></ImageCard>
          <ImageCard text="Asian" image="url('./asianfood.jpg')"></ImageCard>
        </div>
        <div className="plusButton">
          <PlusButton />
        </div>
      </div>
      <MenuBar></MenuBar>
    </main>
  );
}

export default MyRecipes;
