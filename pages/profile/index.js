import { motion } from "framer-motion";
import NavigationHeader from "../../comps/NavigationHeader";
import SettingsIcon from "../../comps/SettingsIcon";
import Avatar from "../../comps/Avatar";
import LevelBar from "../../comps/LevelBar";
import ProfileList from "../../comps/ProfileList";
import MenuBar from "../../comps/MenuBar";

function Profile() {
  
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Profile" displayArrow={false} />
          <SettingsIcon />
        </nav>
        <motion.div
            animate={{
              opacity: [0, 1],
            }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
        <div className="alignCenter">
          <Avatar />
        </div>
        <LevelBar />
        <ProfileList />
        </motion.div>
      </div>
      <MenuBar propActive={2}/>
    </main>
  );
}

export default Profile;
