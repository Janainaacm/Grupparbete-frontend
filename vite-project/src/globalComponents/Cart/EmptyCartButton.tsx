import { useCartStateInterface } from "../../store/Cart";

const EmptyCartButton = () => {
  const clearCart = useCartStateInterface(state => state.ClearCart);

  const handleClick = () => {
    clearCart();
  };


  return (
    <button onClick={handleClick}>Empty Cart</button>
  );
};

export default EmptyCartButton;

