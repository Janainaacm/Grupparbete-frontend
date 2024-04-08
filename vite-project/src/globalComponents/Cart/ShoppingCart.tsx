import { AiFillCloseCircle } from 'react-icons/ai'
import "./ShoppingCart.css"
import { useCartState } from '../../store/CartState'
import { CocktailInterface } from '../../api/getCocktails'
import { RecipeInterface } from '../../Types'
import { useCocktailCartStateInterface } from '../../store/CocktailCart'
import BuyButton from './BuyButton'

/* const URL3 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="; */




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

    console.log("sum(pris)", cart.reduce((n, { price }) => n + price, 0));

    const clearShoppingCart = () => {

        ClearCart();
        ClearCocktailCart();
    };

    /* const navigate = useNavigate();

    const seeCocktailDetails = async (idDrink: string) => {

        const response = await axios.get(`${URL3 + idDrink}`);

        if (response.status === 200) {

            const cocktail = response.data.drinks;
            const selectedCocktail = cocktail[0];
            const encodedCocktail = encodeURIComponent(selectedCocktail.strDrink);

            navigate(`/Cocktails/${encodedCocktail}`, {
                state: { cocktail: selectedCocktail },
            });

            console.log("cocktails", cocktail);
            console.log("selectedCocktail.strDrink", selectedCocktail.strDrink);

        };

    };

    const alcoholic = getAlcoholicCocktails(); */

   /*  console.log("alcoholic", alcoholic); */



    /*     console.log("alcoholicCocktails[0].strDrink" ,alcoholicCocktails[0].strDrink)
     */



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

                    {/* {cart.map((product, index) => {
                        // Filtrera cart arrayen för att hitta produkter med samma ID
                        const sameIdProducts = cart.filter((p) => p._id === product._id);

                        // Räkna antalet produkter med samma ID
                        const quantity = sameIdProducts.length;

                        // Om det är första förekomsten av produkten, visa produktens titel och antal
                        if (index === cart.findIndex((p) => p._id === product._id)) {
                            return (
                                <div key={product._id}>
                                    <img className='product-image' src={product.imageUrl} alt={product.title} />
                                    {product.title} {quantity > 1 && <span>({quantity})</span>}
                                    <RemoveFromCartButton recipe={product}></RemoveFromCartButton>
                                </div>
                            );
                        }

                        // Om det inte är första förekomsten av produkten, returnera null för att undvika att produkten dupliceras
                        return null;
                    })} */}

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


                                        {/* <span className='product-price'>Pris: {product.price * quantity} Sek</span>
                                        <br /> */}
                                        <span className='product-price'>Pris: {Number.isNaN(product.price + 0) ? product.price = 0 : product.price * quantity + " Sek"}</span>
                                        <p>Antal: {quantity}</p>



                                        {/* <p key={index}>{product.categories[0] === "Sprängmedel" &&
                                            <p>{alcoholic.map((alcotail) => (
                                                <p>{alcotail.strDrink === "Absolut Sex" &&
                                                    <p onClick={() => seeCocktailDetails(alcotail.idDrink)}>{alcotail.strDrink}</p>}
                                                </p>))}
                                            </p>}
                                        </p> */}

                                        {/* <p key={index + 1}>{product.categories[0] === "Kött" &&
                                            <p>{alcoholic.map((alcotail) => (

                                                <p>{alcotail.strDrink === "Affair" &&
                                                    <div>

                                                        <p>{alcotail.strDrink}</p>

                                                        <img className='cocktail-image' width={"90"} alt={alcotail.strDrink} src={alcotail.strDrinkThumb} onClick={() => seeCocktailDetails(alcotail.idDrink)}></img>

                                                    </div>}

                                                </p>))}

                                            </p>}

                                        </p> */}

                                        {/* <p key={index + 2}>{product.categories[0] === "Sprängmedel" &&
                                            <p>{alcoholic.map((alcotail) => (

                                                <p>{alcotail.strDrink === "Absolut Sex" &&
                                                    <div>

                                                        <p>{alcotail.strDrink}</p>

                                                        <img className='cocktail-image' width={"90"} alt={alcotail.strDrink} src={alcotail.strDrinkThumb} onClick={() => seeCocktailDetails(alcotail.idDrink)}></img>

                                                    </div>}

                                                </p>))}

                                            </p>}

                                        </p> */}

                                        

                                       {/*  <div key={index + 3}>{product.categories[0] === "Dessert" &&
                                            <div>{alcoholic.map((alcotail) => (

                                                <div>{alcotail.strDrink === "A Piece of Ass" &&
                                                    <div>
                                                        <h6>Rekommenderad Cocktail: </h6>
                                                        <p>{alcotail.strDrink}</p>

                                                        <img className='cocktail-image' width={"90"} alt={alcotail.strDrink} src={alcotail.strDrinkThumb} onClick={() => seeCocktailDetails(alcotail.idDrink)}></img>
                                                        <button className='remove-button' onClick={() => AddToCocktailCart(alcotail)}>Lägg till varukorg</button>

                                                    </div>}

                                                </div>))}

                                            </div>}

                                        </div> */}



                                        {/* <p key={index + 4}>{product.categories[0] === "Fisk" &&
                                            <p>{alcoholic.map((alcotail) => (

                                                <p>{alcotail.strDrink === "Pornstar Martini" &&
                                                    <div>

                                                        <p>{alcotail.strDrink}</p>

                                                        <img className='cocktail-image' width={"90"} alt={alcotail.strDrink} src={alcotail.strDrinkThumb} onClick={() => seeCocktailDetails(alcotail.idDrink)}></img>

                                                    </div>}

                                                </p>))}

                                            </p>}

                                        </p> */}

                                        {/* <p key={index + 5}>{product.categories[0] === "snabbmat" &&
                                            <p>{alcoholic.map((alcotail) => (

                                                <p>{alcotail.strDrink === "Quick F**K" &&
                                                    <div>

                                                        <p>{alcotail.strDrink}</p>

                                                        <img className='cocktail-image' width={"90"} alt={alcotail.strDrink} src={alcotail.strDrinkThumb} onClick={() => seeCocktailDetails(alcotail.idDrink)}></img>

                                                    </div>}

                                                </p>))}

                                            </p>}

                                        </p> */}

                                        {/* <p key={index + 2}>{product.categories[0] === "snabbmat" &&
                                            <p>{alcoholic.map((alcotail) => (
                                                <p>{alcotail.strDrink === "After sex" &&
                                                    <p onClick={() => seeCocktailDetails(alcotail.idDrink)}>{alcotail.strDrink}</p>}
                                                </p>))}
                                            </p>}
                                        </p> */}

                                    </div>



                                    {/* <button className='remove-button' onClick={() => onProductRemove(product._id)}>-</button> */}
                                    <button className='remove-button' onClick={() => RemoveFromCart(product._id)}>-</button>
                                    {/* <button className='remove-button' onClick={() => onProductAdd(product)}>+</button> */}
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

                                        {/* <p>Alkohol: {cocktail.strAlcoholic === "Alcoholic" ? "Ja" : "Nej"}</p> */}


                                    </div>
                                    <p>Antal: {cocktailQuantity}</p>
                                    {/* <button className='remove-button' onClick={() => onCocktailRemove(cocktail.idDrink)}>-</button> */}
                                    <button className='remove-button' onClick={() => RemoveOneFromCocktailCart(cocktail.idDrink)}>-</button>
                                    {/* <button className='remove-button' onClick={() => onCocktailAdd(cocktail)}>+</button> */}
                                    <button className='remove-button' onClick={() => AddToCocktailCart(cocktail)}>+</button>
                                    <button onClick={() => RemoveAllFromCocktailCart(cocktail.idDrink)}>Ta bort produkt</button>

                                    <br /><br />

                                </div>
                            );

                        } return null

                    })}

                    {/* {products.map((product, index) => (
                        <div className='cart-product' key={index}>

                            <div className='product-info'>

                                <h3>{product.title}</h3>
                                <img className='product-image' src={product.imageUrl} alt={product.title} />
                                <h5>Ingredienter</h5>
                                {product.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient.amount} {ingredient.unit} {ingredient.name}</li>

                                ))}


                                <span className='product-price'>Pris i Sek</span>

                            </div>

                            <select
                                className='count'
                                value={product.count}
                                onChange={(event) => {
                                    onQuantityChange(product._id, event.target.value);
                                }}>
                                {
                                    [...Array(10).keys()].map(number => {
                                        const num = number + 1;
                                        return <option value={num} key={num}>{num}</option>
                                    })
                                }
                            </select>
                            <button className='remove-button' onClick={() => onProductRemove(product._id)}><RiDeleteBin6Line size={20} /></button>

                            <br /><br />

                        </div>
                    ))} */}


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
