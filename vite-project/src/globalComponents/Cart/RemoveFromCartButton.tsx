import { useCartState } from "../../store/CartState";
import { RiDeleteBin6Line } from 'react-icons/ri'

const RemoveFromCartButton = ({ recipe }) => {
  const removeFromCart = useCartState(state => state.RemoveFromCart);
  

  const handleClick = () => {
    removeFromCart(recipe._id);
  };
  
  return (
    <button onClick={handleClick}><RiDeleteBin6Line size={20} /></button>
  );
};

export default RemoveFromCartButton;

