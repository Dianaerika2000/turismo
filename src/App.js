import './assets/scss/stylesheet.scss';
import Boot from './redux/boot';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './utility/PrivateRoute';
import NavBarMenu from './components/NavBar/NavBarMenu';
import Home from './pages/Home/Home';

// eslint-disable-next-line no-unused-vars
import axiosInterceptor from './utility/axios-token-interceptor';
import PaquetesPage from './pages/PaquetesPage/PaquetesPage';
import Footer from './components/Footer/Footer';
import PaqueteDetallesPage from './pages/PaqueteDetallesPage/PaqueteDetallesPage';

/**
 * Main App component
 * @returns {JSX.Element}
 * @constructor
 */
const App = () => {
  // options
  let arNavBarOption = [
    {option: 'Home', to: '/'},
    {option: 'Acerca de nosotros', to: '/nosotros'},
    {option: 'Paquetes', to: '/paquetes'},
    {option: 'Destinos', to: '/destinos'},
    {option: 'Preguntas frecuentes', to: '/preguntas'},
    {option: 'Contacto', to: '/contacto'},
  ];
  let arDatosFooter = [
    {
     nombre: 'Travelnet',
     slogan: 'Somos Travelnet, una empresa reconocida en Pueblo Libre. En nuestra agencia de viajes ofrecemos la venta de pasajes aéreos y terrestres,  nacionales como internacionales, servicios de cruceros, paquetes nacionales e internacionales, seguros  de viajes, entre otros servicios.',
     facebook: 'https://www.facebook.com/AmaszonasLineaAerea',
     twitter: 'https://twitter.com/amaszonas/',
     instagram: 'https://www.instagram.com/amaszonasoficial/', 
    },
  ];
  return (
    <BrowserRouter>
      <NavBarMenu NavBarOptions={arNavBarOption}/>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/paquetes" element={<PaquetesPage/>}/>
          <Route path="/paquetes">
            <Route path=":paqueteId" element={<PaqueteDetallesPage/>}/>
          </Route>
        </Routes>
      </div>
      <Footer data={arDatosFooter[0]}/>
    </BrowserRouter>
  );
};
Boot()
  .then(() => App())
  .catch((error) => console.error(error));

export default App;
