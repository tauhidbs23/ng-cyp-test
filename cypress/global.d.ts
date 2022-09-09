/// <reference types="cypress" />

declare namespace Cypress {

  type dbQueryArg = {
    entity: string;
    query: object | [object];
  };


  interface Chainable {
    /**
     *  Window object with additional properties used during test.
     */

    getBySel(dataTestAttribute: string, args?: any): Chainable<JQuery<HTMLElement>>;
    getBySelLike(dataTestPrefixAttribute: string, args?: any): Chainable<JQuery<HTMLElement>>;
  }
}
