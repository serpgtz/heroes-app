import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({ isAuthenticated, element }) => {
  // Redirige al login si no está autenticado, o renderiza el elemento si está autenticado.
  return !isAuthenticated ? element : <Navigate to="/" />;
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  element: PropTypes.element.isRequired,
};
