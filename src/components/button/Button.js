import React from "react";

const Button = ({
  onClick,
  className = "",
  children,
  type = "button",
  bgColor = "primary",
  full = false,
  ...props
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      className={` px-6 py-3 mt-auto capitalize rounded-lg ${bgClassName} ${className} ${
        full ? "w-full" : ""
      }`}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
