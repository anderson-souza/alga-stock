import React from "react";
import LoginForm from "../components/Authentication/LoginForm";
import background from "../static/background.jpeg";

const LoginView = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${background})`,
      }}
    >
      <div style={{ minWidth: 420 }}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginView;
