import React from "react";
import { Link } from "react-router-dom";

const PrimaryButton = ({
  type = "button",
  text = "",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={`bg-accent primary-button ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
