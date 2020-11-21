import NavigationHeader from "../../comps/NavigationHeader";
import MenuList from "../../comps/MenuList";
import MenuBar from "../../comps/MenuBar";

function Notification() {
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Setting" link="/settings" />
        </nav>
        <div className="title">
          <div className="titleImg">
            <img src="/icons/settings/notification.svg" />
          </div>
          <h2>Notification</h2>
        </div>
        <div className="accountList">
          <MenuList displayIcon="false" text="Messaging" />
        </div>
        <div className="accountList">
          <MenuList displayIcon="false" text="Followed USers Events" />
        </div>
      </div>
      <MenuBar />
    </main>
  );
}

export default Notification;
