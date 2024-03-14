import './App.css'
import useGetAllRecipes from './api/getAllRecipes';
import PostRecipe from './api/postRecipe';
import SearchBarComponent from './global_components/SearchBarComponent';
import NavBar from './global_components/NavBar/NavBar';

function App() {

  const searchBar = SearchBarComponent
  const navBar=NavBar

  return (
    <>
    {navBar()}
    {searchBar()}
    </>
  );
  
}
  


export default App
