import { Navigate, useLocation } from 'react-router-dom';
import { PrivateRouteProps } from '../types';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const PrivateRoute =  ({ children, role }: PrivateRouteProps)  => {
  const token = sessionStorage.getItem('token');
  const location = useLocation();
  const user = useSelector((state: RootState) => state.auth.user);

  // If no token is found, redirect to login and store the current location
  if (!token) {
    return <Navigate to={`/login?redirect=${location.pathname}`} />;
  }

  if (role && user?.role !== role) {
    return <Navigate to="/unauthorized" />; // Or redirect to a "not authorized" page
  }
  // Otherwise, render the child components (i.e., the protected route)
  return children;
};

export default PrivateRoute;
