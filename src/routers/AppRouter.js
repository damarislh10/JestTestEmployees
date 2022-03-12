import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import { Registro } from "../components/Registro";
import { DashboardRoutes } from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRouter from "./PublicRouter";

export const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const auth = getAuth(); // saber user que esta logueado info usuario
    onAuthStateChanged(auth, (user) => {
      // saber si se autentico
      if (user?.uid) {
        // si existe
        setIsLoggedIn(true); // sesion activa o no diga que esta logueado
      } else {
        setIsLoggedIn(false); // no logueado
      }

      setChecking(false);
    });
  }, []);

  if (checking) {
    return <h1>Espere...</h1>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouter isAuthenticated={isLoggedIn}>
              <Login />
            </PublicRouter>
          }
        />
        <Route
          path="/registro"
          element={
            <PublicRouter isAuthenticated={isLoggedIn}>
              <Registro />
            </PublicRouter>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute isAuthenticated={isLoggedIn}>
              <DashboardRoutes />
            </PrivateRoute>
          }
        />  
      </Routes>
    </BrowserRouter>
  );
};

