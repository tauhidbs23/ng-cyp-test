describe('Users', () => {
  it('should visit User page', () => {
    cy.visit('/users');
  });

  it('should have users works', () => {
    cy.contains('users works!')
    // cy.get("a[href='/adventure/1']").click();
    // cy.get('#title').should('have.text', 'Breithorn');

  });

});
