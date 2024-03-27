//import Header from "../../global_components/header"
import NavBar from "../../globalComponents/NavBar"
import Footer from "../../globalComponents/Footer"
import { useLocation, useNavigate } from "react-router-dom";
import DrinkDetails from "./DrinkDetails";


const DrinkDetailsPage = () => {
    const { cocktail } =useLocation().state;

    const navigate = useNavigate();

    return (
        <div>
            <p>DrinkDetailsPage</p>
            <div>
            {/* <Header/> */}
            </div>

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