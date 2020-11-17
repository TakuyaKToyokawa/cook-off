import NavigationHeader from "../comps/NavigationHeader";
import MenuList from "../comps/MenuList";
import MenuBar from "../comps/MenuBar";


function Account() {
  return (
    <main className="main">
    <div className="content">
     
    <div className="headerSetting"><NavigationHeader text="Setting"/></div>

<div className="title"><h3>Our Company</h3></div>
<div className="accountList"><MenuList displayIcon="false" text="Policies"/></div>
<div className="accountList"><MenuList displayIcon="false" text="About"/></div>


<MenuBar/>



      </div>

  </main>

  );
}

export default Account;