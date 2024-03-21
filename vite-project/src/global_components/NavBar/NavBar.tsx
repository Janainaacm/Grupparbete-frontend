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
        expand="lg" collapseOnSelect>
            <Navbar.Brand>
                <img src={burger} alt="" style={{ maxWidth: '50px', marginRight: '10px', marginLeft: "10px"}}/>
                ReceptKungen
            </Navbar.Brand>

            {location.pathname !== '/' && location.pathname !== '/home' && (
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <SearchBarComponent />
                    </div>
                )}

            <Navbar.Toggle/>
            <Navbar.Collapse className='justify-content-end' style={{ marginRight: '15px'}}>
            <Nav>
                <NavLink to="/home" className="nav-link">Hem</NavLink>
                <NavLink to="/Recept" className="nav-link">Recept</NavLink>
                <NavLink to="/Cocktails" className="nav-link">Cocktails</NavLink>
                <Nav.Link>Login</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

        </>
    )
}

export default NavBar;