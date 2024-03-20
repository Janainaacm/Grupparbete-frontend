import NavBar from '../../global_components/NavBar/NavBar';
import Footer from '../../global_components/footer';
import SearchBarComponent from '../../global_components/SearchBarComponent';
import DisplayRecipes from '../../global_components/DisplayRecipes';
import { useNavigate } from "react-router";
import "./HomeStyles.css"

const Home = () => { 
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <NavBar/>
      </div>
      <div style={{textAlign: "center"}} className='content'>
        <SearchBarComponent />
        <button onClick={()=>navigate("/AddRecept")}>Lägg Till recept</button>
      </div>
      <div>
        <DisplayRecipes/>
      </div>
      <div style={{ justifyContent: "center", width:"100%", padding: "10px",height:"50px", textAlign: "center",}}>
        <Footer />
      </div>
    </div>
  )
}

export default Home
