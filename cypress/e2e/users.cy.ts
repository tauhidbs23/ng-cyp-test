describe('Users Page:', () => {
  it('should visit User page', () => {
    cy.visit('/users');
  });

  it('should have users works', () => {
    cy.contains('Users List');
  });

  it('should display the logo', ()=>{
    cy.get('h1').should('have.text','BS23-USER-LIST');
  })


  it('should visit user details page', () => {
    cy.visit('/users/details/1');
  });

  it('should have users details', () => {
    cy.get('h2').should('have.text','Users Details');
  });


});
