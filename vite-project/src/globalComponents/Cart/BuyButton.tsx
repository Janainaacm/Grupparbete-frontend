import { useCartState } from "../../store/CartState";
import { useCocktailCartStateInterface } from "../../store/CocktailCart";

const BuyButton = () => {
    const clearCart = useCartState(state => state.ClearCart);
    const  {ClearCocktailCart} = useCocktailCartStateInterface();

    const handleClick = () => {
      clearCart();
      ClearCocktailCart();
      window.alert("Tack för din beställning!")
    };

  return (
   
    <div className="buy-button" onClick={handleClick}>Lägg beställning</div>
    
  )
}

export default BuyButton