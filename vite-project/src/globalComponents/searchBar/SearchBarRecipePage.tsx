import { useState, useEffect } from "react";
import { RecipeInterface } from "../../Types";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useAPIState } from "../../store/APIState";


const SearchBarRecipePage = ({ setShowRecipes }) => {
 const [search, setSearch] = useState("");
 const recipes = useAPIState((state) => state.recipeList);

 const clearSearch = () => {
   setSearch("");
 };

 const getSearchResult = () => {
   const results = recipes.filter((recipe) => {
     const lowerCaseSearch = search.toLowerCase();
     return (
       recipe.title.toLowerCase().includes(lowerCaseSearch) ||
       recipe.categories.some((category) =>
         category.toLowerCase().includes(lowerCaseSearch)
       )
     );
   });

   clearSearch();
   setShowRecipes(results)
 };

 useEffect(() => {
 }, []);


 return (
   <div className="input-wrapper">
     <input
       type="text"
       placeholder="Search..."
       value={search}
       onChange={(e) => setSearch(e.target.value)}
       onKeyDown={(e) => e.key === "Enter" && getSearchResult()}
     />
     <FaSearch id="search-icon" />
   </div>
 );
};
export default SearchBarRecipePage;