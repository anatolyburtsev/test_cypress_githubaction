describe('Google', () => {
    it('has input field', () => {
        cy.visit('https://google.com')
            .get('input[type=text]') // find an input field
            .type('my text')  // type 'my text'
            .should('have.value','my text') // assert that input value is 'my text'
    })
})