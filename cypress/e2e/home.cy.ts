describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/home')
    cy.contains('Welcome')
    cy.contains('That is users list')
  })
})
