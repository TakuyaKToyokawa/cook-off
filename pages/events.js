import MenuBar from "../comps/MenuBar";
import NavigationHeader from "../comps/NavigationHeader";
import SettingsIcon from "../comps/SettingsIcon";
import SearchBar from "../comps/Searchbar";
import ImageCard from "../comps/ImageCardWithBadge";
import PlusButton from "../comps/PlusButton";

export default function events() {
    return (
        <main className="main">
            <div className="content">
                <nav className="navigationBar">
                    <NavigationHeader text="Events" displayArrow={false} />
                    <SettingsIcon />
                </nav>
                <SearchBar />
                <ul className="eventsCards">
                    <li className="eventCard"><ImageCard /></li>
                    <li className="eventCard"><ImageCard /></li>
                    <li className="eventCard"><ImageCard /></li>
                    <li className="eventCard"><ImageCard /></li>
                    <li className="eventCard"><ImageCard /></li>
                    <li className="eventCard"><ImageCard /></li>
                </ul>
                <div className="rightBias">
                    <PlusButton />
                </div>
                <MenuBar />
            </div>
        </main>
    );
}