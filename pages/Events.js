import MenuBar from "../comps/MenuBar";
import PlusButton from "../comps/PlusButton";
import SettingsIcon from "../comps/SettingsIcon";
import Searchbar from "../comps/Searchbar";
import NavigationHeader from "../comps/NavigationHeader";
import ImageCardWithBadge from "../comps/ImageCardWithBadge";

function YourFriends() {
  return (
    <main className="main">
      <div className="content">
        <div className= "topmenu">
        <NavigationHeader text="My Events"> </NavigationHeader>
        <SettingsIcon> </SettingsIcon>
        </div>
        <div className="searchbarbox">
        <Searchbar></Searchbar>
        </div>
        <div className="ImageBadgeList">
            <ImageCardWithBadge title="BURGER BREAKY" date="11/24/2020 9am" user="BestCookEver1!" profile="url('./profilephoto1.png')"></ImageCardWithBadge>
            <ImageCardWithBadge title="PHO SOUP" date="11/29/2020 4pm" user="SoupKing55" image="url('./asianfood.jpg')" profile="url('./profilephoto3.png')"> </ImageCardWithBadge>
        </div>

        <div className="positionplusbutton"> 
        <PlusButton></PlusButton>
        </div>

      </div>
      <MenuBar></MenuBar>
    </main>
  );
}

export default YourFriends;