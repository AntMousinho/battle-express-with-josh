describe('Testing index page: ', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('displays enter names heading, input fields and submit button', () => {
		cy.contains('Enter combatant names');
		cy.get('#player1-input').should('be.visible');
		cy.get('#player2-input').should('be.visible');
		cy.get('#submit-names').should('have.value', 'FIGHT!');
	})

	it('After submitting names, navigates to battle page', () => {
		cy.get('#player1-input').type('Antony');
		cy.get('#player2-input').type('Josh');
		cy.get('#submit-names').click();
		cy.url().should('include', '/battle');
	})
})

describe('Testing battle page: ', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.get('#player1-input').type('Antony');
		cy.get('#player2-input').type('Josh');
		cy.get('#submit-names').click();
	})

	it('displays player1 name and hp', () => {
		cy.contains('Antony')
		cy.get('#player1hp').contains('100');
	})

	it('displays player2 name and hp', () => {
		cy.contains('Josh')
		cy.get('#player2hp').contains('100');
	})

	it('displays whose turn it is', () => {
		cy.contains("Antony's turn")
	})

	it('displays attack button', () => {
		cy.get('attack-button').should('have.value', 'Attack');
	})
})