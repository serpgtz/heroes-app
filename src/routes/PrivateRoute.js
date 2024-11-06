import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ isAuthenticated, element }) => {


    const {pathname} = useLocation();

    localStorage.setItem("lastPath", pathname)
    
    console.log(pathname)

  // Redirige al login si no está autenticado, o renderiza el elemento si está autenticado.
  return isAuthenticated ? element : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  element: PropTypes.element.isRequired,
};
