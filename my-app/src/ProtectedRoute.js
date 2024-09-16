import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

function ProtectedRoute({ children }) {
  const { userInfo } = useContext(UserContext);
  if (userInfo?.error=="No token provided"  || userInfo?.error=="Invalid token" ) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ProtectedRoute;