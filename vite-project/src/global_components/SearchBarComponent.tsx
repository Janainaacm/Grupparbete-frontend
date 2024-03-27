import { useState, useEffect } from "react";
import { RiSearchLine } from "react-icons/ri";
import useGetAllRecipes from "../api/getAllRecipes";
import { RecipeInterface } from "../Types";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const SearchBarComponent = () => {
  const [search, setSearch] = useState("");
  const recipes = useGetAllRecipes();
  const [searchResults, setSearchResults] = useState<RecipeInterface[]>([]);
  const navigate = useNavigate();
  const [value, setValue] = useState()
  const onChange = async (e: { target: { value: React.SetStateAction<undefined>; }; }) => {
      setValue(e.target.value)
      const response = await axios.get(`${URL}`);
  
  }

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
    <section className="intro">
      <div className="bg-image h-100" style={{ backgroundColor: "none" }}>
        <div className="mask d-flex align-items-center h-100">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <div className="card mb-2" style={{ borderRadius: "10em", border: '5px solid #dadab2', background: "#ededd3c9" }}>
                  <div className="card-body p-2">
                  <div className='dropdown-content'>
                    {
                        value &&
                        recipes.filter((item: { title: string; tilte: any; }) => item.title.startsWith(value) && item.tilte !== value)
                        .slice(0, 5)
                        .map((item: { id: any; title: React.SetStateAction<undefined>; tilte: any; }) => <div key={item.id} onClick={(_e: any) => setValue(item.title)}>
                            {item.tilte} <hr />
                            </div>)
                    }

                </div>
                    <div className="input-group input-group-lg">
                      <input 
                      id="inputField"
                        className="form-control form-control-lg rounded bg-transparent text-beige"  
                        placeholder="Search..." 
                        aria-label="Type Keywords" 
                        aria-describedby="basic-addon2" 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && getSearchResult()}
                        style={{ border: 'none', boxShadow: 'none'}}                        
                      />
                      <span 
                      className="input-group-text border-0" 
                      id="basic-addon2"
                      style={{backgroundColor: 'transparent'}}
                      >
                        <i onClick={getSearchResult}
                        ><RiSearchLine className="search-bar-search-icon" /></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBarComponent;



