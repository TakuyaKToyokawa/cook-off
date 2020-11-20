import { useRouter } from 'next/router';
import MenuBar from "../../comps/MenuBar";
import NavigationHeader from "../../comps/NavigationHeader";
import SettingsIcon from "../../comps/SettingsIcon";
import InputForm from "../../comps/InputForm";
import InputDate from "../../comps/InputDate";
import SecondaryButton from "../../comps/SecondaryButton";
import StepsDots from "../../comps/StepsDots";
import ImageButton from "../../comps/ImageCard";
import SearchBar from "../../comps/Searchbar";

function renderSwitch(id) {
    console.log(id);
    switch (id) {
        case "1":
            return (
                <>
                    <div style={{ "margin-bottom": "150px" }}>
                        <h1 style={{ width: "100%" }}>Setup your event</h1>
                        <InputForm />
                        <InputDate />
                    </div>
                    <div>
                        <SecondaryButton text="Next" />
                        <StepsDots step1={true} />
                    </div>
                </>
            )
            break;
        case "2":
            return (
                <>
                    <div style={{ "margin-bottom": "50px" }}>
                        <h1 style={{ width: "100%" }}>Event Settings</h1>
                        <ImageButton text="Private" />
                        <ImageButton text="Public" />
                    </div>
                    <div>
                        <StepsDots step1={true} />
                    </div>
                </>
            )
            break;
        case "3":
            return (
                <>
                    <div style={{ "margin-bottom": "50px" }}>
                        <h1 style={{ width: "100%" }}>Choose a recipe</h1>
                        <SearchBar />
                        <ul className="eventsCards">
                            <li className="eventCard"><ImageCard /></li>
                            <li className="eventCard"><ImageCard /></li>
                            <li className="eventCard"><ImageCard /></li>
                            <li className="eventCard"><ImageCard /></li>
                            <li className="eventCard"><ImageCard /></li>
                            <li className="eventCard"><ImageCard /></li>
                        </ul>
                    </div>
                    <div>
                        <StepsDots step2={true} />
                    </div>
                </>
            )
            break;

        default:
            break;
    }
}

export default function newevent() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <main className="main">
            <div className="content">
                <nav className="navigationBar">
                    <NavigationHeader text="Events" displayArrow={true} />
                    <SettingsIcon />
                </nav>
                <div style={{ height: "100%" }}>
                    {renderSwitch({ id }.id)}
                </div>
                <MenuBar />
            </div>
        </main>
    );
}