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

    cy.wait(3000);

    cy.get('[data-testid="category"]').click()

    cy.url().should('include', '/categories')

    cy.wait(2000);
    
    cy.get('[data-testid="link"]').click();

    cy.url().should('include', '/categories/new');

    cy.wait(2000);

    cy.get('input#name')
      .type('Appetizer');

    cy.wait(1000);

    cy.get('[data-testid="submit"]').click();

    // Tunggu sebentar untuk memastikan data dimuat
    cy.wait(1000);

    cy.get('.MuiDataGrid-virtualScrollerRenderZone').should('be.visible');

    // Temukan baris dengan data 'Appetizer'
    cy.contains('.MuiDataGrid-row', 'Appetizer').as('appetizerRow');

    cy.wait(1000);

    // Pastikan baris 'Appetizer' ada di dalam tabel
    cy.get('@appetizerRow').should('exist');

    // Tunggu sebentar sebelum mengklik tombol delete
    cy.wait(500);

    cy.get('@appetizerRow').within(() => {
      cy.get('.deleteButton').click();
    });

    // Tunggu sebentar untuk memastikan baris dihapus

    // Verifikasi bahwa baris 'Appetizer' tidak lagi ada di dalam tabel
    cy.contains('.MuiDataGrid-row', 'Appetizer').should('not.exist');

    cy.reload();

    // Pastikan halaman sudah dimuat kembali
    cy.get('.MuiDataGrid-virtualScrollerRenderZone').should('be.visible');
  })
})