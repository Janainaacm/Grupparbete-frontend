import { useState, useEffect } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { IoCloseOutline } from "react-icons/io5";
import useGetAllRecipes from "../api/getAllRecipes"
import { RecipeInterface } from '../Types';

const SearchBarComponent = () => {
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState<RecipeInterface[]>(useGetAllRecipes())
    const [searchResults, setSearchResults] = useState<RecipeInterface[]>([])

    const clearSearch = () => {
        setSearch("");
        setSearchResults([]);
    };

    const getSearchResult = () => {
        const result = recipes.filter(recipe => {
            return recipe.title.includes(search) || recipe.categories.includes(search);
        });
        setSearchResults(result);
        clearSearch();
        return searchResults;
    }


    return (
        <div className="search-box">
            <div className="search-bar">
                <input
                    value={search}
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={clearSearch}><IoCloseOutline className="search-bar-x-icon"/></button>
                <button onClick={() => getSearchResult()}><RiSearchLine className="search-bar-search-icon"/></button>
            </div>
        </div>
    );
};

export default SearchBarComponent;
