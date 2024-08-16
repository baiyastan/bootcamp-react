import React from "react";
import phone from "../../assets/image/phone.png";
import "./Auth.scss";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

function LoginCom() {
  return (
    <div className="sign">
      <div className="sign-image">
        <img src={phone} alt="" />
      </div>
      <div className="sign-text">
        <h1>Log in to Exclusive</h1>
        <h3>Enter your details below</h3>
        <h4>Email of Phone Number</h4>
        <div className="line"></div>
        <h4>Password</h4>
        <div className="line"></div>

        <button className="brown">Log In</button>
      </div>
    </div>
  );
}

export default LoginCom;
