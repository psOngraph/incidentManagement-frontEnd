import React from "react";

const InputBox = ({
  id = "",
  value,
  onChange,
  type = "text",
  placeholder,
  className = "",
}) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    />
  );
};

export default InputBox;
