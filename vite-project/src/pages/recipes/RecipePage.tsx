import { useEffect } from 'react';
import NavBar from '../../globalComponents/NavBar';
import DisplayRecipes from '../../globalComponents/DisplayRecipes';
import { useAPIState } from '../../store/APIState';

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
      <DisplayRecipes recipes={recipeList} />
      </div>
    </>
  );
};

export default RecipePage;
