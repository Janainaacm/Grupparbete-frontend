import { useCartState } from "../../../store/CartState";
import { useCocktailCartStateInterface } from "../../../store/CocktailCartState";

const BuyButton = () => {
  const { clearCart } = useCartState();
  const { ClearCocktailCart } = useCocktailCartStateInterface();

  const handleClick = () => {
    clearCart();
    ClearCocktailCart();
    window.alert("Tack för din beställning!");
  };

  return (
    <div className="buy-button" onClick={handleClick}>
      Lägg beställning
    </div>
  );
};

export default BuyButton;
