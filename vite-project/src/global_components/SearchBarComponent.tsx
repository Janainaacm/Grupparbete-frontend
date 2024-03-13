import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchBarComponent = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const clearSearch = () => {
        setSearch("");
    };

    const searchForRecipe = () => {
        navigate("/searchResult", { state: search })
    };

    return (
        <div className="search-box">
            <div className="search-bar">
                <input
                    value={search}
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={clearSearch}><IoCloseOutline className="search-bar-x-icon"/></button>
                <button onClick={searchForRecipe}><RiSearchLine className="search-bar-search-icon"/></button>
            </div>
        </div>
    );
};

export default SearchBarComponent;
