import React, { useState } from "react";
import "./input.css";

declare interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = (props) => {
  const [street, setStreet] = useState("");

  return (
    <div className="AppInput">
      <label>
        <span>{props.label}</span>
        <input
          {...props}
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Input;
