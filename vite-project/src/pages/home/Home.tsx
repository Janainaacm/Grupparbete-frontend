import NavBar from "../../globalComponents/NavBar.tsx";
import Footer from "../../globalComponents/Footer.tsx";
import SearchBar from "../../globalComponents/searchBar/SearchBar.tsx";
import DisplayRecipes from "../../globalComponents/DisplayRecipes.tsx";
import { useNavigate } from "react-router-dom";
import "./HomeStyles.css";
/* import { Container, Row, Col, Card } from "react-bootstrap";
import CustomCard from "./components/CustomCard.tsx";
import imgSrc from "../../assets/images/pexels-ella-olsson-1640773.jpg";
import barbecueImg from "../../assets/images/barbecue.png";
import fishImg from "../../assets/images/fish.png";
import harvestImg from "../../assets/images/harvest.png";
import teaLeafImg from "../../assets/images/tea-leaf.png";
import veganImg from "../../assets/images/vegan.png"; */
import { useAPIState } from "../../store/APIState.ts";
import { useEffect, useState } from "react";
import SearchResultsList from "../../globalComponents/searchBar/SearchResultsList.tsx";
import Carousel from "./components/Carousel.tsx"
import {CarouselData} from "../../assets/data/carousel_data.ts"
import HomeSwiper from "./components/HomeSwiper.tsx";


const Home = () => {
  const navigate = useNavigate();
  const { fetchRecipeList } = useAPIState();
  const [searchResults, setSearchResults] = useState([]);

  const { recipeList } = useAPIState();

  useEffect(() => {
    fetchRecipeList();
  }, []);

  /* const categories = [
    {
      id: 1,
      title: "Frukt",
      description: "Välj dina favoritfrukter",
      image: harvestImg,
      route: "/recept",
    },
    {
      id: 2,
      title: "Grönt",
      description: "Utforska olika grönsaksalternativ",
      image: teaLeafImg,
      route: "/recept",
    },
    {
      id: 3,
      title: "Kött",
      description: "Hitta olika köttrecept",
      image: barbecueImg,
      route: "/recept",
    },
    {
      id: 4,
      title: "Fisk",
      description: "Upptäck olika fiskrätter",
      image: fishImg,
      route: "/recept",
    },
    {
      id: 6,
      title: "Vego",
      description: "Hälsosamma och smakrika vegetariska alternativ",
      image: veganImg,
      route: "/recept",
    },
  ]; */

  return (
    <div
      style={{
        background: ``,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <NavBar />
      </div>
      <div style={{ textAlign: "center" }} className="content">
        
      <div className="searchBar_wrapper" >
        <div className="searchBarField">
        <div className="welcome-title">Välkommen!</div>
           <SearchBar setSearchResults={setSearchResults}/>
           <SearchResultsList results={searchResults}/>
         </div>
      </div>

      <div className="section">
  <h2>Populära kategorier</h2>
  <p>Utforska några våra olika kategorier för att hitta recept som passar dina smaker och preferenser.</p>
</div>

      <div className="divider"></div>
        

        {/* <div className="category-bubbles">
          <div className="button-one">
            <button>Frukt</button>
          </div>
          <div className="button-two">
            <button>Grönt</button>
          </div>
          <div className="button-three">
            <button>Kött</button>
          </div>
          <div className="button-four">
            <button>Fisk</button>
          </div>
          <div className="button-five">
            <button>Vego</button>
          </div>
        </div> */}
        <Carousel images={CarouselData}/>
      </div>

        
        





      {/* <Container>
        <Row className="justify-content-between ">
          {categories.map((category) => (
            <CustomCard
              key={category.id}
              title={category.title}
              description={category.description}
              image={category.image}
              route={category.route}
            />
          ))}
        </Row>
      </Container> */}

      {/*
        <button onClick={()=>navigate("/AddRecept")}>Lägg Till recept</button>
      </div>
      <div>
        <DisplayRecipes recipes={allRecipes}/>
      </div>
      <div style={{ justifyContent: "center", width:"100%", padding: "10px",height:"50px", textAlign: "center",}}>
        
      </div> */}
      <div>
        <HomeSwiper recipeList={recipeList}></HomeSwiper>
      </div>
      <Footer />
    </div>
  );
};

export default Home;