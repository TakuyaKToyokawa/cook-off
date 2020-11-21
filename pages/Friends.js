import MenuBar from "../comps/MenuBar";
import PlusButton from "../comps/PlusButton";
import SettingsIcon from "../comps/SettingsIcon";
import Searchbar from "../comps/Searchbar";
import NavigationHeader from "../comps/NavigationHeader";
import FriendList from "../comps/FriendList";





function YourFriends() {
  return (
    <main className="main">
      <div className="content">

        <div className= "topmenu">
        <NavigationHeader text="My Friends" link="/profile"> </NavigationHeader>
        <SettingsIcon> </SettingsIcon>
        </div>

        <div className="searchbarbox">
        <Searchbar></Searchbar>
        </div>
        <div className="friendslistbox">
          <FriendList name="WorstCook4Life" profile="url('./profilephoto1.png')" status="#48E574" message="I cant cook guys, but I'm here to try" ></FriendList>
          <FriendList name="BestCookever1!" profile="url('./profilephoto2.png')" status="#48E574" message="Watch my recipes and eat my food because its delish" ></FriendList>
          <FriendList name="NeverOnline1234" profile="url('./profilephoto3.png')" message="Here but not really" ></FriendList>
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