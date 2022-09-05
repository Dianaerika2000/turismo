import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authAction from '../../redux/auth/actions';
import { useNavigate } from 'react-router-dom';

/**
 * Login Page
 * @returns {JSX.Element}
 * @constructor
 */
export default function LoginPage() {
  const { login } = authAction;
  let navigate = useNavigate();
  // redux
  const isLoggedIn = useSelector((state) => state.Auth.idToken);
  const dispatch = useDispatch();
  // states
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  // effects
  useEffect(() => {
    if (isLoggedIn) {
      return navigate('/');
    }
  }, [isLoggedIn, navigate]);
  // handlers
  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      email: userInfo.email,
      password: userInfo.password,
    };
    if (user) {
      dispatch(login(user));
    } else {
      dispatch(login());
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 my-3">
          <div className="Login">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                />
                <div className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={userInfo.password}
                  onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
