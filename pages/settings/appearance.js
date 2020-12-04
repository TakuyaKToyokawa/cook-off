import NavigationHeader from "../../comps/NavigationHeader";
import MenuBar from "../../comps/MenuBar";
import MenuList from "../../comps/MenuList";
import FontSizeSlider from "../../comps/FontSizeSlider";

function Appearance() {
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Setting" link="/settings"/>
        </nav>
        <div>
          <h2>Appearance</h2>
        </div>
        <div className="smallTitle">
          <h5>Font-size</h5>
        </div>
        <div className="settingList">
          <FontSizeSlider />
        </div>
        <div className="settingList">
          <MenuList icon="/icons/settings/appearance.svg" text="Appearance" />
        </div>
      </div>
      <MenuBar />
    </main>
  );
}

export default Appearance;
