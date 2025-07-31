import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStores from "./stores/auth";

export default function PrivateRoute({ children }) {
  const token = useAuthStores((state) => state.token);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}