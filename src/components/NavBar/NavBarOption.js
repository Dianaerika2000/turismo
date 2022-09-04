import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authAction from '../../redux/auth/actions';
export default function NavBarOption({ navBarOption }) {
  const { logout } = authAction;
  const isLoggedIn = useSelector((state) => state.Auth.idToken);
  let location = useLocation();
  const dispatch = useDispatch();
  let isActive = '';
  if (navBarOption.to === location.pathname) {
    isActive = 'active';
  }
  if (typeof navBarOption.displayIfLoggedIn === 'boolean') {
    if (navBarOption.displayIfLoggedIn && !isLoggedIn) {
      return <></>;
    }
    if (isLoggedIn && !navBarOption.displayIfLoggedIn) {
      return <></>;
    }
  }
  if (navBarOption.to === '/logout') {
    return (
      <li
        onClick={() => {
          dispatch(logout());
        }}
        className="nav-item"
      >
        <span className="nav-link">{navBarOption.option}</span>
      </li>
    );
  }
  return (
    <li className="nav-item">
      <Link className={'nav-link ' + isActive} to={navBarOption.to}>
        {navBarOption.option}
      </Link>
    </li>
  );
}
