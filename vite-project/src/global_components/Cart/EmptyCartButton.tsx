
const EmptyCartButton = ({ setCart }) => {
  const handleClick = () => {
    setCart([]);
  };

  return (
    <button onClick={handleClick}>Empty Cart</button>
  );
};

export default EmptyCartButton;

//<EmptyCartButton setCart={setCart} />