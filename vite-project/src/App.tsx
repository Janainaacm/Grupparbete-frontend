import './App.css'
import deleteRecipe from './api/deleteRecipe';
import SearchBarComponent from './global_components/SearchBarComponent';
import useGetAllRecipes from './api/getAllRecipes';
import PostRecipe from './api/postRecipe';
import NavBar from './global_components/NavBar/NavBar';
import Footer from './global_components/footer';

function App() {
deleteRecipe("65f2bd6139aa131cc702feba")
  const searchBar = SearchBarComponent
  const navBar=NavBar
  const footer=Footer

  return (
    <>
    {footer()}
    {navBar()}
    {searchBar()}
    <PostRecipe></PostRecipe>
    </>
  );
  
}
  


export default App
