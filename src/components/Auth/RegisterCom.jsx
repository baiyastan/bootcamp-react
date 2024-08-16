import React, { useState } from "react";
import phone from "../../assets/image/phone.png";
import "./Auth.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

function RegisterCom() {
  const [user, setUser] = useState({ email: "", password: "" });

  function handler(event) {
    const { value, name } = event.target;

    setUser({ ...user, [name]: value });
  }

  async function singUp() {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      toast.success("email success created");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const isDisabled = user.email === "" || user.password === "";

  return (
    <div className="sign">
      <div className="sign-image">
        <img src={phone} alt="" />
      </div>
      <div className="sign-text">
        <h1>Create an account</h1>
        <h3>Enter your details below</h3>
        <h4>Name</h4>
        <input
          onChange={handler}
          value={user.email}
          type="email"
          name="email"
          placeholder="email"
        />
        <h4>Email of Phone Number</h4>
        <input
          onChange={handler}
          value={user.password}
          type="password"
          name="password"
          placeholder="password"
        />
        <h4>Password</h4>
        <div className="line"></div>

        <button
          disabled={isDisabled}
          onClick={() => singUp()}
          className="brown"
        >
          Create Account
        </button>
        <button className="white"> Sign up with Google</button>
        <div className="text">
          <p>Already have account?</p>
          <h5>
            <Link to="/logIn">Log in</Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default RegisterCom;
