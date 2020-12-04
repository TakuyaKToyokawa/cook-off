import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import MenuBar from "../../../comps/MenuBar";
import NavigationHeader from "../../../comps/NavigationHeader";
import SettingsIcon from "../../../comps/SettingsIcon";
import InputForm from "../../../comps/InputForm";
import InputDate from "../../../comps/InputDate";
import InputTime from "../../../comps/InputTime";
import SecondaryButton from "../../../comps/SecondaryButton";
import StepsDots from "../../../comps/StepsDots";
import ImageCard from "../../../comps/ImageCard";
import SearchBar from "../../../comps/Searchbar";
import FoodList from "../../../comps/FoodList";
import MenuList from "../../../comps/MenuList";
import Scrollbar from "../../../comps/ScrollBar";
import Lottie from "react-lottie";
import animData from "../../../public/lottie/27691-icons-success-done.json";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import RecipePost from "../../../comps/RecipePost";
import IngredientorBuyingList from "../../../comps/IngredientorBuyingList";
import List from "../../../comps/IngredientorBuyingList/List.js";
import PlusButton from "../../../comps/PlusButton";
import axios from "axios";

function renderSwitch(id) {
  const defaultOptions = {
    autoplay: true,
    animationData: animData,
    loop: false,
  };

  const [recipe, setRecipe] = useState([]);
  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [privacy, setPrivacy] = useState();
  const [cook, setCook] = useState();
  const [twitchLink, setTwitchLink] = useState();
  // Text for private or public; function for PublicPrivateText
  const [text, setText] = useState();
  const [thumbnail, setThumbnail] = useState();

  const LoadRecipe = async () => {
    var resp = await axios.get("https://cookoff.lazysphynx.xyz/recipes");
    setRecipe([...resp.data]);
  };

  const PostEvent = async () => {
    var resp = await axios.post("https://cookoff.lazysphynx.xyz/events", {
      participants: [
        {
          confirmed: true,
          blocked: false,
          _id: "5fa443e8985bf6014114b7ca",
          username: "dmitrymatio",
          email: "dmitrymatio@gmail.com",
          provider: "local",
          createdAt: "2020-11-05T18:26:48.130Z",
          updatedAt: "2020-11-20T11:41:33.002Z",
          __v: 0,
          role: "5fa3a690d8f07a025c9e8cfa",
          id: "5fa443e8985bf6014114b7ca",
        },
      ],
      when: date,
      title: title,
      private: privacy,
      cooked_meals: [],
      thumbnail: thumbnail,
    });
    console.log(resp);
  };

  useEffect(() => {
    LoadRecipe();
    setTitle(title);
    setDate(date);
    setPrivacy(privacy);
    setCook(cook);
  }, []);

  switch (id) {
    case "1a":
      return (
        <>
          <nav className="navigationBar">
            <NavigationHeader text="Events" displayArrow={true} link="/event" />
            <SettingsIcon />
          </nav>
          <motion.div
            animate={{
              opacity: [0, 1],
              x: [-100, 0],
            }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <h2 className="alignCenter" style={{ marginBottom: "30px" }}>
              Setup your event
            </h2>
            <div>
              <InputForm
                label="Name of your Event"
                placeholder="Name"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <InputDate
                label="Date of the Event"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              {/* <InputTime
                label="Time of the Event"
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
              <InputForm
                label="Twitch Link"
                placeholder="Twitch"
                onChange={(e) => {
                  setTwitchLink(e.target.value);
                }}
              /> */}
              <InputForm
                label="Add Image"
                placeholder="Add Image"
                type="file"
                onChange={(e) => {
                  setThumbnail(e.target.files[0]);
                  console.log(e.target.files[0]);
                }}
              />
            </div>
            <SecondaryButton
              text="Next"
              onClick={async () => {
                setTitle(title);
                setDate(date);
                setTime(time);
                setTwitchLink(twitchLink);
                setThumbnail(thumbnail);

                const formData = new FormData();
                formData.append("files", thumbnail);
                console.log(formData);
                const imageResponse = await axios.post(
                  "https://cookoff.lazysphynx.xyz/upload",
                  formData,
                  { headers: { "Content-Type": "multipart/form/data" } }
                );
                console.log(imageResponse.data[0]);
                setThumbnail(imageResponse.data[0]);
              }}
              link={"1b"}
            />
            <div className="step-dots">
              <StepsDots step1={true} />
            </div>
          </motion.div>
        </>
      );
      break;
    case "1b":
      return (
        <>
          <nav className="navigationBar">
            <NavigationHeader text="Events" displayArrow={true} link="1a" />
            <SettingsIcon />
          </nav>
          <h2 className="eventTitle">Event Settings</h2>
          <div className="ImageBadgeList">
            <ImageCard
              text="Private"
              link="2a"
              onClick={(e) => {
                setText("Public");
                setPrivacy(false);
              }}
              image="url('/img/events/private.jpg')"
            />
            <ImageCard
              text="Public"
              link="2a"
              onClick={(e) => {
                setText("Private");
                setPrivacy(true);
              }}
              image="url('/img/events/public.jpg')"
            />
          </div>
          <div className="step-dots">
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
            <ImageCard
              text="My List"
              image="url('/img/events/my-list.jpg')"
              link="2b"
            />
            <ImageCard
              text="Browse Recipes"
              image="url('/img/events/browse-list.jpg')"
              link="2b"
            />
          </div>
          <div className="step-dots">
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
          <h2 className="eventTitle">Choose a recipe</h2>
          <div style={{ "margin-bottom": "50px" }}>
            <SearchBar />
            <Scrollbar height="65vh">
              <ul className="list">
                {recipe.map((o, i) => {
                  return (
                    <motion.div
                      animate={{
                        opacity: [0, 1],
                        y: [100, 0],
                      }}
                      whileHover={{
                        scale: 0.98,
                        transition: { duration: 0.3 },
                      }}
                      transition={{ ease: "easeInOut", duration: 1 }}
                    >
                      <li>
                        <FoodList
                          key={i}
                          title={o.title}
                          link={"3a"}
                          recipeLink={"/event/" + o.id}
                          time={"40m"}
                          onClick={() => {
                            setCook(o.title);
                          }}
                        />
                      </li>
                    </motion.div>
                  );
                })}
              </ul>
            </Scrollbar>
          </div>
          <div className="step-dots">
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
          <h2 style={{ width: "100%", textAlign: "center" }}>{title}</h2>
          <div style={{ "margin-bottom": "50px" }}>
            <MenuList displayIcon={false} icon="./appearance.svg" text={date} />
            <MenuList displayIcon={false} icon="./appearance.svg" text={time} />
            <MenuList displayIcon={false} icon="./appearance.svg" text={text} />
            <MenuList displayIcon={false} icon="./appearance.svg" text={cook} />
            <SecondaryButton text="Confirm" link="3b" onClick={PostEvent} />
          </div>
          <div className="step-dots">
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
              {title} is on!
            </h1>
            <Lottie options={defaultOptions} height={"100px"} />
            <h2 style={{ width: "100%", textAlign: "center" }}>
              Your event code is: 109283
            </h2>
            <h3 style={{ width: "100%", textAlign: "center" }}>Share</h3>
            <h3 style={{ width: "100%", textAlign: "center" }}>
              <div class="icons">
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
