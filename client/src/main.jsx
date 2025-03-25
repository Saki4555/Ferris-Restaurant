import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {  RouterProvider } from "react-router-dom";
import router from "./Routes/Route.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import {  HelmetProvider } from "react-helmet-async";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProvider } from "./Providers/UserProvider.jsx";
import CartProvider from "./Providers/CartProvider.jsx";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        {" "}
        <AuthProvider>
         <UserProvider> <CartProvider><RouterProvider router={router} /></CartProvider></UserProvider>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
    
  </React.StrictMode>
);
