const selectors = require("../fixtures/selectors.json");
const logins = require("../fixtures/login.json");

it("Should be on the main page", () => {
  
  logins.forEach(login=>{
    cy.visit("/admin/");
    cy.get(selectors.login).type(login.login);
    cy.get(selectors.pass).type(login.pass);
    cy.get(selectors.authButton).click();
    cy.contains(login.expected).should("be.visible");
  })
});