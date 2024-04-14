import { useEffect } from "react";
import { useCartState } from "../../store/CartState";

const AddToCartButton = ({ recipe, recommendation }) => {
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

  };
  return (
    <button onClick={handleClick} id="addrecipetocart">Add to Cart</button>
  )
}

export default AddToCartButton
