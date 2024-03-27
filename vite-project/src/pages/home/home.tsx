import NavBar from '../../globalComponents/NavBar.tsx';
import Footer from '../../globalComponents/Footer.tsx';
import SearchBarComponent from '../../globalComponents/SearchBarComponent.tsx';
import DisplayRecipes from '../../globalComponents/DisplayRecipes.tsx';
import { useNavigate } from "react-router-dom";
import "./HomeStyles.css"
import { Container, Row, Col, Card } from 'react-bootstrap';
import CustomCard from "./components/CustomCard.tsx"
import imgSrc from '../../assets/images/pexels-ella-olsson-1640773.jpg';
import barbecueImg from '../../assets/images/barbecue.png';
import fishImg from '../../assets/images/fish.png';
import harvestImg from '../../assets/images/harvest.png';
import teaLeafImg from '../../assets/images/tea-leaf.png';
import veganImg from '../../assets/images/vegan.png';
import { useAPIState } from '../../store/APIState.ts';
import { useEffect } from 'react';

const Home = () => { 
  const navigate = useNavigate()
  const {fetchRecipeList} = useAPIState()

  useEffect(() =>{
    fetchRecipeList()
  },[])

  const categories = [
    {id: 1, title: "Frukt", description: "Välj dina favoritfrukter", image:harvestImg , route:"/recept" },
    { id: 2, title: "Grönt", description: "Utforska olika grönsaksalternativ", image: teaLeafImg, route:"/recept"},
    { id: 3, title: "Kött", description: "Hitta olika köttrecept", image: barbecueImg, route:"/recept"},
    { id: 4, title: "Fisk",description: "Upptäck olika fiskrätter",image: fishImg,route: "/recept"},
    { id: 6, title: "Vego",description: "Hälsosamma och smakrika vegetariska alternativ",image: veganImg,route: "/recept"}
  ];

  return (
    <div  style={{backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
       <div>
        <NavBar/>
      </div>
      <div style={{textAlign: "center"}} className='content'>
          <div className="welcome-title">
              Välkommen!
          </div>

          <div>
            <SearchBarComponent />
          </div>

          <div className="category-bubbles">
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
          </div>
        </div>


        <Container>
        <Row className="justify-content-between ">
          {categories.map(category => (
            <CustomCard key={category.id} 
            title={category.title} 
            description={category.description} 
            image={category.image} 
            route={category.route} />
          ))}
        </Row>
      </Container>


        {/*
        <button onClick={()=>navigate("/AddRecept")}>Lägg Till recept</button>
      </div>
      <div>
        <DisplayRecipes recipes={allRecipes}/>
      </div>
      <div style={{ justifyContent: "center", width:"100%", padding: "10px",height:"50px", textAlign: "center",}}>
        
      </div> */}
      <Footer />

    </div>
  )
}

export default Home
