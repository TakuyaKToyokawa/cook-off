<<<<<<< HEAD
import NavigationHeader from "../../comps/NavigationHeader";
import MenuBar from "../../comps/MenuBar";
import Logos from "../../comps/Logos";

function About() {
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Setting" link="/settings" />
        </nav>
        <div className="title">
          <div className="titleImg"></div>
          <h2>About</h2>
        </div>
        <Logos />
        <h4>
          CookOff! team always had a goal in mind; how can we make cooking
          accessible and fun for everyone, even if the their circumstance
          doesn’t allow traditional means?
        </h4>
      </div>
      <MenuBar />
    </main>
  );
}

export default About;
=======
import NavigationHeader from "../../comps/NavigationHeader";
import MenuBar from "../../comps/MenuBar";
import Logos from "../../comps/Logos";

function About() {
  return (
    <main className="main">
      <div className="content">
        <nav className="navigationBar">
          <NavigationHeader text="Setting" link="/settings" />
        </nav>
        <div className="title">
          <div className="titleImg"></div>
          <h2>About</h2>
        </div>
        <div className="centerFlex">
          <Logos />
        </div>
        <p>
          CookOff! team always had a goal in mind; how can we make cooking
          accessible and fun for everyone, even if the their circumstance
          doesn’t allow traditional means?
        </p>
      </div>
      <MenuBar />
    </main>
  );
}

export default About;
>>>>>>> main
