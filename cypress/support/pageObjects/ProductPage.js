class ProductPage {

    getProductTitle(){
        return cy.get('h4.card-title')
    }

    getAddtpCartButton(){
        return cy.get('button.btn.btn-info')
    }
    getCheckOutButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    
}
export default ProductPage