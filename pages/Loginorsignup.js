
import Logos from "../comps/Logos";
import Gradientbutton from "../comps/Gradientbutton";

function LoginOrSignUp() {
  return (
    <main className="main">
      <div className="content">
      <div className="vMargin flexColumn">
          <Logos />
        </div>
        <h1 >Cookoff !</h1>
        <h4 >the best cooking app ever</h4>
 
        <div className="vMargin">
          <Gradientbutton text="Sign up"></Gradientbutton>
          <Gradientbutton text="Log in"></Gradientbutton>
        </div>
      </div>
    </main>
  );
}

export default LoginOrSignUp;
