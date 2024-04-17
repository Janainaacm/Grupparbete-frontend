import { useRecipeCartState } from "../../../store/RecipeCartState";
import { useCocktailCartState } from "../../../store/CocktailCartState";

const BuyButton = () => {
  const { clearCart } = useRecipeCartState();
  const { clearCocktailCart: ClearCocktailCart } = useCocktailCartState();

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
