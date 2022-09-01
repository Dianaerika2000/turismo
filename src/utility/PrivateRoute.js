import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = useSelector((state) => state.Auth.idToken);
  if (isLoggedIn) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
}
