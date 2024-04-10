describe('first test', () => {
    it('passes', () => {
      cy.visit('http://localhost:5173/')
  
      cy.visit('http://localhost:5173/Recept')
      cy.wait(10)
    //   cy.get('[href="/Recept"]').click()
      
      //cy.url().should('include', '/commands/actions')
  
      //cy.get('.action-email').type('fake@email.com')
  
      //cy.get('.action-email').should('have.value', 'fake@email.com')
    })
  })

//