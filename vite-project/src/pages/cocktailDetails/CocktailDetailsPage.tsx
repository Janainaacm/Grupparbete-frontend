//import Header from "../../global_components/header"
import NavBar from "../../globalComponents/NavBar"
import Footer from "../../globalComponents/Footer"
import { useLocation, useNavigate } from "react-router-dom";
import CocktailDetails from "./components/CocktailDetails";


const CocktailDetailsPage = () => {
    const { cocktail } =useLocation().state;

    const navigate = useNavigate();

    return (
        <div>
            <p>DrinkDetailsPage</p>
           
            

            <div>
            <NavBar/>
            </div>

            <div style={{textAlign: "center"}}>
            
            </div>

            <div>
                <CocktailDetails drinks={cocktail} navigate={navigate}/>
                <Footer />
            </div>

            <div style={{ justifyContent: "center", width:"100%", padding: "10px",height:"50px"}}>
            
            </div>
            
      </div>  
    );
};

export default CocktailDetailsPage