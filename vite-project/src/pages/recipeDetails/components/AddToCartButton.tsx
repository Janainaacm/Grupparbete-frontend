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
    className="add-to-cart-button"
    onClick={handleClick}>Add to Cart</button>
    
  
  )
  
}
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
