import NavBar from "../../globalComponents/NavBar";
import Footer from "../../globalComponents/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import CocktailDetails from "./components/CocktailDetails";
import { useCocktailCartStateInterface } from "../../store/CockrailCart";


const CocktailDetailsPage = () => {
    const { cocktail } = useLocation().state;

    const { AddToCocktailCart } = useCocktailCartStateInterface();


    const navigate = useNavigate();

    return (
        <div>
            <p>CocktailDetailsPage</p>
            <div>
                {/* <Header/> */}
            </div>

            <div>
                <NavBar />
            </div>

            <div style={{ textAlign: "center" }}>

            </div>

            <div>
                <CocktailDetails onProductAdd={AddToCocktailCart} drinks={cocktail} navigate={navigate} />
                <Footer />
            </div>

            <div style={{ justifyContent: "center", width: "100%", padding: "10px", height: "50px" }}>

            </div>

        </div>
    );
};

export default CocktailDetailsPage