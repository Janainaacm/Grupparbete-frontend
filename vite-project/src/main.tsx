import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/HomePage.tsx";
import RecipePage from "./pages/recipes/RecipePage.tsx";
import AddRecipePage from "./pages/addRecipe/AddRecipePage.tsx";
import CocktailsPage from "./pages/cocktails/CocktailsPage.tsx";
import RecipeDetails from "./pages/recipeDetails/RecipeDetailsPage.tsx";
import CocktailDetailsPage from "./pages/cocktailDetails/CocktailDetailsPage.tsx";
import Admin from "./pages/admin/AdminPage.tsx";
import EditRecipe from "./pages/editRecipe/EditRecipePage.tsx";
import NavBar from "./globalComponents/NavBar/NavBar.tsx";
import Footer from "./globalComponents/Footer.tsx";
import ScrollToTop from "./globalComponents/ScrollToTop.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar />
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Recept/:title" element={<RecipeDetails />} />
        <Route path="/Recept" element={<RecipePage />} />
       
        <Route path="/Cocktails" element={<CocktailsPage/>} />
        <Route path="/Cocktails/:title" element=<CocktailDetailsPage/> />
        <Route path="/AddRecept" element={<AddRecipePage/>} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/EditRecipe/:title" element={<EditRecipe />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>

);
