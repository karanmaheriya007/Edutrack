import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // or check localStorage/sessionStorage if you store token there

  return token ? children : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;