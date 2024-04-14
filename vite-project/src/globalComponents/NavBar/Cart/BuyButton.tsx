import { useCartState } from "../../../store/CartState";
import { useCocktailCartStateInterface } from "../../../store/CocktailCartState";

const BuyButton = () => {
    const {clearCart} = useCartState()
    const  {ClearCocktailCart} = useCocktailCartStateInterface();
    //const clearCart = useCartState(state => state.ClearCart);

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