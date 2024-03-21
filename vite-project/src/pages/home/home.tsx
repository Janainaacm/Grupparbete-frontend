import NavBar from '../../global_components/NavBar/NavBar';
import Footer from '../../global_components/footer';
import SearchBarComponent from '../../global_components/SearchBarComponent';
import DisplayRecipes from '../../global_components/DisplayRecipes';
import { useNavigate } from "react-router";
import "./HomeStyles.css"
import { Container, Row, Col, Card } from 'react-bootstrap';
import CustomCard from "./CustomCard.tsx"
import imgSrc from './img/pexels-ella-olsson-1640773.jpg';
import barbecueImg from './img/barbecue.png';
import fishImg from './img/fish.png';
import harvestImg from './img/harvest.png';
import teaLeafImg from './img/tea-leaf.png';
import veganImg from './img/vegan.png';

const Home = () => { 
  const navigate = useNavigate()

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
        <SearchBarComponent />
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
        <DisplayRecipes/>
      </div>
      <div style={{ justifyContent: "center", width:"100%", padding: "10px",height:"50px", textAlign: "center",}}>
        
      </div> */}
      <Footer />
    </div>
  )
}

export default Home
