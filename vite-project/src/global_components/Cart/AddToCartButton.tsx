
const AddToCartButton = ({ recipe, cart, setCart }) => {
  const handleClick = () => {
    setCart([...cart, recipe]);
  };
  return (
    <button onClick={handleClick}>Add to Cart</button>
  )
}

export default AddToCartButton

// const hej123 = ({ recipeList }) => {
//   const [cart, setCart] = useState<RecipeInterface[]>([]);

//<AddToCartButton recipe={recipe} cart={cart} setCart={setCart} />