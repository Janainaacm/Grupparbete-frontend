import './App.css'
import useGetAllRecipes from './api/getAllRecipes';
import PostRecipe from './api/postRecipe';
import SearchBarComponent from './global_components/SearchBarComponent';



function App() {

  const searchBar = SearchBarComponent

  return (
    <PostRecipe></PostRecipe>
    //searchBar()
  );
  
}
  


export default App
