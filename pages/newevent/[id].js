import { useRouter } from "next/router";
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
import Scrollbar from "../../comps/ScrollBar";
import Lottie from "react-lottie";
import animData from "../../public/lottie/27691-icons-success-done.json";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

function renderSwitch(id) {
  const defaultOptions = {
    autoplay: true,
    animationData: animData,
    loop: false,
  };

  console.log(id);
  switch (id) {
    case "1a":
      return (
        <>
          <nav className="navigationBar">
            <NavigationHeader
              text="Events"
              displayArrow={true}
              link="/newevent"
            />
            <SettingsIcon />
          </nav>
          <h1 className="alignCenter">Setup your event</h1>
          <div style={{ "margin-bottom": "150px" }}>
            <InputForm />
            <InputDate />
          </div>
          <div>
            <SecondaryButton text="Next" link="/newevent/1b" />
            <StepsDots step1={true} />
          </div>
        </>
      );
      break;
    case "1b":
      return (
        <>
          <nav className="navigationBar">
            <NavigationHeader
              text="Events"
              displayArrow={true}
              link="/newevent/1a"
            />
            <SettingsIcon />
          </nav>
          <h1 className="eventTitle">Event Settings</h1>
          <div className="ImageBadgeList">
            <ImageCard text="Private" link="/newevent/2a" />
            <ImageCard text="Public" link="/newevent/2a" />
          </div>
          <div>
            <StepsDots step1={true} />
          </div>
        </>
      );
      break;
    case "2a":
      return (
        <>
          <nav className="navigationBar">
            <NavigationHeader text="Events" displayArrow={true} link="1b" />
            <SettingsIcon />
          </nav>
          <h2 className="eventTitle">Choose a recipe</h2>
          <div className="ImageBadgeList">
            <ImageCard text="My List" link="2b" />
            <ImageCard text="Browse Recipes" link="2b" />
          </div>
          <div>
            <StepsDots step2={true} />
          </div>
        </>
      );
      break;
    case "2b":
      return (
        <>
          <nav className="navigationBar">
            <NavigationHeader text="Events" displayArrow={true} link="2a" />
            <SettingsIcon />
          </nav>
          <h1 className="eventTitle">Choose a recipe</h1>
          <div style={{ "margin-bottom": "50px" }}>
            <SearchBar />
            <Scrollbar height="400px">
              <ul className="list">
                <li>
                  <FoodList link="3a" />
                </li>
                <li>
                  <FoodList link="3a" />
                </li>
                <li>
                  <FoodList link="3a" />
                </li>
                <li>
                  <FoodList link="3a" />
                </li>
                <li>
                  <FoodList link="3a" />
                </li>
                <li>
                  <FoodList link="3a" />
                </li>
              </ul>
            </Scrollbar>
          </div>
          <div>
            <StepsDots step2={true} />
          </div>
        </>
      );
      break;
    case "3a":
      return (
        <>
          <nav className="navigationBar">
            <NavigationHeader text="Events" displayArrow={true} link="2b" />
            <SettingsIcon />
          </nav>

          <h1 style={{ width: "100%", textAlign: "center" }}>Is this right?</h1>
          <h2 style={{ width: "100%", textAlign: "center" }}>Pizza party</h2>
          <div style={{ "margin-bottom": "50px" }}>
            <MenuList displayIcon={false} icon="./appearance.svg" text="Date" />
            <MenuList displayIcon={false} icon="./appearance.svg" text="Time" />
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
            <SecondaryButton text="Confirm" link="3b" />
          </div>
          <div>
            <StepsDots step3={true} />
          </div>
        </>
      );
      break;
    case "3b":
      return (
        <>
          <nav className="navigationBar">
            <NavigationHeader text="Events" displayArrow={true} link="3a" />
            <SettingsIcon />
          </nav>

          <div style={{ "margin-bottom": "50px" }}>
            <h1 style={{ width: "100%", textAlign: "center" }}>
              Pizza Party is on!
            </h1>
            <Lottie options={defaultOptions} height={"100px"} />
            <h2 style={{ width: "100%", textAlign: "center" }}>
              Your event code is: 109283
            </h2>
            <h3 style={{ width: "100%", textAlign: "center" }}>Share</h3>
            <h3 style={{ width: "100%", textAlign: "center" }}>
              <div class=".icons">
                <FiInstagram />
                <FiTwitter />
                <FiFacebook />
              </div>
            </h3>
          </div>
        </>
      );
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
        <div style={{ height: "100%" }}>{renderSwitch({ id }.id)}</div>
      </div>
      <MenuBar />
    </main>
  );
}
