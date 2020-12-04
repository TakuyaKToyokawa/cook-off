import React, { useState, useEffect } from "react";
import PlusButton from "../../comps/PlusButton";
import InputForm from "../../comps/InputForm";
import Logos from "../../comps/Logos";
import PrimaryButton from "../../comps/PrimaryButton";
import { motion } from "framer-motion";
import axios from "axios";

function SignUp() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [user, setUser] = useState();
  const [signup, setSignUp] = useState([]);

  const HandleSignup = async () => {
    console.log("logging in", email, pass, user);
    var resp = await axios.post("https://cookoff.lazysphynx.xyz/users", {
      email: email,
      username: user,
      password: pass,
    });
    console.log("response", resp.data);
    console.log(resp.blocked)
    window.location.href = "/profile";

  };

  return (
    <main className="main">
      <div className="content">
        <motion.div
          animate={{
            opacity: [0, 1],
            x: [-100, 0],
          }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <h1 className="textCenter">Welcome!</h1>
          <div className="vMargin flexColumn">
            <Logos />
          </div>
          <div className="flexColumn">
            <PlusButton
              border="2px solid #D680FF"
              color="transparent"
              plusColor="#D680FF"
            />
            <p>Add Profile Picture</p>
          </div>
          <InputForm
            label="Email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
          />
          <InputForm
            label="Username"
            placeholder="Username"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <InputForm
            label="Password"
            placeholder="Password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            type="password"
          />
          <div className="vMargin">
            <PrimaryButton text="Signup" onClick={HandleSignup}></PrimaryButton>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default SignUp;
