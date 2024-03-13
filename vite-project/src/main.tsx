import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AppTest from "./AppTest.tsx";


import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SelectedRecipe from "./pages/recipes/SelectedRecipe.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppTest />} />
        <Route path="/recipes/:title" element={<SelectedRecipe/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
