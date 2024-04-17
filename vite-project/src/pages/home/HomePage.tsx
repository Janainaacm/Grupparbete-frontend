import "./HomePage.css";
import SearchBar from "../../globalComponents/SearchBar/SearchBar.tsx";
import { useRecipeAPIState } from "../../store/RecipeAPIState.ts";
import { useEffect, useState } from "react";
import SearchResultsList from "../../globalComponents/SearchBar/SearchResultsList.tsx";
import Carousel from "./components/Carousel.tsx";
import { CarouselData } from "../../assets/data/carousel_data.ts";
import HomeSwiper from "./components/HomeSwiper.tsx";

const Home = () => {
  const { fetchRecipeList, fetchCategories } = useRecipeAPIState();
  const [searchResults, setSearchResults] = useState([]);
  const { recipeList } = useRecipeAPIState();

  useEffect(() => {
    if (recipeList.length == 0) {
      fetchRecipeList();
    }
    if (recipeList.length == 0) {
      fetchCategories();
    }
  }, []);

  return (
    <div
      style={{
        background: ``,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div style={{ textAlign: "center" }} className="content">
        <div className="searchBar_wrapper">
          <div className="searchBarField">
            <div className="welcome-title">Välkommen!</div>
            <SearchBar setSearchResults={setSearchResults} />
            <SearchResultsList results={searchResults} />
          </div>
        </div>

        <div className="section">
          <h2>Stort utbud</h2>
          <p>
            Utforska olika kategorier på vår receptsida för att hitta recept som
            passar dina preferenser{" "}
          </p>
        </div>

        <div className="divider"></div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Carousel images={CarouselData} />
        </div>
        <div className="section-2">
          <h2>Vet inte vad du ska laga till middag?</h2>
          <p>Bläddra bland alla recept och hitta din nya favorit</p>
        </div>
        <div className="divider"></div>

        <HomeSwiper recipeList={recipeList}></HomeSwiper>
      </div>
    </div>
  );
};

export default Home;
