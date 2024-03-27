import { useCartStateInterface } from "../../store/Cart";

const RemoveFromCartButton = ({ recipe }) => {
  const removeFromCart = useCartStateInterface(state => state.RemoveFromCart);
  

  const handleClick = () => {
    removeFromCart(recipe._id);
  };
  
  return (
    <button onClick={handleClick}>Remove from Cart</button>
  );
};

export default RemoveFromCartButton;

