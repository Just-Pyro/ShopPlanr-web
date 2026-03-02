import React from "react";

const Input = ({
  type = "text",
  name,
  placeholder = "",
  className = "",
  required = false,
  onChange: handleInputChange,
  value: inputValue,
}) => {
  return (
    <input
      className={`inputfield placeholder:main-text main-text ${className}`}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={(e) => handleInputChange(e.target.value)}
      value={inputValue}
    />
  );
};

export default Input;
