import { useLocation, NavLink} from 'react-router-dom';
import SearchBarComponent from '../SearchBarComponent'; 
import "bootstrap/dist/css/bootstrap.css"
import {Nav, Navbar} from "react-bootstrap"
import burger from "./img/burger_10531010.png";

function NavBar() {
    const location = useLocation();

    return (
        <>
        <Navbar bg='dark' variant='dark'
        sticky='top' expand="lg" collapseOnSelect>
            <Navbar.Brand>
                <img src={burger} alt="" style={{ maxWidth: '50px', marginRight: '10px', marginLeft: "10px"}}/>
                ReceptKungen
            </Navbar.Brand>

            <Navbar.Toggle/>
            <Navbar.Collapse>
            <Nav>
                <NavLink to="/home" className="nav-link">Hem</NavLink>
                <NavLink to="/Recept" className="nav-link">Recept</NavLink>
                <Nav.Link>Cocktails</Nav.Link>
                <Nav.Link>Login</Nav.Link>
            </Nav>


            {location.pathname !== '/' && location.pathname !== '/home' && (
        <div>
            <SearchBarComponent />
        </div>
)}

            </Navbar.Collapse>
        </Navbar>

        </>
    )
}

export default NavBar;