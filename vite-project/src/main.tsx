import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/homeTest.tsx";
import RecipePage from "./pages/recipes/RecipePageTest.tsx";
import AddRecipePage from "./pages/recipes/AddRecipePage.tsx";
import DrinkPage from "./pages/drinks/DrinkPage.tsx";
import DrinkDetailsPage from "./pages/drinks/DrinkDetailsPage.tsx";





ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Recept/:title" element={<RecipePage />} />
        <Route path="/Recept" element={<RecipePage />} />
        <Route path="/AddRecept" element={<AddRecipePage/>} />
        <Route path="/Cocktails" element={<DrinkPage/>} />
        <Route path="/Cocktails/:title" element={<DrinkDetailsPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);
