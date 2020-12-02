import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MenuBar from "../../comps/MenuBar";
import PlusButton from "../../comps/PlusButton";
import SettingsIcon from "../../comps/SettingsIcon";
import Searchbar from "../../comps/Searchbar";
import NavigationHeader from "../../comps/NavigationHeader";
import ImageCardWithBadge from "../../comps/ImageCardWithBadge";
import axios from "axios";

function YourFriends() {
  const [events, setEvents] = useState([]);
  const LoadEvents = async () => {
    var resp = await axios.get("http://35.183.61.181:1337/events");
    setEvents([...resp.data]);
  };
  useEffect(() => {
    LoadEvents();
  });

  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="My Events" link="/profile">
            {" "}
          </NavigationHeader>
          <SettingsIcon> </SettingsIcon>
        </nav>
        <Searchbar></Searchbar>
        <div className="ImageBadgeList">
          {events.map((o, i) => {
            return (
              <motion.div
                animate={{
                  opacity: [0, 1],
                  y: [100, 0],
                }}
                whileHover={{ scale: 0.98 }}
                transition={{ ease: "easeInOut", duration: 1 }}
              >
                <ImageCardWithBadge
                  key={i}
                  title={o.title}
                  user={o.participants.username}
                  date={o.when}
                  image={o.thumbnail.formats.medium.url}
                />
              </motion.div>
            );
          })}
        </div>

        <div className="plusButton">
          <PlusButton link="/newevent/1a"></PlusButton>
        </div>
      </div>
      <MenuBar propActive={3}></MenuBar>
    </main>
  );
}

export default YourFriends;
