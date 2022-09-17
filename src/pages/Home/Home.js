
import Formulario from '../../components/Formulario/Formulario';
import MenuTab from '../../components/MenuTab/MenuTab';
import Premio from '../../components/Premio/Premio';
import Slider from '../../components/Slider/Slider';
import Testimonio from '../../components/Testimonio/Testimonio';

/**
 * HomePage
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
  let arTestimonios = [
    {imagen: 'Mariana', 
    nombre: 'Mariana Franco', 
    comentario: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras'},
    {imagen: 'Josue', 
    nombre: 'Josue Montero', 
    comentario: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras'},
    {imagen: 'Miguel', 
    nombre: 'Miguel Peredo', 
    comentario: 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras'},
  ];
  let arPremios = [
    {imagen:'resort',
     titulo:'2 DIAS DE RESORT'
    },
    {imagen:'camping',
     titulo:'2 DIAS CAMPING'
    },
    {imagen:'playa',
     titulo:'2 DIAS PLAYA'
    },
    {imagen:'explorador',
     titulo:'2 DIAS EXPLORANDO'
    },
  ];
  return (
    <div>
      <Slider/>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h2 className="text-uppercase text-center">Paquetes</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <MenuTab/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <h2 className="text-uppercase text-center">Destinos populares</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img className="img-fluid" alt="Mexico" src={require(`./imagenes/mexico.jpg`)}/>
            <h3 className="text-center mt-3">Mexico</h3>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
            </p>
          </div>
          <div className="col">
            <img className="img-fluid" alt="Peru" src={require(`./imagenes/mexico.jpg`)}/>
            <h3 className="text-center mt-3">Peru</h3>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
            </p>
          </div>
          <div className="col">
            <img className="img-fluid" alt="Mexico" src={require(`./imagenes/mexico.jpg`)}/>
            <h3 className="text-center mt-3">Bolivia</h3>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
            </p>
          </div>
        </div>
      </div>
      <Formulario/>
      <div className="container my-5">
        <div className='row'>
          <div className='col text-center'>
            <h2 className='text-uppercase mb-4'>Testimonio</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Testimonio testimonio={arTestimonios[0]}/>
          </div>
          <div className="col">
            <Testimonio testimonio={arTestimonios[1]}/>
          </div>
          <div className="col">
            <Testimonio testimonio={arTestimonios[2]}/>
          </div>
        </div>
      </div>
      <div className="container text-center my-5">
        <div className="row">
          <div className="col">
            <h2 className="text-uppercase mb-4">premios</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col">
            <Premio datosPremio={arPremios[0]}/>
          </div>
          <div className="col">
            <Premio datosPremio={arPremios[1]}/>
          </div>
          <div className="col">
            <Premio datosPremio={arPremios[2]}/>
          </div>
          <div className="col">
            <Premio datosPremio={arPremios[3]}/>
          </div>
        </div>
      </div>
    </div>
  );
}
