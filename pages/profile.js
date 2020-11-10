import Generalinputform from "../comps/Generalinputform";
import Logos from "../comps/Logos";
import Gradientbutton from "../comps/Gradientbutton";


function Login2() {
  return (
    <main className="main">
      <div className="content">
        <h1 >Welcome back!</h1>
        <div className="vMargin flexColumn">
          <Logos />
        </div>
        <div className="flexColumn">
        </div>
        <Generalinputform label="Email or Username" placeholder="Email"/>
        <Generalinputform label="Password" placeholder="Password"/>
        <Generalinputform label="Confirm Password" placeholder="Confirm Password"/>
        <div className="vMargin">
          <Gradientbutton text="Login"></Gradientbutton>
        </div>
      </div>
    </main>
  );
}

export default Login2;
