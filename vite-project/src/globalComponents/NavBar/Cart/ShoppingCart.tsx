import "bootstrap/dist/css/bootstrap.min.css";
import "./ShoppingCart.css";
import { CgCloseR } from "react-icons/cg";
import { useCartState } from "../../../store/CartState";
import { RecipeInterface, CocktailInterface } from "../../../Types";
import { useCocktailCartStateInterface } from "../../../store/CocktailCartState";
import BuyButton from "./BuyButton";
import { Card } from "react-bootstrap";
import { useCocktailAPIState } from "../../../store/CocktailAPIState";
import { useNavigate } from "react-router-dom";
import { useAPIState } from "../../../store/APIState";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

interface ShoppingCartProps {
  visibility: boolean;
  onClose: any;
}

const ShoppingCart = ({ visibility, onClose }: ShoppingCartProps) => {
  const { cart, clearCart, RemoveFromCart, RemoveAllFromCart, AddToCart } =
    useCartState();
  const { setRecipeIDState } = useAPIState();

  const {
    coctailCart,
    RemoveOneFromCocktailCart,
    AddToCocktailCart,
    RemoveAllFromCocktailCart,
  } = useCocktailCartStateInterface();
  const navigate = useNavigate();
  const { updateCocktailID } = useCocktailAPIState();

  const sortedProducts = cart.sort((a, b) => a.title.localeCompare(b.title));
  const sortedCocktails = coctailCart.sort((a, b) =>
    a.strDrink.localeCompare(b.strDrink)
  );

  const sum = cart.reduce((n, { price }) => n + price, 0);

  const displayCocktailDetails = async (
    cocktailID: string,
    cocktailName: string
  ) => {
    onClose();
    updateCocktailID(cocktailID);
    navigate(`/Cocktails`);

    function redirectCocktailDetails() {
      navigate(`/Cocktails/${cocktailName}`);
    }
    // setTimeout used to navigate to selected cocktail.
    setTimeout(redirectCocktailDetails, 1);
  };

  const seeRecipeDetails = async (recipeId: string, recipeName: string) => {
    onClose();
    setRecipeIDState(recipeId);
    navigate(`/Recept`);

    function redirectRecipeDetails() {
      navigate(`/Recept/${recipeName}`);
    }

    setTimeout(redirectRecipeDetails, 1);
  };

  return (
    <div id="modal" style={{ display: visibility ? "flex" : "none" }}>
      <div className="shoppingCart">
        <div className="header">
          <h2>Varukorg</h2>

          <button className="close-button-cart" onClick={onClose}>
            <CgCloseR size={50} />
          </button>
        </div>
        <div
          className="cart-products"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {sortedProducts.length + sortedCocktails.length === 0 && (
            <span className="empty-text">Inget här :(</span>
          )}

          <div className="product-container">
            {sortedProducts.map((product: RecipeInterface, index: number) => {
              const sameIdProducts = sortedProducts.filter(
                (p: RecipeInterface) => p._id === product._id
              );

              const quantity = sameIdProducts.length;

              if (
                index ===
                sortedProducts.findIndex(
                  (p: RecipeInterface) => p._id === product._id
                )
              ) {
                return (
                  <Card className="cart-product" key={index}>
                    <Card.Body className="product-body">
                      <Card.Img
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          seeRecipeDetails(product._id, product.title)
                        }
                        className="product-image"
                        src={product.imageUrl}
                        alt={product.title}
                      />
                      <Card.Title>
                        {product.title.length > 30
                          ? product.title.split(" ")[0]
                          : product.title}
                      </Card.Title>

                      <br />

                      <div className="cart-amount">
                        <span
                          className="minusbutton"
                          onClick={() => RemoveFromCart(product._id)}
                        >
                          <CiCircleMinus />
                        </span>
                        <span className="quantity">{quantity}</span>
                        <span
                          className="plusbutton"
                          id="increasequantitybutton"
                          onClick={() => AddToCart(product)}
                        >
                          <CiCirclePlus />
                        </span>
                      </div>

                      <div className="price">
                        {Number.isNaN(product.price + 0)
                          ? (product.price = 0)
                          : product.price * quantity + " Sek"}
                      </div>
                      <span
                        onClick={() => RemoveAllFromCart(product._id)}
                        className="delete-button"
                      >
                        <MdDeleteForever />
                      </span>
                    </Card.Body>
                  </Card>
                );
              }
              return null;
            })}

            {sortedCocktails.map(
              (cocktail: CocktailInterface, index: number) => {
                const sameIdCocktails = sortedCocktails.filter(
                  (c: CocktailInterface) => c.idDrink === cocktail.idDrink
                );

                const cocktailQuantity = sameIdCocktails.length;

                if (
                  index ===
                  sortedCocktails.findIndex(
                    (c: CocktailInterface) => c.idDrink === cocktail.idDrink
                  )
                ) {
                  return (
                    <Card className="cart-product" key={index}>
                      <Card.Body className="product-body">
                        <img
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            displayCocktailDetails(
                              cocktail.idDrink,
                              cocktail.strDrink
                            )
                          }
                          className="product-image"
                          src={cocktail.strDrinkThumb}
                          alt={cocktail.strDrink}
                        />

                        <Card.Title>
                          {cocktail.strDrink.length > 15
                            ? cocktail.strDrink.substring(0, 10) + "..."
                            : cocktail.strDrink}
                        </Card.Title>

                        <div className="cart-amount">
                          <span
                            className="minusbutton"
                            onClick={() =>
                              RemoveOneFromCocktailCart(cocktail.idDrink)
                            }
                          >
                            <CiCircleMinus />
                          </span>
                          <span className="quantity">{cocktailQuantity}</span>
                          <span
                            className="plusbutton"
                            onClick={() => AddToCocktailCart(cocktail)}
                          >
                            <CiCirclePlus />
                          </span>
                        </div>

                        <div className="price">{0 + " Sek"}</div>
                        <span
                          onClick={() =>
                            RemoveAllFromCocktailCart(cocktail.idDrink)
                          }
                          className="delete-button"
                        >
                          <MdDeleteForever />
                        </span>
                      </Card.Body>
                    </Card>
                  );
                }
                return null;
              }
            )}
          </div>
        </div>

        <div className="content-container">
          {sortedProducts.length + sortedCocktails.length > 0 && (
            <div className="checkout-clear">
              <h3>Totalt pris: {sum + " Sek"}</h3>
              <BuyButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
