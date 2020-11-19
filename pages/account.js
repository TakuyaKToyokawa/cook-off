import NavigationHeader from "../comps/NavigationHeader";
import MenuList from "../comps/MenuList";
import MenuBar from "../comps/MenuBar";


function Account() {
  return (
    <main className="main">
    <div className="content">
     
    <div className="headerSetting">
    
      <NavigationHeader text="Setting"link="/setting.js"/>
      
      </div>

<div className="title">
<div className="titleImg"><img src="./account.svg"/></div>
  <h2>Account</h2></div>
<div className="accountList"><MenuList displayIcon="false" text="Change username"/></div>
<div className="accountList"><MenuList displayIcon="false" text="Change password"/></div>
<MenuBar/>
      </div>
  </main>

  );
}

export default Account;