it('displays and filters transactions', () => {
  cy.visit('http://127.0.0.1:8080')

  cy.contains('loading', { matchCase: false })

  cy.contains('Transaction History', { matchCase: false })

  cy.get('table').find('tr').should('have.length', 6)

  cy.contains('Show More').click()

  cy.get('table').find('tr').should('have.length', 11)

  cy.get('select').select('10 Smallest Transactions')

  cy.get('table').find('tr').should('have.length', 6)

  cy.get('select').select('10 Biggest Transactions')

  cy.get('table').find('tr').should('have.length', 6)
})
