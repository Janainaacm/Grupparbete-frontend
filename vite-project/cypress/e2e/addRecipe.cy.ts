describe("AddRecipe", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");

    cy.get("#adminbutton").click();

    cy.get(".add-recipe-button").click();

    cy.get("#recipenamefield").type("Test Borgir");

    cy.get("#descriptionfield").type("borgir!");

    cy.get("#timefield").type("2");

    cy.get("#pictureurlfield").type(
      "https://i.pinimg.com/736x/1c/af/eb/1cafeb19a7b63a3c0fe2e9b7c486b2b9.jpg"
    );

    cy.get("#instructionsfield").type("Testa borgir, Laga borgir, ät borgir");

    cy.get("select").select(1);

    cy.get("#pricefield").type("5");

    cy.get("#ingredientnamefield").type("borgir bröd");

    cy.get("#ingredientamountfield").type("1");

    cy.get("#ingredientunitfield").type("st");

    cy.get("#addingredientbutton").click();

    cy.get(":nth-child(2) > .add-recipe-ingredients-oneline > #ingredientnamefield").type("borgir kött");

    cy.get(":nth-child(2) > .add-recipe-ingredients-oneline > #ingredientamountfield").type("1");

    cy.get(":nth-child(2) > .add-recipe-ingredients-oneline > #ingredientunitfield").type("st");

    cy.get("#addrecipebutton").click();

    cy.on("window:alert", (text) => {
      expect(text).to.contains("Recept tillagt");
    });

    cy.get("#adminbutton").click();
    
  });
});