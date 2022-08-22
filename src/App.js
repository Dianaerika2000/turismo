import './assets/scss/stylesheet.scss';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import NewsPage from './pages/NewsPage/NewsPage';
import PlanPage from './pages/PlanPage/PlanPage';

let navBarOptions = [
  { option: 'Home', to: '/' },
  { option: 'Login', to: '/login' },
  { option: 'Products', to: '/products' },
  { option: 'Articles', to: '/article' },
  { option: 'News', to: '/news' },
  { option: 'Plans', to: '/plans' },
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
          <Route path="article" element={<ArticlePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="plans" element={<PlanPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
