import React from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ text, type = "button" }) => {
  return (
    <button
      type={type}
      className="px-4 py-2 bg-[#f48080] text-white rounded-lg hover:bg-[#f96666] focus:outline-none"
    >
      {text}
    </button>
  );
};

export default Button;