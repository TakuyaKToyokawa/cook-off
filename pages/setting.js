import NavigationHeader from "../comps/NavigationHeader";
import MenuList from "../comps/MenuList";
import MenuBar from "../comps/MenuBar";


function Setting() {
  return (
    <main className="main">
    <div className="content">
     
<div className="headerSetting"><NavigationHeader text="Setting"/></div>
<div className="settingList"><MenuList icon="./account.svg" text="Account"/></div>
<div className="settingList"><MenuList icon="./notification.svg" text="Notification"/></div>
<div className="settingList"><MenuList icon="./appearance.svg" text="Appearance"/></div>
<div className="title"><h3>Our Company</h3></div>
<div className="settingList"><MenuList displayIcon="false" text="Policies"/></div>
<div className="settingList"><MenuList displayIcon="false" text="About"/></div>


<MenuBar/>

      </div>
  </main>

  );
}

export default Setting;
