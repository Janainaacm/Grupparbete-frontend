describe('BuyRecipesandCocktail', () => {
    it('passes', () => {
      cy.visit('http://localhost:5173/')

      cy.get('[href="/Recept"]').click()

      cy.get(':nth-child(1) > .recipe-info-container > .recipe-title').click()

      cy.get('.card-body > :nth-child(6)').click()

      cy.get('.btn > div > img').click()

      for (let i = 0; i < 4; i++) {
      cy.get('.navbar-nav > #modal > .shoppingCart > .cart-products > .cart-product > :nth-child(3)').click()
      }
      
      cy.get('.navbar-nav > #modal > .shoppingCart > .cart-products > .checkout-clear > :nth-child(4)').click()

      cy.get('.card-body > :nth-child(8)').click()

      cy.get('.btn-success').click()

      cy.get('.btn-primary').click()

      cy.get('.btn > div > img').click()


      cy.on('window:alert', (text) => {
        expect(text).to.contains('Tack för din beställning!')
      })
      cy.get('.navbar-nav > #modal > .shoppingCart > .cart-products > .checkout-clear > :nth-child(3)').click()
      
      })
})