import React, { useState, useEffect } from "react";
import InputForm from "../../comps/InputForm";
import Logos from "../../comps/Logos";
import PrimaryButton from "../../comps/PrimaryButton";
import axios from "axios";

function Login2() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const HandleLogin = async (email, pass) => {
    console.log("logging in", email, pass);
    var resp = await axios.post("http://35.183.61.181:1337/auth/local", {
      email: email,
      password: pass,
    });
    console.log("response", resp.data);
  };

  return (
    <main className="main">
      <div className="content centerFlex">
        <h1 className="textCenter">Welcome back!</h1>
        <div className="vMargin flexColumn">
          <Logos />
        </div>
        <div className="flexColumn"></div>
        <InputForm
          label="Email or Username"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <InputForm
          label="Password"
          placeholder="Password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <div className="vMargin">
          <PrimaryButton text="Login" onClick={HandleLogin}></PrimaryButton>
        </div>
      </div>
    </main>
  );
}

export default Login2;
