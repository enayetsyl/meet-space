import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../redux/store";

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const token = sessionStorage.getItem('token');
  const location = useLocation();
  const user = useSelector((state: RootState) => state.auth.user);

  // If no token is found, redirect to login and store the current location
  if (!token) {
    return <Navigate to={`/login?redirect=${location.pathname}`} />;
  }

  // Check if the user is an admin
  if (user?.role !== 'admin') {
    return <Navigate to="/unauthorized" />; // Or redirect to a "not authorized" page
  }

  // Otherwise, render the child components (i.e., the protected route)
  return children;
};

export default AdminRoute;
