/// <reference types="cypress"/>

describe('my first test' , function(){

    it('doest not do much', function(){
        cy.request('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty').then(function(response){
            cy.log(response.body)
        })
       // cy.request('POST' , 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty' ,'body')
    })

});