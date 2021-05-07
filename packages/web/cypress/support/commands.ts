// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     */
    getByTestId(selector: string): Chainable;
  }
}

Cypress.Commands.add('getByTestId', (selector: string, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args);
});
