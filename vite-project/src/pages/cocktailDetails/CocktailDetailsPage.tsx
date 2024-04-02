//import Header from "../../global_components/header"
/* import NavBar from "../../global_components/NavBar/NavBar"
 */import NavBar from "../../globalComponents/NavBar";
/* import Footer from "../../global_components/footer"
 */import Footer from "../../globalComponents/Footer";
import { useLocation, useNavigate } from "react-router-dom";
/* import DrinkDetails from "./DrinkDetails";
 */import CocktailDetails from "./components/CocktailDetails";
/* import { useCartStateInterface } from "../../state/Cart";
 */import { useCartState } from "../../store/CartState";


const CocktailDetailsPage = () => {
    const { cocktail } =useLocation().state;
    const {cart, AddToCart, AddCocktailToCart} = useCartState();


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
                <CocktailDetails onProductAdd={AddCocktailToCart} drinks={cocktail} navigate={navigate}/>
                <Footer />
            </div>

            <div style={{ justifyContent: "center", width:"100%", padding: "10px",height:"50px"}}>
            
            </div>
            
      </div>  
    );
};

export default CocktailDetailsPage