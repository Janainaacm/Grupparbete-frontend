import "../RecipeDetailsPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useCartState } from "../../../store/CartState";

const AddToCartButton = ({ recipe, recommendation, checkCategory }) => {
  const addToCart = useCartState((state) => state.AddToCart);

  const handleClick = () => {
    addToCart(recipe);
    recommendation();
    checkCategory();
  };
  return (
    
    <button
      onClick={handleClick}
      className="submit-addtocart-button"
      id="addrecipetocart"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
