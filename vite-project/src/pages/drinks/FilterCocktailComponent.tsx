import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { CocktailInterface } from '../../api/getCocktails';


const URL3 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";




const FilterCocktailComponent = () => {

    const navigate = useNavigate();

    const seeCocktailDetails = async (idDrink: string) => {



        const response = await axios.get(`${URL3 + idDrink}`);

        if (response.status === 200) {

            const cocktail = response.data.drinks;
            const selectedCocktail = cocktail[0];
            const encodedCocktail = encodeURIComponent(selectedCocktail.strDrink);

            navigate(`/Cocktails/${encodedCocktail}`, {
                state: { cocktail: selectedCocktail },
            });

            console.log("selectedCocktail.strDrink", selectedCocktail.strDrink);

        };



    };

    const [filteredCocktailArray, setFilteredCocktailArray] = useState<CocktailInterface[]>([]);

    const URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?";
    const URL2 = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";

    const filterByAlcohol = async (alcohol: string) => {

        const response = await axios.get(`${URL + alcohol}`);

        if (response.status === 200) {
            setFilteredCocktailArray(response.data.drinks);
            console.log("response.data.drinks", response.data.drinks);
        };


    };

    const filterByCategory = async (category: string) => {

        const response = await axios.get(`${URL2 + category}`);

        if (response.status === 200) {
            setFilteredCocktailArray(response.data.drinks);
        }

    };

    function getAllCocktailCategories() {

        const [categories, setCategories] = useState<CocktailInterface[]>([]);

        async function getCategories() {
            try {
                const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`);

                if (response.status === 200) {
                    setCategories(response.data.drinks);
                    console.log("allCategories", response.data.drinks);
                }
            } catch (error) {
                console.error('Error', error)
            }
        }

        useEffect(() => {
            getCategories();
        }, []);

        return categories

    };

    const allCategories = getAllCocktailCategories();


    return (
        <div >
            FilterCocktailComponent
            <div className='category-bubbles2'>
                <button className='button-1' onClick={() => filterByAlcohol("a=alcoholic")} >Alcoholic</button>
                <button className='button-1' onClick={() => filterByAlcohol("a=non_alcoholic")} >Non Alcoholic</button>
                <button className='button-1' onClick={() => filterByAlcohol("a=optional_alcohol")} >Optional alcohol</button>
                <br />
                <br />

                {allCategories.map(category => (

                    <button className='button-1' onClick={() => filterByCategory(category.strCategory)} >{category.strCategory}</button>

                ))}

                    <br />
                    <br />
                <button className='button-1' onClick={() => setFilteredCocktailArray([])} >Återställ</button>
            </div>

            <br />


            <div style={{ display: "flex", flexWrap: "wrap" }}>

                {filteredCocktailArray.map((cocktail, index) => {



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
                                        onClick={() => seeCocktailDetails(cocktail.idDrink)}
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
