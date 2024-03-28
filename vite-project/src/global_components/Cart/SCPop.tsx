import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef } from 'react';
import { Overlay, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cartLogo from "../NavBar/img/shopping-cart.png";
import ShoppingCart from './ShoppingCart';
import { useCartStateInterface } from '../../state/Cart';
import RemoveFromCartButton from './RemoveFromCartButton';
import AddToCartButton from './AddToCartButton';

function Cart() {
  const [showPopover, setShowPopover] = useState(false);
  const cartRef = useRef(null);

  const handleMouseEnter = () => {
    setShowPopover(true);
  };

  const handleMouseLeave = () => {
    setShowPopover(false);
  };

  const handlePopoverMouseEnter = () => {
    setShowPopover(true);
  };

  const handlePopoverMouseLeave = () => {
    setShowPopover(false);
  };

  const [cartsVisibility, setCartVisibility] = useState(false);
  const [productsInCart, setProductsInCart] = useState([]);

  /* const allRecipes = useGetAllRecipes(); */
  const {cart, RemoveFromCart} = useCartStateInterface();
  ;
const sortedCart = cart.sort((a, b) => a.title.localeCompare(b.title));
  return (
    <>
    <ShoppingCart visibility={cartsVisibility} products={cart} onClose={() => setCartVisibility(false)}></ShoppingCart>

      <Button variant="link" className="nav-link"> 
        <div
          ref={cartRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setCartVisibility(true)}
        >
          <img src={cartLogo} alt="Cart" style={{ maxWidth: '40px', marginRight: '5px', marginLeft: '5px' }} />
        </div>
      </Button>
      <Overlay
        show={showPopover}
        placement="bottom"
        target={cartRef.current}
      >
        <Row>
          <Col lg={12} xl={12} className="bg-white p-2 rounded shadow d-none d-lg-block"
            onMouseEnter={handlePopoverMouseEnter}
            onMouseLeave={handlePopoverMouseLeave}
          >
            
            {sortedCart.map((product, index) => {
              
    // Filtrera cart arrayen för att hitta produkter med samma ID
    const sameIdProducts = cart.filter((p) => p._id === product._id);

    // Räkna antalet produkter med samma ID
    const quantity = sameIdProducts.length;

    // Om det är första förekomsten av produkten, visa produktens titel och antal
    if (index === sortedCart.findIndex((p) => p._id === product._id)) {
        return (
            <div key={product._id}>
                <img className='product-image' src={product.imageUrl} alt={product.title} />
                {product.title} 
                {quantity > 1 && <span>({quantity})</span>}
                <RemoveFromCartButton recipe={product}></RemoveFromCartButton>
                
                <AddToCartButton recipe={product}></AddToCartButton>
            </div>
        );
    }

    // Om det inte är första förekomsten av produkten, returnera null för att undvika att produkten dupliceras
    return null;
})} 
        
        
          </Col>
        </Row>
      </Overlay>
    </>
  );
}

export default Cart; 