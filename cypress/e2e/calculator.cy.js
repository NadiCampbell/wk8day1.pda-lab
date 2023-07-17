describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should display results of operation', () => {
    cy.get('#number1').click();
    cy.get('[data-testid="operator-add"]').click();
    cy.get('#number3').click();
    cy.get('[data-testid="operator-equals"]').click();
    cy.get('.display').should('contain', '4')
  })
  
  it('can chain together multiple operations', () => {
    cy.get('#number1').click();

    cy.get('[data-testid="operator-add"]').click();
    
    cy.get('#number3').click();
    
    cy.get('[data-testid="operator-subtract"]').click();
    
    cy.get('#number2').click();
    
    cy.get('[data-testid="operator-equals"]').click();
    
    cy.get('.display').should('contain', '2')
  })
  
  it('can display positive output', () => {
    cy.get('#number6').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '12')
  })
  
  it('can display negative output', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })
  
  it('can display decimals', () => {
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1.3')
  })
  
  it('can display large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '999999')
  })
  
  it('can display Error instead of infinity', () => {
    cy.get('#number2').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error')
  })
})