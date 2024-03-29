import React from "react";

import Header from "../components/Header";
import Container from "../shared/Container";
import ProductsCRUD from "../components/Products/ProductsCRUD";

const ProductsView = () => {
  return (
    <>
      <Header title="AlgaStock" />
      <Container>
        <ProductsCRUD />
      </Container>
    </>
  );
};

export default ProductsView;
