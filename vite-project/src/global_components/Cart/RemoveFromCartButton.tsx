
const RemoveFromCartButton = ({ recipe, cart, setCart }) => {
  const handleClick = () => {
    setCart(cart.filter(item => item !== recipe));
  };

  return (
    <button onClick={handleClick}>Remove from Cart</button>
  );
};

export default RemoveFromCartButton;

//<RemoveFromCartButton recipe={recipe} cart={cart} setCart={setCart} />