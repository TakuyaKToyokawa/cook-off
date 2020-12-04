import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import InputForm from "../../comps/InputForm";
import Logos from "../../comps/Logos";
import PrimaryButton from "../../comps/PrimaryButton";
import axios from "axios";
import { motion } from "framer-motion";
import { login } from "../../lib/auth";
import AppContext from "../../context/AppContext";

function Login2() {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const appContext = useContext(AppContext);


  useEffect(() => {
    if (appContext.isAuthenticated) {
      router.push("/event"); // redirect if you're already logged in
    }
  }, []);

  const HandleLogin = async (email, pass) => {
    console.log("logging in", email, pass);
    var resp = await axios.post("https://cookoff.lazysphynx.xyz/users", {
      email: email,
      password: pass,
    });
    console.log("response", resp.data);
  };

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
          <h1 className="textCenter">Welcome back!</h1>
          <div className="vMargin flexColumn">
            <Logos />
          </div>
          <div className="flexColumn"></div>
          <InputForm
            label="Email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputForm
            label="Password"
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <div className="vMargin">
            <PrimaryButton text="Login" onClick={() => {
              setLoading(true);
              login(email, pass)
                .then((res) => {
                  setLoading(false);
                  // set authed User in global context to update header/app state
                  appContext.setUser(res.data.user);
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

export default Login2;
