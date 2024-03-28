import { useLocation, NavLink} from 'react-router-dom';
import SearchBarComponent from '../SearchBarComponent'; 
import "bootstrap/dist/css/bootstrap.css"
import {Nav, Navbar} from "react-bootstrap"
import burger from "./img/burger_10531010.png";
import ShoppingCart from '../Cart/ShoppingCart';
import { useState } from 'react';
import { GiShoppingBag } from 'react-icons/gi';
import { useCartStateInterface } from '../../state/Cart';


function NavBar() {
    const location = useLocation();
    const [cartsVisibility, setCartVisibility] = useState(false);
    
    const {cart, RemoveFromCart, AddToCart} = useCartStateInterface();
    
    

    const sortedCart = cart.sort((a,b) => a.title.localeCompare(b.title))

    return (
        <>
        <Navbar style={{backgroundColor: '#b5b58f'}} 
        variant='dark'
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
            <ShoppingCart visibility={cartsVisibility} products={sortedCart} onClose={() => setCartVisibility(false)} onProductRemove={RemoveFromCart} onProductAdd={AddToCart}></ShoppingCart>

                <button onClick={() => setCartVisibility(true)}><GiShoppingBag size={24}></GiShoppingBag></button>
                
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