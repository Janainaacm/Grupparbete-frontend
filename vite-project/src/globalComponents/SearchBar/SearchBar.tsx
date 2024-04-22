import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useRecipeAPIState } from "../../store/RecipeAPIState";

const SearchBar = ({ setSearchResults }: { setSearchResults?: any }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { recipeList, setFilteredRecipeList } = useRecipeAPIState();

  const getSearchResult = () => {
    const filteredList = recipeList.filter((recipe) => {
      const lowerCaseSearch = search.toLowerCase();
      return (
        recipe.title.toLowerCase().includes(lowerCaseSearch) ||
        recipe.categories.some((category) =>
          category.toLowerCase().includes(lowerCaseSearch)
        )
      );
    });

    setFilteredRecipeList(filteredList);
    setSearch("");
    navigate("/Recept", {state: search});
  };

  const fetchData = (value: string) => {
    const dynamicSearchResult = recipeList.filter((r) => {
      return value && r && r.title && r.title.toLowerCase().includes(value);
    });
    setSearchResults(dynamicSearchResult);
  };

  const handleChange = (value: string) => {
    setSearch(value);
    fetchData(value);
  };

  useEffect(() => {}, []);

  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && getSearchResult()}
      />
      <FaSearch id="search-icon" />
    </div>
  );
};
export default SearchBar;
