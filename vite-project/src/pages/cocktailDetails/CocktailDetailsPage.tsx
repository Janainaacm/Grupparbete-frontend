import NavBar from "../../globalComponents/NavBar";
import Footer from "../../globalComponents/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import CocktailDetails from "./components/CocktailDetails";


const CocktailDetailsPage = () => {
    const { cocktail } = useLocation().state;


    const navigate = useNavigate();

    return (
        <div>

            <div>
                <CocktailDetails drinks={cocktail} navigate={navigate} />
            </div>

        </div>
    );
};

export default CocktailDetailsPage