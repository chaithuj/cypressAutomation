/// <reference types="cypress"/>

import HomePage from "../../support/pageObjects/HomePage";
import ProductPage from "../../support/pageObjects/ProductPage";

describe('my first test' , function(){

    before(function (){
        cy.fixture('testData').then(function(data){
            this.data = data;
        })
    })

    it('doest not do much', function(){
        const homePage = new HomePage()
        const productPage = new ProductPage()
        cy.visit(Cypress.env('url'))
        homePage.getNameBox().type(this.data.name)

        homePage.getSelectGender().select(this.data.gender)
        homePage.getTwoWayEditBox().should('have.value' ,this.data.name)
        homePage.getNameBox().should('have.attr' ,'minlength','2')
        homePage.getEnterpreneaurButtton().should('be.disabled')
        homePage.getShopButton().click()
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
        productPage.getCheckOutButton().click()
        cy.contains('Checkout').click()

        cy.get('#country').type('India')
		cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('.ng-untouched > .btn').click()
        // cy.get('.alert').should('have.inc',"Thank you! Your order will be delivered in next few weeks :-).")
        cy.get('.alert').then(function(element){
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
    })

});