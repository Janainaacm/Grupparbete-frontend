import axios from 'axios'
import { useEffect, useState } from 'react'
import { CocktailInterface } from '../../cocktails/components/DisplayAllCocktails'


function getAlcoholicCocktails() {

    const [cocktails, setCocktails] = useState<CocktailInterface[]>([]);
    const [cocktails2, setCocktails2] = useState<CocktailInterface[]>([]);
   /*  const [cocktails3, setCocktails3] = useState<CocktailInterface[]>([]);
    const [cocktails4, setCocktails4] = useState<CocktailInterface[]>([]);
    const [cocktails5, setCocktails5] = useState<CocktailInterface[]>([]); */

    async function getAlcoholicCocktails() {
        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");
            const response2 = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=q");
            /* const response3 = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=q", {
                headers: { 'Access': 'Access-Control-Allow-Origin'}
            });
            const response4 = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=f", {
                headers: { 'Access': 'Access-Control-Allow-Origin'}
            });
            const response5 = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=artillery", {
                headers: { 'Access': 'Access-Control-Allow-Origin'}
            }); */


            if (response.status === 200) {
                setCocktails(response.data.drinks);
                setCocktails2(response2.data.drinks);
                /*setCocktails3(response3.data.drinks);
                 setCocktails4(response4.data.drinks);
                setCocktails5(response5.data.drinks); */
                console.log(response.data);
            }
        } catch (error) {
            console.error('Error', error)
        }
    };

    const allCocktails = []

    allCocktails.push(cocktails , cocktails2/* , cocktails3, cocktails4, cocktails5 */);

    const cocktailsAll = allCocktails.flatMap((num) => num);

    // console.log("cocktailsAll",cocktailsAll)

    useEffect(() => {
        if(cocktailsAll.length===0){
        getAlcoholicCocktails()
    }
    }, [getAlcoholicCocktails,cocktailsAll])
    return cocktailsAll

}

export default getAlcoholicCocktails