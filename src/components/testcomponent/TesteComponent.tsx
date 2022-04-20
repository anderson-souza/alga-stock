import React, { useState } from "react";
import "./TesteComponent.css";

const TesteComponent = (props: { name: String }) => {
  const [age, setAge] = useState(21);

  return (
    <div className="TestComponent">
      Olá, {props.name}, {age}
      <button onClick={() => setAge(age + 1)}>Clicai</button>
    </div>
  );
};

export default TesteComponent;
