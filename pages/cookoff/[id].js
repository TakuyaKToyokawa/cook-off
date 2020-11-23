import { useRouter } from "next/router";
import MenuBar from "../../comps/MenuBar";
import NavigationHeader from "../../comps/NavigationHeader";
import SettingsIcon from "../../comps/SettingsIcon";

const fetchCookOff = (id) => {
  return "hello world";
};

export default function newevent() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader
            text="Events"
            link="/newevent"
            displayArrow={true}
          />
          <SettingsIcon />
        </nav>
        <div style={{ height: "100%" }}>{fetchCookOff({ id }.id)}</div>
      </div>
      <MenuBar />
    </main>
  );
}
