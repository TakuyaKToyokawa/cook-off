import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MenuBar from "../../comps/MenuBar";
import PlusButton from "../../comps/PlusButton";
import SettingsIcon from "../../comps/SettingsIcon";
import Searchbar from "../../comps/Searchbar";
import Scrollbar from "../../comps/ScrollBar";
import NavigationHeader from "../../comps/NavigationHeader";
import ImageCardWithBadge from "../../comps/ImageCardWithBadge";
import axios from "axios";
import ScrollBar from "../../comps/ScrollBar";

function YourFriends() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState();

  const LoadEvents = async () => {
    var resp = await axios.get("https://cookoff.lazysphynx.xyz/events");
    setEvents([...resp.data]);
  };

  const SearchEvents = async (e) => {
    setTitle(e.target.value);
    var resp = await axios.post("https://cookoff.lazysphynx.xyz/events", {
      title: title,
    });
    setEvents([...resp.data]);
  };

  useEffect(() => {
    LoadEvents();
  }, []);

  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="My Events" link="/profile">
            {" "}
          </NavigationHeader>
          <SettingsIcon> </SettingsIcon>
        </nav>
        <motion.div
          animate={{
            opacity: [0, 1],
            x: [100, 0],
          }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <Searchbar onChange={SearchEvents}></Searchbar>
          <ScrollBar height="70vh">
            <div className="ImageBadgeList">
              {events.map((o, i) => {
                let d = new Date(o.when);
                try {
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
                        user={o.participants[0].username}
                        date={d.toLocaleString()}
                        image={o.thumbnail.formats.medium.url}
                        link="cookoff/1"
                      />
                    </motion.div>
                  );
                } catch (e) {
                  console.log(e.message);
                }
              })}
            </div>
          </ScrollBar>
        </motion.div>
        <div className="plusButton">
          <PlusButton link="/event/create-process/1a"></PlusButton>
        </div>
      </div>
      <MenuBar propActive={3}></MenuBar>
    </main>
  );
}

export default YourFriends;
