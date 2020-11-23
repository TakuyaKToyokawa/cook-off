import { useRouter } from 'next/router';
import MenuBar from "../../comps/MenuBar";
import NavigationHeader from "../../comps/NavigationHeader";
import SettingsIcon from "../../comps/SettingsIcon";
import InputForm from "../../comps/InputForm";
import InputDate from "../../comps/InputDate";
import SecondaryButton from "../../comps/SecondaryButton";
import StepsDots from "../../comps/StepsDots";
import ImageCard from "../../comps/ImageCard";
import SearchBar from "../../comps/Searchbar";
import FoodList from "../../comps/FoodList";
import MenuList from "../../comps/MenuList";

function renderSwitch(id) {
    console.log(id);
    switch (id) {
        case "1a":
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
        case "1b":
            return (
                <>
                    <div style={{ "margin-bottom": "50px" }}>
                        <h1 style={{ width: "100%" }}>Event Settings</h1>
                        <ImageCard text="Private" />
                        <ImageCard text="Public" />
                    </div>
                    <div>
                        <StepsDots step1={true} />
                    </div>
                </>
            )
            break;
        case "2a":
            return (
                <>
                    <div style={{ "margin-bottom": "50px" }}>
                        <h1 style={{ width: "100%" }}>Choose a recipe</h1>
                        <ImageCard text="My List" />
                        <ImageCard text="Browse Recipes" />
                    </div>
                    <div>
                        <StepsDots step2={true} />
                    </div>
                </>
            )
            break;
        case "2b":
            return (
                <>
                    <div style={{ "margin-bottom": "50px" }}>
                        <h1 style={{ width: "100%" }}>Choose a recipe</h1>
                        <SearchBar />
                        <ul className="eventsCards">
                            <li className="eventCard"><FoodList /></li>
                            <li className="eventCard"><FoodList /></li>
                            <li className="eventCard"><FoodList /></li>
                            <li className="eventCard"><FoodList /></li>
                            <li className="eventCard"><FoodList /></li>
                            <li className="eventCard"><FoodList /></li>
                        </ul>
                    </div>
                    <div>
                        <StepsDots step2={true} />
                    </div>
                </>
            )
            break;
        case "3a":
            return (
                <>
                    <div style={{ "margin-bottom": "50px" }}>
                        <h1 style={{ width: "100%", textAlign: "center" }}>Is this right?</h1>
                        <h2 style={{ width: "100%", textAlign: "center" }}>Pizza party</h2>
                        <MenuList
                            displayIcon={false}
                            icon="./appearance.svg"
                            text="Date"
                        />
                        <MenuList
                            displayIcon={false}
                            icon="./appearance.svg"
                            text="Time"
                        />
                        <MenuList
                            displayIcon={false}
                            icon="./appearance.svg"
                            text="Privacy"
                        />
                        <MenuList
                            displayIcon={false}
                            icon="./appearance.svg"
                            text="Recipe"
                        />
                        <SecondaryButton text="Confirm" />
                    </div>
                    <div>
                        <StepsDots step3={true} />
                    </div>
                </>
            )
            break;
        case "3b":
            return (
                <>
                    <div style={{ "margin-bottom": "50px" }}>
                        <h1 style={{ width: "100%", textAlign: "center" }}>Pizza Party is on!</h1>
                        <h2 style={{ width: "100%", textAlign: "center" }}>Your event code is: 109283</h2>
                        <h3 style={{ width: "100%", textAlign: "center" }}>Share</h3>
                        <h3 style={{ width: "100%", textAlign: "center" }}>FB TWITTER INSTA</h3>
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