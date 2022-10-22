import React, { useState } from "react";
import Button from "../../shared/Button";
import Form from "../../shared/Form";
import Input from "../../shared/Input";

const initialFormState = {
  name: "",
  price: "",
  stock: "",
};

export interface ProductCreator {
  name: string;
  price: number;
  stock: number;
}

declare interface ProductFormProps {
  onSubmit: (product: ProductCreator) => void;
}

const ProductsForm: React.FC<ProductFormProps> = (props) => {
  const [form, setForm] = useState(initialFormState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleFormSubmit = () => {
    const productDto = {
      name: String(form.name),
      price: parseFloat(form.price),
      stock: Number(form.stock),
    };

    props.onSubmit(productDto);
    setForm(initialFormState);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Input
        onChange={handleInputChange}
        value={form.name}
        name="name"
        label="Name"
        placeholder="Cookie"
      />
      <Input
        onChange={handleInputChange}
        name="price"
        label="Price"
        value={form.price}
        placeholder="1.25"
        type="number"
        step="0.01"
        min="0"
      />
      <Input
        onChange={handleInputChange}
        name="stock"
        label="Stock"
        value={form.stock}
        placeholder="Cookie"
        type="number"
        min="0"
      />
      <Button>Submit</Button>
    </Form>
  );
};

export default ProductsForm;
