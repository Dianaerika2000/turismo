import { Link } from "react-router-dom";

export default function Footer({data}){
  return (
    <footer>
      <div className="container text-center py-5">
        <div className="row justify-content-center">
          <div className="col-10">
            <h3 className="text-uppercase">{data.nombre}</h3>
            <p>{data.slogan}</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-5">
            <div className="row">
              <div className="col">
              <a href={data.facebook} target="_blank"><i className='bi bi-facebook'></i></a>
              </div>
              <div className="col">
                <a href={data.twitter} target="_blank"><i class="bi bi-twitter"></i></a>
              </div>
              <div className="col">
                <a href={data.instagram} target="_blank"><i class="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
    
}