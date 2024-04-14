import NavBar from "../../globalComponents/NavBar";
import Footer from "../../globalComponents/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import CocktailDetails from "./components/CocktailDetails";

const CocktailDetailsPage = () => {

  return (
    <div>
      <div>{/* <Header/> */}</div>

      <div style={{ textAlign: "center" }}></div>

      <div>
        <CocktailDetails />
        <Footer />
      </div>

      <div
        style={{
          justifyContent: "center",
          width: "100%",
          padding: "10px",
          height: "50px",
        }}
      ></div>
    </div>
  );
};

export default CocktailDetailsPage;
