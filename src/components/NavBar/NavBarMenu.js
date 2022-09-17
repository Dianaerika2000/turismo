import { Link } from "react-router-dom";

export default function NavBarMenu({NavBarOptions}) {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          TRAVELNET
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {NavBarOptions.map((navBarOption, index)=>{
              return (
                <li className="nav-item" key={index}>
                  <Link className="nav-link active" to={navBarOption.to}>
                    {navBarOption.option}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
