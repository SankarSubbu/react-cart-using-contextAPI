import React from "react";
import { ReactDOM } from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./components/cart";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
