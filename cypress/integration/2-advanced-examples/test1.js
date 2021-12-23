/// <reference types="cypress"/>

describe('my first test' , function(){

    it('doest not do much', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)
        // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index , $list) => {
            const textveg = $el.find('h4.product-name').text()
            if(textveg.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.brand').should('have.text' ,'GREENKART')
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })
        
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()

        cy.get('.chkAgree').check().should('be.checked')
        cy.get('.chkAgree').uncheck().should('not.be.checked')
        cy.get('select').select('India').should('have.value','India')

    })

});