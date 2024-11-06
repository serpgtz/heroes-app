import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* Ruta pública para el login */}
          {/* <Route path="/login" element={<LoginScreen />} /> */}
          <Route
            path="/login"
            element={<PublicRoute
            isAuthenticated={user.logged} 
            element={<LoginScreen />} />}
          />

          {/* Ruta privada para las demás rutas */}
          <Route
            path="/*"
            element={<PrivateRoute 
            isAuthenticated={user.logged} 
            element={<DashboardRoutes />} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
