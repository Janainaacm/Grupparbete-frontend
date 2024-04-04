import { useLocation, NavLink } from 'react-router-dom';
import SearchBarComponent from './SearchBarComponent';
import "bootstrap/dist/css/bootstrap.css"
import burger from "../assets/images/burger_10531010.png";
import { Nav, Navbar, Button } from "react-bootstrap"
import ShoppingCart from './Cart/ShoppingCart.tsx';
import { useState } from 'react';
import Cart from "./Cart/SCPop.tsx"



function NavBar() {
    const location = useLocation();

    const [cartsVisibility, setCartVisibility] = useState(false);

    return (
        <>

            <ShoppingCart visibility={cartsVisibility} onClose={() => setCartVisibility(false)}></ShoppingCart>



<<<<<<< HEAD
        <Navbar style={{backgroundColor: '#F5F5DC'}} 
        variant='light'
        expand="lg" collapseOnSelect>
            <Navbar.Brand>
                <img src={burger} alt="" style={{ maxWidth: '50px', marginRight: '10px', marginLeft: "10px"}}/>
                ReceptKungen
            </Navbar.Brand>
=======
            <Navbar style={{ backgroundColor: '#b5b58f' }}
                variant='dark'
                expand="lg" collapseOnSelect>
                <Navbar.Brand>
                    <img src={burger} alt="" style={{ maxWidth: '50px', marginRight: '10px', marginLeft: "10px" }} />
                    ReceptKungen
                </Navbar.Brand>
>>>>>>> main

                {location.pathname !== '/' && location.pathname !== '/home' && (
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <SearchBarComponent />
                    </div>
                )}

                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end' style={{ marginRight: '15px' }}>
                    <Nav>
                        <NavLink to="/home" className="nav-link">Hem</NavLink>
                        <NavLink to="/Recept" className="nav-link">Recept</NavLink>
                        <NavLink to="/Cocktails" className="nav-link">Cocktails</NavLink>
                        <NavLink to="/Admin" className="nav-link">Admin</NavLink>
                        <Cart />

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}

export default NavBar;