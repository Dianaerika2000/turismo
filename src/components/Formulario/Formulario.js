export default function Formulario(){
    return (
        <div className="container my-5">
          <div className="row">
            <div className="col">
              <h2 className="text-uppercase text-center">Contactanos</h2>
            </div>
          </div>
          <div className="row my-2">
            <div className="col">
              <input type="text" className="form-control" placeholder="Nombre" aria-label="First name"/>
            </div>
            <div className="col">
              <input type="email" className="form-control" placeholder="Correo Electronico" aria-label="Last name"/>
            </div>
          </div>
          <div className="row my-2">
            <div className="col">
              <input type="number" className="form-control" placeholder="Telefono" aria-label="First name"/>
            </div>
            <div className="col">
              <input type="email" className="form-control" placeholder="Ciudad" aria-label="Last name"/>
            </div>
          </div>
          <div className="row my-2">
            <div className="col">
             <textarea className="form-control" name="" id="" cols="30" rows="10" placeholder="Consulta"></textarea>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col text-center">
              <button type="submit" className="btn btn-info text-light">Enviar</button>
            </div>
          </div>
        </div>
    );
}