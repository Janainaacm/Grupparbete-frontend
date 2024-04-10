import React from 'react'
import getAlcoholicCocktails from '../../api/getAlcoholicCocktails';
import { RecipeInterface } from '../../Types';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCocktailCartStateInterface } from '../../store/CocktailCart';

interface RecipeRecommendationsProps {
    recipe: RecipeInterface
    visibility: boolean
    onClose: any
}

const URL3 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const RecipeRecommendations = ({ recipe, visibility, onClose }: RecipeRecommendationsProps) => {

    

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

            console.log("cocktails", cocktail);
            console.log("selectedCocktail.strDrink", selectedCocktail.strDrink);

        };

    };



    const recommendedCocktails = getAlcoholicCocktails();
    const { AddToCocktailCart } = useCocktailCartStateInterface();





    return (
        <div id='modal' style={{ display: visibility ? "block" : "none", }}>

            <div className='recommended-cocktail'>{recipe.categories[0] === "Dessert" &&
                <div>{recommendedCocktails.map((recCock) => (

                    <div>{recCock.strDrink === "A Piece of Ass" &&

                        <div className='shoppingCart'>

                            <h6>Rekommenderad Cocktail: </h6>
                            <p>{recCock.strDrink}</p>

                            <img className='cocktail-image' width={"90"} alt={recCock.strDrink} src={recCock.strDrinkThumb} onClick={() => seeCocktailDetails(recCock.idDrink)}></img>
                            <button className='remove-button' onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</button>
                            <button onClick={() => navigate("/Cocktails")}>Se alla cocktails</button>


                            <p>Andra, mindre passande, cocktail:</p>
                            <div>{recommendedCocktails.map((recCock) =>
                                <div>

                                    <p>{recCock.strDrink === "110 in the shade" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Affinity" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Almeria" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>

                                </div>
                            )}</div>
                            
                            <button onClick={onClose}>Stäng</button>

                        </div>}


                    </div>))}


                </div>}
            </div>


            <div className='recommended-cocktail'>{recipe.categories[0] === "Kött" &&
                <div>{recommendedCocktails.map((recCock) => (

                    <div>{recCock.strDrink === "Affair" &&

                        <div className='shoppingCart'>

                            <h6>Rekommenderad Cocktail: </h6>
                            <p>{recCock.strDrink}</p>

                            <img className='cocktail-image' width={"90"} alt={recCock.strDrink} src={recCock.strDrinkThumb} onClick={() => seeCocktailDetails(recCock.idDrink)}></img>
                            <button className='remove-button' onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</button>
                            <button onClick={() => navigate("/Cocktails")}>Se alla cocktails</button>


                            <p>Andra, mindre passande, cocktail:</p>
                            <div>{recommendedCocktails.map((recCock) =>
                                <div>

                                    <p>{recCock.strDrink === "110 in the shade" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Affinity" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Almeria" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>

                                </div>
                            )}</div>
                            
                            <button onClick={onClose}>Stäng</button>

                        </div>}


                    </div>))}


                </div>}
            </div>


            <div className='recommended-cocktail'>{recipe.categories[0] === "Fisk" &&
                <div>{recommendedCocktails.map((recCock) => (

                    <div>{recCock.strDrink === "110 in the shade" &&

                        <div className='shoppingCart'>

                            <h6>Rekommenderad Cocktail: </h6>
                            <p>{recCock.strDrink}</p>

                            <img className='cocktail-image' width={"90"} alt={recCock.strDrink} src={recCock.strDrinkThumb} onClick={() => seeCocktailDetails(recCock.idDrink)}></img>
                            <button className='remove-button' onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</button>
                            <button onClick={() => navigate("/Cocktails")}>Se alla cocktails</button>


                            <p>Andra, mindre passande, cocktail:</p>
                            <div>{recommendedCocktails.map((recCock) =>
                                <div>

                                    <p>{recCock.strDrink === "110 in the shade" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Affinity" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Almeria" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>

                                </div>
                            )}</div>

                            <button onClick={onClose}>Stäng</button>

                        </div>}

                    </div>))}



                </div>}
            </div>

            <div className='recommended-cocktail'>{recipe.categories[0] === "Sprängmedel" &&
                <div>{recommendedCocktails.map((recCock) => (

                    <div>{recCock.strDrink === "Absolut Sex" &&

                        <div className='shoppingCart'>

                            <h6>Rekommenderad Cocktail: </h6>
                            <p>{recCock.strDrink}</p>

                            <img className='cocktail-image' width={"90"} alt={recCock.strDrink} src={recCock.strDrinkThumb} onClick={() => seeCocktailDetails(recCock.idDrink)}></img>
                            <button className='remove-button' onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</button>
                            <button onClick={() => navigate("/Cocktails")}>Se alla cocktails</button>


                            <p>Andra, mindre passande, cocktail:</p>
                            <div>{recommendedCocktails.map((recCock) =>
                                <div>

                                    <p>{recCock.strDrink === "110 in the shade" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Affinity" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Almeria" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>

                                </div>
                            )}</div>

                            <button onClick={onClose}>Stäng</button>

                        </div>}

                    </div>))}



                </div>}
            </div>


            <div className='recommended-cocktail'>{recipe.categories[0] === "snabbmat" &&
                <div>{recommendedCocktails.map((recCock) => (

                    <div>{recCock.strDrink === "Quick F**K" &&

                        <div className='shoppingCart'>

                            <h6>Rekommenderad Cocktail: </h6>
                            <p>{recCock.strDrink}</p>

                            <img className='cocktail-image' width={"90"} alt={recCock.strDrink} src={recCock.strDrinkThumb} onClick={() => seeCocktailDetails(recCock.idDrink)}></img>
                            <button className='remove-button' onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</button>
                            <button onClick={() => navigate("/Cocktails")}>Se alla cocktails</button>


                            <p>Andra, mindre passande, cocktail:</p>
                            <div>{recommendedCocktails.map((recCock) =>
                                <div>

                                    <p>{recCock.strDrink === "110 in the shade" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Affinity" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Almeria" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>

                                </div>
                            )}</div>

                            <button onClick={onClose}>Stäng</button>

                        </div>}

                    </div>))}

                </div>}

            </div>


            <div className='recommended-cocktail'>{recipe.categories[0] === "huvudmål" &&
                <div>{recommendedCocktails.map((recCock) => (

                    <div>{recCock.strDrink === "Amaretto fizz" &&

                        <div className='shoppingCart'>

                            <h6>Rekommenderad Cocktail: </h6>
                            <p>{recCock.strDrink}</p>

                            <img className='cocktail-image' width={"90"} alt={recCock.strDrink} src={recCock.strDrinkThumb} onClick={() => seeCocktailDetails(recCock.idDrink)}></img>
                            <button className='remove-button' onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</button>
                            <button onClick={() => navigate("/Cocktails")}>Se alla cocktails</button>


                            <p>Andra, mindre passande, cocktail:</p>
                            <div>{recommendedCocktails.map((recCock) =>
                                <div>

                                    <p>{recCock.strDrink === "110 in the shade" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Affinity" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Almeria" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>

                                </div>
                            )}</div>

                            <button onClick={onClose}>Stäng</button>

                        </div>}

                    </div>))}

                </div>}

            </div>



            <div className='recommended-cocktail'>{recipe.categories[0] === "Förrätt" &&
                <div>{recommendedCocktails.map((recCock) => (

                    <div>{recCock.strDrink === "Affinity" &&

                        <div className='shoppingCart'>

                            <h6>Rekommenderad Cocktail: </h6>
                            <p>{recCock.strDrink}</p>

                            <img className='cocktail-image' width={"90"} alt={recCock.strDrink} src={recCock.strDrinkThumb} onClick={() => seeCocktailDetails(recCock.idDrink)}></img>
                            <button className='remove-button' onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</button>
                            <button onClick={() => navigate("/Cocktails")}>Se alla cocktails</button>


                            <p>Andra, mindre passande, cocktail:</p>
                            <div>{recommendedCocktails.map((recCock) =>
                                <div>

                                    <p>{recCock.strDrink === "110 in the shade" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Affinity" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Almeria" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>

                                </div>
                            )}</div>

                            <button onClick={onClose}>Stäng</button>

                        </div>}

                    </div>))}

                </div>}

            </div>

            <div className='recommended-cocktail'>{recipe.categories[0] === "Bra" &&
                <div>{recommendedCocktails.map((recCock) => (

                    <div>{recCock.strDrink === "Quaker's Cocktail" &&

                        <div className='shoppingCart'>

                            <h6>Rekommenderad Cocktail: </h6>
                            <p>{recCock.strDrink}</p>

                            <img className='cocktail-image' width={"90"} alt={recCock.strDrink} src={recCock.strDrinkThumb} onClick={() => seeCocktailDetails(recCock.idDrink)}></img>
                            <button className='remove-button' onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</button>
                            <button onClick={() => navigate("/Cocktails")}>Se alla cocktails</button>


                            <p>Andra, mindre passande, cocktail:</p>
                            <div>{recommendedCocktails.map((recCock) =>
                                <div>

                                    <p>{recCock.strDrink === "110 in the shade" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Affinity" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Almeria" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>

                                </div>
                            )}</div>

                            <button onClick={onClose}>Stäng</button>

                        </div>}

                    </div>))}

                </div>}

            </div>


            <div className='recommended-cocktail'>{recipe.categories[0] === "Amazing" &&
                <div>{recommendedCocktails.map((recCock) => (

                    <div>{recCock.strDrink === "After sex" &&

                        <div className='shoppingCart'>

                            <h6>Rekommenderad Cocktail: </h6>
                            <p>{recCock.strDrink}</p>

                            <img className='cocktail-image' width={"90"} alt={recCock.strDrink} src={recCock.strDrinkThumb} onClick={() => seeCocktailDetails(recCock.idDrink)}></img>
                            <button className='remove-button' onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</button>
                            <button onClick={() => navigate("/Cocktails")}>Se alla cocktails</button>


                            <p>Andra, mindre passande, cocktail:</p>
                            <div>{recommendedCocktails.map((recCock) =>
                                <div>

                                    <p>{recCock.strDrink === "110 in the shade" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Affinity" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Almeria" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>

                                </div>
                            )}</div>

                            <button onClick={onClose}>Stäng</button>

                        </div>}

                    </div>))}

                </div>}

            </div>


            <div className='recommended-cocktail'>{recipe.categories[0] === "norrland" &&
                <div>{recommendedCocktails.map((recCock) => (

                    <div>{recCock.strDrink === "A Day at the Beach" &&

                        <div className='shoppingCart'>

                            <h6>Rekommenderad Cocktail: </h6>
                            <p>{recCock.strDrink}</p>

                            <img className='cocktail-image' width={"90"} alt={recCock.strDrink} src={recCock.strDrinkThumb} onClick={() => seeCocktailDetails(recCock.idDrink)}></img>
                            <button className='remove-button' onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</button>
                            <button onClick={() => navigate("/Cocktails")}>Se alla cocktails</button>


                            <p>Andra, mindre passande, cocktail:</p>
                            <div>{recommendedCocktails.map((recCock) =>
                                <div>

                                    <p>{recCock.strDrink === "110 in the shade" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Affinity" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Almeria" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>

                                </div>
                            )}</div>

                            <button onClick={onClose}>Stäng</button>

                        </div>}

                    </div>))}

                </div>}

            </div>

            <div className='recommended-cocktail'>{recipe.categories[0] === "Kyckling" &&
                <div>{recommendedCocktails.map((recCock) => (

                    <div>{recCock.strDrink === "A Day at the Beach" &&

                        <div className='shoppingCart'>

                            <h6>Rekommenderad Cocktail: </h6>
                            <p>{recCock.strDrink}</p>

                            <img className='cocktail-image' width={"90"} alt={recCock.strDrink} src={recCock.strDrinkThumb} onClick={() => seeCocktailDetails(recCock.idDrink)}></img>
                            <button className='remove-button' onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</button>
                            <button onClick={() => navigate("/Cocktails")}>Se alla cocktails</button>


                            <p>Andra, mindre passande, cocktail:</p>
                            <div>{recommendedCocktails.map((recCock) =>
                                <div>

                                    <p>{recCock.strDrink === "110 in the shade" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Affinity" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Almeria" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>

                                </div>
                            )}</div>

                            <button onClick={onClose}>Stäng</button>

                        </div>}

                    </div>))}

                </div>}

            </div>


            <div className='recommended-cocktail'>{recipe.categories[0] === "Vego" &&
                <div>{recommendedCocktails.map((recCock) => (

                    <div>{recCock.strDrink === "After Supper Cocktail" &&

                        <div className='shoppingCart'>

                            <h6>Rekommenderad Cocktail: </h6>
                            <p>{recCock.strDrink}</p>

                            <img className='cocktail-image' width={"90"} alt={recCock.strDrink} src={recCock.strDrinkThumb} onClick={() => seeCocktailDetails(recCock.idDrink)}></img>
                            <button className='remove-button' onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</button>
                            <button onClick={() => navigate("/Cocktails")}>Se alla cocktails</button>


                            <p>Andra, mindre passande, cocktail:</p>
                            <div>{recommendedCocktails.map((recCock) =>
                                <div>

                                    <p>{recCock.strDrink === "110 in the shade" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Affinity" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Almeria" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>

                                </div>
                            )}</div>

                            <button onClick={onClose}>Stäng</button>

                        </div>}

                    </div>))}

                </div>}

            </div>



            <div className='recommended-cocktail'>{recipe.categories[0] === "Övrigt" &&
                <div>{recommendedCocktails.map((recCock) => (

                    <div>{recCock.strDrink === "Apple Slammer" &&

                        <div className='shoppingCart'>

                            <h6>Rekommenderad Cocktail: </h6>
                            <p>{recCock.strDrink}</p>

                            <img className='cocktail-image' width={"90"} alt={recCock.strDrink} src={recCock.strDrinkThumb} onClick={() => seeCocktailDetails(recCock.idDrink)}></img>
                            <button className='remove-button' onClick={() => AddToCocktailCart(recCock)}>Lägg till varukorg</button>
                            <button onClick={() => navigate("/Cocktails")}>Se alla cocktails</button>


                            <p>Andra, mindre passande, cocktail:</p>
                            <div>{recommendedCocktails.map((recCock) =>
                                <div>

                                    <p>{recCock.strDrink === "110 in the shade" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Affinity" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>
                                    <p>{recCock.strDrink === "Almeria" && <p onClick={() => seeCocktailDetails(recCock.idDrink)}>{recCock.strDrink}</p>}</p>

                                </div>
                            )}</div>

                            <button onClick={onClose}>Stäng</button>

                        </div>}

                    </div>))}

                </div>}

            </div>



        </div>
    )
}

export default RecipeRecommendations
