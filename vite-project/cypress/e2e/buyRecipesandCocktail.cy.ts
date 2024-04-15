describe('BuyRecipesandCocktail', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get('#receptbutton').click()

    cy.get(':nth-child(1) > .recipe-info-container > .recipe-title').click()

    cy.get('#addrecipetocart').click()

    cy.get('.btn-success').click()

    cy.get('.btn-danger').click()

    cy.get('#cartbutton').click()
     for (let i = 0; i < 4; i++) {
     cy.get('.navbar-nav > #modal > .shoppingCart > .cart-products > .product-container > :nth-child(1) > .product-body > .cart-amount > #increasequantitybutton').click()
    }
    
    cy.get('.navbar-nav > #modal > .shoppingCart > .content-container > .checkout-clear > .buy-button').click()

    cy.on('window:alert', (text) => {
    expect(text).to.contains('Tack för din beställning!')
     })
    
     })
})