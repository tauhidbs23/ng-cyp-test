describe('Users Page:', () => {
  it('should visit User page', () => {
    cy.visit('/users');
  });

  it('should display the logo', () => {
    cy.getBySel('bs23Logo').should('have.text', 'BS23-USER-LIST');
  })

  it('should have users works', () => {
    cy.contains('Users List');
  });

  it('should click add new button', () => {
    cy.getBySel('addNew').should('have.text', 'Add New').click()
  });

  it('should have a title Add a new users', () => {
    cy.getBySel('addNewUser').should('have.text', 'Add a new users')
  });

  it('type user information', () => {
    cy.getBySel('nameInput')
      .type('John')
      .should('have.attr', 'data-validation', 'required')
      .and('have.class', 'active')
      .and('have.value', 'johnny')
    cy.getBySel('usernameInput').type('johnDow')
    cy.getBySel('emailInput').type('john@yopmail.com')
    cy.getBySel('phoneInput').type('01749913179')
    cy.getBySel('websiteInput').type('www.tauhid.com')
  });

  it('should submit add new form ', () => {
    cy.get('[data-cy=submitNewUserForm]').click()
  });

  it('new Style :: should show list page', () => {
    // cy.get('[data-cy=userListPage]').should('have.text', 'Users List')
    cy.getBySel('userListPage').should('have.text', 'Users List')
  });


  it('should visit user details page', () => {
    cy.visit('/users/details/1');
  });

  it('should have users details', () => {
    cy.get('h2').should('have.text', 'Users Details');
  });


});
