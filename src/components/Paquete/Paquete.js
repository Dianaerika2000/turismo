import { Link } from "react-router-dom";

export default function Paquete({ datoPaquete }){
  
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-5">
          <img
            className="img-fluid"
            src={require(`./imagenes/paquete-${datoPaquete.imagen}.jpg`)}
            alt={datoPaquete.nombre}
          />
        </div>
        <div className="col">
          <h3>{datoPaquete.nombre}</h3>
          <h4>{datoPaquete.dias}</h4>
          <p className="justificado">{datoPaquete.descripcion}</p>
          <p>{datoPaquete.cantidadPersonas}</p>
          <p className="fs-3">{datoPaquete.precio}</p>
          <button type="button" class="btn btn-info">
              <Link to={`/paquetes/${datoPaquete.id}`} className="text-decoration-none text-light">Mas informacion</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
