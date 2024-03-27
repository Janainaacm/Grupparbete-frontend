import { useEffect } from 'react';
import NavBar from '../../global_components/NavBar/NavBar';
import DisplayRecipes from '../../global_components/DisplayRecipes';
import { useAPIState } from '../../state';

const RecipePage = (): JSX.Element => {
  const { recipeList, fetchRecipeList } = useAPIState();

  useEffect(() => {
    // Fetch recipe list when component mounts
    fetchRecipeList();
  }, [fetchRecipeList]);

  return (
    <>
      <NavBar />
      <div>
        <FilterComponent></FilterComponent>
        <br /><br /><br /><br />
      <DisplayRecipes recipes={recipeList} />
      </div>
    </>
  );
};

export default RecipePage;
