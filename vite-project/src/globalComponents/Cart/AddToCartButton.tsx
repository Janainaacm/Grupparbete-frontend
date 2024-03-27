import { useEffect } from "react";
import { useCartStateInterface } from "../../store/Cart";

const AddToCartButton = ({ recipe }) => {
  const addToCart = useCartStateInterface(state => state.AddToCart);
  const cart = useCartStateInterface(state => state.cart);

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
