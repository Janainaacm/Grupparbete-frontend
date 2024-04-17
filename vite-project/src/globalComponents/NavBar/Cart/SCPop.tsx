import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useRef, useEffect } from "react";
import { Overlay, Row, Col, Button, Badge } from "react-bootstrap";
import cartLogo from "../../../assets/images/shopping-cart.png";
import ShoppingCart from "./ShoppingCart";
import { useRecipeCartState } from "../../../store/RecipeCartState";
import { useCocktailCartState } from "../../../store/CocktailCartState";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { CocktailInterface, RecipeInterface } from "../../../Types";


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

  const [cart4, setCart4] = useState<RecipeInterface[]>([]);
  const [cocktailCart4, setCocktailCart4] = useState<CocktailInterface[]>([]);
  const { recipeCart, RemoveFromCart, AddToCart } = useRecipeCartState();
  const { cocktailCart, RemoveOneFromCocktailCart, AddToCocktailCart } =
    useCocktailCartState();

  const sortedCart = cart4.sort((a, b) => a.title.localeCompare(b.title));
  const sortedCocktails = cocktailCart4.sort((a, b) =>
    a.strDrink.localeCompare(b.strDrink)
  );

  if (recipeCart.length > cart4.length) {
    setCart4(recipeCart);

    setShowPopover(true);

    function hidePop() {
      setShowPopover(false);
      setCart4(recipeCart);
    }

    setTimeout(hidePop, 1000);
  }

  if (recipeCart.length < cart4.length) {
    setCart4(recipeCart);
  }

  useEffect(() => {
    if (recipeCart.length == cart4.length) {
      setShowPopover(false);
    }
  }, []);

  if (cocktailCart.length > cocktailCart4.length) {
    setCocktailCart4(cocktailCart);

    setShowPopover(true);

    function hidePop() {
      setShowPopover(false);
      setCocktailCart4(cocktailCart);
    }

    setTimeout(hidePop, 1000);
  }

  if (cocktailCart.length < cocktailCart4.length) {
    setCocktailCart4(cocktailCart);
  }

  useEffect(() => {
    if (cocktailCart.length == cocktailCart4.length) {
      setShowPopover(false);
    }
  }, []);

  return (
    <>
      <ShoppingCart
        visibility={cartsVisibility}
        onClose={() => setCartVisibility(false)}
      ></ShoppingCart>

      <Button variant="link" className="nav-link" id="cartbutton">
        <div
          ref={cartRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => setCartVisibility(true)}
        >
          {" "}
          <div>
            <div
              style={{ position: "relative", maxWidth: "45px", margin: "auto" }}
            >
              <img
                src={cartLogo}
                alt="Cart"
                style={{
                  maxWidth: "40px",
                  marginRight: "5px",
                  marginLeft: "5px",
                }}
              />
              <Badge
                style={{
                  display: recipeCart.length + cocktailCart4.length === 0 && "none",
                  position: "absolute",
                  top: -7,
                  right: 0,
                }}
              >
                {recipeCart.length + cocktailCart4.length}
              </Badge>
            </div>
          </div>
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
              const sameIdProducts = recipeCart.filter((p) => p._id === product._id);

              // Räkna antalet produkter med samma ID
              const quantity = sameIdProducts.length;

              // Om det är första förekomsten av produkten, visa produktens titel och antal
              if (
                index === sortedCart.findIndex((p) => p._id === product._id)
              ) {
                return (
                  <div
                    key={product._id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <img
                      style={{ width: "80px" }}
                      src={product.imageUrl}
                      alt={product.title}
                    />

                    <div className="cart-amount" style={{ marginLeft: "0px" }}>
                      <span
                        className="minusbutton"
                        onClick={() => RemoveFromCart(product._id)}
                      >
                        <CiCircleMinus />
                      </span>
                      <span className="quantity">({quantity})</span>
                      <span
                        className="plusbutton"
                        id="increasequantitybutton"
                        onClick={() => AddToCart(product)}
                      >
                        <CiCirclePlus />
                      </span>
                    </div>
                  </div>
                );
              }

              // Om det inte är första förekomsten av produkten, returnera null för att undvika att produkten dupliceras
              return null;
            })}

            {sortedCocktails.map((product, index) => {
              // Filtrera cart arrayen för att hitta produkter med samma ID
              const sameIdProducts = cocktailCart.filter(
                (p) => p.idDrink === product.idDrink
              );

              // Räkna antalet produkter med samma ID
              const quantity = sameIdProducts.length;

              // Om det är första förekomsten av produkten, visa produktens titel och antal
              if (
                index ===
                sortedCocktails.findIndex((p) => p.idDrink === product.idDrink)
              ) {
                return (
                  <div
                    key={product.idDrink}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <img
                      style={{ width: "80px" }}
                      src={product.strDrinkThumb}
                      alt={product.strDrink}
                    />

                    <div className="cart-amount" style={{ marginLeft: "0px" }}>
                      <span
                        className="minusbutton"
                        onClick={() =>
                          RemoveOneFromCocktailCart(product.idDrink)
                        }
                      >
                        <CiCircleMinus />
                      </span>
                      <span className="quantity">({quantity})</span>

                      <span
                        className="plusbutton"
                        id="increasequantitybutton"
                        onClick={() => AddToCocktailCart(product)}
                      >
                        <CiCirclePlus />
                      </span>
                    </div>
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
