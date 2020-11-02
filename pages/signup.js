import MenuBar from "../comps/MenuBar";
import PlusButton from "../comps/PlusButton";
import Generalinputform from "../comps/Generalinputform";
import Logos from "../comps/Logos";
import Gradientbutton from "../comps/Gradientbutton";

function SignUp() {
  return (
    <main className="main">
      <div className="content">
        <h1 >Welcome!</h1>
        <div className="vMargin flexColumn">
          <Logos />
        </div>
        <div className="flexColumn">
          <PlusButton border="2px solid #D680FF" color="transparent" plusColor="#D680FF"/>
          <p>Add Profile Picture</p>
        </div>
        <Generalinputform label="Email" placeholder="Email"/>
        <Generalinputform label="Password" placeholder="Password"/>
        <Generalinputform label="Confirm Password" placeholder="Confirm Password"/>
        <div className="vMargin">
          <Gradientbutton text="Signup"></Gradientbutton>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
