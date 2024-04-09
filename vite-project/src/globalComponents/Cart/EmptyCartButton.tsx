import { useCartState } from "../../store/CartState";

const EmptyCartButton = () => {
  const clearCart = useCartState(state => state.ClearCart);

  const handleClick = () => {
    clearCart();
  };


  return (
    <button 
    className="empty-cart-button"
    onClick={handleClick}>Empty Cart</button>
  );
};

export default EmptyCartButton;

