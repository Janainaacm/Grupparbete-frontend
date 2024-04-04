import { useCartState } from "../../store/CartState";

const BuyButton = () => {
    const clearCart = useCartState(state => state.ClearCart);

    const handleClick = () => {
      clearCart();
      window.alert("Tack för din beställning!")
    };

  return (
    <button onClick={handleClick}>Lägg beställning</button>
  )
}

export default BuyButton