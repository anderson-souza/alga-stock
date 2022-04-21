import React from "react";
import Button from "../Button";
import Header from "../Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <div className="Container">
        <Button
          content="Teste"
          onClick={() => alert("Bora")}
          appendIcon={<h1>Bora</h1>}
        >
          Macarroni
        </Button>
      </div>
    </div>
  );
}

export default App;
