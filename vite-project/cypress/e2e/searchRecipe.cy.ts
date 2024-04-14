describe('Searchbar', () => {
    it('passes', () => {
      cy.visit('http://localhost:5173/')

      cy.get('input').type('Kött{enter}')
      
      cy.contains('Köttbullar')
       })
})