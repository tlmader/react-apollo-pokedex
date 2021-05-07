describe('Details', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');

    cy.getByTestId('search-input').type('ditto').should('have.value', 'ditto');

    cy.contains('Ditto').click();
  });

  it('Displays Pokemon details', () => {
    cy.contains('132');
    cy.contains('Normal');
    cy.contains('Base Experience');
    cy.contains('101 XP');
    cy.contains('Height');
    cy.contains('0.3m');
    cy.contains('Weight');
    cy.contains('4kg');
    cy.contains('HP');
    cy.contains('48');
    cy.contains('Attack');
    cy.contains('48');
    cy.contains('Defense');
    cy.contains('48');
    cy.contains('Special Attack');
    cy.contains('48');
    cy.contains('Special Defense');
    cy.contains('48');
    cy.contains('Speed');
    cy.contains('48');
  });

  it('Displays Pokemon abilities', () => {
    cy.contains('Possible Abilities (2)');
    cy.contains('Limber');
    cy.contains('Imposter');
  });

  it('Displays Pokemon held items', () => {
    cy.contains('Held Items (2)');
    cy.contains('Metal Powder');
    cy.contains('Quick Powder');
  });

  it('Displays Pokemon learnable moves', () => {
    cy.contains('Learnable Moves (1)');
    cy.contains('Transform');
  });
});
