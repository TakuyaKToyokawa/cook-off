import MenuBar from "../comps/MenuBar";
import Inputform from "../comps/Inputform";
import Logos from "../comps/Logos";
import PrimaryButton from "../comps/PrimaryButton";

function Login2() {
  return (
    <main className="main">
      <div className="content">
        <h1>Welcome back!</h1>
        <div className="vMargin flexColumn">
          <Logos />
        </div>
        <div className="flexColumn"></div>
        <Inputform label="Email or Username" placeholder="Email" />
        <Inputform label="Password" placeholder="Password" />
        <div className="vMargin">
          <PrimaryButton text="Login"></PrimaryButton>
        </div>
      </div>
    </main>
  );
}

export default Login2;
