import PrimaryButton from "../comps/PrimaryButton";
import Lottie from "react-lottie";
import animData from "../public/lottie/26901-cooking.json";

function Profile() {
  const defaultOptions = {
    autoplay: true,
    animationData: animData,
  };

  return (
    <main className="main">
      <div className="centerFlex content ">
        <Lottie options={defaultOptions} height={"400px"} />
        <h3 className="textCenter">Cook, share, connect, and have fun virtually!</h3>
        <PrimaryButton text="Getting Started" link="/welcome-process" />
      </div>
    </main>
  );
}

export default Profile;
