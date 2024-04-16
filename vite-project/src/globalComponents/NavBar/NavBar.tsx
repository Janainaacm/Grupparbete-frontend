import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import burger from "../../assets/images/burger_10531010.png";
import { Nav, Navbar } from "react-bootstrap";
import ShoppingCart from "./Cart/ShoppingCart.tsx";
import { useState } from "react";
import Cart from "./Cart/SCPop.tsx";

function NavBar() {
  const [cartsVisibility, setCartVisibility] = useState(false);

  return (
    <>
      <ShoppingCart
        visibility={cartsVisibility}
        onClose={() => setCartVisibility(false)}
      ></ShoppingCart>

      <Navbar
        style={{ backgroundColor: "#efede0" }}
        variant="light"
        expand="lg"
        collapseOnSelect
      >
        <Navbar.Brand>
          <img
            src={burger}
            alt=""
            style={{
              maxWidth: "50px",
              marginRight: "10px",
              marginLeft: "10px",
            }}
          />
          ReceptKungen
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse
          className="justify-content-end"
          style={{ marginRight: "15px" }}
        >
          <Nav>
            <NavLink to="/home" className="nav-link">
              Hem
            </NavLink>
            <NavLink to="/Recept" className="nav-link" id="receptbutton">
              Recept
            </NavLink>
            <NavLink to="/Cocktails" className="nav-link" id="cocktailsbutton">
              Cocktails
            </NavLink>
            <NavLink to="/Admin" className="nav-link" id="adminbutton">
              Admin
            </NavLink>
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
