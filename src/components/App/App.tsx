import React from "react";
import Button from "../../shared/Button";
import Container from "../../shared/Container";
import Header from "../Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Button content="Teste" onClick={() => alert("Bora")}>
          Macarroni
        </Button>
      </Container>
    </div>
  );
}

export default App;
