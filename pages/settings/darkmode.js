import NavigationHeader from "../comps/NavigationHeader";
import MenuBar from "../comps/MenuBar";
import MenuList from "../comps/MenuList";
import FontSizeSlider from "../comps/FontSizeSlider";

function AppearanceDark() {
  return (
    <main className="mainDark">
      <div className="contentDark">
        <nav className="navigationBar">
          <NavigationHeader text="Setting" link="/settings" />
        </nav>
        <div className="titleDark">
          <div className="titleImgDark">
            <img src="./appearance.svg" />
          </div>
          <h2>Appearance</h2>
        </div>
        <div className="smallTitleDark">
          <h5>Font-size</h5>
        </div>
        <div className="settingListdDark">
          <FontSizeSlider />
        </div>
        <div className="settingListDark">
          <MenuList icon="./appearance.svg" text="Darkmode/lightmode" />
        </div>
      </div>
      <MenuBar />z
    </main>
  );
}

export default AppearanceDark;
