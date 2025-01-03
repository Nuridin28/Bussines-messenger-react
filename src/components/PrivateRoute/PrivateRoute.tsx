import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  return localStorage.getItem("isLoggedIn") === "true" ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};
export default PrivateRoute;
