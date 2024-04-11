import { AiFillCloseCircle } from 'react-icons/ai'
import "./ShoppingCart.css"
import { useCartState } from '../../store/CartState'
import { CocktailInterface } from '../../pages/cocktails/components/DisplayAllCocktails'
import { RecipeInterface } from '../../Types'
import { useCocktailCartStateInterface } from '../../store/CocktailCart'
import BuyButton from './BuyButton'


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
    };


    return (
        <div id='modal' style={{ display: visibility ? "block" : "none", }}>

            <div className='shoppingCart'>

                <div className='header'>

                    <h2>Varukorg</h2>

                    <button className='close-button' onClick={onClose}><AiFillCloseCircle size={30} /></button>

                </div>
                <div className='cart-products'>
                    {sortedProducts.length + sortedCocktails.length === 0 && (
                        <span className='empty-text'>Inget här :(
                        </span>
                    )}

                    

                    {sortedProducts.map((product: RecipeInterface, index: number) => {

                        const sameIdProducts = sortedProducts.filter((p: RecipeInterface) => p._id === product._id);

                        const quantity = sameIdProducts.length;


                        if (index === sortedProducts.findIndex((p: RecipeInterface) => p._id === product._id)) {
                            return (
                                <div className='cart-product' key={index}>

                                    <div className='product-info'>

                                        <h3>{product.title}</h3>
                                        <img className='product-image' src={product.imageUrl} alt={product.title} />
                                        <h5>Ingredienter</h5>
                                        {product.ingredients.map((ingredient, index) => (
                                            <li key={index}>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>

                                        ))}
                                        <br />

                                        <span className='product-price'>Pris: {Number.isNaN(product.price + 0) ? product.price = 0 : product.price * quantity + " Sek"}</span>
                                        <p>Antal: {quantity}</p>

                                    </div>

                                    <button className='remove-button' onClick={() => RemoveFromCart(product._id)}>-</button>
                                   
                                    <button className='remove-button' onClick={() => AddToCart(product)}>+</button>
                                    <button onClick={() => RemoveAllFromCart(product._id)}>Ta bort produkt</button>



                                    <br /><br />

                                </div>
                            );

                        } return null

                    })}

                    {sortedCocktails.map((cocktail: CocktailInterface, index: number) => {

                        const sameIdCocktails = sortedCocktails.filter((c: CocktailInterface) => c.idDrink === cocktail.idDrink);

                        const cocktailQuantity = sameIdCocktails.length;

                        if (index === sortedCocktails.findIndex((c: CocktailInterface) => c.idDrink === cocktail.idDrink)) {
                            return (
                                <div className='cart-product' key={index}>

                                    <div className='product-info'>

                                        <h3>{cocktail.strDrink}</h3>
                                        <img className='product-image' src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                                        <p>Kategori: {cocktail.strCategory}</p>
                                        <p>Alkohol: {cocktail.strAlcoholic === "Alcoholic" && "Ja"}{cocktail.strAlcoholic === "Non alcoholic" && "Nej"}{cocktail.strAlcoholic === "Optional alcohol" && "Valbart"}</p>

                                    </div>
                                    <p>Antal: {cocktailQuantity}</p>
                                    
                                    <button className='remove-button' onClick={() => RemoveOneFromCocktailCart(cocktail.idDrink)}>-</button>
                                    
                                    <button className='remove-button' onClick={() => AddToCocktailCart(cocktail)}>+</button>
                                    <button onClick={() => RemoveAllFromCocktailCart(cocktail.idDrink)}>Ta bort produkt</button>

                                    <br /><br />

                                </div>
                            );

                        } return null

                    })}


                    {sortedProducts.length + sortedCocktails.length > 0 && <div className='checkout-clear'>
                        <h3>Totalt pris: {sum + " Sek"}</h3>
                        <br />
                        <BuyButton/>
                        <button onClick={onClose}>Fortsätt handla</button>
                        <button onClick={clearShoppingCart}>Töm varukorg</button></div>
                    }
                </div>

            </div>
        </div>
    )
}

export default ShoppingCart
