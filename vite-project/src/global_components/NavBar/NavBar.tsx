import { useLocation, NavLink } from 'react-router-dom';
import SearchBarComponent from '../SearchBarComponent';
import "bootstrap/dist/css/bootstrap.css"
import { Nav, Navbar } from "react-bootstrap"
import burger from "./img/burger_10531010.png";
import ShoppingCart from '../Cart/ShoppingCart';
import { useState } from 'react';
import { GiShoppingBag } from 'react-icons/gi';
import { useCartStateInterface } from '../../state/Cart';
import { useCocktailCartStateInterface } from '../../state/CocktailCart';


function NavBar() {
    const location = useLocation();
    const [cartsVisibility, setCartVisibility] = useState(false);

    const { cart, RemoveFromCart, AddToCart } = useCartStateInterface();
    const { coctailCart, RemoveOneFromCocktailCart, AddToCocktailCart } = useCocktailCartStateInterface();

    const sortedProducts = cart.sort((a, b) => a.title.localeCompare(b.title))
    const sortedCocktails = coctailCart.sort((a, b) => a.strDrink.localeCompare(b.strDrink))


    return (
        <>
            <Navbar style={{ backgroundColor: '#b5b58f' }}
                variant='dark'
                expand="lg" collapseOnSelect>
                <Navbar.Brand>
                    <img src={burger} alt="" style={{ maxWidth: '50px', marginRight: '10px', marginLeft: "10px" }} />
                    ReceptKungen
                </Navbar.Brand>

                {location.pathname !== '/' && location.pathname !== '/home' && (
                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                        <SearchBarComponent />
                    </div>
                )}

                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end' style={{ marginRight: '15px' }}>
                    <Nav>
                        <ShoppingCart
                            visibility={cartsVisibility}
                            products={sortedProducts}
                            cocktails={sortedCocktails}
                            onClose={() => setCartVisibility(false)}>

                        </ShoppingCart>

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