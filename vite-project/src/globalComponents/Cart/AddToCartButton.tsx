import { useEffect } from "react";
import { useCartState } from "../../store/CartState";

const AddToCartButton = ({ recipe }) => {
  const addToCart = useCartState(state => state.AddToCart);
  const cart = useCartState(state => state.cart);

  useEffect(() => {
    console.log("Updated Cart:", cart);
    console.log("Cart Contents:", cart.map(recipe => recipe.title));
  }, [cart]);

  const handleClick = () => {
    addToCart(recipe);

  };
  return (
    <button onClick={handleClick}>Add to Cart</button>
  )
}

export default AddToCartButton
