describe("AddRecipe", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");

    cy.get("#adminbutton").click();

    cy.get("#addrecipebutton").click();

    cy.get("#recipenamefield").type("Beste macka");

    cy.get("#descriptionfield").type("beste mackan på hele våres side");

    cy.get("#timefield").type("2");

    cy.get("#pictureurlfield").type(
      "https://pbs.twimg.com/media/EfzEXTOXgAMcYoq.jpg:large"
    );

    cy.get("#instructionsfield").type("Ta mackan, bre mackan, ät mackan");

    cy.get("select").select(1);

    cy.get("#pricefield").type("5000");

    cy.get("#ingredientnamefield").type("macka");

    cy.get("#ingredientamountfield").type("1");

    cy.get("#ingredientunitfield").type("st");

    cy.get("#addingredientbutton").click();

    cy.get(":nth-child(17) > #ingredientnamefield").type("köttskiva");

    cy.get(":nth-child(17) > #ingredientamountfield").type("1");

    cy.get(":nth-child(17) > #ingredientunitfield").type("st");

    cy.get("#addrecipebutton").click();

    cy.on("window:alert", (text) => {
      expect(text).to.contains("Recept tillagt");
    });

    cy.get("#adminbutton").click();

    
  });
});
