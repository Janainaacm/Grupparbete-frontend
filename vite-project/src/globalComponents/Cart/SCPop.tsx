import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useRef, useEffect } from 'react';
import { Overlay, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cartLogo from "../../assets/images/shopping-cart.png";
import ShoppingCart from './ShoppingCart';
import { useCartState } from '../../store/CartState';
import RemoveFromCartButton from './RemoveFromCartButton';
import AddToCartButton from './AddToCartButton';
import { useCocktailCartStateInterface } from '../../store/CocktailCart';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RecipeInterface } from '../../Types';
import { CocktailInterface } from '../../api/getCocktails';

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


  /* const allRecipes = useGetAllRecipes(); */
  const { cart } = useCartState();
  const { coctailCart, RemoveOneFromCocktailCart, AddToCocktailCart } = useCocktailCartStateInterface();
  const [cart4, setCart4] = useState<RecipeInterface[]>([]);
  const [cocktailCart4, setCocktailCart4] = useState<CocktailInterface[]>([]);

  const sortedCart = cart4.sort((a, b) => a.title.localeCompare(b.title));
  const sortedCocktails = cocktailCart4.sort((a, b) => a.strDrink.localeCompare(b.strDrink));

  if (cart.length > cart4.length) {

    setCart4(cart);

    setShowPopover(true);

    function hidePop() {
      setShowPopover(false);
      setCart4(cart);
    };

    setTimeout(hidePop, 1000);

  };

  if (cart.length < cart4.length) {
    setCart4(cart)
  };

  useEffect(() => {
    if (cart.length == cart4.length) {
      setShowPopover(false)
    }

  }, []);


  if (coctailCart.length > cocktailCart4.length) {

    setCocktailCart4(coctailCart);

    setShowPopover(true);

    function hidePop() {
      setShowPopover(false);
      setCocktailCart4(coctailCart);
    };

    setTimeout(hidePop, 1000);

  };

  if (coctailCart.length < cocktailCart4.length) {
    setCocktailCart4(coctailCart)
  };

  useEffect(() => {
    if (coctailCart.length == cocktailCart4.length) {
      setShowPopover(false)
    }

  }, []);

  return (
    <>
      <ShoppingCart visibility={cartsVisibility} onClose={() => setCartVisibility(false)}></ShoppingCart>

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
      <Overlay show={showPopover} placement="bottom" target={cartRef.current}>
        <Row>
          <Col
            lg={12}
            xl={12}
            className="bg-white p-2 rounded shadow d-none d-lg-block"
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
                  <div key={product._id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <img className='product-image' src={product.imageUrl} alt={product.title} />
                    {/* {product.title} */}
                    {quantity > 1 && <span>({quantity})</span>}
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <RemoveFromCartButton recipe={product}></RemoveFromCartButton>

                      <AddToCartButton recipe={product}></AddToCartButton>
                    </div>
                  </div>
                );
              }

              // Om det inte är första förekomsten av produkten, returnera null för att undvika att produkten dupliceras
              return null;
            })}

            {sortedCocktails.map((product, index) => {

              // Filtrera cart arrayen för att hitta produkter med samma ID
              const sameIdProducts = coctailCart.filter((p) => p.idDrink === product.idDrink);

              // Räkna antalet produkter med samma ID
              const quantity = sameIdProducts.length;

              // Om det är första förekomsten av produkten, visa produktens titel och antal
              if (index === sortedCocktails.findIndex((p) => p.idDrink === product.idDrink)) {
                return (
                  <div key={product.idDrink}>
                    <img className='product-image' src={product.strDrinkThumb} alt={product.strDrink} />
                    {/* {product.strDrink} */}
                    {quantity > 1 && <span>({quantity})</span>}
                    <button onClick={() => RemoveOneFromCocktailCart(product.idDrink)}><RiDeleteBin6Line size={20} /></button>

                    <button onClick={() => AddToCocktailCart(product)}>Add to cart</button>
                    {/* <button onClick={() => RemoveAllFromCocktailCart(product.idDrink)}>Remove all</button> */}
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
