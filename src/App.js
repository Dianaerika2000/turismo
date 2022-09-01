import './assets/scss/stylesheet.scss';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Boot from './redux/boot';

let navBarOptions = [
  { option: 'Home', to: '/' },
  { option: 'Login', to: '/login' },
  { option: 'Products', to: '/products' },
];
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar navBarOptions={navBarOptions} />
        <div className="App">
          <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="products" element={<ProductsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};
Boot()
  .then(() => App())
  .catch((error) => console.error(error));

export default App;
