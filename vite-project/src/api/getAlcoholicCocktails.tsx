import axios from 'axios'
import { useEffect, useState } from 'react'
import { CocktailInterface } from './getCocktails'


function getAlcoholicCocktails () {

    const [cocktails, setCocktails] = useState<CocktailInterface[]>([])

    async function getAlcoholicCocktails() {
        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=alcoholic")

            if (response.status === 200) {
                setCocktails(response.data.drinks)
                console.log(response.data)
            }
        } catch (error) {
            console.error('Error', error)
        }
    }

    useEffect(() => {
        getAlcoholicCocktails()
    }, [])
    return cocktails

}

export default getAlcoholicCocktails