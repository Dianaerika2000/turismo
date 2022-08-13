import Button from "../../components/Button/Button";
import Patito from "../../components/Patito/Patito";
export default function Home () {
  return (
    <div className="container">
      <div className="row">
        <div className="col my-3">
          <Button />
          <Patito />
          <div>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                      aria-expanded="false">
                Dropdown button
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}