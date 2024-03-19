import { useEffect, useState } from "react";
import axios from "axios";


const cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const cocktailURL2 = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

interface CocktailInterface {
    idDrink: string,
    strDrinkTumb: string,
    strDrink: string,
    strCategory: string

}


const Drinks = () => {

    const [cocktails, setCocktails] = useState<CocktailInterface[]>([]);



    const fetchCocktails = async () => {

        const response = await axios.get(cocktailURL2);
                
                setCocktails(response.data);
                console.log(response.data);
                console.log("Cocktails",cocktails);

            if (response.status === 200) {

                
            };
                
    };

    useEffect(() => {

        

        fetchCocktails();

    }, []);

    


//<img src={product.strDrinkTumb} alt="" />
    return (
        <div>
            <div>
                <p>Drinkg</p>
                <ul>UL
                {cocktails.map(({idDrink, strDrink}) => {
                    return <li key={idDrink}>{idDrink} {strDrink}</li>
                })}
                </ul>
            </div>
        </div>

    )



}

export default Drinks