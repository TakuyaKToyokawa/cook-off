import MenuBar from "../../comps/MenuBar";
import PlusButton from "../../comps/PlusButton";
import SettingsIcon from "../../comps/SettingsIcon";
import Searchbar from "../../comps/Searchbar";
import NavigationHeader from "../../comps/NavigationHeader";
import ImageCardWithBadge from "../../comps/ImageCardWithBadge";

function YourFriends() {
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="My Events" link="/profile">
            {" "}
          </NavigationHeader>
          <SettingsIcon> </SettingsIcon>
        </nav>
          <Searchbar></Searchbar>
        <div className="ImageBadgeList">
          <ImageCardWithBadge
            title="BURGER BREAKY"
            date="11/24/2020 9am"
            user="BestCookEver1!"
            profile="url('/img/general/profilephoto1.png')"
          ></ImageCardWithBadge>
          <ImageCardWithBadge
            title="PHO SOUP"
            date="11/29/2020 4pm"
            user="SoupKing55"
            image="url('/img/food/asianfood.jpg')"
            profile="url('/img/general/profilephoto3.png')"
          >
            {" "}
          </ImageCardWithBadge>
        </div>

        <div className="plusButton">
          <PlusButton link="/newevent/1a"></PlusButton>
        </div>
      </div>
      <MenuBar></MenuBar>
    </main>
  );
}

export default YourFriends;
