import React, { useEffect, useRef, useState } from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import RegLogLink from "../components/RegLogLink";
import FormLogo from "../assets/ShopPlanr - nobg.png";
import axios from "axios";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("Input state updated:", input);
  }, [input]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted with input:", input);
    // const response = await axios.post("")
  };

  return (
    <>
      <div className="flex justify-center items-center h-full w-full">
        <form onSubmit={handleFormSubmit} className="logreg-form">
          <img
            src={FormLogo}
            alt="ShopPlanr Logo"
            className="w-80 mx-auto mb-5"
          />
          <input
            className="inputfield placeholder:main-text main-text"
            type="email"
            name="email"
            placeholder="Email"
            onInput={(e) =>
              setInput((prev) => ({ ...prev, email: e.target.value }))
            }
            value={input.email}
            required
          />
          <input
            className="inputfield placeholder:main-text main-text"
            type="password"
            name="password"
            placeholder="Password"
            onInput={(e) =>
              setInput((prev) => ({ ...prev, password: e.target.value }))
            }
            value={input.password}
            required
          />
          <PrimaryButton
            to="/list"
            type="submit"
            text="Login"
            className="mt-6"
          />
          <RegLogLink type="login" />
        </form>
      </div>
    </>
  );
};

export default Login;
