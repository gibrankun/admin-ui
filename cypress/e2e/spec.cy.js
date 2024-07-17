describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="form"]').should("exist")

    cy.get('input#email')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Enter your email')
      .type('admin@store.com').should('have.value', 'admin@store.com')

    cy.get('input#password')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Enter your password')
      .type('123456').should('have.value', '123456')   

    cy.get('[data-testid="submit"]').click()

    cy.get('div.home')
    .should('be.visible')

    cy.get('div.sidebar')
    .should('be.visible')

    cy.get('[data-testid="category"]').click()

    cy.url().should('include', '/categories')
    
    cy.get('[data-testid="link"]').click()

    cy.url().should('include', '/categories/new')

    cy.get('input#name')
    .type('Appetizer')

    cy.get('[data-testid="submit"]').click()

    cy.get('.MuiDataGrid-virtualScrollerRenderZone').should('be.visible');

    // Temukan baris dengan data 'Appetizer'
    cy.contains('.MuiDataGrid-row', 'Appetizer').as('appetizerRow');

    // Pastikan baris 'Appetizer' ada di dalam tabel
    cy.get('@appetizerRow').should('exist');

    // Klik tombol Delete pada baris 'Appetizer'
    cy.get('@appetizerRow').within(() => {
      cy.get('.deleteButton').click();
    });

    // Verifikasi bahwa baris 'Appetizer' tidak lagi ada di dalam tabel
    cy.contains('.MuiDataGrid-row', 'Appetizer').should('not.exist');
  })
})