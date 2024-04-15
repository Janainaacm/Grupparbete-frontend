describe('Searchbar', () => {
    it('passes', () => {
      cy.visit('http://localhost:5173/')

      cy.get('input').type('Kött{enter}')
      
      cy.get(':nth-child(1) > .recipe-info-container > .recipe-title')
       })
})