export default function PaqueteDetalle({data}){
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>{data.nombre}</h1>
            <p>{data.dias}</p>
            <p>{data.cantidadPersonas} {data.precio}</p>
            <p>{data.descripcion}</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <img className="img-fluid"
              src={require(`./imagenes/paquete${data.id}-${data.imagen}-1.jpg`)}
              alt={data.nombre}
            />
          </div>
          <div className="col">
            <img className="img-fluid"
              src={require(`./imagenes/paquete${data.id}-${data.imagen}-2.jpg`)}
              alt={data.nombre}
            />
          </div>
          <div className="col">
            <img className="img-fluid"
              src={require(`./imagenes/paquete${data.id}-${data.imagen}-3.jpg`)}
              alt={data.nombre}
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <h2 className="text-uppercase">detalles</h2>
            <p>{data.detalles}</p>
          </div>
        </div>
        <div className="row my-5">
          <h2 className="text-uppercase">itinerario</h2>
          <div className="col text-center">
            <table className="table  table-bordered border-info">
              <thead>
                <tr className="table-info table-bordered border-info">
                  <th scope="col">Dias</th>
                  <th scope="col">Actividades</th>
                  <th scope="col">Incluye</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Dia 1</th>
                  <td>Lorem Ipsum has been the industry</td>
                  <td>Lorem Ipsum has been the industry</td>
                </tr>
                <tr>
                  <th>Dia 2</th>
                  <td>Lorem Ipsum has been the industry</td>
                  <td>Lorem Ipsum has been the industry</td>
                </tr>
                <tr>
                  <th>Dia 3</th>
                  <td>Lorem Ipsum has been the industry</td>
                  <td>Lorem Ipsum has been the industry</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row my-5">
          <h2 className="text-uppercase">mas detalles</h2>
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item">
                <i class="bi bi-check-lg d-inline-block"></i>There are many variations of passages of Lorem Ipsum available
              </li>
              <li className="list-group-item">
                <i class="bi bi-check-lg d-inline-block"></i>There are many variations of passages of Lorem Ipsum available
              </li>
              <li className="list-group-item">
                <i class="bi bi-check-lg d-inline-block"></i>There are many variations of passages of Lorem Ipsum available
              </li>
              <li className="list-group-item">
                <i class="bi bi-check-lg d-inline-block"></i>There are many variations of passages of Lorem Ipsum available
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item">
                <i class="bi bi-check-lg d-inline-block"></i>There are many variations of passages of Lorem Ipsum available
              </li>
              <li className="list-group-item">
                <i class="bi bi-check-lg d-inline-block"></i>There are many variations of passages of Lorem Ipsum available
              </li>
              <li className="list-group-item">
                <i class="bi bi-check-lg d-inline-block"></i>There are many variations of passages of Lorem Ipsum available
              </li>
              <li className="list-group-item">
                <i class="bi bi-check-lg d-inline-block"></i>There are many variations of passages of Lorem Ipsum available
              </li>
            </ul>
          </div>  
        </div>
        <div className="row my-5">
          <h2 className="text-uppercase">mas detalles</h2>
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item">
                <i class="bi bi-check-lg d-inline-block"></i>There are many variations of passages of Lorem Ipsum available
              </li>
              <li className="list-group-item">
                <i class="bi bi-check-lg d-inline-block"></i>There are many variations of passages of Lorem Ipsum available
              </li>
              <li className="list-group-item">
                <i class="bi bi-check-lg d-inline-block"></i>There are many variations of passages of Lorem Ipsum available
              </li>
              <li className="list-group-item">
                <i class="bi bi-check-lg d-inline-block"></i>There are many variations of passages of Lorem Ipsum available
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-group">
              <li className="list-group-item">
                <i class="bi bi-check-lg d-inline-block"></i>There are many variations of passages of Lorem Ipsum available
              </li>
              <li className="list-group-item">
                <i class="bi bi-check-lg d-inline-block"></i>There are many variations of passages of Lorem Ipsum available
              </li>
              <li className="list-group-item">
                <i class="bi bi-check-lg d-inline-block"></i>There are many variations of passages of Lorem Ipsum available
              </li>
              <li className="list-group-item">
                <i class="bi bi-check-lg d-inline-block"></i>There are many variations of passages of Lorem Ipsum available
              </li>
            </ul>
          </div>  
        </div>
      </div>

    );
}