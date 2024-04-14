
import { useNavigate } from 'react-router'
import { useAPIState } from '../store/APIState';

interface EditRecipeProps{
  recipeID: string
  recipeName: string
}

const EditRecipeButton = (props: EditRecipeProps) => {
    const navigate = useNavigate();
    const { setRecipeIDState } = useAPIState();
   
    const handleClick = async () => {
        setRecipeIDState(props.recipeID)
        navigate(`/EditRecipe/${props.recipeName}`)
      };

  return (
    <button onClick={handleClick}style={{borderRadius:"5px"}}>Edit Recipe</button>
  )
}

export default EditRecipeButton