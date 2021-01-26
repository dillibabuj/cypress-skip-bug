/// <reference types="cypress" /> 

describe('test before block with skip on first test',()=>{
    before(()=>{
        cy.log('Before All Tests')
        console.log('Before All Tests')
    })
    beforeEach(()=>{
        cy.log('Before Each Test')
        console.log('Before Each Test')
    })

    it('First Test',()=>{
        cy.log('In First Test')
        console.log('In First Test')
    })
    it.skip('Second Test',()=>{
        cy.log('In Second Test')
        console.log('In Second Test')
    })
})