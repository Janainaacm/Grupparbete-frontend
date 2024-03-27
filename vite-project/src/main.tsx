import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.tsx";
import RecipePage from "./pages/recipes/RecipePage.tsx";
import AddRecipePage from "./pages/addRecipe/AddRecipePage.tsx";
import DrinkPage from "./pages/drinks/DrinkPage.tsx";
import DrinkDetailsPage from "./pages/drinks/DrinkDetailsPage.tsx";
import RecipeDetails from "./pages/recipeDetails/RecipeDetails.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Recept/:title" element={<RecipeDetails />} />
        <Route path="/Recept" element={<RecipePage />} />
        <Route path="/AddRecept" element={<AddRecipePage/>} />
        <Route path="/Cocktails" element={<DrinkPage/>} />
        <Route path="/Cocktails/:title" element={<DrinkDetailsPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);
