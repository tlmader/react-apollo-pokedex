describe('Filter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Filters by Pokemon type', () => {
    cy.getByTestId('type-input')
      // Down arrow + enter selects the first option
      .type('normal{downarrow}{enter}')
      .should('have.value', 'Normal');

    cy.getByTestId('pokemon-list').within(() => {
      cy.contains('130 Pokémon found!');

      cy.contains('Pidgey');
      cy.contains('16');
      cy.contains('Normal/Flying');

      cy.contains('Pidgeotto');
      cy.contains('17');
      cy.contains('Normal/Flying');

      cy.contains('Pidgeot');
      cy.contains('18');
      cy.contains('Normal/Flying');
    });
  });

  it('Filters by Pokemon species', () => {
    cy.getByTestId('species-input')
      .type('ditto{downarrow}{enter}')
      .should('have.value', 'Ditto');

    cy.getByTestId('pokemon-list').within(() => {
      cy.contains('1 Pokémon found!');

      cy.contains('Ditto');
      cy.contains('132');
      cy.contains('Normal');
    });
  });

  it('Filters by Pokemon type and species', () => {});
});
