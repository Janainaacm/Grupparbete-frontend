import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCocktailCartState } from "../../../store/CocktailCartState";
import { useCocktailAPIState } from "../../../store/CocktailAPIState";
import { Button, Collapse } from "react-bootstrap";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const CocktailDetails = () => {
  const {
    cocktailID,
    cocktailList,
    cocktailToRender,
    updateCocktailID,
    fetchCocktailByID,
  } = useCocktailAPIState();
  const { AddToCocktailCart } = useCocktailCartState();
  const { randomCocktailList, setRandomCocktailList } = useCocktailAPIState();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [toggleDropDown, setToggleDropDown] = useState(<FaAngleDown />);

  useEffect(() => {
    const savedCocktailID = localStorage.getItem("cocktailID");
    if (savedCocktailID) {
      fetchCocktailByID(savedCocktailID);
    } else {
      fetchCocktailByID(cocktailID);
    }
  }, []);

  useEffect(() => {
    const savedCocktailID = localStorage.getItem("cocktailID");
    if (savedCocktailID) {
      fetchCocktailByID(savedCocktailID);
    } else {
      fetchCocktailByID(cocktailID);
    }
  }, [cocktailID]);

  useEffect(() => {
    excludeCurrentCocktail();
  }, [cocktailToRender]);

  const handleDropDownFocus = () => {
    setOpen(!open);
    setToggleDropDown(open ? <FaAngleDown /> : <FaAngleUp />);
  };

  function shuffle<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  const excludeCurrentCocktail = () => {
    const filteredCocktails = cocktailList.filter(
      (item) => item.idDrink !== cocktailToRender.idDrink
    );
    const cocktailsToShow = shuffle(filteredCocktails).slice(0, 6);
    setRandomCocktailList(cocktailsToShow);
  };

  const linkToCocktail = (cocktailID: string, cocktailName: string) => {
    updateCocktailID(cocktailID);
    navigate(`/Cocktails/${cocktailName}`);
  };

  return (
    <div className="recipe-details-container">
      <div className="recipe-details-header">
        <div className="recipe-details-header-grid-wrapper">
          <div className="title-side-header">
            <div className="title-side-header-content">
              <div
                onClick={() => navigate("/Cocktails")}
                className="reciric-list-all-recipes-button"
                style={{ fontSize: "12px" }}
              >
                <span className="noselect">COCKTAILS</span>
              </div>
              <h1 className="title-header">{cocktailToRender.strDrink}</h1>
              <div className="categories-header-div">
                <p className="categories-header">
                  {cocktailToRender.strCategory}
                </p>
                <p className="price-header">{cocktailToRender.strGlass}</p>
              </div>
              <div>
                <button
                  className="submit-rating-button-div"
                  onClick={() => AddToCocktailCart(cocktailToRender)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="picture-side-header">
            <div className="header-img">
              <img
                className="content-img"
                src={cocktailToRender.strDrinkThumb}
                alt={cocktailToRender.strDrink}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="recipe-details-info">
        <div className="recipe-details-grid-wrapper">
          <div className="recipe-details-main-grid">
            <div className="recipe-details-top-info">
              {cocktailToRender.strAlcoholic}
            </div>

            <div className="ingredients-container">
              <h3 className="ingredients-title">Ingredienser</h3>
              <div className="ingredients-list-group">
                <div className="ingredients-list-grid">
                  <p className="ingredient-name">
                    {cocktailToRender.strIngredient1}
                  </p>
                  <p className="ingredient-name">
                    {cocktailToRender.strIngredient2}
                  </p>
                  <p className="ingredient-name">
                    {cocktailToRender.strIngredient3}
                  </p>
                  <p className="ingredient-name">
                    {cocktailToRender.strIngredient4}
                  </p>
                  <p className="ingredient-name">
                    {cocktailToRender.strIngredient5}
                  </p>
                  <p className="ingredient-name">
                    {cocktailToRender.strIngredient6}
                  </p>
                  <p className="ingredient-name">
                    {cocktailToRender.strIngredient7}
                  </p>
                  <p className="ingredient-name">
                    {cocktailToRender.strIngredient8}
                  </p>
                  <p className="ingredient-name">
                    {cocktailToRender.strIngredient9}
                  </p>
                  <p className="ingredient-name">
                    {cocktailToRender.strIngredient10}
                  </p>
                </div>
              </div>
            </div>

            <div
              className="recipe-details-side-grid"
              style={{ marginRight: "0px" }}
            >
              <div className="reviews-container" style={{ width: "100%" }}>
                <Button
                  id="toggle-reviews-button-rd"
                  onClick={() => handleDropDownFocus()}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  <h3 className="reviews-title">
                    Instruktioner {toggleDropDown}
                  </h3>
                  {""}
                </Button>
                <Collapse in={open}>
                  <div id="reviews-inside-collapse-rd">
                    <div className="instructions-list-item">
                      <p className="instruction-title">
                        {cocktailToRender.strInstructions}
                      </p>
                    </div>{" "}
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recirc-list-container">
        <h4 className="reciric-list-title">Mer från Receptkungen</h4>
        <div className="reciric-list-all-recipes-button-div">
          <div
            onClick={() => navigate("/Cocktails")}
            className="reciric-list-all-recipes-button"
            style={{ fontSize: "12px" }}
          >
            <span className="noselect">COCKTAILS</span>
          </div>
        </div>
        <div className="reciric-list">
          <ul className="reciric-list-ul">
            {randomCocktailList.map((item, index) => (
              <li key={index} className="reciric-list-item">
                <div
                  onClick={() => linkToCocktail(item.idDrink, item.strDrink)}
                  className="receric-list-title-a"
                >
                  <span className="receric-list-item-image">
                    <img
                      className="receric-list-img"
                      src={item.strDrinkThumb}
                      alt={item.strDrink}
                    />
                  </span>
                  <div className="receric-list-overlay">
                    <div className="receric-list-overlay-grid">
                      <h4 className="receric-list-overlay-title">
                        {item.strDrink}
                      </h4>
                      <p className="receric-list-overlay-categories">
                        {item.strCategory}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CocktailDetails;
