import Container from "../../shared/Container";
import Table from "../../shared/Table";
import { TableHeader } from "../../shared/Table";
import Products from "../../shared/Table/Table.mockdata";
import Header from "../Header";
import ProductsForm from "../Products/ProductForm";
import "./App.css";
import { ProductCreator } from "../Products/ProductForm";
import { useState } from "react";

const headers: TableHeader[] = [
  { key: "name", value: "Product" },
  { key: "price", value: "Price" },
  { key: "stock", value: "Available Stock", right: true },
];

function App() {
  const [products, setProducts] = useState(Products);

  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        ...product,
      },
    ]);
  };

  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Table headers={headers} data={products} />
        <ProductsForm onSubmit={handleProductSubmit} />
      </Container>
    </div>
  );
}

export default App;
