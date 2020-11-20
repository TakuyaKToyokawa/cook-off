import MenuBar from "../comps/MenuBar";
import NavigationHeader from "../comps/NavigationHeader";
import SettingsIcon from "../comps/SettingsIcon";
import Avatar from "../comps/Avatar";
import LevelBar from "../comps/LevelBar";
import ProfileList from "../comps/ProfileList";

function Profile() {
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Profile" displayArrow={false} />
          <SettingsIcon />
        </nav>
        <Avatar />
        <LevelBar />
        <ProfileList />
        <MenuBar />
      </div>
    </main>
  );
}

export default Profile;
