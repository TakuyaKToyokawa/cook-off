import NavigationHeader from "../comps/NavigationHeader";
import MenuList from "../comps/MenuList";
import MenuBar from "../comps/MenuBar";

function Notification() {
  return (
    <main className="main">
      <div className="content">
        <div className="headerSetting">
          <NavigationHeader text="Setting" />
        </div>
        <div className="title">
          <div className="titleImg">
            <img src="./notification.svg" />
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
