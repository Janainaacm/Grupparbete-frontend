import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useCocktailAPIState } from '../store/CocktailAPI';



const FilterCocktailComponent = () => {
  const navigate = useNavigate();

    const {
        cocktailList,
        updateCocktailID,
        fetchCocktailCategories,
        fetchCocktails,
        cocktailCategories,
        filterCocktailByCategory,
        filteredCocktailArray,
        clearFilteredCocktailArray,

    } = useCocktailAPIState();

    const displayCocktailDetails = async (cocktailID: string, cocktailName: string) => {
        updateCocktailID(cocktailID)
        navigate(`/Cocktails/${cocktailName}`);
    };


    useEffect(() => {
        fetchCocktailCategories();
        fetchCocktails();
    }, []);

    const letterButtons = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "Y", "Z" ];


    return (
        <div >
            FilterCocktailComponent
            <div className='category-bubbles2'>
                <button className='button-1' onClick={() => filterCocktailByCategory("/filter.php?a=alcoholic")} >Alcoholic</button>
                <button className='button-1' onClick={() => filterCocktailByCategory("/filter.php?a=non_alcoholic")} >Non Alcoholic</button>
                <button className='button-1' onClick={() => filterCocktailByCategory("/filter.php?a=optional_alcohol")} >Optional alcohol</button>
                <br />
                <br />

                {cocktailCategories.map((category, index) => (

                    <button key={index} className='button-1' onClick={() => filterCocktailByCategory("/filter.php?c=" + category.strCategory)} >{category.strCategory}</button>

                ))}

                <br />
                <br />

                {letterButtons.map((letter, index) => (

                    <button key={index} className='button-1' onClick={() => filterCocktailByCategory("/search.php?f=" + letter)}>{letter}</button>

                ))}
                <br />

                <button className='button-1' onClick={() => fetchCocktails()} >Återställ</button>
            </div>

            <br />


            <div style={{ display: "flex", flexWrap: "wrap" }}>

                {cocktailList.map((cocktail, index) => {



                    if (true) {

                        return (
                            <div key={index} style={{ display: "flex", flexWrap: "wrap" }}>
                                <div

                                    style={{
                                        width: "200px",
                                        marginBottom: "20px",
                                        marginRight: "20px",
                                        textAlign: "center",
                                    }}
                                >
                                    <button
                                        onClick={() => displayCocktailDetails(cocktail.idDrink, cocktail.strDrink)}
                                        style={{
                                            border: "none",
                                            background: "none",
                                            padding: "0",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <img
                                            src={cocktail.strDrinkThumb}
                                            alt={cocktail.strDrink}
                                            style={{ width: "100px", height: "100px", marginBottom: "5px" }}
                                        />
                                    </button>
                                    <div>{cocktail.strDrink}</div>
                                </div>
                            </div>
                        );



                    } return null




                })}
            </div>

        </div>
    )
}

export default FilterCocktailComponent
