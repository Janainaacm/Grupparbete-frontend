import { useCartState } from "../../store/CartState";
import { useCocktailCartStateInterface } from "../../store/CockrailCart";

const BuyButton = () => {
    const clearCart = useCartState(state => state.ClearCart);
    const  {ClearCocktailCart} = useCocktailCartStateInterface();

    const handleClick = () => {
      clearCart();
      ClearCocktailCart();
      window.alert("Tack för din beställning!")
    };

  return (
    <button onClick={handleClick}>Lägg beställning</button>
  )
}

export default BuyButton