import {fakeUser} from '../support/fake-data';
import {apiUrl} from '../support/utils/utils'

describe('Users Page:', () => {
  it('should visit User page', () => {
    cy.visit('/users');

    cy.intercept({method: 'GET', url: `${apiUrl}/users`}).as('getUsers')

    cy.wait('@getUsers').its('response.statusCode').should('equal', 200)
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
    cy.getBySel('nameInput').type(fakeUser.name)
    // .should('have.attr', 'data-validation', 'required')
    // .and('have.class', 'active')
    // .and('have.value', 'johnny')
    cy.getBySel('usernameInput').type(fakeUser.userName)
    cy.getBySel('emailInput').type(fakeUser.email)
    cy.getBySel('phoneInput').type(fakeUser.phoneNumber)
    cy.getBySel('websiteInput').type(fakeUser.website)
  });

  it('should submit add new form ', () => {
    cy.get('[data-cy=submitNewUserForm]').click()

    cy.intercept({method: 'POST', url: `${apiUrl}/users`}).as('postUser')

    cy.wait('@postUser').its('response.statusCode').should('equal', 201)
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
