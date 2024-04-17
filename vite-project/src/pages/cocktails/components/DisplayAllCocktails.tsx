import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCocktailAPIState } from "../../../store/CocktailAPIState";
import { LiaCartPlusSolid } from "react-icons/lia";
import { CocktailInterface } from "../../../Types";
import { useCocktailCartState } from "../../../store/CocktailCartState";

const DisplayAllCocktails = () => {
  const navigate = useNavigate();
  const { addToCocktailCart: AddToCocktailCart } = useCocktailCartState();
  const {
    cocktailList,
    updateCocktailID,
    fetchCocktailCategories,
    fetchCocktails,
  } = useCocktailAPIState();

  useEffect(() => {
    fetchCocktailCategories();
    fetchCocktails();
  }, []);

  useEffect(() => {
    if (cocktailList.length == 0) {
      fetchCocktails();
    }
    fetchCocktails();
  }, []);

  const handleClick = async (cocktailID: string, cocktailName: string) => {
    updateCocktailID(cocktailID);
    navigate(`/Cocktails/${cocktailName}`);
  };

  const handleClickAddToCart = (drink: CocktailInterface) => {
    AddToCocktailCart(drink);
  };

  return (
    <div className="container">
      <div className="page-headline">
        <h1 className="page-title">Cocktails</h1>
      </div>
      <div className="recipe-list">
        {cocktailList.map((item, index) => (
          <div className="recipe-box" key={index}>
            <img
              className="recipe-card-img"
              src={item.strDrinkThumb}
              alt={item.strDrink}
            />
            <div className="recipe-info-container">
              <p className="recipe-categories">{item.strCategory}</p>
              <h4
                className="recipe-title"
                onClick={() => handleClick(item.idDrink, item.strDrink)}
              >
                {item.strDrink}
              </h4>
              <p className="recipe-description">{item.strAlcoholic}</p>

              <button className="recipe-card-buy-btn">
                <LiaCartPlusSolid onClick={() => handleClickAddToCart(item)} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAllCocktails;
