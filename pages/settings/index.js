import NavigationHeader from "../../comps/NavigationHeader";
import MenuList from "../../comps/MenuList";
import MenuBar from "../../comps/MenuBar";

function Setting() {
  return (
    <main className="main">
      <div className="content">
      <nav className="navigationBar">
          <NavigationHeader text="Setting" link="/profile" />
        </nav>
        <div className="settingList">
          <MenuList
            icon="/icons/settings/account.svg"
            text="Account"
            link="/settings/account"
          />
        </div>
        <div className="settingList">
          <MenuList
            icon="/icons/settings/notification.svg"
            text="Notification"
            link="/settings/notification"
          />
        </div>
        <div className="settingList">
          <MenuList
            icon="/icons/settings/appearance.svg"
            text="Appearance"
            link="/settings/appearance"
          />
        </div>
        <div className="title">
          <h3>Our Company</h3>
        </div>
        <div className="settingList">
          <MenuList displayIcon="false" text="Policies" link="/settings/policies" />
        </div>
        <div className="settingList">
          <MenuList displayIcon="false" text="About" link="/settings/about" />
        </div>
      </div>
      <MenuBar />
    </main>
  );
}

export default Setting;
