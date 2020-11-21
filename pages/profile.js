import NavigationHeader from "../comps/NavigationHeader";
import SettingsIcon from "../comps/SettingsIcon";
import Avatar from "../comps/Avatar";
import LevelBar from "../comps/LevelBar";
import ProfileList from "../comps/ProfileList";
import MenuBar from "../comps/MenuBar";

function Profile() {
  return (
    <main className="main">
      <nav className="navigationBar">
        <NavigationHeader text="Profile" displayArrow={false} />
        <SettingsIcon />
      </nav>
      <div className="content">
        <Avatar />
        <LevelBar />
        <ProfileList />
        <MenuBar />
      </div>
    </main>
  );
}

export default Profile;
