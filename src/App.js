import './assets/scss/stylesheet.scss';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import Boot from './redux/boot';
import MyProfilePage from './pages/Admin/MyProfilePage/MyProfilePage';
import PrivateRoute from './utility/PrivateRoute';

const App = () => {
  // options
  let navBarOptions = {
    main: [
      { option: 'Home', to: '/' },

      { option: 'Products', to: '/products' },
    ],
    right: [
      { option: 'My Profile', to: '/my-profile', displayIfLoggedIn: true },
      { option: 'Login', to: '/login', displayIfLoggedIn: false },
      { option: 'Logout', to: '/logout', displayIfLoggedIn: true },
    ],
  };
  return (
    <BrowserRouter>
      <NavBar navBarOptions={navBarOptions} />
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route
            path="my-profile"
            element={
              <PrivateRoute>
                <MyProfilePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
Boot()
  .then(() => App())
  .catch((error) => console.error(error));

export default App;
