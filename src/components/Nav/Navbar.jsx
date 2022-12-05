import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navi fixed-top">
            <div className="container-fluid">
                <Link to='/'><img src="../img/logo.png" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                         <Link to='/nosotros' className="nav-link anclas">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                         <Link to='/tratamientos' className="nav-link anclas">Tratamientos</Link>
                        </li>
                        <li className="nav-item">
                         <Link to='/dentistas' className="nav-link anclas">Dentistas</Link>
                        </li>
                        <li className="nav-item">
                         <a className="nav-link anclas">Reseñas</a>
                        </li>
                        <li className="nav-item">
                         <Link to='/contactanos' className="nav-link anclas">Contáctanos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

            
        </>
    );
}

export default Navbar;
