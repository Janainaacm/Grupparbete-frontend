import './App.css'
import deleteRecipe from './api/deleteRecipe';
import SearchBarComponent from './globalComponents/SearchBarComponent';
import useGetAllRecipes from './api/getAllRecipes';
import NavBar from './globalComponents/NavBar/NavBar';
import Footer from './globalComponents/footer';
import PostRecipe from './api/postRecipe';

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
