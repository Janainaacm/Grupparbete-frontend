import './App.css'
import SearchBarComponent from './globalComponents/SearchBarComponent';
import useGetAllRecipes from './api/getAllRecipes';
import NavBar from './globalComponents/NavBar';
import Footer from './globalComponents/Footer';
import PostRecipe from './api/postRecipe';
function App() {

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
