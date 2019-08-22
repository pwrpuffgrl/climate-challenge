describe('Climate Challenge', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  describe('Landing', () => {
    it('shows the correct browser title', () => {
      cy.title().should('include', 'Climate Challenge');
    });
    it('navigates to login on login click', () => {
      cy.get('[type="link"]').click();
      cy.location('pathname').should('be', '/login');
    });
  });

  describe('Create', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/create');
    });
    it('shows the correct header text', () => {
      cy.get('[data-cy="header-title"]').should('contain', 'CREATE');
    });
    it('shows an error if invalid input', () => {
      cy.get('form [data-cy="submit-button"]').click();
      cy.get('form [data-cy="error"]').should('have.length', 1);
      cy.get('form [data-cy="error"]').should(
        'contain',
        'Please enter a title'
      );
    });

    it('creates a new challenge', () => {
      cy.get('form [data-cy="input-title"]').type('new title');
      cy.get('form [data-cy="input-rules"]').type('rules for this challenge');
      cy.get('form [data-cy="input-tips"]').type('here are some tips');
      cy.get('form [data-cy="input-duration"]').select('5');
      cy.get('form [data-cy="input-category"]').select('waste');
      // cy.get('form [data-cy="checkbox"]').check();

      cy.get('form [data-cy="submit-button"]').click();
      cy.location('pathname').should('be', '/challenges');
    });
  });
});
