class HomePage{
 
    getNameBox(){
        return cy.get(':nth-child(1) > .form-control')
    }

    getSelectGender(){
        return cy.get('#exampleFormControlSelect1')
    }

    getTwoWayEditBox(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getEnterpreneaurButtton(){
        return cy.get('#inlineRadio3')
    }

    getShopButton(){
        return cy.get(':nth-child(2) > .nav-link')
    }

}
export default HomePage