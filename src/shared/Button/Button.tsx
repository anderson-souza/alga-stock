import React, { ReactNode } from "react";
import "./Button.css";

declare interface ButtonProps {
  content?: string;
  onClick?: () => void;
  appendIcon?: ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className="AppButton" onClick={props.onClick}>
      {props.children || props.content}
      {props.appendIcon}
    </button>
  );
};

export default Button;
