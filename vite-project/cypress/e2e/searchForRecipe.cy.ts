describe('first test', () => {
    it('passes', () => {
      cy.visit('http://localhost:5173/')
  
      cy.contains("Cocktails").click()

      cy.get(':nth-child(3) > button > img').click()

      cy.contains('varukorg').click()

      cy.get('.btn > div > img').click()

      cy.get('.navbar-nav > #modal > .shoppingCart > .cart-products > .checkout-clear > :nth-child(3)').click()
    })
  })