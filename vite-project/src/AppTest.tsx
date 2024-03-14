import './App.css'
import './index.css'
import deleteRecipe from './api/deleteRecipe';
import SearchBarComponent from './global_components/SearchBarComponent';
import useGetAllRecipes from './api/getAllRecipes';
import NavBar from './global_components/NavBar/NavBar';
import Footer from './global_components/footer';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/home/homeTest';
import RecipePage from './pages/recipes/RecipePageTest';


function App() {


  return (
    
    <div><NavBar/>hej</div>
    
  );
  
}
  


export default App
