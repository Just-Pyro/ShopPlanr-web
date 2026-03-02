import React from "react";
import Form from "../components/Form";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import RegLogLink from "../components/RegLogLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <Form>
        <Link
          to="/"
          className="absolute text-accent top-7 left-7 text-lg font-extrabold"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <Input type="text" placeholder="First Name" className="mt-7" />
        <Input type="text" placeholder="Last Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <PrimaryButton text="Register" className="mt-6" />
        <RegLogLink type="register" />
      </Form>
    </div>
  );
};

export default Register;
