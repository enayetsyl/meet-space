import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = sessionStorage.getItem('token');
  const location = useLocation();

  // If no token is found, redirect to login and store the current location
  if (!token) {
    return <Navigate to={`/login?redirect=${location.pathname}`} />;
  }

  // Otherwise, render the child components (i.e., the protected route)
  return children;
};

export default PrivateRoute;
