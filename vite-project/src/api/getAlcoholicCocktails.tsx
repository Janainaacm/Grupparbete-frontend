import axios from 'axios'
import { useEffect, useState } from 'react'
import { CocktailInterface } from './getCocktails'


function getAlcoholicCocktails() {

    const [cocktails, setCocktails] = useState<CocktailInterface[]>([]);
    const [cocktails2, setCocktails2] = useState<CocktailInterface[]>([]);
    const [cocktails3, setCocktails3] = useState<CocktailInterface[]>([]);

    async function getAlcoholicCocktails() {
        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");
            const response2 = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=p");
            const response3 = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=q");

            if (response.status === 200) {
                setCocktails(response.data.drinks);
                setCocktails2(response2.data.drinks);
                setCocktails3(response3.data.drinks);
                console.log(response.data);
            }
        } catch (error) {
            console.error('Error', error)
        }
    };

    const allCocktails = []

    allCocktails.push(cocktails , cocktails2, cocktails3);

    const cocktailsAll = allCocktails.flatMap((num) => num);

    console.log("cocktailsAll",cocktailsAll)

    useEffect(() => {
        getAlcoholicCocktails()
    }, [])
    return cocktailsAll

}

export default getAlcoholicCocktails