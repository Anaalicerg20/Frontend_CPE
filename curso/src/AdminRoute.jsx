import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import useAuthStores from "./stores/auth";

export default function AdminRoute({ children }) { //children é oq ta dentro do AdimRoute

    const token = useAuthStores((state) => state.token);

    if (!token) {
      return <Navigate to="/"/>;
    }

    const usuario = useAuthStores((state) => state.usuario);

    console.log(usuario);

    if (!usuario?.admin) {
       return <Navigate to="/" />
    }
  
    return children;
}

