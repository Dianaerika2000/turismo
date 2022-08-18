import { Link } from 'react-router-dom';
export default function NavBar({navBarOptions}) {  
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">Navbar</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navBarOptions.map((navBarOption, index) => {
              return (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" to={navBarOption.to}>
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
