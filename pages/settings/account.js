import NavigationHeader from "../../comps/NavigationHeader";
import MenuList from "../../comps/MenuList";
import MenuBar from "../../comps/MenuBar";

function Account() {
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Setting" link="/settings" />
        </nav>
        <div className="title">
          <div className="titleImg">
            <img src="/icons/settings/account.svg" />
          </div>
          <h2>Account</h2>
        </div>
        <div className="accountList">
          <MenuList displayIcon="false" text="Change username" />
        </div>
        <div className="accountList">
          <MenuList displayIcon="false" text="Change password" />
        </div>
      </div>
      <MenuBar />
    </main>
  );
}

export default Account;
