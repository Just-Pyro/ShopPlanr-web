import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({
  type = "button",
  text = "",
  className = "",
  to = "/",
}) => {
  return (
    <Link
      to={to}
      type={type}
      className={`bg-accent primary-button ${className}`}
    >
      {text}
    </Link>
  );
};

export default PrimaryButton;
