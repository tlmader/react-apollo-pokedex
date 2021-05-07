describe('List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Selects Pokemon', () => {
    cy.contains('Bulbasaur').click();
  });

  it('Shows the complete Pokemon count', () => {
    cy.contains('1118 Pokémon found!');
  });

  it('Searches Pokemon by name', () => {
    cy.getByTestId('search-input').type('ditto').should('have.value', 'ditto');

    cy.getByTestId('pokemon-list').within(() => {
      cy.contains('1 Pokémon found!');

      cy.contains('Ditto');
      cy.contains('132');
      cy.contains('Normal');
    });
  });

  it('Searches Pokemon by some characters in their name', () => {
    cy.getByTestId('search-input').type('dit').should('have.value', 'dit');

    cy.getByTestId('pokemon-list').within(() => {
      cy.contains('3 Pokémon found!');

      cy.contains('Ditto');
      cy.contains('132');
      cy.contains('Normal');

      cy.contains('Meditite');
      cy.contains('307');
      cy.contains('Fighting/Psychic');

      cy.contains('Salandit');
      cy.contains('757');
      cy.contains('Poison/Fire');
    });
  });
});
