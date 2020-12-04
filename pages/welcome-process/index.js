import Logos from "../../comps/Logos";
import PrimaryButton from "../../comps/PrimaryButton";
import { motion } from "framer-motion";
function LoginOrSignUp() {
  return (
    <main className="main">
      <div className="content centerFlex">
      <motion.div
          animate={{
            opacity: [0, 1],
            x: [-100, 0],
          }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
        <div className="vMargin flexColumn">
          <Logos />
        </div>
        <h1 className="textCenter">Cookoff!</h1>
        <h3 className="textCenter">Cook anytime, cook anywhere.</h3>
        <div className="vMargin">
          <PrimaryButton text="Sign up" link="/welcome-process/signup"></PrimaryButton>
          <PrimaryButton text="Log in" link="/welcome-process/login"></PrimaryButton>
        </div>
        </motion.div>
      </div>
    </main>
  );
}

export default LoginOrSignUp;
