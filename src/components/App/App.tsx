import Container from "../../shared/Container";
import Table from "../../shared/Table";
import { TableHeader } from "../../shared/Table";
import Products from "../../shared/Table/Table.mockdata";
import Header from "../Header";
import ProductsForm from "../Products/ProductForm";
import "./App.css";
import { ProductCreator } from "../Products/ProductForm";
import { useState } from "react";
import { Product } from "../../shared/Table/Table.mockdata";

const headers: TableHeader[] = [
  { key: "name", value: "Product" },
  { key: "price", value: "Price" },
  { key: "stock", value: "Available Stock", right: true },
];

function App() {
  const [products, setProducts] = useState(Products);
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(
    products[0]
  );

  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        ...product,
      },
    ]);
  };

  const handleProductUpdate = (newProduct: Product) => {
    setProducts(
      products.map((product) =>
        product.id === newProduct.id ? newProduct : product
      )
    );

    setUpdatingProduct(undefined);
  };

  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Table
          headers={headers}
          data={products}
          enableActions
          onDelete={console.log}
          onDetail={console.log}
          onEdit={console.log}
        />
        <ProductsForm
          onSubmit={handleProductSubmit}
          form={updatingProduct}
          onUpdate={handleProductUpdate}
        />
      </Container>
    </div>
  );
}

export default App;
