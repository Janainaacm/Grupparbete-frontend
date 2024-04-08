import "./Card.css"
import { useNavigate } from "react-router";
import { useAPIState } from "../../store/APIState";
import { useEffect } from "react";
import { RecipeInterface } from "../../Types";
import Cart from "../../globalComponents/Cart/SCPop";

const Card = ({ item }: { item: RecipeInterface }) => {
  const { fetchRecipe } = useAPIState();
  const navigate = useNavigate();

  const handleClick = async (recipeId: string) => {
    try {
      const selectedRecipe = await fetchRecipe(recipeId);
      const encodedTitle = encodeURIComponent(selectedRecipe.title);
      navigate(`/Recept/${encodedTitle}`, {
        state: selectedRecipe,
      });
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };

  return (
    <div className="product-card">
        <div className="product-card-top">
        <img className="product-card__image" src={item.imageUrl} alt={item.title} />
        <button className="product-card__btn-wishlist">
            <Cart/>
        </button>
        </div>
        <div className="product-card-bottom" onClick={() => handleClick(item._id)}>
            <p className="product-card__brand">{item.title}</p>
            <p className="product-card__description">{item.categories}</p>
        </div>
    </div>
  );
};

export default Card;
