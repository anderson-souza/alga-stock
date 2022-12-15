// @ts-nocheck
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginView from "../views/LoginView";
import NotFoundView from "../views/NotFoundView";
import ProductsView from "../views/ProductsView";
import ProfileView from "../views/ProfileView";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" index element={<LoginView />} />
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductsView />}>
          <Route path=":id" />
        </Route>
        <Route path="/profile" element={<ProfileView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}
