import NavigationHeader from "../../comps/NavigationHeader";
import SettingsIcon from "../../comps/SettingsIcon";
import Avatar from "../../comps/Avatar";
import LevelBar from "../../comps/LevelBar";
import ProfileList from "../../comps/ProfileList";
import MenuBar from "../../comps/MenuBar";

function Profile() {
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Profile" displayArrow={false} />
          <SettingsIcon />
        </nav>
        <div className="alignCenter">
          <Avatar />
        </div>
        <LevelBar />
        <ProfileList />
        
      </div>
      <MenuBar />
    </main>
  );
}

export default Profile;
