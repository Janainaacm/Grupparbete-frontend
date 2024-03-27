import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef } from 'react';
import { Overlay, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cart from "../NavBar/img/shopping-cart.png";
import useGetAllRecipes from '../../api/getAllRecipes';
import ShoppingCart from './ShoppingCart';

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

  const allRecipes = useGetAllRecipes();

  return (
    <>
    <ShoppingCart visibility={cartsVisibility} products={allRecipes} onClose={() => setCartVisibility(false)}></ShoppingCart>

      <Button variant="link" className="nav-link"> 
        <div
          ref={cartRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setCartVisibility(true)}
        >
          <img src={cart} alt="Cart" style={{ maxWidth: '40px', marginRight: '5px', marginLeft: '5px' }} />
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
            {allRecipes.map((product) => (
        <div key={product._id}>{product.title}</div>
        ))}
          </Col>
        </Row>
      </Overlay>
    </>
  );
}

export default Cart; 