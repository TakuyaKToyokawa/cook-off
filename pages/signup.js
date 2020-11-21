import MenuBar from "../comps/MenuBar";
import PlusButton from "../comps/PlusButton";
import InputForm from "../comps/InputForm";
import Logos from "../comps/Logos";
import PrimaryButton from "../comps/PrimaryButton";

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
        <InputForm label="Email" placeholder="Email"/>
        <InputForm label="Password" placeholder="Password"/>
        <InputForm label="Confirm Password" placeholder="Confirm Password"/>
        <div className="vMargin">
          <PrimaryButton text="Signup" link="/profile"></PrimaryButton>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
