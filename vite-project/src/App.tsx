import './App.css'
import useGetAllRecipes from './api/getAllRecipes';
import SearchBarComponent from './global_components/SearchBarComponent';
import NavBar from './global_components/NavBar/NavBar';
import Footer from './global_components/footer';

function App() {

  const searchBar = SearchBarComponent
  const navBar=NavBar
  const footer=Footer

  return (
    <>
    {footer()}
    {navBar()}
    {searchBar()}
    </>
  );
  
}
  


export default App
