import './assets/scss/stylesheet.scss';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ProductsPage from './pages/ProductsPage/ProductsPage';

let navBarOptions = [
  { option: 'Home', to: '/' },
  { option: 'Login', to: '/login' },
  { option: 'products', to: '/products' },
];
function App() {
  return (
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
  );
}

export default App;
