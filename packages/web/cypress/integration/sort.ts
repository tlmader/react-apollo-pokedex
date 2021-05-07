describe('Sort', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Sorts Pokemon by order', () => {
    // Toggle back and forth to order
    cy.getByTestId('name-radio-button').click();
    cy.getByTestId('order-radio-button').click();

    cy.getByTestId('pokemon-list').within(() => {
      cy.contains('1118 Pokémon found!');

      cy.contains('Bulbasaur');
      cy.contains('1');
      cy.contains('Grass/Poison');

      cy.contains('Ivysaur');
      cy.contains('2');
      cy.contains('Grass/Poison');

      cy.contains('Venusaur');
      cy.contains('3');
      cy.contains('Grass/Poison');
    });
  });

  it('Sorts Pokemon by name', () => {
    cy.getByTestId('name-radio-button').click();

    cy.getByTestId('pokemon-list').within(() => {
      cy.contains('1118 Pokémon found!');

      cy.contains('Abomasnow');
      cy.contains('460');
      cy.contains('Grass/Ice');

      cy.contains('Abra');
      cy.contains('63');
      cy.contains('Psychic');

      cy.contains('Absol');
      cy.contains('359');
      cy.contains('Dark');
    });
  });
});
