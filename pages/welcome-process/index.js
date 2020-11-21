import Logos from "../../comps/Logos";
import PrimaryButton from "../../comps/PrimaryButton";

function LoginOrSignUp() {
  return (
    <main className="main">
      <div className="content">
        <div className="vMargin flexColumn">
          <Logos />
        </div>
        <h1>Cookoff !</h1>
        <h4>the best cooking app ever</h4>
        <div className="vMargin">
          <PrimaryButton text="Sign up" link="/welcome-process/signup"></PrimaryButton>
          <PrimaryButton text="Log in" link="/welcome-process/login"></PrimaryButton>
        </div>
      </div>
    </main>
  );
}

export default LoginOrSignUp;
