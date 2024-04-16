import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCocktailAPIState } from "../../../store/CocktailAPIState";
import { LiaCartPlusSolid } from "react-icons/lia";
import { CocktailInterface } from "../../../Types";
import { useCocktailCartStateInterface } from "../../../store/CocktailCartState";

const DisplayAllCocktails = () => {
  const navigate = useNavigate();
  const { AddToCocktailCart } = useCocktailCartStateInterface()

  const {
    cocktailList,
    cocktailCategories,
    updateCocktailID,
    fetchCocktailCategories,
    fetchCocktails,
    filterCocktailByCategory,
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

  const handleClick = async (  cocktailID: string,
    cocktailName: string
  ) => {
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
    <div className="page-filter-function">
     {/* <FilterFunction
        setShowRecipes={setShowRecipes}
      /> */}
    </div>
    <div className="recipe-list">
      {cocktailList.map((item) => (
        <div className="recipe-box" key={item.idDrink}>
          <img
            className="recipe-card-img"
            src={item.strDrinkThumb}
            alt={item.strDrink}
          />
          <div className="recipe-info-container">
            <p className="recipe-categories">
              {item.strCategory}
            </p>
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
    // <div>
    //   {/* <div>
    //     <button
    //       className="button-1"
    //       onClick={() => filterCocktailByCategory("/filter.php?a=alcoholic")}
    //     >
    //       Alcoholic
    //     </button>
    //     <button
    //       className="button-1"
    //       onClick={() =>
    //         filterCocktailByCategory("/filter.php?a=non_alcoholic")
    //       }
    //     >
    //       Non Alcoholic
    //     </button>
    //     <button
    //       className="button-1"
    //       onClick={() =>
    //         filterCocktailByCategory("/filter.php?a=optional_alcohol")
    //       }
    //     >
    //       Optional alcohol
    //     </button>
    //     <br />
    //     <br />

    //     {cocktailCategories.map((category, index) => (
    //       <button
    //         key={index}
    //         className="button-1"
    //         onClick={() =>
    //           filterCocktailByCategory("/filter.php?c=" + category.strCategory)
    //         }
    //       >
    //         {category.strCategory}
    //       </button>
    //     ))}

    //     <br />
    //     <br />

    //     {letterButtons.map((letter, index) => (
    //       <button
    //         key={index}
    //         className="button-1"
    //         onClick={() => filterCocktailByCategory("/search.php?f=" + letter)}
    //       >
    //         {letter}
    //       </button>
    //     ))}
    //     <br />
    //     <br />

    //     <button className="button-1" onClick={() => fetchCocktails()}>
    //       Visa alla
    //     </button>
    //   </div>
    //   <br /> */}
    //   <div style={{ display: "flex", flexWrap: "wrap" }}>
    //     {cocktailList.map((cocktail, index) => {
    //       if (true) {
    //         return (
    //           <div key={index} style={{ display: "flex", flexWrap: "wrap" }}>
    //             <div
    //               style={{
    //                 width: "200px",
    //                 marginBottom: "20px",
    //                 marginRight: "20px",
    //                 textAlign: "center",
    //               }}
    //             >
    //               <button
    //                 onClick={() =>
    //                   displayCocktailDetails(
    //                     cocktail.idDrink,
    //                     cocktail.strDrink
    //                   )
    //                 }
    //                 style={{
    //                   border: "none",
    //                   background: "none",
    //                   padding: "0",
    //                   cursor: "pointer",
    //                 }}
    //               >
    //                 <img
    //                   src={cocktail.strDrinkThumb}
    //                   alt={cocktail.strDrink}
    //                   style={{
    //                     width: "100px",
    //                     height: "100px",
    //                     marginBottom: "5px",
    //                   }}
    //                 />
    //               </button>
    //               <div>{cocktail.strDrink}</div>
    //             </div>
    //           </div>
    //         );
    //       }
    //     })}
    //   </div>
    // </div>
  );
};

export default DisplayAllCocktails;


