import './assets/scss/stylesheet.scss';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ProductsPage from './pages/ProductsPage/ProductsPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
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
