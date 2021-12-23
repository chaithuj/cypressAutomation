import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageObjects/HomePage";
import ProductPage from "../../../support/pageObjects/ProductPage";

Given('I open ecommerce site', () => {
    cy.visit(Cypress.env('url'))
})

When(`I add items to cart`, function () {
    const homePage = new HomePage()
    const productPage = new ProductPage()
    homePage.getNameBox().type(this.data.name)
    homePage.getSelectGender().select(this.data.gender)
    homePage.getTwoWayEditBox().should('have.value', this.data.name)
    homePage.getNameBox().should('have.attr', 'minlength', '2')
    homePage.getEnterpreneaurButtton().should('be.disabled')
    homePage.getShopButton().click()
    this.data.productName.forEach(function (element) {
        cy.selectProduct(element)
    })
    productPage.getCheckOutButton().click()
    cy.contains('Checkout').click()
})

Then(`select country submit and verify thankyou`, () => {
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({ force: true })
    cy.get('.ng-untouched > .btn').click()
    // cy.get('.alert').should('have.inc',"Thank you! Your order will be delivered in next few weeks :-).")
    cy.get('.alert').then(function (element) {
        const actualText = element.text()
        expect(actualText.includes("Success")).to.be.true
    })
})

When(`I fill the form`, function (dataTable) {
    const homePage = new HomePage()
    homePage.getNameBox().type(dataTable.rawTable[1][0])
    homePage.getSelectGender().select(dataTable.rawTable[1][1])
    homePage.getTwoWayEditBox().should('have.value', dataTable.rawTable[1][0])
    homePage.getNameBox().should('have.attr', 'minlength', '2')
    homePage.getEnterpreneaurButtton().should('be.disabled')
})