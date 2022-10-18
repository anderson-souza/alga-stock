import React from "react";
import Button from "../../shared/Button";
import Container from "../../shared/Container";
import Form from "../../shared/Form";
import Input from "../../shared/Input";
import Table from "../../shared/Table";
import { TableHeader } from "../../shared/Table";
import Products from "../../shared/Table/Table.mockdata";
import Header from "../Header";
import "./App.css";

const headers: TableHeader[] = [
  { key: "name", value: "Product" },
  { key: "price", value: "Price" },
  { key: "stock", value: "Available Stock", right: true },
];

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Table headers={headers} data={Products} />
        <Form title="Product Form" onSubmit={console.log}>
          <Input label="Name" placeholder="Cookie" />
          <Input
            label="Price"
            placeholder="1.25"
            type="number"
            step="0.01"
            min="0"
          />
          <Input label="Stock" placeholder="Cookie" type="number" min="0" />
          <Button>Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
