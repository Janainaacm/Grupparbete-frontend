import './App.css'
import useGetAllRecipes from './api/getAllRecipes';
import getRecipeById from './api/getRecipeById';
import SearchBarComponent from './global_components/SearchBarComponent';




function App() {

  const searchBar = SearchBarComponent

  return (
    searchBar()
  );
  
}
  


export default App
