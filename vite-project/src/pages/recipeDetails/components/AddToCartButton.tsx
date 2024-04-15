import { useEffect } from "react";
import { useCartState } from "../../../store/CartState";
import "../RecipeDetailsPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AddToCartButton = ({ recipe, recommendation, checkCategory }) => {
  const addToCart = useCartState(state => state.AddToCart);
  const cart = useCartState(state => state.cart);

  useEffect(() => {
    if(cart.length>0){
    console.log("Updated Cart:", cart);
    console.log("Cart Contents:", cart.map(recipe => recipe.title));
  }
  }, [cart]);

  const handleClick = () => {
    addToCart(recipe);
    recommendation();
    checkCategory()

  };
  return (
    <button onClick={handleClick} className="submit-addtocart-button" id="addrecipetocart">Add to Cart</button>
  )
}

export default AddToCartButton
