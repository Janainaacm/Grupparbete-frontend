import { CgCloseR } from "react-icons/cg";
import "./ShoppingCart.css"
import { useCartState } from '../../store/CartState'
import { CocktailInterface } from '../../pages/cocktails/components/DisplayAllCocktails'
import { RecipeInterface } from '../../Types'
import { useCocktailCartStateInterface } from '../../store/CocktailCart'
import BuyButton from './BuyButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody } from "react-bootstrap"




interface ShoppingCartProps {
    visibility: boolean
    onClose: any

};

const ShoppingCart = ({
    visibility,
    onClose,

}: ShoppingCartProps) => {

    const { cart, ClearCart, RemoveFromCart, RemoveAllFromCart, AddToCart } = useCartState();


    const { coctailCart, RemoveOneFromCocktailCart, AddToCocktailCart, ClearCocktailCart, RemoveAllFromCocktailCart } = useCocktailCartStateInterface();

    const sortedProducts = cart.sort((a, b) => a.title.localeCompare(b.title));
    const sortedCocktails = coctailCart.sort((a, b) => a.strDrink.localeCompare(b.strDrink));


    const sum = cart.reduce((n, { price }) => n + price, 0)

    const clearShoppingCart = () => {

        ClearCart();
        ClearCocktailCart();
        localStorage.clear();
    };


    const addToCocktailCart = (cocktail) => {

        AddToCocktailCart(cocktail)
        localStorage.setItem("cocktails", JSON.stringify(sortedCocktails));
    };

    const removeAllFromcocktailCart = (cocktailID) => {

        RemoveAllFromCocktailCart(cocktailID)
        localStorage.setItem("cocktails", JSON.stringify(sortedCocktails));

    }

    

    const cocktails = JSON.parse(localStorage.getItem("cocktails") || "[]")
    console.log("localStorage", cocktails)

    return (
        <div id='modal' style={{ display: visibility ? "flex" : "none", }}>

            <div className='shoppingCart'>

                <div className='header'>

                    <h2>Varukorg</h2>

                    <button className='close-button-cart' onClick={onClose}><CgCloseR size={50} /></button>


                </div>
                <div className='cart-products' style={{ display: "flex", flexDirection: "column" }}>
                    {sortedProducts.length + cocktails.length === 0 && (
                        <span className='empty-text'>Inget här :(
                        </span>
                    )}


                    <div className='product-container'>

                        {sortedProducts.map((product: RecipeInterface, index: number) => {

                            const sameIdProducts = sortedProducts.filter((p: RecipeInterface) => p._id === product._id);

                            const quantity = sameIdProducts.length;



                            if (index === sortedProducts.findIndex((p: RecipeInterface) => p._id === product._id)) {
                                return (
                                    <Card className='cart-product' key={index} >
                                        <Card.Body className="product-body">
                                            <Card.Title>{product.title.length > 10 ? product.title.substring(0, 10) + "..." : product.title}</Card.Title>
                                            <Card.Img className='product-image' src={product.imageUrl} alt={product.title} />

                                            {/* <h5>Ingredienter</h5>
                                            {product.ingredients.map((ingredient, index) => (
                                                <li key={index}>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>
                                            ))} */}
                                            <br />

                                            <p>Pris: {Number.isNaN(product.price + 0) ? product.price = 0 : product.price * quantity + " Sek"}</p>
                                            <p>Antal: {quantity}</p>

                                            <button className='remove-button' onClick={() => RemoveFromCart(product._id)}>-</button>
                                            <button className='add-button' onClick={() => AddToCart(product)}>+</button>
                                            <button className="remove-all-button" onClick={() => RemoveAllFromCart(product._id)}>Ta bort</button>

                                        </Card.Body>
                                    </Card>
                                );
                            } return null
                        })

                        }




                        {cocktails.map((cocktail: CocktailInterface, index: number) => {

                            const sameIdCocktails = cocktails.filter((c: CocktailInterface) => c.idDrink === cocktail.idDrink);

                            const cocktailQuantity = sameIdCocktails.length;

                            if (index === cocktails.findIndex((c: CocktailInterface) => c.idDrink === cocktail.idDrink)) {
                                return (
                                    <Card className='cart-product' key={index}>


                                        <Card.Body className="product-body">
                                            <Card.Title>{cocktail.strDrink.length > 10 ? cocktail.strDrink.substring(0, 10) + "..." : cocktail.strDrink}</Card.Title>
                                            {/* <Card.Title>{cocktail.strDrink}</Card.Title> */}

                                            <img className='product-image' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                                            <p>pris:</p>

                                            <p>Antal: {cocktailQuantity}</p>
                                            <div>
                                                <button className='remove-button' onClick={() => RemoveOneFromCocktailCart(cocktail.idDrink)}>-</button>

                                                <button className='add-button' onClick={() => addToCocktailCart(cocktail)}>+</button>
                                                <button className="remove-all-button" onClick={() => removeAllFromcocktailCart(cocktail.idDrink)}>Ta bort</button>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                );

                            } return null

                        })}
                    </div>
                </div>



                <div className='content-container'>
                    {sortedProducts.length + cocktails.length > 0 && <div className='checkout-clear'>
                        <h3>Totalt pris: {sum + " Sek"}</h3>
                        <br />
                        <BuyButton />
                        <button onClick={onClose}>Fortsätt handla</button>
                        <button onClick={clearShoppingCart}>Töm varukorg</button></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart
