import React, { useState, useContext } from "react";
import PlusButton from "../../comps/PlusButton";
import InputForm from "../../comps/InputForm";
import Logos from "../../comps/Logos";
import PrimaryButton from "../../comps/PrimaryButton";
import { motion } from "framer-motion";
import { registerUser } from "../../lib/auth";
import AppContext from "../../context/AppContext";

function SignUp() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [user, setUser] = useState();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const appContext = useContext(AppContext);

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
            <PrimaryButton text="Signup" onClick={() => {
              setLoading(true);
              registerUser(user, email, pass)
                .then((res) => {
                  // set authed user in global context object
                  appContext.setUser(res.data.user);
                  setLoading(false);
                })
                .catch((error) => {
                  setError(error.response.data);
                  setLoading(false);
                });
            }}></PrimaryButton>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default SignUp;
