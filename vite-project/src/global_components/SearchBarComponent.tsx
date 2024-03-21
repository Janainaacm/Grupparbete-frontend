import { useState, useEffect } from "react";
import { RiSearchLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import useGetAllRecipes from "../api/getAllRecipes";
import { RecipeInterface } from "../Types";
import { Navigate, useNavigate } from "react-router-dom";
import "./css_components/SearchBarComponent.css"

const SearchBarComponent = () => {
  const [search, setSearch] = useState("");
  const recipes = useGetAllRecipes();
  const [searchResults, setSearchResults] = useState<RecipeInterface[]>([]);
  const navigate = useNavigate();

  const clearSearch = () => {
    setSearch("");
  };

  const getSearchResult = () => {
    const results = recipes.filter((recipe) => {
        const lowerCaseSearch = search.toLowerCase();
        return (
            recipe.title.toLowerCase().includes(lowerCaseSearch) ||
            recipe.categories.some(category => category.toLowerCase().includes(lowerCaseSearch))
        );
    });
    clearSearch();
    navigate("/Recept", {
      state: results,
    })
};

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  useEffect(() => {
    setSearchResults([]);
  }, []);


  return (
    <div className="search_container">
      <div className="search__input">
        <input
          value={search}
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getSearchResult();
            }
          }}
        />
        <button onClick={clearSearch}>
          <IoCloseOutline className="search-bar-x-icon" />
        </button>
        <button className="search-icon" onClick={getSearchResult}>
          <RiSearchLine className="search-bar-search-icon" />
        </button>
        </div>
    </div>
  );
};

export default SearchBarComponent;
