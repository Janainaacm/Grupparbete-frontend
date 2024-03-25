//import Header from "../../global_components/header"
import NavBar from "../../global_components/NavBar/NavBar"
import Footer from "../../global_components/footer"
import { useLocation, useNavigate } from "react-router-dom";
import DrinkDetails from "./DrinkDetails";
import FilterFunction from "../../global_components/FilterFunktion";


const DrinkDetailsPage = () => {
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
                <DrinkDetails drinks={cocktail} navigate={navigate}/>
                <Footer />
            </div>

            <div style={{ justifyContent: "center", width:"100%", padding: "10px",height:"50px"}}>
            
            </div>
            
      </div>  
    );
};

export default DrinkDetailsPage