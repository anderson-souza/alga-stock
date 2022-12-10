import Container from "../../shared/Container";
import Table from "../../shared/Table";
import { TableHeader } from "../../shared/Table";
import Header from "../Header";
import ProductsForm from "../Products/ProductForm";
import "./App.css";
import { ProductCreator } from "../Products/ProductForm";
import { useEffect, useState } from "react";
import { Product } from "../../shared/Table/Table.mockdata";
import Swal from "sweetalert2";
import {
  updateSingleProduct,
  deleteSingleProduct,
} from "../../services/Product.services";
import {
  getAllProducts,
  createSingleProduct,
} from "../../services/Product.services";

const headers: TableHeader[] = [
  { key: "id", value: "#" },
  { key: "name", value: "Product" },
  { key: "price", value: "Price" },
  { key: "stock", value: "Available Stock", right: true },
];

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(
    products[0]
  );

  async function fetchData() {
    const productsData = await getAllProducts();

    setProducts(productsData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleProductSubmit = async (product: ProductCreator) => {
    try {
      await createSingleProduct(product).then(fetchData);
    } catch (e) {
      Swal.fire("oopa", String(e), "error");
    }
  };

  const handleProductUpdate = async (newProduct: Product) => {
    try {
      await updateSingleProduct(newProduct).then(fetchData);
    } catch (error) {
      Swal.fire("oopa", String(error), "error");
    }

    setUpdatingProduct(undefined);
  };

  const handleProductDetail = (product: Product) => {
    Swal.fire(
      "Detalhes do Produto",
      `O producto ${product.name}, custa R$${product.price}. E temos ${product.stock} em estoque`,
      "info"
    );
  };

  const deleteProduct = async (id: string) => {
    try {
      await deleteSingleProduct(id).then(fetchData);
    } catch (error) {
      Swal.fire("oopa", String(error), "error");
    }
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
        deleteProduct(product._id);
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
