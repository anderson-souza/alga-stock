import React from "react";
import Button from "../../shared/Button";
import Container from "../../shared/Container";
import Input from "../../shared/Input";
import Table from "../../shared/Table";
import Header from "../Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Table></Table>
      </Container>
    </div>
  );
}

export default App;
