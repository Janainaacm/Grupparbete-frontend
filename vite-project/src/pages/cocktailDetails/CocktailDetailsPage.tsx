import CocktailDetails from "./components/CocktailDetails";

const CocktailDetailsPage = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}></div>

      <div>
        <CocktailDetails />
      </div>

      <div
        style={{
          justifyContent: "center",
          width: "100%",
          padding: "10px",
          height: "50px",
        }}
      ></div>
    </div>
  );
};

export default CocktailDetailsPage;
