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
import Swal from "sweetalert2";

const headers: TableHeader[] = [
  { key: "id", value: "#" },
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

  const handleProductDetail = (product: Product) => {
    Swal.fire(
      "Detalhes do Produto",
      `O producto ${product.name}, custa R$${product.price}. E temos ${product.stock} em estoque`,
      "info"
    );
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleProductDelete = (product: Product) => {
    Swal.fire({
      title: "Tem certeza que deseja deletar o produto?",
      text: "Esta ação é irreversível!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#09f",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(product.id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product);
  };

  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Table
          headers={headers}
          data={products}
          enableActions
          onDelete={handleProductDelete}
          onDetail={handleProductDetail}
          onEdit={handleProductEdit}
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
